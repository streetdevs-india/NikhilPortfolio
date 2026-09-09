import Image from "next/image";
import { contact, marqueeItems, aboutTags } from "@/lib/content";

export function Hero() {
  return (
    <section id="home" className="overflow-hidden pt-28 md:pt-32">
      <div className="container-x grid items-center gap-10 pb-12 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:pb-16">
        <div>
          <p className="inline-flex rounded-full bg-yellow/20 px-3 py-1 text-xs font-semibold text-green">
            Available for AI Graphic Designer roles
          </p>
          <h1 className="mt-5 text-[clamp(2.4rem,6vw,4.4rem)] font-extrabold leading-[1.08] tracking-tight text-ink">
            I’m <span className="text-yellow">{contact.firstName}</span>,{" "}
            {contact.role} Based in {contact.location.split(",")[0]}.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            I design logos, campaign posters, and full client websites — then
            ship them live. From Mankuu Interiors to Kanviraa ecommerce, every
            piece is real client work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="pill focus-ring gap-2 bg-green px-6 py-3.5 text-sm text-white hover:bg-green-deep"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow text-xs text-green">
                ▶
              </span>
              View My Portfolio
            </a>
            <a
              href="#contact"
              className="pill focus-ring border-2 border-green bg-white px-6 py-3.5 text-sm text-green hover:bg-green hover:text-white"
            >
              Hire Me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[460px]">
          <div className="absolute right-2 top-6 h-[78%] w-[78%] rounded-full bg-yellow md:right-0" />
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-[var(--shadow)]">
            <div className="relative aspect-[4/5] bg-green">
              <Image
                src="/work/dental-banner-1.jpg"
                alt="Featured campaign creative by Nikhil"
                fill
                priority
                className="object-cover object-top opacity-95"
                sizes="460px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-semibold text-white">
                  {contact.name}
                </p>
                <p className="text-xs text-yellow-soft">{contact.role}</p>
              </div>
            </div>
          </div>

          <span className="absolute -left-2 top-16 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-green shadow-md md:-left-6">
            {aboutTags[0]}
          </span>
          <span className="absolute -right-1 top-28 rounded-full bg-yellow px-3 py-1.5 text-xs font-semibold text-green shadow-md md:-right-4">
            {aboutTags[1]}
          </span>
          <span className="absolute bottom-16 -left-1 rounded-full bg-green px-3 py-1.5 text-xs font-semibold text-white shadow-md md:-left-8">
            {aboutTags[2]}
          </span>
        </div>
      </div>

      <div className="bg-yellow py-4">
        <div className="marquee">
          <div className="marquee-track text-sm font-bold uppercase tracking-[0.14em] text-green">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={`${item}-${i}`} className="inline-flex items-center gap-3">
                <span>{item}</span>
                <span aria-hidden>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
