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
    return () => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
  }

  return (
    <header className="flex justify-between items-center py-5 px-[100px]">
      <nav className="flex items-center gap-[50px]">
        <button
          className="text-lg font-normal text-[var(--foreground)] hover:text-[var(--accent)] cursor-pointer bg-transparent border-none"
          onClick={scrollTo("about")}
        >
          About Me
        </button>
        <button
          className="text-lg font-normal text-[var(--foreground)] hover:text-[var(--accent)] cursor-pointer bg-transparent border-none"
          onClick={scrollTo("journey")}
        >
          Journey
        </button>
        <button
          className="text-lg font-normal text-[var(--foreground)] hover:text-[var(--accent)] cursor-pointer bg-transparent border-none"
          onClick={scrollTo("projects")}
        >
          Projects
        </button>
        <button
          className="text-lg font-normal text-[var(--foreground)] hover:text-[var(--accent)] cursor-pointer bg-transparent border-none"
          onClick={scrollTo("contact")}
        >
          Contact Me
        </button>
      </nav>
      <button
        className="bg-transparent border-none text-[var(--foreground)] text-[22px] cursor-pointer flex items-center"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </button>
    </header>
  );
}
