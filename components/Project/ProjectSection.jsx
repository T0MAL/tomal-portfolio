import { connectToDB } from "@lib/mongodb";
import Project from "@models/Project";
import ProjectCard from "./ProjectCard";

const ProjectSection = async () => {
  await connectToDB();
  const projects = await Project.find({}).sort({ createdAt: -1 });
  return (
    <section id="project" className="md:py-20 py-4 mx-4 md:mx-28">
      <p className="text-center font-bold text-xl text-[#457B9D] ">Projects</p>
      <div className=" pt-4  md:pt-10 grid grid-cols-1  md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
