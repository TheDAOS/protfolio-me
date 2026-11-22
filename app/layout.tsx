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

const title = "Sanju | Frontend Developer";
const description =
  "Sanju is a frontend developer at CoinSwitch, building fast, responsive web applications with React, Next.js, and TypeScript.";

const profile = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://sanju.fyi/#profile",
  url: "https://sanju.fyi/",
  name: title,
  description,
  mainEntity: {
    "@type": "Person",
    "@id": "https://sanju.fyi/#sanju",
    name: "Sanju",
    url: "https://sanju.fyi/",
    jobTitle: "Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: "CoinSwitch",
      url: "https://coinswitch.co/",
    },
    sameAs: [
      "https://github.com/TheDAOS",
      "https://mastodon.social/@thedaos",
      "https://www.linkedin.com/in/sanju-santhosh-38b9431b2",
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sanju.fyi"),
  title,
  description,
  alternates: { canonical: "https://sanju.fyi/" },
  authors: [{ name: "Sanju" }],
  creator: "Sanju",
  openGraph: {
    title,
    description,
    url: "https://sanju.fyi/",
    siteName: "Sanju Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 675,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profile).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
