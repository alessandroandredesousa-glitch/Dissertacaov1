//drawGrid({xMin: -5, xMax: 5, yMin: -5, yMax: 5});

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
const cor_branco = '#FFFFFF'

const r1 = { x: -2, y: -1 }
const r2 = { x: 2, y: 3 }
const r3 = { x: -3, y: 1 }
const P = { x: -2, y: 2 }
const A = { x: 0, y: 1 }
const interMR = { x: 1.69, y: 2.69 }

drawText({ text: "Existência da Paralela", x: 0.16, y: 6.16, fontSize: 0.55, color: cor_titulo })

// reta r
drawArrow({ points: [r1, r2], size: 0.2, color: cor_branco })
drawArrow({ points: [r2, r1], size: 0.2, color: cor_branco })
drawText({ text: "$r$", x: 2.2, y: 3.3, fontSize: 0.52, color: cor_branco })

pause()

// Ponto P
drawPoint({ x: P.x, y: P.y, size: 0.06, color: cor_branco })
drawText({ text: "$P$", x: -2.29, y: 2.16, fontSize: 0.48, color: cor_branco })

// Ponto A
drawPoint({ x: A.x, y: A.y, size: 0.06, color: cor_branco })
drawText({ text: "$A$", x: 0.14, y: 0.41, fontSize: 0.48, color: cor_branco })

pause()

// Segmento PA (transversal t)
drawSegment({ points: [P, A], color: cor_branco, width: 0.04 })
drawText({ text: "$t$", x: -1.06, y: 1.11, fontSize: 0.48, color: cor_branco })

pause()

const retaM = param({
    value: 0, min: 0, max: 1, step: 0.001, label: "mover r para P", buttons: [{ value: 1, time: 2 }, { value: 0, time: 1 }]
})

const p_concorrente = param({
    value: 0, min: 0, max: 1, step: 0.001, label: "Suponha m concorrente", buttons: [{ value: 1, time: 2 }, { value: 0, time: 1 }]
})

animation(retaM, p_concorrente, (rm, s) => {
    const op_m = Math.max(0.3, 1 - 0.7 * s)

    drawArrow({
        points: [r1, r2], size: 0.2, color: cor_azul_eletrico,
        translation: { x: -2 * rm, y: 1 * rm }, opacity: op_m
    })
    drawArrow({
        points: [r2, r1], size: 0.2, color: cor_azul_eletrico,
        translation: { x: -2 * rm, y: 1 * rm }, opacity: op_m
    })
    if (rm > 0.9) {
        drawText({
            text: "$m$", x: 0.2, y: 4.15, fontSize: 0.52,
            color: cor_azul_eletrico, opacity: (rm - 0.9) * 10 * op_m
        })
    }

    if (s > 0.02) {
        const angulo = -s * 0.6
        const cosA = Math.cos(angulo)
        const sinA = Math.sin(angulo)

        const m1 = { x: P.x + cosA * (-1.5) - sinA * (-1.5), y: P.y + sinA * (-1.5) + cosA * (-1.5) }
        const m2 = { x: P.x + cosA * (3.5) - sinA * (3.5), y: P.y + sinA * (3.5) + cosA * (3.5) }

        drawSegment({
            points: [m1, m2], color: cor_azul_eletrico, width: 0.04,
            lineDash: [0.12, 0.07], opacity: s
        })
    }
})

pause()

// Ângulos alternos internos
drawSector({ points: [r2, A, P], radius: 0.5, fill: true, fillColor: cor_amarelo_neon, opacity: 0.75 })
drawText({ text: "$\\alpha$", x: 0.02, y: 1.68 })
drawSector({ points: [r3, P, A], radius: 0.5, fill: true, fillColor: cor_amarelo_neon, opacity: 0.75 })
drawText({ text: "$\\beta$", x: -1.99, y: 0.91 })

pause()

drawText({
    text: "$\\alpha \\equiv \\beta \\Rightarrow m \\parallel r$",
    x: 3.39, y: 0.19, fontSize: 0.55, color: cor_amarelo_neon
})

pause()

drawText({
    text: "Suponha que a reta $m$ seja concorrente a $r$",
    x: -0.12, y: -1.89, fontSize: 0.45, color: cor_azul_eletrico
})

pause()

// Triângulo ABP
drawPolygon({
    points: [P, A, interMR], fill: true, fillColor: cor_verde_neon, opacity: 0.1, color: cor_verde_neon
})

// Ponto B (interseção de m' com r)
drawPoint({ x: interMR.x, y: interMR.y, size: 0.06, color: cor_branco })
drawText({ text: "$B$", x: 1.92, y: 2.24, fontSize: 0.48, color: cor_branco })

pause()

function textoBetaExterno(pos, escala = 1) {
    const x = pos.x
    const y = pos.y
    const e = escala

    drawPolygon({
        points: [
            { x: x + 0 * e, y: y + 0 * e },
            { x: x + 3.51 * e, y: y - 0.02 * e },
            { x: x + 3.51 * e, y: y - 1.85 * e },
            { x: x + 0.04 * e, y: y - 1.81 * e }
        ],
        color: "red", width: 0.05 * e
    })

    drawText({ text: "$\\beta$ é ângulo", x: x + 1.83 * e, y: y - 0.54 * e, color: "red", fontSize: 0.5 * e })
    drawText({ text: "externo do", x: x + 1.79 * e, y: y - 0.97 * e, color: "red", fontSize: 0.5 * e })
    drawText({ text: "$\\Delta PBA \\Rightarrow \\beta > \\alpha$", x: x + 1.79 * e, y: y - 1.47 * e, color: "red", fontSize: 0.5 * e })
}

textoBetaExterno({ x: -4.34, y: 4.35 }, 0.8)

drawArrow({
    points: [{ x: -2.3, y: 1.13 }, { x: -3.8, y: 1.79 }, { x: -3.82, y: 2.73 }], color: "red", opacity: 0.7
})

pause()

drawText({
    text: "$\\beta>\\alpha$", x: 2.37, y: 0.89, color: "red", fontSize: 0.4
})

pause()

drawText({
    text: "ABSURDO!!", x: 2.4, y: 1.33, color: "red", fontSize: 0.4
})

pause()

drawText({
    text: "$\\alpha \\equiv \\beta \\Rightarrow m \\parallel r$", x: 0.21, y: -3.85, color: cor_verde_neon
})

drawPolygon({
    points: [{ x: -2, y: -3.12 }, { x: 2.22, y: -3.21 }, { x: 2.24, y: -4.11 }, { x: -2.02, y: -4.08 }], color: cor_verde_neon
})
