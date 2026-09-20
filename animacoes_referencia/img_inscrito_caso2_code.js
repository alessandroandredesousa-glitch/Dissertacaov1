// IMAGEM ESTÁTICA — img_inscrito_caso2.png (Figura 4.17)
// Caso 2 (centro interior): o diâmetro VC divide AV̂B em AV̂C + CV̂B, cada um do
// Caso 1. Base da animacao 4.5 (P3).
// Destino: imagem/4.5/img_inscrito_caso2.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_laranja = '#FF6600'
const cor_rosa_choque = '#FF1493'
const cor_roxo_neon = '#BF00FF'
const cor_amarelo_neon = '#FFFF00'
const cor_coral = '#FF6B6B'
const cor_verde_menta = '#00FA9A'
const cor_verde_neon = '#39FF14'
const cor_dourado = '#FFD700'

const PI = Math.PI
const O = { x: 0, y: 0 }, R = 2.0
function ptOn(deg) { return { x: O.x + R * Math.cos(deg * PI / 180), y: O.y + R * Math.sin(deg * PI / 180) } }
const V = ptOn(90), A = ptOn(200), B = ptOn(340), C = ptOn(270)

drawCircle({ center: O, radius: R, fill: false, width: 0.035, color: cor_ciano })
drawSegment({ points: [V, C], width: 0.028, lineDash: [0.12, 0.1], color: cor_amarelo_neon })  // diametro VC
drawSegment({ points: [V, A], width: 0.03, color: cor_verde_menta })
drawSegment({ points: [V, B], width: 0.03, color: cor_verde_menta })
drawSegment({ points: [O, A], width: 0.026, color: cor_roxo_neon })
drawSegment({ points: [O, B], width: 0.026, color: cor_roxo_neon })
// as duas parcelas do inscrito (Caso 1 cada)
drawSector({ points: [A, V, C], radius: 0.55, fill: true, fillColor: cor_laranja, opacity: 0.45 })
drawSector({ points: [C, V, B], radius: 0.75, fill: true, fillColor: cor_coral, opacity: 0.45 })
// pontos
drawPoint({ x: O.x, y: O.y, size: 0.07, color: cor_rosa_choque }); drawText({ text: "$O$", x: O.x - 0.15, y: O.y + 0.3, fontSize: 0.42, color: cor_rosa_choque })
drawPoint({ x: V.x, y: V.y, size: 0.09, color: cor_dourado }); drawText({ text: "$V$", x: V.x + 0.05, y: V.y + 0.35, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: A.x, y: A.y, size: 0.09, color: cor_dourado }); drawText({ text: "$A$", x: A.x - 0.45, y: A.y, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: B.x, y: B.y, size: 0.09, color: cor_dourado }); drawText({ text: "$B$", x: B.x + 0.2, y: B.y, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: C.x, y: C.y, size: 0.07, color: cor_verde_neon }); drawText({ text: "$C$", x: C.x + 0.05, y: C.y - 0.45, fontSize: 0.42, color: cor_verde_neon })
