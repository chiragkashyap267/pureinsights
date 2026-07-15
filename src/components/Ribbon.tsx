const DEFAULT_WORDS = [
  "Bespoke Interiors",
  "Timeless Design",
  "Meticulous Detail",
  "Architecture",
  "Luxury Living",
  "Crafted in Mumbai",
];

/**
 * Kinetic marquee ribbon — an editorial gold-on-ink strip that glides across
 * the page. Used as a rich divider between sections.
 */
export function Ribbon({
  words = DEFAULT_WORDS,
  dark = true,
}: {
  words?: string[];
  dark?: boolean;
}) {
  const run = [...words, ...words];
  return (
    <div
      className={`relative overflow-hidden border-y ${
        dark ? "border-gold/20 bg-ink" : "border-gold/20 bg-pearl"
      } py-6`}
    >
      <div className="flex w-max animate-marquee items-center">
        {run.map((w, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`px-8 font-serif text-2xl italic md:text-3xl ${
                dark ? "text-ivory/85" : "text-ink"
              }`}
            >
              {w}
            </span>
            <span className="text-gold" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
