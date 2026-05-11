/** Filter chips on /projects (order matches product request). */
export const MARKET_FILTERS = [
  "Commercial",
  "Construction Management",
  "House Design",
  "Residential",
  "Site Civil",
  "Transportation",
  "Water Resources",
] as const;

export type MarketFilter = (typeof MARKET_FILTERS)[number];
