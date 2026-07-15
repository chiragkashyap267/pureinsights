import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "../components/ui";
import { StaggerGroup, staggerItem } from "../components/Reveal";
import { TESTIMONIALS } from "../data/site";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-pearl py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              See what people are{" "}
              <span className="text-gold-gradient">saying</span>
            </>
          }
        />

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={staggerItem}>
              <figure className="group relative h-full overflow-hidden rounded-sm border border-gold/20 bg-ivory p-8 transition-all duration-500 hover:border-gold/50 hover:shadow-card md:p-10">
                <Quote className="h-9 w-9 text-gold/25 transition-colors duration-500 group-hover:text-gold/45" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-5 font-serif text-lg font-medium italic leading-relaxed text-ink-soft md:text-xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-gold/15 pt-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-sheen font-serif text-lg text-ink">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <div className="font-serif text-base font-medium text-ink">
                      {t.name}
                    </div>
                    <div className="font-sans text-[11px] uppercase tracking-wide2 text-bronze">
                      {t.city}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
