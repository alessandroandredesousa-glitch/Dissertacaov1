// =====================================================
// IMAGEM ESTÁTICA — img_soma_angulos_1.png  (Figura 2.52)
// Triângulo ABC; ângulo externo e em B (prolongando AB além de B);
// reta r ∥ CA traçada por B, dividindo e em:
//   parte α (correspondente, AB transversal) + parte γ (alterno interno, CB transversal)
//  => e = α + γ.
// Mesma base e cores da animação angulo_externo_soma_triangulo.js (estado final).
// Destino: imagem/2.8/img_soma_angulos_1.png
// =====================================================
// drawGrid({xMin: -6, xMax: 6, yMin: -5, yMax: 5})

const cor_azul_eletrico = '#00B0FF'   // α
const cor_coral         = '#FF6B6B'   // γ
const cor_dourado       = '#FFD700'   // reta r ∥ CA
const cor_verde_neon    = '#39FF14'   // ângulo externo e

const A = {x: -4.5, y: 0}
const B = {x:  2.7, y: 0}
const C = {x:  0,   y: 3.6}

// --- triângulo + vértices ---
drawPolygon({ points: [A, B, C] })
drawPoint({ x: A.x, y: A.y, size: 0.07 })
drawPoint({ x: B.x, y: B.y, size: 0.07 })
drawPoint({ x: C.x, y: C.y, size: 0.07 })
drawText({ text: "$A$", x: A.x-0.5,  y: A.y-0.45, fontSize: 0.5 })
drawText({ text: "$B$", x: B.x+0.15, y: B.y-0.5,  fontSize: 0.5 })
drawText({ text: "$C$", x: C.x-0.12, y: C.y+0.32, fontSize: 0.5 })

// --- prolongamento de AB além de B ---
const ext = {x: B.x + 2.3, y: 0}
drawSegment({ points: [B, ext], width: 0.04 })
drawArrow({ points: [{x: ext.x-0.5, y: 0}, ext], size: 0.2 })

// --- reta r por B, paralela a CA (direção oposta a C->A: aponta p/ cima-direita) ---
const gx = -(A.x - C.x), gy = -(A.y - C.y)
const gn = Math.sqrt(gx*gx + gy*gy)
const g  = {x: gx/gn, y: gy/gn}
drawSegment({ points: [ {x: B.x - 0.8*g.x, y: B.y - 0.8*g.y},
                        {x: B.x + 3.1*g.x, y: B.y + 3.1*g.y} ],
    color: cor_dourado, width: 0.05 })
drawText({ text: "$r$", x: B.x + 3.1*g.x + 0.18, y: B.y + 3.1*g.y + 0.1, fontSize: 0.5, color: cor_dourado })

// --- α em A ---
drawSector({ points: [B, A, C], radius: 0.7, fill: true, fillColor: cor_azul_eletrico, opacity: 0.6 })
drawText({ text: "$\\alpha$", x: A.x+1.0, y: A.y+0.22, fontSize: 0.5, color: cor_azul_eletrico })

// --- γ em C ---
drawSector({ points: [A, C, B], radius: 0.7, fill: true, fillColor: cor_coral, opacity: 0.6 })
drawText({ text: "$\\gamma$", x: C.x-0.12, y: C.y-1.0, fontSize: 0.5, color: cor_coral })

// --- ângulo externo e em B (arco verde englobando as duas partes) ---
const aExt = 0                                   // direção do prolongamento (+x)
const aBC  = Math.atan2(C.y-B.y, C.x-B.x)        // direção B->C
drawArc({ center: B, radius: 1.15, startAngle: aExt, endAngle: aBC, color: cor_verde_neon })
drawText({ text: "$e$", x: B.x + 1.3*Math.cos((aExt+aBC)/2),
                        y: B.y + 1.3*Math.sin((aExt+aBC)/2), fontSize: 0.5, color: cor_verde_neon })

// --- divisão de e por r: parte α (corresp.) + parte γ (alt. int.) ---
const Bext  = {x: B.x+1,     y: B.y}             // direção do prolongamento
const Bgold = {x: B.x+g.x,   y: B.y+g.y}         // direção de r
// inferior (entre prolongamento e r) ≡ α
drawSector({ points: [Bext, B, Bgold], radius: 0.8, fill: true, fillColor: cor_azul_eletrico, opacity: 0.6 })
drawText({ text: "$\\alpha$", x: B.x+0.95, y: B.y+0.30, fontSize: 0.45, color: cor_azul_eletrico })
// superior (entre r e BC) ≡ γ
drawSector({ points: [Bgold, B, C], radius: 0.8, fill: true, fillColor: cor_coral, opacity: 0.6 })
drawText({ text: "$\\gamma$", x: B.x+0.12, y: B.y+0.95, fontSize: 0.45, color: cor_coral })
