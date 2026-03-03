import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-heading text-primary text-sm tracking-[0.2em] uppercase mb-2">
            {"// Background"}
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
            Experience & Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <Briefcase size={20} />
              </div>
              <h3 className="font-heading text-foreground font-semibold">Internship</h3>
            </div>
            <h4 className="font-heading text-foreground text-sm font-medium mb-1">
              Python Full-Stack Developer Intern
            </h4>
            <p className="text-primary text-xs font-heading mb-3">
              OneTeam Kochi · Jun 2025 – Nov 2025
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm font-body">
              <li className="flex gap-2">
                <span className="text-primary mt-1.5 shrink-0">▸</span>
                Implemented new features and improved UI/UX across Django modules
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1.5 shrink-0">▸</span>
                Contributed to database structuring and API integration
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1.5 shrink-0">▸</span>
                Wrote clean, reusable, and optimized code following best practices
              </li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={20} />
              </div>
              <h3 className="font-heading text-foreground font-semibold">Education</h3>
            </div>
            <h4 className="font-heading text-foreground text-sm font-medium mb-1">
              B.Sc. Information Technology
            </h4>
            <p className="text-primary text-xs font-heading mb-3">
              Siena College of Professional Studies · 2022 – 2025
            </p>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
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
