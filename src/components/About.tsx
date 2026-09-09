import { contact } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-[1.2fr_0.8fr] md:gap-14 md:px-8">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-2">
            About
          </p>
          <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight md:text-5xl">
            From shipping websites to art-directing AI visuals.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
            <p>
              I’m Nikhil Dhuriya — a B.Tech CSE (AI &amp; ML) graduate from
              Noida. I’ve designed and built live client websites including
              Mankuu Interiors, Great India Elevator, and Kanviraa — plus logos
              and campaign banners for client brands.
            </p>
            <p>
              Internships at HCLTech, ZoraDevs, and Abstriq sharpened how I ship
              under real constraints. I’m targeting AI Graphic Designer /
              Visual Designer roles — art direction, AI creative workflows, and
              visuals that survive production.
            </p>
          </div>
        </div>

        <aside className="rounded-3xl border border-line bg-surface/70 p-7 backdrop-blur-sm md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            Availability
          </p>
          <p className="font-display mt-4 text-3xl leading-snug text-text">
            Available for full-time, internship, or freelance roles
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
                Phone
              </span>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="focus-ring transition-colors hover:text-accent"
              >
                {contact.phone}
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
                linkedin.com/in/nikhil-dhuriya
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
