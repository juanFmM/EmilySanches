import { motion } from "framer-motion";

const expertiseItems = [
  {
    number: "01",
    title: "Comunicación Visual",
    description: "Desarrollo de identidades visuales y estrategias de comunicación que conectan marcas con sus audiencias.",
  },
  {
    number: "02",
    title: "Fotografía Digital",
    description: "Fotografía aplicada a contenido digital, creando narrativas visuales impactantes y coherentes.",
  },
  {
    number: "03",
    title: "Social Media",
    description: "Estrategia y creación de contenido para redes sociales con enfoque en engagement y crecimiento orgánico.",
  },
  {
    number: "04",
    title: "Gestión de Proyectos",
    description: "Liderazgo de equipos creativos y gestión de proyectos comunicacionales de alto impacto.",
  },
  {
    number: "05",
    title: "Marketing Digital",
    description: "Estrategias de marketing digital orientadas a resultados, presencia de marca y conexión con audiencias.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
        >
          Áreas de expertise
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-6xl md:text-8xl text-secondary-foreground leading-[0.9] mb-16"
        >
          HABILIDADES
        </motion.h2>

        <div className="space-y-0">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-t border-secondary-foreground/10 py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 hover:border-primary transition-colors duration-300"
            >
              <span className="font-display text-4xl text-primary/40 group-hover:text-primary transition-colors">
                {item.number}
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-secondary-foreground group-hover:text-primary transition-colors flex-1">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground max-w-md">
                {item.description}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-secondary-foreground/10" />
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
