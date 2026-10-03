import { experiences } from "@data/portfolio";
import ExternalLink from "@components/ExternalLink";

export default function Experience() {
  return (
    <div className="experience-list">
      {experiences.map((experience) => (
        <article className="experience" key={experience.organization}>
          <p className="date">{experience.period}</p>
          <h3>{experience.role}</h3>
          <p className="organization">{experience.organization}</p>
          {experience.department && (
            <p className="department">{experience.department}</p>
          )}
          <p className="experience-description">{experience.description}</p>
          <ul>
            {experience.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          {experience.link && (
            <ExternalLink href={experience.link.href}>
              {experience.link.label}
            </ExternalLink>
          )}
        </article>
      ))}
    </div>
  );
}
