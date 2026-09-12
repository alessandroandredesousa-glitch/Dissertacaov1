// IMAGEM ESTÁTICA — img_construcao_perpendicular_1.png (Figura 2.54)
// Perpendicular por um ponto P ∈ r (régua e compasso):
//  arco centrado em P corta r em A e B; arcos iguais em A e B cruzam-se em Q;
//  a reta PQ é perpendicular a r. Arcos de compasso como marca de lápis (cinza tracejado).
// Destino: imagem/2.9/img_construcao_perpendicular_1.png
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
const P = { x: 0, y: 0 }
const rho1 = 1.3                      // raio do arco centrado em P
const rho2 = 1.9                      // raio dos arcos centrados em A e B
const A = { x: -rho1, y: 0 }
const B = { x: rho1, y: 0 }
const Qy = Math.sqrt(rho2 * rho2 - rho1 * rho1)
const Q = { x: 0, y: Qy }

// reta r + ponto P
drawCurve({ x: t => t, y: t => 0, tStart: -4, tEnd: 4, steps: 2, width: 0.035, color: cor_ciano })
drawText({ text: "$r$", x: 4.15, y: 0, fontSize: 0.5, color: cor_ciano })
drawPoint({ x: P.x, y: P.y, size: 0.09, color: cor_dourado })
drawText({ text: "$P$", x: P.x - 0.1, y: P.y - 0.5, fontSize: 0.45, color: cor_dourado })

// arcos de compasso
compasso(P, rho1)
compasso(A, rho2)
compasso(B, rho2)

// pontos A, B, Q
drawPoint({ x: A.x, y: A.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$A$", x: A.x - 0.1, y: A.y - 0.5, fontSize: 0.42, color: cor_rosa_choque })
drawPoint({ x: B.x, y: B.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$B$", x: B.x - 0.1, y: B.y - 0.5, fontSize: 0.42, color: cor_rosa_choque })
drawPoint({ x: Q.x, y: Q.y, size: 0.09, color: cor_verde_neon }); drawText({ text: "$Q$", x: Q.x + 0.2, y: Q.y + 0.1, fontSize: 0.45, color: cor_verde_neon })

// reta PQ perpendicular a r + angulo reto em P
drawSegment({ points: [{ x: 0, y: -1.0 }, { x: 0, y: Qy + 0.5 }], width: 0.03, color: cor_coral })
drawSector({ points: [{ x: 1, y: 0 }, P, Q], radius: 0.32, fill: true, fillColor: cor_verde_neon, opacity: 0.5 })
drawText({ text: "$PQ \\perp r$", x: 0.35, y: -0.85, fontSize: 0.45, color: cor_coral })
