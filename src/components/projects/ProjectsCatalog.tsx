"use client";

import { useEffect, useMemo, useState } from "react";
import type { Project } from "@/types/project";
import { siteConfig } from "@/config/site";
import { paginate } from "@/lib/pagination";
import { MarketFilterChips } from "./MarketFilterChips";
import { ProjectCard } from "./ProjectCard";
import { ProjectsPagination } from "./ProjectsPagination";

const PAGE_SIZE = 9;

export function ProjectsCatalog({
  projects,
  initialMarket = null,
}: {
  projects: Project[];
  initialMarket?: string | null;
}) {
  const [market, setMarket] = useState<string | null>(initialMarket);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (!market) return projects;
    return projects.filter((p) => p.markets.includes(market));
  }, [projects, market]);

  const { items, totalPages, page: safePage } = useMemo(
    () => paginate(filtered, page, PAGE_SIZE),
    [filtered, page],
  );

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  return (
    <main className="min-h-screen bg-neutral-50 text-[var(--color-ink)]">
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Projects
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            Filter by discipline, then open a project for location, owner, services, and description.
          </p>
          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-neutral-500 sm:text-sm">
            {siteConfig.portfolioRepresentationNote}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pb-28 sm:pt-10">
        <MarketFilterChips
          variant="onLight"
          selected={market}
          onSelect={(nextMarket) => {
            setMarket(nextMarket);
            setPage(1);
          }}
        />
        <ProjectsPagination
          variant="onLight"
          placement="top"
          page={safePage}
          totalPages={totalPages}
          onPageChange={setPage}
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
        <ProjectsPagination
          variant="onLight"
          placement="bottom"
          page={safePage}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </main>
  );
}

export function ProjectsPageFallback() {
  return (
    <div className="min-h-[50vh] bg-neutral-50" aria-hidden />
  );
}
