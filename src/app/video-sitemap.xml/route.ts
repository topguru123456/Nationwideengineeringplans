import { NextResponse } from "next/server";
import { heroVideoEntries } from "@/config/hero-videos";
import { siteConfig } from "@/config/site";

function xmlEscape(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

/**
 * Google video sitemap extension — lists page URLs and their associated hero video file.
 * @see https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps
 */
export function GET() {
  const base = siteConfig.url.replace(/\/$/, "");
  const ns = "http://www.sitemaps.org/schemas/sitemap/0.9";
  const vns = "http://www.google.com/schemas/sitemap-video/1.1";

  const body = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="${ns}" xmlns:video="${vns}">`,
    ...heroVideoEntries.map((v) => {
      const pageUrl = v.pagePath === "/" ? `${base}/` : `${base}${v.pagePath}`;
      const thumb = `${base}${v.thumbnailPath}`;
      const content = `${base}${v.contentPath}`;
      return [
        `  <url>`,
        `    <loc>${xmlEscape(pageUrl)}</loc>`,
        `    <video:video>`,
        `      <video:thumbnail_loc>${xmlEscape(thumb)}</video:thumbnail_loc>`,
        `      <video:title>${xmlEscape(v.name)}</video:title>`,
        `      <video:description>${xmlEscape(v.description)}</video:description>`,
        `      <video:content_loc>${xmlEscape(content)}</video:content_loc>`,
        `      <video:publication_date>${xmlEscape(v.uploadDate)}</video:publication_date>`,
        `    </video:video>`,
        `  </url>`,
      ].join("\n");
    }),
    `</urlset>`,
  ].join("\n");

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
