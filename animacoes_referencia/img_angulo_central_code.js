// IMAGEM ESTÁTICA — img_angulo_central.png (Figura 4.14)
// Ângulo central AÔB (vértice no centro, lados = raios) e o arco AB que ele
// subtende. Base da animacao 4.5.
// Destino: imagem/4.5/img_angulo_central.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_amarelo_neon = '#FFFF00'
const cor_rosa_choque = '#FF1493'
const cor_roxo_neon = '#BF00FF'
const cor_dourado = '#FFD700'

const PI = Math.PI
const O = { x: 0, y: 0.3 }
const R = 2.0
function ptOn(deg) { return { x: O.x + R * Math.cos(deg * PI / 180), y: O.y + R * Math.sin(deg * PI / 180) } }
const A = ptOn(210), B = ptOn(330)

// circunferencia
drawCircle({ center: O, radius: R, fill: false, width: 0.035, color: cor_ciano })
// arco AB subtendido (destacado, arco menor por baixo: 210 -> 330 passando por 270)
drawCurve({ x: t => O.x + R * Math.cos(t), y: t => O.y + R * Math.sin(t), tStart: 210 * PI / 180, tEnd: 330 * PI / 180, steps: 60, width: 0.06, color: cor_verde_neon })
// raios OA, OB + angulo central
drawSegment({ points: [O, A], width: 0.03, color: cor_amarelo_neon })
drawSegment({ points: [O, B], width: 0.03, color: cor_amarelo_neon })
drawSector({ points: [A, O, B], radius: 0.6, fill: true, fillColor: cor_roxo_neon, opacity: 0.5 })
// pontos + rotulos
drawPoint({ x: O.x, y: O.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$O$", x: O.x - 0.35, y: O.y + 0.05, fontSize: 0.45, color: cor_rosa_choque })
drawPoint({ x: A.x, y: A.y, size: 0.09, color: cor_dourado }); drawText({ text: "$A$", x: A.x - 0.45, y: A.y - 0.05, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: B.x, y: B.y, size: 0.09, color: cor_dourado }); drawText({ text: "$B$", x: B.x + 0.2, y: B.y - 0.05, fontSize: 0.45, color: cor_dourado })
// rotulo do angulo central + do arco
drawText({ text: "$A\\hat{O}B$", x: O.x - 0.35, y: O.y - 1.0, fontSize: 0.42, color: cor_roxo_neon })
drawText({ text: "arco $AB$", x: O.x - 0.55, y: O.y - 2.55, fontSize: 0.42, color: cor_verde_neon })
