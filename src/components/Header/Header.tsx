import { useEffect, useState, type JSX } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import "./Header.css";

type darkModeProps = {
  darkMode: boolean;
  onToggle: () => void;
};

export default function Header(): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem("darkMode");
      return stored === "true";
    } catch (e) {
      return false;
    }
  });

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }

    try {
      localStorage.setItem("darkMode", darkMode.toString());
    } catch (_) {}
  }, [darkMode]);

  return (
    <header className="header">
      <Navbar />
      <DarkModeToggle darkMode={darkMode} onToggle={handleToggle} />
    </header>
  );
}

export function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
        <a href="#home" className="nav-link">Home</a>
        <a href="#journey" className="nav-link">Journey</a>
        <a href="#experiences-and-projects" className="nav-link">Experiences & Projects</a>
    </nav>
    );
}

export function DarkModeToggle({ darkMode, onToggle }: darkModeProps): JSX.Element {
  return (
    <button type="button" className="dark-mode-toggle" onClick={onToggle} aria-label={darkMode ? "Toggle light Mode" : "Toggle dark Mode"} aria-pressed={darkMode}>
      {darkMode ? <MdOutlineLightMode size={26} /> : <MdOutlineDarkMode size={26} />}
    </button>
  );
}