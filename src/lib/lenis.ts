import Lenis from "lenis";
import { motionValue } from "framer-motion";

/**
 * Single shared Lenis instance + Framer-Motion MotionValues driven by it.
 *
 * Every scroll-linked animation (hero parallax, progress bar) reads these
 * MotionValues, which are updated inside Lenis's own scroll callback. That
 * guarantees they update on the exact same frame Lenis moves the page — no
 * desync, no jitter.
 */
export const scrollY = motionValue(0);
export const scrollProgress = motionValue(0);

let lenis: Lenis | null = null;
let rafId = 0;

export function startLenis() {
  if (lenis) return lenis;

  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  });

  lenis.on("scroll", (e: { scroll: number; progress: number }) => {
    scrollY.set(e.scroll);
    scrollProgress.set(e.progress);
  });

  const loop = (time: number) => {
    lenis?.raf(time);
    rafId = requestAnimationFrame(loop);
  };
  rafId = requestAnimationFrame(loop);

  return lenis;
}

export function stopLenis() {
  cancelAnimationFrame(rafId);
  lenis?.destroy();
  lenis = null;
}

export function scrollToId(id: string) {
  const el = document.querySelector(id);
  if (el && lenis) lenis.scrollTo(el as HTMLElement, { offset: -70, duration: 1.3 });
}
