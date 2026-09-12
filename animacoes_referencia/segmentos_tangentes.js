// ANIMAÇÃO: 4.4 Segmentos Tangentes; Posições Relativas de Duas Circunferências
// Segue a ordem do site:
//  PARTE 1 (segmentos tangentes) - construção estática desenhada pelo lápis:
//    P exterior -> duas tangentes PA e PB (raios OA, OB perpendiculares) [Fig 4.8]
//    -> corda AB e triângulos OAB e PAB isósceles -> PA = PB           [Fig 4.9]
//    -> reta OP bissecta A^PB e A^OB.
//  PARTE 2 (duas circunferências) - MOVIMENTO: d = O1O2 varia [param],
//    exteriores -> tangentes ext. -> secantes -> tangentes int. -> internas/concentricas.
//    Classificacao ao vivo comparando d com R+r e |R-r|.                [Fig 4.10]
// OBS Conexty: usar \hat (nao \widehat). drawArc/angulos em RADIANOS. Fundo preto.
// overline so no segmento-objeto; medidas em letras simples.

//drawGrid({ xMin: -5, xMax: 5, yMin: -13, yMax: 5 });

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

// ============================================================
// PARTE 1 — SEGMENTOS TANGENTES DE UM PONTO EXTERIOR
// ============================================================
const O = { x: 0, y: 0 }
const r1 = 2.0
const dP = 3.4                       // distancia de P ao centro O
const P = { x: 0, y: -dP }
const th = Math.acos(r1 / dP)        // meio-angulo dos raios ate os pontos de tangencia
const A = { x: r1 * Math.sin(th), y: -r1 * Math.cos(th) }   // ponto de tangencia direito
const B = { x: -r1 * Math.sin(th), y: -r1 * Math.cos(th) }  // ponto de tangencia esquerdo

// TITULO
drawText({ text: "\\begin{center}\\textbf{Segmentos tangentes}\\end{center}", x: 0.2, y: 3.3, color: cor_titulo })

pause()

// circunferencia + centro
drawCircle({ center: O, radius: r1, fill: false, width: 0.04, color: cor_ciano })
drawPoint({ x: O.x, y: O.y, size: 0.09, color: cor_rosa_choque })
drawText({ text: "$O$", x: O.x, y: O.y + 0.3, fontSize: 0.5, color: cor_rosa_choque })

pause()

// ponto exterior P
drawPoint({ x: P.x, y: P.y, size: 0.1, color: cor_dourado })
drawText({ text: "$P$", x: P.x, y: P.y - 0.7, fontSize: 0.5, color: cor_dourado })

pause()

// duas tangentes PA e PB + pontos de tangencia + raios OA, OB (perpendiculares)
drawSegment({ points: [P, A], width: 0.035, color: cor_verde_menta })
drawSegment({ points: [P, B], width: 0.035, color: cor_verde_menta })
drawPoint({ x: A.x, y: A.y, size: 0.09, color: cor_rosa_choque })
drawPoint({ x: B.x, y: B.y, size: 0.09, color: cor_rosa_choque })
drawText({ text: "$A$", x: 1.9, y: -1.45, fontSize: 0.45, color: cor_rosa_choque })
drawText({ text: "$B$", x: -1.97, y: -1.47, fontSize: 0.45, color: cor_rosa_choque })
pause()
drawSegment({ points: [O, A], width: 0.03, color: cor_amarelo_neon })
drawSegment({ points: [O, B], width: 0.03, color: cor_amarelo_neon })
// simbolos de angulo reto em A e B (raio perpendicular a tangente)
drawSector({ points: [O, A, P], radius: 0.3, fill: true, fillColor: cor_verde_neon, opacity: 0.6 })
drawSector({ points: [P, B, O], radius: 0.3, fill: true, fillColor: cor_verde_neon, opacity: 0.6 })

pause()

// corda AB
drawSegment({ points: [A, B], width: 0.03, color: cor_azul_eletrico })

pause()

// destaca o triangulo OAB (drawPolygon com opacidade) antes da conclusao
drawPolygon({ points: [O, A, B], fill: true, fillColor: cor_amarelo_neon, opacity: 0.16 })
drawSegmentMeasureMark({ points: [O, A], size: 0.18, quantity: 1, color: cor_amarelo_neon })
drawSegmentMeasureMark({ points: [O, B], size: 0.18, quantity: 1, color: cor_amarelo_neon })

pause()

// conclusao do triangulo OAB
drawText({ text: "$OA = OB = r$", x: -3.48, y: 1.29, fontSize: 0.42, color: cor_amarelo_neon })
drawText({ text: "$\\Delta OAB$ isósceles", x: -3.5, y: 0.72, fontSize: 0.42, color: cor_amarelo_neon })

pause()

// destaca o triangulo PAB (drawPolygon com opacidade) antes da conclusao
drawPolygon({ points: [P, A, B], fill: true, fillColor: cor_verde_menta, opacity: 0.16 })
drawSegmentMeasureMark({ points: [P, A], size: 0.18, quantity: 2, color: cor_verde_menta })
drawSegmentMeasureMark({ points: [P, B], size: 0.18, quantity: 2, color: cor_verde_menta })

pause()

// conclusao do triangulo PAB -> PA = PB
drawText({ text: "$P\\hat{A}B = P\\hat{B}A$", x: 4.19, y: 0.33, fontSize: 0.42, color: cor_verde_menta })
drawText({ text: "$\\Delta PAB$ isósceles", x: 4.13, y: -0.18, fontSize: 0.42, color: cor_verde_menta })
drawText({ text: "$PA = PB$", x: 4.11, y: -0.73, fontSize: 0.45, color: cor_coral })

pause()

// reta OP (bissetriz) - eixo de simetria
drawSegment({ points: [O, P], width: 0.024, lineDash: [0.12, 0.1], color: cor_coral })
drawText({ text: "$\\overline{OP}$ bissecta $A\\hat{P}B$ e $A\\hat{O}B$", x: 0.05, y: -4.71, fontSize: 0.42, color: cor_coral })

pause()

// ============================================================
// PARTE 2 — POSICOES RELATIVAS DE DUAS CIRCUNFERENCIAS
// (segundo diagrama, deslocado para baixo)
// ============================================================
const OFF = -11                 // deslocamento vertical do 2o diagrama
const R = 1.7                    // raio da circunferencia 1 (fixa, esquerda)
const r2 = 0.9                   // raio da circunferencia 2 (movel)
const dMax = 4.0                 // distancia inicial entre centros (exteriores)
const eps = 0.02
// s da tangencia exterior (d = R+r) e interior (d = |R-r|), com 5 casas
const sExt = Math.round((1 - (R + r2) / dMax) * 1e5) / 1e5
const sInt = Math.round((1 - Math.abs(R - r2) / dMax) * 1e5) / 1e5

const O1 = { x: 0, y: OFF }

// titulo do 2o diagrama
drawText({ text: "\\begin{center}\\textbf{Duas circunferências: posições relativas}\\end{center}", x: 0.2, y: OFF + 4.3, color: cor_titulo })

pause()

// circunferencia 1 (fixa) + centro + raio R
drawCircle({ center: O1, radius: R, fill: false, width: 0.04, color: cor_ciano })
drawPoint({ x: O1.x, y: O1.y, size: 0.07, color: cor_rosa_choque })
drawText({ text: "$O_1$", x: O1.x, y: O1.y +0.2, fontSize: 0.45, color: cor_rosa_choque })
drawSegment({ points: [O1, { x: -R, y: OFF }], width: 0.02, color: cor_ciano })
drawText({ text: "$R$", x: -R / 2 - 0.1, y: OFF +0.1, fontSize: 0.4, color: cor_ciano })

pause()

// movimento: aproximar a 2a circunferencia (d de dMax ate 0)
const aproximar = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [
        { value: sExt, time: 1.8 },
        { value: 0.575, time: 1.8 },
        { value: sInt, time: 1.8 },
        { value: 0.90, time: 1.5 },
        { value: 1, time: 1.5 }
    ], x: -4.21, y: -8.57,
    label: "Aproximar as circunferências (exteriores → concêntricas)"
})
animation(aproximar, (s) => {
    const d = dMax * (1 - s)
    const O2 = { x: O1.x + d, y: OFF }
    const dif = Math.abs(R - r2)
    // o rotulo d esmaece conforme os centros se aproximam e ele passaria a
    // coincidir com os raios: opacidade 1 na tangencia interior (d = |R-r|),
    // caindo a 0 nas posicoes internas ate as concentricas (d -> 0).
    const opD = Math.max(0, Math.min(1, d / dif))

    // circunferencia 2 (movel) + centro + raio r
    drawCircle({ center: O2, radius: r2, fill: false, width: 0.04, color: cor_roxo_neon })
    drawPoint({ x: O2.x, y: O2.y, size: 0.07, color: cor_rosa_choque })
    drawText({ text: "$O_2$", x: O2.x + 0.15, y: O2.y - 0.5, fontSize: 0.45, color: cor_rosa_choque })
    drawSegment({ points: [O2, { x: O2.x + r2, y: OFF }], width: 0.02, color: cor_roxo_neon })
    drawText({ text: "$r$", x: O2.x + r2 / 2 - 0.05, y: OFF + 0.1, fontSize: 0.4, color: cor_roxo_neon })

    // segmento d = O1O2 (tracejado) + rotulo (que esmaece perto da coincidencia)
    if (d > eps) {
        drawSegment({ points: [O1, O2], width: 0.022, lineDash: [0.12, 0.1], color: cor_amarelo_neon, opacity: opD })
        drawText({ text: "$d$", x: O1.x + d / 2 - 0.05, y: OFF - 0.45, fontSize: 0.42, color: cor_amarelo_neon, opacity: opD })
    }

    // classificacao ao vivo + pontos de contato/intersecao
    let txt, cor
    if (d > R + r2 + eps) {
        txt = "exteriores ($d > R + r$)"; cor = cor_coral
    } else if (Math.abs(d - (R + r2)) <= eps) {
        drawPoint({ x: O1.x + R, y: OFF, size: 0.07, color: cor_dourado })
        txt = "tangentes exteriormente ($d = R + r$)"; cor = cor_verde_neon
    } else if (d > dif + eps) {
        const a = (d * d + R * R - r2 * r2) / (2 * d)
        const h = Math.sqrt(Math.max(0, R * R - a * a))
        drawPoint({ x: O1.x + a, y: OFF + h, size: 0.07, color: cor_rosa_choque })
        drawPoint({ x: O1.x + a, y: OFF - h, size: 0.07, color: cor_rosa_choque })
        txt = "secantes ($|R - r| < d < R + r$)"; cor = cor_azul_eletrico
    } else if (Math.abs(d - dif) <= eps && d > eps) {
        drawPoint({ x: O1.x + R, y: OFF, size: 0.07, color: cor_dourado })
        txt = "tangentes interiormente ($d = |R - r|$)"; cor = cor_verde_neon
    } else if (d > eps) {
        txt = "internas ($d < |R - r|$)"; cor = cor_laranja
    } else {
        txt = "concêntricas ($d = 0$)"; cor = cor_roxo_neon
    }
    drawText({ text: txt, x: 0.24, y: -13.69, fontSize: 0.46, color: cor })
})
