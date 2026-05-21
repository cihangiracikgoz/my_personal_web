"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { navItems } from "@/lib/site";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  function toggleDarkMode() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  function scrollTo(id: string) {
    return () => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
  }

  return (
    <header className="flex justify-between items-center py-5 px-[100px]">
      <nav className="flex items-center gap-[50px]">
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
        className="bg-transparent border-none text-[var(--foreground)] text-[22px] cursor-pointer flex items-center p-2"
        onClick={toggleDarkMode}
        aria-label={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {mounted ? (resolvedTheme === "dark" ? <FiSun /> : <FiMoon />) : <FiMoon />}
      </button>
    </header>
  );
}
