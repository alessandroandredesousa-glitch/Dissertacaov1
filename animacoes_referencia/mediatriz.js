// ANIMAÇÃO: 2.9.3 Mediatriz de um Segmento
// Segue a ordem do site:
//  1) segmento AB + ponto medio M; a mediatriz m e perpendicular a AB por M.
//  2) caracterizacao: para P em m, triangulos PMA e PMB; PRIMEIRO justifica-se
//     (PM comum, MA=MB, angulos retos em M -> LAL), DEPOIS marca-se PA = PB.
//  3) P desliza sobre m: PA e PB permanecem iguais (lugar dos equidistantes).
// PADRAO DIDATICO: justificar primeiro, marcar depois.
// OBS Conexty: usar \hat (nao \widehat); \Delta (nao \triangle); \equiv p/ congruencia.
//   drawSector em RADIANOS (vira simbolo de reto a 90°).

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
const A = { x: -2.2, y: 0 }
const B = { x: 2.2, y: 0 }
const M = { x: 0, y: 0 }             // ponto medio de AB

function pontoP(s) { return { x: 0, y: 2.6 - 5.2 * s } }

// TITULO
drawText({ text: "\\begin{center}\\textbf{Mediatriz de um segmento}\\end{center}", x: 0.2, y: 4.3, color: cor_titulo })

pause()

// segmento AB + extremos + ponto medio M (com marcas MA = MB)
drawSegment({ points: [A, B], width: 0.035, color: cor_ciano })
drawPoint({ x: A.x, y: A.y, size: 0.09, color: cor_rosa_choque }); drawText({ text: "$A$", x: A.x - 0.15, y: A.y - 0.45, fontSize: 0.45, color: cor_rosa_choque })
drawPoint({ x: B.x, y: B.y, size: 0.09, color: cor_rosa_choque }); drawText({ text: "$B$", x: B.x + 0.1, y: B.y - 0.45, fontSize: 0.45, color: cor_rosa_choque })
drawPoint({ x: M.x, y: M.y, size: 0.08, color: cor_dourado }); drawText({ text: "$M$", x: M.x - 0.1, y: M.y - 0.5, fontSize: 0.42, color: cor_dourado })
drawSegmentMeasureMark({ points: [M, A], size: 0.16, quantity: 1, color: cor_dourado })
drawSegmentMeasureMark({ points: [M, B], size: 0.16, quantity: 1, color: cor_dourado })

pause()

// mediatriz m (perpendicular a AB por M) + angulos retos em M
drawSegment({ points: [{ x: 0, y: -2.9 }, { x: 0, y: 3.2 }], width: 0.03, color: cor_verde_menta })
drawText({ text: "$m$", x: 0.03, y: 3.38, fontSize: 0.5, color: cor_verde_menta })
drawSector({ points: [{ x: 0, y: 1 }, M, { x: 1, y: 0 }], radius: 0.32, fill: true, fillColor: cor_verde_neon, opacity: 0.45 })
drawSector({ points: [{ x: -1, y: 0 }, M, { x: 0, y: 1 }], radius: 0.32, fill: true, fillColor: cor_verde_neon, opacity: 0.45 })

pause()

// P sobre a mediatriz + triangulos PMA e PMB (ainda SEM marcar PA=PB)
const desliza = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 3.0 }, { value: 0, time: 3.0 }],
    label: "Deslizar P sobre a mediatriz"
})
animation(desliza, (s) => {
    const P = pontoP(s)
    if (Math.abs(P.y) > 0.4) {
        drawPolygon({ points: [P, M, A], fill: true, fillColor: cor_azul_eletrico, opacity: 0.14 })
        drawPolygon({ points: [P, M, B], fill: true, fillColor: cor_laranja, opacity: 0.14 })
    }
    drawSegment({ points: [P, A], width: 0.03, color: cor_azul_eletrico })
    drawSegment({ points: [P, B], width: 0.03, color: cor_laranja })
    drawPoint({ x: P.x, y: P.y, size: 0.09, color: cor_dourado })
    drawText({ text: "$P$", x: P.x + 0.2, y: P.y + 0.1, fontSize: 0.45, color: cor_dourado })
})

pause()

// JUSTIFICATIVA primeiro (texto)
drawText({ text: "$PM$ comum, $MA = MB$, ângulos retos em $M$", x: 0, y: -3.6, fontSize: 0.42, color: cor_coral })
drawText({ text: "$\\Rightarrow \\Delta PMA \\equiv \\Delta PMB$ (LAL)", x: 0, y: -4.25, fontSize: 0.42, color: cor_coral })

pause()

// DEPOIS marca-se PA = PB (ao vivo, desliza junto com P)
animation(desliza, (s) => {
    const P = pontoP(s)
    drawSegmentMeasureMark({ points: [P, A], size: 0.16, quantity: 2, color: cor_verde_neon })
    drawSegmentMeasureMark({ points: [P, B], size: 0.16, quantity: 2, color: cor_verde_neon })
    drawText({ text: "$PA = PB$", x: 2.5, y: 2.7, fontSize: 0.45, color: cor_verde_neon })
})

pause()

// fecho: lugar geometrico
drawText({ text: "a mediatriz é o lugar dos pontos equidistantes de $A$ e $B$", x: 0, y: -4.85, fontSize: 0.4, color: cor_verde_neon })
