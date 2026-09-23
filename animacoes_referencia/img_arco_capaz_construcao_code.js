// IMAGEM ESTÁTICA — img_arco_capaz_construcao.png (Figura 4.22)
// Construcao do arco capaz: mediatriz m de AB; por A a semirreta a 90°-α;
// encontro em O (centro); arco de raio OA; central AÔB = 2α. Base da animacao 4.6.
// Destino: imagem/4.6/img_arco_capaz_construcao.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano = '#00FFFF'
const cor_verde_neon = '#39FF14'
const cor_amarelo_neon = '#FFFF00'
const cor_rosa_choque = '#FF1493'
const cor_roxo_neon = '#BF00FF'
const cor_azul_eletrico = '#00B0FF'
const cor_coral = '#FF6B6B'
const cor_dourado = '#FFD700'
const cor_lapis = '#AAAAAA'

const PI = Math.PI
const alpha = 50, aHalf = 1.9
const OMv = aHalf / Math.tan(alpha * PI / 180)
const Rv = aHalf / Math.sin(alpha * PI / 180)
const ABy = 1.4
const A = { x: -aHalf, y: ABy }, B = { x: aHalf, y: ABy }, M = { x: 0, y: ABy }
const O = { x: 0, y: ABy - OMv }

// AB + mediatriz m + ponto medio M
drawSegment({ points: [A, B], width: 0.03, color: cor_amarelo_neon })
drawSegment({ points: [{ x: 0, y: ABy + 0.8 }, { x: 0, y: O.y - Rv - 0.3 }], width: 0.02, lineDash: [0.12, 0.1], color: cor_lapis })
drawText({ text: "$m$", x: 0.2, y: ABy + 0.65, fontSize: 0.4, color: cor_lapis })
drawPoint({ x: M.x, y: M.y, size: 0.06, color: cor_rosa_choque }); drawText({ text: "$M$", x: 0.12, y: ABy + 0.28, fontSize: 0.38, color: cor_rosa_choque })
// arco capaz (raio OA), por baixo
{
    const tA = Math.atan2(A.y - O.y, A.x - O.x)
    let tB = Math.atan2(B.y - O.y, B.x - O.x); if (tB < tA) tB += 2 * PI
    drawCurve({ x: t => O.x + Rv * Math.cos(t), y: t => O.y + Rv * Math.sin(t), tStart: tA, tEnd: tB, steps: 100, width: 0.05, color: cor_verde_neon })
}
// semirreta por A a 90°-α (= raio OA) + angulo em A + raio OB
drawSegment({ points: [A, O], width: 0.026, color: cor_azul_eletrico })
drawSegment({ points: [O, B], width: 0.026, color: cor_amarelo_neon })
drawSector({ points: [B, A, O], radius: 0.55, fill: true, fillColor: cor_azul_eletrico, opacity: 0.5 }); drawText({ text: "$90^\\circ-\\alpha$", x: A.x + 0.5, y: A.y - 0.55, fontSize: 0.36, color: cor_azul_eletrico })
// central AÔB = 2α
drawSector({ points: [A, O, B], radius: 0.6, fill: true, fillColor: cor_roxo_neon, opacity: 0.5 }); drawText({ text: "$2\\alpha$", x: O.x - 0.35, y: O.y + 0.55, fontSize: 0.4, color: cor_roxo_neon })
// pontos + rotulos
drawPoint({ x: A.x, y: A.y, size: 0.09, color: cor_dourado }); drawText({ text: "$A$", x: A.x - 0.45, y: A.y + 0.05, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: B.x, y: B.y, size: 0.09, color: cor_dourado }); drawText({ text: "$B$", x: B.x + 0.2, y: B.y + 0.05, fontSize: 0.45, color: cor_dourado })
drawPoint({ x: O.x, y: O.y, size: 0.08, color: cor_rosa_choque }); drawText({ text: "$O$", x: O.x + 0.2, y: O.y + 0.05, fontSize: 0.42, color: cor_rosa_choque })
