import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/data/site";

export const viewport: Viewport = {
  themeColor: "#080b10",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const geistSans = Inter({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "Ronak Patel",
    "AI Automation",
    "Agentic Systems",
    "Python Automation",
    "FastAPI",
    "n8n",
    "RAG",
    "LLM Integration",
    "Workflow Automation",
    "Human in the loop",
    "Deterministic business logic",
    "Backend Automation",
    "Surat Developer",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name} - Portfolio`,
    images: [
      {
        url: "/og/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - AI Automation & Agentic Systems Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og/og-image.png"],
    creator: "@rkpatel71",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [
      "AI Automation",
      "Agentic Systems",
      "Python 3.12",
      "FastAPI",
      "n8n Workflow Automation",
      "Retrieval-Augmented Generation (RAG)",
      "SQLite FTS5",
      "PostgreSQL & pgvector",
      "Deterministic Business Logic",
      "Playwright Browser Automation",
      "Pytest & Test Automation",
      "Prompt Injection Defense",
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
