// ANIMAÇÃO: 3.3 Paralelogramo — propriedades (com limpeza entre etapas)
// Base (paralelogramo + vértices) fica sempre. Cada propriedade tem seu param de
// limpeza (Limpar P1/P2/P3) que apaga as marcas daquela etapa antes da próxima.
// P1: diagonal AC -> ABC ≅ CDA (ALA) -> lados/ângulos opostos.
// P2: ângulos consecutivos suplementares. P3: diagonais se cortam ao meio (M).
// FINALE: simetria central — girar 180° em torno de M e coincidir.
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

// === GEOMETRIA (paralelogramo ABCD, anti-horário) ===
const A = { x: -3, y: -1.5 }
const B = { x: 2, y: -1.5 }
const C = { x: 3.5, y: 1.5 }
const D = { x: -1.5, y: 1.5 }
const M = { x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 }

// TÍTULO
drawText({ text: "\\begin{center}\\textbf{Paralelogramo: propriedades}\\end{center}", x: 0.2, y: 4.2, color: cor_titulo })

pause()

// === BASE (fica sempre): lados opostos paralelos (par AB/CD coral; par BC/DA azul) ===
drawSegment({ points: [A, B], width: 0.045, color: cor_coral })
drawSegment({ points: [D, C], width: 0.045, color: cor_coral })
drawSegment({ points: [B, C], width: 0.045, color: cor_azul_eletrico })
drawSegment({ points: [A, D], width: 0.045, color: cor_azul_eletrico })
drawPoint({ x: A.x, y: A.y, size: 0.07 }); drawText({ text: "$A$", x: A.x - 0.4, y: A.y - 0.2, fontSize: 0.5 })
drawPoint({ x: B.x, y: B.y, size: 0.07 }); drawText({ text: "$B$", x: B.x + 0.4, y: B.y - 0.2, fontSize: 0.5 })
drawPoint({ x: C.x, y: C.y, size: 0.07 }); drawText({ text: "$C$", x: C.x + 0.2, y: C.y + 0.1, fontSize: 0.5 })
drawPoint({ x: D.x, y: D.y, size: 0.07 }); drawText({ text: "$D$", x: D.x - 0.3, y: D.y + 0.1, fontSize: 0.5 })

pause()

// === PARÂMETROS DE LIMPEZA (na ordem das etapas) ===
const limparP1 = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 1.2 }], label: "Limpar P1" })
const meiavolta = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2 }, { value: 0, time: 2 }], label: "Mover Â até D̂ (meia volta)" })
const limparP2 = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 1.2 }], label: "Limpar P2" })
const limparP3 = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 1.2 }], label: "Limpar P3" })

// === P1: diagonal AC -> triângulos congruentes (ALA) === (some com Limpar P1)
animation(limparP1, (f) => {
    const o = 1 - f
    drawSegment({ points: [A, C], color: cor_amarelo_neon, width: 0.04, opacity: o })
    drawSector({ points: [B, A, C], radius: 0.55, fill: true, fillColor: cor_verde_neon, opacity: 0.7 * o })   // ∠BAC
    drawSector({ points: [D, C, A], radius: 0.55, fill: true, fillColor: cor_verde_neon, opacity: 0.7 * o })   // ∠DCA
    drawSector({ points: [C, A, D], radius: 0.85, fill: true, fillColor: cor_roxo_neon, opacity: 0.5 * o })    // ∠DAC
    drawSector({ points: [A, C, B], radius: 0.85, fill: true, fillColor: cor_roxo_neon, opacity: 0.5 * o })    // ∠BCA
})

pause()

animation(limparP1, (f) => {
    drawText({ text: "$\\Delta ABC \\cong \\Delta CDA$  (ALA)", x: -0.02, y: -2.96, fontSize: 0.5, color: cor_amarelo_neon, opacity: 1 - f })
})

pause()

// lados opostos congruentes (AB=CD 1 traço; BC=DA 2 traços)
animation(limparP1, (f) => {
    const o = 1 - f
    drawSegmentMeasureMark({ points: [A, B], size: 0.28, quantity: 1, color: cor_dourado, opacity: o })
    drawSegmentMeasureMark({ points: [D, C], size: 0.28, quantity: 1, color: cor_dourado, opacity: o })
    drawSegmentMeasureMark({ points: [B, C], size: 0.28, quantity: 2, color: cor_dourado, opacity: o })
    drawSegmentMeasureMark({ points: [A, D], size: 0.28, quantity: 2, color: cor_dourado, opacity: o })
    drawText({ text: "lados e ângulos opostos congruentes", x: -0.31, y: -3.94, fontSize: 0.42, color: cor_dourado, opacity: o })
})

pause()   // <- aperte "Limpar P1" antes de seguir

// === P2: ângulos consecutivos suplementares (colaterais internos) === (some com Limpar P2)
// retas suporte tracejadas: as paralelas AB e CD estendidas + a transversal AD estendida
animation(limparP2, (f) => {
    const o = 1 - f
    drawSegment({ points: [A, { x: A.x - 1.8, y: A.y }], width: 0.02, lineDash: [0.14, 0.1], color: cor_coral, opacity: 0.7 * o })
    drawSegment({ points: [D, { x: D.x - 1.8, y: D.y }], width: 0.02, lineDash: [0.14, 0.1], color: cor_coral, opacity: 0.7 * o })
    const ux = D.x - A.x, uy = D.y - A.y
    drawSegment({ points: [{ x: A.x - 0.5 * ux, y: A.y - 0.5 * uy }, { x: D.x + 0.5 * ux, y: D.y + 0.5 * uy }], width: 0.02, lineDash: [0.14, 0.1], color: cor_azul_eletrico, opacity: 0.7 * o })
})

// ∠D fixo (azul) e ∠A que desliza pela transversal até D (coral) -> meia volta (180°)
animation(limparP2, meiavolta, (f, mv) => {
    const o = 1 - f
    drawSector({ points: [C, D, A], radius: 0.6, fill: true, fillColor: cor_azul_eletrico, opacity: 0.7 * o })   // ∠D
    const vx = (D.x - A.x) * mv, vy = (D.y - A.y) * mv
    const cA = { x: A.x + vx, y: A.y + vy }
    const rB = { x: B.x + vx, y: B.y + vy }
    const rD = { x: D.x + vx, y: D.y + vy }
    drawSector({ points: [rB, cA, rD], radius: 0.6, fill: true, fillColor: cor_coral, opacity: 0.7 * o })         // ∠A transportado
    drawText({ text: "$\\hat{A} + \\hat{D} = 180^\\circ$", x: -3.81, y: 0.09, fontSize: 0.45, color: cor_dourado, opacity: 1 - f})
    drawArrow({
        points:[{ x: -3.29, y: -1.12}, { x: -4.65, y: -0.77 }, { x: -4.94, y: -0.2 }], width: 0.03, color: cor_coral, opacity: 1- f
    })
    drawArrow({
        points:[{ x: -1.9, y: 1.3}, { x: -3.05, y: 1.1 }, { x: -3.91, y: 0.79 }], width: 0.03, color: cor_azul_eletrico, opacity: 1- f
    })

})

pause()   // <- mova (meia volta) e depois aperte "Limpar P2"

// === P3: as diagonais se cortam ao meio === (some com Limpar P3)
animation(limparP3, (f) => {
    const o = 1 - f
    drawSegment({ points: [A, C], color: cor_amarelo_neon, width: 0.035, opacity: o })   // reapresenta AC
    drawSegment({ points: [B, D], color: cor_ciano, width: 0.035, opacity: o })
    drawPoint({ x: M.x, y: M.y, size: 0.09, color: cor_rosa_choque, opacity: o })
    drawText({ text: "$M$", x: M.x + 0.15, y: M.y + 0.28, fontSize: 0.5, color: cor_rosa_choque, opacity: o })
    pause()
    drawSector({points: [A, C, D], radius: 0.7, fill: true, fillColor: cor_coral, opacity: 1 - f})
    drawSector({points: [C, A, B], radius: 0.7, fill: true, fillColor: cor_coral, opacity: 1 - f})
    drawSector({points: [C, D, B], radius: 0.7, fill: true, fillColor: cor_azul_eletrico, opacity: 1 - f})
    drawSector({points: [D, B, A], radius: 0.7, fill: true, fillColor: cor_azul_eletrico, opacity: 1 - f})
    pause()
    drawSegmentMeasureMark({ points: [A, M], size: 0.26, quantity: 1, color: cor_rosa_choque, opacity: o })
    drawSegmentMeasureMark({ points: [M, C], size: 0.26, quantity: 1, color: cor_rosa_choque, opacity: o })
    drawSegmentMeasureMark({ points: [B, M], size: 0.26, quantity: 2, color: cor_rosa_choque, opacity: o })
    drawSegmentMeasureMark({ points: [M, D], size: 0.26, quantity: 2, color: cor_rosa_choque, opacity: o })
    drawText({ text: "as diagonais se cortam ao meio", x: 0.11, y: -2.93, fontSize: 0.42, color: cor_rosa_choque, opacity: o })
})

pause()   // <- aperte "Limpar P3" antes do finale

// === FINALE: simetria central — gira 180° em torno de M e coincide ===
const girar = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2.5 }, { value: 0, time: 2.5 }], label: "Girar 180° em torno de M" })
function rot(Pt, ang) {
    const dx = Pt.x - M.x, dy = Pt.y - M.y
    const c = Math.cos(ang), s = Math.sin(ang)
    return { x: M.x + dx * c - dy * s, y: M.y + dx * s + dy * c }
}
animation(girar, (g) => {
    const ang = Math.PI * g
    const Ar = rot(A, ang), Br = rot(B, ang), Cr = rot(C, ang), Dr = rot(D, ang)
    drawPolygon({ points: [Ar, Br, Cr, Dr], fill: true, fillColor: cor_verde_neon, opacity: 0.2 })
    drawPoint({ x: M.x, y: M.y, size: 0.09, color: cor_rosa_choque })
    drawText({ text: "simetria central: gira $180^\\circ$ e coincide", x: 0.08, y: -3.8, fontSize: 0.42, color: cor_verde_neon })
})
