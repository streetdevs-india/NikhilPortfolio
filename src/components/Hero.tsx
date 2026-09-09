"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { contact, projects, moreWork } from "@/lib/content";

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
        y: 36,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
      });
    },
    { scope: root },
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative overflow-hidden pb-14 pt-28 md:pb-16 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/88 to-bg/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="hero-reveal font-mono text-[11px] uppercase tracking-[0.24em] text-accent-2">
              {contact.location}
            </p>
            <h1 className="hero-reveal font-display mt-4 text-[clamp(2.8rem,7.5vw,5.4rem)] leading-[0.94] tracking-[-0.02em] text-text">
              {contact.name}
            </h1>
            <p className="hero-reveal mt-4 text-lg font-medium text-accent md:text-xl">
              {contact.role}
            </p>
            <p className="hero-reveal mt-4 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              I design brand-aligned web visuals and ship them in production —
              from client landing pages to ecommerce UI. Now focusing on AI
              graphic design roles with strong art direction.
            </p>
            <div className="hero-reveal mt-8 flex flex-wrap gap-3">
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
                Contact
              </a>
            </div>
          </div>

          <div className="hero-reveal grid grid-cols-2 gap-3">
            {projects.slice(0, 2).map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="img-frame group relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={p.images[0].src}
                  alt={p.title}
                  fill
                  className="object-cover object-top"
                  sizes="40vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3">
                  <p className="text-xs font-medium text-text">{p.title}</p>
                </div>
              </a>
            ))}
            <a
              href={`#${projects[2].id}`}
              className="img-frame relative col-span-2 aspect-[21/9] overflow-hidden rounded-2xl"
            >
              <Image
                src={projects[2].images[0].src}
                alt={projects[2].title}
                fill
                className="object-cover object-top"
                sizes="50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3">
                <p className="text-xs font-medium text-text">
                  {projects[2].title} · live ecommerce
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="hero-reveal mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {moreWork.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-line bg-surface/65 p-4 backdrop-blur-sm"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-2">
                {item.tag}
              </p>
              <p className="mt-2 text-sm font-semibold text-text">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {item.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
