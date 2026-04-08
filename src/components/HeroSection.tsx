import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Abstract geometric composition"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-6"
        >
          Portafolio Creativo — 2026
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-[clamp(4rem,12vw,12rem)] leading-[0.85] text-secondary-foreground mb-8"
        >
          EMILY<br />
          <span className="text-primary">SÁNCHEZ</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Comunicación · Diseño · Social Media · Marketing Digital
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <a href="#about" className="inline-block border border-primary text-primary px-8 py-3 font-body text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Descubre más
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-px h-12 bg-primary/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
