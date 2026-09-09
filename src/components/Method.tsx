export function Method() {
  const steps = [
    {
      num: "01",
      title: "Decode",
      body: "Brief, audience, offer, and hard constraints before any pixels.",
    },
    {
      num: "02",
      title: "Direction",
      body: "Refs, mood, type, and color rules that lock the system.",
    },
    {
      num: "03",
      title: "Generate",
      body: "AI exploration at volume — then ruthless curation.",
    },
    {
      num: "04",
      title: "Refine & handoff",
      body: "Figma/PS polish, correct formats, brand-safe finals.",
    },
  ];

  return (
    <section id="method" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-2">
            How I work
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight tracking-tight md:text-6xl">
            I don’t publish first outputs. I art-direct until it looks
            intentional.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur-sm transition-colors hover:border-accent/40 md:p-7"
            >
              <p className="font-mono text-[11px] text-accent">{step.num}</p>
              <h3 className="font-display mt-5 text-2xl text-text">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
