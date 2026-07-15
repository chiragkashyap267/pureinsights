import { Phone, MessageCircle, Mail, Instagram, MapPin } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Figure } from "../components/Figure";
import { CONTACT } from "../data/site";

export function Contact() {
  const items = [
    {
      icon: Phone,
      label: "Phone",
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: CONTACT.whatsapp,
      href: `https://wa.me/91${CONTACT.whatsapp}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: CONTACT.instagram,
      href: CONTACT.instagramUrl,
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-luxe">
        <div className="overflow-hidden rounded-sm border border-gold/20 bg-ink shadow-luxe">
          <div className="grid lg:grid-cols-2">
            {/* Left — details */}
            <div className="relative p-10 md:p-14">
              <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-[100px]" />
              <div className="relative">
                <Reveal>
                  <span className="eyebrow text-gold-light">Get in Touch</span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-ivory md:text-5xl">
                    Let's create your{" "}
                    <span className="text-gold-shimmer">oasis</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="mt-5 max-w-md font-sans text-sm font-light leading-relaxed text-ivory/60">
                    Whether you're revamping your home or designing your dream
                    office — Pure Insights is your go-to for inspiration and
                    impeccable execution. Start living the luxury experience.
                  </p>
                </Reveal>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {items.map((it, i) => (
                    <Reveal key={it.label} delay={0.1 + i * 0.06}>
                      <a
                        href={it.href}
                        target={it.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="group flex items-center gap-4 rounded-sm border border-gold/15 bg-white/[0.03] p-4 transition-all duration-500 hover:border-gold/45 hover:bg-white/[0.06]"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold-light transition-colors duration-500 group-hover:border-gold group-hover:text-gold">
                          <it.icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-sans text-[10px] uppercase tracking-luxe text-ivory/40">
                            {it.label}
                          </span>
                          <span className="block truncate font-sans text-sm text-ivory/90">
                            {it.value}
                          </span>
                        </span>
                      </a>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={0.4}>
                  <div className="mt-8 flex items-start gap-4 border-t border-gold/15 pt-8">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-light" />
                    <div>
                      <span className="block font-sans text-[10px] uppercase tracking-luxe text-ivory/40">
                        Head Office
                      </span>
                      <span className="mt-1 block font-sans text-sm font-light leading-relaxed text-ivory/80">
                        {CONTACT.address}
                      </span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right — imagery */}
            <div className="relative min-h-[320px] lg:min-h-full">
              <Figure
                src="./images/contact.jpg"
                alt="Pure Insights luxury dining and living space"
                ratio=""
                rounded="rounded-none"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
