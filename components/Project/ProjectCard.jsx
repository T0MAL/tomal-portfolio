import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white border-t border-black shadow-2xl rounded-lg overflow-hidden">
      <div className="">
        {
            project.imageLink==''? (
                <Image
          src='/project.png'
          alt={project.title}
          className="w-full h-48 object-cover"
          width={600}
          height={300}
        />

            ):
            (
                <Image
          src={project.imageLink}
          alt={project.title}
          className="w-full h-48 object-cover"
          width={600}
          height={300}
        />

            )
        }
        
      </div>
      <div className="p-6 border-t border-black">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <div className="flex flex-wrap mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
            >
              #{tech}
            </span>
          ))}
        </div>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black flex items-center"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          {project.deployedLink && (
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black flex items-center"
            >
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
