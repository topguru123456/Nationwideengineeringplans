"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { homeTestimonials } from "@/data/testimonials";

function StarRowMuted() {
  return (
    <div className="mt-3 flex gap-0.5 text-amber-400/90" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 shrink-0 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  const syncScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;
    setCanPrev(scrollLeft > 8);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 8);

    const cards = el.querySelectorAll<HTMLElement>("[data-slide]");
    let best = 0;
    let bestDist = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - scrollLeft);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const fn = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    syncScrollState();
    el.addEventListener("scroll", syncScrollState, { passive: true });
    const ro = new ResizeObserver(syncScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", syncScrollState);
      ro.disconnect();
    };
  }, [syncScrollState]);

  const scrollByCards = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>("[data-slide]");
    if (!first) return;
    const gap = 16;
    const step = first.offsetWidth + gap;
    el.scrollBy({
      left: dir * step,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(`[data-slide="${i}"]`);
    card?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <section
      className="border-t border-[#0c1929] bg-[#0a1628] py-16 text-white sm:py-20"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">Client voices</p>
            <h2 id="reviews-heading" className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              What people are saying
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60">
              Straightforward feedback from owners and partners—grounded in real project work.
            </p>
          </div>
          <div className="flex w-full shrink-0 items-center justify-end gap-2 sm:w-auto">
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              disabled={!canPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/12 disabled:pointer-events-none disabled:opacity-35"
              aria-label="Previous reviews"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              disabled={!canNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/12 disabled:pointer-events-none disabled:opacity-35"
              aria-label="Next reviews"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          {homeTestimonials.map((r, i) => (
            <article
              key={r.name}
              data-slide={i}
              className="snap-start shrink-0 basis-[min(100%,340px)] sm:basis-[min(100%,calc(50%-0.5rem))] lg:basis-[min(100%,calc(33.333%-0.67rem))]"
            >
              <div className="flex h-full min-h-[280px] flex-col rounded-2xl bg-[#2d4a6f]/95 p-6 shadow-lg ring-1 ring-white/10 sm:min-h-[300px] sm:p-7">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20">
                  <Image src={r.avatarSrc} alt="" fill className="object-cover" sizes="56px" />
                </div>
                <StarRowMuted />
                <p className="mt-5 flex-1 text-left text-[15px] leading-relaxed text-white/95 sm:text-base">
                  {r.quote}
                </p>
                <p className="mt-6 text-left text-sm font-medium text-white/80">— {r.name}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {homeTestimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-8 bg-white/90" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to review ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
