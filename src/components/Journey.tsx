import { education, work } from "@/lib/content";

export function Journey() {
  return (
    <section id="journey" className="py-16 md:py-20">
      <div className="container-x">
        <p className="section-label">Education & Work</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
          My{" "}
          <span className="text-yellow">Academic and Professional</span> Journey
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-[28px] bg-bg-soft p-7 md:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-xl">
              🎓
            </div>
            <h3 className="mt-5 text-2xl font-bold text-ink">Education</h3>
            <ul className="mt-6 space-y-5">
              {education.map((item) => (
                <li key={item.title} className="border-l-2 border-yellow pl-4">
                  <p className="text-sm text-muted">{item.time}</p>
                  <p className="mt-1 font-semibold text-ink">{item.title}</p>
                  <p className="text-sm text-muted">{item.detail}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[28px] bg-bg-soft p-7 md:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-xl">
              💼
            </div>
            <h3 className="mt-5 text-2xl font-bold text-ink">Work Experience</h3>
            <ul className="mt-6 space-y-5">
              {work.map((item) => (
                <li key={item.title} className="border-l-2 border-yellow pl-4">
                  <p className="text-sm text-muted">{item.time}</p>
                  <p className="mt-1 font-semibold text-ink">{item.title}</p>
                  <p className="text-sm text-muted">{item.detail}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
