// Sistema da marca Pet Boss: cores e desenhos em SVG reutilizados nos estudos, mockups e proposta.
// Fonte única: o site (build_index.js), a imagem de prévia (make_og.py) e a proposta (../../proposta-fontes) usam este arquivo.
var PB = {
  black: "#15120F", black2: "#221D18", gold: "#C9A23F", goldL: "#E7CF8C", goldD: "#8C6D1F",
  ivory: "#FAF5EA", sand: "#F1E6D2", caramel: "#C98F5A", caramelD: "#A8723F", cream: "#FFF8EC", white: "#FFFFFF"
};

// Cão coroado. o = {head, ear, muzzle, detail, crown, cut}
// cut: cor do fundo, usada como contorno para separar orelhas e cabeça em versões de uma cor.
PB.dog = function (o) {
  o = Object.assign({ head: PB.cream, ear: PB.caramel, muzzle: PB.white, detail: PB.black, crown: PB.gold, cut: "none", jewel: null }, o || {});
  var cs = o.cut === "none" ? "" : ' stroke="' + o.cut + '" stroke-width="2.4" stroke-linejoin="round"';
  var ear = '<path d="M30 44C19 46 14.5 62 17 76c1.8 8.6 12 9.4 15.2 1.4C35.5 68.8 35.4 54.4 33.6 46z" fill="' + o.ear + '"' + cs + '/>';
  return '<g class="pb-dog">' +
    (o.crown === "none" ? "" : '<g class="pb-crown"><path d="M30 31.5 33 15.5l8.5 9.2L50 11.5l8.5 13.2 8.5-9.2 3 16z" fill="' + o.crown + '"/>' +
    '<rect x="29.5" y="29.5" width="41" height="6" rx="2.2" fill="' + o.crown + '"/>' +
    '<circle cx="33" cy="14.6" r="2.7" fill="' + o.crown + '"/><circle cx="50" cy="10.4" r="3" fill="' + o.crown + '"/><circle cx="67" cy="14.6" r="2.7" fill="' + o.crown + '"/>' +
    (o.jewel ? '<circle cx="50" cy="32.5" r="1.7" fill="' + o.jewel + '"/>' : '') + '</g>') +
    '<g class="pb-ears">' + ear + '<g transform="translate(100 0) scale(-1 1)">' + ear + '</g></g>' +
    '<path d="M50 35.5c16 0 25 11 25 24 0 15-11 24-25 24s-25-9-25-24c0-13 9-24 25-24z" fill="' + o.head + '"' + cs + '/>' +
    (o.muzzle === "none" ? "" : '<ellipse cx="50" cy="69.5" rx="13" ry="10" fill="' + o.muzzle + '"/>') +
    '<path d="M45 64c3.2-2 6.8-2 10 0 0 3.6-2.4 5.6-5 6.2-2.6-.6-5-2.6-5-6.2z" fill="' + o.detail + '"/>' +
    '<path d="M50 70.2v3M45.8 74.4c2.6 2.2 5.8 2.2 8.4 0" stroke="' + o.detail + '" stroke-width="1.7" fill="none" stroke-linecap="round"/>' +
    '<circle cx="40.5" cy="56.5" r="3.3" fill="' + o.detail + '"/><circle cx="59.5" cy="56.5" r="3.3" fill="' + o.detail + '"/>' +
    '</g>';
};
PB.dogSvg = function (o, attrs) { return '<svg viewBox="12 6 76 82" ' + (attrs || "") + '>' + PB.dog(o) + '</svg>'; };

// Variações prontas
PB.dogColor = function (a) { return PB.dogSvg({}, a); };
PB.dogGoldOnBlack = function (a) { return PB.dogSvg({ head: PB.gold, ear: PB.gold, muzzle: "none", detail: PB.black, crown: PB.gold, cut: PB.black }, a); };
PB.dogBlackOnLight = function (a, bg) { return PB.dogSvg({ head: PB.black, ear: PB.black, muzzle: "none", detail: bg || PB.ivory, crown: PB.black, cut: bg || PB.ivory }, a); };
PB.dogBlackGold = function (a, bg) { return PB.dogSvg({ head: PB.black, ear: PB.black, muzzle: "none", detail: bg || PB.ivory, crown: PB.gold, cut: bg || PB.ivory }, a); };

// Selo (evolução conservadora): círculo preto, anel dourado, cão coroado e textos em arco
PB.seal = function (attrs, opt) {
  opt = opt || {};
  var id = "s" + Math.random().toString(36).slice(2, 7);
  var text = opt.text !== false;
  return '<svg viewBox="0 0 200 200" ' + (attrs || "") + '>' +
    '<defs><path id="' + id + 't" d="M34 100a66 66 0 0 1 132 0"/><path id="' + id + 'b" d="M28 100a72 72 0 0 0 144 0"/></defs>' +
    '<circle cx="100" cy="100" r="98" fill="' + PB.black + '"/>' +
    '<circle cx="100" cy="100" r="90" fill="none" stroke="' + PB.gold + '" stroke-width="2.4"/>' +
    '<circle cx="100" cy="100" r="85" fill="none" stroke="' + PB.gold + '" stroke-width=".8" opacity=".7"/>' +
    (text ? '<text font-family="Fraunces, serif" font-weight="700" font-size="21" letter-spacing="3.2" fill="' + PB.gold + '"><textPath href="#' + id + 't" startOffset="50%" text-anchor="middle">PET BOSS</textPath></text>' +
      '<text font-family="Figtree, sans-serif" font-weight="700" font-size="10" letter-spacing="3.4" fill="' + PB.goldL + '"><textPath href="#' + id + 'b" startOffset="50%" text-anchor="middle">ESTÉTICA ANIMAL</textPath></text>' +
      '<circle cx="31" cy="112" r="2.2" fill="' + PB.gold + '"/><circle cx="169" cy="112" r="2.2" fill="' + PB.gold + '"/>' : '') +
    '<g transform="translate(' + (text ? '57 52) scale(1.12)' : '40 32) scale(1.6)') + '"><g transform="translate(-12 -6)">' + PB.dog({ head: PB.gold, ear: PB.gold, muzzle: "none", detail: PB.black, crown: PB.gold, cut: PB.black }) + '</g></g>' +
    '</svg>';
};

// Assinatura horizontal: símbolo + "Pet Boss" + "ESTÉTICA ANIMAL"
PB.lockup = function (variant, size) {
  size = size || 40;
  var dark = variant === "dark";
  var sym = dark ? PB.dogGoldOnBlack('style="height:' + size * 1.25 + 'px"') : PB.dogBlackGold('style="height:' + size * 1.25 + 'px"');
  return '<span style="display:inline-flex;align-items:center;gap:' + size * .28 + 'px;line-height:1">' + sym +
    '<span style="display:inline-flex;flex-direction:column"><span style="font:700 ' + size + 'px/1 Fraunces,serif;letter-spacing:-.01em;color:' + (dark ? PB.ivory : PB.black) + '">Pet <span style="color:' + (dark ? PB.gold : PB.goldD) + '">Boss</span></span>' +
    '<span style="font:700 ' + size * .26 + 'px/1 Figtree,sans-serif;letter-spacing:.32em;color:' + (dark ? PB.goldL : PB.goldD) + ';margin-top:' + size * .16 + 'px">ESTÉTICA ANIMAL</span></span></span>';
};

// Conceitos estudados (prancha 1)
PB.conceptA = function (a) { // Brasão essencial
  return '<svg viewBox="0 0 100 100" ' + (a || "") + '><path d="M50 22l28 8v22c0 19-12 31-28 38-16-7-28-19-28-38V30z" fill="' + PB.black + '" stroke="' + PB.gold + '" stroke-width="3"/>' +
    '<path d="M38 22l3-10 5 6 4-9 4 9 5-6 3 10z" fill="' + PB.gold + '"/>' +
    '<text x="50" y="66" text-anchor="middle" font-family="Fraunces, serif" font-weight="700" font-size="27" fill="' + PB.gold + '">PB</text></svg>';
};
PB.conceptB = function (a) { // Coroa-pente: a coroa é o corpo de um pente de tosa
  var teeth = "";
  for (var x = 17; x <= 83; x += 5.5) teeth += '<rect x="' + (x - 1.4).toFixed(1) + '" y="60" width="2.8" height="22" rx="1.4" fill="' + PB.gold + '"/>';
  return '<svg viewBox="0 0 100 100" ' + (a || "") + '>' + teeth +
    '<path d="M13 62 18 24l16 17 16-25 16 25 16-17 5 38z" fill="' + PB.gold + '" stroke="' + PB.gold + '" stroke-width="3" stroke-linejoin="round"/>' +
    '<circle cx="18" cy="21" r="4" fill="' + PB.gold + '"/><circle cx="50" cy="13" r="4.4" fill="' + PB.gold + '"/><circle cx="82" cy="21" r="4" fill="' + PB.gold + '"/>' +
    '<rect x="24" y="47" width="52" height="5" rx="2.5" fill="' + PB.black + '" opacity=".85"/></svg>';
};
PB.conceptD = function (a) { // Assinatura coroada
  return '<svg viewBox="0 0 200 100" ' + (a || "") + '><path d="M112 34l3-12 6 7 5-10 5 10 6-7 3 12z" fill="' + PB.gold + '"/>' +
    '<text x="100" y="70" text-anchor="middle" font-family="Fraunces, serif" font-weight="700" font-size="44" fill="' + PB.black + '">Pet Boss</text></svg>';
};

// Cachorro de corpo inteiro, sentado (ilustração dos posts e do site). viewBox 0 0 200 230.
// o.messy = true desenha o "antes" (pelo armado, sem coroa e sem bandana).
PB.dogFull = function (o) {
  o = Object.assign({ messy: false, coat: PB.cream, coatD: "#EAD9BD", ear: PB.caramel, bandana: PB.black, crown: PB.gold }, o || {});
  var fluff = "";
  if (o.messy) {
    var pts = [[30,72],[28,92],[34,112],[44,126],[58,134],[76,138],[124,138],[142,134],[156,126],[166,112],[172,92],[170,72],[160,56],[146,46],[128,40],[110,38],[90,38],[72,40],[54,46],[40,56]];
    pts.forEach(function (p, i) { fluff += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (14.5 + (i % 3) * 2) + '" fill="' + o.coatD + '"/>'; });
    pts.forEach(function (p, i) { fluff += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (12.5 + (i % 3) * 2) + '" fill="' + o.coat + '"/>'; });
    [[46,122],[52,136],[154,122],[148,136]].forEach(function (p) { fluff += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="10" fill="' + o.ear + '"/>'; });
  }
  var body = '<ellipse cx="100" cy="221" rx="62" ry="7" fill="' + PB.black + '" opacity=".12"/>' +
    '<path d="M150 186c22-4 30-22 22-36" stroke="' + o.ear + '" stroke-width="13" stroke-linecap="round" fill="none"/>' +
    '<path d="M54 218c-4-44 8-86 46-88 38 2 50 44 46 88z" fill="' + o.coatD + '"/>' +
    '<path d="M58 214c-3-40 9-78 42-80 33 2 45 40 42 80z" fill="' + o.coat + '"/>' +
    '<path d="M84 150c-6 18-6 40-2 64M116 150c6 18 6 40 2 64" stroke="' + o.coatD + '" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    '<ellipse cx="80" cy="214" rx="15" ry="8" fill="' + o.coat + '"/><ellipse cx="120" cy="214" rx="15" ry="8" fill="' + o.coat + '"/>' +
    '<path d="M74 212v4M80 212v5M86 212v4M114 212v4M120 212v5M126 212v4" stroke="' + o.coatD + '" stroke-width="1.8" stroke-linecap="round"/>';
  if (o.messy) body += '<g fill="' + o.coatD + '"><circle cx="58" cy="176" r="12"/><circle cx="142" cy="176" r="12"/><circle cx="60" cy="200" r="11"/><circle cx="140" cy="200" r="11"/></g><g fill="' + o.coat + '"><circle cx="58" cy="176" r="10"/><circle cx="142" cy="176" r="10"/><circle cx="60" cy="200" r="9"/><circle cx="140" cy="200" r="9"/><circle cx="100" cy="146" r="12"/></g>';
  var band = o.messy ? '' : '<path d="M64 132c24 10 48 10 72 0l-6 10c-6 18-20 28-30 34-10-6-24-16-30-34z" fill="' + o.bandana + '"/>' +
    '<path d="M93 151l1.6-6 4 4 3.4-6 3.4 6 4-4 1.6 6z" fill="' + o.crown + '"/>';
  var head = '<g transform="translate(16 -8) scale(1.68)"><g transform="translate(0 0)">' +
    PB.dog({ head: o.coat, ear: o.ear, muzzle: PB.white, detail: PB.black, crown: o.messy ? "none" : o.crown }) + '</g></g>';
  return '<g class="pb-full">' + body + fluff + band + head + '</g>';
};
PB.dogFullSvg = function (o, a) { return '<svg viewBox="0 -14 200 244" ' + (a || "") + '>' + PB.dogFull(o) + '</svg>'; };
