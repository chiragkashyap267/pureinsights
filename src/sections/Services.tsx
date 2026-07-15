import { motion } from "framer-motion";
import { SectionHeading } from "../components/ui";
import { StaggerGroup, staggerItem } from "../components/Reveal";
import { SERVICES } from "../data/site";

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              A holistic <span className="text-gold-gradient">design house</span>
            </>
          }
          intro="From the first sketch to the final polish, every discipline lives under one roof — an integrated approach where craftsmanship and technology meet."
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-gold/15 bg-gold/15 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <motion.div key={s.title} variants={staggerItem}>
              <ServiceCard icon={s.icon} title={s.title} desc={s.desc} />
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative h-full overflow-hidden bg-ivory p-8 transition-colors duration-500 hover:bg-pearl md:p-10">
      {/* hover gold wash from bottom */}
      <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-gold/5 to-transparent transition-all duration-500 group-hover:h-full" />
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-bronze transition-all duration-500 group-hover:-translate-y-1 group-hover:border-gold group-hover:text-gold">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-6 font-serif text-xl font-medium text-ink">{title}</h3>
        <p className="mt-3 font-sans text-[13px] font-light leading-relaxed text-ink-soft">
          {desc}
        </p>
      </div>
    </div>
  );
}
