// IMAGEM ESTÁTICA — img_trapezio_isosceles_angulos.png (Figura 3.5)
// Transporte da lateral AD: a paralela por C encontra AB em P, formando o
// triângulo isósceles BPC (CP = CB); ângulos da base iguais -> Â = B̂. Fundo BRANCO.
// Destino: imagem/3.2/img_trapezio_isosceles_angulos.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

const cor_coral = '#FF6B6B'
const cor_roxo_neon = '#BF00FF'
const cor_dourado = '#FFD700'

const A = { x: -3, y: -1.3 }, B = { x: 3, y: -1.3 }
const D = { x: -1.5, y: 1.8 }, C = { x: 1.5, y: 1.8 }
const P = { x: 0, y: -1.3 }                       // pé de CP em AB (CP // AD)

// triângulo BPC (isósceles) em destaque leve
drawPolygon({ points: [B, P, C], fill: true, fillColor: cor_roxo_neon, opacity: 0.15 })

// LADOS do trapézio
drawSegment({ points: [A, B], width: 0.04 })
drawSegment({ points: [D, C], width: 0.04 })
drawSegment({ points: [B, C], width: 0.03 })
drawSegment({ points: [D, A], width: 0.03 })

// CP transportada (paralela a AD), tracejada
drawSegment({ points: [C, P], color: cor_coral, width: 0.03, lineDash: [0.14, 0.1] })

// CP = CB (laterais congruentes do triângulo BPC)
drawSegmentMeasureMark({ points: [P, C], size: 0.25, quantity: 2, color: cor_coral })
drawSegmentMeasureMark({ points: [B, C], size: 0.25, quantity: 2, color: cor_coral })

// ângulos iguais: Â (em A), ∠CPB (em P) e ∠CBP (em B)
drawSector({ points: [B, A, D], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: 0.85 })
drawSector({ points: [C, P, B], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: 0.85 })
drawSector({ points: [P, B, C], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: 0.85 })

// VÉRTICES + RÓTULOS
drawPoint({ x: A.x, y: A.y, size: 0.06 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y - 0.15, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.06 }); drawText({ text: "$B$", x: B.x + 0.2, y: B.y - 0.15, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.06 }); drawText({ text: "$C$", x: C.x + 0.2, y: C.y + 0.1, fontSize: 0.5 })
drawPoint({ x: D.x, y: D.y, size: 0.06 }); drawText({ text: "$D$", x: D.x - 0.4, y: D.y + 0.1, fontSize: 0.5 })
drawPoint({ x: P.x, y: P.y, size: 0.06, color: cor_coral }); drawText({ text: "$P$", x: P.x - 0.1, y: P.y - 0.4, fontSize: 0.5, color: cor_coral })
