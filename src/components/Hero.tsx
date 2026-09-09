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
              className="pill btn-primary focus-ring gap-2 px-6 py-3.5 text-sm"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow text-xs font-bold text-green">
                ▶
              </span>
              View My Portfolio
            </a>
            <a
              href="#contact"
              className="pill focus-ring border-2 border-green bg-card px-6 py-3.5 text-sm font-semibold text-green hover:bg-green hover:!text-[#ffffff]"
            >
              Hire Me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] md:max-w-[460px]">
          <div className="absolute -right-1 top-8 h-[82%] w-[82%] rounded-full bg-yellow md:right-0" />
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-[var(--shadow)]">
            <div className="relative aspect-[4/5] bg-bg-soft">
              <Image
                src="/work/nikhil-hero.jpg"
                alt="Nikhil Dhuriya — AI Graphic Designer"
                fill
                priority
                className="object-cover object-[50%_8%] scale-[1.08]"
                sizes="(max-width: 768px) 90vw, 460px"
              />
              {/* Soften busy wallpaper on the left without hiding the face */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-black/25 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green/50 via-transparent to-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-5 pt-16">
                <p className="text-sm font-semibold text-white drop-shadow">
                  {contact.name}
                </p>
                <p className="text-xs font-medium text-yellow-soft">
                  {contact.role}
                </p>
              </div>
            </div>
          </div>

          <span className="absolute -left-2 top-14 rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-green shadow-md md:-left-6">
            {aboutTags[0]}
          </span>
          <span className="absolute -right-1 top-24 rounded-full bg-yellow px-3 py-1.5 text-xs font-semibold text-green shadow-md md:-right-4">
            {aboutTags[1]}
          </span>
          <span className="absolute bottom-20 -left-1 rounded-full bg-green px-3 py-1.5 text-xs font-semibold text-[#ffffff] shadow-md md:-left-8">
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
