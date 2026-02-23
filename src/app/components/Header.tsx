import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export function Header({ theme, toggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const headerOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const headerY = useTransform(scrollY, [0, 50], [-20, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Legacy", "Residences", "Amenities", "Gallery", "Contact"];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "py-4 bg-[var(--bg-primary)]/80 backdrop-blur-md"
          : "py-8 bg-transparent"
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center custom-scale-80p">
          <a href="#" className="z-50 group">
            <h1
              className={`font-serif text-2xl md:text-3xl tracking-[0.2em] font-light transition-opacity duration-300 group-hover:opacity-70 ${!isScrolled ? "text-white" : "text-[var(--text-primary)]"
                }`}
            >
              ATLANTIS
            </h1>
          </a>

          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-[13px] uppercase tracking-[0.15em] opacity-70 hover:opacity-100 transition-all duration-300 hover:text-[var(--accent-gold)] relative group ${!isScrolled ? "text-white" : "text-[var(--text-primary)]"
                  }`}
              >
                {link}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[var(--accent-gold)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="ml-8 p-2 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={16} className="opacity-70 group-hover:opacity-100 transition-transform duration-500 rotate-0 group-hover:rotate-90" />
              ) : (
                <Moon size={16} className="opacity-70 group-hover:opacity-100 transition-transform duration-500 rotate-0 group-hover:-rotate-12" />
              )}
            </button>
          </nav>

          <button
            className="lg:hidden z-50 text-[var(--text-primary)] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={`fixed inset-0 z-40 bg-[var(--bg-primary)] lg:hidden flex flex-col justify-center items-center`}
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none"
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-4xl text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20
              }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            >
              {link}
            </motion.a>
          ))}

          <motion.button
            onClick={() => {
              toggleTheme();
              // Keep menu open to see change or close it? Let's keep it open but maybe close after a delay if desired. 
            }}
            className="mt-8 flex items-center space-x-2 text-[var(--text-secondary)] uppercase tracking-widest text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
            transition={{ delay: 0.6 }}
          >
            <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
