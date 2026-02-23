import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--bg-secondary)] py-24 text-center relative border-t border-[var(--border-color)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-12"
        >
          <a href="#" className="z-50 group">
            <h1 className="font-serif text-3xl md:text-5xl tracking-[0.2em] font-light text-[var(--text-primary)] transition-opacity duration-300 group-hover:opacity-70">
              ATLANTIS
            </h1>
          </a>
          
          <nav className="flex flex-wrap justify-center gap-8 md:gap-16">
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
             <span>© 2024 Atlantis Development</span>
             <span className="hidden md:inline">•</span>
             <span>All Rights Reserved</span>
             <span className="hidden md:inline">•</span>
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
