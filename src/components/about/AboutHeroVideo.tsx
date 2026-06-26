"use client";

import { useEffect, useState } from "react";
import { aboutHeroVideoSrc, aboutPageImages } from "@/config/about-page";
import { pageMetadata } from "@/config/page-metadata";
import { HeroVideoLayer } from "@/components/ui/HeroVideoLayer";

export function AboutHeroVideo() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const red = "text-[var(--brand-red)]";

  return (
    <section className="relative min-h-[280px] w-full overflow-hidden sm:min-h-[340px] md:min-h-[400px]">
      <div className="absolute inset-0">
        <HeroVideoLayer
          videoSrc={aboutHeroVideoSrc}
          fallbackImageSrc={aboutPageImages.hero}
          fallbackSizes="100vw"
          imageQuality={85}
          reduceMotion={reduceMotion}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0f2744]/20 via-transparent to-[#1a0a0c]/22" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_115%_90%_at_50%_42%,transparent_46%,rgba(0,0,0,0.28)_100%)]"
          aria-hidden
        />
      </div>
      <div className="relative z-10 flex min-h-[280px] items-center justify-center px-4 py-20 text-center sm:min-h-[340px] md:min-h-[400px]">
        <div className="about-hero-enter">
          <p
            className={`text-xs font-bold uppercase tracking-[0.25em] ${red} drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-sm`}
          >
            Nationwide practice
          </p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] sm:text-5xl md:text-6xl">
            {pageMetadata.about.h1}
          </h1>
        </div>
      </div>
    </section>
  );
}
