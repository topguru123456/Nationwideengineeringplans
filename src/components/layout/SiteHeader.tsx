"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { LogoWordmark } from "@/components/brand/LogoWordmark";
import { OfficePhoneLinks } from "@/components/contact/OfficePhoneLinks";
import { headerNav, siteConfig } from "@/config/site";

const HEADER_BAR = "min-h-20";
const SCROLL_HIDE_AFTER = 56;
const SCROLL_SHOW_BEFORE = 20;

function IconMailTiny({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16v12H4V6zm0 0l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const tagline = siteConfig.brand.headerTagline?.trim();
  const { contact } = siteConfig;
  const officePhones = [contact.phones.hq, contact.phones.ny] as const;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  /** When true, utility strip is collapsed — more room while reading; CTAs stay in nav + strip returns at top */
  const [utilityCollapsed, setUtilityCollapsed] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const sync = () => {
      const y = window.scrollY;
      setUtilityCollapsed((prev) => {
        if (y > SCROLL_HIDE_AFTER) return true;
        if (y < SCROLL_SHOW_BEFORE) return false;
        return prev;
      });
    };
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--site-preheader-h", utilityCollapsed ? "0px" : "2.5rem");
    return () => {
      document.documentElement.style.removeProperty("--site-preheader-h");
    };
  }, [utilityCollapsed]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const mobileLayer =
    mounted && mobileOpen ? (
      <>
        <button
          type="button"
          className="fixed inset-0 z-[200] bg-black/40 md:hidden"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        />
        <div
          id="site-mobile-nav"
          className="fixed inset-x-0 bottom-0 z-[210] flex max-h-[calc(100dvh-var(--site-preheader-h,0px)-5rem)] flex-col overflow-y-auto border-t border-neutral-200 bg-white shadow-xl md:hidden"
          style={{ top: "calc(var(--site-preheader-h, 0px) + 5rem)" }}
        >
          <nav className="flex flex-col gap-1 px-4 py-6" aria-label="Mobile main">
            {headerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3.5 text-base font-semibold text-[var(--color-ink)] active:bg-neutral-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </>
    ) : null;

  return (
    <div className={`sticky top-0 ${mobileOpen ? "z-[220] shadow-md" : "z-50"}`}>
      <div
        className={`grid bg-[#0c1f36] text-white transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          utilityCollapsed ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-b border-white/[0.1]">
            <div className="mx-auto flex min-h-[2.5rem] max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-1.5 px-4 py-1.5 sm:justify-end sm:gap-x-6 sm:px-6 sm:py-2">
              <OfficePhoneLinks phones={officePhones} variant="header" />
              <span className="hidden h-4 w-px shrink-0 bg-white/20 sm:block" aria-hidden />
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center gap-2 break-all text-center text-[12px] font-semibold tracking-wide text-white/95 transition hover:text-white sm:text-left sm:text-[13px]"
              >
                <IconMailTiny className="shrink-0 text-white/55 sm:mt-0" />
                <span className="break-all">{contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="border-b border-black/[0.06] bg-white/95 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-md">
        <div className={`relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 ${HEADER_BAR}`}>
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
            <LogoWordmark />
            {tagline ? (
              <>
                <span className="hidden h-11 w-px shrink-0 bg-black/10 lg:block" aria-hidden />
                <p className="hidden max-w-[300px] text-sm font-semibold leading-snug text-[var(--color-ink-muted)] xl:block">
                  {tagline}
                </p>
              </>
            ) : null}
          </div>

          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-x-0.5 text-[15px] font-semibold text-[var(--color-ink)] md:flex lg:gap-x-1 lg:text-base"
            aria-label="Main"
          >
            {headerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 whitespace-nowrap rounded-md px-2.5 py-2 transition-colors hover:bg-neutral-100 hover:text-neutral-900 lg:px-3.5"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex w-10 shrink-0 justify-end sm:w-11 md:w-12">
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-800 md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="site-mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {mounted ? createPortal(mobileLayer, document.body) : null}
    </div>
  );
}
