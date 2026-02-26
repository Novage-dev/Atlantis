import { motion, useInView, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Counter({ value, label }: { value: number; label: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(containerRef, { margin: "-70px 0px -70px 0px" });
  const spring = useSpring(0, { duration: 1800, bounce: 0 });

  useEffect(() => {
    spring.set(inView ? value : 0);
  }, [inView, value, spring]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [spring]);

  return (
    <div ref={containerRef} className="flex flex-col items-start">
      <div className="flex items-baseline overflow-hidden">
        <span ref={ref} className="text-4xl md:text-5xl font-serif text-[var(--accent-gold)]">
          0
        </span>
        <span className="text-xl text-[var(--accent-gold)] ml-1">+</span>
      </div>
      <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] mt-2 border-t border-[var(--border-color)] pt-2 w-full">
        {label}
      </span>
    </div>
  );
}

export function Legacy() {
  return (
    <section id="legacy" className="section-shell bg-[var(--bg-secondary)] py-20 md:py-28">

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.94, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-110px 0px -110px 0px", amount: 0.35 }}
          transition={{ duration: 1, ease: LUXURY_EASE }}
          className="relative h-[520px] md:h-[560px] w-full order-2 md:order-1"

        >
          <div className="absolute inset-0 border border-[var(--accent-gold)]/25 translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 z-0" />
          <div className="relative z-10 w-full h-full overflow-hidden luxury-card">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759803526018-49bad8efb5a6?q=80&w=1080&auto=format&fit=crop"
              alt="Architectural detail"
              className="w-full h-full object-cover grayscale-[18%] hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Text Side */}
        <div className="flex flex-col justify-center order-1 md:order-2">
          <motion.span
            initial={{ opacity: 0, y: 44, scale: 0.95, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.55 }}
            transition={{ duration: 0.95, ease: LUXURY_EASE }}
            className="text-[var(--accent-gold)] uppercase tracking-[0.3em] text-xs font-medium mb-6 flex items-center gap-4"
          >
            <span className="w-8 h-[1px] bg-[var(--accent-gold)]" />
            Our Heritage
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 56, scale: 0.94, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{ duration: 1, delay: 0.08, ease: LUXURY_EASE }}
            className="font-serif text-4xl md:text-6xl text-[var(--text-primary)] leading-tight mb-6"
          >
            Defining the Skyline <br /> Since 1985.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 44, scale: 0.96, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{ duration: 0.95, delay: 0.14, ease: LUXURY_EASE }}
            className="text-[var(--text-secondary)] leading-relaxed mb-10 font-light text-lg md:max-w-md"
          >
            Atlantis is not just a developer; we are curators of the exceptional.
            For over four decades, we have shaped the global landscape with
            architectural masterpieces that transcend time and trend.
          </motion.p>

          <motion.div
            className="grid grid-cols-3 gap-8 border-t border-[var(--border-color)] pt-8"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.55 }}
            transition={{ duration: 0.9, delay: 0.2, ease: LUXURY_EASE }}
          >
            <Counter value={40} label="Years" />
            <Counter value={120} label="Projects" />
            <Counter value={15} label="Cities" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
