import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export const siteConfig = {
  name: "Cihangir Acikgoz",
  description: "Personal portfolio of Cihangir Acikgoz",
  locale: "en_GB",
} as const;

export const navItems = [
  { label: "About Me", id: "about" },
  { label: "Journey", id: "journey" },
  { label: "Projects", id: "projects" },
  { label: "Contact Me", id: "contact" },
] as const;

export const socialLinks = [
  { href: "https://www.instagram.com/cihangiracikgoz", icon: FiInstagram, label: "Instagram" },
  { href: "https://www.linkedin.com/in/cihangiracikgoz/", icon: FiLinkedin, label: "LinkedIn" },
  { href: "https://github.com/cihangiracikgoz", icon: FiGithub, label: "GitHub" },
] as const;
