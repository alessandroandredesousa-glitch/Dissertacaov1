// =====================================================
// IMAGEM ESTÁTICA — img_complementares_suplementares.png (Figura 1.5)
// Baseada na animação angulo_complementar_suplementar.js (Parte 2, estado JUNTO):
//   SUPLEMENTARES: 120° (dourado) + 60° (coral) = 180°  -> ângulo raso.
//   COMPLEMENTARES: 60° (dourado) + 30° (coral) = 90°   -> ângulo reto.
//
// OBS de FUNDO: imagem tem fundo BRANCO. Lados e vértices usam cor PADRÃO
//   (adaptam ao fundo). Setores em dourado/coral; rótulos das medidas em
//   PADRÃO (dourado sumiria no branco). Equações em cor padrão.
//
// Destino no site: imagem/1.4/img_complementares_suplementares.png
// =====================================================
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

const cor_coral = '#FF6B6B'
const cor_dourado = '#FFD700'

const dr = Math.PI / 180
const Lr = 2.2
function tip(V, a) { return { x: V.x + Lr * Math.cos(a * dr), y: V.y + Lr * Math.sin(a * dr) } }

// ===== SUPLEMENTARES (em cima): 120° + 60° = 180° =====
const Vs = { x: -0.3, y: 1.3 }
drawSector({ points: [tip(Vs, 120), Vs, tip(Vs, 0)], radius: 0.7, fill: true, fillColor: cor_dourado, opacity: 0.8 })
drawSector({ points: [tip(Vs, 180), Vs, tip(Vs, 120)], radius: 0.7, fill: true, fillColor: cor_coral, opacity: 0.75 })
drawArrow({ points: [Vs, tip(Vs, 0)], size: 0.2 })
drawArrow({ points: [Vs, tip(Vs, 180)], size: 0.2 })
drawArrow({ points: [Vs, tip(Vs, 120)], size: 0.2 })
drawPoint({ x: Vs.x, y: Vs.y, size: 0.06 })
drawText({ text: "$120^\\circ$", x: Vs.x + 0.15, y: Vs.y + 0.75, fontSize: 0.42 })
drawText({ text: "$60^\\circ$", x: Vs.x - 1.25, y: Vs.y + 0.5, fontSize: 0.42 })
drawText({ text: "$120^\\circ + 60^\\circ = 180^\\circ$  (suplementares)", x: -2.6, y: 0.3, fontSize: 0.42 })

// ===== COMPLEMENTARES (embaixo): 60° + 30° = 90° =====
const Vc = { x: -0.3, y: -2.6 }
drawSector({ points: [tip(Vc, 60), Vc, tip(Vc, 0)], radius: 0.7, fill: true, fillColor: cor_dourado, opacity: 0.8 })
drawSector({ points: [tip(Vc, 90), Vc, tip(Vc, 60)], radius: 0.7, fill: true, fillColor: cor_coral, opacity: 0.75 })
drawArrow({ points: [Vc, tip(Vc, 0)], size: 0.2 })
drawArrow({ points: [Vc, tip(Vc, 90)], size: 0.2 })
drawArrow({ points: [Vc, tip(Vc, 60)], size: 0.2 })
drawPoint({ x: Vc.x, y: Vc.y, size: 0.06 })
drawText({ text: "$60^\\circ$", x: Vc.x + 0.5, y: Vc.y + 0.35, fontSize: 0.42 })
drawText({ text: "$30^\\circ$", x: Vc.x - 0.15, y: Vc.y + 1.0, fontSize: 0.42 })
drawText({ text: "$60^\\circ + 30^\\circ = 90^\\circ$  (complementares)", x: -2.6, y: -4.15, fontSize: 0.42 })
