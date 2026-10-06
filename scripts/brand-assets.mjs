/* Builds the SAAD.K brand files for both portfolios from constants/brand.ts.
   Run: node scripts/brand-assets.mjs   (Node 23.6+ for .ts imports)
   Writes public/brand/*, and app/icon.svg, favicon.ico, apple-icon.png here
   and in ../portfolio-terminal, plus ../portfolio-terminal/app/brand-logo.ts.
   PNGs are rasterised here with zlib only, so there is no image dependency. */
import { mkdirSync, writeFileSync } from "node:fs";
import { deflateSync, crc32 } from "node:zlib";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { layout, dotsPath, logoGeometry, LOGO_TEXT } from "../constants/brand.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const PAPER = "#fafafa";
const INK = "#0b0d0e";
const out = (rel, data) => {
  const p = join(root, rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, data);
  console.log("wrote", rel);
};

/* ---------- wordmark: SAAD.K in its 1px box ---------- */
const C = 10; // cell, in SVG units
export function wordmarkSvg({ color = PAPER, matrix = false, ground = null } = {}) {
  const { dots, cols, rows } = layout("SAAD.K");
  const padX = 3, padY = 2;
  const w = (cols + padX * 2) * C, h = (rows + padY * 2) * C;
  const lit = dotsPath(dots.filter((d) => d.lit), C, padX * C, padY * C, C * 0.4);
  const off = matrix ? dotsPath(dots.filter((d) => !d.lit), C, padX * C, padY * C, C * 0.4) : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="SAAD.K">${
    ground ? `<rect width="${w}" height="${h}" fill="${ground}"/>` : ""
  }<rect x="2" y="2" width="${w - 4}" height="${h - 4}" rx="4" fill="none" stroke="${color}" stroke-width="4"/>${
    off ? `<path d="${off}" fill="${color}" fill-opacity="0.08"/>` : ""
  }<path d="${lit}" fill="${color}"/></svg>`;
}

/* ---------- marks: 11x7 glyphs on a 15-cell ink tile ----------
   LOGO_TEXT (S + caret) is the main logo; "SK" in corner brackets is kept as
   an alternate. */
const N = 15;
function markShapes(px, text = LOGO_TEXT, brackets = false) {
  const c = px / N;
  const { dots } = layout(text);
  const shapes = [{ t: "rect", x: 0, y: 0, w: px, h: px, color: INK, a: 1 }];
  if (brackets) {
  const len = 3 * c, th = Math.max(1, 0.55 * c), i = 0.5 * c;
  for (const [sx, sy] of [[0, 0], [1, 0], [0, 1], [1, 1]]) {
    const x0 = sx ? px - i - len : i, y0 = sy ? px - i - len : i;
    shapes.push({ t: "rect", x: x0, y: sy ? px - i - th : i, w: len, h: th, color: PAPER, a: 0.7 });
    // vertical arm stops short of the horizontal one so the 70% fills don't stack
    shapes.push({ t: "rect", x: sx ? px - i - th : i, y: sy ? y0 : y0 + th, w: th, h: len - th, color: PAPER, a: 0.7 });
  }
  }
  for (const d of dots) {
    const cx = (2 + d.x + 0.5) * c, cy = (4 + d.y + 0.5) * c;
    shapes.push({ t: "circle", cx, cy, r: 0.42 * c, color: PAPER, a: d.lit ? 1 : 0.08 });
  }
  return shapes;
}
/* Favicon sizes get a pixel-snapped drawing: whole-pixel cells, square dots
   (with a 1px gap from 48px up), 1px brackets if framed, no unlit dots. Circles on
   fractional pixels just blur at this size. */
function markShapesSmall(px, text = LOGO_TEXT, brackets = false) {
  const { dots } = layout(text);
  const c = Math.floor(px / 16);
  const dot = c >= 3 ? c - 1 : c, L = 3 * c, e = px - 1;
  const s = [{ t: "rect", x: 0, y: 0, w: px, h: px, color: INK, a: 1 }];
  if (brackets) for (const [x, y, w, h] of [[0, 0, L, 1], [0, 1, 1, L - 1], [px - L, 0, L, 1], [e, 1, 1, L - 1], [0, e, L, 1], [0, px - L, 1, L - 1], [px - L, e, L, 1], [e, px - L, 1, L - 1]])
    s.push({ t: "rect", x, y, w, h, color: PAPER, a: 0.7 });
  // centre the 11x7 glyph block on whole pixels
  const x0 = Math.floor((px - (10 * c + dot)) / 2), y0 = Math.floor((px - (6 * c + dot)) / 2);
  for (const d of dots.filter((d) => d.lit))
    s.push({ t: "rect", x: x0 + d.x * c, y: y0 + d.y * c, w: dot, h: dot, color: PAPER, a: 1 });
  return s;
}
export function markSvg(text = LOGO_TEXT, brackets = false) {
  const px = N * 10;
  const body = markShapes(px, text, brackets)
    .map((s) =>
      s.t === "rect"
        ? `<rect x="${+s.x.toFixed(2)}" y="${+s.y.toFixed(2)}" width="${+s.w.toFixed(2)}" height="${+s.h.toFixed(2)}" fill="${s.color}"${s.a < 1 ? ` fill-opacity="${s.a}"` : ""}${s.color === INK ? ' rx="6"' : ""}/>`
        : `<circle cx="${s.cx}" cy="${s.cy}" r="${+s.r.toFixed(2)}" fill="${s.color}"${s.a < 1 ? ` fill-opacity="${s.a}"` : ""}/>`,
    )
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${px} ${px}" role="img" aria-label="SAAD.K">${body}</svg>`;
}

/* ---------- tiny rasteriser + PNG/ICO encoders ---------- */
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
function raster(px, shapes, ss = 4) {
  const buf = new Float32Array(px * px * 4); // premultiplied rgba, 0..1
  for (let py = 0; py < px; py++)
    for (let qx = 0; qx < px; qx++) {
      let r = 0, g = 0, b = 0, a = 0;
      for (let sy = 0; sy < ss; sy++)
        for (let sx = 0; sx < ss; sx++) {
          const x = qx + (sx + 0.5) / ss, y = py + (sy + 0.5) / ss;
          let cr = 0, cg = 0, cb = 0, ca = 0;
          for (const s of shapes) {
            const hit = s.t === "rect"
              ? x >= s.x && x < s.x + s.w && y >= s.y && y < s.y + s.h
              : (x - s.cx) ** 2 + (y - s.cy) ** 2 <= s.r ** 2;
            if (!hit) continue;
            const [R, G, B] = hex(s.color).map((v) => v / 255);
            cr = R * s.a + cr * (1 - s.a); cg = G * s.a + cg * (1 - s.a);
            cb = B * s.a + cb * (1 - s.a); ca = s.a + ca * (1 - s.a);
          }
          r += cr; g += cg; b += cb; a += ca;
        }
      const n = ss * ss, o = (py * px + qx) * 4;
      buf.set([r / n, g / n, b / n, a / n], o);
    }
  return buf;
}
function png(px, buf) {
  const raw = Buffer.alloc(px * (px * 4 + 1));
  for (let y = 0; y < px; y++) {
    raw[y * (px * 4 + 1)] = 0;
    for (let x = 0; x < px; x++) {
      const o = (y * px + x) * 4, a = buf[o + 3];
      const p = y * (px * 4 + 1) + 1 + x * 4;
      for (let k = 0; k < 3; k++) raw[p + k] = Math.round(a ? (buf[o + k] / a) * 255 : 0);
      raw[p + 3] = Math.round(a * 255);
    }
  }
  const chunk = (type, data) => {
    const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
    const td = Buffer.concat([Buffer.from(type), data]);
    const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td) >>> 0);
    return Buffer.concat([len, td, crc]);
  };
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(px, 0); ihdr.writeUInt32BE(px, 4);
  ihdr.set([8, 6, 0, 0, 0], 8);
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr), chunk("IDAT", deflateSync(raw)), chunk("IEND", Buffer.alloc(0)),
  ]);
}
function ico(images) {
  const head = Buffer.alloc(6 + 16 * images.length);
  head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(images.length, 4);
  let offset = head.length;
  images.forEach(({ px, data }, i) => {
    const e = 6 + i * 16;
    head[e] = px >= 256 ? 0 : px; head[e + 1] = px >= 256 ? 0 : px;
    head.writeUInt16LE(1, e + 4); head.writeUInt16LE(32, e + 6);
    head.writeUInt32LE(data.length, e + 8); head.writeUInt32LE(offset, e + 12);
    offset += data.length;
  });
  return Buffer.concat([head, ...images.map((i) => i.data)]);
}

/* The header logo as a standalone file: S + caret in the 1px paper box. */
function logoSvg(color = PAPER) {
  const { w, h, s, caret } = logoGeometry();
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="SAAD.K"><rect x="2" y="2" width="${w - 4}" height="${h - 4}" rx="4" fill="none" stroke="${color}" stroke-width="4"/><path d="${s}${caret}" fill="${color}"/></svg>`;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const icons = {
    svg: markSvg(),
    ico: ico([16, 32, 48].map((px) => ({ px, data: png(px, raster(px, markShapesSmall(px))) }))),
    apple: png(180, raster(180, markShapes(180), 3)),
  };
  for (const app of ["app", "../portfolio-terminal/app"]) {
    out(`${app}/icon.svg`, icons.svg);
    out(`${app}/favicon.ico`, icons.ico);
    out(`${app}/apple-icon.png`, icons.apple);
  }
  const { w, h, s, caret } = logoGeometry();
  out(
    "../portfolio-terminal/app/brand-logo.ts",
    `/* Generated by Portfolio_v2/scripts/brand-assets.mjs from Portfolio_v2/constants/brand.ts.
   Do not edit by hand. */
export const LOGO = {
  w: ${w},
  h: ${h},
  s: "${s}",
  caret: "${caret}",
};
`,
  );

  out("public/brand/saadk-logo.svg", logoSvg());
  out("public/brand/saadk-logo-ink.svg", logoSvg(INK));
  out("public/brand/saadk-logo-tile.svg", icons.svg);
  out("public/brand/saadk-logo-512.png", png(512, raster(512, markShapes(512), 2)));
  // alternates
  out("public/brand/saadk-wordmark.svg", wordmarkSvg());
  out("public/brand/saadk-wordmark-ink.svg", wordmarkSvg({ color: INK }));
  out("public/brand/saadk-matrix.svg", wordmarkSvg({ matrix: true, ground: INK }));
  out("public/brand/saadk-mark.svg", markSvg("SK", true));
  out("public/brand/saadk-mark-512.png", png(512, raster(512, markShapes(512, "SK", true), 2)));
}
