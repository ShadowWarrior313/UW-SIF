import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.university}`,
    template: `%s | ${site.short}`,
  },
  description:
    "The University of Waterloo Student Investment Fund gives SAF students hands-on experience managing real capital in an institutional setting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      {/* Extensions such as Grammarly add attributes to <body> before React hydrates */}
      <body className="min-h-screen bg-paper font-sans text-ink antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
