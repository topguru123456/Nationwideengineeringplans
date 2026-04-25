"use client";

type Props = {
  page: number;
  totalPages: number;
  onPageChange: (p: number) => void;
  /** Style variant: light controls on red or white backgrounds */
  variant?: "onRed" | "onLight";
};

export function ProjectsPagination({
  page,
  totalPages,
  onPageChange,
  variant = "onRed",
}: Props) {
  if (totalPages <= 1) return null;

  const onRed = variant === "onRed";
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const btnBase =
    "flex min-h-9 min-w-9 items-center justify-center rounded-full text-sm font-bold transition disabled:opacity-35";

  return (
    <nav
      className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:mt-14 sm:gap-3"
      aria-label="Project list pagination"
    >
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className={`${btnBase} ${onRed ? "text-white hover:bg-white/10" : "text-[var(--color-ink)] hover:bg-black/5"}`}
        aria-label="Previous page"
      >
        ‹
      </button>
      {pages.map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onPageChange(n)}
          aria-current={n === page ? "page" : undefined}
          className={`${btnBase} ${
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
        </button>
      ))}
      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className={`${btnBase} ${onRed ? "text-white hover:bg-white/10" : "text-[var(--color-ink)] hover:bg-black/5"}`}
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
}
