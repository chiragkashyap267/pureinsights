import { motion } from "framer-motion";
import { SectionHeading } from "../components/ui";
import { StaggerGroup, staggerItem } from "../components/Reveal";
import { GOALS } from "../data/site";

export function Goals() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Our Goals"
          title={
            <>
              Building a{" "}
              <span className="text-gold-gradient">global legacy</span>
            </>
          }
          intro="A journey driven by a singular goal — to redefine luxury interior design and set new standards of excellence, across borders and for years to come."
        />

        <StaggerGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {GOALS.map((g) => (
            <motion.div key={g.period} variants={staggerItem}>
              <div className="group relative h-full overflow-hidden rounded-sm border border-gold/20 bg-white/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-card md:p-10">
                <span className="absolute right-6 top-6 font-serif text-5xl font-medium text-gold/10 transition-colors duration-500 group-hover:text-gold/20">
                  ✦
                </span>
                <span className="font-sans text-xs uppercase tracking-luxe text-bronze">
                  {g.period}
                </span>
                <h3 className="mt-4 font-serif text-2xl font-medium text-ink">
                  {g.title}
                </h3>
                <p className="mt-4 font-sans text-sm font-light leading-relaxed text-ink-soft">
                  {g.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
