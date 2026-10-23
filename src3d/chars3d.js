// Сцена в духе Skyhill: здание в разрезе (building.js) и рисованные 2D-персонажи (rig2d.js) с тенями на стене; WebGL + пост-обработка.
import { buildBuilding } from './building.js';
import { makePost } from './post.js';
import * as THREE from 'three';
import { buildHuman2D, buildQuad2D } from './rig2d.js';
import { PROPS, DECO } from './props2d.js';

const GL = { ready: false, enabled: true, active: false };
try { GL.enabled = localStorage.getItem('tower-3d') !== '0'; } catch (e) {}
window.GL3D = GL;
GL.names = () => Object.keys(ZOMBIES);
// размеры врага в единицах сцены: для зон удара и полоски здоровья
GL.box = (name) => {
  const c = ZOMBIES[name] || {}, s = c.scale || 1;
  if (c.q) return { h: 84 * s, w: 120 * s };
  if (c.style === 'crawler') return { h: 64, w: 118 };
  return { h: 134 * HUMAN_SCALE * s, w: (c.style === 'brute' ? 100 : c.style === 'bloater' ? 86 : 72) * s };
};

const HUMAN_SCALE = 1.05;

// ---------- внешность ----------
// снаряжение героя по уровню брони: лохмотья → куртка → пластины → кевлар → экзоскелет → нанопластины
const HERO_GEAR = [
  { shirt: '#5a5142', torn: .35, x: [] },
  { shirt: '#3e4636', jacket: '#3e4636', hoodDown: true, x: [] },
  { shirt: '#4a4336', jacket: '#4a4336', hoodDown: true, x: ['pads'], padCol: '#55595c' },
  { shirt: '#30373f', jacket: '#30373f', x: ['pads', 'vest'], vest: '#3d4231', pouches: true, padCol: '#2f3337' },
  { shirt: '#2c3036', jacket: '#2c3036', x: ['pads', 'vest', 'exo'], vest: '#2b2f33', pouches: true, padCol: '#3a3f44' },
  { shirt: '#1f232a', jacket: '#1f232a', x: ['vest', 'nano'], vest: '#191c22', pouches: true },
];
// Параметры внешности всех 35 врагов: q — четвероногий, style — тип скелета и анимаций
export const ZOMBIES = {
  'Крыса-переросток': { q: 1, fur: '#5b4a3c', ears: 'round', snout: 1.15, tailCol: '#c99a96', tailLen: 2.2, tailK: .6, scale: .55, long: 1.15, legK: .8, eye: '#ff3d2e', speed: 1.4 },
  'Бродячий пёс': { q: 1, fur: '#4a3d30', scale: 1, eye: '#ffcf3d' },
  'Сборщик': { skin: '#8f9a7a', shirt: '#6b6f5e', pants: '#3d4250', hair: '#2a221a', torn: .5, blood: .5, x: ['backpack'] },
  'Слизень': { style: 'bloater', fat: 1.3, skin: '#8fb06a', shirt: null, pants: '#4a5a3a', sleeves: 'none', x: ['pustules'], scale: 1.08, torn: .8, blood: .3, bald: true },
  'Ржавый дрон': { style: 'crawler', legless: true, skin: '#87926f', shirt: '#4f5a4a', pants: '#2f3440', torn: .7, blood: .9, hair: '#1e1a14', bald: true },
  'Летучая мышь': { style: 'thin', thin: .8, skin: '#6a6a78', shirt: '#2a2630', pants: '#2a2630', eye: '#d8ff5a', eyeGlow: 2.4, torn: .6, blood: .4, x: ['hood'], bald: true },
  'Гигантская мокрица': { style: 'crawler', skin: '#9a9a80', shirt: '#5a4a3a', pants: '#3a3030', torn: .6, blood: .8, hair: '#3a2a1c', legless: true },
  'Одичавший сосед': { skin: '#98a284', shirt: '#7a2e2e', pants: '#2e3340', hair: '#5a4632', torn: .45, blood: .6 },
  'Кошка-мутант': { q: 1, fur: '#3a3440', ears: 'big', snout: .7, headW: .9, scale: .62, tailLen: 1.8, tailK: .7, long: 1.05, legK: .8, eye: '#b8ff5a', speed: 1.3, tailUp: -.6 },
  'Мародёр': { skin: '#7f8a6a', shirt: '#2d2a33', pants: '#262830', x: ['hood'], torn: .35, blood: .4 },
  'Ползун': { style: 'crawler', legless: true, skin: '#87926f', shirt: '#4f5a4a', pants: '#2f3440', torn: .7, blood: .9, hair: '#1e1a14', bald: true },
  'Скиталец': { skin: '#8c977a', shirt: '#56604a', pants: '#3a3a30', x: ['backpack'], hair: '#2f281f', torn: .4, blood: .5 },
  'Бродячий повар': { skin: '#a0a690', shirt: '#e9e6df', pants: '#2a2a2a', x: ['apron', 'chefhat', 'cleaver'], torn: .3, blood: 1 },
  'Сторожевой пёс': { q: 1, fur: '#3b3631', scale: 1.12, bulk: 1.1, collar: '#9aa3ad', spikes: true, eye: '#ff3d2e' },
  'Охранный робот': { skin: '#8a947a', shirt: '#2b3445', pants: '#232833', x: ['helmet', 'vest'], torn: .3, blood: .4 },
  'Дрон-наблюдатель': { style: 'thin', thin: .6, skin: '#a3a08a', shirt: '#d0622a', pants: '#2e3340', x: ['cap'], hat: '#d0622a', torn: .4, blood: .5 },
  'Сотрудник': { skin: '#9aa58a', shirt: '#dfe3ea', pants: '#2a2f3d', x: ['tie'], tie: '#2a4a7a', hair: '#2a221a', torn: .35, blood: .6 },
  'Турникет-страж': { skin: '#7f8c6a', shirt: '#2b3445', pants: '#232833', x: ['vest', 'spikes'], vest: '#3a3f46', torn: .3, blood: .5 },
  'Менеджер': { suit: true, skin: '#98a284', shirt: '#2e3548', pants: '#252a38', tie: '#7a1f26', hair: '#1a1612', torn: .3, blood: .5 },
  'Уборщик-автомат': { skin: '#8f9a7a', shirt: '#2f6f6a', pants: '#2f6f6a', overalls: true, torn: .4, blood: .4, x: ['pustules'] },
  'Бухгалтер-призрак': { skin: '#a3ad92', shirt: '#c9d6e8', pants: '#2a2f3d', x: ['tie', 'glasses'], tie: '#3a3a3a', bald: true, hair: '#555555', torn: .3, blood: .5 },
  'Подопытный': { style: 'brute', muscle: 1, bigArm: 'R', headScale: .85, skin: '#c0c4b6', shirt: '#a8c4d8', pants: '#a8c4d8', sleeves: 'none', scale: 1.28, torn: .5, blood: .6, bald: true },
  'Мутант': { style: 'brute', muscle: 1, bigArm: 'R', headScale: .8, skin: '#7f9a5a', shirt: null, pants: '#3a3a30', scale: 1.32, x: ['pustules'], torn: .6, blood: .7, bald: true },
  'Лаборант-культист': { coat: true, skin: '#a3a08a', shirt: '#e9ecef', pants: '#2a2f3d', x: ['gasmask'], torn: .35, blood: .6 },
  'Дрон-палач': { skin: '#8a947a', shirt: '#d9b42a', pants: '#d9b42a', x: ['helmet', 'vest', 'spikes'], vest: '#9a8a2a', torn: .3, blood: .5 },
  'Химера': { q: 1, fur: '#5a6b4a', scale: 1.18, bulk: 1.15, spikes: true, eye: '#b8ff5a', plague: true },
  'Колба-слизень': { style: 'bloater', fat: 1.2, skin: '#7a9a5a', shirt: '#a8c4d8', pants: '#a8c4d8', sleeves: 'none', x: ['pustules'], scale: 1.12, torn: .5, blood: .5, bald: true },
  'Скальпельщик': { coat: true, skin: '#a3a08a', shirt: '#5a8a7a', pants: '#5a8a7a', mask: 'surgical', x: ['scalpels'], torn: .3, blood: 1 },
  'Страж': { skin: '#7a846a', shirt: '#15181e', pants: '#15181e', x: ['helmet', 'vest'], vest: '#22262c', torn: .2, blood: .4, scale: 1.06 },
  'Наместник': { suit: true, skin: '#a0a890', shirt: '#5a1a2a', pants: '#2a1a20', tie: '#e6b422', x: ['collarGold'], hair: '#9a9a9a', torn: .2, blood: .6 },
  'Тень': { style: 'thin', thin: 1, skin: '#3a3a44', shirt: '#14141a', pants: '#14141a', eye: '#c8ff5a', eyeGlow: 3, torn: .6, blood: .2, x: ['hood'] },
  'Элитный дрон': { suit: true, skin: '#8f9a7a', shirt: '#1c1f26', pants: '#1c1f26', tie: '#111111', x: ['vest', 'glasses'], vest: '#2a2e34', scale: 1.12, torn: .2, blood: .4 },
  'Королевская химера': { q: 1, fur: '#2e2a26', scale: 1.1, plague: true, eye: '#b8ff5a' },
  'Золотая гончая': { q: 1, fur: '#c9a23a', scale: 1.08, long: 1.1, collar: '#e6b422', eye: '#ff7a3d', speed: 1.3 },
  'Метрдотель': { suit: true, skin: '#a3ad92', shirt: '#e8e4da', pants: '#1c1c1c', tie: '#1c1c1c', x: ['bowtie'], hair: '#1a1612', torn: .25, blood: .6 },
};
const hashName = s => { let h = 7; for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return h % 997 + 1; };

function heroModel(wi, ai) {
  const g = HERO_GEAR[ai] || HERO_GEAR[0];
  const cfg = Object.assign({ style: 'hero', zombie: false, seed: 11, skin: '#c99c7c', pants: '#34362f', shoes: '#2a221c', hair: '#2b2119', stubble: true, sleeves: 'long', torn: .06, blood: .12 }, g, { x: ['pack', ...g.x] });
  const m = buildHuman2D(cfg, wi);
  m.group.scale.setScalar(HUMAN_SCALE); m.cfg = cfg;
  return m;
}
function npcModel(kind) {
  const cfg = { style: 'hero', zombie: false, seed: 77, skin: '#b88a6a', shirt: '#5a4a6a', jacket: '#4a3a2a', pants: '#2c2c30', shoes: '#1d1a18', hair: '#8a8a8a', stubble: true, sleeves: 'long', torn: .1, blood: 0, x: ['pack'] };
  const m = buildHuman2D(cfg, 0); m.group.scale.setScalar(HUMAN_SCALE); m.cfg = cfg; return m;
}
function enemyModel(name) {
  const cfg = Object.assign({ zombie: true, seed: hashName(name) }, ZOMBIES[name] || ZOMBIES['Сборщик']);
  if (cfg.coat) cfg.coatCol = cfg.shirt;
  const m = cfg.q ? buildQuad2D(cfg) : buildHuman2D(cfg, 0);
  m.group.scale.setScalar((cfg.scale || 1) * (cfg.q ? 1 : HUMAN_SCALE));
  m.cfg = cfg;
  return m;
}

// ---------- сцена ----------
let renderer, scene, camera, canvas, hostEl, post = null;
let bld = null, bldKey = '', hurt = 0, lastState = null, slide = null;
let hero = null, foe = null, npc = null, dying = [], heroKey = '', foeKey = '', npcKey = '', view = '', lastDraw = 0;
GL.quality = 'high';
try { GL.quality = localStorage.getItem('tower-q') || 'high'; } catch (e) {}

// тень персонажа на задней стене: тот же силуэт, крупнее и со сдвигом влево-вверх (свет снизу-справа)
const SH_DX = -16, SH_DY = 3, SH_K = 1.12;
function holder(model) {
  const root = new THREE.Group(), flip = new THREE.Group(), yaw = new THREE.Group();
  root.add(flip); flip.add(yaw); yaw.add(model.group);
  const sh = new THREE.Group(), sflip = new THREE.Group(), syaw = new THREE.Group();
  sh.position.set(SH_DX, SH_DY, -9.3); sh.scale.setScalar(SH_K); root.add(sh); sh.add(sflip); sflip.add(syaw); syaw.add(model.shadow);
  return { root, flip, yaw, sflip, syaw, model, ctl: model.ctl, st: { atk: -1, flash: 0, dir: 1, pop: 0 } };
}
function face(h, dir) { h.st.dir = dir; h.flip.scale.x = dir; h.sflip.scale.x = dir; }
function setTint(h, f, light) {
  h.model.mats.forEach(m => { if (m.userData.glow) return; m.color.setRGB(light * (1 + f * 1.5), light * (1 - f * .45), light * (1 - f * .5)); });
}
function disposeHolder(h) {
  if (!h) return; scene.remove(h.root);
  h.root.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach(m => m.dispose()); });
}
const animate = (h, dt) => h.model.apply(h.ctl.pose(dt));

function setupView() {
  const r = hostEl.getBoundingClientRect(), W = Math.max(1, r.width), H = Math.max(1, r.height);
  const key = W + 'x' + H;
  if (key !== view) {
    view = key;
    const hi = GL.quality !== 'low', pr = Math.min(window.devicePixelRatio || 1, hi ? 1.75 : 1.2);
    renderer.setPixelRatio(pr); renderer.setSize(W, H, false);
    if (hi && post) post.setSize(W, H, pr);
  }
  // окно мира задаёт камера сцены (scene.js): SVG-слои и WebGL видят одно и то же
  const V = window.VIEW || { x: 0, y: 0, w: 900, h: 400 };
  camera.left = V.x; camera.right = V.x + V.w; camera.top = -V.y; camera.bottom = -(V.y + V.h); camera.updateProjectionMatrix();
}
function trackHero() {
  const el = document.getElementById('hero'); if (!el || !hero) return;
  const cs = getComputedStyle(el); let x = 0, y = 400;
  if (cs.transform && cs.transform !== 'none') { const m = new DOMMatrix(cs.transform); x = m.m41; y = m.m42; }
  hero.root.position.set(x, -y, 0);
  if (!lastState || !lastState.fight) face(hero, el.classList.contains('face-l') ? -1 : 1);
  hero.ctl.loop(el.classList.contains('walk') ? 'walk' : 'idle');
  hero.root.visible = !el.classList.contains('boarding');
}
// свет отсека, где стоит персонаж: тёмные неизведанные комнаты приглушают и героя
function lightAt(x) { return 1; }
function frame(ts) {
  requestAnimationFrame(frame);
  if (!GL.active || !renderer) return;
  const t = ts / 1000;
  if (t - lastDraw < .024) return;                 // до ~40 к/с ради батареи
  const dt = Math.min(.05, lastDraw ? t - lastDraw : .016); lastDraw = t;
  setupView();
  if (hero) {
    trackHero(); const s = hero.st;
    if (s.atk >= 0) { s.atk += dt / .55; if (s.atk >= 1) s.atk = -1; }
    if (s.flash > 0) s.flash = Math.max(0, s.flash - dt * 3); setTint(hero, s.flash, 1);
    hero.yaw.position.x = hero.syaw.position.x = s.atk >= 0 ? Math.sin(Math.PI * Math.min(1, s.atk * 1.4)) * 30 : 0;
    animate(hero, dt);
  }
  for (const h of [foe, npc]) {
    if (!h) continue;
    const s = h.st; s.pop = Math.min(1, s.pop + dt * 4);
    if (s.atk >= 0) { s.atk += dt / .6; if (s.atk >= 1) s.atk = -1; }
    if (s.flash > 0) s.flash = Math.max(0, s.flash - dt * 3); setTint(h, s.flash, 1);
    h.yaw.position.x = h.syaw.position.x = s.atk >= 0 ? Math.sin(Math.PI * s.atk) * 34 : 0;
    const k = 1 - Math.pow(1 - s.pop, 3); h.root.scale.set(k, k, k);
    animate(h, dt);
  }
  dying = dying.filter(d => {
    animate(d, dt); d.left -= dt;
    if (d.left < .4) d.root.traverse(o => { if (o.material) [].concat(o.material).forEach(m => { m.transparent = true; m.opacity = Math.max(0, d.left / .4) * (m.userData.op0 == null ? (m.userData.op0 = m.opacity) : m.userData.op0); }); });
    if (d.left <= 0) { disposeHolder(d); return false; } return true;
  });
  if (bld && lastState) bld.update(dt, lastState);
  if (slide && bld) { const t = Math.min(1, (performance.now() - slide.t0) / slide.dur), e = t < .5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2; bld.root.position.y = slide.from * (1 - e); if (t >= 1) slide = null; }   // по часам, а не по кадрам: синхронно с выходом героя
  updateBlood(dt);
  hurt = Math.max(0, hurt - dt * 1.6);
  if (GL.quality !== 'low' && post) post.render(t, hurt); else renderer.render(scene, camera);
}
// o: { visible, layout, floorKey, zone, floor, base, rooms, heroComp, revealing, liftOk, liftOpen, wi, ai, enemy, foeX, foeDir, fight, dead, npc, npcX }
GL.update = (o) => {
  if (!GL.ready) return;
  GL.active = !!o.visible && GL.enabled; canvas.style.display = GL.active ? '' : 'none';
  if (!GL.active) return;
  lastState = o;
  if (o.floorKey !== bldKey) {
    bldKey = o.floorKey;
    if (bld) { scene.remove(bld.root); bld.dispose(); bld = null; }
    try { bld = buildBuilding({ zone: o.zone, floor: o.floor, base: o.base, rooms: o.rooms }, o.layout); scene.add(bld.root); } catch (e) { console.error(e); bld = null; }
    // поездка на лифте: новый этаж въезжает сверху (подъём) или снизу (спуск в убежище), будто камера едет вместе с кабиной
    blood.length = 0;
    if (bld && o.slide) { const d = o.layout.roomH + o.layout.slab; slide = { t0: performance.now(), dur: 1050, from: o.slide === 'up' ? d : -d }; bld.root.position.y = slide.from; } else slide = null;
  }
  hostEl.classList.toggle('env', !!bld);
  const hk = o.wi + ':' + o.ai;
  if (hk !== heroKey) { heroKey = hk; disposeHolder(hero); hero = holder(heroModel(o.wi, o.ai)); scene.add(hero.root); }
  if (hero) { if (o.dead) hero.ctl.once('death'); else if (hero.ctl.dead) hero.ctl.reset(); if (o.fight) face(hero, o.heroDir || 1); }
  const fk = o.enemy || '';
  if (fk !== foeKey) {
    foeKey = fk;
    if (foe) { if (foe.dyingStarted) { foe.left = 1.5; dying.push(foe); } else disposeHolder(foe); }
    foe = null;
    if (fk) { foe = holder(enemyModel(fk)); foe.root.scale.set(0, 0, 0); scene.add(foe.root); }
  }
  if (foe) { foe.root.position.set(o.foeX, -o.foeY, 0); face(foe, o.foeDir || -1); }
  // мирный житель/торговец в комнате
  const nk = o.npc || '';
  if (nk !== npcKey) { npcKey = nk; disposeHolder(npc); npc = null; if (nk) { npc = holder(npcModel(nk)); npc.st.pop = 1; scene.add(npc.root); } }
  if (npc) { npc.root.position.set(o.npcX, -o.foeY, 0); face(npc, o.npcDir || -1); }
};
GL.setEnabled = (v) => {
  GL.enabled = !!v;
  try { localStorage.setItem('tower-3d', v ? '1' : '0'); } catch (e) {}
  if (hostEl) hostEl.classList.toggle('gl', GL.ready && GL.enabled);
  if (canvas) canvas.style.display = GL.ready && GL.enabled ? '' : 'none';
};
GL.setQuality = (q) => {
  GL.quality = q === 'low' ? 'low' : 'high';
  try { localStorage.setItem('tower-q', GL.quality); } catch (e) {}
  if (renderer) { if (GL.quality !== 'low' && !post) post = makePost(renderer, scene, camera); view = ''; }
};
GL.trigger = (who, kind) => {
  if (!GL.ready || !GL.enabled) return;
  const h = who === 'hero' ? hero : foe; if (!h) return;
  if (kind === 'attack') { h.st.atk = 0; h.ctl.once('attack'); }
  else if (kind === 'hurt') { h.st.flash = 1; h.ctl.once('hit'); if (who === 'hero') hurt = 1; sprayBlood(h.root.position.x, h.root.position.y + 82 * (h.model.kind === 'quad' ? .5 : 1), -h.st.dir, 8 + (Math.random() * 7 | 0)); }
  else if (kind === 'death') { h.dyingStarted = true; h.ctl.once('death'); if (bld) { const x = h.root.position.x; setTimeout(() => bld && bld.stamp(x + h.st.dir * 20, 0, 16, 'pool'), 700); } }
  else if (kind === 'search') h.ctl.once('search');
};
function setupRenderer(r) { r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.NoToneMapping; }
GL.init = () => {
  try {
    hostEl = document.getElementById('scene'); canvas = document.getElementById('gl');
    if (!hostEl || !canvas) return;
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setClearColor(0x050608, 1); setupRenderer(renderer);
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(0, 900, 0, -400, -200, 200); camera.position.z = 100;
    if (GL.quality !== 'low') post = makePost(renderer, scene, camera);
    GL.ready = true; if (GL.enabled) hostEl.classList.add('gl');
    requestAnimationFrame(frame);
    if (typeof render === 'function') render();
  } catch (e) { console.error(e); GL.ready = false; if (hostEl) hostEl.classList.remove('gl'); }
};

// ---------- кровь: брызги летят от удара и остаются на стене и полу комнаты ----------
const blood = [];
let bloodPts = null;
function sprayBlood(x, y, dir, n) {
  for (let i = 0; i < n; i++) {
    const a = (Math.random() - .5) * 1.4 + (dir > 0 ? 0 : Math.PI) - dir * .35, v = 60 + Math.random() * 170;
    blood.push({ x, y: y + (Math.random() - .5) * 14, vx: Math.cos(a) * v, vy: Math.sin(a) * v * .8 + 40 + Math.random() * 80, life: 1.4, wall: Math.random() < .3 ? .06 + Math.random() * .3 : 9, r: .6 + Math.random() * 1.2 });
  }
}
function updateBlood(dt) {
  if (!bloodPts) {
    bloodPts = new THREE.Points(new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(new Float32Array(200 * 3), 3)),
      new THREE.PointsMaterial({ color: 0x7a0a06, size: 3.2, sizeAttenuation: false, transparent: true, opacity: .95, depthWrite: false }));
    bloodPts.frustumCulled = false; bloodPts.renderOrder = 40; scene.add(bloodPts);
  }
  const P = bloodPts.geometry.attributes.position, floorY = lastState ? -lastState.layout.floorY + 3 : -400;
  for (let i = blood.length - 1; i >= 0; i--) {
    const b = blood[i]; b.life -= dt; b.wall -= dt;
    b.vy -= 520 * dt; b.x += b.vx * dt; b.y += b.vy * dt;
    let hit = null;
    if (b.wall <= 0) hit = 'wall'; else if (b.y <= floorY) hit = 'floor';
    if (hit || b.life <= 0) { if (hit && bld) bld.stamp(b.x, -Math.max(b.y, floorY), b.r * (hit === 'wall' ? 1.4 : 2), hit); blood.splice(i, 1); }
  }
  for (let i = 0; i < 200; i++) { const b = blood[i]; if (b) P.setXYZ(i, b.x, b.y, 5); else P.setXYZ(i, 0, -99999, 0); }
  P.needsUpdate = true;
}

// ---------- рисование персонажа на 2D-холсте (портреты HUD, выбор цели) ----------
// region: 'head' | 'body' | 'arms' | 'legs' — подсветить часть тела красным
const REGION = { head: ['head'], body: ['torso', 'coatTail', 'body'], arms: ['uarmN', 'farmN', 'handN', 'uarmF', 'farmF', 'handF', 'fuN', 'flN', 'fuF', 'flF'], legs: ['thighN', 'shinN', 'footN', 'thighF', 'shinF', 'footF', 'huN', 'hlN', 'huF', 'hlF', 'tail'] };
function drawModel(ctx, m, s, ox, oy, region, dim) {
  m.group.updateMatrixWorld(true);
  const list = []; m.group.traverse(o => { if (o.isMesh && o.material.map && !o.material.userData.glow) list.push(o); });
  list.sort((a, b) => a.renderOrder - b.renderOrder);
  const hl = region ? new Set(REGION[region] || []) : null;
  for (const o of list) {
    const e = o.matrixWorld.elements, img = o.material.map.image, w = o.geometry.parameters.width, h = o.geometry.parameters.height;
    ctx.setTransform(s * e[0], -s * e[1], -s * e[4], s * e[5], s * e[12] + ox, -s * e[13] + oy);
    if (hl && hl.has(o.userData.part)) {
      const tc = document.createElement('canvas'); tc.width = img.width; tc.height = img.height; const tx = tc.getContext('2d');
      tx.drawImage(img, 0, 0); tx.globalCompositeOperation = 'source-atop'; tx.fillStyle = 'rgba(214,28,20,.82)'; tx.fillRect(0, 0, tc.width, tc.height);
      ctx.drawImage(tc, -w / 2, -h / 2, w, h);
    } else { ctx.globalAlpha = dim && hl ? .9 : 1; ctx.drawImage(img, -w / 2, -h / 2, w, h); ctx.globalAlpha = 1; }
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}
// Рисует героя/врага в холст cv: mode 'portrait' (голова крупно) или 'full' (весь рост, подсветка region)
GL.drawChar = (cv, who, mode, region) => {
  if (!GL.ready && mode !== 'full' && mode !== 'portrait') return false;
  const m = who.hero ? heroModel(who.wi, who.ai) : enemyModel(who.name);
  m.apply(m.ctl.pose(0.6));
  const ctx = cv.getContext('2d'), W = cv.width, H = cv.height; ctx.clearRect(0, 0, W, H);
  if (mode === 'portrait') {
    m.group.updateMatrixWorld(true);
    let hp = new THREE.Vector3(); m.group.traverse(o => { if (o.userData.part === (m.kind === 'quad' ? 'head' : 'head')) o.getWorldPosition(hp); });
    const s = W / (m.kind === 'quad' ? 40 : 30);
    if (!who.hero) ctx.translate(W, 0), ctx.scale(-1, 1);
    drawModel(ctx, m, s, W / 2 - hp.x * s + (m.kind === 'quad' ? -W * .1 : 0), H / 2 + hp.y * s - H * .02);
  } else {
    const s = H / ((m.kind === 'quad' ? 80 : 150) * (m.cfg.scale || 1));
    if (!who.hero) { ctx.translate(W, 0); ctx.scale(-1, 1); }
    m.group.scale.setScalar(1);
    drawModel(ctx, m, s, W / 2, H * .97, region, true);
  }
  m.group.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
  m.shadow.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
  return true;
};
// иллюстрация к окну события, торговца, автомата или запертой двери (как сценки в Skyhill): комната с окном в грозу и герой сцены
GL.drawScene = (cv, kind) => {
  const ctx = cv.getContext('2d'), W = cv.width, H = cv.height, s = H / 300, wu = W / s, FL = 272;
  ctx.setTransform(s, 0, 0, s, 0, 0);
  let g = ctx.createLinearGradient(0, 0, 0, 300); g.addColorStop(0, '#24252b'); g.addColorStop(1, '#17181c'); ctx.fillStyle = g; ctx.fillRect(0, 0, wu, 300);
  ctx.fillStyle = 'rgba(255,255,255,.025)'; for (let x = 0; x < wu; x += 16) ctx.fillRect(x, 0, 8, FL);
  ctx.save(); ctx.translate(wu * .66, 108); ctx.scale(2.1, 2.1); DECO.window(ctx, 0, 0); ctx.restore();
  ctx.fillStyle = '#121214'; ctx.fillRect(0, FL, wu, 300 - FL); ctx.fillStyle = 'rgba(255,255,255,.06)'; ctx.fillRect(0, FL, wu, 1.5);
  if (kind === 'npc') { PROPS.radiator(ctx, wu * .6, FL); PROPS.boxes(ctx, wu * .78, FL); }
  if (kind === 'vending') { ctx.save(); ctx.translate(wu * .32, FL); ctx.scale(2.6, 2.6); PROPS.vending(ctx, -20, 0); ctx.restore(); }
  if (kind === 'locked') { ctx.save(); ctx.translate(wu * .32, FL); ctx.scale(2.2, 2.2); PROPS.door(ctx, -25, 0); ctx.restore(); }
  if (kind === 'box') { ctx.save(); ctx.translate(wu * .3, FL); ctx.scale(1.8, 1.8); PROPS.crates(ctx, -32, 0); ctx.restore(); PROPS.radiator(ctx, wu * .7, FL); }
  if (kind === 'npc') {
    const m = npcModel('trader'); m.apply(m.ctl.pose(.8)); m.group.scale.setScalar(1);
    drawModel(ctx, m, s * 1.85, W * .3, FL * s);
    m.group.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  g = ctx.createRadialGradient(W * .45, H * .45, H * .2, W * .5, H * .5, W * .75); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.7)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
};
// значок оружия для панели боя: клинок/дубина горизонтально, без оружия — кулак героя
GL.drawWeapon = (cv, wi) => {
  const ctx = cv.getContext('2d'), W = cv.width, H = cv.height; ctx.clearRect(0, 0, W, H);
  const m = heroModel(wi, 0); m.group.updateMatrixWorld(true);
  let src = null; m.group.traverse(o => { if (o.isMesh && o.userData.part === (wi > 0 ? null : 'handN') && !src) src = o; });
  if (wi > 0) m.group.traverse(o => { if (o.isMesh && !o.userData.part && !o.material.userData.glow && !src) src = o; });
  if (src) {
    const img = src.material.map.image, w = src.geometry.parameters.width, h = src.geometry.parameters.height;
    const k = wi > 0 ? Math.min(W / h, H / w) * .95 : Math.min(W / h, H / w) * .9;
    ctx.translate(W / 2, H / 2); ctx.rotate(wi > 0 ? Math.PI / 2 : -Math.PI / 2); ctx.drawImage(img, -w * k / 2, -h * k / 2, w * k, h * k); ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
  m.group.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
};
// отладка и тесты: несколько моделей на отдельном холсте
GL.gallery = (cv, items, w, h, cols) => {
  const r = new THREE.WebGLRenderer({ canvas: cv, antialias: true }); r.setSize(w, h, false); setupRenderer(r); r.setClearColor(0x2a2a30, 1);
  const sc = new THREE.Scene();
  const cam = new THREE.OrthographicCamera(0, w, 0, -h, -500, 500); cam.position.z = 100;
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(w * 3, h * 3), new THREE.MeshBasicMaterial({ color: 0x4a4048 })); wall.position.set(w / 2, -h / 2, -60); sc.add(wall);
  cols = cols || Math.ceil(Math.sqrt(items.length * w / h)); const rows = Math.ceil(items.length / cols), cw = w / cols, ch = h / rows;
  items.forEach((it, i) => {
    const m = it.hero ? heroModel(it.wi, it.ai) : enemyModel(it.name);
    const hh = holder(m); face(hh, it.hero ? 1 : -1);
    const c = i % cols, rr = Math.floor(i / cols); hh.root.position.set(c * cw + cw / 2, -(rr * ch + ch * .92), 0); hh.root.scale.setScalar((it.s || 1) * ch / 165); sc.add(hh.root);
    if (it.anim && it.anim !== 'idle' && it.anim !== 'walk') hh.ctl.once(it.anim); else hh.ctl.loop(it.anim || 'idle');
    for (let t = 0; t < (it.t || .4); t += 1 / 60) animate(hh, 1 / 60);
  });
  r.render(sc, cam); return true;
};
document.addEventListener('DOMContentLoaded', GL.init);
