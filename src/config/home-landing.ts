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
  title: "Full drawing packages",
  line:
    "Architectural · Structural · Civil · MEP · PE stamp—included so you move from concept to permit without piecing disciplines together.",
  ctaLabel: "Schedule a call",
  ctaHref: "/contact",
} as const;

/** Shown as interactive chips above the hero headline */
export const homeHeroDisciplines = [
  { label: "Architecture" },
  { label: "Structural" },
  { label: "Civil" },
  { label: "MEP" },
  { label: "PE stamp", emphasis: true as const },
] as const;

export const homeHeroCopy = {
  headline: "Drawings that survive plan review. Field teams that actually build them.",
  sub: "Permit-ready drawing sets from shell through systems, coordinated for your jurisdiction and PE-stamped where required.",
} as const;

export const homeAboutCopy = {
  heading: "We don’t wallpaper over risk.",
  body:
    "Tenant fit-outs, retail shells, and light multifamily need discipline—load calcs that match reality, equipment selections you can buy, and RFI answers in hours, not weeks. If your jurisdiction is picky, we’ve already met them halfway in the narrative.",
  projectsLink: "View all projects",
  aboutLink: "About the practice",
} as const;

export const homeWhyUsCopy = {
  heading: "Why teams keep us on speed dial",
  paragraphs: [
    "Principals stay on your job. No bait-and-switch to interns after the proposal. You get redlines that read like a human wrote them—because one did.",
    "We coordinate like we own the punch list: clash checks, ceiling zones, and panel schedules that don’t fight your architect’s dimensions.",
  ],
} as const;

export const homeFinalCtaCopy = {
  headline: "Ready for permit-ready plans?",
  sub: "Tell us about your project—we’ll reply with timing, scope, and an honest take on next steps.",
  buttonLabel: "Start a new project",
  buttonHref: "/contact",
} as const;
