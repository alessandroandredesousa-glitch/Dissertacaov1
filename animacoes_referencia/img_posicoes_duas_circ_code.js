// IMAGEM ESTÁTICA — img_posicoes_duas_circ.png (Figura 4.10)
// Painel 2x3 de subfiguras: as posicoes relativas de duas circunferencias
// (raios R e r) conforme d = O1O2 comparado com R+r e |R-r|.
// Cada celula mostra o par de circunferencias centralizado + legenda embaixo.
// Cores da animacao (amarelo escurecido p/ fundo branco).
// Destino: imagem/4.4/img_posicoes_duas_circ.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_amarelo = '#C9A227'   // amarelo escurecido p/ fundo branco
const cor_laranja = '#FF6600'
const cor_rosa_choque = '#FF1493'
const cor_roxo_neon = '#BF00FF'
const cor_azul_eletrico = '#00B0FF'
const cor_coral = '#FF6B6B'
const cor_verde_menta = '#00FA9A'
const cor_dourado = '#FFD700'
const cor_titulo = '#FF4500'

// === PARAMETROS COMUNS ===
const R = 0.6                  // raio da circunferencia 1
const r = 0.35                 // raio da circunferencia 2
const soma = R + r             // 0.95
const dif = Math.abs(R - r)    // 0.25

// centros das 6 celulas do painel 2x3
const colX = [-3.3, 0, 3.3]
const rowY = [2.4, -1.0]

// desenha uma celula: par de circunferencias centralizado em (cx,cy), distancia d
// retorna O1, O2 para marcar contatos/intersecoes por fora
function cell(cx, cy, d, name, cond, cor) {
    const O1 = { x: cx - d / 2, y: cy }
    const O2 = { x: cx + d / 2, y: cy }
    drawCircle({ center: O1, radius: R, fill: false, width: 0.03, color: cor_ciano })
    drawCircle({ center: O2, radius: r, fill: false, width: 0.03, color: cor_roxo_neon })
    drawPoint({ x: O1.x, y: O1.y, size: 0.05, color: cor_rosa_choque })
    if (d > 0.01) {
        drawPoint({ x: O2.x, y: O2.y, size: 0.05, color: cor_rosa_choque })
        drawSegment({ points: [O1, O2], width: 0.016, lineDash: [0.09, 0.07], color: cor_amarelo })
    }
    drawText({ text: name, x: cx - 0.4, y: cy - 1.15, fontSize: 0.34, color: cor })
    drawText({ text: cond, x: cx - 0.5, y: cy - 1.68, fontSize: 0.28, color: 'white' })
    return { O1, O2 }
}

// ---- linha de cima ----
// (a) EXTERIORES: d > R + r
cell(colX[0], rowY[0], 1.35, "exteriores", "$d > R + r$", cor_coral)

// (b) TANGENTES EXTERIORMENTE: d = R + r  (contato em O1 + R)
{
    const c = cell(colX[1], rowY[0], soma, "tangentes ext.", "$d = R + r$", cor_verde_neon)
    drawPoint({ x: c.O1.x + R, y: rowY[0], size: 0.055, color: cor_dourado })
}

// (c) SECANTES: |R - r| < d < R + r  (dois pontos)
{
    const d = 0.65
    const c = cell(colX[2], rowY[0], d, "secantes", "$|R - r| < d < R + r$", cor_azul_eletrico)
    const a = (d * d + R * R - r * r) / (2 * d)
    const h = Math.sqrt(Math.max(0, R * R - a * a))
    drawPoint({ x: c.O1.x + a, y: rowY[0] + h, size: 0.05, color: cor_rosa_choque })
    drawPoint({ x: c.O1.x + a, y: rowY[0] - h, size: 0.05, color: cor_rosa_choque })
}

// ---- linha de baixo ----
// (d) TANGENTES INTERIORMENTE: d = |R - r|  (contato em O1 + R)
{
    const c = cell(colX[0], rowY[1], dif, "tangentes int.", "$d = |R - r|$", cor_verde_neon)
    drawPoint({ x: c.O1.x + R, y: rowY[1], size: 0.055, color: cor_dourado })
}

// (e) INTERNAS: 0 < d < |R - r|
cell(colX[1], rowY[1], 0.12, "internas", "$d < |R - r|$", cor_laranja)

// (f) CONCENTRICAS: d = 0 (mesmo centro)
cell(colX[2], rowY[1], 0, "concêntricas", "$d = 0$", cor_roxo_neon)
