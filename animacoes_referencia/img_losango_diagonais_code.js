// IMAGEM ESTÁTICA — img_losango_diagonais.png (Figura 3.16)
// Losango ABCD com os quatro lados congruentes; diagonais AC e BD cortam-se
// em M, perpendicularmente. Cores iguais às da animação (fundo branco).
// Destino: imagem/3.5/img_losango_diagonais.png
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

// === GEOMETRIA (losango centrado; mesmo formato da animação) ===
const A = { x: -1.618, y: -1 }, B = { x: 0.618, y: -1 }, C = { x: 1.618, y: 1 }, D = { x: -0.618, y: 1 }
const M = { x: 0, y: 0 }   // interseção das diagonais

// LADOS
drawSegment({ points: [A, B], width: 0.045 })
drawSegment({ points: [B, C], width: 0.045 })
drawSegment({ points: [C, D], width: 0.045 })
drawSegment({ points: [D, A], width: 0.045 })

// DIAGONAIS (cores da animação)
drawSegment({ points: [A, C], width: 0.035, color: cor_amarelo_neon })
drawSegment({ points: [B, D], width: 0.035, color: cor_ciano })

// os quatro lados congruentes (1 traço cada) — cor da animação
drawSegmentMeasureMark({ points: [A, B], size: 0.24, quantity: 1, color: cor_verde_menta })
drawSegmentMeasureMark({ points: [B, C], size: 0.24, quantity: 1, color: cor_verde_menta })
drawSegmentMeasureMark({ points: [C, D], size: 0.24, quantity: 1, color: cor_verde_menta })
drawSegmentMeasureMark({ points: [D, A], size: 0.24, quantity: 1, color: cor_verde_menta })

// ângulo reto em M (diagonais perpendiculares)
drawSector({ points: [A, M, B], radius: 0.3, fill: true, fillColor: cor_verde_neon, opacity: 0.6 })

// ponto M
drawPoint({ x: M.x, y: M.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$M$", x: M.x + 0.2, y: M.y + 0.28, fontSize: 0.5, color: cor_rosa_choque })

// VÉRTICES + RÓTULOS
drawPoint({ x: A.x, y: A.y, size: 0.06 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y - 0.1, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.06 }); drawText({ text: "$B$", x: B.x + 0.25, y: B.y - 0.1, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.06 }); drawText({ text: "$C$", x: C.x + 0.25, y: C.y + 0.1, fontSize: 0.5 })
drawPoint({ x: D.x, y: D.y, size: 0.06 }); drawText({ text: "$D$", x: D.x - 0.4, y: D.y + 0.1, fontSize: 0.5 })
