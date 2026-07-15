import { Reveal } from "../components/Reveal";
import { Figure } from "../components/Figure";
import { Eye, Compass } from "lucide-react";

export function VisionMission() {
  return (
    <section id="vision" className="relative overflow-hidden bg-ink py-24 md:py-32">
      {/* ambient gold glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-bronze/10 blur-[120px]" />

      <div className="container-luxe relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow text-gold-light">Our Philosophy</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-ivory md:text-5xl">
              We don't just design spaces —
              <br />
              <span className="text-gold-shimmer">we illuminate possibilities</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal direction="right">
            <Card
              icon={<Eye className="h-6 w-6" />}
              kicker="Our Vision"
              title="Pioneering the future of design"
              body="From luxurious residences to dynamic retail, inspiring corporate hubs to functional commercial spaces, our vision is to craft environments that blend innovation with elegance — where every detail reflects precision and purpose."
              img="./images/vision.jpg"
            />
          </Reveal>
          <Reveal direction="left" delay={0.12}>
            <Card
              icon={<Compass className="h-6 w-6" />}
              kicker="Our Mission"
              title="Harmonising innovation with practicality"
              body="Driven by a commitment to excellence, we strive to exceed expectations through the seamless integration of aesthetics and utility — transforming visions into reality and leaving a lasting impression through timeless craftsmanship."
              img="./images/mission.jpg"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  kicker,
  title,
  body,
  img,
}: {
  icon: React.ReactNode;
  kicker: string;
  title: string;
  body: string;
  img: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-sm border border-gold/20 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-gold/45 md:p-10">
      <div className="flex items-start gap-6">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold-light transition-colors duration-500 group-hover:border-gold group-hover:text-gold">
          {icon}
        </div>
        <div>
          <span className="font-sans text-[11px] uppercase tracking-luxe text-gold-light">
            {kicker}
          </span>
          <h3 className="mt-2 font-serif text-2xl font-medium text-ivory md:text-3xl">
            {title}
          </h3>
        </div>
      </div>
      <p className="mt-6 font-sans text-sm font-light leading-relaxed text-ivory/65">
        {body}
      </p>
      <div className="mt-8 overflow-hidden rounded-sm">
        <Figure src={img} alt={title} ratio="aspect-[16/9]" rounded="rounded-sm" />
      </div>
    </div>
  );
}
