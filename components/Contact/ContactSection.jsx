import { FiArrowUp, FiArrowUpRight, FiMail } from "react-icons/fi";
import { profile } from "@data/portfolio";
import ExternalLink from "@components/ExternalLink";

export default function ContactSection() {
  return (
    <>
      <section
        id="contact"
        className="contact-section"
        aria-labelledby="contact-heading"
      >
        <div className="container contact-inner">
          <div>
            <p className="eyebrow">04 / Get in touch</p>
            <h2 id="contact-heading">Let’s talk research.</h2>
            <p>
              I welcome conversations about PhD opportunities and research
              collaborations in computer vision, few-shot learning, and
              multimodal AI.
            </p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="contact-links">
            <a href={profile.cv}>
              Request CV <FiMail aria-hidden="true" />
            </a>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>
      </section>
      <footer className="container footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#home">
          Back to top <FiArrowUp aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
