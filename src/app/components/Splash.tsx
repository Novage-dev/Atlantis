import { motion } from "motion/react";
import { useEffect, useState } from "react";

const letters = "ATLANTIS".split("");

export function LoadingScreen({ onFinish }: { onFinish?: () => void }) {
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateOut(true);
      if (onFinish) onFinish();
    }, 3000); // total animation length
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[var(--bg-primary)] z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: animateOut ? 0 : 1 }}
      transition={{ duration: 1 }}
    >
      {/* Word container with glow */}
      <motion.div
        className="flex space-x-2 text-5xl md:text-7xl lg:text-9xl font-serif text-[var(--accent-gold)]"
        style={{
          textShadow: "0 0 15px rgba(255,215,0,0.8)",
        }}
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.25,   // increased delay for slower cascade
              duration: 1,       // longer fade-in for each letter
              ease: "easeOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}