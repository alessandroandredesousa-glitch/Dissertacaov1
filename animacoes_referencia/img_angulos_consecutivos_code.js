// =====================================================
// IMAGEM ESTÁTICA — img_angulos_consecutivos.png (Figura 1.3)
// Baseada na animação angulo_elementos.js (passo dos adjacentes):
//   AÔB (dourado, acima de OB) e BÔC (coral, abaixo de OB), lado comum OB.
//
// OBS de FUNDO: imagem tem fundo BRANCO. Pontos e rótulos usam cor PADRÃO
//   (adapta ao fundo); azul (lados), dourado e coral aparecem bem no branco.
//
// Destino no site: imagem/1.2/img_angulos_consecutivos.png
// =====================================================
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

const cor_azul_eletrico = '#00B0FF'
const cor_coral = '#FF6B6B'
const cor_dourado = '#FFD700'

const O = { x: -0.5, y: 0 }
const L = 3
const angA = 0.28 * Math.PI          // lado OA (acima)
const angC = -50 * Math.PI / 180     // lado OC (abaixo)

const A = { x: O.x + L * Math.cos(angA), y: O.y + L * Math.sin(angA) }
const B = { x: O.x + L, y: O.y }      // lado OB (comum, horizontal)
const C = { x: O.x + L * Math.cos(angC), y: O.y + L * Math.sin(angC) }

// setores: AÔB (dourado) acima de OB, BÔC (coral) abaixo
drawSector({ points: [A, O, B], radius: 0.7, fill: true, fillColor: cor_dourado, opacity: 0.8 })
drawSector({ points: [B, O, C], radius: 0.7, fill: true, fillColor: cor_coral, opacity: 0.7 })

// lados OA, OB (comum) e OC
drawArrow({ points: [O, A], color: cor_azul_eletrico, size: 0.2 })
drawArrow({ points: [O, B], color: cor_azul_eletrico, size: 0.2 })
drawArrow({ points: [O, C], color: cor_azul_eletrico, size: 0.2 })

// nomes dos ângulos
drawText({ text: "$A\\hat{O}B$", x: 0.55, y: 0.62, fontSize: 0.4 })
drawText({ text: "$B\\hat{O}C$", x: 0.55, y: -0.72, fontSize: 0.4 })

// vértice e pontos (cor PADRÃO)
drawPoint({ x: O.x, y: O.y, size: 0.06 })
drawText({ text: "$O$", x: O.x - 0.4, y: O.y + 0.1, fontSize: 0.5 })
drawPoint({ x: A.x, y: A.y, size: 0.06 })
drawText({ text: "$A$", x: A.x + 0.12, y: A.y + 0.2, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.06 })
drawText({ text: "$B$", x: B.x + 0.25, y: B.y + 0.05, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.06 })
drawText({ text: "$C$", x: C.x + 0.3, y: C.y - 0.05, fontSize: 0.5 })

// nota: OB é o lado comum
drawText({ text: "$\\overrightarrow{OB}$: lado comum", x: -1.5, y: -3, fontSize: 0.45, color: cor_coral })
