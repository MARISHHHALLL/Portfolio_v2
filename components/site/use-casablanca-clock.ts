"use client";

import { useEffect, useState } from "react";
import { PROFILE } from "@/constants";

const timeFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone: PROFILE.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

/* "GMT+1" style label for the city's current offset, so the readout stays
   right across Morocco's Ramadan clock changes without hard-coding it. */
const offsetFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone: PROFILE.timeZone,
  timeZoneName: "shortOffset",
});

export type Clock = { time: string; offset: string };

/* Null until hydrated: the server never renders a time, so the server's
   clock and the visitor's can't disagree. */
export function useCasablancaClock(): Clock | null {
  const [clock, setClock] = useState<Clock | null>(null);
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock({
        time: timeFormat.format(now),
        offset:
          offsetFormat.formatToParts(now).find((p) => p.type === "timeZoneName")
            ?.value ?? "",
      });
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return clock;
}
