// IMAGEM ESTÁTICA — img_quad_inscritivel_reciproca.png (Figura 4.24)
// VOLTA: Γ passa por A, B, C. Diagonal AC. O arco de Γ do lado oposto a B e o
// arco capaz de AC sob 180°-B̂. Como D̂ = 180°-B̂ e D esta desse lado, D cai nesse
// arco => D ∈ Γ. Base: animacao 4.7 (P2).
// Destino: imagem/4.7/img_quad_inscritivel_reciproca.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_amarelo_neon = '#FFFF00'
const cor_laranja = '#FF6600'
const cor_rosa_choque = '#FF1493'
const cor_roxo_neon = '#BF00FF'
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
const Bhat = angleDeg(B, A, C)

// circunferencia Γ (por A, B, C)
drawCircle({ center: O, radius: R, fill: false, width: 0.03, color: cor_ciano })
// arco capaz de AC do lado oposto a B (de C 20 -> D 110 -> A 190), destacado
arcDeg(gC, gA, cor_verde_neon, 0.07)

// lados: ABC (dado) e CD, DA (D cai em Γ)
drawSegment({ points: [A, B], width: 0.028, color: cor_verde_menta })
drawSegment({ points: [B, C], width: 0.028, color: cor_verde_menta })
drawSegment({ points: [C, D], width: 0.026, color: cor_verde_menta })
drawSegment({ points: [D, A], width: 0.026, color: cor_verde_menta })
// diagonal AC
drawSegment({ points: [A, C], width: 0.026, color: cor_amarelo_neon })

// B̂ (roxo) em B e D̂ = 180-B̂ (laranja) em D
drawSector({ points: [A, B, C], radius: 0.55, fill: true, fillColor: cor_roxo_neon, opacity: 0.5 })
drawSector({ points: [A, D, C], radius: 0.5, fill: true, fillColor: cor_laranja, opacity: 0.55 })

// centro + pontos + rotulos
drawPoint({ x: O.x, y: O.y, size: 0.06, color: cor_rosa_choque })
drawPoint({ x: A.x, y: A.y, size: 0.09, color: cor_dourado }); drawText({ text: "$A$", x: A.x - 0.5, y: A.y - 0.07, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: B.x, y: B.y, size: 0.09, color: cor_dourado }); drawText({ text: "$B$", x: B.x - 0.03, y: B.y - 0.44, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: C.x, y: C.y, size: 0.09, color: cor_dourado }); drawText({ text: "$C$", x: C.x + 0.32, y: C.y - 0.10, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: D.x, y: D.y, size: 0.09, color: cor_verde_neon }); drawText({ text: "$D$", x: D.x - 0.08, y: D.y + 0.42, fontSize: 0.42, color: cor_verde_neon })

// rotulos dos angulos
drawText({ text: "$\\hat{B}=" + Bhat + "^\\circ$", x: B.x - 0.30, y: B.y + 0.62, fontSize: 0.34, color: cor_roxo_neon })
drawText({ text: "$\\hat{D}=180^\\circ-\\hat{B}$", x: D.x - 0.55, y: D.y - 0.55, fontSize: 0.32, color: cor_laranja })
drawText({ text: "$\\Gamma$", x: -R + 0.15, y: R - 0.35, fontSize: 0.42, color: cor_ciano })
