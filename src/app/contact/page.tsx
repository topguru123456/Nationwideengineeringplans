import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach ${siteConfig.name} — email, phone, or schedule a call.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: `Reach ${siteConfig.name} — email, phone, or schedule a call.`,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-[70vh] bg-[#fafafa]">
      <ContactSection />
    </main>
  );
}
