/** Central branding */
export const siteConfig = {
  name: "Nationwide Engineering Plans",
  brand: {
    logoSrc: "/assets/logo.png",
    logoAlt: "Nationwide Engineering Plans",
    /** Empty hides the subtitle line in the header */
    headerTagline: "" as string,
  },
  aboutClosing: {
    leadWhite: "Nationwide ",
    leadRed: "Engineering",
    midWhite: " — ",
    highlightRed: "Plans you can build.",
    showTm: true,
  },
  tagline:
    "Remote survey, civil, structural, and MEP permit drawings and plans—delivered for jurisdictions nationwide, coordinated from Oregon.",
  /**
   * Footer copy only — not used in meta tags. Wording is intentionally distinct
   * from page titles/descriptions to avoid near-duplicate snippets.
   */
  footerIntro:
    "Survey, civil, structural, and MEP sheets packaged for permit submittal—developed remotely with coordinated basemaps, calculations, narratives, and revision support through plan review.",
  /** Optional sameAs URLs for Organization JSON-LD (Google Business, LinkedIn, etc.) */
  sameAs: [] as string[],
  description:
    "Nationwide Engineering Plans: remote survey, civil, structural, and MEP drawing sets for permit services nationwide—coordinated plans, code-aware details, and responsive submittal support from Oregon.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nationwideengineeringplans.com",
  locale: "en_US",
  contact: {
    email: "hello@nationwideengineeringplans.com",
    phoneDisplay: "(503) 983-7001",
    /** Compact display for utility bar */
    phoneDisplayDotted: "503.983.7001",
    /** US E.164 without + for tel: links */
    phoneDigits: "15039837001",
    whatsappLabel: "WhatsApp",
    whatsappDisplay: "(503) 344-8867",
    whatsappDigits: "15033448867",
    calendlyUrl: "https://calendly.com/jonathan-barnes-pe/discussion-meeting",
  },
  address: {
    city: "",
    region: "Oregon",
    country: "US",
  },
  /**
   * Shown on project detail: portfolio entries may mix representative narrative with
   * real scope—confirm with the firm before relying on a listing for RFP/contract.
   */
  portfolioRepresentationNote:
    "Narrative and images may be representative, illustrative, or include anonymized details. Confirm current capabilities and project references with us directly for contract or permit decisions.",
} as const;

export const headerNav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Our Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;
