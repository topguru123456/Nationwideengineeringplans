/**
 * About page — copy + image paths.
 * Images: `public/assets/images/about/`
 * Hero video: `public/assets/video/aboutus-hero.mp4`
 */
import { siteConfig } from "@/config/site";

export const aboutHeroVideoSrc = "/assets/video/aboutus-hero.mp4";

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
  headline: "Civil, structural, and MEP permit plans—fully coordinated for streamlined submittal.",
  body: [
    `${siteConfig.name} focuses on the core disciplines most critical to plan check approval: site and utility civil design, structural framing and lateral systems, and MEP. Each project is delivered as a coordinated, permit-ready drawing package aligned with local jurisdiction requirements.`,
    "We coordinate architectural, energy, and specialty scopes when required, but our primary focus is delivering high-quality engineering sheets, clear narratives, and responsive revision support through final approval.",
    "Licensed engineers remain directly involved from initial scope through final stamping, ensuring that RFIs, comments, and revisions are handled by the professionals responsible for the design—not passed between teams.",
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
      text: "We produce and coordinate civil, structural, and MEP sheets—plus architecture, energy, and specialty scope as agreed—so reviewers see one coordinated story.",
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
  secondaryTel: `tel:+${siteConfig.contact.phones.hq.digits}`,
} as const;
