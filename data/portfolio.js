// Source: the owner's research CV, October 2026.
// Keep submission status explicit; do not label work as accepted without confirmation.
export const profile = {
  name: "Md. Tahmid Islam Tomal",
  email: "tahmid.tomal@icloud.com",
  github: "https://github.com/T0MAL",
  linkedin: "https://www.linkedin.com/in/tomal-md-tahmid-islam-bb4520390",
  cv: "mailto:tahmid.tomal@icloud.com?subject=Research%20CV%20request",
};

export const researchInterests = [
  {
    title: "Learning from limited data",
    description:
      "Few-shot and class-incremental learning. Adapting frozen visual representations to new classes with efficient, training-free methods.",
  },
  {
    title: "Visual perception",
    description:
      "Computer vision and robotic perception. Understanding visual structure and studying how models generalize to new objects and environments.",
  },
  {
    title: "Vision and language",
    description:
      "Vision-language models for visual understanding. Connecting language-based supervision with visual evidence in research and real-world systems.",
  },
];

export const papers = [
  {
    id: "dppc",
    shortName: "DPPC",
    title:
      "DPPC: Discriminative Pairwise Predictive Correction with Comparative Prompts for Training-Free Few-Shot Class-Incremental Learning",
    venue: "WACV 2027 · Algorithms Track",
    status: "Under review",
    summary:
      "A training-free re-ranking method that refines the top candidates of an existing classifier. It combines comparative prompts with class-name signals while preserving score gaps between base classes.",
    result:
      "Five-shot accuracy improved in all 18 scorer–dataset combinations.",
    tags: [
      "Few-shot learning",
      "Training-free adaptation",
      "Vision-language models",
    ],
    manuscript:
      "https://drive.google.com/drive/folders/1m_V6kx49RyVl-qzboF3Z2aLHgjgcX1ST?usp=sharing",
    details: [
      "Uses a Student-t posterior with a base-derived variance prior to stabilize pairwise correction, including at one shot.",
      "Corrects only pairs involving novel classes through a constrained graph projection. Both parameters are selected using labeled base data before incremental sessions.",
      "Evaluated on six scorers and three benchmarks with 20 matched support draws each. Improvements held after Holm correction.",
    ],
  },
  {
    id: "shrinksel-qpr",
    shortName: "ShrinkSel + QPR",
    title:
      "Diagnosing Prototype Estimation in Frozen-Feature Few-Shot Class-Incremental Learning: Training-Free Geometry Selection and Unlabeled-Query Prototype Rectification",
    venue: "WACV 2027 · Algorithms Track",
    status: "Under review",
    summary:
      "A study of prototype estimation across 16 encoder–dataset pairs. ShrinkSel selects prototype geometry using base data, while Query Prototype Rectification uses unlabeled queries to refine novel-class prototypes.",
    result:
      "QPR added 1.21–2.03 accuracy points on CLIP ViT-B/16 across three datasets.",
    tags: ["Frozen features", "Prototype estimation", "Incremental learning"],
    manuscript:
      "https://drive.google.com/drive/folders/1KBvX_Xv8VJ6g6N5qUF4zXMuBQXTPyhsX?usp=sharing",
    details: [
      "Finds that noisy few-shot prototype estimates are a more significant source of error than the classifier fitted afterward.",
      "ShrinkSel selects prototype radius and covariance shrinkage from base-class data, with shared LDA as a fallback. It exceeded LDA on 15 of 16 pairs by 0.04–1.52 accuracy points.",
      "Compares more than a dozen baselines with matched features and supports. Additional experiments cover MAE and supervised ResNet encoders, as well as Aircraft and DTD domains.",
    ],
  },
];

export const experiences = [
  {
    role: "Machine Learning Engineer",
    organization: "Panjeree Publications Ltd.",
    department: "Publications Intelligence Department",
    period: "Oct 2024 — Present",
    description:
      "Developing AI systems for Bengali education, from document understanding to student assessment and production deployment.",
    points: [
      "Build OCR and vision-language pipelines for scanned textbooks, diagrams, legacy fonts, and handwritten Bengali exam scripts.",
      "Maintain hierarchical retrieval over approximately 500K records with PostgreSQL, semantic retrieval, and multi-level indexing.",
      "Design LangGraph workflows for routing, memory, tool use, and answer verification. Automate publication workflows, reducing manual processing time by approximately 80%.",
    ],
    link: { label: "Praxix Academy", href: "https://praxix.academy" },
  },
  {
    role: "Software Engineer",
    organization: "ICMsoft",
    period: "Jun 2024 — Sep 2024",
    description:
      "Built and deployed document understanding and retail data systems for UK products.",
    points: [
      "Deployed a LayoutLMv3 voucher extraction system with 91% extraction accuracy. Applied few-shot domain adaptation, bounding-box normalization, and spatial shuffling for complex layouts.",
      "Built a retail price-comparison website and Selenium pipelines collecting millions of grocery product records.",
    ],
  },
];

export const projects = [
  {
    type: "Applied AI · Education",
    title: "Bengali educational AI",
    description:
      "AI capabilities for Praxix Academy: educational content generation, grounded question answering, and handwritten student assessment. Connects visual understanding with retrieval, tools, and answer verification.",
    technologies: "VLMs / LangGraph / PostgreSQL / FastAPI",
    link: "https://praxix.academy",
    linkLabel: "Visit Praxix Academy",
  },
  {
    type: "Full-stack · Healthcare",
    title: "Healthbook",
    description:
      "A doctor–patient prescription management system for treatment tracking. Uses aggregated patient data to develop personal and locality-based health insights.",
    technologies: "React / Django / MySQL / Tailwind CSS",
    link: "https://github.com/nurhossainraton/CSE-408---HealthBook",
    linkLabel: "View source code",
  },
];

export const skills = [
  {
    label: "Research & modeling",
    value:
      "Python, PyTorch, TensorFlow, scikit-learn, Hugging Face, OpenCV, YOLO",
  },
  {
    label: "Multimodal & agent systems",
    value:
      "Vision-language models, LangGraph, LangChain, LoRA, semantic retrieval, quantization",
  },
  {
    label: "Systems & deployment",
    value: "FastAPI, Docker, Kubernetes, PostgreSQL, Redis, MinIO, AWS, CI/CD",
  },
];
