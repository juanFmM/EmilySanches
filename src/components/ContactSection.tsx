import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
        >
          Conectemos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-6xl md:text-9xl text-secondary-foreground leading-[0.85] mb-8"
        >
          ¿TRABAJAMOS<br />
          <span className="text-primary">JUNTOS?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-12"
        >
          Si buscas una profesional creativa para llevar tu marca al siguiente nivel,
          estoy lista para colaborar.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="https://wa.me/18094344746"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-10 py-4 font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
        >
          Escríbeme
        </motion.a>

        <div className="mt-20 border-t border-secondary-foreground/10 pt-8">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Emely Sánchez © 2026 — Todos los derechos reservados
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
