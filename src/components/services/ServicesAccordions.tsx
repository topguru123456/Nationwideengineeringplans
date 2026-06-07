"use client";

import Link from "next/link";
import { useId, useState } from "react";
import {
  servicesAccordionHeadings,
  servicesAccordionIntro,
  servicesFullScopeItems,
  servicesSpecialtyItems,
} from "@/config/services-page";

function AccordionChevron({ open }: { open: boolean }) {
  return (
    <span
      className={`ml-3 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-200/90 bg-white text-neutral-500 shadow-sm transition-all duration-200 ${
        open ? "rotate-180 border-[var(--brand-red)]/40 bg-[var(--brand-red)]/10 text-[var(--brand-red)]" : ""
      }`}
      aria-hidden
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function DeliverableRow({ children }: { children: string }) {
  return (
    <li className="flex gap-3 text-[15px] leading-snug text-neutral-800">
      <span
        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-red)] shadow-[0_0_0_3px_rgba(230,57,70,0.15)]"
        aria-hidden
      />
      <span>{children}</span>
    </li>
  );
}

export function ServicesAccordions() {
  const fullId = useId();
  const specId = useId();
  const [fullOpen, setFullOpen] = useState<number>(-1);
  const [specOpen, setSpecOpen] = useState<number>(-1);

  return (
    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
      {/* Full scope */}
      <div className="rounded-2xl border border-stone-200/90 bg-white/95 p-6 shadow-[0_4px_40px_rgba(15,39,68,0.06)] ring-1 ring-black/[0.03] sm:p-8">
        <div className="border-b border-stone-200/80 pb-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--brand-red)]">Packages</p>
          <h2 className="font-display mt-2 text-[1.65rem] font-semibold tracking-tight text-[#0f2744] sm:text-3xl">
            {servicesAccordionHeadings.fullScope}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
            {servicesAccordionIntro.fullScope}
          </p>
        </div>
        <ul className="mt-6 space-y-3" role="list">
          {servicesFullScopeItems.map((item, i) => {
            const open = fullOpen === i;
            const panelId = `${fullId}-panel-${i}`;
            const btnId = `${fullId}-btn-${i}`;
            return (
              <li
                key={item.id}
                className={`overflow-hidden rounded-xl border transition-shadow duration-200 ${
                  open
                    ? "border-[var(--brand-red)]/35 bg-gradient-to-b from-stone-50/90 to-white shadow-md ring-1 ring-[var(--brand-red)]/15"
                    : "border-stone-200/80 bg-white hover:border-stone-300 hover:shadow-sm"
                }`}
              >
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-5 sm:py-[1.125rem]"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setFullOpen((prev) => (prev === i ? -1 : i))}
                  >
                    <span className="font-display text-base font-semibold text-[#0f2744] sm:text-lg">{item.title}</span>
                    <AccordionChevron open={open} />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!open}
                  className={open ? "border-t border-stone-100/90" : undefined}
                >
                  {open ? (
                    <div className="space-y-5 px-4 pb-5 pt-4 sm:px-5 sm:pb-6">
                      <p className="text-[15px] leading-relaxed text-neutral-600">{item.body}</p>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                          Typical deliverables
                        </p>
                        <ul className="mt-3 space-y-2.5">
                          {item.deliverables.map((d) => (
                            <DeliverableRow key={d}>{d}</DeliverableRow>
                          ))}
                        </ul>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-neutral-900 px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.1em] text-white shadow-sm transition hover:bg-[var(--brand-red)] sm:w-auto"
                      >
                        {item.ctaLabel}
                      </Link>
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Specialty */}
      <div className="rounded-2xl border border-stone-200/90 bg-white/95 p-6 shadow-[0_4px_40px_rgba(15,39,68,0.06)] ring-1 ring-black/[0.03] sm:p-8">
        <div className="border-b border-stone-200/80 pb-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1e3a5f]">Discipline depth</p>
          <h2 className="font-display mt-2 text-[1.65rem] font-semibold tracking-tight text-[#0f2744] sm:text-3xl">
            {servicesAccordionHeadings.specialty}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
            {servicesAccordionIntro.specialty}
          </p>
        </div>
        <ul className="mt-6 space-y-3" role="list">
          {servicesSpecialtyItems.map((item, i) => {
            const open = specOpen === i;
            const panelId = `${specId}-panel-${i}`;
            const btnId = `${specId}-btn-${i}`;
            return (
              <li
                key={item.id}
                className={`overflow-hidden rounded-xl border transition-shadow duration-200 ${
                  open
                    ? "border-[#1e3a5f]/30 bg-gradient-to-b from-slate-50/80 to-white shadow-md ring-1 ring-[#1e3a5f]/10"
                    : "border-stone-200/80 bg-white hover:border-stone-300 hover:shadow-sm"
                }`}
              >
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-5 sm:py-[1.125rem]"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setSpecOpen((prev) => (prev === i ? -1 : i))}
                  >
                    <span className="font-display text-base font-semibold text-[#0f2744] sm:text-lg">{item.title}</span>
                    <AccordionChevron open={open} />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!open}
                  className={open ? "border-t border-stone-100/90" : undefined}
                >
                  {open ? (
                    <div className="px-4 pb-5 pt-4 sm:px-5 sm:pb-6">
                      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                        Scope may include
                      </p>
                      <ul className="space-y-2.5">
                        {item.deliverables.map((d) => (
                          <DeliverableRow key={d}>{d}</DeliverableRow>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
