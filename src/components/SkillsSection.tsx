import { motion } from "framer-motion";
import { Code2, Layout, Server, Wrench } from "lucide-react";
import "./SkillsSection.css";

const skillCategories = [
  { title: "Languages", icon: Code2, skills: ["Python", "JavaScript", "Java", "C++", "PHP"] },
  { title: "Frontend", icon: Layout, skills: ["React", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"] },
  { title: "Backend", icon: Server, skills: ["Django", "Django REST", "REST APIs", "WebSockets"] },
  { title: "Tools & DB", icon: Wrench, skills: ["MySQL", "Git", "GitHub", "Postman", "VS Code"] },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

const SkillsSection = () => (
  <section id="skills" className="section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">{"// Skills"}</p>
        <h2 className="section-title">
          Tech <span className="text-gradient">Stack</span>
        </h2>
      </motion.div>

      <div className="grid-4">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: "0 0 40px rgba(46, 204, 113, 0.15)" }}
            className="glass card skill-card"
          >
            <div className="skill-icon-wrap">
              <cat.icon size={20} />
            </div>
            <h3 className="skills-category-title">{cat.title}</h3>
            <div className="skills-tags">
              {cat.skills.map((s, si) => (
                <motion.span
                  key={s}
                  custom={si}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={tagVariants}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(46, 204, 113, 0.15)" }}
                  className="tag tag-secondary"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
