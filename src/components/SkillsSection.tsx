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
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 10 },
  visible: (i: number) => ({
    opacity: 1, scale: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

const SkillsSection = () => (
  <section id="skills" className="section skills-section">
    <div className="ambient-orb ambient-orb-primary" style={{ width: 400, height: 400, top: '20%', right: '-10%' }} />
    <div className="ambient-orb ambient-orb-accent" style={{ width: 300, height: 300, bottom: '10%', left: '-5%' }} />
    
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
            whileHover={{ y: -10 }}
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
