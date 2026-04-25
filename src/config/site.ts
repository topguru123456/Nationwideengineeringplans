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
  /** Long-form blurb under the logo in the site footer */
  footerIntro:
    "We are a full-service firm specializing in residential design, including Civil Engineering, Structural Engineering, MEP Engineering, Construction Management, Surveying, and Land Use Planning. We are dedicated to delivering high-quality, permit-ready solutions, combining technical expertise with a strong commitment to service and attention to detail in every home we design.",
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
