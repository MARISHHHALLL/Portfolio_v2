/* The SAAD.K mark, drawn as a lit dot-matrix rather than set in Doto, so it
   renders identically everywhere (header, favicon, OG) and never fringes under
   Windows subpixel antialiasing. Glyphs are 5x7, the same cell Doto uses.
   Shared by components/site/wordmark.tsx and scripts/brand-assets.mjs, which
   also writes ../portfolio-terminal/app/brand-logo.ts from it. */

export const GLYPHS: Record<string, string[]> = {
  S: [".###.", "#...#", "#....", ".###.", "....#", "#...#", ".###."],
  A: [".###.", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"],
  D: ["####.", "#...#", "#...#", "#...#", "#...#", "#...#", "####."],
  K: ["#...#", "#..#.", "#.#..", "##...", "#.#..", "#..#.", "#...#"],
  ".": [".", ".", ".", ".", ".", ".", "#"],
  // the terminal's block caret, a full lit cell
  "▮": ["#####", "#####", "#####", "#####", "#####", "#####", "#####"],
};

/* The main logo for both portfolios: S at the prompt, caret waiting. */
export const LOGO_TEXT = "S▮";

export type Dot = { x: number; y: number; lit: boolean };

/* Lays text out on the grid with one dark column between glyphs. Returns every
   cell (lit or not) so callers can draw the powered-off matrix too. */
export function layout(text: string) {
  const dots: Dot[] = [];
  let x = 0;
  Array.from(text).forEach((ch, i) => {
    const g = GLYPHS[ch];
    if (i > 0) {
      for (let y = 0; y < 7; y++) dots.push({ x, y, lit: false });
      x += 1;
    }
    g.forEach((row, y) =>
      Array.from(row).forEach((c, dx) => dots.push({ x: x + dx, y, lit: c === "#" })),
    );
    x += g[0].length;
  });
  return { dots, cols: x, rows: 7 };
}

/* The header logo on a 10-unit cell: the S as one path and the caret as
   another, so the caret can blink on its own. 3 cells of side padding and 2
   above and below sit inside the 1px box. */
export function logoGeometry(cell = 10) {
  const { dots, cols, rows } = layout(LOGO_TEXT);
  const px = 3, py = 2, r = cell * 0.4;
  const lit = dots.filter((d) => d.lit);
  return {
    w: (cols + px * 2) * cell,
    h: (rows + py * 2) * cell,
    s: dotsPath(lit.filter((d) => d.x < 5), cell, px * cell, py * cell, r),
    caret: dotsPath(lit.filter((d) => d.x >= 5), cell, px * cell, py * cell, r),
  };
}

/* All circles as one path: cheap to inline, one fill, scales cleanly. */
export function dotsPath(dots: Dot[], cell: number, ox: number, oy: number, r: number) {
  return dots
    .map(({ x, y }) => {
      const cx = ox + x * cell + cell / 2;
      const cy = oy + y * cell + cell / 2;
      return `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
    })
    .join("");
}
