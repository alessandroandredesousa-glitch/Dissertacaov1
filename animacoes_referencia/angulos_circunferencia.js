// ANIMAÇÃO: 4.5 Teorema do Ângulo Inscrito — segue a DEMONSTRAÇÃO do site.
// P1 Enunciado (V desliza -> inscrito = metade; Corolário 1) | P2 Caso 1 |
// P3 Caso 2 (centro interior) | P4 Caso 3 (centro exterior) | P5 Tales.
// AJUSTE MANUAL: as alturas dos 5 diagramas sao consts (yEnun..yTales); edite-as
// para reposicionar cada diagrama empilhado.
// OBS Conexty: usar \hat (nao \widehat); \Delta; \frac (nao \tfrac/\dfrac);
//   drawSector em RADIANOS (vira o simbolo de reto a 90°).

//drawGrid({ xMin: -5, xMax: 5, yMin: -30, yMax: 5 });

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
const R = 1.7
function ptOn(c, r, deg) { return { x: c.x + r * Math.cos(deg * PI / 180), y: c.y + r * Math.sin(deg * PI / 180) } }
function angleDeg(P, X, Y) {
    const ux = X.x - P.x, uy = X.y - P.y, vx = Y.x - P.x, vy = Y.y - P.y
    return Math.round(Math.abs(Math.atan2(ux * vy - uy * vx, ux * vx + uy * vy)) * 180 / PI)
}

// === ALTURAS DOS DIAGRAMAS (ajuste manual) ===
const yEnun = 0.6
const yCaso1 = -6.7
const yCaso2 = -14.7
const yCaso3 = -22.7
const yTales = -30.7

// TITULO
drawText({ text: "\\begin{center}\\textbf{Teorema do ângulo inscrito}\\end{center}", x: 0.2, y: 4.6, color: cor_titulo })

pause()

// ============================================================
// P1 — ENUNCIADO (V desliza -> inscrito = metade)
// ============================================================
const O1 = { x: 0, y: yEnun }
const A1 = ptOn(O1, R, 210), B1 = ptOn(O1, R, 330)

drawCircle({ center: O1, radius: R, fill: false, width: 0.035, color: cor_ciano })
drawPoint({ x: O1.x, y: O1.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$O$", x: -0.28, y: 0.66, fontSize: 0.4, color: cor_rosa_choque })
drawPoint({ x: A1.x, y: A1.y, size: 0.08, color: cor_dourado }); drawText({ text: "$A$", x: A1.x - 0.4, y: A1.y - 0.1, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: B1.x, y: B1.y, size: 0.08, color: cor_dourado }); drawText({ text: "$B$", x: B1.x + 0.2, y: B1.y - 0.1, fontSize: 0.42, color: cor_dourado })

pause()

drawSegment({ points: [O1, A1], width: 0.028, color: cor_amarelo_neon })
drawSegment({ points: [O1, B1], width: 0.028, color: cor_amarelo_neon })
drawSector({ points: [A1, O1, B1], radius: 0.55, fill: true, fillColor: cor_roxo_neon, opacity: 0.5 })
drawText({ text: " $" + angleDeg(O1, A1, B1) + "^\\circ$", x: 0, y: -0.5, fontSize: 0.42, color: cor_roxo_neon })

pause()

const desliza = param({ value: 0.5, min: 0, max: 1, step: 0.001, buttons: [{ value: 0.15, time: 2.5 }, { value: 0.85, time: 3 }, { value: 0.5, time: 2.5 }], label: "Deslizar V (enunciado)" })
animation(desliza, (s) => {
    const V = ptOn(O1, R, 40 + 100 * s)
    drawSegment({ points: [V, A1], width: 0.028, color: cor_verde_menta })
    drawSegment({ points: [V, B1], width: 0.028, color: cor_verde_menta })
    drawSector({ points: [A1, V, B1], radius: 0.55, fill: true, fillColor: cor_laranja, opacity: 0.5 })
    drawPoint({ x: V.x, y: V.y, size: 0.08, color: cor_dourado }); drawText({ text: "$V$", x: V.x, y: V.y + 0.35, fontSize: 0.42, color: cor_dourado })
    drawText({ text: "$ " + angleDeg(V, A1, B1) + "^\\circ $", x: 0.04, y: 1.3, fontSize: 0.4, color: cor_laranja })
})

drawText({
    text: "$A \\hat{V} B = \\frac{1}{2} \\cdot A \\hat{O} B$ ", color: cor_laranja, fontSize: 0.5, x: 3.16, y: 2.14
})

pause()

// ============================================================
// P2 — CASO 1 (um lado passa pelo centro)
// ============================================================
const O2 = { x: 0, y: yCaso1 }
const V2 = ptOn(O2, R, 90), B2 = ptOn(O2, R, 270), A2 = ptOn(O2, R, 205)

drawText({ text: "\\begin{center}\\textbf{Caso 1: um lado passa pelo centro}\\end{center}", x: 0.2, y: yCaso1 + 3.4, color: cor_titulo })
pause()
drawCircle({ center: O2, radius: R, fill: false, width: 0.035, color: cor_ciano })
drawPoint({ x: O2.x, y: O2.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$O$", x: 0.27, y: -6.8, fontSize: 0.4, color: cor_rosa_choque })


drawSegment({ points: [V2, B2], width: 0.028, color: cor_amarelo_neon })
drawSegment({ points: [V2, A2], width: 0.028, color: cor_verde_menta })
drawPoint({ x: V2.x, y: V2.y, size: 0.08, color: cor_dourado }); drawText({ text: "$V$", x: 0.02, y: -4.67, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: A2.x, y: A2.y, size: 0.08, color: cor_dourado }); drawText({ text: "$A$", x: -1.86, y: -7.66, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: B2.x, y: B2.y, size: 0.08, color: cor_dourado }); drawText({ text: "$B$", x: 0, y: -8.92, fontSize: 0.42, color: cor_dourado })
drawSegment({ points: [O2, A2], width: 0.028, color: cor_amarelo_neon })

pause()

drawPolygon({ points: [O2, V2, A2], fill: true, fillColor: cor_azul_eletrico, opacity: 0.13 })




pause()

drawText({ text: "$OV = OA \\Rightarrow \\Delta OVA$ isósceles $\\Rightarrow O\\hat{V}A = O\\hat{A}V = \\alpha$", x: 0.2, y: yCaso1 - 2.7, fontSize: 0.37, color: cor_coral })

drawSegmentMeasureMark({ points: [O2, V2], size: 0.16, quantity: 1, color: cor_amarelo_neon })
drawSegmentMeasureMark({ points: [O2, A2], size: 0.16, quantity: 1, color: cor_amarelo_neon })
drawSector({ points: [A2, V2, B2], radius: 0.5, fill: true, fillColor: cor_laranja, opacity: 0.5 }); drawText({ text: "$\\alpha$", x: -0.21, y: -5.82, fontSize: 0.4, color: cor_laranja })
drawSector({ points: [O2, A2, V2], radius: 0.4, fill: true, fillColor: cor_laranja, opacity: 0.5 }); drawText({ text: "$\\alpha$", x: -1.03, y: -7.06, fontSize: 0.4, color: cor_laranja })


pause()
drawText({ text: "$A\\hat{O}B$ é ângulo externo $\\Rightarrow A\\hat{O}B = 2\\alpha$", x: 0.2, y: yCaso1 - 3.3, fontSize: 0.37, color: cor_coral })



drawSector({ points: [A2, O2, B2], radius: 0.5, fill: true, fillColor: cor_roxo_neon, opacity: 0.5 }); drawText({ text: "$2\\alpha$", x: -0.48, y: -7.56, fontSize: 0.4, color: cor_roxo_neon })

pause()

// ============================================================
// P3 — CASO 2 (centro interior)
// ============================================================
const O3 = { x: 0, y: yCaso2 }
const V3 = ptOn(O3, R, 90), A3 = ptOn(O3, R, 200), B3 = ptOn(O3, R, 340), C3 = ptOn(O3, R, 270)

drawText({ text: "\\begin{center}\\textbf{Caso 2: centro interior (diâmetro divide)}\\end{center}", x: 0.2, y: yCaso2 + 3.4, color: cor_titulo })
drawCircle({ center: O3, radius: R, fill: false, width: 0.035, color: cor_ciano })
drawSegment({ points: [V3, C3], width: 0.026, lineDash: [0.12, 0.1], color: cor_amarelo_neon })
drawSegment({ points: [V3, A3], width: 0.028, color: cor_verde_menta })
drawSegment({ points: [V3, B3], width: 0.028, color: cor_verde_menta })
drawSegment({ points: [O3, A3], width: 0.024, color: cor_roxo_neon })
drawSegment({ points: [O3, B3], width: 0.024, color: cor_roxo_neon })
drawSector({ points: [A3, V3, C3], radius: 0.5, fill: true, fillColor: cor_laranja, opacity: 0.45 })
drawSector({ points: [C3, V3, B3], radius: 0.7, fill: true, fillColor: cor_coral, opacity: 0.45 })
drawPoint({ x: O3.x, y: O3.y, size: 0.07, color: cor_rosa_choque }); drawText({ text: "$O$", x: -0.17, y: -15.14, fontSize: 0.4, color: cor_rosa_choque })
drawPoint({ x: V3.x, y: V3.y, size: 0.08, color: cor_dourado }); drawText({ text: "$V$", x: 0.11, y: -12.8, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: A3.x, y: A3.y, size: 0.08, color: cor_dourado }); drawText({ text: "$A$", x: -1.86, y: -15.54, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: B3.x, y: B3.y, size: 0.08, color: cor_dourado }); drawText({ text: "$B$", x: 1.87, y: -15.65, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: C3.x, y: C3.y, size: 0.07, color: cor_verde_neon }); drawText({ text: "$C$", x: C3.x + 0.05, y: C3.y - 0.4, fontSize: 0.4, color: cor_verde_neon })

pause()

drawText({ text: "$A\\hat{V}C = \\frac{1}{2}A\\hat{O}C$ e $C\\hat{V}B = \\frac{1}{2}C\\hat{O}B$ (Caso 1)", x: 0.2, y: yCaso2 - 2.7, fontSize: 0.47, color: cor_coral })
drawText({ text: "somando: $A\\hat{V}B = \\frac{1}{2}A\\hat{O}B$", x: -0.04, y: -18.16, fontSize: 0.47, color: cor_dourado })

pause()

// ============================================================
// P4 — CASO 3 (centro exterior)
// ============================================================
const O4 = { x: 0, y: yCaso3 }
const V4 = ptOn(O4, R, 90), A4 = ptOn(O4, R, 300), B4 = ptOn(O4, R, 345), C4 = ptOn(O4, R, 270)

drawText({ text: "\\begin{center}\\textbf{Caso 3: centro exterior (diferença)}\\end{center}", x: 0.2, y: yCaso3 + 3.4, color: cor_titulo })
drawCircle({ center: O4, radius: R, fill: false, width: 0.035, color: cor_ciano })
// diametro VC (dashed) e as cordas VA, VB

drawSegment({ points: [V4, A4], width: 0.028, color: cor_verde_menta })
drawSegment({ points: [V4, B4], width: 0.028, color: cor_verde_menta })
drawText({ text: "$V$", x: V4.x + 0.05, y: V4.y + 0.35, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: A4.x, y: A4.y, size: 0.08, color: cor_dourado }); drawText({ text: "$A$", x: A4.x + 0.15, y: A4.y - 0.3, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: B4.x, y: B4.y, size: 0.08, color: cor_dourado }); drawText({ text: "$B$", x: B4.x + 0.2, y: B4.y, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: V4.x, y: V4.y, size: 0.08, color: cor_dourado });
drawPoint({ x: O4.x, y: O4.y, size: 0.07, color: cor_rosa_choque }); drawText({ text: "$O$", x: O4.x - 0.4, y: O4.y + 0.05, fontSize: 0.4, color: cor_rosa_choque })
// raios OA, OB (o raio OC segue no diametro) -> deixam o ANGULO CENTRAL visivel
drawSegment({ points: [O4, A4], width: 0.024, color: cor_amarelo_neon })
drawSegment({ points: [O4, B4], width: 0.024, color: cor_amarelo_neon })


pause()


drawSegment({ points: [V4, C4], width: 0.026, lineDash: [0.12, 0.1], color: cor_amarelo_neon })


pause()

// no vertice V: os inscritos CV̂B e CV̂A (a diferenca deles e o angulo AV̂B)
drawSector({ points: [C4, V4, B4], radius: 0.9, fill: true, fillColor: cor_roxo_neon, opacity: 0.4 })
drawSector({ points: [C4, V4, A4], radius: 0.62, fill: true, fillColor: cor_laranja, opacity: 0.55 })
// no centro O: os centrais CÔB e CÔA (mesma construcao por diferenca)
drawSector({ points: [C4, O4, B4], radius: 0.72, fill: true, fillColor: cor_roxo_neon, opacity: 0.4 })
drawSector({ points: [C4, O4, A4], radius: 0.46, fill: true, fillColor: cor_laranja, opacity: 0.55 })


drawPoint({ x: C4.x, y: C4.y, size: 0.07, color: cor_verde_neon }); drawText({ text: "$C$", x: C4.x - 0.05, y: C4.y - 0.4, fontSize: 0.4, color: cor_verde_neon })

pause()

drawText({ text: "$A\\hat{V}B = C\\hat{V}B - C\\hat{V}A = \\frac{1}{2}C\\hat{O}B - \\frac{1}{2}C\\hat{O}A$", x: 0.2, y: yCaso3 - 2.7, fontSize: 0.37, color: cor_coral })
drawText({ text: "$= \\frac{1}{2}A\\hat{O}B$", x: 0.2, y: yCaso3 - 3.3, fontSize: 0.37, color: cor_dourado })

pause()

// ============================================================
// P5 — TALES: AB diâmetro => AV̂B = 90°
// ============================================================
const O5 = { x: 0, y: yTales }
const A5 = ptOn(O5, R, 180), B5 = ptOn(O5, R, 0)

drawText({ text: "\\begin{center}\\textbf{Corolário: ângulo em semicírculo}\\end{center}", x: 0.2, y: yTales + 3.3, color: cor_titulo })
drawCircle({ center: O5, radius: R, fill: false, width: 0.035, color: cor_ciano })
drawSegment({ points: [A5, B5], width: 0.028, color: cor_amarelo_neon })
drawPoint({ x: O5.x, y: O5.y, size: 0.07, color: cor_rosa_choque })
drawPoint({ x: A5.x, y: A5.y, size: 0.06, color: cor_dourado }); drawText({ text: "$A$", x: A5.x - 0.4, y: A5.y, fontSize: 0.42, color: cor_dourado })
drawPoint({ x: B5.x, y: B5.y, size: 0.06, color: cor_dourado }); drawText({ text: "$B$", x: B5.x + 0.2, y: B5.y, fontSize: 0.42, color: cor_dourado })
drawText({ text: "$A\\hat{O}B = 180^\\circ$ (diâmetro)", x: -0.03, y: -33.32, fontSize: 0.37, color: cor_roxo_neon })

pause()

const tales = param({ value: 0.5, min: 0, max: 1, step: 0.001, buttons: [{ value: 0.15, time: 2.5 }, { value: 0.85, time: 3 }, { value: 0.5, time: 2.5 }], label: "Deslizar V (Tales)", x: 5.62, y: -26.95 })
animation(tales, (s) => {
    const V = ptOn(O5, R, 25 + 130 * s)
    drawSegment({ points: [V, A5], width: 0.028, color: cor_verde_menta })
    drawSegment({ points: [V, B5], width: 0.028, color: cor_verde_menta })
    drawSector({ points: [A5, V, B5], radius: 0.3, fill: true, fillColor: cor_verde_neon, opacity: 0.5 })
    drawPoint({ x: V.x, y: V.y, size: 0.06, color: cor_dourado }); drawText({ text: "$V$", x: V.x, y: V.y + 0.35, fontSize: 0.42, color: cor_dourado })
    drawText({ text: "$A\\hat{V}B = " + angleDeg(V, A5, B5) + "^\\circ$", x: 1.3, y: yTales + 2, fontSize: 0.42, color: cor_verde_neon })
})
