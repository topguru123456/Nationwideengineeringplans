"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Kept for API compatibility; motion uses a light fade only. */
  y?: number;
  /** Stagger siblings after they enter the viewport. */
  delayMs?: number;
};

/**
 * Subtle fade-in on scroll (no large motion) — keeps the page calm on engineering sites.
 */
export function Reveal({ children, className = "", delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -2% 0px", threshold: 0.04 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduceMotion]);

  const style = reduceMotion
    ? undefined
    : ({
        transitionDelay: visible ? `${delayMs}ms` : "0ms",
      } as React.CSSProperties);

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal-track ${className} ${visible ? "reveal-visible" : ""}`}
    >
      {children}
    </div>
  );
}
