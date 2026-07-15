import { Instagram, Phone, Mail } from "lucide-react";
import { HouseMark } from "../components/Figure";
import { CONTACT, NAV_LINKS } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-ivory">
      <div className="container-luxe py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <HouseMark className="h-9 w-9 text-gold" />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-medium text-ink">
                  Pure Insights
                </span>
                <span className="mt-1 font-sans text-[9px] uppercase tracking-luxe text-bronze">
                  Interior · Architecture
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm font-sans text-sm font-light leading-relaxed text-ink-soft">
              Elevating spaces with creativity and functionality — bespoke
              luxury interiors that feel like a natural reflection of their
              people.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-luxe text-bronze">
              Explore
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-sans text-sm text-ink-soft transition-colors hover:text-bronze"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-luxe text-bronze">
              Contact
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-2 font-sans text-sm text-ink-soft transition-colors hover:text-bronze"
                >
                  <Phone className="h-3.5 w-3.5 text-gold" /> {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 font-sans text-sm text-ink-soft transition-colors hover:text-bronze"
                >
                  <Mail className="h-3.5 w-3.5 text-gold" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-sans text-sm text-ink-soft transition-colors hover:text-bronze"
                >
                  <Instagram className="h-3.5 w-3.5 text-gold" />{" "}
                  {CONTACT.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-gold-line opacity-40" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-sans text-xs text-ink-muted">
            © {new Date().getFullYear()} Pure Insights. All rights reserved.
          </p>
          <p className="font-sans text-xs text-ink-muted">
            Crafted with meticulous attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
}
