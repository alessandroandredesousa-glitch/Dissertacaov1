// IMAGEM ESTÁTICA — img_paralelogramo_diagonais.png (Figura 3.8)
// As diagonais AC e BD cortam-se no ponto médio M (AM=CM, BM=DM).
// Fundo BRANCO (lados/diagonais na cor padrão).
// Destino: imagem/3.3/img_paralelogramo_diagonais.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

const cor_rosa_choque = '#FF1493'

const A = { x: -3, y: -1.5 }, B = { x: 2, y: -1.5 }
const C = { x: 3.5, y: 1.5 }, D = { x: -1.5, y: 1.5 }
const M = { x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 }

// LADOS
drawSegment({ points: [A, B], width: 0.04 })
drawSegment({ points: [D, C], width: 0.04 })
drawSegment({ points: [B, C], width: 0.04 })
drawSegment({ points: [A, D], width: 0.04 })

// DIAGONAIS
drawSegment({ points: [A, C], width: 0.035 })
drawSegment({ points: [B, D], width: 0.035 })

// ponto médio comum M
drawPoint({ x: M.x, y: M.y, size: 0.08, color: cor_rosa_choque })
drawText({ text: "$M$", x: M.x + 0.15, y: M.y + 0.28, fontSize: 0.5, color: cor_rosa_choque })

// AM=CM (1 traço) e BM=DM (2 traços)
drawSegmentMeasureMark({ points: [A, M], size: 0.26, quantity: 1, color: cor_rosa_choque })
drawSegmentMeasureMark({ points: [M, C], size: 0.26, quantity: 1, color: cor_rosa_choque })
drawSegmentMeasureMark({ points: [B, M], size: 0.26, quantity: 2, color: cor_rosa_choque })
drawSegmentMeasureMark({ points: [M, D], size: 0.26, quantity: 2, color: cor_rosa_choque })

// VÉRTICES + RÓTULOS
drawPoint({ x: A.x, y: A.y, size: 0.06 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y - 0.2, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.06 }); drawText({ text: "$B$", x: B.x + 0.25, y: B.y - 0.2, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.06 }); drawText({ text: "$C$", x: C.x + 0.2, y: C.y + 0.1, fontSize: 0.5 })
drawPoint({ x: D.x, y: D.y, size: 0.06 }); drawText({ text: "$D$", x: D.x - 0.35, y: D.y + 0.1, fontSize: 0.5 })
