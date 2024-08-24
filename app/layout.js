import '@styles/globals.css'
import Navbar from "@components/Navbar";

export const metadata = {
  title: "Tomal",
  description: "Portfolio of Tomal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
