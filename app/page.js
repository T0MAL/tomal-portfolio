import HomeSection from "@components/Home/HomeSection";
import ResearchSection from "@components/Research/ResearchSection";
import AboutSection from "@components/About/AboutSection";
import ProjectSection from "@components/Project/ProjectSection";
import SkillSection from "@components/Skill/SkillSection";
import ContactSection from "@components/Contact/ContactSection";

export default function Home() {
  return (
    <main id="main-content">
      <HomeSection />
      <ResearchSection />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </main>
  );
}
