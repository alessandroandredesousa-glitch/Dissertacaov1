// ANIMAÇÃO: 4.3 Reta e Circunferência; Teorema da Reta Tangente
// Segue a ordem do site:
//  1) posições relativas: a reta se aproxima (d varia) -> exterior (d>r, 0 pts),
//     tangente (d=r, 1 pt), secante (d<r, 2 pts). [param]
//  2) teorema da tangente (na posição tangente): OT perpendicular a t; para todo
//     X != T na reta, OX > OT = r (X é exterior). [param move X, com parada em T]
// OBS Conexty: usar \hat (não \widehat). drawArc/ângulos em RADIANOS. Fundo preto.

//drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 });

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
const O = { x: 0, y: 0 }
const r = 2.3
// distância inicial (exterior) da reta ao centro; s controla d = dMax*(1-s)
const dMax = r + 1.3
// s da posição tangente: d = r  ->  s = 1 - r/dMax (arredondado p/ 5 casas)
const sTan = Math.round((1 - r / dMax) * 1e5) / 1e5

// TÍTULO
drawText({ text: "\\begin{center}\\textbf{Reta e circunferência}\\end{center}", x: 0.2, y: 4.3, color: cor_titulo })

pause()

// === circunferência + centro (ficam) ===
drawCircle({ center: O, radius: r, fill: false, width: 0.04, color: cor_ciano })
drawPoint({ x: O.x, y: O.y, size: 0.09, color: cor_rosa_choque })
drawText({ text: "$O$", x: O.x - 0.35, y: O.y - 0.1, fontSize: 0.5, color: cor_rosa_choque })

pause()

// === (1) posições relativas: aproximar a reta (d varia) ===
const mover = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 0, time: 1.5 }, { value: sTan, time: 2 }, { value: 0.68, time: 2 }, { value: sTan, time: 2 }], label: "Aproximar a reta (exterior → tangente → secante)" })
animation(mover, (s) => {
    const d = dMax * (1 - s)
    const Ly = d                         // reta horizontal em y = d (acima do centro)
    // reta s
    drawSegment({ points: [{ x: -4, y: Ly }, { x: 4, y: Ly }], width: 0.035, color: cor_verde_menta })
    // distância d (perpendicular tracejada do centro à reta)
    // o rótulo d some conforme a reta vira tangente (evita sobrepor o "r"):
    // opacidade 1 no exterior (d = dMax) -> 0 na tangente (d = r)
    const opD = Math.max(0, Math.min(1, (d - r) / (dMax - r)))
    drawSegment({ points: [O, { x: 0, y: Ly }], width: 0.02, lineDash: [0.12, 0.1], color: cor_amarelo_neon })
    drawText({ text: "$d$", x: 0.2, y: Ly / 2, fontSize: 0.45, color: cor_amarelo_neon, opacity: opD })
    // interseções + classificação ao vivo
    let txt, cor
    if (d > r + 0.02) {
        txt = "exterior ($d > r$): nenhum ponto"; cor = cor_coral
    } else if (d < r - 0.02) {
        const xx = Math.sqrt(r * r - d * d)
        drawPoint({ x: -xx, y: Ly, size: 0.08, color: cor_rosa_choque })
        drawPoint({ x: xx, y: Ly, size: 0.08, color: cor_rosa_choque })
        txt = "secante ($d < r$): dois pontos"; cor = cor_azul_eletrico
    } else {
        drawPoint({ x: 0, y: r, size: 0.09, color: cor_rosa_choque })
        drawText({ text: "$T$", x: 0.25, y: r + 0.2, fontSize: 0.45, color: cor_rosa_choque })
        txt = "tangente ($d = r$): um ponto"; cor = cor_verde_neon
    }
    drawText({ text: txt, x: 0, y: -3, fontSize: 0.45, color: cor })
})

pause()   // <- deixe em "tangente" (d = r) para seguir

// === (2) teorema da tangente: OT perpendicular a t (T no topo, d = r) ===
const T = { x: 0, y: r }
drawSegment({ points: [O, T], width: 0.03, color: cor_amarelo_neon })     // raio OT
drawSector({ points: [{ x: T.x + 1, y: T.y }, T, O], radius: 0.35, fill: true, fillColor: cor_verde_neon, opacity: 0.6 })  // ângulo reto em T
drawText({ text: "$r$", x: 0.2, y: r / 2, fontSize: 0.45, color: cor_amarelo_neon })
drawText({ text: "$t \\perp \\overline{OT}$ em $T$", x: 0, y: -4.0, fontSize: 0.45, color: cor_verde_neon })

pause()

// === mover X sobre a tangente: OX é oblíqua, OX > OT = r (X exterior) ===
// botão faz parada em T (u = 0.5); ali X esmaece e sobra só o T.
const moverX = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 0.5, time: 2 }, { value: 1, time: 2.5 }, { value: 0, time: 2.5 }], label: "Mover X sobre a tangente (parar em T)" })
animation(moverX, (u) => {
    const xx = -3 + 6 * u
    const X = { x: xx, y: r }
    const opX = Math.min(1, Math.abs(xx) / 0.6)   // X esmaece perto de T (xx -> 0)
    drawSegment({ points: [O, X], width: 0.028, color: cor_coral, opacity: opX })
    drawPoint({ x: X.x, y: X.y, size: 0.08, color: cor_laranja, opacity: opX })
    drawText({ text: "$X$", x: X.x + 0.15, y: X.y + 0.28, fontSize: 0.45, color: cor_laranja, opacity: opX })
    drawText({ text: opX < 0.05 ? "$X = T$: $OX = OT = r$" : "$OX > OT = r$: todo $X \\neq T$ é exterior", x: 0, y: -5, fontSize: 0.42, color: cor_coral })
})
