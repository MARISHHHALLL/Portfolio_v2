---
version: 1
slug: "portfolio-v2-app-page-tsx"
primary_target: "Portfolio_v2/app/page.tsx"
related_targets: ["Portfolio_v2/app/layout.tsx"]
---

# Surface: Portfolio_v2 home

Scope: `Portfolio_v2/app/page.tsx` and the shared layout. Visitor mode: **Experience**. Audience: recruiters scanning, developers exploring. Job: know who Saad is, see shipped work with honest status, reach him. Constraints: Next 14 / Tailwind 3, no invented claims (see PRODUCT.md open items). Build path: code-led (no image generation in this environment).

## Direction contract

THESIS: A developer's instrument panel, lit rather than painted: one long dark column where the work is a status ledger, not a grid of tiles. It refuses the category default of a centred avatar, a gradient banner, and rows of coloured logo cards.

OWN-WORLD: The DESIGN.md "Lit Instrument Panel" world: ink #0b0d0e, graphite #1a1b1c, 1px #262626 hairlines, a paper-white accent only. Doto dot-matrix for headings and the wordmark, Geist Mono for everything else. 1–2px corners, hatched and dot-grid section bands, corner brackets drawn on hover, shell-path nav (`~/work`), and `▸` bullets.

STORY: The visitor sees the name as a lit readout with live Casablanca time and availability. They scan the shipped projects as a ledger with LIVE / BUILD / SHELVED flags, scan the stack grouped by layer, then copy the email or open LinkedIn.

FIRST VIEWPORT: A fixed 32px status strip on top (availability dot · CASABLANCA hh:mm:ss live clock · GMT offset). Header row: the boxed Doto wordmark SAAD.K on the left and the `~/work ~/stack ~/about ~/contact` nav on the right. The hero sits left-aligned at about 30% from the top: the name in Doto 700 uppercase at clamp(2.75rem, 8vw, 6rem), a one-line role and location in tracked mono, a 2–3 line mono intro, then the primary action "copy email" (a ghost button that confirms "copied") next to GitHub and LinkedIn chips.

FORM: Brief-pinned direction (the user named stormix.co; the roll is skipped by rule). Signature interaction: the live dot-matrix clock plus bracket-reveal on ledger rows. Seed key: none (pinned).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
