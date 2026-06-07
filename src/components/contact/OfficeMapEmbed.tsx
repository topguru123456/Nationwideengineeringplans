import { siteConfig } from "@/config/site";

/** OpenStreetMap embed — shown on Contact and About only (not site-wide footer). */
export function OfficeMapEmbed() {
  const { mapLocationLabel, openStreetMapEmbedUrl } = siteConfig;
  if (!openStreetMapEmbedUrl) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm">
      <div className="relative aspect-[2/1] w-full min-h-[200px] max-h-[320px] sm:aspect-[21/9]">
        <iframe
          title="Map: Oregon headquarters and service area"
          src={openStreetMapEmbedUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="border-t border-neutral-200/80 px-4 py-2 text-[11px] text-neutral-500">
        {mapLocationLabel}
        <span className="mx-1.5 text-neutral-300" aria-hidden>
          ·
        </span>
        Map:{" "}
        <a
          className="font-medium underline-offset-2 hover:underline"
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noopener noreferrer"
        >
          © OpenStreetMap
        </a>{" "}
        contributors
      </p>
    </div>
  );
}
