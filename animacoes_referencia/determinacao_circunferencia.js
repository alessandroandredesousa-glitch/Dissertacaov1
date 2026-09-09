// ANIMAÇÃO: 4.2 Determinação de uma Circunferência (por três pontos)
// Segue o texto da seção:
//  - por 2 pontos A,B: infinitas circunferências (centro desliza na mediatriz de AB) [param]
//  - 3º ponto C (não colinear) -> centro também na mediatriz de BC
//  - as duas mediatrizes se cruzam em O (único) -> circunferência circunscrita (OA=OB=OC)
//  - observação: colineares -> mediatrizes paralelas -> sem circunferência
// OBS Conexty: usar \hat (não \widehat). drawArc/ângulos em RADIANOS. Fundo preto.

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

// === GEOMETRIA (A, B, C não colineares) ===
const A = { x: -2.5, y: -1 }
const B = { x: 2.5, y: -1 }
const C = { x: 0.5, y: 2.2 }
// circuncentro O (equidistante de A, B, C) e raio r
const O = { x: 0, y: -0.3375 }
const r = Math.sqrt((A.x - O.x) ** 2 + (A.y - O.y) ** 2)

function dist(P, Q) { return Math.sqrt((P.x - Q.x) ** 2 + (P.y - Q.y) ** 2) }
// segmento da mediatriz de [U,V] (perpendicular pelo ponto médio), com comprimentos back/fwd
function mediatriz(U, V, back, fwd) {
    const M = { x: (U.x + V.x) / 2, y: (U.y + V.y) / 2 }
    const dx = V.x - U.x, dy = V.y - U.y, L = Math.sqrt(dx * dx + dy * dy)
    const px = -dy / L, py = dx / L
    return [{ x: M.x - back * px, y: M.y - back * py }, { x: M.x + fwd * px, y: M.y + fwd * py }]
}

// TÍTULO
drawText({ text: "\\begin{center}\\textbf{Determinação de uma circunferência}\\end{center}", x: 0.2, y: 6.3, color: cor_titulo })

pause()

// === dois pontos A e B ===
drawPoint({ x: A.x, y: A.y, size: 0.08 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y - 0.15, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.08 }); drawText({ text: "$B$", x: B.x + 0.25, y: A.y - 0.15, fontSize: 0.5 })

pause()

// === mediatriz de AB (dashed) ===
const medAB = mediatriz(A, B, 2.6, 4.2)
drawSegment({ points: medAB, width: 0.02, lineDash: [0.14, 0.1], color: cor_verde_menta })
drawText({ text: "mediatriz de $\\overline{AB}$", x: -1.13, y: -1.49, fontSize: 0.3, color: cor_verde_menta })

pause()

// === por 2 pontos: infinitas circunferências (centro desliza na mediatriz) [param] ===
const deslizar = param({ value: 0.3, min: 0, max: 1, step: 0.001, buttons: [{ value: 0, time: 2 }, { value: 1, time: 2.5 }, { value: 0.3, time: 2 }], label: "Deslizar o centro na mediatriz de AB" })
animation(deslizar, (s) => {
    const yc = 1.8 - 3.2 * s
    const Cc = { x: 0, y: yc }
    drawCircle({ center: Cc, radius: dist(Cc, A), fill: false, width: 0.025, color: cor_coral })
    drawPoint({ x: Cc.x, y: Cc.y, size: 0.07, color: cor_laranja })
    drawText({ text: "por $A$ e $B$: infinitas circunferências", x: 0.09, y: -4.54, fontSize: 0.42, color: cor_coral })
})

pause()   // <- deslize o centro (toda posição dá uma circunferência por A e B)

// === terceiro ponto C (não colinear) ===
drawPoint({ x: C.x, y: C.y, size: 0.08 }); drawText({ text: "$C$", x: C.x + 0.2, y: C.y + 0.15, fontSize: 0.5 })
drawText({ text: "e para passar também por $C$?", x: 2.66, y: 2.95, fontSize: 0.3, color: cor_dourado })

pause()

// === mediatriz de BC: o centro tem de estar nela também ===
const medBC = mediatriz(B, C, 2.2, 2.6)
drawSegment({ points: medBC, width: 0.02, lineDash: [0.14, 0.1], color: cor_azul_eletrico })
drawText({ text: "mediatriz de $\\overline{BC}$", x: 4.19, y: 1.96, fontSize: 0.3, color: cor_azul_eletrico })

pause()

// === as duas mediatrizes se cruzam em O (único) ===
drawPoint({ x: O.x, y: O.y, size: 0.1, color: cor_rosa_choque })
drawText({ text: "$O$", x: O.x - 0.35, y: O.y + 0.05, fontSize: 0.5, color: cor_rosa_choque })
drawArrow({
    points: [{ x: -0.41, y: 0.32 },{ x: -0.22, y: 1.78 }, { x: -1.31, y: 1.59 }], size: 0.2, width: 0.03, color: cor_rosa_choque
})
drawText({ text: "as mediatrizes se cruzam em um único $O$", x: -3.46, y: 1.59, fontSize: 0.42, color: cor_rosa_choque, maxWidth: 4, lineHeight: 75 })


pause()

// === circunferência circunscrita: centro O, raio r; OA = OB = OC ===
drawCircle({ center: O, radius: r, fill: false, width: 0.04, color: cor_ciano })
drawSegment({ points: [O, A], width: 0.028, color: cor_amarelo_neon })
drawSegment({ points: [O, B], width: 0.028, color: cor_amarelo_neon })
drawSegment({ points: [O, C], width: 0.028, color: cor_amarelo_neon })
drawSegmentMeasureMark({ points: [O, A], size: 0.24, quantity: 1, color: cor_coral })
drawSegmentMeasureMark({ points: [O, B], size: 0.24, quantity: 1, color: cor_coral })
drawSegmentMeasureMark({ points: [O, C], size: 0.24, quantity: 1, color: cor_coral })
drawText({ text: "$OA = OB = OC = r$: circunferência circunscrita a $ABC$", x: 3.73, y: -2.61, fontSize: 0.35, color: cor_ciano, lineHeight: 74, maxWidth: 4})

pause()


// === observação: se colineares, mediatrizes paralelas -> sem circunferência ===
drawText({ text: "Se $A$, $B$, $C$ fossem colineares, as mediatrizes ficariam", x: 0.08, y: -5.64, fontSize: 0.38, color: cor_dourado })
drawText({ text: "paralelas e não haveria centro (sem circunferência).", x: 0.23, y: -6.57, fontSize: 0.38, color: cor_dourado })

pause()

// === 2ª circunferência (abaixo): mover C até alinhar -> degenera ===
// A2, B2 fixos; C2 desce até a reta A2B2. O circuncentro O2 (sobre x=0) é
// recalculado a cada quadro; quando C2 se alinha, O2 vai ao infinito e a
// circunferência degenera (mediatrizes paralelas).
const cy = -10.5
const A2 = { x: -2.2, y: cy - 1 }, B2 = { x: 2.2, y: cy - 1 }

// ponto A
drawPoint({ x: A2.x, y: A2.y, size: 0.08 }); drawText({ text: "$A$", x: A2.x - 0.4, y: A2.y - 0.15, fontSize: 0.45 })

pause()

// ponto B
drawPoint({ x: B2.x, y: B2.y, size: 0.08 }); drawText({ text: "$B$", x: B2.x + 0.25, y: B2.y - 0.15, fontSize: 0.45 })

pause()

// C (móvel), mediatrizes e círculo — revelados em ordem por pause() interno
const alinhar = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 3 }, { value: 0, time: 5 }], label: "Mover C até alinhar" })
animation(alinhar, (a) => {
    const yb = cy - 1
    const C2 = { x: 0.3, y: (cy + 1.8) + ((cy - 1) - (cy + 1.8)) * a }
    const yo = (C2.y * C2.y - yb * yb - (A2.x * A2.x - C2.x * C2.x)) / (2 * (C2.y - yb))
    const O2 = { x: 0, y: yo }
    const colinear = Math.abs(C2.y - yb) < 0.22

    // 1) ponto C
    drawPoint({ x: C2.x, y: C2.y, size: 0.09, color: cor_laranja }); drawText({ text: "$C$", x: C2.x + 0.2, y: C2.y + 0.15, fontSize: 0.45, color: cor_laranja })
    pause()
    // 2) mediatrizes (tracejadas) — ficam paralelas quando C alinha
    drawSegment({ points: mediatriz(A2, B2, 1.6, 2.2), width: 0.02, lineDash: [0.14, 0.1], color: cor_verde_menta })
    drawSegment({ points: mediatriz(B2, C2, 2.0, 2.4), width: 0.02, lineDash: [0.14, 0.1], color: cor_azul_eletrico })
    pause()
    // 3) círculo (só enquanto não degenera)
    if (!colinear) {
        drawCircle({ center: O2, radius: dist(O2, A2), fill: false, width: 0.035, color: cor_ciano })
        drawPoint({ x: O2.x, y: O2.y, size: 0.08, color: cor_rosa_choque })
    }
    drawText({ text: colinear ? "colineares: mediatrizes paralelas, a circunferência degenera" : "os três pontos determinam uma circunferência", x: -0.05, y: -14.59, fontSize: 0.4, color: colinear ? cor_dourado : cor_ciano })
})
