import { papers } from "@data/portfolio";
import ExternalLink from "@components/ExternalLink";

export default function ResearchSection() {
  return (
    <section
      id="research"
      className="research-section section"
      aria-labelledby="research-heading"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Research</p>
            <h2 id="research-heading">Selected research</h2>
          </div>
          <p>
            Learning more from less.
            <br />
            Adapting without retraining.
          </p>
        </div>
        <p className="section-intro">
          Current manuscripts under review and earlier work in visual
          perception.
        </p>
        <div className="paper-list">
          {papers.map((paper, index) => (
            <article
              className="paper"
              key={paper.id}
              aria-labelledby={`${paper.id}-title`}
            >
              <div className="paper-index">
                <span>0{index + 1}</span>
                <p>{paper.shortName}</p>
              </div>
              <div className="paper-content">
                <div className="paper-meta">
                  <span>{paper.venue}</span>
                  <span className="status-badge">{paper.status}</span>
                </div>
                <h3 id={`${paper.id}-title`}>{paper.title}</h3>
                <p className="paper-summary">{paper.summary}</p>
                <p className="paper-result">
                  <span className="result-marker" aria-hidden="true">
                    ↗
                  </span>
                  {paper.result}
                </p>
                <ul className="tags" aria-label="Research topics">
                  {paper.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="paper-resources">
                  <ExternalLink href={paper.manuscript}>
                    Manuscript
                  </ExternalLink>
                </div>
                <details className="research-details">
                  <summary>Method & evaluation</summary>
                  <ul>
                    {paper.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </details>
              </div>
            </article>
          ))}
        </div>
        <article className="thesis">
          <div>
            <p className="eyebrow">Undergraduate thesis</p>
            <p className="thesis-year">BUET · Computer Science & Engineering</p>
          </div>
          <div>
            <h3>Augmenting YOLOv3 with Attention for Road Crack Detection</h3>
            <p className="advisor">Advisor: Dr. Md. Monirul Islam</p>
            <p>
              Integrated multi-head self-attention and positional encoding to
              capture long, irregular crack patterns. Evaluated on approximately
              26K RDD2020 images, achieving a 7.4% improvement in mAP@50 over
              the reproduced baseline.
            </p>
            <ExternalLink href="https://www.kaggle.com/code/mdtahmidislamtomal/rdd2020-yolov3-with-different-attention-mechanisms">
              View research code
            </ExternalLink>
          </div>
        </article>
      </div>
    </section>
  );
}
