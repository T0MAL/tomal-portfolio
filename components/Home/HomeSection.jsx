import IntroSection from "./IntroSection";
import ImageSection from "./ImageSection";
import { researchInterests } from "@data/portfolio";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="container hero"
      aria-labelledby="intro-heading"
    >
      <div className="hero-grid">
        <IntroSection />
        <ImageSection />
      </div>
      <div className="interests" aria-labelledby="interests-heading">
        <div className="interests-label">
          <p className="eyebrow" id="interests-heading">
            Research interests
          </p>
          <span aria-hidden="true">↘</span>
        </div>
        <div className="interest-grid">
          {researchInterests.map((interest, index) => (
            <article key={interest.title}>
              <span className="index-number">0{index + 1}</span>
              <h2>{interest.title}</h2>
              <p>{interest.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
