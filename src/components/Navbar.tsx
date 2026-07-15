import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/site";
import { HouseMark } from "./Figure";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-gold/15 bg-ivory/85 py-3 backdrop-blur-xl"
            : "border-b border-transparent py-5"
        }`}
      >
        <nav className="container-luxe flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <HouseMark className="h-8 w-8 text-gold" />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-xl font-medium tracking-wide text-ink">
                Pure Insights
              </span>
              <span className="mt-0.5 font-sans text-[9px] uppercase tracking-luxe text-bronze">
                Interior · Architecture
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative font-sans text-xs uppercase tracking-wide2 text-ink-soft transition-colors hover:text-bronze"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-gold-sheen px-6 py-2.5 font-sans text-xs uppercase tracking-wide2 text-ink shadow-glow transition-all duration-500 hover:-translate-y-0.5 hover:shadow-luxe lg:inline-flex"
          >
            Enquire
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-ink lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-md lg:hidden"
          >
            <div className="container-luxe flex items-center justify-between py-5">
              <span className="font-serif text-xl text-ivory">Pure Insights</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-ivory"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              className="mt-10 flex flex-col items-center gap-7"
            >
              {NAV_LINKS.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-3xl text-ivory/90 transition-colors hover:text-gold-light"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex rounded-full bg-gold-sheen px-8 py-3 font-sans text-xs uppercase tracking-wide2 text-ink"
                >
                  Enquire
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
