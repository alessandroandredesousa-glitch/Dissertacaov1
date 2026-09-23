// ANIMAÇÃO: 4.6 Arco Capaz — segue a ordem do site.
// P1 (lugar geometrico): dado AB e o angulo α, P desliza pelo arco Γ e AP̂B = α
//    permanece constante (todo ponto do arco ve AB sob α). [param]
// P2 (construcao): mediatriz m de AB; por A a semirreta a 90°-α; encontro em O;
//    arco de centro O e raio OA. O central AÔB = 2α justifica.
// AJUSTE MANUAL: alturas yP1, yP2 (consts).
// OBS Conexty: usar \hat (nao \widehat); \Delta; \frac; drawSector RADIANOS.

//drawGrid({ xMin: -5, xMax: 5, yMin: -9, yMax: 5 });

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
const cor_lapis = '#AAAAAA'

const PI = Math.PI
const alpha = 50                 // angulo do arco capaz (graus)
const aHalf = 1.6                // metade da corda AB
const OMv = aHalf / Math.tan(alpha * PI / 180)   // distancia do centro a AB
const Rv = aHalf / Math.sin(alpha * PI / 180)    // raio

function angleDeg(P, X, Y) {
    const ux = X.x - P.x, uy = X.y - P.y, vx = Y.x - P.x, vy = Y.y - P.y
    return Math.round(Math.abs(Math.atan2(ux * vy - uy * vx, ux * vx + uy * vy)) * 180 / PI)
}
// arco maior de A ate B (passando por baixo do centro O) — usa raio Rv (P2)
function arcoMaior(O, A, B, cor, w) {
    const tA = Math.atan2(A.y - O.y, A.x - O.x)
    let tB = Math.atan2(B.y - O.y, B.x - O.x)
    if (tB < tA) tB += 2 * PI
    drawCurve({ x: t => O.x + Rv * Math.cos(t), y: t => O.y + Rv * Math.sin(t), tStart: tA, tEnd: tB, steps: 90, width: w, color: cor })
    return { tA, tB }
}
// ponto no circulo de centro O, raio R, no angulo deg
function ptC(O, R, deg) { return { x: O.x + R * Math.cos(deg * PI / 180), y: O.y + R * Math.sin(deg * PI / 180) } }
// arco (de A a B) que passa POR CIMA do centro O, raio R (o arco que contem P)
function arcoTopo(O, R, A, B, cor, w) {
    let tA = Math.atan2(A.y - O.y, A.x - O.x), tB = Math.atan2(B.y - O.y, B.x - O.x)
    if (tA < tB) tA += 2 * PI
    drawCurve({ x: t => O.x + R * Math.cos(t), y: t => O.y + R * Math.sin(t), tStart: tB, tEnd: tA, steps: 110, width: w, color: cor })
}

// === alturas dos dois diagramas ===
const yP1 =2.3
const yP2 = -5.7

// TITULO
drawText({ text: "\\begin{center}\\textbf{Arco capaz}\\end{center}", x: 0.2, y: 5.5, color: cor_titulo })

pause()

// ============================================================
// P1 — LUGAR GEOMETRICO (circulo fixo)
//   mover P (mesma corda AB) -> o angulo NAO muda
//   mover B (muda a corda AB) -> o angulo muda
// ============================================================
const O1 = { x: 0, y: yP1 }
const Rc = 1.9
const A1 = ptC(O1, Rc, 215)          // A fixo (baixo-esquerda)

// circunferencia de suporte (fixa) + centro + A
drawCircle({ center: O1, radius: Rc, fill: false, width: 0.03, color: cor_ciano })
drawPoint({ x: O1.x, y: O1.y, size: 0.06, color: cor_rosa_choque })
drawPoint({ x: A1.x, y: A1.y, size: 0.08, color: cor_dourado }); drawText({ text: "$A$", x: A1.x - 0.4, y: A1.y, fontSize: 0.42, color: cor_dourado })

pause()

const desliza = param({ value: 0.5, min: 0, max: 1, step: 0.001, buttons: [{ value: 0.1, time: 2.5 }, { value: 0.9, time: 3 }, { value: 0.5, time: 2.5 }], label: "Mover P (mesma corda AB)" })
const moveB = param({ value: 0.5, min: 0, max: 1, step: 0.001, buttons: [{ value: 0.1, time: 2.5 }, { value: 0.9, time: 3 }, { value: 0.5, time: 2.5 }], label: "Mover B (muda a corda AB)" })

animation(desliza, moveB, (s, sB) => {
    const P = ptC(O1, Rc, 150 - 100 * s)     // P no arco de cima (150° -> 50°)
    const B = ptC(O1, Rc, 290 + 55 * sB)     // B no arco de baixo-direita (290° -> 345°)
    // arco capaz Γ (o que contem P), a corda AB, as cordas PA/PB e o angulo em P
    arcoTopo(O1, Rc, A1, B, cor_verde_neon, 0.05)
    drawSegment({ points: [A1, B], width: 0.03, color: cor_amarelo_neon })
    drawSegment({ points: [P, A1], width: 0.026, color: cor_verde_menta })
    drawSegment({ points: [P, B], width: 0.026, color: cor_verde_menta })
    drawSector({ points: [A1, P, B], radius: 0.5, fill: true, fillColor: cor_laranja, opacity: 0.5 })
    drawPoint({ x: B.x, y: B.y, size: 0.08, color: cor_dourado }); drawText({ text: "$B$", x: B.x + 0.2, y: B.y, fontSize: 0.42, color: cor_dourado })
    drawPoint({ x: P.x, y: P.y, size: 0.08, color: cor_dourado }); drawText({ text: "$P$", x: P.x + 0.1, y: P.y + 0.3, fontSize: 0.42, color: cor_dourado })
    drawText({ text: "$" + angleDeg(P, A1, B) + "^\\circ$", x: -1.2+1.9*s, y: 2.67+0.2*s, fontSize: 0.42, color: cor_laranja, })
})


pause()

drawText({ text: "movendo $P$ (mesma corda $AB$): o ângulo não muda", x: 0.44, y: -0.54, fontSize: 0.36, color: cor_verde_menta })
drawText({ text: "movendo $B$ (muda a corda $AB$): o ângulo muda", x: 0.38, y: -1.15, fontSize: 0.36, color: cor_coral })

pause()

// ============================================================
// P2 — CONSTRUCAO (mediatriz + semirreta a 90°-α em A -> O)
// ============================================================
const M2 = { x: 0, y: yP2 }
const A2 = { x: -aHalf, y: yP2 }, B2 = { x: aHalf, y: yP2 }
const O2 = { x: 0, y: yP2 - OMv }

drawText({ text: "\\begin{center}\\textbf{Construção do arco capaz}\\end{center}", x: 0.2, y: yP2 + 2.2, color: cor_titulo })

pause()

// AB + ponto medio M + mediatriz m
drawSegment({ points: [A2, B2], width: 0.03, color: cor_amarelo_neon })
drawSegment({ points: [{ x: 0, y: yP2 + 0.9 }, { x: 0, y: yP2 - OMv - Rv - 0.3 }], width: 0.02, lineDash: [0.12, 0.1], color: cor_lapis })
drawText({ text: "$m$", x: 0.2, y: yP2 + 0.75, fontSize: 0.4, color: cor_lapis })
drawPoint({ x: M2.x, y: M2.y, size: 0.06, color: cor_rosa_choque }); drawText({ text: "$M$", x: 0.1, y: yP2 + 0.28, fontSize: 0.38, color: cor_rosa_choque })
drawPoint({ x: A2.x, y: A2.y, size: 0.08, color: cor_dourado }); drawText({ text: "$A$", x: A2.x - 0.4, y: A2.y + 0.05, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: B2.x, y: B2.y, size: 0.08, color: cor_dourado }); drawText({ text: "$B$", x: B2.x + 0.3, y: B2.y + 0.05, fontSize: 0.42, color: cor_dourado })

pause()

// por A, a semirreta que forma 90°-α com AB (ate O); angulo 90-α em A
drawSegment({ points: [A2, O2], width: 0.024, color: cor_azul_eletrico })
drawSector({ points: [B2, A2, O2], radius: 0.5, fill: true, fillColor: cor_azul_eletrico, opacity: 0.5 })
drawText({ text: "$90^\\circ-\\alpha$", x: A2.x + 0.45, y: A2.y - 0.5, fontSize: 0.36, color: cor_azul_eletrico })

pause()

// centro O (encontro com a mediatriz)
drawPoint({ x: O2.x, y: O2.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$O$", x: O2.x + 0.2, y: O2.y + 0.05, fontSize: 0.42, color: cor_rosa_choque })
drawSegment({ points: [O2, B2], width: 0.024, color: cor_amarelo_neon })   // raio OB (OA ja e a semirreta)

pause()

// o arco de centro O e raio OA + o central AÔB = 2α
arcoMaior(O2, A2, B2, cor_verde_neon, 0.05)
drawSector({ points: [A2, O2, B2], radius: 0.55, fill: true, fillColor: cor_roxo_neon, opacity: 0.5 })
drawText({ text: "$A\\hat{O}B = 2\\alpha$", x: 0.04, y: -7.52, fontSize: 0.38, color: cor_roxo_neon })

pause()

drawText({ text: "no $\\Delta AMO$: $O\\hat{A}M = 90^\\circ-\\alpha \\Rightarrow A\\hat{O}M = \\alpha \\Rightarrow A\\hat{O}B = 2\\alpha$", x: 0.2, y: yP2 - OMv - Rv - 0.9, fontSize: 0.34, color: cor_coral })
