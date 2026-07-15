import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeading } from "../components/ui";
import { Reveal } from "../components/Reveal";
import { Figure } from "../components/Figure";

// Bento layout — each entry maps to a placeholder ./images/gallery-N.jpg
const TILES = [
  { span: "sm:col-span-2 sm:row-span-2", ratio: "aspect-[4/5] sm:aspect-auto", label: "Master Suite" },
  { span: "", ratio: "aspect-[4/3]", label: "Living Room" },
  { span: "", ratio: "aspect-[4/3]", label: "Bath & Vanity" },
  { span: "", ratio: "aspect-[4/3]", label: "Wardrobe" },
  { span: "", ratio: "aspect-[4/3]", label: "Media Wall" },
  { span: "sm:col-span-2", ratio: "aspect-[16/9]", label: "Balcony Lounge" },
  { span: "", ratio: "aspect-[4/3]", label: "Dining" },
  { span: "", ratio: "aspect-[4/3]", label: "Foyer" },
];

export function Portfolio() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Our Best Works"
          title={
            <>
              A curated <span className="text-gold-gradient">gallery</span>
            </>
          }
          intro="Every project is a new opportunity to push the boundaries of design and redefine luxury — where creativity meets craftsmanship and every detail is meticulously curated."
        />

        <div className="mt-16 grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-4 sm:grid-cols-4">
          {TILES.map((t, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 0.08}
              className={t.span}
            >
              <button
                onClick={() => setActive(i)}
                className="block h-full w-full"
                aria-label={`View ${t.label}`}
              >
                <Figure
                  src={`./images/gallery-${i + 1}.jpg`}
                  label={t.label}
                  alt={t.label}
                  ratio={`${t.ratio} h-full`}
                  className="h-full"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-md"
          >
            <button
              className="absolute right-6 top-6 text-ivory/80 transition-colors hover:text-gold-light"
              aria-label="Close"
            >
              <X className="h-7 w-7" />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl"
            >
              <Figure
                src={`./images/gallery-${active + 1}.jpg`}
                label={TILES[active].label}
                ratio="aspect-[16/10]"
                eager
              />
              <p className="mt-4 text-center font-serif text-xl italic text-gold-light">
                {TILES[active].label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
