"use client";

import { useCasablancaClock } from "./use-casablanca-clock";

/* Fixed instrument strip above the header: availability on the left, the
   Casablanca readout in dot-matrix on the right. */
export function StatusBar() {
  const clock = useCasablancaClock();

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-8 border-b border-white/[0.06] bg-ink">
      <div className="mx-auto flex h-full max-w-page items-center justify-between gap-4 px-4 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-fog sm:px-6 md:px-8">
        <span className="flex items-center gap-2.5">
          <span className="relative flex size-1.5" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-paper/60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-1.5 rounded-full bg-paper" />
          </span>
          Available for work
        </span>
        {/* At lg+ the hero carries the large readout, so the strip drops
            its copy of the clock rather than showing the time twice. */}
        <span className="flex items-center gap-3 lg:hidden">
          <span className="hidden sm:inline">Casablanca</span>
          <time
            className="font-display text-sm font-bold tracking-[0.04em] text-paper tabular-nums"
            aria-label={clock ? `Local time in Casablanca ${clock.time}` : undefined}
          >
            {clock?.time ?? "--:--:--"}
          </time>
          <span className="hidden sm:inline">{clock?.offset}</span>
        </span>
        <span className="hidden lg:inline">Casablanca, Morocco</span>
      </div>
    </div>
  );
}
