import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/config/page-metadata";
import { buildPageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Page Not Found",
  description: `The page you requested is not on ${pageMetadata.home.title}. Browse services, projects, or contact us for civil, structural, and MEP permit plans.`,
  path: "/",
  image: "/assets/images/landing/hero.jpg",
  robots: { index: false, follow: true },
});

export default function NotFound() {
  return (
    <main className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold text-[var(--color-ink)]">Page not found</h1>
      <p className="mt-3 text-[var(--color-ink-muted)]">
        That URL is not on our site. Try the home page or contact us if you need help.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
        <Link href="/" className="text-[var(--color-accent)] hover:underline">
          Home
        </Link>
        <Link href="/services" className="text-[var(--color-accent)] hover:underline">
          Services
        </Link>
        <Link href="/projects" className="text-[var(--color-accent)] hover:underline">
          Projects
        </Link>
        <Link href="/contact" className="text-[var(--color-accent)] hover:underline">
          Contact
        </Link>
      </div>
    </main>
  );
}
