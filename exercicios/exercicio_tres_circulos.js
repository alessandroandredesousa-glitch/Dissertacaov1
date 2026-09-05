// EXERCÍCIO — Distância P1P2 (reta tangente externa comum a três círculos)
//   C1 (raio 3), C2 (raio 6), C3 (raio 9) com centros alinhados no eixo x.
//   Reta tangente externa toca os três; achar P1P2 por semelhança + Pitágoras.
// Refatorado: paleta padrão, cores via `color:` (sem \textcolor), retas por
//   dois pontos (drawSegment + lineDash), params com botões (auto-play).

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

// === PARÂMETROS (com botões) ===
const sumir6 = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2 }], label: "sumir o 6 (vira dois 3)" })
const sumir9 = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2 }], label: "sumir o 9 (vira 3 + 6)" })
const tri_dourado = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2 }], label: "mover tri dourado" })
const tri_roxo = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2 }], label: "mover tri roxo" })
const sumir2_roxo = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2 }], label: "sumir o x roxo" })
const sumir2e3 = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2 }], label: "sumir 2 + 3" })
const tri_laranja = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2 }], label: "triangulo laranja" })

// === PONTOS ===
const C1 = { x: 6, y: 0 }
const C2 = { x: -3, y: 0 }
const C3 = { x: 0, y: 0 }
const P1 = { x: (5 + 8 * Math.sqrt(7)) / 3, y: (2 * Math.sqrt(2) * (5 - Math.sqrt(7))) / 3 }
const P2 = { x: (5 - 8 * Math.sqrt(7)) / 3, y: (2 * Math.sqrt(2) * (5 + Math.sqrt(7))) / 3 }
const T1 = { x: 7, y: 2 * Math.sqrt(2) }
const T2 = { x: -1, y: 4 * Math.sqrt(2) }
const P = { x: -2, y: 2 * Math.sqrt(2) }
const A = { x: 5 / 3, y: (10 * Math.sqrt(2)) / 3 }
const B = { x: 2 / 3, y: (4 * Math.sqrt(2)) / 3 }

// TÍTULO
drawText({ text: "Qual a distância $\\bar{P_1P_2}$?", x: 0.19, y: 11.79, fontSize: 0.8, color: cor_titulo })

// CÍRCULOS
drawCircle({ center: C1, radius: 3 })
drawCircle({ center: C2, radius: 6 })
drawCircle({ center: C3, radius: 9 })

// CENTROS + RÓTULOS
drawPoint({ x: C1.x, y: C1.y, size: 0.1 })
drawPoint({ x: C2.x, y: C2.y, size: 0.1 })
drawPoint({ x: C3.x, y: C3.y, size: 0.1 })
drawText({ text: "C1", x: 6.33, y: -0.9, fontSize: 0.8 })
drawText({ text: "C2", x: -3.08, y: -0.93, fontSize: 0.8 })
drawText({ text: "C3", x: 0.73, y: -0.82, fontSize: 0.8 })

// RAIOS (setas) + medidas
drawArrow({ points: [C1, { x: 9, y: 0 }] })
drawArrow({ points: [C2, { x: -9, y: 0 }] })
drawArrow({ points: [C3, { x: 0, y: -9 }] })
drawText({ text: "3", x: 7.51, y: -0.77, fontSize: 0.8 })
drawText({ text: "6", x: -5.94, y: -0.78, fontSize: 0.8 })
drawText({ text: "9", x: -0.44, y: -4.22, fontSize: 0.8 })

// RETA TANGENTE a C1 e C2 (por P1 e P2) + pontos e rótulos
drawSegment({ points: [P1, P2] })
drawPoint({ x: P1.x, y: P1.y, size: 0.1 })
drawPoint({ x: P2.x, y: P2.y, size: 0.1 })
drawText({ text: "P1", x: 9.35, y: 2.26, fontSize: 0.8 })
drawText({ text: "P2", x: -5.82, y: 7.49, fontSize: 0.8 })

// ===================== INÍCIO DA SOLUÇÃO =====================
pause()

// tangente T1 no C1: raio C1T1 (=3) perpendicular à tangente
drawPoint({ x: T1.x, y: T1.y, size: 0.1, color: cor_coral })
drawSegment({ points: [T1, C1], color: cor_coral, width: 0.1 })
drawSector({ points: [T2, T1, C1], radius: 0.5, width: 0.1, color: cor_coral })
drawText({ text: "3", x: 6.93, y: 1.01, fontSize: 0.8, color: cor_coral })

// tangente T2 no C2: raio C2T2 (=6)
drawPoint({ x: T2.x, y: T2.y, size: 0.1, color: cor_coral })
drawSegment({ points: [T2, C2], color: cor_coral, width: 0.1 })
drawSector({ points: [C2, T2, T1], radius: 0.5, width: 0.1, color: cor_coral })
animation(sumir6, s => {
    drawText({ text: "6", x: -2.36, y: 2.95, fontSize: 0.8, color: cor_coral, opacity: 1 - s })
})

// distância entre centros C1C2 (=9)
drawSegment({ points: [C1, C2], color: cor_coral, width: 0.1 })
animation(sumir9, s9 => {
    drawText({ text: "9", x: 1.88, y: -0.7, fontSize: 0.8, color: cor_coral, opacity: 1 - Math.pow(s9, 0.2) })
})

pause()

// reta paralela à tangente passando por C1 (dashed) -> intersecta C2T2 em P
drawSegment({ points: [{ x: -9, y: 15 * Math.SQRT2 / 4 }, { x: 10, y: -Math.SQRT2 }], lineDash: [0.15], color: cor_verde_neon, width: 0.1 })
drawPoint({ x: P.x, y: P.y, size: 0.2, color: cor_verde_neon })
drawSector({ points: [C2, P, C1], radius: 0.7, color: cor_verde_neon, width: 0.1 })

pause()

// o "6" se divide em 3 (=raio C1) + 3 (restante PT2)
animation(sumir6, s => {
    if (s < 0.5) return
    drawText({ text: "3", x: -2.38, y: 3.05, color: cor_coral, opacity: s, translation: { x: -0.55 * s, y: -1.57 * s }, fontSize: 0.8 })
    drawText({ text: "3", x: -2.38, y: 3.05, color: cor_coral, opacity: s, translation: { x: 0.52 * s, y: 1.21 * s }, fontSize: 0.8 })
})

pause()

// reta roxa (por C3, direção da tangente) -> pontos A e B; ângulos iguais
drawSegment({ points: [{ x: -1.5, y: -3 * Math.SQRT2 }, { x: 3.2, y: 6.4 * Math.SQRT2 }], lineDash: [0.15], color: cor_roxo_neon })
drawPoint({ x: A.x, y: A.y, size: 0.1, color: cor_roxo_neon })
drawSector({ points: [C3, A, P1], radius: 0.5, color: cor_roxo_neon, width: 0.1 })
drawSector({ points: [C3, B, C1], radius: 0.5, color: cor_roxo_neon, width: 0.1 })

pause()

animation(sumir2e3, s23 => {
    drawText({ text: "3", fontSize: 0.8, x: 1.59, y: 2.86, color: cor_roxo_neon, opacity: 1 - s23 })
})

pause()

animation(sumir2_roxo, sr => {
    drawText({ text: "x", fontSize: 1, x: 0.83, y: 0.64, color: cor_roxo_neon, opacity: 1 - sr })
})

pause()

// o "9" (C1C2) se divide em 3 (C1 até P) + 6 (P até C2)
animation(sumir9, s9 => {
    if (s9 < 0.1) return
    drawText({ text: "3", x: 1.9, y: -0.72, fontSize: 0.8, color: cor_coral, translation: { x: -3.1 * s9, y: -0.07 * s9 }, opacity: 0.9 })
    drawText({ text: "6", x: 2.11, y: -0.71, fontSize: 0.8, color: cor_coral, translation: { x: 1.42 * s9, y: 0.01 * s9 } })
})

pause()

// TRIÂNGULO DOURADO (C2,P,C1) desce girando para comparar
animation(tri_dourado, sumir2_roxo, (td, s2r) => {
    drawPolygon({ points: [C2, P, C1], fill: true, fillColor: cor_dourado, opacity: (0.5 + (0.2 * td)) * (1 - s2r), rotationOrigin: C2, rotation: Math.PI / 1.65 * td, translation: { x: -0.68 * td, y: -16.52 * td } })
    drawSector({ points: [C2, P, C1], radius: 0.7, rotationOrigin: C2, rotation: Math.PI / 1.65 * td, translation: { x: -0.68 * td, y: -16.52 * td }, opacity: 1 - s2r })
})

pause()

animation(sumir2_roxo, s2r => {
    drawText({ text: "3", x: -5.27, y: -17.35, fontSize: 0.8, opacity: 1 - s2r })
    drawText({ text: "9", x: -7.09, y: -12.94, fontSize: 0.8, opacity: 1 - s2r })
})

pause()

// TRIÂNGULO ROXO (C3,B,C1) desce girando
animation(tri_roxo, sumir2_roxo, (tr, s2r) => {
    drawPolygon({ points: [C3, B, C1], fill: true, fillColor: cor_roxo_neon, opacity: (0.5 + (0.2 * tr)) * (1 - s2r), rotationOrigin: C3, rotation: Math.PI / 1.65 * tr, translation: { x: 0.68 * tr, y: -16.52 * tr } })
    drawSector({ points: [C3, B, C1], radius: 0.5, rotationOrigin: C3, rotation: Math.PI / 1.65 * tr, translation: { x: 0.68 * tr, y: -16.52 * tr }, opacity: 1 - s2r })
})

pause()

animation(sumir2_roxo, s2r => {
    drawText({ text: "6", x: -1.77, y: -14.05, fontSize: 0.8, opacity: 1 - s2r })
    drawText({ text: "$x$", x: -0.34, y: -17.22, fontSize: 1, color: cor_roxo_neon, opacity: 1 - s2r })
})

pause()

// semelhança: 9/6 = 3/x  ->  x = 2
animation(sumir2_roxo, s2r => {
    drawText({ text: "$\\dfrac{9}{6}=\\dfrac{3}{x} \\Rightarrow x=2$", x: 4.51, y: -13.23, fontSize: 0.8, opacity: 1 - s2r })
})

pause()

animation(sumir2e3, s23 => {
    drawText({ text: "2", x: 0.8, y: 0.64, fontSize: 0.8, color: cor_roxo_neon, opacity: 1 - s23 })
})

// ===================== TRIÂNGULO LARANJA (Pitágoras) =====================
pause()

animation(tri_laranja, t => {
    drawPolygon({ points: [C3, P2, A], fill: true, fillColor: cor_laranja, opacity: 0.8, rotationOrigin: C3, rotation: -Math.PI / 2.55 * t, translation: { x: -5.97 * t, y: -18 * t } })
    drawSector({ points: [P2, A, C3], radius: 0.5, rotationOrigin: C3, rotation: -Math.PI / 2.55 * t, translation: { x: -5.97 * t, y: -18 * t } })

    pause()

    drawText({ text: "5", x: 1.41, y: 2.25, fontSize: 0.8, color: cor_laranja, translation: { x: -4.68 * t, y: -21.19 * t } })

    pause()

    drawText({ text: "9", x: -3.08, y: 3.03, fontSize: 0.8, color: cor_laranja, translation: { x: -0.84 * t, y: -17.28 * t } })
})

pause()

// resultado: cateto = sqrt(9^2 - 5^2) = sqrt(56) = 2 sqrt(14)
const resultado = param({ value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 2 }], label: "resultado 2 raiz 14" })

animation(resultado, tri_laranja, (r, t) => {
    drawText({ text: "$\\sqrt{9^2-5^2}=\\sqrt{56}=$", x: 2.94, y: -14.68, color: cor_laranja, opacity: 1 - r })
    drawText({ text: "$2\\sqrt{14}$", x: 6.35, y: -14.66, color: cor_laranja, translation: { x: -6.09 * r + (t - 1), y: 0.05 * r + (t - 1) * -20.5 }, rotation: (t - 1) / 3 })
})

pause()

// leva o 2√14 de volta ao lado AP1 e conclui P1P2 = 4√14
drawSegmentLength({ points: [A, P1], translation: { x: 0.4, y: 1 }, color: cor_laranja })
drawText({ text: "$2\\sqrt{14}$", x: 5.8, y: 4.87, color: cor_laranja, rotation: -1 / 3 })
drawText({ text: "$\\bar{P_1P_2}=4\\sqrt{14}$", x: -0.45, y: -12.49, fontSize: 0.8, color: cor_amarelo_neon })
