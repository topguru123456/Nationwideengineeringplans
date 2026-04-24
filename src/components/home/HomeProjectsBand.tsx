"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { MarketFilterChips } from "@/components/projects/MarketFilterChips";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectsPagination } from "@/components/projects/ProjectsPagination";
import { paginate } from "@/lib/pagination";
import { Reveal } from "@/components/ui/Reveal";

const PAGE_SIZE = 6;

export function HomeProjectsBand() {
  const [market, setMarket] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [market]);

  const filtered = useMemo(() => {
    if (!market) return projects;
    return projects.filter((p) => p.markets.includes(market));
  }, [market]);

  const { items, totalPages, page: safePage } = useMemo(
    () => paginate(filtered, page, PAGE_SIZE),
    [filtered, page],
  );

  useEffect(() => {
    if (filtered.length > 0 && safePage !== page) setPage(safePage);
  }, [safePage, page, filtered.length]);

  return (
    <section
      className="border-t border-neutral-200 bg-white py-20 shadow-[inset_0_1px_0_0_rgba(255,255,255,1)] sm:py-24"
      aria-labelledby="home-projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2
            id="home-projects-heading"
            className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Selected projects
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Representative work—filter by category, or browse the full project list.
          </p>
        </Reveal>
        <MarketFilterChips variant="onLight" selected={market} onSelect={setMarket} />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.slug} y={12} delayMs={i * 35}>
              <ProjectCard project={p} variant="panel" />
            </Reveal>
          ))}
        </div>
        {items.length === 0 ? (
          <p className="mt-10 text-center text-sm text-neutral-600">No projects in this category.</p>
        ) : null}
        <ProjectsPagination
          variant="onLight"
          page={safePage}
          totalPages={totalPages}
          onPageChange={setPage}
        />
        <Reveal className="mt-10 text-center" y={8}>
          <Link
            href="/projects"
            className="inline-flex min-h-10 items-center justify-center border border-neutral-900 bg-white px-8 py-2.5 text-[13px] font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
          >
            All projects
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
