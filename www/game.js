'use strict';
// ===== «Башня»: выживание в высотке. Убежище на сотом этаже, выход — внизу.
// Этаж: левая комната | лестничная клетка с лифтом | правая комната. Каждый переход тратит сытость.
const TOP = 100;
const SAVE_KEY = 'tower-save-v3';
const $ = id => document.getElementById(id);
const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const chance = p => Math.random() < p;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// ---------- мир ----------
const ZONES = [
  { name: 'Технические этажи', intro: 'Бетон, трубы и гул вентиляции. Выход совсем близко.' },
  { name: 'Жилые этажи',       intro: 'Двери квартир распахнуты. На стенах детские рисунки и свежие царапины.' },
  { name: 'Офисы',             intro: 'Ряды пустых столов. Мониторы мигают сами по себе.' },
  { name: 'Лаборатории',       intro: 'Пахнет озоном и химией. За стеклом что-то шевелится.' },
  { name: 'Пентхаусы',         intro: 'Дорогие ковры в крови. Богатые заперлись наверху — и не спаслись.' },
];
const zoneOf = f => f >= 81 ? 4 : f >= 61 ? 3 : f >= 41 ? 2 : f >= 21 ? 1 : 0;
const depthOf = f => TOP - f;                       // 0 в убежище, 99 на первом этаже
// стоимость действий в сытости
const COST = { move: 2, stairs: 3, sleep: 15 };
const STARVE_HP = 5;                                  // столько здоровья отнимает шаг на пустой желудок

const ENEMIES = [
  [ // технические этажи (внизу, самые опасные)
    { n: 'Крыса-переросток', hp: 9,  d: [1, 2], multi: true },
    { n: 'Бродячий пёс',     hp: 12, d: [2, 3], dodge: true },
    { n: 'Сборщик',          hp: 13, d: [2, 3], poison: true },
    { n: 'Слизень',          hp: 16, d: [1, 3], regen: true },
    { n: 'Ползущий монтёр',  hp: 12, d: [2, 3], armored: true },
    { n: 'Тощий',            hp: 8,  d: [1, 2], dodge: true, bleed: true },
    { n: 'Калека в бронежилете', hp: 15, d: [1, 3], armored: true } ],
  [ // жилые этажи
    { n: 'Одичавший сосед',  hp: 15, d: [2, 4], enrage: true },
    { n: 'Кошка-мутант',     hp: 12, d: [2, 3], dodge: true, poison: true },
    { n: 'Мародёр',          hp: 14, d: [2, 4] },
    { n: 'Ползун',           hp: 14, d: [2, 3], poison: true },
    { n: 'Скиталец',         hp: 16, d: [2, 4], drain: true },
    { n: 'Бродячий повар',   hp: 16, d: [2, 4], bleed: true },
    { n: 'Сторожевой пёс',   hp: 15, d: [2, 4], enrage: true } ],
  [ // офисы
    { n: 'Охранник',         hp: 16, d: [2, 4], armored: true },
    { n: 'Курьер',           hp: 12, d: [2, 3], drain: true, dodge: true },
    { n: 'Сотрудник',        hp: 15, d: [2, 4], stun: true },
    { n: 'Вахтёр',           hp: 18, d: [2, 3], thorns: true },
    { n: 'Менеджер',         hp: 14, d: [3, 4], enrage: true },
    { n: 'Уборщик',          hp: 17, d: [2, 3], regen: true },
    { n: 'Бухгалтер',        hp: 13, d: [2, 4], dodge: true, stun: true } ],
  [ // лаборатории
    { n: 'Подопытный',       hp: 18, d: [2, 4], enrage: true },
    { n: 'Мутант',           hp: 18, d: [2, 4], poison: true, regen: true },
    { n: 'Лаборант-культист', hp: 14, d: [2, 4], stun: true, poison: true },
    { n: 'Ликвидатор',       hp: 17, d: [2, 4], armored: true, thorns: true },
    { n: 'Химера',           hp: 20, d: [2, 4], multi: true },
    { n: 'Колба-слизень',    hp: 20, d: [2, 3], poison: true, regen: true },
    { n: 'Скальпельщик',     hp: 15, d: [3, 4], bleed: true, dodge: true } ],
  [ // пентхаусы (наверху, слабее)
    { n: 'Страж',            hp: 18, d: [2, 4], armored: true },
    { n: 'Наместник',        hp: 17, d: [3, 5], enrage: true },
    { n: 'Тень',             hp: 15, d: [3, 4], dodge: true },
    { n: 'Телохранитель',    hp: 19, d: [2, 4], armored: true },
    { n: 'Королевская химера', hp: 20, d: [2, 4], multi: true },
    { n: 'Золотая гончая',   hp: 16, d: [3, 4], bleed: true },
    { n: 'Метрдотель',       hp: 18, d: [2, 4], stun: true } ],
];
const TRAITS = {
  armored: 'бронирован', dodge: 'увёртлив', regen: 'восстанавливается', enrage: 'свирепеет от ран', multi: 'бьёт дважды',
  poison: 'ядовит', bleed: 'рвёт до крови', drain: 'отнимает сытость', stun: 'оглушает', thorns: 'в шипах',
};
const traitText = e => Object.keys(TRAITS).filter(k => e[k]).map(k => TRAITS[k]).join(', ');
// прицельные удары
const PARTS = {
  head: { n: 'Голова', hit: 0.55, m: 1.7, t: 'сильный удар' },
  body: { n: 'Корпус', hit: 0.85, m: 1.0, t: 'надёжно' },
  arms: { n: 'Руки',   hit: 0.70, m: 0.8, t: 'враг бьёт слабее' },
  legs: { n: 'Ноги',   hit: 0.75, m: 0.85, t: 'враг может упасть' },
};
const STATS = {
  str: { n: 'Сила',     t: '+1 к урону' },
  acc: { n: 'Точность', t: '+4% к попаданию' },
  dex: { n: 'Ловкость', t: '+3% к увороту и +2% к криту' },
  spd: { n: 'Скорость', t: '+5% к шансу ударить дважды и сбежать' },
};
const DIFFS = ['Легко', 'Нормально', 'Тяжело'];
const NOTES = [
  'Лифты встали, когда отключили город. Механик с девяностого говорил: провода и изолента — и кабина поедет. Он не вернулся.',
  'Мы закрылись на сотом. Наверху безопасно, пока не кончится еда. Еды на неделю.',
  'Охрана перекрыла лестницы внизу. Сказали — карантин на двое суток. Прошло двенадцать дней.',
  'В лабораториях работали над «восстановлением тканей». Теперь ткани восстанавливаются у тех, кто должен лежать.',
  'Не ешь сырое мясо. Не спрашивай почему.',
  'Если слышишь, как кто-то скребётся в шкафу, — не открывай. Если тихо — открывай, там может быть еда.',
  'Офисные до сих пор в галстуках. Привычка — страшная сила.',
  'На технических этажах есть выход к парковке. Ворота открываются вручную.',
  'Я считаю этажи вниз. Каждый этаж — новая жизнь. Осталось сорок.',
  'Собаки охраны выжили дольше всех. Теперь они охраняют нас от выхода.',
  'Кто-то оставляет еду у дверей. Значит, мы здесь не одни — и не все стали ими.',
  'Утром был дождь. Я видел город из окна: он пустой, но целый. Значит, есть куда идти.',
];
const ENDINGS = {
  light:  { n: 'Свет',      t: 'У ворот тебя ждут те, кому ты помог по пути. Вместе вы уходите в утренний город.' },
  scribe: { n: 'Летописец', t: 'Ты оставляешь собранные записки у выхода. Следующий, кто спустится, будет знать больше, чем знал ты.' },
  lone:   { n: 'Одиночка',  t: 'Ворота парковки скрипят. Ты выходишь под дождь один и впервые за долгое время дышишь свободно.' },
};
const HELP = [
  'Цель — спуститься с сотого этажа на первый и выйти на улицу. Убежище на сотом этаже — твой дом.',
  'Нажимай на комнаты, мебель, лестницу и лифт — герой сам дойдёт. Переход в другую комнату стоит 2 сытости, лестница — 3.',
  'Сытость кончилась — каждый шаг отнимает здоровье. Ешь найденное и готовь на кухне в убежище: готовая еда сытнее.',
  'Тёмные комнаты не осмотрены. В них может ждать враг или выживший, который меняется вещами.',
  'Нажми на шкаф, стол, холодильник — герой обыщет его. Обысканная мебель остаётся открытой.',
  'Сломанный лифт чинится проводами и изолентой. Исправные лифты возят бесплатно — в убежище и на любой этаж с исправным лифтом.',
  'В убежище: кровать лечит, плита готовит еду, верстак собирает оружие и броню. Всё это можно улучшать.',
  'В бою нажми на прицел и выбери, куда бить: голова — сильно, но мимо чаще; руки ослабляют врага, ноги сбивают с ног.',
  'За опыт растёт уровень. Очки характеристик распределяются в рюкзаке на вкладке «Герой».',
];

// ---------- состояние ----------
let S, best = 0;
const fresh = () => ({
  v: 3, floor: TOP, loc: 'hall', hp: 100, maxHp: 100, food: 100, maxFood: 100, lvl: 1, xp: 0, sp: 0,
  st: { str: 1, acc: 1, dex: 1, spd: 1 },
  inv: { can: 2, crackers: 1, bandage: 1 }, weapon: 'knife', armor: null,
  floors: {}, lifts: { [TOP]: true }, deepest: TOP, found: {}, noteFloors: {},
  bed: 1, bench: 1, kitchen: 1,
  enemy: null, screen: 'play', ui: { item: null },
  notes: [], kills: 0, crafted: 0, cooked: 0, repairs: 0, helped: 0, slept: 0,
  poison: 0, bleed: 0, stun: false, diff: 1, cycle: 0, over: false, endId: null, killer: null,
  settingsFrom: 'start', helpFrom: 'start',
});
const has = (id, n = 1) => (S.inv[id] || 0) >= n;
function addItem(id, n = 1) { S.inv[id] = (S.inv[id] || 0) + n; }
function takeItem(id, n = 1) { S.inv[id] = (S.inv[id] || 0) - n; if (S.inv[id] <= 0) delete S.inv[id]; }
const canPay = need => Object.entries(need).every(([k, v]) => has(k, v));
const pay = need => Object.entries(need).forEach(([k, v]) => takeItem(k, v));
const weaponItem = () => S.weapon ? ITEMS[S.weapon] : { n: 'Кулаки', dmg: [1, 3], wv: 0 };
const armorDef = () => S.armor ? ITEMS[S.armor].def : 0;
const heroLook = () => ({ wi: weaponItem().wv || 0, ai: S.armor ? ITEMS[S.armor].av : 0 });
const floorData = () => S.floors[S.floor];
const isBase = () => S.floor === TOP;
const room = i => floorData().rooms[i];

// ---------- звук и вибрация (синтез, без файлов) ----------
let audioCtx = null, muted = false;
try { muted = localStorage.getItem('tower-mute') === '1'; } catch (e) {}
function tone(freq, dur, type = 'square', vol = 0.07, slide = 0, delay = 0) {
  if (muted) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    startAmbience();
    const t = audioCtx.currentTime + delay;
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t + dur);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(audioCtx.destination);
    o.start(t); o.stop(t + dur);
  } catch (e) {}
}
const SFX = {
  step:    () => tone(90 + Math.random() * 30, 0.05, 'triangle', 0.045, -20),
  door:    () => { tone(200, 0.14, 'square', 0.05, -80); tone(110, 0.12, 'triangle', 0.05, -30, 0.05); },
  ding:    () => { tone(1250, 0.28, 'sine', 0.06); tone(1570, 0.2, 'sine', 0.04, 0, 0.08); },
  click:   () => tone(520, 0.04, 'square', 0.03),
  search:  () => { tone(180, 0.08, 'triangle', 0.05, 40); tone(240, 0.08, 'triangle', 0.04, -40, 0.12); },
  hit:     () => tone(240, 0.12, 'sawtooth', 0.08, -140),
  miss:    () => tone(700, 0.08, 'sine', 0.04, -300),
  crit:    () => { tone(300, 0.1, 'sawtooth', 0.09, -150); tone(600, 0.12, 'square', 0.06, -300, 0.05); },
  hurt:    () => tone(150, 0.22, 'sawtooth', 0.1, -90),
  pickup:  () => { tone(660, 0.07, 'triangle', 0.07); tone(880, 0.09, 'triangle', 0.07, 0, 0.07); },
  eat:     () => { tone(320, 0.06, 'triangle', 0.06); tone(260, 0.06, 'triangle', 0.06, 0, 0.09); },
  craft:   () => [440, 554, 659].forEach((f, i) => tone(f, 0.08, 'square', 0.05, 0, i * 0.07)),
  stairs:  () => { tone(300, 0.12, 'triangle', 0.07, -80); tone(220, 0.14, 'triangle', 0.07, -60, 0.1); },
  boom:    () => { tone(90, 0.35, 'sawtooth', 0.12, -50); tone(60, 0.4, 'square', 0.08, -30, 0.02); },
  levelup: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.12, 'triangle', 0.08, 0, i * 0.09)),
  ach:     () => { tone(880, 0.1, 'triangle', 0.07); tone(1175, 0.18, 'triangle', 0.07, 0, 0.1); },
  death:   () => [330, 262, 196, 131].forEach((f, i) => tone(f, 0.3, 'sawtooth', 0.09, -20, i * 0.22)),
  win:     () => [392, 523, 659, 784, 1047].forEach((f, i) => tone(f, 0.2, 'triangle', 0.09, 0, i * 0.14)),
};
const sfx = n => { try { SFX[n](); } catch (e) {} };
// атмосфера: шум дождя за стенами и раскаты грома после молний
let rainNode = null;
const NOISE = {};
function noiseBuf(sec) {
  if (NOISE[sec]) return NOISE[sec];
  const n = Math.floor(audioCtx.sampleRate * sec), b = audioCtx.createBuffer(1, n, audioCtx.sampleRate), d = b.getChannelData(0);
  let last = 0; for (let i = 0; i < n; i++) { const w = Math.random() * 2 - 1; last = last * .6 + w * .4; d[i] = last; }
  return NOISE[sec] = b;
}
function startAmbience() {
  if (muted || rainNode || !audioCtx) return;
  try {
    const src = audioCtx.createBufferSource(); src.buffer = noiseBuf(3); src.loop = true;
    const bp = audioCtx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1200; bp.Q.value = .45;
    const g = audioCtx.createGain(); g.gain.setValueAtTime(0, audioCtx.currentTime); g.gain.linearRampToValueAtTime(.05, audioCtx.currentTime + 4);
    src.connect(bp); bp.connect(g); g.connect(audioCtx.destination); src.start();
    rainNode = { src, g };
  } catch (e) {}
}
function stopAmbience() { if (!rainNode) return; try { rainNode.src.stop(); } catch (e) {} rainNode = null; }
function thunder(near) {
  if (muted || !audioCtx) return;
  try {
    const t = audioCtx.currentTime + .3 + (1 - near) * 1.5;
    const src = audioCtx.createBufferSource(); src.buffer = noiseBuf(3);
    const lp = audioCtx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(700 + near * 600, t); lp.frequency.exponentialRampToValueAtTime(90, t + 2.6);
    const g = audioCtx.createGain(); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.5 * (.35 + near * .65), t + .06 + (1 - near) * .3); g.gain.exponentialRampToValueAtTime(.0001, t + 2.9);
    src.connect(lp); lp.connect(g); g.connect(audioCtx.destination); src.start(t); src.stop(t + 3);
    if (near > .8) setTimeout(() => vib(30), (t - audioCtx.currentTime) * 1000);
  } catch (e) {}
}
window.addEventListener('tower-thunder', e => thunder(e.detail ? e.detail.near : .5));
const FONTS = [['Мелкий', 0.9], ['Обычный', 1], ['Крупный', 1.15]];
let fontIdx = 1;
try { const f = parseInt(localStorage.getItem('tower-font'), 10); if (f >= 0 && f < FONTS.length) fontIdx = f; } catch (e) {}
function setFont(i) { fontIdx = i; document.documentElement.style.zoom = FONTS[i][1]; try { localStorage.setItem('tower-font', String(i)); } catch (e) {} }
setFont(fontIdx);
let vibOn = true;
try { vibOn = localStorage.getItem('tower-vib') !== '0'; } catch (e) {}
function setVib(v) { vibOn = v; try { localStorage.setItem('tower-vib', v ? '1' : '0'); } catch (e) {} }
const vib = p => { if (vibOn && navigator.vibrate) { try { navigator.vibrate(p); } catch (e) {} } };
function setMuted(m) {
  muted = m; if (m) stopAmbience();
  try { localStorage.setItem('tower-mute', m ? '1' : '0'); } catch (e) {}
  $('mute').innerHTML = ico(m ? 'mute' : 'sound');
}

// ---------- мета-прогресс и достижения ----------
const META_KEY = 'tower-meta-v3';
const meta = { ach: {}, wins: 0, ngWins: 0, hardWins: 0, deepest: TOP, diff: 1, endings: {}, tips: {} };
try { Object.assign(meta, JSON.parse(localStorage.getItem(META_KEY)) || {}); } catch (e) {}
const saveMeta = () => { try { localStorage.setItem(META_KEY, JSON.stringify(meta)); } catch (e) {} };
const ACHS = [
  { id: 'kill1',   n: 'Первая кровь',  t: 'Победи первого врага',              ok: () => S.kills >= 1 },
  { id: 'kill25',  n: 'Охотник',       t: 'Победи 25 врагов за забег',         ok: () => S.kills >= 25 },
  { id: 'd75',     n: 'Первые шаги',   t: 'Спустись до 75 этажа',              ok: () => S.deepest <= 75 },
  { id: 'd50',     n: 'Полпути',       t: 'Спустись до 50 этажа',              ok: () => S.deepest <= 50 },
  { id: 'd25',     n: 'Почти у земли', t: 'Спустись до 25 этажа',              ok: () => S.deepest <= 25 },
  { id: 'escape',  n: 'Свобода',       t: 'Выберись из башни',                 ok: () => meta.wins >= 1 },
  { id: 'lift3',   n: 'Механик',       t: 'Почини 3 лифта',                    ok: () => S.repairs >= 3 },
  { id: 'craft5',  n: 'Мастер',        t: 'Создай 5 вещей',                    ok: () => S.crafted >= 5 },
  { id: 'cook5',   n: 'Повар',         t: 'Приготовь 5 блюд',                  ok: () => S.cooked >= 5 },
  { id: 'sleep3',  n: 'Крепкий сон',   t: 'Выспись в убежище 3 раза',          ok: () => S.slept >= 3 },
  { id: 'help3',   n: 'Добрая душа',   t: 'Помоги трём выжившим',              ok: () => S.helped >= 3 },
  { id: 'notes',   n: 'Летописец',     t: 'Найди все записки',                 ok: () => S.notes.length >= NOTES.length },
  { id: 'axe',     n: 'Пожарный',      t: 'Раздобудь пожарный топор',          ok: () => has('axe') || S.weapon === 'axe' },
  { id: 'lvl5',    n: 'Закалка',       t: 'Достигни 5 уровня',                 ok: () => S.lvl >= 5 },
  { id: 'lvl10',   n: 'Ветеран',       t: 'Достигни 10 уровня',                ok: () => S.lvl >= 10 },
  { id: 'edge',    n: 'На волоске',    t: 'Выживи с 5 здоровья или меньше',     ok: () => S.hp > 0 && S.hp <= 5 },
  { id: 'hard',    n: 'Без поблажек',  t: 'Выберись на сложности «Тяжело»',     ok: () => meta.hardWins >= 1 },
  { id: 'ng',      n: 'Второй круг',   t: 'Выберись в режиме «Новая игра+»',    ok: () => meta.ngWins >= 1 },
];
function checkAch() {
  if (S.screen === 'start') return;
  let changed = false;
  ACHS.forEach(a => {
    if (!meta.ach[a.id] && a.ok()) { meta.ach[a.id] = true; changed = true; log(`Достижение: <b>${a.n}</b> — ${a.t}`, 'good'); sfx('ach'); }
  });
  if (changed) saveMeta();
}

// ---------- журнал и всплывающие сообщения ----------
let logTimer = 0, toastTimer = 0;
function log(text, cls = '') {
  const el = $('log');
  [...el.children].forEach(c => c.classList.add('old'));
  const p = document.createElement('p'); p.className = cls; p.innerHTML = text; el.appendChild(p);
  while (el.children.length > 80) el.removeChild(el.firstChild);
  el.scrollTop = el.scrollHeight;
  if ($('radio')) $('radio').classList.add('new');
  // важное — плашкой по центру, остальное — строкой у радио
  if (cls === 'good' || cls === 'bad') { el.classList.remove('fresh'); toast(text.replace(/<[^>]+>/g, ''), cls); }
  else { el.classList.add('fresh'); clearTimeout(logTimer); logTimer = setTimeout(() => el.classList.remove('fresh'), 5200); }
}
function toast(text, cls) {
  const t = $('toast'); t.textContent = text; t.className = 'show ' + (cls || '');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.className = ''; }, 2400);
}

// ---------- генерация этажей ----------
function wpick(table) {
  const tot = Object.values(table).reduce((a, b) => a + b, 0); let r = Math.random() * tot;
  for (const [k, w] of Object.entries(table)) { r -= w; if (r <= 0) return k; }
  return Object.keys(table)[0];
}
// предметы в мебели: особые наборы для холодильников, аптечек и т. п., редкие находки оружия и одежды
function rollLoot(kind, f) {
  const fu = FURN[kind], out = [];
  if (!fu.loot || chance(S.diff === 2 ? .42 : .32)) return out;
  const n = rnd(1, fu.loot);
  const table = fu.food ? LOOT.food : fu.med ? LOOT.med : fu.chem ? LOOT.chem : fu.tools ? LOOT.tools : fu.rich ? LOOT.rich : LOOT.any;
  for (let i = 0; i < n; i++) out.push(wpick(table));
  FINDS.forEach(([id, maxFloor, w]) => { if (f <= maxFloor && !S.found[id] && chance(w / 1000)) { out.push(id); S.found[id] = 1; } });
  return out;
}
const ROOM_W = 280;
function placeFurniture(zone, f) {
  const set = ZONE_FURN[zone], kinds = [];
  const want = rnd(2, 3);
  while (kinds.length < want) { const k = pick(set.box); if (!kinds.includes(k)) kinds.push(k); }
  if (chance(.65)) kinds.splice(rnd(0, kinds.length), 0, pick(set.deco));
  // раскладываем по ширине комнаты без наложений
  const total = kinds.reduce((a, k) => a + FURN[k].w, 0), free = Math.max(0, ROOM_W - 30 - total), gap = free / (kinds.length + 1);
  let x = 15 + gap * (.5 + Math.random() * .5);
  const list = [];
  kinds.forEach(k => { list.push({ k, x: Math.round(x), items: rollLoot(k, f), s: !FURN[k].loot }); x += FURN[k].w + gap * (.7 + Math.random() * .6); });
  return list.filter(o => o.x + FURN[o.k].w <= ROOM_W - 8);
}
function spawnEnemy(f) {
  const list = ENEMIES[zoneOf(f)], proto = pick(list), dep = depthOf(f);
  const avgHp = list.reduce((a, e) => a + e.hp, 0) / list.length, avgD = list.reduce((a, e) => a + e.d[0] + e.d[1], 0) / list.length;
  const mh = proto.hp / avgHp, md = (proto.d[0] + proto.d[1]) / avgD;
  const dk = [.8, 1, 1.2][S.diff] * (1 + .25 * (S.cycle || 0));
  const e = Object.assign({}, proto);
  e.hp = e.maxHp = Math.round((10 + dep * .66) * mh * dk);
  e.d = [Math.max(1, Math.round((1 + dep * .07) * md * dk)), Math.max(2, Math.round((3 + dep * .13) * md * dk))];
  e.xp = Math.round(8 + dep * .3);
  return e;
}
function genFloor(f) {
  if (f === TOP) return {
    base: true, lift: 'ok', vend: null,
    rooms: [
      { seen: true, furn: [{ k: 'wardrobe', x: 16, items: [], s: true }, { k: 'sbed', x: 100, items: [], s: true }, { k: 'nightstand', x: 228, items: [], s: true }] },
      { seen: true, furn: [{ k: 'fridge', x: 10, items: [], s: true }, { k: 'sstove', x: 64, items: [], s: true }, { k: 'sbench', x: 160, items: [], s: true }] },
    ],
  };
  const dep = depthOf(f), z = zoneOf(f);
  const rooms = [0, 1].map(() => {
    const r = { seen: false, furn: placeFurniture(z, f) };
    if (chance(clamp(.3 + dep * .0032, 0, .62))) r.enemy = spawnEnemy(f);
    else if (chance(.08)) r.npc = makeNpc();
    return r;
  });
  // записка в случайной мебели
  if (S.notes.length + Object.keys(S.noteFloors).length < NOTES.length && chance(.14)) {
    const r = pick(rooms), fu = r.furn.filter(x => FURN[x.k].loot); if (fu.length) { pick(fu).note = true; S.noteFloors[f] = 1; }
  }
  return { lift: f > 1 && chance(.18) ? 'ok' : 'broken', vend: f > 1 && chance(.3) ? { used: false } : null, rooms };
}
// выжившие: просят одну вещь, взамен дают другую
const NPC_WANTS = ['can', 'bandage', 'pills', 'choco', 'crackers', 'tape', 'alcohol', 'apple', 'juice'];
const NPC_GIVES = ['medkit', 'battery', 'blade', 'wire', 'pills', 'can', 'stew', 'kevlar', 'crowbar', 'scrap'];
const NPC_LINES = ['Пожалуйста… мне очень нужно', 'Слушай, давай меняться. Мне нужно', 'Не подходи! …Хотя постой. Я ищу', 'Я тут уже неделю. Выручи, мне нужно'];
function makeNpc() {
  let give = pick(NPC_GIVES); if ((give === 'kevlar' || give === 'crowbar') && S.found[give]) give = 'medkit';
  if (give === 'kevlar' || give === 'crowbar') S.found[give] = 1;
  return { want: pick(NPC_WANTS), give, done: false, line: pick(NPC_LINES) };
}
function ensureFloor(f) { if (!S.floors[f]) { S.floors[f] = genFloor(f); if (S.floors[f].lift === 'ok') S.lifts[f] = true; } }

// ---------- действия героя (их вызывает сцена, когда герой дошёл до цели) ----------
function tickStatus() {
  let d = 0;
  if (S.poison > 0) { S.poison--; d += 2; }
  if (S.bleed > 0) { S.bleed--; d += 2; }
  if (d) { S.hp -= d; if (typeof floatText === 'function') floatText(`-${d}`, 'pdmg', 'sc-hero'); }
}
// сытость за переход; на пустой желудок — здоровье
function spend(cost) {
  if (S.diff === 0) cost = Math.max(1, cost - 1);
  if (S.food >= cost) S.food -= cost;
  else { S.food = 0; S.hp -= STARVE_HP; log(`Живот сводит от голода: -${STARVE_HP} здоровья.`, 'bad'); vib(40); }
  tickStatus();
  return !checkDeath();
}
function enterComp(loc) {
  if (S.screen !== 'play' || S.loc === loc) return;
  if (!spend(COST.move)) return;
  S.loc = loc;
  if (loc !== 'hall') {
    const r = room(loc);
    if (!r.seen) { r.seen = true; if (!r.enemy && !r.npc) log(r.furn.some(f => !f.s) ? 'Здесь никого. Можно обыскать мебель.' : 'Пустая комната.'); }
    if (r.enemy) return startFight(loc);
    if (r.npc && !r.npc.done) { S.screen = 'npc'; render(); save(); return; }
  }
  render(); save();
}
function searchFurn(ri, fi) {
  const r = room(ri), f = r && r.furn[fi];
  if (!f || f.s || S.screen !== 'play') return;
  f.s = true; sfx('search');
  const got = f.items.slice(); f.items = [];
  got.forEach(id => addItem(id));
  if (f.note) { const left = NOTES.map((_, i) => i).filter(i => !S.notes.includes(i)); if (left.length) { S.notes.push(pick(left)); got.push('note'); } delete f.note; }
  if (got.length) {
    sfx('pickup');
    log(`${FURN[f.k].n}: ` + got.map(id => id === 'note' ? 'записка (в дневнике)' : ITEMS[id].n).join(', ') + '.');
    if (typeof pickupFx === 'function') pickupFx(got, ri, fi);
    const w = got.find(id => ITEMS[id] && ITEMS[id].cat === 'weapon'), ar = got.find(id => ITEMS[id] && ITEMS[id].cat === 'armor');
    if (w && ITEMS[w].dmg[1] > weaponItem().dmg[1]) equip(w, true, true);
    if (ar && ITEMS[ar].def > armorDef()) equip(ar, true, true);
  } else log(`${FURN[f.k].n}: пусто.`);
  render(); save();
}
function useStairs(dir) {
  if (S.screen !== 'play') return;
  const to = S.floor + dir;
  if (to > TOP || to < 1) return;
  if (!spend(COST.stairs)) return;
  sfx('stairs');
  goFloor(to, 'hall');
}
function goFloor(f, loc) {
  S.floor = f; S.loc = loc || 'hall';
  ensureFloor(f);
  if (f < S.deepest) {
    S.deepest = f; meta.deepest = Math.min(meta.deepest || TOP, f); saveMeta();
    if (f === 80 || f === 60 || f === 40 || f === 20) log(ZONES[zoneOf(f)].intro, 'story');
  }
  render(); save();
}
function exitTower() { if (S.floor === 1 && S.screen === 'play') win(); }
// лифт
const repairCost = f => Object.assign({ wire: 1, tape: 1 }, depthOf(f) > 35 ? { scrap: 1 } : {}, depthOf(f) > 70 ? { battery: 1 } : {});
function openLift() { if (S.screen !== 'play') return; S.screen = 'lift'; render(); }
function repairLift() {
  const fd = floorData(), c = repairCost(S.floor);
  if (fd.lift === 'ok' || !canPay(c)) return;
  pay(c); fd.lift = 'ok'; S.lifts[S.floor] = true; S.repairs++; sfx('craft');
  log('Провода соединены, изолента намотана — кабина оживает. Отсюда можно ездить на лифте.', 'good');
  render(); save();
}
function rideTo(f) {
  if (!S.lifts[f] || !S.lifts[S.floor] || f === S.floor) return;
  S.screen = 'play'; render();
  if (typeof liftTrip === 'function') liftTrip(() => goFloor(f, 'hall'), f > S.floor ? 'up' : 'down');
  else goFloor(f, 'hall');
}
// торговый автомат
function kickVend() {
  const v = floorData().vend; if (!v || v.used) return;
  v.used = true; sfx('boom'); vib(40);
  const r = Math.random();
  if (r < .55) { const got = [pick(['choco', 'crackers', 'juice'])].concat(chance(.4) ? [pick(['choco', 'juice'])] : []); got.forEach(id => addItem(id)); log('Автомат вздрагивает и выплёвывает: ' + got.map(id => ITEMS[id].n).join(', ') + '.', 'good'); if (typeof pickupFx === 'function') pickupFx(got, 'vend'); }
  else if (r < .8) log('Внутри что-то звякает, но ничего не падает. Пусто.');
  else { S.hp -= 6; log('Автомат кренится и придавливает ногу: -6 здоровья.', 'bad'); if (checkDeath()) return; }
  S.screen = 'play'; render(); save();
}
// выживший
function npcTrade(ok) {
  const r = room(S.loc), n = r && r.npc; if (!n || n.done) return;
  if (ok) {
    if (!has(n.want)) return;
    takeItem(n.want); addItem(n.give); n.done = true; S.helped++; sfx('pickup');
    log(`Обмен: ты отдал «${ITEMS[n.want].n}» и получил <b>${ITEMS[n.give].n}</b>.`, 'good');
    gainXp(12);
  } else { n.done = true; log('«Ну и ладно. Иди своей дорогой».'); }
  S.screen = 'play'; render(); save();
}

// ---------- убежище ----------
const sleepHeal = () => [0, .4, .7, 1][S.bed];
function sleep() {
  if (!isBase() || S.food < COST.sleep) return;
  S.food -= COST.sleep; S.hp = Math.min(S.maxHp, S.hp + Math.round(S.maxHp * sleepHeal())); S.poison = 0; S.bleed = 0; S.slept++;
  log(`Ты спишь несколько часов. Здоровье ${S.hp}/${S.maxHp}.`, 'good');
  S.screen = 'play'; render(); save();
}
function upgrade(what) {
  const U = UPGRADES[what], cost = U.lv[S[what] + 1];
  if (!cost || !canPay(cost) || !isBase()) return;
  pay(cost); S[what]++; sfx('craft');
  log(`${U.n}: уровень ${S[what]} — ${U.t[S[what]]}.`, 'good');
  render(); save();
}
const recipeOk = r => r.where === 'any' || (isBase() && (r.where === 'bench' ? S.bench : S.kitchen) >= r.lvl);
function craft(i) {
  const r = RECIPES[i];
  if (!canPay(r.need) || !recipeOk(r)) return;
  pay(r.need); addItem(r.out); sfx('craft');
  if (r.where === 'kitchen') S.cooked++; else S.crafted++;
  const it = ITEMS[r.out];
  log(`Готово: <b>${it.n}</b>.`, 'good');
  if (it.cat === 'weapon' && it.dmg[1] > weaponItem().dmg[1]) equip(r.out, true, true);
  if (it.cat === 'armor' && it.def > armorDef()) equip(r.out, true, true);
  render(); save();
}

// ---------- предметы ----------
function useItem(id) {
  const it = ITEMS[id]; if (!it || !has(id)) return;
  if (it.cat === 'weapon' || it.cat === 'armor') return equip(id);
  if (it.cat !== 'food' && it.cat !== 'med') return;
  takeItem(id);
  if (it.food) S.food = Math.min(S.maxFood, S.food + it.food);
  if (it.heal) S.hp = Math.min(S.maxHp, S.hp + it.heal);
  (it.cure || []).forEach(k => { S[k] = 0; });
  sfx(it.cat === 'food' ? 'eat' : 'pickup');
  let msg = `${it.n}: ` + [it.food ? `+${it.food} сытости` : '', it.heal ? `+${it.heal} здоровья` : '', it.cure ? 'недуги сняты' : ''].filter(Boolean).join(', ') + '.';
  if (it.raw && chance(.3)) { S.poison = 4; msg += ' Мясо было несвежим: отравление.'; }
  log(msg);
  if (S.ui.item === id && !has(id)) S.ui.item = null;
  if (S.screen === 'fight') return afterHeroAction();
  render(); save();
}
function equip(id, quiet, noRender) {
  const it = ITEMS[id]; if (!it || !has(id)) return;
  if (it.cat === 'weapon') { if (S.weapon) addItem(S.weapon); takeItem(id); S.weapon = id; }
  else if (it.cat === 'armor') { if (S.armor) addItem(S.armor); takeItem(id); S.armor = id; }
  else return;
  log(`${it.cat === 'weapon' ? 'В руках' : 'Надето'}: <b>${it.n}</b>.`, quiet ? '' : 'good');
  if (S.ui.item === id) S.ui.item = null;
  if (!noRender) { render(); save(); }
}
function unequip(slot) { const id = S[slot]; if (!id) return; addItem(id); S[slot] = null; render(); save(); }

// ---------- бой ----------
function startFight(ri) {
  const e = room(ri).enemy; if (!e) return;
  S.enemy = e; e.room = ri; S.screen = 'fight'; S.stun = false; e.weak = 0; e.stag = 0; S.busy = false;
  log(`Из темноты выходит <span class="enemy">${e.n}</span>.` + (traitText(e) ? ` Он ${traitText(e)}.` : ''));
  render(); save();
}
const dmgRange = part => { const w = weaponItem(), m = PARTS[part].m, b = S.st.str - 1; return [Math.max(1, Math.round((w.dmg[0] + b) * m)), Math.max(1, Math.round((w.dmg[1] + b) * m))]; };
function hitChance(part) {
  const e = S.enemy, w = weaponItem();
  return clamp(PARTS[part].hit + (S.st.acc - 1) * .04 + (w.acc || 0) / 100 - (e && e.dodge ? .15 : 0), .05, .95);
}
function attack(part) {
  if (S.screen !== 'fight' || !S.enemy || S.busy) return;
  if (part === true) part = 'body';
  const e = S.enemy;
  if (typeof lunge === 'function') lunge('hero');
  if (!chance(hitChance(part))) { log(`${PARTS[part].n}: промах.`); sfx('miss'); if (typeof floatText === 'function') floatText('мимо', 'miss', 'sc-enemy'); return afterHeroAction(); }
  const g = dmgRange(part); let d = rnd(g[0], g[1]);
  const crit = chance(.05 + (S.st.dex - 1) * .02);
  if (crit) d = Math.round(d * 1.6);
  if (e.armored) d = Math.max(1, d - 1 - Math.floor(d / 6));
  e.hp -= d;
  if (typeof fx === 'function') fx('hit');
  if (typeof floatText === 'function') floatText(`-${d}${crit ? '!' : ''}`, crit ? 'crit' : 'dmg', 'sc-enemy');
  sfx(crit ? 'crit' : 'hit'); if (crit) vib(50);
  let note = '';
  if (part === 'arms') { e.weak = 2; note = ' Враг ослаблен.'; }
  if (part === 'legs' && chance(.35)) { e.stag = 1; note = ' Враг падает!'; }
  if (e.thorns && (part === 'body' || part === 'arms')) { const t = rnd(1, 2); S.hp -= t; note += ` Шипы: -${t}.`; }
  log(`${PARTS[part].n}: <b>${d}</b> урона${crit ? ' — критический!' : ''}.${note}`);
  if (e.hp <= 0) return victory();
  if (checkDeath()) return;
  afterHeroAction();
}
// после хода героя ходит враг (с небольшой паузой, чтобы было видно удар)
function afterHeroAction() {
  if (S.screen !== 'fight' || !S.enemy) return;
  if (!S.extraUsed && chance((S.st.spd - 1) * .05)) { S.extraUsed = true; log('Ты быстрее: ещё один ход!'); render(); save(); return; }
  S.extraUsed = false; S.busy = true;
  render();
  setTimeout(enemyTurn, FIGHT_DELAY);
}
let FIGHT_DELAY = 420;
function enemyTurn() {
  S.busy = false;
  const e = S.enemy; if (!e || S.screen !== 'fight') return;
  if (e.regen) e.hp = Math.min(e.maxHp, e.hp + 1 + Math.floor(e.maxHp / 30));
  if (e.stag) { e.stag = 0; log(`${e.n} поднимается с пола.`); return endEnemyTurn(); }
  const hits = e.multi ? 2 : 1;
  for (let h = 0; h < hits; h++) {
    if (typeof lunge === 'function') lunge('enemy');
    if (!chance(clamp(.74 - (S.st.dex - 1) * .03, .35, .9))) { log(`${e.n} промахивается.`); if (typeof floatText === 'function') floatText('уворот', 'miss', 'sc-hero'); continue; }
    let d = rnd(e.d[0], e.d[1]);
    if (e.multi) d = Math.max(1, Math.round(d * .6));
    if (e.enrage && e.hp < e.maxHp / 2) d = Math.round(d * 1.3);
    if (e.weak > 0) d = Math.round(d * .7);
    d = Math.max(1, d - armorDef());
    S.hp -= d; sfx('hurt'); vib(35);
    if (typeof fx === 'function') fx('shake');
    if (typeof floatText === 'function') floatText(`-${d}`, 'pdmg', 'sc-hero');
    let note = '';
    if (e.poison && chance(.3)) { S.poison = 3; note = ' Яд!'; }
    if (e.bleed && chance(.3)) { S.bleed = 3; note = ' Кровотечение!'; }
    if (e.drain) { S.food = Math.max(0, S.food - 4); note += ' -4 сытости.'; }
    if (e.stun && chance(.2)) { S.stun = true; note += ' Ты оглушён.'; }
    log(`${e.n}: -${d} здоровья.${note}`);
    if (checkDeath()) return;
  }
  endEnemyTurn();
}
function endEnemyTurn() {
  const e = S.enemy; if (!e) return;
  if (e.weak > 0) e.weak--;
  tickStatus(); if (checkDeath()) return;
  if (S.stun) { S.stun = false; S.busy = true; log('Ты приходишь в себя — ход потерян.'); render(); save(); return setTimeout(enemyTurn, FIGHT_DELAY + 200); }
  render(); save();
}
function flee() {
  if (S.screen !== 'fight' || S.busy) return;
  if (chance(.55 + (S.st.spd - 1) * .05)) {
    log('Ты выскакиваешь на лестницу. Враг остался в комнате.');
    S.enemy = null; S.screen = 'play'; S.loc = 'hall'; spend(COST.move); render(); save(); return;
  }
  log('Сбежать не вышло!', 'bad'); afterHeroAction();
}
function victory() {
  const e = S.enemy, r = room(e.room);
  if (window.GL3D) GL3D.trigger('foe', 'death');
  r.enemy = null; r.dead = (r.dead || 0) + 1;
  S.enemy = null; S.kills++; S.screen = 'play'; S.busy = false;
  log(`${e.n} повержен. +${e.xp} опыта.`);
  if (chance(.3)) { const id = wpick(LOOT.any); addItem(id); log(`У него было: ${ITEMS[id].n}.`); }
  gainXp(e.xp);
  render(); save();
}
const xpNeed = () => 20 + S.lvl * 15;
function gainXp(n) {
  S.xp += n;
  while (S.xp >= xpNeed()) {
    S.xp -= xpNeed(); S.lvl++; S.sp++; S.maxHp += 8; S.hp = Math.min(S.maxHp, S.hp + 20);
    sfx('levelup'); vib(30);
    log(`Новый уровень: ${S.lvl}! Очко характеристик — в рюкзаке, вкладка «Герой».`, 'good');
  }
}
function spendStat(k) { if (S.sp <= 0 || S.st[k] >= 10) return; S.sp--; S.st[k]++; sfx('pickup'); render(); save(); }
const statsLine = () => `Этаж ${S.floor}, уровень ${S.lvl}, врагов побеждено: ${S.kills}, лифтов починено: ${S.repairs}, создано вещей: ${S.crafted + S.cooked}, записок: ${S.notes.length}/${NOTES.length}.`;
function checkDeath() {
  if (S.hp > 0) return false;
  S.hp = 0; S.over = true; S.killer = S.enemy ? S.enemy.n : null; S.screen = 'dead'; S.busy = false; sfx('death'); vib([100, 60, 200]);
  log(`Ты погиб на этаже ${S.floor}.`, 'bad');
  render(); save();
  return true;
}
function win() {
  S.over = true; S.screen = 'win';
  meta.wins++; if (S.cycle >= 1) meta.ngWins++; if (S.diff === 2) meta.hardWins = (meta.hardWins || 0) + 1;
  const id = S.helped >= 4 ? 'light' : S.notes.length >= NOTES.length ? 'scribe' : 'lone';
  meta.endings[id] = true; S.endId = id; saveMeta(); sfx('win'); vib([60, 40, 60, 40, 200]);
  log(`Концовка «${ENDINGS[id].n}»: ${ENDINGS[id].t}`, 'story');
  render(); save();
}

// ---------- новая игра, сохранение ----------
function newGame() { S = fresh(); S.screen = 'start'; $('log').innerHTML = ''; render(); }
function startRun() {
  const d = meta.diff;
  S = fresh(); S.diff = d;
  if (d === 0) { addItem('can', 2); addItem('bandage', 1); }
  if (d === 2) takeItem('crackers');
  $('log').innerHTML = '';
  ensureFloor(TOP);
  log('Ты в убежище на сотом этаже. Еда на исходе. Внизу, на первом этаже, — выход на улицу.', 'story');
  log('Спускайся по лестнице, обыскивай комнаты, чини лифты — на них можно вернуться сюда поесть и выспаться.', 'story');
  S.screen = 'play'; render(); save();
}
function newGamePlus() {
  const p = S, c = (p.cycle || 0) + 1;
  S = fresh();
  Object.assign(S, { cycle: c, lvl: p.lvl, xp: p.xp, sp: p.sp, st: Object.assign({}, p.st), maxHp: p.maxHp, hp: p.maxHp, weapon: p.weapon, armor: p.armor, diff: p.diff, notes: p.notes.slice(), bed: p.bed, bench: p.bench, kitchen: p.kitchen });
  $('log').innerHTML = '';
  ensureFloor(TOP);
  log(`Ты снова на сотом этаже. Башня стала злее: <b>круг ${c + 1}</b>, враги крепче.`, 'story');
  S.screen = 'play'; render(); save();
}
function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify({ S, best })); } catch (e) {} }
function load() {
  try {
    const d = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (d && d.S && d.S.v === 3 && !d.S.over) { S = Object.assign(fresh(), d.S); S.busy = false; best = d.best || 0; ensureFloor(S.floor); return true; }
  } catch (e) {}
  return false;
}

// ---------- интерфейс ----------
function btn(text, fn, cls = '', disabled = false) {
  const b = document.createElement('button');
  b.innerHTML = text; b.className = cls; b.disabled = disabled; b.onclick = () => { sfx('click'); fn(); };
  return b;
}
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const head = (a, t, cls = '') => a.appendChild(el('div', 'head ' + cls, t));
const SHEET_TITLES = { inv: 'Рюкзак', craft: 'Создание', stats: 'Герой', diary: 'Дневник', ach: 'Достижения', lift: 'Лифт', vend: 'Торговый автомат', npc: 'Выживший',
  bed: 'Кровать', bench: 'Верстак', stove: 'Плита', start: 'Башня', help: 'Как играть', settings: 'Настройки', transfer: 'Сохранение', dead: 'Конец пути', win: 'Свобода' };
const TABS = ['inv', 'craft', 'stats', 'diary', 'ach'];
const back = () => { S.screen = S.enemy ? 'fight' : 'play'; render(); };
function dk(icon, label, fn, o = {}) {
  const b = document.createElement('button');
  b.className = 'dk' + (o.cls ? ' ' + o.cls : ''); b.disabled = !!o.disabled;
  b.innerHTML = `<span class="ic">${o.img ? iconImg(o.img) : ico(icon)}</span><span class="lb">${label}</span>` + (o.badge ? `<i class="bd">${o.badge}</i>` : '');
  b.onclick = () => { sfx('click'); fn(); };
  return b;
}
function renderDock() {
  const d = $('dock'); d.innerHTML = ''; d.className = '';
  if (S.screen === 'fight' && S.enemy) {
    d.className = 'fight';
    const w = weaponItem(), g = dmgRange('body');
    d.appendChild(el('div', 'wpanel', `${S.weapon ? iconImg(S.weapon, 'wico') : '<span class="wico fist">' + ico('fist') + '</span>'}<div class="wtx"><b>${w.n}</b><small>Урон ${g[0]}–${g[1]}</small></div>`));
    const aim = el('button', 'aimbtn', ico('target')); aim.title = 'Выбрать цель'; aim.disabled = !!S.busy; aim.onclick = () => { sfx('click'); openAim(); }; d.appendChild(aim);
    const q = el('div', 'quick');
    q.appendChild(dk('run', 'Бежать', flee, { disabled: S.busy }));
    Object.keys(S.inv).filter(id => ['food', 'med'].includes(ITEMS[id].cat)).sort((a, b) => (ITEMS[b].heal || 0) - (ITEMS[a].heal || 0)).slice(0, 6)
      .forEach(id => q.appendChild(dk('', ITEMS[id].n, () => useItem(id), { img: id, badge: S.inv[id], disabled: S.busy })));
    d.appendChild(q);
    return;
  }
  if (S.screen !== 'play') return;
  const bag = el('button', 'bag', ico('bag') + (S.sp ? `<i class="bd">${S.sp}</i>` : '')); bag.title = 'Рюкзак';
  bag.onclick = () => { sfx('click'); S.screen = 'inv'; render(); };
  d.appendChild(bag);
  d.appendChild(el('div', 'hintline', sceneHint()));
}
// подсказка, что можно сделать прямо сейчас
function sceneHint() {
  const fd = floorData(); if (!fd) return '';
  if (isBase()) return S.loc === 'hall' ? 'Убежище. Слева спальня, справа кухня и верстак. Лестница ведёт вниз.' : 'Нажми на кровать, плиту или верстак.';
  if (S.loc === 'hall') {
    const dark = fd.rooms.filter(r => !r.seen).length;
    return (dark ? `Не осмотрено комнат: ${dark}. ` : '') + (S.floor === 1 ? 'Ворота на улицу — справа на лестничной клетке!' : 'Лестница ведёт вниз, к выходу.');
  }
  const left = room(S.loc).furn.filter(f => !f.s).length;
  return left ? `Обыщи мебель — осталось ${left}.` : 'Здесь больше ничего нет. Нажми на лестничную клетку.';
}
// ---------- выбор цели ----------
function openAim() {
  if (S.screen !== 'fight' || !S.enemy || S.busy) return;
  const row = $('aim-row'); row.innerHTML = '';
  Object.keys(PARTS).forEach(k => {
    const g = dmgRange(k), b = el('button', 'tgt', `<canvas width="220" height="300"></canvas><b>${Math.round(hitChance(k) * 100)}%</b><small>${PARTS[k].n} · урон ${g[0]}–${g[1]}</small><em>${PARTS[k].t}</em>`);
    b.onclick = () => { closeAim(); sfx('click'); attack(k); };
    row.appendChild(b);
    if (window.GL3D && GL3D.drawChar) GL3D.drawChar(b.querySelector('canvas'), { name: S.enemy.n }, 'full', k);
  });
  $('aim').classList.add('open');
}
function closeAim() { $('aim').classList.remove('open'); }
function illust(kind, extra) {
  const c = el('canvas', 'ill'); c.width = 480; c.height = 400;
  if (window.GL3D && GL3D.drawScene) GL3D.drawScene(c, kind, extra);
  return c;
}
function layoutUI() {
  const sc = S.screen, full = ['start', 'help', 'settings', 'transfer'].includes(sc), sheet = full || !!SHEET_TITLES[sc];
  $('sheet').classList.toggle('open', sheet); $('sheet').classList.toggle('full', full);
  const tabbed = TABS.includes(sc), closable = sheet && !full && !['dead', 'win'].includes(sc);
  if (tabbed) $('sheet-title').innerHTML = '<div class="tabs">' + TABS.map(t => `<button data-t="${t}" class="${t === sc ? 'on' : ''}">${SHEET_TITLES[t]}${t === 'stats' && S.sp ? ' <i class="bd">' + S.sp + '</i>' : ''}</button>`).join('') + '</div>';
  else $('sheet-title').innerHTML = `<span>${SHEET_TITLES[sc] || ''}</span>`;
  if (closable) $('sheet-title').insertAdjacentHTML('beforeend', `<button class="x" data-t="close">${ico('close')}</button>`);
  $('sheet-title').querySelectorAll('button').forEach(b => b.onclick = () => { sfx('click'); if (b.dataset.t === 'close') back(); else { S.screen = b.dataset.t; render(); } });
  $('sheet').classList.toggle('tabbed', tabbed);
  if (sc !== 'fight') closeAim();
  $('actions').className = sc === 'inv' ? 'inv-l' : ['npc', 'vend', 'start', 'dead', 'win', 'lift', 'bed'].includes(sc) ? 'ill-l' : ['craft', 'bench', 'stove'].includes(sc) ? 'craft-l' : '';
  $('dock').style.display = sheet ? 'none' : '';
  $('btn-fast').classList.toggle('on', walkMs < 400);
}
let pfKey = '', peKey = '';
function drawPortraits() {
  if (!window.GL3D || !GL3D.drawChar) return;
  const look = heroLook(), hk = look.wi + ':' + look.ai;
  if (hk !== pfKey) { pfKey = hk; GL3D.drawChar($('pf-c'), { hero: true, wi: look.wi, ai: look.ai }, 'portrait'); }
  const fight = S.screen === 'fight' && S.enemy;
  $('foe-hud').classList.toggle('on', !!fight);
  if (fight) {
    const e = S.enemy;
    if (peKey !== e.n) { peKey = e.n; GL3D.drawChar($('pe-c'), { name: e.n }, 'portrait'); }
    $('foe-hp').innerHTML = `${Math.max(0, e.hp)}<small>/${e.maxHp}</small>`;
    $('b-fhp').style.width = Math.max(0, e.hp / e.maxHp * 100) + '%';
    $('foe-name').textContent = e.n;
    $('foe-tr').textContent = [traitText(e), e.weak > 0 ? 'ослаблен' : '', e.stag ? 'на полу' : ''].filter(Boolean).join(' · ');
  } else peKey = '';
}
// плитка предмета
function itemTile(id, n, o = {}) {
  const it = ITEMS[id];
  const b = el('button', 'tile' + (o.sel ? ' sel' : '') + (o.cls ? ' ' + o.cls : ''), `${iconImg(id)}${n > 1 ? `<i>${n}</i>` : ''}<span>${it.n}</span>`);
  b.disabled = !!o.dis; if (o.fn) b.onclick = () => { sfx('click'); o.fn(); };
  return b;
}
function itemEffect(id) {
  const it = ITEMS[id];
  if (it.cat === 'weapon') return `Урон ${it.dmg[0]}–${it.dmg[1]}${it.acc ? `, точность ${it.acc > 0 ? '+' : ''}${it.acc}%` : ''}`;
  if (it.cat === 'armor') return `Защита ${it.def}`;
  return [it.food ? `+${it.food} сытости` : '', it.heal ? `+${it.heal} здоровья` : '', it.cure ? 'снимает ' + it.cure.map(c => c === 'bleed' ? 'кровотечение' : 'отравление').join(' и ') : ''].filter(Boolean).join(', ') || 'Материал';
}
const needHtml = need => `<div class="rneed">${Object.entries(need).map(([k, v]) => `<span class="${has(k, v) ? 'ok' : 'no'}" title="${ITEMS[k].n}">${iconImg(k)}<i>${S.inv[k] || 0}/${v}</i></span>`).join('<b>+</b>')}</div>`;
function renderInv(a) {
  // слева — герой и снаряжение, справа — вещи по категориям, внизу — выбранный предмет
  const card = el('div', 'card', `<canvas width="160" height="240"></canvas><div class="cst"><b>Уровень ${S.lvl}</b><div><span>Здоровье</span><i>${S.hp}/${S.maxHp}</i></div><div><span>Сытость</span><i>${S.food}/${S.maxFood}</i></div><div><span>Урон</span><i>${dmgRange('body').join('–')}</i></div><div><span>Защита</span><i>${armorDef()}</i></div></div>`);
  a.appendChild(card);
  const look = heroLook(); if (window.GL3D && GL3D.drawChar) GL3D.drawChar(card.querySelector('canvas'), { hero: true, wi: look.wi, ai: look.ai }, 'full');
  const eq = el('div', 'eqrow');
  eq.appendChild(S.weapon ? itemTile(S.weapon, 1, { cls: 'eq', sel: S.ui.item === S.weapon, fn: () => { S.ui.item = S.weapon; render(); } }) : el('div', 'tile eq empty', `<span class="it fist">${ico('fist')}</span><span>Кулаки</span>`));
  eq.appendChild(S.armor ? itemTile(S.armor, 1, { cls: 'eq', sel: S.ui.item === S.armor, fn: () => { S.ui.item = S.armor; render(); } }) : el('div', 'tile eq empty', `<span class="it">${ico('shirt')}</span><span>Без брони</span>`));
  head(a, 'Снаряжение', 'cat'); a.appendChild(eq);
  const id = S.ui.item;
  if (id && ITEMS[id] && (has(id) || S.weapon === id || S.armor === id)) {
    const it = ITEMS[id], worn = S.weapon === id || S.armor === id;
    const box = el('div', 'idetail', `${iconImg(id, 'big')}<div class="itx"><b>${it.n}</b><small>${itemEffect(id)}</small><p>${it.t}</p></div>`);
    const acts = el('div', 'iacts');
    if (it.cat === 'food') acts.appendChild(btn('Съесть', () => useItem(id), 'primary', S.food >= S.maxFood));
    if (it.cat === 'med') acts.appendChild(btn('Использовать', () => useItem(id), 'primary', S.hp >= S.maxHp && !(it.cure || []).some(c => S[c] > 0)));
    if ((it.cat === 'weapon' || it.cat === 'armor') && !worn) acts.appendChild(btn('Взять', () => equip(id), 'primary'));
    if (worn) acts.appendChild(btn('Снять', () => unequip(it.cat === 'weapon' ? 'weapon' : 'armor')));
    const uses = RECIPES.filter(r => r.need[id]).map(r => ITEMS[r.out].n);
    if (uses.length) acts.appendChild(el('small', 'uses', 'Нужно для: ' + uses.join(', ')));
    box.appendChild(acts); a.appendChild(box);
  }
  const ids = Object.keys(S.inv);
  if (!ids.length) head(a, 'Рюкзак пуст. Обыскивай мебель в комнатах.');
  CATS.forEach(([cat, name]) => {
    const list = ids.filter(i => ITEMS[i].cat === cat); if (!list.length) return;
    head(a, name, 'cat');
    const g = el('div', 'grid'); list.forEach(i => g.appendChild(itemTile(i, S.inv[i], { sel: S.ui.item === i, fn: () => { S.ui.item = S.ui.item === i ? null : i; render(); } }))); a.appendChild(g);
  });
}
function recipeCard(r, i) {
  const out = ITEMS[r.out], ok = canPay(r.need), here = recipeOk(r);
  const where = r.where === 'any' ? '' : (r.where === 'bench' ? 'верстак' : 'плита') + ` ур. ${r.lvl}`;
  const b = el('div', 'recipe' + (ok && here ? ' ready' : ''));
  b.innerHTML = `<div class="rout">${iconImg(r.out)}<div><b>${out.n}</b><small>${itemEffect(r.out)}</small>${where && !here ? `<em class="bad">Нужен ${where} в убежище</em>` : ''}</div></div>` + needHtml(r.need);
  b.appendChild(btn('Создать', () => craft(i), 'primary', !(ok && here)));
  return b;
}
function renderCraft(a, filter) {
  [['any', 'Лечение — можно где угодно'], ['bench', 'Оружие и броня — верстак в убежище'], ['kitchen', 'Еда — плита в убежище']].forEach(([w, t]) => {
    if (filter && filter !== w) return;
    head(a, t, 'cat');
    RECIPES.forEach((r, i) => { if (r.where === w) a.appendChild(recipeCard(r, i)); });
  });
}
function upgradeCard(what) {
  const U = UPGRADES[what], lv = S[what], cost = U.lv[lv + 1];
  if (!cost) return el('div', 'head', `${U.n}: уровень ${lv}, лучше не бывает.`);
  const b = el('div', 'recipe up' + (canPay(cost) ? ' ready' : ''), `<div class="rout"><span class="it up">${ico('up')}</span><div><b>${U.n}: уровень ${lv + 1}</b><small>${U.t[lv + 1]}</small></div></div>` + needHtml(cost));
  b.appendChild(btn('Улучшить', () => upgrade(what), 'primary', !canPay(cost)));
  return b;
}
function render() {
  if (!S) return;
  checkAch();
  const start = S.screen === 'start';
  $('app').classList.toggle('title', start);
  if (!start) {
    const base = isBase();
    $('floor').innerHTML = base ? '<b class="word">Убежище</b>' : `<small>этаж</small><b>${S.floor}</b>`;
    $('zone').textContent = base ? 'сотый этаж' : `${ZONES[zoneOf(S.floor)].name} · до выхода ${S.floor - 1}`;
    $('b-hp').style.width = (S.hp / S.maxHp * 100) + '%';
    $('b-en').style.width = (S.food / S.maxFood * 100) + '%';
    $('b-xp').style.width = (S.xp / xpNeed() * 100) + '%';
    $('t-hp').innerHTML = `${S.hp}<small>/${S.maxHp}</small>`;
    $('t-en').innerHTML = `${S.food}<small>/${S.maxFood}</small>`;
    $('hud-l').classList.toggle('low', S.hp <= S.maxHp * .3); $('hud-l').classList.toggle('starve', S.food <= 15);
    $('lvl').textContent = S.lvl;
    drawPortraits();
    $('inv').innerHTML = (S.poison ? `<span class="bad">${ico('skull')}отравление</span>` : '') + (S.bleed ? `<span class="bad">${ico('drop')}кровотечение</span>` : '') + (S.food <= 0 ? `<span class="bad">${ico('hunger')}голод</span>` : '');
    renderScene();
  }
  const a = $('actions'); a.innerHTML = '';
  const fd = S.floors[S.floor];
  switch (S.screen) {
    case 'inv': renderInv(a); break;
    case 'craft': head(a, isBase() ? 'Ты в убежище — доступно всё, на что хватит уровня верстака и плиты.' : 'Вдали от убежища можно делать только лекарства. Оружие и еда — на верстаке и плите наверху.'); renderCraft(a); break;
    case 'stats':
      head(a, `Уровень ${S.lvl}, опыт ${S.xp}/${xpNeed()}. ${S.sp ? `<b>Свободных очков: ${S.sp}</b>` : 'Очко характеристик даётся за каждый новый уровень.'}`);
      Object.keys(STATS).forEach(k => {
        const r = el('div', 'statrow', `<b>${STATS[k].n}</b><i>${S.st[k]}</i><small>${STATS[k].t}</small>`);
        r.appendChild(btn('+', () => spendStat(k), 'primary', S.sp <= 0 || S.st[k] >= 10)); a.appendChild(r);
      });
      head(a, `Урон ${dmgRange('body').join('–')} · попадание в корпус ${Math.round(PARTS.body.hit * 100 + (S.st.acc - 1) * 4 + (weaponItem().acc || 0))}% · защита ${armorDef()}`);
      break;
    case 'diary':
      head(a, `Записки: ${S.notes.length}/${NOTES.length}. Их находят в мебели.`);
      S.notes.slice().sort((x, y) => x - y).forEach(i => head(a, `«${NOTES[i]}»`, 'note'));
      break;
    case 'ach':
      ACHS.forEach(x => head(a, `${meta.ach[x.id] ? '★' : '☆'} <b>${x.n}</b> — ${x.t}`, meta.ach[x.id] ? 'got' : 'dim'));
      break;
    case 'lift': {
      a.appendChild(illust('lift', { ok: fd.lift === 'ok' }));
      if (fd.lift !== 'ok') {
        const c = repairCost(S.floor);
        head(a, 'Лифт на этом этаже не работает: оборваны провода. Почини — и отсюда можно будет ездить в убежище и на другие этажи с исправным лифтом.');
        const b = el('div', 'recipe' + (canPay(c) ? ' ready' : ''), `<div class="rout"><span class="it up">${ico('lift')}</span><div><b>Починить лифт</b><small>Поездки бесплатны</small></div></div>` + needHtml(c));
        b.appendChild(btn('Починить', repairLift, 'primary', !canPay(c))); a.appendChild(b);
      } else {
        head(a, 'Куда ехать? Лифт останавливается только там, где он исправен.');
        const dest = Object.keys(S.lifts).map(Number).filter(f => f !== S.floor).sort((x, y) => y - x);
        dest.forEach(f => a.appendChild(btn(f === TOP ? `${ico('home')} Убежище — сотый этаж` : `Этаж ${f} · ${ZONES[zoneOf(f)].name}`, () => rideTo(f), f === TOP ? 'full primary' : 'full')));
        if (!dest.length) head(a, 'Других исправных лифтов пока нет.');
      }
      break;
    }
    case 'vend':
      a.appendChild(illust('vending'));
      head(a, 'Торговый автомат. Монет давно нет, но за стеклом ещё видны шоколадки. Можно раскачать его — осторожно, он тяжёлый.');
      a.appendChild(btn('Раскачать автомат', kickVend, 'full primary', !fd.vend || fd.vend.used));
      break;
    case 'npc': {
      const n = room(S.loc).npc;
      a.appendChild(illust('npc'));
      head(a, `«${n.line}: <b>${ITEMS[n.want].n.toLowerCase()}</b>. Взамен дам: ${ITEMS[n.give].n.toLowerCase()}».`, 'speech');
      a.appendChild(el('div', 'trade', `<div>${iconImg(n.want)}<small>Отдать</small><b>${ITEMS[n.want].n}</b><i class="${has(n.want) ? 'ok' : 'no'}">у тебя: ${S.inv[n.want] || 0}</i></div><span class="arrow">${ico('swap')}</span><div>${iconImg(n.give)}<small>Получить</small><b>${ITEMS[n.give].n}</b><i>${itemEffect(n.give)}</i></div>`));
      a.appendChild(btn('Обменяться', () => npcTrade(true), 'full primary', !has(n.want)));
      a.appendChild(btn('Отказать', () => npcTrade(false), 'full'));
      break;
    }
    case 'bed':
      a.appendChild(illust('bed', { lvl: S.bed }));
      head(a, `Сон восстанавливает ${Math.round(sleepHeal() * 100)}% здоровья и снимает недуги. Стоит ${COST.sleep} сытости.`);
      a.appendChild(btn(`Лечь спать (−${COST.sleep} сытости)`, () => fadeThen('Прошло несколько часов…', sleep, 900), 'full primary', S.food < COST.sleep));
      a.appendChild(upgradeCard('bed'));
      break;
    case 'bench': head(a, 'Верстак: оружие и броня из найденных материалов.'); a.appendChild(upgradeCard('bench')); renderCraft(a, 'bench'); renderCraft(a, 'any'); break;
    case 'stove': head(a, 'Плита: готовая еда в несколько раз сытнее сырой.'); a.appendChild(upgradeCard('kitchen')); renderCraft(a, 'kitchen'); break;
    case 'start': {
      const ta = el('div', 'title-art'); ta.innerHTML = TITLE_SVG + '<div class="tt"><b>БАШНЯ</b><span>сто этажей вниз</span></div>'; a.appendChild(ta);
      head(a, 'Ты заперт в убежище на сотом этаже высотки. Еда кончается. Спустись на первый этаж и выберись на улицу.', 'lead');
      a.appendChild(btn(`Сложность: <b>${DIFFS[meta.diff]}</b>`, () => { meta.diff = (meta.diff + 1) % 3; saveMeta(); render(); }, 'full'));
      a.appendChild(btn('Начать', startRun, 'full primary big'));
      a.appendChild(btn('Как играть', () => { S.helpFrom = 'start'; S.screen = 'help'; render(); }));
      a.appendChild(btn('Настройки', openSettings));
      if ((meta.deepest || TOP) < TOP) head(a, `Глубже всего ты спускался до этажа ${meta.deepest}. Побегов: ${meta.wins || 0}.`, 'dim');
      break;
    }
    case 'settings':
      head(a, 'Сохранение идёт автоматически; здесь его можно перенести на другое устройство.');
      a.appendChild(btn(`Звук: ${muted ? 'выкл' : 'вкл'}`, () => { setMuted(!muted); render(); }, 'full'));
      a.appendChild(btn(`Вибрация: ${vibOn ? 'вкл' : 'выкл'}`, () => { setVib(!vibOn); vib(30); render(); }, 'full'));
      { const G = window.GL3D, ok = G && G.ready, mode = !ok || !G.enabled ? 'svg' : G.quality === 'low' ? 'low' : 'high';
        const NAMES = { high: 'высокая', low: 'быстрая (без эффектов)', svg: ok ? 'минимальная' : 'минимальная (WebGL недоступен)' };
        a.appendChild(btn(`Графика: ${NAMES[mode]}`, () => { if (!ok) return; if (mode === 'high') G.setQuality('low'); else if (mode === 'low') G.setEnabled(false); else { G.setEnabled(true); G.setQuality('high'); } render(); }, 'full', !ok)); }
      a.appendChild(btn(`Размер текста: ${FONTS[fontIdx][0]}`, () => { setFont((fontIdx + 1) % FONTS.length); render(); }, 'full'));
      a.appendChild(btn('Экспорт сохранения', () => { transferMode = 'export'; transferMsg = ''; S.screen = 'transfer'; render(); }));
      a.appendChild(btn('Импорт сохранения', () => { transferMode = 'import'; transferMsg = ''; S.screen = 'transfer'; render(); }));
      if (S.settingsFrom !== 'start') a.appendChild(btn(confirmGiveUp ? 'Нажми ещё раз: забег закончится' : 'Сдаться и начать заново', () => { if (confirmGiveUp) { confirmGiveUp = false; try { localStorage.removeItem(SAVE_KEY); } catch (e) {} newGame(); } else { confirmGiveUp = true; render(); } }, 'full danger'));
      a.appendChild(btn(confirmReset ? 'Нажми ещё раз: сотрёт весь прогресс и достижения' : 'Сбросить весь прогресс', resetAll, 'full danger'));
      a.appendChild(btn('Назад', () => { confirmReset = false; confirmGiveUp = false; S.screen = S.settingsFrom || 'start'; render(); }, 'full'));
      break;
    case 'transfer': {
      const ex = transferMode === 'export';
      head(a, ex ? 'Скопируй этот код и сохрани его (заметки, почта). В нём текущий забег и весь прогресс.' : 'Вставь код сохранения. Текущий забег и прогресс будут заменены.');
      const ta = el('textarea', 'full'); ta.rows = 6; ta.spellcheck = false;
      if (ex) { ta.value = exportCode(); ta.readOnly = true; ta.onfocus = () => ta.select(); } else ta.placeholder = 'Код сохранения…';
      a.appendChild(ta);
      if (transferMsg) head(a, transferMsg);
      if (ex) a.appendChild(btn('Скопировать', () => { ta.focus(); ta.select(); try { navigator.clipboard.writeText(ta.value).then(() => log('Код скопирован.', 'good'), () => {}); } catch (e) {} }, 'full primary'));
      else a.appendChild(btn('Загрузить сохранение', () => importCode(ta.value), 'full primary'));
      a.appendChild(btn('Назад', () => { S.screen = 'settings'; render(); }, 'full'));
      break;
    }
    case 'help':
      HELP.forEach(t => head(a, t, 'rule'));
      a.appendChild(btn('Понятно', () => { S.screen = S.helpFrom || 'start'; render(); }, 'full primary'));
      break;
    case 'dead':
      a.appendChild(illust('dead', { killer: S.killer, wi: heroLook().wi, ai: heroLook().ai }));
      head(a, S.killer ? `Тебя убил ${S.killer}.` : 'Голод и раны сделали своё дело.', 'lead');
      head(a, statsLine());
      a.appendChild(btn('Начать заново', newGame, 'full primary'));
      break;
    case 'win':
      a.appendChild(illust('win', { end: S.endId, wi: heroLook().wi, ai: heroLook().ai }));
      head(a, `Концовка «${ENDINGS[S.endId].n}». ${ENDINGS[S.endId].t}`, 'lead');
      head(a, statsLine());
      a.appendChild(btn(`Новая игра+ (круг ${(S.cycle || 0) + 2}, герой сохраняется)`, newGamePlus, 'full primary'));
      a.appendChild(btn('Новая игра с нуля', newGame, 'full'));
      break;
  }
  layoutUI();
  renderDock();
}

// ---------- настройки, перенос сохранения ----------
let transferMode = 'export', confirmReset = false, confirmGiveUp = false, transferMsg = '';
const enc = o => btoa(unescape(encodeURIComponent(JSON.stringify(o))));
const dec = t => JSON.parse(decodeURIComponent(escape(atob(t.trim()))));
function exportCode() {
  const snap = Object.assign({}, S);
  if (snap.screen === 'settings' || snap.screen === 'transfer') snap.screen = 'play';
  return enc({ v: 3, S: snap, best, meta });
}
function importCode(code) {
  let d; try { d = dec(code); } catch (e) { d = null; }
  if (!d || d.v !== 3 || !d.S || typeof d.S.floor !== 'number' || !d.meta) { transferMsg = 'Код не подходит: скопируй его целиком из экспорта этой версии игры.'; render(); return; }
  try { localStorage.setItem(SAVE_KEY, JSON.stringify({ S: d.S, best: d.best || 0 })); localStorage.setItem(META_KEY, JSON.stringify(d.meta)); }
  catch (e) { transferMsg = 'Не удалось записать сохранение.'; render(); return; }
  location.reload();
}
function resetAll() {
  if (!confirmReset) { confirmReset = true; render(); return; }
  try { localStorage.removeItem(SAVE_KEY); localStorage.removeItem(META_KEY); } catch (e) {}
  location.reload();
}
function openSettings() { if (S.screen === 'fight') return; S.settingsFrom = S.screen === 'start' ? 'start' : 'play'; confirmReset = false; confirmGiveUp = false; S.screen = 'settings'; render(); }

// ---------- кнопка «Назад» (Android) ----------
function backAction() {
  if ($('log').classList.contains('open')) { $('log').classList.remove('open'); return true; }
  if ($('aim').classList.contains('open')) { closeAim(); return true; }
  const sc = S.screen;
  if (sc === 'help') { S.screen = S.helpFrom || 'start'; render(); return true; }
  if (sc === 'transfer') { S.screen = 'settings'; render(); return true; }
  if (sc === 'settings') { S.screen = S.settingsFrom || 'start'; render(); return true; }
  if (SHEET_TITLES[sc] && !['start', 'dead', 'win'].includes(sc)) { back(); return true; }
  return false;
}
try {
  const App = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App;
  if (App) App.addListener('backButton', () => { if (!backAction()) App.exitApp(); });
} catch (e) {}

// ---------- старт ----------
initScene();
$('btn-fast').innerHTML = ico('fast'); $('btn-set').innerHTML = ico('gear'); $('i-hp').innerHTML = ico('heart'); $('i-en').innerHTML = ico('hunger');
$('mute').onclick = () => { setMuted(!muted); sfx('click'); }; setMuted(muted);
$('log').onclick = () => $('log').classList.toggle('open');
$('radio').innerHTML = ico('radio'); $('radio').onclick = () => { sfx('click'); $('radio').classList.remove('new'); $('log').classList.toggle('open'); };
$('aim-x').innerHTML = ico('close'); $('aim-x').onclick = () => { sfx('click'); closeAim(); }; $('aim').onclick = ev => { if (ev.target.id === 'aim') closeAim(); };
$('i-fhp').innerHTML = ico('heart');
$('btn-fast').onclick = () => { walkMs = walkMs < 400 ? 520 : 260; try { localStorage.setItem('tower-fast', walkMs < 400 ? '1' : '0'); } catch (e) {} render(); };
$('btn-set').onclick = () => { sfx('click'); openSettings(); };
if (load()) { log('Игра загружена.'); if (S.screen !== 'fight') S.screen = 'play'; render(); } else newGame();
