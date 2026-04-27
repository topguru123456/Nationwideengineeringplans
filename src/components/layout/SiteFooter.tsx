import Image from "next/image";
import Link from "next/link";
import { headerNav, siteConfig } from "@/config/site";

const iconMuted = "text-neutral-500";

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16v12H4V6zm0 0l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 3h3l1.5 4.5-2 1.5c1.2 2.4 3.6 4.8 6 6l1.5-2L21 14v3a2 2 0 01-2.2 2A17 17 0 013 5.2 2 2 0 015 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const COPYRIGHT_YEAR = 2026;

export function SiteFooter() {
  const { contact, name, brand, footerIntro, mapLocationLabel, openStreetMapEmbedUrl } = siteConfig;
  const tel = `tel:+${contact.phoneDigits}`;
  const wa = `https://wa.me/${contact.whatsappDigits}`;

  return (
    <footer className="text-neutral-900">
      {openStreetMapEmbedUrl ? (
        <div className="border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
            <h2 className="text-center text-xs font-bold uppercase tracking-[0.16em] text-[#1e3a5f] sm:text-left">
              Location
            </h2>
            <p className="mt-2 text-center text-sm text-neutral-600 sm:text-left">{mapLocationLabel}</p>
            <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm">
              <div className="relative aspect-[2/1] w-full min-h-[200px] max-h-[320px] sm:aspect-[21/9]">
                <iframe
                  title="Map: office and service area"
                  src={openStreetMapEmbedUrl}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <p className="mt-2 text-center text-[11px] text-neutral-400 sm:text-left">
              Map:{" "}
              <a
                className="font-medium text-neutral-500 underline-offset-2 hover:underline"
                href="https://www.openstreetmap.org/copyright"
                target="_blank"
                rel="noopener noreferrer"
              >
                © OpenStreetMap
              </a>{" "}
              contributors
            </p>
          </div>
        </div>
      ) : null}

      <div className="border-t border-neutral-200 bg-[#f0f3f6] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-10">
            <div className="lg:col-span-6">
              <Link href="/" className="inline-block transition duration-200 hover:opacity-90">
                <Image
                  src={brand.logoSrc}
                  alt={brand.logoAlt}
                  width={440}
                  height={132}
                  className="h-[5rem] w-auto sm:h-[5.5rem]"
                />
              </Link>
              <p className="mt-5 max-w-xl text-[12px] font-semibold leading-relaxed tracking-tight text-neutral-800 sm:text-[13px]">
                {footerIntro}
              </p>
              <nav
                aria-label="Site sections"
                className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#1e3a5f] sm:text-[11px] sm:tracking-[0.14em]"
              >
                {headerNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-[var(--brand-red)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:col-span-6 lg:items-start lg:gap-12">
              <div>
                <p className="text-center text-sm font-semibold text-neutral-800 sm:text-left sm:text-base">
                  Licensed in{" "}
                  <span className="text-xl font-extrabold tracking-tight text-[#b91c1c] sm:text-2xl">50</span>{" "}
                  <span className="font-bold text-[#1e3a5f]">states</span>
                </p>
                <p className="mt-1.5 text-center text-xs font-medium text-neutral-500 sm:text-left sm:text-[13px]">
                  Engineering plan services wherever your project is located.
                </p>
                <div className="relative mx-auto mt-5 aspect-[5/3] w-full max-w-[200px] sm:mx-0 sm:max-w-[220px]">
                  <Image
                    src="/assets/images/us.png"
                    alt="United States map"
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 640px) 200px, 220px"
                  />
                </div>
              </div>

              <div className="sm:pt-1">
                <h2 className="text-center text-xs font-bold uppercase tracking-[0.14em] text-neutral-900 sm:text-left">
                  Get in touch
                </h2>
                <ul className="mt-3 space-y-3 text-[13px] font-semibold sm:text-sm">
                  <li>
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-start gap-2.5 text-neutral-800 transition hover:text-neutral-950"
                    >
                      <IconMail className={`mt-0.5 shrink-0 ${iconMuted}`} />
                      <span className="break-all font-semibold">{contact.email}</span>
                    </a>
                  </li>
                  <li>
                    <a href={tel} className="flex items-start gap-2.5 text-neutral-800 transition hover:text-neutral-950">
                      <IconPhone className={`mt-0.5 shrink-0 ${iconMuted}`} />
                      <span className="font-semibold">{contact.phoneDisplay}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2.5 text-neutral-800 transition hover:text-neutral-950"
                    >
                      <IconWhatsApp className={`mt-0.5 shrink-0 ${iconMuted}`} />
                      <span className="font-semibold">
                        {contact.whatsappLabel}: {contact.whatsappDisplay}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800/80 bg-neutral-950 px-4 py-3.5 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <p className="text-[13px] leading-snug text-white/80">
            <span className="text-white/95">© {COPYRIGHT_YEAR}</span>{" "}
            <span className="font-medium text-white">{name}</span>
            <span className="text-white/40"> · </span>
            <span>All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
