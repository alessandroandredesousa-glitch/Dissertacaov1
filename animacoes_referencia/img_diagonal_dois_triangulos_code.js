// =====================================================
// IMAGEM ESTÁTICA — img_diagonal_dois_triangulos.png (Figura 3.2)
// Baseada em quad_soma_angulos.js: a diagonal AC decompõe ABCD nos triângulos
//   ABC (roxo) e ACD (verde), cada um somando 180°.
// FUNDO BRANCO: lados, diagonal, pontos e rótulos na cor PADRÃO; triângulos com
//   preenchimento leve nas cores do vídeo (opacidade um pouco maior p/ o branco).
// Destino no site: imagem/3.1/img_diagonal_dois_triangulos.png
// =====================================================
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

const cor_verde_neon = '#39FF14'
const cor_roxo_neon = '#BF00FF'

const A = { x: -3.3, y: 1.6 }
const B = { x: 2.8, y: 2.4 }
const C = { x: 3.4, y: -1.6 }
const D = { x: -2.4, y: -2.6 }

// TRIÂNGULOS (preenchimento leve)
drawPolygon({ points: [A, B, C], fill: true, fillColor: cor_roxo_neon, opacity: 0.2 })
drawPolygon({ points: [A, C, D], fill: true, fillColor: cor_verde_neon, opacity: 0.2 })

// LADOS DO QUADRILÁTERO
drawSegment({ points: [A, B], width: 0.03 })
drawSegment({ points: [B, C], width: 0.03 })
drawSegment({ points: [C, D], width: 0.03 })
drawSegment({ points: [D, A], width: 0.03 })

// DIAGONAL AC (destaque)
drawSegment({ points: [A, C], width: 0.045 })

// RÓTULOS 180° EM CADA TRIÂNGULO
drawText({ text: "$180^\\circ$", x: 1.28, y: 0.65, fontSize: 0.5 })
drawText({ text: "$180^\\circ$", x: -0.89, y: -1.16, fontSize: 0.5 })

// VÉRTICES + RÓTULOS
drawPoint({ x: A.x, y: A.y, size: 0.06 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y + 0.28, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.06 }); drawText({ text: "$B$", x: B.x + 0.25, y: B.y + 0.28, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.06 }); drawText({ text: "$C$", x: C.x + 0.3, y: C.y - 0.15, fontSize: 0.5 })
drawPoint({ x: D.x, y: D.y, size: 0.06 }); drawText({ text: "$D$", x: D.x - 0.45, y: D.y - 0.15, fontSize: 0.5 })
