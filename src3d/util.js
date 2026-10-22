// Общие инструменты для процедурных 3D-моделей: шум, сборка скиннинг-меша, профили, анимации.
import * as THREE from 'three';

export const PI = Math.PI;
export const V2 = (x, y) => new THREE.Vector2(x, y);
export const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
export const lerp = (a, b, t) => a + (b - a) * t;

// ---------- детерминированный шум ----------
let SEED = 1;
export function setSeed(s) { SEED = (s * 2654435761) >>> 0 || 1; }
export function rand() { SEED ^= SEED << 13; SEED >>>= 0; SEED ^= SEED >>> 17; SEED ^= SEED << 5; SEED >>>= 0; return SEED / 4294967296; }
function hash(i, j, k) {
  let n = Math.imul(i, 374761393) + Math.imul(j, 668265263) + Math.imul(k, 1274126177) + Math.imul(SEED, 97);
  n = Math.imul(n ^ (n >>> 13), 1274126177); n ^= n >>> 16;
  return (n & 0xffff) / 65535;
}
export function noise(x, y, z) {
  const i = Math.floor(x), j = Math.floor(y), k = Math.floor(z);
  const f = x - i, g = y - j, h = z - k;
  const u = f * f * (3 - 2 * f), v = g * g * (3 - 2 * g), w = h * h * (3 - 2 * h);
  const a = lerp(lerp(hash(i, j, k), hash(i + 1, j, k), u), lerp(hash(i, j + 1, k), hash(i + 1, j + 1, k), u), v);
  const b = lerp(lerp(hash(i, j, k + 1), hash(i + 1, j, k + 1), u), lerp(hash(i, j + 1, k + 1), hash(i + 1, j + 1, k + 1), u), v);
  return lerp(a, b, w);
}
export const fbm = (x, y, z) => noise(x, y, z) * .55 + noise(x * 2.1, y * 2.1, z * 2.1) * .3 + noise(x * 4.3, y * 4.3, z * 4.3) * .15;

// ---------- цвета ----------
export const C = c => new THREE.Color(c);
export const mix = (a, b, t) => a.clone().lerp(b, clamp(t, 0, 1));
export const shade = (c, k) => c.clone().multiplyScalar(k);

// ---------- геометрия ----------
// Лathe-профиль: массив [y, r]; получаем замкнутую гладкую фигуру вращения вдоль оси Y.
export function latheProfile(rows, rad = 20) {
  const pts = rows.map(([y, r]) => V2(Math.max(r, 0.0001), y));
  return new THREE.LatheGeometry(pts, rad);
}
// Сужающаяся капсула от y=0 (радиус r0) вниз до y=-L (радиус r1)
export function taper(r0, r1, L, rad = 18, seg = 10) {
  const rows = [];
  const n = 6;
  for (let i = 0; i <= n; i++) { const a = -PI / 2 + (i / n) * (PI / 2); rows.push([-L + Math.sin(a) * r1, Math.cos(a) * r1]); }
  for (let i = 1; i < seg; i++) { const t = i / seg; rows.push([-L + L * t, r1 + (r0 - r1) * t]); }
  for (let i = 0; i <= n; i++) { const a = (i / n) * (PI / 2); rows.push([Math.sin(a) * r0, Math.cos(a) * r0]); }
  return latheProfile(rows, rad);
}
// Ставит геометрию (ось -Y от начала) между точками A и B
export function alignAlong(geo, A, B) {
  const dir = B.clone().sub(A).normalize();
  const q = new THREE.Quaternion().setFromUnitVectors(V3(0, -1, 0), dir);
  geo.applyQuaternion(q); geo.translate(A.x, A.y, A.z);
  return geo;
}
export function ellipsoid(sx, sy, sz, w = 20, h = 14) {
  const g = new THREE.SphereGeometry(1, w, h); g.scale(sx, sy, sz); return g;
}

// ---------- сборщик скиннинг-меша ----------
// Каждая часть добавляется в позе привязки; bw(x,y,z) -> [кость0, кость1, вес кости1]; col(x,y,z,nx,ny,nz) -> THREE.Color
export class SkinBuilder {
  constructor() { this.p = []; this.n = []; this.c = []; this.si = []; this.sw = []; this.ix = []; this.uv = []; }
  add(geo, bw, col) {
    const g = geo.index ? geo : geo;                 // LatheGeometry/Sphere уже индексированы
    const P = g.attributes.position, N = g.attributes.normal, base = this.p.length / 3;
    for (let i = 0; i < P.count; i++) {
      const x = P.getX(i), y = P.getY(i), z = P.getZ(i), nx = N.getX(i), ny = N.getY(i), nz = N.getZ(i);
      this.p.push(x, y, z); this.n.push(nx, ny, nz); this.uv.push(x * .06 + z * .045, y * .06 - z * .03);
      const c = col(x, y, z, nx, ny, nz); this.c.push(c.r, c.g, c.b);
      const [b0, b1, w] = bw(x, y, z);
      this.si.push(b0, b1, 0, 0); this.sw.push(1 - w, w, 0, 0);
    }
    if (g.index) for (let i = 0; i < g.index.count; i++) this.ix.push(base + g.index.getX(i));
    else for (let i = 0; i < P.count; i++) this.ix.push(base + i);
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(this.si, 4));
    g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(this.sw, 4));
    g.setIndex(this.ix);
    return g;
  }
}

// ---------- скелет ----------
// spec: [имя, родитель, [x,y,z] в мировых координатах позы привязки]
export function makeSkeleton(spec) {
  const bones = [], byName = {}, world = {};
  spec.forEach(([name, parent, pos]) => {
    const b = new THREE.Bone(); b.name = name; world[name] = V3(pos[0], pos[1], pos[2]);
    if (parent) { const pw = world[parent]; b.position.set(pos[0] - pw.x, pos[1] - pw.y, pos[2] - pw.z); byName[parent].add(b); }
    else b.position.set(pos[0], pos[1], pos[2]);
    bones.push(b); byName[name] = b;
  });
  const idx = {}; bones.forEach((b, i) => { idx[b.name] = i; });
  return { bones, byName, idx, world };
}

// ---------- анимации ----------
// tracks: { кость: [[t,[rx,ry,rz]], ...], 'кость.pos': [[t,[x,y,z]], ...] }; углы — смещение от позы привязки
export function clip(name, dur, tracks, base) {
  const kts = [];
  for (const [key, keys] of Object.entries(tracks)) {
    if (key.endsWith('.pos')) {
      const b = key.slice(0, -4), bp = base[b];
      kts.push(new THREE.VectorKeyframeTrack(b + '.position', keys.map(k => k[0]), keys.flatMap(k => [bp.x + k[1][0], bp.y + k[1][1], bp.z + k[1][2]])));
      continue;
    }
    const times = [], vals = [];
    keys.forEach(([t, e]) => { const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(e[0], e[1], e[2], 'XYZ')); times.push(t); vals.push(q.x, q.y, q.z, q.w); });
    kts.push(new THREE.QuaternionKeyframeTrack(key + '.quaternion', times, vals));
  }
  return new THREE.AnimationClip(name, dur, kts);
}
// Циклическая дорожка из синусоиды: значения vals в n точках
export function cyc(dur, n, f) {
  const out = [];
  for (let i = 0; i <= n; i++) { const t = i / n; out.push([t * dur, f(t * PI * 2)]); }
  return out;
}

// ---------- материалы ----------
let BUMP = null;
function bumpTex() {
  if (BUMP) return BUMP;
  const n = 256, c = document.createElement('canvas'); c.width = c.height = n; const x = c.getContext('2d'), img = x.createImageData(n, n);
  setSeed(5);
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
    const u = i / n * 8, v = j / n * 8, w = fbm(u, v, 1.3) * .7 + noise(u * 5, v * 5, 4) * .3;
    const k = Math.floor(w * 255); const o = (j * n + i) * 4; img.data[o] = img.data[o + 1] = img.data[o + 2] = k; img.data[o + 3] = 255;
  }
  x.putImageData(img, 0, 0);
  BUMP = new THREE.CanvasTexture(c); BUMP.wrapS = BUMP.wrapT = THREE.RepeatWrapping; BUMP.anisotropy = 4;
  return BUMP;
}
export function skinMat(o = {}) {
  return new THREE.MeshStandardMaterial(Object.assign({ vertexColors: true, roughness: .78, metalness: 0, envMapIntensity: .8, bumpMap: bumpTex(), bumpScale: .5 }, o));
}
export function pbr(color, o = {}) {
  return new THREE.MeshStandardMaterial(Object.assign({ color: C(color), roughness: .6, metalness: 0, envMapIntensity: 1 }, o));
}
export function glow(color, intensity = 2) {
  return new THREE.MeshStandardMaterial({ color: C(color), emissive: C(color), emissiveIntensity: intensity, roughness: .4 });
}
