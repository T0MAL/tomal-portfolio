import { FiArrowDown, FiMail } from "react-icons/fi";
import { profile } from "@data/portfolio";

export default function IntroSection() {
  return (
    <div className="hero-copy">
      <p className="eyebrow">
        <span className="status-dot" />
        Computer vision & machine learning
      </p>
      <h1 id="intro-heading">
        Md. Tahmid
        <br />
        Islam <em>Tomal.</em>
      </h1>
      <p className="hero-role">
        Machine Learning Engineer <span aria-hidden="true">/</span> BUET CSE
        Graduate
      </p>
      <p className="hero-description">
        I study how visual models learn from limited data and adapt to new
        classes. My research focuses on few-shot and incremental learning, with
        broader interests in robotic perception and vision-language models.
      </p>
      <p className="hero-description">
        At Panjeree Publications, I build AI systems for Bengali education.
        Working with real documents and student responses shapes the questions I
        want to explore through doctoral research.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#research">
          Explore research <FiArrowDown aria-hidden="true" />
        </a>
        <a className="button button-secondary" href={profile.cv}>
          Request CV <FiMail aria-hidden="true" />
        </a>
      </div>
      <a className="hero-email" href={`mailto:${profile.email}`}>
        <FiMail aria-hidden="true" />
        {profile.email}
      </a>
    </div>
  );
}
