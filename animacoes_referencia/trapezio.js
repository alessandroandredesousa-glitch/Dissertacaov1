// ANIMAÇÃO: 3.2 Trapézio
// ETAPA 1 — elementos + classificação por transformação (base menor desliza).
// ETAPA 2 — 'provar' apaga a classificação e entra nas demonstrações (isósceles, cx=0):
//   P1 ângulos junto à lateral suplementares; P2 ângulos da base por transporte;
//   P3 diagonais congruentes (LAL). 'separar' põe os dois triângulos EM CASCATA
//   (um em cima, outro embaixo) em TAMANHO ORIGINAL; o trapézio some p/ dar espaço.
// Params no topo, na ordem de apresentação: deslizar, provar, transportar, diagonais, separar.
// OBS Conexty: usar \hat (não \widehat). Fundo preto. Fazer as provas com cx = 0 (isósceles).

//drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 });

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_amarelo_neon = '#FFFF00'
const cor_laranja = '#FF6600'
const cor_rosa_choque = '#FF1493'
const cor_roxo_neon = '#BF00FF'
const cor_azul_eletrico = '#00B0FF'
const cor_coral = '#FF6B6B'
const cor_verde_menta = '#00FA9A'
const cor_dourado = '#FFD700'
const cor_titulo = '#FF4500'

// === GEOMETRIA ===
const A = { x: -3, y: -1.3 }        // base maior (fixa)
const B = { x: 3, y: -1.3 }
const h = 3.1                       // altura
const Ltop = 3                      // comprimento da base menor CD
function topo(cx) {                 // vértices da base menor conforme o deslocamento cx
    return { D: { x: cx - Ltop / 2, y: A.y + h }, C: { x: cx + Ltop / 2, y: A.y + h } }
}
function tipo(cx) {
    const Dx = cx - Ltop / 2, Cx = cx + Ltop / 2
    if (Math.abs(Dx - A.x) < 0.04 || Math.abs(Cx - B.x) < 0.04) return "retângulo"
    if (Math.abs(cx) < 0.04) return "isósceles"
    return "escaleno"
}
function corTipo(tp) { return tp === "isósceles" ? cor_verde_neon : (tp === "retângulo" ? cor_azul_eletrico : cor_laranja) }

// vértices do isósceles (cx = 0) — base das demonstrações
const D0 = topo(0).D                // (-1.5, 1.8)
const C0 = topo(0).C                // ( 1.5, 1.8)
const P = { x: 0, y: A.y }          // pé de CP em AB (transporte da lateral AD)

// TÍTULO
drawText({ text: "\\begin{center}\\textbf{Trapézio: elementos e classificação}\\end{center}", x: 0.2, y: 4.3, color: cor_titulo })

pause()

// === PARÂMETROS (ordem de apresentação) ===
const cx = param({
    value: 0, min: -1.6, max: 1.6, step: 0.001,
    buttons: [{ value: 0, time: 1.5 }, { value: -1.5, time: 2 }, { value: 1.0, time: 2 }, { value: 0, time: 2 }],
    label: "Deslizar base menor (muda o tipo)"
})
const provar = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 1.5 }], label: "Ir para as demonstrações" })
const transp = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2 }], label: "Transportar lateral AD → CP" })
const p3 = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 1.5 }], label: "Ir para as diagonais (P3)" })
const separar = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2.5 },{value:0, time: 2.5}], label: "Separar triângulos (cascata, LAL)" })

// GEOMETRIA do trapézio (segue o morph; SOME ao separar os triângulos)
animation(cx, separar, (t, sep) => {
    const ot = 1 - sep
    const { D, C } = topo(t)
    drawSegment({ points: [A, B], width: 0.04, opacity: ot })
    drawSegment({ points: [D, C], width: 0.04, opacity: ot })
    drawSegment({ points: [B, C], width: 0.03, opacity: ot })
    drawSegment({ points: [D, A], width: 0.03, opacity: ot })
    drawPoint({ x: A.x, y: A.y, size: 0.07, opacity: ot })
    drawPoint({ x: B.x, y: B.y, size: 0.07, opacity: ot })
    drawPoint({ x: C.x, y: C.y, size: 0.07, opacity: ot })
    drawPoint({ x: D.x, y: D.y, size: 0.07, opacity: ot })
})

// RÓTULOS DOS VÉRTICES (somem ao separar)
animation(cx, separar, (t, sep) => {
    const ot = 1 - sep
    const { D, C } = topo(t)
    drawText({ text: "$A$", x: A.x - 0.42, y: A.y - 0.15, fontSize: 0.5, opacity: ot })
    drawText({ text: "$B$", x: B.x + 0.29, y: B.y - 0.15, fontSize: 0.5, opacity: ot })
    drawText({ text: "$C$", x: C.x + 0.18, y: C.y + 0.12, fontSize: 0.5, opacity: ot })
    drawText({ text: "$D$", x: D.x - 0.42, y: D.y + 0.12, fontSize: 0.5, opacity: ot })
})

// ANOTAÇÕES DA CLASSIFICAÇÃO (somem com 'provar')
animation(cx, provar, (t, p) => {
    const op = 1 - p
    const { D, C } = topo(t)
    drawText({ text: "base maior", x: 0, y: A.y - 0.55, fontSize: 0.4, color: cor_dourado, opacity: op })
    drawText({ text: "base menor", x: t, y: A.y + h + 0.2, fontSize: 0.4, color: cor_dourado, opacity: op })
    drawText({ text: "lateral", x: (A.x + D.x) / 2 - 0.7, y: (A.y + D.y) / 2 + 0.1, fontSize: 0.38, color: cor_coral, opacity: op })
    drawText({ text: "lateral", x: (B.x + C.x) / 2 + 0.8, y: (B.y + C.y) / 2 + 0.1, fontSize: 0.38, color: cor_coral, opacity: op })
    drawSegment({ points: [{ x: t, y: A.y + h }, { x: t, y: A.y }], width: 0.02, lineDash: [0.12, 0.1], color: cor_verde_menta, opacity: op })
    drawText({ text: "$h$", x: t + 0.2, y: A.y + h / 2, fontSize: 0.45, color: cor_verde_menta, opacity: op })
    const tp = tipo(t)
    drawText({ text: "Tipo: " + tp, x: 0, y: -3.5, fontSize: 0.55, color: corTipo(tp), opacity: op })
})

// MARCAS POR TIPO (somem com 'provar')
animation(cx, provar, (t, p) => {
    const op = 1 - p
    const { D, C } = topo(t)
    const tp = tipo(t)
    if (tp === "retângulo") {
        if (Math.abs(D.x - A.x) < 0.04) { drawSector({ points: [B, A, D], radius: 0.4, opacity: op }); drawSector({ points: [C, D, A], radius: 0.4, opacity: op }) }
        else { drawSector({ points: [A, B, C], radius: 0.4, opacity: op }); drawSector({ points: [D, C, B], radius: 0.4, opacity: op }) }
    }
    if (tp === "isósceles") {
        drawSegmentMeasureMark({ points: [A, D], size: 0.3, quantity: 1, color: cor_coral, opacity: op })
        drawSegmentMeasureMark({ points: [B, C], size: 0.3, quantity: 1, color: cor_coral, opacity: op })
    }
})

pause()

// =====================================================================
// ETAPA 2 — DEMONSTRAÇÕES (aperte "Ir para as demonstrações", com cx = 0)
// =====================================================================

// ---- P1: ângulos junto a uma lateral são suplementares (some ao ir p/ P3) ----
animation(p3, (p) => {
    const op = 1 - p
    drawSegment({ points: [A, D0], color: cor_coral, width: 0.05, opacity: op })
    drawSector({ points: [B, A, D0], radius: 0.6, fill: true, fillColor: cor_dourado, opacity: 0.75 * op })
    drawSector({ points: [C0, D0, A], radius: 0.6, fill: true, fillColor: cor_verde_menta, opacity: 0.75 * op })
    drawText({ text: "$\\hat{A}$", x: A.x + 0.8, y: A.y + 0.28, fontSize: 0.45, color: cor_dourado, opacity: op })
    drawText({ text: "$\\hat{D}$", x: D0.x + 0.4, y: D0.y - 1.1, fontSize: 0.45, color: cor_verde_menta, opacity: op })
    drawText({ text: "$\\hat{A} + \\hat{D} = 180^\\circ$  (colaterais)", x: 0, y: -3.0, fontSize: 0.45, color: cor_coral, opacity: op })
})

pause()

// ---- P2: transporte da lateral AD até C (vira CP // AD) ----
animation(transp, p3, (t2, p) => {
    const op = 1 - p
    const Am = { x: A.x + 3 * t2, y: A.y }
    const Dm = { x: D0.x + 3 * t2, y: D0.y }
    drawSegment({ points: [Am, Dm], color: cor_coral, width: 0.035, lineDash: [0.14, 0.1], opacity: op })
})

pause()

// P aparece em AB; triângulo BPC isósceles (CP = CB) — some ao ir p/ P3
animation(p3, (p) => {
    const op = 1 - p
    drawPoint({ x: P.x, y: P.y, size: 0.07, color: cor_amarelo_neon, opacity: op })
    drawText({ text: "$P$", x: P.x - 0.1, y: P.y - 0.45, fontSize: 0.5, color: cor_amarelo_neon, opacity: op })
    drawPolygon({ points: [B, P, C0], fill: true, fillColor: cor_roxo_neon, opacity: 0.15 * op })
    drawSegmentMeasureMark({ points: [P, C0], size: 0.3, quantity: 2, color: cor_coral, opacity: op })
    drawSegmentMeasureMark({ points: [B, C0], size: 0.3, quantity: 2, color: cor_coral, opacity: op })
})

pause()

// ângulos da base de BPC iguais e = Â -> Â = B̂ (some ao ir p/ P3)
animation(p3, (p) => {
    const op = 1 - p
    drawSector({ points: [C0, P, B], radius: 0.55, fill: true, fillColor: cor_dourado, opacity: 0.75 * op })
    drawSector({ points: [P, B, C0], radius: 0.55, fill: true, fillColor: cor_dourado, opacity: 0.75 * op })
    drawText({ text: "$\\hat{A} = \\hat{B}$  (ângulos da base)", x: 0, y: -3.7, fontSize: 0.5, color: cor_dourado, opacity: op })
})

pause()

// ---- P3: diagonais congruentes (aparecem com p3; somem ao separar) ----
animation(p3, separar, (p, sep) => {
    const o = p * (1 - sep)
    drawSegment({ points: [A, C0], color: cor_amarelo_neon, width: 0.04, opacity: o })   // diagonal AC
    drawSegment({ points: [B, D0], color: cor_ciano, width: 0.04, opacity: o })          // diagonal BD
})

pause()

// ---- P3: separar os triângulos DAB e CBA EM CASCATA (tamanho original) ----
// esc = 1 (não encolhe). △DAB sobe (em cima); △CBA desce (embaixo).
const cenDAB = { x: (D0.x + A.x + B.x) / 3, y: (D0.y + A.y + B.y) / 3 }
const cenCBA = { x: (C0.x + B.x + A.x) / 3, y: (C0.y + B.y + A.y) / 3 }
const esc = 1
const tgtL = { x: cenDAB.x, y: 1.2 }    // △DAB (em cima)
const tgtR = { x: cenCBA.x, y: -2.7 }   // △CBA (embaixo)
function xfL(Pt, s) { const px = tgtL.x + esc * (Pt.x - cenDAB.x), py = tgtL.y + esc * (Pt.y - cenDAB.y); return { x: Pt.x + s * (px - Pt.x), y: Pt.y + s * (py - Pt.y) } }
function xfR(Pt, s) { const px = tgtR.x + esc * (Pt.x - cenCBA.x), py = tgtR.y + esc * (Pt.y - cenCBA.y); return { x: Pt.x + s * (px - Pt.x), y: Pt.y + s * (py - Pt.y) } }

// só os triângulos + marcas do LAL (SEM rótulos — evita lápis fantasma)
animation(p3, separar, (p, s) => {
    // ---- △DAB (em cima) ----
    const dL = xfL(D0, s), aL = xfL(A, s), bL = xfL(B, s)
    drawPolygon({ points: [dL, aL, bL], fill: true, fillColor: cor_roxo_neon, opacity: 0.16 * p })
    drawSegment({ points: [aL, dL], color: cor_coral, width: 0.03, opacity: p })       // AD (lateral)
    drawSegment({ points: [aL, bL], width: 0.03, opacity: p })                          // AB (base comum)
    drawSegment({ points: [bL, dL], color: cor_ciano, width: 0.03, opacity: p })        // BD (diagonal)
    drawSegmentMeasureMark({ points: [aL, dL], size: 0.25, quantity: 1, color: cor_coral, opacity: p })
    drawSegmentMeasureMark({ points: [aL, bL], size: 0.25, quantity: 2, color: cor_verde_neon, opacity: p })
    drawSector({ points: [bL, aL, dL], radius: 0.45, fill: true, fillColor: cor_dourado, opacity: 0.7 * p })
    // ---- △CBA (embaixo) ----
    const cR = xfR(C0, s), bR = xfR(B, s), aR = xfR(A, s)
    drawPolygon({ points: [cR, bR, aR], fill: true, fillColor: cor_verde_neon, opacity: 0.14 * p })
    drawSegment({ points: [bR, cR], color: cor_coral, width: 0.03, opacity: p })        // BC (lateral)
    drawSegment({ points: [bR, aR], width: 0.03, opacity: p })                           // BA (base comum)
    drawSegment({ points: [cR, aR], color: cor_amarelo_neon, width: 0.03, opacity: p })  // CA (diagonal)
    drawSegmentMeasureMark({ points: [bR, cR], size: 0.25, quantity: 1, color: cor_coral, opacity: p })
    drawSegmentMeasureMark({ points: [bR, aR], size: 0.25, quantity: 2, color: cor_verde_neon, opacity: p })
    drawSector({ points: [aR, bR, cR], radius: 0.45, fill: true, fillColor: cor_dourado, opacity: 0.7 * p })
})

pause()   // <- aqui você põe os triângulos em cascata (aperta "Separar")

// AGORA sim os rótulos + marcas das diagonais (o lápis escreve, sem fantasma)
animation(p3, separar, (p, s) => {
    const dL = xfL(D0, s), aL = xfL(A, s), bL = xfL(B, s)
    const cR = xfR(C0, s), bR = xfR(B, s), aR = xfR(A, s)
    drawText({ text: "$D$", x: dL.x - 0.15, y: dL.y + 0.1, fontSize: 0.45, opacity: p -(1-s)})
    drawText({ text: "$A$", x: aL.x - 0.35, y: aL.y - 0.3, fontSize: 0.45, opacity: p -(1-s)})
    drawText({ text: "$B$", x: bL.x + 0.15, y: bL.y - 0.3, fontSize: 0.45, opacity: p -(1-s)})
    drawText({ text: "$C$", x: cR.x + 0.15, y: cR.y +0.1, fontSize: 0.45, opacity: p-(1-s) })
    drawText({ text: "$B$", x: bR.x + 0.15, y: bR.y - 0.3, fontSize: 0.45, opacity: p-(1-s) })
    drawText({ text: "$A$", x: aR.x - 0.35, y: aR.y - 0.3, fontSize: 0.45, opacity: p-(1-s) })

    drawSegmentMeasureMark({ points: [bL, dL], size: 0.25, quantity: 3, color: cor_amarelo_neon, opacity: p })  // BD
    drawSegmentMeasureMark({ points: [cR, aR], size: 0.25, quantity: 3, color: cor_amarelo_neon, opacity: p })  // CA
})

pause()

// conclusão: △DAB ≅ △CBA (LAL) => AC = BD
animation(p3, separar, (p, s) => {
    drawText({ text: "$\\Delta DAB \\cong \\Delta CBA$  (LAL)  $\\Rightarrow$  $\\bar{AC} = \\bar{BD}$", x: 0, y: -5.5, fontSize: 0.5, color: cor_verde_neon, opacity: p })
})
