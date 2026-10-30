// Здание в разрезе, как в Skyhill: этаж = левая комната | лестничная клетка с лифтом | правая комната.
// Стены, окна (за стеклом — настоящая гроза), мебель отдельными спрайтами (закрыта/обыскана), сквозной лестничный пролёт,
// тёмные неосмотренные комнаты, соседние этажи в полумраке. Всё рисуется векторно на canvas.
import * as THREE from 'three';
import { tone, seed, rnd } from './ink.js';
import { drawFurn, PAL, M as FM, contact } from './furn2d.js';

const PXB = 2.8;                                        // пикселей текстуры на единицу сцены
const T = (c, k, cool) => tone(c, k, cool);
const R = (c, x, y, w, h, col) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
const L = (c, pts, col, w = 1) => { c.strokeStyle = col; c.lineWidth = w; c.lineCap = 'round'; c.beginPath(); c.moveTo(pts[0], pts[1]); for (let i = 2; i < pts.length; i += 2) c.lineTo(pts[i], pts[i + 1]); c.stroke(); };
const E = (c, x, y, rx, ry, col) => { c.fillStyle = col; c.beginPath(); c.ellipse(x, y, rx, ry, 0, 0, 7); c.fill(); };
const gv = (c, y0, y1, a, b) => { const g = c.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, a); g.addColorStop(1, b); return g; };
function blk(c, x, y, w, h, col) { c.fillStyle = gv(c, y, y + h, T(col, 1.1), T(col, .82)); c.fillRect(x, y, w, h); R(c, x, y, w, 1, T(col, 1.3)); c.strokeStyle = 'rgba(12,10,12,.8)'; c.lineWidth = .7; c.strokeRect(x + .35, y + .35, w - .7, h - .7); }

function canvasTex(w, h, draw, px = PXB) {
  const c = document.createElement('canvas'); c.width = Math.ceil(w * px); c.height = Math.ceil(h * px);
  const x = c.getContext('2d'); x.scale(px, px); draw(x, c);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}

// ---------- отделка комнат по зонам ----------
const THEMES = {
  z0: { wall: '#7d8476', low: '#4f6352', split: .48, floor: '#3a3c3a', board: '#2a2c2a', lamp: 'cage', kind: 'concrete' },
  z1: { wall: ['#8a6a62', '#6a7a8a', '#8a845a', '#6a8070', '#86705a'], low: '#5a3e2a', split: .7, floor: '#5a3e28', board: '#2e2016', lamp: 'shade', kind: 'paper' },
  z2: { wall: ['#a8a69a', '#9aa2a6', '#b0a890'], low: '#6a6e72', split: .78, floor: '#3e4656', board: '#2a2e36', lamp: 'panel', kind: 'office' },
  z3: { wall: ['#c4d4d0', '#c8d0d4'], low: '#e2e8e6', split: .55, floor: '#6a7a78', board: '#3a4644', lamp: 'tube', kind: 'tiles' },
  z4: { wall: ['#3c2f44', '#4a2a32', '#2c3442'], low: '#3a221c', split: .62, floor: '#4a2e22', board: '#c9a24a', lamp: 'chandelier', kind: 'damask' },
  base: { wall: '#6a4c32', low: '#4e3622', split: .72, floor: '#4a3420', board: '#2a1d12', lamp: 'bulb', kind: 'planks' },
};
const pickWall = (th) => Array.isArray(th.wall) ? th.wall[(rnd() * th.wall.length) | 0] : th.wall;

function paintWall(c, W, H, th, col) {
  const FL = H - 8, sy = FL * th.split;
  R(c, 0, 0, W, H, col);
  if (th.kind === 'paper') {
    const b = T(col, .88);
    if (rnd() < .5) for (let x = 0; x < W; x += 14) { R(c, x, 0, 6, sy, b); R(c, x + 9, 0, 1, sy, T(col, 1.08)); }
    else for (let y = 10; y < sy; y += 24) for (let x = (y / 24 % 2) * 12 + 6; x < W; x += 24) { c.fillStyle = b; for (let k = 0; k < 4; k++) { c.beginPath(); c.ellipse(x + Math.cos(k * 1.57) * 3, y + Math.sin(k * 1.57) * 3, 2.6, 1.6, k * 1.57, 0, 7); c.fill(); } E(c, x, y, 1.2, 1.2, T(col, 1.15)); }
    // отклеившиеся обои
    for (let i = 0; i < 2; i++) { const px = rnd() * (W - 40), py = 20 + rnd() * (sy - 60); c.fillStyle = T(col, .62); c.beginPath(); c.moveTo(px, py); c.lineTo(px + 14 + rnd() * 16, py + 4); c.lineTo(px + 8, py + 26 + rnd() * 20); c.closePath(); c.fill(); c.fillStyle = T(col, 1.2); c.beginPath(); c.moveTo(px + 14, py + 4); c.lineTo(px + 22, py + 12); c.lineTo(px + 10, py + 20); c.fill(); }
  }
  if (th.kind === 'damask') {
    c.fillStyle = T(col, 1.18);
    for (let y = 12; y < sy; y += 26) for (let x = ((y / 26) % 2) * 13; x < W; x += 26) { c.beginPath(); c.moveTo(x, y - 8); c.quadraticCurveTo(x + 7, y, x, y + 8); c.quadraticCurveTo(x - 7, y, x, y - 8); c.fill(); E(c, x, y - 11, 1.2, 1.2, T(col, 1.3)); }
  }
  if (th.kind === 'office') { for (let x = 0; x < W; x += 50) { R(c, x, 0, 1.2, sy, T(col, .8)); R(c, x + 1.2, 0, .8, sy, T(col, 1.1)); } }
  if (th.kind === 'tiles') {
    c.strokeStyle = T(col, .86); c.lineWidth = .5; for (let x = 0; x < W; x += 20) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, sy); c.stroke(); } for (let y = 0; y < sy; y += 20) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); }
  }
  if (th.kind === 'concrete') { for (let y = 40; y < sy; y += 46) R(c, 0, y, W, 1, T(col, .82)); for (let x = rnd() * 60; x < W; x += 70 + rnd() * 40) R(c, x, 0, 1, sy, T(col, .86)); }
  if (th.kind === 'planks') { for (let x = 0; x < W; x += 16) { R(c, x, 0, 1.2, FL, T(col, .62)); R(c, x + 1.2, 0, .7, FL, T(col, 1.12)); if (rnd() < .5) E(c, x + 7, rnd() * FL, 2.4, 1.4, T(col, .7)); } }
  // нижняя часть стены: панели, плитка или краска
  if (th.kind !== 'planks') {
    const lc = th.low, lh = FL - sy;
    c.fillStyle = gv(c, sy, FL, T(lc, 1.06), T(lc, .86)); c.fillRect(0, sy, W, lh);
    if (th.kind === 'paper' || th.kind === 'damask') {
      for (let x = 6; x < W - 30; x += 46) { R(c, x, sy + 8, 38, lh - 18, T(lc, .9)); R(c, x, sy + 8, 38, 1, T(lc, .62)); R(c, x, sy + lh - 11, 38, 1, T(lc, 1.25)); }
      R(c, 0, sy - 3, W, 4, th.kind === 'damask' ? '#c9a24a' : T(lc, 1.25)); R(c, 0, sy + 1, W, 1, 'rgba(0,0,0,.35)');
    } else if (th.kind === 'tiles') { c.strokeStyle = T(lc, .84); c.lineWidth = .5; for (let x = 0; x < W; x += 12) { c.beginPath(); c.moveTo(x, sy); c.lineTo(x, FL); c.stroke(); } for (let y = sy; y < FL; y += 12) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); } R(c, 0, sy - 2, W, 3, '#3a8a8a'); }
    else R(c, 0, sy - 2, W, 2, T(lc, .7));
  }
  // карниз под потолком
  R(c, 0, 0, W, 5, T(col, .7)); R(c, 0, 5, W, 1.4, T(col, 1.2));
  // подтёки, трещины, грязь
  for (let i = 0; i < 5; i++) { const x = rnd() * W, l = 30 + rnd() * 90; c.fillStyle = gv(c, 6, 6 + l, 'rgba(30,20,10,.28)', 'rgba(30,20,10,0)'); c.fillRect(x, 6, 3 + rnd() * 9, l); }
  c.strokeStyle = 'rgba(20,14,10,.45)'; c.lineWidth = .6;
  for (let i = 0; i < 2; i++) { let x = rnd() * W, y = rnd() * sy; c.beginPath(); c.moveTo(x, y); for (let k = 0; k < 6; k++) { x += (rnd() - .4) * 12; y += 4 + rnd() * 8; c.lineTo(x, y); } c.stroke(); }
  for (let i = 0; i < 18; i++) { c.fillStyle = `rgba(0,0,0,${rnd() * .07})`; c.beginPath(); c.ellipse(rnd() * W, rnd() * H, 8 + rnd() * 30, 5 + rnd() * 16, 0, 0, 7); c.fill(); }
  // плинтус и пол
  R(c, 0, FL - 6, W, 6, th.board); R(c, 0, FL - 6, W, 1, T(th.board, 1.5));
  c.fillStyle = gv(c, FL, H, T(th.floor, 1.25), T(th.floor, .8)); c.fillRect(0, FL, W, H - FL);
  if (th.kind === 'paper' || th.kind === 'damask' || th.kind === 'planks') for (let x = rnd() * 20; x < W; x += 22 + rnd() * 10) R(c, x, FL, .8, H - FL, T(th.floor, .7));
  R(c, 0, FL, W, 1, T(th.floor, 1.5));
}
// окно во внешней стене: стёкла прозрачные — за ними настоящее небо, дождь и молнии
function windowHole(c, x, y, w, h, kind) {
  const fr = kind === 'damask' ? '#c9a24a' : kind === 'planks' ? '#5a3e24' : kind === 'tiles' || kind === 'office' ? '#d8dcdc' : '#e4ddcc';
  R(c, x - 6, y - 6, w + 12, h + 12, 'rgba(0,0,0,.35)');
  blk(c, x - 5, y - 5, w + 10, h + 10, fr);
  c.clearRect(x, y, w, h);
  c.fillStyle = 'rgba(70,100,130,.16)'; c.fillRect(x, y, w, h);
  c.fillStyle = 'rgba(200,220,255,.08)'; c.beginPath(); c.moveTo(x, y); c.lineTo(x + w * .4, y); c.lineTo(x, y + h * .5); c.closePath(); c.fill();
  R(c, x + w / 2 - 1.5, y, 3, h, fr); R(c, x, y + h * .42 - 1.5, w, 3, fr);
  blk(c, x - 9, y + h + 4, w + 18, 4, T(fr, .9));                               // подоконник
  if (kind === 'office') for (let i = 0; i < 9; i++) R(c, x, y + i * 4.2, w, 2.8, i === 8 ? '#5a6268' : '#c8ccd0');
  else if (kind === 'planks') { for (const [a, yy] of [[-.25, .3], [.2, .65]]) { c.save(); c.translate(x + w / 2, y + h * yy); c.rotate(a); blk(c, -w / 2 - 8, -5, w + 16, 10, '#7a5a3a'); E(c, -w / 2 - 3, 0, 1, 1, '#2a2a2a'); E(c, w / 2 + 3, 0, 1, 1, '#2a2a2a'); c.restore(); } }
  else if (kind !== 'concrete' && kind !== 'tiles') {                           // шторы
    const cc = kind === 'damask' ? '#5a1f33' : '#6a3a3a';
    for (const sx of [x - 16, x + w + 4]) { c.fillStyle = gv(c, y - 10, y + h + 12, T(cc, 1.1), T(cc, .75)); c.fillRect(sx, y - 10, 12, h + 22); for (let k = 0; k < 3; k++) R(c, sx + 2 + k * 4, y - 8, 1, h + 18, T(cc, .7)); }
    R(c, x - 20, y - 12, w + 40, 3, '#2a2a2a');
  }
}
function lampDraw(c, x, kind) {
  if (kind === 'chandelier') { L(c, [x, 0, x, 18], '#2a2a2a', 1); R(c, x - 22, 18, 44, 2.4, '#c9a24a'); for (let i = 0; i < 5; i++) { L(c, [x - 18 + i * 9, 12, x - 18 + i * 9, 18], '#c9a24a', 1.2); E(c, x - 18 + i * 9, 10, 2.6, 3, '#fff0c0'); } return 20; }
  if (kind === 'panel') { R(c, x - 30, 0, 60, 5, '#2a2e33'); R(c, x - 27, 5, 54, 3, '#f4f8ff'); return 8; }
  if (kind === 'tube') { R(c, x - 34, 6, 68, 4, '#3a3e42'); R(c, x - 32, 10, 64, 2.4, '#e8fff8'); L(c, [x - 26, 0, x - 26, 6], '#3a3e42', .8); L(c, [x + 26, 0, x + 26, 6], '#3a3e42', .8); return 12; }
  if (kind === 'cage') { L(c, [x, 0, x, 12], '#222', 1); E(c, x, 17, 5.5, 6, '#ffe2a8'); L(c, [x - 6, 17, x + 6, 17], '#333', .8); L(c, [x, 11, x, 23], '#333', .8); return 22; }
  if (kind === 'bulb') { L(c, [x, 0, x, 22], '#222', 1); E(c, x, 27, 4.4, 5, '#fff0c0'); return 30; }
  L(c, [x, 0, x, 26], '#1d1d1d', 1); c.fillStyle = '#7a3a2a'; c.beginPath(); c.moveTo(x - 13, 36); c.lineTo(x - 5, 25); c.lineTo(x + 5, 25); c.lineTo(x + 13, 36); c.closePath(); c.fill(); R(c, x - 13, 35.4, 26, 1.6, '#4a2018'); return 36;
}
function lightPool(c, x, y, W, H, warm) {
  const col = warm ? '255,226,170' : '220,236,255';
  let g = c.createRadialGradient(x, y, 4, x, y + 40, W * .7); g.addColorStop(0, `rgba(${col},.30)`); g.addColorStop(.5, `rgba(${col},.10)`); g.addColorStop(1, `rgba(${col},0)`); c.fillStyle = g; c.fillRect(0, 0, W, H);
  // углы темнее: свет только от лампы
  g = c.createRadialGradient(x, H * .45, H * .3, x, H * .5, W * .9); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.3)'); c.fillStyle = g; c.fillRect(0, 0, W, H);
}
const DECOS = {
  clock(c, x, y) { E(c, x, y, 12, 12, '#3a3226'); E(c, x, y, 10, 10, '#efe9dc'); L(c, [x, y, x, y - 7], '#222', 1.2); L(c, [x, y, x + 5, y + 2], '#222', 1); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.28; R(c, x + Math.cos(a) * 8 - .4, y + Math.sin(a) * 8 - .4, .8, .8, '#333'); } },
  frame(c, x, y, gold) { blk(c, x - 20, y - 15, 40, 30, gold ? '#c9a24a' : '#6a4a2a'); c.fillStyle = gv(c, y - 11, y + 11, '#5a6a7a', '#2a3020'); c.fillRect(x - 16, y - 11, 32, 22); c.fillStyle = '#1c2218'; c.beginPath(); c.moveTo(x - 16, y + 11); c.lineTo(x - 6, y); c.lineTo(x, y + 5); c.lineTo(x + 8, y - 3); c.lineTo(x + 16, y + 11); c.fill(); },
  frameGold(c, x, y) { DECOS.frame(c, x, y, true); },
  photo(c, x, y) { blk(c, x - 9, y - 12, 18, 24, '#2a2a2a'); R(c, x - 7, y - 10, 14, 20, '#d8d0c0'); E(c, x, y - 3, 3.4, 4, '#6a5a4a'); R(c, x - 5, y + 2, 10, 7, '#4a5a6a'); },
  board(c, x, y) { blk(c, x - 34, y - 20, 68, 40, '#e4e8e8'); L(c, [x - 24, y - 8, x - 6, y - 12, x + 10, y - 2, x + 22, y - 10], '#2a4a8a', 1); L(c, [x - 22, y + 6, x + 20, y + 8], '#aa2a2a', 1); },
  poster(c, x, y) { R(c, x - 14, y - 20, 28, 40, '#d8c8a0'); R(c, x - 11, y - 16, 22, 14, '#a83a2a'); for (let i = 0; i < 4; i++) R(c, x - 10, y + 2 + i * 4, 20 - i * 3, 1.4, '#3a3a3a'); },
  map(c, x, y) { blk(c, x - 30, y - 20, 60, 40, '#d8ccaa'); c.strokeStyle = '#7a6a4a'; c.lineWidth = .5; for (let i = 0; i < 6; i++) { c.beginPath(); c.moveTo(x - 28 + i * 10, y - 18); c.lineTo(x - 24 + i * 9, y + 18); c.stroke(); } L(c, [x - 20, y + 10, x - 4, y - 4, x + 14, y + 6], '#aa2a2a', 1.4); E(c, x + 14, y + 6, 2, 2, '#aa2a2a'); },
  biohaz(c, x, y) { c.fillStyle = '#e0b020'; c.beginPath(); c.moveTo(x, y - 14); c.lineTo(x + 14, y + 10); c.lineTo(x - 14, y + 10); c.closePath(); c.fill(); E(c, x, y + 3, 4, 4, '#15171c'); E(c, x, y + 3, 2, 2, '#e0b020'); },
  monitor(c, x, y) { blk(c, x - 24, y - 16, 48, 32, '#15191c'); R(c, x - 21, y - 13, 42, 26, '#04100c'); L(c, [x - 20, y, x - 9, y, x - 6, y - 9, x - 1, y + 8, x + 3, y, x + 20, y], '#58ffb0', 1); },
  vent(c, x, y) { blk(c, x - 18, y - 9, 36, 18, '#5a6064'); for (let i = 0; i < 5; i++) R(c, x - 15, y - 7 + i * 3.4, 30, 1.4, '#2a2e30'); },
  mirror(c, x, y) { E(c, x, y, 16, 22, '#c9a24a'); E(c, x, y, 13, 19, '#5a6a7a'); c.fillStyle = 'rgba(255,255,255,.18)'; c.beginPath(); c.ellipse(x - 4, y - 6, 3, 9, .4, 0, 7); c.fill(); },
  sign(c, x, y) { blk(c, x - 24, y - 8, 48, 16, '#2a6a3a'); c.fillStyle = '#d8f0d8'; c.font = '700 7px sans-serif'; c.textAlign = 'center'; c.fillText('ЭВАКУАЦИЯ', x, y + 3); },
};
function pipes(c, W, y) { R(c, 0, y - 3, W, 7, '#6a4a30'); R(c, 0, y - 3, W, 1.4, '#8a6a4a'); R(c, 0, y + 7, W, 5, '#4a5a5c'); for (let i = 0; i < W; i += 60) { R(c, i + 20, y - 5, 5, 11, '#3a3a3a'); R(c, i + 50, y + 5, 4, 9, '#2a3436'); } c.strokeStyle = '#1a1a1a'; c.lineWidth = 1; c.beginPath(); c.moveTo(0, y + 16); c.quadraticCurveTo(W * .3, y + 30, W * .55, y + 18); c.quadraticCurveTo(W * .8, y + 28, W, y + 20); c.stroke(); }
const ZONE_DECO = { z0: ['vent', 'poster', 'sign'], z1: ['clock', 'frame', 'photo', 'frame'], z2: ['board', 'clock', 'poster'], z3: ['biohaz', 'monitor', 'vent'], z4: ['frameGold', 'mirror', 'frameGold'], base: ['map', 'poster'] };

// комната: стена, окно у внешней стены, лампа, украшения; side: -1 — комната слева от лестницы
function roomTexture(W, H, zk, sd, side, extra = {}) {
  const th = THEMES[zk] || THEMES.z1;
  return canvasTex(W, H, c => {
    seed(sd);
    paintWall(c, W, H, th, pickWall(th));
    const FL = H - 8;
    if (zk === 'z0') pipes(c, W, 18);
    const wx = side < 0 ? 26 + rnd() * 20 : W - 26 - 64 - rnd() * 20;
    windowHole(c, wx, 58, 64, 78, th.kind);
    const free = side < 0 ? [wx + 110, W - 40] : [40, wx - 50];
    const dl = ZONE_DECO[zk] || ZONE_DECO.z1, dx = free[0] + rnd() * Math.max(10, free[1] - free[0]);
    DECOS[dl[(rnd() * dl.length) | 0]](c, dx, 86);
    if (rnd() < .5) { const x2 = dx + (dx < W / 2 ? 62 : -62); if (x2 > 30 && x2 < W - 30 && Math.abs(x2 - wx - 32) > 74) DECOS[dl[(rnd() * dl.length) | 0]](c, x2, 98); }
    if (extra.blood) for (let i = 0; i < 3; i++) { const bx = 20 + rnd() * (W - 40), by = 80 + rnd() * 80; c.fillStyle = 'rgba(80,6,4,.55)'; c.beginPath(); c.ellipse(bx, by, 6 + rnd() * 8, 4 + rnd() * 5, rnd(), 0, 7); c.fill(); R(c, bx - 1, by, 1.6, 10 + rnd() * 24, 'rgba(80,6,4,.5)'); }
    if (extra.furn) extra.furn.forEach(f => { c.save(); c.translate(f.x, FL + 4 - f.h); drawFurn(c, f.k, f.w, f.h, false, PAL[zk] || PAL.z1, f.v); c.restore(); });
    const lx = W * .5 + (rnd() - .5) * 40, ly = lampDraw(c, lx, th.lamp);
    lightPool(c, lx, ly, W, H, th.lamp !== 'panel' && th.lamp !== 'tube');
  });
}
// лестничная клетка: марш вверх (налево к потолку), проём лестницы вниз, лифт, номер этажа; top — убежище, exit — ворота на первом этаже
function hallTexture(W, H, zk, floor, sd, o) {
  const th = THEMES[zk] || THEMES.z1, col = zk === 'base' ? '#6a5238' : zk === 'z3' ? '#9aaaa6' : zk === 'z4' ? '#5e4a52' : zk === 'z2' ? '#7a7e80' : '#6a6e66';
  return canvasTex(W, H, c => {
    seed(sd);
    const FL = H - 8, lowc = T(col, .78);
    R(c, 0, 0, W, H, col); c.fillStyle = gv(c, FL * .55, FL, T(lowc, 1), T(lowc, .85)); c.fillRect(0, FL * .55, W, FL * .45); R(c, 0, FL * .55 - 2, W, 3, T(col, .6));
    for (let i = 0; i < 16; i++) { c.fillStyle = `rgba(0,0,0,${rnd() * .1})`; c.beginPath(); c.ellipse(rnd() * W, rnd() * H, 8 + rnd() * 30, 5 + rnd() * 16, 0, 0, 7); c.fill(); }
    // номер этажа трафаретом над лифтом
    c.save(); c.font = '800 46px "Arial Narrow", Impact, sans-serif'; c.textAlign = 'center'; c.fillStyle = 'rgba(236,230,214,.30)'; c.fillText(String(floor), o.liftX, 60);
    c.globalCompositeOperation = 'destination-out'; for (let i = 0; i < 5; i++) R(c, o.liftX - 44 + i * 20 + rnd() * 4, 18, 1.8, 46, 'rgba(0,0,0,.9)'); c.restore();
    // марш вверх: от низа (sb) налево к потолку (st)
    const sb = o.stairBot, st = o.stairTop, n = 14;
    if (!o.top) {
      const run = sb - st;
      c.fillStyle = T(col, .6); c.beginPath(); c.moveTo(sb + 12, FL); for (let i = 0; i <= n; i++) { const x = sb - i * run / n, y = FL - i * FL / n; c.lineTo(x, y); c.lineTo(x - run / n, y); } c.lineTo(st - 6, -2); c.lineTo(st + 18, -2); c.lineTo(sb + 22, FL - 12); c.closePath(); c.fill();
      c.fillStyle = gv(c, 0, FL, T(col, .42), T(col, .5)); c.beginPath(); c.moveTo(sb + 22, FL - 12); c.lineTo(st + 18, -2); c.lineTo(st + 38, -2); c.lineTo(sb + 40, FL - 26); c.closePath(); c.fill();
      for (let i = 0; i < n; i++) { const x = sb - (i + 1) * run / n, y = FL - (i + 1) * FL / n; R(c, x, y, run / n + 1, 2.6, T(col, 1.45)); R(c, x, y + 2.6, run / n + 1, FL / n - 2.6, T(col, .78)); R(c, x, y + FL / n - 1, run / n + 1, 1, T(col, .5)); }
      const rh = 34; L(c, [sb + 6, FL - rh, st, -rh * .2], '#2a2826', 2); for (let i = 0; i <= 8; i++) { const t = i / 8, x = sb + 6 - t * (sb + 6 - st), y = FL - t * FL; L(c, [x, y - rh, x, y - 2], '#2a2826', .9); }
      c.fillStyle = 'rgba(0,0,0,.25)'; c.beginPath(); c.moveTo(sb + 40, FL); c.lineTo(sb + 40, FL - 26); c.lineTo(st + 38, -2); c.lineTo(st + 60, -2); c.lineTo(sb + 70, FL); c.closePath(); c.fill();
    } else {                                                                          // убежище: выше пути нет — запасы у стены
      blk(c, 6, FL - 40, 50, 40, '#7a5a34'); blk(c, 58, FL - 28, 34, 28, '#8a6a40'); blk(c, 16, FL - 64, 30, 24, '#5a6a3a');
      R(c, 4, 40, 100, 4, '#3a2a1a'); for (let i = 0; i < 6; i++) blk(c, 8 + i * 15, 28, 12, 12, ['#a83a2a', '#3a6a3a', '#c8a03a'][i % 3]);
    }
    // проём лестницы вниз: пола нет, ограждение по краю
    if (!o.exit) {
      c.clearRect(0, FL - 1, o.holeW, H - FL + 1);
      R(c, o.holeW - 2, FL - 36, 3, 36, '#2a2826'); L(c, [0, FL - 36, o.holeW + 1, FL - 36], '#2a2826', 2.2); L(c, [0, FL - 18, o.holeW, FL - 18], '#2a2826', 1);
      c.fillStyle = '#d9ad1f'; for (let i = 0; i < 4; i++) { c.beginPath(); c.moveTo(o.holeW + 2 + i * 8, FL); c.lineTo(o.holeW + 6 + i * 8, FL); c.lineTo(o.holeW + 4 + i * 8, FL + 4); c.lineTo(o.holeW + i * 8, FL + 4); c.fill(); }
    }
    // шахта лифта (створки — отдельными спрайтами)
    const lx = o.liftX;
    R(c, lx - 36, FL - 128, 72, 128, '#08090b'); c.fillStyle = gv(c, FL - 128, FL, 'rgba(60,70,80,.25)', 'rgba(0,0,0,0)'); c.fillRect(lx - 36, FL - 128, 72, 128);
    blk(c, lx - 42, FL - 134, 84, 7, T(col, .62)); blk(c, lx - 42, FL - 134, 6, 134, T(col, .62)); blk(c, lx + 36, FL - 134, 6, 134, T(col, .56));
    blk(c, lx - 18, FL - 152, 36, 14, '#15171a'); blk(c, lx + 44, FL - 74, 6, 12, '#2a2e33'); E(c, lx + 47, FL - 70, 1.6, 1.6, '#c9a24a'); E(c, lx + 47, FL - 66, 1.6, 1.6, '#c9a24a');
    // ворота на улицу (первый этаж)
    if (o.exit) {
      const ex = o.exitX, ew = 62;
      R(c, ex - 4, FL - 132, ew + 8, 132, '#141414');
      for (let k = 0; k < 2; k++) { const dx = ex + k * ew / 2; blk(c, dx, FL - 126, ew / 2 - 1, 126, '#5a6a6a'); R(c, dx + 5, FL - 110, ew / 2 - 11, 40, '#2a3a3e'); R(c, dx + 6, FL - 109, 5, 38, 'rgba(160,200,220,.25)'); blk(c, dx + 3, FL - 64, ew / 2 - 7, 5, '#c9cdd0'); }
      blk(c, ex + ew / 2 - 24, FL - 152, 48, 14, '#1d7a3a'); c.fillStyle = '#e8ffe8'; c.font = '800 9px sans-serif'; c.textAlign = 'center'; c.fillText('ВЫХОД', ex + ew / 2, FL - 142);
      const g = c.createRadialGradient(ex + ew / 2, FL - 146, 2, ex + ew / 2, FL - 146, 40); g.addColorStop(0, 'rgba(90,255,140,.35)'); g.addColorStop(1, 'rgba(90,255,140,0)'); c.fillStyle = g; c.fillRect(ex - 20, FL - 190, ew + 40, 80);
    } else if (!o.top) { blk(c, W - 46, 60, 36, 13, '#2a6a3a'); c.fillStyle = '#d8f0d8'; c.font = '700 6px sans-serif'; c.textAlign = 'center'; c.fillText('ВЫХОД ВНИЗУ', W - 28, 69); }
    if (!o.exit) { c.fillStyle = '#a8281e'; c.beginPath(); c.rect(W - 22, FL - 34, 10, 26); c.fill(); R(c, W - 20, FL - 38, 6, 4, '#222'); }
    const fx0 = o.exit ? 0 : o.holeW;
    R(c, fx0, FL - 5, W - fx0, 5, T(col, .5));
    c.fillStyle = gv(c, FL, H, T(th.floor, 1.1), T(th.floor, .75)); c.fillRect(fx0, FL, W - fx0, H - FL);
    const lmx = (o.stairBot + o.liftX) / 2; L(c, [lmx, 0, lmx, 10], '#222', 1); E(c, lmx, 14, 5, 5, '#ffe2a8');
    lightPool(c, lmx, 16, W, H, true);
  });
}
// бетон перекрытий и небо
let SLABT = null;
function slabTex() { return SLABT || (SLABT = canvasTex(256, 26, c => { R(c, 0, 0, 256, 26, '#17181a'); for (let i = 0; i < 70; i++) R(c, Math.random() * 256, Math.random() * 26, 1 + Math.random() * 2, 1, 'rgba(255,255,255,.05)'); R(c, 0, 0, 256, 1.6, '#2c2e30'); R(c, 0, 24.6, 256, 1.4, '#0a0a0b'); }, 2)); }
let SKYT = null;
function skyTex() {
  return SKYT || (SKYT = canvasTex(400, 300, c => {
    const g = c.createLinearGradient(0, 0, 0, 300); g.addColorStop(0, '#06080c'); g.addColorStop(.55, '#111924'); g.addColorStop(1, '#22303e'); R(c, 0, 0, 400, 300, g);
    for (let i = 0; i < 30; i++) { c.fillStyle = `rgba(${60 + Math.random() * 30},${80 + Math.random() * 30},${100 + Math.random() * 30},${.12 + Math.random() * .2})`; c.beginPath(); c.ellipse(Math.random() * 400, 120 + Math.random() * 180, 40 + Math.random() * 70, 14 + Math.random() * 24, 0, 0, 7); c.fill(); }
    for (let x = 0; x < 400; x += 18 + Math.random() * 20) { const w = 14 + Math.random() * 22, h = 30 + Math.random() * 80; R(c, x, 300 - h, w, h, '#0b0f15'); for (let k = 0; k < 4; k++) if (Math.random() < .35) R(c, x + 3 + Math.random() * (w - 6), 300 - h + 6 + Math.random() * (h - 12), 2, 2, 'rgba(255,210,140,.5)'); }
  }, 2));
}

// ---------- сборка этажа ----------
// o: { zone, floor, base, rooms:[{seen, enemy, furn:[{k,x,s}]}], vend, exit, top, levels }; Ly — раскладка из scene.js; FURN — каталог мебели
export function buildBuilding(o, Ly, FURN) {
  const root = new THREE.Group(), H = Ly.roomH, FY = Ly.floorY, FLw = FY - 4;
  const zk = o.base ? 'base' : o.zone, pal = PAL[zk] || PAL.z1;
  const basic = (map, opts = {}) => new THREE.MeshBasicMaterial(Object.assign({ map, transparent: true }, opts));
  const plane = (w, h, mat, x, y, z) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); m.position.set(x, -y, z); root.add(m); return m; };
  const comps = Ly.comps, hall = comps.find(c => c.k === 'hall'), hx = hall.x0;
  const hallOpts = (top, exit) => ({ liftX: Ly.liftX - hx, stairBot: Ly.stairBot - hx, stairTop: Ly.stairTop - hx, holeW: Ly.holeX1 - hx, exitX: Ly.exitX - hx, top, exit });
  const furnTex = (k, w, h, open, v, lvl) => canvasTex(w + FM * 2, h + FM + 6, c => { c.translate(FM, FM); drawFurn(c, k, w, h, open, pal, v, lvl); }, 3);
  const rooms = [];
  comps.forEach((cp, ci) => {
    const W = cp.x1 - cp.x0, sd = o.floor * 31 + ci * 7 + (o.base ? 999 : 0);
    const room = cp.k === 'room' ? o.rooms[cp.i] : null;
    const tex = cp.k === 'hall' ? hallTexture(W, H, zk, o.floor, sd, hallOpts(o.top, o.exit)) : roomTexture(W, H, zk, sd, cp.x1 <= hx ? -1 : 1, { blood: room && room.enemy && !o.base });
    const mat = basic(tex);
    plane(W, H, mat, (cp.x0 + cp.x1) / 2, FY - H / 2, -10);
    // мебель: отдельные спрайты; когда вещь обыскана, рисунок меняется на открытый
    const furn = [];
    if (room) room.furn.forEach((f, fi) => {
      const fu = FURN[f.k] || { w: 50, h: 60 }, lvl = fu.base ? (o.levels || {})[fu.base] || 1 : 1, v = o.floor * 13 + ci * 5 + fi;
      const closed = furnTex(f.k, fu.w, fu.h, false, v, lvl), fm = basic(closed); fm.depthWrite = false;
      const mesh = plane(fu.w + FM * 2, fu.h + FM + 6, fm, cp.x0 + f.x + fu.w / 2, FLw - fu.h - FM + (fu.h + FM + 6) / 2, -9 + fi * .01);
      furn.push({ k: f.k, fu, mesh, mat: fm, closed, open: null, s: false, v, lvl, pulse: fi * 2.1 });
    });
    const dark = cp.k === 'room' && !o.base ? plane(W, H, new THREE.MeshBasicMaterial({ color: 0x020203, transparent: true, opacity: .97, depthWrite: false }), (cp.x0 + cp.x1) / 2, FY - H / 2, -6) : null;
    if (dark) dark.renderOrder = 5;
    rooms.push({ cp, mat, tex, dark, furn, glow: 0, open: o.base || cp.k === 'hall' ? 1 : 0, flick: !o.base && ((o.floor * 7 + ci * 13) % 4 === 0) });
  });
  // перегородки с дверными проёмами
  for (let i = 1; i < comps.length; i++) {
    const x0 = comps[i - 1].x1, x1 = comps[i].x0, w = x1 - x0 + 2, x = (x0 + x1) / 2, dh = 126;
    plane(w, H - dh, new THREE.MeshBasicMaterial({ color: 0x121314 }), x, FY - H + (H - dh) / 2, -8);
    plane(w, dh, new THREE.MeshBasicMaterial({ color: 0x070606 }), x, FY - dh / 2, -9.6);
    plane(w + 10, 5, new THREE.MeshBasicMaterial({ color: 0x2a2420 }), x, FY - dh - 2, -8);
  }
  // перекрытия (с проёмом лестницы) и наружные стены — в переднем слое
  const slabM = new THREE.MeshBasicMaterial({ map: slabTex() }); slabM.map.wrapS = THREE.RepeatWrapping; slabM.map.repeat.set(Ly.bw / 120, 1);
  const bx0 = comps[0].x0 - 22, bx1 = comps[comps.length - 1].x1 + 22;
  const slab = (sy, gap) => {
    if (!gap) { plane(bx1 - bx0, Ly.slab, slabM, (bx0 + bx1) / 2, sy, 4); return; }
    plane(Ly.holeX0 - bx0, Ly.slab, slabM, (bx0 + Ly.holeX0) / 2, sy, 4); plane(bx1 - Ly.holeX1, Ly.slab, slabM, (Ly.holeX1 + bx1) / 2, sy, 4);
    plane(Ly.holeX1 - Ly.holeX0, Ly.slab, new THREE.MeshBasicMaterial({ color: 0x0b0b0c }), (Ly.holeX0 + Ly.holeX1) / 2, sy, -11);
  };
  slab(FY + Ly.slab / 2, !o.exit); slab(FY - H - Ly.slab / 2, !o.top); slab(FY - 2 * H - Ly.slab * 1.5, o.floor + 1 < 100); slab(FY + H + Ly.slab * 1.5, o.floor - 1 > 1);
  const wallM = new THREE.MeshBasicMaterial({ color: 0x0d0e0f }), fullH = 3 * H + 4 * Ly.slab;
  plane(22, fullH, wallM, bx0 + 11, FY - H / 2, 4); plane(22, fullH, wallM, bx1 - 11, FY - H / 2, 4);
  // соседние этажи в полумраке
  const neighbours = [];
  for (const [dy, fl] of [[-(H + Ly.slab), o.floor + 1], [H + Ly.slab, o.floor - 1]]) {
    if (fl > 100 || fl < 1) continue;
    const nz = fl === 100 ? 'base' : zk === 'base' ? 'z4' : zk;
    comps.forEach((cp, ci) => {
      const W = cp.x1 - cp.x0, sd = fl * 31 + ci * 7 + 500;
      let tex;
      if (cp.k === 'hall') tex = hallTexture(W, H, nz, fl, sd, hallOpts(fl === 100, fl === 1));
      else {
        seed(sd); const list = []; let x = 20 + rnd() * 30;
        for (let k = 0; k < 2; k++) { const kk = ['wardrobe', 'dresser', 'shelves', 'sofa', 'bookshelf', 'crates', 'filing'][(rnd() * 7) | 0], fu = FURN[kk]; if (x + fu.w > W - 20) break; list.push({ k: kk, x, w: fu.w, h: fu.h, v: sd + k }); x += fu.w + 30 + rnd() * 40; }
        tex = roomTexture(W, H, nz, sd, cp.x1 <= hx ? -1 : 1, { furn: list });
      }
      const m = basic(tex, { color: new THREE.Color(.12, .12, .14) }); neighbours.push(m);
      plane(W, H, m, (cp.x0 + cp.x1) / 2, FY - H / 2 + dy, -10);
    });
  }
  // небо, молнии и дождь (видны и в окнах)
  const sky = plane(4400, 2600, new THREE.MeshBasicMaterial({ map: skyTex() }), (bx0 + bx1) / 2, FY - 260, -60);
  const boltG = new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(new Float32Array(64 * 3), 3));
  const bolt = new THREE.Line(boltG, new THREE.LineBasicMaterial({ color: 0xe8f0ff, transparent: true, opacity: 0 })); bolt.frustumCulled = false; root.add(bolt);
  let flash = 0, nextBolt = 4 + Math.random() * 8;
  const strike = () => {
    const side = Math.random() < .5 ? bx0 + Math.random() * 300 : bx1 - Math.random() * 300, P = boltG.attributes.position;
    let x = side, y = FY - 700; const n = 22;
    for (let i = 0; i < n; i++) { P.setXYZ(i, x, -y, -50); x += (Math.random() - .5) * 46; y += 38 + Math.random() * 20; }
    boltG.setDrawRange(0, n); P.needsUpdate = true;
    flash = 1; window.dispatchEvent(new CustomEvent('tower-thunder', { detail: { near: Math.random() } }));
  };
  const rainN = 320, rp = new Float32Array(rainN * 6), rv = [];
  for (let i = 0; i < rainN; i++) rv.push([bx0 - 700 + Math.random() * (bx1 - bx0 + 1400), Math.random() * 1300, 320 + Math.random() * 220]);
  const rain = new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(rp, 3)), new THREE.LineBasicMaterial({ color: 0x9ab0c8, transparent: true, opacity: .42 }));
  rain.frustumCulled = false; root.add(rain);
  // лифт: створки, лента «не работает», лампа и табло
  const lx = Ly.liftX, ly = FLw;
  const doorTex = canvasTex(34, 122, c => { blk(c, 0, 0, 34, 122, '#8e959b'); R(c, 3, 10, 28, 1, '#6a7076'); R(c, 3, 110, 28, 1, '#6a7076'); R(c, 4, 0, 2, 122, 'rgba(255,255,255,.14)'); for (let i = 0; i < 6; i++) R(c, 6 + Math.random() * 20, 20 + Math.random() * 80, 6, 1, 'rgba(0,0,0,.18)'); });
  const doorM = basic(doorTex);
  const dl = plane(34, 122, doorM, lx - 17, ly - 61, -9.2), dr = plane(34, 122, doorM, lx + 17, ly - 61, -9.2);
  const brokenTex = canvasTex(80, 124, c => {
    c.save(); c.translate(40, 62);
    [[-.5, -20], [.42, 24]].forEach(([a, y]) => { c.save(); c.translate(0, y); c.rotate(a); c.fillStyle = '#d9ad1f'; c.fillRect(-48, -6, 96, 12); c.fillStyle = '#15171c';
      for (let i = -48; i < 48; i += 10) { c.beginPath(); c.moveTo(i, -6); c.lineTo(i + 5, -6); c.lineTo(i + 1, 6); c.lineTo(i - 4, 6); c.fill(); } c.restore(); });
    c.restore();
    c.fillStyle = '#efe8d8'; c.fillRect(20, 50, 40, 20); c.fillStyle = '#a8281e'; c.font = '700 7.5px sans-serif'; c.textAlign = 'center'; c.fillText('НЕ', 40, 58); c.fillText('РАБОТАЕТ', 40, 67);
  });
  const broken = plane(80, 124, basic(brokenTex, { opacity: 0 }), lx, ly - 62, -8.8);
  const lampM = new THREE.MeshBasicMaterial({ color: 0xff3020 }); plane(5, 5, lampM, lx + 26, ly - 145, -8.5);
  const num = canvasTex(40, 14, () => {}); const numM = basic(num); plane(34, 11, numM, lx, ly - 145, -8.6);
  const drawNum = (txt, ok) => { const x = num.image.getContext('2d'); x.setTransform(PXB, 0, 0, PXB, 0, 0); R(x, 0, 0, 40, 14, '#060708'); x.fillStyle = ok ? '#7dff9a' : '#ff5a3a'; x.font = '700 10px monospace'; x.textAlign = 'center'; x.fillText(txt, 20, 11); num.needsUpdate = true; };
  let numKey = '';
  // торговый автомат у лифта
  let vend = null;
  if (o.vend) {
    const vw = 48, vh = 100, mk = used => canvasTex(vw + FM * 2, vh + FM + 6, c => { c.translate(FM, FM); contact(c, -2, vw + 2, vh - .5); drawFurn(c, 'vending', vw, vh, used, pal); }, 3);
    const m = basic(mk(o.vend.used)); m.depthWrite = false;
    vend = { mesh: plane(vw + FM * 2, vh + FM + 6, m, Ly.vendX, FLw - vh - FM + (vh + FM + 6) / 2, -9), mat: m, used: o.vend.used, mk };
  }
  // свет в комнате героя и пыль в луче
  const glowT = canvasTex(64, 64, c => { const g = c.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,236,200,.55)'); g.addColorStop(1, 'rgba(255,236,200,0)'); c.fillStyle = g; c.fillRect(0, 0, 64, 64); }, 1);
  const glow = plane(240, 220, new THREE.MeshBasicMaterial({ map: glowT, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0 }), 0, 0, -7); glow.renderOrder = 6;
  const DN = 70, dpos = new Float32Array(DN * 3), dv = [];
  for (let i = 0; i < DN; i++) dv.push([Math.random(), Math.random(), Math.random() * 6.28, .3 + Math.random() * .7]);
  const dust = new THREE.Points(new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(dpos, 3)),
    new THREE.PointsMaterial({ color: 0xffe8c0, size: 1.6, sizeAttenuation: false, transparent: true, opacity: .45, depthWrite: false, blending: THREE.AdditiveBlending }));
  dust.frustumCulled = false; dust.renderOrder = 7; root.add(dust);
  let liftOpen = 0, time = 0;
  return {
    root,
    update(dt, s) {
      time += dt;
      rooms.forEach((r, i) => {
        const room = r.cp.k === 'room' ? (s.rooms[r.cp.i] || {}) : null, here = s.heroComp === i;
        const lit = !room || room.seen || o.base;
        r.open += ((lit ? 1 : 0) - r.open) * Math.min(1, dt * 2.6);
        if (r.dark) { r.dark.material.opacity = .97 * (1 - r.open); r.dark.visible = r.dark.material.opacity > .01; }
        const b = here ? 1.06 : .86; r.glow += (b - r.glow) * Math.min(1, dt * 3);
        let fl = 1; if (r.flick) { const q = Math.sin(time * 2.3 + i) * Math.sin(time * 7.1 + i * 3); fl = q > .82 ? .35 : q > .76 ? .7 : 1; }
        const k = r.glow * fl; r.mat.color.setScalar(k);
        // мебель: обысканная открыта; необысканная в освещённой комнате мягко мерцает — её можно обыскать
        r.furn.forEach((it, fi) => {
          const st = room && room.furn[fi] ? !!room.furn[fi].s : true, can = FURN[it.k] && FURN[it.k].loot;
          if (st !== it.s) { it.s = st; if (st && can && !o.base) { it.open = it.open || furnTex(it.k, it.fu.w, it.fu.h, true, it.v, it.lvl); it.mat.map = it.open; } else it.mat.map = it.closed; it.mat.needsUpdate = true; }
          const hl = !st && r.open > .5 && !s.fight ? .08 + .1 * Math.sin(time * 3.4 + it.pulse) : 0, focus = s.focus && s.focus.ri === r.cp.i && s.focus.fi === fi ? .35 : 0;
          it.mat.color.setScalar(k * (st && can && !o.base ? .9 : 1) * (1 + hl + focus));
        });
      });
      const hc = rooms[s.heroComp];
      if (hc) {
        glow.position.set((hc.cp.x0 + hc.cp.x1) / 2, -(FY - H + 50), -7); glow.material.opacity = .45 * hc.open;
        const cx = (hc.cp.x0 + hc.cp.x1) / 2, P = dust.geometry.attributes.position;
        for (let i = 0; i < DN; i++) { const v = dv[i]; v[1] = (v[1] + dt * .02 * v[3]) % 1; v[2] += dt * v[3]; const yy = FY - H + 24 + v[1] * (H - 34), spread = 12 + v[1] * 90; P.setXYZ(i, cx + (v[0] - .5) * 2 * spread + Math.sin(v[2]) * 3, -yy, -6.5); }
        P.needsUpdate = true; dust.material.opacity = .4 * hc.open * hc.mat.color.r;
      }
      if (vend) {
        if (!!s.vendUsed !== vend.used) { vend.used = !!s.vendUsed; const old = vend.mat.map; vend.mat.map = vend.mk(vend.used); vend.mat.needsUpdate = true; old.dispose(); }
        const hr = rooms.find(r => r.cp.k === 'hall'); vend.mat.color.setScalar((hr ? hr.mat.color.r : 1) * (s.focusVend ? 1.35 : 1));
      }
      // лифт
      const ok = !!s.liftOk;
      liftOpen += ((s.liftOpen ? 1 : 0) - liftOpen) * Math.min(1, dt * 6);
      broken.material.opacity += ((!ok && liftOpen < .05 ? 1 : 0) - broken.material.opacity) * Math.min(1, dt * 4); broken.visible = broken.material.opacity > .01;
      dl.position.x = lx - 17 - liftOpen * 30; dr.position.x = lx + 17 + liftOpen * 30;
      lampM.color.set(ok ? 0x5cff7a : (Math.sin(time * 7) > .2 ? 0xff3020 : 0x401010));
      const nk = (ok ? String(o.floor) : '--') + ok; if (nk !== numKey) { numKey = nk; drawNum(ok ? String(o.floor) : '--', ok); }
      // гроза
      nextBolt -= dt; if (nextBolt <= 0) { strike(); nextBolt = 7 + Math.random() * 14; }
      if (flash > 0) {
        flash = Math.max(0, flash - dt * 2.6);
        const f = flash > .7 ? 1 : flash > .5 ? .25 : flash > .35 ? .8 : flash * .6;
        sky.material.color.setScalar(1 + f * 3.2); bolt.material.opacity = flash > .45 ? 1 : 0;
        neighbours.forEach(m => m.color.setRGB(.12 + f * .22, .12 + f * .24, .14 + f * .3));
      } else if (bolt.material.opacity) { bolt.material.opacity = 0; sky.material.color.setScalar(1); neighbours.forEach(m => m.color.setRGB(.12, .12, .14)); }
      const p = rain.geometry.attributes.position;
      for (let i = 0; i < rainN; i++) { const v = rv[i]; v[1] += v[2] * dt; if (v[1] > 1300) v[1] = 0; const y = FY - 750 + v[1]; p.setXYZ(i * 2, v[0], -y, -40); p.setXYZ(i * 2 + 1, v[0] - 3, -(y + 18), -40); }
      p.needsUpdate = true;
    },
    // кровь прямо на рисунке комнаты: 'wall' — брызги на стене, 'floor' — капли, 'pool' — лужа
    stamp(x, sy, r, kind) {
      const rm = rooms.find(q => x >= q.cp.x0 && x <= q.cp.x1); if (!rm) return;
      const c = rm.tex.image.getContext('2d'), u = x - rm.cp.x0, v = sy - (FY - H);
      c.setTransform(PXB, 0, 0, PXB, 0, 0);
      if (kind === 'pool') { c.fillStyle = 'rgba(70,4,3,.85)'; c.beginPath(); c.ellipse(u, H - 5, r * 1.8, r * .26, 0, 0, 7); c.fill(); c.fillStyle = 'rgba(120,20,16,.4)'; c.beginPath(); c.ellipse(u - r * .4, H - 5.4, r * .6, r * .08, 0, 0, 7); c.fill(); }
      else if (kind === 'floor') { c.fillStyle = 'rgba(80,6,4,.8)'; c.beginPath(); c.ellipse(u, Math.min(H - 4, v), r, r * .3, 0, 0, 7); c.fill(); }
      else {
        c.fillStyle = 'rgba(96,8,6,.82)'; c.beginPath(); c.arc(u, v, r, 0, 7); c.fill();
        for (let i = 0; i < 4; i++) { c.beginPath(); c.arc(u + (Math.random() - .5) * r * 4, v + (Math.random() - .5) * r * 3, r * (.2 + Math.random() * .35), 0, 7); c.fill(); }
        if (Math.random() < .6) { const l = r * (2 + Math.random() * 6); c.fillRect(u - .4, v, .9, l); c.beginPath(); c.arc(u, v + l, .7, 0, 7); c.fill(); }
      }
      c.setTransform(1, 0, 0, 1, 0, 0); rm.tex.needsUpdate = true;
    },
    dispose() {
      root.traverse(q => { if (q.geometry) q.geometry.dispose(); if (q.material) { if (q.material.map && q.material.map !== SLABT && q.material.map !== SKYT) q.material.map.dispose(); q.material.dispose(); } });
      rooms.forEach(r => r.furn.forEach(it => { if (it.open) it.open.dispose(); it.closed.dispose(); }));
    },
  };
}
