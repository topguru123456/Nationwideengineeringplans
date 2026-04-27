import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { pageMetadata } from "@/config/page-metadata";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-body",
  weight: ["400", "500", "600", "700"],
});

/** Display serif for hero and key editorial headlines */
const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["600", "700"],
});

const siteUrl = siteConfig.url.replace(/\/$/, "");
const defaultOgImage = siteConfig.brand.logoSrc;

const orgNode: Record<string, unknown> = {
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteUrl,
  logo: `${siteUrl}${siteConfig.brand.logoSrc}`,
};
if (siteConfig.sameAs.length > 0) {
  orgNode.sameAs = [...siteConfig.sameAs];
}

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
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
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
  keywords: [
    "Nationwide Engineering Plans",
    "engineering plans",
    "permit-ready plans",
    "permit drawings",
    "architectural design",
    "structural engineering",
    "civil engineering",
    "MEP engineering",
    "residential engineering plans",
    "commercial engineering plans",
    "house design",
    "construction documents",
  ],
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
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/icon.png",
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "512x512" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${sans.variable} ${display.variable}`}>
      <body
        className={`${sans.className} min-h-full flex flex-col bg-[var(--color-surface)] text-base leading-relaxed text-[var(--color-ink)] antialiased`}
      >
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
