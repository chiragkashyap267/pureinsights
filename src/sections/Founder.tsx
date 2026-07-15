import { Reveal } from "../components/Reveal";
import { Figure } from "../components/Figure";

export function Founder() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal direction="right">
          <div className="relative">
            <Figure
              src="./images/founder.jpg"
              alt="Dinesh Gije, Founder & CEO of Pure Insights"
              ratio="aspect-[4/5]"
              className="shadow-luxe"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border-b border-r border-gold/40 lg:block" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">The Founder</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-ink md:text-5xl">
              Dinesh Gije
            </h2>
            <p className="mt-2 font-sans text-xs uppercase tracking-wide2 text-bronze">
              Head Interior Designer · CEO
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 font-sans text-[15px] font-light leading-relaxed text-ink-soft">
              At the heart of Pure Insights is Dinesh Gije — a true visionary
              with an eye for elegance and a passion for design. He has always
              believed that great design goes beyond aesthetics: it is about
              creating environments that resonate with the soul.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-4 font-sans text-[15px] font-light leading-relaxed text-ink-soft">
              His ability to blend traditional values with modern sensibilities
              has laid the foundation for what Pure Insights stands for today.
              Under his leadership, the studio has grown from a small,
              passionate team into a leading name in luxury interiors, spanning
              residential, commercial and hospitality projects in India and
              abroad.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <blockquote className="mt-9 border-l-2 border-gold pl-6">
              <p className="font-serif text-xl italic leading-snug text-bronze md:text-2xl">
                “True luxury is found in the details.”
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
