// ANIMAÇÃO: 3.4 Base Média do TRAPÉZIO  (plano próprio — colar abaixo do triângulo)
// médios M (de AD) e N (de BC) -> base média MN.
// diagonal AC + médio E -> ME base média de ACD (ME ∥ CD, ME = CD/2)
//                       -> EN base média de ABC (EN ∥ AB, EN = AB/2)
// AB ∥ CD -> M, E, N colineares -> MN ∥ bases -> MN = (AB+CD)/2.
// OBS Conexty: usar \hat (não \widehat). Fundo preto.

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

// === GEOMETRIA (AB base maior embaixo, CD base menor em cima) ===
const A = { x: -4, y: -1.5 }
const B = { x: 4, y: -1.5 }
const C = { x: 2.5, y: 2 }
const D = { x: -1.5, y: 2 }
const M = { x: (A.x + D.x) / 2, y: (A.y + D.y) / 2 }   // mid AD (-2.75, 0.25)
const N = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 }   // mid BC ( 3.25, 0.25)
const E = { x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 }   // mid AC (-0.75, 0.25)

// TÍTULO
drawText({ text: "\\begin{center}\\textbf{Base média do trapézio}\\end{center}", x: 0.2, y: 4.2, color: cor_titulo })

pause()

// === BASE: trapézio ABCD (fica sempre) ===
drawSegment({ points: [A, B], width: 0.045 })   // base maior
drawSegment({ points: [D, C], width: 0.045 })   // base menor
drawSegment({ points: [B, C], width: 0.045 })   // lateral
drawSegment({ points: [A, D], width: 0.045 })   // lateral
drawPoint({ x: A.x, y: A.y, size: 0.07 }); drawText({ text: "$A$", x: A.x - 0.45, y: A.y - 0.2, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.07 }); drawText({ text: "$B$", x: B.x + 0.3, y: B.y - 0.2, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.07 }); drawText({ text: "$C$", x: C.x + 0.3, y: C.y + 0.1, fontSize: 0.5 })
drawPoint({ x: D.x, y: D.y, size: 0.07 }); drawText({ text: "$D$", x: D.x - 0.45, y: D.y + 0.1, fontSize: 0.5 })

pause()

// === médios M, N das laterais + base média MN ===
drawPoint({ x: M.x, y: M.y, size: 0.09, color: cor_coral }); drawText({ text: "$M$", x: M.x - 0.6, y: M.y + 0.05, fontSize: 0.5, color: cor_coral })
drawPoint({ x: N.x, y: N.y, size: 0.09, color: cor_coral }); drawText({ text: "$N$", x: N.x + 0.25, y: N.y + 0.05, fontSize: 0.5, color: cor_coral })
drawSegmentMeasureMark({ points: [A, M], size: 0.24, quantity: 1, color: cor_azul_eletrico })
drawSegmentMeasureMark({ points: [M, D], size: 0.24, quantity: 1, color: cor_azul_eletrico })
drawSegmentMeasureMark({ points: [B, N], size: 0.24, quantity: 1, color: cor_roxo_neon })
drawSegmentMeasureMark({ points: [N, C], size: 0.24, quantity: 1, color: cor_roxo_neon })

pause()

drawSegment({ points: [M, N], width: 0.05, color: cor_coral })   // base média
drawText({ text: "$\\overline{MN}$: base média", x: 0.09, y: 3.4, fontSize: 0.45, color: cor_coral })

pause()

// === PARÂMETROS DE LIMPEZA ===
const limparT1 = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 1.2 }], label: "Limpar triângulo ACD" })
const limparT2 = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 1.2 }], label: "Limpar triângulo ABC" })

// === diagonal AC + médio E (fica; base das duas base médias) ===
drawSegment({ points: [A, C], width: 0.035, color: cor_laranja })
drawPoint({ x: E.x, y: E.y, size: 0.09, color: cor_laranja }); drawText({ text: "$E$", x: E.x - 0.15, y: E.y - 0.55, fontSize: 0.5, color: cor_laranja })
drawSegmentMeasureMark({ points: [A, E], size: 0.24, quantity: 2, color: cor_laranja })
drawSegmentMeasureMark({ points: [E, C], size: 0.24, quantity: 2, color: cor_laranja })

pause()

// === T1: triângulo ACD -> ME base média (ME ∥ CD, ME = CD/2) === (some com limparT1)
animation(limparT1, (f) => {
    const o = 1 - f
    drawPolygon({ points: [A, C, D], fill: true, fillColor: cor_roxo_neon, opacity: 0.16 * o })
    drawSegment({ points: [M, E], width: 0.05, color: cor_roxo_neon, opacity: o })
    drawText({ text: "em $\\Delta ACD$:", x: -2.43, y: -2.82, color: cor_roxo_neon, opacity: 1})
    drawText({ text: "$$\\overline{ME} = \\frac{\\bar{CD}}{2}\\quad \\text{, } \\quad  \\overline{ME} \\parallel \\bar{CD}$$", x: 0.42, y: -3.89, color: cor_roxo_neon})

})

pause()   // <- aperte "Limpar triângulo ACD"

// === T2: triângulo ABC -> EN base média (EN ∥ AB, EN = AB/2) === (some com limparT2)
animation(limparT2, (f) => {
    const o = 1 - f
    drawPolygon({ points: [A, B, C], fill: true, fillColor: cor_azul_eletrico, opacity: 0.16 * o })
    drawSegment({ points: [E, N], width: 0.05, color: cor_azul_eletrico, opacity: o })
    drawText({ text: "em $\\Delta ABC$:  ", x: -2.38, y: -5.8, color: cor_azul_eletrico, opacity: 1 })
    drawText({
        text: "$$\\bar{EN} = \\frac{\\bar{AB}}{2} \\quad \\text{, } \\quad  \\bar{EN} \\parallel \\bar{AB}$$", x: 0.4, y: -6.89, color: cor_azul_eletrico
    })
})

pause()   // <- aperte "Limpar triângulo ABC"

// === conclusão: AB ∥ CD -> M, E, N colineares -> MN ∥ bases -> fórmula ===
drawSegment({ points: [M, E], width: 0.05, color: cor_coral })
drawSegment({ points: [E, N], width: 0.05, color: cor_coral })
drawText({ text: "$AB \\parallel CD \\Rightarrow M, E, N$ colineares", x: 0.16, y: 2.9, fontSize: 0.42, color: cor_verde_menta })

pause()

drawText({ text: "$$\\bar{MN} = \\bar{ME} + \\bar{EN} = \\frac{AB + CD}{2}$$", x: 0.18, y: -8.9, fontSize: 0.5, color: cor_dourado })
