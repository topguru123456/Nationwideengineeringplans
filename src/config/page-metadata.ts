/**
 * Per-route meta descriptions and titles for SEO. Each string is written to be
 * unique in intent and wording—avoid reusing `siteConfig.footerIntro` or the
 * global `siteConfig.description` verbatim here. Keep main + Open Graph aligned
 * by importing from this module only.
 */
import { siteConfig } from "./site";

const n = siteConfig.name;

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
    title: "Civil, Structural & MEP Permit Plans Nationwide",
    description: `${n}: civil, structural, and MEP permit plans—built for your jurisdiction’s submittal requirements, with Oregon-based coordination and nationwide delivery.`,
  },
  about: {
    title: "Licensed Civil & Structural Engineers",
    description: `Who we are and how we work: ${n} focuses on civil, structural, and MEP permit drawing packages—clear sheets, disciplined coordination, and responsive plan-check support.`,
  },
  services: {
    title: "Civil, Structural & MEP Permit Plans",
    description: `Civil, structural, and MEP documentation for permit services—basemaps, design sheets, calcs, and packages tuned to your code edition, occupancy, and local workflow.`,
  },
  contact: {
    title: "Contact for Permit Engineering Plans",
    description: `Start a permit package: call, email, WhatsApp, or book Calendly with ${n}. Share jurisdiction, discipline mix (civil / structural / MEP), and schedule—we confirm scope and timing.`,
  },
  projects: {
    title: "Engineering & Permit Plan Projects",
    description: `Representative civil, structural, MEP, and residential work—filter by market to see how ${n} scopes drawing support by location and services.`,
  },
} as const;
