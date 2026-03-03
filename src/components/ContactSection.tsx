import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import "./ContactSection.css";

const contactLinks = [
  { icon: Mail, label: "dhalishraj8@gmail.com", href: "mailto:dhalishraj8@gmail.com" },
  { icon: Phone, label: "+91 7994913681", href: "tel:+917994913681" },
  { icon: MapPin, label: "Ernakulam, Kerala", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/dhalishraj" },
];

const ContactSection = () => (
  <section id="contact" className="section">
    <div className="container contact-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">{"// Contact"}</p>
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-desc">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="grid-2"
      >
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="glass card contact-card"
          >
            <div className="contact-icon">
              <link.icon size={18} />
            </div>
            <span className="contact-label">{link.label}</span>
          </a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
