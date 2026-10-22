// Процедурные PBR-текстуры (альбедо + карта нормалей), рисуются на canvas один раз и кэшируются.
import * as THREE from 'three';
import { noise, fbm, setSeed, rand } from './util.js';

const cache = new Map();
const mk = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };

function texture(c, srgb, rep, aniso = 4) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); t.anisotropy = aniso;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
// карта нормалей из карты высот (Sobel с зацикливанием)
function normalFromHeight(hc, strength) {
  const w = hc.width, h = hc.height, src = hc.getContext('2d').getImageData(0, 0, w, h).data;
  const out = mk(w, h), ctx = out.getContext('2d'), img = ctx.createImageData(w, h);
  const H = (x, y) => src[(((y + h) % h) * w + ((x + w) % w)) * 4] / 255;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = (H(x + 1, y - 1) + 2 * H(x + 1, y) + H(x + 1, y + 1)) - (H(x - 1, y - 1) + 2 * H(x - 1, y) + H(x - 1, y + 1));
    const dy = (H(x - 1, y + 1) + 2 * H(x, y + 1) + H(x + 1, y + 1)) - (H(x - 1, y - 1) + 2 * H(x, y - 1) + H(x + 1, y - 1));
    let nx = -dx * strength, ny = dy * strength, nz = 1; const l = Math.hypot(nx, ny, nz); nx /= l; ny /= l; nz /= l;
    const o = (y * w + x) * 4; img.data[o] = (nx * .5 + .5) * 255; img.data[o + 1] = (ny * .5 + .5) * 255; img.data[o + 2] = (nz * .5 + .5) * 255; img.data[o + 3] = 255;
  }
  ctx.putImageData(img, 0, 0); return out;
}
function speckle(ctx, w, h, n, colors, size = 2, alpha = .35) {
  for (let i = 0; i < n; i++) { ctx.fillStyle = colors[(rand() * colors.length) | 0]; ctx.globalAlpha = alpha * rand(); ctx.fillRect(rand() * w, rand() * h, 1 + rand() * size, 1 + rand() * size); }
  ctx.globalAlpha = 1;
}
function grime(ctx, w, h, color, amt) {
  const img = ctx.getImageData(0, 0, w, h), d = img.data, c = new THREE.Color(color);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const n = fbm(x / w * 6, y / h * 6, 2.2), k = Math.max(0, n - (.62 - amt * .25)) * 2.6 * amt, o = (y * w + x) * 4;
    d[o] += (c.r * 255 - d[o]) * k; d[o + 1] += (c.g * 255 - d[o + 1]) * k; d[o + 2] += (c.b * 255 - d[o + 2]) * k;
  }
  ctx.putImageData(img, 0, 0);
}

// ---------- рисунки поверхностей: возвращают [альбедо, высота] ----------
const painters = {
  bricks(w, h, o) {
    const a = mk(w, h), hc = mk(w, h), x = a.getContext('2d'), y = hc.getContext('2d');
    const bw = o.bw || 64, bh = o.bh || 28, g = 3;
    x.fillStyle = o.mortar || '#1a1d20'; x.fillRect(0, 0, w, h); y.fillStyle = '#000'; y.fillRect(0, 0, w, h);
    for (let r = 0; r * bh < h; r++) for (let c = -1; c * bw < w; c++) {
      const ox = c * bw + (r % 2 ? bw / 2 : 0), k = .78 + rand() * .4, base = new THREE.Color(o.colors[(rand() * o.colors.length) | 0]).multiplyScalar(k);
      x.fillStyle = '#' + base.getHexString(); x.fillRect(ox + g / 2, r * bh + g / 2, bw - g, bh - g);
      const hv = 150 + rand() * 90; y.fillStyle = `rgb(${hv},${hv},${hv})`; y.fillRect(ox + g / 2, r * bh + g / 2, bw - g, bh - g);
    }
    speckle(x, w, h, 900, ['#000', '#fff', '#6b7a70'], 3, .25); speckle(y, w, h, 700, ['#000'], 3, .5);
    grime(x, w, h, o.grime || '#0b0f10', .8);
    return [a, hc];
  },
  plaster(w, h, o) {
    const a = mk(w, h), hc = mk(w, h), x = a.getContext('2d'), y = hc.getContext('2d');
    x.fillStyle = o.color; x.fillRect(0, 0, w, h); speckle(x, w, h, 1400, ['#000', '#fff'], 2, .08); grime(x, w, h, o.grime || '#161412', o.dirt == null ? .6 : o.dirt);
    const hd = y.createImageData(w, h);
    for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) { const v = fbm(i / w * 14, j / h * 14, 3) * 255, k = (j * w + i) * 4; hd.data[k] = hd.data[k + 1] = hd.data[k + 2] = v; hd.data[k + 3] = 255; }
    y.putImageData(hd, 0, 0);
    if (o.cracks) { x.strokeStyle = 'rgba(0,0,0,.55)'; y.strokeStyle = '#000'; for (let i = 0; i < o.cracks; i++) { let cx = rand() * w, cy = rand() * h; x.lineWidth = y.lineWidth = 1 + rand() * 1.5; x.beginPath(); y.beginPath(); x.moveTo(cx, cy); y.moveTo(cx, cy); for (let s = 0; s < 14; s++) { cx += (rand() - .5) * 26; cy += 6 + rand() * 16; x.lineTo(cx, cy); y.lineTo(cx, cy); } x.stroke(); y.stroke(); } }
    return [a, hc];
  },
  wallpaper(w, h, o) {
    const a = mk(w, h), hc = mk(w, h), x = a.getContext('2d'), y = hc.getContext('2d');
    x.fillStyle = o.color; x.fillRect(0, 0, w, h); y.fillStyle = '#777'; y.fillRect(0, 0, w, h);
    const sw = w / 8;
    for (let i = 0; i < 8; i++) { if (i % 2) { x.fillStyle = 'rgba(255,225,170,.09)'; x.fillRect(i * sw, 0, sw, h); } }
    for (let r = 0; r < 6; r++) for (let c = 0; c < 4; c++) {
      const cx = (c + (r % 2 ? .5 : 0)) * (w / 4) + w / 8, cy = r * (h / 6) + h / 12;
      x.fillStyle = 'rgba(255,215,150,.22)'; y.fillStyle = '#bbb';
      for (const ctx of [x, y]) { ctx.beginPath(); ctx.moveTo(cx, cy - 22); ctx.quadraticCurveTo(cx + 18, cy - 4, cx, cy + 22); ctx.quadraticCurveTo(cx - 18, cy - 4, cx, cy - 22); ctx.fill(); }
    }
    speckle(x, w, h, 900, ['#000', '#fff'], 2, .08); grime(x, w, h, '#1a120a', .75); grime(y, w, h, '#000', .5);
    return [a, hc];
  },
  planks(w, h, o) {
    const a = mk(w, h), hc = mk(w, h), x = a.getContext('2d'), y = hc.getContext('2d');
    const pw = o.vertical ? w / (o.count || 6) : h / (o.count || 8);
    for (let i = 0; i * pw < (o.vertical ? w : h); i++) {
      const k = .75 + rand() * .45, c = new THREE.Color(o.color).multiplyScalar(k);
      for (let s = 0; s < (o.vertical ? h : w); s += 4) {
        const grain = .88 + .24 * noise(s * .02, i * 3.1, 1.7), cc = c.clone().multiplyScalar(grain);
        x.fillStyle = '#' + cc.getHexString(); const gv = 120 + grain * 80; y.fillStyle = `rgb(${gv},${gv},${gv})`;
        if (o.vertical) { x.fillRect(i * pw, s, pw, 4); y.fillRect(i * pw, s, pw, 4); } else { x.fillRect(s, i * pw, 4, pw); y.fillRect(s, i * pw, 4, pw); }
      }
      x.fillStyle = 'rgba(0,0,0,.65)'; y.fillStyle = '#000';
      if (o.vertical) { x.fillRect(i * pw, 0, 2, h); y.fillRect(i * pw, 0, 2, h); } else { x.fillRect(0, i * pw, w, 2); y.fillRect(0, i * pw, w, 2); }
    }
    speckle(x, w, h, 500, ['#000', '#fff'], 2, .12); grime(x, w, h, '#120a05', .5);
    return [a, hc];
  },
  tiles(w, h, o) {
    const a = mk(w, h), hc = mk(w, h), x = a.getContext('2d'), y = hc.getContext('2d'), n = o.n || 8, t = w / n;
    x.fillStyle = o.grout || '#8a9490'; x.fillRect(0, 0, w, h); y.fillStyle = '#000'; y.fillRect(0, 0, w, h);
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
      const k = .93 + rand() * .12, c = new THREE.Color(o.color).multiplyScalar(k); x.fillStyle = '#' + c.getHexString(); x.fillRect(i * t + 1.5, j * t + 1.5, t - 3, t - 3);
      y.fillStyle = '#eee'; y.fillRect(i * t + 1.5, j * t + 1.5, t - 3, t - 3);
    }
    grime(x, w, h, o.grime || '#101a18', .55); speckle(x, w, h, 300, ['#000'], 2, .1);
    return [a, hc];
  },
  marble(w, h, o) {
    const a = mk(w, h), hc = mk(w, h), x = a.getContext('2d'), y = hc.getContext('2d'), img = x.createImageData(w, h), c1 = new THREE.Color(o.color), c2 = new THREE.Color(o.vein);
    for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
      const u = i / w * 4, v = j / h * 4, wr = fbm(u * 1.3, v * 1.3, 5) * 4, vein = Math.pow(Math.abs(Math.sin((u + wr) * 3.2)), 14), f = vein * .7 + (fbm(u * 3, v * 3, 8) - .5) * .25;
      const k = (j * w + i) * 4, m = Math.min(1, Math.max(0, f));
      img.data[k] = (c1.r + (c2.r - c1.r) * m) * 255; img.data[k + 1] = (c1.g + (c2.g - c1.g) * m) * 255; img.data[k + 2] = (c1.b + (c2.b - c1.b) * m) * 255; img.data[k + 3] = 255;
    }
    x.putImageData(img, 0, 0); y.fillStyle = '#999'; y.fillRect(0, 0, w, h);
    const t = w / (o.n || 4); x.strokeStyle = 'rgba(0,0,0,.35)'; y.strokeStyle = '#000'; x.lineWidth = y.lineWidth = 2;
    for (let i = 0; i <= (o.n || 4); i++) { for (const ctx of [x, y]) { ctx.beginPath(); ctx.moveTo(i * t, 0); ctx.lineTo(i * t, h); ctx.moveTo(0, i * t); ctx.lineTo(w, i * t); ctx.stroke(); } }
    return [a, hc];
  },
  carpet(w, h, o) {
    const a = mk(w, h), hc = mk(w, h), x = a.getContext('2d'), y = hc.getContext('2d'), img = x.createImageData(w, h), c1 = new THREE.Color(o.color);
    const him = y.createImageData(w, h);
    for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
      const n = noise(i * .55, j * .55, 1) * .6 + noise(i * .13, j * .13, 3) * .4, k = .72 + n * .5, p = (j * w + i) * 4;
      img.data[p] = c1.r * 255 * k; img.data[p + 1] = c1.g * 255 * k; img.data[p + 2] = c1.b * 255 * k; img.data[p + 3] = 255;
      const hv = n * 255; him.data[p] = him.data[p + 1] = him.data[p + 2] = hv; him.data[p + 3] = 255;
    }
    x.putImageData(img, 0, 0); y.putImageData(him, 0, 0);
    if (o.pattern === 'tiles') { x.strokeStyle = 'rgba(0,0,0,.4)'; x.lineWidth = 2; for (let i = 0; i <= 4; i++) { x.beginPath(); x.moveTo(i * w / 4, 0); x.lineTo(i * w / 4, h); x.moveTo(0, i * h / 4); x.lineTo(w, i * h / 4); x.stroke(); } }
    if (o.pattern === 'runner') { x.fillStyle = 'rgba(230,180,34,.9)'; x.fillRect(0, 0, w, 6); x.fillRect(0, h - 6, w, 6); x.fillStyle = 'rgba(0,0,0,.25)'; x.fillRect(0, 8, w, 3); x.fillRect(0, h - 11, w, 3); }
    grime(x, w, h, '#0c0806', .45);
    return [a, hc];
  },
  metal(w, h, o) {
    const a = mk(w, h), hc = mk(w, h), x = a.getContext('2d'), y = hc.getContext('2d');
    x.fillStyle = o.color; x.fillRect(0, 0, w, h); y.fillStyle = '#888'; y.fillRect(0, 0, w, h);
    for (let i = 0; i < h; i++) { const k = (rand() - .5) * 40; x.fillStyle = k > 0 ? `rgba(255,255,255,${k / 260})` : `rgba(0,0,0,${-k / 200})`; x.fillRect(0, i, w, 1); y.fillStyle = `rgb(${128 + k * 2},${128 + k * 2},${128 + k * 2})`; y.fillRect(0, i, w, 1); }
    grime(x, w, h, '#2a1a10', o.rust || .2);
    return [a, hc];
  },
  concrete(w, h, o) {
    const [a, hc] = painters.plaster(w, h, { color: o.color, grime: o.grime || '#0c0e0f', dirt: .9, cracks: o.cracks || 6 });
    const x = a.getContext('2d'); x.strokeStyle = 'rgba(0,0,0,.3)'; x.lineWidth = 2;
    for (let i = 0; i <= (o.n || 4); i++) { x.beginPath(); x.moveTo(i * w / (o.n || 4), 0); x.lineTo(i * w / (o.n || 4), h); x.moveTo(0, i * h / (o.n || 4)); x.lineTo(w, i * h / (o.n || 4)); x.stroke(); }
    return [a, hc];
  },
};

// Материал по описанию: { type, color, rep:[u,v], size, rough, metal, normal, ... }
export function surface(spec) {
  const key = JSON.stringify(spec); if (cache.has(key)) return cache.get(key);
  setSeed(spec.seed || 9);
  const size = spec.size || 256, [a, hc] = painters[spec.type](size, size, spec);
  const rep = spec.rep || [1, 1];
  const m = new THREE.MeshStandardMaterial({
    map: texture(a, true, rep), normalMap: texture(normalFromHeight(hc, spec.normal || 2.2), false, rep), normalScale: new THREE.Vector2(1, 1),
    roughness: spec.rough == null ? .8 : spec.rough, metalness: spec.metal || 0, envMapIntensity: spec.env == null ? 1 : spec.env,
  });
  if (spec.color2) m.color = new THREE.Color(spec.color2);
  cache.set(key, m); return m;
}
// Рисованные на лету картинки (таблички, часы, картины, небо)
export function paint(w, h, fn, srgb = true) {
  const c = mk(w, h); fn(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.anisotropy = 4; if (srgb) t.colorSpace = THREE.SRGBColorSpace; return t;
}
export function gradientTex(stops, w = 4, h = 128) {
  return paint(w, h, (x) => { const g = x.createLinearGradient(0, 0, 0, h); stops.forEach(([o, c]) => g.addColorStop(o, c)); x.fillStyle = g; x.fillRect(0, 0, w, h); });
}
export function radialTex(inner, outer, s = 64) {
  return paint(s, s, (x) => { const g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2); g.addColorStop(0, inner); g.addColorStop(1, outer); x.fillStyle = g; x.fillRect(0, 0, s, s); });
}
export function disposeSurfaces() { cache.forEach(m => { ['map', 'normalMap'].forEach(k => m[k] && m[k].dispose()); m.dispose(); }); cache.clear(); }
