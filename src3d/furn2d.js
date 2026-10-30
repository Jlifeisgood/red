// Мебель этажей: каждая вещь — отдельный рисунок в двух видах (закрыта / обыскана: дверцы и ящики открыты, вещи разбросаны).
// Координаты: (0,0) — левый верхний угол габарита w×h, пол — y = h. Рисунок может выходить за габарит на M единиц (открытые дверцы, тень).
import { tone, seed, rnd } from './ink.js';

export const M = 16;                                          // запас холста вокруг габарита
const T = (c, k, cool = 0) => tone(c, k, cool);
const OL = 'rgba(14,11,12,.88)';

// ---------- палитры зон ----------
export const PAL = {
  z0: { wood: '#6b5236', dark: '#3f3328', metal: '#5f686d', paint: '#4d6a4c', fabric: '#5c5a48', accent: '#c98a2a', paper: '#cfc6a8' },
  z1: { wood: '#7d5636', dark: '#4a3424', metal: '#8a9096', paint: '#6f8a7a', fabric: '#8a3d3a', accent: '#3e5f8a', paper: '#e2d8c0' },
  z2: { wood: '#94846c', dark: '#4e4a44', metal: '#7d868d', paint: '#55606c', fabric: '#3f4c62', accent: '#2f6aa8', paper: '#e8e6dc' },
  z3: { wood: '#a9b2b0', dark: '#59656a', metal: '#a9b1b5', paint: '#d9dedd', fabric: '#4f7f86', accent: '#2f9a8a', paper: '#eef0ea' },
  z4: { wood: '#4a2c24', dark: '#2a1814', metal: '#b9a06a', paint: '#2c2a36', fabric: '#6a2238', accent: '#c9a24a', paper: '#ece2c8' },
  base: { wood: '#7d5a3a', dark: '#4a3424', metal: '#6c7276', paint: '#556048', fabric: '#4f5c3a', accent: '#c98a2a', paper: '#d8ccaa' },
};

// ---------- кисти ----------
function rr(c, x, y, w, h, r) { r = Math.min(r, w / 2, h / 2); c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
function gv(c, y0, y1, a, b) { const g = c.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, a); g.addColorStop(1, b); return g; }
function gh(c, x0, x1, a, b) { const g = c.createLinearGradient(x0, 0, x1, 0); g.addColorStop(0, a); g.addColorStop(1, b); return g; }
function R(c, x, y, w, h, col) { c.fillStyle = col; c.fillRect(x, y, w, h); }
function L(c, pts, col, w = 1) { c.strokeStyle = col; c.lineWidth = w; c.lineCap = 'round'; c.lineJoin = 'round'; c.beginPath(); c.moveTo(pts[0], pts[1]); for (let i = 2; i < pts.length; i += 2) c.lineTo(pts[i], pts[i + 1]); c.stroke(); }
function E(c, x, y, rx, ry, col) { c.fillStyle = col; c.beginPath(); c.ellipse(x, y, Math.max(.1, rx), Math.max(.1, ry), 0, 0, 7); c.fill(); }
// объём: градиент сверху вниз, затенённый правый край, блик по верху и левому краю, контур
function vol(c, x, y, w, h, col, o = {}) {
  const r = o.r || 0;
  rr(c, x, y, w, h, r); c.fillStyle = gv(c, y, y + h, T(col, 1.1), T(col, .8)); c.fill();
  c.save(); rr(c, x, y, w, h, r); c.clip();
  const sw = o.side == null ? Math.min(7, Math.max(1.5, w * .09)) : o.side;
  if (sw) { c.fillStyle = gh(c, x + w - sw, x + w, T(col, .74, 1), T(col, .6, 1)); c.fillRect(x + w - sw, y, sw, h); }
  R(c, x, y, w, 1.3, T(col, 1.32)); R(c, x, y, 1, h, T(col, 1.16));
  if (o.ao !== false) { c.fillStyle = gv(c, y + h - Math.min(10, h * .3), y + h, 'rgba(0,0,0,0)', 'rgba(0,0,0,.28)'); c.fillRect(x, y + h - Math.min(10, h * .3), w, Math.min(10, h * .3)); }
  c.restore();
  if (o.line !== false) { rr(c, x + .3, y + .3, w - .6, h - .6, r); c.strokeStyle = OL; c.lineWidth = o.lw || .9; c.stroke(); }
}
// утопленная филёнка
function inset(c, x, y, w, h, col, k = .9) {
  R(c, x, y, w, h, T(col, k)); R(c, x, y, w, 1, T(col, .62, 1)); R(c, x, y, 1, h, T(col, .7, 1)); R(c, x, y + h - 1, w, 1, T(col, 1.22)); R(c, x + w - 1, y, 1, h, T(col, 1.12));
}
function knob(c, x, y, r = 1.7, col = '#d3b26c') { const g = c.createRadialGradient(x - r * .4, y - r * .4, 0, x, y, r); g.addColorStop(0, T(col, 1.45)); g.addColorStop(1, T(col, .7)); c.fillStyle = g; c.beginPath(); c.arc(x, y, r, 0, 7); c.fill(); c.strokeStyle = OL; c.lineWidth = .5; c.stroke(); }
function pull(c, x, y, len, col = '#c7cbd0', vert = false) { if (vert) { vol(c, x - 1, y, 2.2, len, col, { side: .8, ao: false, lw: .6 }); } else vol(c, x, y - 1, len, 2.2, col, { side: 0, ao: false, lw: .6 }); }
function grain(c, x, y, w, h, col, n = 6) { c.save(); c.beginPath(); c.rect(x, y, w, h); c.clip(); c.strokeStyle = T(col, .82); c.globalAlpha = .55; c.lineWidth = .45; for (let i = 0; i < n; i++) { const gx = x + rnd() * w; c.beginPath(); c.moveTo(gx, y); c.bezierCurveTo(gx + (rnd() - .5) * 6, y + h * .3, gx + (rnd() - .5) * 6, y + h * .7, gx + (rnd() - .5) * 4, y + h); c.stroke(); } c.restore(); }
function dirt(c, x, y, w, h, a = .18) { c.save(); c.beginPath(); c.rect(x, y, w, h); c.clip(); for (let i = 0; i < 5; i++) { c.fillStyle = `rgba(40,28,18,${a * rnd()})`; c.beginPath(); c.ellipse(x + rnd() * w, y + rnd() * h, 3 + rnd() * w * .25, 2 + rnd() * h * .15, rnd() * 3, 0, 7); c.fill(); } c.restore(); }
function scratches(c, x, y, w, h) { c.save(); c.strokeStyle = 'rgba(255,240,220,.18)'; c.lineWidth = .4; for (let i = 0; i < 4; i++) { const sx = x + rnd() * w, sy = y + rnd() * h; c.beginPath(); c.moveTo(sx, sy); c.lineTo(sx + (rnd() - .3) * 8, sy + rnd() * 5); c.stroke(); } c.restore(); }
// мягкая тень на полу под предметом
export function contact(c, x0, x1, y, a = .5) { const cx = (x0 + x1) / 2, rx = (x1 - x0) / 2 + 6; const g = c.createRadialGradient(cx, y, 0, cx, y, rx); g.addColorStop(0, `rgba(0,0,0,${a})`); g.addColorStop(.7, `rgba(0,0,0,${a * .5})`); g.addColorStop(1, 'rgba(0,0,0,0)'); c.save(); c.translate(cx, y); c.scale(1, .12); c.translate(-cx, -y); c.fillStyle = g; c.fillRect(cx - rx, y - rx, rx * 2, rx * 2); c.restore(); }
// тёмное нутро открытого шкафа
function cavity(c, x, y, w, h) { R(c, x, y, w, h, '#0f0d0c'); c.fillStyle = gv(c, y, y + h, 'rgba(0,0,0,.6)', 'rgba(40,30,22,.35)'); c.fillRect(x, y, w, h); R(c, x, y, w, 2, 'rgba(0,0,0,.7)'); R(c, x, y, 2, h, 'rgba(0,0,0,.5)'); }
// открытая дверца в перспективе: узкая трапеция сбоку
function swingDoor(c, hx, y, h, dir, wid, col) {
  c.beginPath(); c.moveTo(hx, y); c.lineTo(hx + dir * wid, y - 3); c.lineTo(hx + dir * wid, y + h + 3); c.lineTo(hx, y + h); c.closePath();
  c.fillStyle = gh(c, hx, hx + dir * wid, T(col, .95), T(col, .7)); c.fill(); c.strokeStyle = OL; c.lineWidth = .8; c.stroke();
  L(c, [hx + dir * wid * .55, y + h * .45, hx + dir * wid * .55, y + h * .55], T(col, 1.4), 1);
}
function books(c, x, y, w, base, gaps = .1, tall = 1) {
  const cols = ['#7a3a2a', '#3a4a6a', '#6a6a3a', '#5a2a3a', '#8a7a5a', '#2a4a3a', '#6a4a2a', '#a89060', '#2e3a4e'];
  let bx = x;
  while (bx < x + w - 3) {
    const bw = 2.2 + rnd() * 3, bh = (11 + rnd() * 7) * tall;
    if (rnd() < gaps) { bx += bw + 1; continue; }
    if (bx + bw > x + w) break;
    const col = cols[(rnd() * cols.length) | 0];
    if (rnd() < .08 && bx + bh < x + w) { vol(c, bx, base - bw, bh, bw, col, { side: 0, ao: false, lw: .4 }); bx += bh + .5; continue; }
    vol(c, bx, base - bh, bw, bh, col, { side: .6, ao: false, lw: .4 }); R(c, bx + .5, base - bh + 3, bw - 1, .8, T(col, 1.5)); bx += bw + .3;
  }
}
function bottle(c, x, base, h, col) { const w = h * .32; rr(c, x, base - h * .7, w, h * .7, 1.2); c.fillStyle = gh(c, x, x + w, T(col, 1.3), T(col, .7)); c.fill(); R(c, x + w * .3, base - h, w * .4, h * .32, T(col, .9)); R(c, x + w * .18, base - h * .62, w * .2, h * .4, 'rgba(255,255,255,.25)'); c.strokeStyle = OL; c.lineWidth = .4; rr(c, x, base - h * .7, w, h * .7, 1.2); c.stroke(); }
function can(c, x, base, s, col) { vol(c, x, base - s * 1.3, s, s * 1.3, '#a8adb2', { side: .8, ao: false, lw: .4 }); R(c, x, base - s * 1.05, s, s * .7, col); R(c, x, base - s * 1.05, s * .25, s * .7, T(col, 1.3)); }
function box(c, x, base, w, h, col, open) { vol(c, x, base - h, w, h, col, { side: 1.2, lw: .6 }); R(c, x + w * .42, base - h, w * .16, h, T(col, 1.18)); if (open) { c.fillStyle = T(col, .9); c.beginPath(); c.moveTo(x, base - h); c.lineTo(x - 4, base - h - 5); c.lineTo(x + w * .45, base - h - 3); c.closePath(); c.fill(); c.strokeStyle = OL; c.lineWidth = .5; c.stroke(); R(c, x + 1, base - h, w - 2, 2, '#1a1410'); } }
function paper(c, x, y, a, col = '#e8e2d0') { c.save(); c.translate(x, y); c.rotate(a); R(c, -4, -.6, 8, 1.2, col); R(c, -4, .4, 8, .3, 'rgba(0,0,0,.25)'); c.restore(); }
function cloth(c, x, y, w, h, col) { c.beginPath(); c.moveTo(x, y); c.bezierCurveTo(x + w * .3, y - 2, x + w * .7, y + 2, x + w, y); c.lineTo(x + w + 1, y + h); c.bezierCurveTo(x + w * .6, y + h + 2, x + w * .3, y + h - 2, x - 1, y + h); c.closePath(); c.fillStyle = gv(c, y, y + h, T(col, 1.1), T(col, .75)); c.fill(); c.strokeStyle = OL; c.lineWidth = .6; c.stroke(); }

// ---------- предметы ----------
const D = {};
D.wardrobe = (c, w, h, open, p) => {
  const wd = p.wood, top = 8;
  vol(c, -2, 0, w + 4, top, T(wd, .95), { side: 2 });
  if (open) {
    vol(c, 0, top, w, h - top - 6, wd, { side: 4 }); cavity(c, 4, top + 3, w - 8, h - top - 14);
    L(c, [5, top + 12, w - 5, top + 12], '#8a8a8a', 1.2);
    const hc = ['#4a5a7a', '#7a3a3a', '#5a5a4a'];
    for (let i = 0; i < 3; i++) { if (rnd() < .3) continue; const hx = 12 + i * 15; L(c, [hx, top + 12, hx, top + 15], '#9a9a9a', .6); cloth(c, hx - 6, top + 15, 12, 40 + rnd() * 20, hc[i]); }
    R(c, 4, h - 30, w - 8, 2, T(wd, .7)); box(c, 8, h - 10, 14, 9, '#8a7050', true);
    swingDoor(c, 0, top + 1, h - top - 8, -1, 12, wd); swingDoor(c, w, top + 1, h - top - 8, 1, 12, wd);
  } else {
    vol(c, 0, top, w, h - top - 6, wd, { side: 5 }); grain(c, 0, top, w, h - top - 6, wd, 9);
    inset(c, 5, top + 6, w / 2 - 8, h - top - 24, wd); inset(c, w / 2 + 3, top + 6, w / 2 - 8, h - top - 24, wd);
    L(c, [w / 2, top + 2, w / 2, h - 8], T(wd, .45), .9);
    knob(c, w / 2 - 4, h * .52); knob(c, w / 2 + 4, h * .52);
    dirt(c, 0, top, w, h - top, .12); scratches(c, 0, top, w, h);
  }
  R(c, 2, h - 6, 5, 6, T(wd, .55)); R(c, w - 7, h - 6, 5, 6, T(wd, .55));
};
D.dresser = (c, w, h, open, p) => {
  const wd = p.wood, by = 18;
  // на комоде: рамка с фото и ваза
  vol(c, 8, by - 14, 11, 14, '#b08a3a', { side: 1, lw: .6 }); R(c, 10, by - 12, 7, 10, '#6a7a8a'); E(c, 13.5, by - 8, 2, 2.5, '#d8c0a0');
  rr(c, w - 20, by - 13, 8, 13, 3); c.fillStyle = gh(c, w - 20, w - 12, '#7aa0b8', '#3a5a6a'); c.fill(); c.strokeStyle = OL; c.lineWidth = .5; c.stroke();
  vol(c, -2, by, w + 4, 4, T(wd, 1.05), { side: 2 });
  vol(c, 0, by + 4, w, h - by - 10, wd, { side: 5 }); grain(c, 0, by + 4, w, h - by - 10, wd, 8);
  const dh = (h - by - 14) / 3;
  for (let i = 0; i < 3; i++) {
    const y = by + 6 + i * dh, out = open && i < 2;
    if (out) {
      cavity(c, 3, y, w - 6, dh - 2);
      const oy = y + 3 + i;
      vol(c, 1, oy, w - 2, dh - 1, T(wd, 1.05), { side: 3 }); pull(c, w / 2 - 8, oy + dh / 2, 16, '#c7b07a');
      if (i === 0) { cloth(c, 10, oy - 3, 18, 4, '#d8d0c0'); L(c, [w - 16, oy, w - 14, oy + 9], '#7a3a3a', 2.4); }
    } else { inset(c, 3, y, w - 6, dh - 2, wd, .95); pull(c, w / 2 - 8, y + dh / 2 - 1, 16, '#c7b07a'); }
  }
  R(c, 2, h - 6, 6, 6, T(wd, .5)); R(c, w - 8, h - 6, 6, 6, T(wd, .5));
};
D.nightstand = (c, w, h, open, p) => {
  const wd = p.wood, by = 10;
  vol(c, 5, by - 6, 9, 6, '#3a3a3a', { side: 1, lw: .5 }); R(c, 6.5, by - 5, 6, 3, open ? '#2a1a1a' : '#ff6a3a');
  vol(c, -1, by, w + 2, 3, T(wd, 1.05), { side: 1 });
  vol(c, 0, by + 3, w, h - by - 7, wd, { side: 3 });
  if (open) { cavity(c, 3, by + 6, w - 6, 9); vol(c, 2, by + 10, w - 4, 9, T(wd, 1.05), { side: 2 }); pull(c, w / 2 - 5, by + 14, 10); paper(c, w / 2, by + 9, .2); }
  else { inset(c, 3, by + 6, w - 6, 9, wd, .95); pull(c, w / 2 - 5, by + 10, 10); }
  cavity(c, 3, by + 18, w - 6, h - by - 25); R(c, 4, h - 10, w - 8, 2, T(wd, .8));
  if (!open) books(c, 5, h - 10, w - 12, 0, 1, .6);
  R(c, 1, h - 4, 4, 4, T(wd, .5)); R(c, w - 5, h - 4, 4, 4, T(wd, .5));
};
D.bookshelf = (c, w, h, open, p) => {
  const wd = T(p.wood, .85);
  vol(c, 0, 0, w, h - 3, wd, { side: 4 }); R(c, 4, 4, w - 8, h - 14, T(wd, .45));
  const n = 5, sh = (h - 16) / n;
  for (let s = 0; s < n; s++) {
    const y = 4 + (s + 1) * sh;
    books(c, 6, y - 1, w - 12, 0, open ? .55 : .1);
    vol(c, 3, y - 1, w - 6, 3, T(wd, 1.15), { side: 0, ao: false, lw: .5 });
  }
  R(c, 0, h - 3, w, 3, T(wd, .5));
  if (open) { for (let i = 0; i < 4; i++) { const bx = -8 + rnd() * (w + 10), col = ['#7a3a2a', '#3a4a6a', '#6a6a3a', '#8a7a5a'][i]; c.save(); c.translate(bx, h - 1.6); c.rotate((rnd() - .5) * .5); vol(c, -6, -2.6, 12, 3, col, { side: 0, ao: false, lw: .4 }); c.restore(); } }
};
D.fridge = (c, w, h, open, p) => {
  const col = '#d9dbd5';
  vol(c, 0, 0, w, h - 4, col, { r: 6, side: 6 });
  L(c, [2, 34, w - 2, 34], '#8e908a', 1);
  pull(c, w - 7, 12, 14, '#9a9c96', true);
  if (open) {
    rr(c, 3, 37, w - 6, h - 46, 2); c.fillStyle = gv(c, 37, h - 9, '#fff8d8', '#d8cfa0'); c.fill();
    for (const y of [56, 76]) R(c, 4, y, w - 8, 1.5, '#b8b4a0');
    if (rnd() < .6) bottle(c, 8, 56, 14, '#5a8a3a');
    if (rnd() < .5) can(c, 22, 76, 6, '#a83a2a');
    E(c, w / 2, 40, 10, 2, 'rgba(255,250,210,.7)');
    swingDoor(c, w, 36, h - 44, 1, 14, col);
  } else {
    pull(c, w - 7, 42, 22, '#9a9c96', true);
    R(c, 8, 50, 9, 9, '#e8c84a'); R(c, 10, 64, 7, 8, '#7ab0d8'); R(c, 8, 47, 9, 2, '#c03a2a');
    dirt(c, 0, 0, w, h, .1);
  }
  R(c, 4, h - 4, 6, 4, '#3a3a3a'); R(c, w - 10, h - 4, 6, 4, '#3a3a3a');
};
D.kitchen = (c, w, h, open, p) => {
  const wd = p.paint === '#6f8a7a' ? '#8aa08a' : T(p.wood, 1.1), top = h - 46;
  // чайник и кастрюля
  vol(c, 10, top - 16, 16, 16, '#b8bcc0', { r: 5, side: 3 }); L(c, [12, top - 16, 18, top - 22, 24, top - 16], '#3a3a3a', 1.4); R(c, 25, top - 12, 5, 2, '#b8bcc0');
  vol(c, 52, top - 11, 20, 11, '#a83a2a', { r: 2, side: 3 }); R(c, 48, top - 9, 4, 2, '#2a2a2a'); R(c, 72, top - 9, 4, 2, '#2a2a2a');
  vol(c, -2, top, w + 4, 4, '#3a3634', { side: 2 }); R(c, -2, top, w + 4, 1, '#6a6460');
  vol(c, 0, top + 4, w, 42 - 4, wd, { side: 4 });
  R(c, 0, top + 4, w, 8, T(wd, .92)); for (let i = 0; i < 3; i++) pull(c, 8 + i * 28, top + 8, 12, '#c7cbd0');
  const dw = (w - 9) / 3;
  for (let i = 0; i < 3; i++) {
    const x = 3 + i * (dw + 1.5);
    if (open && i !== 1) { cavity(c, x, top + 14, dw, 24); vol(c, x + 4, top + 26, 12, 12, '#7a7e82', { r: 2, side: 2 }); swingDoor(c, i === 0 ? x : x + dw, top + 14, 24, i === 0 ? -1 : 1, 8, wd); }
    else { inset(c, x, top + 14, dw, 24, wd, .96); pull(c, x + dw / 2 - 1, top + 19, 8, '#c7cbd0', true); }
  }
  R(c, 0, h - 4, w, 4, '#1f1c1a');
};
D.bed = (c, w, h, open, p) => {
  const wd = p.wood, fab = p.fabric;
  vol(c, 0, 0, 10, h - 2, wd, { r: 3, side: 3 }); inset(c, 2.5, 6, 5, h - 22, wd);
  vol(c, w - 7, h - 26, 7, 24, wd, { r: 2, side: 2 });
  vol(c, 6, h - 18, w - 10, 10, T(wd, .9), { side: 0 });
  vol(c, 8, h - 25, w - 15, 9, '#e6e0d0', { r: 3, side: 0 });
  if (open) {
    rr(c, 12, h - 31, 22, 9, 4); c.fillStyle = '#efe9dc'; c.fill(); c.strokeStyle = OL; c.lineWidth = .6; c.stroke();
    cloth(c, w - 40, h - 26, 34, 12, fab); c.beginPath(); c.moveTo(w - 40, h - 26); c.quadraticCurveTo(w - 34, h - 36, w - 22, h - 30); c.lineTo(w - 6, h - 26); c.fillStyle = T(fab, 1.1); c.fill();
    E(c, 50, h - 23, 6, 1.4, 'rgba(120,90,50,.35)'); paper(c, w - 2, h - 1, .1, '#d8d0c0');
  } else {
    rr(c, 12, h - 33, 24, 10, 4); c.fillStyle = gv(c, h - 33, h - 23, '#f4efe4', '#cfc8b8'); c.fill(); c.strokeStyle = OL; c.lineWidth = .6; c.stroke();
    cloth(c, 34, h - 30, w - 42, 14, fab); L(c, [40, h - 24, w - 12, h - 26], T(fab, 1.25), .8); L(c, [44, h - 19, w - 14, h - 20], T(fab, .8), .6);
  }
  R(c, 8, h - 8, 4, 8, T(wd, .5)); R(c, w - 8, h - 8, 4, 8, T(wd, .5));
};
D.sofa = (c, w, h, open, p) => {
  const f = p.fabric;
  vol(c, 6, h - 46, w - 12, 26, T(f, .92), { r: 6, side: 3 });
  vol(c, 4, h - 24, w - 8, 14, f, { r: 3, side: 3 });
  vol(c, 0, h - 34, 13, 26, T(f, .86), { r: 5, side: 2 }); vol(c, w - 13, h - 34, 13, 26, T(f, .8), { r: 5, side: 2 });
  if (open) {
    cavity(c, 15, h - 26, w - 30, 4);
    c.save(); c.translate(w * .3, h - 4); c.rotate(-.15); vol(c, -14, -7, 28, 7, T(f, 1.05), { r: 3, side: 2 }); c.restore();
    L(c, [w * .62, h - 20, w * .62 + 6, h - 14, w * .62 + 2, h - 12], '#e8dcc0', 1.4); E(c, w * .66, h - 16, 4, 2, '#d8ccb0');
  } else {
    for (let i = 0; i < 2; i++) vol(c, 15 + i * (w - 30) / 2, h - 30, (w - 30) / 2 - 1, 8, T(f, 1.06), { r: 3, side: 2 });
    rr(c, 18, h - 42, 15, 12, 4); c.fillStyle = '#d8ccb0'; c.fill(); c.strokeStyle = OL; c.lineWidth = .5; c.stroke();
  }
  R(c, 6, h - 10, 4, 10, '#1a1210'); R(c, w - 10, h - 10, 4, 10, '#1a1210');
};
D.tvstand = (c, w, h, open, p) => {
  const wd = T(p.wood, .9), sy = h - 32;
  vol(c, 12, sy - 40, 46, 38, '#2a2826', { r: 4, side: 6 }); rr(c, 16, sy - 36, 32, 28, 5); c.fillStyle = gv(c, sy - 36, sy - 8, '#3a4a50', '#1a2428'); c.fill();
  R(c, 19, sy - 33, 10, 3, 'rgba(255,255,255,.14)'); for (let i = 0; i < 3; i++) knob(c, 52, sy - 30 + i * 8, 1.4, '#7a7a7a');
  L(c, [35, sy - 40, 26, sy - 54], '#6a6a6a', .8); L(c, [35, sy - 40, 46, sy - 52], '#6a6a6a', .8); vol(c, 22, sy - 2, 26, 2, '#1a1816', { side: 0 });
  vol(c, 0, sy, w, h - sy - 3, wd, { side: 4 });
  if (open) { cavity(c, 4, sy + 4, w - 8, h - sy - 12); for (let i = 0; i < 4; i++) if (rnd() < .6) vol(c, 8 + i * 9, h - 22, 7, 13, '#1c1c1c', { side: 1, lw: .4 }); swingDoor(c, 4, sy + 4, h - sy - 12, -1, 8, wd); }
  else { inset(c, 4, sy + 4, w / 2 - 6, h - sy - 12, wd); inset(c, w / 2 + 2, sy + 4, w / 2 - 6, h - sy - 12, wd); knob(c, w / 2 - 4, sy + 14, 1.4); knob(c, w / 2 + 4, sy + 14, 1.4); }
  R(c, 0, h - 3, w, 3, T(wd, .45));
};
D.desk = (c, w, h, open, p) => {
  const wd = p.wood, ty = h - 34;
  // лампа и книги
  L(c, [12, ty, 12, ty - 18, 22, ty - 24], '#2e3a30', 1.4); c.fillStyle = '#2e5a3a'; c.beginPath(); c.moveTo(18, ty - 28); c.lineTo(30, ty - 24); c.lineTo(26, ty - 18); c.closePath(); c.fill(); E(c, 12, ty - 1, 5, 1.4, '#2e3a30');
  books(c, 40, ty, 18, 0, 0, .7);
  vol(c, -2, ty, w + 4, 4, T(wd, 1.05), { side: 2 });
  R(c, 3, ty + 4, 3, h - ty - 4, T(wd, .7));
  vol(c, w - 30, ty + 4, 28, h - ty - 4, wd, { side: 3 }); grain(c, w - 30, ty + 4, 28, h - ty - 4, wd, 4);
  for (let i = 0; i < 2; i++) {
    const y = ty + 7 + i * 13;
    if (open && i === 0) { cavity(c, w - 27, y, 22, 11); vol(c, w - 31, y + 3, 24, 11, T(wd, 1.05), { side: 2 }); pull(c, w - 23, y + 8, 8, '#c7b07a'); paper(c, w - 20, y + 2, -.3); paper(c, w - 40, h - 1, .05); }
    else { inset(c, w - 27, y, 22, 11, wd); pull(c, w - 20, y + 5, 8, '#c7b07a'); }
  }
};
D.officedesk = (c, w, h, open, p) => {
  const top = p.wood, ty = h - 32;
  vol(c, 22, ty - 26, 32, 22, '#1d2024', { r: 2, side: 3 }); R(c, 25, ty - 23, 26, 16, open ? '#0a1014' : '#24404a'); if (!open) R(c, 27, ty - 21, 9, 2, 'rgba(160,220,255,.3)');
  R(c, 35, ty - 4, 6, 4, '#2a2a2a'); vol(c, 56, ty - 3, 18, 3, '#d8d4c8', { side: 0, lw: .4 });
  if (!open) { vol(c, 6, ty - 8, 12, 8, '#e8e2d0', { side: 0, lw: .4 }); vol(c, 7, ty - 11, 12, 3, '#e8e2d0', { side: 0, lw: .4 }); }
  vol(c, -2, ty, w + 4, 3, top, { side: 1 });
  R(c, 2, ty + 3, 3, h - ty - 3, '#4a4a4a');
  vol(c, w - 26, ty + 3, 24, h - ty - 3, T(p.metal, .95), { side: 3 });
  for (let i = 0; i < 3; i++) {
    const y = ty + 6 + i * 8.5;
    if (open && i === 1) { cavity(c, w - 24, y, 20, 7); vol(c, w - 28, y + 2, 22, 7, T(p.metal, 1.05), { side: 2 }); pull(c, w - 20, y + 5, 7); }
    else { inset(c, w - 24, y, 20, 7, p.metal); pull(c, w - 17, y + 3.5, 7); }
  }
  if (open) for (let i = 0; i < 4; i++) paper(c, 10 + rnd() * 40, h - .8, (rnd() - .5) * .3);
};
D.filing = (c, w, h, open, p) => {
  const m = p.metal;
  vol(c, 0, 0, w, h, m, { side: 3 });
  const dh = (h - 6) / 4;
  for (let i = 0; i < 4; i++) {
    const y = 3 + i * dh;
    if (open && i === 1) { cavity(c, 2, y, w - 4, dh - 1.5); for (let k = 0; k < 4; k++) R(c, 5 + k * 6, y - 4 - rnd() * 3, 5, 8, ['#e0c070', '#c8d0d8', '#e0c070', '#d8b0a0'][k]); vol(c, 0, y + 4, w, dh - 1.5, T(m, 1.05), { side: 2 }); pull(c, w / 2 - 4, y + dh / 2 + 3, 8, '#d0d4d8'); }
    else { inset(c, 2, y, w - 4, dh - 1.5, m); R(c, w / 2 - 5, y + 3, 10, 3.5, '#e8e4d8'); pull(c, w / 2 - 4, y + dh / 2 + 1, 8, '#d0d4d8'); }
  }
  dirt(c, 0, 0, w, h, .12);
};
D.locker = (c, w, h, open, p) => {
  const m = p.paint === '#d9dedd' ? '#8aa8a8' : T(p.paint, 1.05);
  vol(c, 0, 0, w, h - 3, m, { side: 3 });
  if (open) {
    cavity(c, 3, 4, w - 6, h - 12); R(c, 4, 22, w - 8, 1.5, '#5a5a5a'); L(c, [8, 10, w - 8, 10], '#8a8a8a', 1);
    if (rnd() < .6) cloth(c, 8, 12, 20, 34, '#3a4a3a'); vol(c, 7, h - 20, 22, 10, '#3a3028', { r: 3, side: 2 });
    swingDoor(c, w, 4, h - 12, 1, 12, m);
  } else {
    inset(c, 3, 4, w - 6, h - 12, m, .97);
    for (let i = 0; i < 5; i++) R(c, 9, 10 + i * 3.4, w - 18, 1.6, T(m, .55));
    for (let i = 0; i < 5; i++) R(c, 9, h - 30 + i * 3.4, w - 18, 1.6, T(m, .55));
    vol(c, w - 11, h * .48, 4, 10, '#c7cbd0', { side: 1, lw: .5 }); E(c, w - 9, h * .48 + 14, 2.2, 2.2, '#b08a3a');
    dirt(c, 0, 0, w, h, .14); scratches(c, 0, 0, w, h);
  }
};
D.medcab = (c, w, h, open, p) => {
  const col = '#e2e6e4';
  vol(c, 0, 0, w, h - 3, col, { side: 3 });
  R(c, w / 2 - 6, 5, 12, 4, '#c0302a'); R(c, w / 2 - 2, 1, 4, 12, '#c0302a');
  const gy = 16, gh2 = h * .48;
  cavity(c, 4, gy, w - 8, gh2); R(c, 4, gy, w - 8, gh2, 'rgba(120,150,150,.25)');
  for (let s = 0; s < 2; s++) { const y = gy + (s + 1) * gh2 / 2; R(c, 4, y - 1, w - 8, 1.5, '#e8eeee'); for (let i = 0; i < 4; i++) if (!open || rnd() < .3) bottle(c, 7 + i * 9, y - 1, 12, ['#8a5a2a', '#e8e8e0', '#3a6aaa', '#5aa05a'][(s + i) % 4]); }
  if (open) swingDoor(c, 4, gy, gh2, -1, 11, '#cfe0e0'); else { R(c, 4, gy, w - 8, gh2, 'rgba(200,230,230,.18)'); L(c, [8, gy + 4, 20, gy + 26], 'rgba(255,255,255,.4)', .8); L(c, [w / 2, gy, w / 2, gy + gh2], '#b0b8b8', 1); }
  inset(c, 4, gy + gh2 + 4, w - 8, h - gy - gh2 - 12, col); pull(c, w / 2 - 5, gy + gh2 + 10, 10);
};
D.labbench = (c, w, h, open, p) => {
  const ty = h - 36, col = '#c8d0d0';
  // микроскоп и колбы
  vol(c, 8, ty - 4, 14, 4, '#2a2e30', { side: 1 }); L(c, [14, ty - 4, 14, ty - 16, 20, ty - 22], '#2a2e30', 3); vol(c, 17, ty - 28, 6, 8, '#3a3e40', { side: 1, lw: .5 });
  const fl = ['#58c08a', '#c0a03a', '#6a8ac0', '#c05a5a'];
  for (let i = 0; i < 4; i++) { if (open && i % 2) continue; const fx = 36 + i * 13, fc = fl[i]; c.fillStyle = 'rgba(220,240,240,.75)'; c.beginPath(); c.moveTo(fx, ty - 18); c.lineTo(fx + 4, ty - 18); c.lineTo(fx + 4, ty - 11); c.lineTo(fx + 9, ty); c.lineTo(fx - 5, ty); c.lineTo(fx, ty - 11); c.closePath(); c.fill(); c.strokeStyle = OL; c.lineWidth = .4; c.stroke(); c.fillStyle = fc; c.beginPath(); c.moveTo(fx - 3.4, ty - 2); c.lineTo(fx + 7.4, ty - 2); c.lineTo(fx + 6, ty - 6); c.lineTo(fx - 2, ty - 6); c.closePath(); c.fill(); }
  vol(c, -2, ty, w + 4, 4, '#1f2a2c', { side: 1 });
  vol(c, 0, ty + 4, w, h - ty - 4, col, { side: 4 });
  const n = 3, dw = (w - 8) / n;
  for (let i = 0; i < n; i++) {
    const x = 3 + i * (dw + 1);
    if (open && i === 1) { cavity(c, x, ty + 8, dw - 1, h - ty - 12); for (let k = 0; k < 3; k++) if (rnd() < .5) bottle(c, x + 4 + k * 8, h - 5, 11, fl[k]); swingDoor(c, x + dw - 1, ty + 8, h - ty - 12, 1, 8, col); }
    else { inset(c, x, ty + 8, dw - 1, h - ty - 12, col); pull(c, x + dw / 2 - 5, ty + 13, 10, '#8a9496'); }
  }
};
D.trash = (c, w, h, open, p) => {
  const m = '#5a6a5c';
  c.beginPath(); c.moveTo(2, 8); c.lineTo(w - 2, 8); c.lineTo(w - 4, h); c.lineTo(4, h); c.closePath(); c.fillStyle = gh(c, 2, w - 2, T(m, 1.2), T(m, .7)); c.fill(); c.strokeStyle = OL; c.lineWidth = .8; c.stroke();
  for (let i = 0; i < 4; i++) L(c, [6 + i * 6, 12, 7 + i * 6, h - 3], T(m, .7), .7);
  if (open) {
    E(c, w / 2, 8, w / 2 - 2, 2, '#1a1a14'); cloth(c, 5, 3, 10, 6, '#3a3a3a'); paper(c, w / 2 + 3, 5, .6);
    c.save(); c.translate(w + 6, h - 2); c.rotate(.3); vol(c, -10, -3, 20, 3, T(m, 1.1), { r: 1, side: 0 }); c.restore();
    paper(c, -4, h - 1, .1); can(c, -10, h, 5, '#3a7a3a');
  } else { vol(c, 0, 4, w, 4, T(m, 1.1), { r: 1.5, side: 0 }); vol(c, w / 2 - 4, 1, 8, 3, T(m, .9), { r: 1, side: 0 }); }
};
D.crates = (c, w, h, open, p) => {
  const wd = '#8a6a40';
  const cr = (x, y, s, lid) => {
    vol(c, x, y - s, s, s, wd, { side: 2 }); for (let i = 1; i < 4; i++) R(c, x + 1, y - s + i * s / 4, s - 2, .7, T(wd, .7));
    L(c, [x + 2, y - 2, x + s - 2, y - s + 2], T(wd, .6), 2); R(c, x, y - s, 3, s, T(wd, .8)); R(c, x + s - 3, y - s, 3, s, T(wd, .75));
    if (lid) { R(c, x + 2, y - s, s - 4, 3, '#2a1e12'); c.fillStyle = '#c9b06a'; for (let i = 0; i < 6; i++) { c.beginPath(); c.ellipse(x + 4 + rnd() * (s - 8), y - s, 3, 1.5, rnd(), 0, 7); c.fill(); } c.save(); c.translate(x + s + 4, y - 2); c.rotate(-1.2); vol(c, -s / 2, -2, s, 3, wd, { side: 0 }); c.restore(); }
  };
  cr(0, h, 34, false); cr(36, h, 30, false); cr(8, h - 34, 26, open);
};
D.shelves = (c, w, h, open, p) => {
  const m = '#4a5054';
  R(c, 0, 0, 3, h, m); R(c, w - 3, 0, 3, h, m); R(c, 1, 0, 1, h, '#6a7074');
  const n = 4, sh = (h - 4) / n;
  for (let s = 0; s < n; s++) {
    const y = 6 + s * sh + sh - 6;
    let bx = 5;
    while (bx < w - 12) {
      const k = rnd();
      if (open && rnd() < .5) { bx += 10; continue; }
      if (k < .4) { const bw = 12 + rnd() * 8, bh = 9 + rnd() * 9; box(c, bx, y, bw, bh, rnd() < .5 ? '#a07a4a' : '#8a7a5a', open && rnd() < .5); bx += bw + 2; }
      else if (k < .7) { can(c, bx, y, 5, ['#a83a2a', '#3a6a2a', '#c8a03a'][(rnd() * 3) | 0]); bx += 7; }
      else { bottle(c, bx, y, 13, ['#4a6a3a', '#8a5a2a', '#c8c8c0'][(rnd() * 3) | 0]); bx += 7; }
    }
    vol(c, 0, y, w, 3, '#6a7074', { side: 0, ao: false, lw: .5 });
  }
  if (open) { box(c, w - 18, h, 14, 8, '#a07a4a', true); paper(c, 8, h - .6, .1); }
};
D.toolbox = (c, w, h, open, p) => {
  const col = '#b3261e', by = h - 18;
  if (open) {
    cavity(c, 3, by, w - 6, 4);
    c.fillStyle = T(col, .85); c.beginPath(); c.moveTo(1, by); c.lineTo(-4, by - 12); c.lineTo(w - 10, by - 14); c.lineTo(w - 3, by); c.closePath(); c.fill(); c.strokeStyle = OL; c.lineWidth = .8; c.stroke();
    L(c, [12, by + 2, 18, by - 10], '#9aa0a6', 2.2); L(c, [24, by + 2, 26, by - 8], '#7a4a2a', 2.6); L(c, [30, by + 2, 34, by - 6], '#c9a24a', 1.6);
    vol(c, 0, by + 1, w, h - by - 1, col, { r: 2, side: 3 });
  } else {
    vol(c, 0, by, w, h - by, col, { r: 2, side: 3 }); vol(c, 2, by - 4, w - 4, 5, T(col, 1.05), { r: 2, side: 2 });
    L(c, [w / 2 - 9, by - 4, w / 2 - 7, by - 12, w / 2 + 7, by - 12, w / 2 + 9, by - 4], '#2a2a2a', 2); R(c, w / 2 - 3, by + 2, 6, 3, '#c7cbd0');
  }
  R(c, 2, by + 6, w - 4, 1, T(col, .7));
};
D.safe = (c, w, h, open, p) => {
  const col = '#3e4448', sy = h - 10;
  vol(c, 4, sy, w - 8, 10, T(p.wood, .9), { side: 2 });
  vol(c, 0, 0, w, sy, col, { r: 2, side: 4 });
  if (open) { cavity(c, 4, 4, w - 8, sy - 8); R(c, 5, sy / 2, w - 10, 1.4, '#5a5a5a'); if (rnd() < .5) paper(c, w / 2, sy - 6, .1, '#c8b88a'); swingDoor(c, w, 3, sy - 6, 1, 14, col); }
  else {
    inset(c, 4, 4, w - 8, sy - 8, col, 1.04); const cx = w / 2 - 3, cy = sy / 2;
    E(c, cx, cy, 8, 8, '#2a2e30'); E(c, cx, cy, 6.5, 6.5, '#9aa0a6'); E(c, cx, cy, 4.5, 4.5, '#5a6064'); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.28; R(c, cx + Math.cos(a) * 5.6 - .3, cy + Math.sin(a) * 5.6 - .3, .6, .6, '#2a2a2a'); }
    vol(c, w - 11, cy - 7, 3, 14, '#c7cbd0', { side: 1, lw: .5 });
  }
};
D.bar = (c, w, h, open, p) => {
  const wd = p.wood, ty = h - 44;
  const bc = ['#5a8a3a', '#8a3a2a', '#c9a24a', '#3a5a8a', '#e0e0d8'];
  for (let i = 0; i < 7; i++) { if (open && rnd() < .5) continue; bottle(c, 8 + i * 11, ty, 13 + rnd() * 6, bc[i % 5]); }
  if (open) { c.fillStyle = 'rgba(200,230,230,.7)'; for (let i = 0; i < 6; i++) { c.beginPath(); c.moveTo(w * .6 + i * 3, h); c.lineTo(w * .6 + i * 3 + 2, h - 2); c.lineTo(w * .6 + i * 3 + 3, h); c.fill(); } }
  vol(c, -3, ty, w + 6, 5, '#c9a24a', { r: 2, side: 2 });
  vol(c, 0, ty + 5, w, h - ty - 5, wd, { side: 5 });
  for (let i = 0; i < 3; i++) inset(c, 5 + i * (w - 10) / 3, ty + 11, (w - 10) / 3 - 4, h - ty - 18, wd);
  R(c, 0, h - 8, w, 2, '#c9a24a');
};
D.mattress = (c, w, h, open, p) => {
  const col = '#9a9278';
  if (open) {
    c.save(); c.translate(w / 2, h); c.rotate(-.08); vol(c, -w / 2, -12, w, 10, T(col, .9), { r: 3, side: 0 }); c.restore();
    L(c, [w * .3, h - 8, w * .4, h - 6, w * .5, h - 9], '#3a2a1a', 1); E(c, w * .4, h - 7, 5, 1.6, '#d8ccb0');
    cloth(c, w - 20, h - 5, 22, 4, '#4a5a3a');
  } else {
    vol(c, 0, h - 11, w, 11, col, { r: 3, side: 0 }); for (let i = 1; i < 6; i++) E(c, i * w / 6, h - 6, 1, 1, T(col, .7));
    E(c, w * .35, h - 7, 9, 2.5, 'rgba(110,60,30,.4)'); cloth(c, w * .45, h - 15, w * .5, 7, '#4a5a3a');
  }
};
// ---------- декор ----------
D.armchair = (c, w, h, open, p) => { const f = T(p.fabric, .95); vol(c, 6, h - 58, w - 12, 32, T(f, .9), { r: 7, side: 3 }); vol(c, 4, h - 28, w - 8, 14, f, { r: 3, side: 3 }); vol(c, 0, h - 36, 10, 24, T(f, .85), { r: 4, side: 2 }); vol(c, w - 10, h - 36, 10, 24, T(f, .8), { r: 4, side: 2 }); R(c, 6, h - 14, 3, 14, '#1a1210'); R(c, w - 9, h - 14, 3, 14, '#1a1210'); };
D.plant = (c, w, h, open, p) => {
  c.beginPath(); c.moveTo(5, h - 22); c.lineTo(w - 5, h - 22); c.lineTo(w - 8, h); c.lineTo(8, h); c.closePath(); c.fillStyle = gh(c, 5, w - 5, '#b8683a', '#6a3a1e'); c.fill(); c.strokeStyle = OL; c.lineWidth = .7; c.stroke(); R(c, 4, h - 24, w - 8, 3, '#8a4a2a');
  for (let i = 0; i < 9; i++) { const a = -Math.PI / 2 + (i - 4) * .3, l = 26 + rnd() * 22, x1 = w / 2 + Math.cos(a) * l, y1 = h - 24 + Math.sin(a) * l; L(c, [w / 2, h - 24, x1, y1], '#3a4a22', .9); c.save(); c.translate(x1, y1); c.rotate(a + Math.PI / 2); c.fillStyle = i % 3 ? '#6a7a3a' : '#8a7a3a'; c.beginPath(); c.ellipse(0, 0, 3.6, 8, 0, 0, 7); c.fill(); c.strokeStyle = OL; c.lineWidth = .4; c.stroke(); c.restore(); }
};
D.piano = (c, w, h, open, p) => { vol(c, 0, 0, w, h - 6, '#17151a', { side: 5 }); R(c, -2, -3, w + 4, 5, '#211d24'); vol(c, 4, h - 36, w - 8, 7, '#efe9dc', { side: 0 }); for (let i = 0; i < 13; i++) R(c, 6 + i * 5.2, h - 36, 2.2, 4.4, '#111'); R(c, 8, 6, 22, 18, 'rgba(255,255,255,.07)'); for (let i = 0; i < 2; i++) vol(c, 14 + i * 26, -12, 10, 12, ['#b08a3a', '#e8e0c8'][i], { side: 1, lw: .4 }); R(c, 4, h - 6, 4, 6, '#111'); R(c, w - 8, h - 6, 4, 6, '#111'); };
D.cooler = (c, w, h, open, p) => { vol(c, 2, h - 50, w - 4, 50, '#dcdfe2', { side: 3 }); rr(c, 3, h - 76, w - 6, 26, 7); c.fillStyle = 'rgba(110,170,220,.85)'; c.fill(); c.strokeStyle = OL; c.lineWidth = .6; c.stroke(); R(c, 6, h - 72, 3, 18, 'rgba(255,255,255,.4)'); R(c, 6, h - 40, 3, 3, '#3a6aaa'); R(c, w - 9, h - 40, 3, 3, '#aa3a3a'); };
D.barrels = (c, w, h, open, p) => { for (const [bx, col] of [[0, '#3a5a4a'], [30, '#7a3a2a']]) { vol(c, bx, h - 44, 28, 44, col, { r: 4, side: 4 }); R(c, bx, h - 34, 28, 2.4, T(col, .6)); R(c, bx, h - 12, 28, 2.4, T(col, .6)); } c.fillStyle = '#e0c040'; c.beginPath(); c.moveTo(44, h - 30); c.lineTo(50, h - 20); c.lineTo(38, h - 20); c.closePath(); c.fill(); };
D.lamp = (c, w, h, open, p) => { E(c, w / 2, h - 2, 8, 2, '#2a2a2a'); L(c, [w / 2, h - 2, w / 2, 26], '#2a2a2a', 1.6); c.beginPath(); c.moveTo(w / 2 - 12, 26); c.lineTo(w / 2 - 7, 4); c.lineTo(w / 2 + 7, 4); c.lineTo(w / 2 + 12, 26); c.closePath(); c.fillStyle = gv(c, 4, 26, '#e8d8a8', '#c8a868'); c.fill(); c.strokeStyle = OL; c.lineWidth = .6; c.stroke(); };
D.table = (c, w, h, open, p) => { const wd = p.wood; vol(c, -2, 0, w + 4, 5, wd, { side: 2 }); R(c, 4, 5, 3, h - 5, T(wd, .7)); R(c, w - 7, 5, 3, h - 5, T(wd, .6)); R(c, 6, 9, w - 12, 2, T(wd, .7)); vol(c, w / 2 - 6, -7, 12, 7, '#e8e2d0', { r: 2, side: 1, lw: .5 }); };
// ---------- убежище: растёт вместе с улучшениями (lvl 1–3) ----------
D.sbed = (c, w, h, open, p, lvl = 1) => {
  if (lvl <= 1) {
    for (let i = 0; i < 2; i++) { vol(c, 4 + i * 56, h - 14, 52, 14, '#9a7a4a', { side: 2 }); for (let k = 0; k < 3; k++) R(c, 6 + i * 56, h - 12 + k * 4.4, 48, 1, '#6a5232'); }
    vol(c, 2, h - 24, w - 4, 10, '#7a7660', { r: 3, side: 0 }); cloth(c, 30, h - 28, w - 40, 10, '#4f5c3a'); rr(c, 8, h - 30, 20, 8, 3); c.fillStyle = '#cfc8b0'; c.fill(); return;
  }
  const wd = lvl >= 3 ? '#6a4228' : '#7a6a52';
  vol(c, 0, h - 54, 12, 54, wd, { r: 3, side: 3 }); if (lvl >= 3) inset(c, 3, h - 48, 6, 30, wd);
  vol(c, w - 8, h - 30, 8, 30, wd, { r: 2, side: 2 });
  vol(c, 8, h - 20, w - 14, 11, T(wd, .9), { side: 0 });
  vol(c, 10, h - 28, w - 18, 9, '#e6e0d0', { r: 3, side: 0 });
  rr(c, 14, h - 36, 24, 10, 4); c.fillStyle = '#f2ede2'; c.fill(); c.strokeStyle = OL; c.lineWidth = .6; c.stroke();
  cloth(c, 38, h - 33, w - 48, 15, lvl >= 3 ? '#7a2e3a' : '#4f5c3a');
  if (lvl >= 3) { c.fillStyle = '#8a3a2a'; rr(c, 10, h - 2, w - 20, 4, 2); c.fill(); for (let i = 0; i < 8; i++) R(c, 14 + i * 12, h - 1, 6, 1.5, '#c9a24a'); }
};
D.sstove = (c, w, h, open, p, lvl = 1) => {
  if (lvl <= 1) {
    vol(c, 10, h - 34, 50, 34, '#8a6a40', { side: 2 }); L(c, [12, h - 2, 58, h - 32], '#5a3e22', 1.6); L(c, [12, h - 32, 58, h - 2], '#5a3e22', 1.6);
    vol(c, 20, h - 44, 30, 10, '#4a4e52', { r: 2, side: 2 }); E(c, 35, h - 46, 9, 2, '#2a2a2a'); E(c, 35, h - 46, 5, 1.2, '#4aa0ff');
    vol(c, 24, h - 60, 22, 14, '#7a7e82', { r: 3, side: 3 }); R(c, 20, h - 56, 4, 2, '#2a2a2a'); R(c, 46, h - 56, 4, 2, '#2a2a2a');
    for (let i = 0; i < 3; i++) L(c, [30 + i * 5, h - 62, 28 + i * 5, h - 70, 32 + i * 5, h - 78], 'rgba(230,230,230,.35)', 1.2); return;
  }
  const col = lvl >= 3 ? '#e4e0d8' : '#c8c4bc', top = h - 50;
  if (lvl >= 3) { c.beginPath(); c.moveTo(10, 0); c.lineTo(w - 10, 0); c.lineTo(w - 2, 18); c.lineTo(2, 18); c.closePath(); c.fillStyle = gv(c, 0, 18, '#9aa0a6', '#6a7076'); c.fill(); c.strokeStyle = OL; c.lineWidth = .8; c.stroke(); R(c, 8, 18, w - 16, 2, '#2a2a2a'); }
  vol(c, 0, top, w, 50, col, { side: 4 });
  R(c, 6, top + 14, w - 12, 30, '#2a2a2a'); R(c, 9, top + 17, w - 18, 24, '#3a3a3a'); R(c, 9, top + 17, w - 18, 4, 'rgba(255,140,60,.25)');
  pull(c, 14, top + 10, w - 28, '#d8dcdf');
  for (let i = 0; i < 4; i++) knob(c, 12 + i * ((w - 24) / 3), top + 5, 2, '#2a2a2a');
  for (let i = 0; i < 2; i++) { E(c, 18 + i * (w - 36), top - 1, 9, 2, '#1a1a1a'); E(c, 18 + i * (w - 36), top - 1.6, 6, 1.2, '#4aa0ff'); }
  vol(c, 8, top - 16, 22, 14, '#a83a2a', { r: 3, side: 3 }); vol(c, w - 30, top - 12, 22, 10, '#5a5e62', { r: 2, side: 2 }); R(c, w - 8, top - 9, 7, 2, '#2a2a2a');
  for (let i = 0; i < 3; i++) L(c, [14 + i * 5, top - 18, 12 + i * 5, top - 26, 16 + i * 5, top - 34], 'rgba(230,230,230,.35)', 1.2);
};
D.sbench = (c, w, h, open, p, lvl = 1) => {
  const wd = '#8a6a44', ty = h - 42;
  if (lvl >= 2) { vol(c, 6, 0, w - 12, ty - 20, '#5a4a36', { side: 3 }); for (let i = 0; i < 30; i++) E(c, 12 + (i % 10) * ((w - 24) / 9), 6 + ((i / 10) | 0) * 12, .7, .7, '#2a2016');
    const tc = ['#9aa0a6', '#7a4a2a', '#c9a24a', '#aa3a2a', '#9aa0a6', '#3a6a8a']; for (let i = 0; i < 6; i++) { const tx = 14 + i * ((w - 28) / 5); L(c, [tx, 8, tx, 8 + 16 + (i % 3) * 5], tc[i], 2.4); if (i % 2) vol(c, tx - 3, 6, 6, 5, tc[i], { side: 1, lw: .4 }); } }
  vol(c, -2, ty, w + 4, 6, wd, { side: 2 }); grain(c, -2, ty, w + 4, 6, wd, 8);
  R(c, 4, ty + 6, 5, h - ty - 6, T(wd, .7)); R(c, w - 9, ty + 6, 5, h - ty - 6, T(wd, .6)); R(c, 6, h - 14, w - 12, 3, T(wd, .7));
  vol(c, 10, ty - 10, 16, 10, '#3a4252', { side: 2 }); R(c, 8, ty - 13, 20, 3, '#5a6272'); L(c, [26, ty - 5, 34, ty - 5], '#9aa0a6', 1.6);
  vol(c, w - 40, ty - 6, 26, 6, '#7a7e82', { side: 1, lw: .5 }); L(c, [w - 34, ty - 6, w - 22, ty - 14], '#c9a24a', 1.6);
  if (lvl >= 3) { vol(c, w * .45, ty - 40, 10, 40, '#3a5a8a', { side: 2 }); vol(c, w * .45 - 6, ty - 46, 22, 10, '#3a5a8a', { r: 2, side: 2 }); L(c, [w * .45 + 5, ty - 36, w * .45 + 5, ty - 22], '#c7cbd0', 1.4); box(c, w - 34, h, 22, 16, '#a07a4a', false); }
  else box(c, w - 30, h, 18, 12, '#a07a4a', true);
};
// торговый автомат в коридоре
D.vending = (c, w, h, used) => {
  vol(c, 0, 0, w, h - 3, '#b8282a', { r: 3, side: 5 });
  R(c, 4, 6, w - 8, 10, '#1a1414'); c.fillStyle = '#ffd34a'; c.font = '700 7px sans-serif'; c.textAlign = 'center'; c.fillText('СНЭК', w / 2 - 4, 14);
  rr(c, 4, 20, w - 18, h - 46, 2); c.fillStyle = '#121a20'; c.fill();
  const cc = ['#c03a2a', '#3a7ac0', '#e0b03a', '#4aa05a', '#e8e0d0'];
  for (let r = 0; r < 4; r++) for (let i = 0; i < 3; i++) { if (used && (r + i) % 2) continue; vol(c, 7 + i * 8.6, 26 + r * 13, 6, 9, cc[(r * 3 + i) % 5], { side: 1, ao: false, lw: .4 }); R(c, 6, 36 + r * 13, w - 20, 1, '#5a6066'); }
  c.fillStyle = 'rgba(200,230,255,.16)'; c.beginPath(); c.moveTo(4, 20); c.lineTo(16, 20); c.lineTo(4, 50); c.closePath(); c.fill();
  if (used) { L(c, [10, 30, 18, 42, 14, 50, 24, 62], 'rgba(255,255,255,.7)', .6); L(c, [18, 42, 28, 40], 'rgba(255,255,255,.6)', .5); }
  vol(c, w - 13, 22, 9, 24, '#3a3e42', { side: 1, lw: .5 }); for (let i = 0; i < 4; i++) R(c, w - 11, 26 + i * 5, 5, 3, '#8a9096'); R(c, w - 11, 46, 5, 6, '#111');
  R(c, 6, h - 22, w - 20, 9, '#0c0c0c'); R(c, 6, h - 22, w - 20, 2, '#2a2a2a');
  R(c, 3, h - 3, 6, 3, '#1a1a1a'); R(c, w - 9, h - 3, 6, 3, '#1a1a1a');
  dirt(c, 0, 0, w, h, .2);
};

// нарисовать вещь kind в холст c (уже со сдвигом на M); open — обыскана; v — номер варианта (для случайных деталей)
export function drawFurn(c, kind, w, h, open, pal, v = 1, lvl = 1) {
  const f = D[kind]; if (!f) return false;
  seed(v * 131 + kind.length * 17);
  contact(c, -2, w + 2, h - .5, kind === 'mattress' || kind === 'toolbox' ? .35 : .55);
  f(c, w, h, open, pal, lvl);
  return true;
}
export const hasFurn = k => !!D[k];
