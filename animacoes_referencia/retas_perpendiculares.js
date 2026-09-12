// ANIMAÇÃO: 2.9.1 Retas Perpendiculares
// Segue a ordem do site:
//  1) retas r e s desenhadas com drawCurve (parametrizadas); giramos s ate 90° [param]
//     -> o angulo Q1 (drawSector) tem a medida AO VIVO em graus.
//  2) na perpendicular, marcam-se os outros tres angulos (drawSector) + r⊥s.
//  3) justificativa: basta 1 angulo reto (o.p.v. + suplementares).
//  4) escrevem-se as medidas dos quatro angulos AO VIVO; pares OPOSTOS PELO
//     VERTICE na mesma cor (Q1,Q3 azul; Q2,Q4 laranja). Clicar s de novo atualiza.
// OBS Conexty: usar \hat (nao \widehat). drawSector/drawArc em RADIANOS;
//   drawSector mostra o setor do angulo (vira quadrado de reto a 90°).

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
const O = { x: 0, y: 0 }
const L = 4                          // meio-comprimento de r
const Ls = 3.1                       // meio-comprimento de s (um pouco menor)
const th0 = 50 * Math.PI / 180       // angulo inicial de s (oblíquo)
const thF = 90 * Math.PI / 180       // angulo final (perpendicular)
const secRad = 0.6                   // raio dos setores de angulo
const numRad = 1.05                  // raio p/ as medidas (na bissetriz)

function angulo(g) { return th0 + (thF - th0) * g }
function medida(bis, val, cor) {
    drawText({ text: "$" + val + "^\\circ$", x: numRad * Math.cos(bis), y: numRad * Math.sin(bis), fontSize: 0.4, color: cor })
}

// TITULO
drawText({ text: "\\begin{center}\\textbf{Retas perpendiculares}\\end{center}", x: 0.2, y: 4.3, color: cor_titulo })

pause()

// reta r (horizontal, fixa) — desenhada com drawCurve (parametrizada)
drawCurve({ x: t => t, y: t => 0, tStart: -L, tEnd: L, steps: 2, width: 0.035, color: cor_ciano })
drawText({ text: "$r$", x: L + 0.15, y: 0, fontSize: 0.5, color: cor_ciano })
drawPoint({ x: O.x, y: O.y, size: 0.08, color: cor_rosa_choque })

pause()

// param de rotacao: 1a vez vai a 90°; depois oscila (oblíquo -> 90°) p/ re-demonstrar
const girar = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [
        { value: 1, time: 2.5 },
        { value: 0.28, time: 2.0 },
        { value: 1, time: 2.0 }
    ],
    label: "Girar s (clique de novo para atualizar os ângulos)"
})

// --- bloco A: reta s (parametrizada com drawCurve) ---
animation(girar, (g) => {
    const th = angulo(g)
    const c = Math.cos(th), sn = Math.sin(th)
    drawCurve({ x: t => t * c, y: t => t * sn, tStart: -Ls, tEnd: Ls, steps: 2, width: 0.035, color: cor_verde_neon })
    drawText({ text: "$s$", x: Ls * c + 0.15, y: Ls * sn + 0.15, fontSize: 0.5, color: cor_verde_neon })
})

// --- bloco B: angulo Q1 (setor + medida ao vivo) + rotulo r⊥s perto de 90° ---
animation(girar, (g) => {
    const th = angulo(g)
    const c = Math.cos(th), sn = Math.sin(th)
    const a1 = Math.round(th * 180 / Math.PI)
    drawSector({ points: [{ x: 1, y: 0 }, O, { x: c, y: sn }], radius: secRad, fill: true, fillColor: cor_verde_neon, opacity: 0.4 })
    medida(th / 2, a1, cor_azul_eletrico)
    const opPerp = Math.max(0, 1 - Math.abs(a1 - 90) / 12)
    if (opPerp > 0.02) {
        drawText({ text: "$r \\perp s$", x: 0.78, y: 2.14, fontSize: 0.55, color: cor_verde_neon, opacity: opPerp })
    }
})

pause()   // <- deixe em 90° (s vertical) para seguir

// --- bloco C: os outros tres setores de angulo (revelados depois da rotacao) ---
animation(girar, (g) => {
    const th = angulo(g)
    const c = Math.cos(th), sn = Math.sin(th)
    drawSector({ points: [{ x: c, y: sn }, O, { x: -1, y: 0 }], radius: secRad, fill: true, fillColor: cor_rosa_choque, opacity: 0.4 })
    drawSector({ points: [{ x: -1, y: 0 }, O, { x: -c, y: -sn }], radius: secRad, fill: true, fillColor: cor_verde_neon, opacity: 0.4 })
    drawSector({ points: [{ x: -c, y: -sn }, O, { x: 1, y: 0 }], radius: secRad, fill: true, fillColor: cor_rosa_choque, opacity: 0.4 })
})

pause()

// justificativa: basta 1 angulo reto
drawText({ text: "1 ângulo reto $\\Rightarrow$ os quatro são retos", x: 0.11, y: -3.69, fontSize: 0.45, color: cor_coral })
drawText({ text: "(opostos pelo vértice iguais; adjacentes suplementares)", x: 0.18, y: -4.59, fontSize: 0.4, color: cor_coral })

pause()

// --- bloco D: medidas dos outros tres angulos AO VIVO (o.p.v. na mesma cor) ---
animation(girar, (g) => {
    const th = angulo(g)
    const a1 = Math.round(th * 180 / Math.PI)
    const a2 = 180 - a1
    medida((th + Math.PI) / 2, a2, cor_laranja)             // Q2
    medida(Math.PI + th / 2, a1, cor_azul_eletrico)         // Q3 (o.p.v. de Q1)
    medida((th + Math.PI) / 2 + Math.PI, a2, cor_laranja)   // Q4
})
