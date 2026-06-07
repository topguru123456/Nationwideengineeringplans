import Link from "next/link";

type Props = {
  categoryHref: string;
  primaryCategory: string;
  serviceLink: { href: string; label: string } | null;
};

export function ProjectDetailActions({
  categoryHref,
  primaryCategory,
  serviceLink,
}: Props) {
  const outlineBtn =
    "inline-flex min-h-10 items-center justify-center rounded-sm border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-ink-faint)] hover:bg-neutral-50";

  return (
    <nav
      className="mt-12 border-t border-[var(--color-border)] pt-8"
      aria-label="Project page actions"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2.5">
          <Link href={categoryHref} className={outlineBtn}>
            More {primaryCategory} projects
          </Link>
          {serviceLink ? (
            <Link href={serviceLink.href} className={outlineBtn}>
              {serviceLink.label}
            </Link>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2.5">
          <Link href="/projects" className={outlineBtn}>
            All projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-10 items-center justify-center rounded-sm bg-[var(--brand-red)] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
}
