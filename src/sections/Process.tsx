import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/ui";
import { Figure } from "../components/Figure";
import { PROCESS } from "../data/site";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-pearl py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Our Timeline"
          title={
            <>
              From vision to{" "}
              <span className="text-gold-gradient">handover</span>
            </>
          }
          intro="Meticulous planning sits at the core of everything we do. Three deliberate movements carry your project from first idea to the day you receive the keys."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Steps */}
          <ol className="relative space-y-10 border-l border-gold/25 pl-8 md:pl-10">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.12}>
                <li className="relative">
                  <span className="absolute -left-[42px] flex h-6 w-6 items-center justify-center rounded-full border border-gold/50 bg-ivory md:-left-[52px]">
                    <span className="h-2 w-2 rounded-full bg-gold-sheen" />
                  </span>
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-2xl font-medium text-gold/50">
                      {p.step}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-ink md:text-3xl">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-lg font-sans text-sm font-light leading-relaxed text-ink-soft">
                    {p.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* Collage */}
          <Reveal direction="left" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <Figure
                src="./images/process-1.jpg"
                label="Planning"
                ratio="aspect-[3/4]"
                className="mt-8"
              />
              <Figure
                src="./images/process-2.jpg"
                label="Execution"
                ratio="aspect-[3/4]"
              />
              <Figure
                src="./images/process-3.jpg"
                label="Detailing"
                ratio="aspect-square"
              />
              <Figure
                src="./images/process-4.jpg"
                label="Handover"
                ratio="aspect-square"
                className="mt-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
