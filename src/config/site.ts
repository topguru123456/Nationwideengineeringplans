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
    "Architectural, structural, civil, and MEP plans—with professional stamp—serving Oregon and projects nationwide.",
  /**
   * Footer copy only — not used in meta tags. Wording is intentionally distinct
   * from page titles/descriptions to avoid near-duplicate snippets.
   */
  footerIntro:
    "Integrated civil, structural, MEP, surveying, and land-use planning for residential and commercial builds—coordinated sheets, permit narratives, and responsive coordination from first submittal through approved construction documents.",
  /** Optional sameAs URLs for Organization JSON-LD (Google Business, LinkedIn, etc.) */
  sameAs: [] as string[],
  description:
    "Nationwide Engineering Plans: coordinated permit drawing packages spanning architectural, structural, civil, MEP, and plan management support, serving Oregon and projects nationwide from concept through review.",
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
} as const;

export const headerNav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Our Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;
