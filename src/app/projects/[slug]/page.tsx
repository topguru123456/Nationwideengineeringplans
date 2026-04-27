import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailLayout } from "@/components/projects/ProjectDetailLayout";
import { siteConfig } from "@/config/site";
import { getProjectBySlug, getProjectSlugs } from "@/data/projects";
import { metaDescriptionForProject } from "@/lib/seo-project";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  const description = metaDescriptionForProject(project);
  const ogTitle = `${project.title} | ${siteConfig.name}`;
  return {
    title: project.title,
    description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: ogTitle,
      description,
      url: `/projects/${slug}`,
      images: [
        {
          url: project.coverImage.src,
          width: project.coverImage.width,
          height: project.coverImage.height,
        },
      ],
    },
    twitter: {
      title: ogTitle,
      description,
    },
  };
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
