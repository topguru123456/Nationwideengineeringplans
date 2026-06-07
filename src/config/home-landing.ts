/**
 * Landing photos live under `public/assets/images/landing/`.
 * Hero video (optional): `public/assets/video/landing-hero.mp4`
 */
export const homeHeroVideoSrc = "/assets/video/landing-hero.mp4";

export const homeLandingImages = {
  hero: "/assets/images/landing/hero.jpg",
  aboutA: "/assets/images/landing/about-a.jpg",
  aboutB: "/assets/images/landing/about-b.jpg",
  whyUs: "/assets/images/landing/why.jpg",
  finalCta: "/assets/images/landing/final-cta.jpg",
} as const;

/** `target` is the number the counter animates to; `suffix` is e.g. "+" */
export const homeStats = [
  { target: 457, suffix: "+", label: "New Custom Homes" },
  { target: 85, suffix: "+", label: "Alteration and Fire Restoration" },
  { target: 40, suffix: "+", label: "Multi-Family and Commercial" },
  { target: 359, suffix: "+", label: "Individual Services" },
] as const;

export const homeServicesBanner = {
  title: "Permit-ready drawing sets",
  line:
    "Civil, structural, and MEP: coordinated sheets and narratives for your building department, PE-stamped where required.",
  ctaLabel: "Schedule a call",
  ctaHref: "/contact",
} as const;

/** Shown as interactive chips above the hero headline */
export const homeHeroDisciplines = [
  { label: "Civil" },
  { label: "Structural" },
  { label: "MEP" },
  { label: "50 states", emphasis: true as const },
] as const;

export const homeHeroCopy = {
  eyebrow: "Nationwide Engineering Plans",
  headline:
    "Civil, structural, and MEP plans for permit review, built to match how your jurisdiction works",
  supportPoints: [
    "Licensed in all 50 states",
    "Residential and light commercial: civil, structural, and MEP in one coordinated set",
  ],
} as const;

export const homeAboutCopy = {
  heading: "Experienced engineering team, nationwide and permit-ready",
  bodyParagraphs: [
    "Behind every package is a multidisciplinary crew: engineers and designers who know residential and light commercial plan review and what an approved set looks like on the street.",
    "We focus on code compliance, constructability, and clear responses to reviewers. Projects span all fifty states; the constant is coordinated work tailored to each building department, not a generic template.",
  ],
  projectsLink: "View all projects",
  aboutLink: "About the practice",
} as const;

export const homeWhyUsCopy = {
  heading: "Why teams keep us on speed dial",
  paragraphs: [
    "Licensed leads stay on your package from civil through MEP. Redlines come from the engineers who signed the sheets, not a handoff queue.",
    "We package for plan check: civil and storm narratives aligned with your basemap, structural notes aligned with MEP loads, and sheet numbering reviewers can follow.",
  ],
} as const;

export const homeFinalCtaCopy = {
  headline: "Ready for permit-ready drawings?",
  sub: "Tell us your jurisdiction and what disciplines you need. We reply with scope, timing, and a straight answer on next steps.",
  buttonLabel: "Start a new project",
  buttonHref: "/contact",
} as const;

/** Curated homepage portfolio — avoids loading the full catalog in client JS. */
export const homeFeaturedProjectSlugs = [
  "springwater-connector",
  "marquis-tualatin",
  "koz-on-yamhill",
  "barcelona-and-lascala-apartments",
  "penske-coburg",
  "modern-contemporary-residence-3-433-sq-ft",
  "pbot-ada-curb-ramp-replacement-program",
  "enhanced-transit-corridors",
  "frisco-mixed-use-development",
] as const;
