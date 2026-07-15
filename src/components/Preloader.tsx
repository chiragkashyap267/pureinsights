import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // lock scroll while the intro plays
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 2400);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* ambient glow */}
          <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-gold/15 blur-[120px]" />

          {/* Line-draw house mark */}
          <motion.svg
            viewBox="0 0 64 64"
            fill="none"
            className="relative h-16 w-16 text-gold"
            initial="hidden"
            animate="show"
          >
            {[
              "M14 30 L32 15 L50 30",
              "M18 30 L18 48 L46 48 L46 30",
              "M18 39 L46 39",
            ].map((d, i) => (
              <motion.path
                key={i}
                d={d}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  show: {
                    pathLength: 1,
                    opacity: 1,
                    transition: {
                      pathLength: { duration: 1.1, delay: 0.2 + i * 0.25, ease: "easeInOut" },
                      opacity: { duration: 0.3, delay: 0.2 + i * 0.25 },
                    },
                  },
                }}
              />
            ))}
          </motion.svg>

          {/* Wordmark reveal */}
          <div className="relative mt-6 overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl font-medium tracking-wide text-ivory md:text-4xl"
            >
              Pure Insights
            </motion.div>
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-3 font-sans text-[10px] uppercase tracking-luxe text-gold-light/80"
          >
            Interior · Architecture
          </motion.span>

          {/* progress hairline */}
          <motion.div
            className="mt-8 h-px w-40 origin-left bg-gold-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
