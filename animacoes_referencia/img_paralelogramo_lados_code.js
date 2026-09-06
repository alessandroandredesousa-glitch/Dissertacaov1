// IMAGEM ESTÁTICA — img_paralelogramo_lados.png (Figura 3.7)
// Paralelogramo ABCD e a diagonal AC: lados opostos congruentes (traços) e
// ângulos opostos congruentes (setores). Fundo BRANCO (lados/diagonal na cor padrão).
// Destino: imagem/3.3/img_paralelogramo_lados.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

const cor_coral = '#FF6B6B'
const cor_azul_eletrico = '#00B0FF'
const cor_roxo_neon = '#BF00FF'

const A = { x: -3, y: -1.5 }, B = { x: 2, y: -1.5 }
const C = { x: 3.5, y: 1.5 }, D = { x: -1.5, y: 1.5 }

// LADOS + DIAGONAL
drawSegment({ points: [A, B], width: 0.04 })
drawSegment({ points: [D, C], width: 0.04 })
drawSegment({ points: [B, C], width: 0.04 })
drawSegment({ points: [A, D], width: 0.04 })
drawSegment({ points: [A, C], width: 0.035 })   // diagonal AC

// lados opostos congruentes (AB=CD 1 traço; BC=DA 2 traços)
drawSegmentMeasureMark({ points: [A, B], size: 0.28, quantity: 1, color: cor_coral })
drawSegmentMeasureMark({ points: [D, C], size: 0.28, quantity: 1, color: cor_coral })
drawSegmentMeasureMark({ points: [B, C], size: 0.28, quantity: 2, color: cor_coral })
drawSegmentMeasureMark({ points: [A, D], size: 0.28, quantity: 2, color: cor_coral })

// ângulos opostos congruentes: Â=Ĉ (roxo), B̂=D̂ (azul)
drawSector({ points: [B, A, D], radius: 0.55, fill: true, fillColor: cor_roxo_neon, opacity: 0.55 })
drawSector({ points: [D, C, B], radius: 0.55, fill: true, fillColor: cor_roxo_neon, opacity: 0.55 })
drawSector({ points: [A, B, C], radius: 0.55, fill: true, fillColor: cor_azul_eletrico, opacity: 0.55 })
drawSector({ points: [C, D, A], radius: 0.55, fill: true, fillColor: cor_azul_eletrico, opacity: 0.55 })

// VÉRTICES + RÓTULOS
drawPoint({ x: A.x, y: A.y, size: 0.06 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y - 0.2, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.06 }); drawText({ text: "$B$", x: B.x + 0.25, y: B.y - 0.2, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.06 }); drawText({ text: "$C$", x: C.x + 0.2, y: C.y + 0.1, fontSize: 0.5 })
drawPoint({ x: D.x, y: D.y, size: 0.06 }); drawText({ text: "$D$", x: D.x - 0.35, y: D.y + 0.1, fontSize: 0.5 })
