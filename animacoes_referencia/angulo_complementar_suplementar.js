// ANIMAÇÃO: 1.4 Complementares, Suplementares e Ângulo Reto

//drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 });

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

drawText({ text: "\\begin{center}\\textbf{Ângulo Reto, Agudo e Obtuso}\\end{center}", x: 0.2, y: 4.2, color: cor_titulo })

pause()

// ===== PARTE 1 (em cima) =====
const O = { x: -1, y: -1 }
const L = 3.2
const rot = param({ value: 0.5, min: 0, max: 1, step: 0.001, buttons: [{ value: 0.5, time: 2 }, { value: 0.15, time: 2 }, { value: 0.85, time: 2 }, { value: 0.5, time: 2 }], label: "Girar OA (reto → agudo/obtuso)" })

animation(rot, (t) => {
    const g = 20 + t * 140
    const ang = g * Math.PI / 180
    const B = { x: O.x + L, y: O.y }
    const A = { x: O.x + L * Math.cos(ang), y: O.y + L * Math.sin(ang) }
    const ref = { x: O.x, y: O.y + L }
    const foraDe90 = Math.abs(g - 90) > 1
    if (foraDe90) drawSegment({ points: [O, ref], color: cor_azul_eletrico, width: 0.03, lineDash: [0.15, 0.1], opacity: 0.5 })
    drawSector({ points: [A, O, B], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: 0.8 })
    drawArrow({ points: [O, A], color: cor_coral, size: 0.2 })
    drawArrow({ points: [O, B], color: cor_azul_eletrico, size: 0.2 })
    if (!foraDe90) { const s = 0.35; drawSegment({ points: [{ x: O.x + s, y: O.y }, { x: O.x + s, y: O.y + s }, { x: O.x, y: O.y + s }], color: cor_dourado, width: 0.04 }) }
    drawPoint({ x: O.x, y: O.y, size: 0.08, color: cor_amarelo_neon })
    drawText({ text: "$O$", x: O.x - 0.35, y: O.y - 0.35, fontSize: 0.5, color: cor_amarelo_neon })
    drawPoint({ x: A.x, y: A.y, size: 0.07 })
    drawText({ text: "$A$", x: A.x + 0.1, y: A.y + 0.2, fontSize: 0.5 })
    drawPoint({ x: B.x, y: B.y, size: 0.07 })
    drawText({ text: "$B$", x: B.x + 0.25, y: B.y - 0.05, fontSize: 0.5 })
    const cls = g < 89 ? "Agudo" : (g > 91 ? "Obtuso" : "Reto")
    drawText({ text: "$" + g.toFixed(2) + "^\\circ$", x: 0.19, y: -0.72, fontSize: 0.4, color: cor_dourado })
    drawText({ text: cls, x: 0.46, y: -1.75, fontSize: 0.6, color: cor_verde_neon })
})

pause()

// ===== PARTE 2 (mais para baixo) =====
const dr = Math.PI / 180
const Lr = 2.6
const Vs = { x: -1.4, y: -6 }
const Vc = { x: -1.4, y: -11.5 }
const V2i = { x: 2.7, y: -6 }
const V4i = { x: 2.7, y: -11.5 }
function tip(V, aDeg) { return { x: V.x + Lr * Math.cos(aDeg * dr), y: V.y + Lr * Math.sin(aDeg * dr) } }
const p_sup = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2.5 }, { value: 0, time: 2.5 }], label: "Juntar 1 e 2 (suplementares)" })
const p_comp = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2.5 }, { value: 0, time: 2.5 }], label: "Juntar 3 e 4 (complementares)" })

animation(p_sup, p_comp, (su, co) => {
    // SUPLEMENTARES
    drawSector({ points: [tip(Vs, 120), Vs, tip(Vs, 0)], radius: 0.75, fill: true, fillColor: cor_dourado, opacity: 0.8 })
    drawArrow({ points: [Vs, tip(Vs, 0)], color: cor_azul_eletrico, size: 0.2 })
    drawArrow({ points: [Vs, tip(Vs, 120)], color: cor_azul_eletrico, size: 0.2 })
    drawText({ text: "$120^\\circ$", x: Vs.x +1, y: Vs.y + 0.7, fontSize: 0.42, color: cor_azul_eletrico })
    const V2 = { x: V2i.x + (Vs.x - V2i.x) * su, y: V2i.y + (Vs.y - V2i.y) * su }
    const rho2 = -90 * (1 - su)
    const t2s = { x: V2.x + Lr * Math.cos((120 + rho2) * dr), y: V2.y + Lr * Math.sin((120 + rho2) * dr) }
    const t2o = { x: V2.x + Lr * Math.cos((180 + rho2) * dr), y: V2.y + Lr * Math.sin((180 + rho2) * dr) }
    drawSector({ points: [t2o, V2, t2s], radius: 0.75, fill: true, fillColor: cor_coral, opacity: 0.75 })
    drawArrow({ points: [V2, t2s], color: cor_verde_menta, size: 0.2 })
    drawArrow({ points: [V2, t2o], color: cor_verde_menta, size: 0.2 })
    drawText({ text: "$60^\\circ$", x: (V2.x + 0.7)+(-su*1.8), y: (V2.y + 0.9)-su*0.5, fontSize: 0.42, color: cor_verde_menta })
    if (su > 0.98) drawText({ text: "$120^\\circ + 60^\\circ = 180^\\circ$  (suplementares)", x: -0.04, y: -6.83, fontSize: 0.5, color: cor_verde_neon })

    // COMPLEMENTARES
    drawSector({ points: [tip(Vc, 60), Vc, tip(Vc, 0)], radius: 0.75, fill: true, fillColor: cor_dourado, opacity: 0.8 })
    drawArrow({ points: [Vc, tip(Vc, 0)], color: cor_azul_eletrico, size: 0.2 })
    drawArrow({ points: [Vc, tip(Vc, 60)], color: cor_azul_eletrico, size: 0.2 })
    drawText({ text: "$60^\\circ$", x: Vc.x + 0.95, y: Vc.y + 0.55, fontSize: 0.42, color: cor_azul_eletrico })
    const V4 = { x: V4i.x + (Vc.x - V4i.x) * co, y: V4i.y + (Vc.y - V4i.y) * co }
    const rho4 = 30 * (1 - co)
    const t4s = { x: V4.x + Lr * Math.cos((60 + rho4) * dr), y: V4.y + Lr * Math.sin((60 + rho4) * dr) }
    const t4o = { x: V4.x + Lr * Math.cos((90 + rho4) * dr), y: V4.y + Lr * Math.sin((90 + rho4) * dr) }
    drawSector({ points: [t4o, V4, t4s], radius: 0.75, fill: true, fillColor: cor_coral, opacity: 0.75 })
    drawArrow({ points: [V4, t4s], color: cor_verde_menta, size: 0.2 })
    drawArrow({ points: [V4, t4o], color: cor_verde_menta, size: 0.2 })
    drawText({ text: "$30^\\circ$", x: V4.x + 0.2, y: V4.y + 0.7, fontSize: 0.42, color: cor_verde_menta })
    if (co > 0.98) drawText({ text: "$60^\\circ + 30^\\circ = 90^\\circ$  (complementares)", x: -0.1, y: -14.79, fontSize: 0.5, color: cor_verde_neon })
})
