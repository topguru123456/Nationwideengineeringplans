/**
 * Self-hosted hero videos: used for VideoObject JSON-LD and the video sitemap.
 * Google often skips indexing raw MP4s on pages with no video markup + no video sitemap.
 * Update HERO_VIDEO_UPLOAD_DATE when you materially replace a hero file.
 */
import { aboutHeroVideoSrc, aboutPageImages } from "./about-page";
import { homeHeroVideoSrc, homeLandingImages } from "./home-landing";
import { pageMetadata } from "./page-metadata";
import { servicesHeroVideoSrc, servicesPageImages } from "./services-page";
import { siteConfig } from "./site";

/** When hero assets were last meaningfully published (for schema + video sitemap). */
export const HERO_VIDEO_UPLOAD_DATE = "2024-04-01T12:00:00-07:00";

export type HeroVideoSeo = {
  pagePath: string;
  name: string;
  description: string;
  contentPath: string;
  thumbnailPath: string;
  uploadDate: string;
};

function titleCaseServices() {
  return pageMetadata.services.title;
}

export const heroVideoEntries: readonly HeroVideoSeo[] = [
  {
    pagePath: "/",
    name: `${siteConfig.name} — Home page hero video`,
    description: pageMetadata.home.description,
    contentPath: homeHeroVideoSrc,
    thumbnailPath: homeLandingImages.hero,
    uploadDate: HERO_VIDEO_UPLOAD_DATE,
  },
  {
    pagePath: "/about",
    name: `About us — ${siteConfig.name} hero video`,
    description: pageMetadata.about.description,
    contentPath: aboutHeroVideoSrc,
    thumbnailPath: aboutPageImages.hero,
    uploadDate: HERO_VIDEO_UPLOAD_DATE,
  },
  {
    pagePath: "/services",
    name: `${titleCaseServices()} — ${siteConfig.name} hero video`,
    description: pageMetadata.services.description,
    contentPath: servicesHeroVideoSrc,
    thumbnailPath: servicesPageImages.heroPoster,
    uploadDate: HERO_VIDEO_UPLOAD_DATE,
  },
];

export function heroVideoForPath(pathname: string): HeroVideoSeo | undefined {
  const p =
    pathname === "" || pathname === "/"
      ? "/"
      : pathname.replace(/\/$/, "") || "/";
  return heroVideoEntries.find((e) => e.pagePath === p);
}
