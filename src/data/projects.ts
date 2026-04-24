import raw from "../../project.json";
import { slugify } from "@/lib/slugify";
import type { Project } from "@/types/project";
import { houseDesignProjects } from "./houseDesignProjects";

const PROJECT_IMAGE_BASE = "/assets/images/projects";

type RawProject = {
  Title: string;
  CATEGORIES: string;
  OWNER?: string;
  LOCATION: string;
  "SERVICES PROVIDED": string;
  DESCRIPTION: string;
  IMAGE: string;
  PLAN_IMAGE?: string;
};

function parseCategories(csv: string): string[] {
  return csv
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function parseServices(block: string): string[] {
  return block
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function excerptFrom(text: string, max = 180): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trim()}…`;
}

function bodyFromDescription(description: string): string[] {
  const parts = description.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  return parts.length ? parts : [description.trim()].filter(Boolean);
}

function buildProjects(): Project[] {
  const rawRows = (raw as { projects: RawProject[] }).projects;
  const seededRows: RawProject[] = houseDesignProjects.map((project) => ({
    Title: project.title,
    CATEGORIES: project.markets.join(", "),
    OWNER: project.owner,
    LOCATION: project.location,
    "SERVICES PROVIDED": project.services.join("\n"),
    DESCRIPTION: project.description,
    IMAGE: project.image,
    PLAN_IMAGE: project.planImage,
  }));
  const rows = [...seededRows, ...rawRows];
  const usedSlugs = new Set<string>();

  return rows.map((row) => {
    const title = row.Title.trim();
    let slug = slugify(title);
    if (usedSlugs.has(slug)) {
      let i = 2;
      while (usedSlugs.has(`${slugify(title)}-${i}`)) i += 1;
      slug = `${slugify(title)}-${i}`;
    }
    usedSlugs.add(slug);

    const categories = parseCategories(row.CATEGORIES);
    const owner = (row.OWNER ?? "").trim();
    const location = row.LOCATION.trim();
    const services = parseServices(row["SERVICES PROVIDED"]);
    const description = row.DESCRIPTION.trim();
    const imageFile = row.IMAGE.trim();
    const src = `${PROJECT_IMAGE_BASE}/${imageFile}`;
    const planSrc = row.PLAN_IMAGE?.trim()
      ? `${PROJECT_IMAGE_BASE}/${row.PLAN_IMAGE.trim()}`
      : undefined;

    return {
      slug,
      title,
      excerpt: excerptFrom(description),
      location,
      markets: categories,
      owner,
      services,
      description,
      body: bodyFromDescription(description),
      coverImage: {
        src,
        alt: title,
        width: 1600,
        height: 1000,
      },
      planImage: planSrc
        ? {
            src: planSrc,
            alt: `${title} floor plan`,
            width: 1600,
            height: 1000,
          }
        : undefined,
    } satisfies Project;
  });
}

export const projects: Project[] = buildProjects();

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
