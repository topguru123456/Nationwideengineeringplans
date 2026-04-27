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
    description: `${n}: remote survey, civil, structural, and MEP permit plans—built for your jurisdiction’s submittal requirements, with Oregon-based coordination and nationwide delivery.`,
  },
  about: {
    title: "About Us",
    description: `Who we are and how we work: ${n} focuses on remote survey, civil, structural, and MEP permit drawing packages—clear sheets, disciplined coordination, and responsive plan-check support.`,
  },
  services: {
    title: "Our Services",
    description: `Survey, civil, structural, and MEP documentation for permit services—basemaps, design sheets, calcs, and packages tuned to your code edition, occupancy, and remote submittal workflow.`,
  },
  contact: {
    title: "Contact",
    description: `Start a remote permit package: call, email, WhatsApp, or book Calendly with ${n}. Share jurisdiction, discipline mix (survey/civil/structural/MEP), and schedule—we confirm scope and timing.`,
  },
  projects: {
    title: "Projects",
    description: `Representative survey, civil, structural, MEP, and residential work—filter by market to see how ${n} scopes remote permit drawing support by location and services.`,
  },
} as const;
