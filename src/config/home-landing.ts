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
  title: "Remote permit drawing core",
  line:
    "Survey · Civil · Structural · MEP—permit sheets and plans coordinated for remote submittal, PE-stamped where your jurisdiction requires it.",
  ctaLabel: "Schedule a call",
  ctaHref: "/contact",
} as const;

/** Shown as interactive chips above the hero headline */
export const homeHeroDisciplines = [
  { label: "Survey" },
  { label: "Civil" },
  { label: "Structural" },
  { label: "MEP" },
  { label: "Remote permit", emphasis: true as const },
] as const;

export const homeHeroCopy = {
  headline: "Survey, civil, structural, and MEP plans—built for permit, delivered remotely.",
  sub: "Coordinated drawing packages for jurisdictions nationwide: basemaps, site and utility civil, framing and foundation structure, mechanical/electrical/plumbing, and submittal-ready sheet sets.",
} as const;

export const homeAboutCopy = {
  heading: "We don’t wallpaper over risk.",
  body:
    "Remote doesn’t mean hands-off: we align survey control with civil basemaps, keep structural selections buyable, and lock MEP loads to what plan check expects—so your permit set reads as one team, not four silos.",
  projectsLink: "View all projects",
  aboutLink: "About the practice",
} as const;

export const homeWhyUsCopy = {
  heading: "Why teams keep us on speed dial",
  paragraphs: [
    "Licensed leads stay on your remote permit package—survey through MEP—with redlines that read like a human wrote them, because one did.",
    "We package for plan check: civil/storm narratives that match the survey, structural notes that match the MEP loads, and sheet IDs reviewers can follow without a scavenger hunt.",
  ],
} as const;

export const homeFinalCtaCopy = {
  headline: "Ready for remote permit drawings?",
  sub: "Tell us your jurisdiction and which disciplines you need—we’ll reply with scope, timing, and an honest take on submittal path.",
  buttonLabel: "Start a new project",
  buttonHref: "/contact",
} as const;
