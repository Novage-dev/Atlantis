import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

function Counter({ value, label }: { value: number; label: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-50px" });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
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
    <section id="legacy" className="py-24 md:py-40 bg-[var(--bg-secondary)] relative overflow-hidden">
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[600px] w-full"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[var(--accent-gold)]/5 -translate-x-4 -translate-y-4 md:-translate-x-8 md:-translate-y-8 z-0" />
          <div className="relative z-10 w-full h-full overflow-hidden">
             <ImageWithFallback
                src="https://images.unsplash.com/photo-1759803526018-49bad8efb5a6?q=80&w=1080&auto=format&fit=crop"
                alt="Architectural detail"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
             />
          </div>
        </motion.div>

        {/* Text Side */}
        <div className="flex flex-col justify-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[var(--accent-gold)] uppercase tracking-[0.3em] text-xs font-medium mb-8 flex items-center gap-4"
          >
            <span className="w-8 h-[1px] bg-[var(--accent-gold)]" />
            Our Heritage
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl text-[var(--text-primary)] leading-tight mb-8"
          >
            Defining the Skyline <br/> Since 1985.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[var(--text-secondary)] leading-relaxed mb-12 font-light text-lg md:max-w-md"
          >
            Atlantis is not just a developer; we are curators of the exceptional. 
            For over four decades, we have shaped the global landscape with 
            architectural masterpieces that transcend time and trend.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-3 gap-8 border-t border-[var(--border-color)] pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
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
