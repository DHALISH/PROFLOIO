import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import "./HeroSection.css";

const roles = ["Full-Stack Developer", "Django Expert", "React Developer", "Python Enthusiast"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < currentRole.length) {
      timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={heroBg} alt="" className="hero-bg-img" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-label">
            {"// "}
            <span>{text}</span>
            <span className="cursor" />
          </p>
          <h1 className="hero-title">
            <span>Dhalish</span>{" "}
            <span className="text-gradient">Raj</span>
          </h1>
          <p className="hero-desc">
            Building scalable, user-focused web applications with modern technologies.
            Based in Ernakulam, Kerala.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="hero-actions"
        >
          <a href="https://www.linkedin.com/in/dhalishraj" target="_blank" rel="noopener noreferrer" className="icon-btn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:dhalishraj8@gmail.com" className="icon-btn">
            <Mail size={20} />
          </a>
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="/DHALISH_full_stack_developer.pdf" download className="btn btn-outline">
            <Download size={16} /> Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="hero-scroll"
        >
          <ArrowDown size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
