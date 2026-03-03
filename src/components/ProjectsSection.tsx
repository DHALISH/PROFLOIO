import { motion } from "framer-motion";
import { Database, Brain, Wallet, MessageCircle } from "lucide-react";
import "./ProjectsSection.css";

const projects = [
  {
    icon: Database,
    title: "BMS – Blood Management System",
    tech: ["Django", "MySQL", "Auth"],
    description: "Full-stack platform for managing blood donors and distribution with secure authentication, real-time inventory tracking, and an admin dashboard.",
  },
  {
    icon: Brain,
    title: "Alzheimer's Detection System",
    tech: ["ML", "PHP", "JavaScript"],
    description: "Early detection system using machine learning & cognitive data with prediction visualization, data preprocessing, and model evaluation techniques.",
  },
  {
    icon: Wallet,
    title: "Personal Finance Tracker",
    tech: ["Django REST", "React", "MySQL"],
    description: "Expense tracking, budget management, and financial analysis application with a clean dashboard and data visualization.",
  },
  {
    icon: MessageCircle,
    title: "Chat Box Application",
    tech: ["Django", "React", "WebSockets"],
    description: "Real-time one-to-one chat app with message status indicators, JWT auth, user search, and responsive UI design.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">{"// Projects"}</p>
        <h2 className="section-title">Featured Work</h2>
      </motion.div>

      <div className="grid-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass card project-card"
          >
            <div className="project-icon-wrap">
              <project.icon size={20} />
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tech.map((t) => (
                <span key={t} className="tag tag-primary">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
