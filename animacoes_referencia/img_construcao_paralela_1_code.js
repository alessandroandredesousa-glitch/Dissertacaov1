// =====================================================
// IMAGEM ESTÁTICA 1 — img_construcao_paralela_1.png
// Figura 2.45: setup — r, P, A, t, α
// (passos 1 e 2 da construção)
// =====================================================
// drawGrid({xMin: -5, xMax: 5, yMin: -5, yMax: 5})

const cor_azul_eletrico = '#00B0FF'
const cor_dourado       = '#FFD700'

const A = {x: -2, y: -2}
const P = {x:  0, y:  2}

// --- reta r ---
drawArrow({ points: [{x:-3.5, y:-2}, {x:-4.5, y:-2}], color: cor_azul_eletrico, size: 0.2 })
drawSegment({ points: [{x:-4, y:-2}, {x:4, y:-2}], color: cor_azul_eletrico, width: 0.06 })
drawArrow({ points: [{x:3.5, y:-2}, {x:4.5, y:-2}], color: cor_azul_eletrico, size: 0.2 })
drawText({ text: "$r$", x: -4.3, y: -1.6, fontSize: 0.55, color: cor_azul_eletrico })

// --- ponto P ---
drawPoint({ x: P.x, y: P.y, size: 0.07 })
drawText({ text: "$P$", x: P.x - 0.15, y: P.y + 0.22, fontSize: 0.52 })

// --- ponto A e transversal t ---
drawPoint({ x: A.x, y: A.y, size: 0.06 })
drawText({ text: "$A$", x: A.x - 0.18, y: A.y + 0.22, fontSize: 0.48 })

drawArrow({ points: [{x:-2.6, y:-3.2}, {x:-3, y:-4}], size: 0.2 })
drawSegment({ points: [{x:-3, y:-4}, {x:1, y:4}], width: 0.05 })
drawArrow({ points: [{x:0.6, y:3.2}, {x:1, y:4}], size: 0.2 })
drawText({ text: "$t$", x: 0.69, y: 3.92, fontSize: 0.55 })

// --- ângulo α em A ---
drawSector({ points: [{x:0, y:-2}, A, P], radius: 0.55,
    fill: true, fillColor: cor_dourado, opacity: 0.75 })
drawText({ text: "$\\alpha$", x: -1.32, y: -1.59, fontSize: 0.5, color: cor_dourado })
