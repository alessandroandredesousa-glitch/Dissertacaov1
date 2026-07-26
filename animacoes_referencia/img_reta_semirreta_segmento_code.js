// =====================================================
// IMAGEM ESTÁTICA — img_reta_semirreta_segmento.png
// Figura 1.1: três diagramas SEPARADOS (estilo livro-texto), com os mesmos
//   pontos A, B, O em cada um:
//     1) RETA        — linha com setas nos dois lados (roxo)
//     2) SEMIRRETAS   — O com duas semirretas opostas OA (coral) e OB (azul)
//     3) SEGMENTO AB  — a parte entre A e B (verde)
//
// OBS de FUNDO: imagem tem fundo BRANCO. Rótulos usam cor PADRÃO (adapta ao fundo);
//   linhas na espessura PADRÃO (sem width); pontos em size 0.06.
//
// Destino no site: imagem/1.1/img_reta_semirreta_segmento.png
// =====================================================
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

const cor_verde_neon = '#39FF14'
const cor_roxo_neon = '#BF00FF'
const cor_azul_eletrico = '#00B0FF'
const cor_coral = '#FF6B6B'

// =========================================================
// 1) RETA  (linha com setas nos dois lados, passando por A e B)
// =========================================================
const yR = 3.2
drawSegment({ points: [{ x: -3.5, y: yR }, { x: 3.5, y: yR }], color: cor_roxo_neon })
drawArrow({ points: [{ x: -3, y: yR }, { x: -4, y: yR }], color: cor_roxo_neon, size: 0.2 })
drawArrow({ points: [{ x: 3, y: yR }, { x: 4, y: yR }], color: cor_roxo_neon, size: 0.2 })
drawPoint({ x: -1.5, y: yR, size: 0.06 })
drawText({ text: "$A$", x: -1.6, y: yR + 0.35, fontSize: 0.45 })
drawPoint({ x: 1.5, y: yR, size: 0.06 })
drawText({ text: "$B$", x: 1.45, y: yR + 0.35, fontSize: 0.45 })
drawText({ text: "Reta $r$", x: -0.55, y: yR - 0.7, fontSize: 0.5, color: cor_roxo_neon })

// =========================================================
// 2) SEMIRRETAS OPOSTAS  (O com dois raios opostos: OA coral, OB azul)
// =========================================================
const yS = 0.4
const O = { x: 0, y: yS }
drawArrow({ points: [O, { x: -3.5, y: yS }], color: cor_coral, size: 0.22 })
drawArrow({ points: [O, { x: 3.5, y: yS }], color: cor_azul_eletrico, size: 0.22 })
drawPoint({ x: -2, y: yS, size: 0.06 })
drawText({ text: "$A$", x: -2.05, y: yS + 0.35, fontSize: 0.42 })
drawPoint({ x: 2, y: yS, size: 0.06 })
drawText({ text: "$B$", x: 1.95, y: yS + 0.35, fontSize: 0.42 })
drawPoint({ x: O.x, y: O.y, size: 0.06 })
drawText({ text: "$O$", x: O.x - 0.1, y: O.y + 0.35, fontSize: 0.45 })
drawText({ text: "$\\overrightarrow{OA}$", x: -3.55, y: yS + 0.5, fontSize: 0.45, color: cor_coral })
drawText({ text: "$\\overrightarrow{OB}$", x: 3.1, y: yS + 0.5, fontSize: 0.45, color: cor_azul_eletrico })
drawText({ text: "Semirretas opostas", x: -1.35, y: yS - 0.8, fontSize: 0.5, color: cor_azul_eletrico })

// =========================================================
// 3) SEGMENTO AB  (a parte entre A e B)
// =========================================================
const yG = -2.6
drawSegment({ points: [{ x: -1.5, y: yG }, { x: 1.5, y: yG }], color: cor_verde_neon })
drawPoint({ x: -1.5, y: yG, size: 0.06 })
drawText({ text: "$A$", x: -1.6, y: yG + 0.35, fontSize: 0.45 })
drawPoint({ x: 1.5, y: yG, size: 0.06 })
drawText({ text: "$B$", x: 1.45, y: yG + 0.35, fontSize: 0.45 })
drawText({ text: "Segmento $\\overline{AB}$", x: -1.15, y: yG - 0.7, fontSize: 0.5, color: cor_verde_neon })
