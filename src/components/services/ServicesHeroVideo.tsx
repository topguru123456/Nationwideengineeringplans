"use client";

import { useEffect, useState } from "react";
import { servicesHeroVideoSrc, servicesPageImages } from "@/config/services-page";
import { pageMetadata } from "@/config/page-metadata";
import { HeroVideoLayer } from "@/components/ui/HeroVideoLayer";

export function ServicesHeroVideo() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section className="relative min-h-[240px] overflow-hidden border-b border-black/10 sm:min-h-[280px] md:min-h-[320px]">
      <div className="absolute inset-0">
        <HeroVideoLayer
          videoSrc={servicesHeroVideoSrc}
          fallbackImageSrc={servicesPageImages.heroPoster}
          fallbackSizes="100vw"
          imageQuality={88}
          reduceMotion={reduceMotion}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0f2744]/18 via-transparent to-black/20" aria-hidden />
      </div>
      <div className="relative z-10 px-4 py-14 text-center text-white sm:px-6 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black/25 px-5 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-[2px] sm:px-8 sm:py-10 md:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/95 drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            What we deliver
          </p>
          <h1 className="font-display mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.95)] sm:text-4xl md:text-[2.65rem]">
            {pageMetadata.services.h1}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.92)] sm:text-lg">
            {pageMetadata.services.intro}
          </p>
        </div>
      </div>
    </section>
  );
}
