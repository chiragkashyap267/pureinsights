import { useEffect } from "react";
import { startLenis, stopLenis, scrollToId } from "../lib/lenis";

/**
 * Boots the single shared Lenis instance and routes in-page anchor clicks
 * through it. Respects prefers-reduced-motion (falls back to native scroll).
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    startLenis();

    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!link) return;
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      if (!document.querySelector(id)) return;
      e.preventDefault();
      scrollToId(id);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      stopLenis();
    };
  }, []);

  return null;
}
