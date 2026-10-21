'use strict';
const TOP = 100;
const SAVE_KEY = 'tower-save-v2';
const $ = id => document.getElementById(id);
const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const chance = p => Math.random() < p;

// ---------- данные ----------
const ZONES = [
  { name: 'Подвалы',      intro: 'Сырость, гудят трубы. Где-то капает вода.' },
  { name: 'Жилые этажи',  intro: 'Двери квартир распахнуты. На стенах детские рисунки и свежие царапины.' },
  { name: 'Офисы',        intro: 'Ряды пустых столов. Мониторы мигают сами по себе.' },
  { name: 'Лаборатории',  intro: 'Пахнет озоном и химией. За стеклом что-то шевелится.' },
  { name: 'Пентхаус',     intro: 'Стёкла целы, свет ровный. Кто-то поддерживает здесь порядок.' },
];
const zoneOf = f => Math.min(4, Math.floor((f - 1) / 20));
const tierOf = f => f <= 34 ? 0 : f <= 68 ? 1 : 2;
const TIER_START = [0, 34, 68];

// Базовые характеристики; с этажом hp, урон и опыт растут (см. spawnEnemy).
// Особенности: armored, poison, regen, thorns, drain, dodge, enrage, stun, multi, beast (даёт мясо).
const ENEMIES = [
  [ // Подвалы
    { n: 'Крыса-переросток', hp: 9,  d: [1, 2], xp: 5,  beast: true, multi: true },
    { n: 'Бродячий пёс',     hp: 12, d: [2, 3], xp: 6,  beast: true, dodge: true },
    { n: 'Сборщик',          hp: 13, d: [2, 3], xp: 7,  poison: true },
    { n: 'Слизень',          hp: 16, d: [1, 3], xp: 7,  regen: true },
    { n: 'Ржавый дрон',      hp: 12, d: [2, 3], xp: 8,  armored: true },
    { n: 'Летучая мышь',     hp: 8,  d: [1, 2], xp: 5,  beast: true, dodge: true, bleed: true },
    { n: 'Гигантская мокрица', hp: 15, d: [1, 3], xp: 7, beast: true, armored: true } ],
  [ // Жилые этажи
    { n: 'Одичавший сосед',  hp: 15, d: [2, 4], xp: 8,  enrage: true },
    { n: 'Кошка-мутант',     hp: 12, d: [2, 3], xp: 8,  beast: true, dodge: true, poison: true },
    { n: 'Мародёр',          hp: 14, d: [2, 4], xp: 7 },
    { n: 'Ползун',           hp: 14, d: [2, 3], xp: 8,  beast: true, poison: true },
    { n: 'Скиталец',         hp: 16, d: [2, 4], xp: 9,  drain: true },
    { n: 'Бродячий повар',   hp: 16, d: [2, 4], xp: 9,  bleed: true },
    { n: 'Сторожевой пёс',   hp: 15, d: [2, 4], xp: 9,  beast: true, enrage: true } ],
  [ // Офисы
    { n: 'Охранный робот',   hp: 16, d: [2, 4], xp: 9,  armored: true },
    { n: 'Дрон-наблюдатель', hp: 12, d: [2, 3], xp: 9,  drain: true, dodge: true },
    { n: 'Сотрудник',        hp: 15, d: [2, 4], xp: 9,  stun: true },
    { n: 'Турникет-страж',   hp: 18, d: [2, 3], xp: 9,  thorns: true, armored: true },
    { n: 'Менеджер',         hp: 14, d: [3, 4], xp: 10, enrage: true },
    { n: 'Уборщик-автомат',  hp: 17, d: [2, 3], xp: 9,  armored: true, regen: true },
    { n: 'Бухгалтер-призрак', hp: 13, d: [2, 4], xp: 10, dodge: true, stun: true } ],
  [ // Лаборатории
    { n: 'Подопытный',       hp: 18, d: [2, 4], xp: 10, beast: true, enrage: true },
    { n: 'Мутант',           hp: 18, d: [2, 4], xp: 10, beast: true, poison: true, regen: true },
    { n: 'Лаборант-культист', hp: 14, d: [2, 4], xp: 10, stun: true, poison: true },
    { n: 'Дрон-палач',       hp: 17, d: [2, 4], xp: 10, armored: true, thorns: true },
    { n: 'Химера',           hp: 20, d: [2, 4], xp: 11, beast: true, multi: true },
    { n: 'Колба-слизень',    hp: 20, d: [2, 3], xp: 10, poison: true, regen: true },
    { n: 'Скальпельщик',     hp: 15, d: [3, 4], xp: 11, bleed: true, dodge: true } ],
  [ // Пентхаус
    { n: 'Страж',            hp: 18, d: [2, 4], xp: 11, armored: true },
    { n: 'Наместник',        hp: 17, d: [3, 5], xp: 12, enrage: true, stun: true },
    { n: 'Тень',             hp: 15, d: [3, 4], xp: 12, dodge: true, drain: true },
    { n: 'Элитный дрон',     hp: 19, d: [2, 4], xp: 12, armored: true, regen: true },
    { n: 'Королевская химера', hp: 21, d: [2, 4], xp: 13, beast: true, multi: true, poison: true },
    { n: 'Золотая гончая',   hp: 17, d: [3, 4], xp: 12, beast: true, dodge: true, bleed: true },
    { n: 'Метрдотель',       hp: 19, d: [2, 4], xp: 12, stun: true, enrage: true } ],
];
const TRAITS = {
  armored: ['🛡', 'броня'], poison: ['☠', 'яд'], regen: ['♻', 'регенерация'], thorns: ['🌵', 'шипы'],
  drain: ['⚡', 'тянет энергию'], dodge: ['💨', 'увёртлив'], enrage: ['😡', 'свирепеет при ранах'],
  stun: ['💫', 'оглушает'], multi: ['⚔⚔', 'два удара'], bleed: ['🩸', 'кровотечение'],
};
const ICONS = {
  'Крыса-переросток': '🐀', 'Бродячий пёс': '🐕', 'Сборщик': '🧟', 'Слизень': '🦠', 'Ржавый дрон': '🤖', 'Летучая мышь': '🦇', 'Гигантская мокрица': '🐞',
  'Одичавший сосед': '😡', 'Кошка-мутант': '🐈', 'Мародёр': '🕵', 'Ползун': '🐛', 'Скиталец': '🚶', 'Бродячий повар': '🔪', 'Сторожевой пёс': '🐕',
  'Охранный робот': '🔧', 'Дрон-наблюдатель': '🛸', 'Сотрудник': '💼', 'Турникет-страж': '🚧', 'Менеджер': '👔', 'Уборщик-автомат': '🧹', 'Бухгалтер-призрак': '👻',
  'Подопытный': '🧬', 'Мутант': '👹', 'Лаборант-культист': '🥼', 'Дрон-палач': '⚙', 'Химера': '🦁', 'Колба-слизень': '⚗', 'Скальпельщик': '🔬',
  'Страж': '💂', 'Наместник': '👑', 'Тень': '🌑', 'Элитный дрон': '🛰', 'Королевская химера': '🐲', 'Золотая гончая': '🐺', 'Метрдотель': '🎩',
};
const traitIcons = e => Object.keys(TRAITS).filter(k => e[k]).map(k => TRAITS[k][0]).join('');
const traitText = e => { const t = Object.keys(TRAITS).filter(k => e[k]).map(k => TRAITS[k][1]); return t.length ? ' — ' + t.join(', ') : ''; };

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
const SK = { dex: 'Ловкость', str: 'Сила', spd: 'Скорость', acc: 'Точность' };
const SK_INFO = { dex: 'уворот +1.5% за очко', str: 'шанс крита +1.5% за очко', spd: 'шанс лишнего хода +1.5% за очко', acc: 'шанс попадания +2% за очко' };
// у каждого оружия свой навык: за очки в нём оружие бьёт сильнее (+1 урона за 2 очка)
const WEAPON_SKILL = ['spd', 'str', 'str', 'dex', 'spd', 'dex', 'acc'];
// какой уровень верстака нужен, чтобы создать оружие/броню с этим номером
const WEAPON_BENCH = [0, 1, 1, 2, 2, 3, 3];
const ARMOR_BENCH = [0, 1, 1, 2, 3, 3];
const BENCH_UP = [null, null, { scrap: 20, cloth: 6, chem: 4 }, { scrap: 45, cloth: 12, chem: 12 }];
const KITCHEN_UP = [null, null, { scrap: 12, cloth: 4 }, { scrap: 30, chem: 6, cloth: 8 }];
const DISH_LEVEL = { tea: 1, stew: 1, porridge: 1, bar: 1, roast: 2, soup: 2, pie: 2, antidote: 2, broth: 3, skewer: 3, feast: 3 };
// прицельные удары: шанс попадания, множитель урона и эффект
const PARTS = {
  head: { n: 'Голова', hit: 0.55, m: 1.8 },
  body: { n: 'Корпус', hit: 0.85, m: 1.0 },
  arms: { n: 'Руки',   hit: 0.75, m: 0.8, eff: 'weak' },
  legs: { n: 'Ноги',   hit: 0.80, m: 0.8, eff: 'stag' },
};
const HELP = [
  '⚡ Энергия — твои шаги. Каждая дверь и каждый подъём тратят её. На нуле ты теряешь здоровье. Еда и блюда её восстанавливают.',
  '🚪 На этаже три двери и лифт. Подсказки у дверей могут лгать. Комнаты: склады, враги, убежища, ловушки, торговцы, события, автоматы и запертые двери.',
  '🛗 Исправный лифт везёт наверх. Сломанный чинят материалами или обходят по тросу (дорого и опасно). Исправный лифт также ведёт вниз, в убежище.',
  '🏠 Убежище: сон лечит, кухня готовит блюда, верстак создаёт снаряжение. Верстак и кухню можно улучшать.',
  '⚔️ В бою целься: голова бьёт сильнее, но чаще промахивается. Руки ослабляют врага, ноги сбивают его с шага. Смотри на особенности врагов.',
  '⭐ За уровень даются очки навыков. У каждого оружия свой навык, и он делает его сильнее. Перки выбираются при повышении уровня.',
  '🔑 Запертые комнаты открываются ключом или силой. Внутри лучшая добыча.',
  '📞 Иногда звонит телефон: приди на нужный этаж вовремя и получи награду.',
  '🏁 Твои выборы в событиях и найденные записки влияют на концовку. Всего их четыре.',
];
const DIFFS = ['Легко', 'Нормально', 'Тяжело'];
const PASSIVES = [
  { id: 'steady',  n: 'Стойкий',    t: '+20 макс. здоровья, -4 макс. энергии', req: 0 },
  { id: 'first',   n: 'Опережение', t: 'Первый удар в бою: ×1.3 урона и не промахивается', req: 0 },
  { id: 'glutton', n: 'Обжора',     t: 'Еда даёт +50% энергии, но яд длится на 2 хода дольше', req: 10 },
  { id: 'rush',    n: 'Напролом',   t: '+15% урона, но убежать из боя нельзя', req: 25 },
  { id: 'hoarder', n: 'Старатель',  t: '+2 лома со склада, но ловушки бьют на 50% сильнее', req: 40 },
];
const ACTIVES = [
  { id: 'kit',   n: 'Аптечка',         t: 'Раз за забег: +50% здоровья', req: 0 },
  { id: 'hard',  n: 'Второе дыхание',  t: 'Раз за забег: следующие 10 шагов бесплатны', req: 0 },
  { id: 'luck',  n: 'Удача',           t: 'Раз за забег: +15% к попаданию на 15 ударов', req: 15 },
  { id: 'xray',  n: 'Рентген',         t: 'Раз за забег: узнать, что за дверями этажа', req: 30 },
  { id: 'stock', n: 'Запас',           t: 'Раз за забег: +6🔩 +3🧵 +3🧪', req: 50 },
];
const RECIPES = {
  meds:    { n: 'Бинт',         c: { cloth: 2 } },
  medkit:  { n: 'Аптечка',      c: { cloth: 2, chem: 3 } },
  stim:    { n: 'Стимулятор',   c: { chem: 3, scrap: 1 } },
  grenade: { n: 'Граната',      c: { chem: 2, scrap: 2 } },
};
const RES_ICON = { shrooms: '🍄', meat: '🥩', herbs: '🌿', scrap: '🔩', cloth: '🧵', chem: '🧪', food: '🍖', meds: '🩹', medkit: '💉', stim: '⚡', grenade: '💣' };
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
  'Лифты остановились в день, когда погас свет. Мы думали, это на пару часов. Починить их можно — были бы детали.',
  'Нижние этажи держатся на торговле. Лом — наша валюта, пока есть что разбирать.',
  'Говорят, наверху всё ещё есть тот, кто следит за порядком.',
  'Не ешь то, что пахнет сладко. Мутанты приманивают запахом.',
  'Я считал этажи. Сто. Выше — только крыша, если верить чертежам.',
  'Дроны на нижних этажах не злые. Они просто делают то, для чего их оставили.',
  'Дроны слушают шаги. Ходи у стены, там пол не скрипит.',
  'Башня помнит каждого, кто проходил. Лучше, чем ты сам.',
  'Если найдёшь радио — не выбрасывай. Иногда оно ловит верхние этажи.',
  'Тень не прячется в темноте. Она и есть темнота.',
  'Башню строили для тех, кто хотел жить высоко. Никто не подумал о тех, кто останется внизу.',
  'Крыша — не конец. Это окно.',
];
const ROOM_WEIGHTS = { loot: 26, enemy: 26, rest: 8, trap: 8, trader: 5, event: 10, vending: 10, empty: 7, locked: 8 };
const ROOM_HINTS = {
  loot:   ['Пахнет машинным маслом.', 'Из-под двери тянет затхлостью склада.', 'Слышен звон металла.'],
  enemy:  ['Из-за двери слышно рычание.', 'На полу свежие следы.', 'Кто-то тяжело дышит внутри.'],
  rest:   ['Тёплый свет из щели.', 'Пахнет чаем.'],
  trap:   ['Проводка торчит из стены.', 'Пол у порога подозрительно просел.'],
  trader: ['Слышны голоса и звон монет.', 'Над дверью висит самодельная вывеска.'],
  event:  ['Дверь приоткрыта. Тишина.', 'Из комнаты играет радио.'],
  empty:  ['Ничем не пахнет.', 'Дверь заперта изнутри — или так кажется.'],
  locked:  ['Дверь заперта на тяжёлый замок.', 'Замочная скважина блестит: ею часто пользовались.', 'Из-за запертой двери тянет теплом.'],
  vending: ['Слышно гудение холодильника.', 'За дверью мигает неоновая вывеска.', 'Пахнет жжёным пластиком и сладким.'],
};

// ---------- состояние ----------
let S, best = 0;

// ---------- звук и вибрация (синтез, без файлов) ----------
let audioCtx = null, muted = false;
try { muted = localStorage.getItem('tower-mute') === '1'; } catch (e) {}
function tone(freq, dur, type = 'square', vol = 0.07, slide = 0, delay = 0) {
  if (muted) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
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
  click:   () => tone(520, 0.04, 'square', 0.03),
  hit:     () => tone(240, 0.12, 'sawtooth', 0.08, -140),
  crit:    () => { tone(300, 0.1, 'sawtooth', 0.09, -150); tone(600, 0.12, 'square', 0.06, -300, 0.05); },
  hurt:    () => tone(150, 0.22, 'sawtooth', 0.1, -90),
  pickup:  () => { tone(660, 0.07, 'triangle', 0.07); tone(880, 0.09, 'triangle', 0.07, 0, 0.07); },
  stairs:  () => { tone(300, 0.12, 'triangle', 0.07, 120); tone(450, 0.14, 'triangle', 0.07, 150, 0.1); },
  boom:    () => { tone(90, 0.35, 'sawtooth', 0.12, -50); tone(60, 0.4, 'square', 0.08, -30, 0.02); },
  levelup: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.12, 'triangle', 0.08, 0, i * 0.09)),
  ach:     () => { tone(880, 0.1, 'triangle', 0.07); tone(1175, 0.18, 'triangle', 0.07, 0, 0.1); },
  death:   () => [330, 262, 196, 131].forEach((f, i) => tone(f, 0.3, 'sawtooth', 0.09, -20, i * 0.22)),
  win:     () => [392, 523, 659, 784, 1047].forEach((f, i) => tone(f, 0.2, 'triangle', 0.09, 0, i * 0.14)),
};
const sfx = n => { try { SFX[n](); } catch (e) {} };
const FONTS = [['Мелкий', 0.9], ['Обычный', 1], ['Крупный', 1.15]];
let fontIdx = 1;
try { const f = parseInt(localStorage.getItem('tower-font'), 10); if (f >= 0 && f < FONTS.length) fontIdx = f; } catch (e) {}
function setFont(i) {
  fontIdx = i; document.documentElement.style.zoom = FONTS[i][1];
  try { localStorage.setItem('tower-font', String(i)); } catch (e) {}
}
setFont(fontIdx);
let vibOn = true;
try { vibOn = localStorage.getItem('tower-vib') !== '0'; } catch (e) {}
function setVib(v) { vibOn = v; try { localStorage.setItem('tower-vib', v ? '1' : '0'); } catch (e) {} }
const vib = p => { if (vibOn && navigator.vibrate) { try { navigator.vibrate(p); } catch (e) {} } };
function setMuted(m) {
  muted = m;
  try { localStorage.setItem('tower-mute', m ? '1' : '0'); } catch (e) {}
  $('mute').textContent = m ? '🔇' : '🔊';
}
$('mute').onclick = () => { setMuted(!muted); sfx('click'); };
setMuted(muted);

// ---------- мета-прогресс и достижения ----------
const META_KEY = 'tower-meta-v1';
const meta = { ach: {}, wins: 0, ngWins: 0, bestFloor: 0, diff: 1, endings: {}, sel: { p: null, a: null } };
try { Object.assign(meta, JSON.parse(localStorage.getItem(META_KEY)) || {}); } catch (e) {}
const saveMeta = () => { try { localStorage.setItem(META_KEY, JSON.stringify(meta)); } catch (e) {} };
const ACHS = [
  { id: 'kill1',   n: 'Первая кровь',      t: 'Победи первого врага',            ok: () => S.kills >= 1 },
  { id: 'kill25',  n: 'Охотник',           t: 'Победи 25 врагов за забег',       ok: () => S.kills >= 25 },
  { id: 'floor10', n: 'Первая десятка',    t: 'Дойди до 11 этажа',               ok: () => S.floor >= 11 },
  { id: 'floor20', n: 'Жилой квартал',     t: 'Дойди до 21 этажа',               ok: () => S.floor >= 21 },
  { id: 'floor50', n: 'Полпути',           t: 'Дойди до 51 этажа',               ok: () => S.floor >= 51 },
  { id: 'floor80', n: 'Над облаками',      t: 'Дойди до 81 этажа',               ok: () => S.floor >= 81 },
  { id: 'lift',    n: 'Лифтёр',            t: 'Почини 5 лифтов',                 ok: () => S.repairs >= 5 },
  { id: 'vend',    n: 'Постоянный клиент', t: 'Купи 5 товаров в автоматах',      ok: () => S.vendBuys >= 5 },
  { id: 'cook',    n: 'Шеф',               t: 'Приготовь 5 блюд',                ok: () => S.cooked >= 5 },
  { id: 'sleep',   n: 'Крепкий сон',       t: 'Выспись в убежище 3 раза',        ok: () => S.sleeps >= 3 },
  { id: 'locked',  n: 'Взломщик',          t: 'Открой 3 запертые комнаты',       ok: () => S.opened >= 3 },
  { id: 'chef15',  n: 'Шеф-повар',         t: 'Приготовь 15 блюд за забег',      ok: () => S.cooked >= 15 },
  { id: 'quest',   n: 'Курьер',            t: 'Выполни 3 задания по телефону',   ok: () => S.quests >= 3 },
  { id: 'end3',    n: 'Много путей',       t: 'Увидь 3 разные концовки',         ok: () => Object.keys(meta.endings || {}).length >= 3 },
  { id: 'hard',    n: 'Без поблажек',      t: 'Пройди башню на сложности «Тяжело»', ok: () => meta.hardWins >= 1 },
  { id: 'lvl5',    n: 'Закалка',           t: 'Достигни 5 уровня',               ok: () => S.lvl >= 5 },
  { id: 'lvl10',   n: 'Ветеран',           t: 'Достигни 10 уровня',              ok: () => S.lvl >= 10 },
  { id: 'perks6',  n: 'Мастер на все руки', t: 'Собери все 6 перков',            ok: () => S.perks.length >= PERKS.length },
  { id: 'notes',   n: 'Летописец',         t: 'Найди все заметки',               ok: () => S.notes.length >= NOTES.length },
  { id: 'nade',    n: 'Огонь!',            t: 'Брось гранату',                   ok: () => S.grenadeUsed },
  { id: 'hoard',   n: 'Барахольщик',       t: 'Накопи 50 лома',                  ok: () => S.scrap >= 50 },
  { id: 'gear',    n: 'Во всеоружии',      t: 'Создай лучшее оружие и броню',    ok: () => S.wi >= WEAPONS.length - 1 && S.ai >= ARMORS.length - 1 },
  { id: 'edge',    n: 'На волоске',        t: 'Останься жить с 3 здоровья или меньше', ok: () => S.hp > 0 && S.hp <= 3 },
  { id: 'win',     n: 'Вершина',           t: 'Пройди все 100 этажей',            ok: () => meta.wins >= 1 },
  { id: 'ng',      n: 'Второй круг',       t: 'Пройди башню в режиме «Новая игра+»', ok: () => meta.ngWins >= 1 },
];
function checkAch() {
  let changed = false;
  ACHS.forEach(a => {
    if (!meta.ach[a.id] && a.ok()) {
      meta.ach[a.id] = true; changed = true;
      log(`🏆 Достижение: <b>${a.n}</b> — ${a.t}`, 'good'); sfx('ach');
    }
  });
  if (changed) saveMeta();
}

const base = () => ({
  floor: 1, hp: 30, maxHp: 30, en: 20, maxEn: 20, lvl: 1, xp: 0,
  scrap: 0, cloth: 0, chem: 0, food: 3, meds: 1, medkit: 0, stim: 0, grenade: 0,
  wi: 0, ai: 0, poison: 0, bleed: 0, shrooms: 0, bonusDmg: 0, screen: 'map', rooms: [], stairs: false,
  enemy: null, defending: false, trader: null, event: null, over: false,
  perks: [], pendingPerks: 0, perkChoices: [], notes: [], freeUsed: false,
  kills: 0, grenadeUsed: false, cycle: 0, lift: null, vend: null, repairs: 0, vendBuys: 0,
  keys: 0, diff: 1, lockIdx: -1, opened: 0, helpFrom: 'start', settingsFrom: 'start', quest: null, quests: 0, mercy: 0, greed: 0, skills: { dex: 0, str: 0, spd: 0, acc: 0 }, sp: 0, bench: 1, kitchen: 1, passive: null, active: null, activeUsed: false, freeSteps: 0, luckTurns: 0, firstStrike: false,
  meat: 0, herbs: 0, dish: { tea: 0, stew: 0, porridge: 0, bar: 0, roast: 0, soup: 0, pie: 0, antidote: 0, broth: 0, skewer: 0, feast: 0 }, inBase: false, stunned: false, cooked: 0, sleeps: 0, mealFrom: 'map',
});
const has = id => S.perks.includes(id);

function newGamePlus() {
  const p = S, c = p.cycle + 1;
  S = base();
  Object.assign(S, { cycle: c, lvl: p.lvl, xp: p.xp, maxHp: p.maxHp, maxEn: p.maxEn, perks: p.perks.slice(),
                     wi: p.wi, ai: p.ai, bonusDmg: p.bonusDmg, notes: p.notes.slice(),
                     skills: Object.assign({}, p.skills), sp: p.sp, bench: p.bench, kitchen: p.kitchen,
                     passive: p.passive, active: p.active, diff: p.diff });
  S.hp = S.maxHp; S.en = S.maxEn;
  $('log').innerHTML = '';
  log(`Крыша оказалась окном. За ним снова лестница вниз, и башня стала другой. <b>Круг ${c + 1}</b>: враги крепче и бьют сильнее.`, 'story');
  newFloor();
}

function newGame() {
  S = base();
  S.screen = 'start';
  $('log').innerHTML = '';
  log('Новая игра. Выбери стартовые перки — открытые ты получаешь за пройденные этажи — и начинай.', 'story');
  render();
}
const unlockedAt = req => (meta.bestFloor || 0) >= req;
function toggleSel(kind, id) { meta.sel[kind] = meta.sel[kind] === id ? null : id; saveMeta(); render(); }
function startRun() {
  if (S.screen !== 'start') return;
  const okP = PASSIVES.find(p => p.id === meta.sel.p && unlockedAt(p.req));
  const okA = ACTIVES.find(p => p.id === meta.sel.a && unlockedAt(p.req));
  S.passive = okP ? okP.id : null; S.active = okA ? okA.id : null; S.activeUsed = false;
  S.diff = meta.diff;
  if (S.diff === 0) { S.food += 2; S.meds += 1; }
  if (S.passive === 'steady') { S.maxHp += 20; S.hp += 20; S.maxEn -= 4; S.en -= 4; }
  $('log').innerHTML = '';
  log('Ты приходишь в себя у подножия башни. Лифты сломаны, но их можно починить. Единственный путь — вверх, этаж за этажом.', 'story');
  log(ZONES[0].intro, 'story');
  if (okP) log(`Пассивный перк: <b>${okP.n}</b>.`);
  if (okA) log(`Активный перк: <b>${okA.n}</b> (один раз за забег).`);
  newFloor();
}

function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify({ S, best })); } catch (e) {} }
function load() {
  try {
    const d = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (d) { best = d.best || 0; if (d.S && !d.S.over) { S = Object.assign(base(), d.S); S.dish = Object.assign(base().dish, d.S.dish); return true; } }
  } catch (e) {}
  return false;
}

function fx(kind) {
  const el = kind === 'shake' ? $('app') : $('st-ic');
  if (!el) return;
  const c = kind === 'shake' ? 'shake' : 'hitflash';
  el.classList.remove(c); void el.offsetWidth; el.classList.add(c);
  setTimeout(() => el.classList.remove(c), 320);
}
function floatText(text, cls, where) {
  const host = $(where);
  if (!host) return;
  const el = document.createElement('span');
  el.className = 'float ' + cls; el.textContent = text;
  host.appendChild(el); setTimeout(() => el.remove(), 900);
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
  S.screen = 'map'; S.enemy = null; S.vend = null; S.inBase = false;
  S.rooms = Array.from({ length: 3 }, () => {
    const type = weightedRoom();
    return { type, done: false, hint: hintFor(type) };
  });
  S.lift = { state: chance(0.15) ? 'ok' : 'broken', cost: repairCost() };
  log(`Этаж <b>${S.floor}</b>. Три двери и ${S.lift.state === 'ok' ? 'исправный лифт' : 'лифт с разбитой кабиной'}.`);
  checkQuest();
  render(); save();
}

function openRoom(i) {
  const r = S.rooms[i];
  if (S.screen !== 'map' || r.done) return;
  if (r.type === 'locked' && S.keys <= 0) {
    S.lockIdx = i; S.screen = 'locked';
    log('Дверь заперта. Нужен ключ 🔑, или можно попробовать выбить её.'); render(); save(); return;
  }
  if (!spendEnergy(1)) return;
  switch (r.type) {
    case 'locked': r.done = true; S.keys--; lootRich(); break;
    case 'loot': {
      r.done = true;
      const s = rnd(1, 3) + Math.floor(S.floor / 12) + (has('scav') ? 1 : 0) + (S.passive === 'hoarder' ? 2 : 0);
      S.scrap += s; let msg = `${s}🔩`;
      if (chance(0.5)) { const c = rnd(1, 2); S.cloth += c; msg += `, ${c}🧵`; }
      if (chance(0.3)) { const c = rnd(1, 2); S.chem += c; msg += `, ${c}🧪`; }
      if (chance(0.45)) { S.food++; msg += ', 🍖'; }
      if (chance(0.4)) { const h = rnd(1, 2); S.herbs += h; msg += `, ${h}🌿`; }
      if (chance(0.25)) { const m = rnd(1, 2); S.shrooms += m; msg += `, ${m}🍄`; }
      if (chance(0.15)) { S.meds++; msg += ', 🩹'; }
      if (chance(0.15)) { S.keys++; msg += ', 🔑'; }
      if (chance(0.2)) {
        const left = NOTES.map((_, i) => i).filter(i => !S.notes.includes(i));
        if (left.length) { S.notes.push(pick(left)); msg += ', 📖 заметка'; }
      }
      log(`Склад. Находишь: ${msg}.`, 'good'); sfx('pickup'); break;
    }
    case 'rest': {
      r.done = true;
      const h = Math.max(8, Math.round(S.maxHp * 0.3));
      S.hp = Math.min(S.maxHp, S.hp + h); S.en = Math.min(S.maxEn, S.en + 6); S.poison = 0; S.bleed = 0;
      log(`Кто-то оставил здесь койку и чайник. Ты отдыхаешь: +${h} здоровья, +6 энергии.`, 'good'); break;
    }
    case 'trap': {
      r.done = true;
      let dmg = Math.max(1, rnd(2, 5) + Math.floor(S.floor / 6) - Math.floor(defArmor() / 2));
      if (S.passive === 'hoarder') dmg = Math.round(dmg * 1.5);
      S.hp -= dmg; log(`Ловушка! Теряешь ${dmg} здоровья.`, 'bad'); sfx('hurt'); vib(60);
      if (checkDeath()) return; break;
    }
    case 'empty': r.done = true; log('Пустая комната. Только пыль.'); break;
    case 'vending': r.done = true; return startVending();
    case 'trader': r.done = true; S.screen = 'trader'; log('Торговец поднимает глаза: «Лом есть — товар есть».'); break;
    case 'event': r.done = true; return startEvent();
    case 'enemy': r.done = true; return startFight(spawnEnemy());
  }
  render(); save();
}

function lootRich() {
  const s = rnd(3, 6) + Math.floor(S.floor / 8) + (S.passive === 'hoarder' ? 2 : 0);
  const c = rnd(1, 3), ch = rnd(1, 3);
  S.scrap += s; S.cloth += c; S.chem += ch; S.opened++;
  let msg = `${s}🔩, ${c}🧵, ${ch}🧪`;
  if (chance(0.6)) { S.medkit++; msg += ', 💉'; }
  if (chance(0.4)) { S.grenade++; msg += ', 💣'; }
  if (chance(0.4)) { S.food++; msg += ', 🍖'; }
  if (chance(0.3)) {
    const left = NOTES.map((_, i) => i).filter(i => !S.notes.includes(i));
    if (left.length) { S.notes.push(pick(left)); msg += ', 📖 заметка'; }
  }
  log(`Запертая комната. Внутри: ${msg}.`, 'good'); sfx('pickup');
}
function forceDoor() {
  if (S.screen !== 'locked') return;
  const r = S.rooms[S.lockIdx];
  if (!spendEnergy(3)) return;
  if (chance(0.5)) { r.done = true; S.screen = 'map'; log('Дверь поддалась!', 'good'); lootRich(); }
  else {
    const d = 3 + Math.floor(S.floor / 10);
    S.hp -= d; log(`Дверь не поддаётся, ты ушибся: -${d} здоровья.`, 'bad'); sfx('hurt'); vib(40);
    if (checkDeath()) return;
  }
  render(); save();
}
const repairCost = () => Object.assign({ scrap: 2 + Math.floor(S.floor / 3) },
  S.floor >= 20 ? { chem: 1 + Math.floor((S.floor - 20) / 15) } : {});

function ascend() {
  if (S.floor >= TOP) return win();
  sfx('stairs');
  S.floor++; best = Math.max(best, S.floor);
  meta.bestFloor = Math.max(meta.bestFloor || 0, S.floor); saveMeta();
  if ((S.floor - 1) % 20 === 0) log(ZONES[zoneOf(S.floor)].intro, 'story');
  newFloor();
}
function ride() {
  if (S.screen !== 'map' || !S.lift || S.lift.state !== 'ok') return;
  if (!spendEnergy(1)) return;
  ascend();
}
function repairLift() {
  if (S.screen !== 'map' || !S.lift || !canPay(S.lift.cost)) return;
  pay(S.lift.cost); S.lift.state = 'ok'; S.repairs++;
  log('Ты чинишь лифт. Кабина вздрагивает и оживает.', 'good'); sfx('pickup');
  render(); save();
}
function climbRope() {
  if (S.screen !== 'map') return;
  if (!spendEnergy(4)) return;
  if (chance(0.35)) {
    const d = rnd(3, 6) + Math.floor(S.floor / 10);
    S.hp -= d; log(`Ты срываешься с троса: -${d} здоровья.`, 'bad'); sfx('hurt'); vib(60);
    if (checkDeath()) return;
  } else log('Ты лезешь по тросу, обдирая ладони.');
  ascend();
}

// ---------- ресурсы ----------
const weapon = () => WEAPONS[S.wi];
const armor = () => ARMORS[S.ai];
const defArmor = () => armor().a + (has('thick') ? 1 : 0);

function spendEnergy(n) {
  if (S.freeSteps > 0) { S.freeSteps--; return true; }
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
    const g = Math.round((has('stomach') ? 12 : 8) * (S.passive === 'glutton' ? 1.5 : 1)); S.food--; S.en = Math.min(S.maxEn, S.en + g); log(`Ты ешь. +${g} энергии.`, 'good');
  } else if (kind === 'meds') {
    if (S.hp >= S.maxHp && !S.bleed) return;
    const h = Math.max(10, Math.round(S.maxHp * 0.15)); S.bleed = 0; S.meds--; S.hp = Math.min(S.maxHp, S.hp + h); log(`Бинт наложен. +${h} здоровья.`, 'good');
  } else if (kind === 'medkit') {
    if (S.hp >= S.maxHp && !S.poison && !S.bleed) return;
    const h = Math.max(25, Math.round(S.maxHp * 0.35)); S.medkit--; S.hp = Math.min(S.maxHp, S.hp + h); S.poison = 0; S.bleed = 0;
    log(`Аптечка: +${h} здоровья, яд нейтрализован.`, 'good');
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
  if (kind === 'weapon' && S.bench < WEAPON_BENCH[idx]) return;
  if (kind === 'armor' && S.bench < ARMOR_BENCH[idx]) return;
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

// ---------- убежище и кухня ----------
const DISHES = {
  tea:      { n: 'Травяной чай',    c: { herbs: 2 },                      t: 'снимает яд, +4 энергии',                  eff: { cure: 1, en: 4 } },
  stew:     { n: 'Рагу',            c: { herbs: 2, food: 1 },             t: '+12 энергии, +5 здоровья',                eff: { en: 12, hp: 5 } },
  porridge: { n: 'Каша',            c: { food: 1, herbs: 1 },             t: '+10 энергии, +5 здоровья',                eff: { en: 10, hp: 5 } },
  bar:      { n: 'Энергобатончик',  c: { shrooms: 1, chem: 1 },           t: '+8 энергии',                              eff: { en: 8 } },
  roast:    { n: 'Жаркое',          c: { meat: 2, herbs: 1 },             t: '+16 энергии',                             eff: { en: 16 } },
  soup:     { n: 'Грибной суп',     c: { shrooms: 2, herbs: 1 },          t: '+14 энергии, +10% здоровья',              eff: { en: 14, hpPct: 0.1 } },
  pie:      { n: 'Пирог',           c: { meat: 1, shrooms: 1, herbs: 1 }, t: '+12 энергии, +20% здоровья',              eff: { en: 12, hpPct: 0.2 } },
  antidote: { n: 'Целебный отвар',  c: { herbs: 2, shrooms: 1 },          t: 'снимает яд и кровотечение, +8 здоровья',  eff: { cure: 1, hp: 8 } },
  broth:    { n: 'Бульон',          c: { meat: 1, food: 1 },              t: '+35% здоровья, +6 энергии',               eff: { hpPct: 0.35, en: 6 } },
  skewer:   { n: 'Шашлык',          c: { meat: 2, shrooms: 1 },           t: '+22 энергии, +10% здоровья',              eff: { en: 22, hpPct: 0.1 } },
  feast:    { n: 'Пир',             c: { meat: 3, herbs: 2, shrooms: 2 }, t: '+30 энергии, +50% здоровья, снимает яд',  eff: { en: 30, hpPct: 0.5, cure: 1 } },
};
const totalDishes = () => Object.values(S.dish).reduce((a, b) => a + b, 0);
const returnCost = () => Math.max(1, Math.ceil(S.floor / 25));

function goBase() {
  if (S.screen !== 'map' || !S.lift || S.lift.state !== 'ok') return;
  if (!spendEnergy(1)) return;
  S.inBase = true; S.screen = 'base';
  log('Ты спускаешься на исправном лифте в убежище. Здесь тихо, есть койка и плита.', 'story');
  render(); save();
}
function returnUp() {
  if (S.screen !== 'base') return;
  if (!spendEnergy(returnCost())) return;
  S.inBase = false; S.screen = 'map';
  log(`Ты возвращаешься на этаж ${S.floor}.`);
  sfx('stairs'); render(); save();
}
function sleep() {
  if (S.screen !== 'base' || S.en < 6) return;
  S.en -= 6; S.hp = S.maxHp; S.poison = 0; S.bleed = 0; S.stunned = false; S.sleeps++;
  log('Ты спишь несколько часов. Здоровье восстановлено (-6 энергии).', 'good'); sfx('pickup');
  if (S.floor >= 10 && chance(0.15)) {
    log('Среди ночи что-то шевелится в темноте!', 'bad');
    return startFight(spawnEnemy());
  }
  render(); save();
}
function cook(id) {
  const d = DISHES[id];
  if (S.screen !== 'kitchen' || S.kitchen < DISH_LEVEL[id] || !canPay(d.c)) return;
  pay(d.c); S.dish[id] = (S.dish[id] || 0) + 1; S.cooked++;
  log(`Готово: ${d.n}.`, 'good'); sfx('pickup'); render(); save();
}
function upgrade(what) {
  if (S.screen !== 'base') return;
  const lvl = what === 'bench' ? S.bench : S.kitchen;
  const c = (what === 'bench' ? BENCH_UP : KITCHEN_UP)[lvl + 1];
  if (!c || !canPay(c)) return;
  pay(c);
  if (what === 'bench') S.bench++; else S.kitchen++;
  log(`${what === 'bench' ? 'Верстак' : 'Кухня'} улучшен${what === 'bench' ? '' : 'а'} до ур. ${lvl + 1}.`, 'good');
  sfx('levelup'); render(); save();
}
function spendSkill(k) {
  if (S.sp <= 0 || S.screen !== 'skills') return;
  S.sp--; S.skills[k]++; sfx('pickup'); render(); save();
}
function useActive() {
  if (!S.active || S.activeUsed) return;
  const id = S.active;
  if (id === 'xray') {
    if (S.screen !== 'map') { log('Рентген работает только на этаже.'); return; }
    S.rooms.forEach(r => { r.known = true; }); log('Рентген: ты видишь, что скрывается за дверями.', 'good');
  } else if (id === 'hard') {
    S.freeSteps = 10; log('Второе дыхание: следующие 10 шагов не тратят энергию.', 'good');
  } else if (id === 'luck') {
    S.luckTurns = 15; log('Удача на твоей стороне: +15% к попаданию на 15 ударов.', 'good');
  } else if (id === 'stock') {
    S.scrap += 6; S.cloth += 3; S.chem += 3; log('Из тайника: +6🔩, +3🧵, +3🧪.', 'good');
  } else if (id === 'kit') {
    const h = Math.round(S.maxHp * 0.5); S.hp = Math.min(S.maxHp, S.hp + h); log(`Аптечка из рюкзака: +${h} здоровья.`, 'good');
  }
  S.activeUsed = true; sfx('levelup');
  if (S.screen === 'fight' && id === 'kit') enemyTurn(); else { render(); save(); }
}
function openMeals() { S.mealFrom = S.screen; S.screen = 'meals'; render(); }
function eatDish(id) {
  if (!S.dish[id]) return;
  S.dish[id]--;
  const f = DISHES[id].eff, parts = [];
  if (f.en) { const g = Math.round(f.en * (S.passive === 'glutton' ? 1.5 : 1)); S.en = Math.min(S.maxEn, S.en + g); parts.push(`+${g} энергии`); }
  const h = (f.hp || 0) + (f.hpPct ? Math.round(S.maxHp * f.hpPct) : 0);
  if (h) { S.hp = Math.min(S.maxHp, S.hp + h); parts.push(`+${h} здоровья`); }
  if (f.cure) { if (S.poison || S.bleed) parts.push('болезни сняты'); S.poison = 0; S.bleed = 0; }
  log(`${DISHES[id].n}: ${parts.join(', ')}.`, 'good');
  S.screen = S.mealFrom;
  if (S.screen === 'fight') enemyTurn(); else { render(); save(); }
}

// ---------- вендинговые автоматы ----------
const VEND = [
  { n: 'Паёк',                give: { food: 1 },   cost: 2 },
  { n: 'Энергетик (+6 эн.)',  give: { en: 6 },     cost: 3 },
  { n: 'Бинт',                give: { meds: 1 },   cost: 3 },
  { n: 'Стимулятор',          give: { stim: 1 },   cost: 4 },
  { n: 'Граната',             give: { grenade: 1 }, cost: 5 },
  { n: 'Аптечка',             give: { medkit: 1 }, cost: 6 },
  { n: 'Ткань ×2',            give: { cloth: 2 },  cost: 3 },
  { n: 'Химикаты ×2',         give: { chem: 2 },   cost: 5 },
  { n: 'Травы ×2',            give: { herbs: 2 },  cost: 3 },
  { n: 'Мясо',                give: { meat: 1 },   cost: 4 },
  { n: 'Ключ',                give: { keys: 1 },   cost: 6 },
  { n: 'Грибы ×2',            give: { shrooms: 2 }, cost: 3 },
];
function giveItems(give) {
  Object.entries(give).forEach(([k, v]) => S[k] += v);
  S.en = Math.min(S.maxEn, S.en);
}
function startVending() {
  const bump = Math.floor(S.floor / 20);
  const pool = VEND.slice().sort(() => Math.random() - 0.5).slice(0, 3);
  S.vend = { stock: pool.map(g => Object.assign({}, g, { cost: g.cost + bump, sold: false })), kicked: false };
  S.screen = 'vending';
  log('Вендинговый автомат ещё мигает. Экран треснул, но монетоприёмник работает.');
  render(); save();
}
function buyVend(i) {
  const g = S.vend.stock[i];
  if (g.sold || S.scrap < g.cost) return;
  S.scrap -= g.cost; g.sold = true; S.vendBuys++; giveItems(g.give);
  log(`Автомат выдаёт: ${g.n}.`, 'good'); sfx('pickup'); render(); save();
}
function kickVend() {
  if (S.vend.kicked) return;
  S.vend.kicked = true;
  const r = Math.random();
  if (r < 0.35) { const g = pick(VEND); giveItems(g.give); log(`Автомат вздрагивает и роняет: ${g.n}!`, 'good'); sfx('pickup'); }
  else if (r < 0.7) log('Автомат гудит, но ничего не выдаёт.');
  else if (r < 0.85) { S.hp -= 3; log('Ты ушибаешь руку об автомат: -3 здоровья.', 'bad'); sfx('hurt'); vib(40); if (checkDeath()) return; }
  else { log('Шум привлёк кого-то!', 'bad'); return startFight(spawnEnemy()); }
  render(); save();
}

// ---------- события ----------
const EVENTS = [
  { text: 'У стены сидит раненый. Он смотрит на тебя и молчит.',
    choices: [
      { l: 'Помочь (-1 🩹)', ok: () => S.meds > 0, run: () => { S.meds--; S.mercy++; S.scrap += 3; gainXp(10); log('Он благодарит и делится запасами: +3🔩.', 'good'); } },
      { l: 'Обыскать его', run: () => { S.greed++; S.scrap += 4; log('Ты забираешь +4🔩. Ему уже всё равно.'); } },
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
      { l: 'Открыть клетку', run: () => { S.mercy++; if (chance(0.5)) { S.scrap += 4; log('Существо убегает, оставив тебе +4🔩.', 'good'); } else { log('Оно бросается на тебя!', 'bad'); return 'fight'; } } },
      { l: 'Оставить', run: () => log('Ты уходишь.') } ] },
  { text: 'Шахта лифта без кабины. Трос уходит вверх.',
    choices: [
      { l: 'Подняться по тросу (-5 здоровья, +1 этаж)', ok: () => S.hp > 6 && S.floor < TOP, run: () => { S.hp -= 5; log('Ладони в кровь, но ты на этаж выше.', 'bad'); return 'skip'; } },
      { l: 'Не рисковать', run: () => log('Слишком опасно.') } ] },
  { text: 'Старый мастер предлагает заточить твоё оружие.',
    choices: [
      { l: 'Заплатить 4🔩 (+1 к урону навсегда)', ok: () => S.scrap >= 4, run: () => { S.scrap -= 4; S.bonusDmg++; log('Клинок стал острее: +1 к урону.', 'good'); } },
      { l: 'Отказаться', run: () => log('Мастер пожимает плечами.') } ] },
  { text: 'В нише стоит каменный алтарь со свежими подношениями.',
    choices: [
      { l: 'Принести жертву (-6 здоровья)', ok: () => S.hp > 7, run: () => { S.hp -= 6; S.greed++; gainXp(12); S.chem += 2; log('Что-то отвечает тебе: +12 опыта, +2🧪.', 'good'); } },
      { l: 'Уйти', run: () => log('Лучше не трогать.') } ] },
  { text: 'Заброшенная аптека. Решётка заперта.',
    choices: [
      { l: 'Выломать (-3 энергии)', run: () => { spendEnergy(3); if (chance(0.7)) { S.medkit += 2; log('Внутри 2 аптечки!', 'good'); } else { S.hp -= 5; log('Решётка падает на тебя: -5 здоровья.', 'bad'); } } },
      { l: 'Пройти мимо', run: () => log('Ты оставляешь аптеку.') } ] },
  { text: 'В тёмной комнате звонит телефон. Тихий голос просит прийти на один из этажей выше: «Пока не поздно».',
    choices: [
      { l: 'Ответить и пообещать прийти', ok: () => !S.quest && S.floor < TOP - 6, run: () => startQuest() },
      { l: 'Положить трубку', run: () => log('Ты кладёшь трубку. Телефон замолкает.') } ] },
  { text: 'Склад гуманитарной помощи: ящики с красным крестом, никого рядом.',
    choices: [
      { l: 'Забрать всё', run: () => { S.greed++; S.scrap += 6; S.food += 2; log('Ты выгребаешь всё: +6🔩, +2🍖. Совесть молчит.'); } },
      { l: 'Взять немного, остальное оставить', run: () => { S.mercy++; S.scrap += 3; S.food += 1; log('Ты берёшь только необходимое: +3🔩, +1🍖.', 'good'); } } ] },
  { text: 'Раненый дрон-курьер мигает аварийным светом и просит помощи.',
    choices: [
      { l: 'Починить (-2🔩, -1🧵)', ok: () => S.scrap >= 2 && S.cloth >= 1, run: () => { S.scrap -= 2; S.cloth -= 1; S.mercy++; S.keys++; log('Дрон благодарит и отдаёт ключ-карту: +1🔑.', 'good'); } },
      { l: 'Разобрать на запчасти', run: () => { S.greed++; S.scrap += 3; S.chem += 2; log('+3🔩 и +2🧪 из корпуса.'); } },
      { l: 'Уйти', run: () => log('Дрон тихо щёлкает тебе вслед.') } ] },
  { text: 'Из-за угла тянет запахом жареного. Кто-то готовит.',
    choices: [
      { l: 'Идти на запах', run: () => { if (chance(0.6)) { S.herbs += 1; S.shrooms += 2; log('Брошенная плита с грибами: +2🍄, +1🌿.', 'good'); } else { log('На кухне кто-то есть!', 'bad'); return 'fight'; } } },
      { l: 'Обойти', run: () => log('Ты не рискуешь.') } ] },
  { text: 'Кладовая за заклинившей дверью лифта. Виден только край ящика.',
    choices: [
      { l: 'Вскрыть монтировкой (-2 энергии)', run: () => { spendEnergy(2); if (chance(0.6)) { S.keys++; S.scrap += 3; log('Внутри ключ и немного лома: +1🔑, +3🔩.', 'good'); } else { S.hp -= 4; log('Дверь срывается и бьёт тебя: -4 здоровья.', 'bad'); } } },
      { l: 'Пройти мимо', run: () => log('Не твоя дверь.') } ] },
  { text: 'Бродячий торговец шепчет: «Есть ключи, есть лекарства. Что тебе нужно?»',
    choices: [
      { l: 'Купить ключ (8🔩)', ok: () => S.scrap >= 8, run: () => { S.scrap -= 8; S.keys++; log('Ты получаешь ключ: +1🔑.', 'good'); } },
      { l: 'Отдать гранату за аптечку', ok: () => S.grenade > 0, run: () => { S.grenade--; S.medkit++; log('Обмен состоялся: +1💉.', 'good'); } },
      { l: 'Уйти', run: () => log('Торговец пожимает плечами.') } ] },
  { min: 6, text: 'Коридор из зеркал. В одном отражении кто-то стоит не в такт с тобой.',
    choices: [
      { l: 'Подойти', run: () => { if (chance(0.5)) { log('Отражение оживает и бросается на тебя!', 'bad'); return 'fight'; } gainXp(10); log('Ничего не происходит, но ты чувствуешь себя опытнее: +10 опыта.'); } },
      { l: 'Закрыть глаза и пройти', run: () => { spendEnergy(1); log('Ты проходишь вслепую. -1 энергии.'); } } ] },
  { min: 15, text: 'Оранжерея: стёкла выбиты, но растения выжили.',
    choices: [
      { l: 'Собрать травы и грибы', run: () => { S.herbs += 3; S.shrooms += 2; log('+3🌿 и +2🍄.', 'good'); } },
      { l: 'Съесть ягоды на месте', run: () => { S.en = Math.min(S.maxEn, S.en + 8); if (chance(0.2)) { S.poison = 3; log('+8 энергии, но ягоды оказались ядовитыми.', 'bad'); } else log('+8 энергии.', 'good'); } } ] },
  { min: 10, text: 'Холодильная камера. Дверь приоткрыта, внутри иней.',
    choices: [
      { l: 'Заглянуть', run: () => { if (chance(0.7)) { S.meat += 3; log('Замороженное мясо: +3🥩.', 'good'); } else { S.poison = 3; log('Тухлая вонь бьёт в лицо: ты отравлен.', 'bad'); } } },
      { l: 'Закрыть дверь', run: () => log('Лучше не тревожить.') } ] },
  { min: 5, text: 'Аварийный генератор, но он не запущен.',
    choices: [
      { l: 'Починить (-3🔩)', ok: () => S.scrap >= 3, run: () => { S.scrap -= 3; S.freeSteps += 5; log('Свет вспыхивает: следующие 5 шагов не тратят энергию.', 'good'); } },
      { l: 'Разобрать на детали', run: () => { S.chem += 2; log('+2🧪.', 'good'); } } ] },
  { text: 'На стене детским почерком: «Мама, я жду тебя наверху». Рядом лежит записка.',
    choices: [
      { l: 'Прочитать записку', run: () => { S.mercy++; const left = NOTES.map((_, i) => i).filter(i => !S.notes.includes(i)); if (left.length) { S.notes.push(pick(left)); log('Ты находишь новую запись в дневник.', 'good'); } else { gainXp(8); log('Ты уже знаешь всё, что здесь написано. +8 опыта.'); } } },
      { l: 'Не трогать', run: () => log('Ты оставляешь записку на месте.') } ] },
  { min: 8, text: 'За столом трое играют в карты на лом. Тебе кивают на свободный стул.',
    choices: [
      { l: 'Сыграть на 5🔩', ok: () => S.scrap >= 5, run: () => { S.greed++; if (chance(0.45)) { S.scrap += 10; log('Удача! +10🔩.', 'good'); } else { S.scrap -= 5; log('Проигрыш: -5🔩.', 'bad'); } } },
      { l: 'Отказаться', run: () => log('Ты качаешь головой и идёшь дальше.') } ] },
  { min: 12, text: 'Усталая медсестра в углу: «Если найдётся что-нибудь поесть, я тебя подлатаю».',
    choices: [
      { l: 'Отдать паёк (-1🍖)', ok: () => S.food > 0, run: () => { S.food--; S.mercy++; S.hp = S.maxHp; S.poison = 0; S.bleed = 0; log('Она накладывает швы и повязки: здоровье полностью восстановлено.', 'good'); } },
      { l: 'Уйти', run: () => log('Тебе нечем с ней поделиться.') } ] },
  { min: 20, text: 'Красная тревожная кнопка на стене, защитное стекло разбито.',
    choices: [
      { l: 'Нажать', run: () => { if (chance(0.5)) { log('Взвыла сирена, и на шум идёт охрана!', 'bad'); return 'fight'; } S.medkit++; S.grenade++; log('Открывается тайник: +1💉, +1💣.', 'good'); } },
      { l: 'Не трогать', run: () => log('Ты не рискуешь.') } ] },
  { min: 3, text: 'На стене старая схема этажа, часть карты ещё читается.',
    choices: [
      { l: 'Изучить (-1 энергии)', run: () => { spendEnergy(1); S.rooms.forEach(r => { r.known = true; }); log('Ты запоминаешь расположение комнат: они подписаны.', 'good'); } },
      { l: 'Идти дальше', run: () => log('Не до карт.') } ] },
];

function startQuest() {
  const target = S.floor + rnd(3, 6);
  S.quest = { floor: target, xp: 20 + S.floor, scrap: 4 + Math.floor(S.floor / 5), kit: chance(0.5) ? 1 : 0 };
  log(`Голос: «Я буду ждать на этаже ${target}. Приходи». Связь обрывается.`, 'story');
}
function checkQuest() {
  const q = S.quest;
  if (!q) return;
  if (S.floor === q.floor) {
    S.quest = null; S.quests++; S.mercy++;
    S.scrap += q.scrap; S.medkit += q.kit;
    log(`📞 Ты приходишь вовремя. Тебя ждали: +${q.xp} опыта, +${q.scrap}🔩${q.kit ? ', 💉' : ''}.`, 'good');
    gainXp(q.xp);
  } else if (S.floor > q.floor) {
    S.quest = null; log('Ты опоздал: на нужном этаже телефон давно молчит.', 'bad');
  }
}

function startEvent() {
  const ev = pick(EVENTS.filter(e => !e.min || S.floor >= e.min));
  S.event = ev; S.screen = 'event';
  log(ev.text, 'story');
  render(); save();
}
function eventChoice(i) {
  const res = S.event.choices[i].run();
  S.event = null;
  if (checkDeath()) return;
  if (res === 'fight') return startFight(spawnEnemy());
  if (res === 'skip') return ascend();
  S.screen = 'map'; render(); save();
}

// ---------- бой ----------
function spawnEnemy() {
  const e = Object.assign({}, pick(ENEMIES[zoneOf(S.floor)]));
  const k = S.floor - 1;
  e.hp = Math.round(e.hp * (1 + k * 0.075));
  e.d = [Math.max(1, Math.round(e.d[0] * (1 + k * 0.045))), Math.max(1, Math.round(e.d[1] * (1 + k * 0.045)))];
  e.xp = Math.round(e.xp * (1 + k * 0.045));
  const dm = [0.8, 1, 1.25][S.diff], xm = [0.9, 1, 1.2][S.diff];
  e.hp = Math.round(e.hp * dm); e.xp = Math.round(e.xp * xm);
  e.d = [Math.max(1, Math.round(e.d[0] * dm)), Math.max(1, Math.round(e.d[1] * dm))];
  return e;
}
function startFight(e) {
  if (S.cycle > 0) {
    const c = S.cycle;
    e.hp = Math.round(e.hp * (1 + 0.5 * c));
    e.d = [Math.round(e.d[0] * (1 + 0.35 * c)), Math.round(e.d[1] * (1 + 0.35 * c))];
    e.xp = Math.round(e.xp * (1 + 0.3 * c));
  }
  e.maxHp = e.hp; S.enemy = e; S.screen = 'fight'; S.defending = false; S.freeUsed = false; S.firstStrike = true;
  log(`Перед тобой <span class="enemy">${e.n}</span> (${e.hp} HP)${traitText(e)}!`);
  render(); save();
}
const skillDmg = () => Math.floor(S.skills[WEAPON_SKILL[S.wi]] * 0.5);
const atkBase = () => weapon().d + 1 + Math.floor(S.lvl / 2) + S.bonusDmg + skillDmg();
const atkMult = () => S.passive === 'rush' ? 1.15 : 1;
function playerDamage(mult = 1) {
  let d = Math.round((rnd(2, 4) + atkBase()) * mult * atkMult());
  if (S.enemy.armored) d = Math.max(1, d - Math.max(2, Math.round(d * 0.15)));
  return d;
}
function hitChance(part) {
  const p = PARTS[part].hit + S.skills.acc * 0.02 + (S.luckTurns > 0 ? 0.15 : 0) - (S.enemy.dodge ? 0.15 : 0);
  return Math.max(0.05, Math.min(0.95, p));
}
function dmgRange(part) {
  const m = PARTS[part].m * atkMult();
  return [Math.round((2 + atkBase()) * m), Math.round((4 + atkBase()) * m)];
}
function attack(part) {
  if (S.stunned) { S.stunned = false; S.defending = false; log('Ты оглушён и теряешь ход.', 'bad'); return enemyTurn(); }
  if (part === true) part = 'head';
  if (!PARTS[part]) part = 'body';
  const P = PARTS[part], e = S.enemy;
  const sure = S.firstStrike && S.passive === 'first';
  S.firstStrike = false;
  const p = hitChance(part);
  if (S.luckTurns > 0) S.luckTurns--;
  if (!sure && !chance(p)) log(`Ты промахиваешься (${P.n.toLowerCase()}).`);
  else {
    let d = playerDamage(P.m * (sure ? 1.3 : 1));
    const crit = chance((has('crit') ? 0.15 : 0) + S.skills.str * 0.015);
    if (crit) d *= 2;
    e.hp -= d; log(`${crit ? 'Критический удар! ' : ''}${P.n}: <b>${d}</b> урона.`);
    fx('hit'); floatText(`-${d}${crit ? '!' : ''}`, crit ? 'crit' : 'dmg', 'stage');
    sfx(crit ? 'crit' : 'hit'); if (crit) vib(60);
    if (P.eff === 'weak' && e.hp > 0) { e.weak = 3; log('Враг ослаблен: его удары слабее.'); }
    if (P.eff === 'stag' && e.hp > 0) { e.stag = 2; log('Враг шатается и может пропустить ход.'); }
    if (e.thorns) {
      const t = 2 + Math.floor(S.floor / 20);
      S.hp -= t; log(`Шипы ранят тебя: -${t}.`, 'bad');
      if (checkDeath()) return;
    }
  }
  if (e.hp <= 0) return victory();
  if (chance(Math.min(0.3, S.skills.spd * 0.015))) { log('Ты успеваешь ударить снова!', 'good'); render(); save(); return; }
  S.defending = false; enemyTurn();
}
function throwGrenade() {
  if (S.grenade <= 0) return;
  S.grenade--; S.grenadeUsed = true; sfx('boom'); vib(80); S.enemy.hp -= 14; log('Граната! <b>14</b> урона, броня не помогает.');
  if (S.enemy.hp <= 0) return victory();
  S.defending = false; enemyTurn();
}
function defend() { S.defending = true; log('Ты прикрываешься.'); enemyTurn(); }
function flee() {
  if (S.passive === 'rush') { log('Ты не отступаешь!', 'bad'); return enemyTurn(); }
  if (chance(0.5)) {
    log('Ты удираешь.', 'good');
    S.enemy = null; S.screen = S.inBase ? 'base' : 'map'; S.defending = false;
    if (!spendEnergy(2)) return;
    render(); save();
  } else { log('Сбежать не удалось!', 'bad'); S.defending = false; enemyTurn(); }
}
function enemyTurn() {
  const e = S.enemy;
  if (e.regen && e.hp < e.maxHp) {
    const h = Math.max(1, Math.round(e.maxHp * 0.08));
    e.hp = Math.min(e.maxHp, e.hp + h); log(`${e.n} восстанавливается: +${h}.`);
  }
  const skipTurn = e.stag > 0 && (e.stag--, chance(0.5));
  if (skipTurn) log(`${e.n} теряет равновесие и пропускает ход.`, 'good');
  else {
    const hits = e.multi ? 2 : 1;
    const dodgeP = Math.min(0.3, S.skills.dex * 0.015);
    let landed = false;
    for (let i = 0; i < hits; i++) {
      if (chance(dodgeP)) { log('Ты уворачиваешься от удара!', 'good'); continue; }
      let raw = rnd(e.d[0], e.d[1]);
      if (e.enrage && e.hp < e.maxHp * 0.5) raw = Math.round(raw * 1.3);
      if (e.weak > 0) raw = Math.round(raw * 0.7);
      if (hits > 1) raw = Math.max(1, Math.round(raw * 0.6));
      let dmg = Math.max(1, raw - defArmor());
      if (S.defending) dmg = Math.ceil(dmg / 2);
      S.hp -= dmg; landed = true; floatText(`-${dmg}`, 'pdmg', 'hud');
      log(`<span class="enemy">${e.n}</span> наносит <b>${dmg}</b> урона.`, 'bad');
    }
    if (e.weak > 0) e.weak--;
    if (landed) { sfx('hurt'); vib(40); fx('shake'); }
    if (landed && e.poison && !S.defending && chance(0.35) && !S.poison) { S.poison = 3 + (S.passive === 'glutton' ? 2 : 0); log('Ты отравлен!', 'bad'); }
    if (landed && e.stun && !S.defending && chance(0.2)) { S.stunned = true; log('Удар оглушил тебя: следующая атака пропадёт!', 'bad'); }
    if (landed && e.drain && chance(0.5)) { S.en = Math.max(0, S.en - 2); log('Враг вытягивает силы: -2 энергии.', 'bad'); }
    if (landed && e.bleed && !S.defending && chance(0.35) && !S.bleed) { S.bleed = 3; log('Ты истекаешь кровью!', 'bad'); }
  }
  S.defending = false;
  if (S.poison > 0) { const pd = has('stomach') ? 1 : 2; S.poison--; S.hp -= pd; log(`Яд: -${pd} здоровья.`, 'bad'); }
  if (S.bleed > 0) { const bd = 1 + Math.floor(S.floor / 25); S.bleed--; S.hp -= bd; log(`Кровотечение: -${bd} здоровья.`, 'bad'); }
  if (checkDeath()) return;
  render(); save();
}
function victory() {
  const e = S.enemy;
  S.kills++; sfx('pickup');
  const s = rnd(2, 4) + Math.floor(S.floor / 10);
  S.scrap += s; let msg = `${s}🔩`;
  if (chance(0.3)) { S.cloth++; msg += ', 🧵'; }
  if (chance(0.25)) { S.chem++; msg += ', 🧪'; }
  if (chance(0.3)) { S.food++; msg += ', 🍖'; }
  if (chance(0.12)) { S.keys++; msg += ', 🔑'; }
  if (e.beast && chance(0.6)) { const m = rnd(1, 2); S.meat += m; msg += `, ${m}🥩`; }
  log(`${e.n} повержен. Добыча: ${msg}.`, 'good');
  gainXp(e.xp);
  S.enemy = null; S.screen = S.inBase ? 'base' : 'map';
  render(); save();
}

function gainXp(n) {
  S.xp += n;
  while (S.xp >= S.lvl * 20) {
    S.xp -= S.lvl * 20; S.lvl++;
    S.maxHp += 6; S.maxEn += 2; S.hp = Math.min(S.maxHp, S.hp + 10);
    log(`Уровень <b>${S.lvl}</b>! Макс. здоровье +6, энергия +2, +2 очка навыков (кнопка ⭐ Навыки).`, 'good');
    S.pendingPerks++; S.sp += 2; sfx('levelup'); vib(30);
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
const ENDINGS = {
  scribe: { n: 'Летописец', t: 'Ты кладёшь все найденные записки в одну папку и оставляешь на крыше. Кто-нибудь однажды прочтёт и поймёт, что здесь было.' },
  light:  { n: 'Свет',      t: 'На крыше тебя ждут те, кому ты помог. Вместе вы зажигаете сигнальный огонь, и он виден далеко за городом.' },
  shadow: { n: 'Тень',      t: 'Ты стоишь на крыше один, зато с полным рюкзаком. Небо большое и пустое. Кажется, ты получил ровно то, за чем шёл.' },
  lone:   { n: 'Одиночка',  t: 'Ты просто сел на краю крыши и смотрел на рассвет. Дальше можно придумать что угодно.' },
};
const statsLine = () => `Итоги: этаж ${S.floor}, уровень ${S.lvl}, побеждено врагов ${S.kills}, починено лифтов ${S.repairs}, блюд приготовлено ${S.cooked}, записок ${S.notes.length}/${NOTES.length}.`;
function pickEnding() {
  let id = 'lone';
  if (S.notes.length >= NOTES.length) id = 'scribe';
  else if (S.mercy >= S.greed + 2) id = 'light';
  else if (S.greed >= S.mercy + 2) id = 'shadow';
  return Object.assign({ id }, ENDINGS[id]);
}
function checkDeath() {
  if (S.hp > 0) return false;
  S.hp = 0; S.over = true; S.screen = 'dead'; sfx('death'); vib([100, 60, 200]);
  best = Math.max(best, S.floor);
  meta.bestFloor = Math.max(meta.bestFloor || 0, S.floor); saveMeta();
  log(`Ты погиб на этаже ${S.floor}.`, 'bad');
  log(statsLine(), 'story');
  render(); save(); return true;
}
function win() {
  S.over = true; S.screen = 'win'; best = TOP; meta.bestFloor = TOP;
  meta.wins++; if (S.cycle >= 1) meta.ngWins++; if (S.diff === 2) meta.hardWins = (meta.hardWins || 0) + 1; saveMeta(); sfx('win'); vib([60, 40, 60, 40, 200]);
  const end = pickEnding(); meta.endings[end.id] = true; saveMeta();
  log('<b>Сотый этаж. Ты выходишь на крышу и впервые за долгое время видишь небо.</b>', 'good');
  log(`Концовка «${end.n}» (${Object.keys(meta.endings).length}/4): ${end.t}`, 'story');
  log(statsLine(), 'story');
  render(); save();
}

// ---------- интерфейс ----------
function btn(text, fn, cls = '', disabled = false) {
  const b = document.createElement('button');
  b.textContent = text; b.className = cls; b.disabled = disabled; b.onclick = () => { sfx('click'); fn(); };
  return b;
}
const head = (a, t) => { const d = document.createElement('div'); d.className = 'head'; d.textContent = t; a.appendChild(d); };

function consumableButtons(a) {
  a.appendChild(btn(`Паёк 🍖${S.food}`, () => useItem('food'), '', S.food <= 0 || S.en >= S.maxEn));
  a.appendChild(btn(`Бинт 🩹${S.meds}`, () => useItem('meds'), '', S.meds <= 0 || (S.hp >= S.maxHp && !S.bleed)));
  a.appendChild(btn(`Аптечка 💉${S.medkit}`, () => useItem('medkit'), '', S.medkit <= 0 || (S.hp >= S.maxHp && !S.poison && !S.bleed)));
  a.appendChild(btn(`Стим ⚡${S.stim}`, () => useItem('stim'), '', S.stim <= 0 || S.en >= S.maxEn));
  a.appendChild(btn(`🍲 Блюда ${totalDishes()}`, openMeals, 'full', totalDishes() === 0));
  const ap = ACTIVES.find(x => x.id === S.active);
  if (ap) a.appendChild(btn(S.activeUsed ? `✨ ${ap.n} (использовано)` : `✨ ${ap.n}: ${ap.t.replace('Раз за забег: ', '')}`, useActive, 'full', S.activeUsed));
}

function render() {
  checkAch();
  $('floor').textContent = S.inBase ? `Убежище (этаж ${S.floor})` : `Этаж ${S.floor} / ${TOP}`;
  $('zone').textContent = `${S.cycle ? 'Круг ' + (S.cycle + 1) + ' · ' : ''}${ZONES[zoneOf(S.floor)].name} · рекорд ${best || 1}`;
  $('b-hp').style.width = (S.hp / S.maxHp * 100) + '%';
  $('b-en').style.width = (S.en / S.maxEn * 100) + '%';
  $('b-xp').style.width = (S.xp / (S.lvl * 20) * 100) + '%';
  $('t-hp').textContent = `${S.hp}/${S.maxHp}`;
  $('t-en').textContent = `${S.en}/${S.maxEn}`;
  $('lvl').textContent = `Ур. ${S.lvl}`;
  $('t-xp').textContent = `${S.xp}/${S.lvl * 20}`;
  $('inv').innerHTML =
    `<span>🔩${S.scrap}</span><span>🧵${S.cloth}</span><span>🧪${S.chem}</span><span>🥩${S.meat}</span><span>🌿${S.herbs}</span><span>🍄${S.shrooms}</span>` +
    `<span>🔑${S.keys}</span><span>💣${S.grenade}</span><span>⚔️ ${weapon().n}</span><span>🛡️ ${armor().n}</span>` + (S.poison ? '<span style="color:var(--hp)">☠️ яд</span>' : '') + (S.bleed ? '<span style="color:var(--hp)">🩸 кровь</span>' : '');

  const st = $('stage');
  if (S.screen === 'fight' && S.enemy) {
    const e = S.enemy;
    st.style.display = 'flex';
    $('st-ic').textContent = ICONS[e.n] || '👾';
    $('st-name').textContent = `${e.n} ${Math.max(0, e.hp)}/${e.maxHp}`;
    $('st-hp').style.width = Math.max(0, e.hp / e.maxHp * 100) + '%';
    $('st-tr').textContent = traitIcons(e) + (e.weak > 0 ? ' · ослаблен' : '') + (e.stag > 0 ? ' · шатается' : '');
  } else st.style.display = 'none';

  const a = $('actions'); a.innerHTML = '';
  switch (S.screen) {
    case 'map':
      if (S.pendingPerks > 0 && !S.perkChoices.length) rollPerks();
      if (S.pendingPerks > 0) {
        head(a, 'Новый уровень! Выбери перк:');
        S.perkChoices.forEach(id => { const p = PERKS.find(x => x.id === id); a.appendChild(btn(`${p.n} — ${p.t}`, () => pickPerk(id), 'full primary')); });
        break;
      }
      if (S.quest) head(a, `📞 Задание: дойти до этажа ${S.quest.floor} (осталось ${S.quest.floor - S.floor})`);
      S.rooms.forEach((r, i) => {
        const label = r.done ? `✔ ${roomName(r.type)}` : r.known ? `🚪 Дверь ${i + 1}: ${roomName(r.type)} (рентген)` : `🚪 Дверь ${i + 1}: ${r.hint}`;
        a.appendChild(btn(label, () => openRoom(i), 'full' + (r.done ? '' : ' primary'), r.done));
      });
      if (S.lift) {
        if (S.lift.state === 'ok') a.appendChild(btn(`🛗 Лифт исправен — ${S.floor >= TOP ? 'на крышу' : 'ехать'} (-1 энергии)`, ride, 'full primary'));
        else {
          a.appendChild(btn(`🛠 Починить лифт — ${costText(S.lift.cost)}`, repairLift, 'full primary', !canPay(S.lift.cost)));
          a.appendChild(btn('🪢 Лезть по тросу (-4 энергии, риск травмы)', climbRope, 'full'));
        }
        if (S.lift.state === 'ok' && S.floor >= 3) a.appendChild(btn('🏠 Вниз, в убежище (-1 энергии)', goBase, 'full'));
      }
      head(a, 'Предметы');
      consumableButtons(a);
      a.appendChild(btn('🛠 Мастерская', () => { S.screen = 'craft'; render(); }));
      a.appendChild(btn(`📖 Дневник ${S.notes.length}/${NOTES.length}`, () => { S.screen = 'diary'; render(); }));
      a.appendChild(btn(`🏆 Достижения ${ACHS.filter(x => meta.ach[x.id]).length}/${ACHS.length}`, () => { S.screen = 'ach'; render(); }));
      a.appendChild(btn(`⭐ Навыки${S.sp ? ' (' + S.sp + ')' : ''}`, () => { S.screen = 'skills'; render(); }, S.sp ? 'primary' : ''));
      a.appendChild(btn('❓ Справка', () => { S.helpFrom = 'map'; S.screen = 'help'; render(); }));
      a.appendChild(btn('⚙ Настройки', openSettings));
      break;
    case 'start':
      a.appendChild(btn(`Сложность: ${DIFFS[meta.diff]} (нажми, чтобы сменить)`, () => { meta.diff = (meta.diff + 1) % 3; saveMeta(); render(); }, 'full primary'));
      head(a, 'Пассивный перк (действует весь забег). Нажми ещё раз, чтобы снять:');
      PASSIVES.forEach(p => a.appendChild(unlockedAt(p.req)
        ? btn(`${meta.sel.p === p.id ? '✔ ' : ''}${p.n} — ${p.t}`, () => toggleSel('p', p.id), 'full' + (meta.sel.p === p.id ? ' primary' : ''))
        : btn(`🔒 ${p.n} — откроется на этаже ${p.req}`, () => {}, 'full', true)));
      head(a, 'Активный перк (один раз за забег):');
      ACTIVES.forEach(p => a.appendChild(unlockedAt(p.req)
        ? btn(`${meta.sel.a === p.id ? '✔ ' : ''}${p.n} — ${p.t}`, () => toggleSel('a', p.id), 'full' + (meta.sel.a === p.id ? ' primary' : ''))
        : btn(`🔒 ${p.n} — откроется на этаже ${p.req}`, () => {}, 'full', true)));
      a.appendChild(btn('❓ Как играть', () => { S.helpFrom = 'start'; S.screen = 'help'; render(); }));
      a.appendChild(btn('⚙ Настройки', openSettings));
      a.appendChild(btn('▶ Начать забег', startRun, 'full primary'));
      break;
    case 'settings':
      head(a, 'Настройки. Сохранение идёт автоматически; здесь его можно перенести на другое устройство или после переустановки.');
      a.appendChild(btn(`🔊 Звук: ${muted ? 'выкл' : 'вкл'}`, () => { setMuted(!muted); render(); }, 'full'));
      a.appendChild(btn(`📳 Вибрация: ${vibOn ? 'вкл' : 'выкл'}`, () => { setVib(!vibOn); vib(30); render(); }, 'full'));
      a.appendChild(btn(`🔠 Размер текста: ${FONTS[fontIdx][0]}`, () => { setFont((fontIdx + 1) % FONTS.length); render(); }, 'full'));
      a.appendChild(btn('📤 Экспорт сохранения', () => { transferMode = 'export'; transferMsg = ''; S.screen = 'transfer'; render(); }));
      a.appendChild(btn('📥 Импорт сохранения', () => { transferMode = 'import'; transferMsg = ''; S.screen = 'transfer'; render(); }));
      a.appendChild(btn(confirmReset ? '⚠ Нажми ещё раз: сотрёт весь прогресс и достижения' : '🗑 Сбросить весь прогресс', resetAll, 'full danger'));
      a.appendChild(btn('← Назад', () => { confirmReset = false; S.screen = S.settingsFrom || 'start'; render(); }, 'full'));
      break;
    case 'transfer': {
      const ex = transferMode === 'export';
      head(a, ex ? 'Скопируй этот код и сохрани его в надёжном месте (заметки, почта). Он содержит текущий забег и весь прогресс.'
                 : 'Вставь код сохранения. Текущий забег и прогресс будут заменены.');
      const ta = document.createElement('textarea');
      ta.className = 'full'; ta.rows = 6; ta.spellcheck = false;
      if (ex) { ta.value = exportCode(); ta.readOnly = true; ta.onfocus = () => ta.select(); } else ta.placeholder = 'Код сохранения…';
      a.appendChild(ta);
      if (transferMsg) head(a, transferMsg);
      if (ex) a.appendChild(btn('📋 Скопировать', () => {
        ta.focus(); ta.select();
        try { navigator.clipboard.writeText(ta.value).then(() => log('Код скопирован.', 'good'), () => {}); } catch (e) {}
      }, 'full primary'));
      else a.appendChild(btn('📥 Загрузить сохранение', () => importCode(ta.value), 'full primary'));
      a.appendChild(btn('← Назад', () => { S.screen = 'settings'; render(); }, 'full'));
      break;
    }
    case 'help':
      HELP.forEach(t => { const d = document.createElement('div'); d.className = 'head'; d.style.color = 'var(--text)'; d.textContent = t; a.appendChild(d); });
      a.appendChild(btn('← Назад', () => { S.screen = S.helpFrom || 'start'; render(); }, 'full'));
      break;
    case 'skills':
      head(a, `Очки навыков: ${S.sp}. Оружие «${weapon().n}» усиливается навыком «${SK[WEAPON_SKILL[S.wi]]}».`);
      Object.keys(SK).forEach(k => a.appendChild(btn(
        `${WEAPON_SKILL[S.wi] === k ? '★ ' : ''}${SK[k]} ${S.skills[k]} (+1) — ${SK_INFO[k]}`, () => spendSkill(k), 'full' + (S.sp ? ' primary' : ''), S.sp <= 0)));
      a.appendChild(btn('← Назад', () => { S.screen = S.inBase ? 'base' : 'map'; render(); }, 'full'));
      break;
    case 'ach':
      ACHS.forEach(x => {
        const d = document.createElement('div'); d.className = 'head';
        d.style.color = meta.ach[x.id] ? 'var(--good)' : 'var(--dim)';
        d.textContent = meta.ach[x.id] ? `🏆 ${x.n} — ${x.t}` : `🔒 ${x.n} — ${x.t}`;
        a.appendChild(d);
      });
      a.appendChild(btn('← Назад', () => { S.screen = 'map'; render(); }, 'full'));
      break;
    case 'diary':
      head(a, `Найденные заметки: ${S.notes.length}/${NOTES.length}`);
      S.notes.slice().sort((x, y) => x - y).forEach(i => { const d = document.createElement('div'); d.className = 'head'; d.style.color = 'var(--text)'; d.textContent = '«' + NOTES[i] + '»'; a.appendChild(d); });
      if (S.perks.length) head(a, 'Перки: ' + S.perks.map(id => PERKS.find(p => p.id === id).n).join(', '));
      a.appendChild(btn('← Назад', () => { S.screen = 'map'; render(); }, 'full'));
      break;
    case 'base': {
      head(a, `Убежище. Возврат на этаж ${S.floor}: -${returnCost()} энергии.`);
      a.appendChild(btn('🛏 Спать (-6 энергии, полное здоровье)', sleep, 'full primary', S.en < 6));
      a.appendChild(btn(`🍳 Кухня ур.${S.kitchen}`, () => { S.screen = 'kitchen'; render(); }));
      a.appendChild(btn(`🛠 Верстак ур.${S.bench}`, () => { S.screen = 'craft'; render(); }));
      const bu = BENCH_UP[S.bench + 1], ku = KITCHEN_UP[S.kitchen + 1];
      if (bu) a.appendChild(btn(`🔧 Улучшить верстак — ${costText(bu)}`, () => upgrade('bench'), 'full', !canPay(bu)));
      if (ku) a.appendChild(btn(`🔧 Улучшить кухню — ${costText(ku)}`, () => upgrade('kitchen'), 'full', !canPay(ku)));
      a.appendChild(btn(`⭐ Навыки${S.sp ? ' (' + S.sp + ')' : ''}`, () => { S.screen = 'skills'; render(); }, 'full' + (S.sp ? ' primary' : '')));
      consumableButtons(a);
      a.appendChild(btn(`⬆ Вернуться на этаж ${S.floor}`, returnUp, 'full primary'));
      break;
    }
    case 'kitchen':
      head(a, `Кухня ур.${S.kitchen}. Ингредиенты: 🥩${S.meat} 🌿${S.herbs} 🍄${S.shrooms} 🍖${S.food}. Блюд готово: ${totalDishes()}`);
      Object.entries(DISHES).forEach(([id, d]) => {
        const lock = S.kitchen < DISH_LEVEL[id];
        a.appendChild(btn(lock ? `🔒 ${d.n}: нужна кухня ур.${DISH_LEVEL[id]}` : `${d.n} — ${costText(d.c)} (${d.t}) ×${S.dish[id] || 0}`, () => cook(id), 'full', lock || !canPay(d.c)));
      });
      a.appendChild(btn('← Назад', () => { S.screen = 'base'; render(); }, 'full'));
      break;
    case 'meals':
      head(a, 'Выбери блюдо:');
      Object.entries(DISHES).forEach(([id, d]) => { if (S.dish[id] > 0) a.appendChild(btn(`${d.n} ×${S.dish[id]} — ${d.t}`, () => eatDish(id), 'full primary')); });
      a.appendChild(btn('← Назад', () => { S.screen = S.mealFrom; render(); }, 'full'));
      break;
    case 'craft': {
      head(a, `Верстак ур.${S.bench}. Материалы: 🔩${S.scrap} 🧵${S.cloth} 🧪${S.chem}`);
      const nw = WEAPONS[S.wi + 1], na = ARMORS[S.ai + 1];
      if (nw) {
        const need = WEAPON_BENCH[S.wi + 1], lock = S.bench < need;
        a.appendChild(btn(lock ? `🔒 ${nw.n}: нужен верстак ур.${need} (улучшается в убежище)` : `⚔️ ${nw.n} (+${nw.d}, навык «${SK[WEAPON_SKILL[S.wi + 1]]}») — ${costText(nw.c)}`, () => craft('weapon', S.wi + 1), 'full', lock || !canPay(nw.c)));
      }
      if (na) {
        const need = ARMOR_BENCH[S.ai + 1], lock = S.bench < need;
        a.appendChild(btn(lock ? `🔒 ${na.n}: нужен верстак ур.${need} (улучшается в убежище)` : `🛡️ ${na.n} (защита ${na.a}) — ${costText(na.c)}`, () => craft('armor', S.ai + 1), 'full', lock || !canPay(na.c)));
      }
      Object.entries(RECIPES).forEach(([k, r]) => a.appendChild(btn(`${RES_ICON[k]} ${r.n} — ${costText(r.c)}`, () => craft('res', k), 'full', !canPay(r.c))));
      a.appendChild(btn('← Назад', () => { S.screen = S.inBase ? 'base' : 'map'; render(); }, 'full'));
      break;
    }
    case 'locked':
      head(a, `Запертая дверь. Ключей: ${S.keys}🔑.`);
      a.appendChild(btn('💪 Выбить дверь (-3 энергии, шанс 50%, при неудаче ушиб)', forceDoor, 'full primary'));
      a.appendChild(btn('Уйти', () => { S.screen = 'map'; render(); }, 'full'));
      break;
    case 'vending':
      head(a, `Автомат. У тебя 🔩${S.scrap}`);
      S.vend.stock.forEach((g, i) => a.appendChild(btn(g.sold ? `${g.n} — продано` : `${g.n} — ${g.cost}🔩`, () => buyVend(i), '', g.sold || S.scrap < g.cost)));
      a.appendChild(btn('Ударить автомат', kickVend, 'full danger', S.vend.kicked));
      a.appendChild(btn('Уйти', () => { S.screen = 'map'; render(); }, 'full primary'));
      break;
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
      Object.keys(PARTS).forEach(k => {
        const r = dmgRange(k);
        a.appendChild(btn(`${PARTS[k].n} ${Math.round(hitChance(k) * 100)}% · ${r[0]}–${r[1]}`, () => attack(k), 'primary'));
      });
      head(a, 'Руки: враг слабее бьёт. Ноги: враг может пропустить ход.');
      a.appendChild(btn('Защита', defend));
      a.appendChild(btn('Бежать', flee, '', S.passive === 'rush'));
      a.appendChild(btn(`Граната 💣${S.grenade}`, throwGrenade, 'full', S.grenade <= 0));
      consumableButtons(a);
      break;
    }
    default:
      if (S.screen === 'win') a.appendChild(btn(`Новая игра+ (круг ${S.cycle + 2}, герой сохраняется)`, newGamePlus, 'full primary'));
      a.appendChild(btn(S.screen === 'win' ? 'Новая игра с нуля' : 'Начать заново', newGame, 'full' + (S.screen === 'win' ? '' : ' primary')));
  }
}
function roomName(t) {
  return { loot: 'Склад', enemy: 'Логово', rest: 'Убежище', trap: 'Ловушка', trader: 'Торговец',
           event: 'Происшествие', empty: 'Пусто', vending: 'Автомат', locked: 'Запертая комната' }[t];
}

// ---------- настройки, перенос сохранения ----------
let transferMode = 'export', confirmReset = false, transferMsg = '';
const enc = o => btoa(unescape(encodeURIComponent(JSON.stringify(o))));
const dec = t => JSON.parse(decodeURIComponent(escape(atob(t.trim()))));
function exportCode() {
  const snap = Object.assign({}, S);
  if (snap.screen === 'settings' || snap.screen === 'transfer') snap.screen = snap.settingsFrom || 'start';
  return enc({ v: 1, S: snap, best, meta });
}
function importCode(code) {
  let d;
  try { d = dec(code); } catch (e) { d = null; }
  if (!d || d.v !== 1 || !d.S || typeof d.S.floor !== 'number' || !d.meta) {
    transferMsg = 'Код не подходит: скопируйте его целиком из экспорта.'; render(); return;
  }
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify({ S: d.S, best: d.best || 0 }));
    localStorage.setItem(META_KEY, JSON.stringify(d.meta));
  } catch (e) { transferMsg = 'Не удалось записать сохранение.'; render(); return; }
  location.reload();
}
function resetAll() {
  if (!confirmReset) { confirmReset = true; render(); return; }
  try { localStorage.removeItem(SAVE_KEY); localStorage.removeItem(META_KEY); } catch (e) {}
  location.reload();
}
function openSettings() { S.settingsFrom = S.screen; confirmReset = false; S.screen = 'settings'; render(); }

// ---------- кнопка «Назад» (Android) ----------
function backAction() {
  const back = { craft: S.inBase ? 'base' : 'map', diary: 'map', ach: 'map', skills: S.inBase ? 'base' : 'map',
                 kitchen: 'base', meals: S.mealFrom, help: S.helpFrom || 'start', settings: S.settingsFrom || 'start', transfer: 'settings', locked: 'map', trader: 'map', vending: 'map' }[S.screen];
  if (!back) return false;
  S.screen = back; render(); return true;
}
try {
  const App = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App;
  if (App) App.addListener('backButton', () => { if (!backAction()) App.exitApp(); });
} catch (e) {}

// ---------- старт ----------
if (load()) { if (!S.lift && S.screen !== 'start') newFloor(); log('Игра загружена.'); render(); } else newGame();
