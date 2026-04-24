"use client";

import { MARKET_FILTERS } from "@/config/markets";

type ChipVariant = "onRed" | "onLight";

export function MarketFilterChips({
  selected,
  onSelect,
  variant = "onRed",
}: {
  selected: string | null;
  onSelect: (market: string | null) => void;
  variant?: ChipVariant;
}) {
  const light = variant === "onLight";
  return (
    <div className="mt-10">
      <p
        className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-[var(--color-ink-faint)]" : "text-white/85"}`}
      >
        Filter by category
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onSelect(null)}
          className={`rounded-sm px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide transition sm:px-3.5 sm:py-2 sm:text-[11px] ${
            selected === null
              ? light
                ? "bg-[var(--header-black)] text-white ring-1 ring-black/10"
                : "bg-[var(--header-black)] text-white ring-2 ring-white/30"
              : light
                ? "border border-[var(--color-border)] bg-white text-[var(--color-ink)] hover:border-[var(--color-ink-faint)]"
                : "bg-white text-[var(--header-black)] hover:bg-white/90"
          }`}
        >
          All
        </button>
        {MARKET_FILTERS.map((m) => {
          const active = selected === m;
          return (
            <button
              key={m}
              type="button"
              onClick={() => onSelect(active ? null : m)}
              className={`rounded-sm px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide transition sm:px-3.5 sm:py-2 sm:text-[11px] ${
                active
                  ? light
                    ? "bg-[var(--header-black)] text-white ring-1 ring-black/10"
                    : "bg-[var(--header-black)] text-white ring-2 ring-white/30"
                  : light
                    ? "border border-[var(--color-border)] bg-white text-[var(--color-ink)] hover:border-[var(--color-ink-faint)]"
                    : "bg-white text-[var(--header-black)] hover:bg-white/90"
              }`}
            >
              {m}
            </button>
          );
        })}
      </div>
    </div>
  );
}
