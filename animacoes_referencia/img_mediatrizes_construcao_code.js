// IMAGEM ESTÁTICA — img_mediatrizes_construcao.png (Figura 4.4)
// Triângulo ABC com as mediatrizes de AB e de BC construídas.
// Cores da animação. Destino: imagem/4.2/img_mediatrizes_construcao.png
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

// === GEOMETRIA ===
const A = { x: -2.5, y: -1 }, B = { x: 2.5, y: -1 }, C = { x: 0.5, y: 2.2 }
function mediatriz(U, V, back, fwd) {
    const M = { x: (U.x + V.x) / 2, y: (U.y + V.y) / 2 }
    const dx = V.x - U.x, dy = V.y - U.y, L = Math.sqrt(dx * dx + dy * dy)
    const px = -dy / L, py = dx / L
    return [{ x: M.x - back * px, y: M.y - back * py }, { x: M.x + fwd * px, y: M.y + fwd * py }]
}

// triângulo ABC
drawSegment({ points: [A, B], width: 0.035 })
drawSegment({ points: [B, C], width: 0.035 })
drawSegment({ points: [C, A], width: 0.035 })

// mediatrizes (tracejadas)
drawSegment({ points: mediatriz(A, B, 2.4, 3.0), width: 0.02, lineDash: [0.14, 0.1], color: cor_verde_menta })
drawSegment({ points: mediatriz(B, C, 2.0, 2.4), width: 0.02, lineDash: [0.14, 0.1], color: cor_azul_eletrico })

// pontos médios (onde as mediatrizes cruzam os lados)
const Mab = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 }
const Mbc = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 }
drawPoint({ x: Mab.x, y: Mab.y, size: 0.06, color: cor_verde_menta })
drawPoint({ x: Mbc.x, y: Mbc.y, size: 0.06, color: cor_azul_eletrico })

// vértices
drawPoint({ x: A.x, y: A.y, size: 0.08 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y - 0.15, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.08 }); drawText({ text: "$B$", x: B.x + 0.25, y: B.y - 0.15, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.08 }); drawText({ text: "$C$", x: C.x + 0.2, y: C.y + 0.15, fontSize: 0.5 })
