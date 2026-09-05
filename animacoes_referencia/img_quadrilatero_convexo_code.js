// =====================================================
// IMAGEM ESTÁTICA — img_quadrilatero_convexo.png (Figura 3.1)
// Baseada em quad_soma_angulos.js: quadrilátero convexo ABCD, os 4 ângulos
//   internos (mesmas cores do vídeo) e as 2 diagonais (AC e BD).
// FUNDO BRANCO: lados, pontos e rótulos na cor PADRÃO (adaptam); setores mantêm
//   as cores do vídeo; diagonais TRACEJADAS na cor padrão (o ciano/amarelo do
//   vídeo sumiria no branco).
// Destino no site: imagem/3.1/img_quadrilatero_convexo.png
// =====================================================
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

const cor_azul_eletrico = '#00B0FF'
const cor_coral = '#FF6B6B'
const cor_verde_menta = '#00FA9A'
const cor_dourado = '#FFD700'

const A = { x: -3.3, y: 1.6 }
const B = { x: 2.8, y: 2.4 }
const C = { x: 3.4, y: -1.6 }
const D = { x: -2.4, y: -2.6 }

// LADOS
drawSegment({ points: [A, B], width: 0.03 })
drawSegment({ points: [B, C], width: 0.03 })
drawSegment({ points: [C, D], width: 0.03 })
drawSegment({ points: [D, A], width: 0.03 })

// DIAGONAIS (tracejadas, cor padrão)
drawSegment({ points: [A, C], width: 0.025, lineDash: [0.15, 0.1] })
drawSegment({ points: [B, D], width: 0.025, lineDash: [0.15, 0.1] })

// ÂNGULOS INTERNOS (mesmas cores do vídeo)
drawSector({ points: [D, A, B], radius: 0.6, fill: true, fillColor: cor_coral, opacity: 0.85 })
drawSector({ points: [A, B, C], radius: 0.6, fill: true, fillColor: cor_azul_eletrico, opacity: 0.85 })
drawSector({ points: [B, C, D], radius: 0.6, fill: true, fillColor: cor_dourado, opacity: 0.85 })
drawSector({ points: [C, D, A], radius: 0.6, fill: true, fillColor: cor_verde_menta, opacity: 0.85 })

// RÓTULOS DOS ÂNGULOS (cor padrão, legível no branco)
drawText({ text: "$\\hat{A}$", x: -2.59, y: 0.93, fontSize: 0.45 })
drawText({ text: "$\\hat{B}$", x: 2.26, y: 1.51, fontSize: 0.45 })
drawText({ text: "$\\hat{C}$", x: 2.76, y: -1.26, fontSize: 0.45 })
drawText({ text: "$\\hat{D}$", x: -1.9, y: -2.03, fontSize: 0.45 })

// VÉRTICES + RÓTULOS
drawPoint({ x: A.x, y: A.y, size: 0.06 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y + 0.28, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.06 }); drawText({ text: "$B$", x: B.x + 0.25, y: B.y + 0.28, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.06 }); drawText({ text: "$C$", x: C.x + 0.3, y: C.y - 0.15, fontSize: 0.5 })
drawPoint({ x: D.x, y: D.y, size: 0.06 }); drawText({ text: "$D$", x: D.x - 0.45, y: D.y - 0.15, fontSize: 0.5 })
