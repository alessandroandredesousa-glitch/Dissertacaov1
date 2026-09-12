// IMAGEM ESTÁTICA — img_isosceles_pab.png (Figura 4.9)
// Tracada a corda AB, os triangulos OAB (OA=OB=r) e PAB (P^AB = P^BA) sao
// isosceles; dai PA = PB. A reta OP e o eixo de simetria (bissetriz).
// Cores da animacao. Destino: imagem/4.4/img_isosceles_pab.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_amarelo_neon = '#C9A227'   // amarelo escurecido p/ fundo branco (era #FFFF00 na animacao)
const cor_laranja = '#FF6600'
const cor_rosa_choque = '#FF1493'
const cor_roxo_neon = '#BF00FF'
const cor_azul_eletrico = '#00B0FF'
const cor_coral = '#FF6B6B'
const cor_verde_menta = '#00FA9A'
const cor_dourado = '#FFD700'
const cor_titulo = '#FF4500'

// === GEOMETRIA ===
const O = { x: 0, y: 0 }
const r1 = 2.0
const dP = 3.4
const P = { x: 0, y: -dP }
const th = Math.acos(r1 / dP)
const A = { x: r1 * Math.sin(th), y: -r1 * Math.cos(th) }
const B = { x: -r1 * Math.sin(th), y: -r1 * Math.cos(th) }

// reta OP (eixo de simetria / bissetriz)
drawSegment({ points: [O, P], width: 0.024, lineDash: [0.12, 0.1], color: cor_coral })

// triangulos destacados (opacidade)
drawPolygon({ points: [O, A, B], fill: true, fillColor: cor_amarelo_neon, opacity: 0.16 })
drawPolygon({ points: [P, A, B], fill: true, fillColor: cor_verde_menta, opacity: 0.16 })

// circunferencia + centro
drawCircle({ center: O, radius: r1, fill: false, width: 0.04, color: cor_ciano })
drawPoint({ x: O.x, y: O.y, size: 0.09, color: cor_rosa_choque })
drawText({ text: "$O$", x: O.x, y: O.y + 0.3, fontSize: 0.5, color: cor_rosa_choque })

// ponto exterior P
drawPoint({ x: P.x, y: P.y, size: 0.1, color: cor_dourado })
drawText({ text: "$P$", x: P.x, y: P.y - 0.7, fontSize: 0.5, color: cor_dourado })

// tangentes PA e PB + pontos de tangencia
drawSegment({ points: [P, A], width: 0.035, color: cor_verde_menta })
drawSegment({ points: [P, B], width: 0.035, color: cor_verde_menta })
drawPoint({ x: A.x, y: A.y, size: 0.09, color: cor_rosa_choque })
drawPoint({ x: B.x, y: B.y, size: 0.09, color: cor_rosa_choque })
drawText({ text: "$A$", x: 1.9, y: -1.45, fontSize: 0.45, color: cor_rosa_choque })
drawText({ text: "$B$", x: -1.97, y: -1.47, fontSize: 0.45, color: cor_rosa_choque })

// raios OA, OB
drawSegment({ points: [O, A], width: 0.03, color: cor_amarelo_neon })
drawSegment({ points: [O, B], width: 0.03, color: cor_amarelo_neon })

// corda AB
drawSegment({ points: [A, B], width: 0.03, color: cor_azul_eletrico })

// marcas de congruencia: OA = OB (1 traço), PA = PB (2 traços)
drawSegmentMeasureMark({ points: [O, A], size: 0.18, quantity: 1, color: cor_amarelo_neon })
drawSegmentMeasureMark({ points: [O, B], size: 0.18, quantity: 1, color: cor_amarelo_neon })
drawSegmentMeasureMark({ points: [P, A], size: 0.18, quantity: 2, color: cor_verde_menta })
drawSegmentMeasureMark({ points: [P, B], size: 0.18, quantity: 2, color: cor_verde_menta })

// conclusoes
drawText({ text: "$OA = OB = r$", x: -3.48, y: 1.29, fontSize: 0.42, color: cor_amarelo_neon })
drawText({ text: "$\\Delta OAB$ isósceles", x: -3.5, y: 0.72, fontSize: 0.42, color: cor_amarelo_neon })
drawText({ text: "$P\\hat{A}B = P\\hat{B}A$", x: 2.35, y: 0.33, fontSize: 0.42, color: cor_verde_menta })
drawText({ text: "$\\Delta PAB$ isósceles", x: 2.3, y: -0.18, fontSize: 0.42, color: cor_verde_menta })
drawText({ text: "$PA = PB$", x: 2.28, y: -0.73, fontSize: 0.45, color: cor_coral })
