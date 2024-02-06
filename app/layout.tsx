import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";

import Hero from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

const joSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weeb Club",
  description: "Weeb it out",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={joSans.className}>
        <main className="max-w-7xl mx-auto bg-[#000000]">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
