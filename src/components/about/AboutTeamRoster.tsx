import Image from "next/image";
import { aboutTeamMembers } from "@/config/about-page";
import { Reveal } from "@/components/ui/Reveal";

/** Portrait roster — photos live under `public/assets/images/about/photos/`. */
export function AboutTeamRoster() {
  return (
    <ul className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
      {aboutTeamMembers.map((member, index) => (
        <li key={member.name} className="flex">
          <Reveal delayMs={index * 70} className="flex w-full">
            <figure className="flex w-full flex-col">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-200 shadow-[0_12px_40px_rgba(15,39,68,0.1)] ring-1 ring-black/[0.08]">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  className="object-cover object-[center_10%] transition duration-500 ease-out hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  quality={85}
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent"
                  aria-hidden
                />
              </div>
              <figcaption className="mt-5 border-l-[3px] border-[var(--brand-red)] pl-4">
                <p className="font-display text-[1.125rem] font-semibold leading-snug tracking-tight text-[#0f2744] sm:text-lg">
                  {member.name}
                </p>
                <p className="mt-1.5 text-[13px] font-medium leading-snug text-neutral-600 sm:text-sm">
                  {member.title}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
