import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../components/ui";
import { StaggerGroup, staggerItem } from "../components/Reveal";
import { Figure } from "../components/Figure";
import { PROJECTS } from "../data/site";

export function Projects() {
  return (
    <section id="projects" className="relative bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />

      <div className="container-luxe relative">
        <SectionHeading
          light
          eyebrow="Signature Projects"
          title={
            <>
              Trusted by names that{" "}
              <span className="text-gold-shimmer">demand the best</span>
            </>
          }
          intro="Hospitals and ministers' offices, national retail chains and boutique spas — our portfolio spans the full spectrum of luxury and enterprise."
        />

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.title} variants={staggerItem}>
              <article className="group relative overflow-hidden rounded-sm border border-gold/15 bg-white/[0.03] transition-all duration-500 hover:border-gold/40">
                <Figure
                  src={`./images/project-${i + 1}.jpg`}
                  alt={p.title}
                  ratio="aspect-[16/11]"
                  rounded="rounded-none"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[10px] uppercase tracking-luxe text-gold-light">
                      {p.category}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-gold/50 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                  </div>
                  <h3 className="mt-3 font-serif text-xl font-medium leading-snug text-ivory">
                    {p.title}
                  </h3>
                  <p className="mt-1 font-sans text-xs font-light text-ivory/50">
                    {p.location}
                  </p>
                </div>
              </article>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
