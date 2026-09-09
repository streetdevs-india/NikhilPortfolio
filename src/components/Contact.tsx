"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/lib/content";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const brief = String(data.get("brief") || "").trim();
    const timeline = String(data.get("timeline") || "").trim();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${name || "someone"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTimeline: ${timeline}\n\nBrief:\n${brief}`,
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[760px] px-5 text-center md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-2">
          Contact
        </p>
        <h2 className="font-display mt-4 text-4xl leading-tight tracking-tight md:text-6xl">
          Available for AI graphic design roles and brand visual systems.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted">
          Want a free sample social template for your brand? Send a logo + 2
          brand colors — I’ll return one on-brand 1080×1350 frame.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="focus-ring inline-flex min-h-12 items-center rounded-full bg-accent px-6 text-sm font-semibold text-[#1a1208] transition-transform hover:-translate-y-0.5"
          >
            Email me
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex min-h-12 items-center rounded-full border border-line bg-white/5 px-6 text-sm font-medium text-text backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-14 grid gap-4 rounded-3xl border border-line bg-surface/70 p-5 text-left backdrop-blur-sm md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-sm">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                Name
              </span>
              <input
                name="name"
                required
                className="focus-ring mt-2 w-full rounded-xl border border-line bg-bg/80 px-4 py-3 text-text placeholder:text-muted/60"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                Email
              </span>
              <input
                name="email"
                type="email"
                required
                className="focus-ring mt-2 w-full rounded-xl border border-line bg-bg/80 px-4 py-3 text-text placeholder:text-muted/60"
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label className="block text-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              Brief
            </span>
            <textarea
              name="brief"
              required
              rows={4}
              className="focus-ring mt-2 w-full resize-y rounded-xl border border-line bg-bg/80 px-4 py-3 text-text placeholder:text-muted/60"
              placeholder="Role, brand, or project brief"
            />
          </label>
          <label className="block text-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              Timeline
            </span>
            <input
              name="timeline"
              className="focus-ring mt-2 w-full rounded-xl border border-line bg-bg/80 px-4 py-3 text-text placeholder:text-muted/60"
              placeholder="e.g. Starting this month"
            />
          </label>
          <button
            type="submit"
            className="focus-ring mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-[#1a1208] transition-transform hover:-translate-y-0.5"
          >
            Send inquiry
          </button>
          {status === "sent" && (
            <p className="text-sm text-muted">Opening your email client…</p>
          )}
        </form>

        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {contact.email} · {contact.phone} · {contact.location}
        </p>
      </div>
    </section>
  );
}
