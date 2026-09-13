// ANIMAÇÃO: 2.9.4 Distância de Ponto a Reta
// Segue a ordem do site:
//  1) reta r + ponto P; a perpendicular PP' (P' = pe/projecao) é a DISTANCIA.
//  2) um oblíquo PQ (Q desliza sobre r): o triangulo PP'Q é retangulo em P'.
//  3) PADRAO DIDATICO — justificar primeiro: o angulo reto em P' é o maior do
//     triangulo; ao maior angulo opoe-se o maior lado -> PQ (hipotenusa) é o maior.
//     DEPOIS marca-se PP' < PQ.  => a perpendicular é o menor caminho.
//  4) FINAL: parametro 'limpar' apaga as anotacoes em volta e mostra os
//     comprimentos AO VIVO (PP' fixo, PQ atualizando com Q).
// OBS Conexty: usar \hat (nao \widehat); \Delta; drawSector em RADIANOS.

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
const P = { x: 0, y: 2.4 }           // ponto fora de r
const Pfoot = { x: 0, y: 0 }         // P' = projecao ortogonal (pe da perpendicular)

function pontoQ(s) { return { x: -3.2 + 6.4 * s, y: 0 } }

// TITULO
drawText({ text: "\\begin{center}\\textbf{Distância de ponto a reta}\\end{center}", x: 0.2, y: 4.3, color: cor_titulo })

pause()

// reta r + ponto P
drawCurve({ x: t => t, y: t => 0, tStart: -4, tEnd: 4, steps: 2, width: 0.035, color: cor_ciano })
drawText({ text: "$r$", x: 4.41, y: -0.1, fontSize: 0.5, color: cor_ciano })
drawPoint({ x: P.x, y: P.y, size: 0.1, color: cor_dourado })
drawText({ text: "$P$", x: 0.06, y: 2.76, fontSize: 0.5, color: cor_dourado })

pause()

// perpendicular PP' (a distancia) + pe P' + angulo reto em P'
drawSegment({ points: [P, Pfoot], width: 0.04, color: cor_verde_neon })
drawPoint({ x: Pfoot.x, y: Pfoot.y, size: 0.09, color: cor_rosa_choque })
drawText({ text: "$P'$", x: 0.06, y: -0.64, fontSize: 0.45, color: cor_rosa_choque })
drawSector({ points: [{ x: 1, y: 0 }, Pfoot, P], radius: 0.32, fill: true, fillColor: cor_verde_neon, opacity: 0.45 })

// params: deslizar Q e (no final) limpar as anotacoes
const desliza = param({
    value: 0.0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 0.3, time: 2.0 }, { value: 1, time: 3.0 }, {value: 0, time: 3}],
    label: "Deslizar Q sobre a reta"
})
const limpar = param({ value: 0, min: 0, max: 1, step: 0.01, buttons: [{ value: 1, time: 1.5 }], label: "Limpar e mostrar os comprimentos" })

// rotulo "d = PP' (distância)" — some quando limpar
animation(limpar, (L) => {
    if (L < 0.98) drawText({ text: "$d = PP'$ (distância)", x: 1.82, y: 1.23, fontSize: 0.42, color: cor_verde_neon, opacity: 1 - L })
})

pause()

// oblíquo PQ (Q desliza) + triangulo retangulo PP'Q (triangulo some ao limpar)
animation(desliza, limpar, (s, L) => {
    const Q = pontoQ(s)
    if (Math.abs(Q.x) > 0.35) {
        drawPolygon({ points: [P, Pfoot, Q], fill: true, fillColor: cor_azul_eletrico, opacity: 0.13 * (1 - L) })
    }
    drawSegment({ points: [P, Q], width: 0.03, color: cor_coral })
    drawPoint({ x: Q.x, y: Q.y, size: 0.08, color: cor_laranja })
    drawText({ text: "$Q$", x: Q.x, y: Q.y - 0.6, fontSize: 0.45, color: cor_laranja })
})

pause()

// JUSTIFICATIVA primeiro (texto) — some ao limpar
animation(limpar, (L) => {
    if (L < 0.98) {
        drawText({ text: "em $\\Delta PP'Q$: reto em $P'$ é o maior ângulo", x: -0.16, y: -2.87, fontSize: 0.42, color: cor_coral, opacity: 1 - L })
        drawText({ text: "ao maior ângulo opõe-se o maior lado $\\Rightarrow PQ$ é o maior", x: -0.1, y: -3.82, fontSize: 0.42, color: cor_coral, opacity: 1 - L })
    }
})

pause()

// DEPOIS marca-se PP' < PQ — some ao limpar
animation(limpar, (L) => {
    if (L < 0.98) drawText({ text: "$PP' < PQ$", x: 1.82, y: 0.66, fontSize: 0.42, color: cor_verde_neon, opacity: 1 - L })
})

pause()

// fecho — permanece visível e sobe 3 unidades quando 'limpar' é acionado
animation(limpar, (L) => {
    drawText({ text: "a perpendicular $PP'$ é o menor caminho de $P$ a $r$", x: 0, y: -4.8 + 3 * L, fontSize: 0.4, color: cor_verde_neon })
})

pause()

// FINAL: comprimentos AO VIVO (aparecem ao limpar; PQ acompanha Q)
animation(desliza, limpar, (s, L) => {
    if (L > 0.02) {
        const Q = pontoQ(s)
        const dPP = P.y                                   // PP' = 2.4 (fixo)
        const dPQ = Math.sqrt(Q.x * Q.x + P.y * P.y)       // PQ (ao vivo)
        // apenas os valores dos segmentos (sem "PP' ="/"PQ =")
        drawText({ text: "$" + dPP.toFixed(1) + "$", x: -0.44, y: 0.86, fontSize: 0.42, color: cor_verde_neon, opacity: L })
        const mid = { x: (P.x + Q.x) / 2, y: (P.y + Q.y) / 2 }
        // desloca o rotulo ate +0.5 p/ a direita conforme Q vai ao fim (s: 0.1 -> 0.9)
        const shift = 0.625 * (s - 0.1)
        drawText({ text: "$" + dPQ.toFixed(1) + "$", x: mid.x - 0.35 + shift, y: mid.y + 0.25, fontSize: 0.42, color: cor_coral, opacity: L })
    }
})
