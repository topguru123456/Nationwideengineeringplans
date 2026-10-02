import { telHref, type OfficePhone } from "@/lib/officePhones";

type Props = {
  phones: readonly OfficePhone[];
  /** Header utility bar — compact dotted number with a phone icon */
  variant?: "header" | "stacked" | "inline";
  className?: string;
  linkClassName?: string;
};

export function OfficePhoneLinks({
  phones,
  variant = "stacked",
  className = "",
  linkClassName = "",
}: Props) {
  if (variant === "header") {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-end sm:gap-x-5 ${className}`}>
        {phones.map((phone, i) => (
          <span key={phone.digits} className="inline-flex items-center gap-x-4">
            {i > 0 ? (
              <span className="hidden h-4 w-px shrink-0 bg-white/20 sm:inline-block" aria-hidden />
            ) : null}
            <a
              href={telHref(phone)}
              className={`inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide text-white/95 transition hover:text-white sm:text-[13px] ${linkClassName}`}
            >
              <svg className="shrink-0 text-white" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6.5 3h3l1.5 4.5-2 1.5c1.2 2.4 3.6 4.8 6 6l1.5-2L21 14v3a2 2 0 01-2.2 2A17 17 0 013 5.2 2 2 0 015 3z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">{phone.label}: </span>
              <span className="tabular-nums">{phone.displayDotted}</span>
            </a>
          </span>
        ))}
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <span className={className}>
        {phones.map((phone, i) => (
          <span key={phone.digits}>
            {i > 0 ? <span className="text-[var(--color-ink-faint)]"> · </span> : null}
            <a
              href={telHref(phone)}
              className={`font-semibold text-[var(--color-ink)] hover:text-[var(--brand-red)] ${linkClassName}`}
            >
              <span className="sr-only">{phone.label}: </span>
              {phone.display}
            </a>
          </span>
        ))}
      </span>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {phones.map((phone) => (
        <div key={phone.digits}>
          <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
            {phone.label}
          </span>
          <span className="mt-0.5 block text-[13px] font-medium text-[var(--color-ink-muted)]">{phone.region}</span>
          <a
            href={telHref(phone)}
            className={`mt-1 inline-block font-semibold text-[var(--color-ink)] hover:text-[var(--brand-red)] ${linkClassName}`}
          >
            {phone.display}
          </a>
        </div>
      ))}
    </div>
  );
}
