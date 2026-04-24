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
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Home",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Engineering plans`,
    description: siteConfig.description,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <main>
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
