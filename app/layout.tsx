import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import ThemeProvider from "@/components/ThemeProvider";
import { env } from "@/lib/env";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: env.NEXT_PUBLIC_BASE_URL,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  other: {
    "apple-mobile-web-app-title": "Cihangir Acikgoz",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: env.NEXT_PUBLIC_BASE_URL,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nonce = (await headers()).get("x-nonce") || "";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen text-[var(--foreground)]`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <ThemeProvider nonce={nonce}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
