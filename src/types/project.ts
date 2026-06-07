export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  /** Short location line for cards */
  location: string;
  /** Category labels — must match `PROJECT_CATEGORIES` for filter chips */
  markets: string[];
  owner: string;
  services: string[];
  /** Full description (same text as joined body, for meta / convenience) */
  description: string;
  /** Rich body for detail page (paragraphs) */
  body: string[];
  /** Dedicated SERP description when set — avoids repeating body copy in meta tags */
  metaDescription?: string;
  /** Hero lead and first narrative block when set — distinct from meta description */
  scopeNarrative?: string;
  challenge?: string;
  solution?: string;
  /** AHJ or permitting authority when it adds clarity beyond location line */
  jurisdiction?: string;
  /** Cover / hero — path under `public` (see `public/assets/images/projects/`) */
  coverImage: { src: string; alt: string; width: number; height: number };
  /** Optional floor-plan/support image for gallery on detail page */
  planImage?: { src: string; alt: string; width: number; height: number };
};
