import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const residences = [
  {
    id: 1,
    title: "The Sky Penthouse",
    description: "7,500 sq ft • 360° Views",
    image: "https://images.unsplash.com/photo-1760662564270-a55ad0a8df2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvciUyMHZpZXclMjBuaWdodHxlbnwxfHx8fDE3NzE4MzY1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "Inquire for Price"
  },
  {
    id: 2,
    title: "Ocean Villa Alpha",
    description: "5 Beds • Private Infinity Pool",
    image: "https://images.unsplash.com/photo-1767950470198-c9cd97f8ed87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2wlMjBldmVuaW5nJTIwbW9kZXJuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTgzNjU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$18,500,000"
  },
  {
    id: 3,
    title: "Garden Estate",
    description: "Dual Level • Japanese Gardens",
    image: "https://images.unsplash.com/photo-1765371512612-86600e661f4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwbHV4dXJ5JTIwaW50ZXJpb3IlMjBsaXZpbmclMjByb29tJTIwd2FybSUyMGxpZ2h0fGVufDF8fHx8MTc3MTgzNjU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$12,200,000"
  }
];

export function Featured() {
  return (
    <section id="residences" className="bg-[var(--bg-primary)] px-6 py-32 md:px-12 lg:px-24">
      <div className="mb-20 flex flex-col items-start justify-between md:flex-row md:items-end">
        <div>
          <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)]">
            Curated Spaces
          </span>
          <h2 className="font-serif text-4xl text-[var(--text-primary)] md:text-5xl">
            Featured Residences
          </h2>
        </div>
        <a href="#" className="group mt-6 flex items-center gap-2 text-sm uppercase tracking-widest text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-gold)] md:mt-0">
          View All Listings
          <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={16} />
        </a>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {residences.map((residence) => (
          <div key={residence.id} className="group cursor-pointer">
            <div className="relative mb-6 overflow-hidden aspect-[4/5] bg-[var(--bg-secondary)]">
              <div className="absolute inset-0 z-10 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              <motion.img
                src={residence.image}
                alt={residence.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />
            </div>
            <div className="flex flex-col space-y-2 border-t border-[var(--border-gold)] pt-6 transition-all duration-500 group-hover:border-[var(--accent-gold)]">
              <div className="flex items-start justify-between">
                <h3 className="font-serif text-2xl text-[var(--text-primary)] transition-transform duration-500 group-hover:-translate-y-1">
                  {residence.title}
                </h3>
                <span className="text-sm text-[var(--text-secondary)]">{residence.price}</span>
              </div>
              <p className="text-sm font-light text-[var(--text-secondary)]">
                {residence.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
