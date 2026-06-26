import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, pageOgImages } from "@/config/page-metadata";
import { buildPageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = buildPageMetadata({
  title: pageMetadata.projectNotFound.title,
  description: pageMetadata.projectNotFound.description,
  path: "/projects",
  image: pageOgImages.projects,
  robots: { index: false, follow: true },
});

export default function ProjectNotFound() {
  return (
    <main className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold text-[var(--color-ink)]">
        {pageMetadata.projectNotFound.h1}
      </h1>
      <p className="mt-3 text-[var(--color-ink-muted)]">
        That slug is not in the current catalog.
      </p>
      <Link
        href="/projects"
        className="mt-8 inline-block text-sm font-semibold text-[var(--color-accent)] hover:underline"
      >
        Back to projects
      </Link>
    </main>
  );
}
