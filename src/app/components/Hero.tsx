import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeaderProps {
  theme: "dark" | "light";
  imageSrc: string;
}

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero({ theme, imageSrc }: HeaderProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 240]);
  const overlayY = useTransform(scrollY, [0, 600], [0, 120]);
  const titleY = useTransform(scrollY, [0, 420], [0, 90]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen min-h-[660px] w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <ImageWithFallback
          src={imageSrc}
          alt="Luxury infinity pool ocean view sunset"
          className="w-full h-full object-cover hero-scale-animation"
        />
      </motion.div>

      <motion.div
        style={{ y: overlayY }}
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/45 to-black/65"
      />

      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute inset-y-0 left-[7%] w-px bg-gradient-to-b from-transparent via-[var(--accent-gold)]/30 to-transparent hero-float" />
        <div className="absolute inset-y-0 right-[8%] w-px bg-gradient-to-b from-transparent via-[var(--accent-gold)]/25 to-transparent hero-float" />
        <div className="absolute inset-y-0 left-[-28%] w-[55%] bg-gradient-to-r from-transparent via-[rgba(255,233,190,0.24)] to-transparent blur-[8px] hero-light-sweep" />
      </div>

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: LUXURY_EASE, delay: 0.12 }}
        >
          <span className="block text-[var(--accent-gold)] uppercase tracking-[0.34em] text-xs md:text-sm mb-6 font-medium">
            Ultra-Luxury Living
          </span>
        </motion.div>

        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#f7f3ea] leading-[1.04] mb-7 md:mb-8 font-light tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: LUXURY_EASE, delay: 0.24 }}
          style={{ y: titleY }}
        >
          Where Elegance <br /> Meets Horizon
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: LUXURY_EASE, delay: 0.6 }}
          className="w-24 h-[1px] bg-[var(--accent-gold)] mb-10 origin-center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: LUXURY_EASE }}
        >
          <button className="group relative px-8 py-4 overflow-hidden rounded-none border border-[var(--accent-gold)] text-[#f7f3ea] transition-all duration-700 hover:bg-[var(--accent-gold)]/12">
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-[rgba(255,235,194,0.2)] to-transparent transition-transform duration-1000 [transition-timing-function:var(--luxury-ease)]" />
            <span className="relative z-10 flex items-center gap-4 text-xs md:text-sm uppercase tracking-[0.22em]">
              Explore Residences
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.9, ease: LUXURY_EASE }}
      >
        <span className="text-[10px] uppercase tracking-[0.26em] text-[#f7f3ea]/70">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-[var(--accent-gold)] to-transparent"
        />
      </motion.div>
      {/* Bottom Gradient Blend */}
      {theme === "dark" && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-[var(--bg-primary)]/70 to-[var(--bg-primary)] z-20" />
      )}
    </section>
  );
}
