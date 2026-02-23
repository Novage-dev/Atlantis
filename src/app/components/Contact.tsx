import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
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

        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group relative">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-[var(--border-color)] py-4 text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-gold)] transition-colors duration-500 font-light tracking-wide"
              />
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--accent-gold)] transition-all duration-500 group-focus-within:w-full" />
            </div>
            
            <div className="group relative">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border-b border-[var(--border-color)] py-4 text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-gold)] transition-colors duration-500 font-light tracking-wide"
              />
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--accent-gold)] transition-all duration-500 group-focus-within:w-full" />
            </div>
          </div>

          <div className="group relative">
            <input 
              type="tel" 
              placeholder="Phone (Optional)" 
              className="w-full bg-transparent border-b border-[var(--border-color)] py-4 text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-gold)] transition-colors duration-500 font-light tracking-wide"
            />
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--accent-gold)] transition-all duration-500 group-focus-within:w-full" />
          </div>

          <div className="group relative">
            <textarea 
              placeholder="Message" 
              rows={4}
              className="w-full bg-transparent border-b border-[var(--border-color)] py-4 text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-gold)] transition-colors duration-500 font-light tracking-wide resize-none"
            />
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--accent-gold)] transition-all duration-500 group-focus-within:w-full" />
          </div>

          <div className="flex justify-center pt-8">
            <button className="group relative px-12 py-5 overflow-hidden rounded-none border border-[var(--accent-gold)] text-[var(--color-cream)] bg-transparent hover:bg-[var(--accent-gold)]/10 transition-colors duration-500">
              <span className="relative z-10 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors duration-300">
                Request Private Access
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
