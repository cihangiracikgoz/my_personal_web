'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function ThemeProvider({ children, nonce }: { children: React.ReactNode; nonce: string }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      nonce={nonce}
    >
      {children}
    </NextThemesProvider>
  );
}
