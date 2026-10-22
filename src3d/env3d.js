// 3D-окружение: коридоры зон, убежище, двери, лифт, свет. Мировые координаты как у сцены; пол на локальном y = 0.
import * as THREE from 'three';
import { noise, fbm, setSeed, rand, C, PI } from './util.js';
import { surface, paint, gradientTex, radialTex } from './textures.js';

const ZW = -8;                                   // плоскость задней стены
export const FY = -340;                          // уровень пола в мировых координатах
const DOORS = [50, 140, 230], LIFT_X = 318, CEIL = 300;

const std = (color, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color: C(color), roughness: .7, metalness: 0 }, o));
const metal = (color, o = {}) => std(color, Object.assign({ metalness: .85, roughness: .38 }, o));
const emis = (color, k = 2) => new THREE.MeshStandardMaterial({ color: C(color), emissive: C(color), emissiveIntensity: k, roughness: .5 });
function mesh(geo, mat, x = 0, y = 0, z = 0, o = {}) {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z);
  m.castShadow = o.cast !== false; m.receiveShadow = o.recv !== false;
  if (o.rot) m.rotation.set(o.rot[0], o.rot[1], o.rot[2]);
  return m;
}
const bx = (w, h, d, mat, x, y, z, o) => mesh(new THREE.BoxGeometry(w, h, d), mat, x, y, z, o);
const cy = (r1, r2, h, mat, x, y, z, o, seg = 18) => mesh(new THREE.CylinderGeometry(r1, r2, h, seg), mat, x, y, z, o);
const addAll = (g, ...ms) => { ms.forEach(m => g.add(m)); return g; };
const plane = (w, h, mat, x, y, z, rot) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); m.position.set(x, y, z); if (rot) m.rotation.set(rot[0], rot[1], rot[2]); m.receiveShadow = true; return m; };

const glowSprite = (() => { let t = null; return () => t || (t = radialTex('rgba(255,235,190,.95)', 'rgba(255,200,120,0)')); })();
function halo(color, size, x, y, z, op = .85) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowSprite(), color: C(color), transparent: true, opacity: op, depthWrite: false, blending: THREE.AdditiveBlending }));
  s.position.set(x, y, z); s.scale.set(size, size, 1); return s;
}
const coneTex = (() => { let t = null; return () => t || (t = gradientTex([[0, 'rgba(0,0,0,1)'], [.08, 'rgba(255,255,255,1)'], [1, 'rgba(0,0,0,1)']])); })();
function lightCone(x, top, bottom, spread, color = '#ffe2a8', op = .13) {
  const g = new THREE.CylinderGeometry(4, spread, top - bottom, 28, 1, true);
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: coneTex(), color: C(color), transparent: true, opacity: op, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
  m.position.set(x, (top + bottom) / 2, ZW + 26); m.renderOrder = 2; return m;
}

// ---------- двери ----------
const DOOR_STYLES = {
  wood:   { leaf: '#6e4a2c', frame: '#2a1a0e', panel: .22, metalK: 0, hand: '#e6b422' },
  metal:  { leaf: '#3a5a50', frame: '#1c2a26', panel: .16, metalK: .7, hand: '#9aa6a2', rust: true },
  office: { leaf: '#cfd6dc', frame: '#4a5565', panel: .06, metalK: .2, hand: '#8a929c', glass: true },
  lab:    { leaf: '#e6edf0', frame: '#6a7c84', panel: .05, metalK: .3, hand: '#aab4ba', port: true },
  royal:  { leaf: '#2c2230', frame: '#e6b422', panel: .3, metalK: .1, hand: '#f2cd5a', gold: true },
};
function makeDoor(i, style) {
  const S = DOOR_STYLES[style] || DOOR_STYLES.wood, g = new THREE.Group(); g.position.set(DOORS[i], 0, ZW);
  const frameM = metal(S.frame, { metalness: S.metalK * .6, roughness: .55 });
  // коробка и тёмный проём
  g.add(bx(6, 164, 12, frameM, -35, 82, 5), bx(6, 164, 12, frameM, 35, 82, 5), bx(76, 7, 12, frameM, 0, 160, 5));
  const inner = new THREE.Group(); g.add(inner);
  inner.add(bx(64, 156, 70, std('#07080b', { roughness: 1 }), 0, 78, -36, { cast: false }));
  const roomLight = new THREE.PointLight(0xffc66e, 0, 220, 2); roomLight.position.set(0, 120, -20); inner.add(roomLight);
  const glowBack = new THREE.Mesh(new THREE.PlaneGeometry(60, 150), new THREE.MeshBasicMaterial({ map: gradientTex([[0, 'rgba(255,190,110,0)'], [.5, 'rgba(255,196,120,.55)'], [1, 'rgba(255,170,90,.1)']]), transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  glowBack.position.set(0, 78, -30); inner.add(glowBack);
  // створка на петлях слева
  const pivot = new THREE.Group(); pivot.position.set(-32, 0, 2); g.add(pivot);
  const leafM = std(S.leaf, { metalness: S.metalK, roughness: S.metalK > .5 ? .5 : .62, map: S.rust ? surface({ type: 'metal', color: S.leaf, rust: .6, rep: [1, 1], seed: 3 }).map : null });
  const leaf = bx(64, 156, 4.4, leafM, 32, 78, 0); pivot.add(leaf);
  const panelM = std(S.leaf, { metalness: S.metalK, roughness: .6 }); panelM.color.multiplyScalar(.82);
  if (S.glass) pivot.add(bx(30, 90, 1, std('#8fb4d8', { roughness: .08, metalness: .1, transparent: true, opacity: .45 }), 32, 100, 2.6), bx(50, 56, 1.2, panelM, 32, 36, 2.6));
  else if (S.port) { pivot.add(cy(14, 14, 3, std('#9ab4be', { roughness: .1, metalness: .1, transparent: true, opacity: .7 }), 32, 106, 2.8, { rot: [PI / 2, 0, 0] }), cy(16.5, 16.5, 2, metal('#7a8c92'), 32, 106, 2.4, { rot: [PI / 2, 0, 0] })); }
  else { pivot.add(bx(46, 56, 1.6, panelM, 32, 120, 2.8), bx(46, 62, 1.6, panelM, 32, 52, 2.8)); }
  if (S.gold) { [[46, 120, 56], [46, 52, 62]].forEach(([w, y, h]) => pivot.add(bx(w + 4, 1.4, 1, metal('#e6b422'), 32, y + h / 2, 3.2), bx(w + 4, 1.4, 1, metal('#e6b422'), 32, y - h / 2, 3.2))); }
  // ручка и табличка с номером
  const hand = cy(1.8, 1.8, 12, metal(S.hand, { roughness: .25 }), 54, 80, 5, { rot: [0, 0, PI / 2] }); pivot.add(hand, cy(3.4, 3.4, 2, metal(S.hand, { roughness: .25 }), 54, 80, 2.8, { rot: [PI / 2, 0, 0] }));
  const plate = paint(64, 32, (x, w, h) => { x.fillStyle = '#1a1208'; x.fillRect(0, 0, w, h); x.fillStyle = '#ffd36b'; x.font = '700 24px system-ui,sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(String(i + 1), w / 2, h / 2 + 1); });
  pivot.add(plane(20, 10, new THREE.MeshStandardMaterial({ map: plate, roughness: .4, metalness: .3 }), 32, 142, 2.7));
  // замок
  const lock = new THREE.Group(); lock.position.set(32, 82, 4.6); const gold = metal('#e6b422', { roughness: .22 });
  lock.add(bx(14, 11, 4, gold, 0, -3, 0), mesh(new THREE.TorusGeometry(4.6, 1.4, 8, 18, PI), gold, 0, 2, 0)); pivot.add(lock); lock.visible = false;
  // пятно света на полу
  const spill = new THREE.Mesh(new THREE.PlaneGeometry(88, 100), new THREE.MeshBasicMaterial({ map: gradientTex([[0, 'rgba(255,200,120,.65)'], [1, 'rgba(255,200,120,0)']]), transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  spill.rotation.x = -PI / 2; spill.position.set(0, .4, 44); g.add(spill);
  // значок комнаты
  const ric = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthWrite: false })); ric.position.set(0, 186, 8); ric.scale.set(22, 22, 1); ric.visible = false; g.add(ric);
  let amt = 0, icon = '';
  return {
    group: g,
    update(dt, el, light) {
      const cl = el ? el.classList : null, open = cl && (cl.contains('done') || cl.contains('open')), locked = cl && cl.contains('locked') && !cl.contains('done');
      amt += ((open ? 1 : 0) - amt) * Math.min(1, dt * 6);
      pivot.rotation.y = amt * 1.55;
      roomLight.intensity = amt * 3500 * light; glowBack.material.opacity = amt * .9; spill.material.opacity = amt * .75;
      lock.visible = !!locked && amt < .1;
      g.visible = !!el && el.style.display !== 'none';
      const t = el ? (el.querySelector('.ric') || {}).textContent || '' : '';
      if (t !== icon) {
        icon = t; ric.visible = !!t;
        if (t) { const tex = paint(64, 64, (x) => { x.font = '46px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(t, 32, 36); }); ric.material.map = tex; ric.material.needsUpdate = true; }
      }
    },
  };
}

// ---------- лифт ----------
function makeLift(tint) {
  const g = new THREE.Group(); g.position.set(LIFT_X, 0, ZW);
  const frameM = metal(tint, { roughness: .45 }), steel = std('#6a7480', { metalness: .55, roughness: .5 });
  g.add(bx(7, 184, 14, frameM, -39, 92, 6), bx(7, 184, 14, frameM, 39, 92, 6), bx(85, 16, 14, frameM, 0, 178, 6));
  const cab = bx(70, 156, 50, std('#15171c', { roughness: .9 }), 0, 78, -26, { cast: false }); g.add(cab);
  const cabLight = new THREE.PointLight(0xffe2a8, 0, 160, 2); cabLight.position.set(0, 130, -6); g.add(cabLight);
  const glowCab = new THREE.Mesh(new THREE.PlaneGeometry(62, 150), new THREE.MeshBasicMaterial({ map: gradientTex([[0, 'rgba(255,225,170,.0)'], [.45, 'rgba(255,225,170,.7)'], [1, 'rgba(255,200,140,.15)']]), transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })); glowCab.position.set(0, 78, -2); g.add(glowCab);
  const dl = bx(33, 158, 3.2, steel, -16.5, 78, 2), dr = bx(33, 158, 3.2, steel, 16.5, 78, 2); g.add(dl, dr);
  g.add(bx(1.6, 150, 3.6, std('#0a0b0e'), 0, 78, 2.2, { cast: false }));
  [dl, dr].forEach((d, k) => d.add(bx(30, 1.2, 1, std('#fff', { transparent: true, opacity: .08 }), 0, 30, 1.7, { cast: false })));
  const dispTex = paint(128, 56, () => {}), dispMat = new THREE.MeshBasicMaterial({ map: dispTex });
  const disp = new THREE.Mesh(new THREE.PlaneGeometry(52, 22), dispMat); disp.position.set(0, 166, 13.2); g.add(disp);
  g.add(bx(58, 28, 3, std('#0b0d11', { roughness: .4 }), 0, 166, 12.4));
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(3.4, 14, 10), emis('#d9534f', 3)); lamp.position.set(0, 190, 12); g.add(lamp);
  const lampHalo = halo('#d9534f', 30, 0, 190, 14, .6); g.add(lampHalo);
  const btn = cy(3, 3, 2, metal('#8a929c'), 46, 90, 8, { rot: [PI / 2, 0, 0] }); g.add(btn, cy(1.8, 1.8, 2.2, emis('#7dff9a', 2), 46, 90, 9.2, { rot: [PI / 2, 0, 0] }));
  // трещины и искры сломанной кабины
  const crack = new THREE.Mesh(new THREE.PlaneGeometry(64, 150), new THREE.MeshBasicMaterial({ map: paint(128, 256, (x, w, h) => { x.strokeStyle = '#06070a'; x.lineWidth = 3; x.lineCap = 'round'; x.beginPath(); x.moveTo(26, 40); x.lineTo(60, 110); x.lineTo(36, 150); x.lineTo(78, 230); x.moveTo(100, 90); x.lineTo(76, 130); x.lineTo(96, 170); x.stroke(); }), transparent: true }));
  crack.position.set(0, 78, 3.9); g.add(crack);
  const sp = new Float32Array(60 * 3), spv = []; for (let i = 0; i < 60; i++) spv.push([0, 0, 0, 0]);
  const sparks = new THREE.Points(new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(sp, 3)), new THREE.PointsMaterial({ color: 0xffd36b, size: 2.2, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); sparks.frustumCulled = false; g.add(sparks);
  let amt = 0, text = '', blink = 0;
  const drawDisp = (t, ok) => { const c = dispTex.image.getContext('2d'); c.fillStyle = '#05060a'; c.fillRect(0, 0, 128, 56); c.fillStyle = ok ? '#7dff9a' : '#ff6a4a'; c.font = '700 40px monospace'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(t, 64, 30); if (ok) { c.beginPath(); c.moveTo(14, 38); c.lineTo(22, 22); c.lineTo(30, 38); c.fill(); } dispTex.needsUpdate = true; };
  return {
    group: g,
    update(dt, t, el) {
      const cl = el ? el.classList : null, ok = !!cl && cl.contains('ok'), open = !!cl && cl.contains('open');
      g.visible = !!el && el.style.display !== 'none';
      amt += ((open ? 1 : 0) - amt) * Math.min(1, dt * 5);
      dl.position.x = -16.5 - amt * 30; dr.position.x = 16.5 + amt * 30; cabLight.intensity = amt * 4000; glowCab.material.opacity = amt;
      const txt = el ? (el.querySelector('.lnum') || {}).textContent || '--' : '--';
      if (txt + ok !== text) { text = txt + ok; drawDisp(txt, ok); }
      lamp.material.emissive.set(ok ? '#5cb85c' : '#d9534f'); lamp.material.color.set(ok ? '#5cb85c' : '#d9534f'); lampHalo.material.color.set(ok ? '#5cb85c' : '#d9534f');
      crack.visible = !ok; blink += dt; lamp.material.emissiveIntensity = ok ? 3 : (Math.sin(blink * 9) > .3 ? 3 : .4);
      if (!ok) {
        const pos = sparks.geometry.attributes.position;
        for (let i = 0; i < 60; i++) {
          const p = spv[i];                       // [x, y, скорость x, жизнь]
          if (p[3] <= 0) {
            if (rand() < dt * 3) { p[0] = (rand() - .5) * 14 + 4; p[1] = 98 + rand() * 20; p[2] = (rand() - .3) * 40; p[3] = .5 + rand() * .5; }
            else { pos.setXYZ(i, 0, -999, 0); continue; }
          } else { p[3] -= dt; p[1] -= dt * 55; p[0] += p[2] * dt; }
          pos.setXYZ(i, p[0], p[1], 5);
        }
        pos.needsUpdate = true;
      }
      sparks.visible = !ok;
    },
  };
}

// ---------- свет и частицы ----------
function lamp(x, color = 0xffe2a8, k = 1, fixture = 'tube') {
  const g = new THREE.Group(); g.position.set(x, CEIL, ZW + 26);
  const pl = new THREE.PointLight(color, 15000 * k, 420, 2); pl.position.set(0, -20, 20); g.add(pl);
  if (fixture === 'tube') { g.add(bx(46, 5, 12, metal('#30343c', { roughness: .5 }), 0, -2, 0), bx(40, 3, 8, emis('#fff1c8', 3), 0, -5.5, 0)); g.add(halo('#ffe9b0', 70, 0, -8, 10)); }
  else if (fixture === 'bulb') { g.add(cy(.8, .8, 20, metal('#222'), 0, 10, 0), mesh(new THREE.SphereGeometry(6, 16, 12), emis('#ffe9b0', 3), 0, -6, 0, { cast: false }), halo('#ffe9b0', 60, 0, -6, 4)); }
  else if (fixture === 'panel') { g.add(bx(60, 3, 30, emis('#e8f2ff', 2.2), 0, -2, 0, { cast: false }), halo('#dcecff', 80, 0, -6, 12, .5)); }
  return { g, pl, base: 15000 * k };
}
function motes(n, x0, x1, y0, y1, z0, z1) {
  const pos = new Float32Array(n * 3), ph = [];
  for (let i = 0; i < n; i++) { pos[i * 3] = x0 + rand() * (x1 - x0); pos[i * 3 + 1] = y0 + rand() * (y1 - y0); pos[i * 3 + 2] = z0 + rand() * (z1 - z0); ph.push(rand() * 6.28); }
  const p = new THREE.Points(new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(pos, 3)), new THREE.PointsMaterial({ map: radialTex('rgba(255,240,210,.9)', 'rgba(255,240,210,0)', 32), color: 0xfff0d0, size: 2.2, transparent: true, opacity: .55, depthWrite: false, blending: THREE.AdditiveBlending }));
  p.frustumCulled = false; p.userData = { ph, y0, y1 };
  return p;
}

// ---------- оболочка коридора ----------
function shell(o) {
  const g = new THREE.Group(), R = o.rep || 64;
  const wall = plane(1300, o.wallH || CEIL, o.wallMat(1300 / R, (o.wallH || CEIL) / R), 180, (o.wallH || CEIL) / 2 + (o.wallY || 0), ZW); g.add(wall);
  const ceil = plane(1300, 700, o.ceilMat, 180, CEIL, 340, [PI / 2, 0, 0]); g.add(ceil);
  const floor = plane(1300, 700, o.floorMat, 180, 0, 340, [-PI / 2, 0, 0]); g.add(floor);
  g.add(bx(1300, 15, 3.2, o.baseMat, 180, 7.5, ZW + 1.6), bx(1300, 6, 4, o.trimMat || o.baseMat, 180, CEIL - 3, ZW + 2));
  return g;
}
const wallMatOf = spec => (u, v) => { const m = surface(Object.assign({}, spec, { rep: [u, v] })); return m; };

// ---------- зоны ----------
const ZONES = {
  z0() {
    const g = shell({ rep: 128, wallMat: wallMatOf({ type: 'bricks', colors: ['#53656c', '#48595f', '#5d7078', '#3d4c52'], mortar: '#14181b', size: 256, rough: .92, normal: 3 }),
      ceilMat: surface({ type: 'concrete', color: '#2a3236', rep: [10, 5], size: 256, rough: .95 }), floorMat: surface({ type: 'concrete', color: '#3b454a', rep: [10, 6], size: 256, rough: .42, normal: 1.6, n: 4 }), baseMat: std('#1a2024', { roughness: .8 }) });
    const rust = metal('#7a4a30', { roughness: .62, metalness: .75 });
    // трубы под потолком
    const p1 = cy(7, 7, 1300, rust, 180, 278, ZW + 14, {}, 20); p1.rotation.z = PI / 2; g.add(p1);
    const p2 = cy(5, 5, 1300, metal('#566a70'), 180, 262, ZW + 10); p2.rotation.z = PI / 2; g.add(p2);
    for (let i = 0; i < 9; i++) { const fl = cy(9.4, 9.4, 4, metal('#3a4448'), -40 + i * 150, 278, ZW + 14); fl.rotation.z = PI / 2; g.add(fl); }
    // вертикальная труба с вентилем
    g.add(cy(5, 5, 160, rust, 190, 200, ZW + 8), cy(8, 8, 6, metal('#3a4448'), 190, 140, ZW + 8));
    const wheel = new THREE.Group(); wheel.position.set(190, 150, ZW + 18); wheel.add(mesh(new THREE.TorusGeometry(11, 1.8, 8, 24), metal('#b8532e', { roughness: .5 }), 0, 0, 0)); for (let k = 0; k < 3; k++) { const s = cy(.9, .9, 22, metal('#b8532e'), 0, 0, 0); s.rotation.z = k * PI / 3; wheel.add(s); } g.add(wheel);
    // пятна воды на полу
    [[120, 70, 34, 11], [270, 100, 46, 14], [30, 60, 24, 8]].forEach(([x, z, rx, rz]) => { const p = new THREE.Mesh(new THREE.CircleGeometry(1, 28), new THREE.MeshStandardMaterial({ color: 0x0b1a20, roughness: .03, metalness: .1, envMapIntensity: 1.6, transparent: true, opacity: .9 })); p.rotation.x = -PI / 2; p.scale.set(rx, rz, 1); p.position.set(x, .35, z); p.receiveShadow = true; g.add(p); });
    // ржавые подтёки
    [60, 150, 300].forEach(x => { const s = new THREE.Mesh(new THREE.PlaneGeometry(14, 110), new THREE.MeshBasicMaterial({ map: gradientTex([[0, 'rgba(120,60,20,.55)'], [1, 'rgba(120,60,20,0)']]), transparent: true, depthWrite: false })); s.position.set(x, 215, ZW + .3); g.add(s); });
    // бочка и ящик на переднем плане
    g.add(cy(11, 11, 30, metal('#5a6a3a', { roughness: .7 }), -4, 15, 30, {}, 20), bx(24, 22, 24, std('#6b5236', { roughness: .85 }), 352, 11, 40));
    const lamps = [lamp(95, 0xffe2a8, 1, 'tube'), lamp(275, 0xffe2a8, 1, 'tube')];
    return { g, lamps, doorStyle: 'metal', liftTint: '#2c3a3e', dust: .6, fog: [0x0c1417, .0016], ambient: .7 };
  },
  z1() {
    const g = shell({ rep: 64, wallH: CEIL - 92, wallY: 92, wallMat: wallMatOf({ type: 'wallpaper', color: '#6e4a34', size: 256, rough: .9, normal: 1.4 }),
      ceilMat: surface({ type: 'plaster', color: '#8a7058', rep: [8, 4], size: 128, rough: .95 }), floorMat: surface({ type: 'planks', color: '#4a2f1e', rep: [8, 6], size: 256, rough: .5, normal: 2, count: 8 }), baseMat: std('#2b1a10', { roughness: .6 }), trimMat: std('#9a7a4e', { roughness: .5 }) });
    // деревянная панель до пояса
    const wood = surface({ type: 'planks', color: '#5a3a22', vertical: true, count: 10, rep: [1300 / 90, 1], size: 256, rough: .55, normal: 2.4 });
    g.add(plane(1300, 92, wood, 180, 46, ZW + .2), bx(1300, 6, 5, std('#a07a48', { roughness: .45 }), 180, 92, ZW + 2.4));
    // дорожка, коврики
    g.add(plane(1300, 74, surface({ type: 'carpet', color: '#7a1e2a', pattern: 'runner', rep: [30, 1], size: 128, rough: 1, normal: 2.5 }), 180, .5, 56, [-PI / 2, 0, 0]));
    DOORS.forEach(x => g.add(bx(52, 1.6, 24, std('#3a2a1c', { roughness: 1 }), x, .8, 14)));
    // картины над дверями и бра
    [[140, 220], [230, 214], [50, 218]].forEach(([x, y], k) => {
      const fr = new THREE.Group(); fr.position.set(x, y, ZW + 2); const gold = metal('#c9a24a', { roughness: .35 });
      fr.add(bx(46, 4, 3, gold, 0, 19, 0), bx(46, 4, 3, gold, 0, -19, 0), bx(4, 42, 3, gold, -21, 0, 0), bx(4, 42, 3, gold, 21, 0, 0));
      const art = paint(128, 96, (c, w, h) => { const gr = c.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, k % 2 ? '#e9c88a' : '#7fa9c9'); gr.addColorStop(1, k % 2 ? '#b46a5a' : '#c6d8c0'); c.fillStyle = gr; c.fillRect(0, 0, w, h); c.fillStyle = k % 2 ? '#6a3a3a' : '#4a6b3a'; c.beginPath(); c.moveTo(0, h); c.lineTo(w * .3, h * .45); c.lineTo(w * .55, h * .72); c.lineTo(w * .8, h * .36); c.lineTo(w, h); c.fill(); c.fillStyle = '#ffe9a8'; c.beginPath(); c.arc(w * .7, h * .25, 11, 0, 7); c.fill(); });
      fr.add(plane(38, 34, new THREE.MeshStandardMaterial({ map: art, roughness: .5 }), 0, 0, 1)); g.add(fr);
    });
    [95, 185, 275].forEach(x => { const s = new THREE.Group(); s.position.set(x, 168, ZW + 3); s.add(bx(8, 14, 4, metal('#c9a24a'), 0, 0, 0), mesh(new THREE.ConeGeometry(7, 12, 14, 1, true), emis('#ffd99a', 1.4), 0, 12, 4, { cast: false }), halo('#ffd99a', 40, 0, 12, 10, .6)); g.add(s); });
    // растение
    g.add(cy(8, 6, 14, std('#7a4a2a'), -2, 7, 24), mesh(new THREE.SphereGeometry(13, 14, 10), std('#2f6a34', { roughness: .8 }), -2, 26, 24), mesh(new THREE.SphereGeometry(9, 12, 8), std('#3b8040', { roughness: .8 }), 6, 34, 26));
    const lamps = [lamp(95, 0xffd99a, .9, 'bulb'), lamp(275, 0xffd99a, .9, 'bulb')];
    return { g, lamps, doorStyle: 'wood', liftTint: '#3a2a1c', dust: .8, fog: [0x1a100a, .0012], ambient: .8 };
  },
  z2() {
    const g = shell({ rep: 64, wallMat: wallMatOf({ type: 'plaster', color: '#59667f', size: 256, rough: .85, normal: 1.2, dirt: .4 }), ceilMat: surface({ type: 'tiles', color: '#b8c0cc', n: 8, rep: [12, 6], size: 256, rough: .9, grout: '#6a7280', normal: 1.4 }),
      floorMat: surface({ type: 'carpet', color: '#2e3a52', pattern: 'tiles', rep: [16, 10], size: 128, rough: .98, normal: 2.2 }), baseMat: std('#1a2130', { roughness: .6 }), trimMat: std('#7080a0', { roughness: .4 }) });
    // стеклянные перегородки
    const glass = new THREE.MeshStandardMaterial({ color: 0x9cc4ff, roughness: .04, metalness: .1, transparent: true, opacity: .12, envMapIntensity: 1.6, side: THREE.DoubleSide });
    for (let i = -3; i < 9; i++) { g.add(plane(86, 230, glass, i * 90 + 45, 160, ZW + 6)); g.add(bx(4, 240, 5, metal('#6a7a98', { roughness: .4 }), i * 90, 150, ZW + 6)); }
    g.add(bx(1300, 4, 5, metal('#6a7a98'), 180, 270, ZW + 6), bx(1300, 4, 5, metal('#6a7a98'), 180, 40, ZW + 6));
    // часы, растение, доска
    g.add(mesh(new THREE.CylinderGeometry(15, 15, 4, 28), std('#e8ecf5', { roughness: .4 }), 185, 215, ZW + 4, { rot: [PI / 2, 0, 0] }));
    const face = paint(128, 128, (c, w, h) => { c.fillStyle = '#10141c'; c.fillRect(0, 0, w, h); c.strokeStyle = '#e8ecf5'; c.lineWidth = 5; c.beginPath(); c.moveTo(64, 64); c.lineTo(64, 24); c.moveTo(64, 64); c.lineTo(92, 78); c.stroke(); });
    const clock = new THREE.Mesh(new THREE.CircleGeometry(13, 28), new THREE.MeshStandardMaterial({ map: face, roughness: .5 })); clock.position.set(185, 215, ZW + 6.2); g.add(clock);
    g.add(cy(8, 6, 14, std('#8a6a42'), 96, 7, 20), mesh(new THREE.SphereGeometry(13, 14, 10), std('#3f8a4a', { roughness: .8 }), 96, 28, 20), mesh(new THREE.SphereGeometry(9, 12, 8), std('#4aa05a', { roughness: .8 }), 103, 36, 22));
    g.add(cy(10, 10, 46, std('#cfd8e4', { roughness: .4 }), 358, 23, 36), cy(9, 9, 18, std('#8fb4d8', { roughness: .1, transparent: true, opacity: .7 }), 358, 55, 36));
    const lamps = [lamp(95, 0xe8f2ff, 1, 'panel'), lamp(275, 0xe8f2ff, 1, 'panel')];
    return { g, lamps, doorStyle: 'office', liftTint: '#4a5565', dust: .5, fog: [0x10151f, .001], ambient: 1 };
  },
  z3() {
    const g = shell({ rep: 64, wallMat: wallMatOf({ type: 'tiles', color: '#cfe6e0', grout: '#6b8a84', n: 4, size: 256, rough: .3, normal: 1.8, grime: '#0e1c1a' }), ceilMat: surface({ type: 'concrete', color: '#2a3836', rep: [10, 5], size: 128, rough: .9 }),
      floorMat: surface({ type: 'concrete', color: '#2c3a38', rep: [10, 6], size: 256, rough: .16, normal: 1.2, n: 4, cracks: 2 }), baseMat: std('#d9ad1f', { roughness: .5 }), trimMat: std('#1c2a28', { roughness: .6 }) });
    const haz = paint(64, 64, (c, w, h) => { for (let i = -8; i < 12; i++) { c.fillStyle = i % 2 ? '#15171c' : '#d9ad1f'; c.beginPath(); c.moveTo(i * 16, 0); c.lineTo(i * 16 + 16, 0); c.lineTo(i * 16 + 16 + 64, h); c.lineTo(i * 16 + 64, h); c.fill(); } });
    haz.wrapS = haz.wrapT = THREE.RepeatWrapping; haz.repeat.set(1300 / 20, 1); g.add(plane(1300, 15, new THREE.MeshStandardMaterial({ map: haz, roughness: .6 }), 180, 7.5, ZW + 3.3));
    // колбы со светящейся жидкостью и пузырями
    const tubes = [95, 185].map(x => {
      const t = new THREE.Group(); t.position.set(x, 0, ZW + 8);
      t.add(cy(8, 8, 190, new THREE.MeshStandardMaterial({ color: 0xbdfff0, roughness: .04, metalness: .1, transparent: true, opacity: .16, envMapIntensity: 1.8 }), 0, 110, 0, { cast: false }), cy(6.4, 6.4, 120, emis('#58ffb0', 1.8), 0, 78, 0, { cast: false }), cy(9.4, 9.4, 8, metal('#34413f'), 0, 14, 0), cy(9.4, 9.4, 8, metal('#34413f'), 0, 206, 0), halo('#58ffb0', 70, 0, 120, 12, .55));
      const bp = new Float32Array(10 * 3), bs = []; for (let i = 0; i < 10; i++) { bs.push([rand() * 6.28, rand() * 90]); }
      const bub = new THREE.Points(new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(bp, 3)), new THREE.PointsMaterial({ color: 0xcfffee, size: 3, transparent: true, opacity: .8, depthWrite: false })); bub.frustumCulled = false; bub.userData.bs = bs; t.add(bub); g.add(t); return bub;
    });
    // знак биоопасности и мониторы
    const sign = paint(128, 128, (c, w, h) => { c.fillStyle = '#d9ad1f'; c.beginPath(); c.moveTo(64, 10); c.lineTo(120, 112); c.lineTo(8, 112); c.closePath(); c.fill(); c.fillStyle = '#15171c'; c.beginPath(); c.moveTo(64, 28); c.lineTo(104, 102); c.lineTo(24, 102); c.closePath(); c.fill(); c.strokeStyle = '#d9ad1f'; c.lineWidth = 7; c.beginPath(); c.arc(64, 78, 14, 0, 7); c.moveTo(64, 78); c.lineTo(64, 48); c.stroke(); });
    g.add(plane(28, 28, new THREE.MeshStandardMaterial({ map: sign, roughness: .4, transparent: true }), 140, 218, ZW + .5));
    const mon = paint(128, 64, (c, w, h) => { c.fillStyle = '#04100c'; c.fillRect(0, 0, w, h); c.strokeStyle = '#58ffb0'; c.lineWidth = 2.5; c.beginPath(); c.moveTo(4, 36); for (let x = 4; x < 124; x += 6) c.lineTo(x, 36 + (x % 24 === 4 ? -22 : x % 24 === 10 ? 16 : Math.sin(x) * 2)); c.stroke(); });
    [[230, 214], [50, 214]].forEach(([x, y]) => g.add(bx(50, 30, 3, std('#10151a', { roughness: .4 }), x, y, ZW + 2), plane(46, 24, new THREE.MeshBasicMaterial({ map: mon }), x, y, ZW + 3.6)));
    g.add(bx(1300, 3, 8, emis('#58ffb0', 1.2), 180, .6, ZW + 40, { cast: false }));
    const lamps = [lamp(95, 0xcfffee, 1, 'panel'), lamp(275, 0xcfffee, 1, 'panel')];
    return { g, lamps, tubes, doorStyle: 'lab', liftTint: '#4a5a5e', dust: .35, fog: [0x0a1614, .0012], ambient: 1.05 };
  },
  z4() {
    const g = shell({ rep: 64, wallMat: wallMatOf({ type: 'wallpaper', color: '#40314c', size: 256, rough: .55, normal: 1.6 }), ceilMat: surface({ type: 'plaster', color: '#241a2c', rep: [8, 4], size: 128, rough: .8 }),
      floorMat: surface({ type: 'marble', color: '#2c2630', vein: '#a89ab8', rep: [8, 5], size: 256, rough: .12, normal: .8, n: 4 }), baseMat: std('#e6b422', { metalness: .9, roughness: .3 }), trimMat: std('#e6b422', { metalness: .9, roughness: .3 }) });
    const gold = metal('#e6b422', { roughness: .28 });
    g.add(bx(1300, 4, 3, gold, 180, 175, ZW + 1.5), plane(1300, 10, std('#1c1422', { roughness: .8 }), 180, 245, ZW + .2));
    // колонны
    [95, 185, 273].forEach(x => { const c = new THREE.Group(); c.position.set(x, 0, ZW + 8); c.add(cy(7, 8, 280, std('#d8cfe0', { roughness: .22, metalness: .1 }), 0, 140, 0, {}, 22), bx(22, 8, 22, gold, 0, 4, 0), bx(22, 8, 22, gold, 0, 276, 0), cy(10, 7, 10, gold, 0, 266, 0)); g.add(c); });
    // ковровая дорожка с золотой каймой
    g.add(plane(1300, 74, surface({ type: 'carpet', color: '#6b1d27', pattern: 'runner', rep: [30, 1], size: 128, rough: 1, normal: 2.5 }), 180, .6, 56, [-PI / 2, 0, 0]));
    // картины
    [[140, 222, '#8a4ab0'], [230, 222, '#2a6a8a'], [50, 222, '#b04a4a']].forEach(([x, y, col]) => { const fr = new THREE.Group(); fr.position.set(x, y, ZW + 2); fr.add(bx(50, 5, 3, gold, 0, 23, 0), bx(50, 5, 3, gold, 0, -23, 0), bx(5, 46, 3, gold, -23, 0, 0), bx(5, 46, 3, gold, 23, 0, 0));
      const art = paint(96, 80, (c, w, h) => { const gr = c.createRadialGradient(w * .5, h * .45, 4, w * .5, h * .5, w * .6); gr.addColorStop(0, col); gr.addColorStop(.6, '#2a2030'); gr.addColorStop(1, '#0e0a12'); c.fillStyle = gr; c.fillRect(0, 0, w, h); });
      fr.add(plane(42, 36, new THREE.MeshStandardMaterial({ map: art, roughness: .5 }), 0, 0, 1)); g.add(fr); });
    // люстра
    const ch = new THREE.Group(); ch.position.set(185, 232, ZW + 40); ch.add(cy(.8, .8, 36, gold, 0, 22, 0), mesh(new THREE.TorusGeometry(26, 1.6, 8, 32), gold, 0, 0, 0, { rot: [PI / 2, 0, 0] }), mesh(new THREE.TorusGeometry(15, 1.2, 8, 28), gold, 0, 8, 0, { rot: [PI / 2, 0, 0] }));
    for (let k = 0; k < 10; k++) { const a = k / 10 * PI * 2; ch.add(cy(1.4, 1.4, 6, std('#f2efe6'), Math.cos(a) * 26, 4, Math.sin(a) * 26), mesh(new THREE.SphereGeometry(2.4, 10, 8), emis('#ffd88a', 3.5), Math.cos(a) * 26, 9, Math.sin(a) * 26, { cast: false }), halo('#ffd88a', 22, Math.cos(a) * 26, 9, Math.sin(a) * 26, .7)); }
    ch.add(halo('#ffd88a', 150, 0, 4, 0, .35)); g.add(ch);
    const lamps = [lamp(95, 0xffd88a, 1, 'bulb'), lamp(275, 0xffd88a, 1, 'bulb')];
    const chandLight = new THREE.PointLight(0xffd88a, 22000, 500, 2); chandLight.position.set(185, 230, ZW + 50); g.add(chandLight);
    return { g, lamps, doorStyle: 'royal', liftTint: '#3a2e18', dust: .7, fog: [0x120c18, .0012], ambient: .85 };
  },
};

// ---------- убежище ----------
function base() {
  const g = shell({ rep: 64, wallMat: wallMatOf({ type: 'planks', color: '#6e5238', vertical: true, count: 10, size: 256, rough: .6, normal: 2.2 }), ceilMat: surface({ type: 'planks', color: '#3a2a1a', rep: [8, 4], size: 256, rough: .7, count: 8 }),
    floorMat: surface({ type: 'planks', color: '#5a3d26', rep: [8, 6], size: 256, rough: .45, normal: 2.2, count: 8 }), baseMat: std('#2a1c10', { roughness: .6 }), trimMat: std('#8a6a45', { roughness: .5 }) });
  // окно с ночным городом
  const sky = paint(128, 160, (c, w, h) => { const gr = c.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#0a1230'); gr.addColorStop(.75, '#2b3a66'); gr.addColorStop(1, '#4a3a5a'); c.fillStyle = gr; c.fillRect(0, 0, w, h);
    c.fillStyle = '#fff'; for (let i = 0; i < 40; i++) { c.globalAlpha = .4 + rand() * .6; c.fillRect(rand() * w, rand() * h * .6, 1.4, 1.4); } c.globalAlpha = 1;
    c.fillStyle = '#fff4d0'; c.beginPath(); c.arc(w * .72, h * .2, 11, 0, 7); c.fill(); c.fillStyle = '#2b3a66'; c.beginPath(); c.arc(w * .72 + 5, h * .2 - 3, 9, 0, 7); c.fill();
    c.fillStyle = '#080c18'; c.beginPath(); c.moveTo(0, h); for (let x = 0; x <= w; x += 12) c.lineTo(x, h - 20 - rand() * 46); c.lineTo(w, h); c.fill();
    c.fillStyle = '#ffd36b'; for (let i = 0; i < 26; i++) c.fillRect(rand() * w, h - 8 - rand() * 40, 2.4, 3); });
  const win = new THREE.Group(); win.position.set(172, 190, ZW + 2); const wood = std('#2a1d12', { roughness: .6 });
  win.add(bx(74, 6, 6, wood, 0, 48, 0), bx(74, 6, 6, wood, 0, -48, 0), bx(6, 96, 6, wood, -34, 0, 0), bx(6, 96, 6, wood, 34, 0, 0), bx(3, 90, 4, wood, 0, 0, 1), bx(68, 3, 4, wood, 0, 4, 1), plane(66, 90, new THREE.MeshBasicMaterial({ map: sky }), 0, 0, .5)); g.add(win);
  const moon = new THREE.PointLight(0x9fb8ff, 3500, 260, 2); moon.position.set(172, 190, ZW + 40); g.add(moon);
  // ковёр
  g.add(plane(240, 70, surface({ type: 'carpet', color: '#6b3a2a', rep: [6, 2], size: 128, rough: 1, normal: 2.5 }), 170, .5, 66, [-PI / 2, 0, 0]));
  // кровать
  const bed = new THREE.Group(); bed.position.set(62, 0, 6); const w2 = std('#4a3320', { roughness: .6 });
  bed.add(bx(104, 20, 54, w2, 0, 14, 0), bx(10, 66, 54, w2, -48, 33, 0), bx(98, 14, 50, std('#ddd6c8', { roughness: .95 }), 2, 28, 0), bx(76, 8, 52, std('#3f6aa5', { roughness: .9 }), 12, 36, 0), bx(26, 10, 36, std('#f2efe6', { roughness: .95 }), -34, 38, 0), bx(10, 14, 54, w2, 48, 18, 0)); g.add(bed);
  // кухня
  const k = new THREE.Group(); k.position.set(169, 0, 8); const steel = metal('#aab4c0', { roughness: .35 });
  k.add(bx(92, 66, 46, std('#6d7686', { roughness: .5, metalness: .3 }), 0, 33, 0), bx(96, 5, 50, steel, 0, 68, 0), bx(34, 40, 1.5, std('#3a4252'), -22, 30, 23.5), bx(34, 40, 1.5, std('#3a4252'), 22, 30, 23.5));
  [-22, 22].forEach(x => k.add(cy(7, 7, 1.6, std('#15171c', { roughness: .4 }), x, 71, 4, {}, 20), mesh(new THREE.TorusGeometry(5, .8, 6, 18), emis('#ff6a2a', 2), x, 72, 4, { rot: [PI / 2, 0, 0], cast: false })));
  k.add(cy(8, 7, 12, steel, -22, 77, 4), bx(46, 4, 40, std('#2a2f3a'), -10, 118, -2), bx(30, 26, 24, std('#2a2f3a'), -10, 106, -2), halo('#ff8a3d', 40, -22, 74, 10, .5));
  const steam = new THREE.Points(new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(new Float32Array(16 * 3), 3)), new THREE.PointsMaterial({ map: radialTex('rgba(255,255,255,.8)', 'rgba(255,255,255,0)', 32), size: 9, transparent: true, opacity: .45, depthWrite: false })); steam.frustumCulled = false; k.add(steam); g.add(k);
  // верстак
  const wb = new THREE.Group(); wb.position.set(261, 0, 8);
  wb.add(bx(90, 10, 40, std('#8a6a45', { roughness: .6 }), 0, 52, 0), bx(8, 52, 36, std('#5a4328'), -40, 26, 0), bx(8, 52, 36, std('#5a4328'), 40, 26, 0), bx(80, 4, 34, std('#5a4328'), 0, 22, 0), bx(94, 60, 3, std('#3a2d1f', { roughness: .8 }), 0, 100, -18));
  wb.add(bx(16, 18, 12, metal('#3a4252'), 26, 66, 2), bx(8, 10, 8, metal('#6f7a8f'), 26, 78, 2), mesh(new THREE.TorusGeometry(6, 1.3, 8, 18), metal('#e6b422'), -24, 106, -15), bx(5, 30, 2, metal('#cdd5df'), -4, 100, -15), bx(5, 22, 2, metal('#d9534f'), 12, 104, -15), cy(7, 7, 3, metal('#8a929c'), -2, 60, 6, { rot: [PI / 2, 0, 0] }), bx(26, 5, 6, metal('#cdd5df'), -26, 59, 6)); g.add(wb);
  const lamps = [lamp(236, 0xffd99a, 1.1, 'bulb')];
  return { g, lamps, doorStyle: 'wood', liftTint: '#3a2a1c', dust: .5, fog: [0x140d08, .0012], ambient: .9, steam, isBase: true };
}

export function buildEnv(kind) {
  const spec = kind === 'base' ? base() : ZONES[kind]();
  const root = new THREE.Group(); root.position.y = FY; root.add(spec.g);
  const doors = DOORS.map((_, i) => { const d = makeDoor(i, spec.doorStyle); root.add(d.group); return d; });
  const lift = makeLift(spec.liftTint); root.add(lift.group);
  spec.lamps.forEach(l => root.add(l.g));
  spec.lamps.forEach(l => root.add(lightCone(l.g.position.x, CEIL - 6, 4, 62, kind === 'z3' || kind === 'z2' ? '#cfe6ff' : '#ffe2a8', .12)));
  const dust = motes(Math.round(90 * (spec.dust || .6)), -20, 380, 20, 280, 0, 60); root.add(dust);
  let time = 0;
  return {
    root, spec,
    update(dt, doorEls, liftEl) {
      time += dt;
      spec.lamps.forEach((l, i) => { const f = i === 1 && kind !== 'z4' ? (Math.sin(time * 37) * Math.sin(time * 11 + 2) > .78 ? .45 : 1) : 1; l.pl.intensity = l.base * f; });
      doors.forEach((d, i) => d.update(dt, doorEls[i], spec.isBase ? 0 : 1));
      doors.forEach((d, i) => { if (spec.isBase) d.group.visible = false; });
      lift.update(dt, time, liftEl);
      const p = dust.geometry.attributes.position, ph = dust.userData.ph;
      for (let i = 0; i < ph.length; i++) { p.setY(i, p.getY(i) + dt * (2.5 + Math.sin(ph[i]) * 1.2)); p.setX(i, p.getX(i) + Math.sin(time * .4 + ph[i]) * dt * 3); if (p.getY(i) > 290) p.setY(i, 22); }
      p.needsUpdate = true;
      if (spec.tubes) spec.tubes.forEach(b => { const q = b.geometry.attributes.position, bs = b.userData.bs; for (let i = 0; i < bs.length; i++) { bs[i][1] = (bs[i][1] + dt * 24) % 120; q.setXYZ(i, Math.sin(bs[i][0] + time) * 3, 28 + bs[i][1], 2); } q.needsUpdate = true; });
      if (spec.steam) { const q = spec.steam.geometry.attributes.position; for (let i = 0; i < 16; i++) { const t = (time * .6 + i / 16) % 1; q.setXYZ(i, -22 + Math.sin(t * 9 + i) * 3, 82 + t * 36, 8); } q.needsUpdate = true; }
    },
    dispose() { root.traverse(o => { if (o.geometry) o.geometry.dispose(); }); },
  };
}
