'use strict';
const TOP = 30;
const SAVE_KEY = 'tower-save-v2';
const $ = id => document.getElementById(id);
const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const chance = p => Math.random() < p;

// ---------- данные ----------
const ZONES = [
  { name: 'Нижние этажи',  intro: 'Сырые коридоры, гудят трубы. Где-то капает вода.' },
  { name: 'Средние этажи', intro: 'Здесь чище, но тише. Слишком тихо. На стенах свежие следы когтей.' },
  { name: 'Верхние этажи', intro: 'Стёкла целы, свет ровный. Кто-то поддерживает здесь порядок.' },
];
const zoneOf = f => f <= 10 ? 0 : f <= 20 ? 1 : 2;

const ENEMIES = [
  [ { n: 'Крыса-переросток', hp: 10, d: [2, 3], xp: 5 },
    { n: 'Мародёр',          hp: 14, d: [2, 4], xp: 7 },
    { n: 'Ржавый дрон',      hp: 12, d: [3, 4], xp: 8, armored: true },
    { n: 'Скиталец',         hp: 16, d: [3, 5], xp: 9 },
    { n: 'Бродячий пёс',     hp: 11, d: [2, 4], xp: 6 },
    { n: 'Сборщик',          hp: 15, d: [3, 4], xp: 8, poison: true } ],
  [ { n: 'Охотник',          hp: 26, d: [5, 8], xp: 16 },
    { n: 'Мутант',           hp: 32, d: [6, 9], xp: 20, poison: true },
    { n: 'Охранный робот',   hp: 30, d: [6, 8], xp: 18, armored: true },
    { n: 'Культист',         hp: 24, d: [5, 9], xp: 15, poison: true },
    { n: 'Тюремщик',         hp: 34, d: [6, 8], xp: 19, armored: true },
    { n: 'Ползун',           hp: 28, d: [5, 8], xp: 17, poison: true } ],
  [ { n: 'Страж',            hp: 45, d: [9, 13],  xp: 30 },
    { n: 'Химера',           hp: 52, d: [10, 14], xp: 36, poison: true },
    { n: 'Дрон-палач',       hp: 48, d: [10, 12], xp: 34, armored: true },
    { n: 'Тень',             hp: 40, d: [9, 15],  xp: 32, poison: true },
    { n: 'Часовой',          hp: 50, d: [10, 13], xp: 35, armored: true },
    { n: 'Наместник',        hp: 46, d: [9, 14],  xp: 33 } ],
];
const BOSSES = {
  10: { n: 'Привратник',      hp: 70,  d: [6, 9],   xp: 60,  boss: true },
  20: { n: 'Смотритель',      hp: 120, d: [10, 15], xp: 120, boss: true, armored: true },
  30: { n: 'Хозяин башни',    hp: 200, d: [14, 20], xp: 300, boss: true, poison: true },
};

const WEAPONS = [
  { n: 'Кулаки', d: 0 },
  { n: 'Труба', d: 3, c: { scrap: 4 } },
  { n: 'Бита с гвоздями', d: 5, c: { scrap: 6, cloth: 2 } },
  { n: 'Мачете', d: 8, c: { scrap: 10, cloth: 3 } },
  { n: 'Шоковая дубинка', d: 12, c: { scrap: 14, chem: 4 } },
  { n: 'Плазменный резак', d: 17, c: { scrap: 20, chem: 8 } },
  { n: 'Ионный клинок', d: 22, c: { scrap: 28, chem: 14, cloth: 6 } },
];
const ARMORS = [
  { n: 'Лохмотья', a: 0 },
  { n: 'Куртка', a: 1, c: { cloth: 4, scrap: 2 } },
  { n: 'Пластины', a: 2, c: { scrap: 8, cloth: 4 } },
  { n: 'Кевлар', a: 4, c: { cloth: 8, chem: 3, scrap: 6 } },
  { n: 'Экзоскелет', a: 6, c: { scrap: 18, chem: 8, cloth: 6 } },
  { n: 'Нанопластины', a: 8, c: { scrap: 26, chem: 14, cloth: 10 } },
];
const RECIPES = {
  meds:    { n: 'Бинт',         c: { cloth: 2 } },
  medkit:  { n: 'Аптечка',      c: { cloth: 2, chem: 3 } },
  stim:    { n: 'Стимулятор',   c: { chem: 3, scrap: 1 } },
  grenade: { n: 'Граната',      c: { chem: 2, scrap: 2 } },
};
const RES_ICON = { scrap: '🔩', cloth: '🧵', chem: '🧪', food: '🍖', meds: '🩹', medkit: '💉', stim: '⚡', grenade: '💣' };
const costText = c => Object.entries(c).map(([k, v]) => `${v}${RES_ICON[k]}`).join(' ');
const canPay = c => Object.entries(c).every(([k, v]) => S[k] >= v);
const pay = c => Object.entries(c).forEach(([k, v]) => S[k] -= v);

const PERKS = [
  { id: 'crit',    n: 'Меткость',         t: '+15% шанс крита (×2 урона)' },
  { id: 'scav',    n: 'Падальщик',        t: '+1🔩 с каждого склада' },
  { id: 'stomach', n: 'Крепкий желудок',  t: 'Паёк даёт +12 энергии, яд слабее' },
  { id: 'vital',   n: 'Живучесть',        t: '+10 макс. здоровья' },
  { id: 'hands',   n: 'Ловкие руки',      t: 'Первый предмет в бою не тратит ход' },
  { id: 'thick',   n: 'Толстая кожа',     t: '+1 к защите' },
];
const NOTES = [
  'Лифты остановились в день, когда погас свет. Мы думали, это на пару часов.',
  'Нижние этажи держатся на торговле. Лом — наша валюта, пока есть что разбирать.',
  'Говорят, наверху всё ещё есть тот, кто следит за порядком.',
  'Не ешь то, что пахнет сладко. Мутанты приманивают запахом.',
  'Я считал этажи. Тридцать. Выше — только крыша, если верить чертежам.',
  'Привратник не злой. Он просто делает то, для чего его оставили.',
  'Дроны слушают шаги. Ходи у стены, там пол не скрипит.',
  'Смотритель помнит каждого, кто проходил. Лучше, чем ты сам.',
  'Если найдёшь радио — не выбрасывай. Иногда оно ловит верхние этажи.',
  'Тень не прячется в темноте. Она и есть темнота.',
  'Хозяин башни когда-то был строителем. Теперь он её часть.',
  'Крыша — не конец. Это окно.',
];
const ROOM_WEIGHTS = { loot: 28, enemy: 28, rest: 8, trap: 10, trader: 6, event: 10, empty: 10 };
const ROOM_HINTS = {
  loot:   ['Пахнет машинным маслом.', 'Из-под двери тянет затхлостью склада.', 'Слышен звон металла.'],
  enemy:  ['Из-за двери слышно рычание.', 'На полу свежие следы.', 'Кто-то тяжело дышит внутри.'],
  rest:   ['Тёплый свет из щели.', 'Пахнет чаем.'],
  trap:   ['Проводка торчит из стены.', 'Пол у порога подозрительно просел.'],
  trader: ['Слышны голоса и звон монет.', 'Над дверью висит самодельная вывеска.'],
  event:  ['Дверь приоткрыта. Тишина.', 'Из комнаты играет радио.'],
  empty:  ['Ничем не пахнет.', 'Дверь заперта изнутри — или так кажется.'],
  stairs: ['Тянет сквозняком.', 'Слышно эхо шагов выше.'],
};

// ---------- состояние ----------
let S, best = 0;

const base = () => ({
  floor: 1, hp: 30, maxHp: 30, en: 20, maxEn: 20, lvl: 1, xp: 0,
  scrap: 0, cloth: 0, chem: 0, food: 2, meds: 1, medkit: 0, stim: 0, grenade: 0,
  wi: 0, ai: 0, poison: 0, bonusDmg: 0, screen: 'map', rooms: [], stairs: false,
  enemy: null, defending: false, trader: null, event: null, over: false,
  perks: [], pendingPerks: 0, perkChoices: [], notes: [], freeUsed: false,
});
const has = id => S.perks.includes(id);

function newGame() {
  S = base();
  $('log').innerHTML = '';
  log('Ты приходишь в себя у подножия башни. Лифты мертвы. Единственный путь — вверх.', 'story');
  log(ZONES[0].intro, 'story');
  newFloor();
}

function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify({ S, best })); } catch (e) {} }
function load() {
  try {
    const d = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (d) { best = d.best || 0; if (d.S && !d.S.over) { S = Object.assign(base(), d.S); return true; } }
  } catch (e) {}
  return false;
}

function log(text, cls = '') {
  const el = $('log');
  [...el.children].forEach(c => c.classList.add('old'));
  const p = document.createElement('p');
  p.className = cls; p.innerHTML = text;
  el.appendChild(p);
  while (el.children.length > 60) el.removeChild(el.firstChild);
  el.scrollTop = el.scrollHeight;
}

// ---------- этажи ----------
function weightedRoom() {
  const total = Object.values(ROOM_WEIGHTS).reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (const [t, w] of Object.entries(ROOM_WEIGHTS)) { if ((r -= w) < 0) return t; }
  return 'empty';
}

function hintFor(type) {
  const real = chance(0.75);
  const t = real ? type : pick(Object.keys(ROOM_HINTS));
  return pick(ROOM_HINTS[t]);
}

function newFloor() {
  S.screen = 'map'; S.stairs = false; S.enemy = null;
  if (BOSSES[S.floor]) {
    S.rooms = [{ type: 'boss', done: false, hint: 'Огромная дверь. За ней что-то дышит.' }];
    log(`Этаж <b>${S.floor}</b>. Путь наверх охраняет ${BOSSES[S.floor].n}.`, 'story');
  } else {
    const n = 5, stairsAt = rnd(0, n - 1);
    S.rooms = Array.from({ length: n }, (_, i) => {
      const type = i === stairsAt ? 'stairs' : weightedRoom();
      return { type, done: false, hint: hintFor(type) };
    });
    log(`Этаж <b>${S.floor}</b>. Пять дверей. Одна ведёт наверх.`);
  }
  render(); save();
}

function openRoom(i) {
  const r = S.rooms[i];
  if (S.screen !== 'map' || r.done) return;
  if (!spendEnergy(1)) return;
  switch (r.type) {
    case 'loot': {
      r.done = true;
      const s = rnd(1, 3) + Math.floor(S.floor / 6) + (has('scav') ? 1 : 0);
      S.scrap += s; let msg = `${s}🔩`;
      if (chance(0.5)) { const c = rnd(1, 2); S.cloth += c; msg += `, ${c}🧵`; }
      if (chance(0.3)) { const c = rnd(1, 2); S.chem += c; msg += `, ${c}🧪`; }
      if (chance(0.35)) { S.food++; msg += ', 🍖'; }
      if (chance(0.15)) { S.meds++; msg += ', 🩹'; }
      if (chance(0.2)) {
        const left = NOTES.map((_, i) => i).filter(i => !S.notes.includes(i));
        if (left.length) { S.notes.push(pick(left)); msg += ', 📖 заметка'; }
      }
      log(`Склад. Находишь: ${msg}.`, 'good'); break;
    }
    case 'rest': {
      r.done = true;
      S.hp = Math.min(S.maxHp, S.hp + 8); S.en = Math.min(S.maxEn, S.en + 6); S.poison = 0;
      log('Кто-то оставил здесь койку и чайник. Ты отдыхаешь: +8 здоровья, +6 энергии.', 'good'); break;
    }
    case 'trap': {
      r.done = true;
      const dmg = Math.max(1, rnd(3, 6) + Math.floor(S.floor / 3) - Math.floor(defArmor() / 2));
      S.hp -= dmg; log(`Ловушка! Теряешь ${dmg} здоровья.`, 'bad');
      if (checkDeath()) return; break;
    }
    case 'empty': r.done = true; log('Пустая комната. Только пыль.'); break;
    case 'stairs':
      r.done = true; S.stairs = true; log('Лестница наверх найдена.', 'good'); break;
    case 'trader': r.done = true; S.screen = 'trader'; log('Торговец поднимает глаза: «Лом есть — товар есть».'); break;
    case 'event': r.done = true; return startEvent();
    case 'enemy': r.done = true; return startFight(spawnEnemy());
    case 'boss': r.done = true; return startFight(Object.assign({}, BOSSES[S.floor]));
  }
  render(); save();
}

function climb() {
  if (!S.stairs || S.screen !== 'map') return;
  if (!spendEnergy(2)) return;
  if (S.floor >= TOP) return win();
  S.floor++;
  best = Math.max(best, S.floor);
  if (S.floor === 11 || S.floor === 21) log(ZONES[zoneOf(S.floor)].intro, 'story');
  newFloor();
}

// ---------- ресурсы ----------
const weapon = () => WEAPONS[S.wi];
const armor = () => ARMORS[S.ai];
const defArmor = () => armor().a + (has('thick') ? 1 : 0);

function spendEnergy(n) {
  S.en -= n;
  if (S.en < 0) {
    S.en = 0; S.hp -= 2;
    log('Силы кончились. Каждый шаг даётся с болью: -2 здоровья.', 'bad');
    if (checkDeath()) return false;
  }
  return true;
}

function useItem(kind) {
  if (S[kind] <= 0) return;
  if (kind === 'food') {
    if (S.en >= S.maxEn) return;
    const g = has('stomach') ? 12 : 8; S.food--; S.en = Math.min(S.maxEn, S.en + g); log(`Ты ешь. +${g} энергии.`, 'good');
  } else if (kind === 'meds') {
    if (S.hp >= S.maxHp) return;
    S.meds--; S.hp = Math.min(S.maxHp, S.hp + 10); log('Бинт наложен. +10 здоровья.', 'good');
  } else if (kind === 'medkit') {
    if (S.hp >= S.maxHp && !S.poison) return;
    S.medkit--; S.hp = Math.min(S.maxHp, S.hp + 25); S.poison = 0;
    log('Аптечка: +25 здоровья, яд нейтрализован.', 'good');
  } else if (kind === 'stim') {
    if (S.en >= S.maxEn) return;
    S.stim--; S.en = Math.min(S.maxEn, S.en + 10); log('Стимулятор: +10 энергии.', 'good');
  }
  if (S.screen === 'fight' && !(has('hands') && !S.freeUsed && (S.freeUsed = true))) enemyTurn(); else { render(); save(); }
}

function craft(kind, idx) {
  let item, c;
  if (kind === 'weapon') { item = WEAPONS[idx]; c = item.c; }
  else if (kind === 'armor') { item = ARMORS[idx]; c = item.c; }
  else { item = RECIPES[idx]; c = item.c; }
  if (!canPay(c)) return;
  pay(c);
  if (kind === 'weapon') { S.wi = idx; log(`Создано: ${item.n} (урон +${item.d}).`, 'good'); }
  else if (kind === 'armor') { S.ai = idx; log(`Создано: ${item.n} (защита ${item.a}).`, 'good'); }
  else { S[idx]++; log(`Создано: ${item.n}.`, 'good'); }
  render(); save();
}

// ---------- торговец ----------
const GOODS = [
  { n: 'Паёк',         give: { food: 1 },   cost: 2 },
  { n: 'Бинт',         give: { meds: 1 },   cost: 3 },
  { n: 'Аптечка',      give: { medkit: 1 }, cost: 7 },
  { n: 'Стимулятор',   give: { stim: 1 },   cost: 5 },
  { n: 'Ткань ×2',     give: { cloth: 2 },  cost: 3 },
  { n: 'Химикаты ×2',  give: { chem: 2 },   cost: 6 },
  { n: 'Граната',      give: { grenade: 1 }, cost: 6 },
];
function buy(i) {
  const g = GOODS[i];
  if (S.scrap < g.cost) return;
  S.scrap -= g.cost;
  Object.entries(g.give).forEach(([k, v]) => S[k] += v);
  log(`Куплено: ${g.n}.`, 'good'); render(); save();
}

// ---------- события ----------
const EVENTS = [
  { text: 'У стены сидит раненый. Он смотрит на тебя и молчит.',
    choices: [
      { l: 'Помочь (-1 🩹)', ok: () => S.meds > 0, run: () => { S.meds--; S.scrap += 3; gainXp(10); log('Он благодарит и делится запасами: +3🔩.', 'good'); } },
      { l: 'Обыскать его', run: () => { S.scrap += 4; log('Ты забираешь +4🔩. Ему уже всё равно.'); } },
      { l: 'Уйти', run: () => log('Ты проходишь мимо.') } ] },
  { text: 'Коридор впереди залит мерцающим светом. Пол трещит.',
    choices: [
      { l: 'Пройти', run: () => { if (chance(0.5)) { S.hp -= 4; log('Обвал! -4 здоровья.', 'bad'); } else { S.chem += 3; log('За завалом нашёлся ящик: +3🧪.', 'good'); } } },
      { l: 'Обойти', run: () => log('Ты находишь обход, но теряешь время.') } ] },
  { text: 'Ящик с кодовым замком. Внутри что-то есть.',
    choices: [
      { l: 'Взломать (-2 ⚡ энергии)', run: () => { spendEnergy(2); if (chance(0.6)) { S.scrap += 5; S.medkit++; log('Замок поддаётся: +5🔩 и аптечка.', 'good'); } else { log('Сработала сигнализация!', 'bad'); return 'fight'; } } },
      { l: 'Бросить', run: () => log('Не стоит рисковать.') } ] },
  { text: 'Заброшенная кухня. На плите остатки еды.',
    choices: [
      { l: 'Съесть на месте', run: () => { S.en = Math.min(S.maxEn, S.en + 6); if (chance(0.25)) { S.poison = 3; log('+6 энергии, но еда была несвежей: отравление.', 'bad'); } else log('+6 энергии.', 'good'); } },
      { l: 'Забрать с собой', run: () => { S.food++; log('Ты забираешь паёк.', 'good'); } } ] },
  { text: 'На столе работает старое радио. Сквозь помехи слышен чей-то голос.',
    choices: [
      { l: 'Слушать', run: () => { spendEnergy(1); gainXp(8); log('Обрывки сообщений о верхних этажах. +8 опыта.'); } },
      { l: 'Разобрать на запчасти', run: () => { S.chem += 2; S.cloth += 1; log('+2🧪 и +1🧵.', 'good'); } } ] },
  { text: 'Библиотека. Половина полок обгорела, но часть книг уцелела.',
    choices: [
      { l: 'Читать (-1 энергии)', run: () => { spendEnergy(1); gainXp(10); log('Ты находишь схемы и чей-то дневник. +10 опыта.', 'good'); } },
      { l: 'Сжечь книги ради тепла', run: () => { S.en = Math.min(S.maxEn, S.en + 5); log('Стало теплее. +5 энергии.'); } } ] },
  { text: 'В клетке сидит странное существо и смотрит на тебя.',
    choices: [
      { l: 'Открыть клетку', run: () => { if (chance(0.5)) { S.scrap += 4; log('Существо убегает, оставив тебе +4🔩.', 'good'); } else { log('Оно бросается на тебя!', 'bad'); return 'fight'; } } },
      { l: 'Оставить', run: () => log('Ты уходишь.') } ] },
  { text: 'Шахта лифта без кабины. Трос уходит вверх.',
    choices: [
      { l: 'Подняться по тросу (-5 здоровья, +1 этаж)', ok: () => S.hp > 6 && S.floor < TOP - 1 && !BOSSES[S.floor + 1], run: () => { S.hp -= 5; log('Ладони в кровь, но ты на этаж выше.', 'bad'); return 'skip'; } },
      { l: 'Не рисковать', run: () => log('Слишком опасно.') } ] },
  { text: 'Старый мастер предлагает заточить твоё оружие.',
    choices: [
      { l: 'Заплатить 4🔩 (+1 к урону навсегда)', ok: () => S.scrap >= 4, run: () => { S.scrap -= 4; S.bonusDmg++; log('Клинок стал острее: +1 к урону.', 'good'); } },
      { l: 'Отказаться', run: () => log('Мастер пожимает плечами.') } ] },
  { text: 'В нише стоит каменный алтарь со свежими подношениями.',
    choices: [
      { l: 'Принести жертву (-6 здоровья)', ok: () => S.hp > 7, run: () => { S.hp -= 6; gainXp(12); S.chem += 2; log('Что-то отвечает тебе: +12 опыта, +2🧪.', 'good'); } },
      { l: 'Уйти', run: () => log('Лучше не трогать.') } ] },
  { text: 'Заброшенная аптека. Решётка заперта.',
    choices: [
      { l: 'Выломать (-3 энергии)', run: () => { spendEnergy(3); if (chance(0.7)) { S.medkit += 2; log('Внутри 2 аптечки!', 'good'); } else { S.hp -= 5; log('Решётка падает на тебя: -5 здоровья.', 'bad'); } } },
      { l: 'Пройти мимо', run: () => log('Ты оставляешь аптеку.') } ] },
];

function startEvent() {
  const ev = pick(EVENTS);
  S.event = ev; S.screen = 'event';
  log(ev.text, 'story');
  render(); save();
}
function eventChoice(i) {
  const res = S.event.choices[i].run();
  S.event = null;
  if (checkDeath()) return;
  if (res === 'fight') return startFight(spawnEnemy());
  if (res === 'skip') { S.floor++; best = Math.max(best, S.floor); return newFloor(); }
  S.screen = 'map'; render(); save();
}

// ---------- бой ----------
function spawnEnemy() {
  const e = Object.assign({}, pick(ENEMIES[zoneOf(S.floor)]));
  e.hp += Math.floor((S.floor - 1) % 10 * 1.5);
  return e;
}
function startFight(e) {
  e.maxHp = e.hp; S.enemy = e; S.screen = 'fight'; S.defending = false; S.freeUsed = false;
  log(`Перед тобой <span class="enemy">${e.n}</span> (${e.hp} HP)!`);
  render(); save();
}
function playerDamage(mult = 1) {
  let d = Math.round((rnd(2, 4) + weapon().d + S.lvl + S.bonusDmg) * mult);
  if (S.enemy.armored) d = Math.max(1, d - 2);
  return d;
}
function attack(heavy) {
  if (heavy) { if (S.en < 2) return; S.en -= 2; }
  const hit = heavy ? 0.7 : 0.9;
  if (!chance(hit)) log('Ты промахиваешься.');
  else {
    let d = playerDamage(heavy ? 1.8 : 1);
    const crit = has('crit') && chance(0.15);
    if (crit) d *= 2;
    S.enemy.hp -= d; log(`${crit ? 'Критический удар! ' : ''}Ты бьёшь: <b>${d}</b> урона.`);
  }
  if (S.enemy.hp <= 0) return victory();
  S.defending = false; enemyTurn();
}
function throwGrenade() {
  if (S.grenade <= 0) return;
  S.grenade--; S.enemy.hp -= 14; log('Граната! <b>14</b> урона, броня не помогает.');
  if (S.enemy.hp <= 0) return victory();
  S.defending = false; enemyTurn();
}
function defend() { S.defending = true; log('Ты прикрываешься.'); enemyTurn(); }
function flee() {
  if (S.enemy.boss) { log('От него не сбежать!', 'bad'); return enemyTurn(); }
  if (chance(0.5)) {
    log('Ты удираешь.', 'good');
    S.enemy = null; S.screen = 'map'; S.defending = false;
    if (!spendEnergy(2)) return;
    render(); save();
  } else { log('Сбежать не удалось!', 'bad'); S.defending = false; enemyTurn(); }
}
function enemyTurn() {
  const e = S.enemy;
  let dmg = Math.max(1, rnd(e.d[0], e.d[1]) - defArmor());
  if (S.defending) dmg = Math.ceil(dmg / 2);
  S.hp -= dmg;
  log(`<span class="enemy">${e.n}</span> наносит <b>${dmg}</b> урона.`, 'bad');
  if (e.poison && !S.defending && chance(0.35) && !S.poison) { S.poison = 3; log('Ты отравлен!', 'bad'); }
  S.defending = false;
  if (S.poison > 0) { const pd = has('stomach') ? 1 : 2; S.poison--; S.hp -= pd; log(`Яд: -${pd} здоровья.`, 'bad'); }
  if (checkDeath()) return;
  render(); save();
}
function victory() {
  const e = S.enemy;
  const s = rnd(2, 4) + Math.floor(S.floor / 5) + (e.boss ? 10 : 0);
  S.scrap += s; let msg = `${s}🔩`;
  if (chance(0.3)) { S.cloth++; msg += ', 🧵'; }
  if (chance(0.25)) { S.chem++; msg += ', 🧪'; }
  if (chance(0.3)) { S.food++; msg += ', 🍖'; }
  log(`${e.n} повержен. Добыча: ${msg}.`, 'good');
  gainXp(e.xp);
  S.enemy = null; S.screen = 'map';
  if (e.boss) {
    S.stairs = true;
    if (S.floor >= TOP) return win();
    log('Дверь за ним ведёт к лестнице.', 'good');
  }
  render(); save();
}

function gainXp(n) {
  S.xp += n;
  while (S.xp >= S.lvl * 20) {
    S.xp -= S.lvl * 20; S.lvl++;
    S.maxHp += 6; S.maxEn += 2; S.hp = Math.min(S.maxHp, S.hp + 10);
    log(`Уровень <b>${S.lvl}</b>! Макс. здоровье +6, энергия +2, урон +1.`, 'good');
    S.pendingPerks++;
  }
}

// ---------- перки ----------
function rollPerks() {
  const pool = PERKS.filter(p => !has(p.id)).map(p => p.id);
  if (!pool.length) { S.pendingPerks = 0; return; }
  S.perkChoices = pool.sort(() => Math.random() - 0.5).slice(0, 3);
}
function pickPerk(id) {
  S.perks.push(id); S.pendingPerks--; S.perkChoices = [];
  if (id === 'vital') { S.maxHp += 10; S.hp += 10; }
  log(`Новый перк: <b>${PERKS.find(p => p.id === id).n}</b>.`, 'good');
  render(); save();
}

// ---------- конец игры ----------
function checkDeath() {
  if (S.hp > 0) return false;
  S.hp = 0; S.over = true; S.screen = 'dead';
  best = Math.max(best, S.floor);
  log(`Ты погиб на этаже ${S.floor}.`, 'bad');
  render(); save(); return true;
}
function win() {
  S.over = true; S.screen = 'win'; best = TOP;
  log('<b>Хозяин башни пал. Ты выходишь на крышу и впервые за долгое время видишь небо.</b>', 'good');
  render(); save();
}

// ---------- интерфейс ----------
function btn(text, fn, cls = '', disabled = false) {
  const b = document.createElement('button');
  b.textContent = text; b.className = cls; b.disabled = disabled; b.onclick = fn;
  return b;
}
const head = (a, t) => { const d = document.createElement('div'); d.className = 'head'; d.textContent = t; a.appendChild(d); };

function consumableButtons(a) {
  a.appendChild(btn(`Паёк 🍖${S.food}`, () => useItem('food'), '', S.food <= 0 || S.en >= S.maxEn));
  a.appendChild(btn(`Бинт 🩹${S.meds}`, () => useItem('meds'), '', S.meds <= 0 || S.hp >= S.maxHp));
  a.appendChild(btn(`Аптечка 💉${S.medkit}`, () => useItem('medkit'), '', S.medkit <= 0 || (S.hp >= S.maxHp && !S.poison)));
  a.appendChild(btn(`Стим ⚡${S.stim}`, () => useItem('stim'), '', S.stim <= 0 || S.en >= S.maxEn));
}

function render() {
  $('floor').textContent = `Этаж ${S.floor} / ${TOP}`;
  $('zone').textContent = `${ZONES[zoneOf(S.floor)].name} · рекорд ${best || 1}`;
  $('b-hp').style.width = (S.hp / S.maxHp * 100) + '%';
  $('b-en').style.width = (S.en / S.maxEn * 100) + '%';
  $('b-xp').style.width = (S.xp / (S.lvl * 20) * 100) + '%';
  $('t-hp').textContent = `${S.hp}/${S.maxHp}`;
  $('t-en').textContent = `${S.en}/${S.maxEn}`;
  $('lvl').textContent = `Ур. ${S.lvl}`;
  $('t-xp').textContent = `${S.xp}/${S.lvl * 20}`;
  $('inv').innerHTML =
    `<span>🔩${S.scrap}</span><span>🧵${S.cloth}</span><span>🧪${S.chem}</span>` +
    `<span>💣${S.grenade}</span><span>⚔️ ${weapon().n}</span><span>🛡️ ${armor().n}</span>` + (S.poison ? '<span style="color:var(--hp)">☠️ яд</span>' : '');

  const a = $('actions'); a.innerHTML = '';
  switch (S.screen) {
    case 'map':
      if (S.pendingPerks > 0 && !S.perkChoices.length) rollPerks();
      if (S.pendingPerks > 0) {
        head(a, 'Новый уровень! Выбери перк:');
        S.perkChoices.forEach(id => { const p = PERKS.find(x => x.id === id); a.appendChild(btn(`${p.n} — ${p.t}`, () => pickPerk(id), 'full primary')); });
        break;
      }
      S.rooms.forEach((r, i) => {
        const label = r.done ? `✔ ${roomName(r.type)}` : `🚪 Дверь ${i + 1}: ${r.hint}`;
        a.appendChild(btn(label, () => openRoom(i), 'full' + (r.done ? '' : ' primary'), r.done));
      });
      if (S.stairs) a.appendChild(btn('⬆ Подняться (-2 энергии)', climb, 'full primary'));
      head(a, 'Предметы');
      consumableButtons(a);
      a.appendChild(btn('🛠 Мастерская', () => { S.screen = 'craft'; render(); }));
      a.appendChild(btn(`📖 Дневник ${S.notes.length}/${NOTES.length}`, () => { S.screen = 'diary'; render(); }));
      break;
    case 'diary':
      head(a, `Найденные заметки: ${S.notes.length}/${NOTES.length}`);
      S.notes.slice().sort((x, y) => x - y).forEach(i => { const d = document.createElement('div'); d.className = 'head'; d.style.color = 'var(--text)'; d.textContent = '«' + NOTES[i] + '»'; a.appendChild(d); });
      if (S.perks.length) head(a, 'Перки: ' + S.perks.map(id => PERKS.find(p => p.id === id).n).join(', '));
      a.appendChild(btn('← Назад', () => { S.screen = 'map'; render(); }, 'full'));
      break;
    case 'craft': {
      head(a, `Материалы: 🔩${S.scrap} 🧵${S.cloth} 🧪${S.chem}`);
      const nw = WEAPONS[S.wi + 1], na = ARMORS[S.ai + 1];
      if (nw) a.appendChild(btn(`⚔️ ${nw.n} (+${nw.d}) — ${costText(nw.c)}`, () => craft('weapon', S.wi + 1), 'full', !canPay(nw.c)));
      if (na) a.appendChild(btn(`🛡️ ${na.n} (защита ${na.a}) — ${costText(na.c)}`, () => craft('armor', S.ai + 1), 'full', !canPay(na.c)));
      Object.entries(RECIPES).forEach(([k, r]) => a.appendChild(btn(`${RES_ICON[k]} ${r.n} — ${costText(r.c)}`, () => craft('res', k), 'full', !canPay(r.c))));
      a.appendChild(btn('← Назад', () => { S.screen = 'map'; render(); }, 'full'));
      break;
    }
    case 'trader':
      head(a, `У тебя 🔩${S.scrap}`);
      GOODS.forEach((g, i) => a.appendChild(btn(`${g.n} — ${g.cost}🔩`, () => buy(i), '', S.scrap < g.cost)));
      a.appendChild(btn('Уйти', () => { S.screen = 'map'; render(); }, 'full primary'));
      break;
    case 'event':
      S.event.choices.forEach((c, i) => a.appendChild(btn(c.l, () => eventChoice(i), 'full', c.ok ? !c.ok() : false)));
      break;
    case 'fight': {
      const e = S.enemy;
      a.appendChild(btn(`${e.n}: ${Math.max(0, e.hp)}/${e.maxHp} HP`, () => {}, 'full danger', true));
      a.appendChild(btn('Атаковать', () => attack(false), 'primary'));
      a.appendChild(btn('Мощный удар (-2 эн.)', () => attack(true), 'primary', S.en < 2));
      a.appendChild(btn('Защита', defend));
      a.appendChild(btn('Бежать', flee));
      a.appendChild(btn(`Граната 💣${S.grenade}`, throwGrenade, 'full', S.grenade <= 0));
      consumableButtons(a);
      break;
    }
    default:
      a.appendChild(btn(S.screen === 'win' ? 'Играть снова' : 'Начать заново', newGame, 'full primary'));
  }
}
function roomName(t) {
  return { loot: 'Склад', enemy: 'Логово', rest: 'Убежище', trap: 'Ловушка', trader: 'Торговец',
           event: 'Происшествие', empty: 'Пусто', stairs: 'Лестница', boss: 'Босс' }[t];
}

// ---------- старт ----------
if (load()) { log('Игра загружена.'); render(); } else newGame();
