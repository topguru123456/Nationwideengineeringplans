import type { Project } from "@/types/project";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/config/page-metadata";
import { MarketFilterNav } from "./MarketFilterNav";
import { ProjectCard } from "./ProjectCard";
import { ProjectsPaginationLinks } from "./ProjectsPaginationLinks";

export function ProjectsCatalog({
  items,
  page,
  totalPages,
  category,
}: {
  items: Project[];
  page: number;
  totalPages: number;
  category: string | null;
}) {
  const heading = category ? `${category} Projects` : pageMetadata.projects.h1;

  return (
    <main className="min-h-screen bg-neutral-50 text-[var(--color-ink)]">
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {heading}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            {pageMetadata.projects.intro}
            Need plans for a new job? Explore our{" "}
            <Link
              href="/services"
              className="font-semibold text-[var(--brand-red)] underline-offset-4 hover:underline"
            >
              civil, structural, and MEP services
            </Link>
            , or{" "}
            <Link
              href="/contact"
              className="font-semibold text-[var(--brand-red)] underline-offset-4 hover:underline"
            >
              contact us to scope a project
            </Link>
            .
          </p>
          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-neutral-500 sm:text-sm">
            {siteConfig.portfolioRepresentationNote}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pb-28 sm:pt-10">
        <MarketFilterNav selected={category} variant="onLight" />
        <ProjectsPaginationLinks
          variant="onLight"
          placement="top"
          page={page}
          totalPages={totalPages}
          category={category}
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {items.map((p) => (
            <ProjectCard key={p.slug} project={p} variant="panel" />
          ))}
        </div>
        {items.length === 0 ? (
          <p className="mt-12 text-center text-neutral-600">
            No projects match this category yet.
          </p>
        ) : null}
        <ProjectsPaginationLinks
          variant="onLight"
          placement="bottom"
          page={page}
          totalPages={totalPages}
          category={category}
        />
      </div>
    </main>
  );
}

export function ProjectsPageFallback() {
  return <div className="min-h-[50vh] bg-neutral-50" aria-hidden />;
}
