import { type JSX } from "react";
import darkModeLogo from "../../assets/logos/dark-mode-icon.png";
import "./Header.css";

export default function Header(): JSX.Element {
  return (
    <header className="header">
        <Navbar />
        <DarkModeToggle />
    </header>
  );
}

function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
        <a className="nav-link">About me</a>
        <a className="nav-link">Journey</a>
        <a className="nav-link">Experiences & Projects</a>
        <a className="nav-link">Contact</a>
    </nav>
    );
}

function DarkModeToggle(): JSX.Element {
  return (
    <div className="dark-mode-toggle">
        <img src={darkModeLogo} 
        alt="Dark Mode Toggle" 
        className="dark-mode-icon" />
    </div>
  );
}