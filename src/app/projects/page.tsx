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

type Props = { searchParams: Promise<{ category?: string }> };

export default async function ProjectsPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const initialMarket =
    category && (MARKET_FILTERS as readonly string[]).includes(category)
      ? category
      : null;

  return (
    <Suspense fallback={<ProjectsPageFallback />}>
      <ProjectsCatalog
        key={initialMarket ?? "all"}
        projects={projects}
        initialMarket={initialMarket}
      />
    </Suspense>
  );
}
