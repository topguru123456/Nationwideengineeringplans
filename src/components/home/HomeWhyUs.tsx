import Image from "next/image";
import {
  homeLandingImages,
  homeWhyUsCopy,
} from "@/config/home-landing";
import { Reveal } from "@/components/ui/Reveal";

export function HomeWhyUs() {
  return (
    <section
      className="border-t border-neutral-300 bg-[#f7f8fa] py-20 sm:py-24"
      aria-labelledby="home-why-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal
          className="relative order-2 aspect-[5/3] w-full overflow-hidden rounded-sm bg-neutral-200 lg:order-1"
          y={12}
        >
          <Image
            src={homeLandingImages.whyUs}
            alt="Engineer and homeowner reviewing custom home construction plans"
            fill
            quality={75}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>
        <Reveal className="order-1 lg:order-2" y={12} delayMs={50}>
          <h2
            id="home-why-heading"
            className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            {homeWhyUsCopy.heading}
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-[1.75] text-neutral-600">
            {homeWhyUsCopy.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
