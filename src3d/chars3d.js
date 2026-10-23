// Сцена: 3D-окружение башни + рисованные 2D-персонажи (герой, зомби, звери), свет, тени, пост-обработка.
import { buildEnv, FY } from './env3d.js';
import { makePost } from './post.js';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { buildHuman2D, buildQuad2D } from './rig2d.js';

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

const VB = { x: 0, y: 24, w: 360, h: 400 };
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
function enemyModel(name) {
  const cfg = Object.assign({ zombie: true, seed: hashName(name) }, ZOMBIES[name] || ZOMBIES['Сборщик']);
  if (cfg.coat) cfg.coatCol = cfg.shirt;
  const m = cfg.q ? buildQuad2D(cfg) : buildHuman2D(cfg, 0);
  m.group.scale.setScalar((cfg.scale || 1) * (cfg.q ? 1 : HUMAN_SCALE));
  m.cfg = cfg;
  return m;
}

// ---------- сцена ----------
let renderer, scene, camera, canvas, hostEl, pmrem, post = null;
let env = null, envKey = '', keyLight = null, hurt = 0;
let hero = null, foe = null, dying = [], heroKey = '', foeKey = '', view = '', lastDraw = 0;
// качество: high — HDR, MSAA, свечение, цветокоррекция, тени; low — прямой рендер без теней
GL.quality = 'high';
try { GL.quality = localStorage.getItem('tower-q') || 'high'; } catch (e) {}

function shadowTex() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  const g = x.createRadialGradient(32, 32, 2, 32, 32, 30); g.addColorStop(0, 'rgba(0,0,0,.75)'); g.addColorStop(.5, 'rgba(0,0,0,.35)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}
let SHT = null;
function holder(model, w) {
  const root = new THREE.Group(), flip = new THREE.Group(), yaw = new THREE.Group();
  root.add(flip); flip.add(yaw); yaw.add(model.group);
  SHT = SHT || shadowTex();
  // мягкая контактная тень под ногами (дополняет карту теней)
  const sh = new THREE.Mesh(new THREE.PlaneGeometry(w * 2.2, w * 1.3), new THREE.MeshBasicMaterial({ map: SHT, transparent: true, depthWrite: false }));
  sh.rotation.x = -Math.PI / 2; sh.position.set(0, .6, 0); sh.renderOrder = 1; root.add(sh);
  return { root, flip, yaw, model, ctl: model.ctl, st: { atk: -1, flash: 0, dir: 1, pop: 0 } };
}
function setFlash(h, f) { h.model.mats.forEach(m => { if (m.userData.glow) return; const b = m.userData.baseEmissive || 0; m.emissive.setRGB(b + f * 1.6, b * (1 - f * .7), b * (1 - f * .75)); }); }
const animate = (h, dt) => h.model.apply(h.ctl.pose(dt));
function disposeHolder(h) {
  if (!h) return; scene.remove(h.root);
  h.root.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach(m => m.dispose()); });
}

function applyQuality() {
  const hi = GL.quality !== 'low';
  renderer.shadowMap.enabled = hi; renderer.shadowMap.needsUpdate = true;
  if (keyLight) keyLight.castShadow = hi;
  scene.traverse(o => { if (o.material) [].concat(o.material).forEach(m => { m.needsUpdate = true; }); });
  if (hi && !post) post = makePost(renderer, scene, camera);
  view = '';
}
function setupView() {
  const r = hostEl.getBoundingClientRect(), W = Math.max(1, r.width), H = Math.max(1, r.height);
  const key = W + 'x' + H;
  if (key !== view) {
    view = key;
    const hi = GL.quality !== 'low', pr = Math.min(window.devicePixelRatio || 1, hi ? 1.6 : 1.1);
    renderer.setPixelRatio(pr); renderer.setSize(W, H, false);
    if (hi && post) post.setSize(W, H, pr);
  }
  // окно мира задаёт камера сцены (scene.js): SVG-слои и WebGL видят одно и то же
  const V = window.VIEW || VB, D = 1100, cx = V.x + V.w / 2, cy = -(V.y + V.h / 2);
  camera.fov = 2 * Math.atan(V.h / 2 / D) * 180 / Math.PI; camera.aspect = W / H; camera.near = 50; camera.far = 3000;
  camera.position.set(cx, cy, D); camera.lookAt(cx, cy, 0); camera.updateProjectionMatrix();
}
function trackHero() {
  const el = document.getElementById('hero'); if (!el || !hero) return;
  const cs = getComputedStyle(el); let x = 0, y = 352;
  if (cs.transform && cs.transform !== 'none') { const m = new DOMMatrix(cs.transform); x = m.m41; y = m.m42; }
  hero.root.position.set(x, -y, 0);
  const left = el.classList.contains('face-l'); hero.flip.scale.x = left ? -1 : 1; hero.st.dir = left ? -1 : 1;
  hero.ctl.loop(el.classList.contains('walk') ? 'walk' : 'idle');
  hero.root.visible = !el.classList.contains('boarding');
}
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
    if (s.flash > 0) s.flash = Math.max(0, s.flash - dt * 3); setFlash(hero, s.flash);
    hero.yaw.position.x = s.atk >= 0 ? Math.sin(Math.PI * Math.min(1, s.atk * 1.4)) * 38 : 0;
    animate(hero, dt);
  }
  if (foe) {
    const s = foe.st; s.pop = Math.min(1, s.pop + dt * 4);
    if (s.atk >= 0) { s.atk += dt / .6; if (s.atk >= 1) s.atk = -1; }
    if (s.flash > 0) s.flash = Math.max(0, s.flash - dt * 3); setFlash(foe, s.flash);
    foe.yaw.position.x = s.atk >= 0 ? Math.sin(Math.PI * s.atk) * 40 : 0;
    const k = 1 - Math.pow(1 - s.pop, 3); foe.root.scale.set(k, k, k);
    animate(foe, dt);
  }
  dying = dying.filter(d => {
    animate(d, dt); d.left -= dt;
    if (d.left < .4) d.root.traverse(o => { if (o.material) [].concat(o.material).forEach(m => { m.transparent = true; m.opacity = Math.max(0, d.left / .4); }); });
    if (d.left <= 0) { disposeHolder(d); return false; } return true;
  });
  if (env) env.update(dt, [0, 1, 2].map(i => document.getElementById('door' + i)), document.getElementById('lift'));
  if (keyLight) { const hx = hero ? hero.root.position.x : 180; keyLight.position.set(hx - 70, FY + 520, 420); keyLight.target.position.set(hx + 20, FY, 0); keyLight.target.updateMatrixWorld(); }
  hurt = Math.max(0, hurt - dt * 1.6);
  if (GL.quality !== 'low' && post) post.render(t, hurt); else renderer.render(scene, camera);
}
GL.update = (o) => {
  if (!GL.ready) return;
  GL.active = !!o.visible && GL.enabled; canvas.style.display = GL.active ? '' : 'none';
  if (!GL.active) return;
  if (o.env !== envKey) {
    envKey = o.env || '';
    if (env) { scene.remove(env.root); env.dispose(); env = null; }
    if (envKey) { try { env = buildEnv(envKey); scene.add(env.root); } catch (e) { console.error(e); env = null; } }
  }
  hostEl.classList.toggle('env', !!env);
  const hk = o.wi + ':' + o.ai;
  if (hk !== heroKey) { heroKey = hk; disposeHolder(hero); const m = heroModel(o.wi, o.ai); hero = holder(m, 22); scene.add(hero.root); }
  if (hero) { if (o.dead) hero.ctl.once('death'); else if (hero.ctl.dead) hero.ctl.reset(); }
  const fk = o.enemy || '';
  if (fk !== foeKey) {
    foeKey = fk;
    if (foe) { if (foe.dyingStarted) { foe.left = 1.5; dying.push(foe); } else disposeHolder(foe); }
    foe = null;
    if (fk) { const m = enemyModel(fk); foe = holder(m, m.cfg.q ? 36 * (m.cfg.scale || 1) : 28); foe.flip.scale.x = -1; foe.st.dir = -1; foe.root.scale.set(0, 0, 0); scene.add(foe.root); }
  }
  if (foe) foe.root.position.set(o.foeX, -o.foeY, 0);
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
  if (renderer) applyQuality();
};
GL.trigger = (who, kind) => {
  if (!GL.ready || !GL.enabled) return;
  const h = who === 'hero' ? hero : foe; if (!h) return;
  if (kind === 'attack') { h.st.atk = 0; h.ctl.once('attack'); }
  else if (kind === 'hurt') { h.st.flash = 1; h.ctl.once('hit'); if (who === 'hero') hurt = 1; }
  else if (kind === 'death') { h.dyingStarted = true; h.ctl.once('death'); }
};
function lights(sc) {
  sc.add(new THREE.HemisphereLight(0x8f9cb8, 0x2a2018, .65));
  // ключевой тёплый свет сверху-спереди: тени персонажей на пол и стену
  const key = new THREE.DirectionalLight(0xffdcb0, 1.9); key.position.set(-140, 260, 320); sc.add(key, key.target);
  key.castShadow = true; key.shadow.mapSize.set(1024, 1024); key.shadow.bias = -.0005; key.shadow.normalBias = .8; key.shadow.radius = 4;
  Object.assign(key.shadow.camera, { left: -260, right: 260, top: 300, bottom: -200, near: 100, far: 1500 }); keyLight = key;
  // холодный контровой свет: читаемый силуэт на тёмном фоне
  const rim = new THREE.DirectionalLight(0x8cb4ff, 2.6); rim.position.set(240, 160, -300); sc.add(rim);
  const rim2 = new THREE.DirectionalLight(0xffb27a, .9); rim2.position.set(-260, 80, -200); sc.add(rim2);
}
function setupRenderer(r) { r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFShadowMap; r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.1; }
GL.init = () => {
  try {
    hostEl = document.getElementById('scene'); canvas = document.getElementById('gl');
    if (!hostEl || !canvas) return;
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setClearColor(0x050608, 1); setupRenderer(renderer);
    scene = new THREE.Scene();
    pmrem = new THREE.PMREMGenerator(renderer); scene.environment = pmrem.fromScene(new RoomEnvironment(), .04).texture; scene.environmentIntensity = .35;
    camera = new THREE.PerspectiveCamera(30, .9, 50, 3000);
    lights(scene);
    applyQuality();
    GL.ready = true; if (GL.enabled) hostEl.classList.add('gl');
    requestAnimationFrame(frame);
    if (typeof render === 'function') render();
  } catch (e) { console.error(e); GL.ready = false; if (hostEl) hostEl.classList.remove('gl'); }
};
// отладка и тесты: несколько моделей на отдельном холсте, в нужной анимации и моменте
GL.gallery = (cv, items, w, h, cols) => {
  const r = new THREE.WebGLRenderer({ canvas: cv, antialias: true }); r.setSize(w, h, false); setupRenderer(r); r.setClearColor(0x161a20, 1);
  const sc = new THREE.Scene(); lights(sc); sc.add(new THREE.AmbientLight(0xffffff, .6));
  const cam = new THREE.OrthographicCamera(0, w, 0, -h, 1, 3000); cam.position.z = 900;
  cols = cols || Math.ceil(Math.sqrt(items.length * w / h)); const rows = Math.ceil(items.length / cols), cw = w / cols, ch = h / rows;
  items.forEach((it, i) => {
    const m = it.hero ? heroModel(it.wi, it.ai) : enemyModel(it.name);
    const hh = holder(m, m.cfg && m.cfg.q ? 36 : 28); hh.flip.scale.x = it.hero ? 1 : -1;
    const c = i % cols, rr = Math.floor(i / cols); hh.root.position.set(c * cw + cw / 2, -(rr * ch + ch * .92), 0); hh.root.scale.setScalar((it.s || 1) * ch / 165); sc.add(hh.root);
    if (it.anim && it.anim !== 'idle' && it.anim !== 'walk') hh.ctl.once(it.anim); else hh.ctl.loop(it.anim || 'idle');
    for (let t = 0; t < (it.t || .4); t += 1 / 60) animate(hh, 1 / 60);
  });
  r.render(sc, cam); return true;
};
document.addEventListener('DOMContentLoaded', GL.init);
