import type { Metadata } from "next";
import { Suspense } from "react";
import { MARKET_FILTERS } from "@/config/markets";
import {
  ProjectsCatalog,
  ProjectsPageFallback,
} from "@/components/projects/ProjectsCatalog";
import { pageMetadata } from "@/config/page-metadata";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";
import { paginate, parsePageParam } from "@/lib/pagination";
import {
  filterProjectsByCategory,
  PROJECTS_PAGE_SIZE,
} from "@/lib/projects-catalog";

export const metadata: Metadata = {
  title: pageMetadata.projects.title,
  description: pageMetadata.projects.description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description: pageMetadata.projects.description,
    url: "/projects",
  },
  twitter: {
    description: pageMetadata.projects.description,
  },
};

type Props = {
  searchParams: Promise<{ category?: string; page?: string }>;
};

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
