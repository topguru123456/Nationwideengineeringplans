"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  homeHeroCopy,
  homeHeroDisciplines,
  homeHeroVideoSrc,
  homeLandingImages,
} from "@/config/home-landing";
import { HeroVideoLayer } from "@/components/ui/HeroVideoLayer";

function HeroStep({
  children,
  enter,
  reduceMotion,
  delayMs,
  className = "",
}: {
  children: React.ReactNode;
  enter: boolean;
  reduceMotion: boolean;
  delayMs: number;
  className?: string;
}) {
  const on = reduceMotion || enter;
  return (
    <div
      className={`${className} ${
        reduceMotion
          ? ""
          : `transition-all duration-[580ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              on ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`
      }`}
      style={reduceMotion ? undefined : { transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}

export function HomeHero() {
  const [enter, setEnter] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    if (mq.matches) setEnter(true);
    else {
      const id = requestAnimationFrame(() => setEnter(true));
      return () => cancelAnimationFrame(id);
    }
  }, []);

  return (
    <section
      className="relative min-h-[clamp(400px,58svh,620px)] w-full overflow-hidden"
      aria-labelledby="home-hero-heading"
    >
      <div className="absolute inset-0">
        <HeroVideoLayer
          videoSrc={homeHeroVideoSrc}
          fallbackImageSrc={homeLandingImages.hero}
          fallbackSizes="100vw"
          imageQuality={82}
          reduceMotion={reduceMotion}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0f2744]/22 via-transparent to-black/25" />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_95%_at_50%_32%,transparent_42%,rgba(0,0,0,0.22)_100%)]"
          aria-hidden
        />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[clamp(400px,58svh,620px)] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center text-white sm:px-8 sm:py-24">
        <HeroStep enter={enter} reduceMotion={reduceMotion} delayMs={0}>
          <div
            className="flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:gap-2.5"
            role="list"
            aria-label="Disciplines included in drawing sets"
          >
            {homeHeroDisciplines.map((d) => (
              <span
                key={d.label}
                role="listitem"
                className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] shadow-[0_2px_24px_rgba(0,0,0,0.55)] backdrop-blur-md transition-transform duration-300 will-change-transform hover:scale-[1.04] sm:text-xs ${
                  "emphasis" in d && d.emphasis
                    ? "border-white/40 bg-[var(--brand-red)] text-white ring-1 ring-white/25"
                    : "border-white/35 bg-white/12 text-white ring-1 ring-white/20"
                }`}
              >
                {d.label}
              </span>
            ))}
          </div>
        </HeroStep>

        <HeroStep enter={enter} reduceMotion={reduceMotion} delayMs={90} className="mt-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/75 sm:text-xs">
            {homeHeroCopy.eyebrow}
          </p>
          <h1
            id="home-hero-heading"
            className="font-display mt-3 max-w-[min(100%,34rem)] text-balance text-[1.65rem] font-semibold leading-snug tracking-[-0.02em] drop-shadow-[0_4px_32px_rgba(0,0,0,0.75)] sm:mt-3.5 sm:max-w-2xl sm:text-[2rem] sm:leading-snug md:text-[2.25rem]"
          >
            {homeHeroCopy.headline}
          </h1>
        </HeroStep>

        <HeroStep enter={enter} reduceMotion={reduceMotion} delayMs={180} className="mt-5 w-full sm:mt-6">
          <ul className="mx-auto flex max-w-md flex-col gap-3 text-center sm:max-w-lg">
            {homeHeroCopy.supportPoints.map((line) => (
              <li key={line} className="text-[16px] font-medium leading-snug text-white/95 drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)] sm:text-[17px]">
                {line}
              </li>
            ))}
          </ul>
        </HeroStep>

        <HeroStep enter={enter} reduceMotion={reduceMotion} delayMs={260} className="mt-7 sm:mt-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex min-h-11 translate-y-0 items-center justify-center bg-[var(--brand-red)] px-8 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg active:translate-y-0 active:brightness-105"
            >
              View projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center border border-white/85 bg-white/12 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/22 active:translate-y-0"
            >
              Contact
            </Link>
          </div>
        </HeroStep>
      </div>
    </section>
  );
}
