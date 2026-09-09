import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="container-x">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">Services</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              Services I <span className="text-yellow">Provide</span>
            </h2>
          </div>
          <a
            href="#projects"
            className="pill btn-primary focus-ring px-5 py-2.5 text-sm"
          >
            View All Work →
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <article key={service.title} className="card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green text-lg font-bold text-[#f0a91a]">
                0{i + 1}
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.body}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-yellow hover:text-green"
              >
                Learn more <span aria-hidden>↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
