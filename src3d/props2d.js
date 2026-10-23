// Плоская векторная мебель и отделка комнат (рисуется на canvas). Координаты: x — левый край предмета, FL — линия пола, y вниз.
import { tone, mixc, seed, rnd } from './ink.js';

export const T = (c, k, cool = 0) => tone(c, k, cool);
export function R(c, x, y, w, h, col) { c.fillStyle = col; c.fillRect(x, y, w, h); }
// плоский «блок»: лицевая грань, затенённый правый край, светлая кромка сверху, тонкая тёмная обводка
export function block(c, x, y, w, h, col, o = {}) {
  R(c, x, y, w, h, col);
  const sw = o.side == null ? Math.min(6, Math.max(1.5, w * .1)) : o.side;
  if (sw) R(c, x + w - sw, y, sw, h, T(col, .76, 1));
  R(c, x, y, w, Math.min(1.6, h), T(col, 1.22));
  if (o.edge !== false) { c.strokeStyle = T(col, .42, 1); c.lineWidth = .7; c.strokeRect(x + .35, y + .35, w - .7, h - .7); }
}
export function rr(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
export function fillRR(c, x, y, w, h, r, col, sh = true) {
  rr(c, x, y, w, h, r); c.fillStyle = col; c.fill();
  if (sh) { c.save(); rr(c, x, y, w, h, r); c.clip(); R(c, x + w * .8, y, w * .2, h, T(col, .8, 1)); R(c, x, y, w, 1.4, T(col, 1.2)); c.restore(); }
  c.strokeStyle = T(col, .45, 1); c.lineWidth = .7; rr(c, x, y, w, h, r); c.stroke();
}
export function circ(c, x, y, r, col, line) { c.beginPath(); c.arc(x, y, r, 0, 7); if (col) { c.fillStyle = col; c.fill(); } if (line) { c.strokeStyle = line; c.lineWidth = .8; c.stroke(); } }
export function ln(c, pts, col, w = 1) { c.strokeStyle = col; c.lineWidth = w; c.lineCap = 'round'; c.beginPath(); c.moveTo(pts[0], pts[1]); for (let i = 2; i < pts.length; i += 2) c.lineTo(pts[i], pts[i + 1]); c.stroke(); }
const legs = (c, x, w, FL, h, col) => { R(c, x + 2, FL - h, 2.4, h, col); R(c, x + w - 4.4, FL - h, 2.4, h, col); };

// ---------- мебель (возвращает ширину) ----------
export const PROPS = {
  sofa(c, x, FL, col = '#7a2638') {
    const w = 88; legs(c, x + 2, w - 4, FL, 4, '#1a1210');
    fillRR(c, x + 6, FL - 40, w - 12, 20, 4, T(col, .92));
    block(c, x + 4, FL - 24, w - 8, 14, col);
    fillRR(c, x, FL - 30, 12, 24, 3, T(col, .85)); fillRR(c, x + w - 12, FL - 30, 12, 24, 3, T(col, .8));
    fillRR(c, x + 16, FL - 36, 16, 13, 3, '#d8d0c0'); fillRR(c, x + w - 32, FL - 36, 16, 13, 3, '#cfc6b4');
    ln(c, [x + w / 2, FL - 24, x + w / 2, FL - 11], T(col, .6), .8);
    return w;
  },
  armchair(c, x, FL, col = '#5a3a2a') { const w = 42; legs(c, x, w, FL, 4, '#1a1210'); fillRR(c, x + 5, FL - 44, w - 10, 26, 5, T(col, .9)); block(c, x + 4, FL - 22, w - 8, 12, col); fillRR(c, x, FL - 28, 8, 22, 3, T(col, .85)); fillRR(c, x + w - 8, FL - 28, 8, 22, 3, T(col, .8)); return w; },
  wardrobe(c, x, FL, col = '#4a3426') {
    const w = 48, h = 112; block(c, x, FL - h, w, h, col); R(c, x - 2, FL - h - 4, w + 4, 5, T(col, .8));
    ln(c, [x + w / 2, FL - h + 4, x + w / 2, FL - 6], T(col, .5), .8); R(c, x + w / 2 - 4, FL - h / 2, 2, 7, '#c9a65a'); R(c, x + w / 2 + 2, FL - h / 2, 2, 7, '#c9a65a');
    R(c, x + 3, FL - 18, w - 6, 1, T(col, .55)); return w;
  },
  cabinet(c, x, FL, col = '#4f3a2c') { const w = 54, h = 44; block(c, x, FL - h, w, h, col); for (let i = 0; i < 3; i++) { ln(c, [x + 3, FL - h + 14 * i + 14, x + w - 3, FL - h + 14 * i + 14], T(col, .55), .7); R(c, x + w / 2 - 4, FL - h + 14 * i + 6, 8, 1.6, '#b89a5a'); }
    const tv = rnd() < .5; if (tv) { block(c, x + 8, FL - h - 30, 38, 28, '#1c1d20'); R(c, x + 11, FL - h - 27, 30, 21, '#2b3a40'); R(c, x + 12, FL - h - 26, 10, 3, 'rgba(255,255,255,.12)'); } else { circ(c, x + 40, FL - h - 9, 8, '#2f5a7a', '#11202a'); ln(c, [x + 40, FL - h - 1, x + 40, FL - h], '#333', 2); R(c, x + 34, FL - h - 1.5, 12, 1.5, '#3a3a3a'); }
    return w;
  },
  bookshelf(c, x, FL, col = '#3e2c20') {
    const w = 50, h = 104; block(c, x, FL - h, w, h, col, { side: 3 }); R(c, x + 3, FL - h + 3, w - 6, h - 6, T(col, .55));
    const spines = ['#7a3a2a', '#3a4a6a', '#6a6a3a', '#5a2a3a', '#8a7a5a', '#2a4a3a', '#6a4a2a'];
    for (let s = 0; s < 4; s++) { const y = FL - h + 4 + s * 25; R(c, x + 2, y + 21, w - 4, 3, T(col, 1.1)); let bx = x + 4; while (bx < x + w - 6) { const bw = 2 + rnd() * 3, bh = 13 + rnd() * 7; if (rnd() < .12) { bx += bw + 1; continue; } R(c, bx, y + 21 - bh, bw, bh, spines[(rnd() * spines.length) | 0]); bx += bw + .4; } }
    return w;
  },
  bunkbed(c, x, FL, col = '#8a6a44') {
    const w = 94, post = T(col, .9);
    for (const y of [FL - 26, FL - 74]) { block(c, x + 2, y, w - 4, 8, col); fillRR(c, x + 4, y - 9, w - 8, 10, 4, '#2c3e6a'); circ(c, x + 14, y - 13, 7, '#a53a2a', T('#a53a2a', .5)); }
    R(c, x, FL - 100, 5, 100, post); R(c, x + w - 5, FL - 100, 5, 100, post);
    for (let i = 0; i < 5; i++) R(c, x + w - 22, FL - 18 - i * 16, 14, 2, T(col, 1.1)); R(c, x + w - 23, FL - 96, 2, 96, T(col, .8)); R(c, x + w - 9, FL - 96, 2, 96, T(col, .8));
    return w;
  },
  bed(c, x, FL, col = '#6a4a30') { const w = 92; block(c, x, FL - 20, w, 14, col); R(c, x, FL - 46, 7, 46, T(col, .85)); legs(c, x, w, FL, 6, T(col, .6)); fillRR(c, x + 6, FL - 28, w - 8, 10, 3, '#cfc6b4'); fillRR(c, x + 30, FL - 31, w - 32, 12, 4, '#4a5a7a'); fillRR(c, x + 9, FL - 34, 18, 8, 4, '#e2dccc'); return w; },
  table(c, x, FL, col = '#5a4030') { const w = 62; R(c, x, FL - 32, w, 4, col); R(c, x, FL - 28, w, 2, T(col, .6)); legs(c, x + 3, w - 6, FL, 28, T(col, .7)); return w; },
  desk(c, x, FL, col = '#5a4030') {
    const w = 66; R(c, x, FL - 34, w, 4, col); block(c, x + w - 26, FL - 30, 24, 30, T(col, .9)); for (let i = 0; i < 2; i++) R(c, x + w - 18, FL - 22 + i * 13, 8, 1.6, '#b89a5a'); R(c, x + 3, FL - 30, 3, 30, T(col, .7));
    if (rnd() < .5) { circ(c, x + 14, FL - 46, 8, '#3a6a8a', '#1a2a33'); ln(c, [x + 8, FL - 52, x + 20, FL - 40], '#5a8a5a', 2); R(c, x + 12, FL - 38, 4, 4, '#6a5a3a'); }
    else { ln(c, [x + 12, FL - 34, x + 18, FL - 52, x + 26, FL - 50], '#2a2a2a', 1.4); c.fillStyle = '#c9a65a'; c.beginPath(); c.moveTo(x + 22, FL - 54); c.lineTo(x + 32, FL - 52); c.lineTo(x + 28, FL - 46); c.fill(); }
    return w;
  },
  floorlamp(c, x, FL) { const w = 30; R(c, x + 4, FL - 3, 12, 3, '#2a2a2a'); c.strokeStyle = '#2a2a2a'; c.lineWidth = 1.6; c.beginPath(); c.moveTo(x + 10, FL - 3); c.quadraticCurveTo(x + 6, FL - 100, x + 28, FL - 96); c.stroke(); c.fillStyle = '#3a3a3a'; c.beginPath(); c.moveTo(x + 22, FL - 96); c.lineTo(x + 34, FL - 96); c.lineTo(x + 31, FL - 88); c.lineTo(x + 25, FL - 88); c.fill(); return w; },
  officedesk(c, x, FL, col = '#7a7468') {
    const w = 78; R(c, x, FL - 32, w, 3, col); R(c, x + 2, FL - 29, 3, 29, '#4a4a4a'); block(c, x + w - 24, FL - 29, 22, 29, T(col, .85));
    block(c, x + 18, FL - 56, 30, 20, '#1d2024'); R(c, x + 21, FL - 53, 24, 14, '#24343c'); R(c, x + 31, FL - 36, 4, 4, '#2a2a2a'); R(c, x + 52, FL - 36, 14, 4, '#d8d4c8');
    c.fillStyle = '#26282c'; c.fillRect(x - 6, FL - 44, 4, 22); fillRR(c, x - 12, FL - 24, 18, 5, 2, '#2c2e33'); R(c, x - 4, FL - 19, 2, 14, '#2a2a2a'); R(c, x - 10, FL - 5, 14, 2, '#2a2a2a');
    return w;
  },
  filing(c, x, FL, col = '#6a7076') { const w = 28, h = 64; block(c, x, FL - h, w, h, col); for (let i = 0; i < 4; i++) { ln(c, [x + 2, FL - h + i * 16 + 16, x + w - 2, FL - h + i * 16 + 16], T(col, .55), .7); R(c, x + w / 2 - 4, FL - h + i * 16 + 7, 8, 2, '#b0b4b8'); } return w; },
  cooler(c, x, FL) { const w = 22; block(c, x + 2, FL - 48, 18, 48, '#d8dadc'); fillRR(c, x + 3, FL - 72, 16, 24, 6, 'rgba(110,170,220,.85)'); R(c, x + 6, FL - 40, 3, 3, '#3a6aaa'); R(c, x + 12, FL - 40, 3, 3, '#aa3a3a'); return w; },
  copier(c, x, FL) { const w = 44; block(c, x, FL - 40, w, 40, '#c8c4bc'); R(c, x + 4, FL - 44, w - 8, 5, '#9a968e'); R(c, x + 6, FL - 30, w - 12, 3, '#3a3a3a'); R(c, x + 30, FL - 38, 8, 4, '#3a8a5a'); return w; },
  labbench(c, x, FL, col = '#d8dcdc') {
    const w = 86; block(c, x, FL - 36, w, 36, '#6a7a7c'); R(c, x - 2, FL - 38, w + 4, 4, '#1f2a2c'); for (let i = 0; i < 3; i++) { ln(c, [x + 28 * i + 28, FL - 34, x + 28 * i + 28, FL - 2], '#4a5a5c', .8); R(c, x + 28 * i + 10, FL - 24, 8, 2, '#b0b8b8'); }
    const fl = ['#58c08a', '#c0a03a', '#6a8ac0', '#c05a5a'];
    for (let i = 0; i < 4; i++) { const fx = x + 8 + i * 20, fc = fl[i]; c.fillStyle = 'rgba(220,240,240,.7)'; c.beginPath(); c.moveTo(fx, FL - 52); c.lineTo(fx + 4, FL - 52); c.lineTo(fx + 4, FL - 46); c.lineTo(fx + 9, FL - 39); c.lineTo(fx - 5, FL - 39); c.lineTo(fx, FL - 46); c.fill(); R(c, fx - 3, FL - 44, 10, 5, fc); }
    return w;
  },
  gurney(c, x, FL) { const w = 84; R(c, x, FL - 30, w, 4, '#9aa2a4'); ln(c, [x + 6, FL - 26, x + 6, FL - 5], '#7a8284', 1.6); ln(c, [x + w - 6, FL - 26, x + w - 6, FL - 5], '#7a8284', 1.6); circ(c, x + 6, FL - 3, 3, '#2a2a2a'); circ(c, x + w - 6, FL - 3, 3, '#2a2a2a');
    fillRR(c, x + 2, FL - 40, w - 4, 11, 5, '#d8d4c8'); fillRR(c, x + 6, FL - 46, 26, 9, 4, '#cfc8b8'); c.fillStyle = 'rgba(110,10,8,.75)'; c.beginPath(); c.ellipse(x + 50, FL - 36, 12, 4, 0, 0, 7); c.fill(); return w; },
  chemcab(c, x, FL) { const w = 42, h = 86; block(c, x, FL - h, w, h, '#b8c0c0'); R(c, x + 4, FL - h + 4, w - 8, h - 30, 'rgba(40,60,60,.55)'); const cols = ['#58c08a', '#c0a03a', '#c05a5a', '#6a8ac0'];
    for (let s = 0; s < 3; s++) for (let i = 0; i < 4; i++) R(c, x + 7 + i * 8, FL - h + 8 + s * 18 + 4, 5, 10, cols[(s + i) % 4]); for (let s = 0; s < 3; s++) R(c, x + 4, FL - h + 22 + s * 18, w - 8, 1.4, '#e8eeee'); return w; },
  tubes(c, x, FL) { const w = 26; block(c, x, FL - 8, w, 8, '#3a4446'); R(c, x + 3, FL - 110, w - 6, 102, 'rgba(160,240,210,.18)'); R(c, x + 5, FL - 80, w - 10, 72, 'rgba(70,220,150,.55)'); block(c, x - 1, FL - 116, w + 2, 7, '#3a4446'); for (let i = 0; i < 6; i++) circ(c, x + 8 + rnd() * 10, FL - 20 - rnd() * 55, 1 + rnd() * 1.4, 'rgba(220,255,240,.7)'); return w; },
  piano(c, x, FL) { const w = 72; block(c, x, FL - 62, w, 58, '#151417', { side: 5 }); R(c, x - 2, FL - 66, w + 4, 5, '#1d1b20'); R(c, x + 4, FL - 36, w - 8, 6, '#e8e4da'); for (let i = 0; i < 12; i++) R(c, x + 6 + i * 5.2, FL - 36, 2, 4, '#111'); legs(c, x + 4, w - 8, FL, 4, '#111'); R(c, x + 10, FL - 58, 20, 14, 'rgba(255,255,255,.06)'); return w; },
  bar(c, x, FL) { const w = 78; block(c, x, FL - 40, w, 40, '#3a2420'); R(c, x - 3, FL - 43, w + 6, 4, '#c9a24a'); R(c, x + 4, FL - 100, w - 8, 3, '#2a1a16'); const bc = ['#5a8a3a', '#8a3a2a', '#c9a24a', '#3a5a8a'];
    for (let i = 0; i < 8; i++) { const bx = x + 8 + i * 8; R(c, bx, FL - 116, 5, 16, bc[i % 4]); R(c, bx + 1.4, FL - 121, 2.2, 5, bc[i % 4]); } return w; },
  sofaLux(c, x, FL) { return PROPS.sofa(c, x, FL, '#4a2a5a'); },
  armchair2(c, x, FL) { return PROPS.armchair(c, x, FL, '#6a2a3a'); },
  statue(c, x, FL) { const w = 30; block(c, x + 4, FL - 50, 22, 50, '#b8b0a4'); circ(c, x + 15, FL - 64, 8, '#cfc8bc', '#8a8478'); fillRR(c, x + 6, FL - 58, 18, 10, 4, '#c4bcb0'); return w; },
  shelves(c, x, FL) {
    const w = 52, h = 96; R(c, x, FL - h, 3, h, '#4a5054'); R(c, x + w - 3, FL - h, 3, h, '#4a5054');
    for (let s = 0; s < 4; s++) { const y = FL - h + 6 + s * 30; R(c, x, y, w, 3, '#5a6064'); let bx = x + 4; while (bx < x + w - 10) { const bw = 10 + rnd() * 10, bh = 8 + rnd() * 14; if (rnd() < .25) { bx += bw; continue; } block(c, bx, y - bh, bw, bh, rnd() < .5 ? '#8a6a44' : '#6a6a5a'); bx += bw + 2; } }
    return w;
  },
  crates(c, x, FL) { const w = 64; const cr = (cx, cy, s) => { block(c, cx, cy - s, s, s, '#7a5a34'); ln(c, [cx + 2, cy - 2, cx + s - 2, cy - s + 2], '#5a3e22', 1.4); ln(c, [cx + 2, cy - s + 2, cx + s - 2, cy - 2], '#5a3e22', 1.4); };
    cr(x, FL, 30); cr(x + 32, FL, 26); cr(x + 8, FL - 30, 22); return w; },
  boxes(c, x, FL) { const w = 56; block(c, x, FL - 24, 30, 24, '#a07a4a'); R(c, x + 12, FL - 24, 6, 24, '#c8b088'); block(c, x + 32, FL - 18, 22, 18, '#8a6a40'); block(c, x + 6, FL - 42, 22, 18, '#b0885a'); ln(c, [x + 6, FL - 42, x + 2, FL - 48], '#b0885a', 2); return w; },
  boiler(c, x, FL) { const w = 58; fillRR(c, x + 4, FL - 104, 46, 100, 14, '#5a6a5c'); for (let i = 0; i < 3; i++) R(c, x + 4, FL - 90 + i * 28, 46, 2, '#4a584c'); circ(c, x + 20, FL - 60, 6, '#d8d4c8', '#2a2a2a'); ln(c, [x + 20, FL - 60, x + 23, FL - 64], '#aa2a2a', 1); R(c, x + 48, FL - 80, 12, 4, '#7a4a30'); R(c, x + 56, FL - 210, 4, 134, '#7a4a30'); return w; },
  barrels(c, x, FL) { const w = 56; for (const [bx, col] of [[x, '#3a5a4a'], [x + 28, '#7a3a2a']]) { fillRR(c, bx, FL - 38, 26, 38, 4, col); R(c, bx, FL - 30, 26, 2, T(col, .6)); R(c, bx, FL - 12, 26, 2, T(col, .6)); } return w; },
  mattress(c, x, FL) { const w = 80; fillRR(c, x, FL - 10, w, 10, 3, '#8a8470'); fillRR(c, x + 20, FL - 14, w - 22, 7, 3, '#5a4a3a'); c.fillStyle = 'rgba(90,30,20,.5)'; c.beginPath(); c.ellipse(x + 40, FL - 6, 10, 3, 0, 0, 7); c.fill(); return w; },
  stove(c, x, FL) { const w = 44; block(c, x, FL - 44, w, 44, '#c8c4bc'); R(c, x + 4, FL - 30, w - 8, 22, '#2a2a2a'); R(c, x + 6, FL - 28, w - 12, 18, '#3a3a3a'); for (let i = 0; i < 2; i++) { circ(c, x + 12 + i * 20, FL - 46, 5, '#2a2a2a'); circ(c, x + 12 + i * 20, FL - 46, 3, '#ff6a2a'); } block(c, x + 8, FL - 58, 16, 10, '#8a9096'); return w; },
  fridge(c, x, FL) { const w = 38; block(c, x, FL - 96, w, 96, '#d8dad6'); ln(c, [x + 2, FL - 62, x + w - 2, FL - 62], '#9a9c98', 1); R(c, x + w - 8, FL - 86, 2.4, 16, '#8a8c88'); R(c, x + w - 8, FL - 54, 2.4, 22, '#8a8c88'); return w; },
  workbench(c, x, FL) { const w = 92; R(c, x, FL - 40, w, 6, '#8a6a44'); legs(c, x + 2, w - 4, FL, 34, '#5a4328'); R(c, x + 4, FL - 14, w - 8, 3, '#5a4328'); block(c, x + 56, FL - 54, 18, 14, '#3a4252'); R(c, x + 60, FL - 62, 8, 8, '#6f7a8f');
    block(c, x + 8, FL - 112, w - 16, 54, '#4a3d2c'); for (let i = 0; i < 4; i++) ln(c, [x + 18 + i * 16, FL - 104, x + 18 + i * 16, FL - 76], ['#9aa0a6', '#7a4a2a', '#c9a24a', '#aa3a2a'][i], 2.2); return w; },
  toolrack(c, x, FL) { const w = 50; block(c, x, FL - 112, w, 50, '#6a5a44'); for (let i = 0; i < 4; i++) ln(c, [x + 8 + i * 11, FL - 104, x + 8 + i * 11, FL - 80], ['#9aa0a6', '#7a4a2a', '#9aa0a6', '#aa3a2a'][i], 2.2); return w; },
};
export const ZONE_PROPS = {
  z0: ['shelves', 'crates', 'boiler', 'barrels', 'mattress', 'toolrack', 'boxes'],
  z1: ['sofa', 'wardrobe', 'bunkbed', 'bookshelf', 'armchair', 'cabinet', 'desk', 'floorlamp', 'table', 'bed'],
  z2: ['officedesk', 'filing', 'cooler', 'copier', 'officedesk', 'sofa', 'bookshelf'],
  z3: ['labbench', 'gurney', 'chemcab', 'tubes', 'labbench', 'filing'],
  z4: ['piano', 'armchair2', 'bar', 'sofaLux', 'statue', 'bookshelf', 'floorlamp'],
};

// ---------- отделка стен ----------
export const DECO = {
  clock(c, x, y) { circ(c, x, y, 11, '#d8d2c4', '#3a3226'); circ(c, x, y, 8.5, '#efe9dc'); ln(c, [x, y, x, y - 6], '#222', 1.2); ln(c, [x, y, x + 4.4, y + 2], '#222', 1); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.28; R(c, x + Math.cos(a) * 7 - .4, y + Math.sin(a) * 7 - .4, .8, .8, '#333'); } },
  frame(c, x, y, col = '#6a4a2a') { block(c, x - 18, y - 13, 36, 26, col); const g = c.createLinearGradient(0, y - 10, 0, y + 10); g.addColorStop(0, '#3a4a5a'); g.addColorStop(1, '#2a3020'); R(c, x - 15, y - 10, 30, 20, g); c.fillStyle = '#1c2218'; c.beginPath(); c.moveTo(x - 15, y + 10); c.lineTo(x - 6, y); c.lineTo(x, y + 5); c.lineTo(x + 8, y - 3); c.lineTo(x + 15, y + 10); c.fill(); },
  frameGold(c, x, y) { DECO.frame(c, x, y, '#b08a3a'); },
  window(c, x, y) {
    block(c, x - 26, y - 34, 52, 66, '#3a2c22'); const g = c.createLinearGradient(0, y - 30, 0, y + 28); g.addColorStop(0, '#141a26'); g.addColorStop(1, '#2a3446'); R(c, x - 22, y - 30, 44, 58, g);
    c.fillStyle = 'rgba(200,210,230,.25)'; for (let i = 0; i < 4; i++) { c.beginPath(); c.ellipse(x - 14 + i * 9, y + 20 - (i % 2) * 4, 9, 4, 0, 0, 7); c.fill(); }
    c.strokeStyle = 'rgba(180,200,230,.35)'; c.lineWidth = .5; for (let i = 0; i < 14; i++) { const rx = x - 21 + rnd() * 42, ry = y - 29 + rnd() * 50; c.beginPath(); c.moveTo(rx, ry); c.lineTo(rx - 1.4, ry + 6); c.stroke(); }
    R(c, x - 1, y - 30, 2, 58, '#3a2c22'); R(c, x - 22, y - 2, 44, 2, '#3a2c22');
    R(c, x - 32, y - 38, 12, 74, '#6a3a3a'); R(c, x + 20, y - 38, 12, 74, '#6a3a3a'); R(c, x - 34, y - 40, 68, 3, '#2a2a2a');
  },
  blinds(c, x, y) { block(c, x - 28, y - 30, 56, 56, '#5a6268'); for (let i = 0; i < 12; i++) R(c, x - 25, y - 27 + i * 4.4, 50, 2.8, i % 5 === 3 ? '#1a1e24' : '#aeb4b8'); },
  board(c, x, y) { block(c, x - 30, y - 18, 60, 36, '#d8dcdc'); ln(c, [x - 22, y - 8, x - 4, y - 10, x + 10, y - 2], '#2a4a8a', 1); ln(c, [x - 20, y + 4, x + 18, y + 6], '#aa2a2a', 1); },
  biohaz(c, x, y) { c.fillStyle = '#d9ad1f'; c.beginPath(); c.moveTo(x, y - 12); c.lineTo(x + 12, y + 9); c.lineTo(x - 12, y + 9); c.closePath(); c.fill(); circ(c, x, y + 2, 3.4, null, '#15171c'); },
  monitor(c, x, y) { block(c, x - 22, y - 14, 44, 28, '#15191c'); R(c, x - 19, y - 11, 38, 22, '#04100c'); ln(c, [x - 18, y, x - 8, y, x - 5, y - 8, x - 1, y + 7, x + 3, y, x + 18, y], '#58ffb0', 1); },
  vent(c, x, y) { block(c, x - 16, y - 8, 32, 16, '#5a6064'); for (let i = 0; i < 5; i++) R(c, x - 13, y - 6 + i * 3, 26, 1.2, '#2a2e30'); },
  mirror(c, x, y) { c.fillStyle = '#b08a3a'; c.beginPath(); c.ellipse(x, y, 15, 20, 0, 0, 7); c.fill(); c.fillStyle = '#5a6a7a'; c.beginPath(); c.ellipse(x, y, 12, 17, 0, 0, 7); c.fill(); c.fillStyle = 'rgba(255,255,255,.18)'; c.beginPath(); c.ellipse(x - 4, y - 6, 3, 8, .4, 0, 7); c.fill(); },
  pipes(c, x, y) { R(c, x - 60, y - 3, 120, 6, '#6a4a30'); R(c, x - 60, y + 6, 120, 4, '#4a5a5c'); for (let i = 0; i < 3; i++) R(c, x - 50 + i * 45, y - 5, 4, 10, '#3a3a3a'); },
};
export const ZONE_DECO = { z0: ['pipes', 'vent', 'vent'], z1: ['clock', 'frame', 'window', 'frame'], z2: ['blinds', 'board', 'clock'], z3: ['biohaz', 'monitor', 'vent'], z4: ['frameGold', 'mirror', 'window'] };
