import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import "./Index.css";

const Index = () => (
  <div className="page">
    <Navbar />
    <HeroSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
    <footer className="footer">
      <p>© 2025 Dhalish Raj. Built with passion.</p>
    </footer>
  </div>
);

export default Index;
