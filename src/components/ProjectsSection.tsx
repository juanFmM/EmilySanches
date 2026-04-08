import { motion } from "framer-motion";

const projects = [
  {
    category: "CONTENIDO Y REDES SOCIALES",
    title: "Conservatorio de Danza Franco y Lina",
    description: "Apoyo audiovisual para el Instagram de la academia. Diseño de carruseles, reels y propuestas de contenido.",
    result: "Atracción de audiencia, crecimiento y conexión digital.",
    tags: ["Social Media", "Diseño", "Contenido"],
  },
  {
    category: "CONTENIDO Y REDES SOCIALES",
    title: "Reels y Contenido Independiente",
    description: "Creación de contenido audiovisual independiente que buscaba informar, conectar y proyectar.",
    result: "Presencia digital y audiovisuales homogéneos que conectaron.",
    tags: ["Audiovisual", "Estrategia", "Branding"],
  },
  {
    category: "COMUNICACIÓN ORGANIZACIONAL",
    title: "Club de Liderazgo Educativo — Regional 04",
    description: "Administración, planificación y supervisión de las redes de comunicación del Club. Programación, creación y administración de redes sociales, comunidades de WhatsApp y otros canales. Gestión de capital humano.",
    result: "Comunicación eficiente y liderazgo de equipos creativos.",
    tags: ["Comunicación", "Liderazgo", "Marketing"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
        >
          Proyectos destacados
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-6xl md:text-8xl text-foreground leading-[0.9] mb-16"
        >
          PROYECTOS
        </motion.h2>

        <div className="grid gap-12 md:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative border border-border p-8 md:p-12 hover:border-primary transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-700" />

              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
                {project.category}
              </p>

              <h3 className="font-display text-3xl md:text-5xl text-foreground mb-6">
                {project.title}
              </h3>

              <p className="font-body text-muted-foreground max-w-2xl mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    Resultado
                  </p>
                  <p className="font-body text-sm text-foreground">
                    {project.result}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs tracking-wider uppercase border border-border px-3 py-1 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
