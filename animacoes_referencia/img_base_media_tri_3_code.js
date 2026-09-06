// IMAGEM ESTÁTICA — img_base_media_tri_3.png (Figura 3.11)
// O quadrilátero MBCP é um paralelogramo: MB = CP (1 traço) e MB || CP
// (alternos internos M̂AN = P̂CN). Logo MP || BC e MP = BC (2 traços).
// Triângulo ABC de referência ao fundo (AB e AC esmaecidos; BC é comum).
// Fundo BRANCO. Destino: imagem/3.4/img_base_media_tri_3.png
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

// ----- FUNDO: preenchimento do paralelogramo (declarado 1º = atrás de tudo) -----
drawPolygon({ points: [M, B, C, P], fill: true, fillColor: cor_verde_neon, opacity: 0.16 })

// alternos internos M̂AN = P̂CN (justificam MB || CP)
drawSector({ points: [M, A, N], radius: 0.5, fill: true, fillColor: cor_rosa_choque, opacity: 0.5 })
drawSector({ points: [P, C, N], radius: 0.5, fill: true, fillColor: cor_rosa_choque, opacity: 0.5 })

// ----- triângulo ABC de referência: AB e AC ESMAECIDOS e INTEIROS -----
drawSegment({ points: [A, B], width: 0.03, opacity: 0.3 })   // AB (contém M)
drawSegment({ points: [A, C], width: 0.03, opacity: 0.3 })   // AC (contém N) — agora inteiro

// ----- lados do paralelogramo (por cima) -----
drawSegment({ points: [M, B], width: 0.045, color: cor_coral })          // MB
drawSegment({ points: [C, P], width: 0.045, color: cor_coral })          // CP (oposto a MB)
drawSegment({ points: [M, P], width: 0.045, color: cor_azul_eletrico })  // MP (contém N)
drawSegment({ points: [B, C], width: 0.045, color: cor_azul_eletrico })  // BC (oposto a MP; comum ao triângulo)

// MB = CP (1 traço) ; MP = BC (2 traços)
drawSegmentMeasureMark({ points: [M, B], size: 0.26, quantity: 1, color: cor_coral })
drawSegmentMeasureMark({ points: [C, P], size: 0.26, quantity: 1, color: cor_coral })
drawSegmentMeasureMark({ points: [M, P], size: 0.26, quantity: 2, color: cor_azul_eletrico })
drawSegmentMeasureMark({ points: [B, C], size: 0.26, quantity: 2, color: cor_azul_eletrico })

// VÉRTICES + RÓTULOS
drawPoint({ x: A.x, y: A.y, size: 0.06 }); drawText({ text: "$A$", x: A.x - 0.1, y: A.y + 0.45, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.06 }); drawText({ text: "$B$", x: B.x - 0.45, y: B.y - 0.2, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.06 }); drawText({ text: "$C$", x: C.x + 0.05, y: C.y - 0.45, fontSize: 0.5 })
drawPoint({ x: M.x, y: M.y, size: 0.08, color: cor_coral }); drawText({ text: "$M$", x: M.x - 0.6, y: M.y + 0.1, fontSize: 0.5, color: cor_coral })
drawPoint({ x: N.x, y: N.y, size: 0.07, color: cor_azul_eletrico }); drawText({ text: "$N$", x: N.x - 0.15, y: N.y + 0.4, fontSize: 0.45, color: cor_azul_eletrico })
drawPoint({ x: P.x, y: P.y, size: 0.08, color: cor_coral }); drawText({ text: "$P$", x: P.x + 0.25, y: P.y + 0.1, fontSize: 0.5, color: cor_coral })
