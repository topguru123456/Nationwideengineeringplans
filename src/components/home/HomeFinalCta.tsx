import Image from "next/image";
import Link from "next/link";
import {
  homeFinalCtaCopy,
  homeLandingImages,
} from "@/config/home-landing";
import { Reveal } from "@/components/ui/Reveal";

export function HomeFinalCta() {
  return (
    <section className="relative min-h-[300px] w-full overflow-hidden border-t border-black/25 sm:min-h-[360px]">
      <Image
        src={homeLandingImages.finalCta}
        alt=""
        fill
        quality={82}
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,8,10,0.55) 0%, rgba(6,8,10,0.82) 45%, rgba(4,4,6,0.92) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[300px] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center text-white sm:min-h-[360px] sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {homeFinalCtaCopy.headline}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white sm:text-lg">
            {homeFinalCtaCopy.sub}
          </p>
          <Link
            href={homeFinalCtaCopy.buttonHref}
            className="mt-10 inline-flex min-h-11 items-center justify-center bg-white px-10 py-3 text-base font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-100"
          >
            {homeFinalCtaCopy.buttonLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
