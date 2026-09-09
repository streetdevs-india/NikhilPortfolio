import Image from "next/image";
import { aboutTags, contact, stats } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="bg-green py-16 text-white md:py-20">
      <div className="container-x grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div className="relative mx-auto w-full max-w-[380px]">
          <div className="relative aspect-square overflow-hidden rounded-full border-[6px] border-yellow">
            <Image
              src="/work/nikhil-profile.jpg"
              alt="Nikhil Dhuriya profile photo"
              fill
              className="object-cover object-[center_15%]"
              sizes="380px"
            />
          </div>
          <div className="absolute -bottom-3 left-1/2 flex w-[92%] -translate-x-1/2 flex-wrap justify-center gap-2">
            {aboutTags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-yellow px-3 py-1 text-[11px] font-semibold text-green shadow"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-yellow">About Me</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Who is <span className="text-yellow">{contact.firstName}?</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
            B.Tech CSE (AI &amp; ML) graduate from Noida. I’ve designed and
            shipped live client websites — Mankuu Interiors, Great India
            Elevator, and Kanviraa — along with logos and campaign posters.
            Internships at HCLTech, ZoraDevs, and Abstriq taught me to deliver
            under real brand constraints.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold text-yellow md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-white/70 md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${contact.email}?subject=Please%20share%20your%20CV`}
              className="pill focus-ring gap-2 bg-yellow px-6 py-3 text-sm text-green hover:bg-yellow-soft"
            >
              Request CV
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green text-xs font-bold text-[#f0a91a]">
                →
              </span>
            </a>
            <p className="font-script text-3xl text-yellow">
              {contact.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
