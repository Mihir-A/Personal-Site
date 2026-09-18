import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const DEFAULT_SITE_URL = "https://mihirdev.com";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
const siteDescription =
  "UC San Diego Computer Science student seeking SWE internships. Experience in AI solutions at Cloudwick, ASIC verification at Upscale AI, and full-stack and embedded development.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mihir Ananthateerta — Software Engineering Portfolio",
    template: "%s | Mihir Ananthateerta",
  },
  description: siteDescription,
  applicationName: "Mihir's Portfolio",
  authors: [{ name: "Mihir Ananthateerta", url: siteUrl }],
  creator: "Mihir Ananthateerta",
  publisher: "Mihir Ananthateerta",
  keywords: [
    "Mihir Ananthateerta",
    "Mihir",
    "mihirdev",
    "portfolio",
    "UC San Diego",
    "UCSD",
    "software engineering internships",
    "computer science",
    "web development",
    "embedded systems",
    "machine learning",
    "software engineer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Mihir Ananthateerta — Software Engineering Portfolio",
    description: siteDescription,
    siteName: "Mihir's Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihir Ananthateerta — Software Engineering Portfolio",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
      </body>
    </html>
  );
}
