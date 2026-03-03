import { motion } from "framer-motion";
import { ExternalLink, Database, Brain, Wallet, MessageCircle } from "lucide-react";

const projects = [
  {
    icon: Database,
    title: "BMS – Blood Management System",
    tech: ["Django", "MySQL", "Auth"],
    description:
      "Full-stack platform for managing blood donors and distribution with secure authentication, real-time inventory tracking, and an admin dashboard.",
  },
  {
    icon: Brain,
    title: "Alzheimer's Detection System",
    tech: ["ML", "PHP", "JavaScript"],
    description:
      "Early detection system using machine learning & cognitive data with prediction visualization, data preprocessing, and model evaluation techniques.",
  },
  {
    icon: Wallet,
    title: "Personal Finance Tracker",
    tech: ["Django REST", "React", "MySQL"],
    description:
      "Expense tracking, budget management, and financial analysis application with a clean dashboard and data visualization.",
  },
  {
    icon: MessageCircle,
    title: "Chat Box Application",
    tech: ["Django", "React", "WebSockets"],
    description:
      "Real-time one-to-one chat app with message status indicators, JWT auth, user search, and responsive UI design.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-heading text-primary text-sm tracking-[0.2em] uppercase mb-2">
            {"// Projects"}
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
            Featured Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-6 group hover:border-primary/30 transition-all duration-500 hover:glow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <project.icon size={20} />
                </div>
              </div>
              <h3 className="font-heading text-foreground text-lg font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-heading rounded bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
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

export default ProjectsSection;
