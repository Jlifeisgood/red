// Сборка 2D-персонажа из нарисованных частей: иерархия плоскостей по суставам + процедурные анимации с плавными переходами.
import * as THREE from 'three';
import { bake } from './ink.js';
import { humanSpec, drawWeapon, H } from './human2d.js';
import { quadSpec } from './quad2d.js';

const PI = Math.PI;
const TEX = new Map();                                   // кэш текстур частей: одинаковые враги не перерисовываются
function baked(key, spec) {
  let b = TEX.get(key);
  if (!b) { b = bake(spec.bounds, spec.draw, spec.far); TEX.set(key, b); if (TEX.size > 400) { const k0 = TEX.keys().next().value; TEX.get(k0).tex.dispose(); TEX.delete(k0); } }
  return b;
}
function sprite(key, spec, order, mats, glow) {
  const b = baked(key, spec);
  const mat = new THREE.MeshStandardMaterial({ map: b.tex, emissiveMap: b.tex, emissive: new THREE.Color(glow ? 2.2 : .4, glow ? 2.2 : .4, glow ? 2.2 : .4), transparent: true, alphaTest: .3, depthWrite: false, roughness: 1, metalness: 0, side: THREE.DoubleSide });
  mat.userData.baseEmissive = glow ? 2.2 : .4; if (glow) mat.userData.glow = true;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(b.w, b.h), mat);
  m.position.set(b.cx, -b.cy, 0); m.renderOrder = order; m.castShadow = true;
  mats.push(mat); return m;
}
const G = (parent, x = 0, y = 0) => { const g = new THREE.Group(); g.position.set(x, y, 0); parent.add(g); return g; };

// ---------- ключевые кадры ----------
const sm = t => t * t * (3 - 2 * t);
function lerpPose(a, b, t) { const o = {}; for (const k in a) o[k] = a[k] + ((b[k] == null ? a[k] : b[k]) - a[k]) * t; return o; }
function keys(p, base, list, hold) {
  const ks = [[0, {}], ...list, [1, hold ? list[list.length - 1][1] : {}]];
  let i = 0; while (i < ks.length - 2 && p > ks[i + 1][0]) i++;
  const [p0, A] = ks[i], [p1, B] = ks[i + 1], t = sm(Math.min(1, Math.max(0, (p - p0) / (p1 - p0 || 1))));
  return lerpPose(Object.assign({}, base, A), Object.assign({}, base, B), t);
}

// ---------- позы человека (углы в радианах; + = вперёд для конечностей, − = наклон вперёд для корпуса и головы) ----------
const HZ = { torso: 0, head: 0, uarmN: 0, farmN: 0, handN: 0, uarmF: 0, farmF: 0, handF: 0, thighN: 0, shinN: 0, footN: 0, thighF: 0, shinF: 0, footF: 0, bx: 0, by: 0, rot: 0, wpn: 0 };
function legs(o, tn, sn, tf, sf) { o.thighN = tn; o.shinN = sn; o.footN = -(tn + sn) * .9; o.thighF = tf; o.shinF = sf; o.footF = -(tf + sf) * .9; return o; }
const HUMAN = {
  hero: {
    idle: t => { const b = Math.sin(t * 2.1); return legs(Object.assign({}, HZ, { torso: -.04 + .015 * b, head: .03 - .02 * b, uarmN: .3, farmN: 1.45, handN: .15, uarmF: .25, farmF: 1, handF: .1, by: .35 * b }), .14, -.12, -.13, -.05); },
    walk: t => { const a = t * PI * 2 / .8, s = Math.sin(a);
      return legs(Object.assign({}, HZ, { torso: -.09, head: .05, uarmN: .25 - .3 * s, farmN: 1.35, handN: .15, uarmF: .1 + .4 * s, farmF: .5 + .25 * Math.max(0, s), by: -1.6 + 1.8 * Math.abs(Math.cos(a)) }),
        .5 * s, -(.08 + .95 * Math.max(0, Math.sin(a + 1.3))), -.5 * s, -(.08 + .95 * Math.max(0, Math.sin(a + 1.3 + PI)))); },
    attack: { dur: .55, k: [[.3, { uarmN: 2.8, farmN: .7, torso: .14, head: .1, thighN: .32, shinN: -.25, footN: -.07 }], [.46, { uarmN: -.15, farmN: .15, torso: -.38, head: -.12, thighN: .5, shinN: -.45, footN: -.05, thighF: -.4, shinF: -.1, footF: .45, uarmF: -.4 }], [.7, { uarmN: .1, farmN: .6, torso: -.2 }]] },
  },
  zombie: {
    idle: t => { const b = Math.sin(t * 1.7), j = Math.pow(Math.max(0, Math.sin(t * 6.3)), 12) * .14;
      return legs(Object.assign({}, HZ, { torso: -.3 + .03 * b, head: -.22 + .1 * Math.sin(t * 1.1) - j, uarmN: .55 + .08 * b, farmN: .45 + .06 * b, handN: .35, uarmF: .1 + .06 * Math.sin(t * 1.7 + 1), farmF: .18, handF: .25, bx: .8 * Math.sin(t * .9), by: -1.2 + .4 * b }), .05, -.28, -.16, -.05); },
    walk: t => { const a = t * PI * 2 / 1.4, s = Math.sin(a);
      return legs(Object.assign({}, HZ, { torso: -.36 + .05 * Math.sin(a * 2), head: -.24 + .08 * s, uarmN: .6 + .12 * s, farmN: .4, handN: .35, uarmF: .1 - .2 * s, farmF: .2, handF: .25, by: -2.2 + 1.8 * Math.abs(s) }),
        .4 * s, -(.15 + .75 * Math.max(0, Math.sin(a + 1.2))), -.22 * s + .04, -(.28 + .2 * Math.max(0, Math.sin(a + 1.2 + PI)))); },
    attack: { dur: .7, k: [[.3, { torso: -.15, head: .05, uarmN: 1.7, uarmF: 1.4, farmN: .2, farmF: .2 }], [.48, { torso: -.8, head: -.55, uarmN: 1.35, uarmF: 1.2, farmN: .5, farmF: .4, thighN: .45, shinN: -.5, footN: .05 }], [.72, { torso: -.55, head: -.35 }]] },
  },
};
HUMAN.thin = { idle: t => Object.assign(HUMAN.zombie.idle(t * 1.4), { torso: -.5 + .04 * Math.sin(t * 3), head: -.35 + .14 * Math.sin(t * 2.3), uarmN: .7, uarmF: .45 + .1 * Math.sin(t * 2.6), farmN: .6, farmF: .5 }), walk: t => Object.assign(HUMAN.zombie.walk(t * 1.5), { torso: -.55, uarmF: .5 }), attack: HUMAN.zombie.attack };
HUMAN.bloater = { idle: t => { const o = HUMAN.zombie.idle(t * .7); return Object.assign(o, legs(o, .2, -.12, -.22, -.06), { torso: .06 + .03 * Math.sin(t * 1.2), head: -.12, uarmN: .45, farmN: .5, uarmF: .35, farmF: .4 }); },
  walk: t => Object.assign(HUMAN.zombie.walk(t * .75), { torso: .04, uarmN: .5, uarmF: .3 }), attack: { dur: .8, k: [[.35, { torso: .25, uarmN: 1.2, uarmF: 1, head: .1 }], [.55, { torso: -.45, uarmN: 1.5, uarmF: 1.3, head: -.3 }]] } };
HUMAN.brute = { idle: t => Object.assign(HUMAN.zombie.idle(t * .8), { torso: -.42 + .03 * Math.sin(t * 1.4), head: -.12, uarmN: .22 + .05 * Math.sin(t * 1.4), farmN: .2, uarmF: .35, farmF: .4 }),
  walk: t => Object.assign(HUMAN.zombie.walk(t * .85), { torso: -.45, uarmN: .25 + .2 * Math.sin(t * PI * 2 / 1.65) }), attack: { dur: .8, k: [[.32, { uarmN: 3.1, farmN: .4, torso: .12, head: .05 }], [.48, { uarmN: .1, farmN: .05, torso: -.75, head: -.2, thighN: .5, shinN: -.5 }], [.7, { torso: -.6 }]] } };
HUMAN.crawler = {
  idle: t => { const b = Math.sin(t * 1.5); return Object.assign({}, HZ, { torso: -1.42, head: 1.15 + .12 * b, uarmN: 2.2 + .1 * b, farmN: -.2, handN: .6, uarmF: 2.4 - .1 * b, farmF: -.3, handF: .6, thighN: -1.45, thighF: -1.55, by: 0 }); },
  walk: t => { const a = t * PI * 2 / 1.3, s = Math.sin(a); return Object.assign({}, HZ, { torso: -1.42 + .05 * s, head: 1.15 + .08 * s, uarmN: 2.1 + .45 * s, farmN: -.3 - .4 * Math.max(0, Math.cos(a)), handN: .6, uarmF: 2.3 - .45 * s, farmF: -.3 - .4 * Math.max(0, -Math.cos(a)), handF: .6, thighN: -1.45 + .1 * s, thighF: -1.55 - .1 * s, bx: 1.5 * s }); },
  attack: { dur: .7, k: [[.3, { head: 1.4, uarmN: 1.6, uarmF: 1.8 }], [.45, { head: .8, uarmN: 2.9, uarmF: 2.8, torso: -1.3 }]] },
};
const HIT = { dur: .38, k: [[.18, { torso: .32, head: .35, uarmF: .7, farmF: 1.2, bx: -3 }]] };
const DEATH = { dur: 1.3, k: [[.35, { thighN: .9, shinN: -1.5, footN: .6, thighF: .7, shinF: -1.3, footF: .6, torso: -.35, head: -.3, by: -12, uarmN: .2, uarmF: .1 }], [.8, { rot: 1.48, by: -20, bx: -6, thighN: .3, shinN: -.3, footN: 0, thighF: .2, shinF: -.2, footF: 0, torso: .1, head: .5, uarmN: 2.2, farmN: .4, uarmF: -.6, farmF: .3 }], [.92, { rot: 1.52, by: -21 }]] };
const DEATH_CRAWL = { dur: 1, k: [[.6, { head: .2, torso: -1.52, uarmN: 1.7, uarmF: 2.8, by: -2 }]] };

// ---------- позы зверя ----------
const QZ = { body: 0, head: 0, tail: 0, fuN: 0, flN: 0, fuF: 0, flF: 0, huN: .35, hlN: -.7, huF: .35, hlF: -.7, bx: 0, by: 0 };
const QUAD = {
  idle: t => { const b = Math.sin(t * 2.4); return Object.assign({}, QZ, { body: .02 * b, head: .06 * Math.sin(t * 1.3) - .05, tail: .35 * Math.sin(t * 5), by: .5 * b, fuN: .05, fuF: -.05 }); },
  walk: t => { const a = t * PI * 2 / .7, s = Math.sin(a), c = Math.sin(a + PI);
    return Object.assign({}, QZ, { body: .03 * Math.sin(a * 2), head: -.08 + .05 * Math.sin(a * 2), tail: .25 * s, by: 1.2 * Math.abs(Math.cos(a)) - 1,
      fuN: .45 * s, flN: -.7 * Math.max(0, Math.sin(a + 1.2)), fuF: .45 * c, flF: -.7 * Math.max(0, Math.sin(a + 1.2 + PI)),
      huN: .35 + .4 * c, hlN: -.7 - .3 * Math.max(0, Math.sin(a + PI + 1.2)), huF: .35 + .4 * s, hlF: -.7 - .3 * Math.max(0, Math.sin(a + 1.2)) }); },
  attack: { dur: .6, k: [[.3, { body: .12, head: .35, fuN: -.4, fuF: -.3, huN: .7, huF: .6, by: -3 }], [.48, { body: -.18, head: -.35, fuN: .9, fuF: .7, flN: -.2, huN: -.2, huF: -.1, hlN: -.3, by: 3 }]] },
  hit: { dur: .38, k: [[.18, { body: .18, head: .45, bx: -3, tail: -.6 }]] },
  death: { dur: 1.1, k: [[.5, { body: .1, head: -.5, fuN: -.9, flN: 1.6, fuF: -.8, flF: 1.5, huN: 1.4, hlN: -2, huF: 1.3, hlF: -1.9, by: -18, tail: -.8 }], [.85, { body: .16, head: -.75, by: -21 }]] },
};

// ---------- контроллер: базовая петля + разовые движения с переходами ----------
function controller(lib, zero) {
  let base = 'idle', t = 0, one = null, op = 0, from = null, fade = 1, last = null;
  return {
    loop(n) { if (base === n) return; base = n; if (!one) { from = last; fade = 0; } },
    once(n) { if (one === 'death') return; one = n; op = 0; from = last; fade = 0; },
    reset() { one = null; base = 'idle'; op = 0; from = null; fade = 1; },
    get dead() { return one === 'death'; },
    pose(dt) {
      t += dt; let p = lib[base](t);
      if (one) {
        const A = lib[one]; op += dt / A.dur;
        if (op >= 1 && one !== 'death') { one = null; from = last; fade = 0; }
        else p = keys(Math.min(op, 1), p, A.k, one === 'death');
      }
      if (from && fade < 1) { fade = Math.min(1, fade + dt / .14); p = lerpPose(from, p, sm(fade)); }
      last = p; return p;
    },
  };
}

// ---------- сборка человека ----------
export function buildHuman2D(cfg, wi) {
  const S = humanSpec(cfg), key = JSON.stringify(cfg) + '|', mats = [];
  const part = (n, order) => sprite(key + n, S.parts[n], order, mats);
  const root = new THREE.Group(), body = G(root), hips = G(body, 0, S.layout.hipY);
  const torsoG = G(hips);
  const J = {};
  // дальние конечности
  const legF = G(hips, -1.4, 0); legF.add(part('thighF', 14)); J.thighF = legF;
  if (!cfg.legless) { const sh = G(legF, 0, -S.leg.T.L); sh.add(part('shinF', 13)); J.shinF = sh; const ft = G(sh, 0, -S.leg.S.L); ft.add(part('footF', 15)); J.footF = ft; }
  const armF = G(torsoG, -1.6, -S.layout.shoulder[1] + .6); armF.add(part('uarmF', 11)); J.uarmF = armF;
  const faF = G(armF, 0, -S.arm.F.U.L); faF.add(part('farmF', 10)); J.farmF = faF;
  const haF = G(faF, 0, -S.arm.F.F.L); haF.add(part('handF', 12)); J.handF = haF;
  // корпус, ближняя нога, голова
  torsoG.add(part('torso', 20)); J.torso = torsoG;
  const legN = G(hips, 1.4, 0); legN.add(part('thighN', 17)); J.thighN = legN;
  if (!cfg.legless) { const sh = G(legN, 0, -S.leg.T.L); sh.add(part('shinN', 16)); J.shinN = sh; const ft = G(sh, 0, -S.leg.S.L); ft.add(part('footN', 19)); J.footN = ft; }
  if (S.parts.coatTail) hips.add(part('coatTail', 21));
  const neck = G(torsoG, S.layout.neck[0], -S.layout.neck[1]); const hd = part('head', 28); const hs = H.headScale * (cfg.headScale || 1); hd.scale.setScalar(hs); hd.position.multiplyScalar(hs); neck.add(hd); J.head = neck;
  // ближняя рука с оружием
  const armN = G(torsoG, .6, -S.layout.shoulder[1]); armN.add(part('uarmN', 31)); J.uarmN = armN;
  const faN = G(armN, 0, -S.arm.N.U.L); faN.add(part('farmN', 30)); J.farmN = faN;
  const haN = G(faN, 0, -S.arm.N.F.L); haN.add(part('handN', 33)); J.handN = haN;
  let weapon = null;
  if (wi > 0) {
    weapon = G(haN, .6, -4.6); weapon.rotation.z = -2.15;
    weapon.add(sprite('w' + wi, { bounds: WB[wi], draw: ctx => drawWeapon(ctx, wi, 'all'), far: 0 }, 32, mats, false));
    if (wi >= 4) { const g = sprite('wg' + wi, { bounds: WB[wi], draw: ctx => drawWeapon(ctx, wi, 'glow'), far: 0 }, 34, [], true); g.material.blending = THREE.AdditiveBlending; g.castShadow = false; weapon.add(g); }
  }
  const style = cfg.style && HUMAN[cfg.style] ? cfg.style : cfg.zombie ? 'zombie' : 'hero';
  const lib = Object.assign({}, HUMAN[style], { hit: HIT, death: style === 'crawler' ? DEATH_CRAWL : DEATH });
  const ctl = controller(lib);
  return {
    group: root, mats, ctl, kind: 'human',
    apply(p) {
      body.position.set(p.bx, p.by, 0); body.rotation.z = p.rot;
      torsoG.rotation.z = p.torso; J.head.rotation.z = p.head;
      J.uarmN.rotation.z = p.uarmN; J.farmN.rotation.z = p.farmN; J.handN.rotation.z = p.handN;
      J.uarmF.rotation.z = p.uarmF; J.farmF.rotation.z = p.farmF; J.handF.rotation.z = p.handF;
      J.thighN.rotation.z = p.thighN; J.thighF.rotation.z = p.thighF;
      if (J.shinN) { J.shinN.rotation.z = p.shinN; J.footN.rotation.z = p.footN; J.shinF.rotation.z = p.shinF; J.footF.rotation.z = p.footF; }
    },
  };
}
const WB = { 1: [-6, -56, 6, 8], 2: [-9, -56, 9, 8], 3: [-6, -54, 9, 11], 4: [-9, -62, 9, 9], 5: [-6, -57, 6, 9], 6: [-7, -66, 7, 9] };

// ---------- сборка зверя ----------
export function buildQuad2D(cfg) {
  const S = quadSpec(cfg), key = JSON.stringify(cfg) + '|', mats = [], k = S.k, b = S.b;
  const part = (n, order) => sprite(key + n, S.parts[n], order, mats);
  const root = new THREE.Group(), body = G(root, 0, 39);
  const J = {};
  const leg = (name, x, y, order, far) => { const u = G(body, x, y); u.add(part(name[0] + 'u' + far, order + 1)); const l = G(u, 0, -16); l.add(part(name[0] + 'l' + far, order)); J[name[0] + 'u' + far] = u; J[name[0] + 'l' + far] = l; };
  leg('f', 17 * k - 2, -4 * b, 10, 'F'); leg('h', -21 * k - 2, -5 * b, 12, 'F');
  const tail = G(body, -30 * k, 6 * b); tail.add(part('tail', 16)); J.tail = tail;
  body.add(part('body', 20));
  leg('f', 18 * k, -4 * b, 17, 'N'); leg('h', -21 * k, -5 * b, 17, 'N');
  const head = G(body, 22 * k, 10 * b); head.add(part('head', 30)); J.head = head;
  const ctl = controller(QUAD);
  return {
    group: root, mats, ctl, kind: 'quad',
    apply(p) {
      body.position.set(p.bx, 39 * Math.min(1, b) + p.by, 0); body.rotation.z = p.body;
      J.head.rotation.z = p.head; J.tail.rotation.z = -2.2 + p.tail;
      for (const s of ['N', 'F']) { J['fu' + s].rotation.z = p['fu' + s]; J['fl' + s].rotation.z = p['fl' + s]; J['hu' + s].rotation.z = p['hu' + s]; J['hl' + s].rotation.z = p['hl' + s]; }
    },
  };
}
