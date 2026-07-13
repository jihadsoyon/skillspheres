import "./globals.css";

import { Poppins } from "next/font/google";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ToastProvider from "@/providers/ToastProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "SkillSphere",
    template: "%s | SkillSphere",
  },
  description: "Modern Online Learning Platform",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">

      <body className={poppins.className}>
        <ToastProvider />

        <Navbar />

        <main className="min-h-screen max-w-7xl mx-auto px-4">

          {children}

        </main>

        <Footer />

      </body>

    </html>
  );
}