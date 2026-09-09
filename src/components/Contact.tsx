"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    setStatus("sending");

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${contact.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `Portfolio inquiry from ${name}`,
            _template: "table",
            _captcha: "false",
          }),
        },
      );

      if (!res.ok) throw new Error("Failed to send");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-green py-16 text-white md:py-20">
      <div className="container-x grid gap-10 md:grid-cols-[1fr_1.05fr] md:items-start">
        <div>
          <p className="text-sm font-semibold text-yellow">Contact</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Let’s build something{" "}
            <span className="text-yellow">great together</span>
          </h2>
          <p className="mt-4 max-w-md text-white/75">
            Open to full-time, internship, and freelance AI Graphic Designer /
            Visual Designer roles.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/85">
            <li>{contact.email}</li>
            <li>{contact.phone}</li>
            <li>{contact.location}</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="pill focus-ring bg-yellow px-5 py-2.5 text-sm font-semibold text-green"
            >
              LinkedIn
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="pill focus-ring border border-white/30 px-5 py-2.5 text-sm"
            >
              GitHub
            </a>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-[28px] bg-card p-6 text-ink shadow-[var(--shadow)] md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-sm">
              <span className="font-medium text-muted">Name</span>
              <input
                name="name"
                required
                className="focus-ring mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-muted">Email</span>
              <input
                name="email"
                type="email"
                required
                className="focus-ring mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm">
            <span className="font-medium text-muted">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="focus-ring mt-2 w-full resize-y rounded-2xl border border-line bg-bg px-4 py-3"
            />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="pill btn-primary focus-ring mt-5 w-full py-3.5 text-sm disabled:opacity-60 md:w-auto md:px-8"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          {status === "sent" && (
            <p className="mt-3 text-sm font-medium text-green">
              Message sent to {contact.email}. I’ll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-red-600">
              Couldn’t send right now. Email me directly at {contact.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
