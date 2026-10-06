import { StackGroups } from "@/constants";

/* Stack as a spreadsheet of layers: shared hairlines, one row per layer,
   no logo tiles. Brand-coloured icons would break the achromatic panel. */
export function StackGrid() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="py-16 md:py-24">
      <h2
        id="stack-title"
        className="mb-8 font-display text-2xl font-bold text-ash md:text-3xl"
      >
        Stack
      </h2>
      <dl className="border-l border-t border-white/[0.06]">
        {StackGroups.map((group) => (
          <div
            key={group.layer}
            className="grid border-b border-r border-white/[0.06] md:grid-cols-[14rem_1fr]"
          >
            <dt className="border-white/[0.06] px-4 pb-1 pt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-fog md:border-r md:px-5 md:py-5">
              {group.layer}
            </dt>
            <dd className="px-4 pb-4 pt-1 md:px-5 md:py-5">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm text-ash">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="before:mr-2 before:text-ash/50 before:content-['▸']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
