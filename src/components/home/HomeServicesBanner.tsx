import Link from "next/link";
import { homeServicesBanner } from "@/config/home-landing";
import { Reveal } from "@/components/ui/Reveal";

export function HomeServicesBanner() {
  const { title, line, ctaLabel, ctaHref } = homeServicesBanner;
  return (
    <section
      className="services-strip border-y border-black/20 py-16 text-center text-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)] sm:py-20"
      aria-labelledby="home-services-banner-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <h2
            id="home-services-banner-heading"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-sm"
          >
            {title}
          </h2>
          <p className="mt-6 text-lg font-medium leading-snug text-white sm:text-xl">{line}</p>
          <Link
            href="/services"
            className="mt-6 inline-block text-sm font-medium text-white/80 underline-offset-4 transition hover:text-white"
          >
            Full services overview
          </Link>
          <div className="mt-8">
            <Link
              href={ctaHref}
              className="inline-flex min-h-11 items-center justify-center border border-white/45 bg-transparent px-10 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:border-white/70 hover:bg-white/10"
            >
              {ctaLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
