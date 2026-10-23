// Здание в разрезе, как в Skyhill: этаж из отсеков (комната, комната, лестница с лифтом, комната), тёмные неизведанные комнаты,
// перекрытия, едва видимые соседние этажи, наружные стены и ночная гроза снаружи. Всё рисуется плоской векторной графикой на canvas.
import * as THREE from 'three';
import { tone, mixc, seed, rnd } from './ink.js';
import { PROPS, ZONE_PROPS, DECO, ZONE_DECO, R, block, fillRR, circ, ln, rr } from './props2d.js';

const PXB = 2.6;                                     // пикселей текстуры на единицу
const T = (c, k, cool) => tone(c, k, cool);

// палитры стен по зонам (каждая комната берёт свой оттенок)
const THEMES = {
  z0: { walls: [['#3d4540', '#363d39'], ['#40403a', '#383832'], ['#35403f', '#2f3938']], pattern: 'concrete', floor: '#2a2c2a', base: '#1d201f', lamp: 'cage', hall: '#3a3e3c' },
  z1: { walls: [['#4c3a48', '#443342'], ['#5a5638', '#524e32'], ['#3e4652', '#38404a'], ['#5a4036', '#523a30'], ['#3c4a3c', '#364236']], pattern: 'stripes', floor: '#3a2a22', base: '#261b16', lamp: 'shade', hall: '#4a3c30' },
  z2: { walls: [['#4a525a', '#444b52'], ['#55584e', '#4e5148'], ['#4a4e5a', '#444852']], pattern: 'panels', floor: '#2c3036', base: '#20242a', lamp: 'panel', hall: '#3e444a' },
  z3: { walls: [['#7c938d', '#6f8680'], ['#8a9894', '#7c8a86'], ['#6f8a8a', '#637d7d']], pattern: 'tiles', floor: '#3a4442', base: '#c9a422', lamp: 'panel', hall: '#56625f' },
  z4: { walls: [['#3c2f44', '#33283b'], ['#4a2a32', '#40242b'], ['#2c3442', '#262d3a']], pattern: 'damask', floor: '#2a2026', base: '#b08a3a', lamp: 'chandelier', hall: '#3a2e36' },
  base: { walls: [['#5c4430', '#533d2b']], pattern: 'planks', floor: '#3a2a1c', base: '#2a1d12', lamp: 'bulb', hall: '#4a3a2a' },
};

function canvas(w, h, draw) {
  const c = document.createElement('canvas'); c.width = Math.ceil(w * PXB); c.height = Math.ceil(h * PXB);
  const x = c.getContext('2d'); x.scale(PXB, PXB); draw(x);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}

// ---------- стена ----------
function paintWall(c, W, H, th, pair, kind) {
  const [a, b] = pair;
  R(c, 0, 0, W, H, a);
  if (kind === 'stripes') for (let x = 0; x < W; x += 12) R(c, x, 0, 6, H, b);
  if (kind === 'panels') { for (let x = 0; x < W; x += 46) R(c, x, 0, 1.2, H * .62, T(a, .8)); R(c, 0, H * .62, W, 3, T(a, .75)); R(c, 0, H * .62 + 3, W, H, b); }
  if (kind === 'tiles') { c.strokeStyle = T(a, .82); c.lineWidth = .6; for (let x = 0; x < W; x += 13) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, H); c.stroke(); } for (let y = 0; y < H; y += 13) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); } }
  if (kind === 'concrete') { for (let y = 34; y < H; y += 42) R(c, 0, y, W, 1, T(a, .8)); for (let i = 0; i < 30; i++) { c.fillStyle = `rgba(0,0,0,${rnd() * .12})`; c.beginPath(); c.ellipse(rnd() * W, rnd() * H, 6 + rnd() * 26, 4 + rnd() * 14, 0, 0, 7); c.fill(); } }
  if (kind === 'damask') { c.fillStyle = b; for (let y = 8; y < H; y += 22) for (let x = (y / 22 % 2) * 11; x < W; x += 22) { c.beginPath(); c.moveTo(x, y - 6); c.lineTo(x + 5, y); c.lineTo(x, y + 6); c.lineTo(x - 5, y); c.fill(); } }
  if (kind === 'planks') { for (let x = 0; x < W; x += 15) { R(c, x, 0, 1, H, T(a, .7)); if (rnd() < .5) R(c, x + 4 + rnd() * 6, rnd() * H, .8, 20 + rnd() * 40, T(a, .85)); } }
  // потолочная тень, грязь у пола, подтёки
  let g = c.createLinearGradient(0, 0, 0, 34); g.addColorStop(0, 'rgba(0,0,0,.45)'); g.addColorStop(1, 'rgba(0,0,0,0)'); c.fillStyle = g; c.fillRect(0, 0, W, 34);
  g = c.createLinearGradient(0, H - 60, 0, H); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.35)'); c.fillStyle = g; c.fillRect(0, H - 60, W, 60);
  for (let i = 0; i < 4; i++) { const x = rnd() * W, l = 30 + rnd() * 90; g = c.createLinearGradient(0, 0, 0, l); g.addColorStop(0, 'rgba(20,14,8,.22)'); g.addColorStop(1, 'rgba(20,14,8,0)'); c.fillStyle = g; c.fillRect(x, 0, 3 + rnd() * 8, l); }
  // плинтус и пол
  R(c, 0, H - 9, W, 3, th.base); R(c, 0, H - 6, W, 6, th.floor); R(c, 0, H - 6, W, 1, T(th.floor, 1.35));
}
function lampDraw(c, x, kind) {
  if (kind === 'chandelier') { ln(c, [x, 0, x, 16], '#2a2a2a', 1); R(c, x - 18, 16, 36, 2, '#b08a3a'); for (let i = 0; i < 5; i++) { R(c, x - 16 + i * 8, 10, 1.2, 6, '#b08a3a'); circ(c, x - 15.4 + i * 8, 9, 2.2, '#ffe9b0'); } return 18; }
  if (kind === 'panel') { R(c, x - 22, 0, 44, 4, '#2a2e33'); R(c, x - 19, 4, 38, 2.4, '#eef4ff'); return 6; }
  if (kind === 'cage') { ln(c, [x, 0, x, 10], '#222', 1); circ(c, x, 14, 5, '#ffe2a8'); ln(c, [x - 5, 14, x + 5, 14], '#333', .8); ln(c, [x, 9, x, 19], '#333', .8); return 18; }
  if (kind === 'bulb') { ln(c, [x, 0, x, 18], '#222', 1); circ(c, x, 22, 4.4, '#ffe9b0'); return 26; }
  ln(c, [x, 0, x, 22], '#1d1d1d', 1); c.fillStyle = '#5a2a22'; c.beginPath(); c.moveTo(x - 10, 30); c.lineTo(x - 4, 21); c.lineTo(x + 4, 21); c.lineTo(x + 10, 30); c.closePath(); c.fill(); R(c, x - 10, 29.4, 20, 1.6, T('#5a2a22', .6)); return 30;
}
function lightCone(c, x, y, H, col = 'rgba(255,230,180,') { const g = c.createLinearGradient(0, y, 0, H); g.addColorStop(0, col + '.16)'); g.addColorStop(1, col + '0)'); c.fillStyle = g; c.beginPath(); c.moveTo(x - 8, y); c.lineTo(x + 8, y); c.lineTo(x + 70, H); c.lineTo(x - 70, H); c.closePath(); c.fill(); }

// ---------- комната ----------
// type: тип комнаты из игры (определяет особые предметы), zone: z0..z4/base
function roomTexture(W, H, zone, type, sd, opts = {}) {
  const th = THEMES[zone] || THEMES.z1;
  return canvas(W, H, c => {
    seed(sd);
    const pair = th.walls[(rnd() * th.walls.length) | 0];
    paintWall(c, W, H, th, pair, th.pattern);
    const FL = H - 4, lx = W * (.35 + rnd() * .3);
    // украшения на стене
    const decos = ZONE_DECO[zone] || ZONE_DECO.z1;
    if (zone === 'base') DECO.window(c, W * .7, 76); else { const d = decos[(rnd() * decos.length) | 0]; const dx = W * (.2 + rnd() * .6); if (DECO[d]) DECO[d](c, dx, d === 'pipes' ? 40 : 80 + rnd() * 20); }
    // мебель по зоне (2–3 предмета без наложений)
    const list = ZONE_PROPS[zone] || ZONE_PROPS.z1;
    const special = { loot: ['crates', 'boxes'], rest: ['bed'], vending: [], trader: ['table'], event: ['table'], enemy: [], trap: [], empty: [], locked: ['crates', 'shelves'],
      bedroom: ['bed', 'cabinet'], kitchen: ['fridge', 'stove', 'table'], workshop: ['workbench', 'shelves'] }[type] || [];
    let x = 8 + rnd() * 10; const want = zone === 'base' ? 0 : (opts.sparse ? 2 : 3) - Math.min(1, special.length);
    const items = special.concat(Array.from({ length: want }, () => list[(rnd() * list.length) | 0]));
    items.forEach(n => { if (x > W - 30) return; const f = PROPS[n]; if (!f) return; const w = f(c, x, FL); x += w + 10 + rnd() * 16; });
    if (type === 'vending') PROPS.vending(c, W - 48, FL);
    if (type === 'trap') { c.fillStyle = '#0a0808'; c.beginPath(); c.moveTo(W * .45, FL + 2); c.lineTo(W * .5, FL - 4); c.lineTo(W * .62, FL - 2); c.lineTo(W * .68, FL + 2); c.fill(); ln(c, [10, FL - 8, W - 10, FL - 10], 'rgba(200,200,200,.6)', .5); DECO.biohaz(c, W - 30, 70); }
    if (type === 'event' || type === 'trader') { block(c, W * .55, FL - 44, 18, 12, '#3a3a2a'); circ(c, W * .55 + 13, FL - 38, 3, '#222'); ln(c, [W * .55 + 4, FL - 44, W * .55 + 1, FL - 54], '#555', .8); }
    if (type === 'enemy' || type === 'trap') { c.fillStyle = 'rgba(90,6,4,.7)'; c.beginPath(); c.ellipse(W * .5, FL - 1, 26, 3.4, 0, 0, 7); c.fill(); for (let i = 0; i < 3; i++) { const bx = 20 + rnd() * (W - 40), by = 60 + rnd() * 70; c.fillStyle = 'rgba(80,6,4,.6)'; c.beginPath(); c.ellipse(bx, by, 6 + rnd() * 8, 4 + rnd() * 5, rnd(), 0, 7); c.fill(); R(c, bx - 1, by, 1.6, 10 + rnd() * 20, 'rgba(80,6,4,.55)'); } }
    // потолочная лампа и её свет
    const ly = lampDraw(c, lx, th.lamp); lightCone(c, lx, ly, FL, th.lamp === 'panel' ? 'rgba(220,235,255,' : 'rgba(255,225,170,');
  });
}
// ---------- лестничная клетка ----------
function hallTexture(W, H, zone, floor, sd) {
  const th = THEMES[zone] || THEMES.z1;
  return canvas(W, H, c => {
    seed(sd);
    const col = th.hall; R(c, 0, 0, W, H, col);
    for (let i = 0; i < 20; i++) { c.fillStyle = `rgba(0,0,0,${rnd() * .1})`; c.beginPath(); c.ellipse(rnd() * W, rnd() * H, 8 + rnd() * 30, 5 + rnd() * 16, 0, 0, 7); c.fill(); }
    const FL = H - 4;
    // номер этажа трафаретом
    c.save(); c.font = '700 54px "Arial Narrow", Impact, sans-serif'; c.fillStyle = 'rgba(230,226,214,.22)'; c.textBaseline = 'top'; c.fillText(String(floor), 12, 26);
    c.globalCompositeOperation = 'destination-out'; for (let i = 0; i < 4; i++) R(c, 12 + i * 15 + rnd() * 4, 26, 1.6, 54, 'rgba(0,0,0,.8)'); c.restore();
    // лестница вверх: марши с перилами, уходящие в потолок
    const sx = 6, sw = 128;
    c.fillStyle = T(col, .72); c.beginPath(); c.moveTo(sx, FL); for (let i = 0; i <= 16; i++) { const x = sx + i * sw / 16, y = FL - i * FL / 16; c.lineTo(x, y); c.lineTo(x + sw / 16, y); } c.lineTo(sx + sw + 10, 0); c.lineTo(sx + sw + 10, 14); c.lineTo(sx + 14, FL); c.closePath(); c.fill();
    for (let i = 0; i < 16; i++) { const x = sx + i * sw / 16, y = FL - (i + 1) * FL / 16; R(c, x, y, sw / 16 + 1, 2, T(col, 1.15)); }
    ln(c, [sx + 8, FL - 36, sx + sw + 8, -34], T(col, .45), 1.6); for (let i = 0; i < 9; i++) { const t = i / 8, x = sx + 8 + t * sw, y = FL - 36 + t * (-34 - FL + 36); ln(c, [x, y, x, y + 34], T(col, .5), .8); }
    // табличка, огнетушитель
    block(c, W - 104, 40, 26, 12, '#2a6a3a'); c.fillStyle = '#d8f0d8'; c.font = '700 7px sans-serif'; c.fillText('ВЫХОД', W - 101, 49);
    fillRR(c, W - 100, FL - 30, 9, 24, 3, '#a8281e'); R(c, W - 99, FL - 34, 6, 4, '#222');
    // шахта лифта: тёмный проём и рамка (двери — отдельными спрайтами)
    R(c, W - 76, FL - 128, 64, 128, '#0b0c0e'); block(c, W - 80, FL - 132, 72, 6, T(col, .6)); R(c, W - 80, FL - 132, 4, 132, T(col, .6)); R(c, W - 12, FL - 132, 4, 132, T(col, .55));
    block(c, W - 64, FL - 150, 40, 14, '#15171a'); R(c, W - 6, FL - 70, 4, 10, '#2a2e33');
    R(c, 0, H - 9, W, 3, th.base); R(c, 0, H - 6, W, 6, th.floor); R(c, 0, H - 6, W, 1, T(th.floor, 1.35));
  });
}
// бетонное перекрытие / наружная стена
let SLABT = null;
function slabTex() { return SLABT || (SLABT = canvas(256, 24, c => { R(c, 0, 0, 256, 24, '#141516'); for (let i = 0; i < 60; i++) R(c, rnd() * 256, rnd() * 24, 1 + rnd() * 2, 1, 'rgba(255,255,255,.04)'); R(c, 0, 0, 256, 1.4, '#26282a'); })); }
let SKYT = null;
function skyTex() {
  return SKYT || (SKYT = canvas(400, 300, c => {
    const g = c.createLinearGradient(0, 0, 0, 300); g.addColorStop(0, '#07090d'); g.addColorStop(.6, '#121a24'); g.addColorStop(1, '#1d2a36'); R(c, 0, 0, 400, 300, g);
    for (let i = 0; i < 26; i++) { c.fillStyle = `rgba(${60 + rnd() * 30},${80 + rnd() * 30},${100 + rnd() * 30},${.15 + rnd() * .2})`; c.beginPath(); c.ellipse(rnd() * 400, 180 + rnd() * 140, 40 + rnd() * 70, 14 + rnd() * 24, 0, 0, 7); c.fill(); }
  }));
}

// ---------- сборка ----------
// L: раскладка из scene.js { comps:[{k,i,x0,x1}], floorY, roomH, slab, liftX, bw }
export function buildBuilding(o, L) {
  const root = new THREE.Group(), zone = o.zone, H = L.roomH, FY = L.floorY;
  const basic = (map, opts = {}) => new THREE.MeshBasicMaterial(Object.assign({ map }, opts));
  const plane = (w, h, mat, x, y, z) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); m.position.set(x, y, z); root.add(m); return m; };
  const yc = sy => -sy;                                                   // svg y -> мир
  const rooms = [], mats = [];
  // текущий этаж
  L.comps.forEach((cp, ci) => {
    const W = cp.x1 - cp.x0, sd = o.floor * 31 + ci * 7 + (o.base ? 999 : 0);
    let tex;
    if (cp.k === 'hall') tex = hallTexture(W, H, o.base ? 'base' : zone, o.floor, sd);
    else tex = roomTexture(W, H, o.base ? 'base' : zone, o.base ? ({ 0: 'bedroom', 1: 'kitchen', 3: 'workshop' })[ci] : (o.rooms[cp.i] || {}).type, sd);
    const mat = basic(tex); mats.push(mat);
    const p = plane(W, H, mat, (cp.x0 + cp.x1) / 2, yc(FY - H / 2), -10);
    const dark = cp.k === 'room' && !o.base ? plane(W, H, new THREE.MeshBasicMaterial({ color: 0x030304, transparent: true, opacity: .96, depthWrite: false }), (cp.x0 + cp.x1) / 2, yc(FY - H / 2), -6) : null;
    if (dark) dark.renderOrder = 5;
    rooms.push({ cp, mat, dark, glow: 0, open: 0 });
  });
  // перегородки между отсеками
  for (let i = 1; i < L.comps.length; i++) { const x = (L.comps[i - 1].x1 + L.comps[i].x0) / 2, w = L.comps[i].x0 - L.comps[i - 1].x1 + 2; plane(w, H, new THREE.MeshBasicMaterial({ color: 0x101112 }), x, yc(FY - H / 2), -8); }
  // перекрытия и наружные стены (в разрезе — в самом переднем слое)
  const slabM = basic(slabTex()); slabM.map.wrapS = THREE.RepeatWrapping; slabM.map.repeat.set(L.bw / 120, 1);
  const bx0 = L.comps[0].x0 - 22, bx1 = L.comps[L.comps.length - 1].x1 + 22, bwid = bx1 - bx0;
  for (const sy of [FY + L.slab / 2, FY - H - L.slab / 2, FY - 2 * H - L.slab * 1.5, FY + H + L.slab * 1.5]) plane(bwid, L.slab, slabM, (bx0 + bx1) / 2, yc(sy), 4);
  const wallM = new THREE.MeshBasicMaterial({ color: 0x0c0d0e });
  const fullH = 3 * H + 4 * L.slab;
  plane(22, fullH, wallM, bx0 + 11, yc(FY - H / 2), 4); plane(22, fullH, wallM, bx1 - 11, yc(FY - H / 2), 4);
  // соседние этажи: те же отсеки, почти без света
  const neighbours = [];
  for (const [dy, fl] of [[-(H + L.slab), o.floor + 1], [H + L.slab, o.floor - 1]]) {
    L.comps.forEach((cp, ci) => {
      const W = cp.x1 - cp.x0, sd = fl * 31 + ci * 7 + 500;
      const tex = cp.k === 'hall' ? hallTexture(W, H, zone, Math.max(1, fl), sd) : roomTexture(W, H, zone, 'empty', sd, { sparse: true });
      const m = basic(tex, { color: new THREE.Color(.13, .13, .15) }); neighbours.push(m);
      plane(W, H, m, (cp.x0 + cp.x1) / 2, yc(FY - H / 2 + dy), -10);
    });
  }
  // небо, облака и дождь снаружи
  const sky = plane(4000, 2400, basic(skyTex()), (bx0 + bx1) / 2, yc(FY - 200), -60);
  const rainN = 260, rp = new Float32Array(rainN * 6), rv = [];
  for (let i = 0; i < rainN; i++) { const x = bx0 - 900 + Math.random() * (bwid + 1800); rv.push([x, Math.random() * 1200, 300 + Math.random() * 200]); }
  const rain = new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(rp, 3)), new THREE.LineBasicMaterial({ color: 0x8aa0b8, transparent: true, opacity: .35 }));
  rain.frustumCulled = false; root.add(rain);
  // лифт: створки (исправный) или смятые двери (сломанный), лампа над входом
  const hall = L.comps.find(c => c.k === 'hall'), lx = L.liftX, ly = FY - 4;
  const doorTex = canvas(32, 128, c => { block(c, 0, 0, 32, 128, '#8a9096'); R(c, 3, 10, 26, 1, '#6a7076'); R(c, 3, 116, 26, 1, '#6a7076'); R(c, 4, 0, 2, 128, 'rgba(255,255,255,.12)'); });
  const doorM = basic(doorTex);
  const dl = plane(32, 128, doorM, lx - 16, yc(ly - 64), -9), dr = plane(32, 128, doorM, lx + 16, yc(ly - 64), -9);
  const brokenTex = canvas(66, 130, c => {
    c.fillStyle = '#6e7378'; c.beginPath(); c.moveTo(2, 4); c.lineTo(30, 0); c.lineTo(26, 40); c.lineTo(34, 70); c.lineTo(24, 128); c.lineTo(2, 126); c.closePath(); c.fill();
    c.fillStyle = '#7d8388'; c.beginPath(); c.moveTo(36, 2); c.lineTo(64, 6); c.lineTo(62, 126); c.lineTo(38, 128); c.lineTo(44, 80); c.lineTo(34, 44); c.closePath(); c.fill();
    c.strokeStyle = '#3a3e42'; c.lineWidth = 1; [[4, 30, 24, 50], [6, 90, 22, 70], [40, 20, 60, 40], [42, 100, 60, 80], [10, 60, 26, 64]].forEach(([a, b, d, e]) => { c.beginPath(); c.moveTo(a, b); c.lineTo(d, e); c.stroke(); });
    c.fillStyle = 'rgba(255,255,255,.1)'; c.beginPath(); c.moveTo(6, 6); c.lineTo(24, 4); c.lineTo(20, 40); c.closePath(); c.fill();
  });
  const broken = plane(66, 130, basic(brokenTex, { transparent: true }), lx, yc(ly - 65), -8.9);
  const lampM = new THREE.MeshBasicMaterial({ color: 0xff3020 }); const lamp = plane(5, 5, lampM, lx, yc(ly - 143), -8.5);
  const num = canvas(40, 14, c => {}); const numM = basic(num); plane(36, 12, numM, lx, yc(ly - 143), -8.6);
  const drawNum = (txt, ok) => { const x = num.image.getContext('2d'); x.setTransform(PXB, 0, 0, PXB, 0, 0); R(x, 0, 0, 40, 14, '#060708'); x.fillStyle = ok ? '#7dff9a' : '#ff5a3a'; x.font = '700 10px monospace'; x.textAlign = 'center'; x.fillText(txt, 20, 11); num.needsUpdate = true; };
  let numKey = '';
  // свет в текущей комнате (мягкое пятно у лампы)
  const glowT = canvas(64, 64, c => { const g = c.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,236,200,.55)'); g.addColorStop(1, 'rgba(255,236,200,0)'); c.fillStyle = g; c.fillRect(0, 0, 64, 64); });
  const glow = plane(200, 200, new THREE.MeshBasicMaterial({ map: glowT, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0 }), 0, 0, -7); glow.renderOrder = 6;
  let liftOpen = 0, time = 0;
  return {
    root,
    update(dt, s) {
      time += dt;
      // комнаты: неизведанные — во тьме, открытые — при свете, комната героя — ярче
      rooms.forEach((r, i) => {
        const room = r.cp.k === 'room' ? (s.rooms[r.cp.i] || {}) : null, here = s.heroComp === i;
        const lit = !room || room.done || o.base || here && s.revealing === r.cp.i;
        r.open += ((lit ? 1 : 0) - r.open) * Math.min(1, dt * 3);
        if (r.dark) { r.dark.material.opacity = .96 * (1 - r.open); r.dark.visible = r.dark.material.opacity > .01; }
        const b = here ? 1 : .72; r.glow += (b - r.glow) * Math.min(1, dt * 3);
        r.mat.color.setScalar(r.glow);
      });
      const hc = rooms[s.heroComp]; if (hc) { glow.position.set((hc.cp.x0 + hc.cp.x1) / 2, yc(FY - H + 40), -7); glow.material.opacity = .5 * hc.open; }
      // лифт
      const ok = !!s.liftOk; dl.visible = dr.visible = ok; broken.visible = !ok;
      liftOpen += ((s.liftOpen ? 1 : 0) - liftOpen) * Math.min(1, dt * 6);
      dl.position.x = lx - 16 - liftOpen * 28; dr.position.x = lx + 16 + liftOpen * 28;
      lampM.color.set(ok ? 0x5cff7a : (Math.sin(time * 7) > .2 ? 0xff3020 : 0x401010));
      const nk = (ok ? String(o.floor) : '--') + ok; if (nk !== numKey) { numKey = nk; drawNum(ok ? String(o.floor) : '--', ok); }
      // дождь
      const p = rain.geometry.attributes.position;
      for (let i = 0; i < rainN; i++) { const v = rv[i]; v[1] += v[2] * dt; if (v[1] > 1200) v[1] = 0; const y = FY - 700 + v[1]; p.setXYZ(i * 2, v[0], yc(y), -40); p.setXYZ(i * 2 + 1, v[0] - 3, yc(y + 16), -40); }
      p.needsUpdate = true;
    },
    dispose() { root.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) { if (o.material.map && o.material.map !== SLABT && o.material.map !== SKYT) o.material.map.dispose(); o.material.dispose(); } }); },
  };
}
