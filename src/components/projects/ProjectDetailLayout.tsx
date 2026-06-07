import Image from "next/image";
import Link from "next/link";
import { MARKET_FILTERS } from "@/config/markets";
import { getRelatedProjects } from "@/data/projects";
import type { Project } from "@/types/project";
import { serviceLinkForMarket } from "@/lib/projects-catalog";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { ProjectImageGallery } from "./ProjectImageGallery";
import { ProjectDetailActions } from "./ProjectDetailActions";
import { RelatedProjects } from "./RelatedProjects";

function heroLead(text: string, max = 240) {
  const t = text.replace(/\s+/g, " ").trim();
  const m = t.match(/^(.+?[.!?])(\s|$)/);
  const s = m ? m[1]! : t;
  return s.length > max ? `${s.slice(0, max - 1).trim()}…` : s;
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="9" cy="9" r="9" fill="currentColor" />
      <path
        d="M5 9l2.5 2.5L13 6"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SidebarBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-[var(--color-border)] py-5 first:pt-0 last:border-b-0 last:pb-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
        {label}
      </p>
      <div className="mt-2 text-[15px] leading-relaxed text-[var(--color-ink)]">
        {children}
      </div>
    </div>
  );
}

export function ProjectDetailLayout({ project }: { project: Project }) {
  const primaryCategory = project.markets[0] ?? "Project";
  const categoryHref =
    primaryCategory &&
    (MARKET_FILTERS as readonly string[]).includes(primaryCategory)
      ? `/projects?category=${encodeURIComponent(primaryCategory)}`
      : "/projects";
  const serviceLink = serviceLinkForMarket(primaryCategory);
  const related = getRelatedProjects(project, 3);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: primaryCategory, href: categoryHref },
    { label: project.title, href: null as string | null },
  ];

  return (
    <article className="bg-[var(--color-surface)]">
      <BreadcrumbListJsonLd items={crumbs} />
      <header className="relative min-h-[220px] w-full sm:min-h-[280px] lg:min-h-[320px]">
        <Image
          src={project.coverImage.src}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          quality={75}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/25" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 sm:pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/90 sm:text-sm">
              Projects
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              {heroLead(project.scopeNarrative ?? project.description)}
            </p>
          </div>
          <nav
            aria-label="Breadcrumb"
            className="border-t border-white/15 bg-black/45 px-4 py-3 backdrop-blur-sm sm:px-6"
          >
            <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-1 gap-y-1 text-[11px] font-medium uppercase tracking-wide text-white/80 sm:text-xs">
              <li className="sr-only">You are here: </li>
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-x-1">
                  {i > 0 ? (
                    <span className="text-white/45" aria-hidden>
                      /
                    </span>
                  ) : null}
                  {c.href ? (
                    <Link href={c.href} className="hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="max-w-[min(100%,48rem)] truncate text-white">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="text-3xl font-light tracking-tight text-[var(--color-ink-muted)] sm:text-4xl lg:text-[2.35rem]">
          {project.title}
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <ProjectImageGallery project={project} />
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-surface-muted)]/60 px-5 py-1 sm:px-6">
              <SidebarBlock label="Categories">
                <p>{project.markets.join(", ")}</p>
              </SidebarBlock>
              <SidebarBlock label="Owner">
                {project.owner ? (
                  <p className="italic text-[var(--color-ink-muted)]">{project.owner}</p>
                ) : (
                  <p className="text-[var(--color-ink-faint)]">—</p>
                )}
              </SidebarBlock>
              <SidebarBlock label="Location">
                <p className="italic text-[var(--color-ink-muted)]">{project.location}</p>
                {project.jurisdiction ? (
                  <p className="mt-1 text-sm text-[var(--color-ink-faint)]">
                    Jurisdiction: {project.jurisdiction}
                  </p>
                ) : null}
              </SidebarBlock>
              <SidebarBlock label="Services provided">
                <ul className="space-y-2.5">
                  {project.services.map((line) => (
                    <li key={line} className="flex gap-2.5">
                      <CheckIcon className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </SidebarBlock>
            </div>
          </aside>
        </div>

        <div className="mt-14 border-t border-[var(--color-border)] pt-10">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
            Description
          </h2>
          <div className="mt-5 max-w-3xl space-y-5 text-[15px] leading-[1.7] text-[var(--color-ink-muted)]">
            {project.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          {project.challenge || project.solution ? (
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {project.challenge ? (
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
                    Challenge
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[var(--color-ink-muted)]">
                    {project.challenge}
                  </p>
                </div>
              ) : null}
              {project.solution ? (
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
                    Solution
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[var(--color-ink-muted)]">
                    {project.solution}
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <RelatedProjects projects={related} />

        <ProjectDetailActions
          categoryHref={categoryHref}
          primaryCategory={primaryCategory}
          serviceLink={serviceLink}
        />
      </div>
    </article>
  );
}
