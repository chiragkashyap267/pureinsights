import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Centered or left-aligned section heading with eyebrow + gold rule */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      <Reveal>
        <div className="flex items-center gap-3">
          <span
            className={`h-px w-8 ${light ? "bg-gold-light/60" : "bg-gold/60"}`}
          />
          <span
            className={`eyebrow ${light ? "text-gold-light" : "text-bronze"}`}
          >
            {eyebrow}
          </span>
          {isCenter && (
            <span
              className={`h-px w-8 ${light ? "bg-gold-light/60" : "bg-gold/60"}`}
            />
          )}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-5 font-serif text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-6xl ${
            light ? "text-ivory" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.16}>
          <p
            className={`mt-6 max-w-2xl text-balance font-sans text-[15px] font-light leading-relaxed md:text-base ${
              light ? "text-ivory/70" : "text-ink-soft"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Premium button — gold-filled or ghost outline */
export function LuxeButton({
  children,
  href,
  variant = "solid",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "solid" | "ghost" | "light";
  className?: string;
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 font-sans text-xs uppercase tracking-wide2 transition-all duration-500";

  const styles = {
    solid:
      "bg-gold-sheen text-ink shadow-glow hover:shadow-luxe hover:-translate-y-0.5",
    ghost:
      "border border-gold/50 text-bronze hover:border-gold hover:bg-gold/5 hover:-translate-y-0.5",
    light:
      "border border-ivory/40 text-ivory hover:border-gold-light hover:text-gold-light",
  }[variant];

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "solid" && (
        <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-700 group-hover:translate-x-full" />
      )}
    </a>
  );
}

/** Big faint index number used as a decorative accent */
export function Ordinal({ children }: { children: ReactNode }) {
  return (
    <span className="font-serif text-6xl font-medium text-gold/25 md:text-7xl">
      {children}
    </span>
  );
}
