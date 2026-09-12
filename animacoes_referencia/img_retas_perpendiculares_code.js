// IMAGEM ESTÁTICA — img_retas_perpendiculares.png (Figura 2.53)
// Retas perpendiculares r ⊥ s: os quatro angulos sao retos (90°).
// Pares opostos pelo vertice na mesma cor (Q1,Q3 azul; Q2,Q4 laranja).
// Mesma base da animacao 2.9.1 (retas via drawCurve, angulos via drawSector).
// Destino: imagem/2.9/img_retas_perpendiculares.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES === (paleta padrao da animacao)
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_laranja = '#FF6600'
const cor_rosa_choque = '#FF1493'
const cor_azul_eletrico = '#00B0FF'
const cor_coral = '#FF6B6B'

// === GEOMETRIA ===
const O = { x: 0, y: 0 }
const L = 4                          // meio-comprimento de r
const Ls = 3.1                       // meio-comprimento de s
const secRad = 0.6
const numRad = 1.05

// retas r (horizontal) e s (vertical, perpendicular) via drawCurve
drawCurve({ x: t => t, y: t => 0, tStart: -L, tEnd: L, steps: 2, width: 0.035, color: cor_ciano })
drawCurve({ x: t => 0, y: t => t, tStart: -Ls, tEnd: Ls, steps: 2, width: 0.035, color: cor_verde_neon })
drawText({ text: "$r$", x: L + 0.15, y: 0, fontSize: 0.5, color: cor_ciano })
drawText({ text: "$s$", x: 0.2, y: Ls + 0.2, fontSize: 0.5, color: cor_verde_neon })
drawPoint({ x: O.x, y: O.y, size: 0.08, color: cor_rosa_choque })

// os quatro angulos retos (drawSector -> simbolo de reto a 90°)
drawSector({ points: [{ x: 1, y: 0 }, O, { x: 0, y: 1 }], radius: secRad, fill: true, fillColor: cor_azul_eletrico, opacity: 0.35 })   // Q1
drawSector({ points: [{ x: 0, y: 1 }, O, { x: -1, y: 0 }], radius: secRad, fill: true, fillColor: cor_laranja, opacity: 0.35 })       // Q2
drawSector({ points: [{ x: -1, y: 0 }, O, { x: 0, y: -1 }], radius: secRad, fill: true, fillColor: cor_azul_eletrico, opacity: 0.35 }) // Q3
drawSector({ points: [{ x: 0, y: -1 }, O, { x: 1, y: 0 }], radius: secRad, fill: true, fillColor: cor_laranja, opacity: 0.35 })       // Q4

// medidas dos quatro angulos — pares o.p.v. na mesma cor
drawText({ text: "$90^\\circ$", x: numRad * Math.cos(Math.PI / 4), y: numRad * Math.sin(Math.PI / 4), fontSize: 0.4, color: cor_azul_eletrico })          // Q1
drawText({ text: "$90^\\circ$", x: numRad * Math.cos(3 * Math.PI / 4), y: numRad * Math.sin(3 * Math.PI / 4), fontSize: 0.4, color: cor_laranja })        // Q2
drawText({ text: "$90^\\circ$", x: numRad * Math.cos(5 * Math.PI / 4), y: numRad * Math.sin(5 * Math.PI / 4), fontSize: 0.4, color: cor_azul_eletrico })  // Q3
drawText({ text: "$90^\\circ$", x: numRad * Math.cos(7 * Math.PI / 4), y: numRad * Math.sin(7 * Math.PI / 4), fontSize: 0.4, color: cor_laranja })        // Q4

// rotulo r ⊥ s
drawText({ text: "$r \\perp s$", x: 0.78, y: 2.14, fontSize: 0.55, color: cor_verde_neon })
