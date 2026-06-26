import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";
import { pageMetadata, pageOgImages } from "@/config/page-metadata";
import { buildPageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = buildPageMetadata({
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  path: "/contact",
  image: pageOgImages.contact,
  imageAlt: "Engineering project workflow from planning through permit approval",
});

export default function ContactPage() {
  return (
    <main className="min-h-[70vh] bg-[#fafafa]">
      <ContactSection />
    </main>
  );
}
