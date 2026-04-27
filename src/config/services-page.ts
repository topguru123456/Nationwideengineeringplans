/**
 * Services page — hero media, accordion data, CTAs.
 * Poster/photo: `public/assets/images/services/`
 * Hero video: `public/assets/video/services-hero.mp4`
 */
export const servicesPageImages = {
  heroPoster: "/assets/images/services/hero-home.jpg",
  ctaResidence: "/assets/images/services/cta-residence.jpg",
} as const;

/** Muted loop MP4 in /public; poster above shows while loading / if video unsupported */
export const servicesHeroVideoSrc = "/assets/video/services-hero.mp4";

export const servicesHero = {
  title: "Survey, civil, structural & MEP—permit plans, delivered remotely",
  subtitle:
    "Our core is permit submittal: basemaps and civil sheets, structural framing and calcs, MEP design and coordination—packaged for your AHJ. Expand each section for deliverables, or contact us for a tailored remote scope.",
} as const;

export const servicesAccordionHeadings = {
  fullScope: "Full scope services",
  specialty: "Specialty services",
} as const;

export const servicesAccordionIntro = {
  fullScope:
    "Remote permit packages shaped around survey, civil, structural, and MEP—plus coordination where your job still needs architectural or energy scope. Open a section for narrative and a checklist aligned to your contract and AHJ.",
  specialty:
    "Targeted depth in survey, civil, structural, or MEP when you do not need a full multidisciplinary rebuild—plan management, redlines, or construction-phase support alongside your existing set.",
} as const;

/** Left column — descriptions & deliverables from reference / mock.html */
export const servicesFullScopeItems = [
  {
    id: "new-custom-home",
    title: "New custom home",
    body:
      "From modern farmhouses to elegant Mediterranean-style homes, our mission is to help you get construction documents so you can start building.",
    deliverables: [
      "Architectural plans",
      "Structural plans",
      "Topographic survey",
      "Grading plans",
      "Title 24",
      "Solar design and coordination",
      "Truss design and coordination",
      "Fire sprinkler design and coordination",
      "Submission and coordination with HOA or city/county design review",
      "Submission and coordination with building department",
    ],
    ctaLabel: "Start a new project now",
  },
  {
    id: "alteration-addition",
    title: "Alteration or addition",
    body:
      "Time to update or add on? We prepare permit-ready plans so you can move forward with a space that works for you.",
    deliverables: [
      "As-built plan",
      "Architectural plans",
      "Structural plan",
      "Title 24",
      "Truss design and coordination",
      "Submission and coordination with HOA or city/county design review",
      "Submission and coordination with building department",
    ],
    ctaLabel: "Start a new project now",
  },
  {
    id: "tde-existing",
    title: "TDE existing plan",
    body:
      "Save time with a previously designed plan from a curated collection. The set includes the following, as applicable:",
    deliverables: [
      "Architectural plans",
      "Structural plans",
      "Title 24",
      "Solar design",
      "Truss design and coordination",
      "Fire sprinkler design and coordination",
      "Submission and coordination with HOA or city/county design review",
      "Submission and coordination with building department",
    ],
    ctaLabel: "Start a new project now",
  },
  {
    id: "fire-restoration",
    title: "Fire restoration",
    body:
      "Unexpected damage shouldn’t add avoidable stress. We prepare the building plans you need so you can focus on getting home.",
    deliverables: [
      "As-built plan",
      "Structural plan",
      "Title 24",
      "Truss design and coordination",
      "Submission and coordination with HOA or city/county design review",
      "Submission and coordination with building department",
    ],
    ctaLabel: "Start a new project now",
  },
  {
    id: "multi-family",
    title: "Multi-family",
    body:
      "Developers: we support conceptual packages through construction documents—site plan, elevations, and floor plans for entitlement, then the full stamped set for permit.",
    deliverables: [
      "Architectural plans",
      "Structural plans",
      "Topographic survey",
      "Grading plans",
      "Mechanical, electrical, and plumbing plans",
      "Title 24",
      "Solar design",
      "Truss design and coordination",
      "Fire sprinkler design and coordination",
      "Submission and coordination with HOA or city/county design review",
      "Submission and coordination with building department",
    ],
    ctaLabel: "Start a new project now",
  },
  {
    id: "commercial",
    title: "Commercial",
    body: "Tenant improvements and commercial spaces: design and coordinated plans ready for permitting.",
    deliverables: [
      "Architectural plans",
      "Structural plans",
      "Topographic map survey",
      "Grading plans",
      "Mechanical, electrical, and plumbing plans",
      "Title 24",
      "Solar design",
      "Truss design and coordination",
      "Fire sprinkler design and coordination",
      "Submission and coordination with city or county design review",
      "Submission and coordination with building department",
    ],
    ctaLabel: "Start a new project now",
  },
] as const;

/** Right column — specialty accordions (mock.html) */
export const servicesSpecialtyItems = [
  {
    id: "architectural-design",
    title: "Architectural design",
    deliverables: [
      "Architectural plans — site, floor, roof, elevations, sections",
      "Existing / as-built plans — same sheet types where needed",
      "Landscaping plans",
      "Renderings",
    ],
  },
  {
    id: "civil",
    title: "Civil surveying and engineering",
    deliverables: [
      "Topographic map survey",
      "Construction staking",
      "Grading plans",
      "Irrigation & erosion control plan",
      "Sewer lower lateral plan",
      "Improvement plan",
      "Retaining walls",
      "Drainage plan",
      "FEMA elevation certificate",
    ],
  },
  {
    id: "structural",
    title: "Structural engineering",
    deliverables: [
      "Truss design and coordination",
      "Roof framing plan",
      "Foundation plan",
      "Shear wall plan",
      "Structural details",
    ],
  },
  {
    id: "electrical",
    title: "Electrical engineering",
    deliverables: ["CalGreen", "Title 24", "Energy code", "Solar design", "Electrical plan"],
  },
  {
    id: "mechanical",
    title: "Mechanical engineering",
    deliverables: ["Mechanical plan", "Plumbing plan"],
  },
  {
    id: "plan-management",
    title: "Plan management",
    deliverables: [
      "HOA submission & coordination",
      "City or county design review — submission & coordination",
      "Building department — submission & coordination",
    ],
  },
  {
    id: "construction-consulting",
    title: "Construction consulting",
    deliverables: ["Request for information (RFI)", "Plan interpretation", "Structure inspection"],
  },
] as const;

export const servicesImageBand = {
  headline: "Ready to start your next project?",
  body:
    "We are here to help. Contact us to discuss scope, schedule, and how our team can support your drawings from first sketch through stamped permit set.",
  buttonLabel: "Start a new project",
} as const;

export const servicesBottomCtas = [
  {
    title: "Ready to start your next project?",
    line: "Share your address, target date, and what you need stamped—we will respond with clear next steps.",
    buttonLabel: "Start a new project",
    buttonStyle: "primary" as const,
  },
  {
    title: "Have a question about our services?",
    line: "Ask about deliverables, timelines, or how we coordinate with your architect and contractor.",
    buttonLabel: "Contact us",
    buttonStyle: "outline" as const,
  },
] as const;
