//drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 });

//CORES
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

// TÍTULO
drawText({
    text: "\\begin{center}\\textbf{1.5 Teorema do Ângulo Externo}\\end{center}",
    x: 0.15, y: 7.15, color: cor_titulo
})

// PONTOS BASE
const A = { x: -1.71, y: 3.71}
const B = { x: -4.34, y: -0.18}
const C = { x: 2.98, y: -0.67}
const ext = 2

const mover_vertices = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 3 }, { value: 0, time: 3 }],
    label: "Mover vértices"
})
const angulo_rosa = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 2 }],
    label: "Mover ângulo rosa"
})
const sumir_demo1 = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 1 }],
    label: "Sumir demo 1"
})
const angulo_verde = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 2 }],
    label: "Mover ângulo verde"
})
const sumir_tudo = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 1.5 }],
    label: "Sumir tudo"
})
const levar_coral = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 2 }, {value: 0, time:2}],
    label: "Levar ângulo coral"
})
const levar_rosa = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 2 }, {value:0, time:2}],
    label: "Levar ângulo rosa"
})

animation(mover_vertices, angulo_rosa, sumir_demo1, angulo_verde, sumir_tudo, levar_coral, levar_rosa, (t, ar, s1, av, st, lc, lr) => {
    const A2 = { x: A.x + 1.2 * Math.sin(t * 2 * Math.PI), y: A.y + 0.8 * Math.cos(t * 2 * Math.PI) }
    const B2 = { x: B.x + 0.9 * Math.cos(t * 2 * Math.PI), y: B.y + 0.7 * Math.sin(t * 2 * Math.PI) }
    const C2 = { x: C.x + 0.7 * Math.sin(t * 2 * Math.PI), y: C.y + 1.0 * Math.cos(t * 2 * Math.PI) }

    // === BASE (sempre visível) ===
    drawPolygon({ points: [A2, B2, C2] })
    drawPoint({ x: A2.x, y: A2.y, size: 0.07 })
    drawText({ text: "A", x: A2.x + 0.2, y: A2.y + 0.2 })
    drawPoint({ x: B2.x, y: B2.y, size: 0.07 })
    drawText({ text: "B", x: B2.x - 0.3, y: B2.y - 0.4 })
    drawPoint({ x: C2.x, y: C2.y, size: 0.07 })
    drawText({ text: "C", x: C2.x + 0.2, y: C2.y - 0.6 })

    const dx = C2.x - B2.x
    const dy = C2.y - B2.y
    const norm = Math.sqrt(dx * dx + dy * dy)
    const D = { x: C2.x + ext * (dx / norm), y: C2.y + ext * (dy / norm) }
    drawArrow({ points: [B2, D] })
    drawSector({ points: [D, C2, A2], fill: true, fillColor: cor_roxo_neon, radius: 0.6 })
    drawText({ text: "$\\epsilon$", x: C2.x + 0.2, y: C2.y + 0.7 })

    pause()

    // Ângulos em A e B — aparecem com st, movem-se com levar_coral / levar_rosa
    drawSector({
        points: [B2, A2, C2], radius: 0.4, fill: true, fillColor: cor_coral,
        rotationOrigin: { x: A2.x * lc, y: A2.y * lc },
        rotation: Math.PI * lc,
        translation: { x: (C2.x - A2.x) * lc, y: (C2.y - A2.y) * lc },
        opacity: st
    })
    drawSector({
        points: [C2, B2, A2], radius: 0.4, fill: true, fillColor: cor_rosa_choque,
        rotationOrigin: { x: B2.x * lr, y: B2.y * lr },
        rotation: (Math.PI+Math.PI )* lr,
        translation: { x: (C2.x - B2.x) * lr, y: (C2.y - B2.y) * lr },
        opacity: st
    })

    // === DEMO 1: M = ponto médio de AC, prova ε > B̂AC ===
    const M = { x: (A2.x + C2.x) / 2, y: (A2.y + C2.y) / 2 }
    drawPoint({ x: M.x, y: M.y, size: 0.07, color: cor_azul_eletrico, opacity: (1 - s1) * (1 - st) })
    drawText({ text: "M", color: cor_azul_eletrico, x: M.x, y: M.y + 0.3, fontSize: 0.5, opacity: (1 - s1) * (1 - st) })

    pause()

    const dxM = M.x - B2.x
    const dyM = M.y - B2.y
    const normM = Math.sqrt(dxM * dxM + dyM * dyM)
    const M_ext = { x: M.x + 5.5 * (dxM / normM), y: M.y + 5.5 * (dyM / normM) }
    drawArrow({ points: [B2, M_ext], color: cor_azul_eletrico, opacity: (1 - s1) * (1 - st) })

    const P = { x: 2 * M.x - B2.x, y: 2 * M.y - B2.y }
    drawPoint({ x: P.x, y: P.y, size: 0.07, opacity: (1 - s1) * (1 - st) })
    drawText({ text: "P", x: P.x + 0.2, y: P.y - 0.6, opacity: (1 - s1) * (1 - st) })

    drawSegmentMeasureMark({ points: [B2, M], size: 0.3, color: cor_azul_eletrico, opacity: (1 - s1) * (1 - st) })
    drawSegmentMeasureMark({ points: [M, P], size: 0.3, color: cor_azul_eletrico, opacity: (1 - s1) * (1 - st) })

    pause()

    drawPolygon({ points: [B2, M, A2], fill: true, color: cor_verde_neon, opacity: 0.3 * (1 - s1) * (1 - st) })
    drawPolygon({ points: [C2, M, P], fill: true, color: cor_verde_neon, opacity: 0.3 * (1 - s1) * (1 - st) })

    pause()

    drawSector({ points: [C2, M, P], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: (1 - s1) * (1 - st) })
    drawSector({ points: [A2, M, B2], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: (1 - s1) * (1 - st) })

    pause()

    drawSector({ points: [B2, A2, M], radius: 0.4, fill: true, fillColor: cor_coral, opacity: (1 - s1) * (1 - st) })
    drawSector({
        points: [B2, A2, M], radius: 0.4, fill: true, fillColor: cor_coral,
        rotationOrigin: { x: A2.x * ar, y: A2.y * ar },
        rotation: Math.PI * ar,
        translation: { x: (C2.x - A2.x) * ar, y: (C2.y - A2.y) * ar },
        opacity: (1 - s1) * (1 - st)
    })

    pause()

    drawText({
        text: "$\\bullet \\quad B\\hat{A}C \\equiv A\\hat{C}P < \\epsilon$",
        x: 0, y: -1.79, opacity: 1 - st, translation: {x: -2.33*s1, y: -0.89*s1}
    })

    pause()

    // === DEMO 2: M = ponto médio de BC, prova ε > ÂBC ===
    const M2 = { x: (B2.x + C2.x) / 2, y: (B2.y + C2.y) / 2 }
    drawPoint({ x: M2.x, y: M2.y, size: 0.07, color: cor_verde_menta, opacity: 1 - st })
    drawText({ text: "M", color: cor_verde_menta, x: M2.x-0.3, y: M2.y - 0.5, fontSize: 0.5, opacity: 1 - st })

    pause()

    const dxM2 = M2.x - A2.x
    const dyM2 = M2.y - A2.y
    const normM2 = Math.sqrt(dxM2 * dxM2 + dyM2 * dyM2)
    const M2_ext = { x: M2.x + 5.5 * (dxM2 / normM2), y: M2.y + 5.5 * (dyM2 / normM2) }
    drawArrow({ points: [A2, M2_ext], color: cor_verde_menta, opacity: 1 - st })

    const P2 = { x: 2 * M2.x - A2.x, y: 2 * M2.y - A2.y }
    drawPoint({ x: P2.x, y: P2.y, size: 0.07, opacity: 1 - st })
    drawText({ text: "P", x: P2.x - 0.3, y: P2.y - 0.4, opacity: 1 - st })

    pause()

    drawPolygon({ points: [B2, M2, A2], fill: true, color: cor_verde_neon, opacity: 0.3 * (1 - st) })
    drawPolygon({ points: [C2, M2, P2], fill: true, color: cor_verde_neon, opacity: 0.3 * (1 - st) })

    drawSegmentMeasureMark({ points: [A2, M2], size: 0.3, color: cor_verde_menta, opacity: 1 - st })
    drawSegmentMeasureMark({ points: [M2, P2], size: 0.3, color: cor_verde_menta, opacity: 1 - st })
    drawSegmentMeasureMark({ points: [B2, M2], size: 0.3, color: cor_verde_menta, quantity: 1, opacity: 1 - st })
    drawSegmentMeasureMark({ points: [M2, C2], size: 0.3, color: cor_verde_menta, quantity: 1, opacity: 1 - st })

    pause()

    drawSector({ points: [P2, M2, C2], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: 1 - st })
    drawSector({ points: [A2, M2, B2], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: 1 - st })

    pause()

    drawSector({ points: [M2, B2, A2], radius: 0.4, fill: true, fillColor: cor_rosa_choque, opacity: 1 - st })
    drawSector({
        points: [M2, B2, A2], radius: 0.4, fill: true, fillColor: cor_rosa_choque,
        rotationOrigin: { x: B2.x * av, y: B2.y * av },
        rotation: Math.PI * av,
        translation: { x: (C2.x - B2.x) * av, y: (C2.y - B2.y) * av },
        opacity: 1 - st
    })

    pause()

    const dxK = C2.x - P2.x
    const dyK = C2.y - P2.y
    const normK = Math.sqrt(dxK * dxK + dyK * dyK)
    const K = { x: C2.x + 1.5 * (dxK / normK), y: C2.y + 1.5 * (dyK / normK) }
    const K_ext = { x: K.x + 0.8 * (dxK / normK), y: K.y + 0.8 * (dyK / normK) }

    drawPoint({ x: K.x, y: K.y, size: 0.07, color: cor_amarelo_neon, opacity: 1 - st })
    drawText({ text: "K", x: K.x - 0.3, y: K.y + 0.2, color: cor_amarelo_neon, opacity: 1 - st })
    drawArrow({ points: [P2, K_ext], color: cor_amarelo_neon, lineDash: [0.1], opacity: 1 - st })

    pause()

    drawSector({ points: [D, C2, K], radius: 0.4, fill: true, fillColor: cor_rosa_choque, opacity: 1 - st })

    pause()

    drawText({
        text: "$\\bullet \\quad A\\hat{B}C \\equiv K\\hat{C}X < \\epsilon$",
        x: -2.34, y: -3.73, opacity: 1 - st
    })
})
