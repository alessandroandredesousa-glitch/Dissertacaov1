// ANIMAÇÃO: 3.5 Losango (morph + demonstração puxando os triângulos p/ baixo)
// FLUXO (mesmo esqueleto do retângulo):
//  1) paralelogramo (só contorno) -> "igualar" encolhe a base e vira losango
//     (rótulo muda; os quatro lados ficam congruentes).
//  2) diagonais AC e BD + ponto M (interseção = ponto médio das duas).
//  3) triângulo ABM ; 4) triângulo CBM.
//  5) marcas do LLL (AB≅CB, AM≅CM, BM comum) — sem tocar no ângulo em M nem no de B.
//  6) "separar": os dois triângulos DESCEM; o losango PERMANECE.
//  7) rótulos; 8) marca final: ângulo reto em M (diagonais ⊥) e bissecção de B.
// OBS Conexty: usar \hat (não \widehat). Fundo preto.

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

// === AJUSTES (organização da figura) ===
const escalaTri = 1.5                  // escala de TODA a figura (losango + triângulos)
const posABM = { x: -2.3, y: -3.6 }  // posição do triângulo ABM (x: dir/esq, y: cima/baixo)
const posCBM = { x: 2.5, y: -3.6 }   // posição do triângulo CBM (x: dir/esq, y: cima/baixo)

// === GEOMETRIA (losango a partir do paralelogramo; escala em torno de cRect) ===
const cRect = { x: 0, y: 1.0 }
function sc(P) { return { x: cRect.x + escalaTri * (P.x - cRect.x), y: cRect.y + escalaTri * (P.y - cRect.y) } }
// meia-base horizontal encolhe de 1.7 -> 1.118 (fica = ao lado); meia-lateral fixa (0.5, 1.0)
function verts(q) {
    const hux = 1.7 + (1.118 - 1.7) * q
    const O = { x: 0, y: 1.0 }, hvx = 0.5, hvy = 1.0
    return {
        A: sc({ x: O.x - hux - hvx, y: O.y - hvy }),
        B: sc({ x: O.x + hux - hvx, y: O.y - hvy }),
        C: sc({ x: O.x + hux + hvx, y: O.y + hvy }),
        D: sc({ x: O.x - hux + hvx, y: O.y + hvy })
    }
}
// losango fixo (q = 1), já escalado
const A = sc({ x: -1.618, y: 0 }), B = sc({ x: 0.618, y: 0 }), C = sc({ x: 1.618, y: 2 }), D = sc({ x: -0.618, y: 2 })
const M = sc({ x: 0, y: 1 })   // interseção das diagonais (= centro)

// TÍTULO
drawText({ text: "\\begin{center}\\textbf{Losango e suas propriedades}\\end{center}", x: 0.2, y: 4.3, color: cor_titulo })

pause()

// === PARÂMETROS ===
const igualar = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2.5 }, { value: 0, time: 2.5 }], label: "Igualar lados (paralelogramo → losango)" })
const ladosIguais = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2 }, { value: 0, time: 2 }], label: "Destacar lados congruentes" })
const separar = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2.5 }, { value: 0, time: 2.5 }], label: "Puxar triângulos para baixo" })

// GEOMETRIA base: só contorno; segue o morph e FICA (não some ao separar)
animation(igualar, ladosIguais, (q, a) => {
    const { A: Ap, B: Bp, C: Cp, D: Dp } = verts(q)
    drawSegment({ points: [Ap, Bp], width: 0.045 })
    drawSegment({ points: [Bp, Cp], width: 0.045 })
    drawSegment({ points: [Cp, Dp], width: 0.045 })
    drawSegment({ points: [Dp, Ap], width: 0.045 })
    // rótulo do tipo (some ao destacar os lados)
    const tp = q > 0.98 ? "Losango" : "Paralelogramo"
    drawText({ text: tp, x: 0.09, y: 0.95, fontSize: 0.5, color: q > 0.98 ? cor_verde_neon : cor_coral, opacity: 1 - a })
    // vértices + rótulos
    drawPoint({ x: Ap.x, y: Ap.y, size: 0.07 }); drawText({ text: "$A$", x: Ap.x - 0.4, y: Ap.y - 0.1, fontSize: 0.5 })
    drawPoint({ x: Bp.x, y: Bp.y, size: 0.07 }); drawText({ text: "$B$", x: Bp.x + 0.4, y: Bp.y - 0.3, fontSize: 0.5 })
    drawPoint({ x: Cp.x, y: Cp.y, size: 0.07 }); drawText({ text: "$C$", x: Cp.x + 0.25, y: Cp.y + 0.1, fontSize: 0.5 })
    drawPoint({ x: Dp.x, y: Dp.y, size: 0.07 }); drawText({ text: "$D$", x: Dp.x - 0.4, y: Dp.y + 0.1, fontSize: 0.5 })
    // os quatro lados congruentes (1 traço cada) — revelados ao destacar
    pause()
    drawSegmentMeasureMark({ points: [Ap, Bp], size: 0.22, quantity: 1, color: cor_verde_menta, opacity: a })
    drawSegmentMeasureMark({ points: [Cp, Dp], size: 0.22, quantity: 1, color: cor_verde_menta, opacity: a })
    pause()
    drawSegmentMeasureMark({ points: [Bp, Cp], size: 0.22, quantity: 1, color: cor_verde_menta, opacity: a })
    drawSegmentMeasureMark({ points: [Dp, Ap], size: 0.22, quantity: 1, color: cor_verde_menta, opacity: a })
})

pause()   // <- deixe "igualar" em 1 (losango) antes de seguir

// === (2) diagonais AC e BD + M (ficam) ===
drawSegment({ points: [A, C], width: 0.035, color: cor_amarelo_neon })
drawSegment({ points: [B, D], width: 0.035, color: cor_ciano })
drawPoint({ x: M.x, y: M.y, size: 0.09, color: cor_rosa_choque })
drawText({ text: "$M$", x: M.x + 0.2, y: M.y + 0.28, fontSize: 0.5, color: cor_rosa_choque })

pause()

// === transporte: cada triângulo desce ===
const cenABM = { x: (A.x + B.x + M.x) / 3, y: (A.y + B.y + M.y) / 3 }
const cenCBM = { x: (C.x + B.x + M.x) / 3, y: (C.y + B.y + M.y) / 3 }
// os triângulos já herdam a escala da base; aqui só translada p/ pos
function xf(Pt, s, cen, pos) { const px = pos.x + (Pt.x - cen.x), py = pos.y + (Pt.y - cen.y); return { x: Pt.x + s * (px - Pt.x), y: Pt.y + s * (py - Pt.y) } }

// === (3) triângulo ABM (desce com "separar") ===
animation(separar, (s) => {
    const A1 = xf(A, s, cenABM, posABM), B1 = xf(B, s, cenABM, posABM), M1 = xf(M, s, cenABM, posABM)
    drawPolygon({ points: [A1, B1, M1], fill: true, fillColor: cor_roxo_neon, opacity: 0.16 })
    drawSegment({ points: [A1, B1], width: 0.035 })                          // AB (lado)
    drawSegment({ points: [B1, M1], width: 0.035, color: cor_ciano })        // BM (meia-diagonal BD)
    drawSegment({ points: [M1, A1], width: 0.035, color: cor_amarelo_neon }) // AM (meia-diagonal AC)
})

pause()

// === (4) triângulo CBM (desce com "separar") ===
animation(separar, (s) => {
    const C2 = xf(C, s, cenCBM, posCBM), B2 = xf(B, s, cenCBM, posCBM), M2 = xf(M, s, cenCBM, posCBM)
    drawPolygon({ points: [C2, B2, M2], fill: true, fillColor: cor_azul_eletrico, opacity: 0.16 })
    drawSegment({ points: [C2, B2], width: 0.035 })                          // CB (lado)
    drawSegment({ points: [B2, M2], width: 0.035, color: cor_ciano })        // BM (meia-diagonal BD)
    drawSegment({ points: [M2, C2], width: 0.035, color: cor_amarelo_neon }) // CM (meia-diagonal AC)
})

pause()

// === (5) marcas do LLL (AB≅CB, AM≅CM, BM comum) — sem o ângulo em M nem o de B ===
animation(separar, (s) => {
    const A1 = xf(A, s, cenABM, posABM), B1 = xf(B, s, cenABM, posABM), M1 = xf(M, s, cenABM, posABM)
    const C2 = xf(C, s, cenCBM, posCBM), B2 = xf(B, s, cenCBM, posCBM), M2 = xf(M, s, cenCBM, posCBM)
    // ABM
    drawSegmentMeasureMark({ points: [A1, B1], size: 0.22, quantity: 1, color: cor_verde_menta })   // AB (lado)
    drawSegmentMeasureMark({ points: [M1, A1], size: 0.22, quantity: 2, color: cor_coral })          // AM
    drawSegmentMeasureMark({ points: [B1, M1], size: 0.22, quantity: 3, color: cor_dourado })        // BM comum
    // CBM
    drawSegmentMeasureMark({ points: [C2, B2], size: 0.22, quantity: 1, color: cor_verde_menta })   // CB (lado)
    drawSegmentMeasureMark({ points: [M2, C2], size: 0.22, quantity: 2, color: cor_coral })          // CM
    drawSegmentMeasureMark({ points: [B2, M2], size: 0.22, quantity: 3, color: cor_dourado })        // BM comum
})

pause()   // <- aperte "Puxar triângulos para baixo"

// === (7) rótulos das cópias (o lápis escreve depois de descer) ===
animation(separar, (s) => {
    const A1 = xf(A, s, cenABM, posABM), B1 = xf(B, s, cenABM, posABM), M1 = xf(M, s, cenABM, posABM)
    const C2 = xf(C, s, cenCBM, posCBM), B2 = xf(B, s, cenCBM, posCBM), M2 = xf(M, s, cenCBM, posCBM)
    drawText({ text: "$A$", x: A1.x - 0.35, y: A1.y - 0.15, fontSize: 0.45, opacity: s - (1 - s) })
    drawText({ text: "$B$", x: B1.x + 0.2, y: B1.y - 0.25, fontSize: 0.45, opacity: s - (1 - s) })
    drawText({ text: "$M$", x: M1.x + 0.2, y: M1.y + 0.1, fontSize: 0.45, opacity: s - (1 - s) })
    drawText({ text: "$C$", x: C2.x + 0.2, y: C2.y + 0.1, fontSize: 0.45, opacity: s - (1 - s) })
    drawText({ text: "$B$", x: B2.x + 0, y: B2.y - 0.5, fontSize: 0.45, opacity: s - (1 - s) })
    drawText({ text: "$M$", x: M2.x - 0.35, y: M2.y + 0.1, fontSize: 0.45, opacity: s - (1 - s) })
})

pause()   // <- (você explica a congruência LLL)

// === (8) marca final: ângulo reto em M (⊥) e bissecção de B ===
animation(separar, (s) => {
    const A1 = xf(A, s, cenABM, posABM), B1 = xf(B, s, cenABM, posABM), M1 = xf(M, s, cenABM, posABM)
    const C2 = xf(C, s, cenCBM, posCBM), B2 = xf(B, s, cenCBM, posCBM), M2 = xf(M, s, cenCBM, posCBM)
    // ângulos retos em M (diagonais perpendiculares) — drawSector marca 90° sozinho
    drawSector({ points: [A1, M1, B1], radius: 0.35, fill: true, fillColor: cor_verde_neon, opacity: 0.65 * s })
    drawSector({ points: [C2, M2, B2], radius: 0.35, fill: true, fillColor: cor_verde_neon, opacity: 0.65 * s })
    // ângulos iguais em B (a diagonal bissecta)
    drawSector({ points: [A1, B1, M1], radius: 0.5, fill: true, fillColor: cor_rosa_choque, opacity: 0.6 * s })
    drawSector({ points: [M2, B2, C2], radius: 0.5, fill: true, fillColor: cor_rosa_choque, opacity: 0.6 * s })
    drawText({ text: "$\\Delta ABM \\cong \\Delta CBM$ (LLL) $\\Rightarrow$ diagonais $\\perp$ e bissetrizes", x: -0.02, y: -6.86, fontSize: 0.44, color: cor_rosa_choque, opacity: s })
})
