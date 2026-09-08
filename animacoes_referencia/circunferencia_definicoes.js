// ANIMAÇÃO: 4.1 Definições Iniciais (Circunferência)
// Elementos desenhados um a um (o lápis desenha a cada pause). Parâmetros só onde há
// MOVIMENTO: girar P; mover Q (interior->exterior); mover B (corda->diâmetro); alinhar A,O,B.
// O arco é desenhado como polilinha (drawArc dava um traço "chuviscado").
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

// === GEOMETRIA ===
const O = { x: 0, y: 0.5 }
const r = 2.3
function ptAng(a) { const t = a * Math.PI / 180; return { x: O.x + r * Math.cos(t), y: O.y + r * Math.sin(t) } }
const A = ptAng(205), B = ptAng(335)   // extremos do arco (a corda/diâmetro usa seus próprios ângulos)


// TÍTULO
drawText({ text: "\\begin{center}\\textbf{Circunferência: definições}\\end{center}", x: 0.2, y: 4.3, color: cor_titulo })

pause()

// === centro O ===
drawPoint({ x: O.x, y: O.y, size: 0.09, color: cor_rosa_choque })
drawText({ text: "$O$", x: O.x - 0.30, y: O.y - 0.05, fontSize: 0.5, color: cor_rosa_choque })

pause()

// === circunferência + ponto P girando (raio OP = r constante) ===
const girar = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 3 }, { value: 0, time: 3 }], label: "Girar o ponto P sobre a circunferência" })
animation(girar, (t) => {
    const ang = 2 * Math.PI * t
    const P = { x: O.x + r * Math.cos(ang), y: O.y + r * Math.sin(ang) }
    drawCircle({ center: O, radius: r, fill: false, width: 0.04, color: cor_ciano })
    drawSegment({ points: [O, P], width: 0.03, color: cor_amarelo_neon })
    drawPoint({ x: P.x, y: P.y, size: 0.08, color: cor_amarelo_neon })
    drawText({ text: "$P$", x: P.x + 0.4, y: P.y - 0.1, fontSize: 0.45, color: cor_amarelo_neon })
    drawText({ text: "$r$", x: (O.x + P.x) / 2, y: (O.y + P.y-0.2) / 2 + 0.25, fontSize: 0.45, color: cor_amarelo_neon })
})

pause()

drawText({ text: "Circunferência: os pontos $P$ com $OP = r$", x: 0.37, y: -3.67, fontSize: 0.45, color: cor_dourado })

pause()

// === posição de um ponto: interior / sobre / exterior (parâmetro — há movimento) ===
// d = 0.7 + 3.0*m; fica SOBRE a circunferência (d = r) quando m = (r-0.7)/3 = 0.5333
const mover = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 0.5333, time: 2 }, { value: 1, time: 2 }, { value: 0, time: 3 }], label: "Mover Q (parar sobre / ir ao exterior / voltar)" })
animation(mover, (m) => {
    const d = 0.7 + 3.0 * m
    const dir = 60 * Math.PI / 180
    const Q = { x: O.x + d * Math.cos(dir), y: O.y + d * Math.sin(dir) }
    drawSegment({ points: [O, Q], width: 0.02, lineDash: [0.12, 0.1], color: cor_verde_menta })
    drawPoint({ x: Q.x, y: Q.y, size: 0.07, color: cor_laranja })
    const pos = d < r - 0.06 ? "interior" : (d > r + 0.06 ? "exterior" : "sobre")
    drawText({ text: "$Q$ " + pos, x: Q.x + 0.25, y: Q.y + 0.25, fontSize: 0.4, color: cor_laranja})
})

pause()   // <- mova Q (OQ<r interior, OQ=r sobre, OQ>r exterior)

// === círculo: a região (OP <= r) ===
drawCircle({ center: O, radius: r, fill: true, fillColor: cor_azul_eletrico, opacity: 0.18 })
drawArrow({points:[ { x: -0.55, y: 2.24 },{ x: -3.24, y: 1.34 }, { x: -3.64, y: 2.7 },], width: 0.02, color: cor_azul_eletrico})
drawText({ text: "Círculo: a região ($OP \\le r$)", x: -2.57, y: 3.06, fontSize: 0.42, color: cor_azul_eletrico })

pause()

// === corda AB que vira diâmetro ao passar por O (movendo B) ===
const virarDiametro = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 3 }, { value: 0, time: 3 }], label: "Mover B: corda → diâmetro (passa por O)" })
animation(virarDiametro, (s) => {
    const angB = 335 + 50 * s
    const A2 = ptAng(205), B2 = ptAng(angB)
    const diff = ((angB - 205) % 360 + 360) % 360
    const ehDiam = Math.abs(diff - 180) < 2.5
    const cor = ehDiam ? cor_roxo_neon : cor_coral
    drawSegment({ points: [A2, B2], width: 0.04, color: cor })
    drawPoint({ x: A2.x, y: A2.y, size: 0.08, color: cor }); drawText({ text: "$A$", x: A2.x - 0.35, y: A2.y - 0.05, fontSize: 0.45, color: cor })
    drawPoint({ x: B2.x, y: B2.y, size: 0.08, color: cor }); drawText({ text: "$B$", x: B2.x + 0.4, y: B2.y - 0.05, fontSize: 0.45, color: cor })
    drawArrow({
        points: [{ x: 0.61, y: -0.65+1*s }, { x: 2.25, y: -1.34 }, { x: 2.8, y: -2.03}], size: 0.2, width: 0.03, color: cor
    })
    drawText({ text: ehDiam ? "diâmetro: passa por $O$ ($AB = 2r$)" : "corda: extremos na circunferência", x: 2.27, y: -2.58, fontSize: 0.42, color: cor })

})

pause()

// === o diâmetro é a MAIOR corda — alinhar C, O, D (parâmetro; há movimento) ===
// C, O, D formam um triângulo (na parte de cima): CD < CO + OD = 2r. Ao alinhar
// (D oposto a C), o triângulo degenera e vale a igualdade CD = 2r -> maior corda.
const alinhar = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 3 }, { value: 0, time: 3 }], label: "Alinhar C, O, D (CD → 2r)" })
animation(alinhar, (s) => {
    const angC = 50, angD = 160 + 70 * s   // C girado +30° (50°); D: 160° -> 230° (anti-horário), oposto a C => diâmetro
    const Cm = ptAng(angC), Dm = ptAng(angD)
    const diff = ((angD - angC) % 360 + 360) % 360
    const alinhado = Math.abs(diff - 180) < 2.5
    const cor = alinhado ? cor_roxo_neon : cor_coral
    drawPolygon({ points: [Cm, O, Dm], fill: true, fillColor: cor_dourado, opacity: 0.12 })
    drawSegment({ points: [O, Cm], width: 0.03, color: cor_amarelo_neon })   // raio OC
    drawSegment({ points: [O, Dm], width: 0.03, color: cor_amarelo_neon })   // raio OD
    drawSegment({ points: [Cm, Dm], width: 0.04, color: cor })               // corda CD
    drawPoint({ x: Cm.x, y: Cm.y, size: 0.08, color: cor }); drawText({ text: "$C$", x: Cm.x + 0.2, y: Cm.y + 0.05, fontSize: 0.45, color: cor })
    drawPoint({ x: Dm.x, y: Dm.y, size: 0.08, color: cor }); drawText({ text: "$D$", x: Dm.x - 0.35, y: Dm.y - 0.4, fontSize: 0.45, color: cor })
    drawText({ text: "$r$", x: (O.x + Cm.x) / 2 + 0.1, y: (O.y + Cm.y) / 2 + 0.15, fontSize: 0.42, color: cor_amarelo_neon })
    drawText({ text: "$r$", x: (O.x + Dm.x) / 2 - 0.15, y: (O.y + Dm.y) / 2 + 0.15, fontSize: 0.42, color: cor_amarelo_neon })
    drawText({
        text: alinhado ? "$CD = CO + OD = 2r$: a maior corda é o diâmetro" : "$CD < CO + OD = 2r$  (desigualdade triangular)",
        x: 0.41, y: -4.58, fontSize: 0.42, color: alinhado ? cor_roxo_neon : cor_dourado
    })
})

pause()

pause()

drawArc({ center: O, radius: r, startAngle: 205 * Math.PI / 180, endAngle: 335 * Math.PI / 180, steps: 90, width: 0.08, color: cor_verde_neon })
drawArrow({
    points: [{ x: -1.82, y: -1.45 }, { x: -2.42, y: -1.95 }, { x: -3.02, y: -2.05 }], width: 0.02, size: 0.2, color: cor_verde_neon
})
drawText({
    text: "arco $AB$", x: -3.99, y: -2.19, color: cor_verde_neon, fontSize: 0.4
})
