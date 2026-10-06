"use client";

import { useEffect, useRef, useState } from "react";
import { Copy, TickSquare } from "iconsax-react";
import { useCopyToClipboard } from "usehooks-ts";
import { PROFILE } from "@/constants";
import { cn } from "@/utils/cn";

type State = "idle" | "copied" | "failed";

/* Primary action. Copies the address and says so; when the clipboard is
   blocked it falls back to opening the mail client instead of failing
   silently. */
export function CopyEmail({ className }: { className?: string }) {
  const [, copy] = useCopyToClipboard();
  const [state, setState] = useState<State>("idle");
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onClick = async () => {
    const ok = await copy(PROFILE.email);
    setState(ok ? "copied" : "failed");
    if (!ok) window.location.href = `mailto:${PROFILE.email}`;
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2200);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "press inline-flex items-center gap-2.5 rounded-xs border px-3.5 py-2.5 font-mono text-xs uppercase tracking-[0.06em]",
        state === "copied"
          ? "border-paper bg-paper text-ink"
          : "border-paper/80 bg-transparent text-paper hover:bg-paper hover:text-ink",
        className,
      )}
    >
      {state === "copied" ? (
        <TickSquare size={16} color="currentColor" aria-hidden="true" />
      ) : (
        <Copy size={16} color="currentColor" aria-hidden="true" />
      )}
      <span aria-live="polite">
        {state === "copied"
          ? "Copied to clipboard"
          : state === "failed"
            ? "Opening mail…"
            : "Copy email"}
      </span>
    </button>
  );
}
