// IMAGEM ESTÁTICA — img_posicoes_reta_circ.png (Figura 4.6)
// As três posições de uma reta em relação à circunferência (d vs r):
// exterior (d>r, 0 pontos), tangente (d=r, 1 ponto), secante (d<r, 2 pontos).
// Cores da animação. Destino: imagem/4.3/img_posicoes_reta_circ.png
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

// circunferência + centro
drawCircle({ center: O, radius: r, fill: false, width: 0.04, color: cor_ciano })
drawPoint({ x: O.x, y: O.y, size: 0.09, color: cor_rosa_choque })
drawText({ text: "$O$", x: O.x - 0.35, y: O.y - 0.1, fontSize: 0.5, color: cor_rosa_choque })

// EXTERIOR (d > r): reta acima, sem pontos
const yE = 3.3
drawSegment({ points: [{ x: -3.2, y: yE }, { x: 3.2, y: yE }], width: 0.035, color: cor_coral })
drawText({ text: "exterior ($d > r$)", x: -0.3, y: yE + 0.4, fontSize: 0.4, color: cor_coral })

// TANGENTE (d = r): toca em T
const yT = r
drawSegment({ points: [{ x: -3.2, y: yT }, { x: 3.2, y: yT }], width: 0.035, color: cor_verde_neon })
drawPoint({ x: 0, y: r, size: 0.09, color: cor_rosa_choque }); drawText({ text: "$T$", x: 0.2, y: r + 0.25, fontSize: 0.45, color: cor_rosa_choque })
drawText({ text: "tangente ($d = r$)", x: 2.4, y: yT + 0.3, fontSize: 0.4, color: cor_verde_neon })

// SECANTE (d < r): dois pontos
const yS = 0.8
const xs = Math.sqrt(r * r - yS * yS)
drawSegment({ points: [{ x: -3.2, y: yS }, { x: 3.2, y: yS }], width: 0.035, color: cor_azul_eletrico })
drawPoint({ x: -xs, y: yS, size: 0.08, color: cor_rosa_choque })
drawPoint({ x: xs, y: yS, size: 0.08, color: cor_rosa_choque })
drawText({ text: "secante ($d < r$)", x: 2.4, y: yS + 0.3, fontSize: 0.4, color: cor_azul_eletrico })
