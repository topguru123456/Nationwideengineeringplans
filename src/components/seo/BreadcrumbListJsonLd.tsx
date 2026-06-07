import { siteConfig } from "@/config/site";

export type BreadcrumbItem = {
  label: string;
  href: string | null;
};

type Props = { items: BreadcrumbItem[] };

/** BreadcrumbList structured data matching visible breadcrumb navigation. */
export function BreadcrumbListJsonLd({ items }: Props) {
  const origin = siteConfig.url.replace(/\/$/, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const entry: Record<string, unknown> = {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
      };
      if (item.href) {
        entry.item = item.href === "/" ? `${origin}/` : `${origin}${item.href}`;
      }
      return entry;
    }),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
