// 2D-зверьё в профиль (собаки, кошки, крысы, химеры): туловище, голова, хвост и по две секции на каждую лапу.
import { cel, grit, ink, line, fillP, path, ell, rect, blood, limb, tone, mixc, seed, rnd, PI, INK } from './ink.js';

function bodyShape(k, bulk) {
  const b = bulk;
  return path(`M ${-31 * k} ${-4} C ${-30 * k} ${-11 * b} ${-22 * k} ${-13 * b} ${-12 * k} ${-12 * b} C 0 ${-11 * b} ${10 * k} ${-14 * b} ${18 * k} ${-13.5 * b} `
    + `C ${24 * k} ${-12.5 * b} ${27.5 * k} ${-6 * b} ${26.5 * k} ${2 * b} C ${25.5 * k} ${8 * b} ${20 * k} ${10 * b} ${14 * k} ${9 * b} `
    + `C ${6 * k} ${8 * b} ${-2 * k} ${5.4 * b} ${-10 * k} ${5.6 * b} C ${-18 * k} ${6 * b} ${-26 * k} ${7 * b} ${-30 * k} ${3 * b} Z`);
}
function drawBody(ctx, c) {
  const k = c.long || 1, b = c.bulk || 1, P = bodyShape(k, b), fur = c.fur;
  cel(ctx, P, fur, { s: 4, h: 1.2, dk: .45 });
  // рёбра и проплешины
  for (let i = 0; i < 4; i++) line(ctx, [(4 + i * 3.4) * k, -6 * b, (6 + i * 3.4) * k, 0, (5 + i * 3.4) * k, 5 * b], .7, tone(fur, .45, 1), .7);
  seed(c.seed || 3);
  for (let i = 0; i < 3; i++) { const x = (-20 + rnd() * 34) * k, y = (-8 + rnd() * 10) * b; const pa = ell(x, y, 3 + rnd() * 3, 2 + rnd() * 2, rnd()); ctx.save(); ctx.clip(P); cel(ctx, pa, c.skin || '#8a6a64', { s: .8, hatch: false }); ink(ctx, pa, .5, tone(c.skin || '#8a6a64', .5)); ctx.restore(); }
  // шерсть: штрихи по контуру спины
  for (let i = 0; i < 16; i++) { const x = (-28 + i * 3.2) * k, y = -11.5 * b + Math.abs(i - 9) * .25; line(ctx, [x, y + 1.6, x - 1.2, y - .6], .6, tone(fur, .4), .8); }
  blood(ctx, P, (-6 + rnd() * 10) * k, -2, 3, 2, true);
  if (c.plague) for (let i = 0; i < 5; i++) { const x = (-22 + rnd() * 40) * k, y = (-10 + rnd() * 8) * b, g = ell(x, y, 1.8 + rnd() * 2, 1.6 + rnd() * 1.6); ctx.save(); ctx.clip(P); cel(ctx, g, '#8a8a3a', { s: .6, hatch: false }); fillP(ctx, ell(x + .4, y - .6, .5, .4), '#e8e2a0'); ink(ctx, g, .6); ctx.restore(); }
  grit(ctx, P, .3);
  ink(ctx, P, 1.6);
  if (c.spikes) for (let i = 0; i < 7; i++) { const x = (-20 + i * 6) * k, y = -12.4 * b - Math.sin(i * .6) * .6, s = path(`M ${x - 2} ${y + 1} L ${x - .6} ${y - 6 - (i % 2) * 2} L ${x + 1.6} ${y + 1} Z`); cel(ctx, s, '#c8bfa8', { s: .6, hatch: false }); ink(ctx, s, .8); }
  if (c.collar) { const cl = path(`M ${18 * k} ${-13 * b} C ${22 * k} ${-12 * b} ${25 * k} ${-8 * b} ${26 * k} ${-4 * b} L ${23.6 * k} ${-3.4 * b} C ${22.6 * k} ${-7 * b} ${20.6 * k} ${-10 * b} ${17.4 * k} ${-11 * b} Z`); cel(ctx, cl, c.collar, { s: .6, hatch: false }); ink(ctx, cl, .9); }
}
function drawHead(ctx, c) {
  const sn = c.snout || 1, hw = c.headW || 1;
  const P = path(`M -5 6 C -6.6 -1 -3 -8 3 -10.4 C 8 -12.6 12 -11.6 15 -9.6 L ${15 + 9 * sn} -7.4 C ${17 + 10.6 * sn} -6.8 ${17 + 11 * sn} -4 ${16 + 10 * sn} -2.6 L ${15 + 9 * sn} -1.4 L ${12 + 6 * sn} .6 C 12 2.6 8 3.6 4 7 Z`);
  const fur = c.fur;
  // ухо
  const big = c.ears === 'big', round = c.ears === 'round';
  const E = round ? ell(2.4, -11.4, 3.6, 3.6) : path(`M 1 -9 L ${big ? -.6 : 1.4} ${big ? -21 : -17.6} L ${big ? 8 : 7.4} -10.6 Z`);
  cel(ctx, E, round ? tone(c.skin || '#c99a96', .9) : fur, { s: 1.2, hatch: false }); if (!round) fillP(ctx, path(`M 2.4 -9.6 L ${big ? 1.2 : 2.2} ${big ? -17.6 : -15} L ${big ? 6.4 : 6} -10.6 Z`), '#5a3a3a', .7); ink(ctx, E, 1.1);
  cel(ctx, P, fur, { s: 2.6, dk: .45 });
  // пасть с клыками
  const m = path(`M ${12 + 6 * sn} .6 L ${15 + 9 * sn} -1.4 L ${15.4 + 9 * sn} .6 C ${13 + 7 * sn} 3.2 ${9 + 3 * sn} 3.6 ${7} 2.4 Z`); fillP(ctx, m, '#2a0606');
  for (let i = 0; i < 4; i++) { const x = 8 + (i * 2.2) * sn + 1; fillP(ctx, path(`M ${x} 1 L ${x + .8} 1 L ${x + .4} ${-.8 - (i === 3 ? 1 : 0)} Z`), '#e8e0c8'); fillP(ctx, path(`M ${x + .6} 1.6 L ${x + 1.4} 1.6 L ${x + 1} 3`), '#d8d0b8'); }
  // нос, глаз
  fillP(ctx, ell(16 + 10 * sn, -4.8, 1.6, 1.4), '#0d0c0c');
  fillP(ctx, ell(10, -6.6, 2.2, 1.6), '#1a0d0a');
  fillP(ctx, ell(10.4, -6.6, 1.3, .9), c.eye || '#ffcf3d'); fillP(ctx, ell(10.7, -6.8, .4, .35), '#ffffff');
  line(ctx, [7.4, -8.6, 10, -9.2, 12.6, -7.6], .9, INK);   // нахмуренная бровь
  line(ctx, [11, -9.6, 14, -8.4, 16 + 8 * sn, -7.2], .6, tone(fur, .45), .8);   // морщины морды
  seed((c.seed || 3) + 4); blood(ctx, P, 12 + 4 * sn, 2.6, 1.8, 3, true);
  grit(ctx, P, .3); ink(ctx, P, 1.4);
  if (c.collar && c.spikes) for (let i = 0; i < 3; i++) fillP(ctx, path(`M ${-3 + i * 2.6} 4 L ${-2 + i * 2.6} 7.6 L ${-1 + i * 2.6} 4 Z`), '#c8ced6');
}
function drawLegUp(ctx, c, front) {
  const P = front ? limb(16, 5.8, 3.4, 1.6, 1.2) : limb(16, 8.4, 3.8, 3.4, 3.2, .3, .7);
  cel(ctx, P, c.fur, { s: 2, dk: .45 }); grit(ctx, P, .3); ink(ctx, P, 1.3);
}
function drawLegLo(ctx, c) {
  const P = limb(17, 3.3, 2.4, .2, .8);
  cel(ctx, P, c.fur, { s: 1.4, dk: .45 });
  const paw = path('M -3 15.4 C -3.6 18 -2.4 19.6 0 19.6 L 5.6 19.6 C 6.6 19.6 6.8 18 6 17 C 4.4 15.6 2 15 -3 15.4 Z');
  cel(ctx, paw, tone(c.fur, .85), { s: .8, hatch: false }); for (let i = 0; i < 3; i++) line(ctx, [1.6 + i * 1.6, 18.6, 2.6 + i * 1.6, 20.4], .7, '#141210');
  grit(ctx, P, .3); ink(ctx, P, 1.2); ink(ctx, paw, 1);
}
function drawTail(ctx, c) {
  const L = 20 * (c.tailLen || 1) / 1.2, naked = !!c.tailCol;
  const P = limb(L, naked ? 1.8 : 3.4, naked ? .5 : 1.6, .4, .4);
  cel(ctx, P, c.tailCol || c.fur, { s: 1.2, dk: .5, hatch: !naked });
  if (naked) for (let i = 2; i < L; i += 2.2) line(ctx, [-1.4, i, 1.4, i + .4], .4, tone(c.tailCol, .55), .7);
  else for (let i = 0; i < 6; i++) line(ctx, [-2, 2 + i * 3, -3.4, 4 + i * 3], .5, tone(c.fur, .4), .7);
  ink(ctx, P, 1.1);
}
export function quadSpec(c) {
  const k = c.long || 1, b = c.bulk || 1, parts = {}, P = (n, bounds, draw, far = 0) => { parts[n] = { bounds, draw, far }; };
  P('body', [-34 * k, -22 * b, 30 * k, 12 * b], ctx => drawBody(ctx, c));
  P('head', [-8, -24, 30 * (c.snout || 1) + 2, 10], ctx => drawHead(ctx, c));
  P('tail', [-6, -3, 6, 26 * (c.tailLen || 1)], ctx => drawTail(ctx, c));
  for (const [s, far] of [['N', 0], ['F', .42]]) {
    P('fu' + s, [-7, -7, 7, 21], ctx => drawLegUp(ctx, c, true), far);
    P('hu' + s, [-10, -9, 10, 22], ctx => drawLegUp(ctx, c, false), far);
    P('fl' + s, [-5, -4, 9, 22], ctx => drawLegLo(ctx, c), far);
    P('hl' + s, [-5, -4, 9, 22], ctx => drawLegLo(ctx, c), far);
  }
  return { parts, k, b };
}
