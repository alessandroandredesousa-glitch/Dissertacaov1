// ANIMAÇÃO: 1.1 Reta, Semirreta e Segmento
// Ordem do texto: 1) RETA (postulado)  2) SEMIRRETAS opostas (O divide a reta)
//                 3) SEGMENTO AB        (parâmetros independentes giram OA e OB)

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

// TÍTULO
drawText({
    text: "\\begin{center}\\textbf{Reta, Semirreta e Segmento}\\end{center}",
    x: 0.42, y: 3.98, color: cor_titulo
})

pause()

// === A, B e O (O sobre AB) ===
const A = { x: -3, y: -0.6 }
const B = { x: 3, y: 1.8 }
const O = { x: A.x + 0.55 * (B.x - A.x), y: A.y + 0.55 * (B.y - A.y) }

const dx = B.x - A.x, dy = B.y - A.y
const nAB = Math.sqrt(dx * dx + dy * dy)
const ux = dx / nAB, uy = dy / nAB

const ext = 2
const R1 = { x: A.x - ext * ux, y: A.y - ext * uy }
const R2 = { x: B.x + ext * ux, y: B.y + ext * uy }

// === 1) DRAW RETA: dois pontos A, B determinam a reta (postulado) ===
drawPoint({ x: A.x, y: A.y, size: 0.08 })
drawText({ text: "$A$", x: A.x - 0.45, y: A.y - 0.15, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.08 })
drawText({ text: "$B$", x: B.x + 0.2, y: B.y + 0.1, fontSize: 0.5 })
drawSegment({ points: [R1, R2], color: cor_roxo_neon, width: 0.04, lineDash: [0.2, 0.12] })
drawArrow({ points: [{ x: A.x - (ext - 0.7) * ux, y: A.y - (ext - 0.7) * uy }, R1], color: cor_roxo_neon, size: 0.2 })
drawArrow({ points: [{ x: B.x + (ext - 0.7) * ux, y: B.y + (ext - 0.7) * uy }, R2], color: cor_roxo_neon, size: 0.2 })
drawText({ text: "reta", x: 5.06, y: 2.06, fontSize: 0.45, color: cor_roxo_neon })

pause()

// === 2) DRAW POINT O + SEMIRRETAS: O divide a reta em duas semirretas ===
drawPoint({ x: O.x, y: O.y, size: 0.09, color: cor_amarelo_neon })
drawText({ text: "$O$", x: O.x + 0.15, y: O.y - 0.45, fontSize: 0.5, color: cor_amarelo_neon })

pause()

// parâmetros INDEPENDENTES (um por raio)
const p_OA = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 2 }, { value: 0, time: 2 }],
    label: "Girar OA em torno de O"
})
const p_OB = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 2 }, { value: 0, time: 2 }],
    label: "Girar OB em torno de O"
})

const L = 4  // comprimento visual dos raios

animation(p_OA, p_OB, (a, b) => {
    // raio OA: base -u (para A), girado por 'a'
    const angA = a * Math.PI
    const oax = (-ux) * Math.cos(angA) - (-uy) * Math.sin(angA)
    const oay = (-ux) * Math.sin(angA) + (-uy) * Math.cos(angA)
    const rayA = { x: O.x + L * oax, y: O.y + L * oay }
    drawArrow({ points: [O, rayA], color: cor_coral, size: 0.22, width: 0.08 })
    drawText({ text: "$\\overrightarrow{OA}$", x: rayA.x - 0.6, y: rayA.y - 0.15, fontSize: 0.45, color: cor_coral })

    // raio OB: base +u (para B), girado por 'b'
    const angB = b * Math.PI
    const obx = ux * Math.cos(angB) - uy * Math.sin(angB)
    const oby = ux * Math.sin(angB) + uy * Math.cos(angB)
    const rayB = { x: O.x + L * obx, y: O.y + L * oby }
    drawArrow({ points: [O, rayB], color: cor_azul_eletrico, size: 0.22 })
    drawText({ text: "$\\overrightarrow{OB}$", x: rayB.x + 0.15, y: rayB.y + 0.15, fontSize: 0.45, color: cor_azul_eletrico })
})

pause()

// nota: raios na mesma reta e de sentidos opostos -> semirretas opostas
drawText({
    text: "$\\overrightarrow{OA}$ e $\\overrightarrow{OB}$ são chamadas de semirretas Opostas.",
    x: 0.22, y: -3, fontSize: 0.46, color: cor_roxo_neon
})

pause()

// === 3) DRAW SEGMENTO: AB (por último), a parte entre A e B ===
drawSegment({ points: [A, B], color: cor_verde_neon, width: 0.05 })
drawText({ text: "Segmento $\\overline{AB}$", x: -0.43, y: 1.16, fontSize: 0.45, color: cor_verde_neon })
