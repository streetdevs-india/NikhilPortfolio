import { tools } from "@/lib/content";

export function Tools() {
  return (
    <section id="tools" className="bg-card py-16 md:py-20">
      <div className="container-x">
        <div className="text-center">
          <p className="section-label mx-auto w-fit">My Favorite Tools</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            Tools I Use to <span className="text-yellow">Create</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
            My daily stack for logos, banners, UI drafts, and shipping client
            websites — plus personal AI tools for visual exploration.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {tools.map((tool) => (
            <div key={tool.name} className="text-center">
              <div
                className="relative mx-auto flex h-[108px] w-[108px] items-center justify-center rounded-full shadow-[0_10px_30px_rgba(23,48,36,0.08)]"
                style={{
                  background: `conic-gradient(#f0a91a ${tool.level * 3.6}deg, #e8e6e0 0deg)`,
                }}
              >
                <div className="flex h-[84px] w-[84px] flex-col items-center justify-center rounded-full bg-card">
                  <span className="text-base font-extrabold text-green">
                    {tool.level}%
                  </span>
                </div>
              </div>
              <p className="mt-3 text-sm font-semibold text-ink">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
