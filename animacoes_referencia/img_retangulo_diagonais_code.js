// IMAGEM ESTÁTICA — img_retangulo_diagonais.png (Figura 3.14)
// Retângulo ABCD com os quatro ângulos retos e as diagonais AC e BD.
// Cores iguais às da animação (fundo branco). Destino: imagem/3.5/img_retangulo_diagonais.png
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

// LADOS
drawSegment({ points: [A, B], width: 0.045 })
drawSegment({ points: [B, C], width: 0.045 })
drawSegment({ points: [C, D], width: 0.045 })
drawSegment({ points: [D, A], width: 0.045 })

// DIAGONAIS (cores da animação)
drawSegment({ points: [A, C], width: 0.035, color: cor_amarelo_neon })
drawSegment({ points: [B, D], width: 0.035, color: cor_ciano })

// ângulos retos nos quatro vértices
drawSector({ points: [D, A, B], radius: 0.35, fill: true, fillColor: cor_verde_neon, opacity: 0.55 })
drawSector({ points: [A, B, C], radius: 0.35, fill: true, fillColor: cor_verde_neon, opacity: 0.55 })
drawSector({ points: [B, C, D], radius: 0.35, fill: true, fillColor: cor_verde_neon, opacity: 0.55 })
drawSector({ points: [C, D, A], radius: 0.35, fill: true, fillColor: cor_verde_neon, opacity: 0.55 })

// ponto médio comum das diagonais
const M = { x: 0, y: 0 }
drawPoint({ x: M.x, y: M.y, size: 0.08, color: cor_rosa_choque })

// VÉRTICES + RÓTULOS
drawPoint({ x: A.x, y: A.y, size: 0.06 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y - 0.2, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.06 }); drawText({ text: "$B$", x: B.x + 0.25, y: B.y - 0.2, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.06 }); drawText({ text: "$C$", x: C.x + 0.25, y: C.y + 0.1, fontSize: 0.5 })
drawPoint({ x: D.x, y: D.y, size: 0.06 }); drawText({ text: "$D$", x: D.x - 0.4, y: D.y + 0.1, fontSize: 0.5 })
