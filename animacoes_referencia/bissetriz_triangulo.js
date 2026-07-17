// ANIMAÇÃO: 2.4.4 Bissetriz de um Triângulo
// Status: baseada na animação da mediana (2.4.2) — mesmo estilo

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

const cor_titulo = '#FF4500'

drawText({
    text: "\\textbf{Bissetriz de um Triângulo}", color: cor_titulo, x: 0, y: 5.1
})

pause()

drawText({
    text: "Dado $\\triangle ABC$, a \\textbf{bissetriz interna} do vértice $A$ é o segmento $\\overline{AD}$ que divide $\\widehat{A}$ em dois ângulos iguais e encontra o lado oposto $\\overline{BC}$ em $D$.",
    x: -0.06, y: 3.2,
})

// PONTOS BASE (mesma disposição da mediana)
const A = {x: -0.69, y: -2.71}
const B = {x: -2.83, y: -5.96}
const C = {x: 3.55, y: -5.39}

function dist(P, Q) {
    return Math.sqrt((P.x - Q.x) ** 2 + (P.y - Q.y) ** 2)
}

// Pé da bissetriz do ângulo em V sobre o lado oposto P1P2.
// Teorema da Bissetriz Interna: P1D / DP2 = |VP1| / |VP2|.
function bissetrizPe(V, P1, P2) {
    const d1 = dist(V, P1)
    const d2 = dist(V, P2)
    const t = d1 / (d1 + d2)
    return { x: P1.x + t * (P2.x - P1.x), y: P1.y + t * (P2.y - P1.y) }
}

const sumir_BA = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 1}], label: "Sumir bissetriz A"
})
const sumir_BB = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 1}], label: "Sumir bissetriz B"
})
const sumir_BC = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 1}], label: "Sumir bissetriz C"
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

animation(sumir_BA, sumir_BB, sumir_BC, mostrar_todas, mover_vertices, (ba, bb, bc, todas, t) => {
    const opacidade_BA = Math.max(1 - ba, todas)
    const opacidade_BB = Math.max(1 - bb, todas)
    const opacidade_BC = Math.max(1 - bc, todas)

    const A2 = { x: A.x + 1.5 * Math.sin(t * 2 * Math.PI), y: A.y + 1.0 * Math.cos(t * 2 * Math.PI) }
    const B2 = { x: B.x + 1.0 * Math.cos(t * 2 * Math.PI), y: B.y + 0.8 * Math.sin(t * 2 * Math.PI) }
    const C2 = { x: C.x + 0.8 * Math.sin(t * 2 * Math.PI), y: C.y + 1.2 * Math.cos(t * 2 * Math.PI) }

    // pés das bissetrizes (recalculados a cada frame)
    const DA2 = bissetrizPe(A2, B2, C2)  // vértice A → lado BC
    const DB2 = bissetrizPe(B2, A2, C2)  // vértice B → lado AC
    const DC2 = bissetrizPe(C2, A2, B2)  // vértice C → lado AB

    // BISSETRIZ A (geometria + texto juntos)
    drawSector({points: [B2, A2, DA2], radius: 0.55, measureMarks: 1, color: cor_laranja, opacity: opacidade_BA})
    drawSector({points: [DA2, A2, C2], radius: 0.55, measureMarks: 1, color: cor_laranja, opacity: opacidade_BA})
    drawPoint({x: DA2.x, y: DA2.y, size: 0.07, color: cor_laranja})
    drawText({text: "$D_a$", x: DA2.x + 0.2, y: DA2.y - 0.6, color: cor_laranja})
    drawSegment({points: [A2, DA2], color: cor_laranja, opacity: opacidade_BA})
    drawText({
        text: "\\textcolor{#FF6600}{$\\bullet$ Vértice $A$: bissetriz $\\overline{AD_a}$ divide $\\widehat{A}$ e corta $\\overline{BC}$ em $D_a$.}",
        x: 0.04, y: -7.84, opacity: 1 - ba
    })

    pause()

    // BISSETRIZ B
    drawSector({points: [A2, B2, DB2], radius: 0.55, measureMarks: 1, color: cor_rosa_choque, opacity: opacidade_BB})
    drawSector({points: [DB2, B2, C2], radius: 0.55, measureMarks: 1, color: cor_rosa_choque, opacity: opacidade_BB})
    drawPoint({x: DB2.x, y: DB2.y, size: 0.07, color: cor_rosa_choque})
    drawText({text: "$D_b$", x: DB2.x + 0.4, y: DB2.y + 0.2, color: cor_rosa_choque})
    drawSegment({points: [B2, DB2], color: cor_rosa_choque, opacity: opacidade_BB})
    drawText({
        text: "\\textcolor{#FF1493}{$\\bullet$ Vértice $B$: bissetriz $\\overline{BD_b}$ divide $\\widehat{B}$ e corta $\\overline{AC}$ em $D_b$.}",
        x: 0.25, y: -7.78, opacity: 1 - bb
    })

    pause()

    // BISSETRIZ C
    drawSector({points: [A2, C2, DC2], radius: 0.55, measureMarks: 1, color: cor_ciano, opacity: opacidade_BC})
    drawSector({points: [DC2, C2, B2], radius: 0.55, measureMarks: 1, color: cor_ciano, opacity: opacidade_BC})
    drawPoint({x: DC2.x, y: DC2.y, size: 0.07, color: cor_ciano})
    drawText({text: "$D_c$", x: DC2.x - 0.5, y: DC2.y - 0.1, color: cor_ciano})
    drawSegment({points: [C2, DC2], color: cor_ciano, opacity: opacidade_BC})
    drawText({
        text: "\\textcolor{#00FFFF}{$\\bullet$ Vértice $C$: bissetriz $\\overline{CD_c}$ divide $\\widehat{C}$ e corta $\\overline{AB}$ em $D_c$.}",
        x: 0.08, y: -7.81, opacity: 1 - bc
    })

    pause()

    // INCENTRO — aparece ao "Mostrar todas"
    const a_len = dist(B2, C2)
    const b_len = dist(A2, C2)
    const c_len = dist(A2, B2)
    const perim = a_len + b_len + c_len
    const I = {
        x: (a_len * A2.x + b_len * B2.x + c_len * C2.x) / perim,
        y: (a_len * A2.y + b_len * B2.y + c_len * C2.y) / perim
    }

    drawPoint({x: I.x, y: I.y, size: 0.09, color: cor_verde_neon, opacity: todas})
    drawText({text: "$I$", x: I.x + 0.2, y: I.y + 0.25, color: cor_verde_neon, opacity: todas})
    drawText({
        text: "\\textcolor{#39FF14}{As três bissetrizes concorrem no \\textbf{incentro} $I$.}",
        x: 0.18, y: -7.78, opacity: todas
    })
})
