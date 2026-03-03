import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "Java", "C++", "PHP"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Django", "Django REST", "REST APIs", "WebSockets"],
  },
  {
    title: "Tools & DB",
    skills: ["MySQL", "Git", "GitHub", "Postman", "VS Code"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-heading text-primary text-sm tracking-[0.2em] uppercase mb-2">
            {"// Skills"}
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="font-heading text-primary text-sm font-semibold mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-body rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
