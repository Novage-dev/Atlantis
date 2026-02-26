import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
}

export function FadeIn({ 
  children, 
  className = "", 
  delay = 0, 
  direction = 'up',
  fullWidth = false 
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-12% 0px -12% 0px" });

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        x: directionOffset[direction].x, 
        y: directionOffset[direction].y,
        scale: 0.96,
        filter: "blur(8px)",
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, x: directionOffset[direction].x, y: directionOffset[direction].y, scale: 0.96, filter: "blur(8px)" }
      }
      transition={{
        duration: 0.92,
        ease: [0.22, 1, 0.36, 1],
        delay: delay
      }}
      className={className}
      style={{ width: fullWidth ? '100%' : 'auto' }}
    >
      {children}
    </motion.div>
  );
}
