import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedResidences } from "./components/FeaturedResidences";
import { Legacy } from "./components/Legacy";
import { Amenities } from "./components/Amenities";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/Splash";
import { GoldenBackground } from "./components/GoldenBackground";
import { PrestigeStrip } from "./components/PrestigeStrip";
import { VirtualTour } from "./components/VirtualTour";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  const [imageLoaded, setImageLoaded] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);
  const [loading, setLoading] = useState(true);

  const HERO_IMAGE =
    "https://images.unsplash.com/photo-1745613999710-1aaf60145502";

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Preload hero image
  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE;

    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true); // fail-safe
  }, []);

  // Minimum splash duration (3s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimePassed(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Wait for BOTH conditions
  useEffect(() => {
    if (imageLoaded && minTimePassed) {
      setLoading(false);
    }
  }, [imageLoaded, minTimePassed]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="site-canvas min-h-screen text-[var(--text-primary)] transition-colors duration-700 ease-in-out font-sans selection:bg-[var(--accent-gold)] selection:text-white">
      {loading && <LoadingScreen />}

      {!loading && (
        <>

          <div className="relative" style={{ zIndex: 10 }}>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main>
              {/* Golden background decorative elements */}
              <GoldenBackground />
              <Hero theme={theme} imageSrc={HERO_IMAGE} />
              <Legacy />
              <FeaturedResidences />
              <PrestigeStrip />
              <Amenities />
              <Gallery />
              <Contact />
              <VirtualTour />
            </main>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
