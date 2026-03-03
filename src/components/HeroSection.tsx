import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-4">
            {"// Full-Stack Developer"}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6">
            <span className="text-foreground">Dhalish</span>{" "}
            <span className="text-gradient">Raj</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Building scalable, user-focused web applications with modern technologies.
            Based in Ernakulam, Kerala.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://www.linkedin.com/in/dhalishraj"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:glow"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:dhalishraj8@gmail.com"
            className="p-3 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:glow"
          >
            <Mail size={20} />
          </a>
          <a
            href="#projects"
            className="ml-4 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold hover:opacity-90 transition-all duration-300 glow"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="animate-bounce"
        >
          <ArrowDown className="mx-auto text-muted-foreground" size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
