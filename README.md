# Tahmid Islam Tomal — Research portfolio

A research-focused Next.js portfolio covering computer vision, few-shot and incremental learning, vision-language models, and applied ML engineering.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Validate with `npm run lint` and `npm run build`; serve the production build with `npm start`.

The homepage is statically rendered from repository content and needs no database credentials. Existing MongoDB models and API routes are retained for compatibility; they are not used by the homepage.

## Update the content

- `data/portfolio.js`: contact details, research manuscripts, experience, selected systems, and tools.
- `components/Home/`: introduction, portrait, and PhD interests.
- `components/Research/ResearchSection.jsx`: research layout and undergraduate thesis.
- `components/About/AboutSection.jsx`: education.
- `profile.cv` in `data/portfolio.js`: currently an email link to request the research CV. The attached PDF is not published in this public repository.
- `styles/globals.css`: responsive design, keyboard focus, reduced motion, and print styles.
- `app/layout.js`: search/social metadata and the existing Google Analytics integration.

Content was aligned to the October 2026 research CV. WACV 2027 manuscripts are explicitly **under review**, not accepted publications. Robotic perception is presented as an interest, not an existing robotics appointment. No PhD affiliation or author order is assumed. Update statuses and affiliations only after they are confirmed.

External manuscript links are the Google Drive folders supplied in the CV. Their access remains controlled by the owner’s Drive sharing settings.

## Deployment

Use the repository’s existing Next.js hosting workflow. This redesign does not change deployment providers or require new environment variables. If the legacy database APIs are still used separately, they continue to require `MONGODB_URI`.
