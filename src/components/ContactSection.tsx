import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "dhalishraj8@gmail.com", href: "mailto:dhalishraj8@gmail.com" },
  { icon: Phone, label: "+91 7994913681", href: "tel:+917994913681" },
  { icon: MapPin, label: "Ernakulam, Kerala", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/dhalishraj" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-heading text-primary text-sm tracking-[0.2em] uppercase mb-2">
            {"// Contact"}
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground font-body mb-12 max-w-lg mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <link.icon size={18} />
              </div>
              <span className="text-sm font-body text-foreground">{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
