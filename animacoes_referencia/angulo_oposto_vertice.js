// ANIMAÇÃO: 1.3 Ângulos Opostos pelo Vértice
// Status: CONCLUÍDA — usar como referência de estilo
//
// Destaques:
// - retas AC e DB por dois pontos, estendidas ALÉM deles (8.36)
// - O = interseção das duas retas (8.9)
// - par oposto pelo vértice AÔB e CÔD em coral com measureMarks: 1 (8.34)
// - ângulo adjacente CÔB em azul
// - um parâmetro de opacidade INDEPENDENTE por ângulo (sumir=1 / reaparecer=0)
// - nas equações, o termo comum CÔB é colorido igual ao setor (\textcolor, 8.37)

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
const cor_branco = '#FFFFFF'



// TÍTULO
drawText({
    text: "\\begin{center}\\textbf{Ângulos Opostos pelo Vértice}\\end{center}",
    x: 0.09, y: 4.08, color: cor_titulo
})


// === CONST A, B, C, D  (retas AC e DB) ===
const A = { x:  2.7, y:  2.6 }
const C = { x: -2.7, y: -0.6 }
const D = { x: -2.9, y:  2.3 }
const B = { x:  2.9, y: -0.3 }

// === O = interseção das retas AC e DB ===
const dx1 = C.x - A.x, dy1 = C.y - A.y
const dx2 = D.x - B.x, dy2 = D.y - B.y
const tt = ((B.x - A.x) * dy2 - (B.y - A.y) * dx2) / (dx1 * dy2 - dy1 * dx2)
const O = { x: A.x + tt * dx1, y: A.y + tt * dy1 }

const nAC = Math.sqrt(dx1 * dx1 + dy1 * dy1), uACx = dx1 / nAC, uACy = dy1 / nAC
const nBD = Math.sqrt(dx2 * dx2 + dy2 * dy2), uBDx = dx2 / nBD, uBDy = dy2 / nBD
const ext = 1.0

// === RETA AC (além de A e C) ===
drawPoint({ x: A.x, y: A.y, size: 0.07})
drawText({ text: "$A$", x: A.x , y: A.y + 0.3, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.07})
drawText({ text: "$C$", x: C.x - 0.4, y: C.y, fontSize: 0.5 })
drawSegment({ points: [{ x: A.x - ext * uACx, y: A.y - ext * uACy }, { x: C.x + ext * uACx, y: C.y + ext * uACy }], color: cor_branco, width: 0.04 })



// === RETA DB (além de B e D) ===
drawPoint({ x: B.x, y: B.y , size: 0.07})
drawText({ text: "$B$", x: B.x + 0.25, y: B.y + 0.2, fontSize: 0.5 })
drawPoint({ x: D.x, y: D.y, size: 0.07})
drawText({ text: "$D$", x: D.x + 0.3, y: D.y + 0.2, fontSize: 0.5 })
drawSegment({ points: [{ x: B.x - ext * uBDx, y: B.y - ext * uBDy }, { x: D.x + ext * uBDx, y: D.y + ext * uBDy }], color: cor_branco, width: 0.04 })

pause()

// === PONTO O ===
drawPoint({ x: O.x, y: O.y, color: cor_amarelo_neon, size: 0.08})
drawText({ text: "$O$", x: O.x, y: O.y + 0.3, fontSize: 0.5, color: cor_amarelo_neon })

pause()

// === PARÂMETROS de opacidade (sumir = 1, reaparecer = 0) ===
const p_AOB = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 1 }, { value: 0, time: 1 }], label: "Sumir/mostrar AOB" })
const p_CVD = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 1 }, { value: 0, time: 1 }], label: "Sumir/mostrar COD" })
const p_COB = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 1 }, { value: 0, time: 1 }], label: "Sumir/mostrar COB" })

// === SETORES ===
animation(p_AOB, p_CVD, p_COB, (sa, sc, sb) => {
    drawSector({ points: [A, O, B], radius: 0.7, fill: true, fillColor: cor_coral, measureMarks: 1, opacity: 1 - sa })
    drawSector({ points: [C, O, D], radius: 0.7, fill: true, fillColor: cor_coral, measureMarks: 1, opacity: 1 - sc })
    pause()
    drawSector({ points: [B, O, C], radius: 0.7, fill: true, fillColor: cor_azul_eletrico, opacity: 1 - sb })
})

pause()

// === EQUAÇÕES ===
drawText({ text: "$\\textcolor{#00B0FF}{C\\hat{O}B} + B\\hat{O}A = 180^\\circ$", x: -2.49, y: -2.8, fontSize: 0.6 })

pause()

drawText({ text: "$D\\hat{O}C + \\textcolor{#00B0FF}{C\\hat{O}B} = 180^\\circ$", x: -2.51, y: -3.78, fontSize: 0.6 })

pause()

// === CONCLUSÃO ===
drawText({ text: "$\\Rightarrow \\; B\\hat{O}A = D\\hat{O}C$", x: 2.58, y: -3.33, fontSize: 0.6, color: cor_coral})
drawText({ text: "Logo, $A\\hat{O}B \\equiv C\\hat{O}D$.", x: -0.27, y: -5.8, fontSize: 0.55, color: cor_coral })
