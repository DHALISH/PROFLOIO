import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import "./ExperienceSection.css";

const ExperienceSection = () => (
  <section id="experience" className="section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">{"// Background"}</p>
        <h2 className="section-title">Experience & Education</h2>
      </motion.div>

      <div className="grid-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass card"
        >
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
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass card"
        >
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

export default ExperienceSection;
