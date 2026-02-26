import { motion, AnimatePresence } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { X } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1758448756207-54505680d130?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1642976975710-1d8890dbf5ab?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1741356474365-5f0041f89eaa?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1764251105942-b0956f30d52b?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1650026857159-3cc0003a609e?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1759803526018-49bad8efb5a6?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1745613999710-1aaf60145502?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1724218041680-a6b87c3c443e?q=80&w=1080&auto=format&fit=crop"
];

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-shell bg-[var(--bg-secondary)] py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 52, scale: 0.95, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{ duration: 1.02, ease: LUXURY_EASE }}
          className="mb-14 md:mb-20 flex justify-between items-end border-b border-[var(--border-color)] pb-7"
        >
          <div>
            <span className="block text-[var(--accent-gold)] text-sm uppercase tracking-[0.2em] mb-4">Visual Journey</span>
            <h2 className="font-serif text-4xl md:text-6xl text-[var(--text-primary)]">The Collection</h2>
          </div>
        </motion.div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="18px">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 70, scale: 0.92, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.98, delay: i * 0.08, ease: LUXURY_EASE }}
                className="relative overflow-hidden cursor-pointer group border border-[var(--border-color)] luxury-card"
                onClick={() => setSelectedImage(img)}
              >
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 flex items-center justify-center">
                   <span className="text-white font-serif text-lg uppercase tracking-[0.22em] opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-700 delay-75">
                     Reveal
                   </span>
                </div>
                <ImageWithFallback
                  src={img}
                  alt="Gallery image"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2">
              <X size={32} />
            </button>
            <motion.img
              src={selectedImage}
              alt="Expanded view"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: LUXURY_EASE }}
              className="max-w-full max-h-full object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
