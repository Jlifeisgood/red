// Рисование в стиле графического романа: заливка с тенью-полумесяцем и бликом, штриховка, грязь, контур тушью.
// Всё рисуется на canvas в единицах сцены (масштаб PX пикселей на единицу), y — вниз, персонаж смотрит вправо (+x).
import * as THREE from 'three';

export const PX = 4, PAD = 3, INK = '#0b0a0c', PI = Math.PI;

// ---------- цвет ----------
const RGB = h => { const n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; };
const css = c => `rgb(${Math.max(0, Math.min(255, c[0])) | 0},${Math.max(0, Math.min(255, c[1])) | 0},${Math.max(0, Math.min(255, c[2])) | 0})`;
const hex = c => '#' + c.map(v => Math.max(0, Math.min(255, v | 0)).toString(16).padStart(2, '0')).join('');
// k < 1 — темнее; cool — сдвиг в холодное (тени), warm — в тёплое (блики)
export function tone(h, k, cool = 0) { const c = RGB(h); return hex([c[0] * k * (1 - cool * .14), c[1] * k * (1 - cool * .05), c[2] * k * (1 + cool * .2)]); }
export function mixc(a, b, t) { const A = RGB(a), B = RGB(b); return hex(A.map((v, i) => v + (B[i] - v) * t)); }
export const cssOf = h => css(RGB(h));

// ---------- детерминированный шум ----------
let SEED = 1;
export function seed(s) { SEED = (s * 2654435761) >>> 0 || 1; }
export function rnd() { SEED ^= SEED << 13; SEED >>>= 0; SEED ^= SEED >>> 17; SEED ^= SEED << 5; SEED >>>= 0; return SEED / 4294967296; }

// ---------- узоры: штриховка и зерно ----------
let HATCH = null, GRIT = null;
function hatchCanvas() {
  const c = document.createElement('canvas'); c.width = c.height = 12; const x = c.getContext('2d');
  x.strokeStyle = '#000'; x.lineWidth = 1.6; x.beginPath();
  for (let i = -12; i < 24; i += 4) { x.moveTo(i, 12); x.lineTo(i + 12, 0); }
  x.stroke(); return c;
}
function gritCanvas() {
  const n = 96, c = document.createElement('canvas'); c.width = c.height = n; const x = c.getContext('2d'), im = x.createImageData(n, n);
  for (let i = 0; i < n * n; i++) { const v = 150 + Math.random() * 105, o = i * 4; im.data[o] = im.data[o + 1] = im.data[o + 2] = v; im.data[o + 3] = 255; }
  x.putImageData(im, 0, 0);
  for (let i = 0; i < 40; i++) { x.fillStyle = `rgba(60,50,40,${Math.random() * .25})`; x.beginPath(); x.arc(Math.random() * n, Math.random() * n, 1 + Math.random() * 6, 0, 7); x.fill(); }
  return c;
}
function pat(ctx, src, k) { const p = ctx.createPattern(src, 'repeat'); p.setTransform(new DOMMatrix().scale(k)); return p; }

// ---------- примитивы ----------
const BIG = 400;
// Заливка с комикс-тенью: тень снизу-сзади (полумесяц шириной s), блик сверху-спереди (h), середина — базовый цвет.
export function cel(ctx, P, base, o = {}) {
  const s = o.s == null ? 2.4 : o.s, h = o.h == null ? .9 : o.h;
  const dark = o.dark || tone(base, o.dk || .52, 1), lite = o.lite || tone(base, o.lt || 1.3);
  const M = ctx.getTransform();
  ctx.save(); ctx.clip(P);
  ctx.fillStyle = dark; ctx.fillRect(-BIG, -BIG, BIG * 2, BIG * 2);
  if (o.hatch !== false) { HATCH = HATCH || hatchCanvas(); ctx.globalAlpha = o.hatchA || .3; ctx.fillStyle = pat(ctx, HATCH, .32); ctx.fillRect(-BIG, -BIG, BIG * 2, BIG * 2); ctx.globalAlpha = 1; }
  ctx.translate(s, -s * .8); ctx.clip(P); ctx.setTransform(M);
  ctx.fillStyle = lite; ctx.fillRect(-BIG, -BIG, BIG * 2, BIG * 2);
  ctx.translate(-h, h); ctx.clip(P); ctx.setTransform(M);
  ctx.fillStyle = base; ctx.fillRect(-BIG, -BIG, BIG * 2, BIG * 2);
  ctx.restore();
}
// cel только внутри дополнительной области (рукав, штанина, жилет поверх формы P)
export function celIn(ctx, P, region, base, o) { ctx.save(); ctx.clip(region); cel(ctx, P, base, o); ctx.restore(); }
export function grit(ctx, P, a = .28) {
  GRIT = GRIT || gritCanvas();
  ctx.save(); ctx.clip(P); ctx.globalCompositeOperation = 'multiply'; ctx.globalAlpha = a; ctx.fillStyle = pat(ctx, GRIT, .22); ctx.fillRect(-BIG, -BIG, BIG * 2, BIG * 2); ctx.restore();
}
export function ink(ctx, P, w = 1.5, col = INK) { ctx.save(); ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.strokeStyle = col; ctx.lineWidth = w; ctx.stroke(P); ctx.restore(); }
export function line(ctx, pts, w = .9, col = INK, a = 1) {
  ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath();
  ctx.moveTo(pts[0], pts[1]);
  if (pts.length === 6) ctx.quadraticCurveTo(pts[2], pts[3], pts[4], pts[5]);
  else if (pts.length === 8) ctx.bezierCurveTo(pts[2], pts[3], pts[4], pts[5], pts[6], pts[7]);
  else for (let i = 2; i < pts.length; i += 2) ctx.lineTo(pts[i], pts[i + 1]);
  ctx.stroke(); ctx.restore();
}
export function fillP(ctx, P, col, a = 1) { ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = col; ctx.fill(P); ctx.restore(); }
export function path(d) { return new Path2D(d); }
export function ell(x, y, rx, ry, r = 0) { const p = new Path2D(); p.ellipse(x, y, rx, ry, r, 0, PI * 2); return p; }
export function rect(x, y, w, h) { const p = new Path2D(); p.rect(x, y, w, h); return p; }
// Кровь: неровное пятно и потёки вниз, только внутри формы P
export function blood(ctx, P, x, y, r, drips = 2, fresh = false) {
  ctx.save(); ctx.clip(P);
  ctx.fillStyle = fresh ? '#6a0b08' : '#3e0705';
  ctx.beginPath(); for (let a = 0; a < PI * 2; a += .45) { const rr = r * (.6 + rnd() * .6); ctx.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr * .8); } ctx.fill();
  for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.arc(x + (rnd() - .5) * r * 3, y + (rnd() - .5) * r * 2, .3 + rnd() * r * .25, 0, 7); ctx.fill(); }
  for (let i = 0; i < drips; i++) { const dx = x + (rnd() - .5) * r * 1.4, l = r * (1 + rnd() * 2.5); ctx.fillRect(dx - .35, y, .7, l); ctx.beginPath(); ctx.arc(dx, y + l, .6, 0, 7); ctx.fill(); }
  ctx.fillStyle = 'rgba(255,120,100,.25)'; ctx.beginPath(); ctx.arc(x + r * .2, y - r * .25, r * .25, 0, 7); ctx.fill();
  ctx.restore();
}
// Гладкая конечность: верх в (0,0), низ в (0,L); a/b — полуширины, fb/bb — мышечные выпуклости спереди/сзади
export function limb(L, a, b, fb = 0, bb = 0, k1 = .32, k2 = .72) {
  const p = new Path2D();
  p.moveTo(-a, 0);
  p.bezierCurveTo(-a - bb, L * k1, -b - bb * .35, L * k2, -b, L);
  p.arc(0, L, b, PI, 0, true);
  p.bezierCurveTo(b + fb * .35, L * k2, a + fb, L * k1, a, 0);
  p.arc(0, 0, a, 0, PI, true);
  p.closePath(); return p;
}

// ---------- часть тела -> текстура ----------
// bounds: [x0, y0, x1, y1] в единицах; draw(ctx) рисует в локальных координатах (стык — в 0,0)
export function bake(bounds, draw, far = 0) {
  const [x0, y0, x1, y1] = bounds, w = x1 - x0 + PAD * 2, h = y1 - y0 + PAD * 2;
  const c = document.createElement('canvas'); c.width = Math.ceil(w * PX); c.height = Math.ceil(h * PX);
  const ctx = c.getContext('2d');
  ctx.scale(PX, PX); ctx.translate(PAD - x0, PAD - y0);
  draw(ctx);
  if (far) { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalCompositeOperation = 'source-atop'; ctx.fillStyle = `rgba(8,10,18,${far})`; ctx.fillRect(0, 0, c.width, c.height); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  t.minFilter = THREE.LinearMipmapLinearFilter; t.generateMipmaps = true;
  return { tex: t, w, h, cx: (x0 + x1) / 2, cy: (y0 + y1) / 2 };
}
