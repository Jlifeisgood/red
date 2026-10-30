'use strict';
// ===== Предметы, рецепты, мебель и иконки предметов (рисуются на canvas, без файлов) =====

// cat: food — еда (сытость), med — лечение, mat — материалы, weapon — оружие, armor — одежда
// food: +сытость, heal: +здоровье, cure: снимает эффекты, dmg: урон, acc: к точности (%), def: снижает урон врага
// wv — как оружие выглядит в руке героя, av — уровень одежды героя
const ITEMS = {
  can:      { n: 'Тушёнка',          cat: 'food', food: 22, t: 'Жестянка с мясом. Сытно.' },
  crackers: { n: 'Сухари',           cat: 'food', food: 9,  t: 'Пачка сухарей. Хрустят на всю комнату.' },
  choco:    { n: 'Шоколадка',        cat: 'food', food: 12, t: 'Немного подтаяла, но пахнет детством.' },
  apple:    { n: 'Яблоко',           cat: 'food', food: 8,  t: 'Сморщенное, но съедобное.' },
  juice:    { n: 'Сок',              cat: 'food', food: 6,  heal: 3, t: 'Коробка яблочного сока.' },
  rice:     { n: 'Рис',              cat: 'food', food: 4,  t: 'Сырой рис. Лучше приготовить на кухне.' },
  pasta:    { n: 'Макароны',         cat: 'food', food: 4,  t: 'Сухие макароны. Лучше сварить.' },
  meat:     { n: 'Сырое мясо',       cat: 'food', food: 6,  raw: true, t: 'Чьё — лучше не думать. Сырым можно отравиться.' },
  veg:      { n: 'Овощи',            cat: 'food', food: 7,  t: 'Картошка и морковь из чьих-то запасов.' },
  stew:     { n: 'Рагу',             cat: 'food', food: 42, heal: 5, t: 'Мясо с овощами. Горячее!' },
  pilaf:    { n: 'Плов',             cat: 'food', food: 46, heal: 5, t: 'Рис с мясом. Еда на целый день.' },
  soup:     { n: 'Суп',              cat: 'food', food: 36, heal: 8, t: 'Тушёнка с овощами в кастрюле.' },
  navy:     { n: 'Макароны с мясом', cat: 'food', food: 40, t: 'Макароны и тушёнка. Классика.' },
  porridge: { n: 'Каша с яблоком',   cat: 'food', food: 24, heal: 4, t: 'Сладкая рисовая каша.' },
  bandage:  { n: 'Бинт',             cat: 'med',  heal: 12, cure: ['bleed'], t: 'Останавливает кровь, немного лечит.' },
  pills:    { n: 'Обезболивающее',   cat: 'med',  heal: 25, t: 'Пара таблеток — и снова можно идти.' },
  antidote: { n: 'Антидот',          cat: 'med',  heal: 5, cure: ['poison'], t: 'Снимает отравление.' },
  medkit:   { n: 'Аптечка',          cat: 'med',  heal: 55, cure: ['bleed', 'poison'], t: 'Лечит серьёзные раны и снимает все недуги.' },
  pipe:     { n: 'Труба',            cat: 'mat', t: 'Кусок водопроводной трубы.' },
  plank:    { n: 'Доска',            cat: 'mat', t: 'Крепкая доска от мебели.' },
  nails:    { n: 'Гвозди',           cat: 'mat', t: 'Горсть гнутых гвоздей.' },
  tape:     { n: 'Изолента',         cat: 'mat', t: 'Без неё ничего не чинится.' },
  cloth:    { n: 'Тряпки',           cat: 'mat', t: 'Обрывки ткани. Годятся на бинты.' },
  wire:     { n: 'Провода',          cat: 'mat', t: 'Моток медных проводов.' },
  battery:  { n: 'Аккумулятор',      cat: 'mat', t: 'Ещё держит заряд.' },
  blade:    { n: 'Лезвие',           cat: 'mat', t: 'Широкое стальное лезвие.' },
  alcohol:  { n: 'Спирт',            cat: 'mat', t: 'Для бинтов и лекарств. Пить не стоит.' },
  chem:     { n: 'Реактивы',         cat: 'mat', t: 'Склянки с химией из лабораторий.' },
  scrap:    { n: 'Железки',          cat: 'mat', t: 'Болты, шестерни, пластины.' },
  mop:      { n: 'Швабра',           cat: 'weapon', dmg: [2, 4], acc: 5, wv: 7, t: 'Лучше, чем голые руки.' },
  knife:    { n: 'Кухонный нож',     cat: 'weapon', dmg: [3, 6], wv: 8, t: 'Короткий, но острый.' },
  crowbar:  { n: 'Монтировка',       cat: 'weapon', dmg: [5, 8], wv: 9, t: 'Тяжёлая и надёжная.' },
  club:     { n: 'Бита с гвоздями',  cat: 'weapon', dmg: [6, 10], wv: 2, t: 'Доска и гвозди. Просто и страшно.' },
  pipeclub: { n: 'Труба с обмоткой', cat: 'weapon', dmg: [7, 10], acc: 5, wv: 1, t: 'Удобная рукоять, тяжёлый конец.' },
  machete:  { n: 'Тесак',            cat: 'weapon', dmg: [9, 13], wv: 3, t: 'Лезвие на деревянной ручке.' },
  spear:    { n: 'Копьё',            cat: 'weapon', dmg: [10, 15], acc: 10, wv: 10, t: 'Бьёт издалека и точно.' },
  shocker:  { n: 'Электродубинка',   cat: 'weapon', dmg: [12, 17], wv: 4, t: 'Трещит и искрит при ударе.' },
  axe:      { n: 'Пожарный топор',   cat: 'weapon', dmg: [15, 22], acc: -5, wv: 11, t: 'Самое страшное, что можно найти в этом здании.' },
  jacket:   { n: 'Кожанка',          cat: 'armor', def: 2, av: 1, t: 'Толстая кожа держит укусы.' },
  vest:     { n: 'Самодельный жилет', cat: 'armor', def: 4, av: 2, t: 'Тряпки и железо на изоленте.' },
  kevlar:   { n: 'Бронежилет',       cat: 'armor', def: 7, av: 3, t: 'Настоящий, с пластинами.' },
};
const CATS = [['weapon', 'Оружие'], ['armor', 'Одежда'], ['food', 'Еда'], ['med', 'Лечение'], ['mat', 'Материалы']];

// where: any — где угодно, bench — верстак в убежище, kitchen — плита в убежище; lvl — нужный уровень верстака/кухни
const RECIPES = [
  { out: 'bandage',  need: { cloth: 1, alcohol: 1 }, where: 'any' },
  { out: 'antidote', need: { chem: 1, alcohol: 1 }, where: 'any' },
  { out: 'medkit',   need: { bandage: 1, pills: 1, alcohol: 1 }, where: 'any' },
  { out: 'club',     need: { plank: 1, nails: 2 }, where: 'bench', lvl: 1 },
  { out: 'pipeclub', need: { pipe: 1, tape: 1, cloth: 1 }, where: 'bench', lvl: 1 },
  { out: 'machete',  need: { blade: 1, plank: 1, tape: 1 }, where: 'bench', lvl: 1 },
  { out: 'vest',     need: { cloth: 2, scrap: 2, tape: 1 }, where: 'bench', lvl: 2 },
  { out: 'spear',    need: { pipe: 1, blade: 1, tape: 2 }, where: 'bench', lvl: 2 },
  { out: 'shocker',  need: { pipe: 1, wire: 1, battery: 2, tape: 1 }, where: 'bench', lvl: 3 },
  { out: 'axe',      need: { blade: 2, pipe: 1, scrap: 3 }, where: 'bench', lvl: 3 },
  { out: 'porridge', need: { rice: 1, apple: 1 }, where: 'kitchen', lvl: 1 },
  { out: 'soup',     need: { can: 1, veg: 1 }, where: 'kitchen', lvl: 1 },
  { out: 'stew',     need: { meat: 1, veg: 1 }, where: 'kitchen', lvl: 2 },
  { out: 'navy',     need: { pasta: 1, can: 1 }, where: 'kitchen', lvl: 2 },
  { out: 'pilaf',    need: { rice: 1, meat: 1 }, where: 'kitchen', lvl: 3 },
];
// улучшения убежища: кровать лечит сильнее, верстак и плита открывают рецепты
const UPGRADES = {
  bed:     { n: 'Кровать', lv: [null, null, { plank: 2, cloth: 2 }, { plank: 2, cloth: 3, scrap: 2 }], t: ['', 'лечит 40% здоровья', 'лечит 70% здоровья', 'лечит полностью'] },
  bench:   { n: 'Верстак', lv: [null, null, { scrap: 3, pipe: 1, nails: 1 }, { scrap: 5, wire: 2, tape: 1 }], t: ['', 'простое оружие', 'копьё и жилет', 'топор и электродубинка'] },
  kitchen: { n: 'Плита',   lv: [null, null, { scrap: 2, pipe: 1, wire: 1 }, { scrap: 4, battery: 1, wire: 1 }], t: ['', 'каша и суп', 'рагу и макароны', 'плов'] },
};

// ---------- мебель: размеры для зон нажатия, вместимость, набор по зонам ----------
// loot — сколько предметов может лежать (0 — только для красоты), h — высота, w — ширина в единицах сцены
const FURN = {
  wardrobe:  { n: 'Шкаф',             w: 62, h: 132, loot: 2 },
  dresser:   { n: 'Комод',            w: 70, h: 62,  loot: 2 },
  nightstand:{ n: 'Тумбочка',         w: 34, h: 40,  loot: 1 },
  bookshelf: { n: 'Книжный шкаф',     w: 58, h: 124, loot: 1 },
  fridge:    { n: 'Холодильник',      w: 46, h: 112, loot: 2, food: true },
  kitchen:   { n: 'Кухонный шкафчик', w: 84, h: 74,  loot: 2, food: true },
  bed:       { n: 'Кровать',          w: 108, h: 46, loot: 1 },
  sofa:      { n: 'Диван',            w: 104, h: 48, loot: 1 },
  tvstand:   { n: 'Тумба с телевизором', w: 70, h: 80, loot: 1 },
  desk:      { n: 'Письменный стол',  w: 76, h: 56,  loot: 1 },
  officedesk:{ n: 'Рабочий стол',     w: 84, h: 70,  loot: 1 },
  filing:    { n: 'Картотека',        w: 34, h: 74,  loot: 1 },
  locker:    { n: 'Шкафчик',          w: 38, h: 118, loot: 2 },
  medcab:    { n: 'Медицинский шкаф', w: 48, h: 96,  loot: 2, med: true },
  labbench:  { n: 'Лабораторный стол', w: 96, h: 62, loot: 2, chem: true },
  trash:     { n: 'Мусорный бак',     w: 30, h: 40,  loot: 1 },
  crates:    { n: 'Ящики',            w: 70, h: 60,  loot: 2 },
  shelves:   { n: 'Стеллаж',          w: 62, h: 112, loot: 2 },
  toolbox:   { n: 'Ящик с инструментами', w: 46, h: 34, loot: 2, tools: true },
  safe:      { n: 'Сейф',             w: 44, h: 52,  loot: 2, rich: true },
  bar:       { n: 'Барная стойка',    w: 92, h: 58,  loot: 2, food: true },
  mattress:  { n: 'Матрас',           w: 86, h: 16,  loot: 1 },
  // декор (не обыскивается)
  armchair:  { n: 'Кресло',           w: 48, h: 60,  loot: 0 },
  plant:     { n: 'Растение',         w: 30, h: 70,  loot: 0 },
  piano:     { n: 'Пианино',          w: 76, h: 70,  loot: 0 },
  cooler:    { n: 'Кулер',            w: 26, h: 78,  loot: 0 },
  barrels:   { n: 'Бочки',            w: 60, h: 46,  loot: 0 },
  lamp:      { n: 'Торшер',           w: 30, h: 110, loot: 0 },
  table:     { n: 'Стол',             w: 70, h: 40,  loot: 0 },
  // убежище: вещи с улучшениями
  sbed:      { n: 'Кровать',          w: 116, h: 58, loot: 0, base: 'bed' },
  sstove:    { n: 'Плита',            w: 84, h: 92,  loot: 0, base: 'stove' },
  sbench:    { n: 'Верстак',          w: 110, h: 100, loot: 0, base: 'bench' },
};
// зоны: 0 — технические этажи (внизу), 1 — жилые, 2 — офисы, 3 — лаборатории, 4 — пентхаусы (наверху)
const ZONE_FURN = [
  { box: ['shelves', 'crates', 'toolbox', 'trash', 'mattress', 'locker'], deco: ['barrels'] },
  { box: ['wardrobe', 'dresser', 'fridge', 'kitchen', 'bed', 'nightstand', 'bookshelf', 'sofa', 'tvstand'], deco: ['armchair', 'plant', 'table', 'lamp'] },
  { box: ['officedesk', 'filing', 'locker', 'bookshelf', 'trash', 'sofa', 'desk'], deco: ['cooler', 'plant'] },
  { box: ['medcab', 'labbench', 'locker', 'filing', 'fridge', 'trash'], deco: ['cooler'] },
  { box: ['wardrobe', 'dresser', 'bar', 'sofa', 'bookshelf', 'safe', 'nightstand'], deco: ['piano', 'armchair', 'plant', 'lamp'] },
];
// что где лежит: общая таблица + особые наборы для холодильников, аптечек, инструментов
const LOOT = {
  any:   { can: 5, crackers: 6, choco: 4, apple: 4, juice: 3, rice: 3, pasta: 3, veg: 3, meat: 2, bandage: 4, pills: 3, alcohol: 3, cloth: 6, tape: 4, nails: 4, plank: 4, pipe: 3, wire: 3, scrap: 5, battery: 1, blade: 1, chem: 1 },
  food:  { can: 6, crackers: 3, choco: 3, apple: 5, juice: 5, rice: 4, pasta: 4, veg: 5, meat: 5 },
  med:   { bandage: 5, pills: 4, antidote: 3, alcohol: 4, medkit: 1, chem: 2 },
  chem:  { chem: 5, alcohol: 4, antidote: 2, pills: 2, battery: 2, wire: 2 },
  tools: { tape: 5, nails: 5, wire: 4, scrap: 5, pipe: 3, blade: 2, battery: 2 },
  rich:  { medkit: 2, pills: 3, battery: 3, blade: 2, choco: 3, can: 3 },
};
// оружие и одежда, которые можно найти: чем ниже этаж, тем лучше
const FINDS = [['mop', 99, 70], ['knife', 99, 40], ['jacket', 95, 50], ['crowbar', 80, 15], ['kevlar', 40, 1]];

// ---------- иконки ----------
const ICON_CACHE = {};
function itemIcon(id, px = 96) {
  const key = id + ':' + px;
  if (ICON_CACHE[key]) return ICON_CACHE[key];
  const c = document.createElement('canvas'); c.width = c.height = px;
  const x = c.getContext('2d'); x.scale(px / 64, px / 64);
  x.lineJoin = 'round'; x.lineCap = 'round';
  try { (ICON_DRAW[id] || ICON_DRAW._)(x); } catch (e) { ICON_DRAW._(x); }
  return ICON_CACHE[key] = c.toDataURL();
}
const iconImg = (id, cls = '') => `<img class="it ${cls}" src="${itemIcon(id)}" alt="">`;

// примитивы для иконок: заливка с тенью справа и бликом сверху, тёмный контур
const IC = {
  path(x, d) { return new Path2D(d); },
  shade(x, p, col) { x.save(); x.clip(p); x.fillStyle = col; x.fill(new Path2D('M40 0 L64 0 L64 64 L30 64 Z')); x.restore(); },
  shine(x, p, a = .25) { x.save(); x.clip(p); x.fillStyle = `rgba(255,255,255,${a})`; x.fill(new Path2D('M0 0 L64 0 L64 14 L0 26 Z')); x.restore(); },
  rect(x, rx, ry, w, h, r = 3) { const p = new Path2D(); p.roundRect ? p.roundRect(rx, ry, w, h, r) : p.rect(rx, ry, w, h); return p; },
  ell(cx, cy, rx, ry) { const p = new Path2D(); p.ellipse(cx, cy, rx, ry, 0, 0, 7); return p; },
  ln(x, pts, col, w = 1.6) { x.strokeStyle = col; x.lineWidth = w; x.beginPath(); x.moveTo(pts[0], pts[1]); for (let i = 2; i < pts.length; i += 2) x.lineTo(pts[i], pts[i + 1]); x.stroke(); },
  thing(x, p, col, shade = 'rgba(0,0,0,.28)', shine = .22) { x.fillStyle = col; x.fill(p); IC.shade(x, p, shade); IC.shine(x, p, shine); x.strokeStyle = 'rgba(22,16,12,.92)'; x.lineWidth = 1.8; x.stroke(p); },
  bowl(x, col, food) {
    IC.thing(x, IC.path(x, 'M8 34 L56 34 C54 48 44 54 32 54 C20 54 10 48 8 34 Z'), '#d8d2c4');
    IC.thing(x, IC.ell(32, 34, 24, 6), food, 'rgba(0,0,0,.2)', .1);
    for (let i = 0; i < 3; i++) IC.ln(x, [24 + i * 8, 24, 22 + i * 8, 16, 25 + i * 8, 10], 'rgba(220,220,220,.7)', 1.4);
  },
};
const ICON_DRAW = {
  _(x) { IC.thing(x, IC.rect(x, 14, 14, 36, 36, 6), '#6a6a6a'); x.fillStyle = '#eee'; x.font = '700 26px sans-serif'; x.textAlign = 'center'; x.fillText('?', 32, 42); },
  can(x) { const p = IC.rect(x, 16, 12, 32, 42, 4); IC.thing(x, p, '#b8bec4'); IC.thing(x, IC.rect(x, 16, 22, 32, 22, 1), '#a8382a'); x.fillStyle = '#f2e2b0'; x.fillRect(22, 29, 20, 8); IC.ln(x, [16, 12, 48, 12], '#6a7076', 1.4); },
  crackers(x) { IC.thing(x, IC.path(x, 'M12 18 L50 12 L54 46 L16 52 Z'), '#d9a43a'); for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) { x.fillStyle = '#b07a22'; x.beginPath(); x.arc(22 + i * 10 + j * 1.2, 26 + j * 12 - i * 1.4, 1.8, 0, 7); x.fill(); } x.fillStyle = '#8a2a1c'; x.fillRect(14, 40, 38, 5); },
  choco(x) { x.save(); x.translate(32, 32); x.rotate(-.35); IC.thing(x, IC.rect(x, -22, -12, 44, 24, 2), '#5a3220'); IC.thing(x, IC.rect(x, -4, -12, 26, 24, 2), '#c8a24a'); x.fillStyle = '#7a1a1a'; x.fillRect(2, -4, 14, 8); x.restore(); },
  apple(x) { IC.thing(x, IC.path(x, 'M32 20 C20 12 8 22 12 38 C15 52 26 56 32 52 C38 56 49 52 52 38 C56 22 44 12 32 20 Z'), '#c2402e'); IC.ln(x, [32, 20, 34, 10], '#5a3a1c', 2.4); IC.thing(x, IC.path(x, 'M34 14 C40 6 48 8 48 10 C44 16 38 16 34 14 Z'), '#5a9a3a'); },
  juice(x) { IC.thing(x, IC.path(x, 'M18 18 L46 18 L46 56 L18 56 Z'), '#e8c24a'); IC.thing(x, IC.path(x, 'M18 18 L32 8 L46 18 Z'), '#f2d870'); IC.thing(x, IC.ell(32, 38, 9, 9), '#c2402e', 'rgba(0,0,0,.2)', .1); IC.ln(x, [36, 12, 40, 2], '#d8d8d8', 2.4); },
  rice(x) { IC.thing(x, IC.path(x, 'M14 22 C14 14 50 14 50 22 L52 52 C40 58 24 58 12 52 Z'), '#e8e0c8'); IC.thing(x, IC.path(x, 'M20 18 C26 10 38 10 44 18 Z'), '#c8b890'); x.fillStyle = '#2a6a4a'; x.fillRect(16, 34, 34, 8); },
  pasta(x) { IC.thing(x, IC.rect(x, 12, 16, 40, 38, 3), '#3a6aa8'); x.fillStyle = 'rgba(255,240,200,.85)'; x.fillRect(18, 22, 28, 18); for (let i = 0; i < 6; i++) IC.ln(x, [20 + i * 4, 24, 22 + i * 4, 38], '#d9b45a', 1.6); },
  meat(x) { IC.thing(x, IC.path(x, 'M14 30 C12 16 34 10 46 18 C56 26 52 44 40 48 C28 52 16 44 14 30 Z'), '#b8443a'); IC.thing(x, IC.path(x, 'M22 30 C22 24 32 22 36 28 C38 34 30 38 24 36 Z'), '#e8c8b8', 'rgba(0,0,0,.1)', .1); IC.thing(x, IC.ell(46, 46, 6, 5), '#efe6d2'); },
  veg(x) { IC.thing(x, IC.ell(26, 38, 14, 12), '#b88a4a'); x.save(); x.translate(40, 30); x.rotate(.6); IC.thing(x, IC.path(x, 'M-5 -14 L5 -14 L1 18 Z'), '#e07a2a'); x.restore(); IC.ln(x, [44, 18, 50, 8], '#4a8a3a', 2.4); IC.ln(x, [44, 18, 42, 8], '#4a8a3a', 2.4); },
  stew(x) { IC.bowl(x, '#d8d2c4', '#8a4a2a'); x.fillStyle = '#e07a2a'; x.fillRect(26, 31, 5, 3); x.fillStyle = '#c8a070'; x.fillRect(36, 32, 6, 3); },
  pilaf(x) { IC.thing(x, IC.ell(32, 42, 26, 10), '#d8d2c4'); IC.thing(x, IC.path(x, 'M12 40 C16 24 48 24 52 40 Z'), '#e0b860', 'rgba(0,0,0,.15)', .2); x.fillStyle = '#8a3a2a'; [[24, 34], [36, 31], [42, 36], [30, 37]].forEach(([a, b]) => x.fillRect(a, b, 5, 4)); },
  soup(x) { IC.bowl(x, '#d8d2c4', '#c87a3a'); x.fillStyle = '#5a9a3a'; x.fillRect(24, 32, 4, 3); x.fillRect(38, 33, 4, 3); },
  navy(x) { IC.thing(x, IC.ell(32, 42, 26, 10), '#d8d2c4'); for (let i = 0; i < 7; i++) IC.ln(x, [14 + i * 5, 40, 20 + i * 5, 30 + (i % 2) * 4], '#e8c060', 3); x.fillStyle = '#8a3a2a'; x.fillRect(26, 32, 6, 4); x.fillRect(38, 34, 5, 4); },
  porridge(x) { IC.bowl(x, '#d8d2c4', '#efe6d2'); IC.thing(x, IC.ell(34, 32, 5, 3), '#c2402e', 'rgba(0,0,0,.1)', .1); },
  bandage(x) { IC.thing(x, IC.ell(28, 34, 18, 18), '#efe8dc'); IC.thing(x, IC.ell(28, 34, 6, 6), '#c8c0b0'); IC.thing(x, IC.path(x, 'M40 46 L56 52 L54 58 L36 50 Z'), '#efe8dc'); IC.ln(x, [16, 26, 40, 26], 'rgba(0,0,0,.12)', 1); },
  pills(x) { IC.thing(x, IC.rect(x, 20, 16, 24, 38, 4), '#e8a03a'); IC.thing(x, IC.rect(x, 18, 8, 28, 10, 2), '#efe8dc'); x.fillStyle = '#fff'; x.fillRect(24, 26, 16, 14); x.fillStyle = '#c2402e'; x.fillRect(30, 28, 4, 10); x.fillRect(27, 31, 10, 4); },
  antidote(x) { IC.thing(x, IC.path(x, 'M26 10 L38 10 L38 22 L50 48 C52 54 48 56 44 56 L20 56 C16 56 12 54 14 48 L26 22 Z'), '#cfe6e0'); IC.thing(x, IC.path(x, 'M18 42 L46 42 L50 50 C50 54 48 56 44 56 L20 56 C16 56 14 54 14 50 Z'), '#4aaa6a', 'rgba(0,0,0,.2)', .1); IC.thing(x, IC.rect(x, 24, 6, 16, 6, 2), '#6a7076'); },
  medkit(x) { IC.thing(x, IC.rect(x, 8, 18, 48, 36, 5), '#d8d2c4'); IC.thing(x, IC.rect(x, 24, 11, 16, 9, 2), '#8a8478'); x.fillStyle = '#c2402e'; x.fillRect(28, 26, 8, 22); x.fillRect(21, 33, 22, 8); },
  pipe(x) { x.save(); x.translate(32, 32); x.rotate(-.7); IC.thing(x, IC.rect(x, -26, -6, 52, 12, 2), '#8a929c'); IC.thing(x, IC.rect(x, -28, -8, 8, 16, 2), '#5a6068'); IC.thing(x, IC.rect(x, 20, -8, 8, 16, 2), '#5a6068'); x.restore(); },
  plank(x) { x.save(); x.translate(32, 32); x.rotate(-.6); IC.thing(x, IC.rect(x, -28, -8, 56, 16, 1), '#b07a44'); for (let i = 0; i < 3; i++) IC.ln(x, [-24 + i * 6, -3 + i * 3, 20 - i * 4, -4 + i * 3], 'rgba(90,50,20,.5)', 1); x.fillStyle = '#3a2a1a'; x.beginPath(); x.arc(18, 2, 1.6, 0, 7); x.fill(); x.restore(); },
  nails(x) { for (let i = 0; i < 5; i++) { x.save(); x.translate(18 + i * 7, 32 + (i % 2) * 6); x.rotate(-.5 + i * .25); IC.thing(x, IC.rect(x, -1.6, -16, 3.2, 30, 1), '#9aa2aa', 'rgba(0,0,0,.2)', .3); IC.thing(x, IC.rect(x, -4, -18, 8, 3, 1), '#7a828a'); x.restore(); } },
  tape(x) { IC.thing(x, IC.ell(32, 32, 22, 22), '#3a4a6a'); IC.thing(x, IC.ell(32, 32, 10, 10), '#d8d2c4', 'rgba(0,0,0,.15)', .1); IC.thing(x, IC.path(x, 'M50 44 L58 54 L52 58 L44 48 Z'), '#3a4a6a'); },
  cloth(x) { IC.thing(x, IC.path(x, 'M10 24 C20 16 30 26 40 18 C46 14 54 18 56 24 L52 48 C42 54 34 44 24 50 C18 54 12 50 10 46 Z'), '#8a7a6a'); IC.ln(x, [16, 30, 26, 34, 34, 28], 'rgba(0,0,0,.25)', 1.4); IC.ln(x, [22, 42, 34, 38, 46, 40], 'rgba(0,0,0,.25)', 1.4); },
  wire(x) { x.strokeStyle = '#c87a3a'; x.lineWidth = 3.4; for (let i = 0; i < 4; i++) { x.beginPath(); x.ellipse(32, 32 + i * 1.5, 20 - i * 3, 14 - i * 2, 0, 0, 7); x.stroke(); } IC.ln(x, [50, 34, 58, 48], '#c87a3a', 3.4); IC.ln(x, [58, 48, 60, 52], '#d8d8d8', 2); },
  battery(x) { IC.thing(x, IC.rect(x, 10, 18, 44, 32, 3), '#2a2e33'); IC.thing(x, IC.rect(x, 16, 12, 8, 7, 1), '#c2402e'); IC.thing(x, IC.rect(x, 40, 12, 8, 7, 1), '#5a6068'); x.fillStyle = '#e8c24a'; x.beginPath(); x.moveTo(34, 22); x.lineTo(26, 36); x.lineTo(32, 36); x.lineTo(28, 46); x.lineTo(38, 32); x.lineTo(32, 32); x.closePath(); x.fill(); },
  blade(x) { x.save(); x.translate(32, 32); x.rotate(-.75); IC.thing(x, IC.path(x, 'M-26 -4 L20 -9 C26 -9 28 -4 26 2 L-26 6 Z'), '#c8d0d8', 'rgba(0,0,0,.2)', .35); x.restore(); },
  alcohol(x) { IC.thing(x, IC.path(x, 'M26 8 L38 8 L38 20 C46 24 48 30 48 36 L48 54 C48 56 46 58 44 58 L20 58 C18 58 16 56 16 54 L16 36 C16 30 18 24 26 20 Z'), 'rgba(190,220,230,.9)'); IC.thing(x, IC.rect(x, 18, 34, 28, 16, 1), '#efe6d2', 'rgba(0,0,0,.1)', .1); x.fillStyle = '#2a4a8a'; x.font = '700 9px sans-serif'; x.textAlign = 'center'; x.fillText('96%', 32, 45); IC.thing(x, IC.rect(x, 25, 4, 14, 6, 1), '#c2402e'); },
  chem(x) { IC.thing(x, IC.path(x, 'M18 10 L28 10 L28 24 L34 52 C34 56 32 58 28 58 L18 58 C14 58 12 56 12 52 L18 24 Z'), 'rgba(200,230,230,.9)'); IC.thing(x, IC.path(x, 'M14 42 L32 42 L34 52 C34 56 32 58 28 58 L18 58 C14 58 12 56 12 52 Z'), '#8a4ac8', 'rgba(0,0,0,.2)', .1); IC.thing(x, IC.rect(x, 38, 22, 14, 34, 3), 'rgba(200,230,230,.9)'); IC.thing(x, IC.rect(x, 38, 36, 14, 20, 3), '#4aaa6a', 'rgba(0,0,0,.2)', .1); },
  scrap(x) {
    const gear = (cx, cy, r, col) => { const p = new Path2D(); for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2, rr = i % 2 ? r : r * .78; p.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } p.closePath(); IC.thing(x, p, col); IC.thing(x, IC.ell(cx, cy, r * .3, r * .3), '#3a3e42'); };
    gear(24, 26, 14, '#9aa2aa'); gear(42, 42, 11, '#7a828a'); IC.thing(x, IC.rect(x, 10, 46, 16, 8, 2), '#6a7076');
  },
  mop(x) { IC.ln(x, [16, 56, 46, 10], '#8a5a32', 4); IC.thing(x, IC.path(x, 'M8 46 L24 60 L18 62 C10 60 6 56 4 52 Z'), '#c8c0a8'); for (let i = 0; i < 4; i++) IC.ln(x, [8 + i * 3, 50 + i * 2, 4 + i * 3, 58 + i], '#a89e84', 1.4); },
  knife(x) { x.save(); x.translate(32, 32); x.rotate(-.75); IC.thing(x, IC.rect(x, -26, -4, 18, 8, 2), '#3a2a1c'); IC.thing(x, IC.path(x, 'M-8 -5 L24 -5 C28 -4 28 2 22 5 L-8 5 Z'), '#c8d0d8', 'rgba(0,0,0,.2)', .35); x.restore(); },
  crowbar(x) { IC.ln(x, [14, 54, 46, 14], '#1a1a1e', 7); IC.ln(x, [14, 54, 46, 14], '#c2402e', 4.4); IC.ln(x, [46, 14, 52, 10, 56, 14], '#1a1a1e', 7); IC.ln(x, [46, 14, 52, 10, 56, 14], '#c2402e', 4.4); IC.ln(x, [12, 56, 8, 54], '#1a1a1e', 6); },
  club(x) { x.save(); x.translate(32, 32); x.rotate(-.75); IC.thing(x, IC.path(x, 'M-28 -3 L-10 -3 C6 -7 20 -8 26 -6 C29 -4 29 4 26 6 C20 8 6 7 -10 3 L-28 3 Z'), '#b07a44'); for (let i = 0; i < 4; i++) { IC.ln(x, [2 + i * 6, -6, 4 + i * 6, -12], '#c8d0d8', 1.6); IC.ln(x, [5 + i * 6, 6, 7 + i * 6, 12], '#c8d0d8', 1.6); } x.restore(); },
  pipeclub(x) { x.save(); x.translate(32, 32); x.rotate(-.75); IC.thing(x, IC.rect(x, -28, -4, 56, 8, 2), '#8a929c'); IC.thing(x, IC.rect(x, -28, -5, 20, 10, 2), '#3a4a6a'); for (let i = 0; i < 4; i++) IC.ln(x, [-26 + i * 5, -5, -24 + i * 5, 5], 'rgba(0,0,0,.35)', 1); x.restore(); },
  machete(x) { x.save(); x.translate(32, 32); x.rotate(-.75); IC.thing(x, IC.rect(x, -28, -4, 16, 8, 2), '#6a4a2a'); IC.thing(x, IC.path(x, 'M-12 -5 L18 -9 C26 -9 28 -2 24 6 L-12 5 Z'), '#c8d0d8', 'rgba(0,0,0,.2)', .35); IC.thing(x, IC.rect(x, -14, -6, 4, 12, 1), '#3a4a6a'); x.restore(); },
  spear(x) { IC.ln(x, [8, 58, 44, 18], '#1a1a1e', 6); IC.ln(x, [8, 58, 44, 18], '#8a929c', 3.6); IC.thing(x, IC.path(x, 'M42 22 L58 4 L52 26 Z'), '#c8d0d8', 'rgba(0,0,0,.2)', .35); IC.thing(x, IC.rect(x, 38, 18, 8, 8, 1), '#3a4a6a'); },
  shocker(x) { x.save(); x.translate(32, 32); x.rotate(-.75); IC.thing(x, IC.rect(x, -28, -5, 48, 10, 2), '#2a2e33'); IC.thing(x, IC.rect(x, -28, -6, 14, 12, 2), '#c9a422'); IC.thing(x, IC.ell(22, 0, 6, 6), '#ffe34d', 'rgba(0,0,0,.1)', .3); x.restore(); IC.ln(x, [50, 10, 56, 4, 54, 12, 60, 8], '#fff6a0', 1.8); },
  axe(x) { IC.ln(x, [12, 58, 44, 12], '#1a1a1e', 6); IC.ln(x, [12, 58, 44, 12], '#b07a44', 3.8); IC.thing(x, IC.path(x, 'M36 8 C44 2 56 6 60 16 L46 24 Z'), '#c2402e'); IC.thing(x, IC.path(x, 'M42 18 L30 10 L34 6 Z'), '#8a929c'); },
  jacket(x) { IC.thing(x, IC.path(x, 'M20 10 L28 14 L36 14 L44 10 L56 18 L54 34 L48 32 L48 56 L16 56 L16 32 L10 34 L8 18 Z'), '#5a3a26'); IC.ln(x, [32, 14, 32, 56], 'rgba(0,0,0,.4)', 1.6); IC.ln(x, [26, 14, 32, 26, 38, 14], 'rgba(0,0,0,.4)', 1.6); },
  vest(x) { IC.thing(x, IC.path(x, 'M18 10 L26 10 L30 18 L34 18 L38 10 L46 10 L50 20 L50 56 L14 56 L14 20 Z'), '#6a6a52'); IC.thing(x, IC.rect(x, 18, 30, 12, 10, 1), '#8a8a6a'); IC.thing(x, IC.rect(x, 34, 30, 12, 10, 1), '#8a8a6a'); IC.ln(x, [14, 46, 50, 46], '#3a4a6a', 3); },
  kevlar(x) { IC.thing(x, IC.path(x, 'M18 8 L26 8 L30 16 L34 16 L38 8 L46 8 L52 18 L52 56 L12 56 L12 18 Z'), '#2c3036'); for (let i = 0; i < 3; i++) IC.thing(x, IC.rect(x, 18 + i * 10, 32, 8, 12, 1), '#3a4048'); IC.ln(x, [12, 50, 52, 50], '#4a5058', 2); },
  note(x) { IC.thing(x, IC.path(x, 'M14 8 L44 8 L52 16 L52 58 L14 58 Z'), '#efe6d0'); for (let i = 0; i < 6; i++) IC.ln(x, [20, 22 + i * 6, 46 - (i % 3) * 4, 22 + i * 6], 'rgba(40,40,60,.5)', 1.2); },
};
