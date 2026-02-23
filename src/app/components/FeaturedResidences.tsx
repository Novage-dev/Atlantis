import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

const residences = [
  {
    id: 1,
    title: "Sky Villa I",
    price: "$12,500,000",
    sqft: "4,200 sq.ft",
    image: "https://images.unsplash.com/photo-1642976975710-1d8890dbf5ab?q=80&w=1080&auto=format&fit=crop",
    beds: 3,
    baths: 3.5
  },
  {
    id: 2,
    title: "Ocean Estate",
    price: "$18,900,000",
    sqft: "6,500 sq.ft",
    image: "https://images.unsplash.com/photo-1758448756207-54505680d130?q=80&w=1080&auto=format&fit=crop",
    beds: 5,
    baths: 6
  },
  {
    id: 3,
    title: "Garden Duplex",
    price: "$8,200,000",
    sqft: "3,100 sq.ft",
    image: "https://images.unsplash.com/photo-1745613999710-1aaf60145502?q=80&w=1080&auto=format&fit=crop",
    beds: 2,
    baths: 2.5
  }
];

export function FeaturedResidences() {
  return (
    <section id="residences" className="py-24 md:py-32 px-6 bg-[var(--bg-primary)]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[var(--border-color)] pb-8"
        >
          <div>
            <span className="block text-[var(--accent-gold)] text-sm uppercase tracking-[0.2em] mb-4">Curated Living</span>
            <h2 className="font-serif text-4xl md:text-6xl text-[var(--text-primary)]">Signature Residences</h2>
          </div>
          <div className="mt-8 md:mt-0">
            <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors duration-300 uppercase tracking-widest text-xs flex items-center gap-2 group">
              View All Listings
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {residences.map((res, index) => (
            <motion.div
              key={res.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group cursor-pointer ${index === 1 ? 'md:mt-16' : ''}`}
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-6">
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ImageWithFallback
                    src={res.image}
                    alt={res.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </motion.div>
                
                <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-white text-xs uppercase tracking-widest border border-white/30 px-3 py-1 bg-black/30 backdrop-blur-sm">
                    View Details
                  </span>
                </div>
              </div>

              <div className="relative">
                <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-2 group-hover:-translate-y-1 transition-transform duration-500">
                  {res.title}
                </h3>
                <div className="flex justify-between items-center text-[var(--text-secondary)] text-sm font-light border-t border-[var(--border-color)] pt-3 mt-3 group-hover:border-[var(--accent-gold)] transition-colors duration-500">
                  <span>{res.sqft} • {res.beds} Beds</span>
                  <span className="font-medium text-[var(--text-primary)]">{res.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
