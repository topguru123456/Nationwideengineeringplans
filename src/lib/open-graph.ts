import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageOpenGraphInput = {
  /** Page title segment — layout template appends site name for document title */
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt?: string;
};

/** Shared Open Graph + Twitter card fields for static marketing routes. */
export function pageOpenGraph({
  title,
  description,
  path,
  image,
  imageAlt,
}: PageOpenGraphInput): Pick<Metadata, "openGraph" | "twitter"> {
  const ogTitle = `${title} | ${siteConfig.name}`;
  const alt = imageAlt ?? siteConfig.brand.logoAlt;
  return {
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      images: [{ url: image, alt }],
    },
    twitter: {
      title: ogTitle,
      description,
      images: [image],
    },
  };
}
