import { siteConfig } from "@/config/site";

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/** Public origin for images and links in outbound email (no trailing slash). */
export function emailPublicBaseUrl(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url).trim();
  return raw.replace(/\/+$/, "");
}

function firstNameFromFullName(full: string): string {
  const part = full.trim().split(/\s+/)[0] ?? "";
  if (part.length < 2) return "there";
  const lower = part.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

const BRAND_NAVY = "#0f293c";
const BRAND_RED = "#e63946";
const MUTED = "#3d5566";
const BORDER = "#dce3e8";

export function contactConfirmationSubject(): string {
  return `We received your inquiry — ${siteConfig.name}`;
}

export function contactConfirmationPlainText(fullName: string): string {
  const first = firstNameFromFullName(fullName);
  const { name, contact } = siteConfig;
  const site = emailPublicBaseUrl();
  const wa = `https://wa.me/${contact.whatsappDigits}`;
  const tel = `tel:+${contact.phoneDigits}`;

  return [
    `Hi ${first},`,
    "",
    `Thank you for contacting ${name}. We received your message from our website contact form and a member of our team will review it shortly.`,
    "",
    "What happens next:",
    `- We typically reply by email. If you shared a phone number and a call is easier, we may reach out that way.`,
    `- Need to add photos, files, or more detail? Email ${contact.email} — that is our main inbox and the clearest place to send updates.`,
    "",
    "If your request is urgent, you can also reach us directly:",
    "",
    name,
    `Website: ${site}`,
    `Email: ${contact.email}`,
    `Cell: ${contact.phoneDisplay} (${tel})`,
    `${contact.whatsappLabel}: ${contact.whatsappDisplay} (${wa})`,
    "",
    "—",
    name,
  ].join("\n");
}

export function contactConfirmationHtml(fullName: string): string {
  const first = escapeHtml(firstNameFromFullName(fullName));
  const { name, brand, contact } = siteConfig;
  const base = emailPublicBaseUrl();
  const logoUrl = `${base}${brand.logoSrc}`;
  const siteLabel = escapeHtml(base.replace(/^https?:\/\//, ""));
  const mail = escapeHtml(contact.email);
  const telDisplay = escapeHtml(contact.phoneDisplay);
  const telHref = `tel:+${contact.phoneDigits}`;
  const waHref = `https://wa.me/${contact.whatsappDigits}`;
  const waDisplay = escapeHtml(contact.whatsappDisplay);

  const company = escapeHtml(name);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${company}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;">
  <span style="display:none!important;visibility:hidden;mso-hide:all;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
    Your inquiry was received. We will reply soon.
  </span>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f6f8;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellspacing="0" cellpadding="0" style="max-width:560px;width:100%;background-color:#ffffff;border-radius:12px;border:1px solid ${BORDER};overflow:hidden;">
          <tr>
            <td style="padding:28px 28px 8px 28px;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
              <p style="margin:0 0 16px 0;font-size:17px;line-height:1.5;color:${BRAND_NAVY};">
                Hi ${first},
              </p>
              <p style="margin:0 0 14px 0;font-size:15px;line-height:1.6;color:${MUTED};">
                Thank you for contacting <strong style="color:${BRAND_NAVY};">${company}</strong>. We received your message from our website contact form and will review it shortly.
              </p>
              <p style="margin:0 0 8px 0;font-size:15px;line-height:1.6;color:${BRAND_NAVY};font-weight:600;">
                What happens next
              </p>
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin:0 0 18px 0;">
                <tr>
                  <td style="vertical-align:top;padding:0 10px 0 0;font-size:22px;line-height:1.2;color:${BRAND_RED};">•</td>
                  <td style="font-size:15px;line-height:1.55;color:${MUTED};padding-bottom:8px;">
                    We typically reply by email. If you shared a phone number and a call works better, we may reach you that way.
                  </td>
                </tr>
                <tr>
                  <td style="vertical-align:top;padding:0 10px 0 0;font-size:22px;line-height:1.2;color:${BRAND_RED};">•</td>
                  <td style="font-size:15px;line-height:1.55;color:${MUTED};">
                    Need to add photos, files, or more detail? Email us at
                    <a href="mailto:${mail}" style="color:#1565c0;text-decoration:underline;">${mail}</a>
                    — that is our main inbox.
                  </td>
                </tr>
              </table>
              <p style="margin:0 0 20px 0;font-size:15px;line-height:1.6;color:${MUTED};">
                If your request is urgent, call or message us using the numbers below.
              </p>
            </td>
          </tr>
          <tr>
            <td style="border-top:1px solid ${BORDER};padding:22px 28px 28px 28px;background-color:#fafbfc;">
              <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
                <tr>
                  <td style="padding-bottom:14px;">
                    <img src="${escapeHtml(logoUrl)}" alt="${escapeHtml(brand.logoAlt)}" width="240" style="display:block;max-width:240px;height:auto;border:0;" />
                  </td>
                </tr>
                <tr>
                  <td style="font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
                    <p style="margin:0 0 14px 0;font-size:16px;font-weight:700;color:${BRAND_NAVY};">${company}</p>
                    <p style="margin:0 0 6px 0;font-size:14px;line-height:1.6;color:${MUTED};">
                      <span style="color:${BRAND_NAVY};font-weight:600;">Website:</span>
                      <a href="${escapeHtml(base)}" style="color:#1565c0;text-decoration:underline;">${siteLabel}</a>
                    </p>
                    <p style="margin:0 0 6px 0;font-size:14px;line-height:1.6;color:${MUTED};">
                      <span style="color:${BRAND_NAVY};font-weight:600;">Email:</span>
                      <a href="mailto:${mail}" style="color:#1565c0;text-decoration:underline;">${mail}</a>
                    </p>
                    <p style="margin:0 0 6px 0;font-size:14px;line-height:1.6;color:${MUTED};">
                      <span style="color:${BRAND_NAVY};font-weight:600;">Cell:</span>
                      <a href="${escapeHtml(telHref)}" style="color:${MUTED};text-decoration:none;">${telDisplay}</a>
                    </p>
                    <p style="margin:0;font-size:14px;line-height:1.6;color:${MUTED};">
                      <span style="color:${BRAND_NAVY};font-weight:600;">${escapeHtml(contact.whatsappLabel)}:</span>
                      <a href="${escapeHtml(waHref)}" style="color:#1565c0;text-decoration:underline;">${waDisplay}</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <p style="margin:16px 0 0 0;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:12px;line-height:1.5;color:#6b7c89;max-width:560px;">
          This message was sent because someone used this email address on our contact form at ${siteLabel}. If that was not you, you can ignore this email.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
