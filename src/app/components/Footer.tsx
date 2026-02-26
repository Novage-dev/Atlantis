import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="section-shell section-shell-no-rule bg-[var(--bg-secondary)] py-16 md:py-20 text-center relative border-t border-[var(--border-color)]">
      <div className="container mx-auto px-6">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/50 to-transparent mb-12" />

        <motion.div
          initial={{ opacity: 0, y: 56, scale: 0.95, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 1, ease: LUXURY_EASE }}
          className="flex flex-col items-center justify-center space-y-10"
        >
          <a href="#" className="z-50 group">
            <h1 className="font-serif text-3xl md:text-5xl tracking-[0.2em] font-light text-[var(--text-primary)] transition-opacity duration-300 group-hover:opacity-70">
              ATLANTIS
            </h1>
          </a>

          <nav className="flex flex-wrap justify-center gap-7 md:gap-12">
            {["Residences", "Legacy", "Amenities", "Gallery", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex flex-col md:flex-row gap-8 items-center text-[var(--text-secondary)] text-[10px] uppercase tracking-widest font-light opacity-60">
            <span>Copyright 2026 Atlantis Development</span>
            <span className="hidden md:inline">/</span>
            <span>All Rights Reserved</span>
            <span className="hidden md:inline">/</span>
            <span>Privacy Policy</span>
          </div>
        </motion.div>

        <button
          onClick={scrollToTop}
          className="absolute bottom-12 right-6 md:right-12 p-3 border border-[var(--border-color)] rounded-full text-[var(--text-secondary)] hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)] transition-colors duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} className="transition-transform duration-500 group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
}
