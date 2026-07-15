import { Reveal } from "../components/Reveal";
import { CLIENTS } from "../data/site";

export function Clients() {
  // split into two rows moving opposite directions
  const half = Math.ceil(CLIENTS.length / 2);
  const rowA = CLIENTS.slice(0, half);
  const rowB = CLIENTS.slice(half);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container-luxe">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">A Few of Our Clients</span>
            <h2 className="mt-4 font-serif text-3xl font-medium text-ink md:text-4xl">
              In good company
            </h2>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-14 space-y-5">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ivory to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ivory to-transparent md:w-40" />

        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>
    </section>
  );
}

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div
        className="flex shrink-0 animate-marquee items-center gap-4"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {doubled.map((name, i) => (
          <span
            key={i}
            className="flex h-16 items-center whitespace-nowrap rounded-sm border border-gold/15 bg-white px-8 font-serif text-lg text-ink-soft shadow-sm transition-colors duration-500 hover:border-gold/40 hover:text-bronze"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
