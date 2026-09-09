"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "@/lib/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function SelectedWork() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      gsap.utils.toArray<HTMLElement>(".project-block").forEach((block) => {
        gsap.from(block.querySelectorAll(".project-fade"), {
          y: 32,
          opacity: 0,
          duration: 0.75,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 78%",
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section id="work" ref={root} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="mb-16 max-w-2xl md:mb-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-2">
            Selected work
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight tracking-tight text-text md:text-6xl">
            Work that shows the system — not just one lucky render.
          </h2>
        </div>

        <div className="space-y-28 md:space-y-36">
          {projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="project-block group grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14"
            >
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="project-fade font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {project.number} — {project.label}
                </p>
                <h3 className="project-fade font-display mt-3 text-3xl tracking-tight text-text transition-colors group-hover:text-accent md:text-5xl">
                  {project.title}
                </h3>
                <p className="project-fade mt-4 text-base leading-relaxed text-muted">
                  {project.intent}
                </p>

                <dl className="project-fade mt-7 space-y-4 text-sm">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                      Role
                    </dt>
                    <dd className="mt-1.5 text-text/90">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                      Tools
                    </dt>
                    <dd className="mt-1.5 text-text/90">
                      {project.tools.join(" · ")}
                    </dd>
                  </div>
                </dl>

                <ul className="project-fade mt-6 space-y-2">
                  {project.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm text-muted before:mt-[0.45rem] before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent before:content-['']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {project.links && (
                  <div className="project-fade mt-6 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring rounded-full border border-line bg-white/5 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-text transition-colors hover:border-accent hover:text-accent"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}

                {project.caption && (
                  <p className="project-fade mt-6 border-l-2 border-accent pl-4 text-sm italic leading-relaxed text-muted">
                    {project.caption}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                {project.images.map((image) => (
                  <div
                    key={image.src}
                    className={`project-fade img-frame rounded-2xl ${
                      image.wide ? "aspect-[16/10]" : "aspect-[4/5] max-w-md"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </div>
                ))}

                <div className="project-fade flex flex-wrap items-center gap-x-2 gap-y-2 rounded-xl border border-line bg-surface/70 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted backdrop-blur-sm">
                  {project.process.map((step, i) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="text-text">{step}</span>
                      {i < project.process.length - 1 && (
                        <span className="text-accent/70" aria-hidden>
                          →
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
