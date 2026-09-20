// IMAGEM ESTÁTICA — img_angulo_inscrito.png (Figura 4.15)
// Ângulo inscrito AV̂B (vértice V sobre a circunferência, lados = cordas VA, VB)
// subtendendo o arco AB que nao contem V. Base da animacao 4.5.
// Destino: imagem/4.5/img_angulo_inscrito.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_laranja = '#FF6600'
const cor_rosa_choque = '#FF1493'
const cor_azul_eletrico = '#00B0FF'
const cor_dourado = '#FFD700'

const PI = Math.PI
const O = { x: 0, y: 0.3 }
const R = 2.0
function ptOn(deg) { return { x: O.x + R * Math.cos(deg * PI / 180), y: O.y + R * Math.sin(deg * PI / 180) } }
const A = ptOn(210), B = ptOn(330), V = ptOn(90)

// circunferencia
drawCircle({ center: O, radius: R, fill: false, width: 0.035, color: cor_ciano })
// arco AB subtendido (o que NAO contem V): 210 -> 330 passando por 270
drawCurve({ x: t => O.x + R * Math.cos(t), y: t => O.y + R * Math.sin(t), tStart: 210 * PI / 180, tEnd: 330 * PI / 180, steps: 60, width: 0.06, color: cor_verde_neon })
// cordas VA, VB + angulo inscrito em V
drawSegment({ points: [V, A], width: 0.03, color: cor_azul_eletrico })
drawSegment({ points: [V, B], width: 0.03, color: cor_azul_eletrico })
drawSector({ points: [A, V, B], radius: 0.6, fill: true, fillColor: cor_laranja, opacity: 0.5 })
// centro (referencia) + pontos
drawPoint({ x: O.x, y: O.y, size: 0.06, color: cor_rosa_choque }); drawText({ text: "$O$", x: O.x - 0.35, y: O.y + 0.05, fontSize: 0.4, color: cor_rosa_choque })
drawPoint({ x: V.x, y: V.y, size: 0.09, color: cor_dourado }); drawText({ text: "$V$", x: V.x, y: V.y + 0.35, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: A.x, y: A.y, size: 0.09, color: cor_dourado }); drawText({ text: "$A$", x: A.x - 0.45, y: A.y - 0.05, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: B.x, y: B.y, size: 0.09, color: cor_dourado }); drawText({ text: "$B$", x: B.x + 0.2, y: B.y - 0.05, fontSize: 0.45, color: cor_dourado })
// rotulos do angulo inscrito + do arco
drawText({ text: "$A\\hat{V}B$", x: V.x + 0.25, y: V.y - 0.75, fontSize: 0.42, color: cor_laranja })
drawText({ text: "arco $AB$", x: O.x - 0.55, y: O.y - 2.55, fontSize: 0.42, color: cor_verde_neon })
