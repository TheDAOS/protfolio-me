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
  title: "Sanju | Software Developer Portfolio",
  description:
    "Portfolio of Sanju, a software developer building web apps with Next.js, React, and TypeScript, and mobile apps for iOS & Android using Swift, Kotlin, Flutter, and React Native.",
  keywords: [
    "Sanju",
    "Software Developer",
    "iOS Developer",
    "Android Developer",
    "Mobile App Developer",
    "Swift",
    "Kotlin",
    "Flutter",
    "React Native",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Full Stack",
  ],
  authors: [{ name: "Sanju" }],
  creator: "Sanju",
  openGraph: {
    title: "Sanju | Software Developer Portfolio",
    description:
      "Software developer building web apps with Next.js & TypeScript, and mobile apps for iOS & Android using Swift, Kotlin, Flutter, and React Native.",
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
      "Software developer building web apps with Next.js & TypeScript, and mobile apps for iOS & Android using Swift, Kotlin, Flutter, and React Native.",
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
