'use strict';
// ===== Сцена: этаж башни в разрезе, как в Skyhill. Левая комната | лестничная клетка с лифтом | правая комната =====
// Мир задан в координатах SVG (y вниз). WebGL (chars3d.bundle.js) рисует здание, мебель и персонажей;
// SVG — зоны нажатия, всплывающие числа и простая графика, если WebGL недоступен; HTML-метки — значки над предметами.

const FLOOR_Y = 400, ROOM_H = 250, SLAB = 26, FLW = FLOOR_Y - 4;
const COMPS = [{ k: 'room', i: 0, x0: 0, x1: 280 }, { k: 'hall', x0: 288, x1: 628 }, { k: 'room', i: 1, x0: 636, x1: 916 }];
const HALL = COMPS[1], HX = HALL.x0, BX0 = -22, BX1 = 938;
const LY = { comps: COMPS, floorY: FLOOR_Y, roomH: ROOM_H, slab: SLAB, liftX: HX + 232, stairBot: HX + 118, stairTop: HX + 6, holeX0: HX, holeX1: HX + 46, vendX: HX + 308, exitX: HX + 274, bw: BX1 - BX0 };
const SPOT = { home: HX + 162, lift: LY.liftX, up: LY.stairBot + 8, down: HX + 22, vend: LY.vendX - 34, exit: LY.exitX + 31 };
const HERO_Y = FLW;
// куда ведёт нажатие в убежище
const BASE_USE = { sbed: 'bed', sstove: 'stove', sbench: 'bench', fridge: 'stove', wardrobe: 'inv', nightstand: 'diary' };
const BASE_ICON = { sbed: 'bed', sstove: 'pan', sbench: 'craft', fridge: 'pan', wardrobe: 'bag', nightstand: 'diary' };

let heroX = SPOT.home, cur = 1, sceneBusy = false, walkMs = 520, sceneKey = null, sceneMode = '', heroKey = '', foeKey = '';
let liftOpen = false, introT = [], prevFloor = null, pendingSlide = null, arriveBy = null, focus = null, hitKey = '';
const FIGHT = { hx: 0, fx: 0, dir: 1 };
try { if (localStorage.getItem('tower-fast') === '1') walkMs = 260; } catch (e) {}

const compOfLoc = loc => loc === 'hall' ? 1 : loc === 0 ? 0 : 2;
const locOfComp = ci => ci === 1 ? 'hall' : ci === 0 ? 0 : 1;
const roomMid = ci => (COMPS[ci].x0 + COMPS[ci].x1) / 2;
const doorX = (a, b) => a < b ? (COMPS[a].x1 + COMPS[b].x0) / 2 : (COMPS[b].x1 + COMPS[a].x0) / 2;
const furnOf = (ri, fi) => { const fd = S.floors[S.floor]; return fd && fd.rooms[ri] && fd.rooms[ri].furn[fi]; };
const furnBox = (ri, fi) => { const f = furnOf(ri, fi), c = COMPS[ri === 0 ? 0 : 2], d = FURN[f.k]; return { x0: c.x0 + f.x, x1: c.x0 + f.x + d.w, top: FLW - d.h, mid: c.x0 + f.x + d.w / 2 }; };

// ---------- камера: окно мира, общее для SVG и WebGL ----------
const VIEW = { x: 0, y: 160, w: 900, h: 340 };
window.VIEW = VIEW;
const CAM = { cx: null, hv: null, last: 0, key: '' };
function heroLive() {
  const el = document.getElementById('hero'); if (!el) return { x: heroX, y: HERO_Y };
  const t = getComputedStyle(el).transform;
  if (!t || t === 'none') return { x: heroX, y: HERO_Y };
  const m = new DOMMatrix(t); return { x: m.m41, y: m.m42 };
}
function camTick(ts) {
  requestAnimationFrame(camTick);
  const sc = document.getElementById('scene'); if (!sc) return;
  const W = sc.clientWidth, Hp = sc.clientHeight; if (!W || !Hp) return;
  const dt = Math.min(.1, CAM.last ? (ts - CAM.last) / 1000 : .016); CAM.last = ts;
  const a = W / Hp, fight = typeof S !== 'undefined' && S && S.screen === 'fight';
  const top = Hp > 500 ? 70 : 54, bottom = Hp > 500 ? 92 : 66;
  // на этаже виден весь этаж, в бою камера подъезжает к комнате
  const needW = fight ? 520 : BX1 - BX0 + 10, needH = fight ? ROOM_H * 1.12 : (ROOM_H + 2 * SLAB + 16) * Hp / Math.max(120, Hp - top - bottom);
  const want = Math.max(needH, needW / a);
  CAM.hv = CAM.hv == null ? want : CAM.hv + (want - CAM.hv) * Math.min(1, dt * 2.5);
  const hv = CAM.hv, wv = hv * a, u = hv / Hp;
  const pad = fight ? 160 : 30, lo = BX0 + wv / 2 - pad, hi = BX1 - wv / 2 + pad;
  let target = fight ? (FIGHT.hx + FIGHT.fx) / 2 : heroLive().x;
  target = lo > hi ? (BX0 + BX1) / 2 : Math.max(lo, Math.min(hi, target));
  if (CAM.cx == null) CAM.cx = target;
  CAM.cx += (target - CAM.cx) * Math.min(1, dt * 3);
  // в бою пол — сразу над панелью боя, на этаже — весь этаж между верхней и нижней панелями
  const yc = FLOOR_Y - ROOM_H / 2, k = Math.max(0, Math.min(1, (CAM.hv - ROOM_H * 1.12) / 60));
  VIEW.w = wv; VIEW.h = hv; VIEW.x = CAM.cx - wv / 2; VIEW.y = k * (yc - (Hp / 2 + (top - bottom) / 2) * u) + (1 - k) * (FLOOR_Y + 2 - (Hp - bottom - 4) * u);
  const vb = `${VIEW.x.toFixed(2)} ${VIEW.y.toFixed(2)} ${wv.toFixed(2)} ${hv.toFixed(2)}`;
  if (vb !== CAM.key) { CAM.key = vb; document.getElementById('sv').setAttribute('viewBox', vb); document.getElementById('ov').setAttribute('viewBox', vb); }
  placeTags(W, Hp);
}
requestAnimationFrame(camTick);
const toScreen = (wx, wy, W, Hp) => [(wx - VIEW.x) / VIEW.w * W, (wy - VIEW.y) / VIEW.h * Hp];

// ---------- метки над предметами (HTML: чёткие на любом экране) ----------
let TAGS = [];
function placeTags(W, Hp) {
  TAGS.forEach(t => {
    const p = t.at, [x, y] = toScreen(p[0], p[1], W, Hp);
    t.el.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
  });
}
function setTags(list) {
  const box = $('tags'), key = list.map(t => t.id + t.html + (t.cls || '')).join('|');
  if (box.dataset.key === key) return;
  box.dataset.key = key; box.innerHTML = '';
  TAGS = list.map(t => { const e = document.createElement('div'); e.className = 'tag ' + (t.cls || ''); e.innerHTML = t.html; box.appendChild(e); return Object.assign({}, t, { el: e }); });
  const sc = $('scene'); placeTags(sc.clientWidth, sc.clientHeight);
}
const tagIco = (name, extra = '') => `<span class="tc">${ico(name)}</span>${extra}`;
function buildTags() {
  const fd = S.floors[S.floor];
  if (S.screen !== 'play' || !fd) return setTags([]);
  const out = [], base = isBase();
  fd.rooms.forEach((r, ri) => {
    const ci = ri === 0 ? 0 : 2;
    if (!r.seen) { out.push({ id: 'r' + ri, at: [roomMid(ci), FLOOR_Y - ROOM_H / 2], html: `<b class="q">?</b><small>${ico('hunger')}−${COST.move}</small>`, cls: 'dark' }); return; }
    r.furn.forEach((f, fi) => {
      const d = FURN[f.k], bx = furnBox(ri, fi);
      if (base && BASE_ICON[f.k]) out.push({ id: `f${ri}.${fi}`, at: [bx.mid, bx.top - 12], html: tagIco(BASE_ICON[f.k]), cls: 'base' });
      else if (!f.s && d.loot) out.push({ id: `f${ri}.${fi}`, at: [bx.mid, bx.top - 12], html: tagIco('search'), cls: 'loot' });
    });
    if (r.npc && !r.npc.done) out.push({ id: 'n' + ri, at: [npcSpot(ri).x, FLW - 172], html: '<b class="q">!</b>', cls: 'npc' });
  });
  if (!base) out.push({ id: 'up', at: [HX + 60, FLW - 128], html: tagIco('arrowUp', `<i>${S.floor + 1}</i>`), cls: 'stair' });
  if (S.floor > 1) out.push({ id: 'down', at: [SPOT.down, FLW - 60], html: tagIco('arrowDown', `<i>${S.floor - 1}</i>`), cls: 'stair' });
  out.push({ id: 'lift', at: [LY.liftX, FLW - 178], html: tagIco('lift'), cls: fd.lift === 'ok' ? 'ok' : 'broken' });
  if (fd.vend && !fd.vend.used) out.push({ id: 'vend', at: [LY.vendX, FLW - 116], html: tagIco('cup'), cls: 'loot' });
  if (S.floor === 1) out.push({ id: 'exit', at: [SPOT.exit, FLW - 176], html: tagIco('exit', '<i>Выход</i>'), cls: 'exit' });
  setTags(out);
}

// ---------- зоны нажатия ----------
const NS = 'http://www.w3.org/2000/svg';
function svgEl(tag, attrs, parent) { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; }
function initScene() {
  const sv = $('sv');
  sv.setAttribute('preserveAspectRatio', 'xMidYMid meet'); $('ov').setAttribute('preserveAspectRatio', 'xMidYMid meet');
  sv.innerHTML = ART.defs + '<g id="bg"></g><g id="hits"></g><g id="foe"><g id="foe-in"><g id="foe-art"></g></g></g><g id="hero"><g id="hero-in"></g></g>';
  $('ov').innerHTML = '<g id="fl"></g>';
  $('hero').style.transform = `translate(${SPOT.home}px,${HERO_Y}px)`;
  $('hits').addEventListener('click', ev => {
    const t = ev.target.closest && ev.target.closest('[data-a]'); if (!t) return;
    sceneTap(t.dataset.a, t.dataset.r != null ? +t.dataset.r : null, t.dataset.f != null ? +t.dataset.f : null);
  });
}
function buildHits() {
  const fd = S.floors[S.floor]; if (!fd) return;
  const key = S.floor + ':' + S.screen + ':' + (S.enemy ? S.enemy.room : '') + ':' + fd.rooms.map(r => (r.seen ? 1 : 0) + '' + r.furn.length).join(',');
  if (key === hitKey) return; hitKey = key;
  const g = $('hits'); g.innerHTML = '';
  const R = (a, x, y, w, h, extra = {}) => svgEl('rect', Object.assign({ x, y, width: w, height: h, fill: '#fff', 'fill-opacity': '0.001', 'data-a': a, class: 'hit' }, extra), g);
  if (S.screen === 'fight') { R('foe', FIGHT.fx - 70, FLW - 175, 140, 180); return; }
  COMPS.forEach((c, ci) => R(ci === 1 ? 'hall' : 'room', c.x0, FLOOR_Y - ROOM_H, c.x1 - c.x0, ROOM_H, ci === 1 ? {} : { 'data-r': ci === 0 ? 0 : 1 }));
  if (S.floor < TOP) { R('up', HX, FLOOR_Y - ROOM_H, 140, ROOM_H - 74); R('up', HX + 50, FLW - 74, 90, 78); }
  if (S.floor > 1) R('down', HX, FLW - 74, 50, 84);
  R('lift', LY.liftX - 44, FLW - 196, 88, 200);
  if (fd.vend) R('vend', LY.vendX - 28, FLW - 106, 56, 110);
  if (S.floor === 1) R('exit', LY.exitX - 6, FLW - 160, 76, 164);
  fd.rooms.forEach((r, ri) => { if (!r.seen) return; r.furn.forEach((f, fi) => { const b = furnBox(ri, fi); R('furn', b.x0 - 4, b.top - 24, b.x1 - b.x0 + 8, FLW - b.top + 28, { 'data-r': ri, 'data-f': fi }); }); });
}

// ---------- заставки ----------
let cardT = 0;
function showCard(big, small, text) {
  const c = $('card'); if (!c) return;
  c.querySelector('b').textContent = big; c.querySelector('small').textContent = small; c.querySelector('p').textContent = text || '';
  c.className = 'show' + (text ? ' zone' : '');
  clearTimeout(cardT); cardT = setTimeout(() => { c.className = ''; }, text ? 3600 : 1700);
}
function fadeThen(caption, fn, hold = 900) {
  const f = $('fade'); f.querySelector('span').textContent = caption; f.className = 'on'; sceneBusy = true;
  setTimeout(() => { fn(); f.className = 'on cap'; }, 700);
  setTimeout(() => { f.className = ''; sceneBusy = false; }, 700 + hold + 500);
}

// ---------- подсказки первого забега: по одной и только один раз ----------
const playing = () => S && S.screen === 'play' && !sceneBusy;
const TIPS = [
  { id: 'base', when: () => playing() && isBase(), at: () => { const b = furnBox(0, 1); return [b.mid, b.top - 34]; }, t: 'Твоё убежище. Кровать лечит, плита готовит еду, верстак делает оружие. Нажми на них' },
  { id: 'down', when: () => playing() && isBase() && meta.tips.base, at: () => [SPOT.down + 10, FLW - 92], t: 'Лестница вниз — к выходу на первом этаже. Спуск стоит 3 сытости' },
  { id: 'room', when: () => playing() && !isBase() && S.floors[S.floor].rooms.some(r => !r.seen), at: () => { const ri = S.floors[S.floor].rooms.findIndex(r => !r.seen); return [roomMid(ri === 0 ? 0 : 2), FLOOR_Y - ROOM_H / 2 - 30]; }, t: 'Нажми на тёмную комнату — герой войдёт и осмотрит её. Переход стоит 2 сытости' },
  { id: 'furn', when: () => playing() && !isBase() && S.loc !== 'hall' && room(S.loc).furn.some(f => !f.s && FURN[f.k].loot), at: () => { const fi = room(S.loc).furn.findIndex(f => !f.s && FURN[f.k].loot), b = furnBox(S.loc, fi); return [b.mid, b.top - 30]; }, t: 'Нажми на мебель — герой обыщет её. Найденное попадёт в рюкзак' },
  { id: 'lift', when: () => playing() && !isBase() && S.floors[S.floor].lift !== 'ok' && S.floor < TOP - 2, at: () => [LY.liftX, FLW - 204], t: 'Сломанный лифт чинится проводами и изолентой. На исправном можно вернуться в убежище' },
  { id: 'bag', when: () => playing() && S.floor < TOP - 1, el: () => document.querySelector('#dock .bag'), t: 'Рюкзак: еда, лечение, вещи, создание и характеристики' },
  { id: 'aim', when: () => S && S.screen === 'fight' && !S.busy, el: () => document.querySelector('#dock .aimbtn'), t: 'Нажми на прицел и выбери, куда бить: в голову — больно, но часто мимо' },
];
let tipT = 0, tipOn = null;
function hideTip() { const el = $('tip'); if (el) el.className = ''; tipOn = null; }
function maybeTip() {
  if (tipOn) { const t = TIPS.find(x => x.id === tipOn); if (t && !t.when()) hideTip(); return; }
  if (sceneBusy || !meta || !S || S.over) return;
  meta.tips = meta.tips || {};
  const tp = TIPS.find(x => !meta.tips[x.id] && x.when());
  if (!tp) return;
  const el = $('tip'), sc = $('scene').getBoundingClientRect();
  let x, y;
  if (tp.el) { const e = tp.el(); if (!e) return; const r = e.getBoundingClientRect(); x = r.left + r.width / 2 - sc.left; y = r.top - sc.top - 10; }
  else { const p = tp.at(); [x, y] = toScreen(p[0], p[1], sc.width, sc.height); }
  meta.tips[tp.id] = 1; saveMeta(); tipOn = tp.id;
  el.querySelector('span').textContent = tp.t;
  const cx = Math.max(120, Math.min(sc.width - 120, x));
  el.style.left = cx + 'px'; el.style.top = Math.max(70, y) + 'px'; el.style.setProperty('--ax', (x - cx) + 'px');
  el.className = 'show';
  clearTimeout(tipT); tipT = setTimeout(hideTip, 7000);
}
document.addEventListener('pointerdown', () => { if (tipOn) setTimeout(hideTip, 150); }, true);
setInterval(() => { try { if (S && $('scene').style.visibility !== 'hidden') maybeTip(); } catch (e) {} }, 1200);

// ---------- перемещение героя ----------
function setHero(x, y = HERO_Y, walking = false, instant = false, ms) {
  const h = $('hero');
  h.style.transition = instant ? 'none' : '';
  if (ms != null) h.style.transitionDuration = ms + 'ms';
  if (Math.abs(x - heroX) > .5) h.classList.toggle('face-l', x < heroX);
  h.classList.toggle('walk', !!walking);
  heroX = x; h.style.transform = `translate(${x}px,${y}px)`;
  if (instant) { void h.getBoundingClientRect(); h.style.transition = ''; }
}
function clearIntro() { introT.forEach(clearTimeout); introT = []; $('hero').classList.remove('boarding'); }
// шаг до x в пределах этажа, затем fn
function walk(x, fn) {
  if (Math.abs(x - heroX) < 2) { fn(); return; }
  const ms = Math.max(160, Math.abs(x - heroX) * walkMs / 170);
  setHero(x, HERO_Y, true, false, ms);
  const steps = setInterval(() => sfx('step'), 230);
  setTimeout(() => { clearInterval(steps); $('hero').classList.remove('walk'); fn(); }, ms + 30);
}
// дойти до отсека ci через двери (каждый переход стоит сытости), затем до x и выполнить fn
function goTo(ci, x, fn) {
  if (sceneBusy || S.screen !== 'play') return;
  sceneBusy = true; clearIntro(); liftOpen = false; focus = null;
  const step = () => {
    if (S.screen !== 'play') { sceneBusy = false; render(); return; }          // начался бой, разговор или смерть
    if (cur === ci) return walk(x, () => { sceneBusy = false; if (fn) fn(); else render(); });
    const nxt = cur + (ci > cur ? 1 : -1);
    walk(doorX(cur, nxt), () => {
      cur = nxt; const f0 = S.food, h0 = S.hp; sfx('door');
      enterComp(locOfComp(nxt));
      costFx(f0, h0);
      step();
    });
  };
  step();
}
function costFx(f0, h0) { const df = f0 - S.food; if (df > 0) floatText(`−${df}`, 'food', 'sc-hero'); else if (h0 - S.hp > 0) floatText(`−${h0 - S.hp}`, 'pdmg', 'sc-hero'); }
function searchAnim(ri, fi) {
  sceneBusy = true; focus = { ri, fi }; renderScene();
  if (window.GL3D) GL3D.trigger('hero', 'search');
  setTimeout(() => { sceneBusy = false; focus = null; searchFurn(ri, fi); }, 650);
}
// лестница: подъём по маршу налево вверх / спуск в проём
function climb(dir) {
  goTo(1, dir > 0 ? SPOT.up : SPOT.down + 8, () => {
    const f0 = S.food, h0 = S.hp, h = $('hero'); sceneBusy = true;
    if (dir > 0) { setHero(LY.stairTop + 14, HERO_Y - ROOM_H - 12, true, false, 1200); h.classList.add('face-l'); }
    else { setHero(HX + 70, HERO_Y + 92, true, false, 900); h.classList.remove('face-l'); }
    const steps = setInterval(() => sfx('step'), 190);
    setTimeout(() => { clearInterval(steps); sceneBusy = false; arriveBy = dir > 0 ? 'below' : 'above'; useStairs(dir); costFx(f0, h0); }, dir > 0 ? 1220 : 920);
  });
}
// лифт: кабина открывается, герой входит, двери закрываются — и этаж меняется
function liftTrip(fn, dir) {
  sceneBusy = true; clearIntro();
  const go = () => {
    sfx('ding'); liftOpen = true; renderScene();
    setTimeout(() => { $('hero').classList.add('boarding'); }, 380);
    setTimeout(() => { liftOpen = false; renderScene(); }, 800);
    setTimeout(() => { sceneBusy = false; arriveBy = 'lift:' + dir; fn(); }, 1080);
  };
  if (Math.abs(heroX - SPOT.lift) > 4 || cur !== 1) { cur = 1; walk(SPOT.lift, go); } else go();
}
function sceneTap(a, ri, fi) {
  if (sceneBusy || !S) return;
  if (S.screen === 'fight') { if (a === 'foe' && !S.busy) { sfx('click'); openAim(); } return; }
  if (S.screen !== 'play') return;
  const fd = S.floors[S.floor];
  sfx('click');
  if (a === 'room') {
    const ci = ri === 0 ? 0 : 2, r = fd.rooms[ri];
    if (r.npc && !r.npc.done && r.seen) return goTo(ci, npcSpot(ri).x + (ri === 0 ? 50 : -50), () => { S.screen = 'npc'; render(); });
    return goTo(ci, cur === ci ? heroX : roomMid(ci));
  }
  if (a === 'hall') return goTo(1, cur === 1 ? heroX : SPOT.home);
  if (a === 'furn') {
    const f = fd.rooms[ri].furn[fi], b = furnBox(ri, fi), ci = ri === 0 ? 0 : 2;
    if (isBase() && BASE_USE[f.k]) return goTo(ci, b.mid, () => { S.screen = BASE_USE[f.k]; render(); });
    if (f.s || !FURN[f.k].loot) return goTo(ci, b.mid);
    return goTo(ci, b.mid, () => searchAnim(ri, fi));
  }
  if (a === 'up') return climb(1);
  if (a === 'down') return climb(-1);
  if (a === 'lift') return goTo(1, SPOT.lift, () => openLift());
  if (a === 'vend') return goTo(1, SPOT.vend, () => { if (!fd.vend.used) S.screen = 'vend'; render(); });
  if (a === 'exit') return goTo(1, SPOT.exit, () => fadeThen('Ворота парковки поддаются…', exitTower, 700));
}

// ---------- отклик на события боя и находки ----------
function fx(kind) {
  if (kind === 'shake') {
    if (window.GL3D) GL3D.trigger('hero', 'hurt');
    [$('app'), $('hero-in')].forEach((el, i) => { const c = i ? 'hurt' : 'shake'; el.classList.remove(c); void el.getBoundingClientRect(); el.classList.add(c); setTimeout(() => el.classList.remove(c), 340); });
    return;
  }
  if (window.GL3D) GL3D.trigger('foe', 'hurt');
  const e = $('foe-in'); e.classList.remove('hit'); void e.getBoundingClientRect(); e.classList.add('hit'); setTimeout(() => e.classList.remove('hit'), 300);
}
function lunge(who) {
  if (window.GL3D) GL3D.trigger(who === 'hero' ? 'hero' : 'foe', 'attack');
  const el = $(who === 'hero' ? 'hero-in' : 'foe-in'), c = who === 'hero' ? 'lunge' : 'lunge-e';
  el.classList.remove(c); void el.getBoundingClientRect(); el.classList.add(c);
  setTimeout(() => el.classList.remove(c), 420);
}
function floatText(text, cls, where) {
  const t = document.createElementNS(NS, 'text'), fight = S && S.screen === 'fight', hp = heroLive();
  const x = (where === 'sc-enemy' ? FIGHT.fx : fight ? FIGHT.hx : hp.x) + (Math.random() * 20 - 10), y = (where === 'sc-enemy' ? FLW : fight ? HERO_Y : hp.y) - 160;
  t.setAttribute('x', x); t.setAttribute('y', y); t.setAttribute('class', 'ft ' + cls); t.setAttribute('text-anchor', 'middle');
  t.textContent = text; $('fl').appendChild(t);
  if (cls === 'crit' && window.GL3D) GL3D.trigger('foe', 'shake');
  setTimeout(() => t.remove(), 1000);
}
// найденные вещи взлетают над мебелью и улетают в рюкзак
function pickupFx(got, ri, fi) {
  const sc = $('scene'), W = sc.clientWidth, Hp = sc.clientHeight;
  let wx, wy;
  if (ri === 'vend') { wx = LY.vendX; wy = FLW - 100; } else { const b = furnBox(ri, fi); wx = b.mid; wy = b.top; }
  const [x, y] = toScreen(wx, wy, W, Hp), sr = sc.getBoundingClientRect();
  got.forEach((id, i) => {
    const e = document.createElement('div'); e.className = 'pick';
    e.innerHTML = id === 'note' ? `<span class="nt">${ico('diary')}</span>` : iconImg(id);
    const px = x + (i - (got.length - 1) / 2) * 50;
    e.style.left = px + 'px'; e.style.top = y + 'px'; e.style.animationDelay = (i * 90) + 'ms';
    sc.appendChild(e);
    setTimeout(() => {
      const bag = document.querySelector('#dock .bag'), br = bag && bag.getBoundingClientRect();
      if (br && br.width) { e.style.transition = 'transform .55s cubic-bezier(.5,0,.8,.4), opacity .55s'; e.style.transform = `translate(${br.left - sr.left + br.width / 2 - px}px,${br.top - sr.top + br.height / 2 - y}px) scale(.35)`; e.style.opacity = '.2'; }
      setTimeout(() => { e.remove(); if (bag) { bag.classList.remove('got'); void bag.offsetWidth; bag.classList.add('got'); } }, 560);
    }, 1050 + i * 90);
  });
}

// ---------- отрисовка ----------
function npcSpot(ri) { const c = COMPS[ri === 0 ? 0 : 2]; return { x: ri === 0 ? c.x0 + 74 : c.x1 - 74, dir: ri === 0 ? 1 : -1 }; }
// плоская запасная графика (если нет WebGL)
function svgBuilding(fd, zone) {
  const pal = ['#3d4540', '#5a4a48', '#5a626a', '#7c938d', '#3c2f44'][zone] || '#4c3a48', inBase = isBase();
  let s = `<rect x="${BX0 - 400}" y="${FLOOR_Y - ROOM_H * 3}" width="${BX1 - BX0 + 800}" height="${ROOM_H * 6}" fill="#0b0e14"/>`;
  s += `<rect x="${BX0}" y="${FLOOR_Y - ROOM_H - SLAB}" width="${BX1 - BX0}" height="${ROOM_H + SLAB * 2}" fill="#101113"/>`;
  COMPS.forEach((c, ci) => {
    const r = ci === 1 ? null : fd.rooms[ci === 0 ? 0 : 1], dark = r && !r.seen && !inBase;
    s += `<rect x="${c.x0}" y="${FLOOR_Y - ROOM_H}" width="${c.x1 - c.x0}" height="${ROOM_H}" fill="${dark ? '#050506' : inBase ? '#5c4430' : ci === 1 ? '#3a3e3c' : pal}"/>`;
    if (r && !dark) r.furn.forEach(f => { const d = FURN[f.k]; s += `<rect x="${c.x0 + f.x}" y="${FLW - d.h}" width="${d.w}" height="${d.h}" rx="3" fill="${f.s ? '#2a2420' : '#5a4632'}" stroke="#111"/>`; });
  });
  s += `<path d="M${LY.stairBot} ${FLW} L${LY.stairTop} ${FLOOR_Y - ROOM_H}" stroke="#20242a" stroke-width="14"/><rect x="${LY.liftX - 34}" y="${FLW - 124}" width="68" height="124" fill="${fd.lift === 'ok' ? '#7a8086' : '#5a3a30'}" stroke="#222"/>`;
  s += `<text x="${LY.liftX}" y="${FLW - 140}" text-anchor="middle" font-size="40" font-weight="700" fill="rgba(230,226,214,.3)">${S.floor}</text>`;
  return s;
}
function renderScene() {
  const hidden = ['start', 'help', 'settings', 'transfer'].includes(S.screen);
  $('scene').style.visibility = hidden ? 'hidden' : 'visible';
  if (hidden) { if (window.GL3D) GL3D.update({ visible: false }); setTags([]); return; }
  const fd = S.floors[S.floor]; if (!fd) return;
  const fight = S.screen === 'fight' && !!S.enemy, inBase = isBase(), zone = zoneOf(S.floor), gl = window.GL3D && GL3D.ready && GL3D.enabled;
  $('scene').className = (fight ? 'fight ' : '') + (S.screen === 'dead' ? 'dead ' : '') + (inBase ? 'base' : 'z' + zone) + (gl ? ' gl' : '');

  // новый этаж: этаж въезжает в кадр, герой выходит из лифта или с лестницы
  if (sceneKey !== S.floor) {
    sceneKey = S.floor; sceneBusy = false; hitKey = '';
    $('bg').innerHTML = svgBuilding(fd, zone);
    const pf = prevFloor; prevFloor = S.floor;
    const how = arriveBy; arriveBy = null;
    pendingSlide = pf == null ? null : how === 'below' ? 'up' : how === 'above' ? 'down' : how && how.startsWith('lift') ? how.slice(5) : S.floor > pf ? 'up' : 'down';
    const wait = pendingSlide ? 1050 : 0;
    if (inBase) showCard('Убежище', 'сотый этаж');
    else { const nz = S.floor % 20 === 0 && pf != null && S.floor < pf; showCard(String(S.floor), ZONES[zone].name, nz ? ZONES[zone].intro : ''); }
    clearIntro();
    cur = compOfLoc(S.loc); const h = $('hero');
    if (S.loc !== 'hall') setHero(roomMid(cur), HERO_Y, false, true);
    else if (how === 'below') {                         // поднялся снизу: выходит из лестничного проёма
      setHero(HX + 64, HERO_Y + 80, false, true); h.classList.add('boarding');
      introT = [setTimeout(() => { h.classList.remove('boarding'); setHero(HX + 14, HERO_Y, true, false, 700); h.classList.add('face-l'); }, wait),
        setTimeout(() => setHero(SPOT.home, HERO_Y, true, false, 640), wait + 720), setTimeout(() => { h.classList.remove('walk'); introT = []; }, wait + 1380)];
    } else if (how === 'above') {                       // спустился сверху: сходит по маршу
      setHero(LY.stairTop + 14, HERO_Y - ROOM_H - 12, false, true); h.classList.add('boarding');
      introT = [setTimeout(() => { h.classList.remove('boarding'); setHero(SPOT.up, HERO_Y, true, false, 1100); }, wait),
        setTimeout(() => setHero(SPOT.home, HERO_Y, true, false, 300), wait + 1120), setTimeout(() => { h.classList.remove('walk'); introT = []; }, wait + 1440)];
    } else if (how && how.startsWith('lift')) {         // приехал на лифте
      setHero(SPOT.lift, HERO_Y, false, true); h.classList.add('boarding'); liftOpen = false;
      introT = [setTimeout(() => { liftOpen = true; sfx('ding'); renderScene(); }, Math.max(0, wait - 100)),
        setTimeout(() => { h.classList.remove('boarding'); setHero(SPOT.home, HERO_Y, true, false, 520); }, wait + 320),
        setTimeout(() => { h.classList.remove('walk'); liftOpen = false; introT = []; renderScene(); }, wait + 900)];
    } else setHero(SPOT.home, HERO_Y, false, true);
  } else if (!sceneBusy && !fight && S.screen === 'play' && compOfLoc(S.loc) !== cur) {
    // сбежал из боя на лестничную клетку
    cur = compOfLoc(S.loc); sceneBusy = true; walk(cur === 1 ? SPOT.home : roomMid(cur), () => { sceneBusy = false; });
  }
  // герой (запасная SVG-графика)
  const look = heroLook(), hk = look.wi + ':' + look.ai;
  if (heroKey !== hk) { heroKey = hk; $('hero-in').innerHTML = ART.hero(look.wi, look.ai); }
  // бой в комнате: герой у двери, враг в глубине
  if (fight) {
    const ri = S.enemy.room, c = COMPS[ri === 0 ? 0 : 2], left = ri === 0;
    FIGHT.hx = left ? c.x1 - 84 : c.x0 + 84; FIGHT.fx = left ? c.x0 + 96 : c.x1 - 96; FIGHT.dir = left ? -1 : 1;
  }
  const mode = fight ? 'fight' : 'floor';
  if (mode !== sceneMode) {
    sceneMode = mode;
    if (fight) { clearIntro(); cur = S.enemy.room === 0 ? 0 : 2; setHero(FIGHT.hx, HERO_Y, false, false, 300); $('hero').classList.toggle('face-l', FIGHT.dir < 0); }
  }
  $('hero-in').classList.toggle('dead', S.screen === 'dead');
  buildHits(); buildTags();
  // враг (запасная графика)
  const foe = $('foe');
  foe.style.display = fight ? '' : 'none';
  foe.style.transform = `translate(${FIGHT.fx}px,${FLW}px)` + (FIGHT.dir < 0 ? ' scale(-1,1)' : '');
  if (fight) { if (foeKey !== S.enemy.n) { foeKey = S.enemy.n; $('foe-art').innerHTML = ART.enemy(S.enemy.n); } } else foeKey = '';
  // выживший стоит в своей комнате
  let npc = null, np = null;
  if (!inBase && !fight) fd.rooms.forEach((r, ri) => { if (r.npc && r.seen && !npc) { npc = 'trader'; np = npcSpot(ri); } });
  if (window.GL3D) GL3D.update({
    visible: true, layout: LY, catalog: FURN,
    floorKey: S.floor + ':' + (inBase ? [S.bed, S.kitchen, S.bench].join('/') : zone),
    levels: { bed: S.bed, stove: S.kitchen, bench: S.bench },
    zone: 'z' + zone, floor: S.floor, base: inBase, top: S.floor === TOP, exit: S.floor === 1, rooms: fd.rooms, vend: fd.vend, vendUsed: !!(fd.vend && fd.vend.used),
    heroComp: cur, focus, liftOk: fd.lift === 'ok', liftOpen,
    wi: look.wi, ai: look.ai, enemy: fight ? S.enemy.n : null, foeX: FIGHT.fx, foeY: FLW, foeDir: -FIGHT.dir, heroDir: FIGHT.dir, fight, dead: S.screen === 'dead',
    npc, npcX: np ? np.x : 0, npcDir: np ? np.dir : 1, slide: pendingSlide,
  });
  pendingSlide = null;
}
