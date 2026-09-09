import { contact } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-[1.2fr_0.8fr] md:gap-14 md:px-8">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-2">
            About
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight tracking-tight md:text-5xl">
            From shipping websites to art-directing AI visuals.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
            <p>
              I started in MERN internships — HCLTech and ZoraDevs — where I
              designed and shipped real client websites, not mockups. That
              taught me visual hierarchy, brand constraints, and what actually
              survives production.
            </p>
            <p>
              Now I specialize in AI-assisted graphic design: brand systems,
              social creatives, and web visuals, with human art direction on
              top of generation. B.Tech CSE (AI &amp; ML). Based in Noida.
              Open to full-time, internship, or freelance AI Graphic Designer /
              Visual Designer roles.
            </p>
          </div>
          <blockquote className="mt-8 rounded-2xl border border-line bg-surface/50 p-5 md:p-6">
            <p className="text-sm italic leading-relaxed text-text/90 md:text-base">
              “[Add a short line from your mentor or client here — shipping
              quality, visual taste, or reliability.]”
            </p>
            <footer className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              Name · Role · Company
            </footer>
          </blockquote>
        </div>

        <aside className="rounded-3xl border border-line bg-surface/70 p-7 backdrop-blur-sm md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            Availability
          </p>
          <p className="font-display mt-4 text-3xl leading-snug text-text">
            Open to roles starting immediately
          </p>
          <ul className="mt-8 space-y-5 text-sm text-muted">
            <li>
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-accent-2">
                Location
              </span>
              {contact.location}
            </li>
            <li>
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-accent-2">
                Email
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="focus-ring transition-colors hover:text-accent"
              >
                {contact.email}
              </a>
            </li>
            <li>
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-accent-2">
                LinkedIn
              </span>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="focus-ring transition-colors hover:text-accent"
              >
                nikhil-dhuriya
              </a>
            </li>
            <li>
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-accent-2">
                Signature line
              </span>
              <span className="text-text">
                I design visuals that survive the handoff to code.
              </span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
