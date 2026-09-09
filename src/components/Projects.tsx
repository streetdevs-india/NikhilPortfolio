"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { projects, type ProjectCard } from "@/lib/content";

type LightboxState = {
  project: ProjectCard;
  index: number;
} | null;

export function Projects() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const slides = lightbox
    ? [
        lightbox.project.image,
        ...(lightbox.project.secondaryImage
          ? [lightbox.project.secondaryImage]
          : []),
      ]
    : [];

  useEffect(() => {
    if (!lightbox) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight" && slides.length > 1) {
        setLightbox((prev) =>
          prev
            ? { ...prev, index: (prev.index + 1) % slides.length }
            : prev,
        );
      }
      if (e.key === "ArrowLeft" && slides.length > 1) {
        setLightbox((prev) =>
          prev
            ? {
                ...prev,
                index: (prev.index - 1 + slides.length) % slides.length,
              }
            : prev,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, slides.length]);

  function openLightbox(project: ProjectCard, index = 0) {
    setLightbox({ project, index });
  }

  return (
    <section id="projects" className="bg-bg-soft py-16 md:py-20">
      <div className="container-x">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">Portfolio</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              My Latest <span className="text-yellow">Projects</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="pill btn-primary focus-ring gap-2 px-5 py-2.5 text-sm"
          >
            View All Projects
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow text-xs text-green">
              →
            </span>
          </a>
        </div>

        <div id="graphics" className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} className="card overflow-hidden p-3">
              <button
                type="button"
                onClick={() => openLightbox(project)}
                className="group relative block w-full cursor-zoom-in text-left"
                aria-label={`View ${project.title} larger`}
              >
                <div className="relative aspect-[16/11] overflow-hidden rounded-[1.35rem] bg-bg">
                  {project.isLogoPair ? (
                    <div className="grid h-full grid-cols-2">
                      <div className="relative bg-black">
                        <Image
                          src={project.image}
                          alt="Manku logo"
                          fill
                          className="object-contain p-8 transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="40vw"
                        />
                      </div>
                      <div className="relative bg-card">
                        <Image
                          src={project.secondaryImage || project.image}
                          alt="GIE logo"
                          fill
                          className="object-contain p-8 transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="40vw"
                        />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-green/0 opacity-0 transition-all group-hover:bg-green/25 group-hover:opacity-100">
                    <span className="rounded-full bg-card px-4 py-2 text-xs font-semibold text-green shadow">
                      Click to enlarge
                    </span>
                  </div>
                </div>
              </button>

              <div className="flex items-end justify-between gap-4 p-4 pb-3">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-yellow px-3 py-1 text-[11px] font-semibold text-green"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-ink md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{project.blurb}</p>
                </div>

                {project.href.startsWith("http") ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-icon focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    aria-label={`Open live site for ${project.title}`}
                  >
                    ↗
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => openLightbox(project)}
                    className="btn-icon focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    aria-label={`Enlarge ${project.title}`}
                  >
                    ↗
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.project.title}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="focus-ring absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-card text-lg font-bold text-green"
            aria-label="Close preview"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>

          {slides.length > 1 && (
            <>
              <button
                type="button"
                className="focus-ring absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card text-green md:left-6"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((prev) =>
                    prev
                      ? {
                          ...prev,
                          index:
                            (prev.index - 1 + slides.length) % slides.length,
                        }
                      : prev,
                  );
                }}
              >
                ←
              </button>
              <button
                type="button"
                className="focus-ring absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card text-green md:right-6"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((prev) =>
                    prev
                      ? { ...prev, index: (prev.index + 1) % slides.length }
                      : prev,
                  );
                }}
              >
                →
              </button>
            </>
          )}

          <div
            className="relative max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-card p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative mx-auto aspect-[4/5] max-h-[72vh] w-full md:aspect-[16/10]">
              <Image
                src={slides[lightbox.index]}
                alt={lightbox.project.title}
                fill
                className={
                  lightbox.project.isLogoPair
                    ? "object-contain p-6 md:p-10"
                    : "object-contain"
                }
                sizes="90vw"
                priority
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 px-2 py-3">
              <div>
                <p className="font-bold text-ink">{lightbox.project.title}</p>
                <p className="text-sm text-muted">{lightbox.project.blurb}</p>
              </div>
              {lightbox.project.href.startsWith("http") && (
                <a
                  href={lightbox.project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="pill btn-primary focus-ring px-4 py-2 text-sm"
                >
                  Open live site ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
