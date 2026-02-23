import { motion } from 'motion/react';
import { clsx } from 'clsx';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        "relative flex h-8 w-14 cursor-pointer items-center rounded-full border border-[var(--border-gold)] bg-[var(--bg-secondary)] p-1 transition-colors duration-500",
        "hover:border-[var(--accent-gold)]"
      )}
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute h-6 w-6 rounded-full bg-[var(--accent-gold)] shadow-sm flex items-center justify-center"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        style={{
          left: theme === 'dark' ? '4px' : 'calc(100% - 28px)',
        }}
      >
        {theme === 'dark' ? (
          <Moon size={12} className="text-[var(--bg-primary)]" />
        ) : (
          <Sun size={12} className="text-[var(--bg-primary)]" />
        )}
      </motion.div>
    </button>
  );
}
