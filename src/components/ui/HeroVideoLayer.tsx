"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type HeroVideoLayerProps = {
  videoSrc: string;
  fallbackImageSrc: string;
  fallbackSizes: string;
  imageQuality?: number;
  reduceMotion: boolean;
};

/**
 * Film-style scrim so white hero copy stays readable over bright footage
 * (windows, models, specular highlights).
 */
function HeroReadableScrim() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/52 via-[#0a0f18]/36 to-black/[0.58]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_100%_90%_at_50%_40%,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.22)_48%,transparent_72%)]"
        aria-hidden
      />
    </>
  );
}

/**
 * Hero background: solid hold color with a soft drifting wash while the file buffers,
 * then video fades in when frames are ready. No video `poster` — avoids poster→video swap.
 */
export function HeroVideoLayer({
  videoSrc,
  fallbackImageSrc,
  fallbackSizes,
  imageQuality = 85,
  reduceMotion,
}: HeroVideoLayerProps) {
  const [videoVisible, setVideoVisible] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setVideoVisible(false);
      setLoadFailed(false);
    } else {
      setVideoVisible(false);
      setLoadFailed(false);
    }
  }, [reduceMotion, videoSrc]);

  const revealVideo = useCallback(() => {
    setVideoVisible(true);
  }, []);

  const showVideoTrack = !reduceMotion && !loadFailed;
  const holdActive = showVideoTrack && !videoVisible;

  if (reduceMotion || loadFailed) {
    return (
      <div className="absolute inset-0">
        <Image
          src={fallbackImageSrc}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes={fallbackSizes}
          quality={imageQuality}
        />
        <HeroReadableScrim />
      </div>
    );
  }

  return (
    <div className="absolute inset-0" aria-busy={holdActive}>
      <div className="absolute inset-0 bg-[#0f1729]" aria-hidden />
      <div
        className={`pointer-events-none absolute inset-0 z-0 hero-video-hold-motion transition-opacity duration-[700ms] ease-out ${
          holdActive ? `hero-video-hold-loading opacity-100` : `opacity-0`
        }`}
        aria-hidden
      />
      <video
        key={videoSrc}
        className={`absolute inset-0 z-[1] h-full w-full object-cover object-center transition-opacity duration-[780ms] ease-out ${
          videoVisible ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={revealVideo}
        onCanPlay={revealVideo}
        onError={() => setLoadFailed(true)}
        aria-label=""
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <HeroReadableScrim />
    </div>
  );
}
