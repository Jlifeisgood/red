'use strict';
// ===== Графика игры: всё нарисовано кодом (SVG), рисунки оригинальные =====
// Координаты сцены: viewBox 0 0 360 420, пол на y = 340. У героя и врагов начало координат — центр стоп.

const ART = {};

// ---------- общие градиенты и фильтры ----------
ART.defs = `<defs>
  <linearGradient id="gDoor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7d5834"/><stop offset="1" stop-color="#4a3220"/></linearGradient>
  <linearGradient id="gMetal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#394152"/><stop offset=".5" stop-color="#6f7a8f"/><stop offset="1" stop-color="#394152"/></linearGradient>
  <linearGradient id="gCone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9a8" stop-opacity=".34"/><stop offset="1" stop-color="#ffe9a8" stop-opacity="0"/></linearGradient>
  <radialGradient id="gGlow"><stop offset="0" stop-color="#ffe9a8" stop-opacity=".6"/><stop offset="1" stop-color="#ffe9a8" stop-opacity="0"/></radialGradient>
  <radialGradient id="gSpill" cx="0" cy="1" r="1"><stop offset="0" stop-color="#ffd884" stop-opacity=".55"/><stop offset="1" stop-color="#ffd884" stop-opacity="0"/></radialGradient>
  <linearGradient id="gFade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".6"/></linearGradient>
  <linearGradient id="gTopFade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".55"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>
  <filter id="fBlur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4"/></filter>
  <pattern id="pHaz" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="16" fill="#d9ad1f"/><rect x="8" width="8" height="16" fill="#15171c"/></pattern>
</defs>`;

// ---------- фон коридора ----------
function lampSVG(x, flick) {
  return `<g${flick ? ' class="flick"' : ''}>
    <polygon points="${x - 16},48 ${x + 16},48 ${x + 84},340 ${x - 84},340" fill="url(#gCone)"/>
    <ellipse cx="${x}" cy="58" rx="40" ry="18" fill="url(#gGlow)"/>
    <rect x="${x - 20}" y="40" width="40" height="9" rx="3" fill="#252a35"/><rect x="${x - 15}" y="47" width="30" height="5" rx="2.5" fill="#fff1c4"/>
  </g>`;
}
function hall(c) {
  return `<defs>
    <linearGradient id="bgWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c.w1}"/><stop offset="1" stop-color="${c.w2}"/></linearGradient>
    <linearGradient id="bgFloor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c.f1}"/><stop offset="1" stop-color="${c.f2}"/></linearGradient>
    ${c.defs || ''}
  </defs>
  <rect x="-300" y="-300" width="960" height="640" fill="url(#bgWall)"/>
  ${c.wall || ''}
  <rect x="-300" y="-300" width="960" height="344" fill="${c.ceil}"/>
  <rect x="-300" y="44" width="960" height="5" fill="${c.trim}" opacity=".85"/>
  <rect x="-300" y="49" width="960" height="10" fill="url(#gTopFade)" opacity=".7"/>
  ${c.ceilDeco || ''}
  <rect x="-300" y="318" width="960" height="23" fill="${c.base}"/>
  <rect x="-300" y="318" width="960" height="2" fill="#fff" opacity=".1"/>
  ${c.baseDeco || ''}
  <rect x="-300" y="340" width="960" height="400" fill="url(#bgFloor)"/>
  ${c.floor || ''}
  <g stroke="#000" stroke-opacity=".22" stroke-width="1">
    <path d="M-300 358H660M-300 384H660M-300 418H660"/>
    <path d="M30 340L-20 420M110 340L96 420M190 340L190 420M270 340L284 420M350 340L400 420"/>
  </g>
  ${lampSVG(95, false)}${lampSVG(275, true)}
  ${c.props || ''}
  <rect x="-300" y="338" width="960" height="3" fill="#000" opacity=".45"/>
  <rect x="-300" y="341" width="960" height="400" fill="url(#gFade)"/>`;
}

ART.bg = [
  // 0 — Подвалы: кирпич, трубы, лужи
  () => hall({
    w1: '#25353d', w2: '#141f26', ceil: '#0d1418', trim: '#37494f', base: '#0e171b', f1: '#1d2c32', f2: '#0a1115',
    defs: '<pattern id="pBrick" width="40" height="20" patternUnits="userSpaceOnUse"><path d="M0 0H40M0 10H40M20 0V10M0 10V20M0 20" stroke="#000" stroke-opacity=".28" fill="none"/><rect width="40" height="20" fill="#fff" opacity=".02"/></pattern>',
    wall: '<rect x="-300" y="49" width="960" height="270" fill="url(#pBrick)"/><ellipse cx="190" cy="300" rx="150" ry="40" fill="#0a1216" opacity=".35"/>' +
          '<path d="M60 49V120M130 49V90M300 49V140" stroke="#7a4a2a" stroke-opacity=".35" stroke-width="3"/>',
    ceilDeco: '<rect x="-300" y="12" width="960" height="11" fill="#586b72"/><rect x="-300" y="14" width="960" height="3" fill="#fff" opacity=".18"/><rect x="-300" y="29" width="960" height="8" fill="#47585e"/>' +
              '<rect x="184" y="37" width="12" height="90" fill="#586b72"/><rect x="180" y="48" width="20" height="6" fill="#3a4a50"/><circle cx="190" cy="100" r="11" fill="none" stroke="#c0653a" stroke-width="3"/><path d="M190 90V110M180 100H200" stroke="#c0653a" stroke-width="2"/>',
    floor: '<ellipse cx="120" cy="372" rx="34" ry="7" fill="#35525c" opacity=".55"/><ellipse cx="120" cy="370" rx="20" ry="3" fill="#8fc2d0" opacity=".25"/>' +
           '<ellipse cx="260" cy="395" rx="44" ry="8" fill="#35525c" opacity=".5"/><path d="M30 360l10-3M300 372l12-2" stroke="#6b4a2a" stroke-width="2" opacity=".5"/>',
  }),
  // 1 — Жилые этажи: обои, картины, дорожка
  () => hall({
    w1: '#5c4232', w2: '#3a281d', ceil: '#241912', trim: '#9a7a4e', base: '#2b1d14', f1: '#3f2c20', f2: '#1d130e',
    defs: '<pattern id="pPaper" width="22" height="22" patternUnits="userSpaceOnUse"><rect width="9" height="22" fill="#ffdcaa" opacity=".07"/><path d="M15 11l3-4 3 4-3 4z" fill="#ffdcaa" opacity=".09"/></pattern>',
    wall: '<rect x="-300" y="49" width="960" height="270" fill="url(#pPaper)"/>' +
          '<rect x="-300" y="262" width="960" height="56" fill="#4d331f"/><rect x="-300" y="260" width="960" height="4" fill="#9a7a4e"/><path d="M-300 290H660" stroke="#000" stroke-opacity=".25"/>' +
          '<g><rect x="114" y="92" width="52" height="46" fill="#c9a24a"/><rect x="118" y="96" width="44" height="38" fill="#7fa9c9"/><path d="M118 134l14-18 12 10 10-14 8 22z" fill="#4a6b3a"/><circle cx="148" cy="108" r="5" fill="#ffe9a8"/></g>' +
          '<g><rect x="206" y="98" width="42" height="40" fill="#c9a24a"/><rect x="210" y="102" width="34" height="32" fill="#b46a5a"/><circle cx="227" cy="118" r="9" fill="#e8c39e"/></g>',
    floor: '<rect x="-300" y="352" width="960" height="46" fill="#6b1d27" opacity=".55"/><rect x="-300" y="352" width="960" height="3" fill="#e6b422" opacity=".5"/><rect x="-300" y="395" width="960" height="3" fill="#e6b422" opacity=".5"/>',
  }),
  // 2 — Офисы: стекло, потолочные панели, растение
  () => hall({
    w1: '#36445f', w2: '#202839', ceil: '#161c29', trim: '#5f7090', base: '#1a2130', f1: '#2b3549', f2: '#10151f',
    defs: '<linearGradient id="gGlass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9cc4ff" stop-opacity=".16"/><stop offset="1" stop-color="#9cc4ff" stop-opacity=".02"/></linearGradient>',
    wall: '<rect x="-300" y="60" width="960" height="255" fill="url(#gGlass)"/>' +
          '<g fill="#5f7090" opacity=".7"><rect x="-4" y="60" width="4" height="258"/><rect x="86" y="60" width="4" height="258"/><rect x="176" y="60" width="4" height="258"/><rect x="266" y="60" width="4" height="258"/><rect x="356" y="60" width="4" height="258"/></g>' +
          '<polygon points="20,60 60,60 20,318 -20,318" fill="#fff" opacity=".04"/><polygon points="200,60 240,60 200,318 160,318" fill="#fff" opacity=".04"/>' +
          '<g><circle cx="186" cy="116" r="15" fill="#e8ecf5"/><circle cx="186" cy="116" r="12" fill="#2a3347"/><path d="M186 116V106M186 116L193 120" stroke="#fff" stroke-width="2"/></g>',
    ceilDeco: '<g fill="#d8e7ff" opacity=".85"><rect x="10" y="10" width="80" height="24" rx="3"/><rect x="140" y="10" width="80" height="24" rx="3"/><rect x="270" y="10" width="80" height="24" rx="3"/></g>',
    props: '<g><rect x="90" y="296" width="14" height="22" rx="2" fill="#6b4a2a"/><circle cx="97" cy="286" r="12" fill="#3f8a4a"/><circle cx="90" cy="292" r="8" fill="#4aa05a"/><circle cx="105" cy="290" r="8" fill="#357a40"/></g>',
    floor: '<rect x="-300" y="352" width="960" height="2" fill="#5f7090" opacity=".5"/><rect x="-300" y="388" width="960" height="2" fill="#5f7090" opacity=".5"/>',
  }),
  // 3 — Лаборатории: плитка, колбы, знаки опасности
  () => hall({
    w1: '#21504a', w2: '#0f2724', ceil: '#0b1816', trim: '#3fb59b', base: '#101a19', f1: '#1b302d', f2: '#0a1412',
    defs: '<pattern id="pTile" width="26" height="26" patternUnits="userSpaceOnUse"><path d="M0 0H26V26" stroke="#c8fff0" stroke-opacity=".12" fill="none"/></pattern>',
    wall: '<rect x="-300" y="49" width="960" height="270" fill="url(#pTile)"/>' +
          '<g><polygon points="140,92 168,140 112,140" fill="#d9ad1f"/><polygon points="140,100 160,136 120,136" fill="#15171c"/><rect x="138" y="108" width="4" height="16" fill="#d9ad1f"/><circle cx="140" cy="130" r="2.5" fill="#d9ad1f"/></g>' +
          '<g><rect x="190" y="90" width="48" height="30" rx="3" fill="#0b1816" stroke="#3fb59b"/><path d="M196 108l8-8 8 12 8-16 8 10 6-6" stroke="#7fffd8" fill="none" stroke-width="2"/></g>',
    baseDeco: '<rect x="-300" y="318" width="960" height="22" fill="url(#pHaz)"/>',
    ceilDeco: '<path d="M30 44C30 70 60 70 60 96M180 44C180 64 150 70 150 100M320 44C320 80 300 90 300 120" stroke="#2a3a38" stroke-width="5" fill="none"/>',
    props: '<g><rect x="87" y="120" width="18" height="198" rx="9" fill="#7fffd8" opacity=".12" stroke="#7fe0c8"/><rect x="90" y="190" width="12" height="125" rx="6" fill="#58ffb0" opacity=".4"/><circle class="bub" cx="96" cy="270" r="3" fill="#c8fff0"/><circle class="bub b2" cx="96" cy="300" r="2.4" fill="#c8fff0"/></g>',
    floor: '<rect x="-300" y="345" width="960" height="3" fill="#58ffb0" opacity=".35"/>',
  }),
  // 4 — Пентхаус: мрамор, колонны, золото
  () => hall({
    w1: '#3d3149', w2: '#1e1628', ceil: '#120c18', trim: '#e6b422', base: '#2b2034', f1: '#2e2438', f2: '#0e0a12',
    defs: '<linearGradient id="gGold" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8a6a1c"/><stop offset=".5" stop-color="#f2cd5a"/><stop offset="1" stop-color="#8a6a1c"/></linearGradient>',
    wall: '<rect x="-300" y="118" width="960" height="3" fill="#e6b422" opacity=".7"/>' +
          '<g><rect x="114" y="62" width="52" height="46" fill="url(#gGold)"/><rect x="119" y="67" width="42" height="36" fill="#1a1222"/><path d="M123 98l12-16 10 10 10-12 6 18z" fill="#8a4ab0"/></g>' +
          '<g><rect x="206" y="62" width="52" height="46" fill="url(#gGold)"/><rect x="211" y="67" width="42" height="36" fill="#1a1222"/><circle cx="232" cy="84" r="11" fill="#e6b422" opacity=".8"/></g>',
    ceilDeco: '<g stroke="#e6b422" stroke-width="2" fill="none"><path d="M185 44V70"/><path d="M155 84H215M165 84V96M185 84V100M205 84V96"/><path d="M155 84Q170 70 185 78Q200 70 215 84"/></g><g fill="#ffd36b"><ellipse cx="165" cy="99" rx="3" ry="5"/><ellipse cx="185" cy="103" rx="3" ry="5"/><ellipse cx="205" cy="99" rx="3" ry="5"/></g><ellipse cx="185" cy="96" rx="46" ry="26" fill="url(#gGlow)"/>',
    props: '<g><rect x="87" y="120" width="14" height="198" fill="url(#gGold)" opacity=".85"/><rect x="82" y="116" width="24" height="8" fill="#e6b422"/><rect x="82" y="314" width="24" height="8" fill="#e6b422"/></g>',
    floor: '<rect x="-300" y="352" width="960" height="46" fill="#6b1d27"/><rect x="-300" y="352" width="960" height="3" fill="#e6b422"/><rect x="-300" y="395" width="960" height="3" fill="#e6b422"/>',
  }),
];

// ---------- убежище ----------
ART.base = () => `<defs>
    <linearGradient id="bgWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#53402e"/><stop offset="1" stop-color="#2d2117"/></linearGradient>
    <linearGradient id="bgFloor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3d2b1c"/><stop offset="1" stop-color="#17100a"/></linearGradient>
    <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1530"/><stop offset="1" stop-color="#2b3a66"/></linearGradient>
    <pattern id="pWood" width="22" height="40" patternUnits="userSpaceOnUse"><path d="M0 0V40" stroke="#000" stroke-opacity=".22"/><path d="M11 0V40" stroke="#fff" stroke-opacity=".04"/></pattern>
  </defs>
  <rect x="-300" y="-300" width="960" height="640" fill="url(#bgWall)"/>
  <rect x="-300" y="49" width="960" height="270" fill="url(#pWood)"/>
  <rect x="-300" y="-300" width="960" height="344" fill="#1b130c"/><rect x="-300" y="44" width="960" height="5" fill="#8a6a45"/>
  <rect x="-300" y="318" width="960" height="23" fill="#22180f"/><rect x="-300" y="318" width="960" height="2" fill="#fff" opacity=".1"/>
  <rect x="-300" y="340" width="960" height="400" fill="url(#bgFloor)"/>
  <g stroke="#000" stroke-opacity=".25"><path d="M-300 362H660M-300 392H660"/></g>
  <ellipse cx="170" cy="376" rx="120" ry="14" fill="#6b3a2a" opacity=".55"/><ellipse cx="170" cy="376" rx="96" ry="9" fill="#8a5a3a" opacity=".4"/>
  <g><rect x="136" y="70" width="74" height="96" rx="3" fill="#2a1d12"/><rect x="142" y="76" width="62" height="84" fill="url(#gSky)"/>
    <circle cx="186" cy="100" r="11" fill="#fff4d0"/><circle cx="190" cy="97" r="9" fill="#2b3a66"/>
    <g fill="#fff" opacity=".8"><circle cx="152" cy="88" r="1"/><circle cx="170" cy="82" r="1.2"/><circle cx="196" cy="126" r="1"/></g>
    <path d="M142 160V132l8-4 6 6 6-14 8 10 6-8 8 12 6-6 8 10v18z" fill="#0b1020"/>
    <g fill="#ffd36b" opacity=".8"><rect x="150" y="142" width="3" height="3"/><rect x="166" y="138" width="3" height="3"/><rect x="186" y="146" width="3" height="3"/></g>
    <path d="M173 76V160M142 118H204" stroke="#2a1d12" stroke-width="3"/></g>
  <g class="flick"><path d="M236 44V74" stroke="#2a1d12" stroke-width="2"/><path d="M222 90C226 74 246 74 250 90Z" fill="#2a1d12"/><ellipse cx="236" cy="93" rx="46" ry="30" fill="url(#gGlow)"/><ellipse cx="236" cy="90" rx="9" ry="4" fill="#fff1c4"/></g>
  <rect x="-300" y="338" width="960" height="3" fill="#000" opacity=".45"/>
  <rect x="-300" y="341" width="960" height="400" fill="url(#gFade)"/>`;

// мебель убежища (центр группы — на полу)
ART.furn = [
  // кровать
  `<g><rect x="-52" y="-20" width="104" height="20" rx="3" fill="#3a2a1c"/><rect x="-52" y="-62" width="12" height="62" rx="3" fill="#4a3320"/>
    <rect x="-46" y="-36" width="96" height="18" rx="5" fill="#d9d2c3"/><path d="M-30 -36h80v14H-30z" fill="#3f6aa5"/><path d="M-30 -34h80" stroke="#fff" opacity=".25"/>
    <rect x="-44" y="-46" width="28" height="12" rx="6" fill="#f2efe6"/><rect x="40" y="-62" width="12" height="62" rx="3" fill="#4a3320"/>
    <rect x="-52" y="-4" width="104" height="4" fill="#000" opacity=".3"/></g>`,
  // кухня: плита, кастрюля, полка
  `<g><rect x="-46" y="-62" width="92" height="62" rx="3" fill="#6d7686"/><rect x="-46" y="-62" width="92" height="8" fill="#9aa4b5"/>
    <rect x="-40" y="-46" width="36" height="42" rx="2" fill="#4a5262"/><rect x="2" y="-46" width="38" height="42" rx="2" fill="#4a5262"/>
    <circle cx="-22" cy="-34" r="5" fill="#2a2f3a"/><circle cx="22" cy="-34" r="5" fill="#2a2f3a"/>
    <rect x="-34" y="-84" width="30" height="24" rx="3" fill="#2a2f3a"/><rect x="-30" y="-80" width="22" height="16" fill="#ff8a3d" opacity=".85"/>
    <path d="M-36 -62h28l-3-12h-22z" fill="#8a929f"/><rect x="-40" y="-72" width="36" height="4" rx="2" fill="#555d6b"/>
    <path class="steam" d="M-22 -80c-6-8 6-10 0-18" stroke="#fff" stroke-opacity=".5" stroke-width="2" fill="none"/>
    <path class="steam s2" d="M-14 -80c-6-8 6-10 0-18" stroke="#fff" stroke-opacity=".4" stroke-width="2" fill="none"/>
    <rect x="12" y="-122" width="40" height="3" fill="#4a3320"/><rect x="16" y="-136" width="10" height="14" rx="2" fill="#9bd07a"/><rect x="30" y="-134" width="10" height="12" rx="2" fill="#d98a4a"/></g>`,
  // верстак с тисками и инструментами
  `<g><rect x="-44" y="-52" width="88" height="10" rx="2" fill="#8a6a45"/><rect x="-40" y="-42" width="8" height="42" fill="#5a4328"/><rect x="32" y="-42" width="8" height="42" fill="#5a4328"/>
    <rect x="-40" y="-24" width="80" height="4" fill="#5a4328"/>
    <rect x="22" y="-70" width="16" height="18" fill="#3a4252"/><rect x="26" y="-80" width="8" height="10" fill="#6f7a8f"/>
    <rect x="-44" y="-130" width="88" height="62" rx="2" fill="#3a2d1f"/><g stroke="#8a6a45" stroke-width="2"><path d="M-30 -118v28M-14 -118v22M2 -118v26M18 -118v22"/></g>
    <path d="M-30 -90h6v8h-6z" fill="#c9d3df"/><circle cx="-14" cy="-96" r="6" fill="none" stroke="#e6b422" stroke-width="2"/><path d="M2 -92l8 10" stroke="#d9534f" stroke-width="3"/>
    <rect x="-34" y="-58" width="22" height="6" rx="2" fill="#c9d3df"/><rect x="-30" y="-64" width="4" height="8" fill="#6b4a2a"/><circle cx="4" cy="-58" r="6" fill="#8a929f"/><circle cx="4" cy="-58" r="2" fill="#2a2f3a"/></g>`,
];

// ---------- двери и лифт ----------
ART.door = (n) => `
  <rect x="-37" y="-160" width="74" height="160" rx="3" fill="#11151c"/>
  <rect class="dw" x="-32" y="-155" width="64" height="155" fill="#040507"/>
  <polygon class="spill" points="32,0 32,-155 96,-110 96,0" fill="url(#gSpill)"/>
  <g class="leaf">
    <rect x="-32" y="-155" width="64" height="155" fill="url(#gDoor)" stroke="#2a1b0f" stroke-width="2"/>
    <rect x="-24" y="-143" width="48" height="52" rx="2" fill="#000" opacity=".16"/><rect x="-24" y="-82" width="48" height="66" rx="2" fill="#000" opacity=".16"/>
    <rect x="-13" y="-140" width="26" height="14" rx="2" fill="#1a1208"/><text x="0" y="-129" text-anchor="middle" font-size="11" font-weight="700" fill="#ffd36b" font-family="system-ui,sans-serif">${n}</text>
    <circle cx="22" cy="-76" r="4" fill="#e6b422"/><rect x="19" y="-74" width="6" height="8" rx="2" fill="#a07a14"/>
  </g>
  <g class="padlock"><rect x="-9" y="-92" width="18" height="15" rx="3" fill="#e6b422"/><path d="M-5 -92v-6a5 5 0 0 1 10 0v6" stroke="#e6b422" stroke-width="3" fill="none"/><circle cx="0" cy="-85" r="2" fill="#5a3b05"/></g>
  <text class="ric" x="0" y="-168" text-anchor="middle" font-size="18"></text>`;

ART.lift = () => `
  <rect x="-40" y="-178" width="80" height="178" rx="4" fill="#232833"/>
  <rect x="-33" y="-146" width="66" height="146" fill="#1b1f27"/>
  <rect class="cab" x="-31" y="-144" width="62" height="144" fill="#ffd884" opacity="0"/>
  <g class="ldoors"><rect class="lL" x="-31" y="-144" width="31" height="144" fill="url(#gMetal)"/><rect class="lR" x="0" y="-144" width="31" height="144" fill="url(#gMetal)"/><path d="M0 -144V0" stroke="#1b1f27" stroke-width="2"/></g>
  <rect x="-24" y="-170" width="48" height="20" rx="3" fill="#0b0d11"/>
  <text class="lnum" x="0" y="-155" text-anchor="middle" font-size="13" font-weight="700" fill="#ff7a5a" font-family="monospace">--</text>
  <path class="larr" d="M-30 -158l4-6 4 6z" fill="#ff7a5a"/>
  <circle class="llamp" cx="0" cy="-185" r="5" fill="#d9534f"/>
  <g class="lbroken" stroke="#0b0d11" stroke-width="2" fill="none"><path d="M-22 -120l14 18-8 10 16 22"/><path d="M18 -90l-10 12 12 16"/></g>
  <g class="lspark" fill="#ffd36b"><path d="M-10 -100l-5-9 8 4 3-9 1 9 8-3-6 8z"/></g>
  <rect x="38" y="-96" width="7" height="14" rx="2" fill="#0b0d11"/><circle cx="41.5" cy="-90" r="2" fill="#6f7a8f"/>`;

// ---------- герой ----------
ART.weapons = [
  '<circle cx="0" cy="0" r="0.1"/>',
  // труба
  '<rect x="-3.5" y="-54" width="7" height="60" rx="3" fill="#8b95a5"/><rect x="-4.5" y="-54" width="9" height="7" rx="2" fill="#5e6877"/><rect x="-1" y="-50" width="2" height="48" fill="#fff" opacity=".25"/>',
  // бита с гвоздями
  '<path d="M-3 8 L3 8 L5.5 -28 Q7 -54 0 -56 Q-7 -54 -5.5 -28Z" fill="#a8743f"/><g fill="#cfd6e0"><path d="M5 -40l7-2-7-1z"/><path d="M5 -32l7-2-7-1z"/><path d="M-5 -46l-7-2 7-1z"/><path d="M-5 -36l-7-2 7-1z"/></g>',
  // мачете
  '<rect x="-2.5" y="-6" width="5" height="18" rx="2" fill="#3a2b1c"/><rect x="-6" y="-8" width="12" height="3" fill="#8a929f"/><path d="M-4 -8 L4 -8 L7 -54 Q4 -62 -4 -52Z" fill="#cfd8e3"/><path d="M0 -10V-52" stroke="#fff" opacity=".55" stroke-width="1.2"/>',
  // шоковая дубинка
  '<rect x="-3.5" y="-48" width="7" height="56" rx="3" fill="#20242c"/><rect x="-4.5" y="-8" width="9" height="12" rx="2" fill="#e6b422"/><path d="M-6 -30l5-8-4-2 7-10" stroke="#ffe34d" fill="none" stroke-width="2.4"/><circle cx="0" cy="-46" r="8" fill="#ffe34d" opacity=".35" filter="url(#fBlur)"/>',
  // плазменный резак
  '<rect x="-3" y="-2" width="6" height="14" rx="2" fill="#2b3340"/><rect x="-6" y="-14" width="12" height="13" rx="2" fill="#4b5668"/><path d="M-2.5 -14 L2.5 -14 L1.2 -64 L-1.2 -64Z" fill="#8ff0ff"/><rect x="-5" y="-62" width="10" height="56" rx="5" fill="#59e1ff" opacity=".35" filter="url(#fBlur)"/>',
  // ионный клинок
  '<rect x="-2.5" y="-2" width="5" height="14" rx="2" fill="#2b3340"/><rect x="-8" y="-6" width="16" height="4" rx="2" fill="#7a5ab0"/><path d="M-5 -6 L5 -6 L2 -70 L0 -78 L-2 -70Z" fill="#d6baff"/><path d="M-9 -8H9L3 -74 0 -84 -3 -74Z" fill="#a66bff" opacity=".35" filter="url(#fBlur)"/>',
];
ART.jackets = [
  ['#6b5a45', '#4b3f30'], ['#4a6fa5', '#34507c'], ['#7d8a99', '#566170'], ['#3f6b4a', '#2c4c35'], ['#2e3a4d', '#1c2533'], ['#3a3f6e', '#262a50'],
];
ART.hero = (wi, ai) => {
  const [j, jd] = ART.jackets[ai] || ART.jackets[0];
  const pads = ai >= 2 ? `<rect x="-24" y="-102" width="16" height="10" rx="4" fill="${jd}"/><rect x="8" y="-102" width="16" height="10" rx="4" fill="${jd}"/>` : '';
  const glow = ai >= 4 ? `<path d="M-15 -86V-56M15 -86V-56" stroke="${ai >= 5 ? '#a66bff' : '#59e1ff'}" stroke-width="2.2" opacity=".9"/>` : '';
  return `<g class="h-flip">
    <ellipse cx="0" cy="0" rx="27" ry="6" fill="#000" opacity=".42"/>
    <g class="h-legB"><rect x="-13" y="-54" width="12" height="47" rx="5" fill="#2a3550"/><rect x="-17" y="-9" width="21" height="9" rx="4" fill="#161a22"/></g>
    <g class="h-pack"><rect x="-34" y="-100" width="19" height="42" rx="7" fill="#7a5a36"/><rect x="-32" y="-90" width="15" height="11" rx="3" fill="#5d4426"/><rect x="-30" y="-98" width="12" height="4" rx="2" fill="#a8844f"/></g>
    <g class="h-armB"><rect x="-6" y="-94" width="12" height="40" rx="5.5" fill="${jd}"/><circle cx="0" cy="-53" r="6.5" fill="#d7ae88"/></g>
    <g class="h-legF"><rect x="1" y="-54" width="12" height="47" rx="5" fill="#34426a"/><rect x="-2" y="-9" width="21" height="9" rx="4" fill="#1d222c"/></g>
    <rect x="-22" y="-102" width="44" height="53" rx="13" fill="${j}"/>
    <path d="M-22 -60H22V-49H-22z" fill="${jd}" opacity=".55"/>
    <path d="M0 -100V-50" stroke="${jd}" stroke-width="2.5"/>${glow}${pads}
    <path d="M-12 -100q12 8 24 0l-3 -6h-18z" fill="${jd}"/>
    <g class="h-head"><rect x="-5" y="-108" width="10" height="9" fill="#d7ae88"/><circle cx="2" cy="-118" r="14" fill="#e3bb94"/>
      <path d="M-12.5 -120a14.5 14.5 0 0 1 29 0v-2c-7 -5 -22 -5 -29 2z" fill="#2c364b"/><path d="M12 -121l9 3-9 4z" fill="#2c364b"/>
      <circle cx="9" cy="-117" r="2" fill="#1c2230"/><path d="M5 -109q5 3 10 0" stroke="#8a5a45" stroke-width="1.5" fill="none"/></g>
    <g class="h-armF"><rect x="6" y="-95" width="13" height="41" rx="6" fill="${j}"/><circle cx="12.5" cy="-53" r="7" fill="#e3bb94"/>
      <g class="h-wpn" transform="translate(12.5,-53) rotate(32)">${ART.weapons[wi] || ART.weapons[0]}</g>
      <circle cx="12.5" cy="-53" r="6.5" fill="#e3bb94" opacity="0"/></g>
  </g>`;
};

// ---------- враги ----------
const PAL = {
  grey:   { b: '#8a8f98', s: '#5b6069', a: '#c9ced6', e: '#ff4a3d' },
  brown:  { b: '#7a5a3c', s: '#4f3824', a: '#d49a9a', e: '#ffd23d' },
  green:  { b: '#6f9a4a', s: '#43662b', a: '#b6e07a', e: '#fff25a' },
  blue:   { b: '#4a78b8', s: '#2d4c7e', a: '#9fd0ff', e: '#7dffef' },
  red:    { b: '#b24a4a', s: '#7a2b2b', a: '#ffb0a0', e: '#ffe14a' },
  gold:   { b: '#c9a23a', s: '#8a6a1c', a: '#ffe08a', e: '#ff5a3d' },
  dark:   { b: '#3a364a', s: '#1c1a26', a: '#7a74a0', e: '#d8ff5a' },
  white:  { b: '#d9dde6', s: '#9aa2b3', a: '#ffffff', e: '#c0392b' },
  purple: { b: '#7a4ab0', s: '#4b2b72', a: '#d2a8ff', e: '#7dff9a' },
  teal:   { b: '#3f8f86', s: '#255a54', a: '#a8f5e8', e: '#ff7a3d' },
  rust:   { b: '#a0602f', s: '#6a3d1c', a: '#e0a063', e: '#6dff6d' },
};
const EN = {};
EN.rat = (p) => `<g>
  <path d="M30 -22C52 -20 62 -34 58 -52C56 -60 50 -58 52 -50C54 -38 44 -30 30 -30Z" fill="${p.a}"/>
  <ellipse cx="8" cy="-26" rx="32" ry="19" fill="${p.b}"/><ellipse cx="8" cy="-15" rx="26" ry="8" fill="${p.s}" opacity=".5"/>
  <ellipse cx="-30" cy="-28" rx="17" ry="13" fill="${p.b}"/><path d="M-44 -31L-68 -22L-46 -16Z" fill="${p.b}"/><circle cx="-68" cy="-22" r="3.2" fill="#2a1a1a"/>
  <circle cx="-24" cy="-42" r="8" fill="${p.a}"/><circle cx="-24" cy="-42" r="4.4" fill="${p.s}"/>
  <circle cx="-38" cy="-32" r="3.8" fill="${p.e}"/><circle cx="-39" cy="-33" r="1.2" fill="#fff"/>
  <rect x="-58" y="-20" width="3.4" height="7" fill="#fff"/><rect x="-52" y="-20" width="3.4" height="7" fill="#fff"/>
  <g stroke="#ddd" stroke-width="1" opacity=".7"><path d="M-62 -26L-82 -31M-62 -24L-82 -21"/></g>
  <rect x="-14" y="-10" width="10" height="10" rx="3" fill="${p.s}"/><rect x="14" y="-10" width="10" height="10" rx="3" fill="${p.s}"/><rect x="-28" y="-8" width="9" height="8" rx="3" fill="${p.s}"/><rect x="28" y="-8" width="9" height="8" rx="3" fill="${p.s}"/></g>`;
EN.dog = (p, f) => `<g>
  <path d="M44 -52C62 -62 72 -80 64 -92C60 -78 52 -66 40 -60Z" fill="${p.b}"/>
  <rect x="30" y="-34" width="13" height="34" rx="5" fill="${p.s}"/><rect x="14" y="-30" width="13" height="30" rx="5" fill="${p.b}"/>
  <ellipse cx="6" cy="-46" rx="40" ry="22" fill="${p.b}"/><ellipse cx="6" cy="-38" rx="34" ry="10" fill="${p.s}" opacity=".45"/>
  <rect x="-32" y="-34" width="13" height="34" rx="5" fill="${p.s}"/><rect x="-18" y="-30" width="13" height="30" rx="5" fill="${p.b}"/>
  <path d="M-34 -56L-54 -80L-26 -74Z" fill="${p.b}"/>
  <ellipse cx="-50" cy="-76" rx="17" ry="13" fill="${p.b}"/><path d="M-60 -82L-96 -72L-92 -62L-58 -64Z" fill="${p.b}"/><ellipse cx="-95" cy="-69" rx="4.4" ry="3.6" fill="#161616"/>
  <path d="M-72 -64L-92 -62L-86 -57L-70 -59Z" fill="#7a1f26"/><path d="M-88 -62l3 6 3-6M-78 -62l3 6 3-6" fill="#fff"/>
  <path d="${f && f.cat ? 'M-44 -86L-36 -112L-26 -88Z' : 'M-42 -88L-34 -106L-26 -86Z'}" fill="${p.s}"/>
  <circle cx="-56" cy="-79" r="3.8" fill="${p.e}"/><circle cx="-57" cy="-80" r="1.2" fill="#fff"/>
  ${f && f.cat ? '<g stroke="#eee" stroke-width="1" opacity=".7"><path d="M-84 -68L-104 -72M-84 -66L-104 -64"/></g>' : ''}
  ${f && f.spikes ? `<path d="M-20 -66l6 -15 6 15M-6 -69l6 -15 6 15M8 -69l6 -15 6 15M22 -65l6 -15 6 15" fill="${p.a}"/>` : ''}</g>`;
EN.bat = (p) => `<g>
  <g class="wingL"><path d="M-8 -72C-30 -112 -72 -108 -90 -84C-72 -90 -64 -80 -60 -70C-54 -78 -42 -74 -38 -64C-30 -70 -18 -66 -10 -58Z" fill="${p.s}"/><path d="M-10 -66L-84 -86M-10 -62L-62 -72M-10 -60L-40 -62" stroke="${p.a}" stroke-width="1.6" fill="none" opacity=".55"/></g>
  <g class="wingR"><path d="M8 -72C30 -112 72 -108 90 -84C72 -90 64 -80 60 -70C54 -78 42 -74 38 -64C30 -70 18 -66 10 -58Z" fill="${p.s}"/><path d="M10 -66L84 -86M10 -62L62 -72M10 -60L40 -62" stroke="${p.a}" stroke-width="1.6" fill="none" opacity=".55"/></g>
  <ellipse cx="0" cy="-62" rx="14" ry="21" fill="${p.b}"/><circle cx="-2" cy="-87" r="11.5" fill="${p.b}"/>
  <path d="M-13 -92L-17 -110L-6 -97Z" fill="${p.b}"/><path d="M9 -92L13 -110L2 -97Z" fill="${p.b}"/>
  <circle cx="-7" cy="-88" r="3.2" fill="${p.e}"/><circle cx="3" cy="-88" r="3.2" fill="${p.e}"/>
  <path d="M-6 -79l2 7 2-7M0 -79l2 7 2-7" fill="#fff"/><path d="M-5 -43l-4 13M5 -43l4 13" stroke="${p.s}" stroke-width="3"/></g>`;
EN.blob = (p) => `<g class="squash">
  <path d="M-46 0C-54 -34 -32 -76 0 -76C32 -76 54 -34 46 0Z" fill="${p.b}"/>
  <path d="M-30 -10C-36 -36 -20 -62 0 -66" stroke="#fff" stroke-opacity=".25" stroke-width="6" fill="none" stroke-linecap="round"/>
  <ellipse cx="0" cy="-6" rx="42" ry="6" fill="${p.s}" opacity=".5"/>
  <circle cx="-14" cy="-44" r="9" fill="#fff"/><circle cx="12" cy="-44" r="9" fill="#fff"/><circle cx="-16" cy="-43" r="4.4" fill="${p.e}"/><circle cx="10" cy="-43" r="4.4" fill="${p.e}"/>
  <path d="M-16 -22Q0 -10 16 -22" stroke="${p.s}" stroke-width="3" fill="none"/>
  <circle cx="-26" cy="-26" r="4" fill="${p.a}" opacity=".6"/><circle cx="24" cy="-60" r="3" fill="${p.a}" opacity=".6"/><circle cx="30" cy="-22" r="5" fill="${p.a}" opacity=".5"/>
  <path d="M-30 0V10M28 0V12" stroke="${p.b}" stroke-width="6" stroke-linecap="round"/></g>`;
EN.drone = (p) => `<g class="hover">
  <rect x="-3" y="-124" width="6" height="26" fill="${p.s}"/><circle cx="0" cy="-126" r="5" fill="${p.e}"/>
  <ellipse class="prop" cx="-22" cy="-112" rx="30" ry="3.6" fill="${p.s}" opacity=".7"/><ellipse class="prop" cx="22" cy="-112" rx="30" ry="3.6" fill="${p.s}" opacity=".7"/>
  <ellipse cx="0" cy="-84" rx="38" ry="27" fill="${p.b}"/><ellipse cx="0" cy="-94" rx="31" ry="14" fill="${p.a}" opacity=".3"/>
  <circle cx="-17" cy="-84" r="13" fill="#10131a"/><circle cx="-17" cy="-84" r="8.5" fill="${p.e}"/><circle cx="-19" cy="-87" r="2.6" fill="#fff"/>
  <path d="M-32 -68L-58 -54L-62 -42L-52 -40" stroke="${p.s}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24 -68L46 -58L50 -48" stroke="${p.s}" stroke-width="6" fill="none" stroke-linecap="round"/>
  <ellipse cx="0" cy="-56" rx="16" ry="5" fill="${p.e}" opacity=".55"/><path d="M-20 -62H20" stroke="${p.s}" stroke-width="3"/>
  <circle cx="22" cy="-86" r="3" fill="${p.s}"/><circle cx="28" cy="-80" r="2.4" fill="${p.s}"/></g>`;
EN.human = (p, f) => `<g>
  <rect x="-15" y="-56" width="14" height="56" rx="5" fill="${f.tie ? '#2a2f3d' : p.s}"/><rect x="5" y="-56" width="14" height="56" rx="5" fill="${f.tie ? '#232733' : p.s}"/>
  <rect x="-19" y="-8" width="22" height="8" rx="3" fill="#15171c"/><rect x="2" y="-8" width="22" height="8" rx="3" fill="#15171c"/>
  <path d="M-26 -100C-6 -112 22 -106 26 -88L22 -52H-20Z" fill="${f.tie ? '#2e3548' : p.b}"/>
  <path d="M-20 -52l5 8 5-6 5 8 5-6 5 8 5-6 5 8" stroke="${p.s}" stroke-width="2" fill="none"/>
  ${f.tie ? `<path d="M-22 -100L-8 -94L-10 -70L-24 -74Z" fill="#e9edf5"/><path d="M-16 -96L-12 -96L-9 -72L-14 -68L-18 -72Z" fill="${p.e === '#ff5a3d' ? '#c0392b' : '#c0392b'}"/>` : ''}
  ${f.apron ? '<rect x="-20" y="-84" width="38" height="36" rx="4" fill="#f2f2f2"/><circle cx="-6" cy="-66" r="4" fill="#b5342c" opacity=".7"/><path d="M-4 -60l8 6" stroke="#b5342c" opacity=".6" stroke-width="3"/>' : ''}
  <path d="M-16 -96L-60 -86" stroke="${f.tie ? '#2e3548' : p.b}" stroke-width="12" stroke-linecap="round"/><circle cx="-62" cy="-85" r="7" fill="#c9a98a"/>
  <path d="M-8 -90L-46 -70" stroke="${f.tie ? '#2e3548' : p.b}" stroke-width="11" stroke-linecap="round"/><circle cx="-48" cy="-69" r="6.4" fill="#c9a98a"/>
  ${f.blade ? '<path d="M-66 -88L-100 -96L-70 -80Z" fill="#cfd8e3"/><path d="M-68 -86L-96 -94" stroke="#fff" opacity=".6"/>' : ''}
  <circle cx="-30" cy="-116" r="14" fill="#c9a98a"/><ellipse cx="-36" cy="-118" rx="3.4" ry="4.2" fill="${p.e}"/><ellipse cx="-24" cy="-118" rx="3.4" ry="4.2" fill="${p.e}"/>
  <path d="M-38 -108Q-30 -102 -22 -108" stroke="#5a1f1f" stroke-width="3" fill="none"/>
  ${f.hood ? `<path d="M-46 -112a17 17 0 0 1 32 -4l8 24-12 -6-8 8-8-8-12 6z" fill="${p.s}" opacity=".92"/><circle cx="-36" cy="-116" r="3.4" fill="${p.e}"/><circle cx="-24" cy="-116" r="3.4" fill="${p.e}"/>` : `<path d="M-44 -122a15 15 0 0 1 28 -4c-8 -3 -20 -3 -28 4z" fill="${p.s}"/>`}</g>`;
EN.robot = (p, f) => `<g>
  ${f.gate ? `<rect x="-40" y="-14" width="80" height="14" rx="6" fill="${p.s}"/><circle cx="-26" cy="-8" r="8" fill="#15171c"/><circle cx="26" cy="-8" r="8" fill="#15171c"/>` :
   `<rect x="-26" y="-48" width="17" height="48" rx="4" fill="${p.s}"/><rect x="9" y="-48" width="17" height="48" rx="4" fill="${p.s}"/><rect x="-30" y="-8" width="25" height="8" rx="3" fill="#15171c"/><rect x="5" y="-8" width="25" height="8" rx="3" fill="#15171c"/>`}
  <rect x="-34" y="-108" width="68" height="66" rx="9" fill="${p.b}"/><rect x="-34" y="-108" width="68" height="10" rx="5" fill="${p.a}" opacity=".35"/>
  <rect x="-15" y="-92" width="30" height="20" rx="3" fill="#10131a"/><circle cx="0" cy="-82" r="5.5" fill="${p.e}"/>
  <path d="M-34 -62H34M-34 -50H34" stroke="${p.s}" stroke-width="2"/><g fill="${p.s}"><circle cx="-28" cy="-102" r="2"/><circle cx="28" cy="-102" r="2"/><circle cx="-28" cy="-46" r="2"/><circle cx="28" cy="-46" r="2"/></g>
  <rect x="-25" y="-138" width="50" height="31" rx="9" fill="${p.b}"/><rect x="-23" y="-130" width="30" height="10" rx="4" fill="${p.e}"/><rect x="-23" y="-130" width="30" height="4" rx="2" fill="#fff" opacity=".35"/>
  <rect x="-2" y="-152" width="4" height="14" fill="${p.s}"/><circle cx="0" cy="-154" r="4" fill="${p.e}"/>
  <rect x="-80" y="-98" width="48" height="13" rx="6" fill="${p.s}"/><path d="M-80 -102L-98 -94L-80 -86Z" fill="#cfd8e3"/>
  <rect x="26" y="-100" width="16" height="40" rx="6" fill="${p.s}"/></g>`;
EN.ghost = (p) => `<g class="hover">
  <path d="M-36 -4C-42 -50 -40 -102 -8 -118C20 -128 44 -102 40 -60C38 -34 42 -14 32 -4L22 -14L11 -2L0 -14L-12 -2L-24 -14Z" fill="${p.b}" opacity=".82"/>
  <path d="M-30 -20C-34 -60 -28 -96 -8 -108" stroke="#fff" stroke-opacity=".2" stroke-width="6" fill="none" stroke-linecap="round"/>
  <ellipse cx="-16" cy="-88" rx="8" ry="11" fill="#07070c"/><ellipse cx="9" cy="-90" rx="8" ry="11" fill="#07070c"/>
  <circle cx="-16" cy="-86" r="2.6" fill="${p.e}"/><circle cx="9" cy="-88" r="2.6" fill="${p.e}"/>
  <ellipse cx="-3" cy="-62" rx="8" ry="12" fill="#07070c"/>
  <path d="M-38 -80C-62 -70 -66 -50 -58 -36" stroke="${p.b}" stroke-width="9" fill="none" stroke-linecap="round" opacity=".8"/></g>`;
EN.chimera = (p) => `<g>
  <path d="M44 -50C86 -52 94 -104 62 -116C54 -120 48 -110 54 -104" stroke="${p.s}" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M54 -104l-10 -6 12 -8z" fill="#fff"/>
  <path d="M0 -66C-8 -112 34 -124 54 -100C40 -104 34 -94 30 -84C22 -96 12 -90 6 -74Z" fill="${p.a}" opacity=".9"/>
  <rect x="32" y="-36" width="14" height="36" rx="5" fill="${p.s}"/><rect x="14" y="-32" width="14" height="32" rx="5" fill="${p.b}"/>
  <ellipse cx="6" cy="-48" rx="44" ry="24" fill="${p.b}"/><ellipse cx="6" cy="-38" rx="38" ry="11" fill="${p.s}" opacity=".45"/>
  <rect x="-36" y="-36" width="14" height="36" rx="5" fill="${p.s}"/><rect x="-20" y="-32" width="14" height="32" rx="5" fill="${p.b}"/>
  <circle cx="-52" cy="-82" r="26" fill="${p.s}"/><g fill="${p.s}"><path d="M-78 -92l-12 -8 4 14zM-74 -70l-14 2 10 10zM-52 -110l2 -14 8 12zM-30 -98l12 -6 -4 14z"/></g>
  <ellipse cx="-52" cy="-80" rx="19" ry="16" fill="${p.b}"/><path d="M-64 -76L-98 -68L-94 -56L-62 -62Z" fill="${p.b}"/><ellipse cx="-97" cy="-64" rx="4.6" ry="3.8" fill="#161616"/>
  <path d="M-92 -58l3 7 3-7M-80 -60l3 7 3-7" fill="#fff"/><circle cx="-58" cy="-86" r="4" fill="${p.e}"/><circle cx="-59" cy="-87" r="1.3" fill="#fff"/></g>`;
EN.brute = (p) => `<g>
  <rect x="-22" y="-56" width="20" height="56" rx="7" fill="${p.s}"/><rect x="6" y="-56" width="20" height="56" rx="7" fill="${p.s}"/>
  <rect x="-27" y="-10" width="28" height="10" rx="4" fill="#15171c"/><rect x="3" y="-10" width="28" height="10" rx="4" fill="#15171c"/>
  <path d="M-34 -96C-20 -126 28 -122 38 -92L34 -50H-28Z" fill="${p.b}"/><path d="M-26 -52l6 8 6-8 6 8 6-8 6 8 6-8 6 8" stroke="${p.s}" stroke-width="2" fill="none"/>
  <circle cx="14" cy="-84" r="8" fill="${p.s}" opacity=".7"/><circle cx="24" cy="-66" r="5" fill="${p.a}" opacity=".6"/>
  <path d="M-30 -92C-70 -86 -86 -56 -78 -26" stroke="${p.b}" stroke-width="26" fill="none" stroke-linecap="round"/>
  <circle cx="-78" cy="-20" r="20" fill="${p.b}"/><path d="M-90 -28l8 6M-84 -12l10 -2" stroke="${p.s}" stroke-width="3"/>
  <path d="M28 -96L44 -66" stroke="${p.b}" stroke-width="12" stroke-linecap="round"/>
  <circle cx="-24" cy="-122" r="13" fill="${p.b}"/><circle cx="-30" cy="-124" r="3" fill="${p.e}"/><circle cx="-20" cy="-124" r="3" fill="${p.e}"/>
  <path d="M-36 -114l6 5 4 -5 4 5 6 -5" stroke="#fff" stroke-width="2" fill="none"/></g>`;
EN.bug = (p, f) => `<g>
  <g stroke="${p.s}" stroke-width="3.4" fill="none" stroke-linecap="round"><path d="M-40 -20L-52 0M-18 -14L-26 2M4 -14L0 2M26 -16L34 2M44 -22L58 -2"/></g>
  <path d="M-62 -30L-90 -42M-62 -34L-86 -56" stroke="${p.s}" stroke-width="2.4" fill="none"/>
  ${f && f.worm ? `<ellipse cx="30" cy="-18" rx="18" ry="14" fill="${p.b}"/><ellipse cx="6" cy="-22" rx="19" ry="16" fill="${p.b}"/>` : `<ellipse cx="34" cy="-24" rx="20" ry="17" fill="${p.s}"/>`}
  <ellipse cx="-14" cy="-26" rx="22" ry="19" fill="${p.b}"/><ellipse cx="-38" cy="-26" rx="18" ry="16" fill="${p.b}"/>
  <path d="M-8 -44V-8M-32 -40V-12M12 -38V-12" stroke="${p.s}" stroke-width="2.4" opacity=".55"/><ellipse cx="-14" cy="-36" rx="14" ry="5" fill="#fff" opacity=".2"/>
  <circle cx="-56" cy="-26" r="13" fill="${p.s}"/><circle cx="-60" cy="-30" r="3.6" fill="${p.e}"/><circle cx="-56" cy="-21" r="3.2" fill="${p.e}"/>
  <path d="M-66 -18L-76 -10L-70 -22M-66 -14L-78 -4" stroke="#e8ecf2" stroke-width="3" fill="none" stroke-linecap="round"/></g>`;

// имя врага → [тип, палитра, масштаб, особенности]
const ENEMY_ART = {
  'Крыса-переросток': ['rat', 'brown', 1.5], 'Бродячий пёс': ['dog', 'brown', 1.05], 'Сборщик': ['human', 'green', 1, { hood: 1 }], 'Слизень': ['blob', 'green', 1.3],
  'Ржавый дрон': ['drone', 'rust', 1.1], 'Летучая мышь': ['bat', 'dark', 1.25], 'Гигантская мокрица': ['bug', 'grey', 1.35],
  'Одичавший сосед': ['human', 'red', 1, {}], 'Кошка-мутант': ['dog', 'purple', .95, { cat: 1 }], 'Мародёр': ['human', 'dark', 1, { hood: 1 }], 'Ползун': ['bug', 'green', 1.25, { worm: 1 }],
  'Скиталец': ['human', 'grey', 1, {}], 'Бродячий повар': ['human', 'white', 1, { apron: 1, blade: 1 }], 'Сторожевой пёс': ['dog', 'grey', 1.12, { spikes: 1 }],
  'Охранный робот': ['robot', 'blue', .95, {}], 'Дрон-наблюдатель': ['drone', 'blue', 1.1], 'Сотрудник': ['human', 'grey', 1, { tie: 1 }], 'Турникет-страж': ['robot', 'rust', .95, { gate: 1 }],
  'Менеджер': ['human', 'dark', 1, { tie: 1 }], 'Уборщик-автомат': ['robot', 'teal', .95, {}], 'Бухгалтер-призрак': ['ghost', 'white', 1.05],
  'Подопытный': ['brute', 'white', 1], 'Мутант': ['brute', 'green', 1.05], 'Лаборант-культист': ['human', 'purple', 1, { hood: 1 }], 'Дрон-палач': ['drone', 'red', 1.2],
  'Химера': ['chimera', 'brown', 1], 'Колба-слизень': ['blob', 'teal', 1.35], 'Скальпельщик': ['human', 'white', 1, { blade: 1 }],
  'Страж': ['robot', 'gold', 1.05], 'Наместник': ['human', 'gold', 1, { tie: 1 }], 'Тень': ['ghost', 'dark', 1.1], 'Элитный дрон': ['drone', 'gold', 1.2],
  'Королевская химера': ['chimera', 'gold', 1.12], 'Золотая гончая': ['dog', 'gold', 1.1], 'Метрдотель': ['human', 'dark', 1, { tie: 1 }],
};
ART.enemy = (name) => {
  const d = ENEMY_ART[name] || ['blob', 'grey', 1.2, {}];
  const f = d[3] || {};
  return `<g transform="scale(${d[2]})">${EN[d[0]](PAL[d[1]], f)}</g>`;
};

// ---------- заставка: силуэт башни ----------
const TITLE_SVG = (() => {
  let win = '';
  const lit = [[1, 3], [2, 6], [0, 9], [3, 12], [1, 15], [2, 18], [0, 21], [3, 24], [1, 27]];
  for (let r = 0; r < 30; r++) for (let c = 0; c < 4; c++) {
    const on = lit.some(([cc, rr]) => cc === c && rr === r) || (r * 7 + c * 3) % 11 === 0;
    win += `<rect x="${112 + c * 26}" y="${38 + r * 10.4}" width="14" height="6" rx="1" fill="${on ? '#ffd36b' : '#10151d'}"/>`;
  }
  return `<svg viewBox="0 0 360 380" width="100%" height="190" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs><linearGradient id="tSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1330"/><stop offset=".7" stop-color="#2d3a66"/><stop offset="1" stop-color="#4a3a5a"/></linearGradient>
    <linearGradient id="tTow" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#252d3d"/><stop offset="1" stop-color="#121722"/></linearGradient></defs>
    <rect width="360" height="380" fill="url(#tSky)"/>
    <g fill="#fff" opacity=".85"><circle cx="40" cy="40" r="1.4"/><circle cx="300" cy="60" r="1.2"/><circle cx="80" cy="120" r="1"/><circle cx="330" cy="140" r="1.4"/><circle cx="250" cy="30" r="1"/><circle cx="20" cy="190" r="1.2"/></g>
    <circle cx="290" cy="78" r="22" fill="#fff4d0"/><circle cx="300" cy="72" r="19" fill="#2d3a66"/>
    <path d="M0 380V300l30-14 24 10 28-24 30 18 24-12v102z" fill="#0a0d14"/><path d="M360 380V310l-34-16-26 12-28-20-30 16-20-8v86z" fill="#0a0d14"/>
    <rect x="104" y="30" width="112" height="350" fill="url(#tTow)"/><rect x="104" y="30" width="112" height="6" fill="#3a4458"/>
    <rect x="148" y="8" width="24" height="24" fill="#252d3d"/><rect x="158" y="-10" width="4" height="20" fill="#3a4458"/><circle cx="160" cy="-12" r="4" fill="#e6b422"/>
    ${win}
    <rect x="0" y="352" width="360" height="30" fill="#07090d"/>
    <g fill="#ffd36b" opacity=".9"><rect x="14" y="320" width="4" height="4"/><rect x="40" y="326" width="4" height="4"/><rect x="304" y="324" width="4" height="4"/><rect x="332" y="318" width="4" height="4"/></g>
  </svg>`;
})();
