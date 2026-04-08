import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Áreas de expertise" },
  { value: "3+", label: "Proyectos destacados" },
  { value: "∞", label: "Pasión creativa" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
            >
              ¿Quién soy?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-8xl text-foreground leading-[0.9] mb-8"
            >
              CREATIVA<br />
              <span className="text-primary">MULTIFACÉTICA</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4 sm:gap-8 mt-10 flex-wrap"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-4xl md:text-5xl text-primary">{stat.value}</p>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-body text-lg text-muted-foreground leading-relaxed"
            >
              Soy una creativa multifacética con enfoque en el desarrollo de soluciones
              comunicacionales y experiencias estratégicas orientadas a la conexión con audiencias.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="font-body text-lg text-muted-foreground leading-relaxed"
            >
              Mi perfil ronda entre muchas áreas. Desde la creación de contenido digital,
              hasta la conducción televisiva, el liderazgo y la gestión de equipos, integro
              la fotografía y el diseño para fortalecer la identidad visual y proyección
              digital de las marcas.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="font-body text-lg text-foreground leading-relaxed italic border-l-2 border-primary pl-6"
            >
              "Creo en el poder de la comunicación estratégica para transformar marcas
              y conectar personas."
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-px w-16 bg-primary mt-8 origin-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
