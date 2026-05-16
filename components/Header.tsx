"use client";

import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  function scrollTo(id: string) {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
  }

  return (
    <header className="flex justify-between items-center py-5 px-[100px]">
      <nav className="flex items-center gap-[50px]">
        <a
          className="text-lg font-normal text-[var(--text-primary)] no-underline hover:text-[var(--accent)] hover:cursor-pointer"
          href="#about"
          onClick={scrollTo("about")}
        >
          About Me
        </a>
        <a
          className="text-lg font-normal text-[var(--text-primary)] no-underline hover:text-[var(--accent)] hover:cursor-pointer"
          href="#journey"
          onClick={scrollTo("journey")}
        >
          Journey
        </a>
        <a
          className="text-lg font-normal text-[var(--text-primary)] no-underline hover:text-[var(--accent)] hover:cursor-pointer"
          href="#projects"
          onClick={scrollTo("projects")}
        >
          Projects
        </a>
      </nav>
      <button
        className="bg-transparent border-none text-[var(--text-primary)] text-[22px] cursor-pointer flex items-center"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </button>
    </header>
  );
}
