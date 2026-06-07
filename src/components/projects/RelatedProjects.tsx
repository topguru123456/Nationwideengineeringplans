import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

export function RelatedProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <section className="mt-14 border-t border-[var(--color-border)] pt-10">
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
        Related projects
      </h2>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.slug}>
            <article className="group/card flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-white shadow-sm transition hover:border-neutral-300 hover:shadow-md">
              <Link href={`/projects/${p.slug}`} className="relative block shrink-0 overflow-hidden">
                <div className="relative aspect-[4/3] w-full bg-neutral-200">
                  <Image
                    src={p.coverImage.src}
                    alt={p.coverImage.alt}
                    fill
                    quality={75}
                    className="object-cover transition duration-500 group-hover/card:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                  <p className="absolute bottom-2.5 left-3 text-[10px] font-bold uppercase tracking-wide text-white/90">
                    {p.location}
                  </p>
                </div>
              </Link>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-bold leading-snug text-[var(--color-ink)] sm:text-[15px]">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="transition hover:text-[var(--brand-red)]"
                  >
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-[var(--color-ink-muted)] sm:text-[13px]">
                  {p.excerpt}
                </p>
                <Link
                  href={`/projects/${p.slug}`}
                  className="mt-3 inline-flex w-fit items-center gap-1 text-xs font-semibold text-[var(--brand-red)] transition hover:gap-1.5"
                >
                  View project
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
