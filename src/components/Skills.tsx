import { skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="rounded-3xl border border-line bg-gradient-to-br from-surface/90 via-bg-elevated/80 to-surface/60 p-8 backdrop-blur-sm md:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-2">
            Skills & tools
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-tight md:text-4xl">
            Visual craft, AI workflows, and product-ready web skills.
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
