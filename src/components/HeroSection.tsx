import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Linkedin, Mail, Download, Github } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import "./HeroSection.css";

const roles = ["Full-Stack Developer", "Django Expert", "React Developer", "Python Enthusiast"];

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="hero-particle"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.3, 1],
    }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    <section className="hero" ref={ref}>
      <motion.div className="hero-bg" style={{ y: bgY }}>
        <img src={heroBg} alt="" className="hero-bg-img" />
        <div className="hero-overlay" />
      </motion.div>

      {/* Floating particles */}
      <div className="hero-particles">
        <FloatingParticle delay={0} x="10%" y="20%" size={4} />
        <FloatingParticle delay={0.5} x="80%" y="30%" size={3} />
        <FloatingParticle delay={1} x="25%" y="60%" size={5} />
        <FloatingParticle delay={1.5} x="70%" y="70%" size={3} />
        <FloatingParticle delay={2} x="50%" y="40%" size={4} />
        <FloatingParticle delay={0.8} x="90%" y="50%" size={3} />
        <FloatingParticle delay={1.2} x="15%" y="80%" size={4} />
        <FloatingParticle delay={2.5} x="60%" y="15%" size={5} />
      </div>

      <motion.div className="hero-content container" style={{ y: contentY, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="hero-label">
            {"// "}
            <span>{text}</span>
            <span className="cursor" />
          </p>
          <h1 className="hero-title">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Dhalish
            </motion.span>{" "}
            <motion.span
              className="text-gradient"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Raj
            </motion.span>
          </h1>
          <p className="hero-desc">
            Building scalable, user-focused web applications with modern technologies.
            Based in Ernakulam, Kerala.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="hero-actions"
        >
          <a href="https://www.linkedin.com/in/dhalishraj" target="_blank" rel="noopener noreferrer" className="icon-btn icon-btn-animated">
            <Linkedin size={20} />
          </a>
          <a href="mailto:dhalishraj8@gmail.com" className="icon-btn icon-btn-animated">
            <Mail size={20} />
          </a>
          <a href="#projects" className="btn btn-primary btn-glow">View Projects</a>
          <a href="/DHALISH_full_stack_developer.pdf" download className="btn btn-outline btn-shimmer">
            <Download size={16} /> Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="hero-scroll"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
