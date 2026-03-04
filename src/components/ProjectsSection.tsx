import { motion } from "framer-motion";
import { Database, Wallet, MessageCircle, ExternalLink } from "lucide-react";
import "./ProjectsSection.css";

const projects = [
  {
    icon: Database,
    title: "BMS – Blood Management System",
    tech: ["Django", "MySQL", "Auth"],
    description: "Full-stack platform for managing blood donors and distribution with secure authentication, real-time inventory tracking, and an admin dashboard.",
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

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 5 },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const ProjectsSection = () => (
  <section id="projects" className="section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">{"// Projects"}</p>
        <h2 className="section-title">
          Featured <span className="text-gradient">Work</span>
        </h2>
      </motion.div>

      <div className="grid-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="glass card project-card"
          >
            <div className="project-card-inner">
              <div className="project-icon-wrap">
                <project.icon size={20} />
              </div>
              <div className="project-card-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tech.map((t) => (
                  <span key={t} className="tag tag-primary">{t}</span>
                ))}
              </div>
            </div>
            <div className="project-card-glow" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
