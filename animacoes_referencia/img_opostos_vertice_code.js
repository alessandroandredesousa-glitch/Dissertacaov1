// =====================================================
// IMAGEM ESTÁTICA — img_opostos_vertice.png
// Figura 1.4: ângulos opostos pelo vértice AÔB e CÔD
// Base: animação angulo_oposto_vertice.js (mesmas contas e pontos).
//
// OBS de FUNDO: a IMAGEM sai com fundo BRANCO (a animação usa fundo PRETO).
//   Por isso, retas, pontos, rótulos e O usam a COR PADRÃO do sistema, que se
//   adapta ao fundo. Só os setores usam cor fixa (coral), que aparece bem nos dois.
//
// Destino no site: imagem/1.3/img_opostos_vertice.png
// =====================================================
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

const cor_coral = '#FF6B6B'

// === pontos das retas AC e DB ===
const A = { x:  2.7, y:  2.6 }
const C = { x: -2.7, y: -0.6 }
const D = { x: -2.9, y:  2.3 }
const B = { x:  2.9, y: -0.3 }

// === O = interseção das retas AC e DB ===
const dx1 = C.x - A.x, dy1 = C.y - A.y
const dx2 = D.x - B.x, dy2 = D.y - B.y
const tt = ((B.x - A.x) * dy2 - (B.y - A.y) * dx2) / (dx1 * dy2 - dy1 * dx2)
const O = { x: A.x + tt * dx1, y: A.y + tt * dy1 }

const nAC = Math.sqrt(dx1 * dx1 + dy1 * dy1), uACx = dx1 / nAC, uACy = dy1 / nAC
const nBD = Math.sqrt(dx2 * dx2 + dy2 * dy2), uBDx = dx2 / nBD, uBDy = dy2 / nBD
const ext = 1.0

// === retas AC e DB (cor PADRÃO, adapta ao fundo) ===
drawSegment({ points: [{ x: A.x - ext * uACx, y: A.y - ext * uACy }, { x: C.x + ext * uACx, y: C.y + ext * uACy }], width: 0.04 })
drawSegment({ points: [{ x: B.x - ext * uBDx, y: B.y - ext * uBDy }, { x: D.x + ext * uBDx, y: D.y + ext * uBDy }], width: 0.04 })

// === setores: par oposto pelo vértice AÔB e CÔD (coral, 1 marca de congruência) ===
drawSector({ points: [A, O, B], radius: 0.7, fill: true, fillColor: cor_coral, measureMarks: 1 })
drawSector({ points: [C, O, D], radius: 0.7, fill: true, fillColor: cor_coral, measureMarks: 1 })

// === pontos e rótulos (cor PADRÃO) ===
drawPoint({ x: A.x, y: A.y, size: 0.07 })
drawText({ text: "$A$", x: A.x, y: A.y + 0.3, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.07 })
drawText({ text: "$C$", x: C.x - 0.4, y: C.y, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.07 })
drawText({ text: "$B$", x: B.x + 0.25, y: B.y + 0.2, fontSize: 0.5 })
drawPoint({ x: D.x, y: D.y, size: 0.07 })
drawText({ text: "$D$", x: D.x + 0.3, y: D.y + 0.2, fontSize: 0.5 })
drawPoint({ x: O.x, y: O.y, size: 0.08 })
drawText({ text: "$O$", x: O.x, y: O.y + 0.3, fontSize: 0.5 })
