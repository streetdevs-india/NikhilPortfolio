"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { contact } from "@/lib/content";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
      });

      gsap.from(".hero-media", {
        opacity: 0,
        y: 28,
        duration: 1.15,
        ease: "power2.out",
        delay: 0.2,
      });
    },
    { scope: root },
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 md:items-center md:pb-24 md:pt-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/50" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] gap-10 px-5 md:grid-cols-[1.05fr_0.95fr] md:items-end md:gap-12 md:px-8">
        <div className="max-w-2xl pb-2">
          <p className="hero-reveal font-mono text-[11px] uppercase tracking-[0.24em] text-accent-2">
            {contact.location}
          </p>
          <h1 className="hero-reveal font-display mt-5 text-[clamp(3.2rem,9vw,6.4rem)] leading-[0.92] tracking-[-0.02em] text-text">
            {contact.name}
          </h1>
          <p className="hero-reveal mt-5 text-lg font-medium text-accent md:text-xl">
            {contact.role}
          </p>
          <p className="hero-reveal mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Art-directing AI visuals that stay on-brand — and ship cleanly to
            the web.
          </p>
          <div className="hero-reveal mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="focus-ring inline-flex min-h-12 items-center rounded-full bg-accent px-6 text-sm font-semibold text-[#1a1208] transition-transform hover:-translate-y-0.5"
            >
              View selected work
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex min-h-12 items-center rounded-full border border-line bg-white/5 px-6 text-sm font-medium text-text backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              Hire me / Contact
            </a>
          </div>
        </div>

        <div className="hero-media relative">
          <div className="img-frame aspect-[4/5] rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:aspect-[5/6]">
            <Image
              src="/work/soma-poster.png"
              alt="Featured SOMA Roast brand poster"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
          <div className="glass absolute -bottom-4 left-4 right-4 rounded-xl px-4 py-3 md:-left-6 md:right-auto md:max-w-[240px]">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-2">
              Featured system
            </p>
            <p className="mt-1 text-sm font-medium text-text">
              SOMA Roast · brand visuals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
