import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";
import { pageMetadata } from "@/config/page-metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: pageMetadata.contact.description,
    url: "/contact",
  },
  twitter: {
    description: pageMetadata.contact.description,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-[70vh] bg-[#fafafa]">
      <ContactSection />
    </main>
  );
}
