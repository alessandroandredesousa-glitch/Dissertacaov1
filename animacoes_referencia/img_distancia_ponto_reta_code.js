// IMAGEM ESTÁTICA — img_distancia_ponto_reta.png (Figura 2.57)
// Distancia de P a r: a perpendicular PP' (P' = pe/projecao) é o menor caminho;
// um oblíquo PQ satisfaz PP' < PQ (triangulo PP'Q retangulo em P').
// Mesma base da animacao 2.9.4.
// Destino: imagem/2.9/img_distancia_ponto_reta.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_laranja = '#FF6600'
const cor_rosa_choque = '#FF1493'
const cor_azul_eletrico = '#00B0FF'
const cor_coral = '#FF6B6B'
const cor_dourado = '#FFD700'

// === GEOMETRIA ===
const P = { x: 0, y: 2.4 }
const Pfoot = { x: 0, y: 0 }         // P' = projecao ortogonal
const Q = { x: 2.6, y: 0 }           // ponto qualquer de r (oblíquo)

// reta r + ponto P
drawCurve({ x: t => t, y: t => 0, tStart: -4, tEnd: 4, steps: 2, width: 0.035, color: cor_ciano })
drawText({ text: "$r$", x: 4.2, y: -0.1, fontSize: 0.5, color: cor_ciano })
drawPoint({ x: P.x, y: P.y, size: 0.1, color: cor_dourado })
drawText({ text: "$P$", x: 0.06, y: 2.76, fontSize: 0.5, color: cor_dourado })

// triangulo retangulo PP'Q (leve)
drawPolygon({ points: [P, Pfoot, Q], fill: true, fillColor: cor_azul_eletrico, opacity: 0.13 })

// perpendicular PP' (a distancia) + pe P' + angulo reto
drawSegment({ points: [P, Pfoot], width: 0.04, color: cor_verde_neon })
drawPoint({ x: Pfoot.x, y: Pfoot.y, size: 0.09, color: cor_rosa_choque })
drawText({ text: "$P'$", x: 0.06, y: -0.64, fontSize: 0.45, color: cor_rosa_choque })
drawSector({ points: [{ x: 1, y: 0 }, Pfoot, P], radius: 0.32, fill: true, fillColor: cor_verde_neon, opacity: 0.45 })
drawText({ text: "$d = PP'$", x: -1.55, y: 1.2, fontSize: 0.42, color: cor_verde_neon })

// oblíquo PQ + ponto Q
drawSegment({ points: [P, Q], width: 0.03, color: cor_coral })
drawPoint({ x: Q.x, y: Q.y, size: 0.08, color: cor_laranja })
drawText({ text: "$Q$", x: Q.x, y: Q.y - 0.6, fontSize: 0.45, color: cor_laranja })

// relacao — cada segmento na sua cor (PP' verde, PQ coral)
drawText({ text: "$\\textcolor{#39FF14}{PP'} < \\textcolor{#FF6B6B}{PQ}$", x: 1.7, y: 1.5, fontSize: 0.42, color: cor_verde_neon })
