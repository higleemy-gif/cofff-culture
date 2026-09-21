import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";

import { ScrollProgress } from "@/components/site/ScrollProgress";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import "./globals.css";

// Self-hosted via next/font — no external font requests at runtime, no FOUT.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_TITLE =
  "Academy of Coffee Culture — Professional Coffee & Café Training in Odisha";
const SITE_DESCRIPTION =
  "A professional skill-development institute in Bhubaneswar training baristas, café operators, and coffee entrepreneurs through practical, industry-oriented learning.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "Academy of Coffee Culture",
  keywords: [
    "barista training",
    "coffee academy",
    "café operations",
    "coffee education",
    "skill development",
    "Bhubaneswar",
    "Odisha",
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_IN",
    siteName: "Academy of Coffee Culture",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
