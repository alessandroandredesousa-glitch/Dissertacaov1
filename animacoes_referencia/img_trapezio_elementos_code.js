// IMAGEM ESTÁTICA — img_trapezio_elementos.png (Figura 3.3)
// Elementos do trapézio isósceles: bases, laterais e altura. Fundo BRANCO
// (lados/pontos/rótulos na cor padrão; altura tracejada em coral).
// Destino: imagem/3.2/img_trapezio_elementos.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

const cor_coral = '#FF6B6B'

const A = { x: -3, y: -1.3 }, B = { x: 3, y: -1.3 }
const D = { x: -1.5, y: 1.8 }, C = { x: 1.5, y: 1.8 }

// LADOS
drawSegment({ points: [A, B], width: 0.04 })
drawSegment({ points: [D, C], width: 0.04 })
drawSegment({ points: [B, C], width: 0.03 })
drawSegment({ points: [D, A], width: 0.03 })

// ALTURA (tracejada, no meio)
drawSegment({ points: [{ x: 0, y: 1.8 }, { x: 0, y: -1.3 }], width: 0.02, lineDash: [0.12, 0.1], color: cor_coral })
drawText({ text: "$h$", x: 0.15, y: 0.2, fontSize: 0.45, color: cor_coral })

// NOMES DOS ELEMENTOS
drawText({ text: "base maior", x: -0.95, y: -1.9, fontSize: 0.4 })
drawText({ text: "base menor", x: -0.95, y: 2.2, fontSize: 0.4 })
drawText({ text: "lateral", x: -3.5, y: 0.55, fontSize: 0.38 })
drawText({ text: "lateral", x: 2.05, y: 0.55, fontSize: 0.38 })

// VÉRTICES + RÓTULOS
drawPoint({ x: A.x, y: A.y, size: 0.06 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y - 0.15, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.06 }); drawText({ text: "$B$", x: B.x + 0.2, y: B.y - 0.15, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.06 }); drawText({ text: "$C$", x: C.x + 0.2, y: C.y + 0.1, fontSize: 0.5 })
drawPoint({ x: D.x, y: D.y, size: 0.06 }); drawText({ text: "$D$", x: D.x - 0.4, y: D.y + 0.1, fontSize: 0.5 })
