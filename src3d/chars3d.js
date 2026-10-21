// 3D-персонажи поверх 2D-сцены (three.js). Все модели собраны из примитивов в коде, оригинальные.
// Модель смотрит в +z. Герой справа от камеры «смотрит» вправо (3/4 к зрителю), враги — влево.
import * as THREE from 'three';

const GL = { ready: false, active: false, models: {} };
window.GL3D = GL;

const VB = { x: 0, y: 24, w: 360, h: 400 };   // viewBox SVG-сцены
const YAW = 0.85;

let renderer, scene, camera, canvas, hostEl;
let hero = null, foe = null, heroKey = '', foeKey = '', last = 0, view = '';

// ---------- материалы ----------
const toonMap = (() => {
  const d = new Uint8Array([88, 88, 88, 255, 168, 168, 168, 255, 255, 255, 255, 255]);
  const t = new THREE.DataTexture(d, 3, 1, THREE.RGBAFormat);
  t.minFilter = t.magFilter = THREE.NearestFilter; t.generateMipmaps = false; t.needsUpdate = true; return t;
})();
let bag = null;                                   // материалы текущей модели (для вспышки при уроне)
const col = c => new THREE.Color(c);
const M = (c, o = {}) => { const m = new THREE.MeshToonMaterial(Object.assign({ color: col(c), gradientMap: toonMap }, o)); if (bag) bag.push(m); return m; };
const GLOW = c => new THREE.MeshBasicMaterial({ color: col(c) });
const OUTM = new THREE.MeshBasicMaterial({ color: 0x06070a, side: THREE.BackSide });

function P(geo, c, o = {}) {
  const m = new THREE.Mesh(geo, o.mat || M(c, o.o));
  if (o.ol !== 0) { const ol = new THREE.Mesh(geo, OUTM); ol.scale.setScalar(o.ol || 1.07); m.add(ol); }
  if (o.pos) m.position.set(o.pos[0], o.pos[1], o.pos[2]);
  if (o.rot) m.rotation.set(o.rot[0], o.rot[1], o.rot[2]);
  if (o.sc) m.scale.set(o.sc[0], o.sc[1], o.sc[2]);
  return m;
}
const cap = (r, l) => new THREE.CapsuleGeometry(r, l, 5, 12);
const sph = r => new THREE.SphereGeometry(r, 18, 14);
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const cone = (r, h) => new THREE.ConeGeometry(r, h, 12);
const cyl = (a, b, h) => new THREE.CylinderGeometry(a, b, h, 14);
const grp = (x = 0, y = 0, z = 0) => { const g = new THREE.Group(); g.position.set(x, y, z); return g; };
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const tube = (pts, r, seg = 18) => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map(p => V(p[0], p[1], p[2]))), seg, r, 8);
const PI = Math.PI;

// ---------- герой ----------
const JACKETS = [['#6b5a45', '#4b3f30'], ['#4a6fa5', '#34507c'], ['#7d8a99', '#566170'], ['#3f6b4a', '#2c4c35'], ['#2e3a4d', '#1c2533'], ['#3a3f6e', '#262a50']];
function weaponModel(wi) {
  const w = new THREE.Group();
  const steel = '#cfd8e3', dark = '#20242c';
  if (wi === 1) { w.add(P(cyl(3.2, 3.2, 54), '#8b95a5', { pos: [0, 26, 0] })); w.add(P(cyl(4, 4, 6), '#5e6877', { pos: [0, 53, 0] })); }
  if (wi === 2) { w.add(P(cyl(4.6, 2.6, 56), '#a8743f', { pos: [0, 28, 0] })); [[0, 38, 1], [3, 30, -2], [-3, 44, 2], [2, 48, -2]].forEach(n => w.add(P(cone(1.1, 6), steel, { pos: [n[0] * 1.2 + (n[2] > 0 ? 4.4 : -4.4), n[1], 0], rot: [0, 0, n[2] > 0 ? -PI / 2 : PI / 2], ol: 0 }))); }
  if (wi === 3) { w.add(P(cyl(2.2, 2.2, 16), '#3a2b1c', { pos: [0, 5, 0] })); w.add(P(box(14, 3, 6), '#8a929f', { pos: [0, 14, 0] })); w.add(P(box(2.4, 44, 8), steel, { pos: [0, 38, 0] })); w.add(P(cone(2.4, 8), steel, { pos: [0, 62, 0], sc: [1, 1, 3.2] })); }
  if (wi === 4) { w.add(P(cyl(3.4, 3.4, 50), dark, { pos: [0, 24, 0] })); w.add(P(cyl(4.2, 4.2, 12), '#e6b422', { pos: [0, 4, 0] })); w.add(new THREE.Mesh(sph(7), new THREE.MeshBasicMaterial({ color: col('#ffe34d'), transparent: true, opacity: .55 }))); w.children[2].position.y = 52; }
  if (wi === 5) { w.add(P(cyl(3, 3, 14), '#2b3340', { pos: [0, 4, 0] })); w.add(P(box(11, 12, 8), '#4b5668', { pos: [0, 14, 0] })); const bl = new THREE.Mesh(box(3, 50, 5), GLOW('#8ff0ff')); bl.position.y = 46; w.add(bl); const gl = new THREE.Mesh(box(8, 52, 9), new THREE.MeshBasicMaterial({ color: col('#59e1ff'), transparent: true, opacity: .28 })); gl.position.y = 46; w.add(gl); }
  if (wi === 6) { w.add(P(cyl(2.4, 2.4, 14), '#2b3340', { pos: [0, 4, 0] })); w.add(P(box(18, 4, 7), '#7a5ab0', { pos: [0, 12, 0] })); const bl = new THREE.Mesh(box(4, 60, 5), GLOW('#d6baff')); bl.position.y = 46; w.add(bl); const tip = new THREE.Mesh(cone(2.6, 12), GLOW('#d6baff')); tip.position.y = 82; w.add(tip); const gl = new THREE.Mesh(box(10, 66, 9), new THREE.MeshBasicMaterial({ color: col('#a66bff'), transparent: true, opacity: .3 })); gl.position.y = 48; w.add(gl); }
  return w;
}
function heroModel(wi, ai) {
  bag = []; const g = grp(), body = grp(); g.add(body);
  const [J, JD] = JACKETS[ai] || JACKETS[0], skin = '#e3bb94';
  const leg = (x, c) => {
    const hip = grp(x, 52, 0); hip.add(P(cap(6.4, 16), c, { pos: [0, -12, 0] }));
    const knee = grp(0, -23, 0); hip.add(knee); knee.add(P(cap(5.6, 14), c, { pos: [0, -12, 0] }));
    knee.add(P(box(11, 7, 18), '#1a1d25', { pos: [0, -25, 3.5] }));
    if (ai >= 2) knee.add(P(sph(6.2), JD, { pos: [0, 0, 5], sc: [1, 1, .6] }));
    body.add(hip); return { hip, knee };
  };
  const L = leg(8, '#34426a'), R = leg(-8, '#2a3550');
  const torso = grp(0, 0, 0); body.add(torso);
  torso.add(P(cap(15, 22), J, { pos: [0, 78, 0], sc: [1, 1, .78] }));
  torso.add(P(cyl(15.5, 15.5, 8), JD, { pos: [0, 56, 0], sc: [1, 1, .8], ol: 0 }));
  torso.add(P(box(2.6, 44, 1), JD, { pos: [0, 80, 12.2], ol: 0 }));
  torso.add(P(cyl(5.2, 5.2, 7), skin, { pos: [0, 105, 0] }));
  torso.add(P(new THREE.TorusGeometry(8.6, 3.2, 8, 20), '#c0392b', { pos: [0, 103, 0], rot: [PI / 2, 0, 0] }));
  const head = grp(0, 117, 0); torso.add(head);
  head.add(P(sph(13.5), skin));
  head.add(P(new THREE.SphereGeometry(14.4, 18, 10, 0, PI * 2, 0, PI / 2), '#2c364b', { pos: [0, 1.8, -.5], rot: [-.12, 0, 0] }));
  head.add(P(box(18, 2.6, 13), '#2c364b', { pos: [0, 3, 11], rot: [.12, 0, 0] }));
  [-1, 1].forEach(s => { const e = new THREE.Mesh(sph(1.9), GLOW('#1c2230')); e.position.set(s * 5.2, -.5, 12.2); head.add(e); });
  head.add(P(sph(2.3), skin, { pos: [0, -3, 13.4], ol: 0 }));
  const pack = P(box(24, 32, 12), '#7a5a36', { pos: [0, 82, -15] }); torso.add(pack);
  pack.add(P(box(24.5, 7, 12.6), '#a8844f', { pos: [0, 12, 0], ol: 0 })); pack.add(P(box(14, 10, 3), '#5d4426', { pos: [0, -4, 6.5], ol: 0 }));
  torso.add(P(cyl(1, 1, 1), '#000', { ol: 0, pos: [0, 0, 0], sc: [0.001, 0.001, 0.001] }));
  if (ai >= 2) [-1, 1].forEach(s => torso.add(P(sph(8), JD, { pos: [s * 19, 99, 0], sc: [1, .7, 1] })));
  if (ai >= 4) [-1, 1].forEach(s => { const st = new THREE.Mesh(box(2.2, 34, 1), GLOW(ai >= 5 ? '#a66bff' : '#59e1ff')); st.position.set(s * 8, 80, 12.8); torso.add(st); });
  const arm = (s, c, near) => {
    const sh = grp(s * 19.5, 98, 0); sh.add(P(cap(5.4, 13), c, { pos: [0, -11, 0] }));
    const el = grp(0, -22, 0); sh.add(el); el.add(P(cap(4.7, 12), c, { pos: [0, -10, 0] }));
    const hand = grp(0, -21, 0); el.add(hand); hand.add(P(sph(5.2), skin));
    torso.add(sh); return { sh, el, hand };
  };
  const AF = arm(-1, J), AB = arm(1, JD);           // AF — рука с оружием (ближняя к камере)
  const w = weaponModel(wi); w.rotation.set(-1.15, 0, 0); AF.hand.add(w);
  AF.sh.rotation.x = -.15;
  return { g, body, torso, head, L, R, AF, AB, bag, kind: 'hero' };
}
function updHero(o, t, st) {
  const walk = st.walk, ph = st.phase, sw = Math.sin(ph);
  const k = walk ? 1 : 0;
  o.L.hip.rotation.x = sw * .75 * k; o.R.hip.rotation.x = -sw * .75 * k;
  o.L.knee.rotation.x = Math.max(0, -Math.cos(ph)) * .9 * k; o.R.knee.rotation.x = Math.max(0, Math.cos(ph)) * .9 * k;
  o.AB.sh.rotation.x = sw * .6 * k + (1 - k) * Math.sin(t * 1.7) * .05; o.AB.el.rotation.x = -.25 - (walk ? .2 : 0);
  let af = -sw * .45 * k - .15 + (1 - k) * Math.sin(t * 1.7 + 1) * .05, ael = -.55;
  const a = st.atk;
  if (a >= 0) { const s = Math.sin(PI * Math.min(1, a)); af = -2.5 * s - .15; ael = -.2 - .5 * s; o.torso.rotation.y = -.5 * s; } else o.torso.rotation.y = 0;
  o.AF.sh.rotation.x = af; o.AF.el.rotation.x = ael;
  o.body.position.y = walk ? Math.abs(sw) * 2.4 : Math.sin(t * 2) * .7;
  o.torso.rotation.x = walk ? .06 : 0;
  o.head.rotation.x = walk ? -Math.abs(sw) * .05 : Math.sin(t * 1.3) * .03;
  o.body.rotation.z = st.dead * (-PI / 2 + .1);
  o.body.position.x = st.dead * 18;
}

// ---------- враги ----------
function mRat(p) {
  const g = grp(); const legs = [];
  g.add(P(sph(1), p.b, { sc: [20, 16, 34], pos: [0, 24, 0] })); g.add(P(sph(1), p.s, { sc: [15, 8, 26], pos: [0, 15, 3], ol: 0 }));
  g.add(P(sph(13), p.b, { pos: [0, 28, 36] })); g.add(P(cone(7.5, 22), p.b, { pos: [0, 25, 54], rot: [PI / 2, 0, 0] })); g.add(P(sph(3), '#2a1a1a', { pos: [0, 25, 65], ol: 0 }));
  [-1, 1].forEach(s => { g.add(P(cyl(8.5, 8.5, 2.4), p.a, { pos: [s * 10, 41, 31], rot: [0, 0, PI / 2] })); g.add(P(cyl(5, 5, 2.8), p.s, { pos: [s * 10.4, 41, 31], rot: [0, 0, PI / 2], ol: 0 }));
    const e = new THREE.Mesh(sph(3.4), GLOW(p.e)); e.position.set(s * 6.6, 32, 46); g.add(e);
    g.add(P(box(3, 7, 2), '#fff', { pos: [s * 2.6, 17, 63], ol: 0 })); });
  g.add(P(tube([[0, 22, -30], [0, 14, -52], [0, 28, -74], [0, 48, -70]], 2.8), p.a, { ol: 0 }));
  [[-11, 14], [11, 14], [-11, -16], [11, -16]].forEach(([x, z]) => { const l = grp(x, 14, z); l.add(P(cap(4.4, 6), p.s, { pos: [0, -6, 0] })); g.add(l); legs.push(l); });
  return { g, u: (t, st) => legs.forEach((l, i) => { l.rotation.x = Math.sin(t * (st.walk ? 10 : 3) + i * PI * .5) * (st.walk ? .6 : .08); }) };
}
function mDog(p, f) {
  const g = grp(); const legs = [];
  g.add(P(cap(15, 38), p.b, { pos: [0, 52, 0], rot: [PI / 2, 0, 0], sc: [1, 1, 1.05] })); g.add(P(sph(1), p.s, { sc: [13, 7, 26], pos: [0, 42, 0], ol: 0 }));
  g.add(P(cap(9, 14), p.b, { pos: [0, 66, 36], rot: [.9, 0, 0] }));
  g.add(P(sph(14), p.b, { pos: [0, 76, 48] })); g.add(P(box(11, 10, 24), p.b, { pos: [0, 70, 66] })); g.add(P(sph(4.4), '#161616', { pos: [0, 72, 79], ol: 0 }));
  g.add(P(box(9, 2, 18), '#7a1f26', { pos: [0, 63.5, 64], ol: 0 }));
  [-1, 1].forEach(s => { g.add(P(cone(f && f.cat ? 6 : 5, f && f.cat ? 18 : 14), p.s, { pos: [s * 8, 92, 42], rot: [-.15, 0, -s * .25] }));
    const e = new THREE.Mesh(sph(3.5), GLOW(p.e)); e.position.set(s * 7.5, 79, 60); g.add(e);
    g.add(P(cone(1.6, 5), '#fff', { pos: [s * 3.5, 62, 72], rot: [PI, 0, 0], ol: 0 })); });
  g.add(P(tube([[0, 62, -36], [0, 74, -52], [0, 92, -54], [0, 100, -46]], 3.4), p.b, { ol: 0 }));
  if (f && f.spikes) for (let i = 0; i < 5; i++) g.add(P(cone(3.6, 14), p.a, { pos: [0, 70, -24 + i * 13], ol: 0 }));
  if (f && f.cat) [-1, 1].forEach(s => { [0, 1].forEach(k => g.add(P(cyl(.5, .5, 22), '#eee', { pos: [s * 14, 68 - k * 4, 74], rot: [0, 0, PI / 2 + s * (k - .5) * .3], ol: 0 }))); });
  [[-9, 30], [9, 30], [-9, -28], [9, -28]].forEach(([x, z]) => { const l = grp(x, 40, z); l.add(P(cap(5, 22), p.s, { pos: [0, -17, 0] })); l.add(P(box(8, 4, 12), '#222', { pos: [0, -34, 2], ol: 0 })); g.add(l); legs.push(l); });
  return { g, u: (t, st) => legs.forEach((l, i) => { l.rotation.x = Math.sin(t * (st.walk ? 9 : 2.5) + (i % 2) * PI + (i > 1 ? .8 : 0)) * (st.walk ? .6 : .06); }) };
}
function wingShape(s) {
  const sh = new THREE.Shape(); sh.moveTo(0, 0); sh.quadraticCurveTo(s * 30, 40, s * 78, 16); sh.lineTo(s * 62, 8); sh.lineTo(s * 66, -6); sh.lineTo(s * 46, -4); sh.lineTo(s * 40, -16); sh.lineTo(s * 22, -8); sh.lineTo(0, -16); sh.closePath();
  return new THREE.ShapeGeometry(sh);
}
function mBat(p) {
  const g = grp(); const wings = [];
  g.add(P(sph(14), p.b, { pos: [0, 72, 0], sc: [1, 1.5, 1] })); g.add(P(sph(10.5), p.b, { pos: [0, 98, 6] }));
  [-1, 1].forEach(s => { g.add(P(cone(4, 12), p.b, { pos: [s * 7, 110, 4], rot: [0, 0, -s * .2] }));
    const e = new THREE.Mesh(sph(2.8), GLOW(p.e)); e.position.set(s * 4.4, 99, 15); g.add(e);
    g.add(P(cone(1.3, 5), '#fff', { pos: [s * 2.6, 90, 15], rot: [PI, 0, 0], ol: 0 }));
    const w = grp(s * 8, 78, -2); const m = new THREE.Mesh(wingShape(s), new THREE.MeshToonMaterial({ color: col(p.s), gradientMap: toonMap, side: THREE.DoubleSide })); bag.push(m.material); w.add(m); w.rotation.y = s * .5; g.add(w); wings.push([w, s]);
    g.add(P(cyl(1.4, 1.4, 12), p.s, { pos: [s * 5, 54, 0], ol: 0 })); });
  return { g, u: (t, st) => { wings.forEach(([w, s]) => { w.rotation.z = s * Math.sin(t * 11) * .55; }); g.position.y = Math.sin(t * 3) * 5; } };
}
function mBlob(p) {
  const g = grp(); const b = grp(0, 0, 0); g.add(b);
  b.add(P(sph(1), p.b, { sc: [42, 38, 42], pos: [0, 30, 0], ol: 1.05 })); b.add(P(sph(1), '#fff', { sc: [8, 5, 3], pos: [-14, 56, 26], ol: 0, o: { transparent: true, opacity: .5 } }));
  [-1, 1].forEach(s => { b.add(P(sph(9.5), '#fff', { pos: [s * 15, 40, 33] })); const pu = new THREE.Mesh(sph(4.6), GLOW(p.e)); pu.position.set(s * 15, 39, 41); b.add(pu); });
  b.add(P(new THREE.TorusGeometry(10, 2, 6, 14, PI), p.s, { pos: [0, 24, 38], rot: [0, 0, PI], ol: 0 }));
  [[-26, 18, 24], [28, 14, 18], [10, 62, 10]].forEach(([x, y, z], i) => b.add(P(sph(3.6 + i), p.a, { pos: [x, y, z], ol: 0, o: { transparent: true, opacity: .7 } })));
  return { g, u: (t) => { const s = Math.sin(t * 3); b.scale.set(1 - s * .04, 1 + s * .06, 1 - s * .04); } };
}
function mDrone(p) {
  const g = grp(); const hov = grp(0, 0, 0); g.add(hov); const props = [];
  hov.add(P(sph(1), p.b, { sc: [34, 24, 34], pos: [0, 84, 0] })); hov.add(P(sph(1), p.a, { sc: [28, 8, 28], pos: [0, 96, 0], ol: 0, o: { transparent: true, opacity: .35 } }));
  hov.add(P(cyl(13, 13, 8), '#10131a', { pos: [0, 84, 30], rot: [PI / 2, 0, 0] })); const ln = new THREE.Mesh(cyl(9, 9, 4), GLOW(p.e)); ln.position.set(0, 84, 34); ln.rotation.x = PI / 2; hov.add(ln);
  hov.add(P(cyl(1.6, 1.6, 26), p.s, { pos: [0, 116, 0] })); const at = new THREE.Mesh(sph(4.4), GLOW(p.e)); at.position.set(0, 130, 0); hov.add(at);
  [-1, 1].forEach(s => { const pr = new THREE.Mesh(cyl(30, 30, 1.2), new THREE.MeshBasicMaterial({ color: col(p.s), transparent: true, opacity: .55 })); pr.position.set(s * 20, 106, -4); hov.add(pr); props.push(pr);
    hov.add(P(cyl(2, 2, 10), p.s, { pos: [s * 20, 100, -4], ol: 0 }));
    const arm = grp(s * 30, 74, 8); arm.add(P(cap(3.4, 24), p.s, { pos: [s * 3, -14, 14], rot: [-.9, 0, s * .2] })); arm.add(P(cone(5, 12), '#c9ced6', { pos: [s * 6, -30, 28], rot: [PI * .8, 0, 0] })); hov.add(arm); });
  const th = new THREE.Mesh(cyl(14, 10, 3), new THREE.MeshBasicMaterial({ color: col(p.e), transparent: true, opacity: .55 })); th.position.y = 58; hov.add(th);
  return { g, u: (t) => { hov.position.y = Math.sin(t * 2.4) * 5; props.forEach(r => { r.rotation.y = t * 40; }); } };
}
function mHuman(p, f) {
  const g = grp(); const body = grp(); g.add(body);
  const skin = '#b9c0a2', cloth = f.tie ? '#2e3548' : p.b, legc = f.tie ? '#252a38' : p.s;
  const legs = [-1, 1].map(s => { const l = grp(s * 8, 54, 0); l.add(P(cap(6.6, 40), legc, { pos: [0, -26, 0] })); l.add(P(box(11, 7, 19), '#15171c', { pos: [0, -50, 4], ol: 0 })); body.add(l); return l; });
  const torso = grp(0, 54, 0); body.add(torso); torso.rotation.x = .3;
  torso.add(P(cap(15, 24), cloth, { pos: [0, 24, 0], sc: [1, 1, .8] }));
  for (let i = 0; i < 5; i++) torso.add(P(cone(4, 9), p.s, { pos: [-14 + i * 7, -3, 3], rot: [PI, 0, 0], ol: 0 }));
  if (f.tie) { torso.add(P(box(14, 26, 2), '#e9edf5', { pos: [0, 30, 12], ol: 0 })); torso.add(P(box(4.6, 24, 2.4), '#b5342c', { pos: [0, 28, 13.4], ol: 0 })); }
  if (f.apron) { torso.add(P(box(26, 32, 3), '#f2f2f2', { pos: [0, 22, 12.6], ol: 0 })); torso.add(P(sph(4), '#b5342c', { pos: [-4, 20, 14.4], ol: 0, sc: [1, 1, .3] })); }
  const head = grp(0, 56, 10); torso.add(head); head.add(P(sph(13), skin));
  [-1, 1].forEach(s => { const e = new THREE.Mesh(sph(2.6), GLOW(p.e)); e.position.set(s * 5, 2, 11.6); head.add(e); });
  head.add(P(box(10, 2.4, 2), '#5a1f1f', { pos: [0, -6, 12], ol: 0 }));
  if (f.hood) { head.add(P(new THREE.SphereGeometry(15, 16, 12, 0, PI * 2, 0, PI * .62), p.s, { pos: [0, 2, -2], rot: [-.4, 0, 0] })); head.add(P(cone(10, 16), p.s, { pos: [0, -12, -9], rot: [PI, 0, 0], ol: 0 })); }
  else head.add(P(new THREE.SphereGeometry(13.8, 16, 8, 0, PI * 2, 0, PI * .45), p.s, { pos: [0, 3, -1] }));
  const arms = [-1, 1].map(s => { const a = grp(s * 18, 44, 0); a.rotation.x = -1.35; a.add(P(cap(5.6, 24), cloth, { pos: [0, -17, 0] })); a.add(P(sph(6), skin, { pos: [0, -36, 0] })); torso.add(a); return a; });
  if (f.blade) { const bl = P(box(2.4, 6, 30), '#cfd8e3', { pos: [0, -40, 14] }); arms[0].add(bl); }
  return { g, u: (t, st) => { const k = st.walk ? 1 : .15; legs[0].rotation.x = Math.sin(t * 7) * .5 * k; legs[1].rotation.x = -Math.sin(t * 7) * .5 * k;
    arms[0].rotation.x = -1.35 + Math.sin(t * 2) * .1 - st.atkS * .9; arms[1].rotation.x = -1.2 + Math.sin(t * 2 + 1) * .1 - st.atkS * .9; torso.rotation.x = .3 + Math.sin(t * 1.6) * .03 + st.atkS * .3; head.rotation.z = Math.sin(t * 1.1) * .06; } };
}
function mRobot(p, f) {
  const g = grp();
  if (f.gate) { g.add(P(box(60, 14, 30), p.s, { pos: [0, 10, 0] })); [-22, 22].forEach(x => g.add(P(cyl(9, 9, 6), '#15171c', { pos: [x, 8, 17], rot: [PI / 2, 0, 0] }))); }
  else [-1, 1].forEach(s => { g.add(P(box(16, 46, 18), p.s, { pos: [s * 14, 24, 0] })); g.add(P(box(20, 8, 26), '#15171c', { pos: [s * 14, 4, 4], ol: 0 })); });
  const tor = grp(0, 0, 0); g.add(tor);
  tor.add(P(box(46, 44, 28), p.b, { pos: [0, 66, 0] })); tor.add(P(box(30, 18, 3), '#10131a', { pos: [0, 70, 14.6], ol: 0 })); const lt = new THREE.Mesh(sph(5.5), GLOW(p.e)); lt.position.set(0, 70, 16.6); tor.add(lt);
  [-1, 1].forEach(s => tor.add(P(cyl(8, 8, 8), p.a, { pos: [s * 28, 82, 0], rot: [0, 0, PI / 2] })));
  tor.add(P(box(30, 20, 22), p.b, { pos: [0, 100, 2] })); const vz = new THREE.Mesh(box(24, 6, 2), GLOW(p.e)); vz.position.set(0, 102, 13.4); tor.add(vz);
  tor.add(P(cyl(1.6, 1.6, 14), p.s, { pos: [0, 118, 0], ol: 0 })); const an = new THREE.Mesh(sph(3.6), GLOW(p.e)); an.position.set(0, 126, 0); tor.add(an);
  const arm = grp(-30, 82, 0); arm.add(P(box(12, 12, 40), p.s, { pos: [0, -4, 22] })); arm.add(P(cone(7, 18), '#cfd8e3', { pos: [0, -4, 52], rot: [PI / 2, 0, 0] })); tor.add(arm);
  const arm2 = grp(30, 82, 0); arm2.add(P(box(10, 34, 10), p.s, { pos: [0, -14, 0] })); tor.add(arm2);
  return { g, u: (t, st) => { tor.position.y = Math.sin(t * 2.2) * 1.2; arm.rotation.x = -.15 - st.atkS * 1.0 + Math.sin(t * 1.8) * .05; tor.rotation.y = Math.sin(t * .8) * .08; } };
}
function mGhost(p) {
  const g = grp(); const pts = [];
  for (let i = 0; i <= 16; i++) {
    const t = i / 16, y = t * 112;
    let r = t < .06 ? 42 - t * 90 : 36 - Math.pow(t, 1.6) * 6;
    if (t > .66) r = 36 * Math.sqrt(Math.max(0, 1 - Math.pow((t - .66) / .34, 2)));
    pts.push(new THREE.Vector2(Math.max(1.5, r), y));
  }
  const bm = M(p.b, { transparent: true, opacity: .82 }); const body = P(new THREE.LatheGeometry(pts, 24), null, { mat: bm, ol: 1.04 }); body.position.y = 6; g.add(body);
  [-1, 1].forEach(s => { g.add(P(sph(1), '#07070c', { sc: [6.4, 9.4, 3], pos: [s * 12, 84, 30], ol: 0 })); const e = new THREE.Mesh(sph(2.4), GLOW(p.e)); e.position.set(s * 12, 82, 33); g.add(e);
    g.add(P(cap(5, 26), p.b, { pos: [s * 34, 56, 10], rot: [.4, 0, s * .8], o: { transparent: true, opacity: .8 }, ol: 1.04 })); });
  g.add(P(sph(1), '#07070c', { sc: [6, 10, 3], pos: [0, 60, 33], ol: 0 }));
  return { g, u: (t) => { g.position.y = 6 + Math.sin(t * 2) * 6; g.rotation.z = Math.sin(t * 1.3) * .06; } };
}
function mChimera(p) {
  const g = grp(); const legs = []; const d = mDog(p, {}); g.add(d.g); d.g.scale.set(1.12, 1.12, 1.12);
  for (let i = 0; i < 9; i++) { const a = i / 9 * PI * 2; g.add(P(cone(5, 18), p.s, { pos: [Math.cos(a) * 22, 78 + Math.sin(a) * 22, 44], rot: [PI / 2, 0, a - PI / 2], ol: 0 })); }
  [-1, 1].forEach(s => { const w = grp(s * 12, 86, -4); const m = new THREE.Mesh(wingShape(s), new THREE.MeshToonMaterial({ color: col(p.a), gradientMap: toonMap, side: THREE.DoubleSide })); bag.push(m.material); m.scale.set(.9, .9, .9); w.add(m); w.rotation.y = s * .7; g.add(w); legs.push([w, s]); });
  g.add(P(tube([[0, 60, -40], [0, 70, -70], [0, 118, -78], [0, 140, -52]], 3.6), p.s, { ol: 0 })); g.add(P(cone(3.2, 12), '#fff', { pos: [0, 146, -46], rot: [-1.0, 0, 0], ol: 0 }));
  return { g, u: (t, st) => { d.u(t, st); legs.forEach(([w, s]) => { w.rotation.z = s * Math.sin(t * 3) * .18; }); } };
}
function mBrute(p) {
  const g = grp(); const body = grp(); g.add(body); const skin = p.b;
  [-1, 1].forEach(s => { body.add(P(cap(9.6, 34), p.s, { pos: [s * 12, 36, 0] })); body.add(P(box(16, 8, 24), '#15171c', { pos: [s * 12, 6, 5], ol: 0 })); });
  const tor = grp(0, 60, 0); body.add(tor); tor.rotation.x = .22;
  tor.add(P(cap(26, 22), skin, { pos: [0, 34, 0], sc: [1.08, 1, .85] }));
  [[10, 52, 20], [-18, 40, 16], [18, 28, 18]].forEach(([x, y, z], i) => tor.add(P(sph(5 + i), p.a, { pos: [x, y, z], ol: 0 })));
  const head = grp(-4, 78, 14); tor.add(head); head.add(P(sph(12), skin)); [-1, 1].forEach(s => { const e = new THREE.Mesh(sph(2.6), GLOW(p.e)); e.position.set(s * 5, 2, 10.6); head.add(e); });
  for (let i = 0; i < 4; i++) head.add(P(cone(1.6, 4.4), '#fff', { pos: [-5 + i * 3.4, -7, 11], rot: [PI, 0, 0], ol: 0 }));
  const big = grp(-30, 56, 0); big.add(P(cap(12.5, 36), skin, { pos: [0, -24, 8], rot: [-.35, 0, 0] })); big.add(P(sph(20), skin, { pos: [-2, -62, 22] })); tor.add(big);
  const sm = grp(30, 56, 0); sm.add(P(cap(6, 26), skin, { pos: [0, -18, 0] })); tor.add(sm);
  return { g, u: (t, st) => { tor.rotation.x = .22 + Math.sin(t * 1.6) * .03 + st.atkS * .35; big.rotation.x = Math.sin(t * 1.4) * .06 - st.atkS * 1.7; sm.rotation.x = Math.sin(t * 1.4 + 1) * .08; body.position.y = Math.sin(t * 3.2) * 1.2; } };
}
function mBug(p, f) {
  const g = grp(); const legs = [];
  const segs = f.worm ? [[0, 40], [20, 36], [-22, 36], [-44, 30], [-66, 24]] : [[-34, 38], [8, 44], [46, 34]];
  const segs2 = f.worm ? segs.map(([z, r], i) => [z, r, 16 + (4 - i) * 0]) : segs;
  segs2.forEach(([z, r], i) => g.add(P(sph(1), i % 2 ? p.s : p.b, { sc: [r * .62, r * .5, r * .78], pos: [0, 24 + (f.worm ? 0 : 6), f.worm ? -z : -z] })));
  g.add(P(sph(11), p.s, { pos: [0, 26, f.worm ? 56 : 60] })); [-1, 1].forEach(s => { const e = new THREE.Mesh(sph(3.2), GLOW(p.e)); e.position.set(s * 6, 31, f.worm ? 64 : 68); g.add(e);
    g.add(P(cone(2.6, 14), '#e8ecf2', { pos: [s * 5, 21, f.worm ? 70 : 74], rot: [PI / 2, 0, s * .5], ol: 0 })); g.add(P(cyl(.8, .8, 30), p.s, { pos: [s * 6, 44, f.worm ? 64 : 70], rot: [.8, 0, s * .4], ol: 0 })); });
  if (!f.worm) for (let i = 0; i < 3; i++) [-1, 1].forEach(s => { const l = grp(s * 18, 24, -30 + i * 30); l.add(P(cyl(1.8, 1.8, 30), p.s, { pos: [s * 12, -6, 0], rot: [0, 0, s * 1.0], ol: 0 })); g.add(l); legs.push(l); });
  return { g, u: (t, st) => legs.forEach((l, i) => { l.rotation.y = Math.sin(t * (st.walk ? 9 : 3) + i * 1.3) * .35; }) };
}
const MK = { rat: mRat, dog: mDog, bat: mBat, blob: mBlob, drone: mDrone, human: mHuman, robot: mRobot, ghost: mGhost, chimera: mChimera, brute: mBrute, bug: mBug };
function enemyModel(name) {
  const d = (typeof ENEMY_ART !== 'undefined' && ENEMY_ART[name]) || ['blob', 'grey', 1.2, {}];
  bag = [];
  const m = MK[d[0]](PAL[d[1]], d[3] || {});
  m.g.scale.setScalar(d[2]); m.bag = bag; m.kind = d[0];
  return m;
}

// ---------- сцена ----------
function shadowTex() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  const g = x.createRadialGradient(32, 32, 2, 32, 32, 30); g.addColorStop(0, 'rgba(0,0,0,.55)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}
const SHT = { tex: null };
function holder(model, w) {
  const root = new THREE.Group(), flip = new THREE.Group(), yaw = new THREE.Group();
  root.add(flip); flip.add(yaw); yaw.rotation.y = YAW; yaw.add(model.g);
  SHT.tex = SHT.tex || shadowTex();
  const sh = new THREE.Mesh(new THREE.PlaneGeometry(w * 2.4, w * 0.7), new THREE.MeshBasicMaterial({ map: SHT.tex, transparent: true, depthWrite: false }));
  sh.position.set(0, 1, -4); root.add(sh);
  return { root, flip, yaw, model, st: { walk: false, phase: 0, atk: -1, atkS: 0, flash: 0, dead: 0, pop: 0, dir: 1 }, shadow: sh };
}
function setFlash(h, f) { h.model.bag.forEach(m => { if (m.emissive) m.emissive.setRGB(f, f * .22, f * .22); }); }
function disposeHolder(h) { if (!h) return; scene.remove(h.root); h.root.traverse(o => { if (o.geometry) o.geometry.dispose(); }); }

function setupView() {
  const r = hostEl.getBoundingClientRect(), W = Math.max(1, r.width), H = Math.max(1, r.height);
  const key = W + 'x' + H; if (key === view) return; view = key;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  renderer.setPixelRatio(dpr); renderer.setSize(W, H, false);
  const sc = Math.min(W / VB.w, H / VB.h), offX = (W - VB.w * sc) / 2, offY = H - VB.h * sc;   // xMidYMax meet
  const xmin = VB.x - offX / sc, xmax = xmin + W / sc, ytop = VB.y - offY / sc, ybot = ytop + H / sc;
  camera.left = xmin; camera.right = xmax; camera.top = -ytop; camera.bottom = -ybot; camera.updateProjectionMatrix();
}
function trackHero() {
  const el = document.getElementById('hero'); if (!el || !hero) return;
  const cs = getComputedStyle(el); let x = 0, y = 352;
  if (cs.transform && cs.transform !== 'none') { const m = new DOMMatrix(cs.transform); x = m.m41; y = m.m42; }
  hero.root.position.set(x, -y, 0);
  const left = el.classList.contains('face-l'); hero.flip.scale.x = left ? -1 : 1; hero.st.dir = left ? -1 : 1;
  hero.st.walk = el.classList.contains('walk');
  hero.root.visible = !el.classList.contains('boarding');
}
function frame(ts) {
  requestAnimationFrame(frame);
  if (!GL.active || !renderer) return;
  const t = ts / 1000, dt = Math.min(.05, last ? t - last : .016); last = t;
  setupView();
  if (hero) {
    trackHero(); const s = hero.st;
    if (s.walk) s.phase += dt * 11;
    if (s.atk >= 0) { s.atk += dt / .42; if (s.atk >= 1) s.atk = -1; }
    if (s.flash > 0) s.flash = Math.max(0, s.flash - dt * 3.2);
    setFlash(hero, s.flash);
    updHero(hero.model, t, s);
    const off = s.atk >= 0 ? Math.sin(PI * s.atk) * 42 * s.dir : 0; hero.yaw.position.x = off;
  }
  if (foe) {
    const s = foe.st; s.pop = Math.min(1, s.pop + dt * 5);
    if (s.atk >= 0) { s.atk += dt / .44; if (s.atk >= 1) s.atk = -1; }
    s.atkS = s.atk >= 0 ? Math.sin(PI * s.atk) : 0;
    if (s.flash > 0) s.flash = Math.max(0, s.flash - dt * 3.2);
    setFlash(foe, s.flash);
    foe.model.u(t, s);
    foe.yaw.position.x = s.atkS * 56 * (-s.dir) * -1 * -1;
    const k = 1 - Math.pow(1 - s.pop, 3); foe.root.scale.set(k, k, k);
  }
  renderer.render(scene, camera);
}
GL.update = (o) => {
  if (!GL.ready) return;
  GL.active = !!o.visible; canvas.style.display = o.visible ? '' : 'none';
  if (!o.visible) return;
  const hk = o.wi + ':' + o.ai;
  if (hk !== heroKey) { heroKey = hk; disposeHolder(hero); hero = holder(heroModel(o.wi, o.ai), 22); scene.add(hero.root); }
  if (hero) hero.st.dead = o.dead ? 1 : 0;
  const fk = o.enemy ? o.enemy : '';
  if (fk !== foeKey) {
    foeKey = fk; disposeHolder(foe); foe = null;
    if (fk) { foe = holder(enemyModel(fk), 40); foe.flip.scale.x = -1; foe.st.dir = -1; foe.root.scale.set(0, 0, 0); scene.add(foe.root); }
  }
  if (foe) foe.root.position.set(o.foeX, -o.foeY, 0);
};
GL.trigger = (who, kind) => {
  if (!GL.ready) return;
  const h = who === 'hero' ? hero : foe; if (!h) return;
  if (kind === 'attack') h.st.atk = 0; else if (kind === 'hurt') h.st.flash = 1;
};
GL.init = () => {
  try {
    hostEl = document.getElementById('scene'); canvas = document.getElementById('gl');
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
    renderer.setClearColor(0x000000, 0);
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(0, 360, 0, -400, 1, 2000); camera.position.set(0, 0, 700); camera.lookAt(0, 0, 0);
    scene.add(new THREE.AmbientLight(0xaab6d0, 1.35));
    const key = new THREE.DirectionalLight(0xfff1d6, 2.2); key.position.set(-160, 260, 340); scene.add(key);
    const rim = new THREE.DirectionalLight(0x6fa8ff, 1.5); rim.position.set(200, 120, -260); scene.add(rim);
    GL.ready = true; hostEl.classList.add('gl');
    requestAnimationFrame(frame);
    if (typeof render === 'function') render();
  } catch (e) { GL.ready = false; if (hostEl) hostEl.classList.remove('gl'); }
};
// отладка и тесты: нарисовать набор моделей в отдельном холсте
GL.gallery = (cv, items, w, h) => {
  const r = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true }); r.setSize(w, h, false); r.setClearColor(0x1a2230, 1);
  const sc = new THREE.Scene(); const cam = new THREE.OrthographicCamera(0, w, 0, -h, 1, 2000); cam.position.z = 700;
  sc.add(new THREE.AmbientLight(0xaab6d0, 1.35)); const k = new THREE.DirectionalLight(0xfff1d6, 2.2); k.position.set(-160, 260, 340); sc.add(k); const rm = new THREE.DirectionalLight(0x6fa8ff, 1.5); rm.position.set(200, 120, -260); sc.add(rm);
  const cols = Math.ceil(Math.sqrt(items.length * w / h)), cw = w / cols, ch = h / Math.ceil(items.length / cols);
  items.forEach((it, i) => {
    const m = it.hero ? heroModel(it.wi, it.ai) : enemyModel(it.name); const hh = holder(m, 30); hh.flip.scale.x = it.hero ? 1 : -1;
    const c = i % cols, rr = Math.floor(i / cols); hh.root.position.set(c * cw + cw / 2, -(rr * ch + ch * .86), 0); const s = (it.s || 1) * ch / 190; hh.root.scale.setScalar(s); sc.add(hh.root);
    m.u ? m.u(1.2, hh.st) : updHero(m, 1.2, hh.st);
  });
  r.render(sc, cam); return true;
};
document.addEventListener('DOMContentLoaded', GL.init);
