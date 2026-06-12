// ANIMAÇÃO: 1.6 Congruência LAA_o (Lado, Ângulo e Ângulo Oposto)
// Status: CONCLUÍDA — usar como referência de estilo
//
// DESTAQUES PRINCIPAIS:
// - Dois triângulos empilhados verticalmente (ABC em cima, DEF embaixo com offset)
// - DEF tem F ligeiramente estendido (C.x + 0.8) para garantir EF > BC na demo
// - P dinâmico em EF via param: tP_inicial = BC_len / EF_len (posição EP = BC)
// - Rótulo "P" some quando tP > 0.97 (P coincide com F): opacity: tP > 0.97 ? 0 : 1
// - Três casos para BC vs EF enunciados em texto com \begin{flushright}
// - Caso 1 (BC=EF): LAL direto, marcas somem via sumir_caso1 param
// - Caso 2 (EF>BC): demonstração em 4 pausas com P, polígonos, setores, ABSURDO
// - Caso 3 (EF<BC): análogo, apenas enunciado
// - função hipotese(x, y): bloco reutilizável de texto de hipótese com offset

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

drawText({
    text: "\\begin{center} 1.6 Congruência $LAA_o$ (Lado, Ângulo e Ângulo Oposto) \\end{center}", x: 0.13, y: 6.43, color: cor_titulo,
})

const sumir_caso1 = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 1 }],
    label: "Sumir marcas caso 1"
})

const A = { x: 0.47, y: 4.06 }
drawPoint({ x: A.x, y: A.y, size: 0.05 })
drawText({ text: "A", x: 0.29, y: 4.25 })

const B = { x: -2.03, y: 0.98 }
drawPoint({ x: B.x, y: B.y, size: 0.05 })
drawText({ text: "B", x: -2.3, y: 0.53 })

const C = { x: 4.23, y: 1.38 }
drawPoint({ x: C.x, y: C.y, size: 0.05 })
drawText({ text: "C", x: 4.36, y: 0.83 })

drawPolygon({ points: [A, B, C] })

const offset = -4.5
const D = { x: A.x, y: A.y + offset }
const E = { x: B.x, y: B.y + offset }
const F = { x: C.x + 0.8, y: C.y + offset }   // EF > BC

drawPoint({ x: D.x, y: D.y, size: 0.05 })
drawText({ text: "D", x: D.x - 0.14, y: D.y + 0.16 })

drawPoint({ x: E.x, y: E.y, size: 0.05 })
drawText({ text: "E", x: E.x - 0.29, y: E.y - 0.56 })

drawPoint({ x: F.x, y: F.y, size: 0.05 })
drawText({ text: "F", x: F.x + 0.30, y: F.y - 0.36 })

drawPolygon({ points: [D, E, F] })

// P em EF com EP = BC (posição inicial)
const BC_len = Math.sqrt((C.x - B.x) ** 2 + (C.y - B.y) ** 2)
const EF_len = Math.sqrt((F.x - E.x) ** 2 + (F.y - E.y) ** 2)
const tP_inicial = BC_len / EF_len

const pos_P = param({
    value: tP_inicial,
    min: 0,
    max: 1,
    step: 0.001,
    label: "Posição de P em EF"
})

function hipotese(x, y) {
    drawText({ text: "Hipótese:", x: x, y: y, fontSize: 0.45 })
    drawText({ text: "$\\overline{AB} = \\overline{DE}$", x: x, y: y - 0.55, fontSize: 0.45 })
    drawText({ text: "$\\hat{B} \\equiv \\hat{E}$", x: x, y: y - 1.05, fontSize: 0.45 })
    drawText({ text: "$\\hat{C} \\equiv \\hat{F}$", x: x, y: y - 1.55, fontSize: 0.45 })
}

hipotese(-3, -0.6)

drawSegmentMeasureMark({ points: [A, B], size: 0.3, quantity: 2, color: cor_amarelo_neon })
drawSegmentMeasureMark({ points: [D, E], size: 0.3, quantity: 2, color: cor_amarelo_neon })

drawSector({ points: [C, B, A], radius: 0.4, fill: true, fillColor: cor_azul_eletrico })
drawSector({ points: [F, E, D], radius: 0.4, fill: true, fillColor: cor_azul_eletrico })

drawSector({ points: [A, C, B], radius: 0.4, fill: true, fillColor: cor_rosa_choque })
drawSector({ points: [D, F, E], radius: 0.4, fill: true, fillColor: cor_rosa_choque })

drawText({
    text: "Temos três situações de $\\overline{BC}$ vs $\\overline{EF}:$",
    x: -1.25, y: -5.85, fontSize: 0.5
})

pause()

drawText({
    text: "\\begin{flushright}$\\bullet$ \\ Se $\\overline{BC} = \\overline{EF}$: temos o caso LAL $\\Rightarrow \\Delta ABC \\equiv \\Delta DEF$ \\ $\\checkmark$\\end{flushright}",
    x: -1.27, y: -6.71, fontSize: 0.45
})
animation(sumir_caso1, (s1) => {
    drawSegmentMeasureMark({ points: [B, C], color: cor_roxo_neon, size: 0.3, quantity: 1, opacity: 1 - s1 })
    drawSegmentMeasureMark({ points: [E, F], color: cor_roxo_neon, size: 0.3, quantity: 1, opacity: 1 - s1 })
})

pause()

drawText({
    text: "\\begin{flushright}$\\bullet$ \\ Se $\\overline{EF} > \\overline{BC}$:\\end{flushright}",
    x: -2.99, y: -8.56, fontSize: 0.45
})

pause()

animation(pos_P, (tP) => {
    const P = { x: E.x + tP * (F.x - E.x), y: E.y + tP * (F.y - E.y) }

    drawPoint({ x: P.x, y: P.y, size: 0.05, color: cor_verde_menta })
    drawText({ text: "P", x: P.x + 0.05, y: P.y - 0.5, color: cor_verde_menta, opacity: tP > 0.97 ? 0 : 1 })
    drawSegment({ points: [D, P], color: cor_verde_menta, lineDash: [0.1] })
    drawSegmentMeasureMark({ points: [E, P], size: 0.3, quantity: 1, color: cor_laranja })
    drawSegmentMeasureMark({ points: [B, C], size: 0.3, quantity: 1, color: cor_laranja })

    pause()

    drawPolygon({ points: [E, D, P], fill: true, fillColor: cor_verde_menta, opacity: 0.3 })
    drawPolygon({ points: [A, B, C], fill: true, fillColor: cor_verde_menta, opacity: 0.3 })

    pause()

    drawSector({ points: [A, C, B], fill: true, fillColor: cor_rosa_choque, radius: 0.5 })
    drawSector({ points: [D, P, E], fill: true, fillColor: cor_rosa_choque, radius: 0.5 })

    pause()

    drawText({ text: "\\textbf{$A\\hat{C}B \\equiv D\\hat{P}E \\equiv D\\hat{F}E$}", fontSize: 0.4, x: 3.34, y: -4.17, color: "red" })

    pause()

    drawText({ text: "\\textbf{ABSURDO!}", fontSize: 0.4, x: 3.15, y: -4.67, color: "red" })
})

pause()

drawText({
    text: "\\begin{flushright}$\\bullet$ \\ Se $\\overline{EF} < \\overline{BC}$: análogo ao anterior. \\ $\\checkmark$\\end{flushright}",
    x: -1.08, y: -9.63, fontSize: 0.45
})
