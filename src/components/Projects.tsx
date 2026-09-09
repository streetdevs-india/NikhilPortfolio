import Image from "next/image";
import { projects } from "@/lib/content";

export function Projects() {
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
            className="pill focus-ring gap-2 bg-green px-5 py-2.5 text-sm text-white hover:bg-green-deep"
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
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.35rem] bg-bg">
                {"isLogoPair" in project && project.isLogoPair ? (
                  <div className="grid h-full grid-cols-2">
                    <div className="relative bg-black">
                      <Image
                        src={project.image}
                        alt="Manku logo"
                        fill
                        className="object-contain p-8"
                        sizes="40vw"
                      />
                    </div>
                    <div className="relative bg-white">
                      <Image
                        src={project.secondaryImage || project.image}
                        alt="GIE logo"
                        fill
                        className="object-contain p-8"
                        sizes="40vw"
                      />
                    </div>
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </div>

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
                <a
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    project.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green text-yellow hover:bg-green-deep"
                  aria-label={`Open ${project.title}`}
                >
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
