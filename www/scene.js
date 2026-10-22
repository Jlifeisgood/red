'use strict';
// ===== Сцена: вид сбоку на SVG. Герой ходит по этажу, враги стоят справа =====

const FLOOR_Y = 340;
const DOOR_CX = [50, 140, 230];
const LIFT_CX = 318;
const FURN_CX = [62, 169, 261];
const HERO_HOME = 46, HERO_BASE = 104, HERO_FIGHT = 96, FOE_X = 270, HERO_Y = 352, FOE_Y = 349;
const ROOM_ICON = { loot: '📦', enemy: '☠', rest: '🛏', trap: '⚠', trader: '🧳', event: '❓', empty: '·', vending: '🥤', locked: '🔒' };
const SCREEN_ICON = { vending: '🥤', trader: '🧳', event: '❓', locked: '🔒' };
const KIND_BOX = { rat: [50, 130], dog: [100, 140], bat: [112, 150], blob: [78, 100], drone: [132, 110], human: [134, 100], robot: [154, 100], ghost: [128, 90], chimera: [122, 150], brute: [136, 130], bug: [52, 130] };

let heroX = HERO_HOME, sceneBusy = false, sceneKey = null, sceneMode = '', bgKey = '', heroKey = '', foeKey = '', walkMs = 520;
try { if (localStorage.getItem('tower-fast') === '1') walkMs = 260; } catch (e) {}

const $svg = id => document.getElementById(id);

function initScene() {
  const sv = $('sv');
  sv.innerHTML = ART.defs + '<g id="bg"></g><g id="doors"></g><g id="furns"></g><g id="liftg"></g><g id="foe"><g id="foe-in"><g id="foe-art"></g></g></g><g id="hero"><g id="hero-in"></g></g>';
  $('ov').innerHTML = '<g id="foe-o"><g id="foe-ui"></g><g id="foe-zones"></g></g><g id="fl"></g>';
  const hit = '<rect x="-48" y="-170" width="96" height="170" fill="#fff" fill-opacity="0.001"/>';
  DOOR_CX.forEach((x, i) => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'door'); g.setAttribute('id', 'door' + i);
    g.style.transform = `translate(${x}px,${FLOOR_Y}px)`;
    g.innerHTML = ART.door(i + 1) + hit;
    g.onclick = () => sceneTap(i);
    $('doors').appendChild(g);
  });
  const lg = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  lg.setAttribute('class', 'lift'); lg.setAttribute('id', 'lift');
  lg.style.transform = `translate(${LIFT_CX}px,${FLOOR_Y}px)`;
  lg.innerHTML = ART.lift() + hit; lg.onclick = () => sceneTap('lift');
  $('liftg').appendChild(lg);
  FURN_CX.forEach((x, i) => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'furn'); g.setAttribute('id', 'furn' + i);
    g.style.transform = `translate(${x}px,${FLOOR_Y}px)`;
    g.innerHTML = ART.furn[i] + '<rect x="-56" y="-140" width="112" height="140" fill="#fff" fill-opacity="0.001"/>';
    g.onclick = () => sceneTap('f' + i);
    $('furns').appendChild(g);
  });
  $('foe').style.transform = `translate(${FOE_X}px,${FOE_Y}px)`; $('foe-o').style.transform = `translate(${FOE_X}px,${FOE_Y}px)`;
  $('hero').style.transform = `translate(${HERO_HOME}px,${HERO_Y}px)`;
  $('foe-zones').addEventListener('click', ev => {
    const z = ev.target.getAttribute && ev.target.getAttribute('data-z');
    if (!z || S.screen !== 'fight') return;
    sfx('click'); attack(z.startsWith('arm') ? 'arms' : z);
  });
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
  const ms = Math.max(240, Math.abs(x - heroX) * walkMs / 100);
  $('hero').style.transitionDuration = ms + 'ms';
  setHero(x, true);
  const steps = setInterval(() => sfx('step'), 230);
  setTimeout(() => { clearInterval(steps); sceneBusy = false; $('hero').classList.remove('walk'); fn(); }, ms + 30);
}
function enterDoor(i) {
  const r = S.rooms[i];
  if (S.screen !== 'map' || !r || r.done) return;
  walkThen(DOOR_CX[i] + 4, () => {
    sfx('door'); const d = $('door' + i); d.classList.add('open'); setTimeout(() => d.classList.remove('open'), 500);
    openRoom(i);
  });
}
function rideAnim() {
  if (S.screen !== 'map' || !S.lift || S.lift.state !== 'ok') return;
  walkThen(LIFT_CX - 8, () => {
    sfx('ding'); const l = $('lift'); l.classList.add('open'); setTimeout(() => l.classList.remove('open'), 600);
    $('hero').classList.add('boarding');
    setTimeout(() => $('hero').classList.remove('boarding'), 600);
    ride();
  });
}
function sceneTap(i) {
  if (sceneBusy) return;
  if (S.screen === 'map') {
    if (i === 'lift') {
      if (S.lift && S.lift.state === 'ok') rideAnim();
      else walkThen(LIFT_CX - 40, () => { S.screen = 'liftmenu'; render(); });
      return;
    }
    if (typeof i === 'number') enterDoor(i);
  } else if (S.screen === 'base' && S.inBase) {
    if (i === 'lift') return walkThen(LIFT_CX - 8, returnUp);
    if (i === 'f0') return walkThen(FURN_CX[0] + 30, sleep);
    if (i === 'f1') return walkThen(FURN_CX[1], () => { S.screen = 'kitchen'; render(); });
    if (i === 'f2') return walkThen(FURN_CX[2], () => { S.screen = 'craft'; render(); });
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
  const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  const x = where === 'sc-enemy' ? FOE_X + (Math.random() * 24 - 12) : HERO_FIGHT + (Math.random() * 20 - 10);
  const y = where === 'sc-enemy' ? FOE_Y - 140 : HERO_Y - 140;
  t.setAttribute('x', x); t.setAttribute('y', y); t.setAttribute('class', 'ft ' + cls); t.setAttribute('text-anchor', 'middle');
  t.textContent = text; $('fl').appendChild(t);
  setTimeout(() => t.remove(), 950);
}

// ---------- отрисовка ----------
function enemyBox(name) {
  const d = ENEMY_ART[name] || ['blob', 'grey', 1.2], b = KIND_BOX[d[0]] || [100, 100];
  return { h: b[0] * d[2], w: b[1] * d[2] };
}
function renderScene() {
  const hidden = ['start', 'help', 'settings', 'transfer'].includes(S.screen);
  $('scene').style.visibility = hidden ? 'hidden' : 'visible';
  if (hidden) { if (window.GL3D) GL3D.update({ visible: false }); return; }
  const fight = S.screen === 'fight' && !!S.enemy, inBase = !!S.inBase;
  const zone = zoneOf(S.floor), key = inBase ? 'base' : 'z' + zone;
  if (bgKey !== key) { bgKey = key; $('bg').innerHTML = inBase ? ART.base() : ART.bg[zone](); }
  const sc = $('scene');
  sc.className = (fight ? 'fight ' : '') + (S.screen === 'dead' ? 'dead ' : '') + (SCREEN_ICON[S.screen] ? 'dim ' : '') + (inBase ? 'base' : 'z' + zone) + (window.GL3D && GL3D.ready && GL3D.enabled ? ' gl' : '');

  // герой
  const hk = S.wi + ':' + S.ai;
  if (heroKey !== hk) { heroKey = hk; $('hero-in').innerHTML = ART.hero(S.wi, S.ai); }
  const rk = inBase ? 'base' : S.rooms;
  if (sceneKey !== rk) {                                   // новый этаж: герой входит слева
    sceneKey = rk; sceneBusy = false; heroX = -40; setHero(-40, false, true);
    $('hero').style.transitionDuration = '700ms'; setTimeout(() => setHero(inBase ? HERO_BASE : HERO_HOME, true), 30);
    setTimeout(() => $('hero').classList.remove('walk'), 760);
  }
  const mode = fight ? 'fight' : 'floor';
  if (mode !== sceneMode) {
    sceneMode = mode;
    if (fight) { $('hero').style.transitionDuration = '300ms'; $('hero').classList.remove('face-l'); $('hero').style.transform = `translate(${HERO_FIGHT}px,${HERO_Y}px)`; }
    else { $('hero').style.transform = `translate(${heroX}px,${HERO_Y}px)`; }
  }
  $('hero-in').classList.toggle('dead', S.screen === 'dead');

  // двери, лифт, мебель
  for (let i = 0; i < 3; i++) {
    const g = $('door' + i), r = S.rooms[i];
    g.style.display = (!inBase && !fight && r) ? '' : 'none';
    if (!r) continue;
    const known = r.done || r.known;
    g.setAttribute('class', 'door' + (r.done ? ' done' : '') + (known && r.type === 'locked' ? ' locked' : ''));
    g.querySelector('.ric').textContent = known ? (ROOM_ICON[r.type] || '') : '';
    $('furn' + i).style.display = (inBase && !fight) ? '' : 'none';
  }
  const lift = $('lift'), ok = inBase || (S.lift && S.lift.state === 'ok');
  lift.style.display = (!fight && (inBase || S.lift)) ? '' : 'none';
  lift.setAttribute('class', 'lift ' + (ok ? 'ok' : 'broken') + (lift.classList.contains('open') ? ' open' : ''));
  lift.querySelector('.lnum').textContent = ok ? String(S.floor) : '--';

  // враг
  const foe = $('foe');
  foe.style.display = fight ? '' : 'none'; $('foe-o').style.display = fight ? '' : 'none';
  if (fight) {
    const e = S.enemy, fk = e.n + ':' + e.maxHp;
    const bx = enemyBox(e.n);
    if (foeKey !== fk) {
      foeKey = fk;
      $('foe-art').innerHTML = ART.enemy(e.n);
      const H = bx.h, W = bx.w, hw = W / 2;
      const zones = [
        ['head', -hw * .42, -H, hw * .84, H * .22], ['body', -hw * .5, -H * .78, hw, H * .34],
        ['legs', -hw * .5, -H * .44, hw, H * .44], ['armL', -hw, -H * .8, hw * .5, H * .36], ['armR', hw * .5, -H * .8, hw * .5, H * .36],
      ];
      $('foe-zones').innerHTML = zones.map(([z, x, y, w, h]) =>
        `<g><rect data-z="${z}" x="${x}" y="${y}" width="${w}" height="${h}" rx="6" class="zn"/><text data-z="${z}" x="${x + w / 2}" y="${y + h / 2 + 4}" text-anchor="middle" class="zt" pointer-events="none"></text></g>`).join('');
      $('foe-ui').innerHTML = `<text id="fn" x="0" y="${-bx.h - 30}" text-anchor="middle" class="fname"></text><rect x="-40" y="${-bx.h - 24}" width="80" height="7" rx="3.5" fill="#0b0e13" stroke="#000" stroke-opacity=".5"/><rect id="fhp" x="-39" y="${-bx.h - 23}" width="78" height="5" rx="2.5" fill="#d9534f"/><text id="ftr" x="0" y="${-bx.h - 6}" text-anchor="middle" class="ftrait"></text>`;
    }
    $('fn').textContent = `${e.n} ${Math.max(0, e.hp)}/${e.maxHp}`;
    $('fhp').setAttribute('width', Math.max(0, 78 * e.hp / e.maxHp));
    $('ftr').textContent = traitIcons(e) + (e.weak > 0 ? ' ослаблен' : '') + (e.stag > 0 ? ' шатается' : '');
    document.querySelectorAll('#foe-zones text').forEach(t => {
      const z = t.getAttribute('data-z');
      t.textContent = z === 'armR' ? '' : Math.round(hitChance(z.startsWith('arm') ? 'arms' : z) * 100) + '%';
    });
  } else { foeKey = ''; }
  if (window.GL3D) GL3D.update({ visible: true, wi: S.wi, ai: S.ai, enemy: fight ? S.enemy.n : null, dead: S.screen === 'dead', foeX: FOE_X, foeY: FOE_Y });
}
