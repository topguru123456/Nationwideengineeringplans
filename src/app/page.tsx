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
import { pageMetadata } from "@/config/page-metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  description: pageMetadata.home.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: pageMetadata.home.description,
    url: "/",
  },
  twitter: {
    description: pageMetadata.home.description,
  },
};

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
