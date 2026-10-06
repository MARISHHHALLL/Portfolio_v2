import { logoGeometry } from "@/constants/brand";
import { cn } from "@/utils/cn";

/* The main logo, shared with portfolio-terminal: an S at the prompt and the
   terminal's block caret, as lit 5x7 dots in the 1px paper box. Drawn, not
   typeset, so the dots stay pure white on Windows and match the favicon. The
   box stroke is non-scaling so it stays a true hairline at any height. */
const { w, h, s, caret } = logoGeometry();

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={cn("block h-7 w-auto text-paper", className)}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="0.5"
        y="0.5"
        width={w - 1}
        height={h - 1}
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <path d={s} fill="currentColor" />
      <path className="logo-caret" d={caret} fill="currentColor" />
    </svg>
  );
}
