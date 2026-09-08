// IMAGEM ESTÁTICA — img_circunferencia_elementos.png (Figura 4.1)
// Circunferência de centro O e raio r; pontos interior, sobre e exterior.
// Cores iguais às da animação. Destino: imagem/4.1/img_circunferencia_elementos.png
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

// circunferência
drawCircle({ center: O, radius: r, fill: false, width: 0.04, color: cor_ciano })

// centro O + raio OP = r
const P = ptAng(35)
drawSegment({ points: [O, P], width: 0.03, color: cor_amarelo_neon })
drawPoint({ x: O.x, y: O.y, size: 0.09, color: cor_rosa_choque }); drawText({ text: "$O$", x: O.x - 0.35, y: O.y - 0.05, fontSize: 0.5, color: cor_rosa_choque })
drawPoint({ x: P.x, y: P.y, size: 0.08, color: cor_amarelo_neon }); drawText({ text: "$P$", x: P.x + 0.2, y: P.y + 0.1, fontSize: 0.45, color: cor_amarelo_neon })
drawText({ text: "$r$", x: (O.x + P.x) / 2 + 0.05, y: (O.y + P.y) / 2 + 0.25, fontSize: 0.45, color: cor_amarelo_neon })

// ponto INTERIOR (OQ < r)
const Qi = { x: O.x + 1.2 * Math.cos(135 * Math.PI / 180), y: O.y + 1.2 * Math.sin(135 * Math.PI / 180) }
drawPoint({ x: Qi.x, y: Qi.y, size: 0.08, color: cor_laranja }); drawText({ text: "interior", x: Qi.x - 0.3, y: Qi.y + 0.4, fontSize: 0.38, color: cor_laranja })

// ponto SOBRE (OQ = r)
const Qs = ptAng(205)
drawPoint({ x: Qs.x, y: Qs.y, size: 0.08, color: cor_verde_neon }); drawText({ text: "sobre", x: Qs.x - 0.45, y: Qs.y - 0.25, fontSize: 0.38, color: cor_verde_neon })

// ponto EXTERIOR (OQ > r)
const Qe = { x: O.x + 3.1 * Math.cos(315 * Math.PI / 180), y: O.y + 3.1 * Math.sin(315 * Math.PI / 180) }
drawPoint({ x: Qe.x, y: Qe.y, size: 0.08, color: cor_laranja }); drawText({ text: "exterior", x: Qe.x + 0.2, y: Qe.y - 0.1, fontSize: 0.38, color: cor_laranja })
