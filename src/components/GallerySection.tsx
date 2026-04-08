import { motion } from "framer-motion";
import emelyHero from "@/assets/emely-sanchez/emely-hero.jpeg";
import emelyAbout from "@/assets/emely-sanchez/emely-about.jpeg";
import emelyProjects from "@/assets/emely-sanchez/emely-projects.jpeg";

const galleryItems = [
  {
    src: emelyHero,
    alt: "Retrato de Emely Sanchez",
    className: "md:col-span-4 h-[30rem] md:h-[38rem] lg:h-[42rem]",
  },
  {
    src: emelyAbout,
    alt: "Emely Sanchez en sesión creativa",
    className: "md:col-span-4 h-80 md:h-[29rem] lg:h-[32rem] md:mt-12",
  },
  {
    src: emelyProjects,
    alt: "Emely Sanchez en entorno profesional",
    className: "md:col-span-4 h-80 md:h-[29rem] lg:h-[32rem] md:mt-24",
  },
];

const GallerySection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-14 max-w-3xl"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Selección visual
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground leading-[0.9] mb-4">ESENCIA</h2>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            Una composición editorial sobria para presentar presencia, estilo y dirección creativa.
          </p>
        </motion.div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-12 items-start">
          {galleryItems.map((item, index) => (
            <motion.figure
              key={item.alt}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={`group relative overflow-hidden border border-border bg-card ${item.className}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-700" />
              <div className="absolute inset-3 border border-white/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
