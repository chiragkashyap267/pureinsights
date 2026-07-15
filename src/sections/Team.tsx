import { motion } from "framer-motion";
import { SectionHeading } from "../components/ui";
import { StaggerGroup, staggerItem } from "../components/Reveal";
import { Figure } from "../components/Figure";
import { TEAM } from "../data/site";

export function Team() {
  return (
    <section className="relative bg-pearl py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Meet Our Team"
          title={
            <>
              The people behind the{" "}
              <span className="text-gold-gradient">craft</span>
            </>
          }
          intro="From visionary designers to skilled craftsmen and dedicated project managers, each member plays a crucial role in bringing your dream spaces to life."
        />

        <StaggerGroup className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <motion.div key={m.name} variants={staggerItem}>
              <div className="group text-center">
                <Figure
                  src={`./images/team-${i + 1}.jpg`}
                  alt={m.name}
                  ratio="aspect-[4/5]"
                  className="shadow-card"
                />
                <h3 className="mt-4 font-serif text-lg font-medium text-ink">
                  {m.name}
                </h3>
                <p className="mt-1 font-sans text-[11px] uppercase tracking-wide2 text-bronze">
                  {m.role}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
