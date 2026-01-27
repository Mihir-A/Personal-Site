import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const DEFAULT_SITE_URL = "https://mihirdev.com";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;

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
    default: "Mihir Ananthateerta — Portfolio",
    template: "%s | Mihir Ananthateerta",
  },
  description:
    "UCSB Computer Science sophomore building web apps, embedded systems, and machine learning projects.",
  applicationName: "Mihir's Portfolio",
  authors: [{ name: "Mihir Ananthateerta", url: siteUrl }],
  creator: "Mihir Ananthateerta",
  publisher: "Mihir Ananthateerta",
  keywords: [
    "Mihir Ananthateerta",
    "Mihir",
    "mihirdev",
    "portfolio",
    "UCSB",
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
    title: "Mihir Ananthateerta — Portfolio",
    description:
      "UCSB Computer Science sophomore building web apps, embedded systems, and machine learning projects.",
    siteName: "Mihir's Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihir Ananthateerta — Portfolio",
    description:
      "UCSB Computer Science sophomore building web apps, embedded systems, and machine learning projects.",
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
