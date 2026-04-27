import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AboutHeroVideo } from "@/components/about/AboutHeroVideo";
import { VideoObjectJsonLd } from "@/components/seo/VideoObjectJsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { heroVideoForPath } from "@/config/hero-videos";
import {
  aboutFinalCta,
  aboutPageImages,
  aboutProcess,
  aboutTeam,
  aboutValues,
  aboutWhoWeAre,
} from "@/config/about-page";
import { pageMetadata } from "@/config/page-metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description: pageMetadata.about.description,
    url: "/about",
  },
  twitter: {
    description: pageMetadata.about.description,
  },
};

/** Brand-forward accents — not a forest-green template */
const red = "text-[var(--brand-red)]";
const bar = "bg-gradient-to-r from-[var(--brand-red)] to-[#b91c1c]";

function SkillBar({ label, pct }: { label: string; pct: number }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3 text-sm font-medium text-white">
        <span>{label}</span>
        <span className="tabular-nums text-white/80">{pct}%</span>
      </div>
      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/15">
        <div className={`h-full rounded-full ${bar}`} style={{ width: `${pct}%` }} role="presentation" />
      </div>
    </div>
  );
}

export default function AboutPage() {
  const aboutVideo = heroVideoForPath("/about");
  return (
    <main className="bg-[#faf8f5] text-neutral-900">
      {aboutVideo ? <VideoObjectJsonLd entry={aboutVideo} /> : null}
      <AboutHeroVideo />

      {/* Who we are — light editorial band + red rail */}
      <section className="relative border-b border-stone-200/80 bg-white py-14 sm:py-20 md:py-24">
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/4 bg-gradient-to-l from-[var(--brand-red)]/[0.06] to-transparent lg:block" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal delayMs={0}>
            <div className="relative aspect-[4/5] min-h-[260px] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/[0.06] sm:aspect-[5/6] lg:min-h-[420px]">
              <Image
                src={aboutPageImages.whoWeAre}
                alt="Engineering team coordinating permit and construction drawing sets"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="relative border-l-4 border-[var(--brand-red)] pl-6 sm:pl-8">
              <p className={`text-xs font-bold uppercase tracking-[0.2em] ${red} sm:text-sm`}>
                {aboutWhoWeAre.eyebrow}
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
                {aboutWhoWeAre.headline}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                {aboutWhoWeAre.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center bg-[var(--brand-red)] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
                >
                  Get in touch
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex min-h-11 items-center justify-center border-2 border-[#0f2744] px-8 py-3 text-sm font-semibold text-[#0f2744] transition hover:bg-[#0f2744] hover:text-white"
                >
                  View projects
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-[#0f1729] py-14 text-white sm:py-20 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -12deg,
              transparent,
              transparent 24px,
              rgba(230,57,70,0.35) 24px,
              rgba(230,57,70,0.35) 25px
            )`,
          }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal delayMs={0}>
            <div>
              <p className={`text-xs font-bold uppercase tracking-[0.2em] ${red} sm:text-sm`}>{aboutValues.eyebrow}</p>
              <h2 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {aboutValues.headline}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">{aboutValues.intro}</p>
              <ul className="mt-10 space-y-8">
                <li className="flex gap-4">
                  <span className={`mt-0.5 h-12 w-1 shrink-0 rounded-full ${bar}`} aria-hidden />
                  <div>
                    <p className="font-display text-lg font-semibold">{aboutValues.vision.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">{aboutValues.vision.text}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className={`mt-0.5 h-12 w-1 shrink-0 rounded-full ${bar}`} aria-hidden />
                  <div>
                    <p className="font-display text-lg font-semibold">{aboutValues.mission.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">{aboutValues.mission.text}</p>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-800 shadow-2xl">
              <Image
                src={aboutPageImages.valuesInterior}
                alt="Residential interior highlighting quality and coordinated design standards"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team + skills */}
      <section className="relative min-h-[420px] w-full sm:min-h-[480px]">
        <Image
          src={aboutPageImages.team}
          alt=""
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/92 via-[#0f2744]/75 to-black/25" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
          <Reveal delayMs={40}>
            <div className="max-w-lg rounded-2xl border border-white/15 bg-black/50 p-8 shadow-2xl backdrop-blur-md sm:p-10">
              <p className={`text-xs font-bold uppercase tracking-[0.2em] ${red} sm:text-sm`}>{aboutTeam.eyebrow}</p>
              <h2 className="font-display mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                {aboutTeam.headline}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">{aboutTeam.body}</p>
              <div className="mt-10 space-y-6">
                {aboutTeam.skills.map((s, i) => (
                  <Reveal key={s.label} delayMs={120 + i * 55}>
                    <SkillBar label={s.label} pct={s.pct} />
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-stone-200 bg-white py-14 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal delayMs={0}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/[0.06]">
              <Image
                src={aboutPageImages.process}
                alt="Project workflow illustration from planning through permit approval"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </Reveal>
          <Reveal delayMs={90}>
            <div>
              <p className={`text-xs font-bold uppercase tracking-[0.2em] ${red} sm:text-sm`}>{aboutProcess.eyebrow}</p>
              <h2 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
                {aboutProcess.headline}
              </h2>
              <ol className="mt-10 space-y-10">
                {aboutProcess.steps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-red)] text-sm font-bold text-white shadow-md">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold text-neutral-900">{step.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative min-h-[320px] w-full sm:min-h-[380px]">
        <Image
          src={aboutPageImages.cta}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-[#1a0506]/45" />
        <div className="relative z-10 mx-auto flex min-h-[320px] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[380px] sm:py-20">
          <Reveal delayMs={0}>
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${red} sm:text-sm`}>{aboutFinalCta.eyebrow}</p>
            <h2 className="font-display mt-4 text-2xl font-semibold leading-snug text-white sm:text-3xl md:text-4xl">
              {aboutFinalCta.headline}
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={aboutFinalCta.primaryHref}
                className="inline-flex min-h-11 items-center justify-center border-2 border-white bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-neutral-900"
              >
                {aboutFinalCta.primaryLabel}
              </Link>
              <a
                href={aboutFinalCta.secondaryTel}
                className="inline-flex min-h-11 items-center justify-center bg-[var(--brand-red)] px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
              >
                {aboutFinalCta.secondaryLabel} — {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
