import Image from "next/image";
import Link from "next/link";
import {
  homeAboutCopy,
  homeLandingImages,
} from "@/config/home-landing";
import { Reveal } from "@/components/ui/Reveal";

export function HomeAboutBand() {
  return (
    <section className="border-t border-neutral-300 bg-[#e8eaef] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none" y={14}>
          <div className="relative aspect-[4/5] w-full max-sm:max-h-[420px]">
            <div className="absolute left-0 top-0 w-[78%] overflow-hidden rounded-sm bg-neutral-200 shadow-sm ring-1 ring-black/5">
              <div className="relative aspect-square w-full">
                <Image
                  src={homeLandingImages.aboutA}
                  alt="Residential construction team reviewing field conditions and planning notes"
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 1024px) 72vw, 340px"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[78%] overflow-hidden rounded-sm bg-neutral-200 shadow-md ring-1 ring-black/5">
              <div className="relative aspect-square w-full">
                <Image
                  src={homeLandingImages.aboutB}
                  alt="Permit-ready technical plans and site coordination documents"
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 1024px) 72vw, 340px"
                />
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal y={14} delayMs={60}>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {homeAboutCopy.heading}
          </h2>
          <p className="mt-6 text-lg leading-[1.75] text-neutral-600">
            {homeAboutCopy.body}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
            <Link
              href="/projects"
              className="text-base font-semibold text-[var(--brand-red)] underline-offset-4 hover:underline"
            >
              {homeAboutCopy.projectsLink}
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
            >
              {homeAboutCopy.aboutLink}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
