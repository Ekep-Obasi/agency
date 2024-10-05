import "./css/style.css";
import { Inter } from "next/font/google";
import Header from "@/components/ui/header";
import React, { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: false,
});

export interface Metadata {
  title: string;
  keywords?: string;
  description?: string;
  image?: string;
}

export const defaultMetadata: Metadata = {
  title: "Keploy | Open Source Stubs and API Test Generator for Developer",
  keywords:
    "Integration testing, e2e Testing, ai testing, Unit Testing, API Testing, open source ai testing tool, Service Mocking, Dependency Mocking",
  description:
    "Keploy is AI based test case and stubs/mocks generator for integration and unit testing. 90% test coverage in minutes with open source testing tool",
  image: "images/logo.svg",
};

interface RootLayoutProps {
  children: ReactNode;
  metadata?: Metadata;
  HeaderDisplayed?: boolean;
}

export default function RootLayout({
  children,
  metadata,
  HeaderDisplayed = true,
}: RootLayoutProps) {
  const finalMetadata = {
    title: metadata?.title || defaultMetadata.title,
    keywords: metadata?.keywords || defaultMetadata.keywords,
    description: metadata?.description || defaultMetadata.description,
    image: metadata?.image || defaultMetadata.image,
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{finalMetadata.title}</title>
        <meta name="keywords" content={finalMetadata.keywords} />
        <meta name="description" content={finalMetadata.description} />
        <meta property="og:image" name="image" content={finalMetadata.image} />
        <meta name="twitter:card" content={finalMetadata.image} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TLL6DW2H6N"
        ></script>
      </head>
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div
          className="flex flex-col overflow-hidden supports-[overflow:clip]:overflow-clip"
          suppressHydrationWarning
        >
          {HeaderDisplayed && <Header />}
          {children}
        </div>
      </body>
    </html>
  );
}
