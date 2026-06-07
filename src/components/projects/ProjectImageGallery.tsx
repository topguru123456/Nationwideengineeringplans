"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Project } from "@/types/project";

type GalleryImage = {
  src: string;
  alt: string;
  label?: string;
};

export function ProjectImageGallery({ project }: { project: Project }) {
  const [active, setActive] = useState<GalleryImage | null>(null);
  const hasPlan = Boolean(project.planImage);

  const images = useMemo<GalleryImage[]>(() => {
    if (!hasPlan) {
      return [{ src: project.coverImage.src, alt: project.coverImage.alt }];
    }
    return [
      { src: project.coverImage.src, alt: project.coverImage.alt, label: "Exterior" },
      {
        src: project.planImage!.src,
        alt: project.planImage!.alt,
        label: "Floor plan",
      },
    ];
  }, [hasPlan, project.coverImage.alt, project.coverImage.src, project.planImage]);

  return (
    <>
      <div className={`grid gap-3 ${hasPlan ? "sm:grid-cols-2" : ""}`}>
        {images.map((image) => (
          <figure
            key={image.src}
            className="group overflow-hidden rounded-sm border border-[var(--color-border)] bg-[var(--color-muted)]"
          >
            <button
              type="button"
              onClick={() => setActive(image)}
              className="relative block aspect-[16/10] w-full overflow-hidden text-left"
              aria-label={`Open image: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={75}
                className="object-cover transition duration-300 ease-out group-hover:scale-[1.04]"
                sizes={hasPlan ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 66vw"}
              />
              <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />
              <span className="absolute bottom-2 right-2 inline-flex items-center rounded-full bg-black/65 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                Zoom
              </span>
            </button>
            {image.label ? (
              <figcaption className="border-t border-[var(--color-border)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                {image.label}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            aria-label="Close image modal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className="relative h-[80vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image src={active.src} alt={active.alt} fill quality={75} className="object-contain" sizes="100vw" />
          </div>
        </div>
      ) : null}
    </>
  );
}
