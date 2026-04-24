import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

/**
 * Primary mark: uses `public/assets/logo.png` from site config.
 * Fixed height at all scroll positions — avoids header layout shift / scroll jitter.
 */
export function LogoWordmark({ className = "" }: { className?: string }) {
  const { logoSrc, logoAlt } = siteConfig.brand;
  return (
    <Link
      href="/"
      className={`inline-flex max-w-[min(300px,calc(100vw-10.5rem))] shrink-0 items-center overflow-hidden sm:max-w-none ${className}`}
      aria-label={logoAlt}
    >
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={420}
        height={112}
        priority
        className="h-12 w-auto max-w-full object-contain object-left sm:h-14 md:h-[4.25rem]"
      />
    </Link>
  );
}
