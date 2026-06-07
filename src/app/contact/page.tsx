import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";
import { pageMetadata, pageOgImages } from "@/config/page-metadata";
import { pageOpenGraph } from "@/lib/open-graph";

const og = pageOpenGraph({
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  path: "/contact",
  image: pageOgImages.contact,
  imageAlt: "Engineering project workflow from planning through permit approval",
});

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  alternates: { canonical: "/contact" },
  ...og,
};

export default function ContactPage() {
  return (
    <main className="min-h-[70vh] bg-[#fafafa]">
      <ContactSection />
    </main>
  );
}
