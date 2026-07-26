// ANIMAÇÃO: 1.2 Ângulo — Definição e Elementos (passeio completo)
// Ordem dos pauses: 1) ângulo + lados OA/OB  ->  2) rótulos Vértice/Lado  ->
//                   3) medida  ->  4) lado OC + BÔC (adjacentes)  ->  nota final.
// rot: abre o ângulo de 0° a 180° (medida ao vivo). clear: apaga Vértice/Lado.
// OBS: setor limitado a ~179.4° (thetaSec) p/ não virar pra baixo em 180°.

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

// TÍTULO
drawText({
    text: "\\begin{center}\\textbf{Ângulo: Definição e Elementos}\\end{center}",
    x: -0.52, y: 4, color: cor_titulo
})

pause()

const O = { x: -0.5, y: 0 }
const L = 3

const rot = param({
    value: 0.28, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 0, time: 2 }, { value: 1, time: 2 }, { value: 0.28, time: 2 }],
    label: "Abrir ângulo (0° a 180°)"
})
const clear = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 1 }, { value: 0, time: 1 }],
    label: "Apagar Vértice/Lado"
})

animation(rot, clear, (r, c) => {
    const theta = r * Math.PI
    const A = { x: O.x + L * Math.cos(theta), y: O.y + L * Math.sin(theta) }
    const B = { x: O.x + L, y: O.y }

    // 1) ÂNGULO
    const thetaSec = Math.min(theta, Math.PI - 0.01)
    const Asec = { x: O.x + Math.cos(thetaSec), y: O.y + Math.sin(thetaSec) }
    drawSector({ points: [Asec, O, B], radius: 0.7, fill: true, fillColor: cor_dourado, opacity: 0.8 })
    drawArrow({ points: [O, A], color: cor_azul_eletrico, size: 0.2 })
    drawArrow({ points: [O, B], color: cor_azul_eletrico, size: 0.2 })
    drawPoint({ x: O.x, y: O.y, size: 0.08, color: cor_amarelo_neon })
    drawText({ text: "$O$", x: O.x - 0.35, y: O.y - 0.42, fontSize: 0.5, color: cor_amarelo_neon })
    drawPoint({ x: A.x, y: A.y, size: 0.07 })
    drawText({ text: "$A$", x: A.x + 0.12, y: A.y + 0.2, fontSize: 0.5 })
    drawPoint({ x: B.x, y: B.y, size: 0.07 })
    drawText({ text: "$B$", x: B.x + 0.35, y: B.y - 0.05, fontSize: 0.5 })

    pause()

    // 2) RÓTULOS Vértice e Lado (apagam com 'clear')
    drawArrow({ points: [{ x: -3.4, y: 1.3 }, { x: O.x - 0.15, y: O.y + 0.12 }], color: cor_coral, size: 0.18, opacity: 1 - c })
    drawText({ text: "Vértice", x: -3.5, y: 1.53, fontSize: 0.45, color: cor_coral, opacity: 1 - c })
    drawArrow({ points: [{ x: 1.76, y: -0.87 }, { x: 1.01, y: -0.21 }], color: cor_coral, size: 0.18, opacity: 1 - c })
    drawText({ text: "Lado", x: 2.38, y: -1.12, fontSize: 0.45, color: cor_coral, opacity: 1 - c })

    pause()

    // 3) MEDIDA (ao vivo, 2 casas)
    const graus = (r * 180).toFixed(2)
    drawText({ text: "$m(A\\hat{O}B) = " + graus + "^\\circ$", x: 1.78, y: 0.52, fontSize: 0.4, color: cor_dourado, })

    pause()

    // 4) ÂNGULOS ADJACENTES: lado OC forma BÔC, que divide OB com AÔB
    const angC = -50 * Math.PI / 180
    const C = { x: O.x + L * Math.cos(angC), y: O.y + L * Math.sin(angC) }
    drawSector({ points: [B, O, C], radius: 0.7, fill: true, fillColor: cor_coral, opacity: 0.7 })
    drawArrow({ points: [O, C], color: cor_azul_eletrico, size: 0.2 })
    drawPoint({ x: C.x, y: C.y, size: 0.07 })
    drawText({ text: "$C$", x: C.x + 0.35, y: C.y - 0.05, fontSize: 0.5 })
    pause()

    drawText({ text: "$A\\hat{O}B$ e $B\\hat{O}C$ são adjacentes (lado comum $\\overrightarrow{OB}$).", x: -0.85, y: -4, fontSize: 0.45, color: cor_coral })
})
