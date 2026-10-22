// Процедурный человек/зомби: один скиннинг-меш + снаряжение на костях + анимации.
import * as THREE from 'three';
import { PI, V3, C, mix, shade, smooth, clamp, noise, fbm, setSeed, rand, taper, alignAlong, ellipsoid, latheProfile, SkinBuilder, makeSkeleton, clip, cyc, skinMat, pbr, glow } from './util.js';

const SPEC = [
  ['root', null, [0, 0, 0]], ['hips', 'root', [0, 60, 0]], ['spine', 'hips', [0, 70, 0]], ['chest', 'spine', [0, 86, 0]],
  ['neck', 'chest', [0, 103, 0]], ['head', 'neck', [0, 112, 1]],
  ['uarmL', 'chest', [17, 99.5, 0]], ['farmL', 'uarmL', [18, 77, 1]], ['handL', 'farmL', [18.6, 56.5, 2]],
  ['uarmR', 'chest', [-17, 99.5, 0]], ['farmR', 'uarmR', [-18, 77, 1]], ['handR', 'farmR', [-18.6, 56.5, 2]],
  ['thighL', 'hips', [7.6, 59, 0]], ['shinL', 'thighL', [7.7, 32, 1.5]], ['footL', 'shinL', [7.7, 6.5, .5]],
  ['thighR', 'hips', [-7.6, 59, 0]], ['shinR', 'thighR', [-7.7, 32, 1.5]], ['footR', 'shinR', [-7.7, 6.5, .5]],
];

// ---------- окраска ----------
function painter(cfg, splats) {
  const skin = C(cfg.skin), shirt = cfg.shirt ? C(cfg.shirt) : null, pants = C(cfg.pants), shoes = C(cfg.shoes || '#1d1e22');
  const blood = C('#4a0a0a'), bloodFresh = C('#7a1010'), flesh = C('#6e2a26'), vein = C(cfg.zombie ? '#3d2b4a' : '#b08870');
  const bloodAt = (x, y, z) => {
    let f = 0;
    for (const s of splats) { const d = Math.hypot(x - s.x, y - s.y, z - s.z); if (d < s.r) f = Math.max(f, (1 - d / s.r) * (.65 + .7 * noise(x * .4, y * .4, z * .4))); }
    return f;
  };
  const skinCol = (x, y, z) => {
    let c = shade(skin, .8 + .34 * fbm(x * .09, y * .09, z * .09));
    if (cfg.zombie) c.lerp(C('#7d8a84'), .25);
    if (cfg.zombie) {
      const v = Math.abs(noise(x * .23, y * .23, z * .23) * 2 - 1); if (v < .07) c = mix(c, vein, .55);
      const rot = fbm(x * .05 + 9, y * .05, z * .05); if (rot > .62) c = mix(c, C('#3f4a2c'), (rot - .62) * 2.2);
    }
    return c;
  };
  const cloth = (base, x, y, z) => {
    let c = shade(base, .7 + .38 * fbm(x * .11, y * .11, z * .11));
    if (cfg.torn) { const t = fbm(x * .08 + 3, y * .08, z * .08); if (t > 1 - cfg.torn * .32) return mix(skinCol(x, y, z), flesh, cfg.zombie ? .45 : .1); }
    return c;
  };
  const ao = (x, y, z) => { let k = 1; if (Math.abs(x) < 3.4 && y > 52 && y < 62) k *= .58; if (Math.abs(x) > 12 && Math.abs(x) < 18 && y > 88 && y < 99 && Math.abs(z) < 7) k *= .72; if (y > 99 && y < 107 && z > 2) k *= .75; if (y > 55 && y < 60 && Math.abs(Math.abs(x) - 8) < 2.5) k *= .85; return k; };
  const GRAY = C('#7a7a74');
  const finish = (c, x, y, z) => {
    c = c.clone().multiplyScalar(ao(x, y, z));
    // выцветание, грязь и копоть: убираем «игрушечную» насыщенность
    const g = fbm(x * .07 + 5, y * .07, z * .07), low = smooth(34, 0, y);
    c.lerp(GRAY, .22 + (cfg.zombie ? .12 : 0)); c.multiplyScalar(cfg.zombie ? .8 : .95);
    c.multiplyScalar(1 - .42 * smooth(.45, .8, g) - .35 * low * (.5 + g));
    if (cfg.zombie) { const br = fbm(x * .12 + 20, y * .12, z * .12); if (br > .6) c.lerp(C('#4a3350'), clamp((br - .6) * 3, 0, .5)); }
    const b = bloodAt(x, y, z);
    if (b > .3) c = mix(c, b > .7 ? blood : bloodFresh, clamp((b - .3) * 2.2, 0, .95));
    return c;
  };
  return {
    torso: (x, y, z) => {
      let c;
      if (y < 63.5) c = cloth(pants, x, y, z);
      else if (!shirt) c = skinCol(x, y, z);
      else c = cloth(shirt, x, y, z);
      if (y > 62 && y < 65.5) c = C(cfg.belt || '#26201a');
      if (cfg.suit && z > 6 && y > 78 && y < 101) { const open = Math.abs(x) < (y - 76) * .32; if (open) c = C('#e8ebf0'); if (Math.abs(x) < 1.5 && y < 99) c = C(cfg.tie || '#7a1f26'); }
      if (cfg.overalls && y > 63 && Math.abs(Math.abs(x) - 6) < 2 && y < 100) c = shade(pants, .9);
      if (cfg.ribs && z > 4 && y > 74 && y < 96 && Math.sin(y * .9) > .35 && Math.abs(x) > 3 && Math.abs(x) < 12) c = C('#d8cfb8');
      return finish(c, x, y, z);
    },
    arm: (x, y, z) => {
      const sleeve = cfg.sleeves === 'none' || !shirt ? 200 : cfg.sleeves === 'short' ? 84 : 59;
      let c = y > sleeve ? cloth(shirt, x, y, z) : skinCol(x, y, z);
      return finish(c, x, y, z);
    },
    hand: (x, y, z) => finish(skinCol(x, y, z), x, y, z),
    leg: (x, y, z) => finish(y > 9 ? cloth(pants, x, y, z) : shoes.clone(), x, y, z),
    foot: (x, y, z) => shade(shoes, y < 1.6 ? .5 : .9 + .2 * noise(x * .3, y * .3, z * .3)),
    neck: (x, y, z) => finish(skinCol(x, y, z), x, y, z),
    stump: (x, y, z) => finish(y < 46 ? flesh.clone() : cloth(pants, x, y, z), x, y, z),
    head: (x, y, z) => {
      let c = skinCol(x, y, z);
      // глазницы
      for (const s of [-1, 1]) {
        const d = Math.hypot(x - s * 4.2, (y - 124.6) * 1.3, z - 9.6);
        if (d < 4.2) c = mix(c, cfg.zombie ? C('#1c1012') : shade(skin, .78), (1 - d / 4.2) * (cfg.zombie ? 1 : .6));
      }
      // рот
      if (z > 7 && Math.abs(x) < 4.6) {
        const my = cfg.zombie ? 116 : 116.6, mh = cfg.zombie ? 2.4 : .7;
        if (Math.abs(y - my) < mh) c = cfg.zombie ? C('#2a0808') : C('#8a4a40');
      }
      // волосы на макушке
      if (cfg.hair && y > 125 - (z < 0 ? 9 : 0) && z < 7) { const h = noise(x * .6, y * .6, z * .6); if (!cfg.bald || h > .55) c = shade(C(cfg.hair), .75 + .4 * h); }
      if (cfg.zombie) { for (const s of [-1, 1]) if (Math.abs(x - s * 3.2) < 1.1 && y < 116 && y > 104 && z > 6) c = mix(c, C('#4a0a0a'), .8); }
      if (cfg.mask === 'surgical' && z > 3 && y > 108 && y < 121) c = C('#8fbcd0');
      return finish(c, x, y, z);
    },
  };
}

// ---------- геометрия ----------
// складки ткани: смещение вершин вдоль нормали (шум + поперечные заломы)
function fold(geo, amp = .55, f = .5) {
  const P = geo.attributes.position, N = geo.attributes.normal;
  for (let i = 0; i < P.count; i++) {
    const x = P.getX(i), y = P.getY(i), z = P.getZ(i);
    const d = amp * ((fbm(x * f * .5, y * f, z * f * .5) - .5) * 2 + .5 * Math.sin(y * 1.1 + x * .4 + noise(x * .2, y * .2, z * .2) * 5));
    P.setXYZ(i, x + N.getX(i) * d, y, z + N.getZ(i) * d);
  }
  geo.computeVertexNormals(); return geo;
}

function bodyGeometry(cfg, sk) {
  const B = new SkinBuilder(), I = sk.idx;
  setSeed(cfg.seed || 7);
  const splats = [];
  const nb = Math.round((cfg.blood || 0) * 7);
  if (cfg.zombie) splats.push({ x: 0, y: 108, z: 9, r: 9 + 4 * (cfg.blood || 0) });
  for (let i = 0; i < nb; i++) splats.push({ x: (rand() - .5) * 26, y: 50 + rand() * 50, z: 6 + rand() * 6, r: 4 + rand() * 7 });
  for (let i = 0; i < nb; i++) { const s = rand() < .5 ? 1 : -1; splats.push({ x: s * (18 + rand() * 2), y: 46 + rand() * 30, z: rand() * 4, r: 3 + rand() * 5 }); }
  const P = painter(cfg, splats);
  const fat = cfg.fat || 0, thin = cfg.thin || 0, mus = cfg.muscle || 0;
  const R = 1 - thin * .22 + mus * .1;
  const w2 = (a, b, t) => [I[a], I[b], t];

  // туловище
  const rows = [[50, 0], [51.5, 7], [54, 12.6], [58, 14.4], [62, 14.8], [66, 13.8], [70, 13], [75, 12.8], [80, 13.4], [86, 14.6], [92, 15.4], [97, 15.6], [100, 14.4], [102.5, 10.6], [104, 6], [104.6, 0]]
    .map(([y, r]) => [y, r * R]);
  const tg = latheProfile(rows, 26), tp = tg.attributes.position;
  for (let i = 0; i < tp.count; i++) {
    let x = tp.getX(i), y = tp.getY(i), z = tp.getZ(i);
    x *= 1 + .2 * smooth(88, 100, y) + mus * .25 * smooth(80, 100, y);
    z *= .7 + mus * .06;
    if (fat) { const b = Math.exp(-Math.pow((y - 72) / 11, 2)); if (z > 0) z *= 1 + fat * 1.5 * b; x *= 1 + fat * .45 * b; }
    tp.setXYZ(i, x, y, z);
  }
  tg.computeVertexNormals(); fold(tg, .5);
  B.add(tg, (x, y) => y < 64 ? [I.hips, I.hips, 0] : y < 71 ? w2('hips', 'spine', smooth(64, 71, y)) : y < 81 ? [I.spine, I.spine, 0] : y < 88 ? w2('spine', 'chest', smooth(81, 88, y)) : [I.chest, I.chest, 0], P.torso);

  // лабораторный халат: юбка поверх таза и бёдер
  if (cfg.coat) {
    const cr = [[42, 15.5], [50, 15.6], [58, 15.6], [64, 15.2], [64.4, 0]].map(([y, r]) => [y, r * R]);
    const cg = latheProfile(cr, 26); cg.scale(1.06, 1, .78); cg.computeVertexNormals();
    const coat = C(cfg.shirt);
    B.add(cg, () => [I.hips, I.hips, 0], (x, y, z) => { let c = shade(coat, .75 + .3 * fbm(x * .1, y * .1, z * .1)); if (z > 9 && Math.abs(x) < 1.2) c = shade(coat, .6); return c; });
  }
  // трапеции и плечи
  [-1, 1].forEach(s => {
    const tz = ellipsoid(9.5, 4.6, 6.4, 16, 10); tz.rotateZ(-s * .35); tz.translate(s * 8.4, 101.6, -.4); B.add(tz, () => [I.chest, I.chest, 0], P.torso);
    const dt = ellipsoid(6.4, 6.6, 6.6, 16, 12); dt.translate(s * 17, 98.6, 0); B.add(dt, () => [s > 0 ? I.uarmL : I.uarmR, I.chest, .35], P.arm);
  });
  // шея и голова
  const ng = alignAlong(taper(5.4 * R, 4.8 * R, 13), V3(0, 101, 0), V3(0, 114, 1.2));
  B.add(ng, (x, y) => y < 104 ? w2('neck', 'chest', 1 - smooth(101, 104.5, y)) : [I.neck, I.neck, 0], P.neck);
  const hs = cfg.headScale || 1;
  const hg = ellipsoid(10.2 * hs, 12.2 * hs, 11.2 * hs, 32, 24), hp = hg.attributes.position;
  for (let i = 0; i < hp.count; i++) {
    let x = hp.getX(i), y = hp.getY(i), z = hp.getZ(i);
    if (y < -1) { z += (-1 - y) * .14 * (z > 0 ? 1 : .2); x *= 1 - (-1 - y) * .013; }      // подбородок вперёд, уже челюсть
    if (y > 2 && y < 6 && z > 5) z += .7;                                                 // надбровья
    if (cfg.zombie && y < -4 && y > -9 && z > 6) z -= 1.2;                                 // запавший рот
    hp.setXYZ(i, x, y + 123 - 112 * 0 + 0, z + 2);
  }
  hg.translate(0, 0, 0); hg.computeVertexNormals();
  B.add(hg, () => [I.head, I.head, 0], P.head);
  // нос, уши
  const nose = new THREE.ConeGeometry(1.8 * hs, 5 * hs, 10); nose.rotateX(PI / 2.3); nose.translate(0, 122.2, 13.4 * hs);
  B.add(nose, () => [I.head, I.head, 0], (x, y, z) => shade(C(cfg.skin), cfg.zombie ? .7 : .92));
  [-1, 1].forEach(s => { const e = ellipsoid(1.3, 3.2, 2.2, 10, 8); e.translate(s * 10.2 * hs, 123, 1.6); B.add(e, () => [I.head, I.head, 0], () => shade(C(cfg.skin), .85)); });
  // причёска и брови
  if (cfg.hair && !cfg.bald && !(cfg.x || []).some(k => ['cap', 'hood', 'helmet', 'hardhat', 'chefhat'].includes(k))) {
    const hr = new THREE.SphereGeometry(1, 28, 16, 0, PI * 2, 0, PI * .56); hr.scale(10.9 * hs, 12.8 * hs, 11.9 * hs); hr.rotateX(-.22); hr.translate(0, 123.4, 0);
    B.add(hr, () => [I.head, I.head, 0], (x, y, z) => shade(C(cfg.hair), .7 + .5 * noise(x * .5, y * .5, z * .5)));
  }
  [-1, 1].forEach(s => { const br = new THREE.BoxGeometry(4.2, .9, 1.1); br.rotateZ(s * .12); br.translate(s * 4.2, 128, 12.2); B.add(br, () => [I.head, I.head, 0], () => cfg.hair ? shade(C(cfg.hair), .8) : shade(C(cfg.skin), .55)); });
  // зубы у зомби
  if (cfg.zombie) for (let i = -2; i <= 2; i++) { const t = new THREE.BoxGeometry(1.1, 1.6, 1); t.translate(i * 1.5, 117.4, 12.4); B.add(t, () => [I.head, I.head, 0], () => C('#cbbf9a')); const b = new THREE.BoxGeometry(1, 1.4, 1); b.translate(i * 1.5 + .4, 114.6, 12.2); B.add(b, () => [I.head, I.head, 0], () => C('#b8aa82')); }

  // руки
  [['L', 1], ['R', -1]].forEach(([s, sg]) => {
    const big = (cfg.bigArm === s ? 1.7 : 1) * (1 + mus * .4 + fat * .2) * (1 - thin * .2);
    const sh = V3(sg * 17, 100, 0), el = V3(sg * 18, 77, 1), wr = V3(sg * 18.6, 57, 2);
    const bg2 = cfg.bigArm === s;
    B.add(alignAlong(fold(bg2 ? taper(7.6, 6.4, 23.1) : taper(5.8 * big, 4.6 * big, 23.1), .45), sh, el), (x, y) => y > 95 ? w2('uarm' + s, 'chest', smooth(95, 101, y) * .55) : [I['uarm' + s], I['uarm' + s], 0], P.arm);
    B.add(alignAlong(fold(bg2 ? taper(6.6, 9.8, 20.2) : taper(4.6 * big, 3.5 * big, 20.2), .4), el, wr), (x, y) => y > 73 ? w2('farm' + s, 'uarm' + s, smooth(73, 78.5, y) * .5) : [I['farm' + s], I['farm' + s], 0], P.arm);
    const hb = I['hand' + s], hk = bg2 ? 1.9 : big > 1.3 ? 1.5 : 1;
    const palm = ellipsoid(3 * hk, 5.8 * hk, 4.3 * hk, 14, 10); palm.translate(sg * 18.7, 51, 2.6); B.add(palm, () => [hb, hb, 0], P.hand);
    const fl = cfg.zombie ? 9.6 : 7.6;
    [-1.9, -.65, .65, 1.9].forEach((dz, k) => { const f = alignAlong(taper(1.35 * hk, .95 * hk, fl - Math.abs(k - 1.5) * 1.1, 8, 4), V3(sg * 18.7, 47.5, 2.6 + dz * hk), V3(sg * (18.7 + (cfg.zombie ? .8 : 0)), 47.5 - fl + Math.abs(k - 1.5), 2.6 + dz * hk + (cfg.zombie ? 1.5 : .6))); B.add(f, () => [hb, hb, 0], P.hand); });
    const th = alignAlong(taper(1.3 * hk, 1 * hk, 4.6, 8, 4), V3(sg * 17.4, 50.5, 5.2), V3(sg * 16.6, 46.5, 8)); B.add(th, () => [hb, hb, 0], P.hand);
    if (cfg.zombie) [-1.9, -.65, .65, 1.9].forEach(dz => { const n = new THREE.ConeGeometry(.55, 2, 6); n.rotateX(PI); n.translate(sg * 19.5, 39.6, 4.1 + dz); B.add(n, () => [hb, hb, 0], () => C('#2b2420')); });
  });

  // ноги
  [['L', 1], ['R', -1]].forEach(([s, sg]) => {
    const lk = (1 + fat * .18 + mus * .25) * (1 - thin * .22);
    const hip = V3(sg * 7.6, 60, 0), kn = V3(sg * 7.7, 32, 1.5), an = V3(sg * 7.7, 7.5, .5);
    if (cfg.legless) {
      const st = alignAlong(taper(7.4 * lk, 6.6 * lk, 16), hip, V3(sg * 7.7, 44, 1));
      B.add(st, (x, y) => y > 55 ? w2('thigh' + s, 'hips', smooth(55, 61, y) * .6) : [I['thigh' + s], I['thigh' + s], 0], P.stump);
      return;
    }
    B.add(alignAlong(fold(taper(7.4 * lk, 5.6 * lk, 28), .55), hip, kn), (x, y) => y > 55 ? w2('thigh' + s, 'hips', smooth(55, 61, y) * .6) : [I['thigh' + s], I['thigh' + s], 0], P.leg);
    B.add(alignAlong(fold(taper(5.6 * lk, 3.9 * lk, 24.5), .5), kn, an), (x, y) => y > 28.5 ? w2('shin' + s, 'thigh' + s, smooth(28.5, 34, y) * .5) : [I['shin' + s], I['shin' + s], 0], P.leg);
    const fb = I['foot' + s];
    const shoe = ellipsoid(5.1, 4.2, 9.6, 18, 12); shoe.translate(sg * 7.7, 4.4, 4.6);
    const shaft = taper(5.3 * lk, 5.1 * lk, 13, 16, 4); shaft.translate(sg * 7.7, 15, .8); B.add(shaft, () => [I['shin' + s], I['foot' + s], .5], P.foot); B.add(shoe, () => [fb, fb, 0], P.foot);
    const sole = new THREE.BoxGeometry(9, 1.6, 17.4); sole.translate(sg * 7.7, .8, 4.4); B.add(sole, () => [fb, fb, 0], P.foot);
  });
  return B.build();
}

// ---------- снаряжение ----------
function attach(sk, boneName, mesh, at) {
  const w = sk.world[boneName]; mesh.position.sub(w); if (at) mesh.position.add(at);
  sk.byName[boneName].add(mesh); mesh.castShadow = true; return mesh;
}
export function weaponModel(wi) {
  const g = new THREE.Group(), steel = pbr('#cdd5df', { metalness: .9, roughness: .28 }), dark = pbr('#22262e', { metalness: .6, roughness: .4 });
  const wood = pbr('#8a5a32', { roughness: .7 }), grip = pbr('#2b241e', { roughness: .9 });
  const add = (geo, m, x, y, z, rx = 0, rz = 0) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.rotation.set(rx, 0, rz); o.castShadow = true; g.add(o); return o; };
  if (wi === 1) { add(new THREE.CylinderGeometry(2.2, 2.2, 52, 14), pbr('#7d8794', { metalness: .85, roughness: .45 }), 0, 22, 0); add(new THREE.CylinderGeometry(3.2, 3.2, 6, 14), dark, 0, 48, 0); add(new THREE.CylinderGeometry(2.6, 2.6, 10, 12), grip, 0, 0, 0); }
  if (wi === 2) { add(new THREE.CylinderGeometry(3.8, 2, 52, 14), wood, 0, 24, 0); add(new THREE.CylinderGeometry(2.3, 2.3, 10, 12), grip, 0, -2, 0);
    for (let i = 0; i < 8; i++) { const a = i * 2.1; add(new THREE.ConeGeometry(.6, 6, 6), steel, Math.cos(a) * 4.2, 30 + i * 3, Math.sin(a) * 4.2, Math.sin(a) * PI / 2, -Math.cos(a) * PI / 2); } }
  if (wi === 3) { add(new THREE.CylinderGeometry(1.8, 1.8, 14, 12), grip, 0, 2, 0); add(new THREE.BoxGeometry(10, 2, 4), dark, 0, 9.5, 0);
    const bl = new THREE.Shape(); bl.moveTo(-3, 0); bl.lineTo(3, 0); bl.lineTo(5.4, 40); bl.quadraticCurveTo(4, 48, -2.4, 46); bl.lineTo(-3, 0);
    const bg = new THREE.ExtrudeGeometry(bl, { depth: 1, bevelEnabled: true, bevelThickness: .5, bevelSize: .5, bevelSegments: 1 }); bg.translate(0, 10, -.5); add(bg, steel, 0, 0, 0); }
  if (wi === 4) { add(new THREE.CylinderGeometry(2.6, 2.6, 46, 14), pbr('#1b1e24', { roughness: .5 }), 0, 22, 0); add(new THREE.CylinderGeometry(3.2, 3.2, 12, 14), grip, 0, 0, 0);
    add(new THREE.SphereGeometry(3.6, 14, 10), glow('#ffd84a', 3), 0, 46, 0); for (let i = 0; i < 3; i++) add(new THREE.TorusGeometry(2.9, .45, 6, 14), glow('#ffe34d', 2), 0, 30 + i * 5, 0, PI / 2); }
  if (wi === 5) { add(new THREE.CylinderGeometry(2.2, 2.2, 12, 12), grip, 0, 0, 0); add(new THREE.BoxGeometry(8, 10, 6), pbr('#4b5668', { metalness: .7, roughness: .35 }), 0, 10, 0);
    add(new THREE.BoxGeometry(2.4, 44, 3.6), glow('#7ff0ff', 4), 0, 37, 0); add(new THREE.BoxGeometry(5, 46, 6), new THREE.MeshBasicMaterial({ color: C('#59e1ff'), transparent: true, opacity: .22, depthWrite: false }), 0, 37, 0); }
  if (wi === 6) { add(new THREE.CylinderGeometry(1.9, 1.9, 13, 12), grip, 0, 0, 0); add(new THREE.BoxGeometry(14, 3, 5), pbr('#6c4fa8', { metalness: .8, roughness: .3 }), 0, 8, 0);
    const bl = new THREE.Shape(); bl.moveTo(-2.4, 0); bl.lineTo(2.4, 0); bl.lineTo(1.2, 54); bl.lineTo(0, 62); bl.lineTo(-1.2, 54); bl.lineTo(-2.4, 0);
    const bg = new THREE.ExtrudeGeometry(bl, { depth: 1.2, bevelEnabled: false }); bg.translate(0, 9.5, -.6); add(bg, glow('#d6baff', 3.5), 0, 0, 0);
    add(new THREE.BoxGeometry(6, 58, 5), new THREE.MeshBasicMaterial({ color: C('#a66bff'), transparent: true, opacity: .22, depthWrite: false }), 0, 38, 0); }
  return g;
}
function gear(cfg, sk, mats) {
  const add = (bone, geo, m, at) => { const o = new THREE.Mesh(geo, m); o.position.copy(at); mats.push(m); return attach(sk, bone, o); };
  const hs = cfg.headScale || 1;
  // глаза
  [-1, 1].forEach(s => {
    if (cfg.zombie) { const e = new THREE.Mesh(new THREE.SphereGeometry(1.45 * hs, 14, 10), glow(cfg.eye || '#c9bf7a', cfg.eyeGlow ? cfg.eyeGlow * .6 : .55)); e.position.set(s * 4.2 * hs, 124.6, 11 * hs + 1); attach(sk, 'head', e); }
    else { const w = new THREE.Mesh(new THREE.SphereGeometry(1.9, 14, 10), pbr('#f2efe8', { roughness: .25 })); w.position.set(s * 4.2, 124.6, 12); attach(sk, 'head', w);
      const ir = new THREE.Mesh(new THREE.SphereGeometry(1.05, 10, 8), pbr('#3a2a1c', { roughness: .2 })); ir.position.set(s * 4.2, 124.6, 13.7); attach(sk, 'head', ir); }
  });
  const X = new Set(cfg.x || []);
  const cloth = c => pbr(c, { roughness: .85 });
  if (X.has('cap')) { add('head', new THREE.SphereGeometry(12.2, 24, 12, 0, PI * 2, 0, PI / 2), cloth(cfg.hat || '#2c364b'), V3(0, 126, 1.6)); const br = add('head', new THREE.CylinderGeometry(7.6, 7.6, 1.1, 20, 1, false, -PI / 2, PI), cloth(cfg.hat || '#2c364b'), V3(0, 126.4, 8)); br.scale.set(1, 1, 1.25); }
  if (X.has('hardhat')) { const m = pbr(cfg.hat || '#e6b422', { roughness: .35 }); add('head', new THREE.SphereGeometry(12.8, 24, 12, 0, PI * 2, 0, PI / 2), m, V3(0, 126.5, 1.6)); add('head', new THREE.CylinderGeometry(15, 15, 1.2, 24), m, V3(0, 126.6, 2.6)); }
  if (X.has('helmet')) { const m = pbr('#1d222b', { roughness: .4, metalness: .3 }); add('head', new THREE.SphereGeometry(13.6, 24, 14, 0, PI * 2, 0, PI * .6), m, V3(0, 124.5, 1.2));
    const v = add('head', new THREE.SphereGeometry(14.2, 24, 10, -PI * .35, PI * .7, PI * .32, PI * .26), new THREE.MeshStandardMaterial({ color: C('#0d1622'), transparent: true, opacity: .62, roughness: .08, metalness: .5 }), V3(0, 123.5, 1.6)); v.rotation.y = 0; }
  if (X.has('chefhat')) { const m = pbr('#f2f2ee', { roughness: .9 }); add('head', new THREE.CylinderGeometry(10.5, 10.2, 8, 20), m, V3(0, 132, 1)); add('head', new THREE.SphereGeometry(11.5, 20, 12), m, V3(0, 139, 1)).scale.set(1, .6, 1); }
  if (X.has('hood')) { const h = add('head', new THREE.SphereGeometry(14.4, 24, 16, 0, PI * 2, 0, PI * .68), cloth(cfg.shirt || '#2d2a33'), V3(0, 123.6, -.8)); h.rotation.x = -.38; h.material.side = THREE.DoubleSide; }
  if (X.has('gasmask')) { const m = pbr('#2a2e33', { roughness: .55 }); add('head', ellipsoid(7.6, 7, 4.8, 20, 14), m, V3(0, 118.6, 10.6));
    [-1, 1].forEach(s => { const f = add('head', new THREE.CylinderGeometry(2.6, 2.6, 4.2, 14), pbr('#5a6068', { metalness: .6, roughness: .4 }), V3(s * 5.2, 115.4, 13.4)); f.rotation.set(PI / 2.4, 0, s * .5);
      add('head', new THREE.CylinderGeometry(2.4, 2.4, 1, 16), glow('#9fffd8', 1.4), V3(s * 4.2, 124.6, 12.7)).rotation.x = PI / 2; }); }
  if (X.has('glasses')) { const m = pbr('#1a1a1a', { metalness: .7, roughness: .3 }); [-1, 1].forEach(s => add('head', new THREE.TorusGeometry(2.6, .35, 6, 16), m, V3(s * 4.2, 124.6, 13.6))); add('head', new THREE.BoxGeometry(2.6, .5, .5), m, V3(0, 124.6, 13.8)); }
  if (X.has('tie')) { const t = add('chest', new THREE.BoxGeometry(2.6, 16, .8), cloth(cfg.tie || '#7a1f26'), V3(0, 88, 11.8)); t.rotation.x = -.12; }
  if (X.has('bowtie')) { const m = cloth('#141414'); [-1, 1].forEach(s => { const c = add('chest', new THREE.ConeGeometry(1.8, 3.6, 8), m, V3(s * 1.9, 100.4, 10.2)); c.rotation.z = -s * PI / 2; }); }
  if (X.has('apron')) { const a = add('spine', new THREE.BoxGeometry(22, 40, .9), cloth('#e9e6df'), V3(0, 66, 12.2)); a.rotation.x = .06; }
  if (X.has('vest') || X.has('spikes')) {
    const m = pbr(cfg.vest || '#2b3138', { roughness: .55, metalness: .25 });
    const vg = latheProfile([[74, 0], [74.2, 15.6], [82, 15.8], [92, 16.8], [99, 16.6], [99.4, 0]], 24); vg.scale(1.18, 1, .8); vg.computeVertexNormals();
    const v = new THREE.Mesh(vg, m); mats.push(m); attach(sk, 'chest', v);
    if (X.has('spikes')) for (let i = 0; i < 10; i++) { const a = -PI * .6 + i * PI * .13; const c = new THREE.Mesh(new THREE.ConeGeometry(1.4, 6, 8), pbr('#c8ced6', { metalness: .9, roughness: .3 })); c.position.set(Math.sin(a) * 19.6, 92 - (i % 2) * 8, Math.cos(a) * 13.6); c.lookAt(c.position.clone().add(V3(Math.sin(a), 0, Math.cos(a)))); c.rotateX(PI / 2); attach(sk, 'chest', c); }
  }
  if (X.has('backpack')) { const m = pbr('#3a3a30', { roughness: .85 }); add('chest', new THREE.BoxGeometry(22, 30, 11), m, V3(0, 84, -15.5)); add('chest', new THREE.BoxGeometry(22.6, 7, 11.6), pbr('#4a4838', { roughness: .8 }), V3(0, 96, -15.5)); add('chest', new THREE.BoxGeometry(16, 10, 3), pbr('#55402a', { roughness: .9 }), V3(0, 78, -9.4)); }
  if (X.has('scarf')) add('chest', new THREE.TorusGeometry(7.6, 2.8, 10, 24), cloth('#5a2a26'), V3(0, 102.5, 0)).rotation.x = PI / 2;
  if (X.has('pads')) [['L', 1], ['R', -1]].forEach(([s, sg]) => add('uarm' + s, ellipsoid(7, 5, 7.4, 16, 10), pbr(cfg.padCol || '#4a5260', { roughness: .45, metalness: .4 }), V3(sg * 18, 100.5, 0)));
  if (X.has('stripes')) [-1, 1].forEach(s => add('chest', new THREE.BoxGeometry(1.4, 22, .6), glow(cfg.stripe || '#59e1ff', 2.2), V3(s * 6.5, 88, 11.6)));
  if (X.has('pustules')) { const m = pbr('#9fbf5a', { roughness: .18, emissive: C('#3a5a10'), emissiveIntensity: .4 }); setSeed(cfg.seed + 5); for (let i = 0; i < 9; i++) { const bone = ['chest', 'spine', 'uarmL', 'uarmR'][i % 4]; const w = sk.world[bone]; add(bone, new THREE.SphereGeometry(1.6 + rand() * 2.2, 12, 8), m, V3(w.x + (rand() - .5) * 18, w.y - rand() * 14, 9 + rand() * 4)); } }
  if (X.has('cleaver')) { const c = new THREE.Group(); const bl = new THREE.Mesh(new THREE.BoxGeometry(1, 11, 14), pbr('#c9d0d8', { metalness: .9, roughness: .3 })); bl.position.set(0, -6, 6); c.add(bl); const hd = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 9, 10), pbr('#2b241e', { roughness: .9 })); hd.rotation.x = PI / 2; hd.position.set(0, 0, -3); c.add(hd); c.position.set(-18.7, 47, 5); attach(sk, 'handR', c); }
  if (X.has('scalpels')) [['L', 1], ['R', -1]].forEach(([s, sg]) => { const b = new THREE.Mesh(new THREE.BoxGeometry(.6, 1.6, 9), pbr('#dfe6ee', { metalness: .95, roughness: .2 })); b.position.set(sg * 19, 44, 8); attach(sk, 'hand' + s, b); });
  if (X.has('collarGold')) add('chest', new THREE.TorusGeometry(7, 1, 8, 24), pbr('#e6b422', { metalness: 1, roughness: .25 }), V3(0, 102, 0)).rotation.x = PI / 2;
}

// ---------- анимации ----------
function clipsFor(style, base) {
  const S = {};
  const loop = (n, d, t) => { S[n] = clip(n, d, t, base); };
  if (style === 'hero') {
    loop('idle', 3, {
      chest: cyc(3, 12, a => [.025 * Math.sin(a), 0, 0]), head: cyc(3, 12, a => [.03 * Math.sin(a + 1), .08 * Math.sin(a * .5), 0]),
      uarmL: cyc(3, 6, a => [.06 + .03 * Math.sin(a), 0, .1]), farmL: [[0, [-.25, 0, 0]], [3, [-.25, 0, 0]]],
      uarmR: cyc(3, 6, a => [-.42 + .03 * Math.sin(a + 2), 0, -.12]), farmR: [[0, [-.75, 0, 0]], [3, [-.75, 0, 0]]], handR: [[0, [.15, 0, 0]], [3, [.15, 0, 0]]],
      'hips.pos': cyc(3, 12, a => [0, .35 * Math.sin(a), 0]),
    });
    loop('walk', .8, {
      thighL: cyc(.8, 16, a => [-.55 * Math.sin(a), 0, 0]), thighR: cyc(.8, 16, a => [.55 * Math.sin(a), 0, 0]),
      shinL: cyc(.8, 16, a => [.12 + .85 * Math.max(0, Math.sin(a + 1.1)), 0, 0]), shinR: cyc(.8, 16, a => [.12 + .85 * Math.max(0, Math.sin(a + 1.1 + PI)), 0, 0]),
      footL: cyc(.8, 16, a => [-.2 * Math.sin(a), 0, 0]), footR: cyc(.8, 16, a => [.2 * Math.sin(a), 0, 0]),
      uarmL: cyc(.8, 16, a => [.45 * Math.sin(a), 0, .08]), farmL: cyc(.8, 16, a => [-.3 - .2 * Math.max(0, Math.sin(a)), 0, 0]),
      uarmR: cyc(.8, 16, a => [-.45 - .25 * Math.sin(a), 0, -.1]), farmR: [[0, [-.8, 0, 0]], [.8, [-.8, 0, 0]]],
      chest: cyc(.8, 16, a => [.05, .08 * Math.sin(a), 0]), head: cyc(.8, 16, a => [-.02, -.06 * Math.sin(a), 0]),
      'hips.pos': cyc(.8, 16, a => [0, -1.6 + 1.6 * Math.abs(Math.cos(a)), 0]),
    });
    S.attack = clip('attack', .55, {
      uarmR: [[0, [-.42, 0, -.12]], [.16, [-2.9, .2, -.35]], [.3, [-.3, -.2, .15]], [.55, [-.42, 0, -.12]]],
      farmR: [[0, [-.75, 0, 0]], [.16, [-1.3, 0, 0]], [.3, [-.15, 0, 0]], [.55, [-.75, 0, 0]]],
      chest: [[0, [0, 0, 0]], [.16, [-.1, .45, 0]], [.3, [.28, -.4, 0]], [.55, [0, 0, 0]]],
      spine: [[0, [0, 0, 0]], [.3, [.15, -.15, 0]], [.55, [0, 0, 0]]],
      thighL: [[0, [0, 0, 0]], [.3, [-.5, 0, 0]], [.55, [0, 0, 0]]], shinL: [[0, [.1, 0, 0]], [.3, [.4, 0, 0]], [.55, [.1, 0, 0]]],
      uarmL: [[0, [.06, 0, .1]], [.3, [.4, 0, .4]], [.55, [.06, 0, .1]]],
    }, base);
    S.hit = clip('hit', .38, { chest: [[0, [0, 0, 0]], [.1, [-.35, 0, .1]], [.38, [0, 0, 0]]], head: [[0, [0, 0, 0]], [.1, [-.35, 0, 0]], [.38, [0, 0, 0]]],
      uarmL: [[0, [.06, 0, .1]], [.1, [-.4, 0, .5]], [.38, [.06, 0, .1]]], 'hips.pos': [[0, [0, 0, 0]], [.1, [0, -1.5, -3]], [.38, [0, 0, 0]]] }, base);
    S.death = clip('death', 1.2, { hips: [[0, [0, 0, 0]], [.5, [-.3, 0, .1]], [1.05, [-1.5, 0, .1]], [1.2, [-1.45, 0, .1]]], 'hips.pos': [[0, [0, 0, 0]], [.5, [0, -14, -6]], [1.05, [0, -50, -36]], [1.2, [0, -51, -36]]],
      shinL: [[0, [0, 0, 0]], [.5, [1.3, 0, 0]], [1.2, [.5, 0, 0]]], shinR: [[0, [0, 0, 0]], [.5, [1.1, 0, 0]], [1.2, [.3, 0, 0]]],
      uarmL: [[0, [0, 0, 0]], [1.2, [-.4, 0, 1.2]]], uarmR: [[0, [0, 0, 0]], [1.2, [-.6, 0, -1.3]]], head: [[0, [0, 0, 0]], [1.2, [.35, .4, 0]]] }, base);
    return S;
  }
  if (style === 'crawler') {
    const pose = { hips: [1.35, 0, 0], thighL: [-.5, 0, .15], thighR: [-.3, 0, -.15], head: [-1.05, 0, 0], neck: [-.25, 0, 0] };
    const P = (k, extra = [0, 0, 0]) => [pose[k][0] + extra[0], pose[k][1] + extra[1], pose[k][2] + extra[2]];
    loop('idle', 2.4, { hips: [[0, P('hips')], [2.4, P('hips')]], 'hips.pos': cyc(2.4, 8, a => [0, -45 + .5 * Math.sin(a), 8]), thighL: [[0, P('thighL')], [2.4, P('thighL')]], thighR: [[0, P('thighR')], [2.4, P('thighR')]],
      head: cyc(2.4, 8, a => P('head', [.08 * Math.sin(a), .2 * Math.sin(a * .5), 0])), neck: [[0, P('neck')], [2.4, P('neck')]],
      uarmL: cyc(2.4, 8, a => [-2.55 + .08 * Math.sin(a), 0, .35]), uarmR: cyc(2.4, 8, a => [-2.55 + .08 * Math.sin(a + 1), 0, -.35]), farmL: [[0, [-.5, 0, 0]], [2.4, [-.5, 0, 0]]], farmR: [[0, [-.5, 0, 0]], [2.4, [-.5, 0, 0]]] });
    loop('walk', 1.3, { hips: cyc(1.3, 12, a => P('hips', [0, 0, .08 * Math.sin(a)])), 'hips.pos': cyc(1.3, 12, a => [0, -45 + .8 * Math.abs(Math.sin(a)), 8]), thighL: [[0, P('thighL')], [1.3, P('thighL')]], thighR: [[0, P('thighR')], [1.3, P('thighR')]],
      head: cyc(1.3, 12, a => P('head', [0, .1 * Math.sin(a), 0])), neck: [[0, P('neck')], [1.3, P('neck')]], chest: cyc(1.3, 12, a => [0, .18 * Math.sin(a), 0]),
      uarmL: cyc(1.3, 12, a => [-2.55 + .45 * Math.sin(a), 0, .35]), uarmR: cyc(1.3, 12, a => [-2.55 - .45 * Math.sin(a), 0, -.35]),
      farmL: cyc(1.3, 12, a => [-.4 - .5 * Math.max(0, Math.cos(a)), 0, 0]), farmR: cyc(1.3, 12, a => [-.4 - .5 * Math.max(0, -Math.cos(a)), 0, 0]) });
    S.attack = clip('attack', .7, { hips: [[0, P('hips')], [.3, P('hips', [-.25, 0, 0])], [.7, P('hips')]], 'hips.pos': [[0, [0, -45, 8]], [.3, [0, -40, 22]], [.7, [0, -45, 8]]],
      head: [[0, P('head')], [.3, P('head', [-.3, 0, 0])], [.7, P('head')]], uarmL: [[0, [-2.55, 0, .35]], [.3, [-3, 0, .2]], [.45, [-2, 0, .3]], [.7, [-2.55, 0, .35]]], uarmR: [[0, [-2.55, 0, -.35]], [.3, [-3, 0, -.2]], [.45, [-2, 0, -.3]], [.7, [-2.55, 0, -.35]]],
      thighL: [[0, P('thighL')], [.7, P('thighL')]], thighR: [[0, P('thighR')], [.7, P('thighR')]], neck: [[0, P('neck')], [.7, P('neck')]] }, base);
    S.hit = clip('hit', .35, { hips: [[0, P('hips')], [.1, P('hips', [-.15, 0, .15])], [.35, P('hips')]], 'hips.pos': [[0, [0, -45, 8]], [.1, [0, -43, 3]], [.35, [0, -45, 8]]], head: [[0, P('head')], [.1, P('head', [-.3, 0, 0])], [.35, P('head')]],
      thighL: [[0, P('thighL')], [.35, P('thighL')]], thighR: [[0, P('thighR')], [.35, P('thighR')]], uarmL: [[0, [-2.55, 0, .35]], [.35, [-2.55, 0, .35]]], uarmR: [[0, [-2.55, 0, -.35]], [.35, [-2.55, 0, -.35]]], neck: [[0, P('neck')], [.35, P('neck')]] }, base);
    S.death = clip('death', 1, { hips: [[0, P('hips')], [1, P('hips', [.15, 0, .5])]], 'hips.pos': [[0, [0, -45, 8]], [1, [0, -48, 8]]], head: [[0, P('head')], [1, [-.2, .6, 0]]], uarmL: [[0, [-2.55, 0, .35]], [1, [-1.6, 0, .9]]], uarmR: [[0, [-2.55, 0, -.35]], [1, [-1.9, 0, -1]]],
      thighL: [[0, P('thighL')], [1, P('thighL')]], thighR: [[0, P('thighR')], [1, P('thighR')]], neck: [[0, P('neck')], [1, P('neck')]] }, base);
    return S;
  }
  // зомби, худой, раздутый, громила
  const k = { zombie: 1, thin: 1.5, bloater: .7, brute: .8 }[style] || 1;
  const hunch = { zombie: .22, thin: .38, bloater: .1, brute: .42 }[style] || .2;
  const id = 3.2 / k, wd = { zombie: 1.4, thin: .95, bloater: 1.8, brute: 1.6 }[style] || 1.4;
  const armUp = style === 'brute' ? -.55 : style === 'bloater' ? -.9 : -1.2;
  loop('idle', id, {
    spine: cyc(id, 12, a => [hunch, 0, .04 * Math.sin(a)]), chest: cyc(id, 12, a => [.04 * Math.sin(a * 2) + (style === 'brute' ? .15 : 0), 0, .07 * Math.sin(a)]),
    head: cyc(id, 12, a => [.18 + .06 * Math.sin(a * 2), .12 * Math.sin(a), .25 + .1 * Math.sin(a + 1)]), neck: [[0, [.2, 0, 0]], [id, [.2, 0, 0]]],
    uarmL: cyc(id, 12, a => [armUp + .09 * Math.sin(a * 2 + (style === 'thin' ? 3 * Math.sin(a * 5) : 0)), 0, .18]), uarmR: cyc(id, 12, a => [armUp + .1 + .1 * Math.sin(a * 2 + 1), 0, -.14]),
    farmL: cyc(id, 12, a => [-.3 - .1 * Math.sin(a), 0, 0]), farmR: cyc(id, 12, a => [-.2 - .1 * Math.sin(a + 2), 0, 0]),
    handL: [[0, [.45, 0, 0]], [id, [.45, 0, 0]]], handR: [[0, [.5, 0, 0]], [id, [.5, 0, 0]]],
    thighL: [[0, [-.05, 0, .03]], [id, [-.05, 0, .03]]], thighR: [[0, [.08, 0, -.05]], [id, [.08, 0, -.05]]], shinL: [[0, [.12, 0, 0]], [id, [.12, 0, 0]]], shinR: [[0, [.2, 0, 0]], [id, [.2, 0, 0]]],
    'hips.pos': cyc(id, 12, a => [.6 * Math.sin(a), -1.5 + .5 * Math.sin(a * 2), 0]),
  });
  loop('walk', wd, {
    thighL: cyc(wd, 16, a => [-.5 * Math.sin(a), 0, .03]), thighR: cyc(wd, 16, a => [.25 * Math.sin(a) + .05, 0, -.06]),
    shinL: cyc(wd, 16, a => [.15 + .8 * Math.max(0, Math.sin(a + 1.1)), 0, 0]), shinR: cyc(wd, 16, a => [.25 + .25 * Math.max(0, Math.sin(a + 1.1 + PI)), 0, 0]),
    footR: cyc(wd, 16, a => [.35, 0, .15]),
    spine: cyc(wd, 16, a => [hunch + .05, 0, .1 * Math.sin(a)]), chest: cyc(wd, 16, a => [.03, .1 * Math.sin(a), .12 * Math.sin(a)]),
    head: cyc(wd, 16, a => [.15, .1 * Math.sin(a), .3 + .12 * Math.sin(a)]), neck: [[0, [.2, 0, 0]], [wd, [.2, 0, 0]]],
    uarmL: cyc(wd, 16, a => [armUp + .15 * Math.sin(a), 0, .2]), uarmR: cyc(wd, 16, a => [armUp + .15 - .15 * Math.sin(a), 0, -.15]),
    farmL: [[0, [-.3, 0, 0]], [wd, [-.3, 0, 0]]], farmR: [[0, [-.2, 0, 0]], [wd, [-.2, 0, 0]]], handL: [[0, [.45, 0, 0]], [wd, [.45, 0, 0]]], handR: [[0, [.5, 0, 0]], [wd, [.5, 0, 0]]],
    'hips.pos': cyc(wd, 16, a => [1.4 * Math.sin(a), -2.6 + 2.2 * Math.abs(Math.sin(a)), 0]),
  });
  if (style === 'brute') {
    S.attack = clip('attack', .8, { uarmR: [[0, [armUp, 0, -.14]], [.28, [-2.9, 0, -.3]], [.42, [-.1, 0, .1]], [.8, [armUp, 0, -.14]]], farmR: [[0, [-.2, 0, 0]], [.28, [-.6, 0, 0]], [.42, [0, 0, 0]], [.8, [-.2, 0, 0]]],
      spine: [[0, [hunch, 0, 0]], [.28, [hunch - .25, .3, 0]], [.42, [hunch + .35, -.25, 0]], [.8, [hunch, 0, 0]]], 'hips.pos': [[0, [0, -1.5, 0]], [.42, [0, -6, 10]], [.8, [0, -1.5, 0]]],
      uarmL: [[0, [armUp, 0, .18]], [.42, [-.2, 0, .5]], [.8, [armUp, 0, .18]]] }, base);
  } else {
    S.attack = clip('attack', .7, { spine: [[0, [hunch, 0, 0]], [.3, [hunch + .45, 0, 0]], [.7, [hunch, 0, 0]]], chest: [[0, [0, 0, 0]], [.15, [-.2, 0, 0]], [.32, [.35, 0, 0]], [.7, [0, 0, 0]]],
      head: [[0, [.18, 0, .25]], [.32, [.5, 0, 0]], [.7, [.18, 0, .25]]],
      uarmL: [[0, [armUp, 0, .18]], [.18, [-2.3, 0, .3]], [.36, [-.55, 0, .05]], [.7, [armUp, 0, .18]]], uarmR: [[0, [armUp + .1, 0, -.14]], [.22, [-2.2, 0, -.3]], [.4, [-.5, 0, -.05]], [.7, [armUp + .1, 0, -.14]]],
      farmL: [[0, [-.3, 0, 0]], [.18, [-.6, 0, 0]], [.36, [-.1, 0, 0]], [.7, [-.3, 0, 0]]], farmR: [[0, [-.2, 0, 0]], [.22, [-.6, 0, 0]], [.4, [-.1, 0, 0]], [.7, [-.2, 0, 0]]],
      thighL: [[0, [0, 0, 0]], [.32, [-.45, 0, 0]], [.7, [0, 0, 0]]], 'hips.pos': [[0, [0, -1.5, 0]], [.32, [0, -4, 9]], [.7, [0, -1.5, 0]]] }, base);
  }
  S.hit = clip('hit', .38, { spine: [[0, [hunch, 0, 0]], [.1, [hunch - .4, 0, .15]], [.38, [hunch, 0, 0]]], head: [[0, [.18, 0, .25]], [.1, [-.35, 0, -.2]], [.38, [.18, 0, .25]]],
    uarmL: [[0, [armUp, 0, .18]], [.1, [armUp + .5, 0, .5]], [.38, [armUp, 0, .18]]], uarmR: [[0, [armUp, 0, -.14]], [.1, [armUp + .5, 0, -.5]], [.38, [armUp, 0, -.14]]], 'hips.pos': [[0, [0, -1.5, 0]], [.1, [0, -2, -4]], [.38, [0, -1.5, 0]]] }, base);
  S.death = clip('death', 1.3, { hips: [[0, [0, 0, 0]], [.45, [.25, 0, .1]], [1.1, [1.48, 0, .05]], [1.3, [1.42, 0, .05]]], 'hips.pos': [[0, [0, -1.5, 0]], [.45, [0, -16, 4]], [1.1, [0, -52, 30]], [1.3, [0, -53, 30]]],
    shinL: [[0, [0, 0, 0]], [.45, [1.4, 0, 0]], [1.3, [.4, 0, 0]]], shinR: [[0, [0, 0, 0]], [.45, [1.2, 0, 0]], [1.3, [.2, 0, 0]]], thighL: [[0, [0, 0, 0]], [.45, [-.8, 0, 0]], [1.3, [-.1, 0, 0]]],
    uarmL: [[0, [armUp, 0, .18]], [1.3, [-.3, 0, 1.1]]], uarmR: [[0, [armUp, 0, -.14]], [1.3, [-2.6, 0, -.4]]], head: [[0, [.18, 0, .25]], [1.3, [-.2, .7, 0]]] }, base);
  return S;
}

// ---------- сборка ----------
export function buildHumanoid(cfg) {
  const sk = makeSkeleton(SPEC);
  const geo = bodyGeometry(cfg, sk);
  const mat = skinMat({ roughness: cfg.zombie ? .74 : .8 });
  const mesh = new THREE.SkinnedMesh(geo, mat);
  mesh.castShadow = true; mesh.frustumCulled = false;
  const root = sk.byName.root;
  mesh.add(root);
  const skeleton = new THREE.Skeleton(sk.bones);
  mesh.bind(skeleton);
  const mats = [mat];
  gear(cfg, sk, mats);
  const group = new THREE.Group(); group.add(mesh);
  const base = {}; sk.bones.forEach(b => { base[b.name] = b.position.clone(); });
  const clips = clipsFor(cfg.style || (cfg.zombie ? 'zombie' : 'hero'), base);
  return { group, mesh, sk, mats, clips, hand: sk.byName.handR, height: 140 };
}
