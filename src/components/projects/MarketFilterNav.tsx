import Link from "next/link";
import { MARKET_FILTERS } from "@/config/markets";
import { projectsCatalogHref } from "@/lib/projects-catalog";

type ChipVariant = "onRed" | "onLight";

export function MarketFilterNav({
  selected,
  variant = "onLight",
}: {
  selected: string | null;
  variant?: ChipVariant;
}) {
  const light = variant === "onLight";

  const chipClass = (active: boolean) =>
    `rounded-sm px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide transition sm:px-3.5 sm:py-2 sm:text-[11px] ${
      active
        ? light
          ? "bg-[var(--header-black)] text-white ring-1 ring-black/10"
          : "bg-[var(--header-black)] text-white ring-2 ring-white/30"
        : light
          ? "border border-[var(--color-border)] bg-white text-[var(--color-ink)] hover:border-[var(--color-ink-faint)]"
          : "bg-white text-[var(--header-black)] hover:bg-white/90"
    }`;

  return (
    <div className="mt-10">
      <p
        className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-[var(--color-ink-faint)]" : "text-white/85"}`}
      >
        Filter by category
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href={projectsCatalogHref(null)}
          className={chipClass(selected === null)}
          aria-current={selected === null ? "page" : undefined}
        >
          All
        </Link>
        {MARKET_FILTERS.map((m) => {
          const active = selected === m;
          return (
            <Link
              key={m}
              href={projectsCatalogHref(m)}
              className={chipClass(active)}
              aria-current={active ? "page" : undefined}
            >
              {m}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
