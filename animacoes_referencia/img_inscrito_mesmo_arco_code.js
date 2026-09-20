// IMAGEM ESTÁTICA — img_inscrito_mesmo_arco.png (Figura 4.19)
// Corolário 1: dois angulos inscritos que subtendem o MESMO arco AB sao
// congruentes (cada um = metade do mesmo central). AV̂B = AŴB = α.
// Destino: imagem/4.5/img_inscrito_mesmo_arco.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_laranja = '#FF6600'
const cor_rosa_choque = '#FF1493'
const cor_azul_eletrico = '#00B0FF'
const cor_verde_menta = '#00FA9A'
const cor_dourado = '#FFD700'

const PI = Math.PI
const O = { x: 0, y: 0 }, R = 2.0
function ptOn(deg) { return { x: O.x + R * Math.cos(deg * PI / 180), y: O.y + R * Math.sin(deg * PI / 180) } }
const A = ptOn(210), B = ptOn(330), V = ptOn(115), W = ptOn(55)

drawCircle({ center: O, radius: R, fill: false, width: 0.035, color: cor_ciano })
// arco AB subtendido (que nao contem V, W)
drawCurve({ x: t => O.x + R * Math.cos(t), y: t => O.y + R * Math.sin(t), tStart: 210 * PI / 180, tEnd: 330 * PI / 180, steps: 60, width: 0.06, color: cor_verde_neon })
// cordas dos dois angulos
drawSegment({ points: [V, A], width: 0.028, color: cor_azul_eletrico })
drawSegment({ points: [V, B], width: 0.028, color: cor_azul_eletrico })
drawSegment({ points: [W, A], width: 0.028, color: cor_verde_menta })
drawSegment({ points: [W, B], width: 0.028, color: cor_verde_menta })
// os dois inscritos, mesma cor (congruentes) + rotulo α em cada
drawSector({ points: [A, V, B], radius: 0.55, fill: true, fillColor: cor_laranja, opacity: 0.5 }); drawText({ text: "$\\alpha$", x: V.x - 0.1, y: V.y - 0.75, fontSize: 0.42, color: cor_laranja })
drawSector({ points: [A, W, B], radius: 0.55, fill: true, fillColor: cor_laranja, opacity: 0.5 }); drawText({ text: "$\\alpha$", x: W.x - 0.1, y: W.y - 0.75, fontSize: 0.42, color: cor_laranja })
// pontos
drawPoint({ x: O.x, y: O.y, size: 0.06, color: cor_rosa_choque })
drawPoint({ x: V.x, y: V.y, size: 0.09, color: cor_dourado }); drawText({ text: "$V$", x: V.x - 0.4, y: V.y + 0.25, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: W.x, y: W.y, size: 0.09, color: cor_dourado }); drawText({ text: "$W$", x: W.x + 0.2, y: W.y + 0.25, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: A.x, y: A.y, size: 0.09, color: cor_dourado }); drawText({ text: "$A$", x: A.x - 0.45, y: A.y - 0.05, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: B.x, y: B.y, size: 0.09, color: cor_dourado }); drawText({ text: "$B$", x: B.x + 0.2, y: B.y - 0.05, fontSize: 0.45, color: cor_dourado })
