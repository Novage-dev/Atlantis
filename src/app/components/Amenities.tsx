import { motion } from "motion/react";
import { Waves, Bell, Shield, Car, Dumbbell, Droplets, Martini, Wine, TreePalm } from "lucide-react";

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

export function Amenities() {
  return (
    <section id="amenities" className="py-24 md:py-32 bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--bg-primary)] p-10 flex flex-col items-center text-center group hover:bg-[var(--bg-secondary)] transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[var(--accent-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="mb-6 text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors duration-500 transform group-hover:-translate-y-2 ease-out">
                <item.icon strokeWidth={1} size={40} />
              </div>
              
              <h3 className="font-serif text-xl text-[var(--text-primary)] mb-2 tracking-wide group-hover:-translate-y-1 transition-transform duration-500">
                {item.title}
              </h3>
              
              <p className="text-[var(--text-secondary)] text-sm font-light tracking-wide group-hover:text-[var(--text-primary)] transition-colors duration-500">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
