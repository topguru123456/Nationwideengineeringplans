import Link from "next/link";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { homeFeaturedProjectSlugs } from "@/config/home-landing";
import { getProjectBySlug } from "@/data/projects";

export function HomeProjectsBand() {
  const picks = homeFeaturedProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section
      className="border-t border-neutral-200 bg-white py-20 shadow-[inset_0_1px_0_0_rgba(255,255,255,1)] sm:py-24"
      aria-labelledby="home-projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="home-projects-heading"
          className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
        >
          Selected projects
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
          Representative civil, residential, and commercial work across the markets we serve.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((p) => (
            <ProjectCard key={p.slug} project={p} variant="panel" />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex min-h-10 items-center justify-center border border-neutral-900 bg-white px-8 py-2.5 text-[13px] font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
          >
            Browse all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
