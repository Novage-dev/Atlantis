import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'motion/react';

interface RevealTextProps {
  text: string;
  delay?: number;
  className?: string;
  stagger?: number;
}

export function RevealText({ text, delay = 0, className = "", stagger = 0.05 }: RevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-12% 0px -12% 0px" });
  
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.2em] pb-1">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * stagger,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
