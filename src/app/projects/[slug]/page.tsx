import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailLayout } from "@/components/projects/ProjectDetailLayout";
import { pageMetadata } from "@/config/page-metadata";
import { getProjectBySlug, getProjectSlugs } from "@/data/projects";
import { documentTitle } from "@/lib/page-seo";
import { buildProjectDetailMetadata } from "@/lib/seo-project";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: documentTitle(pageMetadata.projectNotFound.title) };
  return buildProjectDetailMetadata(project, slug);
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[var(--color-surface)]">
      <ProjectDetailLayout project={project} />
    </main>
  );
}
