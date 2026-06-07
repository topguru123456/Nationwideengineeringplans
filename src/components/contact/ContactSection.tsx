"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { OfficeMapEmbed } from "@/components/contact/OfficeMapEmbed";
import { OfficePhoneLinks } from "@/components/contact/OfficePhoneLinks";
import { siteConfig } from "@/config/site";

const wa = `https://wa.me/${siteConfig.contact.whatsappDigits}`;
const officePhones = [siteConfig.contact.phones.hq, siteConfig.contact.phones.ny] as const;
const MAX_MESSAGE_LENGTH = 4000;

type FormErrors = Record<string, string>;

/** Shared contact block — used on `/contact` */
export function ContactSection() {
  const { contact } = siteConfig;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const calendlyHref = useMemo(() => contact.calendlyUrl.trim(), [contact.calendlyUrl]);

  const validate = () => {
    const next: FormErrors = {};
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const phoneOk = !phone.trim() || /^[0-9+\-().\s]{7,20}$/.test(phone.trim());

    if (name.trim().length < 2) next.name = "Please enter your full name.";
    if (!emailOk) next.email = "Please enter a valid email address.";
    if (!projectType.trim()) next.projectType = "Please select project type.";
    if (!phoneOk) next.phone = "Phone format looks invalid.";
    if (message.trim() && message.trim().length < 10) {
      next.message = "Add a bit more detail (at least 10 characters) or leave it blank.";
    }
    if (message.trim().length > MAX_MESSAGE_LENGTH) {
      next.message = `Message must be ${MAX_MESSAGE_LENGTH.toLocaleString()} characters or fewer.`;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitMessage("");
    setSubmitState("idle");
    if (!validate()) return;

    setSubmitState("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          projectType,
          jurisdiction,
          message,
          website,
        }),
      });
      const payload = (await response.json()) as {
        ok: boolean;
        message: string;
        errors?: FormErrors;
      };

      if (!response.ok || !payload.ok) {
        setErrors(payload.errors ?? {});
        setSubmitMessage(payload.message || "Unable to send inquiry.");
        setSubmitState("error");
        return;
      }

      setName("");
      setEmail("");
      setPhone("");
      setProjectType("");
      setJurisdiction("");
      setMessage("");
      setWebsite("");
      setErrors({});
      setSubmitMessage(payload.message || "Inquiry sent successfully.");
      setSubmitState("success");
    } catch {
      setSubmitMessage("Something went wrong. Please try again.");
      setSubmitState("error");
    }
  };

  return (
    <div className="bg-[#f6f8fb]">
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-ink-faint)]">
          Contact
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--header-black)] sm:text-4xl">
          Let's scope your project properly
        </h1>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[var(--color-ink-muted)] sm:text-base">
          Share your project type, jurisdiction, and timeline. We return with a clear next-step recommendation, likely
          services, and the best meeting path for permit planning.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:pb-20">
        <div className="space-y-6 rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[0_4px_24px_rgba(15,39,68,0.06)] sm:p-8 lg:col-span-7">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-[var(--header-black)] sm:text-2xl">
              Send project details
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)] sm:text-[15px]">
              Send details directly from the website. You will receive a confirmation email after submission.
            </p>
          </div>

          <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit} noValidate>
            <label className="hidden" aria-hidden>
              Website
              <input
                tabIndex={-1}
                autoComplete="off"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-[var(--color-ink)]">
              Full name
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 rounded-lg border border-[var(--color-border)] bg-white px-3 text-sm outline-none transition focus:border-[var(--brand-red)] focus:ring-2 focus:ring-[var(--brand-red)]/20"
                placeholder="Your name"
              />
              {errors.name ? <span className="text-xs text-[var(--brand-red)]">{errors.name}</span> : null}
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-[var(--color-ink)]">
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 rounded-lg border border-[var(--color-border)] bg-white px-3 text-sm outline-none transition focus:border-[var(--brand-red)] focus:ring-2 focus:ring-[var(--brand-red)]/20"
                placeholder="you@company.com"
              />
              {errors.email ? <span className="text-xs text-[var(--brand-red)]">{errors.email}</span> : null}
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-[var(--color-ink)]">
              Phone (optional)
              <input
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-11 rounded-lg border border-[var(--color-border)] bg-white px-3 text-sm outline-none transition focus:border-[var(--brand-red)] focus:ring-2 focus:ring-[var(--brand-red)]/20"
                placeholder="(000) 000-0000"
              />
              {errors.phone ? <span className="text-xs text-[var(--brand-red)]">{errors.phone}</span> : null}
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-[var(--color-ink)]">
              Project type
              <select
                name="projectType"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="h-11 rounded-lg border border-[var(--color-border)] bg-white px-3 text-sm outline-none transition focus:border-[var(--brand-red)] focus:ring-2 focus:ring-[var(--brand-red)]/20"
              >
                <option value="" disabled>
                  Select project type
                </option>
                <option>Custom home</option>
                <option>Residential addition / remodel</option>
                <option>Commercial tenant improvement</option>
                <option>Site / civil support</option>
                <option>Other</option>
              </select>
              {errors.projectType ? (
                <span className="text-xs text-[var(--brand-red)]">{errors.projectType}</span>
              ) : null}
            </label>
            <label className="sm:col-span-2 grid gap-1.5 text-sm font-medium text-[var(--color-ink)]">
              Location / jurisdiction (optional)
              <input
                name="jurisdiction"
                value={jurisdiction}
                onChange={(e) => setJurisdiction(e.target.value)}
                className="h-11 rounded-lg border border-[var(--color-border)] bg-white px-3 text-sm outline-none transition focus:border-[var(--brand-red)] focus:ring-2 focus:ring-[var(--brand-red)]/20"
                placeholder="City, county, or AHJ"
              />
            </label>
            <label className="sm:col-span-2 grid gap-1.5 text-sm font-medium text-[var(--color-ink)]">
              What do you need? (optional)
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                maxLength={MAX_MESSAGE_LENGTH}
                className="rounded-lg border border-[var(--color-border)] bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[var(--brand-red)] focus:ring-2 focus:ring-[var(--brand-red)]/20"
                placeholder="Tell us your scope, timeline, and any files you already have."
              />
              {errors.message ? <span className="text-xs text-[var(--brand-red)]">{errors.message}</span> : null}
            </label>

            <div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-1">
              <button
                type="submit"
                disabled={submitState === "submitting"}
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--brand-red)] px-6 text-sm font-semibold text-white transition hover:brightness-110"
              >
                {submitState === "submitting" ? "Sending..." : "Send inquiry"}
              </button>
              <p className="text-xs text-[var(--color-ink-faint)] sm:text-sm">
                Prefer direct contact?{" "}
                <OfficePhoneLinks phones={officePhones} variant="inline" />
              </p>
            </div>
            {submitMessage ? (
              <p
                className={`sm:col-span-2 text-sm ${
                  submitState === "success" ? "text-emerald-700" : "text-[var(--brand-red)]"
                }`}
              >
                {submitMessage}
              </p>
            ) : null}
          </form>
        </div>

        <aside className="space-y-6 lg:col-span-5">
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[0_4px_24px_rgba(15,39,68,0.06)] sm:p-7">
            <h2 className="text-lg font-semibold tracking-tight text-[var(--header-black)]">Direct contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-ink-muted)] sm:text-[15px]">
              <li>
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
                  Email
                </span>
                <a className="font-semibold text-[var(--color-ink)] hover:text-[var(--brand-red)]" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
                  Phone
                </span>
                <OfficePhoneLinks phones={officePhones} variant="stacked" className="mt-2" />
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
                  WhatsApp
                </span>
                <a
                  className="font-semibold text-[var(--color-ink)] hover:text-[var(--brand-red)]"
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[0_4px_24px_rgba(15,39,68,0.06)] sm:p-7">
            <h2 className="text-lg font-semibold tracking-tight text-[var(--header-black)]">Book a call</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)] sm:text-[15px]">
              Use your live scheduling page to pick an available slot directly. No embedded preview.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={calendlyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#0f2744] px-5 text-sm font-semibold text-white transition hover:bg-[#18365e]"
              >
                Schedule call
              </Link>
              <Link
                href={calendlyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--color-border)] px-5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-ink-muted)]"
              >
                Open Calendly
              </Link>
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:pb-20">
        <h2 className="text-lg font-semibold tracking-tight text-[var(--header-black)]">Office location</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-muted)] sm:text-[15px]">
          Oregon headquarters — nationwide permit plan coordination from Portland, OR.
        </p>
        <div className="mt-5">
          <OfficeMapEmbed />
        </div>
      </section>
    </div>
  );
}
