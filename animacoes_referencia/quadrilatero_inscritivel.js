// ANIMAÇÃO: 4.7 Quadrilátero Inscritível — segue a DEMONSTRAÇÃO do site.
// P1 (ida): ABCD inscrito. Â subtende o arco BCD; Ĉ subtende o arco BAD; juntos
//    completam a circunferencia (360°) => Â + Ĉ = 180°.
// P2 (volta): hipotese Â+Ĉ=180 (logo B̂+D̂=180). Γ passa por A,B,C (4.2). A
//    diagonal AC: todo ponto X de Γ do lado oposto a B ve AC sob 180°-B̂ (arco
//    capaz, 4.6). Como D̂ = 180°-B̂ e D esta desse lado, D cai nesse arco => D∈Γ.
// AJUSTE MANUAL: alturas yP1, yP2 (consts) movem cada diagrama INTEIRO (circulo,
//    pontos, rotulos e textos) de uma vez. Os rotulos usam offset relativo ao ponto.
// OBS Conexty: usar \hat (nao \widehat); \Delta; \frac; drawSector RADIANOS.

//drawGrid({ xMin: -5, xMax: 5, yMin: -12, yMax: 5 });

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

const PI = Math.PI
const R = 1.9
// angulos (graus) dos vertices na circunferencia, em ordem A,B,C,D
const gA = 190, gB = 280, gC = 20, gD = 110

function ptC(O, deg) { return { x: O.x + R * Math.cos(deg * PI / 180), y: O.y + R * Math.sin(deg * PI / 180) } }
function angleDeg(P, X, Y) {
    const ux = X.x - P.x, uy = X.y - P.y, vx = Y.x - P.x, vy = Y.y - P.y
    return Math.round(Math.abs(Math.atan2(ux * vy - uy * vx, ux * vx + uy * vy)) * 180 / PI)
}
function arcDeg(O, d0, d1, cor, w) {
    drawCurve({ x: t => O.x + R * Math.cos(t), y: t => O.y + R * Math.sin(t), tStart: d0 * PI / 180, tEnd: d1 * PI / 180, steps: 90, width: w, color: cor })
}

// === alturas dos diagramas ===
const yP1 = 2.2
const yP2 = -7.0

// TITULO
drawText({ text: "\\begin{center}\\textbf{Quadrilátero inscritível}\\end{center}", x: 0.2, y: 5.1, color: cor_titulo })

pause()

// ============================================================
// P1 — IDA: Â subtende arco BCD, Ĉ subtende arco BAD => Â+Ĉ = 180°
// ============================================================
const O1 = { x: 0, y: yP1 }
const A1 = ptC(O1, gA), B1 = ptC(O1, gB), C1 = ptC(O1, gC), D1 = ptC(O1, gD)

// circunferencia + quadrilatero ABCD inscrito
drawCircle({ center: O1, radius: R, fill: false, width: 0.03, color: cor_ciano })
drawSegment({ points: [A1, B1], width: 0.028, color: cor_verde_menta })
drawSegment({ points: [B1, C1], width: 0.028, color: cor_verde_menta })
drawSegment({ points: [C1, D1], width: 0.028, color: cor_verde_menta })
drawSegment({ points: [D1, A1], width: 0.028, color: cor_verde_menta })
drawPoint({ x: O1.x, y: O1.y, size: 0.06, color: cor_rosa_choque })
// rotulos: offset relativo ao ponto (acompanham o ponto e o yP1)
drawPoint({ x: A1.x, y: A1.y, size: 0.08, color: cor_dourado }); drawText({ text: "$A$", x: A1.x - 0.519, y: A1.y - 0.070, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: B1.x, y: B1.y, size: 0.08, color: cor_dourado }); drawText({ text: "$B$", x: B1.x - 0.030, y: B1.y - 0.409, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: C1.x, y: C1.y, size: 0.08, color: cor_dourado }); drawText({ text: "$C$", x: C1.x + 0.335, y: C1.y - 0.100, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: D1.x, y: D1.y, size: 0.08, color: cor_dourado }); drawText({ text: "$D$", x: D1.x - 0.080, y: D1.y + 0.165, fontSize: 0.42, color: cor_dourado })

pause()

// Â e o arco BCD (de B a D passando por C) — mesma cor
arcDeg(O1, gB, gD + 360, cor_coral, 0.06)                 // arco BCD (B 280 -> C 20 -> D 110)
drawSector({ points: [D1, A1, B1], radius: 0.5, fill: true, fillColor: cor_coral, opacity: 0.5 })
drawText({ text: "$\\hat{A} = \\frac{1}{2}\\,$arco$\\,BCD$", x: -3.11, y: 3.1, fontSize: 0.36, color: cor_coral })
drawArrow({
    points: [{ x: -1.76, y: 3.27, }, { x: 0, y: 2.85 }, { x: -1.23, y: 2.01, },], color: cor_coral, size: 0.2, width: 0.02
})

pause()

// Ĉ e o arco BAD (de B a D passando por A) — mesma cor
arcDeg(O1, gD, gB, cor_azul_eletrico, 0.06)               // arco BAD (D 110 -> A 190 -> B 280)
drawSector({ points: [B1, C1, D1], radius: 0.5, fill: true, fillColor: cor_azul_eletrico, opacity: 0.5 })
drawText({ text: "$\\hat{C} = \\frac{1}{2}\\,$arco$\\,BAD$", x: 2.84, y: 3.98, fontSize: 0.36, color: cor_azul_eletrico })
drawArrow({
    points: [{ x: 1.53, y: 4.06, }, { x: 0, y: 2.85 }, { x: 1.16, y: 2.65, },], color: cor_azul_eletrico, size: 0.2, width: 0.02
})

pause()

// conclusao: os dois arcos completam 360° => Â+Ĉ = 180
drawText({ text: "arco$\\,BCD$ + arco$\\,BAD$ = $360^\\circ \\Rightarrow \\hat{A}+\\hat{C} = " + (angleDeg(A1, D1, B1) + angleDeg(C1, B1, D1)) + "^\\circ$", x: 0.2, y: yP1 - 3, fontSize: 0.36, color: cor_dourado })

pause()

// ============================================================
// P2 — VOLTA: hipotese Â+Ĉ=180 => ABCD inscritivel
//   (mexer em yP2 move o diagrama inteiro)
// ============================================================
const O2 = { x: 0, y: yP2 }
const A2 = ptC(O2, gA), B2 = ptC(O2, gB), C2 = ptC(O2, gC), D2 = ptC(O2, gD)
const Bhat = angleDeg(B2, A2, C2)      // B̂

drawText({ text: "\\begin{center}\\textbf{Ângulos opostos suplementares}\\end{center}", x: 0.22, y: -2.85, color: cor_titulo })

pause()

// Γ passa por A, B, C (4.2)
drawCircle({ center: O2, radius: R, fill: false, width: 0.03, color: cor_ciano })

drawSegment({ points: [A2, B2], width: 0.028, color: cor_verde_menta })
drawSegment({ points: [B2, C2], width: 0.028, color: cor_verde_menta })
drawPoint({ x: O2.x, y: O2.y, size: 0.06, color: cor_rosa_choque })
drawPoint({ x: A2.x, y: A2.y, size: 0.08, color: cor_dourado }); drawText({ text: "$A$", x: A2.x - 0.519, y: A2.y - 0.070, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: B2.x, y: B2.y, size: 0.08, color: cor_dourado }); drawText({ text: "$B$", x: B2.x - 0.030, y: B2.y - 0.409, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: C2.x, y: C2.y, size: 0.08, color: cor_dourado }); drawText({ text: "$C$", x: C2.x + 0.335, y: C2.y - 0.100, fontSize: 0.42, color: cor_dourado })
drawText({ text: "$\\Gamma$ passa por $A$, $B$, $C$", x: 3.27, y: -8.12, fontSize: 0.34, color: cor_ciano })

pause()

// diagonal AC + o angulo B̂
drawSegment({ points: [A2, C2], width: 0.026, color: cor_amarelo_neon })
drawSector({ points: [A2, B2, C2], radius: 0.55, fill: true, fillColor: cor_roxo_neon, opacity: 0.5 })
drawText({ text: "$" + Bhat + "^\\circ$", x: 0.24, y: -8.19, fontSize: 0.4, color: cor_roxo_neon })

pause()

// arco de Γ do lado oposto a B (arco capaz de AC sob 180°-B̂): X desliza
arcDeg(O2, gC, gA, cor_verde_neon, 0.06)     // arco AC do lado de D (C 20 -> D 110 -> A 190)
const posX = s => ptC(O2, gC + (0.12 + 0.76 * s) * (gA - gC))   // X no arco em funcao de s

// X (ponto generico do arco capaz) desliza: AX̂C = 180°-B̂ permanece constante
const desliza = param({ value: 0.5, min: 0, max: 1, step: 0.001, buttons: [{ value: 0.12, time: 2.5 }, { value: 0.88, time: 2.5 }, { value: 0.5, time: 2.5 }], label: "Deslizar X pelo arco", x: 3.82, y: -4.84 })
animation(desliza, (s) => {
    const X = posX(s)
    drawSegment({ points: [X, A2], width: 0.024, color: cor_verde_menta })
    drawSegment({ points: [X, C2], width: 0.024, color: cor_verde_menta })
    drawSector({ points: [A2, X, C2], radius: 0.45, fill: true, fillColor: cor_laranja, opacity: 0.5 })
    drawPoint({ x: X.x, y: X.y, size: 0.07, color: cor_dourado })
    drawText({ text: "$X$", x: X.x + 0.1, y: X.y + 0.2, fontSize: 0.4, color: cor_dourado })
    drawText({ text: "$A\\hat{X}C = " + angleDeg(X, A2, C2) + "^\\circ = 180^\\circ-\\hat{B}$", x: -0.06, y: -9.89, fontSize: 0.34, color: cor_laranja })
})

pause()

// D e o angulo D̂ (o lapis desenha no avanco)
drawSegment({ points: [C2, D2], width: 0.028, color: cor_verde_menta })
drawSegment({ points: [D2, A2], width: 0.028, color: cor_verde_menta })
drawSector({ points: [A2, D2, C2], radius: 0.5, fill: true, fillColor: cor_laranja, opacity: 0.6 })
drawPoint({ x: D2.x, y: D2.y, size: 0.09, color: cor_verde_neon }); drawText({ text: "$D$", x: D2.x - 0.080, y: D2.y + 0.165, fontSize: 0.42, color: cor_verde_neon })
drawText({ text: "$\\hat{D} = 180^\\circ-\\hat{B} \\Rightarrow D$ no arco capaz $\\Rightarrow D \\in \\Gamma$", x: 0.2, y: yP2 - 3.8, fontSize: 0.34, color: cor_dourado })

pause()

// conclusao
drawText({ text: "$D \\in \\Gamma \\Rightarrow ABCD$ é inscritível", x: -0.06, y: yP2 - 4.4, fontSize: 0.34, color: cor_verde_neon })
