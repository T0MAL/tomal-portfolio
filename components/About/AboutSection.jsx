import Experience from "./Experience";

export default function AboutSection() {
  return (
    <section
      id="experiences"
      className="container section"
      aria-labelledby="experience-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / Background</p>
          <h2 id="experience-heading">Research meets practice.</h2>
        </div>
      </div>
      <div className="background-grid">
        <Experience />
        <aside className="education" aria-labelledby="education-heading">
          <p className="eyebrow" id="education-heading">
            Education
          </p>
          <div className="education-mark" aria-hidden="true">
            BUET
          </div>
          <h3>Bangladesh University of Engineering and Technology</h3>
          <p className="degree">B.Sc. in Computer Science and Engineering</p>
          <p className="date">Feb 2020 — Mar 2025</p>
          <dl>
            <div>
              <dt>CGPA</dt>
              <dd>3.32 / 4.00</dd>
            </div>
            <div>
              <dt>Recognition</dt>
              <dd>Dean’s List Award</dd>
            </div>
          </dl>
          <p className="education-note">
            A foundation in computing. A growing focus on visual learning and
            perception.
          </p>
        </aside>
      </div>
    </section>
  );
}
