import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Contact() {
  return (
    <section id="contact" className="section-shell bg-[var(--bg-primary)] py-20 md:py-28 border-t border-[var(--border-color)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_15%_20%,var(--luxury-surface)_0%,transparent_40%),radial-gradient(circle_at_82%_78%,var(--luxury-surface)_0%,transparent_38%)]" />
        <div className="absolute inset-0 opacity-35 bg-[repeating-linear-gradient(120deg,transparent_0,transparent_16px,var(--border-color)_17px,transparent_18px)]" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 54, scale: 0.95, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{ duration: 1.02, ease: LUXURY_EASE }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[var(--accent-gold)] uppercase tracking-[0.3em] text-sm font-medium block mb-6">
            Inquiries
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[var(--text-primary)] mb-6">
            Begin the Conversation
          </h2>
          <p className="text-[var(--text-secondary)] font-light max-w-lg mx-auto">
            Private viewings are available by appointment only.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 62, scale: 0.94, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.28 }}
          transition={{ duration: 1, delay: 0.12, ease: LUXURY_EASE }}
          className="space-y-10 border border-[var(--border-color)] px-6 py-8 md:px-10 md:py-10 bg-[var(--bg-primary)] backdrop-blur-[1px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group relative">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-[var(--border-color)] py-4 text-[var(--text-primary)] placeholder-[var(--text-primary)]/50 focus:outline-none focus:border-[var(--accent-gold)] transition-colors duration-500 font-light tracking-wide"
              />
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--accent-gold)] transition-all duration-500 group-focus-within:w-full" />
            </div>
            
            <div className="group relative">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border-b border-[var(--border-color)] py-4 text-[var(--text-primary)] placeholder-[var(--text-primary)]/50 focus:outline-none focus:border-[var(--accent-gold)] transition-colors duration-500 font-light tracking-wide"
              />
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--accent-gold)] transition-all duration-500 group-focus-within:w-full" />
            </div>
          </div>

          <div className="group relative">
            <input 
              type="tel" 
              placeholder="Phone (Optional)" 
              className="w-full bg-transparent border-b border-[var(--border-color)] py-4 text-[var(--text-primary)] placeholder-[var(--text-primary)]/50 focus:outline-none focus:border-[var(--accent-gold)] transition-colors duration-500 font-light tracking-wide"
            />
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--accent-gold)] transition-all duration-500 group-focus-within:w-full" />
          </div>

          <div className="group relative">
            <textarea 
              placeholder="Message" 
              rows={4}
              className="w-full bg-transparent border-b border-[var(--border-color)] py-4 text-[var(--text-primary)] placeholder-[var(--text-primary)]/50 focus:outline-none focus:border-[var(--accent-gold)] transition-colors duration-500 font-light tracking-wide resize-none"
            />
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--accent-gold)] transition-all duration-500 group-focus-within:w-full" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-[var(--border-color)] pt-4">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-secondary)]">
              Discretion, privacy, and direct response guaranteed.
            </p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent-gold)]">
              Concierge Response in 24 Hours
            </p>
          </div>

          <div className="flex justify-center pt-8">
            <button className="group relative px-12 py-5 overflow-hidden rounded-none border border-[var(--accent-gold)] text-[var(--text-primary)] bg-transparent hover:bg-[var(--accent-gold)]/10 transition-colors duration-700">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-[var(--accent-gold)]/20 to-transparent transition-transform duration-1000 [transition-timing-function:var(--luxury-ease)]" />
              <span className="relative z-10 flex items-center gap-4 text-xs uppercase tracking-[0.2em] group-hover:text-[var(--accent-gold)] transition-colors duration-500">
                Request Private Access
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
