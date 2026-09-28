/** Shared contact-form choices — form UI and /api/contact must use the same lists. */

export const PROJECT_TYPES = [
  "New Custom Home",
  "Residential Addition or Remodel",
  "ADU, Garage, or Accessory Structure",
  "Multifamily Residential",
  "Commercial Tenant Improvement",
  "New Commercial Building",
  "Restaurant or Hospitality",
  "Retail or Office",
  "Industrial or Warehouse",
  "Metal Building or Barndominium",
  "Site Development or Land Improvement",
  "Structural Repair or Assessment",
  "Permit Revision or Code Correction",
  "Other / Not Sure",
] as const;

export const ENGINEERING_SERVICES = [
  "Licensed Professional Engineer (PE) Stamp/Seal",
  "Architectural Plans",
  "Structural Engineering",
  "Foundation or Slab Design",
  "Mechanical Engineering / HVAC",
  "Electrical Engineering",
  "Plumbing Engineering",
  "Civil or Site Engineering",
  "Grading and Drainage",
  "Retaining Wall Engineering",
  "Energy Calculations",
  "Structural Inspection or Evaluation",
  "Permit Review and Corrections",
  "Engineering Calculations",
  "Not Sure — Please Advise",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];
export type EngineeringService = (typeof ENGINEERING_SERVICES)[number];

const projectTypeSet = new Set<string>(PROJECT_TYPES);
const serviceSet = new Set<string>(ENGINEERING_SERVICES);

export function isProjectType(value: string): value is ProjectType {
  return projectTypeSet.has(value);
}

/** Keep only known service labels, in the canonical list order. */
export function normalizeEngineeringServices(value: unknown): EngineeringService[] {
  if (!Array.isArray(value)) return [];
  const picked = new Set<string>();
  for (const item of value) {
    if (typeof item === "string" && serviceSet.has(item.trim())) {
      picked.add(item.trim());
    }
  }
  return ENGINEERING_SERVICES.filter((service) => picked.has(service));
}
