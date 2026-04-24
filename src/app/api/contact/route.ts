import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  jurisdiction?: string;
  message?: string;
  website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\-().\s]{7,20}$/;
const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 5;
const ALERT_COOLDOWN_MS = 15 * 60 * 1000;

const ipHits = new Map<string, number[]>();
const ipLastAlertAt = new Map<string, number>();

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function allowRequest(ip: string): boolean {
  const now = Date.now();
  const existing = ipHits.get(ip) ?? [];
  const recent = existing.filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    ipHits.set(ip, recent);
    return false;
  }
  recent.push(now);
  ipHits.set(ip, recent);
  return true;
}

async function sendRateLimitAlert(ip: string, count: number) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!resendApiKey || !from || !to) return;

  const now = Date.now();
  const last = ipLastAlertAt.get(ip) ?? 0;
  if (now - last < ALERT_COOLDOWN_MS) return;
  ipLastAlertAt.set(ip, now);

  const resend = new Resend(resendApiKey);
  const when = new Date(now).toISOString();
  await resend.emails.send({
    from,
    to: [to],
    subject: `Rate-limit alert: ${ip}`,
    text: [
      "Potential spam activity detected on /api/contact.",
      `IP: ${ip}`,
      `Requests in last minute: ${count}`,
      `Timestamp (UTC): ${when}`,
    ].join("\n"),
  });
}

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function validate(payload: ContactPayload): Record<string, string> {
  const errors: Record<string, string> = {};
  const name = clean(payload.name);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const projectType = clean(payload.projectType);
  const message = clean(payload.message);

  if (name.length < 2) errors.name = "Name is required.";
  if (!EMAIL_RE.test(email)) errors.email = "Valid email is required.";
  if (!projectType) errors.projectType = "Project type is required.";
  if (phone && !PHONE_RE.test(phone)) errors.phone = "Phone format looks invalid.";
  if (message && message.length < 10) errors.message = "Message must be at least 10 characters if provided.";
  return errors;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (!allowRequest(ip)) {
    const now = Date.now();
    const count = (ipHits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS).length;
    sendRateLimitAlert(ip, count).catch((error) => {
      const details = error instanceof Error ? error.message : "Unknown alert error";
      console.error("[contact-api] alert failure:", details);
    });
    return NextResponse.json(
      { ok: false, message: "Too many submissions from this IP. Please wait 1 minute and try again." },
      { status: 429 },
    );
  }

  const body = (await request.json().catch(() => ({}))) as ContactPayload;
  if (clean(body.website)) {
    // Honeypot filled: pretend success to avoid bot retries.
    return NextResponse.json({ ok: true, message: "Inquiry sent." });
  }

  const errors = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please review the highlighted fields.", errors },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!resendApiKey || !from || !to) {
    return NextResponse.json(
      { ok: false, message: "Email service is not configured yet." },
      { status: 500 },
    );
  }

  const resend = new Resend(resendApiKey);

  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const projectType = clean(body.projectType);
  const jurisdiction = clean(body.jurisdiction);
  const message = clean(body.message);

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Project type: ${projectType}`,
    `Location / jurisdiction: ${jurisdiction || "Not provided"}`,
    "",
    "What do you need:",
    message || "Not provided",
  ];
  const escapedMessage = escapeHtml(message || "Not provided").replace(/\n/g, "<br/>");

  try {
    const notifyResult = await resend.emails.send({
      from,
      to: [to],
      subject: `New inquiry: ${projectType}`,
      replyTo: email,
      text: lines.join("\n"),
      html: `
        <h2>New inquiry from website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Project type:</strong> ${escapeHtml(projectType)}</p>
        <p><strong>Location / jurisdiction:</strong> ${escapeHtml(jurisdiction || "Not provided")}</p>
        <p><strong>What do you need:</strong><br/>${escapedMessage}</p>
      `,
    });

    if ((notifyResult as { error?: unknown }).error) {
      throw new Error(
        `Resend notify failed: ${JSON.stringify((notifyResult as { error?: unknown }).error)}`,
      );
    }

    const confirmResult = await resend.emails.send({
      from,
      to: [email],
      subject: "We received your inquiry",
      text:
        "Thanks for contacting Nationwide Engineering Plans. We received your inquiry and will get back to you shortly.",
    });
    if ((confirmResult as { error?: unknown }).error) {
      throw new Error(
        `Resend confirm failed: ${JSON.stringify((confirmResult as { error?: unknown }).error)}`,
      );
    }

    return NextResponse.json({ ok: true, message: "Thanks - your inquiry was sent successfully." });
  } catch (error) {
    const details = error instanceof Error ? error.message : "Unknown error";
    console.error("[contact-api] send failure:", details);
    return NextResponse.json(
      {
        ok: false,
        message:
          process.env.NODE_ENV === "development"
            ? `Unable to send: ${details}`
            : "Unable to send right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
