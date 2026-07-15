import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "../data/site";
import { scrollProgress } from "../lib/lenis";

/** Slim gold progress bar pinned to the very top of the viewport */
export function ScrollProgress() {
  return (
    <motion.div
      style={{ scaleX: scrollProgress }}
      className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-gold-sheen"
    />
  );
}

/** Persistent WhatsApp quick-contact button */
export function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/91${CONTACT.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6, duration: 0.6 }}
      className="group fixed bottom-6 right-6 z-[75] flex items-center gap-3"
    >
      <span className="pointer-events-none hidden rounded-full border border-gold/30 bg-ivory/95 px-4 py-2 font-sans text-xs uppercase tracking-wide2 text-bronze shadow-card backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 md:block md:opacity-0">
        Chat with us
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-sheen text-ink shadow-glow transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-luxe">
        <MessageCircle className="h-6 w-6" />
      </span>
    </motion.a>
  );
}
