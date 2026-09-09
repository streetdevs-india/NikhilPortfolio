"use client";

import { useEffect, useState } from "react";
import { contact } from "@/lib/content";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-bg/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[4.5rem] items-center justify-between">
        <a href="#home" className="focus-ring text-xl font-extrabold text-ink">
          {contact.firstName}
          <span className="text-yellow">.</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring text-sm font-medium text-muted transition-colors hover:text-green"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="pill btn-primary focus-ring px-5 py-2.5 text-sm"
        >
          Contact Me
        </a>
      </nav>
    </header>
  );
}
