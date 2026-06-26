import type { Metadata } from "next";
import { fullDocumentTitle } from "@/lib/page-seo";
import { siteConfig } from "@/config/site";

type PageOpenGraphInput = {
  /** Page title segment — combined with site name for social cards */
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt?: string;
};

/** @deprecated Prefer `buildPageMetadata` from `@/lib/page-seo`. */
export function pageOpenGraph({
  title,
  description,
  path,
  image,
  imageAlt,
}: PageOpenGraphInput): Pick<Metadata, "openGraph" | "twitter"> {
  const ogTitle = fullDocumentTitle(title);
  const alt = imageAlt ?? siteConfig.brand.logoAlt;
  return {
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      images: [{ url: image, alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  };
}
