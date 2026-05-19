import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { BiCoffeeTogo } from "react-icons/bi";

export default function About() {
  return (
    <section
      id="about"
      className="flex items-start justify-center gap-[60px] py-20 px-[100px] min-h-screen"
    >
      <div>
        <div className="w-[400px] h-[500px] bg-[var(--accent)] opacity-30" />
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-[70px] font-normal text-[var(--foreground)] tracking-[-4px] leading-[1.0]">
          Cihangir
          <br />
          Acikgoz
        </h1>
        <p className="text-[25px] text-[var(--foreground)] mt-5 tracking-[-1px]">
          BSc Computer Science
          <br />@ University of Surrey
        </p>
        <div className="flex gap-[30px] mt-5">
          <a
            href="https://www.instagram.com/cihangiracikgoz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[var(--foreground)] text-[40px] transition-colors duration-300 hover:text-[var(--accent)]"
          >
            <FiInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/cihangiracikgoz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--foreground)] text-[40px] transition-colors duration-300 hover:text-[var(--accent)]"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://github.com/cihangiracikgoz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--foreground)] text-[40px] transition-colors duration-300 hover:text-[var(--accent)]"
          >
            <FiGithub />
          </a>
          <a
            href="https://buymeacoffee.com/cihangiracikgoz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buy Me a Coffee"
            className="text-[var(--foreground)] text-[40px] transition-colors duration-300 hover:text-[var(--accent)]"
          >
            <BiCoffeeTogo />
          </a>
        </div>
      </div>
    </section>
  );
}
