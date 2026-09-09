// IMAGEM ESTÁTICA — img_circuncentro_circunscrita.png (Figura 4.5)
// As mediatrizes concorrem em O; a circunferência de centro O e raio r = OA
// passa por A, B e C (circunscrita). OA = OB = OC. Cores da animação.
// Destino: imagem/4.2/img_circuncentro_circunscrita.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

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
const A = { x: -2.5, y: -1 }, B = { x: 2.5, y: -1 }, C = { x: 0.5, y: 2.2 }
const O = { x: 0, y: -0.3375 }
const r = Math.sqrt((A.x - O.x) ** 2 + (A.y - O.y) ** 2)
function mediatriz(U, V, back, fwd) {
    const M = { x: (U.x + V.x) / 2, y: (U.y + V.y) / 2 }
    const dx = V.x - U.x, dy = V.y - U.y, L = Math.sqrt(dx * dx + dy * dy)
    const px = -dy / L, py = dx / L
    return [{ x: M.x - back * px, y: M.y - back * py }, { x: M.x + fwd * px, y: M.y + fwd * py }]
}

// circunferência circunscrita
drawCircle({ center: O, radius: r, fill: false, width: 0.04, color: cor_ciano })

// mediatrizes (tracejadas) concorrendo em O
drawSegment({ points: mediatriz(A, B, 2.4, 3.0), width: 0.02, lineDash: [0.14, 0.1], color: cor_verde_menta })
drawSegment({ points: mediatriz(B, C, 2.0, 2.4), width: 0.02, lineDash: [0.14, 0.1], color: cor_azul_eletrico })

// raios OA = OB = OC (com traço de congruência)
drawSegment({ points: [O, A], width: 0.028, color: cor_amarelo_neon })
drawSegment({ points: [O, B], width: 0.028, color: cor_amarelo_neon })
drawSegment({ points: [O, C], width: 0.028, color: cor_amarelo_neon })
drawSegmentMeasureMark({ points: [O, A], size: 0.24, quantity: 1, color: cor_coral })
drawSegmentMeasureMark({ points: [O, B], size: 0.24, quantity: 1, color: cor_coral })
drawSegmentMeasureMark({ points: [O, C], size: 0.24, quantity: 1, color: cor_coral })

// centro O
drawPoint({ x: O.x, y: O.y, size: 0.09, color: cor_rosa_choque }); drawText({ text: "$O$", x: O.x - 0.35, y: O.y - 0.05, fontSize: 0.5, color: cor_rosa_choque })

// vértices
drawPoint({ x: A.x, y: A.y, size: 0.08 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y - 0.15, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.08 }); drawText({ text: "$B$", x: B.x + 0.25, y: B.y - 0.15, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.08 }); drawText({ text: "$C$", x: C.x + 0.2, y: C.y + 0.15, fontSize: 0.5 })
