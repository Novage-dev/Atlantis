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


export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <div className={`min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-700 ease-in-out font-sans selection:bg-[var(--accent-gold)] selection:text-white`}>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && (
        <>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero theme={theme} />
            <FeaturedResidences />
            <Legacy />
            <Amenities />
            <Gallery />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

