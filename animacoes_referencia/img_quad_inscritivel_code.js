// IMAGEM ESTÁTICA — img_quad_inscritivel.png (Figura 4.23)
// IDA: ABCD inscrito. Â (em A) subtende o arco BCD; Ĉ (em C) subtende o arco BAD.
// Os dois arcos completam a circunferencia (360°) => Â + Ĉ = 180°. Base: animacao 4.7 (P1).
// Destino: imagem/4.7/img_quad_inscritivel.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_laranja = '#FF6600'
const cor_rosa_choque = '#FF1493'
const cor_azul_eletrico = '#00B0FF'
const cor_coral = '#FF6B6B'
const cor_verde_menta = '#00FA9A'
const cor_dourado = '#FFD700'

const PI = Math.PI
const O = { x: 0, y: 0 }, R = 2.0
const gA = 190, gB = 280, gC = 20, gD = 110
function ptC(deg) { return { x: O.x + R * Math.cos(deg * PI / 180), y: O.y + R * Math.sin(deg * PI / 180) } }
function angleDeg(P, X, Y) {
    const ux = X.x - P.x, uy = X.y - P.y, vx = Y.x - P.x, vy = Y.y - P.y
    return Math.round(Math.abs(Math.atan2(ux * vy - uy * vx, ux * vx + uy * vy)) * 180 / PI)
}
function arcDeg(d0, d1, cor, w) {
    drawCurve({ x: t => O.x + R * Math.cos(t), y: t => O.y + R * Math.sin(t), tStart: d0 * PI / 180, tEnd: d1 * PI / 180, steps: 100, width: w, color: cor })
}
const A = ptC(gA), B = ptC(gB), C = ptC(gC), D = ptC(gD)

// os dois arcos (juntos = circunferencia inteira): BCD (coral) e BAD (azul)
arcDeg(gB, gD + 360, cor_coral, 0.06)        // arco BCD (B 280 -> C 20 -> D 110)
arcDeg(gD, gB, cor_azul_eletrico, 0.06)      // arco BAD (D 110 -> A 190 -> B 280)

// quadrilatero ABCD inscrito
drawSegment({ points: [A, B], width: 0.028, color: cor_verde_menta })
drawSegment({ points: [B, C], width: 0.028, color: cor_verde_menta })
drawSegment({ points: [C, D], width: 0.028, color: cor_verde_menta })
drawSegment({ points: [D, A], width: 0.028, color: cor_verde_menta })

// angulos Â (subtende BCD, coral) e Ĉ (subtende BAD, azul)
drawSector({ points: [D, A, B], radius: 0.5, fill: true, fillColor: cor_coral, opacity: 0.55 })
drawSector({ points: [B, C, D], radius: 0.5, fill: true, fillColor: cor_azul_eletrico, opacity: 0.55 })

// centro + pontos + rotulos
drawPoint({ x: O.x, y: O.y, size: 0.06, color: cor_rosa_choque })
drawPoint({ x: A.x, y: A.y, size: 0.09, color: cor_dourado }); drawText({ text: "$A$", x: A.x - 0.5, y: A.y - 0.07, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: B.x, y: B.y, size: 0.09, color: cor_dourado }); drawText({ text: "$B$", x: B.x - 0.03, y: B.y - 0.44, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: C.x, y: C.y, size: 0.09, color: cor_dourado }); drawText({ text: "$C$", x: C.x + 0.32, y: C.y - 0.10, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: D.x, y: D.y, size: 0.09, color: cor_dourado }); drawText({ text: "$D$", x: D.x - 0.08, y: D.y + 0.42, fontSize: 0.42, color: cor_dourado })

// rotulos dos angulos, junto aos vertices
drawText({ text: "$\\hat{A}$", x: A.x + 0.42, y: A.y + 0.02, fontSize: 0.4, color: cor_coral })
drawText({ text: "$\\hat{C}$", x: C.x - 0.55, y: C.y + 0.02, fontSize: 0.4, color: cor_azul_eletrico })
