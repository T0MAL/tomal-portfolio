import '@styles/globals.css'
import Navbar from "@components/Navbar";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Tomal",
  description: "Portfolio of Tomal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics gaId="G-YQCLLE1LLM" />
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
