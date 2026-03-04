import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import "./ContactSection.css";

const contactLinks = [
  { icon: Mail, label: "dhalishraj8@gmail.com", href: "mailto:dhalishraj8@gmail.com" },
  { icon: Phone, label: "+91 7994913681", href: "tel:+917994913681" },
  { icon: MapPin, label: "Ernakulam, Kerala", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/dhalishraj" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const ContactSection = () => (
  <section id="contact" className="section">
    <div className="container contact-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">{"// Contact"}</p>
        <h2 className="section-title">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="contact-desc">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="grid-2"
      >
        {contactLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="glass card contact-card"
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: "0 10px 40px rgba(46, 204, 113, 0.12)" }}
          >
            <div className="contact-icon">
              <link.icon size={18} />
            </div>
            <span className="contact-label">{link.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
