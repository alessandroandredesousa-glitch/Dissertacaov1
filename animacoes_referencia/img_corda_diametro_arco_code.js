// IMAGEM ESTÁTICA — img_corda_diametro_arco.png (Figura 4.2)
// Corda AB, diâmetro CD e o arco de extremos A e B.
// Cores iguais às da animação. drawArc EM RADIANOS.
// Destino: imagem/4.1/img_corda_diametro_arco.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_amarelo_neon = '#FFFF00'
const cor_laranja = '#FF6600'
const cor_rosa_choque = '#FF1493'
const cor_roxo_neon = '#BF00FF'
const cor_azul_eletrico = '#00B0FF'
const cor_coral = '#FF6B6B'
const cor_verde_menta = '#00FA9A'
const cor_dourado = '#FFD700'
const cor_titulo = '#FF4500'

// === GEOMETRIA ===
const O = { x: 0, y: 0 }
const r = 2.3
function ptAng(a) { const t = a * Math.PI / 180; return { x: O.x + r * Math.cos(t), y: O.y + r * Math.sin(t) } }
const A = ptAng(160), B = ptAng(20)    // corda / arco (extremos A e B)
const C = ptAng(250), D = ptAng(70)    // diâmetro (C e D opostos, passa por O)

// circunferência
drawCircle({ center: O, radius: r, fill: false, width: 0.04, color: cor_ciano })

// arco AB (o arco de cima, entre A e B) — drawArc em RADIANOS
drawArc({ center: O, radius: r, startAngle: 20 * Math.PI / 180, endAngle: 160 * Math.PI / 180, steps: 90, width: 0.08, color: cor_verde_neon })
drawText({ text: "arco $AB$", x: 0, y: 2.75, fontSize: 0.4, color: cor_verde_neon })

// diâmetro CD (passa por O)
drawSegment({ points: [C, D], width: 0.035, color: cor_roxo_neon })
drawPoint({ x: C.x, y: C.y, size: 0.08, color: cor_roxo_neon }); drawText({ text: "$C$", x: C.x - 0.4, y: C.y - 0.15, fontSize: 0.45, color: cor_roxo_neon })
drawPoint({ x: D.x, y: D.y, size: 0.08, color: cor_roxo_neon }); drawText({ text: "$D$", x: D.x + 0.2, y: D.y + 0.1, fontSize: 0.45, color: cor_roxo_neon })
drawText({ text: "diâmetro", x: 1.0, y: 0.5, fontSize: 0.38, color: cor_roxo_neon })

// corda AB
drawSegment({ points: [A, B], width: 0.04, color: cor_coral })
drawPoint({ x: A.x, y: A.y, size: 0.08, color: cor_coral }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y + 0.1, fontSize: 0.45, color: cor_coral })
drawPoint({ x: B.x, y: B.y, size: 0.08, color: cor_coral }); drawText({ text: "$B$", x: B.x + 0.2, y: B.y + 0.1, fontSize: 0.45, color: cor_coral })
drawText({ text: "corda", x: -0.4, y: 1.35, fontSize: 0.38, color: cor_coral })

// centro O
drawPoint({ x: O.x, y: O.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$O$", x: O.x - 0.35, y: O.y - 0.1, fontSize: 0.45, color: cor_rosa_choque })
