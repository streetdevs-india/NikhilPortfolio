"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects, moreWork } from "@/lib/content";

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
          y: 24,
          opacity: 0,
          duration: 0.65,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: block, start: "top 82%" },
        });
      });
    },
    { scope: root },
  );

  return (
    <section id="work" ref={root} className="relative py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-2">
              Selected work
            </p>
            <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight text-text md:text-5xl">
              Live client websites I designed and shipped.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Screenshots below are from the live production sites. Click through
            to verify each build.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="project-block overflow-hidden rounded-3xl border border-line bg-surface/45"
            >
              <div className="project-fade img-frame relative aspect-[16/10] bg-bg md:aspect-[21/9]">
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  className="object-cover object-top"
                  sizes="100vw"
                  priority={project.number === "01"}
                />
              </div>

              <div className="grid gap-8 p-6 md:grid-cols-[1fr_1.15fr] md:gap-10 md:p-8">
                <div>
                  <p className="project-fade font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {project.number} — {project.label}
                  </p>
                  <h3 className="project-fade font-display mt-2 text-3xl tracking-tight text-text md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="project-fade mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {project.intent}
                  </p>
                  <div className="project-fade mt-5 flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring rounded-full bg-accent px-4 py-2 text-xs font-semibold text-[#1a1208]"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="project-fade">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                      Role
                    </p>
                    <p className="mt-2 text-sm text-text/90">{project.role}</p>
                  </div>
                  <div className="project-fade">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                      Tools
                    </p>
                    <p className="mt-2 text-sm text-text/90">
                      {project.tools.join(" · ")}
                    </p>
                  </div>
                  <div className="project-fade sm:col-span-2">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                      Deliverables
                    </p>
                    <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                      {project.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm text-muted before:mt-[0.45rem] before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent before:content-['']"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-fade flex flex-wrap items-center gap-2 rounded-xl border border-line bg-bg/50 px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted sm:col-span-2">
                    {project.process.map((step, i) => (
                      <span key={step} className="flex items-center gap-2">
                        <span className="text-text">{step}</span>
                        {i < project.process.length - 1 && (
                          <span className="text-accent/70">→</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="font-display text-2xl text-text md:text-3xl">
            Also shipped
          </h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {moreWork.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-line bg-surface/55 p-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-2">
                  {item.tag}
                </p>
                <p className="mt-2 font-semibold text-text">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.blurb}
                </p>
                {"href" in item && item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-xs font-medium text-accent hover:underline"
                  >
                    View live ↗
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
