// ANIMAÇÃO: 4.4.1 Teorema de Pitot — IDA (circunscritível => AB+CD = BC+DA)
// Quadrilatero ABCD circunscrito a uma incircunferencia (tangente aos 4 lados em
// P,Q,R,S). Padrao didatico: justificar primeiro (de cada vertice as tangentes
// sao iguais, 4.4), depois marcar os segmentos a,b,c,d por cor.
//  AB=a+b, BC=b+c, CD=c+d, DA=d+a  =>  AB+CD = a+b+c+d = BC+DA.
// EXTRAS:
//  - param 'deformar': desliza os pontos de tangencia na incircunferencia; o
//    quadrilatero muda de forma mas continua CIRCUNSCRITO (a igualdade se mantem).
//  - param 'juntar': monta duas barras (AB+CD e BC+DA) com os segmentos a,b,c,d
//    lado a lado; terminam no MESMO ponto (iguais), inclusive ao deformar.
// PARTE 2 (volta): 2o diagrama abaixo — AB+CD=BC+DA => circunscritível (absurdo).
// OBS Conexty: usar \hat (nao \widehat); \Delta.

//drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 });      // PARTE 1 (ida)
//drawGrid({ xMin: -5, xMax: 5, yMin: -16, yMax: 5 });     // canvas total (ida + volta)

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

// cores dos segmentos tangentes por vertice (pares iguais na mesma cor)
const cor_a = cor_azul_eletrico   // de A: AP = AS
const cor_b = cor_laranja         // de B: BP = BQ
const cor_c = cor_verde_neon      // de C: CQ = CR
const cor_d = cor_rosa_choque     // de D: DR = DS

// === INCIRCUNFERENCIA (fixa) ===
const O = { x: 0, y: -0.4 }
const rho = 1.3

// angulos dos pontos de tangencia em funcao do 'deformar' (u em [-1,1])
function angs(u) {
    return { P: 250 + 22 * u, Q: 330 + 12 * u, R: 60 - 18 * u, S: 150 + 8 * u }
}
function T(th) { return { x: O.x + rho * Math.cos(th * Math.PI / 180), y: O.y + rho * Math.sin(th * Math.PI / 180) } }
// vertice = intersecao das tangentes nos pontos de angulos ti, tj (formula simetrica)
function vert(ti, tj) {
    const a = ti * Math.PI / 180, b = tj * Math.PI / 180
    const Dt = Math.sin(b - a)
    return { x: O.x + rho * (Math.sin(b) - Math.sin(a)) / Dt, y: O.y + rho * (Math.cos(a) - Math.cos(b)) / Dt }
}
function dist(U, V) { return Math.hypot(U.x - V.x, U.y - V.y) }
function tanLen(V) { return Math.sqrt(Math.max(0, dist(V, O) ** 2 - rho * rho)) }

// devolve todos os elementos do quadrilatero p/ um dado u
function figura(u) {
    const th = angs(u)
    const P = T(th.P), Q = T(th.Q), R = T(th.R), S = T(th.S)
    const A = vert(th.S, th.P), B = vert(th.P, th.Q), C = vert(th.Q, th.R), D = vert(th.R, th.S)
    return { P, Q, R, S, A, B, C, D, a: tanLen(A), b: tanLen(B), c: tanLen(C), d: tanLen(D) }
}

function meio(U, V) { return { x: (U.x + V.x) / 2, y: (U.y + V.y) / 2 } }
function rotuloFora(U, V, txt, cor) {
    const m = meio(U, V), dx = m.x - O.x, dy = m.y - O.y, n = Math.hypot(dx, dy) || 1
    drawText({ text: txt, x: m.x + 0.38 * dx / n, y: m.y + 0.38 * dy / n, fontSize: 0.36, color: cor })
}

// === PARAMS ===
const deformar = param({
    value: 0.5, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 0.2, time: 2.5 }, { value: 0.8, time: 3.0 }, { value: 0.5, time: 2.5 }],
    label: "Modificar o quadrilátero (A, B, C, D)"
})
const juntar = param({ value: 0, min: 0, max: 1, step: 0.01, buttons: [{ value: 1, time: 2.5 }], label: "Juntar os segmentos lado a lado" })

// TITULO
drawText({ text: "\\begin{center}\\textbf{Teorema de Pitot (ida)}\\end{center}", x: 0.2, y: 4.5, color: cor_titulo })

pause()

// incircunferencia + centro (fixos)
drawCircle({ center: O, radius: rho, fill: false, width: 0.035, color: cor_ciano })
drawPoint({ x: O.x, y: O.y, size: 0.07, color: cor_rosa_choque })

pause()

// quadrilatero ABCD (lados neutros) + vertices + pontos de tangencia  [segue 'deformar']
animation(deformar, (g) => {
    const f = figura((g - 0.5) * 2)
    drawSegment({ points: [f.A, f.B], width: 0.03, color: cor_verde_menta })
    drawSegment({ points: [f.B, f.C], width: 0.03, color: cor_verde_menta })
    drawSegment({ points: [f.C, f.D], width: 0.03, color: cor_verde_menta })
    drawSegment({ points: [f.D, f.A], width: 0.03, color: cor_verde_menta })
    drawPoint({ x: f.A.x, y: f.A.y, size: 0.08, color: cor_dourado }); drawText({ text: "$A$", x: f.A.x - 0.35, y: f.A.y + 0.1, fontSize: 0.42, color: cor_dourado })
    drawPoint({ x: f.B.x, y: f.B.y, size: 0.08, color: cor_dourado }); drawText({ text: "$B$", x: f.B.x - 0.05, y: f.B.y - 0.5, fontSize: 0.42, color: cor_dourado })
    drawPoint({ x: f.C.x, y: f.C.y, size: 0.08, color: cor_dourado }); drawText({ text: "$C$", x: f.C.x + 0.2, y: f.C.y - 0.1, fontSize: 0.42, color: cor_dourado })
    drawPoint({ x: f.D.x, y: f.D.y, size: 0.08, color: cor_dourado }); drawText({ text: "$D$", x: f.D.x - 0.05, y: f.D.y + 0.25, fontSize: 0.42, color: cor_dourado })
    drawPoint({ x: f.P.x, y: f.P.y, size: 0.06, color: cor_rosa_choque })
    drawPoint({ x: f.Q.x, y: f.Q.y, size: 0.06, color: cor_rosa_choque })
    drawPoint({ x: f.R.x, y: f.R.y, size: 0.06, color: cor_rosa_choque })
    drawPoint({ x: f.S.x, y: f.S.y, size: 0.06, color: cor_rosa_choque })
})

pause()

// JUSTIFICATIVA primeiro (topo)
drawText({ text: "de cada vértice, as duas tangentes são congruentes (4.4)", x: 0.2, y: 3.7, fontSize: 0.4, color: cor_coral })

pause()

// DEPOIS marca-se: cada meia-lado colorida pelo vertice (pares iguais na mesma cor)  [segue 'deformar']
animation(deformar, (g) => {
    const f = figura((g - 0.5) * 2)
    drawSegment({ points: [f.A, f.P], width: 0.05, color: cor_a }); drawSegment({ points: [f.S, f.A], width: 0.05, color: cor_a })
    drawSegment({ points: [f.P, f.B], width: 0.05, color: cor_b }); drawSegment({ points: [f.B, f.Q], width: 0.05, color: cor_b })
    drawSegment({ points: [f.Q, f.C], width: 0.05, color: cor_c }); drawSegment({ points: [f.C, f.R], width: 0.05, color: cor_c })
    drawSegment({ points: [f.R, f.D], width: 0.05, color: cor_d }); drawSegment({ points: [f.D, f.S], width: 0.05, color: cor_d })
    rotuloFora(f.A, f.P, "$a$", cor_a); rotuloFora(f.S, f.A, "$a$", cor_a)
    rotuloFora(f.P, f.B, "$b$", cor_b); rotuloFora(f.B, f.Q, "$b$", cor_b)
    rotuloFora(f.Q, f.C, "$c$", cor_c); rotuloFora(f.C, f.R, "$c$", cor_c)
    rotuloFora(f.R, f.D, "$d$", cor_d); rotuloFora(f.D, f.S, "$d$", cor_d)
})

pause()

// lados como somas + conclusao (topo)
drawText({ text: "$AB=a+b,\\ BC=b+c,\\ CD=c+d,\\ DA=d+a$", x: 0.2, y: 3.15, fontSize: 0.36, color: cor_verde_menta })
drawText({ text: "$AB+CD = a+b+c+d = BC+DA$", x: 0.2, y: 2.6, fontSize: 0.4, color: cor_dourado })

pause()

// FINAL: PUXAR os segmentos do quadrilatero ate as duas barras (AB+CD e BC+DA).
// Cada segmento colorido "voa" da sua posicao no quadrilatero ate o seu lugar na
// barra (interpolacao dos extremos por j). No fim, as duas barras terminam juntas.
const x0 = -1.7, yTop = -3.1, yBot = -3.85

// desenha o segmento (U,V) voando ate o trecho [xIni, xIni+len] na altura yBar
function voar(U, V, xIni, len, yBar, cor, j) {
    const s = { x: U.x + j * (x0 + xIni - U.x), y: U.y + j * (yBar - U.y) }
    const e = { x: V.x + j * (x0 + xIni + len - V.x), y: V.y + j * (yBar - V.y) }
    drawSegment({ points: [s, e], width: 0.1, color: cor })
}

animation(deformar, juntar, (g, j) => {
    const f = figura((g - 0.5) * 2)
    const a = f.a, b = f.b, c = f.c, d = f.d
    const total = a + b + c + d
    // barra de cima  AB+CD:  AP(a) PB(b) CR(c) RD(d)
    voar(f.A, f.P, 0, a, yTop, cor_a, j)
    voar(f.P, f.B, a, b, yTop, cor_b, j)
    voar(f.C, f.R, a + b, c, yTop, cor_c, j)
    voar(f.R, f.D, a + b + c, d, yTop, cor_d, j)
    // barra de baixo BC+DA:  BQ(b) QC(c) DS(d) SA(a)
    voar(f.B, f.Q, 0, b, yBot, cor_b, j)
    voar(f.Q, f.C, b, c, yBot, cor_c, j)
    voar(f.D, f.S, b + c, d, yBot, cor_d, j)
    voar(f.S, f.A, b + c + d, a, yBot, cor_a, j)
    // rotulos das somas + guia do fim comum (aparecem quando ja montado)
    if (j > 0.5) {
        drawText({ text: "$AB+CD$", x: x0 - 2.4, y: yTop, fontSize: 0.36, color: cor_dourado, opacity: (j - 0.5) * 2 })
        drawText({ text: "$BC+DA$", x: x0 - 2.4, y: yBot, fontSize: 0.36, color: cor_dourado, opacity: (j - 0.5) * 2 })
    }
    if (j > 0.98) {
        const xf = x0 + total
        drawSegment({ points: [{ x: xf, y: yTop + 0.35 }, { x: xf, y: yBot - 0.35 }], width: 0.02, lineDash: [0.1, 0.08], color: cor_amarelo_neon })
    }
})

pause()

// ============================================================
// PARTE 2 — VOLTA: AB+CD=BC+DA => circunscritível (2o diagrama, abaixo)
// Por absurdo: ω tangente a tres lados (AB, BC, AD); a outra tangente por C
// encontra AD em D' (ABCD' circunscrito). Se o 4o vertice D != D', o triangulo
// CDD' daria CD = CD' + D'D (ida + hipotese), contra CD < CD' + D'D. Logo D = D'.
// ============================================================
{
    const OFFV = -10.5
    const Ov = { x: 0, y: OFFV }
    const rv = 1.2
    const Av = { x: -0.84, y: OFFV - 1.2 }
    const Bv = { x: 0.84, y: OFFV - 1.2 }
    const dAD = { x: -0.342, y: 0.94 }
    const dBC = { x: 0.342, y: 0.94 }
    const Cv = { x: Bv.x + 2.6 * dBC.x, y: Bv.y + 2.6 * dBC.y }
    // angulo da outra tangente por C (px,py relativos a Ov); evita a tangente CB (340°)
    function tangPhiV(px, py) {
        const Rc = Math.hypot(px, py), al = Math.atan2(py, px), be = Math.acos(rv / Rc)
        const dd = (x) => Math.abs(((x - 340 + 540) % 360) - 180)
        const c1 = al + be, c2 = al - be
        return dd(c1 * 180 / Math.PI) > dd(c2 * 180 / Math.PI) ? c1 : c2
    }
    const phiv = tangPhiV(Cv.x - Ov.x, Cv.y - Ov.y)
    const cphi = Math.cos(phiv), sphi = Math.sin(phiv)
    const tDl = (rv - ((Av.x - Ov.x) * cphi + (Av.y - Ov.y) * sphi)) / (dAD.x * cphi + dAD.y * sphi)
    const Dl = { x: Av.x + tDl * dAD.x, y: Av.y + tDl * dAD.y }   // D' (entre A e D)
    const Ttop = { x: Ov.x + rv * cphi, y: Ov.y + rv * sphi }     // tangencia de CD'
    const tD = tDl + 0.95
    const Dv = { x: Av.x + tD * dAD.x, y: Av.y + tD * dAD.y }      // vertice real D (alem de D')
    // bissetrizes de A e B passam pelo centro I (=Ov); estende-se 18% alem de I
    const biA = { x: Av.x + 1.18 * (Ov.x - Av.x), y: Av.y + 1.18 * (Ov.y - Av.y) }
    const biB = { x: Bv.x + 1.18 * (Ov.x - Bv.x), y: Bv.y + 1.18 * (Ov.y - Bv.y) }
    const cor_lapis = '#AAAAAA'

    // titulo da parte 2
    drawText({ text: "\\begin{center}\\textbf{Teorema de Pitot (volta)}\\end{center}", x: 0.2, y: OFFV + 4.6, color: cor_titulo })

    pause()

    // quadrilatero ABCD fechado (com o lado CD ja tracado)
    drawSegment({ points: [Av, Bv], width: 0.03, color: cor_verde_menta })
    drawSegment({ points: [Bv, Cv], width: 0.03, color: cor_verde_menta })
    drawSegment({ points: [Cv, Dv], width: 0.03, color: cor_coral })          // CD fecha o quadrilatero
    drawSegment({ points: [Dv, Av], width: 0.03, color: cor_verde_menta })
    drawPoint({ x: Av.x, y: Av.y, size: 0.08, color: cor_dourado }); drawText({ text: "$A$", x: -1.11, y: -11.99, fontSize: 0.42, color: cor_dourado })
    drawPoint({ x: Bv.x, y: Bv.y, size: 0.08, color: cor_dourado }); drawText({ text: "$B$", x: 1.15, y: -11.99, fontSize: 0.42, color: cor_dourado })
    drawPoint({ x: Cv.x, y: Cv.y, size: 0.08, color: cor_dourado }); drawText({ text: "$C$", x: Cv.x + 0.2, y: Cv.y + 0.05, fontSize: 0.42, color: cor_dourado })
    drawPoint({ x: Dv.x, y: Dv.y, size: 0.08, color: cor_dourado }); drawText({ text: "$D$", x: -2.29, y: -8.33, fontSize: 0.42, color: cor_dourado })

    pause()

    // bissetrizes de A e B (tracejadas, lapis) -> encontram-se em I; depois ω
    drawSegment({ points: [Av, biA], width: 0.02, lineDash: [0.12, 0.1], color: cor_lapis })
    drawSegment({ points: [Bv, biB], width: 0.02, lineDash: [0.12, 0.1], color: cor_lapis })
    drawPoint({ x: Ov.x, y: Ov.y, size: 0.07, color: cor_rosa_choque }); drawText({ text: "$I$", x: Ov.x + 0.18, y: Ov.y + 0.02, fontSize: 0.42, color: cor_rosa_choque })
    drawCircle({ center: Ov, radius: rv, fill: false, width: 0.035, color: cor_ciano })
    drawText({ text: "$\\omega$", x: Ov.x - 0.55, y: Ov.y - 0.3, fontSize: 0.45, color: cor_ciano })
    drawText({ text: "$I$: bissetrizes de $A$ e $B$; $\\omega$ tangente a $AB, BC, AD$", x: 0.2, y: OFFV + 3.8, fontSize: 0.35, color: cor_ciano })

    pause()

    // D' entre A e D: a outra tangente por C toca ω e cruza AD em D' (ABCD' circunscrito)
    drawSegment({ points: [Cv, Dl], width: 0.03, color: cor_verde_neon })
    drawPoint({ x: Ttop.x, y: Ttop.y, size: 0.06, color: cor_rosa_choque })
    drawPoint({ x: Dl.x, y: Dl.y, size: 0.08, color: cor_verde_neon }); drawText({ text: "$D'$", x: -1.99, y: -9.71, fontSize: 0.42, color: cor_verde_neon })


    pause()

    // JUSTIFICATIVA (o absurdo) + conclusao
    drawText({ text: "de $ABCD'$:  $AB + CD' = BC + AD'$", x: -0.13, y: -13.51, fontSize: 0.44, color: cor_coral })
    drawText({ text: "hipótese:  $AB + CD = BC + AD$", x: -0.13, y: -12.59, fontSize: 0.44, color: cor_coral })
    pause()
    drawSegment({points: [{ x: -1.11, y: -13.74 }, { x: 2.74, y: -13.73 }], color: cor_coral, width: 0.03})
    drawText({ text: "$CD - CD' = AD - AD'$", x: 0.81, y: -14.51, fontSize: 0.44, color: cor_coral })

    drawText({ text: "Mas $AD - AD' = D'D \\Rightarrow CD = CD' + D'D$", x: -0.58, y: -15.55, fontSize: 0.44, color: cor_coral })

    pause()


    drawPolygon({ points: [Cv, Dv, Dl], fill: true, fillColor: cor_azul_eletrico, opacity: 0.14 })
    drawText({ text: "No $\\Delta CDD'$: $CD < CD' + D'D$ (absurdo) $\\Rightarrow D = D'$", x: -0.01, y: -16.52, fontSize: 0.44, color: cor_dourado })
}
