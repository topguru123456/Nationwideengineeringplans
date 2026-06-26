/**
 * Per-route SEO: document title, visible H1, meta description, and optional intro.
 * Title segments get ` | {brand}` via `buildPageMetadata`. Descriptions must not
 * repeat the H1 or intro verbatim (cleaner Google snippets).
 */
import { siteConfig } from "./site";

const n = siteConfig.name;

export type PageSeoFields = {
  title: string;
  h1: string;
  description: string;
  intro?: string;
};

/** Static OG image paths — reuse existing public assets (no new media). */
export const pageOgImages = {
  home: "/assets/images/landing/hero.jpg",
  about: "/assets/images/about/who-we-are.jpg",
  services: "/assets/images/services/hero-home.jpg",
  contact: "/assets/images/about/process.jpg",
  projects: "/assets/images/landing/about-a.jpg",
} as const;

export const pageMetadata = {
  home: {
    title: n,
    h1: n,
    intro:
      "Civil, structural, and MEP plans for permit review, built to match how your jurisdiction works",
    description: `Permit-ready civil, structural, and MEP drawing sets nationwide—coordinated submittals, licensed in all 50 states, with Oregon-based engineering coordination.`,
  },
  about: {
    title: "About Us",
    h1: "About Us",
    description: `Who we are: ${n} delivers civil, structural, and MEP permit drawing packages—licensed engineers, clear sheets, disciplined coordination, and responsive plan-check support.`,
  },
  services: {
    title: "Services",
    h1: "Services",
    intro:
      "Permit submittal for civil, structural, and MEP—basemaps, framing, calculations, and coordinated sheets packaged for your AHJ.",
    description: `Explore civil, structural, and MEP deliverables for permit services—basemaps, design sheets, calculations, and packages tuned to your code edition and local workflow.`,
  },
  contact: {
    title: "Contact",
    h1: "Contact",
    intro:
      "Share your project type, jurisdiction, and timeline. We respond with a clear next step, likely services, and the best path for permit planning.",
    description: `Call, email, WhatsApp, or book Calendly with ${n}. Tell us your jurisdiction and discipline mix—we confirm scope, timing, and next steps.`,
  },
  projects: {
    title: "Projects",
    h1: "Projects",
    intro:
      "Filter by discipline, then open a project for location, owner, services, and description.",
    description: `Representative civil, structural, MEP, and residential work—filter by market, then open a project for location, owner, services, and scope notes.`,
  },
  projectNotFound: {
    title: "Project Not Found",
    h1: "Project not found",
    description: `That project is not in the ${n} catalog. Browse our portfolio or contact us to discuss civil, structural, or MEP permit plans for your job.`,
  },
} as const satisfies Record<string, PageSeoFields>;

/** SEO for filtered `/projects?category=…` views. */
export function projectsCategoryMetadata(category: string): Pick<PageSeoFields, "title" | "description"> {
  return {
    title: `${category} Projects`,
    description: `${category} engineering and permit plan examples from ${n}—browse location, scope, and services in our portfolio.`,
  };
}
