import { Reveal } from "../components/Reveal";
import { Figure } from "../components/Figure";
import { STATS } from "../data/site";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left — imagery */}
        <div className="relative pb-12 sm:pb-0">
          <Reveal direction="right">
            <Figure
              src="./images/about-1.jpg"
              alt="Pure Insights living space"
              label="Bespoke Living"
              ratio="aspect-[4/5]"
              className="shadow-luxe"
            />
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <div className="absolute -bottom-10 -right-2 w-28 sm:w-40 md:-right-6 md:w-52">
              <Figure
                src="./images/about-2.jpg"
                alt="Detail of a Pure Insights interior"
                label="The Detail"
                ratio="aspect-square"
                className="border-4 border-ivory shadow-card"
              />
            </div>
          </Reveal>
          {/* floating accent */}
          <div className="absolute -left-5 -top-5 hidden h-24 w-24 border-l border-t border-gold/40 md:block" />
        </div>

        {/* Right — copy */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold/60" />
              <span className="eyebrow">Behind the Brand</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-ink md:text-5xl">
              Where the practical meets the{" "}
              <span className="text-gold-gradient">luxurious</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 font-sans text-[15px] font-light leading-relaxed text-ink-soft">
              Pure Insights strikes the perfect balance between bringing in
              ourselves and factoring in your brief. Born in Mumbai — where
              tradition meets innovation — we possess a natural ability,
              combined with a professional ethos, to elevate any space into an
              imaginative and compelling environment.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-4 font-sans text-[15px] font-light leading-relaxed text-ink-soft">
              A common thread runs right through our process to the outcome:
              meticulous attention to detail that juxtaposes the practical with
              the luxurious. Every project is a labor of love — a reflection of
              our passion for elegance, sophistication and the finer things in
              life.
            </p>
          </Reveal>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gold/15 pt-10 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i}>
                <div>
                  <div className="font-serif text-4xl font-medium text-gold-gradient">
                    {s.value}
                  </div>
                  <div className="mt-2 font-sans text-[11px] uppercase tracking-wide2 text-ink-muted">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
