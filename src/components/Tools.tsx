import { tools } from "@/lib/content";

export function Tools() {
  return (
    <section id="tools" className="bg-white py-16 md:py-20">
      <div className="container-x">
        <div className="text-center">
          <p className="section-label mx-auto w-fit">My Favorite Tools</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            Tools I Use to <span className="text-yellow">Create</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {tools.map((tool) => (
            <div key={tool.name} className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-bg-soft shadow-inner">
                <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full border-[3px] border-yellow bg-white">
                  <span className="text-sm font-extrabold text-green">
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
