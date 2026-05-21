import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import { env } from "@/lib/env";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: "Cihangir Acikgoz",
  description:
    "Personal portfolio of Cihangir Acikgoz",
  openGraph: {
    title: "Cihangir Acikgoz",
    description:
      "Personal portfolio of Cihangir Acikgoz",
    url: env.NEXT_PUBLIC_BASE_URL,
    siteName: "Cihangir Acikgoz",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cihangir Acikgoz",
    description:
      "Personal portfolio of Cihangir Acikgoz",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: env.NEXT_PUBLIC_BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen text-[var(--foreground)]`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
