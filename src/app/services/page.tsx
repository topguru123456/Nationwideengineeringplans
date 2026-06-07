import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServicesAccordions } from "@/components/services/ServicesAccordions";
import { ServicesHeroVideo } from "@/components/services/ServicesHeroVideo";
import { VideoObjectJsonLd } from "@/components/seo/VideoObjectJsonLd";
import { heroVideoForPath } from "@/config/hero-videos";
import {
  servicesBottomCtas,
  servicesFeaturedProjects,
  servicesImageBand,
  servicesPageImages,
} from "@/config/services-page";
import { FeaturedProjectLinks } from "@/components/projects/FeaturedProjectLinks";
import { pageMetadata, pageOgImages } from "@/config/page-metadata";
import { pageOpenGraph } from "@/lib/open-graph";

const og = pageOpenGraph({
  title: pageMetadata.services.title,
  description: pageMetadata.services.description,
  path: "/services",
  image: pageOgImages.services,
  imageAlt: "Residential engineering and permit plan services",
});

export const metadata: Metadata = {
  title: pageMetadata.services.title,
  description: pageMetadata.services.description,
  alternates: { canonical: "/services" },
  ...og,
};

type CtaStyle = "primary" | "light" | "outline";

function ServicePageCta({
  href = "/contact",
  label,
  style = "primary",
}: {
  href?: string;
  label: string;
  style?: CtaStyle;
}) {
  const base =
    "inline-flex min-h-11 items-center justify-center px-8 py-3 text-sm font-semibold shadow-sm transition hover:shadow-md active:translate-y-px";
  const styles: Record<CtaStyle, string> = {
    primary: "bg-[#1a2f45] text-white hover:bg-[#243a52]",
    light: "bg-white text-[#0f2744] hover:bg-stone-100",
    outline:
      "border-2 border-[#1a2f45] bg-transparent text-[#1a2f45] hover:bg-[#1a2f45] hover:text-white",
  };
  return (
    <Link href={href} className={`${base} ${styles[style]}`}>
      {label}
    </Link>
  );
}

export default function ServicesPage() {
  const servicesVideo = heroVideoForPath("/services");
  return (
    <main className="bg-white text-neutral-900">
      {servicesVideo ? <VideoObjectJsonLd entry={servicesVideo} /> : null}
      <ServicesHeroVideo />

      <section className="border-b border-stone-300/60 bg-[#f4f1ea] px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <ServicesAccordions />
        <div className="mx-auto mt-12 max-w-6xl border-t border-stone-300/60 pt-10">
          <FeaturedProjectLinks
            heading="Representative projects"
            projects={servicesFeaturedProjects}
          />
          <p className="mt-8 text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
            Ready to start?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[var(--brand-red)] underline-offset-4 hover:underline"
            >
              Contact us to scope civil, structural, or MEP work
            </Link>
            {" "}for your jurisdiction.
          </p>
        </div>
      </section>

      <section className="relative min-h-[340px] w-full overflow-hidden sm:min-h-[400px] md:min-h-[460px]">
        <Image
          src={servicesPageImages.ctaResidence}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={75}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/65" />
        <div className="relative z-10 mx-auto flex min-h-[340px] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center text-white sm:min-h-[400px] sm:py-20 md:min-h-[460px]">
          <h2 className="font-display text-2xl font-semibold leading-snug sm:text-3xl md:text-4xl">
            {servicesImageBand.headline}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">{servicesImageBand.body}</p>
          <div className="mt-10">
            <ServicePageCta label={servicesImageBand.buttonLabel} style="light" />
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-gradient-to-b from-stone-100/90 to-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:gap-10">
          {servicesBottomCtas.map((block) => (
            <div
              key={block.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white p-8 shadow-md ring-1 ring-black/[0.04] transition hover:shadow-lg sm:p-10"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--brand-red)] via-[#0f2744] to-[var(--brand-red)] opacity-80"
                aria-hidden
              />
              <h2 className="font-display text-xl font-semibold tracking-tight text-[#0f2744] sm:text-2xl">
                {block.title}
              </h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base">{block.line}</p>
              <div className="mt-8">
                <ServicePageCta label={block.buttonLabel} style={block.buttonStyle} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
