// =====================================================
// IMAGEM ESTÁTICA 2 — img_construcao_paralela_2.png
// Figura 2.46: resultado — r, P, A, t, α, β, β≡α, m, m∥r
// (construção completa, quadro final da animação)
// =====================================================
// drawGrid({xMin: -5, xMax: 5, yMin: -5, yMax: 5})

const cor_azul_eletrico = '#00B0FF'
const cor_rosa_choque   = '#FF1493'
const cor_dourado       = '#FFD700'
const cor_verde_neon    = '#39FF14'

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

// --- ângulo β em P (posição final do transporte) ---
drawSector({ points: [{x:-2, y:2}, P, A], radius: 0.55,
    fill: true, fillColor: cor_dourado, opacity: 0.75 })
drawText({ text: "$\\beta$", x: -0.75, y: 1.32, fontSize: 0.5, color: cor_dourado })
drawText({ text: "$\\beta \\equiv \\alpha$", x: -2.11, y: 0.08, fontSize: 0.5, color: cor_verde_neon })

// --- reta m paralela a r ---
drawArrow({ points: [{x:-3.5, y:2}, {x:-4.5, y:2}], color: cor_rosa_choque, size: 0.2 })
drawSegment({ points: [{x:-4, y:2}, {x:4, y:2}], color: cor_rosa_choque, width: 0.06 })
drawArrow({ points: [{x:3.5, y:2}, {x:4.5, y:2}], color: cor_rosa_choque, size: 0.2 })
drawText({ text: "$m$", x: 4.3, y: 2.38, fontSize: 0.55, color: cor_rosa_choque })
drawText({ text: "$m \\parallel r$", x: 2.31, y: 0.19, fontSize: 0.55, color: cor_rosa_choque })
