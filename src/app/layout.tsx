import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { pageMetadata } from "@/config/page-metadata";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

/** Runtime Google Fonts CSS — avoids `next/font/google` build-time fetch (offline CI / blocked networks). */
const googleFontsHref =
  "https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";

const siteUrl = siteConfig.url.replace(/\/$/, "");
const defaultOgImage = siteConfig.brand.logoSrc;

const { address } = siteConfig;
const { phones: officePhones, email: contactEmail } = siteConfig.contact;

const schemaContactPoints = [
  {
    "@type": "ContactPoint",
    telephone: `+${officePhones.hq.digits}`,
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English",
    description: `${officePhones.hq.label} (${officePhones.hq.region})`,
  },
  {
    "@type": "ContactPoint",
    telephone: `+${officePhones.ny.digits}`,
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English",
    description: `${officePhones.ny.label} (${officePhones.ny.region})`,
  },
];

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: address.street,
  addressLocality: address.city,
  addressRegion: address.region,
  postalCode: address.postalCode,
  addressCountry: address.country,
};

const sameAsUrls = [
  ...siteConfig.sameAs,
  ...(siteConfig.googleBusinessProfileUrl.trim()
    ? [siteConfig.googleBusinessProfileUrl.trim()]
    : []),
];

const orgNode: Record<string, unknown> = {
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteUrl,
  logo: `${siteUrl}${siteConfig.brand.logoSrc}`,
  address: postalAddress,
};
if (sameAsUrls.length > 0) {
  orgNode.sameAs = sameAsUrls;
}
orgNode.contactPoint = schemaContactPoints;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: siteConfig.locale.replace("_", "-"),
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    orgNode,
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#professional-service`,
      name: siteConfig.name,
      description: siteConfig.description,
      slogan: siteConfig.tagline,
      url: siteUrl,
      provider: { "@id": `${siteUrl}/#organization` },
      address: postalAddress,
      ...(sameAsUrls.length > 0 ? { sameAs: sameAsUrls } : {}),
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#local-business`,
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteUrl,
      image: `${siteUrl}${siteConfig.brand.logoSrc}`,
      telephone: `+${officePhones.hq.digits}`,
      email: contactEmail,
      address: postalAddress,
      contactPoint: schemaContactPoints,
      ...(sameAsUrls.length > 0 ? { sameAs: sameAsUrls } : {}),
    },
  ],
};

const metaTitle = siteConfig.name;

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: metaTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: pageMetadata.home.description,
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  openGraph: {
    type: "website",
    url: siteUrl,
    locale: siteConfig.locale.replace("_", "-"),
    siteName: siteConfig.name,
    title: metaTitle,
    description: pageMetadata.home.description,
    images: [
      {
        url: defaultOgImage,
        alt: siteConfig.brand.logoAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: pageMetadata.home.description,
    images: [defaultOgImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={googleFontsHref} rel="stylesheet" />
      </head>
      <body className="font-sans min-h-full flex flex-col bg-[var(--color-surface)] text-base leading-relaxed text-[var(--color-ink)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
