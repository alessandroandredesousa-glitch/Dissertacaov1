// IMAGEM ESTÁTICA — img_tangente_perpendicular.png (Figura 4.7)
// A tangente t em T é perpendicular ao raio OT; qualquer outro ponto X de t
// satisfaz OX > OT = r (X é exterior). Cores da animação.
// Destino: imagem/4.3/img_tangente_perpendicular.png
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
const T = { x: 0, y: r }
const X = { x: 1.9, y: r }   // ponto qualquer da tangente

// circunferência + centro
drawCircle({ center: O, radius: r, fill: false, width: 0.04, color: cor_ciano })
drawPoint({ x: O.x, y: O.y, size: 0.09, color: cor_rosa_choque })
drawText({ text: "$O$", x: O.x - 0.35, y: O.y - 0.1, fontSize: 0.5, color: cor_rosa_choque })

// tangente t (horizontal em T)
drawSegment({ points: [{ x: -3, y: r }, { x: 3, y: r }], width: 0.035, color: cor_verde_neon })
drawText({ text: "$t$", x: 3.1, y: r + 0.05, fontSize: 0.45, color: cor_verde_neon })

// raio OT + ângulo reto em T
drawSegment({ points: [O, T], width: 0.03, color: cor_amarelo_neon })
drawSector({ points: [{ x: T.x + 1, y: T.y }, T, O], radius: 0.35, fill: true, fillColor: cor_verde_neon, opacity: 0.6 })
drawText({ text: "$r$", x: 0.2, y: r / 2, fontSize: 0.45, color: cor_amarelo_neon })
drawPoint({ x: T.x, y: T.y, size: 0.09, color: cor_rosa_choque }); drawText({ text: "$T$", x: T.x - 0.35, y: T.y + 0.2, fontSize: 0.45, color: cor_rosa_choque })

// oblíqua OX (X qualquer): OX > OT = r
drawSegment({ points: [O, X], width: 0.028, color: cor_coral })
drawPoint({ x: X.x, y: X.y, size: 0.08, color: cor_laranja }); drawText({ text: "$X$", x: X.x + 0.15, y: X.y + 0.25, fontSize: 0.45, color: cor_laranja })
drawText({ text: "$OX > r$", x: 1.15, y: 0.95, fontSize: 0.4, color: cor_coral })
