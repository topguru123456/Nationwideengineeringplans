import { type HeroVideoSeo } from "@/config/hero-videos";
import { siteConfig } from "@/config/site";

type Props = { entry: HeroVideoSeo };

/**
 * VideoObject structured data for pages with a self-hosted background hero.
 * Pairs with `/video-sitemap.xml` to improve discovery in Google Search / Video.
 */
export function VideoObjectJsonLd({ entry }: Props) {
  const origin = siteConfig.url.replace(/\/$/, "");
  const pageUrl = entry.pagePath === "/" ? `${origin}/` : `${origin}${entry.pagePath}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: entry.name,
    description: entry.description,
    thumbnailUrl: `${origin}${entry.thumbnailPath}`,
    contentUrl: `${origin}${entry.contentPath}`,
    embedUrl: pageUrl,
    uploadDate: entry.uploadDate,
    isFamilyFriendly: true,
    inLanguage: siteConfig.locale.replace("_", "-"),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: origin,
      logo: {
        "@type": "ImageObject",
        url: `${origin}${siteConfig.brand.logoSrc}`,
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
