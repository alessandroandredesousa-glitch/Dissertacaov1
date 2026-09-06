// IMAGEM ESTÁTICA — img_base_media_tri_2.png (Figura 3.10)
// Prolongamento de MN até P (N é ponto médio de MP). Triângulos AMN e CPN
// congruentes (LAL): AN=CN, ang. opostos pelo vértice em N, MN=NP.
// Fundo BRANCO. Destino: imagem/3.4/img_base_media_tri_2.png
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
const P = { x: 2 * N.x - M.x, y: 2 * N.y - M.y }        // ( 3.75, 0.75)

// destaque dos dois triângulos comparados
drawPolygon({ points: [A, M, N], fill: true, fillColor: cor_roxo_neon, opacity: 0.20 })
drawPolygon({ points: [C, P, N], fill: true, fillColor: cor_azul_eletrico, opacity: 0.20 })

// LADOS do triângulo original
drawSegment({ points: [A, B], width: 0.04 })
drawSegment({ points: [B, C], width: 0.04 })
drawSegment({ points: [C, A], width: 0.04 })

// base média prolongada M -> N -> P e o lado novo CP
drawSegment({ points: [M, P], width: 0.045, color: cor_coral })
drawSegment({ points: [C, P], width: 0.04, color: cor_laranja })

// congruências (LAL): AN=CN (2 traços roxo); MN=NP (1 traço rosa)
drawSegmentMeasureMark({ points: [A, N], size: 0.26, quantity: 2, color: cor_roxo_neon })
drawSegmentMeasureMark({ points: [N, C], size: 0.26, quantity: 2, color: cor_roxo_neon })
drawSegmentMeasureMark({ points: [M, N], size: 0.26, quantity: 1, color: cor_rosa_choque })
drawSegmentMeasureMark({ points: [N, P], size: 0.26, quantity: 1, color: cor_rosa_choque })

// ângulos opostos pelo vértice em N
drawSector({ points: [M, N, A], radius: 0.45, fill: true, fillColor: cor_laranja, opacity: 0.55 })
drawSector({ points: [P, N, C], radius: 0.45, fill: true, fillColor: cor_laranja, opacity: 0.55 })

// VÉRTICES + RÓTULOS
drawPoint({ x: A.x, y: A.y, size: 0.06 }); drawText({ text: "$A$", x: A.x - 0.1, y: A.y + 0.45, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.06 }); drawText({ text: "$B$", x: B.x - 0.45, y: B.y - 0.2, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.06 }); drawText({ text: "$C$", x: C.x + 0.05, y: C.y - 0.45, fontSize: 0.5 })
drawPoint({ x: M.x, y: M.y, size: 0.08, color: cor_coral }); drawText({ text: "$M$", x: M.x - 0.6, y: M.y + 0.1, fontSize: 0.5, color: cor_coral })
drawPoint({ x: N.x, y: N.y, size: 0.08, color: cor_coral }); drawText({ text: "$N$", x: N.x - 0.15, y: N.y + 0.45, fontSize: 0.5, color: cor_coral })
drawPoint({ x: P.x, y: P.y, size: 0.08, color: cor_coral }); drawText({ text: "$P$", x: P.x + 0.25, y: P.y + 0.1, fontSize: 0.5, color: cor_coral })
