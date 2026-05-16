import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

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
        <h1 className="text-[70px] font-normal text-[var(--text-primary)] tracking-[-4px] leading-[1.0]">
          Cihangir
          <br />
          Acikgoz
        </h1>
        <p className="text-[25px] text-[var(--text-primary)] mt-5 tracking-[-1px]">
          BSc Computer Science
          <br />@ University of Surrey
        </p>
        <div className="flex gap-[30px] mt-5">
          <a
            href="https://www.instagram.com/cihangiracikgoz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-primary)] text-[40px] transition-colors duration-300 hover:text-[var(--accent)]"
          >
            <FiInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/cihangiracikgoz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-primary)] text-[40px] transition-colors duration-300 hover:text-[var(--accent)]"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://github.com/cihangiracikgoz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-primary)] text-[40px] transition-colors duration-300 hover:text-[var(--accent)]"
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
