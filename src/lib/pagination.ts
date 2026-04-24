export type Paginated<T> = {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export function paginate<T>(
  all: T[],
  page: number,
  pageSize: number,
): Paginated<T> {
  const total = all.length;
  if (total === 0) {
    return {
      items: [],
      page: 1,
      pageSize,
      total: 0,
      totalPages: 0,
      hasNext: false,
      hasPrev: false,
    };
  }
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  const items = all.slice(start, start + pageSize);
  return {
    items,
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}

export function parsePageParam(raw: string | string[] | undefined): number {
  if (raw === undefined) return 1;
  const s = Array.isArray(raw) ? raw[0] : raw;
  const n = parseInt(s, 10);
  return Number.isFinite(n) && n > 0 ? n : 1;
}
