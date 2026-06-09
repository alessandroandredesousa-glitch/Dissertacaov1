// ANIMAÇÃO: 1.4.2 Mediana de um Triângulo
// Status: CONCLUÍDA — usar como referência de estilo
//
// Destaques desta animação:
// - param com botões "sumir" individuais por mediana + "mostrar todas"
// - Math.max(1 - sumir, mostrar_todas) para controle de opacidade
// - animation() com múltiplos params (ma, mb, mc, todas, t)
// - Vértices móveis com animação senoidal (ida e volta, 3s cada)
// - pontoMedio() recalculado dentro da animation para acompanhar movimento
// - Pause dentro da animation para revelar medianas/textos progressivamente

//drawGrid({xMin: -5, xMax: 5, yMin: -5, yMax: 5});

//CORES
const cor_amarelo_neon = '#FFFF00'
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_laranja = '#FF6600'
const cor_rosa_choque = '#FF1493'
const cor_roxo_neon = '#BF00FF'
const cor_azul_eletrico = '#00B0FF'
const cor_coral = '#FF6B6B'
const cor_verde_menta = '#00FA9A'
const cor_vermelho_bordo = '#970000'

drawText({
    text: "\\textbf{1.4.2 Mediana de um Triângulo}", color: cor_vermelho_bordo, x: 0, y: 4.1
})

pause()

drawText({
    text: "Dado um triângulo $\\triangle ABC$, a \\textbf{mediana} relativa ao lado $\\overline{AB}$ é o segmento que une o vértice $C$ ao ponto médio $M$ do lado $\\overline{AB}$.",
    x: -0.06, y: 3.08
})

// PONTOS BASE
const A = {x: -0.69, y: -2.71}
const B = {x: -2.83, y: -5.96}
const C = {x: 3.55, y: -5.39}

function pontoMedio(P1, P2) {
    return {
        x: (P1.x + P2.x) / 2,
        y: (P1.y + P2.y) / 2
    }
}

const M_A = pontoMedio(B, C)
const M_B = pontoMedio(A, C)
const M_C = pontoMedio(A, B)

const sumir_MA = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 1}], label: "Sumir mediana A"
})
const sumir_MB = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 1}], label: "Sumir mediana B"
})
const sumir_MC = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 1}], label: "Sumir mediana C"
})
const mostrar_todas = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 1}], label: "Mostrar todas"
})
const mover_vertices = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 3}, {value: 0, time: 3}], label: "Mover vértices"
})

// TRIÂNGULO E VÉRTICES — dentro da animação mover_vertices
animation(mover_vertices, (t) => {
    const A2 = { x: A.x + 1.5 * Math.sin(t * 2 * Math.PI), y: A.y + 1.0 * Math.cos(t * 2 * Math.PI) }
    const B2 = { x: B.x + 1.0 * Math.cos(t * 2 * Math.PI), y: B.y + 0.8 * Math.sin(t * 2 * Math.PI) }
    const C2 = { x: C.x + 0.8 * Math.sin(t * 2 * Math.PI), y: C.y + 1.2 * Math.cos(t * 2 * Math.PI) }

    drawPolygon({points: [A2, B2, C2]})

    drawPoint({x: A2.x, y: A2.y, size: 0.07})
    drawText({text: "A", x: A2.x + 0.2, y: A2.y + 0.2})

    drawPoint({x: B2.x, y: B2.y, size: 0.07})
    drawText({text: "B", x: B2.x - 0.3, y: B2.y - 0.4})

    drawPoint({x: C2.x, y: C2.y, size: 0.07})
    drawText({text: "C", x: C2.x + 0.2, y: C2.y - 0.4})
})

pause()

animation(sumir_MA, sumir_MB, sumir_MC, mostrar_todas, mover_vertices, (ma, mb, mc, todas, t) => {
    const opacidade_MA = Math.max(1 - ma, todas)
    const opacidade_MB = Math.max(1 - mb, todas)
    const opacidade_MC = Math.max(1 - mc, todas)

    const A2 = { x: A.x + 1.5 * Math.sin(t * 2 * Math.PI), y: A.y + 1.0 * Math.cos(t * 2 * Math.PI) }
    const B2 = { x: B.x + 1.0 * Math.cos(t * 2 * Math.PI), y: B.y + 0.8 * Math.sin(t * 2 * Math.PI) }
    const C2 = { x: C.x + 0.8 * Math.sin(t * 2 * Math.PI), y: C.y + 1.2 * Math.cos(t * 2 * Math.PI) }

    const MA2 = pontoMedio(B2, C2)
    const MB2 = pontoMedio(A2, C2)
    const MC2 = pontoMedio(A2, B2)

        // MEDIANA A
    drawPoint({x: MA2.x, y: MA2.y, size: 0.07, color: cor_laranja})
    drawText({text: "$M_a$", x: MA2.x + 0.2, y: MA2.y - 0.6, color: cor_laranja})
    drawSegment({points: [A2, MA2], color: cor_laranja, opacity: opacidade_MA})


    pause()

    drawText({
        text: "\\textcolor{#FF6600}{$\\bullet$ Mediana relativa ao lado $\\overline{BC}$: segmento $\\overline{AM_a}$, onde $M_a$ é o ponto médio de $\\overline{BC}$.}",
        x: 0.14, y: -7.99, opacity: 1 - ma
    })

    pause()

    // MEDIANA B
    drawPoint({x: MB2.x, y: MB2.y, size: 0.07, color: cor_rosa_choque})
    drawText({text: "$M_b$", x: MB2.x + 0.4, y: MB2.y + 0.2, color: cor_rosa_choque})
    drawSegment({points: [B2, MB2], color: cor_rosa_choque, opacity: opacidade_MB})

    pause()

    drawText({
        text: "\\textcolor{#FF1493}{$\\bullet$ Mediana relativa ao lado $\\overline{AC}$: segmento $\\overline{BM_b}$, onde $M_b$ é o ponto médio de $\\overline{AC}$.}",
        x: 0.17, y: -7.96, opacity: 1 - mb
    })

    pause()

    // MEDIANA C
    drawPoint({x: MC2.x, y: MC2.y, size: 0.07, color: cor_ciano})
    drawText({text: "$M_c$", x: MC2.x - 0.5, y: MC2.y - 0.1, color: cor_ciano})
    drawSegment({points: [C2, MC2], color: cor_ciano, opacity: opacidade_MC})

    pause()

    drawText({
        text: "\\textcolor{#00FFFF}{$\\bullet$ Mediana relativa ao lado $\\overline{AB}$: segmento $\\overline{CM_c}$, onde $M_c$ é o ponto médio de $\\overline{AB}$.}",
        x: 0, y: -8, opacity: 1 - mc
    })
})
