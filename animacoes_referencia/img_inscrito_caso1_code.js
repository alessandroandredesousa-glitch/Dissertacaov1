// IMAGEM ESTÁTICA — img_inscrito_caso1.png (Figura 4.16)
// Caso 1 (um lado passa pelo centro): VB é diâmetro; ΔOVA é isósceles (OV=OA),
// angulos da base = α; AÔB é externo => 2α. Base da animacao 4.5 (P2).
// Destino: imagem/4.5/img_inscrito_caso1.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_amarelo_neon = '#FFFF00'
const cor_laranja = '#FF6600'
const cor_rosa_choque = '#FF1493'
const cor_roxo_neon = '#BF00FF'
const cor_azul_eletrico = '#00B0FF'
const cor_verde_menta = '#00FA9A'
const cor_dourado = '#FFD700'

const PI = Math.PI
const O = { x: 0, y: 0 }, R = 2.0
function ptOn(deg) { return { x: O.x + R * Math.cos(deg * PI / 180), y: O.y + R * Math.sin(deg * PI / 180) } }
const V = ptOn(90), B = ptOn(270), A = ptOn(205)

drawCircle({ center: O, radius: R, fill: false, width: 0.035, color: cor_ciano })
drawSegment({ points: [V, B], width: 0.03, color: cor_amarelo_neon })   // diametro (lado por O)
drawSegment({ points: [V, A], width: 0.03, color: cor_verde_menta })    // corda
drawSegment({ points: [O, A], width: 0.03, color: cor_amarelo_neon })   // raio OA
drawPolygon({ points: [O, V, A], fill: true, fillColor: cor_azul_eletrico, opacity: 0.13 })
drawSegmentMeasureMark({ points: [O, V], size: 0.16, quantity: 1, color: cor_amarelo_neon })
drawSegmentMeasureMark({ points: [O, A], size: 0.16, quantity: 1, color: cor_amarelo_neon })
// angulos: α em V e em A; 2α em O
drawSector({ points: [A, V, B], radius: 0.55, fill: true, fillColor: cor_laranja, opacity: 0.5 }); drawText({ text: "$\\alpha$", x: V.x - 0.15, y: V.y - 0.85, fontSize: 0.42, color: cor_laranja })
drawSector({ points: [O, A, V], radius: 0.45, fill: true, fillColor: cor_laranja, opacity: 0.5 }); drawText({ text: "$\\alpha$", x: A.x + 0.55, y: A.y + 0.2, fontSize: 0.42, color: cor_laranja })
drawSector({ points: [A, O, B], radius: 0.55, fill: true, fillColor: cor_roxo_neon, opacity: 0.5 }); drawText({ text: "$2\\alpha$", x: O.x - 0.95, y: O.y - 0.2, fontSize: 0.42, color: cor_roxo_neon })
// pontos
drawPoint({ x: O.x, y: O.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$O$", x: O.x + 0.2, y: O.y + 0.1, fontSize: 0.42, color: cor_rosa_choque })
drawPoint({ x: V.x, y: V.y, size: 0.09, color: cor_dourado }); drawText({ text: "$V$", x: V.x + 0.05, y: V.y + 0.35, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: A.x, y: A.y, size: 0.09, color: cor_dourado }); drawText({ text: "$A$", x: A.x - 0.45, y: A.y, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: B.x, y: B.y, size: 0.09, color: cor_dourado }); drawText({ text: "$B$", x: B.x + 0.05, y: B.y - 0.45, fontSize: 0.45, color: cor_dourado })
