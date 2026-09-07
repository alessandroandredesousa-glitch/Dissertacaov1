// ANIMAÇÃO: 3.5 Retângulo (morph + demonstração puxando os triângulos p/ baixo)
// FLUXO:
//  1) paralelogramo (só contorno) -> "endireitar" vira retângulo (rótulo muda, ângulos retos).
//  2) triângulo ABC ; 3) triângulo BAD.
//  4) marcas do LAL (AB comum, ângulos retos, BC≅AD) — sem tocar nas diagonais.
//  5) "separar": os dois triângulos DESCEM (ABC logo abaixo, BAD mais abaixo),
//     tamanho original; o RETÂNGULO PERMANECE no lugar.
//  6) rótulos após descer; 7) marca final: diagonais congruentes (AC≅BD).
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
const escalaTri = 1.5             // escala de TODA a figura (paralelogramo/retângulo + triângulos)
const posABC = { x: 0.8, y: -3 }    // posição do triângulo ABC (x: dir/esq, y: cima/baixo)
const posBAD = { x: -0.8, y: -7 }    // posição do triângulo BAD (x: dir/esq, y: cima/baixo)

// === GEOMETRIA (retângulo mais alto no quadro; morfa a partir do paralelogramo) ===
// a escala 'escalaTri' é aplicada em torno do centro da figura base (cRect)
const cRect = { x: 0, y: 1.0 }
function sc(P) { return { x: cRect.x + escalaTri * (P.x - cRect.x), y: cRect.y + escalaTri * (P.y - cRect.y) } }
function verts(p) {
    const s = 1.2 * (1 - p)
    return { A: sc({ x: -1.7, y: 0.2 }), B: sc({ x: 1.7, y: 0.2 }), C: sc({ x: 1.7 + s, y: 1.8 }), D: sc({ x: -1.7 + s, y: 1.8 }) }
}
// retângulo fixo (p = 1), já escalado
const A = sc({ x: -1.7, y: 0.2 }), B = sc({ x: 1.7, y: 0.2 }), C = sc({ x: 1.7, y: 1.8 }), D = sc({ x: -1.7, y: 1.8 })

// TÍTULO
drawText({ text: "\\begin{center}\\textbf{Retângulo e suas propriedades}\\end{center}", x: 0.2, y: 4.3, color: cor_titulo })

pause()

// === PARÂMETROS ===
const endireitar = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2.5 }, { value: 0, time: 2.5 }], label: "Endireitar (paralelogramo → retângulo)" })
const angulo90 = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 2.5}, {value: 0, time: 2.5}], label: "Angulo de 90º"})
const separar = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2.5 }, { value: 0, time: 2.5 }], label: "Puxar triângulos para baixo" })

// GEOMETRIA base: só contorno; segue o morph e FICA (não some ao separar)
animation(endireitar, angulo90, (p, a) => {
    const { A: Ap, B: Bp, C: Cp, D: Dp } = verts(p)
    drawSegment({ points: [Ap, Bp], width: 0.045 })
    drawSegment({ points: [Bp, Cp], width: 0.045 })
    drawSegment({ points: [Cp, Dp], width: 0.045 })
    drawSegment({ points: [Dp, Ap], width: 0.045 })
    // ângulos retos surgem quando p -> 1
    drawSector({ points: [Dp, Ap, Bp], radius: 0.35, fill: true, fillColor: cor_verde_neon, opacity: 0.55 * p })
    drawSector({ points: [Ap, Bp, Cp], radius: 0.35, fill: true, fillColor: cor_verde_neon, opacity: 0.55 * p })
    // rótulo do tipo
    const tp = p > 0.98 ? "Retângulo" : "Paralelogramo"
    drawText({ text: tp, x: 0.09, y: 0.91, fontSize: 0.5, color: p > 0.98 ? cor_verde_neon : cor_coral, opacity: 1-a})
    // vértices + rótulos
    drawPoint({ x: Ap.x, y: Ap.y, size: 0.07 }); drawText({ text: "$A$", x: Ap.x - 0.4, y: Ap.y - 0.2, fontSize: 0.5 })
    drawPoint({ x: Bp.x, y: Bp.y, size: 0.07 }); drawText({ text: "$B$", x: Bp.x + 0.4, y: Bp.y - 0.2, fontSize: 0.5 })
    drawPoint({ x: Cp.x, y: Cp.y, size: 0.07 }); drawText({ text: "$C$", x: Cp.x + 0.2, y: Cp.y + 0.1, fontSize: 0.5 })
    drawPoint({ x: Dp.x, y: Dp.y, size: 0.07 }); drawText({ text: "$D$", x: Dp.x - 0.2, y: Dp.y + 0.1, fontSize: 0.5 })
    pause()
    drawSector({ points: [D,A,B], fill: true, fillColor: cor_verde_menta, opacity: 1- (1*a), radius: 0.5})
    pause()
    drawSector({ points: [C,B,A], fill: true, fillColor: cor_verde_menta, opacity: 1 - (1*a), radius: 0.5,})
})

pause()   // <- deixe "endireitar" em 1 (retângulo) antes de seguir

// === transporte: cada triângulo desce (ABC logo abaixo, BAD mais abaixo) ===
const cenABC = { x: (A.x + B.x + C.x) / 3, y: (A.y + B.y + C.y) / 3 }
const cenBAD = { x: (B.x + A.x + D.x) / 3, y: (B.y + A.y + D.y) / 3 }
// os triângulos já herdam a escala da base (A,B,C,D já escalados); aqui só translada p/ pos
function xf(Pt, s, cen, pos) { const px = pos.x + (Pt.x - cen.x), py = pos.y + (Pt.y - cen.y); return { x: Pt.x + s * (px - Pt.x), y: Pt.y + s * (py - Pt.y) } }

// === (2) triângulo ABC (desce com "separar") ===
animation(separar, (s) => {
    const A1 = xf(A, s, cenABC, posABC), B1 = xf(B, s, cenABC, posABC), C1 = xf(C, s, cenABC, posABC)
    drawPolygon({ points: [A1, B1, C1], fill: true, fillColor: cor_roxo_neon, opacity: 0.16 })
    drawSegment({ points: [A1, B1], width: 0.035 })
    drawSegment({ points: [B1, C1], width: 0.035 })
    drawSegment({ points: [C1, A1], width: 0.04, color: cor_amarelo_neon })   // AC (diagonal)
})

pause()

// === (3) triângulo BAD (desce com "separar") ===
animation(separar, (s) => {
    const B2 = xf(B, s, cenBAD, posBAD), A2 = xf(A, s, cenBAD, posBAD), D2 = xf(D, s, cenBAD, posBAD)
    drawPolygon({ points: [B2, A2, D2], fill: true, fillColor: cor_azul_eletrico, opacity: 0.16 })
    drawSegment({ points: [A2, B2], width: 0.035 })
    drawSegment({ points: [A2, D2], width: 0.035 })
    drawSegment({ points: [B2, D2], width: 0.04, color: cor_ciano })          // BD (diagonal)
})

pause()

// === (4) marcas do LAL (AB comum, ângulos retos, BC≅AD) — sem tocar nas diagonais ===
animation(separar, (s) => {
    const A1 = xf(A, s, cenABC, posABC), B1 = xf(B, s, cenABC, posABC), C1 = xf(C, s, cenABC, posABC)
    const B2 = xf(B, s, cenBAD, posBAD), A2 = xf(A, s, cenBAD, posBAD), D2 = xf(D, s, cenBAD, posBAD)
    // ABC
    drawSector({ points: [A1, B1, C1], radius: 0.35, fill: true, fillColor: cor_verde_neon, opacity: 0.6 })
    drawSegmentMeasureMark({ points: [A1, B1], size: 0.22, quantity: 2, color: cor_dourado })   // AB comum
    drawSegmentMeasureMark({ points: [B1, C1], size: 0.22, quantity: 1, color: cor_coral })      // BC
    // BAD
    drawSector({ points: [B2, A2, D2], radius: 0.35, fill: true, fillColor: cor_verde_neon, opacity: 0.6 })
    drawSegmentMeasureMark({ points: [A2, B2], size: 0.22, quantity: 2, color: cor_dourado })   // BA comum
    drawSegmentMeasureMark({ points: [A2, D2], size: 0.22, quantity: 1, color: cor_coral })      // AD
})

pause()   // <- aperte "Puxar triângulos para baixo"

// === (6) rótulos das cópias (o lápis escreve depois de descer) ===
animation(separar, (s) => {
    const A1 = xf(A, s, cenABC, posABC), B1 = xf(B, s, cenABC, posABC), C1 = xf(C, s, cenABC, posABC)
    const B2 = xf(B, s, cenBAD, posBAD), A2 = xf(A, s, cenBAD, posBAD), D2 = xf(D, s, cenBAD, posBAD)
    drawText({ text: "$A$", x: A1.x - 0.35, y: A1.y - 0.25, fontSize: 0.45, opacity: s - (1 - s) })
    drawText({ text: "$B$", x: B1.x + 0.2, y: B1.y - 0.25, fontSize: 0.45, opacity: s - (1 - s) })
    drawText({ text: "$C$", x: C1.x + 0.2, y: C1.y, fontSize: 0.45, opacity: s - (1 - s) })
    drawText({ text: "$B$", x: B2.x + 0.2, y: B2.y - 0.25, fontSize: 0.45, opacity: s - (1 - s) })
    drawText({ text: "$A$", x: A2.x - 0.35, y: A2.y - 0.25, fontSize: 0.45, opacity: s - (1 - s) })
    drawText({ text: "$D$", x: D2.x - 0.35, y: D2.y, fontSize: 0.45, opacity: s - (1 - s) })
})

pause()   // <- (você explica por que são congruentes)

// === (7) marca final: diagonais congruentes (AC ≅ BD) + conclusão ===
animation(separar, (s) => {
    const A1 = xf(A, s, cenABC, posABC), C1 = xf(C, s, cenABC, posABC)
    const B2 = xf(B, s, cenBAD, posBAD), D2 = xf(D, s, cenBAD, posBAD)
    drawText({ text: "$\\triangle ABC \\cong \\triangle BAD$ (LAL) $\\Rightarrow \\overline{AC} \\cong \\overline{BD}$", x: 0, y: -4.7, fontSize: 0.46, color: cor_rosa_choque, opacity: s })
    drawSegmentMeasureMark({ points: [C1, A1], size: 0.22, quantity: 3, color: cor_rosa_choque, opacity: s })
    drawSegmentMeasureMark({ points: [B2, D2], size: 0.22, quantity: 3, color: cor_rosa_choque, opacity: s })
})
