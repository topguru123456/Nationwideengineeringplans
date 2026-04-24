/**
 * About page — copy + image paths.
 * Images: `public/assets/images/about/`
 * Hero video: `public/assets/video/aboutus-hero.mp4`
 */
import { siteConfig } from "@/config/site";

export const aboutHeroVideoSrc = "/assets/video/aboutus-hero.mp4";

/** Values section — “play” opens this in a new tab */
export const aboutValuesYoutubeUrl = "https://www.youtube.com/watch?v=PxJ3RrQebaE" as const;

export const aboutPageImages = {
  hero: "/assets/images/about/hero.jpg",
  whoWeAre: "/assets/images/about/who-we-are.jpg",
  valuesInterior: "/assets/images/about/values-interior.jpg",
  team: "/assets/images/about/team.jpg",
  process: "/assets/images/about/process.jpg",
  cta: "/assets/images/about/cta.jpg",
} as const;

export const aboutHero = {
  title: "About us",
} as const;

export const aboutWhoWeAre = {
  eyebrow: "Who we are",
  headline: "Engineering plans built for real sites, real reviewers, and real construction.",
  body: [
    `${siteConfig.name} brings architectural, structural, civil, and MEP documentation together so owners and design teams are not chasing fragments at permit.`,
    "We focus on coordinated drawing sets, calculations where they matter, and clear responses through plan review—whether the job is a custom home, a multifamily wrap, or a commercial suite.",
    "Licensed professionals stay involved from scope definition through stamping and revisions, so questions get answers from the people who signed the sheets.",
  ],
} as const;

export const aboutValues = {
  eyebrow: "Our values",
  headline: "Quality that holds up in review and in the field",
  intro:
    "We treat every submittal like our reputation rides on it—because it does. Clear narratives, consistent sheet logic, and discipline boundaries that match your contract.",
  vision: {
    title: "Our vision",
    text: "Permit-ready documentation should feel inevitable: complete enough for the AHJ, buildable enough for the contractor, and honest about what is in scope.",
  },
  mission: {
    title: "Our mission",
    text: "Deliver coordinated plans and engineering support nationwide—with responsive communication and PE stamping where your jurisdiction requires it.",
  },
} as const;

export const aboutTeam = {
  eyebrow: "Our team",
  headline: "Experienced professionals behind every package",
  body:
    "Multidiscipline projects need people who talk to each other before the sheets hit the portal. Our leads coordinate structure, envelope, and systems so redlines do not become surprises on site.",
  skills: [
    { label: "Plan review readiness", pct: 92 },
    { label: "Code & energy coordination", pct: 88 },
    { label: "Drawing accuracy & consistency", pct: 95 },
    { label: "Client communication", pct: 90 },
  ],
} as const;

export const aboutProcess = {
  eyebrow: "Our process",
  headline: "From first conversation to stamped set",
  steps: [
    {
      title: "Step 1 — Tell us about the job",
      text: "Share location, jurisdiction, schedule, and what you need stamped. We confirm scope, fees, and deliverables in writing before work begins.",
    },
    {
      title: "Step 2 — Design & documentation",
      text: "We produce and coordinate your drawing package—architecture, structure, civil, MEP, energy, and specialty consultants as agreed—so reviewers see one story.",
    },
    {
      title: "Step 3 — Permit & follow-through",
      text: "We support submittal, design review, and building department Q&A, then revisions through approval so you can move to construction with confidence.",
    },
  ],
} as const;

export const aboutFinalCta = {
  eyebrow: "Ready for coordinated plans?",
  headline: "Let’s align scope, schedule, and the right disciplines for your next project.",
  primaryLabel: "Send us a message",
  primaryHref: "/contact",
  secondaryLabel: "Call us",
  secondaryTel: `tel:+${siteConfig.contact.phoneDigits}`,
} as const;
