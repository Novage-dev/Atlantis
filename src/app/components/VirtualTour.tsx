import { motion } from "motion/react";

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function VirtualTour() {
  return (
    <section id="tour" className="section-shell bg-[var(--bg-secondary)] py-16 md:py-24 border-t border-[var(--border-color)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 54, scale: 0.95, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 1, ease: LUXURY_EASE }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="text-[var(--accent-gold)] uppercase tracking-[0.28em] text-xs block mb-3">
            Immersive View
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[var(--text-primary)]">
            Private Virtual Tour
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.93, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.04, delay: 0.08, ease: LUXURY_EASE }}
          className="flex justify-center"
        >
          <div className="w-full md:w-[75%] border border-[var(--border-color)] luxury-card overflow-hidden bg-black/20">
            <iframe
              height="350"
              width="100%"
              allowFullScreen
              src="https://momento360.com/e/u/a9b53aa8f8b0403ba7a4e18243aabc66"
              title="Momento360 Virtual Tour"
              className="block w-full border-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
