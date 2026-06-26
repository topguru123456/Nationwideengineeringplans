import type { Metadata } from "next";
import { HomeAboutBand } from "@/components/home/HomeAboutBand";
import { HomeContactTeaser } from "@/components/home/HomeContactTeaser";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeProjectsBand } from "@/components/home/HomeProjectsBand";
import { HomeServicesBanner } from "@/components/home/HomeServicesBanner";
import { HomeStatsBar } from "@/components/home/HomeStatsBar";
import { HomeWhyUs } from "@/components/home/HomeWhyUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { VideoObjectJsonLd } from "@/components/seo/VideoObjectJsonLd";
import { heroVideoForPath } from "@/config/hero-videos";
import { pageMetadata, pageOgImages } from "@/config/page-metadata";
import { buildPageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = buildPageMetadata({
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  path: "/",
  image: pageOgImages.home,
  imageAlt: "Nationwide Engineering Plans — civil, structural, and MEP permit plans",
});

export default function HomePage() {
  const homeVideo = heroVideoForPath("/");
  return (
    <main>
      {homeVideo ? <VideoObjectJsonLd entry={homeVideo} /> : null}
      <HomeHero />
      <HomeStatsBar />
      <HomeAboutBand />
      <HomeServicesBanner />
      <HomeProjectsBand />
      <HomeWhyUs />
      <HomeContactTeaser />
      <TestimonialsSection />
      <HomeFinalCta />
    </main>
  );
}
