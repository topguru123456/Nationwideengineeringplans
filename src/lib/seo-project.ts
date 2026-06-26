import type { Metadata } from "next";
import type { Project } from "@/types/project";
import { buildPageMetadata } from "@/lib/page-seo";

const MAX = 160;

function normalizeSpaces(s: string) {
  return s.replace(/\s+/g, " ").trim();
}

function clip(s: string, max: number): string {
  const t = normalizeSpaces(s);
  if (t.length <= max) return t;
  return `${t.slice(0, Math.max(0, max - 1)).trim()}…`;
}

/**
 * Meta description for a project: always leads with title + location + markets
 * so snippets differ even when body paragraphs share tone from similar jobs.
 */
export function metaDescriptionForProject(project: Project): string {
  if (project.metaDescription) {
    return clip(project.metaDescription, MAX);
  }
  const markets = project.markets.length ? project.markets.slice(0, 3).join(", ") : "Engineering";
  const head = `${project.title} — ${project.location}. ${markets}.`;
  const headNorm = normalizeSpaces(head);
  if (headNorm.length >= MAX) return clip(headNorm, MAX);

  const restRoom = MAX - headNorm.length - 1;
  if (restRoom < 20) return clip(headNorm, MAX);

  const fromBody = clip(project.description, restRoom);
  return normalizeSpaces(`${headNorm} ${fromBody}`);
}

export function buildProjectDetailMetadata(project: Project, slug: string): Metadata {
  return buildPageMetadata({
    title: project.title,
    description: metaDescriptionForProject(project),
    path: `/projects/${slug}`,
    image: project.coverImage.src,
    imageAlt: project.title,
  });
}
