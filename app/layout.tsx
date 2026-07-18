import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sanju.fyi"),
  title: "Sanju | Software Developer & Frontend Engineer Portfolio",
  description:
    "Explore the software development portfolio of Sanju, a developer building fast, responsive, and interactive web applications using Next.js, TypeScript, React, and Node.js.",
  keywords: [
    "Sanju",
    "Software Developer",
    "Frontend Engineer",
    "Next.js Portfolio",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
  ],
  authors: [{ name: "Sanju" }],
  creator: "Sanju",
  openGraph: {
    title: "Sanju | Software Developer Portfolio",
    description:
      "Explore the software developer portfolio of Sanju. Building fast, responsive, and interactive web applications using React, Next.js, and TypeScript.",
    url: "https://sanju.fyi",
    siteName: "Sanju Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 675,
        alt: "Sanju | Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanju | Software Developer Portfolio",
    description:
      "Explore the software developer portfolio of Sanju. Building fast, responsive, and interactive web applications using React, Next.js, and TypeScript.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
