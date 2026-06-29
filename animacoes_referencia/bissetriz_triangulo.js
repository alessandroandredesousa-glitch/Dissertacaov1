drawGrid({xMin: -5, xMax: 5, yMin: -5, yMax: 5});

// === CORES ===
const cor_ciano         = '#00FFFF'
const cor_verde_neon    = '#39FF14'
const cor_amarelo_neon  = '#FFFF00'
const cor_laranja       = '#FF6600'
const cor_rosa_choque   = '#FF1493'
const cor_roxo_neon     = '#BF00FF'
const cor_azul_eletrico = '#00B0FF'
const cor_coral         = '#FF6B6B'
const cor_verde_menta   = '#00FA9A'
const cor_dourado       = '#FFD700'
const cor_titulo        = '#FF4500'
const cor_branco        = '#FFFFFF'

// === VÉRTICES ===
const A = {x:  0.49, y:  3.39}
const B = {x: -3.55, y: -1.95}
const C = {x:  3.11, y: -0.20}

// === COMPRIMENTOS DOS LADOS ===
const AB_len = Math.sqrt((B.x-A.x)**2 + (B.y-A.y)**2)
const AC_len = Math.sqrt((C.x-A.x)**2 + (C.y-A.y)**2)
const BC_len = Math.sqrt((C.x-B.x)**2 + (C.y-B.y)**2)

// === PÉS DAS BISSETRIZES ===
const tA = AB_len / (AB_len + AC_len)
const D_A = { x: B.x + tA*(C.x-B.x), y: B.y + tA*(C.y-B.y) }

const tB = AB_len / (AB_len + BC_len)
const D_B = { x: A.x + tB*(C.x-A.x), y: A.y + tB*(C.y-A.y) }

const tC = AC_len / (AC_len + BC_len)
const D_C = { x: A.x + tC*(B.x-A.x), y: A.y + tC*(B.y-A.y) }

// === INCENTRO ===
const perim = AB_len + AC_len + BC_len
const I = {
    x: (BC_len*A.x + AC_len*B.x + AB_len*C.x) / perim,
    y: (BC_len*A.y + AC_len*B.y + AB_len*C.y) / perim
}

// === DESENHO ===
drawPolygon({ points: [A, B, C] })

// bissetrizes
drawSegment({ points: [A, D_A], color: cor_azul_eletrico, width: 0.04 })
drawSegment({ points: [B, D_B], color: cor_rosa_choque,   width: 0.04 })
drawSegment({ points: [C, D_C], color: cor_dourado,       width: 0.04 })

// incentro
drawPoint({ x: I.x, y: I.y, size: 0.07, color: cor_verde_neon })
drawText({ text: "$I$", x: I.x + 0.15, y: I.y + 0.2, fontSize: 0.48, color: cor_verde_neon })

// vértices
drawPoint({ x: A.x, y: A.y, size: 0.06 })
drawText({ text: "$A$", x: A.x + 0.12, y: A.y + 0.18, fontSize: 0.48 })
drawPoint({ x: B.x, y: B.y, size: 0.06 })
drawText({ text: "$B$", x: B.x - 0.35, y: B.y - 0.1, fontSize: 0.48 })
drawPoint({ x: C.x, y: C.y, size: 0.06 })
drawText({ text: "$C$", x: C.x + 0.25, y: C.y - 0.25, fontSize: 0.48 })

// pés das bissetrizes
drawPoint({ x: D_A.x, y: D_A.y, size: 0.05, color: cor_azul_eletrico })
drawText({ text: "$D$", x: D_A.x + 0.15, y: D_A.y - 0.25, fontSize: 0.48, color: cor_azul_eletrico })
drawPoint({ x: D_B.x, y: D_B.y, size: 0.05, color: cor_rosa_choque })
drawText({ text: "$E$", x: D_B.x + 0.15, y: D_B.y + 0.15, fontSize: 0.48, color: cor_rosa_choque })
drawPoint({ x: D_C.x, y: D_C.y, size: 0.05, color: cor_dourado })
drawText({ text: "$F$", x: D_C.x - 0.35, y: D_C.y + 0.1, fontSize: 0.48, color: cor_dourado })
