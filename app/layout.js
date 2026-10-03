import "@styles/globals.css";
import Navbar from "@components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

const title = "Md. Tahmid Islam Tomal | Computer Vision & Machine Learning";
const description =
  "Research portfolio of Md. Tahmid Islam Tomal, a BUET graduate and Machine Learning Engineer working on few-shot and incremental learning, computer vision, and vision-language models.";

export const metadata = {
  title,
  description,
  authors: [{ name: "Md. Tahmid Islam Tomal" }],
  keywords: [
    "computer vision",
    "few-shot learning",
    "class-incremental learning",
    "vision-language models",
    "BUET",
    "Tahmid Islam Tomal",
  ],
  openGraph: { title, description, type: "website", locale: "en_US" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        {children}
        <GoogleAnalytics gaId="G-YQCLLE1LLM" />
      </body>
    </html>
  );
}
