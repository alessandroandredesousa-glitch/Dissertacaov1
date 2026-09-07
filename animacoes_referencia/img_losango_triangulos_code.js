// IMAGEM ESTÁTICA — img_losango_triangulos.png (Figura 3.17)
// Triângulos ABM (roxo) e CBM (azul): AB ≅ CB, BM comum, AM ≅ CM -> LLL ->
// ângulo reto em M (diagonais ⊥) e bissecção de B. Cores iguais às da animação.
// Destino: imagem/3.5/img_losango_triangulos.png
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

// === GEOMETRIA (losango centrado) ===
const A = { x: -1.618, y: -1 }, B = { x: 0.618, y: -1 }, C = { x: 1.618, y: 1 }, D = { x: -0.618, y: 1 }
const M = { x: 0, y: 0 }

// os dois triângulos comparados (ABM e CBM)
drawPolygon({ points: [A, B, M], fill: true, fillColor: cor_roxo_neon, opacity: 0.16 })
drawPolygon({ points: [C, B, M], fill: true, fillColor: cor_azul_eletrico, opacity: 0.16 })

// LADOS do losango (referência)
drawSegment({ points: [A, B], width: 0.045 })
drawSegment({ points: [B, C], width: 0.045 })
drawSegment({ points: [C, D], width: 0.03, opacity: 0.3 })
drawSegment({ points: [D, A], width: 0.03, opacity: 0.3 })

// DIAGONAIS (cores da animação)
drawSegment({ points: [A, C], width: 0.035, color: cor_amarelo_neon })
drawSegment({ points: [B, D], width: 0.03, color: cor_ciano, opacity: 0.5 })

// AB ≅ CB (1 traço verde_menta) ; AM ≅ CM (2 traços coral) ; BM comum (3 traços dourado)
drawSegmentMeasureMark({ points: [A, B], size: 0.24, quantity: 1, color: cor_verde_menta })
drawSegmentMeasureMark({ points: [B, C], size: 0.24, quantity: 1, color: cor_verde_menta })
drawSegmentMeasureMark({ points: [M, A], size: 0.24, quantity: 2, color: cor_coral })
drawSegmentMeasureMark({ points: [M, C], size: 0.24, quantity: 2, color: cor_coral })
drawSegmentMeasureMark({ points: [B, M], size: 0.24, quantity: 3, color: cor_dourado })

// ângulo reto em M (perpendicularidade)
drawSector({ points: [A, M, B], radius: 0.3, fill: true, fillColor: cor_verde_neon, opacity: 0.6 })
drawSector({ points: [C, M, B], radius: 0.3, fill: true, fillColor: cor_verde_neon, opacity: 0.6 })

// VÉRTICES + RÓTULOS
drawPoint({ x: A.x, y: A.y, size: 0.06 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y - 0.1, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.06 }); drawText({ text: "$B$", x: B.x + 0.25, y: B.y - 0.1, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.06 }); drawText({ text: "$C$", x: C.x + 0.25, y: C.y + 0.1, fontSize: 0.5 })
drawPoint({ x: M.x, y: M.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$M$", x: M.x - 0.35, y: M.y + 0.28, fontSize: 0.5, color: cor_rosa_choque })
