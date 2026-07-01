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
  process: "/assets/images/about/process.jpg",
  cta: "/assets/images/about/cta.jpg",
} as const;

const teamPhoto = (file: string) => `/assets/images/about/photos/${file}` as const;

export type AboutTeamMember = {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  email: string;
  phoneDisplay: string;
  phoneTel: string;
  /** Optional office / mailing address shown on the team card */
  address?: string;
};

/** Team headshots — filenames match `public/assets/images/about/photos/`. */
export const aboutTeamMembers: readonly AboutTeamMember[] = [
  {
    name: "Jonathan Martin, PE",
    title: "Principal engineer",
    image: teamPhoto("Jonathan Martin.webp"),
    imageAlt: "Jonathan Martin, PE — principal engineer at Nationwide Engineering Plans",
    email: siteConfig.contact.email,
    phoneDisplay: siteConfig.contact.phones.hq.display,
    phoneTel: `tel:+${siteConfig.contact.phones.hq.digits}`,
  },
  {
    name: "Joseph Miller",
    title: "Architect",
    image: teamPhoto("Joseph Miller .webp"),
    imageAlt: "Joseph Miller — architect at Nationwide Engineering Plans",
    email: "joseph.nationwideengineering@gmail.com",
    phoneDisplay: siteConfig.contact.phones.ny.display,
    phoneTel: `tel:+${siteConfig.contact.phones.ny.digits}`,
    address: "56 Majestic Ave, San Francisco, CA 94112, USA",
  },
  {
    name: "Oleksii Datsko",
    title: "Architectural drafter",
    image: teamPhoto("Oleksii Datsko.jpg"),
    imageAlt: "Oleksii Datsko — architectural drafter at Nationwide Engineering Plans",
    email: "salraygranata@gmail.com",
    phoneDisplay: "+380 96 910 7658",
    phoneTel: "tel:+380969107658",
    address: "Street Hliserna, Building 28, Zaporizhzhia 69011, Ukraine",
  },
  {
    name: "Kris Simonsen",
    title: "Engineering coordination",
    image: teamPhoto("Kris Simonsen.webp"),
    imageAlt: "Kris Simonsen — engineering coordination at Nationwide Engineering Plans",
    email: "simonsenkristopher@gmail.com",
    phoneDisplay: "(231) 413-8238",
    phoneTel: "tel:+12314138238",
    address: "1738 Dexter Avenue North, Seattle, WA 98109, USA",
  },
];

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
  headline: "Licensed engineers behind every stamped set",
  body:
    "Principals, engineers, and drafters stay on your job from kickoff through plan check—reach the right person directly when you need an answer.",
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

/** Representative work linked from the about page */
export const aboutFeaturedProjects = [
  { slug: "springwater-connector", label: "Springwater Connector — Portland, OR" },
  { slug: "koz-on-yamhill", label: "kōz on Yamhill — New York, NY" },
  { slug: "marquis-tualatin", label: "Marquis Tualatin — senior living" },
] as const;

export const aboutFinalCta = {
  eyebrow: "Ready for coordinated plans?",
  headline: "Let’s align scope, schedule, and the right disciplines for your next project.",
  primaryLabel: "Send us a message",
  primaryHref: "/contact",
  secondaryLabel: "Call us",
  secondaryTel: `tel:+${siteConfig.contact.phones.hq.digits}`,
} as const;
