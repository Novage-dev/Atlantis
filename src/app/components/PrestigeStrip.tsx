import { motion } from "motion/react";

const services = [
  {
    title: "Dedicated Concierge",
    description: "Private reservations, travel, and events curated around your schedule.",
  },
  {
    title: "At-Home Wellness",
    description: "In-residence treatments, trainers, and recovery programs by request.",
  },
  {
    title: "Discreet Security",
    description: "Biometric access and managed guest arrivals with private lift protocol.",
  },
];

const marquees = [
  "Bespoke Interiors",
  "Waterfront Address",
  "Global Residency Circle",
  "Owner Privileges",
  "Curated Art Program",
];

const recognition = ["Architectural Digest", "Forbes Travel", "Conde Nast Traveler", "Wallpaper*"];

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function PrestigeStrip() {
  return (
    <section className="section-shell section-shell-no-rule bg-[var(--bg-secondary)] py-14 md:py-20">
      <div className="border-y border-[var(--border-color)] py-4 mb-10 md:mb-14 overflow-hidden">
        <div className="luxury-marquee-track text-[10px] md:text-xs uppercase tracking-[0.24em] text-[var(--text-secondary)]">
          {[...marquees, ...marquees].map((label, index) => (
            <span key={`${label}-${index}`} className="inline-flex items-center">
              <span className="mx-6 text-[var(--accent-gold)]">{label}</span>
              <span className="text-[var(--accent-gold)]/50">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 58, scale: 0.94, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-90px 0px -90px 0px", amount: 0.4 }}
          transition={{ duration: 1.02, ease: LUXURY_EASE }}
        >
          <span className="block text-[var(--accent-gold)] uppercase tracking-[0.28em] text-[10px] md:text-xs mb-5">
            Quiet Signature
          </span>
          <blockquote className="font-serif text-3xl md:text-5xl leading-tight text-[var(--text-primary)] max-w-2xl">
            Luxury is not an amenity. It is a choreography of detail, service, and silence.
          </blockquote>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:gap-5">
          {services.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 62, scale: 0.93, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-80px 0px -80px 0px", amount: 0.28 }}
              transition={{ duration: 0.98, delay: index * 0.09, ease: LUXURY_EASE }}
              className="luxury-card border border-[var(--border-color)] bg-[var(--bg-primary)] px-6 py-5 md:px-7 md:py-6"
            >
              <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-2">{item.title}</h3>
              <p className="text-sm md:text-[15px] text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(7px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: false, margin: "-80px 0px -80px 0px", amount: 0.3 }}
        transition={{ duration: 0.98, delay: 0.18, ease: LUXURY_EASE }}
        className="container mx-auto px-6 mt-10 md:mt-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[var(--border-color)] divide-x divide-y md:divide-y-0 divide-[var(--border-color)]">
          {recognition.map((name) => (
            <div
              key={name}
              className="px-4 py-4 text-center text-[10px] md:text-xs uppercase tracking-[0.22em] text-[var(--text-secondary)]"
            >
              {name}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
