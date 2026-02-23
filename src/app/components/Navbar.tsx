import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { clsx } from 'clsx';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navLinks = [
    { name: 'Residences', href: '#residences' },
    { name: 'Legacy', href: '#legacy' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500 md:px-12",
          isScrolled 
            ? "bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border-gold)]" 
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="font-serif text-2xl tracking-[0.2em] font-medium text-[var(--text-primary)]">
            ATLANTIS
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--accent-gold)]"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-[var(--text-primary)]"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={clsx(
          "fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[var(--bg-primary)] transition-opacity duration-500",
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-[var(--text-primary)]"
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-3xl text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
