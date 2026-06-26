import type { Metadata } from "next";
import { Suspense } from "react";
import { MARKET_FILTERS, type MarketFilter } from "@/config/markets";
import {
  ProjectsCatalog,
  ProjectsPageFallback,
} from "@/components/projects/ProjectsCatalog";
import {
  pageMetadata,
  pageOgImages,
  projectsCategoryMetadata,
} from "@/config/page-metadata";
import { projects } from "@/data/projects";
import { buildPageMetadata } from "@/lib/page-seo";
import { parsePageParam } from "@/lib/pagination";
import {
  filterProjectsByCategory,
  PROJECTS_PAGE_SIZE,
} from "@/lib/projects-catalog";
import { paginate } from "@/lib/pagination";

type Props = {
  searchParams: Promise<{ category?: string; page?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { category: rawCategory, page: rawPage } = await searchParams;
  const category =
    rawCategory && (MARKET_FILTERS as readonly string[]).includes(rawCategory as MarketFilter)
      ? rawCategory
      : null;
  const page = parsePageParam(rawPage);

  let title: string = pageMetadata.projects.title;
  let description: string = pageMetadata.projects.description;
  const params = new URLSearchParams();

  if (category) {
    const catMeta = projectsCategoryMetadata(category);
    title = catMeta.title;
    description = catMeta.description;
    params.set("category", category);
  }
  if (page > 1) {
    title = `${title} — Page ${page}`;
    params.set("page", String(page));
  }

  const path = params.toString() ? `/projects?${params.toString()}` : "/projects";

  return buildPageMetadata({
    title,
    description,
    path,
    image: pageOgImages.projects,
    imageAlt: "Representative engineering and permit plan projects nationwide",
    robots: page > 1 ? { index: false, follow: true } : undefined,
  });
}

export default async function ProjectsPage({ searchParams }: Props) {
  const { category: rawCategory, page: rawPage } = await searchParams;
  const category =
    rawCategory && (MARKET_FILTERS as readonly string[]).includes(rawCategory)
      ? rawCategory
      : null;
  const page = parsePageParam(rawPage);

  const filtered = filterProjectsByCategory(projects, category);
  const { items, totalPages, page: safePage } = paginate(
    filtered,
    page,
    PROJECTS_PAGE_SIZE,
  );

  return (
    <Suspense fallback={<ProjectsPageFallback />}>
      <ProjectsCatalog
        items={items}
        page={safePage}
        totalPages={totalPages}
        category={category}
      />
    </Suspense>
  );
}
