import { motion } from "motion/react";
import { Bell, Shield, Car, Dumbbell, Droplets, Martini, Wine, TreePalm } from "lucide-react";

const amenities = [
  { id: 1, icon: Droplets, title: "Infinity Pool", desc: "Panoramic ocean views" },
  { id: 2, icon: Dumbbell, title: "Private Wellness", desc: "Technogym & Sauna" },
  { id: 3, icon: Bell, title: "24/7 Concierge", desc: "White glove service" },
  { id: 4, icon: Shield, title: "Secure Access", desc: "Biometric entry" },
  { id: 5, icon: Car, title: "Valet Parking", desc: "Climate controlled" },
  { id: 6, icon: Martini, title: "Sky Lounge", desc: "Residents only" },
  { id: 7, icon: Wine, title: "Wine Cellar", desc: "Temperature managed" },
  { id: 8, icon: TreePalm, title: "Private Gardens", desc: "Zen landscaping" },
];

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Amenities() {
  return (
    <section id="amenities" className="section-shell bg-[var(--bg-primary)] py-20 md:py-24 border-t border-[var(--border-color)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(7px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{ duration: 1, ease: LUXURY_EASE }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[var(--accent-gold)] uppercase tracking-[0.3em] text-sm font-medium block mb-4">
            Unrivaled Comfort
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)]">
            World-Class Amenities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-color)] border border-[var(--border-color)]">
          {amenities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 64, scale: 0.92, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.95, delay: index * 0.09, ease: LUXURY_EASE }}
              className="luxury-card bg-[var(--bg-primary)] p-8 md:p-10 flex flex-col items-center text-center group hover:bg-[var(--bg-secondary)] transition-colors duration-700 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[var(--accent-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="mb-6 text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors duration-700 transform group-hover:-translate-y-2 ease-out">
                <item.icon strokeWidth={1} size={40} />
              </div>
              
              <h3 className="luxury-card-title font-serif text-xl text-[var(--text-primary)] mb-2 tracking-wide group-hover:-translate-y-1 transition-transform duration-700">
                {item.title}
              </h3>
              
              <p className="text-[var(--text-secondary)] text-sm font-light tracking-wide group-hover:text-[var(--text-primary)] transition-colors duration-700">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
