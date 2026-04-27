import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getProjectSlugs } from "@/data/projects";

function baseUrl(): string {
  return siteConfig.url.replace(/\/$/, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = baseUrl();
  // Omit lastModified: using build-time "now" on every deploy pollutes lastmod; only add
  // per-URL lastmod when sourced from real content or file mtimes.
  const staticPaths: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects`, changeFrequency: "weekly", priority: 0.9 },
  ];

  const projectEntries: MetadataRoute.Sitemap = getProjectSlugs().map((slug) => ({
    url: `${base}/projects/${slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.65,
  }));

  return [...staticPaths, ...projectEntries];
}
