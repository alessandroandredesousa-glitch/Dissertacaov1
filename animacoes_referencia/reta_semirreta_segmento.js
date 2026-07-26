// ANIMAÇÃO: 1.1 Reta, Semirreta e Segmento  (baseada no rascunho do Alessandro)
// Conceito: um ponto O sobre a reta AB; as semirretas OPOSTAS OA e OB giram
//   em torno de O via um parâmetro, mostrando que sempre têm sentidos opostos.
// Estilo: o LÁPIS desenha todo o cenário estático (eixos, reta, segmento, O, textos),
//   com pauses; o PARÂMETRO só anima os raios que giram.

//drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 });

//CORES
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
const cor_cinza = '#999999'

// TÍTULO (o lápis escreve)
drawText({
    text: "\\begin{center}\\textbf{Reta, Semirreta e Segmento}\\end{center}",
    x: 0.15, y: 7, color: cor_titulo
})

pause()

// EIXOS (o lápis desenha)
drawArrow({ points: [{ x: -5, y: 0 }, { x: 5, y: 0 }], color: cor_cinza, size: 0.2 })
drawText({ text: "$x$", x: 4.7, y: -0.5, fontSize: 0.5, color: cor_cinza })
drawArrow({ points: [{ x: 0, y: -4 }, { x: 0, y: 5 }], color: cor_cinza, size: 0.2 })
drawText({ text: "$y$", x: 0.3, y: 4.7, fontSize: 0.5, color: cor_cinza })

pause()

// PONTOS A, B e O (O sobre o segmento AB)
const A = { x: -2.8, y: -0.4 }
const B = { x: 2.4, y: 1.6 }
const O = { x: A.x + 0.6 * (B.x - A.x), y: A.y + 0.6 * (B.y - A.y) }  // O pertence a AB

// direção unitária de A para B
const dABx = B.x - A.x, dABy = B.y - A.y
const nAB = Math.sqrt(dABx * dABx + dABy * dABy)
const ux = dABx / nAB, uy = dABy / nAB

// RETA suporte de AB (o lápis desenha) — tracejada, ultrapassa A e B com setas
const ext = 2.5
const retaP1 = { x: A.x - ext * ux, y: A.y - ext * uy }
const retaP2 = { x: B.x + ext * ux, y: B.y + ext * uy }
drawSegment({ points: [retaP1, retaP2], color: cor_roxo_neon, width: 0.04, lineDash: [0.2, 0.12] })
drawArrow({ points: [{ x: A.x - (ext - 0.7) * ux, y: A.y - (ext - 0.7) * uy }, retaP1], color: cor_roxo_neon, size: 0.2 })
drawArrow({ points: [{ x: B.x + (ext - 0.7) * ux, y: B.y + (ext - 0.7) * uy }, retaP2], color: cor_roxo_neon, size: 0.2 })
drawText({ text: "reta suporte de $AB$", x: retaP1.x - 0.1, y: retaP1.y - 0.6, fontSize: 0.42, color: cor_roxo_neon })

pause()

// SEGMENTO AB (o lápis desenha) — verde, grosso
drawSegment({ points: [A, B], color: cor_verde_neon, width: 0.08 })
drawPoint({ x: A.x, y: A.y, size: 0.08 })
drawText({ text: "$A$", x: A.x - 0.45, y: A.y - 0.15, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.08 })
drawText({ text: "$B$", x: B.x + 0.2, y: B.y + 0.1, fontSize: 0.5 })
drawText({ text: "Segmento $\\overline{AB}$", x: B.x - 1.5, y: B.y + 0.7, fontSize: 0.45, color: cor_verde_neon })

pause()

// PONTO O sobre a reta (o lápis desenha)
drawPoint({ x: O.x, y: O.y, size: 0.09, color: cor_amarelo_neon })
drawText({ text: "$O$", x: O.x + 0.15, y: O.y - 0.45, fontSize: 0.5, color: cor_amarelo_neon })

pause()

// NARRAÇÃO (o lápis escreve)
drawText({
    text: "De $O$ saem duas semirretas $\\overrightarrow{OA}$ e $\\overrightarrow{OB}$ que giram em torno de $O$.",
    x: -4.7, y: -2.7, fontSize: 0.48
})

pause()

// PARÂMETRO que rotaciona OA e OB em torno de O
const p_rot = param({
    value: 0, min: -1, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 2.5 }, { value: -1, time: 2.5 }, { value: 0, time: 2.5 }],
    label: "Girar OA e OB em torno de O"
})

const L = 2.5  // comprimento visual dos raios

animation(p_rot, (p) => {
    const ang = p * Math.PI            // gira até ±180°
    const cosA = Math.cos(ang), sinA = Math.sin(ang)

    // direção de OB = +u rotacionada;  OA é sempre a oposta
    const obx = ux * cosA - uy * sinA
    const oby = ux * sinA + uy * cosA
    const oax = -obx, oay = -oby

    const rayB = { x: O.x + L * obx, y: O.y + L * oby }
    const rayA = { x: O.x + L * oax, y: O.y + L * oay }

    drawArrow({ points: [O, rayB], color: cor_azul_eletrico, size: 0.22 })
    drawText({ text: "$\\overrightarrow{OB}$", x: rayB.x + 0.15, y: rayB.y + 0.15, fontSize: 0.45, color: cor_azul_eletrico })

    drawArrow({ points: [O, rayA], color: cor_coral, size: 0.22 })
    drawText({ text: "$\\overrightarrow{OA}$", x: rayA.x - 0.6, y: rayA.y - 0.15, fontSize: 0.45, color: cor_coral })
})

pause()

// CONCLUSÃO (o lápis escreve)
drawText({
    text: "$\\overrightarrow{OA}$ e $\\overrightarrow{OB}$ apontam sempre para sentidos opostos: s\\~ao \\textbf{semirretas opostas}.",
    x: -4.7, y: -3.7, fontSize: 0.46, color: cor_verde_menta
})
