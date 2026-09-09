import { contact } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative border-t border-line py-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em]">
          © {new Date().getFullYear()} {contact.name}
        </p>
        <div className="flex gap-5">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="focus-ring transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="focus-ring transition-colors hover:text-accent"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
