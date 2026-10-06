import { ArrowDown2, Link21 } from "iconsax-react";
import { ProjectsList, type ProjectStatus } from "@/constants";
import { cn } from "@/utils/cn";

/* Status is told by brightness, not hue: LIVE is lit, BUILD is half-lit,
   SHELVED is dark with a hairline. */
const statusStyle: Record<ProjectStatus, string> = {
  LIVE: "bg-paper text-ink border-paper",
  BUILD: "bg-transparent text-ash border-ash/60",
  SHELVED: "bg-transparent text-fog border-fog/50",
};

export function WorkLedger() {
  return (
    <section id="work" aria-labelledby="work-title" className="py-16 md:py-24">
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <h2
          id="work-title"
          className="font-display text-2xl font-bold text-ash md:text-3xl"
        >
          Work
        </h2>
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-fog">
          {ProjectsList.length} projects · tap a row for detail
        </p>
      </div>

      <ul role="list" className="border-t border-white/[0.06]">
        {ProjectsList.map((project) => (
          <li
            key={project.id}
            id={project.id}
            className="border-b border-white/[0.06]"
          >
            {/* Brackets sit on a wrapper, not inside <details>: a closed
                details element doesn't render anything but its summary. */}
            <div className="bracketed relative">
              <span className="bracket bracket-tl" aria-hidden="true" />
              <span className="bracket bracket-tr" aria-hidden="true" />
              <span className="bracket bracket-br" aria-hidden="true" />
              <span className="bracket bracket-bl" aria-hidden="true" />
            <details className="group">

              <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-2 px-4 py-5 transition-colors duration-150 hover:bg-white/[0.03] md:grid-cols-[minmax(10rem,14rem)_1fr_auto_auto] md:px-5 md:py-6 [&::-webkit-details-marker]:hidden">
                <span className="flex flex-col gap-2">
                  <span className="font-display text-xl font-bold uppercase leading-none tracking-tight text-bone md:text-2xl">
                    {project.title}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-fog tabular-nums">
                    {project.period}
                  </span>
                </span>
                <span className="order-3 col-span-2 font-mono text-xs leading-relaxed text-fog md:order-none md:col-span-1 md:text-sm">
                  {project.summary}
                </span>
                <span
                  className={cn(
                    "justify-self-end rounded-xs border px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em]",
                    statusStyle[project.status],
                  )}
                >
                  {project.status}
                </span>
                <ArrowDown2
                  size={14}
                  color="currentColor"
                  aria-hidden="true"
                  className="hidden self-center text-fog transition-transform duration-300 ease-out group-open:rotate-180 md:block"
                />
              </summary>

              <div className="grid gap-6 px-4 pb-6 md:grid-cols-[minmax(10rem,14rem)_1fr] md:px-5 md:pb-8">
                <ul className="flex flex-wrap content-start gap-1.5 md:col-start-2 md:row-start-1">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-xs border border-hairline bg-graphite px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-ash"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="press inline-flex w-fit items-center gap-1.5 rounded-xs border border-paper/80 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.06em] text-paper hover:bg-paper hover:text-ink md:col-start-2"
                  >
                    Visit {project.title}
                    <Link21 size={12} color="currentColor" aria-hidden="true" />
                  </a>
                )}
                <p className="max-w-[72ch] font-mono text-xs leading-relaxed text-ash md:col-start-2 md:text-sm md:leading-relaxed">
                  {project.work}
                </p>
              </div>
            </details>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
