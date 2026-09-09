// IMAGEM ESTÁTICA — img_dois_pontos_infinitas.png (Figura 4.3)
// Por dois pontos A e B passam infinitas circunferências; os centros ficam na
// mediatriz de AB. Cores da animação. Destino: imagem/4.2/img_dois_pontos_infinitas.png
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
const A = { x: -2.5, y: -1 }, B = { x: 2.5, y: -1 }
function dist(P, Q) { return Math.sqrt((P.x - Q.x) ** 2 + (P.y - Q.y) ** 2) }

// mediatriz de AB (vertical, tracejada)
drawSegment({ points: [{ x: 0, y: -3.2 }, { x: 0, y: 3.4 }], width: 0.02, lineDash: [0.14, 0.1], color: cor_verde_menta })

// três circunferências por A e B (centros na mediatriz) — ilustram "infinitas"
const centros = [{ x: 0, y: 0.4 }, { x: 0, y: -0.5 }, { x: 0, y: -1.4 }]
centros.forEach((Cc) => {
    drawCircle({ center: Cc, radius: dist(Cc, A), fill: false, width: 0.03, color: cor_coral })
    drawPoint({ x: Cc.x, y: Cc.y, size: 0.06, color: cor_laranja })
})

// pontos A e B
drawPoint({ x: A.x, y: A.y, size: 0.08 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y - 0.15, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.08 }); drawText({ text: "$B$", x: B.x + 0.25, y: B.y - 0.15, fontSize: 0.5 })
