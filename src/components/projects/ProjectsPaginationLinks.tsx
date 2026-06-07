import Link from "next/link";
import { projectsCatalogHref } from "@/lib/projects-catalog";

type Props = {
  page: number;
  totalPages: number;
  category: string | null;
  variant?: "onRed" | "onLight";
  placement?: "top" | "bottom";
};

export function ProjectsPaginationLinks({
  page,
  totalPages,
  category,
  variant = "onLight",
  placement = "bottom",
}: Props) {
  if (totalPages <= 1) return null;

  const onRed = variant === "onRed";
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const ariaPlacement = placement === "top" ? " (top of list)" : " (end of list)";

  const linkBase =
    "flex min-h-9 min-w-9 items-center justify-center rounded-full text-sm font-bold transition";
  const marginClass = placement === "top" ? "mt-8 sm:mt-10" : "mt-12 sm:mt-14";

  const prevClass = `${linkBase} ${
    page <= 1
      ? "pointer-events-none opacity-35"
      : onRed
        ? "text-white hover:bg-white/10"
        : "text-[var(--color-ink)] hover:bg-black/5"
  }`;

  const nextClass = `${linkBase} ${
    page >= totalPages
      ? "pointer-events-none opacity-35"
      : onRed
        ? "text-white hover:bg-white/10"
        : "text-[var(--color-ink)] hover:bg-black/5"
  }`;

  return (
    <nav
      className={`${marginClass} flex flex-wrap items-center justify-center gap-2 sm:gap-3`}
      aria-label={`Project list pagination${ariaPlacement}`}
    >
      {page > 1 ? (
        <Link
          href={projectsCatalogHref(category, page - 1)}
          rel="prev"
          className={prevClass}
          aria-label="Previous page"
        >
          ‹
        </Link>
      ) : (
        <span className={prevClass} aria-hidden>
          ‹
        </span>
      )}
      {pages.map((n) => (
        <Link
          key={n}
          href={projectsCatalogHref(category, n)}
          aria-current={n === page ? "page" : undefined}
          className={`${linkBase} ${
            n === page
              ? onRed
                ? "bg-white text-[var(--brand-red)] shadow-md"
                : "bg-[var(--header-black)] text-white"
              : onRed
                ? "border border-white/45 text-white hover:bg-white/12"
                : "border border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--color-ink)]"
          }`}
        >
          {n}
        </Link>
      ))}
      {page < totalPages ? (
        <Link
          href={projectsCatalogHref(category, page + 1)}
          rel="next"
          className={nextClass}
          aria-label="Next page"
        >
          ›
        </Link>
      ) : (
        <span className={nextClass} aria-hidden>
          ›
        </span>
      )}
    </nav>
  );
}
