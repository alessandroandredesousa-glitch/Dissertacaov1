// ANIMAÇÃO: 3.4 Base Média do TRIÂNGULO  (versão finalizada)
// médios M,N -> base média MN -> prolonga até P -> △AMN ≅ △CPN (LAL)
//   -> alternos internos M̂AN=P̂CN -> MBCP paralelogramo -> MN = BC/2.
// A base média do TRAPÉZIO está em arquivo próprio (base_media_trapezio.js),
// colada mais abaixo na tela infinita do Conexty (outro drawGrid).
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

// === GEOMETRIA (mesmos vértices das imagens estáticas) ===
const A = { x: -2, y: 3 }
const B = { x: -4.5, y: -1.5 }
const C = { x: 2.5, y: -1.5 }
const M = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 }   // (-3.25, 0.75)  médio de AB
const N = { x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 }   // ( 0.25, 0.75)  médio de AC
const P = { x: 2 * N.x - M.x, y: 2 * N.y - M.y }        // ( 3.75, 0.75)  N médio de MP

// TÍTULO
drawText({ text: "\\begin{center}\\textbf{Base média do triângulo}\\end{center}", x: 0.2, y: 4.2, color: cor_titulo })

pause()

// === BASE: triângulo ABC (fica sempre) ===
drawSegment({ points: [A, B], width: 0.045 })
drawSegment({ points: [B, C], width: 0.045 })
drawSegment({ points: [C, A], width: 0.045 })
drawPoint({ x: A.x, y: A.y, size: 0.07 }); drawText({ text: "$A$", x: A.x - 0.1, y: A.y + 0.45, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.07 }); drawText({ text: "$B$", x: B.x - 0.5, y: B.y - 0.2, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.07 }); drawText({ text: "$C$", x: C.x + 0.3, y: C.y - 0.2, fontSize: 0.5 })

pause()

// === médios M, N + base média MN ===
drawPoint({ x: M.x, y: M.y, size: 0.09, color: cor_coral }); drawText({ text: "$M$", x: M.x - 0.6, y: M.y + 0.1, fontSize: 0.5, color: cor_coral })
drawPoint({ x: N.x, y: N.y, size: 0.09, color: cor_coral }); drawText({ text: "$N$", x: N.x + 0.25, y: N.y + 0.35, fontSize: 0.5, color: cor_coral })
drawSegmentMeasureMark({ points: [A, M], size: 0.26, quantity: 1, color: cor_azul_eletrico })
drawSegmentMeasureMark({ points: [M, B], size: 0.26, quantity: 1, color: cor_azul_eletrico })
drawSegmentMeasureMark({ points: [A, N], size: 0.26, quantity: 2, color: cor_roxo_neon })
drawSegmentMeasureMark({ points: [N, C], size: 0.26, quantity: 2, color: cor_roxo_neon })

pause()

drawSegment({ points: [M, N], width: 0.05, color: cor_coral })   // base média
drawText({ text: "$\\overline{MN}$: base média", x: -1.55, y: 0.22, fontSize: 0.45, color: cor_coral })

pause()

// === PARÂMETROS DE LIMPEZA (ordem das fases) ===
const limparLAL = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 1.2 }], label: "Limpar marcas LAL" })
const limparTri = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 1.5 }], label: "Limpar triângulo" })

// === 1º: prolonga MN até P (P, NP e CP FICAM — só somem com limparTri) ===
animation(limparTri, (f) => {
    const o = 1 - f
    drawPoint({ x: P.x, y: P.y, size: 0.09, color: cor_coral, opacity: o }); drawText({ text: "$P$", x: P.x + 0.25, y: P.y + 0.1, fontSize: 0.5, color: cor_coral, opacity: o })
    pause()
    drawSegment({ points: [N, P], width: 0.05, color: cor_coral, opacity: o })    // prolongamento até P
    pause()
    drawSegment({ points: [C, P], width: 0.045, color: cor_laranja, opacity: o }) // lado novo CP
})

pause()

// === 2º: destaca os dois triângulos AMN e CPN + marcas LAL === (some com limparLAL)
animation(limparLAL, (f) => {
    const o = 1 - f
    drawPolygon({ points: [A, M, N], fill: true, fillColor: cor_roxo_neon, opacity: 0.22 * o })
    drawPolygon({ points: [C, P, N], fill: true, fillColor: cor_azul_eletrico, opacity: 0.22 * o })
    // congruências LAL: MN=NP (1 rosa) ; opostos pelo vértice em N (AN=CN 2 roxo já marcados antes)
    drawSegmentMeasureMark({ points: [M, N], size: 0.26, quantity: 1, color: cor_rosa_choque, opacity: o })
    drawSegmentMeasureMark({ points: [N, P], size: 0.26, quantity: 1, color: cor_rosa_choque, opacity: o })
    drawSector({ points: [M, N, A], radius: 0.45, fill: true, fillColor: cor_laranja, opacity: 0.6 * o })
    drawSector({ points: [P, N, C], radius: 0.45, fill: true, fillColor: cor_laranja, opacity: 0.6 * o })
})

pause()

animation(limparLAL, (f) => {
    drawText({ text: "$\\Delta AMN \\cong \\Delta CPN$  (LAL)", x: -0.02, y: -3.5, fontSize: 0.5, color: cor_amarelo_neon, opacity: 1 - f })
})

pause()

animation(limparLAL, (f) => {
    drawSegmentMeasureMark({ points: [C, P], size: 0.26, quantity: 1, color: cor_azul_eletrico, opacity: 1 })
})

pause()   // <- aperte "Limpar marcas LAL"

// === alternos internos: M̂AN = P̂CN (da congruência LAL) -> CP ∥ MB === (some com limparTri)
animation(limparTri, (f) => {
    const o = 1 - f
    drawSector({ points: [M, A, N], radius: 0.55, fill: true, fillColor: cor_rosa_choque, opacity: 0.6 * o })   // ∠MAN em A
    drawSector({ points: [P, C, N], radius: 0.55, fill: true, fillColor: cor_rosa_choque, opacity: 0.6 * o })   // ∠PCN em C
    drawText({ text: "$M\\hat{A}N = P\\hat{C}N$ (alt. internos) $\\Rightarrow \\overline{CP} \\parallel \\overline{MB}$", x: 0.05, y: -2.86, fontSize: 0.4, color: cor_rosa_choque, opacity: o })
})

pause()

// === MBCP é paralelogramo -> MP ∥ BC e MP = BC === (some junto com o triângulo, no limparTri)
animation(limparTri, (f) => {
    const o = 1 - f
    drawPolygon({ points: [M, B, C, P], fill: true, fillColor: cor_verde_neon, opacity: 0.16 * o })
    // (MP e CP já estão na tela desde a fase anterior — não redesenhar)
    // MB = CP (1 traço dourado) ; MP = BC (2 traços ciano)
    drawSegmentMeasureMark({ points: [M, B], size: 0.26, quantity: 1, color: cor_dourado, opacity: o })
    drawSegmentMeasureMark({ points: [C, P], size: 0.26, quantity: 1, color: cor_dourado, opacity: o })
    drawSegmentMeasureMark({ points: [M, P], size: 0.26, quantity: 2, color: cor_ciano, opacity: o })
    drawSegmentMeasureMark({ points: [B, C], size: 0.26, quantity: 2, color: cor_ciano, opacity: o })
    drawText({ text: "$MBCP$ paralelogramo $\\Rightarrow \\overline{MP} \\parallel \\overline{BC}$", x: -0.05, y: -3.8, fontSize: 0.42, color: cor_verde_menta, opacity: o })
})

pause()

animation(limparTri, (f) => {
    drawText({ text: "$$MN = \\frac{MP}{2} = \\frac{BC}{2}$$", x: -0.19, y: -4.95, fontSize: 0.5, color: cor_dourado, opacity: 1 - f })
})
