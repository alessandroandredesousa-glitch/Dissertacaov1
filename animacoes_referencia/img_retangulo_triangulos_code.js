// IMAGEM ESTÁTICA — img_retangulo_triangulos.png (Figura 3.15)
// Triângulos ABC (roxo) e BAD (azul): lado comum AB, ângulos retos em A e B,
// BC ≅ AD -> LAL -> AC ≅ BD. Cores iguais às da animação (fundo branco).
// Destino: imagem/3.5/img_retangulo_triangulos.png
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

// === GEOMETRIA (retângulo centrado) ===
const A = { x: -2.2, y: -1.3 }, B = { x: 2.2, y: -1.3 }, C = { x: 2.2, y: 1.3 }, D = { x: -2.2, y: 1.3 }

// os dois triângulos comparados
drawPolygon({ points: [A, B, C], fill: true, fillColor: cor_roxo_neon, opacity: 0.16 })   // ABC
drawPolygon({ points: [B, A, D], fill: true, fillColor: cor_azul_eletrico, opacity: 0.16 })// BAD

// LADOS do retângulo
drawSegment({ points: [A, B], width: 0.045 })
drawSegment({ points: [B, C], width: 0.045 })
drawSegment({ points: [C, D], width: 0.045 })
drawSegment({ points: [D, A], width: 0.045 })

// DIAGONAIS (cores da animação)
drawSegment({ points: [A, C], width: 0.035, color: cor_amarelo_neon })
drawSegment({ points: [B, D], width: 0.035, color: cor_ciano })

// ângulos retos em A e B
drawSector({ points: [D, A, B], radius: 0.35, fill: true, fillColor: cor_verde_neon, opacity: 0.55 })
drawSector({ points: [A, B, C], radius: 0.35, fill: true, fillColor: cor_verde_neon, opacity: 0.55 })

// AB comum (2 traços dourado) ; BC ≅ AD (1 traço coral)
drawSegmentMeasureMark({ points: [A, B], size: 0.26, quantity: 2, color: cor_dourado })
drawSegmentMeasureMark({ points: [B, C], size: 0.26, quantity: 1, color: cor_coral })
drawSegmentMeasureMark({ points: [A, D], size: 0.26, quantity: 1, color: cor_coral })

// VÉRTICES + RÓTULOS
drawPoint({ x: A.x, y: A.y, size: 0.06 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y - 0.2, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.06 }); drawText({ text: "$B$", x: B.x + 0.25, y: B.y - 0.2, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.06 }); drawText({ text: "$C$", x: C.x + 0.25, y: C.y + 0.1, fontSize: 0.5 })
drawPoint({ x: D.x, y: D.y, size: 0.06 }); drawText({ text: "$D$", x: D.x - 0.4, y: D.y + 0.1, fontSize: 0.5 })
