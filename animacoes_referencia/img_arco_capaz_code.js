// IMAGEM ESTÁTICA — img_arco_capaz.png (Figura 4.21)
// Arco capaz de AB segundo α: dois pontos P e Q do arco veem AB sob o mesmo
// angulo α. Base da animacao 4.6.
// Destino: imagem/4.6/img_arco_capaz.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_amarelo_neon = '#FFFF00'
const cor_laranja = '#FF6600'
const cor_rosa_choque = '#FF1493'
const cor_verde_menta = '#00FA9A'
const cor_dourado = '#FFD700'

const PI = Math.PI
const alpha = 50, aHalf = 1.9
const OMv = aHalf / Math.tan(alpha * PI / 180)
const Rv = aHalf / Math.sin(alpha * PI / 180)
const ABy = 1.2
const A = { x: -aHalf, y: ABy }, B = { x: aHalf, y: ABy }
const O = { x: 0, y: ABy - OMv }
function ptC(deg) { return { x: O.x + Rv * Math.cos(deg * PI / 180), y: O.y + Rv * Math.sin(deg * PI / 180) } }

// segmento AB (a corda)
drawSegment({ points: [A, B], width: 0.03, color: cor_amarelo_neon })
// arco capaz Γ (arco maior, por baixo)
{
    const tA = Math.atan2(A.y - O.y, A.x - O.x)
    let tB = Math.atan2(B.y - O.y, B.x - O.x); if (tB < tA) tB += 2 * PI
    drawCurve({ x: t => O.x + Rv * Math.cos(t), y: t => O.y + Rv * Math.sin(t), tStart: tA, tEnd: tB, steps: 100, width: 0.05, color: cor_verde_neon })
}
// dois pontos do arco, cada um vendo AB sob α
const P = ptC(210), Q = ptC(330)
drawSegment({ points: [P, A], width: 0.026, color: cor_verde_menta })
drawSegment({ points: [P, B], width: 0.026, color: cor_verde_menta })
drawSegment({ points: [Q, A], width: 0.026, color: cor_verde_menta })
drawSegment({ points: [Q, B], width: 0.026, color: cor_verde_menta })
drawSector({ points: [A, P, B], radius: 0.5, fill: true, fillColor: cor_laranja, opacity: 0.5 }); drawText({ text: "$\\alpha$", x: P.x + 0.35, y: P.y + 0.1, fontSize: 0.42, color: cor_laranja })
drawSector({ points: [A, Q, B], radius: 0.5, fill: true, fillColor: cor_laranja, opacity: 0.5 }); drawText({ text: "$\\alpha$", x: Q.x - 0.6, y: Q.y + 0.1, fontSize: 0.42, color: cor_laranja })
// pontos + rotulos
drawPoint({ x: A.x, y: A.y, size: 0.09, color: cor_dourado }); drawText({ text: "$A$", x: A.x - 0.45, y: A.y + 0.05, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: B.x, y: B.y, size: 0.09, color: cor_dourado }); drawText({ text: "$B$", x: B.x + 0.2, y: B.y + 0.05, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: P.x, y: P.y, size: 0.09, color: cor_dourado }); drawText({ text: "$P$", x: P.x - 0.5, y: P.y - 0.1, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: Q.x, y: Q.y, size: 0.09, color: cor_dourado }); drawText({ text: "$Q$", x: Q.x + 0.25, y: Q.y - 0.1, fontSize: 0.45, color: cor_dourado })
drawText({ text: "arco capaz $\\Gamma$", x: -1.15, y: O.y - Rv - 0.05, fontSize: 0.4, color: cor_verde_neon })
