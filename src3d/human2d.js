// 2D-человек (герой и зомби) в профиль: каждая часть тела — отдельный рисунок со стыком в (0,0).
// Возвращает описания частей { bounds, draw, far } и схему суставов для сборки в rig2d.js.
import { cel, celIn, grit, ink, line, fillP, path, ell, rect, blood, limb, tone, mixc, seed, rnd, PI, INK } from './ink.js';

export const H = { hipY: 68, shoulder: [.5, -41], neck: [1, -47], knee: 30, ankle: 31, elbow: 26, wrist: 23, headScale: .82 };

// ---------- туловище ----------
function torsoShape(w, fat, mus) {
  const X = v => v * w, b = fat * 9, c = mus * 3;
  return path(`M ${X(-3.5)} -48 C ${X(-6)} -47.5 ${X(-9) - c * .3} -46 ${X(-10) - c * .5} -41 C ${X(-11.5) - c * .6} -34 ${X(-9.5)} -26 ${X(-8) - b * .2} -20 `
    + `C ${X(-7.2) - b * .3} -15 ${X(-9) - b * .3} -8 ${X(-9.8) - b * .2} -2 C ${X(-10.5)} 3 ${X(-7)} 6.5 ${X(-2)} 7 L ${X(4)} 6.5 `
    + `C ${X(8)} 5 ${X(10.5) + b * .4} 0 ${X(10) + b * .8} -6 C ${X(9.6) + b} -12 ${X(9.4) + b} -17 ${X(10) + b * .7} -23 `
    + `C ${X(11.5) + c} -28 ${X(12.2) + c} -35 ${X(10.5) + c * .5} -40 C ${X(9)} -44.5 ${X(6)} -47 ${X(3.5)} -47.5 Z`);
}
function drawTorso(ctx, cfg, T) {
  const w = T.w, fat = T.fat, mus = T.mus, P = torsoShape(w, fat, mus), X = v => v * w, front = X(10.4) + fat * 8;
  const skin = cfg.skin, shirt = cfg.shirt, pants = cfg.pants, X2 = new Set(cfg.x || []);
  // рюкзак за спиной — под туловищем
  if (X2.has('pack') || X2.has('backpack')) {
    const pk = path(`M ${X(-8)} -44 C ${X(-14)} -45 ${X(-21)} -43 ${X(-21.5)} -36 L ${X(-22)} -16 C ${X(-22)} -12 ${X(-18)} -10 ${X(-13)} -10.5 L ${X(-8)} -12 Z`);
    cel(ctx, pk, cfg.packCol || '#3b3f30', { s: 3 }); grit(ctx, pk, .3);
    line(ctx, [X(-21.6), -28, X(-14), -27.5, X(-9), -29], .8, INK, .8);
    const pc = path(`M ${X(-21.5)} -24 L ${X(-25)} -23.5 C ${X(-26.5)} -20 ${X(-26)} -15 ${X(-24.5)} -13.5 L ${X(-21.5)} -13 Z`); cel(ctx, pc, tone(cfg.packCol || '#3b3f30', .85), { s: 1.5 }); ink(ctx, pc, 1.1);
    ink(ctx, pk, 1.4);
    const roll = ell(X(-15), -47.5, 8.5, 4.2); cel(ctx, roll, '#5a4e3c', { s: 2 }); line(ctx, [X(-15) - 8, -47.5, X(-15) + 8, -47.5], .6, INK, .5); line(ctx, [X(-19), -51.5, X(-19), -43.5], 1.4, '#1c1c18'); line(ctx, [X(-11), -51.5, X(-11), -43.5], 1.4, '#1c1c18'); ink(ctx, roll, 1.2);
  }
  // кожа/рубаха/штаны
  cel(ctx, P, shirt || skin, { s: 3.2, h: 1.2 });
  if (!shirt) {                                     // голый торс: рёбра, мышцы
    line(ctx, [X(4), -40, X(7), -33, X(10), -30], .7, tone(skin, .5, 1), .7);
    line(ctx, [X(2), -22, X(5), -18, X(9), -18], .6, tone(skin, .55, 1), .6);
  }
  const belt = -2.4;
  celIn(ctx, P, rect(-40, belt, 80, 30), pants, { s: 2.6 });
  // пояс с пряжкой
  celIn(ctx, P, rect(-40, belt - 1.2, 80, 2.4), cfg.belt || '#2a2118', { s: .6, hatch: false });
  fillP(ctx, rect(front - 3.4, belt - 1.4, 2.6, 2.8), '#9a8a5a'); ink(ctx, rect(front - 3.4, belt - 1.4, 2.6, 2.8), .5);
  line(ctx, [X(2), 2, X(5), 5.5], .6, INK, .5);           // складка в паху
  // куртка: поверх до бёдер, ворот, карманы, молния
  if (cfg.jacket) {
    const J = path(`M ${X(-3.8)} -49 C ${X(-7)} -48.5 ${X(-10.2)} -46.5 ${X(-11)} -41 C ${X(-12.4)} -34 ${X(-10.4)} -26 ${X(-9)} -20 C ${X(-8.4)} -15 ${X(-10)} -8 ${X(-10.6)} -2 L ${X(-11)} 4.5 L ${front + 1.6} 4.5 C ${front + 1.4} 0 ${front + .8} -6 ${front + .7} -12 C ${front + .8} -18 ${X(11.2)} -24 ${X(12.8)} -31 C ${X(13)} -37 ${X(11.4)} -42 ${X(9)} -45 C ${X(7)} -47.5 ${X(4)} -49 ${X(1)} -49.2 Z`);
    cel(ctx, J, cfg.jacket, { s: 3.4, h: 1.2 }); grit(ctx, J, .3);
    line(ctx, [front + .8, -40, front + .3, -20, front + 1, 4], .9, tone(cfg.jacket, .35), .9);   // молния
    line(ctx, [X(-1), -18, X(6), -17.6], .8, INK, .7); line(ctx, [X(-1), -18, X(-1.4), -9], .7, INK, .5); // карман
    line(ctx, [X(-11), 3, front + 1.4, 3], .8, tone(cfg.jacket, .45), .9);   // манжета подола
    line(ctx, [X(-4), -36, X(-1), -28, X(-3), -20], .7, tone(cfg.jacket, .4, 1), .7);   // складки
    line(ctx, [X(6), -30, X(8), -24], .6, tone(cfg.jacket, .4, 1), .6);
    const col = path(`M ${X(-4.5)} -48.6 C ${X(-3)} -52.5 ${X(4)} -53 ${X(6.5)} -49.5 L ${X(4)} -47.4 C ${X(2)} -49.4 ${X(-1.5)} -49.2 ${X(-3)} -46.5 Z`);
    cel(ctx, col, tone(cfg.jacket, .9), { s: 1.2, hatch: false }); ink(ctx, col, 1.1);
    if (cfg.hoodDown) { const hd = path(`M ${X(-3)} -49 C ${X(-8)} -53 ${X(-15)} -51 ${X(-14)} -45 C ${X(-13)} -41 ${X(-9)} -40.5 ${X(-7.5)} -42.5 C ${X(-7)} -45 ${X(-5)} -47.5 ${X(-3)} -49 Z`); cel(ctx, hd, tone(cfg.jacket, .92), { s: 2.4 }); line(ctx, [X(-12), -47, X(-9.5), -44.5], .6, INK, .6); ink(ctx, hd, 1.2); }
    ink(ctx, J, 1.5);
  } else if (shirt) {
    // складки рубахи, воротник
    line(ctx, [X(-3), -36, X(0), -28, X(-2), -18], .7, tone(shirt, .4, 1), .7);
    line(ctx, [X(7), -34, X(5), -26], .6, tone(shirt, .45, 1), .6);
    line(ctx, [X(2.5), -47.6, X(5), -44.5, X(7.4), -46], .8, INK, .8);
  }
  // костюм: лацканы, белая рубашка, галстук
  if (cfg.suit) {
    const sh = path(`M ${X(6)} -47 L ${front + .6} -45 L ${front + .4} -30 L ${X(7)} -32 Z`); cel(ctx, sh, '#d8d4c8', { s: 1, hatch: false });
    line(ctx, [X(6), -47, X(5.5), -38, X(8.5), -27, front + .4, -16], 1, INK, .9);
  }
  if (cfg.tie || X2.has('tie')) { const t = path(`M ${front - 1} -45 L ${front + 1.6} -44 L ${front + 2.6} -26 L ${front + .4} -23.5 L ${front - .4} -27 Z`); cel(ctx, t, cfg.tie || '#7a1f26', { s: .9, hatch: false }); ink(ctx, t, .9); }
  if (X2.has('bowtie')) { const t = path(`M ${front - .5} -45.5 L ${front + 3} -47.5 L ${front + 3} -43 Z`); fillP(ctx, t, '#141414'); ink(ctx, t, .8); }
  if (cfg.overalls) { celIn(ctx, P, rect(-40, -30, 80, 40), pants, { s: 2.4 }); line(ctx, [X(-6), -46, X(-5), -30], 2, tone(pants, .8)); line(ctx, [X(4), -47, X(7), -30], 2, tone(pants, .8)); fillP(ctx, ell(X(6.5), -30, 1, 1), '#c9b56a'); }
  if (X2.has('apron')) { const a = path(`M ${front - 2} -38 L ${front + 1.6} -38 C ${front + 2.6} -20 ${front + 3.2} 0 ${front + 4} 14 L ${front - 4} 14 C ${front - 2.4} 0 ${front - 2.2} -20 ${front - 2} -38 Z`); cel(ctx, a, '#d9d4c8', { s: 1.8 }); grit(ctx, a, .35); blood(ctx, a, front, -12, 3.6, 3, true); blood(ctx, a, front + 1, 4, 2.6, 2); ink(ctx, a, 1.2); line(ctx, [X(-9), -14, front - 2, -14], .8, '#bdb6a6'); }
  if (cfg.ribs) { const hole = path(`M ${X(3)} -36 C ${X(8)} -38 ${front + .5} -32 ${front} -22 C ${X(7)} -18 ${X(3)} -22 ${X(2)} -28 Z`); fillP(ctx, hole, '#2a0a08'); for (let i = 0; i < 4; i++) line(ctx, [X(3.5), -34 + i * 3.6, X(7), -35 + i * 3.6, front - .2, -32 + i * 3.6], 1.1, '#d8cfb8'); ink(ctx, hole, .9); }
  // разрывы ткани с кожей и раной
  seed(cfg.seed || 7);
  if (shirt && cfg.torn > .2) {
    const n = Math.round(cfg.torn * 3);
    for (let i = 0; i < n; i++) {
      const hx = X(-6 + rnd() * 14), hy = -38 + rnd() * 30, r = 2 + rnd() * 2.6;
      const hp = new Path2D(); for (let a = 0; a < PI * 2; a += .5) { const rr = r * (.55 + rnd() * .7); hp.lineTo(hx + Math.cos(a) * rr * 1.2, hy + Math.sin(a) * rr); } hp.closePath();
      ctx.save(); ctx.clip(P); cel(ctx, hp, skin, { s: .8, hatch: false }); if (cfg.zombie) fillP(ctx, ell(hx, hy + .4, r * .5, r * .35), '#4a0c0a', .9); ink(ctx, hp, .7); ctx.restore();
    }
  }
  if (cfg.blood) { const nb = 1 + Math.round(cfg.blood * 3); for (let i = 0; i < nb; i++) blood(ctx, P, X(-2 + rnd() * 12), -44 + rnd() * 30, 2 + rnd() * 3 * cfg.blood, 2 + (rnd() * 3 | 0), rnd() < .4); }
  // бронежилет / разгрузка
  if (X2.has('vest') || X2.has('spikes')) {
    const vc = cfg.vest || '#2b3138';
    const V = path(`M ${X(-11.5)} -44 C ${X(-13)} -36 ${X(-12)} -24 ${X(-11)} -16 L ${front + 2.4} -16 C ${front + 3.2} -24 ${front + 3.6} -34 ${X(11.4)} -43 C ${X(8)} -46.5 ${X(3)} -47 ${X(-1)} -46.4 C ${X(-5)} -46.5 ${X(-9)} -46 ${X(-11.5)} -44 Z`);
    cel(ctx, V, vc, { s: 3 }); grit(ctx, V, .35);
    line(ctx, [X(-11), -30, front + 3, -30], .7, tone(vc, .5), .8); line(ctx, [X(-11), -22, front + 2.8, -22], .7, tone(vc, .5), .8);
    if (cfg.pouches) for (let i = 0; i < 2; i++) { const pq = path(`M ${front - 1} ${-29 + i * 7} L ${front + 5} ${-29 + i * 7} L ${front + 5} ${-23.4 + i * 7} L ${front - 1} ${-23.4 + i * 7} Z`); cel(ctx, pq, tone(vc, 1.1), { s: 1.2, hatch: false }); line(ctx, [front - 1, -27.5 + i * 7, front + 5, -27.5 + i * 7], .6, INK, .8); ink(ctx, pq, 1); }
    if (X2.has('spikes')) for (let i = 0; i < 5; i++) { const sy = -42 + i * 6, sp = path(`M ${X(-11.6)} ${sy} L ${X(-17)} ${sy + 1.4} L ${X(-11.4)} ${sy + 2.8} Z`); cel(ctx, sp, '#b8bec6', { s: .6, hatch: false }); ink(ctx, sp, .7); }
    ink(ctx, V, 1.4);
  }
  if (X2.has('exo')) { const sp = rect(X(-12), -44, 3.2, 40); cel(ctx, sp, '#4f555c', { s: 1, hatch: false }); ink(ctx, sp, 1); for (let i = 0; i < 4; i++) fillP(ctx, ell(X(-10.4), -40 + i * 10, .8, .8), '#9aa2aa'); }
  if (X2.has('nano')) { line(ctx, [X(-2), -44, X(-1), -20], .9, '#2fb8e6', .9); line(ctx, [front - 2, -42, front - 1.5, -20], .9, '#2fb8e6', .9); }
  if (X2.has('pustules')) for (let i = 0; i < 6; i++) { const px = X(-8 + rnd() * 18) + fat * 6, py = -40 + rnd() * 34; const pu = ell(px, py, 1.2 + rnd() * 1.6, 1.1 + rnd() * 1.4); ctx.save(); ctx.clip(P); cel(ctx, pu, '#8a8a3a', { s: .6, hatch: false }); fillP(ctx, ell(px + .4, py - .5, .4, .3), '#e8e2a0'); ink(ctx, pu, .6); ctx.restore(); }
  if (X2.has('collarGold')) { const g = path(`M ${X(-3)} -47.5 C ${X(1)} -45.5 ${X(5)} -45.6 ${X(8)} -47 L ${X(8)} -45 C ${X(4)} -43.5 ${X(0)} -43.4 ${X(-3)} -45.4 Z`); cel(ctx, g, '#e6b422', { s: .5, hatch: false }); ink(ctx, g, .8); }
  // ремни рюкзака через плечо
  if (X2.has('pack') || X2.has('backpack')) { line(ctx, [X(-2), -48, X(6), -42, X(9.6), -30], 2.6, '#1c1d18'); line(ctx, [X(-2), -48, X(6), -42, X(9.6), -30], .5, '#4a4a40', .8); fillP(ctx, rect(X(8.2), -36, 3, 2), '#6a6a60'); }
  grit(ctx, P, .26);
  ink(ctx, P, 1.6);
  // лабораторный халат: перед верхом
  if (cfg.coat) { const C = path(`M ${X(-11)} -44 C ${X(-12.5)} -30 ${X(-11)} -14 ${X(-11.5)} 8 L ${front + 2} 8 C ${front + 1.6} -10 ${front + 1.2} -24 ${X(11.2)} -40 C ${X(8)} -46 ${X(2)} -48.5 ${X(-4)} -48 Z`); cel(ctx, C, cfg.coatCol || '#dfe3e6', { s: 3 }); grit(ctx, C, .4); blood(ctx, C, X(4), -20, 3, 3, true); line(ctx, [X(5), -46, X(3), -36, front, -24], .9, INK, .8); ink(ctx, C, 1.5); }
}

// ---------- голова ----------
function headShape(jaw) {
  const j = jaw;
  return path(`M -4 1 L -4.5 -7 C -9 -9 -11.5 -15 -10.5 -21 C -9.5 -28 -4 -31.5 1.5 -31 C 6 -30.5 9 -27.5 9.6 -23 C 9.8 -21 9.7 -19.8 10.3 -19 L 9.6 -17.6 `
    + `C 10.3 -16.2 11.8 -13.6 12.6 -12.3 C 12.4 -11.6 11.2 -11.2 10.4 -11.4 C 10.3 -10.6 10.6 -10 10.5 -9.4 `
    + `L ${10.2 - j * .3} ${-8.6 + j} C ${10.2 - j * .2} ${-7 + j} ${9.2} ${-5.2 + j} ${7.4} ${-4.6 + j * .8} C 5.5 ${-4.2 + j * .5} 4.6 -3.6 4 -2 L 3.8 1 Z`);
}
function drawHead(ctx, cfg) {
  const z = cfg.zombie, jaw = z ? 2.4 : 0, P = headShape(jaw), X2 = new Set(cfg.x || []);
  const skin = cfg.skin;
  cel(ctx, P, skin, { s: 2.6, h: .9, dk: z ? .45 : .55 });
  // скула, тень под челюстью, шея
  line(ctx, [-1, -10.5, 3, -7.5 + jaw * .5, 7, -6 + jaw * .7], .7, tone(skin, .45, 1), .55);
  fillP(ctx, path('M -4 1 L -4.5 -7 C -2 -6 1 -4.6 4 -2 L 3.8 1 Z'), tone(skin, .5, 1), .45);
  if (cfg.stubble) { ctx.save(); ctx.clip(P); fillP(ctx, path(`M -1 -11 C 3 -8.5 7 -9 10.4 -10.4 L 10.4 -8 C 10 -5.5 8.6 -4.6 7 -4.4 C 5 -4 4 -3.4 3.8 -2 L 0 -6 Z`), tone(cfg.hair || '#2a2018', 1), .4); grit(ctx, P, .2); ctx.restore(); }
  // ухо
  const ear = ell(-1.6, -15.6, 2.2, 3.4, .15); cel(ctx, ear, tone(skin, .95), { s: .9, hatch: false }); line(ctx, [-1, -17.5, -2.6, -16, -1.2, -13.6], .5, INK, .7); ink(ctx, ear, .9);
  // глаз и бровь
  if (z) {
    fillP(ctx, ell(6.6, -17.2, 3.2, 2.4), '#1e1210', .9);
    if (cfg.eyeGlow) { fillP(ctx, ell(7, -17.2, 1.8, 1.2), cfg.eye || '#d8ff5a'); fillP(ctx, ell(7.2, -17.4, .7, .5), '#ffffff'); }
    else { fillP(ctx, ell(7.2, -17.1, 1.7, 1.1), '#b8b49c'); fillP(ctx, ell(7.9, -17.1, .55, .55), '#8a866e', .7); }
    line(ctx, [4, -19.8, 7, -20.6, 9.6, -19.4], .9, INK);
    line(ctx, [2.4, -16, 4.2, -14, 3.6, -11.6], .5, '#3a2a3a', .6);   // вены
    line(ctx, [-6, -22, -3.6, -19, -4.6, -16], .5, '#3a2a3a', .5);
  } else {
    fillP(ctx, ell(7.1, -17.1, 1.75, 1.05), '#e8e2d6'); fillP(ctx, ell(7.9, -17.05, .75, .85), '#3b2a1e'); fillP(ctx, ell(8.05, -17.05, .32, .4), '#050505');
    line(ctx, [5.4, -17.9, 7.3, -18.6, 8.9, -17.6], .7, INK); line(ctx, [6, -16.2, 8.4, -16.1], .4, INK, .5);
    line(ctx, [4.6, -19.8, 7.2, -21, 9.8, -19.8], 1.1, tone(cfg.hair || '#2a2018', .8));
  }
  // нос, рот
  line(ctx, [10.6, -13.2, 11.2, -12, 10.4, -11.6], .5, INK, .6);
  if (z) {
    const m = path(`M 10.4 -9.6 L 6.6 -9 C 6.4 -7.6 7 -6.2 8.8 ${-6.4 + jaw} L ${10.1} ${-7.4 + jaw} Z`); fillP(ctx, m, '#170404');
    for (let i = 0; i < 3; i++) { fillP(ctx, rect(7.6 + i * .9, -9.2, .7, 1.2), '#b5a77c'); fillP(ctx, rect(7.9 + i * .9, -6.6 + jaw * .6, .65, 1), '#a89c74'); }
    blood(ctx, P, 9.6, -5 + jaw, 1.6, 3, true);
  } else line(ctx, [10.3, -9.2, 8.6, -9.1], .6, INK, .8);
  // волосы
  const hair = cfg.hair, hat = ['cap', 'hood', 'helmet', 'hardhat', 'chefhat'].some(k => X2.has(k));
  if (hair && !cfg.bald && !hat) {
    const Hp = path(`M 8.2 -26.8 C 6.4 -31.8 -2.4 -33.4 -7.4 -29.6 C -11.6 -26 -12 -18 -8.8 -11.6 C -7.8 -9.8 -6.2 -9.2 -5 -10 C -6.2 -14 -5.6 -18.8 -3.2 -21 C -.2 -23.6 4.2 -24.4 8.2 -26.8 Z`);
    cel(ctx, Hp, hair, { s: 1.6, h: .8, dk: .5, lt: 1.6, hatch: false });
    seed((cfg.seed || 7) + 9);
    for (let i = 0; i < 9; i++) { const a = -2.6 + i * .3, x0 = Math.cos(a) * 9.5, y0 = -19 + Math.sin(a) * 11; line(ctx, [x0, y0, x0 + Math.cos(a) * 1.8 + 1, y0 + Math.sin(a) * 2.2 - .6], .7, tone(hair, .55), .8); }
    for (let i = 0; i < 6; i++) line(ctx, [-6 + i * 2.4, -30 + Math.abs(i - 2) * .8, -4 + i * 2.2, -26], .5, tone(hair, 1.6), .5);
    if (cfg.zombie) for (let i = 0; i < 3; i++) fillP(ctx, ell(-6 + rnd() * 10, -27 + rnd() * 6, 1.4 + rnd(), 1 + rnd()), skin);
    ink(ctx, Hp, 1.1);
  }
  grit(ctx, P, .24);
  ink(ctx, P, 1.5);
  // головные уборы и маски
  if (X2.has('cap')) { const c = path('M -10.6 -22 C -10.4 -30 -3 -33.6 3 -32 C 7.6 -31 9.6 -27.6 9.6 -24.4 L 16 -23.6 C 16.4 -22.6 15.6 -22 14.4 -21.8 L 9.4 -22.2 C 3 -22.4 -4 -22.6 -10.6 -22 Z'); cel(ctx, c, cfg.hat || '#2c364b', { s: 2 }); line(ctx, [9.4, -24.2, 9.4, -22.2], .7, INK); ink(ctx, c, 1.3); }
  if (X2.has('hardhat')) { const c = path('M -11.6 -21.6 C -11 -31 -3 -34 2 -33.4 C 8 -33 11 -28.6 11.4 -22.4 L 14 -21.8 L 14 -20.4 L -13 -20.4 L -13 -21.6 Z'); cel(ctx, c, cfg.hat || '#e6b422', { s: 2 }); ink(ctx, c, 1.3); }
  if (X2.has('helmet')) { const c = path('M -11.8 -14 C -12.6 -26 -6 -33.4 1.6 -33.2 C 8.6 -33 12 -27 12 -20.6 L 12.6 -19.6 L 4 -19.6 C 2 -16 -2 -13 -6 -12.2 Z'); cel(ctx, c, '#1d222b', { s: 2.4, lt: 1.8 }); const v = path('M 4 -19.6 L 12.6 -19.6 L 12.2 -14.2 L 6.4 -14.6 Z'); fillP(ctx, v, '#0d1622', .85); line(ctx, [6, -18.8, 11.6, -18.6], .6, '#6a8aa8', .7); ink(ctx, v, .9); ink(ctx, c, 1.4); }
  if (X2.has('chefhat')) { const c = path('M -8 -26 C -12 -32 -9 -40 -3 -40 C -1 -44 6 -44 8 -39 C 13 -38 13 -31 9 -27 Z'); cel(ctx, c, '#e8e6df', { s: 2.4 }); ink(ctx, c, 1.3); }
  if (X2.has('hood')) {
    const hc = cfg.hoodCol || cfg.shirt || '#2d2a33';
    const c = path('M 5 -27.4 C 1 -36.6 -12 -36 -14.4 -25 C -16 -16 -12 -6 -7 -1 L -4.6 1.6 L -2 -6 C -6 -10 -7.4 -16 -6.4 -21 C -4.6 -26.6 1 -28.6 5 -27.4 Z');
    cel(ctx, c, hc, { s: 3 }); grit(ctx, c, .3); line(ctx, [-12, -24, -9, -14, -6, -6], .7, tone(hc, .4, 1), .7); ink(ctx, c, 1.4);
    fillP(ctx, path('M 5 -27.4 C 1 -28.6 -4.6 -26.6 -6.4 -21 C -5 -24 0 -26.6 5 -27.4 Z'), '#050405', .8);
  }
  if (X2.has('gasmask')) { const m = path('M 4.6 -19.2 C 9 -21 13 -18 13.4 -13.6 C 13.6 -9.6 11.6 -6.6 8 -5.6 C 5 -6 3.4 -9 3.6 -13 Z'); cel(ctx, m, '#2a2e33', { s: 1.6 }); const f = path('M 9.6 -10.8 L 15.4 -9.6 L 15 -5.2 L 9.6 -5.8 Z'); cel(ctx, f, '#5a6068', { s: 1, hatch: false }); ink(ctx, f, .9); fillP(ctx, ell(7.6, -17, 1.9, 1.6), '#9fffd8'); fillP(ctx, ell(7.9, -17.3, .6, .5), '#ffffff'); ink(ctx, ell(7.6, -17, 1.9, 1.6), .8); line(ctx, [4, -14, -6, -18], 1.2, '#1a1a1c'); ink(ctx, m, 1.2); }
  if (X2.has('glasses')) { ink(ctx, ell(7.6, -17.1, 2.4, 1.8), .8, '#111'); line(ctx, [5.2, -17.4, -1, -17], .6, '#111'); fillP(ctx, ell(7.6, -17.1, 2.2, 1.6), 'rgba(200,220,255,.2)'); }
  if (cfg.mask === 'surgical') { const m = path('M 5 -14.6 C 8 -15 12.6 -14.6 12.8 -11.4 C 13 -8 11 -5.4 7.6 -5 C 5 -5.4 4 -8 4.2 -11 Z'); cel(ctx, m, '#8fbcd0', { s: 1, hatch: false }); blood(ctx, m, 10, -8, 1.6, 2, true); line(ctx, [4.6, -13, -2, -15], .5, '#cfe6ee'); ink(ctx, m, 1); }
}

// ---------- руки, ноги ----------
function sleeveEdge(ctx, y, a) { line(ctx, [-a - .6, y, 0, y + .8, a + .6, y - .2], 1, INK, .9); }
function drawUpperArm(ctx, cfg, A) {
  const P = limb(A.L, A.a, A.b, A.fb, A.bb), cl = cfg.jacket || cfg.shirt;
  cel(ctx, P, cfg.skin, { s: A.a * .55 });
  const sl = cfg.sleeves === 'none' || !cl ? -99 : cfg.sleeves === 'short' ? 12 : 99;
  if (sl > 0) { celIn(ctx, P, rect(-20, -20, 40, 20 + Math.min(sl, A.L + 10)), cl, { s: A.a * .6 }); if (sl < 90) sleeveEdge(ctx, sl, A.a); else line(ctx, [-A.a * .3, 6, A.a * .2, 14, -A.a * .2, A.L - 3], .6, tone(cl, .4, 1), .6); }
  const X2 = new Set(cfg.x || []);
  if (X2.has('pads')) { const p = path(`M ${-A.a - 1.4} 1 C ${-A.a - 1.6} -6 ${A.a + 1.6} -6 ${A.a + 1.4} 1 C ${A.a + 1} 6 ${-A.a - 1} 6 ${-A.a - 1.4} 1 Z`); cel(ctx, p, cfg.padCol || '#55595c', { s: 1.4, lt: 1.6 }); fillP(ctx, ell(0, -1, .6, .6), '#9aa0a6'); ink(ctx, p, 1.1); }
  if (cfg.torn > .4 && cfg.zombie) blood(ctx, P, 1, A.L * .6, 2.4, 2);
  grit(ctx, P, .22); ink(ctx, P, 1.4);
}
function drawForearm(ctx, cfg, A) {
  const P = limb(A.L, A.a, A.b, A.fb, A.bb, .25, .7), cl = cfg.jacket || cfg.shirt;
  cel(ctx, P, cfg.skin, { s: A.a * .55 });
  if (cfg.sleeves !== 'none' && cfg.sleeves !== 'short' && cl) { celIn(ctx, P, rect(-20, -20, 40, A.L + 16), cl, { s: A.a * .6 }); const cuff = rect(-A.a - 1, A.L - 3.2, A.a * 2 + 2, 3); celIn(ctx, P, cuff, tone(cl, .8), { s: 1, hatch: false }); line(ctx, [-A.b - .5, A.L - 3.2, A.b + .5, A.L - 3.4], .8, INK, .8); }
  else { line(ctx, [A.a * .4, 4, A.b * .3, A.L * .6], .5, tone(cfg.skin, .5, 1), .5); if (cfg.zombie) line(ctx, [-A.a * .2, 6, A.b * .2, A.L * .7, -A.b * .3, A.L - 2], .5, '#3a2a3a', .6); }
  const X2 = new Set(cfg.x || []);
  if (X2.has('exo')) { const r = rect(A.a - .2, 2, 1.8, A.L - 4); cel(ctx, r, '#4f555c', { s: .5, hatch: false }); ink(ctx, r, .7); fillP(ctx, ell(A.a + .7, 0, 2, 2), '#2a2d31'); ink(ctx, ell(A.a + .7, 0, 2, 2), .7); }
  if (X2.has('nano')) { const r = path(`M ${A.a - 1} 3 L ${A.a + 1.6} 4 L ${A.b + 1.4} ${A.L - 4} L ${A.b - 1} ${A.L - 3} Z`); cel(ctx, r, '#1c2027', { s: .8, lt: 2 }); line(ctx, [A.a, 5, A.b, A.L - 5], .5, '#2fb8e6'); ink(ctx, r, .8); }
  if (cfg.zombie && cfg.blood > .4) blood(ctx, P, 0, A.L * .4, 1.8, 2, true);
  grit(ctx, P, .22); ink(ctx, P, 1.3);
}
function drawHand(ctx, cfg, kind, k) {
  const s = cfg.skin;
  if (kind === 'fist') {
    const P = path(`M ${-3.2 * k} -1 C ${-4 * k} 3 ${-3.6 * k} 7.4 ${-1.6 * k} 8.6 C ${1 * k} 9.6 ${3.6 * k} 8.6 ${4.4 * k} 6 C ${5 * k} 3.4 ${4.4 * k} .4 ${3.2 * k} -1 Z`);
    cel(ctx, P, s, { s: 1.4, hatch: false }); line(ctx, [-2.6 * k, 5.6 * k, 2.2 * k, 6 * k], .5, INK, .7); line(ctx, [-2.4 * k, 3.4 * k, 2.6 * k, 3.6 * k], .4, INK, .5);
    const th = ell(3.4 * k, 3.4 * k, 1.5 * k, 2.4 * k, -.4); cel(ctx, th, s, { s: .6, hatch: false }); ink(ctx, th, .7);
    ink(ctx, P, 1.1); return;
  }
  // раскрытая/скрюченная кисть зомби
  const P = path(`M ${-2.8 * k} -1 C ${-3.6 * k} 2 ${-3.4 * k} 5 ${-2.4 * k} 6 L ${2.6 * k} 6.4 C ${3.6 * k} 4 ${3.6 * k} 1.4 ${2.8 * k} -1 Z`);
  cel(ctx, P, s, { s: 1.2, hatch: false });
  for (let i = 0; i < 4; i++) {
    const fx = (-2 + i * 1.4) * k, F = limb(5 * k - Math.abs(i - 1.5) * .6, .75 * k, .6 * k, 0, 0); ctx.save(); ctx.translate(fx, 5.4 * k); ctx.rotate(kind === 'claw' ? -.5 + i * .05 : -.15); cel(ctx, F, s, { s: .4, hatch: false }); ink(ctx, F, .6); if (cfg.zombie) fillP(ctx, ell(0, 5 * k - .4, .5, .7), '#2b2420'); ctx.restore();
  }
  const th = limb(3.6 * k, .8 * k, .6 * k); ctx.save(); ctx.translate(2.6 * k, 1.6 * k); ctx.rotate(-.8); cel(ctx, th, s, { s: .4, hatch: false }); ink(ctx, th, .6); ctx.restore();
  ink(ctx, P, 1);
}
function drawThigh(ctx, cfg, L) {
  const P = limb(L.L, L.a, L.b, L.fb, L.bb);
  if (cfg.legless) { cel(ctx, P, cfg.pants, { s: L.a * .5 }); const st = path(`M ${-L.b - 1} ${L.L - 3} L ${L.b + 1} ${L.L - 3.6} L ${L.b + .6} ${L.L + 2} C ${0} ${L.L + 5} ${-L.b} ${L.L + 4} ${-L.b - 1} ${L.L - 3} Z`); fillP(ctx, st, '#5a0d0a'); fillP(ctx, ell(0, L.L, L.b * .4, 1.2), '#d8cfb8'); blood(ctx, P, 0, L.L - 4, 3, 3, true); ink(ctx, P, 1.4); return; }
  cel(ctx, P, cfg.pants, { s: L.a * .55 });
  line(ctx, [L.a * .2, L.L * .2, L.a * .5, L.L * .55, L.b * .1, L.L - 2], .6, tone(cfg.pants, .4, 1), .6);
  const X2 = new Set(cfg.x || []);
  if (X2.has('exo')) { const r = rect(-L.a - .6, 3, 1.8, L.L - 6); cel(ctx, r, '#4f555c', { s: .5, hatch: false }); ink(ctx, r, .7); }
  if (X2.has('nano')) { const r = path(`M ${L.a - 2} 4 L ${L.a + 1.6} 6 L ${L.b + 1.4} ${L.L - 6} L ${L.b - 2} ${L.L - 4} Z`); cel(ctx, r, '#1c2027', { s: 1, lt: 2 }); line(ctx, [L.a - .4, 7, L.b, L.L - 7], .5, '#2fb8e6'); ink(ctx, r, .9); }
  if (cfg.coat) celIn(ctx, P, rect(-20, -10, 40, 22), cfg.coatCol || '#dfe3e6', { s: 2 });
  if (cfg.zombie && cfg.blood > .5) blood(ctx, P, 1, L.L * .5, 2.4, 3);
  grit(ctx, P, .24); ink(ctx, P, 1.5);
}
function drawShin(ctx, cfg, L) {
  const P = limb(L.L, L.a, L.b, L.fb, L.bb, .28, .7);
  cel(ctx, P, cfg.pants, { s: L.a * .55 });
  line(ctx, [-L.a * .6, 2, -L.a * .2, 5, L.a * .4, 3], .6, tone(cfg.pants, .4, 1), .7);   // складка колена
  const X2 = new Set(cfg.x || []);
  if (X2.has('pads')) { const p = path(`M ${L.a - 3} -3 L ${L.a + 2} -2.6 C ${L.a + 2.8} 1 ${L.a + 2.6} 5 ${L.a + 1.6} 7 L ${L.a - 3} 6.6 Z`); cel(ctx, p, cfg.padCol || '#55595c', { s: 1, lt: 1.7 }); fillP(ctx, ell(L.a, 2, .5, .5), '#9aa0a6'); ink(ctx, p, 1); }
  if (X2.has('exo')) { fillP(ctx, ell(-L.a - .2, 0, 2.4, 2.4), '#2a2d31'); ink(ctx, ell(-L.a - .2, 0, 2.4, 2.4), .7); const r = rect(-L.a - .8, 2, 1.6, L.L - 6); cel(ctx, r, '#4f555c', { s: .5, hatch: false }); ink(ctx, r, .7); }
  if (X2.has('nano')) { const r = path(`M ${L.a - 2} 2 L ${L.a + 1.4} 3 L ${L.b + 1.2} ${L.L - 8} L ${L.b - 2} ${L.L - 7} Z`); cel(ctx, r, '#1c2027', { s: 1, lt: 2 }); line(ctx, [L.a - .2, 5, L.b, L.L - 10], .5, '#2fb8e6'); ink(ctx, r, .9); }
  if (cfg.zombie && cfg.torn > .35) { const hx = L.a * .2, hy = 4; const hp = ell(hx, hy, 2.6, 2); ctx.save(); ctx.clip(P); cel(ctx, hp, cfg.skin, { s: .6, hatch: false }); blood(ctx, hp, hx, hy, 1.4, 2, true); ink(ctx, hp, .6); ctx.restore(); }
  grit(ctx, P, .24); ink(ctx, P, 1.4);
}
function drawFoot(ctx, cfg) {
  const low = cfg.suit || cfg.coat;
  const P = low ? path('M -4.2 -2.6 L 4 -2.6 L 4.6 1 C 8.6 1.4 13 2 14.8 4 C 15.4 5 15.2 6.2 14.6 7 L -5 7 C -5.6 5 -5.2 1 -4.2 -2.6 Z')
    : path('M -4.8 -7.4 L 4.4 -7.4 L 5 .4 C 8.6 .9 13.2 1.6 15.2 3.8 C 16 4.8 16 6 15.4 7 L -5.4 7 C -6 5 -5.8 2 -4.8 -7.4 Z');
  const sh = cfg.shoes || '#1d1e22';
  cel(ctx, P, sh, { s: 2, h: .7, lt: 1.6 });
  fillP(ctx, rect(-5.6, 5.4, 21.4, 1.8), tone(sh, .45));
  line(ctx, [-5.4, 5.4, 15.6, 5.4], .6, INK);
  if (!low) { for (let i = 0; i < 3; i++) line(ctx, [2.6, -5.6 + i * 2.2, 5, -4.8 + i * 2.2], .5, '#8a8070', .8); line(ctx, [6, 1.2, 9, 4], .5, INK, .5); }
  grit(ctx, P, .3); ink(ctx, P, 1.4);
}

// ---------- оружие (рукоять в 0,0, направлено вверх) ----------
export function drawWeapon(ctx, wi, part = 'all') {
  if (part === 'glow') {
    if (wi === 4) { fillP(ctx, ell(0, -48, 4.2, 4.2), '#ffe34d', .9); line(ctx, [0, -48, -5, -54, -2, -56, -7, -60], .9, '#fff6a0'); line(ctx, [0, -48, 5, -53, 3, -57], .9, '#fff6a0'); }
    if (wi === 5) { fillP(ctx, rect(-1.8, -53.5, 3.6, 42), '#7ff0ff'); }
    if (wi === 6) { fillP(ctx, path('M -2 -4 L 2 -4 L 1.2 -55 L 0 -61 L -1.2 -55 Z'), '#c9a6ff'); }
    return;
  }
  if (wi === 1) { const P = rect(-2.2, -52, 4.4, 58); cel(ctx, P, '#7d8794', { s: 1.4, lt: 1.7, hatch: false }); const f = rect(-3.2, -52, 6.4, 6); cel(ctx, f, '#3a3e44', { s: 1, hatch: false }); ink(ctx, f, .9); blood(ctx, P, 0, -42, 2, 1); grit(ctx, P, .4); line(ctx, [-2.2, 2, 2.2, 2], .6, INK); ink(ctx, P, 1.2); return [-6, -56, 6, 8]; }
  if (wi === 2) { const P = path('M -1.8 6 L 1.8 6 L 2.4 -14 C 3.4 -30 4.2 -44 3.6 -50 C 2.6 -54 -2.6 -54 -3.6 -50 C -4.2 -44 -3.4 -30 -2.4 -14 Z'); cel(ctx, P, '#9a6a3a', { s: 1.6 }); line(ctx, [-.6, -8, -1, -46], .5, '#c89a62', .6); const g = rect(-2.2, -4, 4.4, 10); cel(ctx, g, '#2b241e', { s: .8, hatch: false }); ink(ctx, g, .8);
    for (let i = 0; i < 7; i++) { const y = -44 + i * 4.6, sd = i % 2 ? 1 : -1; line(ctx, [sd * 3, y, sd * 7.6, y - 1.2], .8, '#c8ced6'); fillP(ctx, ell(sd * 3.2, y, .7, .7), '#6a6e74'); } blood(ctx, P, 0, -40, 2.6, 2, true); grit(ctx, P, .4); ink(ctx, P, 1.2); return [-9, -56, 9, 8]; }
  if (wi === 3) { const g = rect(-1.8, -2, 3.6, 11); cel(ctx, g, '#2b241e', { s: .8, hatch: false }); [1, 5].forEach(y => fillP(ctx, ell(0, y, .6, .6), '#9aa0a6')); ink(ctx, g, .9); const gu = rect(-3.6, -3.4, 7.2, 2); fillP(ctx, gu, '#3a3e44'); ink(ctx, gu, .7);
    const P = path('M -2.2 -3.4 L 2.6 -3.4 C 4 -20 5.6 -36 6.6 -44 C 6.8 -48 4 -50.4 1.6 -48.6 C -1 -40 -2 -24 -2.2 -3.4 Z'); cel(ctx, P, '#c4ccd6', { s: 1.2, lt: 1.5, hatch: false }); line(ctx, [-1.4, -4, -.6, -30, 2, -47], .6, '#4a5058', .8); line(ctx, [2.4, -6, 5.6, -40], .6, '#ffffff', .7); blood(ctx, P, 3, -38, 2, 2, true); grit(ctx, P, .3); ink(ctx, P, 1.1); return [-6, -54, 9, 11]; }
  if (wi === 4) { const P = rect(-2.4, -46, 4.8, 54); cel(ctx, P, '#1b1e24', { s: 1.2, lt: 2 }); const g = rect(-2.8, -2, 5.6, 9); cel(ctx, g, '#c9a422', { s: .8, hatch: false }); ink(ctx, g, .8); for (let i = 0; i < 3; i++) line(ctx, [-2.4, -40 + i * 3, 2.4, -40 + i * 3], .6, '#8a8f94');
    fillP(ctx, ell(0, -48, 3.4, 3.4), '#ffe34d'); fillP(ctx, ell(0, -48, 1.6, 1.6), '#ffffff'); line(ctx, [0, -48, -5, -54, -2, -56, -7, -60], .7, '#fff6a0'); line(ctx, [0, -48, 5, -53, 3, -57], .7, '#fff6a0'); ink(ctx, P, 1.1); return [-9, -62, 9, 9]; }
  if (wi === 5) { const b = path('M -3.2 -2 L 3.6 -2 L 4.4 -12 L -4 -12 Z'); cel(ctx, b, '#4b5668', { s: 1.2, lt: 1.6 }); ink(ctx, b, 1); const g = rect(-2, -2, 4, 10); cel(ctx, g, '#2b241e', { s: .8, hatch: false }); ink(ctx, g, .8);
    fillP(ctx, rect(-2.6, -54, 5.2, 42), 'rgba(89,225,255,.35)'); fillP(ctx, rect(-1.4, -53, 2.8, 41), '#7ff0ff'); fillP(ctx, rect(-.5, -52, 1, 39), '#ffffff'); return [-6, -57, 6, 9]; }
  if (wi === 6) { const g = rect(-1.8, -2, 3.6, 11); cel(ctx, g, '#2b241e', { s: .8, hatch: false }); ink(ctx, g, .8); const gu = path('M -6 -4 L 6 -4 L 4 -1.6 L -4 -1.6 Z'); cel(ctx, gu, '#6c4fa8', { s: .8, lt: 1.8, hatch: false }); ink(ctx, gu, .8);
    fillP(ctx, path('M -3.4 -4 L 3.4 -4 L 2.2 -56 L 0 -64 L -2.2 -56 Z'), 'rgba(166,107,255,.35)'); const P = path('M -2 -4 L 2 -4 L 1.2 -55 L 0 -61 L -1.2 -55 Z'); fillP(ctx, P, '#d6baff'); line(ctx, [0, -6, 0, -58], .8, '#ffffff'); return [-7, -66, 7, 9]; }
  return null;
}

// ---------- сборка описаний ----------
export function humanSpec(cfg) {
  const body = cfg.style === 'brute' ? 'brute' : cfg.style === 'bloater' ? 'fat' : cfg.style === 'thin' ? 'thin' : 'normal';
  const w = { thin: .84, normal: 1, fat: 1.05, brute: 1.16 }[body], lw = { thin: .82, normal: 1, fat: 1.25, brute: 1.25 }[body];
  const T = { w, fat: body === 'fat' ? 1 + (cfg.fat || 1) * .2 : 0, mus: body === 'brute' ? 1 : 0 };
  const arm = (big) => big ? { U: { L: 28, a: 8.4, b: 7, fb: 3, bb: 2 }, F: { L: 25, a: 7.6, b: 6.6, fb: 2.6, bb: 1 }, hk: 1.6 }
    : { U: { L: 26, a: 5.2 * lw, b: 4.2 * lw, fb: 1.2 * lw, bb: .8 * lw }, F: { L: 23, a: 4.4 * lw, b: 3.2 * lw, fb: 1.4 * lw, bb: .4 * lw }, hk: lw > 1.1 ? 1.15 : 1 };
  const AN = arm(cfg.bigArm === 'R' || cfg.bigArm === 'N'), AF = arm(cfg.bigArm === 'L');
  const LG = { T: { L: 30, a: 7.2 * lw, b: 5.4 * lw, fb: 1.6 * lw, bb: 1.2 * lw }, S: { L: 31, a: 5.3 * lw, b: 3.6 * lw, fb: .4, bb: 1.8 * lw } };
  if (cfg.legless) LG.T.L = 14;
  const handKind = cfg.zombie ? (cfg.style === 'thin' || cfg.style === 'crawler' ? 'claw' : 'open') : 'fist';
  const parts = {};
  const P = (name, bounds, draw, far = 0) => { parts[name] = { bounds, draw, far }; };
  const tb = 16 * w + 12 + T.fat * 9;
  P('torso', [-tb - 12, -56, tb + 6, 18], ctx => drawTorso(ctx, cfg, T));
  P('head', [-17, -38, 17, 4], ctx => drawHead(ctx, cfg));
  for (const [side, A, far] of [['N', AN, 0], ['F', AF, .42]]) {
    const U = A.U, F = A.F;
    P('uarm' + side, [-U.a - U.fb - 3, -U.a - 7, U.a + U.fb + 3, U.L + U.b + 2], ctx => drawUpperArm(ctx, cfg, U), far);
    P('farm' + side, [-F.a - F.fb - 3, -F.a - 4, F.a + F.fb + 4, F.L + F.b + 2], ctx => drawForearm(ctx, cfg, F), far);
    P('hand' + side, [-6 * A.hk, -3, 7 * A.hk, 13 * A.hk], ctx => drawHand(ctx, cfg, handKind, A.hk), far);
  }
  for (const [side, far] of [['N', 0], ['F', .42]]) {
    P('thigh' + side, [-LG.T.a - 4, -LG.T.a - 2, LG.T.a + 4, LG.T.L + LG.T.b + 6], ctx => drawThigh(ctx, cfg, LG.T), far);
    if (!cfg.legless) {
      P('shin' + side, [-LG.S.a - LG.S.bb - 4, -LG.S.a - 4, LG.S.a + 6, LG.S.L + LG.S.b + 2], ctx => drawShin(ctx, cfg, LG.S), far);
      P('foot' + side, [-7, -9, 17, 9], ctx => drawFoot(ctx, cfg), far);
    }
  }
  if (cfg.coat) P('coatTail', [-18 * w - 2, 0, 14 * w + 4, 30], ctx => {
    const C = path(`M ${-11.5 * w} 0 C ${-13 * w} 8 ${-15 * w} 16 ${-17 * w} 25 L ${-13 * w} 23.4 L ${-10 * w} 26 L ${-6 * w} 23.6 L ${-2 * w} 25.4 C ${2 * w} 16 ${6 * w} 8 ${9 * w} 0 Z`);
    cel(ctx, C, cfg.coatCol || '#dfe3e6', { s: 3 }); grit(ctx, C, .4); blood(ctx, C, -6, 12, 2.4, 3); line(ctx, [-4, 2, -8, 22], .7, INK, .6); ink(ctx, C, 1.5);
  });
  return {
    parts, lw,
    arm: { N: AN, F: AF }, leg: LG,
    layout: { hipY: cfg.legless ? 30 : H.hipY, shoulder: [H.shoulder[0], H.shoulder[1]], neck: H.neck, hand: handKind },
  };
}
