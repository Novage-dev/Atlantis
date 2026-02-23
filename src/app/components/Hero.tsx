import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeaderProps {
  theme: "dark" | "light";
}


export function Hero({ theme }: HeaderProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // image used for background
  // https://images.unsplash.com/photo-1724218041680-a6b87c3c443e

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for text contrast */}
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1745613999710-1aaf60145502"
          alt="Luxury infinity pool ocean view sunset"
          className="w-full h-full object-cover custom-contrast-with-blur"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center custom-scale-80p">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span className="block text-[var(--accent-gold)] uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium">
            Ultra-Luxury Living
          </span>
        </motion.div>

        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-9xl text-[var(--color-cream)] leading-[1.1] mb-8 font-light tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          style={{ scale: 0.8 }}
        >
          Where Elegance <br /> Meets Horizon
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="w-24 h-[1px] bg-[var(--accent-gold)] mb-10 origin-center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button className="group relative px-8 py-4 overflow-hidden rounded-none border border-[var(--accent-gold)] text-[var(--color-cream)] transition-all duration-500 hover:bg-[var(--accent-gold)]/10">
            <span className="relative z-10 flex items-center gap-4 text-sm uppercase tracking-[0.2em]">
              Explore Residences
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 custom-scale-80p"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-cream)]/70">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-[var(--accent-gold)] to-transparent"
        />
      </motion.div>
      {/* Bottom Gradient Blend */}
      {theme === 'dark' && (<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-[var(--bg-primary)]/60 to-[var(--bg-primary)] z-10" />)}
    </section>
  );
}
