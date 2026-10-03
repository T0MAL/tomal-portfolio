import { projects } from "@data/portfolio";
import ExternalLink from "@components/ExternalLink";

export default function ProjectSection() {
  return (
    <section
      id="project"
      className="container section projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / Selected systems</p>
          <h2 id="projects-heading">From ideas to working systems.</h2>
        </div>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <p className="eyebrow">{project.type}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="project-technologies">{project.technologies}</p>
            <ExternalLink href={project.link}>{project.linkLabel}</ExternalLink>
          </article>
        ))}
      </div>
    </section>
  );
}
