import Image from "next/image";
import { siteConfig, socialLinks } from "@/lib/site";

export default function About() {
  const [firstName, lastName] = siteConfig.name.split(" ");

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-[60px] py-12 md:py-20 px-6 md:px-[100px] min-h-screen"
    >
      <Image
        src="/profile-picture-portfolio.webp"
        alt={siteConfig.name}
        width={400}
        height={500}
        priority
        className="w-[280px] h-[380px] md:w-[400px] md:h-[550px] object-cover"
      />
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-5xl md:text-[70px] font-normal text-[var(--foreground)] tracking-[-4px] leading-[1.0] text-center md:text-left">
          {firstName}
          <br />
          {lastName}
        </h1>
        <p className="text-lg md:text-[25px] text-[var(--foreground)] mt-5 tracking-[-1px] text-center md:text-left">
          BSc Computer Science
          <br />@ University of Surrey
        </p>
        <div className="flex gap-6 md:gap-[30px] mt-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-[var(--foreground)] text-3xl md:text-[40px] transition-colors duration-300 hover:text-[var(--accent)] min-h-[48px] min-w-[48px] flex items-center justify-center"
            >
              <link.icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
