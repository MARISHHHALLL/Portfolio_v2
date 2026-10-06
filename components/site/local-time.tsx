"use client";

import { useCasablancaClock } from "./use-casablanca-clock";

/* The hero's instrument: Saad's local time as a large dot-matrix readout,
   so a visitor in another time zone sees at a glance when he's at the desk. */
export function LocalTime() {
  const clock = useCasablancaClock();
  return (
    <figure className="bracketed bracketed-lit relative hidden w-fit self-end border border-white/[0.06] px-8 pb-6 pt-7 lg:block">
      <span className="bracket bracket-tl" aria-hidden="true" />
      <span className="bracket bracket-tr" aria-hidden="true" />
      <span className="bracket bracket-br" aria-hidden="true" />
      <span className="bracket bracket-bl" aria-hidden="true" />
      <time className="block font-display text-[clamp(3rem,5.2vw,4.75rem)] font-bold leading-none tracking-[0.02em] text-paper tabular-nums">
        {clock?.time ?? "--:--:--"}
      </time>
      <figcaption className="mt-4 flex justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.14em] text-fog">
        <span>Local time · Casablanca</span>
        <span>{clock?.offset ?? "GMT"}</span>
      </figcaption>
    </figure>
  );
}
