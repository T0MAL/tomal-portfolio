import { skills } from "@data/portfolio";

export default function SkillSection() {
  return (
    <section
      id="skill"
      className="container toolkit"
      aria-labelledby="toolkit-heading"
    >
      <div>
        <p className="eyebrow">The toolkit</p>
        <h2 id="toolkit-heading">Tools I work with</h2>
      </div>
      <dl>
        {skills.map((skill) => (
          <div key={skill.label}>
            <dt>{skill.label}</dt>
            <dd>{skill.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
