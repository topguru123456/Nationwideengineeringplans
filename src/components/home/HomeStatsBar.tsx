"use client";

import { useEffect, useRef, useState } from "react";
import { homeStats } from "@/config/home-landing";

const COUNT_MS = 1300;
const STAGGER_MS = 85;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const fn = () => setReduced(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
}

function StatCounter({
  target,
  suffix,
  started,
  reducedMotion,
  staggerMs,
}: {
  target: number;
  suffix: string;
  started: boolean;
  reducedMotion: boolean;
  staggerMs: number;
}) {
  const [animated, setAnimated] = useState(target);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!started || reducedMotion) return;

    let cancelled = false;
    setAnimated(0);
    const timer = window.setTimeout(() => {
      let startTime: number | null = null;
      const step = (now: number) => {
        if (cancelled) return;
        if (startTime === null) startTime = now;
        const t = Math.min((now - startTime) / COUNT_MS, 1);
        const eased = 1 - (1 - t) ** 3;
        setAnimated(Math.round(eased * target));
        if (t < 1) rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    }, staggerMs);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      cancelAnimationFrame(rafRef.current);
    };
  }, [started, reducedMotion, target, staggerMs]);

  const display = !started || reducedMotion ? target : animated;
  const live = started && !reducedMotion;

  return (
    <span className="tabular-nums tracking-tight" aria-live={live ? "polite" : "off"}>
      {display}
      {suffix}
    </span>
  );
}

export function HomeStatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [run, setRun] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setRun(true);
      return;
    }
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative z-[1] border-y border-neutral-200 bg-white py-14 text-neutral-900 shadow-[0_-12px_32px_-18px_rgba(0,0,0,0.14)] sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6 md:gap-y-0">
          {homeStats.map((s, i) => (
            <div
              key={s.label}
              className="flex h-full min-h-[5.5rem] flex-col border-l-2 border-neutral-300 pl-5 sm:pl-6"
            >
              <p className="shrink-0 text-3xl font-bold tabular-nums text-neutral-900 sm:text-4xl">
                <StatCounter
                  target={s.target}
                  suffix={s.suffix}
                  started={run}
                  reducedMotion={reducedMotion}
                  staggerMs={i * STAGGER_MS}
                />
              </p>
              <div className="min-h-2 flex-1" aria-hidden />
              <p className="shrink-0 pt-3 text-base leading-snug text-neutral-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
