import AboutSection from "@components/About/AboutSection";
import HomeSection from "@components/Home/HomeSection";
import SkillSection from "@components/Skill/SkillSection";
import ProjectSection from "@components/Project/ProjectSection";
import ContactSection from "@components/Contact/ContactSection";


export default function Home() {
  return (
      <main className="">
        <HomeSection/>
        <AboutSection/>
        <SkillSection/>
        <ProjectSection/>
        <ContactSection/>
      </main>

  );
}
