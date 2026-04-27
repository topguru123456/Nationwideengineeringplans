import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

type Variant = "overlay" | "panel";

/** overlay = image card + gradient (red projects section). panel = light card for mixed layouts. */
export function ProjectCard({
  project,
  variant = "overlay",
}: {
  project: Project;
  variant?: Variant;
}) {
  if (variant === "panel") {
    return (
      <article className="group/card relative flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm transition duration-300 ease-out hover:-translate-y-1.5 hover:border-neutral-300 hover:shadow-2xl hover:ring-2 hover:ring-[var(--brand-red)]/20 active:translate-y-0 active:transition-none">
        <Link
          href={`/projects/${project.slug}`}
          className="relative block shrink-0 overflow-hidden"
        >
          <div className="relative aspect-[5/3] w-full max-h-[200px] bg-neutral-200 sm:max-h-[220px]">
            <Image
              src={project.coverImage.src}
              alt={project.coverImage.alt}
              fill
              className="object-cover transition duration-500 ease-out group-hover/card:scale-[1.06]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-80 transition duration-300 group-hover/card:opacity-100" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover/card:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-neutral-900 shadow-lg ring-1 ring-black/10">
                View project
                <svg className="h-4 w-4 transition group-hover/card:translate-x-0.5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </Link>
        <div className="flex flex-1 flex-col p-4">
          <p className="text-[11px] font-bold uppercase tracking-wide text-[var(--color-ink-faint)]">
            {project.location}
          </p>
          <h2 className="mt-1.5 text-base font-bold leading-snug text-[var(--color-ink)] sm:text-[17px]">
            <Link
              href={`/projects/${project.slug}`}
              className="transition hover:text-[var(--brand-red)]"
            >
              {project.title}
            </Link>
          </h2>
          <p className="mt-2 line-clamp-3 flex-1 text-[13px] leading-snug text-[var(--color-ink-muted)] sm:text-sm sm:leading-relaxed">
            {project.excerpt}
          </p>
          <Link
            href={`/projects/${project.slug}`}
            className="mt-3 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-[var(--brand-red)] underline-offset-4 transition hover:gap-2 hover:underline"
          >
            Read more
            <span aria-hidden>→</span>
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-black sm:aspect-[4/5]">
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10 outline-offset-4 transition hover:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        <span className="sr-only">{project.title}</span>
      </Link>
      <Image
        src={project.coverImage.src}
        alt={project.coverImage.alt}
        fill
        className="object-cover transition duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--card-overlay-bottom)] via-black/45 to-black/20 transition duration-500 group-hover:via-black/55" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] p-5 transition duration-300 group-hover:translate-y-[-4px] sm:p-6">
        <h2 className="text-lg font-bold leading-snug text-white sm:text-xl">{project.title}</h2>
        <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-white/88">{project.excerpt}</p>
      </div>
    </article>
  );
}
