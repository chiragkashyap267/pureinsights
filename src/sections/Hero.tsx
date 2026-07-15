import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { LuxeButton } from "../components/ui";
import { Figure } from "../components/Figure";
import { scrollY } from "../lib/lenis";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  // Parallax driven by the same Lenis frame that moves the page — perfectly in sync.
  const vh = typeof window !== "undefined" ? window.innerHeight : 900;
  const y = useTransform(scrollY, [0, vh], [0, vh * 0.18]);
  const opacity = useTransform(scrollY, [0, vh * 0.85], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background image / placeholder with parallax */}
      <motion.div
        style={{ y, willChange: "transform" }}
        className="absolute inset-0 -z-10"
      >
        <Figure
          src="./images/hero.jpg"
          alt="Luxurious Pure Insights bedroom interior"
          label="Signature Master Suite"
          ratio=""
          rounded=""
          eager
          className="h-[118%] w-full animate-kenburns"
        />
        {/* Cinematic wash so text is always legible on any photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/95 via-ivory/70 to-ivory/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-ivory/40" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="container-luxe relative pt-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow">Interior Designing & Architecture</span>
        </motion.div>

        <h1 className="mt-6 max-w-4xl font-serif text-[2.2rem] font-medium leading-[1.05] tracking-tight text-ink xs:text-[2.8rem] sm:text-5xl lg:text-[6.2rem]">
          <Line delay={0.35}>Live the</Line>
          <Line delay={0.5}>
            <span className="text-gold-gradient">Luxury</span> Experience
          </Line>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-8 max-w-xl font-sans text-base font-light leading-relaxed text-ink-soft"
        >
          Pure Insights transforms a space into something you can truly call
          <em className="font-serif not-italic text-bronze"> your oasis </em>—
          an imaginative, thoughtful and compelling environment that feels
          bespoke, and is a natural reflection of its people.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-11 flex flex-wrap items-center gap-4"
        >
          <LuxeButton href="#portfolio">Explore Our Work</LuxeButton>
          <LuxeButton href="#contact" variant="ghost">
            Book a Consultation
          </LuxeButton>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-bronze"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
      >
        <span className="font-sans text-[10px] uppercase tracking-luxe">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
