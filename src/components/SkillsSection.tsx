import { motion } from "framer-motion";
import "./SkillsSection.css";

const skillCategories = [
  { title: "Languages", skills: ["Python", "JavaScript", "Java", "C++", "PHP"] },
  { title: "Frontend", skills: ["React", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"] },
  { title: "Backend", skills: ["Django", "Django REST", "REST APIs", "WebSockets"] },
  { title: "Tools & DB", skills: ["MySQL", "Git", "GitHub", "Postman", "VS Code"] },
];

const SkillsSection = () => (
  <section id="skills" className="section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">{"// Skills"}</p>
        <h2 className="section-title">Tech Stack</h2>
      </motion.div>

      <div className="grid-4">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass card"
          >
            <h3 className="skills-category-title">{cat.title}</h3>
            <div className="skills-tags">
              {cat.skills.map((s) => (
                <span key={s} className="tag tag-secondary">{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
