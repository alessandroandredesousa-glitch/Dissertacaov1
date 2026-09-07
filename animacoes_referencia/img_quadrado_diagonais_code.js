// IMAGEM ESTÁTICA — img_quadrado_diagonais.png (Figura 3.18)
// Quadrado ABCD: diagonais congruentes E perpendiculares, ângulos de 45° e os
// quatro triângulos retângulos isósceles congruentes. Cores iguais às da animação.
// Destino: imagem/3.5/img_quadrado_diagonais.png
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

// === GEOMETRIA (quadrado centrado) ===
const A = { x: -1.5, y: -1.5 }, B = { x: 1.5, y: -1.5 }, C = { x: 1.5, y: 1.5 }, D = { x: -1.5, y: 1.5 }
const M = { x: 0, y: 0 }

// os quatro triângulos (cores da animação: roxo, azul, verde_menta, coral)
drawPolygon({ points: [A, B, M], fill: true, fillColor: cor_roxo_neon, opacity: 0.12 })
drawPolygon({ points: [B, C, M], fill: true, fillColor: cor_azul_eletrico, opacity: 0.12 })
drawPolygon({ points: [C, D, M], fill: true, fillColor: cor_verde_menta, opacity: 0.12 })
drawPolygon({ points: [D, A, M], fill: true, fillColor: cor_coral, opacity: 0.12 })

// LADOS
drawSegment({ points: [A, B], width: 0.045 })
drawSegment({ points: [B, C], width: 0.045 })
drawSegment({ points: [C, D], width: 0.045 })
drawSegment({ points: [D, A], width: 0.045 })

// DIAGONAIS (cores da animação)
drawSegment({ points: [A, C], width: 0.035, color: cor_amarelo_neon })
drawSegment({ points: [B, D], width: 0.035, color: cor_ciano })

// AM = BM = CM = DM (1 traço dourado) — meia-diagonais iguais
drawSegmentMeasureMark({ points: [M, A], size: 0.22, quantity: 1, color: cor_dourado })
drawSegmentMeasureMark({ points: [M, B], size: 0.22, quantity: 1, color: cor_dourado })
drawSegmentMeasureMark({ points: [M, C], size: 0.22, quantity: 1, color: cor_dourado })
drawSegmentMeasureMark({ points: [M, D], size: 0.22, quantity: 1, color: cor_dourado })

// ângulo reto em M (perpendiculares)
drawSector({ points: [A, M, B], radius: 0.3, fill: true, fillColor: cor_verde_neon, opacity: 0.6 })

// ângulos de 45° em cada vértice (a diagonal bissecta o ângulo reto)
drawSector({ points: [D, A, C], radius: 0.4, fill: true, fillColor: cor_rosa_choque, opacity: 0.3 })
drawSector({ points: [A, B, D], radius: 0.4, fill: true, fillColor: cor_rosa_choque, opacity: 0.3 })
drawSector({ points: [B, C, A], radius: 0.4, fill: true, fillColor: cor_rosa_choque, opacity: 0.3 })
drawSector({ points: [C, D, B], radius: 0.4, fill: true, fillColor: cor_rosa_choque, opacity: 0.3 })

// ponto M
drawPoint({ x: M.x, y: M.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$M$", x: M.x + 0.18, y: M.y + 0.28, fontSize: 0.45, color: cor_rosa_choque })

// VÉRTICES + RÓTULOS
drawPoint({ x: A.x, y: A.y, size: 0.06 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y - 0.15, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.06 }); drawText({ text: "$B$", x: B.x + 0.25, y: B.y - 0.15, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.06 }); drawText({ text: "$C$", x: C.x + 0.25, y: C.y + 0.1, fontSize: 0.5 })
drawPoint({ x: D.x, y: D.y, size: 0.06 }); drawText({ text: "$D$", x: D.x - 0.4, y: D.y + 0.1, fontSize: 0.5 })
