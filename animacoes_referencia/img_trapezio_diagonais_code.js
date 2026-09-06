// IMAGEM ESTÁTICA — img_trapezio_diagonais.png (Figura 3.6)
// Diagonais AC e BD do trapézio isósceles (congruentes). Mostra os ingredientes
// do LAL: laterais AD=BC (1 traço), ângulos da base Â=B̂ (dourado) e as
// diagonais congruentes (3 traços). Fundo BRANCO.
// Destino: imagem/3.2/img_trapezio_diagonais.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

const cor_coral = '#FF6B6B'
const cor_dourado = '#FFD700'

const A = { x: -3, y: -1.3 }, B = { x: 3, y: -1.3 }
const D = { x: -1.5, y: 1.8 }, C = { x: 1.5, y: 1.8 }

// LADOS
drawSegment({ points: [A, B], width: 0.04 })
drawSegment({ points: [D, C], width: 0.04 })
drawSegment({ points: [B, C], width: 0.03 })
drawSegment({ points: [D, A], width: 0.03 })

// DIAGONAIS
drawSegment({ points: [A, C], width: 0.035 })
drawSegment({ points: [B, D], width: 0.035 })

// laterais congruentes (1 traço) e diagonais congruentes (3 traços)
drawSegmentMeasureMark({ points: [A, D], size: 0.25, quantity: 1, color: cor_coral })
drawSegmentMeasureMark({ points: [B, C], size: 0.25, quantity: 1, color: cor_coral })
drawSegmentMeasureMark({ points: [A, C], size: 0.25, quantity: 3, color: cor_dourado })
drawSegmentMeasureMark({ points: [B, D], size: 0.25, quantity: 3, color: cor_dourado })

// ângulos da base congruentes
drawSector({ points: [B, A, D], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: 0.85 })
drawSector({ points: [A, B, C], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: 0.85 })

// VÉRTICES + RÓTULOS
drawPoint({ x: A.x, y: A.y, size: 0.06 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y - 0.15, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.06 }); drawText({ text: "$B$", x: B.x + 0.2, y: B.y - 0.15, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.06 }); drawText({ text: "$C$", x: C.x + 0.2, y: C.y + 0.1, fontSize: 0.5 })
drawPoint({ x: D.x, y: D.y, size: 0.06 }); drawText({ text: "$D$", x: D.x - 0.4, y: D.y + 0.1, fontSize: 0.5 })
