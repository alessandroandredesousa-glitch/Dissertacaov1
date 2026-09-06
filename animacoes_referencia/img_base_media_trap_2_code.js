// IMAGEM ESTÁTICA — img_base_media_trap_2.png (Figura 3.13)
// No triângulo ABC: EN é base média (EN || AB, EN = AB/2). Com ME (do ACD),
// M, E, N ficam colineares -> completa-se a base média MN do trapézio.
// (△ACD já foi destacado na Fig 3.12; aqui destacamos o △ABC.)
// Fundo BRANCO. Destino: imagem/3.4/img_base_media_trap_2.png
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

// === GEOMETRIA (mesmos vértices da animação) ===
const A = { x: -4, y: -1.5 }
const B = { x: 4, y: -1.5 }
const C = { x: 2.5, y: 2 }
const D = { x: -1.5, y: 2 }
const M = { x: (A.x + D.x) / 2, y: (A.y + D.y) / 2 }   // (-2.75, 0.25)
const N = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 }   // ( 3.25, 0.25)
const E = { x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 }   // (-0.75, 0.25)

// ----- FUNDO: destaque do triângulo ABC (declarado 1º = atrás de tudo) -----
drawPolygon({ points: [A, B, C], fill: true, fillColor: cor_azul_eletrico, opacity: 0.12 })

// LADOS do trapézio
drawSegment({ points: [A, B], width: 0.04 })
drawSegment({ points: [D, C], width: 0.04 })
drawSegment({ points: [B, C], width: 0.04 })
drawSegment({ points: [A, D], width: 0.04 })

// diagonal AC
drawSegment({ points: [A, C], width: 0.035, color: cor_laranja })

// base médias: ME (do ACD, já obtida) e EN (do ABC, deste passo) -> formam MN
drawSegment({ points: [M, E], width: 0.05, color: cor_roxo_neon })
drawSegment({ points: [E, N], width: 0.05, color: cor_azul_eletrico })

// marcas de ponto médio: AM=MD (1 azul) ; BN=NC (1 roxo) ; AE=EC (2 laranja)
drawSegmentMeasureMark({ points: [A, M], size: 0.24, quantity: 1, color: cor_azul_eletrico })
drawSegmentMeasureMark({ points: [M, D], size: 0.24, quantity: 1, color: cor_azul_eletrico })
drawSegmentMeasureMark({ points: [B, N], size: 0.24, quantity: 1, color: cor_roxo_neon })
drawSegmentMeasureMark({ points: [N, C], size: 0.24, quantity: 1, color: cor_roxo_neon })
drawSegmentMeasureMark({ points: [A, E], size: 0.24, quantity: 2, color: cor_laranja })
drawSegmentMeasureMark({ points: [E, C], size: 0.24, quantity: 2, color: cor_laranja })

// rótulos ME e EN + base média MN
drawText({ text: "$\\overline{ME}$", x: M.x + 0.75, y: M.y + 0.4, fontSize: 0.42, color: cor_roxo_neon })
drawText({ text: "$\\overline{EN}$", x: 1.1, y: 0.65, fontSize: 0.42, color: cor_azul_eletrico })

// VÉRTICES + RÓTULOS
drawPoint({ x: A.x, y: A.y, size: 0.06 }); drawText({ text: "$A$", x: A.x - 0.45, y: A.y - 0.2, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.06 }); drawText({ text: "$B$", x: B.x + 0.3, y: B.y - 0.2, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.06 }); drawText({ text: "$C$", x: C.x + 0.3, y: C.y + 0.1, fontSize: 0.5 })
drawPoint({ x: D.x, y: D.y, size: 0.06 }); drawText({ text: "$D$", x: D.x - 0.45, y: D.y + 0.1, fontSize: 0.5 })
drawPoint({ x: M.x, y: M.y, size: 0.08, color: cor_roxo_neon }); drawText({ text: "$M$", x: M.x - 0.6, y: M.y + 0.05, fontSize: 0.5, color: cor_roxo_neon })
drawPoint({ x: N.x, y: N.y, size: 0.08, color: cor_azul_eletrico }); drawText({ text: "$N$", x: N.x + 0.25, y: N.y + 0.05, fontSize: 0.5, color: cor_azul_eletrico })
drawPoint({ x: E.x, y: E.y, size: 0.08, color: cor_laranja }); drawText({ text: "$E$", x: E.x - 0.15, y: E.y - 0.55, fontSize: 0.5, color: cor_laranja })
