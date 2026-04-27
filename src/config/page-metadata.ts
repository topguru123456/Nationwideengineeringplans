/**
 * Per-route meta descriptions and titles for SEO. Each string is written to be
 * unique in intent and wording—avoid reusing `siteConfig.footerIntro` or the
 * global `siteConfig.description` verbatim here. Keep main + Open Graph aligned
 * by importing from this module only.
 */
import { siteConfig } from "./site";

const n = siteConfig.name;

export const pageMetadata = {
  home: {
    description: `${n} (Oregon): coordinated permit drawing packages—architecture, structure, civil, and MEP—with PE support and plan-review responsiveness for work nationwide.`,
  },
  about: {
    title: "About Us",
    description: `Our team, process, and standards: how ${n} runs multidisciplinary submittals, RFI support, and permit-ready details for clients in Oregon and other jurisdictions.`,
  },
  services: {
    title: "Our Services",
    description: `Discipline-by-discipline help: civil, structural, and MEP sheets; architectural coordination; and plan management—scoped to your occupancy, code edition, and site constraints.`,
  },
  contact: {
    title: "Contact",
    description: `Contact ${n} by phone, email, WhatsApp, or Calendly. Share jurisdiction and scope—we reply with timing and next steps (Oregon-based firm, projects nationwide).`,
  },
  projects: {
    title: "Projects",
    description: `Case studies: civil, survey, residential, MEP, and custom house design—filter by market to see scope, location, and services for each ${n} project.`,
  },
} as const;
