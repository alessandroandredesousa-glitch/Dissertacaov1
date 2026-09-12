// ANIMAÇÃO: 2.9.2 Construção da Perpendicular por um Ponto (régua e compasso)
// Segue a ordem do site:
//  CASO 1 (P ∈ r): arco centrado em P corta r em A e B (PA=PB); arcos iguais
//    centrados em A e B cruzam-se em Q; a reta PQ é perpendicular a r.   [Fig 2.54]
//  CASO 2 (P ∉ r), 2o diagrama abaixo: arco centrado em P corta r em A e B;
//    como PA=PB, P está na mediatriz de AB; a mediatriz passa por P e ⊥ r. [Fig 2.55]
// Construção desenhada pelo lápis (sem param): cada elemento surge entre pause().
// OBS Conexty: usar \hat (nao \widehat). drawArc/angulos em RADIANOS.

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
const cor_lapis = '#AAAAAA'           // cinza p/ os arcos de compasso (marca de lapis)

// arco de compasso: circulo tracejado, cinza e com opacidade (despoluido)
function compasso(center, radius) {
    drawCurve({
        x: t => center.x + radius * Math.cos(t),
        y: t => center.y + radius * Math.sin(t),
        tStart: 0, tEnd: 2 * Math.PI, steps: 90,
        width: 0.018, color: cor_lapis, lineDash: [0.12, 0.1], opacity: 0.45
    })
}

// TITULO
drawText({ text: "\\begin{center}\\textbf{Construção da perpendicular}\\end{center}", x: 0.2, y: 4.5, color: cor_titulo })

pause()

// ============================================================
// CASO 1 — P pertence a r
// ============================================================
const r1y = 0.3                       // altura da reta r (caso 1)
const P1 = { x: 0, y: r1y }
const rho1 = 1.3                      // raio do 1o arco (centro P)
const rho2 = 1.9                      // raio dos arcos (centros A e B), > PA
const A1 = { x: P1.x - rho1, y: r1y }
const B1 = { x: P1.x + rho1, y: r1y }
const Q1y = r1y + Math.sqrt(rho2 * rho2 - rho1 * rho1)
const Q1 = { x: 0, y: Q1y }

drawText({ text: "\\textbf{Caso 1:} $P \\in r$", x: -3.66, y: 2.51, fontSize: 0.45, color: cor_azul_eletrico })

// reta r + ponto P
drawCurve({ x: t => t, y: t => r1y, tStart: -4, tEnd: 4, steps: 2, width: 0.035, color: cor_ciano })
drawText({ text: "$r$", x: 4.15, y: r1y, fontSize: 0.5, color: cor_ciano })
drawPoint({ x: P1.x, y: P1.y, size: 0.09, color: cor_dourado })
drawText({ text: "$P$", x: P1.x - 0.1, y: P1.y - 0.45, fontSize: 0.45, color: cor_dourado })

pause()

// arco centrado em P corta r em A e B (PA = PB)
compasso(P1, rho1)
drawPoint({ x: A1.x, y: A1.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$A$", x: A1.x - 0.1, y: A1.y - 0.45, fontSize: 0.42, color: cor_rosa_choque })
drawPoint({ x: B1.x, y: B1.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$B$", x: B1.x - 0.1, y: B1.y - 0.45, fontSize: 0.42, color: cor_rosa_choque })

pause()

// arcos iguais centrados em A e B cruzam-se em Q
compasso(A1, rho2)
compasso(B1, rho2)
drawPoint({ x: Q1.x, y: Q1.y, size: 0.09, color: cor_verde_neon }); drawText({ text: "$Q$", x: Q1.x + 0.2, y: Q1.y + 0.1, fontSize: 0.45, color: cor_verde_neon })

pause()

// reta PQ perpendicular a r (+ angulo reto em P)
drawSegment({ points: [{ x: 0, y: r1y - 1.0 }, { x: 0, y: Q1y + 0.5 }], width: 0.03, color: cor_coral })
drawSector({ points: [{ x: 1, y: r1y }, P1, Q1], radius: 0.32, fill: true, fillColor: cor_verde_neon, opacity: 0.5 })
drawText({ text: "$PQ \\perp r$", x: 0.1, y: 2.56, fontSize: 0.45, color: cor_coral })

pause()

// ============================================================
// CASO 2 — P nao pertence a r (2o diagrama, abaixo)
// ============================================================
const OFF = -6.5
const dP = 1.7                        // altura de P acima de r
const P2 = { x: 0, y: OFF + dP }
const rho = 2.3                       // raio do arco centrado em P (> dP)
const half = Math.sqrt(rho * rho - dP * dP)
const A2 = { x: -half, y: OFF }
const B2 = { x: half, y: OFF }
const rho3 = 2.0                      // raio dos arcos (centros A e B) p/ a mediatriz
const Ry = OFF - Math.sqrt(rho3 * rho3 - half * half)  // 2o cruzamento, abaixo de r
const Pfoot = { x: 0, y: OFF }

drawText({ text: "\\textbf{Caso 2:} $P \\notin r$", x: -3.6, y: -3.47, fontSize: 0.45, color: cor_azul_eletrico })

// reta r + ponto P (fora de r)
drawCurve({ x: t => t, y: t => OFF, tStart: -4, tEnd: 4, steps: 2, width: 0.035, color: cor_ciano })
drawText({ text: "$r$", x: 4.15, y: OFF, fontSize: 0.5, color: cor_ciano })
drawPoint({ x: P2.x, y: P2.y, size: 0.09, color: cor_dourado })
drawText({ text: "$P$", x: P2.x + 0.2, y: P2.y + 0.15, fontSize: 0.45, color: cor_dourado })

pause()

// arco centrado em P corta r em A e B (PA = PB)
compasso(P2, rho)
drawPoint({ x: A2.x, y: A2.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$A$", x: A2.x - 0.1, y: A2.y - 0.45, fontSize: 0.42, color: cor_rosa_choque })
drawPoint({ x: B2.x, y: B2.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$B$", x: B2.x - 0.1, y: B2.y - 0.45, fontSize: 0.42, color: cor_rosa_choque })

pause()

// arcos iguais centrados em A e B (mediatriz de AB): cruzam-se abaixo, em R
compasso(A2, rho3)
compasso(B2, rho3)
drawPoint({ x: 0, y: Ry, size: 0.08, color: cor_verde_neon }); drawText({ text: "$R$", x: 0.2, y: Ry - 0.1, fontSize: 0.42, color: cor_verde_neon })

pause()

// a mediatriz (por P e R) e perpendicular a r, passando por P
drawSegment({ points: [{ x: 0, y: P2.y + 0.5 }, { x: 0, y: Ry - 0.3 }], width: 0.03, color: cor_coral })
drawPoint({ x: Pfoot.x, y: Pfoot.y, size: 0.07, color: cor_rosa_choque })
drawSector({ points: [{ x: 1, y: OFF }, Pfoot, P2], radius: 0.32, fill: true, fillColor: cor_verde_neon, opacity: 0.5 })
drawText({ text: "mediatriz de $AB$: passa por $P$ e $\\perp r$", x: 2.21, y: -3.9, fontSize: 0.4, color: cor_coral })
