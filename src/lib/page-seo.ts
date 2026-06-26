import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/** Full `<title>` text — always includes the brand for inner pages. */
export function fullDocumentTitle(pageLabel: string): string {
  const label = pageLabel.trim();
  if (!label || label === siteConfig.name) return siteConfig.name;
  return `${label} | ${siteConfig.name}`;
}

/** Next.js title metadata that bypasses the layout template (explicit SERP titles). */
export function documentTitle(pageLabel: string): Metadata["title"] {
  return { absolute: fullDocumentTitle(pageLabel) };
}

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt?: string;
  robots?: Metadata["robots"];
};

/** Shared Open Graph + Twitter card fields for static marketing routes. */
export function buildPageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  robots,
}: BuildPageMetadataInput): Metadata {
  const ogTitle = fullDocumentTitle(title);
  const alt = imageAlt ?? siteConfig.brand.logoAlt;
  return {
    title: documentTitle(title),
    description,
    alternates: { canonical: path },
    ...(robots ? { robots } : {}),
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
