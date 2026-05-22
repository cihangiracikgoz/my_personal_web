import Image from "next/image";
import { siteConfig, socialLinks } from "@/lib/site";

export default function About() {
  const [firstName, lastName] = siteConfig.name.split(" ");

  return (
    <section
      id="about"
      className="flex items-start justify-center gap-[60px] py-20 px-[100px] min-h-screen"
    >
      <Image
        src="/profile-picture-compressed.jpg"
        alt={siteConfig.name}
        width={400}
        height={500}
        priority
        className="w-[400px] h-[550px] object-cover"
      />
      <div className="flex flex-col items-start">
        <h1 className="text-[70px] font-normal text-[var(--foreground)] tracking-[-4px] leading-[1.0]">
          {firstName}
          <br />
          {lastName}
        </h1>
        <p className="text-[25px] text-[var(--foreground)] mt-5 tracking-[-1px]">
          BSc Computer Science
          <br />@ University of Surrey
        </p>
        <div className="flex gap-[30px] mt-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-[var(--foreground)] text-[40px] transition-colors duration-300 hover:text-[var(--accent)]"
            >
              <link.icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
