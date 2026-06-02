"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { navItems } from "@/lib/site";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  function toggleDarkMode() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  function scrollTo(id: string) {
    return () => {
      setMenuOpen(false);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
  }

  return (
    <header className="sticky md:static top-0 z-50 flex justify-between items-center py-5 px-6 md:px-[100px] [background:var(--bg-gradient,var(--background))] md:bg-transparent md:[background:none]">
      <nav className="hidden md:flex items-center gap-[50px]">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="text-lg font-normal text-[var(--foreground)] hover:text-[var(--accent)] cursor-pointer bg-transparent border-none"
            onClick={scrollTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <button
        className="md:hidden bg-transparent border-none text-[var(--foreground)] text-2xl cursor-pointer flex items-center p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
      <button
        className="bg-transparent border-none text-[var(--foreground)] text-[22px] cursor-pointer flex items-center p-2"
        onClick={toggleDarkMode}
        aria-label={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {mounted ? (resolvedTheme === "dark" ? <FiSun /> : <FiMoon />) : <FiMoon />}
      </button>
      {menuOpen && (
        <>
          <div 
            className='fixed inset-0 z-40 md:hidden cursor-pointer' 
            onClick={() => setMenuOpen(false)} 
            aria-hidden="true" 
          />
          <nav className="absolute top-16 left-0 right-0 flex flex-col items-center gap-6 py-8 [background:var(--bg-gradient,var(--background))] border-b border-[var(--border)] z-50 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="text-lg font-normal text-[var(--foreground)] hover:text-[var(--accent)] cursor-pointer bg-transparent border-none min-h-[48px] min-w-[48px]"
                onClick={scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </>
      )}
    </header>
  );
}
