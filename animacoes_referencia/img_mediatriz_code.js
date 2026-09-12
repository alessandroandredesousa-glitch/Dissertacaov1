// IMAGEM ESTÁTICA — img_mediatriz.png (Figura 2.56)
// Mediatriz m do segmento AB (perpendicular por M) e um ponto P equidistante:
// PA = PB. Mesma base da animacao 2.9.3.
// Destino: imagem/2.9/img_mediatriz.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_laranja = '#FF6600'
const cor_rosa_choque = '#FF1493'
const cor_azul_eletrico = '#00B0FF'
const cor_verde_menta = '#00FA9A'
const cor_dourado = '#FFD700'

// === GEOMETRIA ===
const A = { x: -2.2, y: 0 }
const B = { x: 2.2, y: 0 }
const M = { x: 0, y: 0 }
const P = { x: 0, y: 2.2 }           // ponto sobre a mediatriz

// segmento AB + extremos + ponto medio M (marcas MA = MB)
drawSegment({ points: [A, B], width: 0.035, color: cor_ciano })
drawPoint({ x: A.x, y: A.y, size: 0.09, color: cor_rosa_choque }); drawText({ text: "$A$", x: A.x - 0.15, y: A.y - 0.45, fontSize: 0.45, color: cor_rosa_choque })
drawPoint({ x: B.x, y: B.y, size: 0.09, color: cor_rosa_choque }); drawText({ text: "$B$", x: B.x + 0.1, y: B.y - 0.45, fontSize: 0.45, color: cor_rosa_choque })
drawPoint({ x: M.x, y: M.y, size: 0.08, color: cor_dourado }); drawText({ text: "$M$", x: M.x - 0.1, y: M.y - 0.5, fontSize: 0.42, color: cor_dourado })
drawSegmentMeasureMark({ points: [M, A], size: 0.16, quantity: 1, color: cor_dourado })
drawSegmentMeasureMark({ points: [M, B], size: 0.16, quantity: 1, color: cor_dourado })

// mediatriz m (perpendicular a AB por M) + angulos retos em M
drawSegment({ points: [{ x: 0, y: -1.4 }, { x: 0, y: 3.2 }], width: 0.03, color: cor_verde_menta })
drawText({ text: "$m$", x: 0.03, y: 3.38, fontSize: 0.5, color: cor_verde_menta })
drawSector({ points: [{ x: 0, y: 1 }, M, { x: 1, y: 0 }], radius: 0.32, fill: true, fillColor: cor_verde_neon, opacity: 0.45 })
drawSector({ points: [{ x: -1, y: 0 }, M, { x: 0, y: 1 }], radius: 0.32, fill: true, fillColor: cor_verde_neon, opacity: 0.45 })

// ponto P equidistante: PA e PB + marcas PA = PB
drawSegment({ points: [P, A], width: 0.03, color: cor_azul_eletrico })
drawSegment({ points: [P, B], width: 0.03, color: cor_laranja })
drawPoint({ x: P.x, y: P.y, size: 0.09, color: cor_dourado }); drawText({ text: "$P$", x: P.x + 0.2, y: P.y + 0.1, fontSize: 0.45, color: cor_dourado })
drawSegmentMeasureMark({ points: [P, A], size: 0.16, quantity: 2, color: cor_verde_neon })
drawSegmentMeasureMark({ points: [P, B], size: 0.16, quantity: 2, color: cor_verde_neon })
drawText({ text: "$PA = PB$", x: 2.4, y: 2.3, fontSize: 0.45, color: cor_verde_neon })
