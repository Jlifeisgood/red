// Процедурные четвероногие: зомби-пёс, кошка, крыса. Скиннинг-меш, анимации рыси и укуса.
import * as THREE from 'three';
import { PI, V3, C, mix, shade, smooth, clamp, noise, fbm, setSeed, rand, taper, alignAlong, ellipsoid, latheProfile, SkinBuilder, makeSkeleton, clip, cyc, skinMat, pbr, glow } from './util.js';

function spec() {
  const s = [['root', null, [0, 0, 0]], ['pelvis', 'root', [0, 48, -28]], ['spine', 'pelvis', [0, 50, -5]], ['chest', 'spine', [0, 50, 18]],
    ['neck', 'chest', [0, 56, 30]], ['head', 'neck', [0, 68, 40]], ['jaw', 'head', [0, 64, 47]],
    ['tail1', 'pelvis', [0, 53, -40]], ['tail2', 'tail1', [0, 57, -54]], ['tail3', 'tail2', [0, 63, -66]]];
  [['L', 1], ['R', -1]].forEach(([n, sg]) => {
    s.push(['f1' + n, 'chest', [sg * 8, 44, 22]], ['f2' + n, 'f1' + n, [sg * 8.4, 25, 24]], ['f3' + n, 'f2' + n, [sg * 8.4, 5, 25]]);
    s.push(['b1' + n, 'pelvis', [sg * 8, 44, -30]], ['b2' + n, 'b1' + n, [sg * 8.4, 24, -37]], ['b3' + n, 'b2' + n, [sg * 8.4, 5, -32]]);
  });
  return s;
}

function geometry(cfg, sk) {
  const B = new SkinBuilder(), I = sk.idx;
  setSeed(cfg.seed || 3);
  const fur = C(cfg.fur), furD = shade(fur, .55), flesh = C('#6a2420'), bone = C('#d9cfb6'), blood = C('#4a0a0a');
  const zombie = cfg.zombie !== false;
  const furAt = (x, y, z) => {
    let c = shade(fur, .75 + .4 * fbm(x * .14, y * .14, z * .14));
    if (y < 44 && Math.abs(x) < 8) c = mix(c, shade(fur, 1.25), .35);                         // светлее брюхо
    if (zombie) {
      const r = fbm(x * .07 + 5, y * .07, z * .07);
      if (r > .64) c = mix(furD, flesh, (r - .64) * 3);                                         // проплешины
      if (cfg.ribs !== false && z > 2 && z < 24 && Math.abs(x) > 7 && y > 40 && y < 58 && Math.sin(z * 1.1) > .25 && r > .45) c = bone.clone();
      const b = noise(x * .2, y * .2, z * .2); if (b > .82) c = mix(c, blood, .8);
    }
    if (cfg.plague && noise(x * .3 + 7, y * .3, z * .3) > .8) c = C('#7aa040');
    return c;
  };
  // туловище: lathe вдоль оси Z
  const L = cfg.long || 1;
  const rows = [[-46, 0], [-42, 7], [-34, 10.5], [-24, 12], [-12, 10.8], [0, 11.4], [10, 13.2], [20, 14], [28, 12.4], [33, 8.5], [35, 0]].map(([z, r]) => [z * L, r * (cfg.bulk || 1)]);
  const bg = latheProfile(rows, 24); bg.rotateX(PI / 2);
  const bp = bg.attributes.position;
  for (let i = 0; i < bp.count; i++) { let x = bp.getX(i), y = -bp.getY(i), z = bp.getZ(i); x *= .8; if (y < 0) y *= .85; bp.setXYZ(i, x, y + 50, z); }
  bg.computeVertexNormals();
  B.add(bg, (x, y, z) => z < -20 * L ? [I.pelvis, I.pelvis, 0] : z < -5 * L ? [I.pelvis, I.spine, smooth(-20 * L, -5 * L, z)] : z < 10 * L ? [I.spine, I.spine, 0] : z < 20 * L ? [I.spine, I.chest, smooth(10 * L, 20 * L, z)] : [I.chest, I.chest, 0], furAt);
  // шея и голова
  B.add(alignAlong(taper(7.8, 6.2, 16), V3(0, 54, 26 * L), V3(0, 67, 40)), (x, y, z) => z < 31 ? [I.neck, I.chest, 1 - smooth(26, 31, z)] : [I.neck, I.neck, 0], furAt);
  const skull = ellipsoid(8.2 * (cfg.headW || 1), 7.8, 9.8, 22, 16); skull.translate(0, 70, 43); B.add(skull, () => [I.head, I.head, 0], furAt);
  const snoutL = cfg.snout || 1;
  B.add(alignAlong(taper(5.6, 3.8, 14 * snoutL), V3(0, 67.5, 48), V3(0, 66, 48 + 14 * snoutL)), () => [I.head, I.head, 0], furAt);
  B.add(alignAlong(taper(3.8, 2.6, 13 * snoutL), V3(0, 62.6, 47), V3(0, 61.6, 47 + 13 * snoutL)), () => [I.jaw, I.jaw, 0], (x, y, z) => mix(furAt(x, y, z), flesh, zombie ? .35 : 0));
  const nose = ellipsoid(2.4, 1.8, 1.6, 12, 8); nose.translate(0, 67, 48.6 + 14 * snoutL); B.add(nose, () => [I.head, I.head, 0], () => C('#151515'));
  // зубы
  for (let i = 0; i < 5; i++) { const zz = 52 + i * 2.2 * snoutL; [-1, 1].forEach(s => {
    const t = new THREE.ConeGeometry(.55, 2.6, 6); t.rotateX(PI); t.translate(s * 3, 64.4, zz); B.add(t, () => [I.head, I.head, 0], () => C('#e8e0c8'));
    const b = new THREE.ConeGeometry(.5, 2.2, 6); b.translate(s * 2.4, 63.4, zz - .6); B.add(b, () => [I.jaw, I.jaw, 0], () => C('#d8cfb4')); }); }
  // уши
  [-1, 1].forEach(s => {
    let e;
    if (cfg.ears === 'round') { e = ellipsoid(3.6, 3.8, 1, 12, 8); e.translate(s * 6, 77, 41); }
    else { e = new THREE.ConeGeometry(cfg.ears === 'big' ? 3.6 : 2.8, cfg.ears === 'big' ? 9 : 7, 8); e.rotateZ(-s * .3); e.translate(s * 5.4, 79, 40); }
    B.add(e, () => [I.head, I.head, 0], (x, y, z) => cfg.ears === 'round' ? C('#c99a96') : shade(fur, .7));
  });
  // мышцы: лопатки и окорока
  [-1, 1].forEach(s => {
    const sc = ellipsoid(4.6, 9, 9, 16, 12); sc.translate(s * 7.2, 47, 20); B.add(sc, () => [I.chest, I.chest, 0], furAt);
    const hm = ellipsoid(5.4, 10.5, 9.5, 16, 12); hm.translate(s * 7.4, 47, -31); B.add(hm, () => [I.pelvis, I.pelvis, 0], furAt);
  });
  // лапы
  const lk = (cfg.legK || 1) * 1.15;
  [['L', 1], ['R', -1]].forEach(([n, sg]) => {
    [['f', 22, 24, 25], ['b', -30, -37, -32]].forEach(([p, z1, z2, z3]) => {
      const a = V3(sg * 8, 44, z1), b = V3(sg * 8.4, 25, z2), c = V3(sg * 8.4, 5, z3);
      const top = p === 'f' ? 'chest' : 'pelvis';
      B.add(alignAlong(taper(4.8 * lk, 3.3 * lk, 19.5), a, b), (x, y) => y > 39 ? [I[p + '1' + n], I[top], smooth(39, 46, y) * .6] : [I[p + '1' + n], I[p + '1' + n], 0], furAt);
      B.add(alignAlong(taper(3.3 * lk, 2.4 * lk, 20), b, c), (x, y) => y > 22 ? [I[p + '2' + n], I[p + '1' + n], smooth(22, 27, y) * .5] : [I[p + '2' + n], I[p + '2' + n], 0], furAt);
      const paw = ellipsoid(3.2 * lk, 2.2, 4.4, 12, 8); paw.translate(sg * 8.4, 2.4, z3 + 1.6); B.add(paw, () => [I[p + '3' + n], I[p + '3' + n], 0], (x, y, z) => shade(furAt(x, y, z), .7));
      if (zombie) for (let k = -1; k <= 1; k++) { const cl = new THREE.ConeGeometry(.45, 2.4, 5); cl.rotateX(PI / 2); cl.translate(sg * 8.4 + k * 1.2, 1.4, z3 + 6.4); B.add(cl, () => [I[p + '3' + n], I[p + '3' + n], 0], () => C('#2a2420')); }
    });
  });
  // хвост
  const tk = cfg.tailK || 1, tc = cfg.tailCol ? C(cfg.tailCol) : null;
  const tcol = (x, y, z) => tc ? shade(tc, .85 + .25 * noise(x * .4, y * .4, z * .4)) : furAt(x, y, z);
  B.add(alignAlong(taper(3.8 * tk, 3 * tk, 15), V3(0, 53, -40), V3(0, 57, -54)), (x, y, z) => z > -43 ? [I.tail1, I.pelvis, smooth(-43, -38, z) * .5] : [I.tail1, I.tail1, 0], tcol);
  B.add(alignAlong(taper(3 * tk, 2.2 * tk, 13.5), V3(0, 57, -54), V3(0, 63, -66)), () => [I.tail2, I.tail2, 0], tcol);
  B.add(alignAlong(taper(2.2 * tk, .8 * tk, 12 * (cfg.tailLen || 1)), V3(0, 63, -66), V3(0, 67, -66 - 12 * (cfg.tailLen || 1))), () => [I.tail3, I.tail3, 0], tcol);
  return B.build();
}

function clipsFor(base, cfg) {
  const S = {}, sp = cfg.speed || 1;
  const legs = (d, amp) => {
    const t = {};
    [['f1L', 0], ['b1R', 0], ['f1R', PI], ['b1L', PI]].forEach(([b, ph]) => { t[b] = cyc(d, 16, a => [-amp * Math.sin(a + ph), 0, 0]); });
    [['f2L', 0], ['b2R', 0], ['f2R', PI], ['b2L', PI]].forEach(([b, ph]) => { const s = b[0] === 'f' ? -1 : 1; t[b] = cyc(d, 16, a => [s * (.15 + .7 * Math.max(0, Math.sin(a + ph + 1.2))), 0, 0]); });
    return t;
  };
  const idle = 2.4;
  S.idle = clip('idle', idle, Object.assign({
    spine: cyc(idle, 12, a => [.03 * Math.sin(a * 2), 0, 0]), chest: cyc(idle, 12, a => [-.03 * Math.sin(a * 2), 0, 0]),
    neck: cyc(idle, 12, a => [.18 + .05 * Math.sin(a), .1 * Math.sin(a * .5), 0]), head: cyc(idle, 12, a => [-.2 + .06 * Math.sin(a * 2), .15 * Math.sin(a * .5), .05 * Math.sin(a)]),
    jaw: cyc(idle, 12, a => [.12 + .1 * Math.max(0, Math.sin(a * 3)), 0, 0]),
    tail1: cyc(idle, 12, a => [cfg.tailUp || -.25, .25 * Math.sin(a * 2), 0]), tail2: cyc(idle, 12, a => [.15, .2 * Math.sin(a * 2 + .6), 0]), tail3: cyc(idle, 12, a => [.15, .2 * Math.sin(a * 2 + 1.2), 0]),
    'pelvis.pos': cyc(idle, 12, a => [0, .5 * Math.sin(a * 2), 0]),
    f2L: [[0, [-.1, 0, 0]], [idle, [-.1, 0, 0]]], f2R: [[0, [-.1, 0, 0]], [idle, [-.1, 0, 0]]], b2L: [[0, [.15, 0, 0]], [idle, [.15, 0, 0]]], b2R: [[0, [.15, 0, 0]], [idle, [.15, 0, 0]]],
   }), base);
  const wd = .62 / sp;
  S.walk = clip('walk', wd, Object.assign(legs(wd, .55), {
    'pelvis.pos': cyc(wd, 16, a => [0, 1.6 * Math.abs(Math.sin(a)), 0]), spine: cyc(wd, 16, a => [.05 * Math.sin(a * 2), .04 * Math.sin(a), 0]),
    neck: cyc(wd, 16, a => [.12 + .06 * Math.sin(a * 2), 0, 0]), head: cyc(wd, 16, a => [-.1 + .05 * Math.sin(a * 2 + 1), 0, 0]), jaw: [[0, [.2, 0, 0]], [wd, [.2, 0, 0]]],
    tail1: cyc(wd, 16, a => [cfg.tailUp || -.25, .3 * Math.sin(a), 0]), tail2: cyc(wd, 16, a => [.1, .25 * Math.sin(a + .7), 0]),
  }), base);
  S.attack = clip('attack', .6, {
    'pelvis.pos': [[0, [0, 0, 0]], [.15, [0, -4, -4]], [.32, [0, 4, 16]], [.6, [0, 0, 0]]],
    spine: [[0, [0, 0, 0]], [.15, [.12, 0, 0]], [.32, [-.15, 0, 0]], [.6, [0, 0, 0]]],
    neck: [[0, [.18, 0, 0]], [.15, [.35, 0, 0]], [.32, [-.15, 0, 0]], [.6, [.18, 0, 0]]], head: [[0, [-.2, 0, 0]], [.32, [-.35, 0, 0]], [.6, [-.2, 0, 0]]],
    jaw: [[0, [.1, 0, 0]], [.2, [.75, 0, 0]], [.34, [.05, 0, 0]], [.6, [.1, 0, 0]]],
    f1L: [[0, [0, 0, 0]], [.32, [-.9, 0, 0]], [.6, [0, 0, 0]]], f1R: [[0, [0, 0, 0]], [.32, [-.8, 0, 0]], [.6, [0, 0, 0]]],
    b1L: [[0, [0, 0, 0]], [.15, [-.3, 0, 0]], [.32, [.6, 0, 0]], [.6, [0, 0, 0]]], b1R: [[0, [0, 0, 0]], [.15, [-.3, 0, 0]], [.32, [.6, 0, 0]], [.6, [0, 0, 0]]],
  }, base);
  S.hit = clip('hit', .35, { 'pelvis.pos': [[0, [0, 0, 0]], [.1, [0, -2, -5]], [.35, [0, 0, 0]]], neck: [[0, [.18, 0, 0]], [.1, [-.3, .3, 0]], [.35, [.18, 0, 0]]], jaw: [[0, [.1, 0, 0]], [.1, [.5, 0, 0]], [.35, [.1, 0, 0]]] }, base);
  S.death = clip('death', 1.1, { pelvis: [[0, [0, 0, 0]], [.6, [0, 0, 1.2]], [1.1, [0, 0, 1.52]]], 'pelvis.pos': [[0, [0, 0, 0]], [.6, [-6, -18, 0]], [1.1, [-8, -34, 0]]],
    neck: [[0, [.18, 0, 0]], [1.1, [-.4, 0, 0]]], jaw: [[0, [.1, 0, 0]], [1.1, [.45, 0, 0]]], f1L: [[0, [0, 0, 0]], [1.1, [-.6, 0, 0]]], b1L: [[0, [0, 0, 0]], [1.1, [.5, 0, 0]]] }, base);
  return S;
}

export function buildQuadruped(cfg) {
  const sk = makeSkeleton(spec());
  const geo = geometry(cfg, sk);
  const mat = skinMat({ roughness: .86 });
  const mesh = new THREE.SkinnedMesh(geo, mat); mesh.castShadow = true; mesh.frustumCulled = false;
  mesh.add(sk.byName.root); mesh.bind(new THREE.Skeleton(sk.bones));
  const mats = [mat];
  [-1, 1].forEach(s => { const e = new THREE.Mesh(new THREE.SphereGeometry(1.9, 12, 8), glow(cfg.eye || '#ff5a3d', 2.2)); e.position.set(s * 4.4, 71.6, 50.2).sub(sk.world.head); sk.byName.head.add(e); });
  if (cfg.spikes) for (let i = 0; i < 6; i++) { const c = new THREE.Mesh(new THREE.ConeGeometry(1.6, 7, 8), pbr('#cfd6de', { metalness: .9, roughness: .3 })); const z = -20 + i * 8; c.position.set(0, 63, z).sub(i < 3 ? sk.world.spine : sk.world.chest); (i < 3 ? sk.byName.spine : sk.byName.chest).add(c); }
  if (cfg.collar) { const c = new THREE.Mesh(new THREE.TorusGeometry(7.4, 1.2, 8, 20), pbr(cfg.collar, { metalness: .85, roughness: .3 })); c.position.set(0, 58, 31).sub(sk.world.neck); c.rotation.x = -.9; sk.byName.neck.add(c); }
  if (cfg.plague) { const m = pbr('#9fbf5a', { roughness: .2, emissive: C('#4a7a10'), emissiveIntensity: .7 }); mats.push(m); setSeed(cfg.seed + 2); for (let i = 0; i < 8; i++) { const b = rand() < .5 ? 'spine' : 'chest'; const s = new THREE.Mesh(new THREE.SphereGeometry(1.4 + rand() * 1.8, 10, 8), m); s.position.set((rand() < .5 ? -1 : 1) * (8 + rand() * 2), 46 + rand() * 10, (b === 'spine' ? -10 : 12) + rand() * 12).sub(sk.world[b]); sk.byName[b].add(s); } }
  const group = new THREE.Group(); group.add(mesh);
  const base = {}; sk.bones.forEach(b => { base[b.name] = b.position.clone(); });
  return { group, mesh, sk, mats, clips: clipsFor(base, cfg), height: 80 };
}
