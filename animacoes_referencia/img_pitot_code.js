// IMAGEM ESTÁTICA — img_pitot.png (Figura 4.11)
// Quadrilatero ABCD circunscrito a uma circunferencia: de cada vertice os dois
// segmentos tangentes sao iguais (a, b, c, d). AB=a+b, BC=b+c, CD=c+d, DA=d+a
// => AB+CD = a+b+c+d = BC+DA.  Mesma base da animacao (pitot_ida.js, u=0).
// Destino: imagem/4.4.1/img_pitot.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_laranja = '#FF6600'
const cor_rosa_choque = '#FF1493'
const cor_azul_eletrico = '#00B0FF'
const cor_verde_menta = '#00FA9A'
const cor_dourado = '#FFD700'
const cor_a = cor_azul_eletrico   // AP = AS
const cor_b = cor_laranja         // BP = BQ
const cor_c = cor_verde_neon      // CQ = CR
const cor_d = cor_rosa_choque     // DR = DS

// === GEOMETRIA (incircunferencia + quadrilatero circunscrito) ===
const O = { x: 0, y: -0.2 }
const rho = 1.35
const aP = 250, aQ = 330, aR = 60, aS = 150
function T(th) { return { x: O.x + rho * Math.cos(th * Math.PI / 180), y: O.y + rho * Math.sin(th * Math.PI / 180) } }
function vert(ti, tj) {
    const a = ti * Math.PI / 180, b = tj * Math.PI / 180, Dt = Math.sin(b - a)
    return { x: O.x + rho * (Math.sin(b) - Math.sin(a)) / Dt, y: O.y + rho * (Math.cos(a) - Math.cos(b)) / Dt }
}
const P = T(aP), Q = T(aQ), R = T(aR), S = T(aS)
const A = vert(150, 250), B = vert(250, 330), C = vert(330, 420), D = vert(420, 510)

// incircunferencia + centro
drawCircle({ center: O, radius: rho, fill: false, width: 0.035, color: cor_ciano })
drawPoint({ x: O.x, y: O.y, size: 0.07, color: cor_rosa_choque })

// meia-lados coloridos por vertice (pares iguais na mesma cor)
drawSegment({ points: [A, P], width: 0.05, color: cor_a }); drawSegment({ points: [S, A], width: 0.05, color: cor_a })
drawSegment({ points: [P, B], width: 0.05, color: cor_b }); drawSegment({ points: [B, Q], width: 0.05, color: cor_b })
drawSegment({ points: [Q, C], width: 0.05, color: cor_c }); drawSegment({ points: [C, R], width: 0.05, color: cor_c })
drawSegment({ points: [R, D], width: 0.05, color: cor_d }); drawSegment({ points: [D, S], width: 0.05, color: cor_d })

// vertices + pontos de tangencia
drawPoint({ x: A.x, y: A.y, size: 0.08, color: cor_dourado }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y + 0.1, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: B.x, y: B.y, size: 0.08, color: cor_dourado }); drawText({ text: "$B$", x: B.x - 0.05, y: B.y - 0.5, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: C.x, y: C.y, size: 0.08, color: cor_dourado }); drawText({ text: "$C$", x: C.x + 0.2, y: C.y - 0.1, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: D.x, y: D.y, size: 0.08, color: cor_dourado }); drawText({ text: "$D$", x: D.x - 0.05, y: D.y + 0.25, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: P.x, y: P.y, size: 0.055, color: cor_rosa_choque }); drawText({ text: "$P$", x: P.x - 0.1, y: P.y - 0.45, fontSize: 0.34, color: cor_rosa_choque })
drawPoint({ x: Q.x, y: Q.y, size: 0.055, color: cor_rosa_choque }); drawText({ text: "$Q$", x: Q.x + 0.2, y: Q.y - 0.15, fontSize: 0.34, color: cor_rosa_choque })
drawPoint({ x: R.x, y: R.y, size: 0.055, color: cor_rosa_choque }); drawText({ text: "$R$", x: R.x + 0.15, y: R.y + 0.15, fontSize: 0.34, color: cor_rosa_choque })
drawPoint({ x: S.x, y: S.y, size: 0.055, color: cor_rosa_choque }); drawText({ text: "$S$", x: S.x - 0.4, y: S.y + 0.1, fontSize: 0.34, color: cor_rosa_choque })

// rotulos a, b, c, d (posicoes explicitas — ajuste manual, um por um)
drawText({ text: "$a$", x: -1.51, y: -1.43, fontSize: 0.4, color: cor_a })   // em AP
drawText({ text: "$a$", x: -1.95, y: -0.23, fontSize: 0.4, color: cor_a })   // em SA
drawText({ text: "$b$", x: 0.09, y: -2.04, fontSize: 0.4, color: cor_b })    // em PB
drawText({ text: "$b$", x: 1.12, y: -1.67, fontSize: 0.4, color: cor_b })    // em BQ
drawText({ text: "$c$", x: 1.89, y: -0.31, fontSize: 0.4, color: cor_c })    // em QC
drawText({ text: "$c$", x: 1.58, y: 0.84, fontSize: 0.4, color: cor_c })     // em CR
drawText({ text: "$d$", x: 0.11, y: 1.69, fontSize: 0.4, color: cor_d })     // em RD
drawText({ text: "$d$", x: -1.04, y: 1.38, fontSize: 0.4, color: cor_d })    // em DS
