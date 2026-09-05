// ANIMAÇÃO: 3.1 Quadriláteros — Ângulos Internos (360°) e Externos (360°)
// Abertura: desenha ABCD (fala de vértices e lados).
// Diagonais: mostra as 2 diagonais; param 'sumirDiag' some/volta.
// Interno: diagonal AC -> 2 triângulos (180° cada) -> Â+B̂+Ĉ+D̂ = 360°;
//          'juntar' transporta os 4 ângulos num ponto (volta completa).
// Transição: 'sumirInterno' limpa o interior.
// Externo: prolonga os lados, marca os 4 externos; 'juntarExt' os junta em 360°.
// OBS Conexty: usar \hat (não \widehat). Fundo preto.
// Cores das equações: \textcolor{#hex}{...} casando com a cor de cada ângulo.

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

// === HELPERS de ângulo (graus) ===
const DEG = Math.PI / 180
function ang(from, to) { return Math.atan2(to.y - from.y, to.x - from.x) / DEG }
function norm180(a) { while (a <= -180) a += 360; while (a > 180) a -= 360; return a }
function interior(prev, V, next) {                 // ângulo interno (menor) no vértice V
    const a1 = ang(V, prev), a2 = ang(V, next)
    const d = norm180(a2 - a1)
    return d >= 0 ? { start: a1, m: d } : { start: a2, m: -d }
}
function externo(prev, V, next) {                  // ângulo externo (prolonga prev->V)
    const aExt = ang(prev, V), aNext = ang(V, next)
    const d = norm180(aNext - aExt)
    return d >= 0 ? { start: aExt, m: d, aExt } : { start: aNext, m: -d, aExt }
}

// TÍTULO
drawText({ text: "\\begin{center}\\textbf{Soma dos Ângulos do Quadrilátero}\\end{center}", x: 0.2, y: 4.3, color: cor_titulo })

pause()

// === VÉRTICES (quadrilátero convexo ABCD) ===
const A = { x: -3.3, y: 1.6 }
const B = { x: 2.8, y: 2.4 }
const C = { x: 3.4, y: -1.6 }
const D = { x: -2.4, y: -2.6 }

// LADOS
drawSegment({ points: [A, B], width: 0.03 })
drawSegment({ points: [B, C], width: 0.03 })
drawSegment({ points: [C, D], width: 0.03 })
drawSegment({ points: [D, A], width: 0.03 })

// VÉRTICES + RÓTULOS (fora do quadrilátero)
drawPoint({ x: A.x, y: A.y, size: 0.08 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y + 0.25, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.08 }); drawText({ text: "$B$", x: B.x + 0.25, y: B.y + 0.25, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.08 }); drawText({ text: "$C$", x: C.x + 0.3, y: C.y - 0.15, fontSize: 0.5 })
drawPoint({ x: D.x, y: D.y, size: 0.08 }); drawText({ text: "$D$", x: D.x - 0.45, y: D.y - 0.5, fontSize: 0.5 })

pause()

// === DIAGONAIS: um quadrilátero tem 2 diagonais (AC e BD) — 'sumirDiag' some/volta ===
const sumirDiag = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 1.5 }, { value: 0, time: 1.5 }], label: "Sumir/voltar diagonais" })
animation(sumirDiag, (s) => {
    drawSegment({ points: [A, C], color: cor_ciano, width: 0.03, opacity: 1 - s })
    drawSegment({ points: [B, D], color: cor_ciano, width: 0.03, opacity: 1 - s })
    drawText({ text: "2 diagonais", x: 1.06, y: 0.94, fontSize: 0.5, color: cor_ciano, opacity: 1 - s, rotation: Math.PI / 4 })
})

pause()

// === OS 4 ÂNGULOS INTERNOS (setores que depois se transportam) ===
const Of = { x: 0.1, y: -0.05 }             // ponto comum onde os ângulos se juntam
const rFan = 0.6                             // raio dos setores (constante)
const juntar = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2.5 }, { value: 0, time: 2.5 }], label: "Juntar internos (360°)" })
const sumirInterno = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 1.5 }], label: "Sumir internos (ir p/ externos)" })

const iA = interior(D, A, B)
const iB = interior(A, B, C)
const iC = interior(B, C, D)
const iD = interior(C, D, A)
const sA = 0, sB = iA.m, sC = iA.m + iB.m, sD = iA.m + iB.m + iC.m   // posições no leque

// POSIÇÃO DOS RÓTULOS — inicial (no vértice) e final (já juntos). Ajuste livre:
const labA = { x: -2.59, y: 0.93 },   labAf = { x: 0.74, y: 0.43 }
const labB = { x: 2.26, y: 1.51 },   labBf = { x: -0.44, y: 0.43 }
const labC = { x: 2.76, y: -1.26 },  labCf = { x: -0.59, y: -0.7 }
const labD = { x: -1.9, y: -2.03 }, labDf = { x: 0.82, y: -0.69 }

function transporta(V, info, sTarget, col, label, labIni, labFim) {
    const delta = norm180(sTarget - info.start)
    animation(juntar, sumirInterno, (t, si) => {
        const op = 1 - si                       // some ao ir para os externos
        const c = { x: V.x + (Of.x - V.x) * t, y: V.y + (Of.y - V.y) * t }
        const r = rFan
        const st = info.start + delta * t
        const P1 = { x: c.x + r * Math.cos(st * DEG), y: c.y + r * Math.sin(st * DEG) }
        const P3 = { x: c.x + r * Math.cos((st + info.m) * DEG), y: c.y + r * Math.sin((st + info.m) * DEG) }
        drawSector({ points: [P1, c, P3], radius: r, fill: true, fillColor: col, opacity: 0.85 * op })
        drawText({ text: label, x: labIni.x + (labFim.x - labIni.x) * t, y: labIni.y + (labFim.y - labIni.y) * t, fontSize: 0.42, color: col, opacity: op })
    })
}

transporta(A, iA, sA, cor_coral, "$\\hat{A}$", labA, labAf)
transporta(B, iB, sB, cor_azul_eletrico, "$\\hat{B}$", labB, labBf)
transporta(C, iC, sC, cor_dourado, "$\\hat{C}$", labC, labCf)
transporta(D, iD, sD, cor_verde_menta, "$\\hat{D}$", labD, labDf)

pause()

// === DIAGONAL AC (some ao juntar ou ao ir p/ externos) ===
animation(juntar, sumirInterno, (t, si) => {
    drawSegment({ points: [A, C], color: cor_amarelo_neon, width: 0.04, opacity: 1 - Math.max(t, si) })
})

pause()

// === TRIÂNGULO ABC: soma = 180° ===
animation(juntar, sumirInterno, (t, si) => {
    const op = 1 - Math.max(t, si)
    drawPolygon({ points: [A, B, C], fill: true, fillColor: cor_roxo_neon, opacity: 0.15 * op })
    drawText({ text: "$180^\\circ$", x: 1.28, y: 0.65, fontSize: 0.55, color: cor_roxo_neon, opacity: op })
})

pause()

// === TRIÂNGULO ACD: soma = 180° ===
animation(juntar, sumirInterno, (t, si) => {
    const op = 1 - Math.max(t, si)
    drawPolygon({ points: [A, C, D], fill: true, fillColor: cor_verde_neon, opacity: 0.13 * op })
    drawText({ text: "$180^\\circ$", x: -0.89, y: -1.16, fontSize: 0.55, color: cor_verde_neon, opacity: op })
})

pause()

// === CONCLUSÃO INTERNA (some ao ir p/ externos) — 180 nas cores dos triângulos ===
animation(sumirInterno, (si) => {
    drawText({ text: "$\\textcolor{#BF00FF}{180^\\circ} + \\textcolor{#39FF14}{180^\\circ} = 360^\\circ$", x: 0.11, y: -3.73, fontSize: 0.55, opacity: 1 - si })
})

pause()

// Â,B̂,Ĉ,D̂ cada um na sua cor
animation(sumirInterno, (si) => {
    drawText({ text: "$\\textcolor{#FF6B6B}{\\hat{A}} + \\textcolor{#00B0FF}{\\hat{B}} + \\textcolor{#FFD700}{\\hat{C}} + \\textcolor{#00FA9A}{\\hat{D}} = 360^\\circ$", x: 0.03, y: -4.68, fontSize: 0.6, opacity: 1 - si })
})

pause()

// === FINALE INTERNO: 'Juntar internos' — os 4 setores viram uma volta completa ===
animation(juntar, sumirInterno, (t, si) => {
    const op = t * (1 - si)
    drawCircle({ center: Of, radius: rFan, color: cor_amarelo_neon, opacity: 0.45 * op })
    drawText({ text: "volta completa $= 360^\\circ$", x: 0.12, y: -1.39, fontSize: 0.45, color: cor_amarelo_neon, opacity: op })
})

pause()

// =====================================================================
// PARTE 2 — ÂNGULOS EXTERNOS (aperte "Sumir internos" antes de seguir)
//   Prolongando cada lado, o ângulo externo é o suplemento do interno;
//   os quatro externos também somam 360°.
// =====================================================================
const juntarExt = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2.5 }, { value: 0, time: 2.5 }], label: "Juntar externos (360°)" })

const eA = externo(D, A, B)
const eB = externo(A, B, C)
const eC = externo(B, C, D)
const eD = externo(C, D, A)
const seA = 0, seB = eA.m, seC = eA.m + eB.m, seD = eA.m + eB.m + eC.m

// título da parte externa (aparece com sumirInterno)
animation(sumirInterno, (si) => {
    drawText({ text: "Ângulos externos", x: 1.2, y: 3.4, fontSize: 0.5, color: cor_laranja, opacity: si })
})

// POSIÇÃO DOS RÓTULOS EXTERNOS — inicial (vértice) e final (leque). Ajuste livre:
const labeA = { x: -2.8, y: 2.27 },  labeAf = { x: 0.72, y: 0.55 }
const labeB = { x: 3.55, y: 1.89 },   labeBf = { x: -0.63, y: 0.49 }
const labeC = { x: 2.9, y: -2.38 },  labeCf = { x: -0.5, y: -0.8 }
const labeD = { x: -3.29, y: -2.15 }, labeDf = { x: 0.78, y: -0.64 }

function transportaExt(V, ie, sTarget, col, label, labIni, labFim) {
    const delta = norm180(sTarget - ie.start)
    animation(juntarExt, sumirInterno, (t, si) => {
        const vis = si                            // só aparece depois de limpar o interior
        // prolongamento do lado (tracejado), some ao juntar
        const Ext = { x: V.x + 1.3 * Math.cos(ie.aExt * DEG), y: V.y + 1.3 * Math.sin(ie.aExt * DEG) }
        drawSegment({ points: [V, Ext], width: 0.02, lineDash: [0.12, 0.1], opacity: 0.8 * (1 - t) * vis })
        // setor externo transportado até Of
        const c = { x: V.x + (Of.x - V.x) * t, y: V.y + (Of.y - V.y) * t }
        const r = rFan
        const st = ie.start + delta * t
        const P1 = { x: c.x + r * Math.cos(st * DEG), y: c.y + r * Math.sin(st * DEG) }
        const P3 = { x: c.x + r * Math.cos((st + ie.m) * DEG), y: c.y + r * Math.sin((st + ie.m) * DEG) }
        drawSector({ points: [P1, c, P3], radius: r, fill: true, fillColor: col, opacity: 0.8 * vis })
        // rótulo: interpola da posição inicial (labIni) até a final (labFim), ambas custom
        drawText({ text: label, x: labIni.x + (labFim.x - labIni.x) * t, y: labIni.y + (labFim.y - labIni.y) * t, fontSize: 0.4, color: col, opacity: vis })
    })
}

transportaExt(A, eA, seA, cor_coral, "$e_A$", labeA, labeAf)
transportaExt(B, eB, seB, cor_azul_eletrico, "$e_B$", labeB, labeBf)
transportaExt(C, eC, seC, cor_dourado, "$e_C$", labeC, labeCf)
transportaExt(D, eD, seD, cor_verde_menta, "$e_D$", labeD, labeDf)

pause()

// === EQUAÇÃO DOS EXTERNOS (como no site) — cada par na cor do vértice ===
// Cada interno + externo = 180°; somando os 4 vértices: 4·180° = 720°;
// tirando os internos (360°), sobra 360° para os externos.
animation(sumirInterno, (si) => {
    drawText({ text: "$\\textcolor{#FF6B6B}{\\hat{A}+e_A}=\\textcolor{#00B0FF}{\\hat{B}+e_B}=\\textcolor{#FFD700}{\\hat{C}+e_C}=\\textcolor{#00FA9A}{\\hat{D}+e_D}=180^\\circ$", x: 0.14, y: -3.65, fontSize: 0.42, opacity: si })
})

pause()

animation(sumirInterno, (si) => {
    drawText({ text: "$\\textcolor{#39FF14}{\\text{internos}} + \\textcolor{#FF6600}{\\text{externos}} = 4\\cdot 180^\\circ = 720^\\circ$", x: 0.05, y: -4.65, fontSize: 0.42, opacity: si })
})

pause()

animation(sumirInterno, (si) => {
    drawText({ text: "$\\textcolor{#FF6B6B}{e_A}+\\textcolor{#00B0FF}{e_B}+\\textcolor{#FFD700}{e_C}+\\textcolor{#00FA9A}{e_D} = 720^\\circ - 360^\\circ = 360^\\circ$", x: 0.12, y: -5.62, fontSize: 0.45, opacity: si })
})

pause()

// === FINALE EXTERNO: 'Juntar externos' — os 4 setores fecham 360° ===
animation(juntarExt, sumirInterno, (t, si) => {
    drawCircle({ center: Of, radius: rFan, color: cor_laranja, opacity: 0.45 * t * si })
})
