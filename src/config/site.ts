/** Central branding */
import type { OfficePhone } from "@/lib/officePhones";

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
    "Civil, structural, and MEP permit drawings and plans—delivered nationwide with Oregon-based coordination and jurisdiction-aware submittals.",
  /**
   * Footer copy only — not used in meta tags. Wording is intentionally distinct
   * from page titles/descriptions to avoid near-duplicate snippets.
   */
  footerIntro:
    "Civil, structural, and MEP sheets packaged for permit submittal—coordinated basemaps, calculations, narratives, and revision support through plan review.",
  /**
   * Google Business Profile public URL (Share / Maps link). Added to JSON-LD `sameAs` when set.
   * Example: https://maps.app.goo.gl/... or your Maps place URL from Google Business.
   */
  googleBusinessProfileUrl: "https://maps.app.goo.gl/zbPCLMe2BFHDYF9s7" as string,
  /** Optional sameAs URLs for Organization JSON-LD (LinkedIn, etc.) */
  sameAs: [] as string[],
  description:
    "Nationwide Engineering Plans: civil, structural, and MEP drawing sets for permit services nationwide—coordinated plans, code-aware details, and responsive submittal support from Oregon.",
  /** Production: set NEXT_PUBLIC_SITE_URL=https://www.nationwideengineeringplans.com in Vercel */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nationwideengineeringplans.com").replace(
    /\/$/,
    "",
  ),
  locale: "en_US",
  contact: {
    email: "jonathan@nationwideengineeringplans.com",
    phones: {
      hq: {
        label: "Oregon headquarters",
        region: "Portland, OR",
        display: "(503) 983-7001",
        displayDotted: "503.983.7001",
        digits: "15039837001",
      },
      ny: {
        label: "New York office",
        region: "New York, NY",
        display: "(718) 395-8984",
        displayDotted: "718.395.8984",
        digits: "17183958984",
      },
    } satisfies Record<"hq" | "ny", OfficePhone>,
    whatsappLabel: "WhatsApp",
    whatsappDisplay: "(503) 344-8867",
    whatsappDigits: "15033448867",
    calendlyUrl: "https://calendly.com/jonathan-barnes-pe/discussion-meeting",
  },
  address: {
    street: "3482 SW US Veterans Hospital Rd",
    city: "Portland",
    region: "OR",
    postalCode: "97239",
    country: "US",
  },
  /** Footer map heading / caption. Clear `openStreetMapEmbedUrl` to hide the map. */
  mapLocationLabel: "3482 SW US Veterans Hospital Rd, Portland, OR 97239",
  /** OpenStreetMap embed — centered on `address`. Re-paste from openstreetmap.org → Share → HTML if you move. */
  openStreetMapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=-122.691%2C45.4935%2C-122.677%2C45.5005&layer=mapnik&marker=45.49674%2C-122.68392" as const,
  /**
   * Shown on project detail: portfolio entries may mix representative narrative with
   * real scope—confirm with the firm before relying on a listing for RFP/contract.
   */
  portfolioRepresentationNote:
    "Portfolio entries illustrate representative scope and may combine anonymized or adapted project details. Locations reflect markets we serve nationwide—not every listing maps to a single physical site. Confirm references and current capabilities with us before contract or permit decisions.",
} as const;

export const headerNav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
