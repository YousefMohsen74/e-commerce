import { Jost } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/home/NavBar";
import Footer from "@/components/home/Footer";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jost",
});

export const metadata = {
  title: "Texh Haven",
  description: "e-commerce fro electronics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable} space-y-10 `}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
