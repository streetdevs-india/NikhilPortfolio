"use client";

import { useEffect, useState } from "react";
import { contact } from "@/lib/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#method", label: "Method" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line bg-bg/80 backdrop-blur-xl" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <a
          href="#top"
          className="font-display focus-ring text-xl tracking-tight text-text md:text-2xl"
        >
          {contact.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono focus-ring text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="focus-ring inline-flex min-h-10 items-center rounded-full bg-accent px-4 text-sm font-semibold text-[#1a1208] transition-transform hover:-translate-y-0.5"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
