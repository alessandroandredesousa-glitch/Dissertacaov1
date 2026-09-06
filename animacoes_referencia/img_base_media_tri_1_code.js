// IMAGEM ESTÁTICA — img_base_media_tri_1.png (Figura 3.9)
// Triângulo ABC com pontos médios M (de AB) e N (de AC) e a base média MN.
// Fundo BRANCO. Lados na cor padrão; base média em destaque (coral).
// Destino: imagem/3.4/img_base_media_tri_1.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES (declaradas sempre) ===
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

// === GEOMETRIA ===
const A = { x: -2, y: 3 }
const B = { x: -4.5, y: -1.5 }
const C = { x: 2.5, y: -1.5 }
const M = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 }   // (-3.25, 0.75)
const N = { x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 }   // ( 0.25, 0.75)

// LADOS
drawSegment({ points: [A, B], width: 0.04 })
drawSegment({ points: [B, C], width: 0.04 })
drawSegment({ points: [C, A], width: 0.04 })

// BASE MÉDIA MN (destaque)
drawSegment({ points: [M, N], width: 0.05, color: cor_coral })

// marcas de ponto médio: AM=MB (1 traço, azul) e AN=NC (2 traços, roxo)
drawSegmentMeasureMark({ points: [A, M], size: 0.26, quantity: 1, color: cor_azul_eletrico })
drawSegmentMeasureMark({ points: [M, B], size: 0.26, quantity: 1, color: cor_azul_eletrico })
drawSegmentMeasureMark({ points: [A, N], size: 0.26, quantity: 2, color: cor_roxo_neon })
drawSegmentMeasureMark({ points: [N, C], size: 0.26, quantity: 2, color: cor_roxo_neon })

// VÉRTICES + RÓTULOS
drawPoint({ x: A.x, y: A.y, size: 0.06 }); drawText({ text: "$A$", x: A.x - 0.1, y: A.y + 0.45, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.06 }); drawText({ text: "$B$", x: B.x - 0.45, y: B.y - 0.2, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.06 }); drawText({ text: "$C$", x: C.x + 0.3, y: C.y - 0.2, fontSize: 0.5 })
drawPoint({ x: M.x, y: M.y, size: 0.08, color: cor_coral }); drawText({ text: "$M$", x: M.x - 0.6, y: M.y + 0.1, fontSize: 0.5, color: cor_coral })
drawPoint({ x: N.x, y: N.y, size: 0.08, color: cor_coral }); drawText({ text: "$N$", x: N.x + 0.25, y: N.y + 0.35, fontSize: 0.5, color: cor_coral })
