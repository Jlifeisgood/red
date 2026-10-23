'use strict';
// ===== Сцена: этаж башни в разрезе, как в Skyhill. Комната | комната | лестница с лифтом | комната =====
// Мир задан в координатах SVG (y вниз). WebGL (chars3d.bundle.js) рисует здание и персонажей, SVG-слои — зоны нажатия,
// всплывающие числа и упрощённую графику, если WebGL недоступен.

const FLOOR_Y = 400, ROOM_H = 210, SLAB = 24;
const COMPS = [{ k: 'room', i: 0, x0: 0, x1: 226 }, { k: 'room', i: 1, x0: 232, x1: 458 }, { k: 'hall', x0: 464, x1: 684 }, { k: 'room', i: 2, x0: 690, x1: 916 }];
const HALL = COMPS[2], LIFT_X = HALL.x1 - 44, BX0 = -22, BX1 = 938;
const HERO_HOME = HALL.x0 + 112, HERO_Y = FLOOR_Y - 3, FOE_Y = FLOOR_Y - 3;
const BASE_COMP = { f0: 0, f1: 1, f2: 3 };          // убежище: спальня, кухня, мастерская
const LAYOUT = { comps: COMPS, floorY: FLOOR_Y, roomH: ROOM_H, slab: SLAB, liftX: LIFT_X, bw: BX1 - BX0 };
const ROOM_ICON = { loot: 'crate', enemy: 'skull', rest: 'bed', trap: 'warn', trader: 'case', event: 'help', vending: 'cup', locked: 'lock' };

let heroX = HERO_HOME, sceneBusy = false, sceneKey = null, sceneMode = '', heroKey = '', foeKey = '', walkMs = 520;
let curComp = 2, liftOpen = false, revealing = -1, introT = [], prevFloor = null, pendingSlide = null, arriveBy = 'lift';
const FIGHT = { hx: 0, fx: 0, dir: 1 };
try { if (localStorage.getItem('tower-fast') === '1') walkMs = 260; } catch (e) {}

const roomComp = i => COMPS.findIndex(c => c.k === 'room' && c.i === i);
const compAt = x => { let best = 2, d = 1e9; COMPS.forEach((c, j) => { const m = x < c.x0 ? c.x0 - x : x > c.x1 ? x - c.x1 : 0; if (m < d) { d = m; best = j; } }); return best; };
const leftOfHall = c => c.x1 <= HALL.x0;
const entryX = c => leftOfHall(c) ? c.x1 - 46 : c.x0 + 46;

// ---------- камера: окно мира, общее для SVG и WebGL ----------
const VIEW = { x: 0, y: 160, w: 900, h: 340 };
window.VIEW = VIEW;
const CAM = { cx: null, hv: null, last: 0, key: '' };
function heroLiveX() {
  const el = document.getElementById('hero'); if (!el) return heroX;
  const t = getComputedStyle(el).transform;
  return t && t !== 'none' ? new DOMMatrix(t).m41 : heroX;
}
function camTick(ts) {
  requestAnimationFrame(camTick);
  const sc = document.getElementById('scene'); if (!sc) return;
  const W = sc.clientWidth, Hp = sc.clientHeight; if (!W || !Hp) return;
  const dt = Math.min(.1, CAM.last ? (ts - CAM.last) / 1000 : .016); CAM.last = ts;
  const a = W / Hp, fight = typeof S !== 'undefined' && S && S.screen === 'fight';
  // на этаже видно весь этаж целиком, в бою камера подъезжает ближе
  const want = ROOM_H + 2 * SLAB + (fight ? 70 : 150);
  CAM.hv = CAM.hv == null ? want : CAM.hv + (want - CAM.hv) * Math.min(1, dt * 2.5);
  let hv = CAM.hv, wv = hv * a;
  if (wv < 360) { wv = 360; hv = wv / a; }
  const u = hv / Hp, top = Hp > 500 ? 70 : 52, bottom = Hp > 500 ? 90 : 70;
  const lo = BX0 + wv / 2 - 40, hi = BX1 - wv / 2 + 40;
  let target = fight ? (FIGHT.hx + FIGHT.fx) / 2 : heroLiveX();
  target = lo > hi ? (BX0 + BX1) / 2 : Math.max(lo, Math.min(hi, target));
  if (CAM.cx == null) CAM.cx = target;
  CAM.cx += (target - CAM.cx) * Math.min(1, dt * 3);
  const yc = FLOOR_Y - ROOM_H / 2;
  VIEW.w = wv; VIEW.h = hv; VIEW.x = CAM.cx - wv / 2; VIEW.y = yc - (Hp / 2 + (top - bottom) / 2) * u;
  const vb = `${VIEW.x.toFixed(2)} ${VIEW.y.toFixed(2)} ${wv.toFixed(2)} ${hv.toFixed(2)}`;
  if (vb !== CAM.key) { CAM.key = vb; document.getElementById('sv').setAttribute('viewBox', vb); document.getElementById('ov').setAttribute('viewBox', vb); }
}
requestAnimationFrame(camTick);

// ---------- разметка: зоны нажатия и простая графика без WebGL ----------
const NS = 'http://www.w3.org/2000/svg';
function svgEl(tag, attrs, parent) { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; }
function initScene() {
  const sv = $('sv');
  sv.setAttribute('preserveAspectRatio', 'xMidYMid meet'); $('ov').setAttribute('preserveAspectRatio', 'xMidYMid meet');
  sv.innerHTML = ART.defs + '<g id="bg"></g><g id="doors"></g><g id="furns"></g><g id="liftg"></g><g id="foe"><g id="foe-in"><g id="foe-art"></g></g></g><g id="hero"><g id="hero-in"></g></g>';
  $('ov').innerHTML = '<g id="marks"></g><g id="foe-o"><g id="foe-zones"></g></g><g id="fl"></g>';
  const hitRect = (g, c) => svgEl('rect', { x: c.x0, y: FLOOR_Y - ROOM_H, width: c.x1 - c.x0, height: ROOM_H, fill: '#fff', 'fill-opacity': '0.001' }, g);
  [0, 1, 2].forEach(i => { const g = svgEl('g', { class: 'door', id: 'door' + i }, $('doors')); hitRect(g, COMPS[roomComp(i)]); g.onclick = () => sceneTap(i); });
  const lg = svgEl('g', { class: 'lift', id: 'lift' }, $('liftg'));
  svgEl('rect', { x: LIFT_X - 40, y: FLOOR_Y - 150, width: 80, height: 150, fill: '#fff', 'fill-opacity': '0.001' }, lg); lg.onclick = () => sceneTap('lift');
  ['f0', 'f1', 'f2'].forEach((f, i) => { const g = svgEl('g', { class: 'furn', id: 'furn' + i }, $('furns')); hitRect(g, COMPS[BASE_COMP[f]]); g.onclick = () => sceneTap(f); });
  $('hero').style.transform = `translate(${HERO_HOME}px,${HERO_Y}px)`;
  $('foe-zones').addEventListener('click', ev => {
    const z = ev.target.getAttribute && ev.target.getAttribute('data-z');
    if (!z || S.screen !== 'fight') return;
    sfx('click'); attack(z.startsWith('arm') ? 'arms' : z);
  });
}
// плоская запасная графика здания (если нет WebGL)
function svgBuilding(inBase, zone) {
  const pal = ['#3d4540', '#4c3a48', '#4a525a', '#7c938d', '#3c2f44'][zone] || '#4c3a48';
  let s = `<rect x="${BX0 - 400}" y="${FLOOR_Y - ROOM_H * 3}" width="${BX1 - BX0 + 800}" height="${ROOM_H * 6}" fill="#0b0e14"/>`;
  s += `<rect x="${BX0}" y="${FLOOR_Y - ROOM_H * 2 - SLAB * 2}" width="${BX1 - BX0}" height="${ROOM_H * 3 + SLAB * 4}" fill="#101113"/>`;
  COMPS.forEach(c => { s += `<rect x="${c.x0}" y="${FLOOR_Y - ROOM_H}" width="${c.x1 - c.x0}" height="${ROOM_H}" fill="${inBase ? '#5c4430' : c.k === 'hall' ? '#3a3e3c' : pal}"/><rect x="${c.x0}" y="${FLOOR_Y - 6}" width="${c.x1 - c.x0}" height="6" fill="#2a2420"/>`; });
  s += `<path d="M${HALL.x0 + 6} ${FLOOR_Y} L${HALL.x0 + 134} ${FLOOR_Y - ROOM_H}" stroke="#20242a" stroke-width="14"/><rect x="${LIFT_X - 32}" y="${FLOOR_Y - 132}" width="64" height="128" fill="#7a8086" stroke="#222"/>`;
  s += `<text x="${HALL.x0 + 12}" y="${FLOOR_Y - 140}" font-size="44" font-weight="700" fill="rgba(230,226,214,.25)">${inBase ? '' : S.floor}</text>`;
  return s;
}

// ---------- перемещение героя ----------
function setHero(x, walk, instant) {
  const h = $('hero');
  if (instant) h.style.transition = 'none';
  h.classList.toggle('face-l', x < heroX);
  h.classList.toggle('walk', !!walk);
  heroX = x; h.style.transform = `translate(${x}px,${HERO_Y}px)`;
  if (instant) { void h.getBoundingClientRect(); h.style.transition = ''; }
}
function walkThen(x, fn) {
  if (sceneBusy) return;
  sceneBusy = true;
  introT.forEach(clearTimeout); introT = []; $('hero').classList.remove('boarding'); liftOpen = false;   // игрок пошёл, не дожидаясь выхода из лифта
  const ms = Math.max(240, Math.abs(x - heroX) * walkMs / 170);
  $('hero').style.transitionDuration = ms + 'ms';
  setHero(x, true);
  const steps = setInterval(() => sfx('step'), 230);
  setTimeout(() => { clearInterval(steps); sceneBusy = false; $('hero').classList.remove('walk'); curComp = compAt(x); fn(); }, ms + 30);
}
function enterDoor(i) {
  const r = S.rooms[i];
  if (S.screen !== 'map' || !r) return;
  const c = COMPS[roomComp(i)], mid = (c.x0 + c.x1) / 2 + (leftOfHall(c) ? 14 : -14);
  if (r.done) return walkThen(mid, () => render());
  // враг встречает у порога; остальные комнаты герой обыскивает — присаживается и шарит руками
  if (r.type === 'enemy' || r.type === 'trap') return walkThen(entryX(c), () => { sfx('door'); revealing = i; setTimeout(() => { revealing = -1; }, 900); openRoom(i); });
  walkThen(mid, () => {
    sfx('door'); revealing = i; render(); sceneBusy = true;
    if (window.GL3D) GL3D.trigger('hero', 'search');
    setTimeout(() => { sceneBusy = false; revealing = -1; openRoom(i); }, r.type === 'locked' && S.keys <= 0 ? 150 : 700);
  });
}
// подойти к лифту, войти в кабину и уехать (подъём, спуск в убежище, возврат)
function liftTrip(fn) {
  walkThen(LIFT_X, () => {
    sfx('ding'); liftOpen = true; render(); sceneBusy = true;
    setTimeout(() => { $('hero').classList.add('boarding'); }, 350);
    setTimeout(() => { liftOpen = false; render(); }, 750);
    setTimeout(() => { sceneBusy = false; $('hero').classList.remove('boarding'); arriveBy = 'lift'; fn(); }, 1000);
  });
}
function rideAnim() {
  if (S.screen !== 'map' || !S.lift || S.lift.state !== 'ok') return;
  liftTrip(ride);
}
// подъём по лестничной клетке: герой поднимается по маршу и скрывается за перекрытием
function climbAnim(fn) {
  walkThen(HALL.x0 + 18, () => {
    const h = $('hero'); sceneBusy = true;
    h.classList.remove('face-l'); h.classList.add('walk');
    h.style.transitionDuration = '1500ms'; h.style.transform = `translate(${HALL.x0 + 150}px,${FLOOR_Y - ROOM_H - 10}px)`;
    const steps = setInterval(() => sfx('step'), 190);
    setTimeout(() => { clearInterval(steps); sceneBusy = false; h.classList.remove('walk'); arriveBy = 'stairs'; fn(); }, 1550);
  });
}
function sceneTap(i) {
  if (sceneBusy) return;
  if (S.screen === 'map') {
    if (i === 'lift') {
      if (S.lift && S.lift.state === 'ok') rideAnim();
      else walkThen(LIFT_X - 30, () => { S.screen = 'liftmenu'; render(); });
      return;
    }
    if (typeof i === 'number') enterDoor(i);
  } else if (S.screen === 'base' && S.inBase) {
    if (i === 'lift') return liftTrip(returnUp);
    const c = COMPS[BASE_COMP[i]]; if (!c) return;
    if (i === 'f0') return walkThen(entryX(c), sleep);
    if (i === 'f1') return walkThen(entryX(c), () => { S.screen = 'kitchen'; render(); });
    if (i === 'f2') return walkThen(entryX(c), () => { S.screen = 'craft'; render(); });
  }
}

// ---------- отклик на события боя ----------
function fx(kind) {
  if (kind === 'shake') {
    if (window.GL3D) GL3D.trigger('hero', 'hurt');
    [$('app'), $('hero-in')].forEach((el, i) => { const c = i ? 'hurt' : 'shake'; el.classList.remove(c); void el.getBoundingClientRect(); el.classList.add(c); setTimeout(() => el.classList.remove(c), 340); });
    return;
  }
  if (window.GL3D) GL3D.trigger('foe', 'hurt');
  const e = $('foe-in');
  e.classList.remove('hit'); void e.getBoundingClientRect(); e.classList.add('hit');
  setTimeout(() => e.classList.remove('hit'), 300);
}
function lunge(who) {
  if (window.GL3D) GL3D.trigger(who === 'hero' ? 'hero' : 'foe', 'attack');
  const el = $(who === 'hero' ? 'hero-in' : 'foe-in'), c = who === 'hero' ? 'lunge' : 'lunge-e';
  el.classList.remove(c); void el.getBoundingClientRect(); el.classList.add(c);
  setTimeout(() => el.classList.remove(c), 420);
}
function floatText(text, cls, where) {
  const t = document.createElementNS(NS, 'text');
  const x = (where === 'sc-enemy' ? FIGHT.fx : FIGHT.hx) + (Math.random() * 20 - 10);
  const y = (where === 'sc-enemy' ? FOE_Y : HERO_Y) - 150;
  t.setAttribute('x', x); t.setAttribute('y', y); t.setAttribute('class', 'ft ' + cls); t.setAttribute('text-anchor', 'middle');
  t.textContent = text; $('fl').appendChild(t);
  setTimeout(() => t.remove(), 950);
}

// ---------- отрисовка ----------
function enemyBox(name) {
  if (window.GL3D && GL3D.ready && GL3D.enabled) return GL3D.box(name);
  const d = ENEMY_ART[name] || ['blob', 'grey', 1.2], b = { rat: [50, 130], dog: [100, 140], human: [134, 100] }[d[0]] || [110, 100];
  return { h: b[0] * d[2], w: b[1] * d[2] };
}
function renderScene() {
  const hidden = ['start', 'help', 'settings', 'transfer'].includes(S.screen);
  $('scene').style.visibility = hidden ? 'hidden' : 'visible';
  if (hidden) { if (window.GL3D) GL3D.update({ visible: false }); return; }
  const fight = S.screen === 'fight' && !!S.enemy, inBase = !!S.inBase;
  const zone = zoneOf(S.floor), gl = window.GL3D && GL3D.ready && GL3D.enabled;
  const sc = $('scene');
  sc.className = (fight ? 'fight ' : '') + (S.screen === 'dead' ? 'dead ' : '') + (inBase ? 'base' : 'z' + zone) + (gl ? ' gl' : '');

  // новый этаж: герой выходит из лифта
  const rk = inBase ? 'base' + S.floor : S.rooms;
  if (sceneKey !== rk) {
    sceneKey = rk; sceneBusy = false; curComp = 2; revealing = -1;
    $('bg').innerHTML = svgBuilding(inBase, zone);
    // соседний этаж или убежище — этаж въезжает в кадр, будто едем вместе с кабиной
    const pf = prevFloor; prevFloor = { floor: S.floor, base: inBase };
    pendingSlide = !pf ? null : pf.base !== inBase && pf.floor === S.floor ? (inBase ? 'down' : 'up') : !inBase && !pf.base && S.floor - pf.floor === 1 ? 'up' : null;
    const wait = pendingSlide ? 1050 : 0, stairs = arriveBy === 'stairs' && !inBase; arriveBy = 'lift';
    introT.forEach(clearTimeout);
    if (stairs) {                                         // пришёл по лестнице: выходит из лестничного проёма
      heroX = HALL.x0 + 22; setHero(HALL.x0 + 22, false, true); $('hero').classList.add('boarding'); liftOpen = false;
      introT = [setTimeout(() => { $('hero').classList.remove('boarding'); $('hero').style.transitionDuration = '520ms'; setHero(HERO_HOME, true); }, wait + 60),
        setTimeout(() => { $('hero').classList.remove('walk'); introT = []; render(); }, wait + 620)];
    } else {
      heroX = LIFT_X; setHero(LIFT_X, false, true); $('hero').classList.add('boarding');
      liftOpen = !pendingSlide;
      introT = [setTimeout(() => { liftOpen = true; render(); }, Math.max(0, wait - 150)),
        setTimeout(() => { $('hero').classList.remove('boarding'); $('hero').style.transitionDuration = '650ms'; setHero(HERO_HOME, true); }, wait + 260),
        setTimeout(() => { $('hero').classList.remove('walk'); liftOpen = false; introT = []; render(); }, wait + 950)];
    }
  }
  // герой (запасная SVG-графика)
  const hk = S.wi + ':' + S.ai;
  if (heroKey !== hk) { heroKey = hk; $('hero-in').innerHTML = ART.hero(S.wi, S.ai); }
  // бой — в комнате, где стоит герой: герой у входа, враг в глубине
  const mode = fight ? 'fight' : 'floor', c = COMPS[curComp] || HALL;
  if (fight) {
    const left = leftOfHall(c);
    FIGHT.hx = left ? c.x1 - 48 : c.x0 + 48; FIGHT.fx = left ? c.x0 + 74 : c.x1 - 74; FIGHT.dir = left ? -1 : 1;
  }
  if (mode !== sceneMode) {
    sceneMode = mode;
    if (fight) { $('hero').style.transitionDuration = '300ms'; $('hero').classList.toggle('face-l', FIGHT.dir < 0); heroX = FIGHT.hx; $('hero').style.transform = `translate(${FIGHT.hx}px,${HERO_Y}px)`; }
  }
  $('hero-in').classList.toggle('dead', S.screen === 'dead');

  // зоны нажатия и значки известных комнат
  let marks = '';
  for (let i = 0; i < 3; i++) {
    const g = $('door' + i), r = S.rooms[i];
    g.style.display = (!inBase && !fight && r) ? '' : 'none';
    $('furn' + i).style.display = (inBase && !fight) ? '' : 'none';
    if (inBase || !r) continue;
    const cc = COMPS[roomComp(i)], known = r.known || r.type === 'locked';
    g.setAttribute('class', 'door' + (r.done ? ' done' : '') + (known && r.type === 'locked' ? ' locked' : ''));
    if (!r.done && !fight && revealing !== i) {
      const mx = (cc.x0 + cc.x1) / 2, my = FLOOR_Y - ROOM_H / 2;
      const icon = known && typeof ICO !== 'undefined' ? ICO[ROOM_ICON[r.type]] || '' : '';
      marks += `<g class="rmark" transform="translate(${mx} ${my})"><circle r="17" fill="rgba(10,10,12,.7)" stroke="rgba(230,220,190,.55)" stroke-width="1.5"/>` +
        (icon ? `<g transform="translate(-12 -12)" fill="none" stroke="${r.type === 'enemy' || r.type === 'trap' ? '#ff6a4a' : '#e8dcc0'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon}</g>` : '<text y="7" text-anchor="middle" font-size="20" font-weight="700" fill="#e8dcc0">?</text>') + '</g>';
    }
  }
  $('marks').innerHTML = marks;
  const lift = $('lift'), ok = inBase || (S.lift && S.lift.state === 'ok');
  lift.style.display = !fight ? '' : 'none';
  lift.setAttribute('class', 'lift ' + (ok ? 'ok' : 'broken'));

  // враг
  const foe = $('foe');
  foe.style.display = fight ? '' : 'none'; $('foe-o').style.display = fight ? '' : 'none';
  foe.style.transform = `translate(${FIGHT.fx}px,${FOE_Y}px)` + (FIGHT.dir < 0 ? ' scale(-1,1)' : ''); $('foe-o').style.transform = `translate(${FIGHT.fx}px,${FOE_Y}px)`;
  if (fight) {
    const e = S.enemy, fk = e.n + ':' + e.maxHp;
    if (foeKey !== fk) {
      foeKey = fk;
      $('foe-art').innerHTML = ART.enemy(e.n);
      const bx = enemyBox(e.n), H = bx.h, W = bx.w, hw = W / 2;
      const zones = [['head', -hw * .42, -H, hw * .84, H * .22], ['body', -hw * .5, -H * .78, hw, H * .34], ['legs', -hw * .5, -H * .44, hw, H * .44], ['armL', -hw, -H * .8, hw * .5, H * .36], ['armR', hw * .5, -H * .8, hw * .5, H * .36]];
      $('foe-zones').innerHTML = zones.map(([z, x, y, w, h]) => `<rect data-z="${z}" x="${x}" y="${y}" width="${w}" height="${h}" class="zn"/>`).join('');
    }
  } else { foeKey = ''; }
  // торговец в своей комнате
  let npc = null, npcX = 0, npcDir = -1;
  if (!inBase) S.rooms.forEach((r, i) => { if (r && r.type === 'trader' && r.done && !npc) { const cc = COMPS[roomComp(i)]; npc = 'trader'; npcX = leftOfHall(cc) ? cc.x0 + 70 : cc.x1 - 70; npcDir = leftOfHall(cc) ? 1 : -1; } });
  if (window.GL3D) GL3D.update({
    visible: true, layout: LAYOUT, floorKey: (inBase ? 'base' : 'z' + zone) + ':' + S.floor + ':' + (inBase ? '' : S.rooms.map(r => r && r.type).join(',')),
    zone: 'z' + zone, floor: S.floor, base: inBase, rooms: S.rooms, heroComp: curComp, revealing, liftOk: ok, liftOpen,
    wi: S.wi, ai: S.ai, enemy: fight ? S.enemy.n : null, foeX: FIGHT.fx, foeY: FOE_Y, foeDir: -FIGHT.dir, heroDir: FIGHT.dir, fight, dead: S.screen === 'dead',
    npc: fight ? null : npc, npcX, npcDir, slide: pendingSlide,
  });
  pendingSlide = null;
}
