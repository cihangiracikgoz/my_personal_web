import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cihangir Acikgoz",
  description: "Personal portfolio of Cihangir Acikgoz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen text-[var(--text-primary)]`}>
        {children}
      </body>
    </html>
  );
}
