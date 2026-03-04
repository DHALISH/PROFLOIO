import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useRef } from "react";
import "./ExperienceSection.css";

const ExperienceSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">{"// Background"}</p>
          <h2 className="section-title">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="exp-timeline">
          <div className="exp-timeline-track">
            <motion.div className="exp-timeline-progress" style={{ height: lineHeight }} />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ x: 4 }}
            className="glass card exp-card"
          >
            <div className="exp-dot" />
            <div className="exp-header">
              <div className="exp-icon"><Briefcase size={20} /></div>
              <h3 className="exp-heading">Internship</h3>
            </div>
            <h4 className="exp-role">Python Full-Stack Developer Intern</h4>
            <p className="exp-meta">OneTeam Kochi · Jun 2025 – Nov 2025</p>
            <ul className="exp-list">
              <li><span className="exp-bullet">▸</span> Implemented new features and improved UI/UX across Django modules</li>
              <li><span className="exp-bullet">▸</span> Contributed to database structuring and API integration</li>
              <li><span className="exp-bullet">▸</span> Wrote clean, reusable, and optimized code following best practices</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ x: 4 }}
            className="glass card exp-card"
          >
            <div className="exp-dot" />
            <div className="exp-header">
              <div className="exp-icon"><GraduationCap size={20} /></div>
              <h3 className="exp-heading">Education</h3>
            </div>
            <h4 className="exp-role">B.Sc. Information Technology</h4>
            <p className="exp-meta">Siena College of Professional Studies · 2022 – 2025</p>
            <p className="exp-desc">
              MG University. Strong foundation in software engineering, web development,
              data structures, and algorithms.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
