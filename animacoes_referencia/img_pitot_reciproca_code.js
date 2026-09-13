// IMAGEM ESTÁTICA — img_pitot_reciproca.png (Figura 4.12)
// Volta — SETUP: o centro I no encontro das bissetrizes de A e B; a
// circunferencia ω de centro I é tangente a tres lados (AB, BC, AD). O lado CD
// ainda nao e necessariamente tangente (isso e o que a demonstracao mostra).
// A construcao do D' (absurdo) fica na Figura 4.13 (img_pitot_absurdo).
// Destino: imagem/4.4.1/img_pitot_reciproca.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_rosa_choque = '#FF1493'
const cor_azul_eletrico = '#00B0FF'
const cor_coral = '#FF6B6B'
const cor_verde_menta = '#00FA9A'
const cor_dourado = '#FFD700'
const cor_lapis = '#AAAAAA'

// === GEOMETRIA (I = centro de ω na origem) ===
const O = { x: 0, y: 0 }
const rv = 1.2
const A = { x: -0.84, y: -1.2 }
const B = { x: 0.84, y: -1.2 }
const dAD = { x: -0.342, y: 0.94 }
const dBC = { x: 0.342, y: 0.94 }
const C = { x: B.x + 2.6 * dBC.x, y: B.y + 2.6 * dBC.y }
function tangPhi(px, py) {
    const Rc = Math.hypot(px, py), al = Math.atan2(py, px), be = Math.acos(rv / Rc)
    const dd = (x) => Math.abs(((x - 340 + 540) % 360) - 180)
    const c1 = al + be, c2 = al - be
    return dd(c1 * 180 / Math.PI) > dd(c2 * 180 / Math.PI) ? c1 : c2
}
const phi = tangPhi(C.x - O.x, C.y - O.y)
const cphi = Math.cos(phi), sphi = Math.sin(phi)
const tDl = (rv - ((A.x - O.x) * cphi + (A.y - O.y) * sphi)) / (dAD.x * cphi + dAD.y * sphi)
const Dl = { x: A.x + tDl * dAD.x, y: A.y + tDl * dAD.y }   // D'
const Ttop = { x: O.x + rv * cphi, y: O.y + rv * sphi }
const tD = tDl + 0.95
const D = { x: A.x + tD * dAD.x, y: A.y + tD * dAD.y }       // vertice real D
const biA = { x: A.x + 1.18 * (O.x - A.x), y: A.y + 1.18 * (O.y - A.y) }
const biB = { x: B.x + 1.18 * (O.x - B.x), y: B.y + 1.18 * (O.y - B.y) }

// quadrilatero ABCD fechado (CD coral)
drawSegment({ points: [A, B], width: 0.03, color: cor_verde_menta })
drawSegment({ points: [B, C], width: 0.03, color: cor_verde_menta })
drawSegment({ points: [C, D], width: 0.03, color: cor_coral })
drawSegment({ points: [D, A], width: 0.03, color: cor_verde_menta })

// bissetrizes de A e B (tracejadas, lapis) -> I; e ω
drawSegment({ points: [A, biA], width: 0.02, lineDash: [0.12, 0.1], color: cor_lapis })
drawSegment({ points: [B, biB], width: 0.02, lineDash: [0.12, 0.1], color: cor_lapis })
drawCircle({ center: O, radius: rv, fill: false, width: 0.035, color: cor_ciano })
drawText({ text: "$\\omega$", x: O.x - 0.55, y: O.y - 0.3, fontSize: 0.45, color: cor_ciano })

// pontos e rotulos (setup: I e os vertices A, B, C, D)
drawPoint({ x: O.x, y: O.y, size: 0.07, color: cor_rosa_choque }); drawText({ text: "$I$", x: O.x + 0.18, y: O.y + 0.02, fontSize: 0.42, color: cor_rosa_choque })
drawPoint({ x: A.x, y: A.y, size: 0.08, color: cor_dourado }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y - 0.1, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: B.x, y: B.y, size: 0.08, color: cor_dourado }); drawText({ text: "$B$", x: B.x + 0.18, y: B.y - 0.28, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: C.x, y: C.y, size: 0.08, color: cor_dourado }); drawText({ text: "$C$", x: C.x + 0.2, y: C.y + 0.05, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: D.x, y: D.y, size: 0.08, color: cor_dourado }); drawText({ text: "$D$", x: D.x - 0.4, y: D.y + 0.12, fontSize: 0.42, color: cor_dourado })
