import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold text-[var(--color-ink)]">
        Project not found
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
