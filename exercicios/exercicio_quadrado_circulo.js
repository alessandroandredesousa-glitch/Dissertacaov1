// EXERCÍCIO — Quadrado inscrito + círculo verde
// Triângulo retângulo ABC (reto em B). Quadrado DBEF inscrito (lados sobre os catetos).
//   AD = 4 (no cateto AB)  |  EC = 8 (no cateto BC)  |  F sobre a hipotenusa AC
//   lado do quadrado = R = sqrt(4*8) = 4*sqrt(2)
//   Quarto de círculo centrado em B, raio R (de D a E).
//   Círculo verde: tangente ao arco e aos lados DF e FE -> r = R*(3 - 2*sqrt(2))
drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })
pause()
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
const cor_verde = '#35D435'

// escala: geometria real -> Conexty
const k = 0.58
const Bx = -3.6, By = -2.6
function P(x, y) { return { x: Bx + k * x, y: By + k * y } }

// geometria real (B na origem)
const s = 4 * Math.SQRT2                 // lado do quadrado = R
const A = P(0, 4 + s)
const B = P(0, 0)
const C = P(s + 8, 0)
const D = P(0, s)
const E = P(s, 0)
const F = P(s, s)
const Rlen = k * s
const rg = s * (3 - 2 * Math.SQRT2)      // raio do círculo verde
const G = P(s - rg, s - rg)
const rgc = k * rg

// === PARÂMETRO: separar os triângulos ADF e FEC (e voltar) ===
const desce = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 2 }, { value: 0, time: 2 }],
    label: "Separar triângulos / Voltar"
})
const deslocADF = { x: -0.4, y: -7.7 }                  // pra onde vai o triângulo ADF (esquerda)
const deslocFEC = { x: 0.4, y: -4.9 }                   // pra onde vai o triângulo FEC (direita)
function dv(pt, t, v) { return { x: pt.x + v.x * t, y: pt.y + v.y * t } }

// TRIÂNGULO ABC
drawSegment({ points: [A, B], width: 0.05 })
drawSegment({ points: [B, C], width: 0.05 })
drawSegment({ points: [A, C], width: 0.05 })

// QUADRADO (lados internos DF e FE)
drawSegment({ points: [D, F], width: 0.035 })
drawSegment({ points: [F, E], width: 0.035 })

// QUARTO DE CÍRCULO (arco D->E, centro B)
drawArc({ center: B, radius: Rlen, startAngle: 0, endAngle: Math.PI / 2, steps: 60, width: 0.03 })

// CÍRCULO VERDE
drawCircle({ center: G, radius: rgc, fill: true, fillColor: cor_coral, opacity: 0.85 })

// RAIO R (do quarto de círculo)
const Rp = { x: Bx + Rlen * Math.cos(62 * Math.PI / 180), y: By + Rlen * Math.sin(62 * Math.PI / 180) }
drawSegment({ points: [B, Rp], width: 0.025, color: cor_dourado })
drawText({ text: "$R$", x: -2.75, y: -0.75, fontSize: 0.55, color: cor_dourado })

// ÂNGULO RETO em B (fixo)
drawSector({ points: [A, B, C], radius: 0.32 })

// COTAS 4 (AD, vai com ADF) e 8 (EC, vai com FEC)
animation(desce, (t) => {
    const pA = dv(A, t, deslocADF), pD = dv(D, t, deslocADF), x4 = pA.x - 0.42
    drawSegmentLength({ points: [{ x: x4, y: pA.y }, { x: x4, y: pD.y }], size: 0.2, color: cor_dourado })
    drawText({ text: "$4$", x: x4 - 0.45, y: (pA.y + pD.y) / 2 - 0.15, fontSize: 0.55, color: cor_dourado })
})
animation(desce, (t) => {
    const pE = dv(E, t, deslocFEC), pC = dv(C, t, deslocFEC), y8 = pE.y - 0.45
    drawSegmentLength({ points: [{ x: pE.x, y: y8 }, { x: pC.x, y: y8 }], size: 0.2, color: cor_dourado })
    drawText({ text: "$8$", x: (pE.x + pC.x) / 2 - 0.1, y: y8 - 0.55, fontSize: 0.55, color: cor_dourado })
})

// PONTOS E RÓTULOS
// ADF: A, D, F
animation(desce, (t) => { const p = dv(A, t, deslocADF); drawPoint({ x: p.x, y: p.y, size: 0.06 }); drawText({ text: "$A$", x: p.x - 0.15, y: p.y + 0.35, fontSize: 0.5 }) })
animation(desce, (t) => { const p = dv(D, t, deslocADF); drawPoint({ x: p.x, y: p.y, size: 0.06 }); drawText({ text: "$D$", x: p.x + 0.18, y: p.y + 0.28, fontSize: 0.5 }) })
animation(desce, (t) => { const p = dv(F, t, deslocADF); drawPoint({ x: p.x, y: p.y, size: 0.06 }); drawText({ text: "$F$", x: p.x + 0.1, y: p.y + 0.32, fontSize: 0.5 }) })
// B fixo
drawPoint({ x: B.x, y: B.y, size: 0.06 }); drawText({ text: "$B$", x: B.x - 0.42, y: B.y - 0.3, fontSize: 0.5 })
// FEC: E, C, F (F é compartilhado -> segunda cópia)
animation(desce, (t) => { const p = dv(E, t, deslocFEC); drawPoint({ x: p.x, y: p.y, size: 0.06 }); drawText({ text: "$E$", x: p.x - 0.38, y: p.y + 0.32, fontSize: 0.5 }) })
animation(desce, (t) => { const p = dv(C, t, deslocFEC); drawPoint({ x: p.x, y: p.y, size: 0.06 }); drawText({ text: "$C$", x: p.x + 0.2, y: p.y + 0.15, fontSize: 0.5 }) })
animation(desce, (t) => { const p = dv(F, t, deslocFEC); drawPoint({ x: p.x, y: p.y, size: 0.06 }); drawText({ text: "$F$", x: p.x + 0.1, y: p.y + 0.32, fontSize: 0.5 }) })

pause()

// ===== RESOLUÇÃO =====

// lados do quadrado valendo R: DB e BE ficam; DF vai com ADF, FE vai com FEC
drawText({ text: "R", x: -3.94, y: -1.1 })                                                       // lado DB (fixo)
drawText({ text: "R", x: -2.02, y: -3.24 })                                                      // lado BE (fixo)
animation(desce, (t) => { const p = dv({ x: -2.15, y: 0.79 }, t, deslocADF); drawText({ text: "R", x: p.x, y: p.y }) })   // lado DF (ADF)
animation(desce, (t) => { const p = dv({ x: -0.03, y: -1.2 }, t, deslocFEC); drawText({ text: "R", x: p.x, y: p.y }) })   // lado FE (FEC)

// ângulos iguais nos triângulos ADF e FEC
animation(desce, (t) => { drawSector({ points: [dv(D, t, deslocADF), dv(A, t, deslocADF), dv(F, t, deslocADF)], radius: 0.5, fill: true, fillColor: cor_azul_eletrico }) })  // em A
animation(desce, (t) => { drawSector({ points: [dv(F, t, deslocFEC), dv(C, t, deslocFEC), dv(E, t, deslocFEC)], radius: 0.5, fill: true, fillColor: cor_verde_menta }) })    // em C

pause()

animation(desce, (t) => { drawSector({ points: [dv(E, t, deslocFEC), dv(F, t, deslocFEC), dv(C, t, deslocFEC)], radius: 0.5, fill: true, fillColor: cor_azul_eletrico }) })  // em F (FEC)
animation(desce, (t) => { drawSector({ points: [dv(A, t, deslocADF), dv(F, t, deslocADF), dv(D, t, deslocADF)], radius: 0.5, fill: true, fillColor: cor_verde_menta }) })    // em F (ADF)

pause()

// triângulos ADF e FEC (aplicar semelhança)
animation(desce, (t) => { drawPolygon({ points: [dv(E, t, deslocFEC), dv(F, t, deslocFEC), dv(C, t, deslocFEC)], fill: true, fillColor: cor_roxo_neon, opacity: 0.2 }) })
animation(desce, (t) => { drawPolygon({ points: [dv(A, t, deslocADF), dv(D, t, deslocADF), dv(F, t, deslocADF)], fill: true, fillColor: cor_roxo_neon, opacity: 0.2 }) })

pause()

// === CÁLCULO DE R (com param para sumir) ===
const sumirR = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 1.5 }, { value: 0, time: 1.5 }],
    label: "Sumir cálculo de R / Voltar"
})
animation(sumirR, (t) => {
    drawText({
        text: "$$\\frac{4}{R} = \\frac{R}{8} \\Rightarrow R^2 = 32 \\Rightarrow R = \\sqrt{32} = 4\\sqrt{2}$$",
        x: -0.04, y: -9.67, opacity: 1 - t
    })
})

pause()

// PONTO G: tangência do círculo com o 1/4 de circunferência (sobre a reta BG, no arco)
const distBG = Math.sqrt((G.x - B.x) * (G.x - B.x) + (G.y - B.y) * (G.y - B.y))
const Gt = { x: B.x + Rlen * (G.x - B.x) / distBG, y: B.y + Rlen * (G.y - B.y) / distBG }
drawPoint({ x: Gt.x, y: Gt.y, size: 0.06, color: cor_rosa_choque })
drawText({ text: "$G$", x: Gt.x - 0.35, y: Gt.y - 0.08, fontSize: 0.5 })
drawPoint({
    x: G.x, y: G.y, color: cor_rosa_choque, size: 0.06
})

drawSegment({
    points:[B, F], color: cor_rosa_choque
})

pause()

drawText({
    text: "$8$", color: cor_rosa_choque, x: -1.72, y: -1.25, rotation: Math.PI/4, fontSize: 0.4
})

pause()

drawSegment({
    points: [Gt, F], color: cor_verde_neon
})

drawArrow({
    points: [{ x: -0.74, y: 0.14 }, { x: -0.64, y: -0.07 }, { x: -0.25, y: -0.11 }], color: cor_verde_neon, size: 0.1, width: 0.03
})

drawText({
    text: "$8-4\\sqrt{2}$", color: cor_verde_neon, x: 0.19, y: -0.19, fontSize: 0.2
})

const Gttop = {x: G.x, y: F.y}
const Gtdireita = {x: F.x, y: G.y}
drawPoint({
    x: Gttop.x, y: Gttop.y, color: "red"
})
drawPoint({
    x: Gtdireita.x, y: Gtdireita.y, color: "red"
})

drawPolygon({
    points: [F, Gttop, G, Gtdireita], color: "red"
})

pause()

drawSegment({
    points:[G, F], color: "red"
})

drawArrow({
    points: [{ x: -0.53, y: 0.37 }, { x: 0.21, y: 0.34 }, { x: 0.44, y: 0.88 }], color: "red", size: 0.1, width: 0.03
})


drawText({
    text: "$r\\sqrt{2}$", fontSize: 0.2, color: "red", x: 0.45, y: 0.98
})

pause()

const GFDescer = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 2}]
})

drawSegment({
    points:[G, Gt], color: "red"
})
drawText({
    text: "$r$", fontSize: 0.2, color: "red", x: -1.13, y: -0.02
})

animation(GFDescer, GFDescer => {
    drawText({
    text: "$\\bar{GF} = 8 - 4 \\sqrt{2}$", color: cor_verde_neon, fontSize: 0.5,
    x: 1.48-1*GFDescer,
    y: 2.15-7*GFDescer
})
})

animation(GFDescer, GFDescer => {
    drawText({
    text: "$\\bar{GF} = r + r \\sqrt{2}$", color: "red", fontSize: 0.5,
    x: 1.43-1*GFDescer,
    y: 1.52-7*GFDescer

})
})

pause()

// === FECHAMENTO: iguala os dois GF e isola r ===
drawText({ text: "$8 - 4\\sqrt{2} = r + r\\sqrt{2}$", x: 0.4, y: -6.2, fontSize: 0.5 })

pause()

drawText({ text: "$8 - 4\\sqrt{2} = r\\,(1 + \\sqrt{2})$", x: 0.4, y: -6.95, fontSize: 0.5 })

pause()

drawText({ text: "$r = \\dfrac{8 - 4\\sqrt{2}}{1 + \\sqrt{2}} = (8 - 4\\sqrt{2})(\\sqrt{2} - 1)$", x: 0.4, y: -7.75, fontSize: 0.42 })

pause()

drawText({ text: "$r = 12\\sqrt{2} - 16 \\approx 0{,}97$", x: 0.4, y: -8.55, fontSize: 0.55, color: cor_amarelo_neon })
