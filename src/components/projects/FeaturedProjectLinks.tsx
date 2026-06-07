import Link from "next/link";

type Featured = { slug: string; label: string };

export function FeaturedProjectLinks({
  heading,
  projects,
}: {
  heading: string;
  projects: readonly Featured[];
}) {
  if (projects.length === 0) return null;

  return (
    <div className="mt-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">{heading}</p>
      <ul className="mt-3 space-y-2">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/projects/${p.slug}`}
              className="text-sm font-semibold text-[var(--brand-red)] underline-offset-4 hover:underline"
            >
              {p.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
