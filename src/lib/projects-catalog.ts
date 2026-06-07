import type { Project } from "@/types/project";

export const PROJECTS_PAGE_SIZE = 9;

/** Build crawlable /projects URL with optional category and page. */
export function projectsCatalogHref(category: string | null, page = 1): string {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `/projects?${query}` : "/projects";
}

export function filterProjectsByCategory(
  all: Project[],
  category: string | null,
): Project[] {
  if (!category) return all;
  return all.filter((p) => p.markets.includes(category));
}

/** Primary market → services page anchor label */
export function serviceLinkForMarket(
  market: string,
): { href: string; label: string } | null {
  switch (market) {
    case "House Design":
      return { href: "/services", label: "New custom home permit services" };
    case "Residential":
      return { href: "/services", label: "Residential & multi-family services" };
    case "Commercial":
      return { href: "/services", label: "Commercial permit plan services" };
    case "Site Civil":
      return { href: "/services", label: "Civil & site engineering services" };
    case "Transportation":
      return { href: "/services", label: "Transportation & corridor services" };
    case "Water Resources":
      return { href: "/services", label: "Water resources & utility services" };
    case "Construction Management":
      return { href: "/services", label: "Construction consulting services" };
    default:
      return { href: "/services", label: "Our permit plan services" };
  }
}
