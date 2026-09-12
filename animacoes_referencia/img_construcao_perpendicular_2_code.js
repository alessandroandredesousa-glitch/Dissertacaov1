// IMAGEM ESTÁTICA — img_construcao_perpendicular_2.png (Figura 2.55)
// Perpendicular por um ponto P ∉ r (régua e compasso):
//  arco centrado em P corta r em A e B; arcos iguais em A e B cruzam-se em R;
//  a mediatriz de AB (reta por P e R) passa por P e é perpendicular a r.
//  Arcos de compasso como marca de lápis (cinza tracejado).
// Destino: imagem/2.9/img_construcao_perpendicular_2.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_rosa_choque = '#FF1493'
const cor_coral = '#FF6B6B'
const cor_dourado = '#FFD700'
const cor_lapis = '#AAAAAA'

// arco de compasso: circulo tracejado, cinza e com opacidade
function compasso(center, radius) {
    drawCurve({
        x: t => center.x + radius * Math.cos(t),
        y: t => center.y + radius * Math.sin(t),
        tStart: 0, tEnd: 2 * Math.PI, steps: 90,
        width: 0.018, color: cor_lapis, lineDash: [0.12, 0.1], opacity: 0.45
    })
}

// === GEOMETRIA ===
const ry = 0                          // reta r em y = 0
const dP = 1.7                        // altura de P acima de r
const P = { x: 0, y: ry + dP }
const rho = 2.3                       // raio do arco centrado em P (> dP)
const half = Math.sqrt(rho * rho - dP * dP)
const A = { x: -half, y: ry }
const B = { x: half, y: ry }
const rho3 = 2.0                      // raio dos arcos centrados em A e B
const Ry = ry - Math.sqrt(rho3 * rho3 - half * half)
const Pfoot = { x: 0, y: ry }

// reta r + ponto P (fora de r)
drawCurve({ x: t => t, y: t => ry, tStart: -4, tEnd: 4, steps: 2, width: 0.035, color: cor_ciano })
drawText({ text: "$r$", x: 4.15, y: ry, fontSize: 0.5, color: cor_ciano })
drawPoint({ x: P.x, y: P.y, size: 0.09, color: cor_dourado })
drawText({ text: "$P$", x: P.x + 0.2, y: P.y + 0.15, fontSize: 0.45, color: cor_dourado })

// arcos de compasso
compasso(P, rho)
compasso(A, rho3)
compasso(B, rho3)

// pontos A, B, R
drawPoint({ x: A.x, y: A.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$A$", x: A.x - 0.1, y: A.y - 0.5, fontSize: 0.42, color: cor_rosa_choque })
drawPoint({ x: B.x, y: B.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$B$", x: B.x - 0.1, y: B.y - 0.5, fontSize: 0.42, color: cor_rosa_choque })
drawPoint({ x: 0, y: Ry, size: 0.08, color: cor_verde_neon }); drawText({ text: "$R$", x: 0.2, y: Ry - 0.1, fontSize: 0.42, color: cor_verde_neon })

// mediatriz (por P e R): perpendicular a r, passando por P
drawSegment({ points: [{ x: 0, y: P.y + 0.5 }, { x: 0, y: Ry - 0.3 }], width: 0.03, color: cor_coral })
drawPoint({ x: Pfoot.x, y: Pfoot.y, size: 0.07, color: cor_rosa_choque })
drawSector({ points: [{ x: 1, y: ry }, Pfoot, P], radius: 0.32, fill: true, fillColor: cor_verde_neon, opacity: 0.5 })
drawText({ text: "mediatriz de $AB$: passa por $P$ e $\\perp r$", x: -2.2, y: P.y + 1.0, fontSize: 0.4, color: cor_coral })
