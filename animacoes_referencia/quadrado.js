// ANIMAÇÃO: 3.5 Quadrado (morph + demonstração abrindo os 4 triângulos)
// FLUXO (mesmo esqueleto):
//  1) paralelogramo (só contorno) -> "formar" vira quadrado (endireita E iguala:
//     rótulo muda, ângulos retos + lados congruentes).
//  2) diagonais AC e BD + M: congruentes (retângulo) E perpendiculares (losango).
//  3) "separar": os QUATRO triângulos (AMB, BMC, CMD, DMA) se abrem;
//     o quadrado PERMANECE.
//  4) marcas: as 4 meia-diagonais são iguais (MA=MB=MC=MD) e há ângulo reto em M
//     em cada um -> 4 triângulos retângulos isósceles (45-45-90) congruentes.
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
const escalaTri = 1.5                   // escala de TODA a figura (quadrado + triângulos)
const posAMB = { x: -2.0, y: -3.7 }    // triângulo AMB (baixo)
const posBMC = { x: 2.0, y: -3.7 }     // triângulo BMC (direita)
const posCMD = { x: 2.0, y: -7.9 }     // triângulo CMD (topo)
const posDMA = { x: -2.0, y: -7.9 }    // triângulo DMA (esquerda)

// === GEOMETRIA (quadrado a partir do paralelogramo; escala em torno de cRect) ===
const cRect = { x: 0, y: 1.0 }
function sc(P) { return { x: cRect.x + escalaTri * (P.x - cRect.x), y: cRect.y + escalaTri * (P.y - cRect.y) } }
// morfa: meia-base hu (1.6->1.3) e meia-lateral hv ((0.6,1.0)->(0,1.3)) até o quadrado
function verts(p) {
    const hux = 1.6 - 0.3 * p
    const hvx = 0.6 - 0.6 * p, hvy = 1.0 + 0.3 * p
    const O = { x: 0, y: 1.0 }
    return {
        A: sc({ x: O.x - hux - hvx, y: O.y - hvy }),
        B: sc({ x: O.x + hux - hvx, y: O.y - hvy }),
        C: sc({ x: O.x + hux + hvx, y: O.y + hvy }),
        D: sc({ x: O.x - hux + hvx, y: O.y + hvy })
    }
}
// quadrado fixo (p = 1), já escalado
const A = sc({ x: -1.3, y: -0.3 }), B = sc({ x: 1.3, y: -0.3 }), C = sc({ x: 1.3, y: 2.3 }), D = sc({ x: -1.3, y: 2.3 })
const M = sc({ x: 0, y: 1 })

// os 4 triângulos das diagonais (P, M, Q)
const tris = [
    { P: A, Q: B, nP: "A", nQ: "B", pos: posAMB, fill: cor_roxo_neon },
    { P: B, Q: C, nP: "B", nQ: "C", pos: posBMC, fill: cor_azul_eletrico },
    { P: C, Q: D, nP: "C", nQ: "D", pos: posCMD, fill: cor_verde_menta },
    { P: D, Q: A, nP: "D", nQ: "A", pos: posDMA, fill: cor_coral }
]

// TÍTULO
drawText({ text: "\\begin{center}\\textbf{Quadrado e suas propriedades}\\end{center}", x: 0.2, y: 5.3, color: cor_titulo })

pause()

// === PARÂMETROS ===
const formar = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2.5 }, { value: 0, time: 2.5 }], label: "Formar (paralelogramo → quadrado)" })
const marcar = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2 }, { value: 0, time: 2 }], label: "Destacar lados congruentes" })
const separar = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2.5 }, { value: 0, time: 2.5 }], label: "Abrir os quatro triângulos" })

// GEOMETRIA base: só contorno; segue o morph e FICA (não some ao separar)
animation(formar, marcar, (p, a) => {
    const { A: Ap, B: Bp, C: Cp, D: Dp } = verts(p)
    drawSegment({ points: [Ap, Bp], width: 0.045 })
    drawSegment({ points: [Bp, Cp], width: 0.045 })
    drawSegment({ points: [Cp, Dp], width: 0.045 })
    drawSegment({ points: [Dp, Ap], width: 0.045 })
    // ângulos retos surgem quando p -> 1
    drawSector({ points: [Dp, Ap, Bp], radius: 0.3, fill: true, fillColor: cor_verde_neon, opacity: 0.5 * p })
    drawSector({ points: [Ap, Bp, Cp], radius: 0.3, fill: true, fillColor: cor_verde_neon, opacity: 0.5 * p })
    drawSector({ points: [Bp, Cp, Dp], radius: 0.3, fill: true, fillColor: cor_verde_neon, opacity: 0.5 * p })
    drawSector({ points: [Cp, Dp, Ap], radius: 0.3, fill: true, fillColor: cor_verde_neon, opacity: 0.5 * p })
    // rótulo do tipo (some ao destacar os lados)
    const tp = p > 0.98 ? "Quadrado" : "Paralelogramo"
    drawText({ text: tp, x: 0.09, y: 0.95, fontSize: 0.5, color: p > 0.98 ? cor_verde_neon : cor_coral, opacity: 1 - a })
    // vértices + rótulos
    drawPoint({ x: Ap.x, y: Ap.y, size: 0.07 }); drawText({ text: "$A$", x: Ap.x - 0.4, y: Ap.y - 0.15, fontSize: 0.5 })
    drawPoint({ x: Bp.x, y: Bp.y, size: 0.07 }); drawText({ text: "$B$", x: Bp.x + 0.25, y: Bp.y - 0.15, fontSize: 0.5 })
    drawPoint({ x: Cp.x, y: Cp.y, size: 0.07 }); drawText({ text: "$C$", x: Cp.x + 0.25, y: Cp.y + 0.1, fontSize: 0.5 })
    drawPoint({ x: Dp.x, y: Dp.y, size: 0.07 }); drawText({ text: "$D$", x: Dp.x - 0.4, y: Dp.y + 0.1, fontSize: 0.5 })
    // os quatro lados congruentes (1 traço cada) — revelados ao destacar
    pause()
    drawSegmentMeasureMark({ points: [Ap, Bp], size: 0.2, quantity: 1, color: cor_verde_menta, opacity: a })
    drawSegmentMeasureMark({ points: [Bp, Cp], size: 0.2, quantity: 1, color: cor_verde_menta, opacity: a })
    drawSegmentMeasureMark({ points: [Cp, Dp], size: 0.2, quantity: 1, color: cor_verde_menta, opacity: a })
    drawSegmentMeasureMark({ points: [Dp, Ap], size: 0.2, quantity: 1, color: cor_verde_menta, opacity: a })
})

pause()   // <- deixe "formar" em 1 (quadrado) antes de seguir

// === (2) diagonais AC e BD + M: congruentes E perpendiculares (ficam) ===
drawSegment({ points: [A, C], width: 0.035, color: cor_amarelo_neon })
drawSegment({ points: [B, D], width: 0.035, color: cor_ciano })
drawPoint({ x: M.x, y: M.y, size: 0.09, color: cor_rosa_choque })
drawText({ text: "$M$", x: M.x + 0.2, y: M.y + 0.25, fontSize: 0.5, color: cor_rosa_choque })

pause()

// AC ≅ BD (2 traços laranja) e ângulo reto em M (perpendiculares)

drawSector({ points: [A, M, B], radius: 0.3, fill: true, fillColor: cor_verde_neon, opacity: 0.6 })
drawText({ text: "diagonais congruentes ($\\overline{AC} \\cong \\overline{BD}$) e $\\perp$", x: 0.4, y: 4.09, fontSize: 0.42, color: cor_laranja })

pause()

// === transporte: os 4 triângulos se abrem ===
// os triângulos já herdam a escala da base; aqui só translada p/ pos
function xf(Pt, s, cen, pos) { const px = pos.x + (Pt.x - cen.x), py = pos.y + (Pt.y - cen.y); return { x: Pt.x + s * (px - Pt.x), y: Pt.y + s * (py - Pt.y) } }
function cenTri(t) { return { x: (t.P.x + M.x + t.Q.x) / 3, y: (t.P.y + M.y + t.Q.y) / 3 } }

// === (3) os 4 triângulos (abrem com "separar") ===
animation(separar, (s) => {
    tris.forEach((t) => {
        const cen = cenTri(t)
        const P1 = xf(t.P, s, cen, t.pos), M1 = xf(M, s, cen, t.pos), Q1 = xf(t.Q, s, cen, t.pos)
        drawPolygon({ points: [P1, M1, Q1], fill: true, fillColor: t.fill, opacity: 0.16 })
        drawSegment({ points: [P1, Q1], width: 0.035 })                          // lado do quadrado (hipotenusa)
        drawSegment({ points: [M1, P1], width: 0.035, color: cor_dourado })      // meia-diagonal
        drawSegment({ points: [M1, Q1], width: 0.035, color: cor_dourado })      // meia-diagonal
    })
})

pause()

// === (4) marcas: meia-diagonais iguais + ângulo reto em M (isósceles retângulos) ===
animation(separar, (s) => {
    tris.forEach((t) => {
        const cen = cenTri(t)
        const P1 = xf(t.P, s, cen, t.pos), M1 = xf(M, s, cen, t.pos), Q1 = xf(t.Q, s, cen, t.pos)
        drawSegmentMeasureMark({ points: [M1, P1], size: 0.2, quantity: 1, color: cor_verde_menta })  // MA=MB=MC=MD
        drawSegmentMeasureMark({ points: [M1, Q1], size: 0.2, quantity: 1, color: cor_verde_menta })
        drawSector({ points: [P1, M1, Q1], radius: 0.28, fill: true, fillColor: cor_verde_neon, opacity: 0.6 })  // reto em M
    })
})

pause()   // <- (você explica: os 4 são congruentes)

// === rótulos das cópias (um por um; ajuste x/y de cada) ===
animation(separar, (s) => {
    const o = s - (1 - s)
    // --- triângulo AMB (baixo) ---
    const cAMB = { x: (A.x + M.x + B.x) / 3, y: (A.y + M.y + B.y) / 3 }
    const aAMB = xf(A, s, cAMB, posAMB), mAMB = xf(M, s, cAMB, posAMB), bAMB = xf(B, s, cAMB, posAMB)
    drawText({ text: "$A$", x: aAMB.x - 0.3, y: aAMB.y - 0.1, fontSize: 0.42, opacity: o })
    drawText({ text: "$B$", x: bAMB.x + 0.15, y: bAMB.y - 0.1, fontSize: 0.42, opacity: o })
    drawText({ text: "$M$", x: mAMB.x - 0.1, y: mAMB.y + 0.3, fontSize: 0.4, color: cor_rosa_choque, opacity: o })
    // --- triângulo BMC (direita) ---
    const cBMC = { x: (B.x + M.x + C.x) / 3, y: (B.y + M.y + C.y) / 3 }
    const bBMC = xf(B, s, cBMC, posBMC), mBMC = xf(M, s, cBMC, posBMC), cBMC2 = xf(C, s, cBMC, posBMC)
    drawText({ text: "$B$", x: bBMC.x - 0.3, y: bBMC.y - 0.1, fontSize: 0.42, opacity: o })
    drawText({ text: "$C$", x: cBMC2.x + 0.15, y: cBMC2.y - 0.1, fontSize: 0.42, opacity: o })
    drawText({ text: "$M$", x: mBMC.x - 0.1, y: mBMC.y + 0.3, fontSize: 0.4, color: cor_rosa_choque, opacity: o })
    // --- triângulo CMD (topo) ---
    const cCMD = { x: (C.x + M.x + D.x) / 3, y: (C.y + M.y + D.y) / 3 }
    const cCMD2 = xf(C, s, cCMD, posCMD), mCMD = xf(M, s, cCMD, posCMD), dCMD = xf(D, s, cCMD, posCMD)
    drawText({ text: "$C$", x: cCMD2.x + 0.15, y: cCMD2.y - 0.1, fontSize: 0.42, opacity: o })
    drawText({ text: "$D$", x: dCMD.x - 0.3, y: dCMD.y - 0.1, fontSize: 0.42, opacity: o })
    drawText({ text: "$M$", x: mCMD.x - 0.1, y: mCMD.y + 0.3, fontSize: 0.4, color: cor_rosa_choque, opacity: o })
    // --- triângulo DMA (esquerda) ---
    const cDMA = { x: (D.x + M.x + A.x) / 3, y: (D.y + M.y + A.y) / 3 }
    const dDMA = xf(D, s, cDMA, posDMA), mDMA = xf(M, s, cDMA, posDMA), aDMA = xf(A, s, cDMA, posDMA)
    drawText({ text: "$D$", x: dDMA.x - 0.3, y: dDMA.y - 0.1, fontSize: 0.42, opacity: o })
    drawText({ text: "$A$", x: aDMA.x + 0.15, y: aDMA.y - 0.1, fontSize: 0.42, opacity: o })
    drawText({ text: "$M$", x: mDMA.x - 0.1, y: mDMA.y + 0.3, fontSize: 0.4, color: cor_rosa_choque, opacity: o })
})

pause()

// === conclusão ===
animation(separar, (s) => {
    drawText({ text: "O quadrado é, ao mesmo tempo, retângulo e losango.", x: 0.13, y: -10.5, fontSize: 0.5, color: cor_dourado, opacity: s })
    drawText({ text: "Suas diagonais dividem-no em 4 triângulos retângulos isósceles congruentes.", x: 0.13, y: -11.3, fontSize: 0.44, color: cor_rosa_choque, opacity: s })
})
