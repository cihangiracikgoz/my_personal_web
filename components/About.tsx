"use client"

import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { BiDonateHeart } from "react-icons/bi";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useState } from "react";

export default function About() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleDonate(amount: number) {
    setIsLoading(true);

    try { 
      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Payment processing failed");
      }
      
      window.location.href = data.url;
    } catch (error) {
      console.error("Error occurred while processing donation:", error);
    } finally {
      setIsLoading(false);
    }
}

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
          <Popover className="relative">
            <PopoverButton
              className="text-[var(--text-primary)] text-[40px] transition-colors duration-300 hover:text-[var(--accent)]"
            >
              <BiDonateHeart />
            </PopoverButton>
            <PopoverPanel className="absolute left-1/2 -translate-x-1/2 mt-3 flex gap-2 rounded-lg bg-[var(--bg-primary)] p-3 shadow-lg border border-[var(--accent)]/20">
              {[5, 10, 20, 50].map((amount) => (
                <button
                  key={amount}
                  disabled={isLoading}
                  onClick={() => handleDonate(amount)}
                  className="rounded-md bg-[var(--accent)]/10 px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors duration-200 hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  £{amount}
                </button>
              ))}
            </PopoverPanel>
          </Popover>
        </div>
      </div>
    </section>
  );
}
