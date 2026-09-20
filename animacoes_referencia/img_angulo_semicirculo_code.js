// IMAGEM ESTÁTICA — img_angulo_semicirculo.png (Figura 4.20)
// Corolário 2 (Tales): AB é diâmetro => o angulo inscrito AV̂B é reto (90°).
// Destino: imagem/4.5/img_angulo_semicirculo.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_amarelo_neon = '#FFFF00'
const cor_rosa_choque = '#FF1493'
const cor_azul_eletrico = '#00B0FF'
const cor_dourado = '#FFD700'

const PI = Math.PI
const O = { x: 0, y: 0 }, R = 2.0
function ptOn(deg) { return { x: O.x + R * Math.cos(deg * PI / 180), y: O.y + R * Math.sin(deg * PI / 180) } }
const A = ptOn(180), B = ptOn(0), V = ptOn(115)

drawCircle({ center: O, radius: R, fill: false, width: 0.035, color: cor_ciano })
drawSegment({ points: [A, B], width: 0.03, color: cor_amarelo_neon })   // diametro
drawSegment({ points: [V, A], width: 0.03, color: cor_azul_eletrico })
drawSegment({ points: [V, B], width: 0.03, color: cor_azul_eletrico })
// angulo reto em V (drawSector -> simbolo de reto a 90°)
drawSector({ points: [A, V, B], radius: 0.5, fill: true, fillColor: cor_verde_neon, opacity: 0.5 })
drawText({ text: "$90^\\circ$", x: V.x + 0.15, y: V.y - 0.75, fontSize: 0.42, color: cor_verde_neon })
// pontos
drawPoint({ x: O.x, y: O.y, size: 0.07, color: cor_rosa_choque }); drawText({ text: "$O$", x: O.x - 0.1, y: O.y - 0.42, fontSize: 0.4, color: cor_rosa_choque })
drawPoint({ x: V.x, y: V.y, size: 0.09, color: cor_dourado }); drawText({ text: "$V$", x: V.x - 0.1, y: V.y + 0.35, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: A.x, y: A.y, size: 0.09, color: cor_dourado }); drawText({ text: "$A$", x: A.x - 0.45, y: A.y, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: B.x, y: B.y, size: 0.09, color: cor_dourado }); drawText({ text: "$B$", x: B.x + 0.2, y: B.y, fontSize: 0.45, color: cor_dourado })
