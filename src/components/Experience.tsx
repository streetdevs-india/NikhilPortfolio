import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-2">
          Experience
        </p>
        <h2 className="font-display mt-3 text-3xl tracking-tight md:text-5xl">
          Where the craft was built.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {experience.map((job) => (
            <article
              key={job.org}
              className="rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur-sm"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                {job.time}
              </p>
              <h3 className="font-display mt-3 text-2xl text-text">{job.org}</h3>
              <p className="mt-1 text-sm font-medium text-muted">{job.role}</p>
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-muted before:mt-[0.45rem] before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent-2 before:content-['']"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
