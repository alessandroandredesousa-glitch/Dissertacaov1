// drawGrid({ xMin: -6, xMax: 6, yMin: -5, yMax: 5 })

// === CORES ===
const cor_ciano         = '#00FFFF'
const cor_verde_neon    = '#39FF14'
const cor_amarelo_neon  = '#FFFF00'
const cor_laranja       = '#FF6600'
const cor_rosa_choque   = '#FF1493'
const cor_roxo_neon     = '#BF00FF'
const cor_azul_eletrico = '#00B0FF'
const cor_coral         = '#FF6B6B'
const cor_verde_menta   = '#00FA9A'
const cor_dourado       = '#FFD700'
const cor_titulo        = '#FF4500'

const yA = 0.8
const yB_final = yA - 2.8   // = -2.0  (posição de b quando s=1)

const C = { x: -2, y: yB_final }
const D = { x:  2, y: yB_final }

const A = { x: -4.5, y: yA }
const B = { x:  4.5, y: yA }
const E = { x: -2,   y: 3 }
const F = { x:  2,   y: -4 }
const Inter1 = { x: -0.74, y: 0.79 }
const Inter2 = { x:  0.85, y: -2.01 }

// === TÍTULO ===
drawText({
    text: "\\begin{center}\\textbf{Retas Paralelas e Transversal}\\end{center}",
    x: 0, y: 3.8, fontSize: 0.65, color: cor_titulo
})

// === PARAMS ===
const separar = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Separar',
    buttons: [{ value: 1, time: 2.5 }, { value: 0, time: 2.5 }]
})

const sumir_paralelo = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Sumir a∥b',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})

// === RETA a (fixa) ===
drawArrow({ points: [{ x: -3.5, y: yA }, { x: -4.5, y: yA }], color: cor_azul_eletrico, size: 0.2 })
drawSegment({ points: [{ x: -4, y: yA }, { x: 4, y: yA }], color: cor_azul_eletrico, width: 0.06 })
drawArrow({ points: [{ x:  3.5, y: yA }, { x:  4.5, y: yA }], color: cor_azul_eletrico, size: 0.2 })
drawText({ text: "$a$", x: -4.3, y: yA + 0.38, fontSize: 0.55, color: cor_azul_eletrico })

// === RETA b + MENSAGENS ===
animation(separar, sumir_paralelo, (s, st) => {
    const yB = yA - 2.8 * s

    // Reta b
    drawArrow({ points: [{ x: -3.5, y: yB }, { x: -4.5, y: yB }], color: cor_rosa_choque, size: 0.2 })
    drawSegment({ points: [{ x: -4, y: yB }, { x: 4, y: yB }], color: cor_rosa_choque, width: 0.06 })
    drawArrow({ points: [{ x:  3.5, y: yB }, { x:  4.5, y: yB }], color: cor_rosa_choque, size: 0.2 })
    drawText({ text: "$b$", x: 4.3, y: yB + 0.38, fontSize: 0.55, color: cor_rosa_choque })

    // Mensagem: coincidem
    if (s < 0.2) {
        drawText({
            text: "\\begin{center}$a$ e $b$ \\textbf{coincidem}\\\\(infinitos pontos em comum)\\end{center}",
            x: 0, y: -0.8, fontSize: 0.48, color: cor_amarelo_neon, opacity: 1 - s * 5
        })
    }

    // Mensagem: paralelas (controlada também por sumir_paralelo)
    if (s > 0.15 && st < 0.98) {
        const alpha_par = Math.min(1, (s - 0.15) * 5) * (1 - st)
        drawText({
            text: "\\begin{center}$a \\parallel b$\\end{center}",
            x: 0, y: -0.8, fontSize: 0.65, color: cor_verde_neon, opacity: alpha_par
        })
        drawText({
            text: "\\begin{center}nenhum ponto em comum\\end{center}",
            x: 0, y: -1.4, fontSize: 0.46, color: cor_verde_neon, opacity: alpha_par
        })
    }
})

drawArrow({ points: [E, F] })
drawArrow({ points: [F, E] })

pause()

// === ÂNGULOS POR TIPO (destacar) ===

const p_corresp = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Correspondentes',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})
const p_internos = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Alternos internos',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})
const p_externos = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Alternos externos',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})
const p_colaterais = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Colaterais internos',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})

// Correspondentes: mesma posição em cada intersecção
animation(p_corresp, (s) => {
    drawSector({ points: [E, Inter1, A], radius: 0.5, fill: true, fillColor: cor_coral, opacity: 0.8*s })
    drawSector({ points: [E, Inter2, C], radius: 0.5, fill: true, fillColor: cor_coral, opacity: 0.8*s })
    if (s > 0.02) {
        drawText({
            text: "\\begin{center}\\textbf{Ângulos correspondentes:}\\\\mesma posição relativa em cada reta\\end{center}",
            x: 0, y: -3.0, fontSize: 0.44, color: cor_coral, opacity: s
        })
    }
})

// Alternos internos: entre as retas, lados OPOSTOS da transversal
animation(p_internos, (s) => {
    drawSector({ points: [F, Inter1, B], radius: 0.5, fill: true, fillColor: cor_azul_eletrico, opacity: 0.8*s })
    drawSector({ points: [E, Inter2, C], radius: 0.5, fill: true, fillColor: cor_azul_eletrico, opacity: 0.8*s })
    if (s > 0.02) {
        drawText({
            text: "\\begin{center}\\textbf{Ângulos alternos internos:}\\\\entre as retas, lados opostos da transversal\\end{center}",
            x: 0, y: -3.0, fontSize: 0.44, color: cor_azul_eletrico, opacity: s
        })
    }
})

// Alternos externos: fora das retas, lados OPOSTOS da transversal
animation(p_externos, (s) => {
    drawSector({ points: [E, Inter1, A], radius: 0.5, fill: true, fillColor: cor_rosa_choque, opacity: 0.8*s })
    drawSector({ points: [F, Inter2, D], radius: 0.5, fill: true, fillColor: cor_rosa_choque, opacity: 0.8*s })
    if (s > 0.02) {
        drawText({
            text: "\\begin{center}\\textbf{Ângulos alternos externos:}\\\\fora das retas, lados opostos da transversal\\end{center}",
            x: 0, y: -3.0, fontSize: 0.44, color: cor_rosa_choque, opacity: s
        })
    }
})

// Colaterais internos: entre as retas, MESMO lado da transversal
animation(p_colaterais, (s) => {
    drawSector({ points: [F, Inter1, B], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: 0.8*s })
    drawSector({ points: [D, Inter2, E], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: 0.8*s })
    if (s > 0.02) {
        drawText({
            text: "\\begin{center}\\textbf{Ângulos colaterais internos:}\\\\entre as retas, mesmo lado da transversal\\end{center}",
            x: 0, y: -3.0, fontSize: 0.44, color: cor_dourado, opacity: s
        })
    }
})

pause()

// === RÓTULOS DOS ÂNGULOS 1–8 ===
// Numeração:
//   1=[E,Inter1,A]  2=[B,Inter1,E]  3=[F,Inter1,B]  4=[A,Inter1,F]
//   5=[E,Inter2,C]  6=[D,Inter2,E]  7=[F,Inter2,D]  8=[C,Inter2,F]

const fl = 0.36

// Inter1 = (-0.74, 0.79)
drawText({ text: "$\\hat{1}$", x: -1.37, y: 1.09, fontSize: fl, color: cor_ciano })  // upper-left
drawText({ text: "$\\hat{2}$", x: -0.37, y: 1.24, fontSize: fl, color: cor_ciano })  // upper-right
drawText({ text: "$\\hat{3}$", x: -0.03, y: 0.24, fontSize: fl, color: cor_ciano })  // lower-right
drawText({ text: "$\\hat{4}$", x: -1.1,  y: 0.07, fontSize: fl, color: cor_ciano })  // lower-left

// Inter2 = (0.85, -2.01)
drawText({ text: "$\\hat{5}$", x:  0.37, y: -1.74, fontSize: fl, color: cor_ciano })  // upper-left
drawText({ text: "$\\hat{6}$", x:  1.13, y: -1.53, fontSize: fl, color: cor_ciano })  // upper-right
drawText({ text: "$\\hat{7}$", x:  1.33, y: -2.29, fontSize: fl, color: cor_ciano })  // lower-right
drawText({ text: "$\\hat{8}$", x:  0.58, y: -2.49, fontSize: fl, color: cor_ciano })  // lower-left

pause()

// === QUAIS SÃO IGUAIS ===

const sumir_corresp = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Apagar / Redesenhar',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})
animation(sumir_corresp, (s) => {
    drawSector({ points: [E, Inter1, A], radius: 0.5, fill: true, fillColor: cor_coral, opacity: 1 - s })
    drawSector({ points: [E, Inter2, C], radius: 0.5, fill: true, fillColor: cor_coral, opacity: 1 - s })
    if (s < 0.98) {
        drawText({ text: "\\begin{center}$\\hat{1} \\equiv \\hat{5}$ — correspondentes\\end{center}",
            x: 0, y: -3.0, fontSize: 0.46, color: cor_coral, opacity: 1 - s })
    }
})

pause()

const sumir_internos = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Apagar / Redesenhar',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})
animation(sumir_internos, (s) => {
    drawSector({ points: [F, Inter1, B], radius: 0.5, fill: true, fillColor: cor_azul_eletrico, opacity: 1 - s })
    drawSector({ points: [E, Inter2, C], radius: 0.5, fill: true, fillColor: cor_azul_eletrico, opacity: 1 - s })
    if (s < 0.98) {
        drawText({ text: "\\begin{center}$\\hat{3} \\equiv \\hat{5}$ — alternos internos\\end{center}",
            x: 0, y: -3.0, fontSize: 0.46, color: cor_azul_eletrico, opacity: 1 - s })
    }
})

pause()

const sumir_externos = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Apagar / Redesenhar',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})
animation(sumir_externos, (s) => {
    drawSector({ points: [E, Inter1, A], radius: 0.5, fill: true, fillColor: cor_rosa_choque, opacity: 1 - s })
    drawSector({ points: [F, Inter2, D], radius: 0.5, fill: true, fillColor: cor_rosa_choque, opacity: 1 - s })
    if (s < 0.98) {
        drawText({ text: "\\begin{center}$\\hat{1} \\equiv \\hat{7}$ — alternos externos\\end{center}",
            x: 0, y: -3.0, fontSize: 0.46, color: cor_rosa_choque, opacity: 1 - s })
    }
})

pause()

const sumir_colaterais = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Apagar / Redesenhar',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})
animation(sumir_colaterais, (s) => {
    drawSector({ points: [F, Inter1, B], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: 1 - s })
    drawSector({ points: [D, Inter2, E], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: 1 - s })
    if (s < 0.98) {
        drawText({ text: "\\begin{center}$\\hat{3} + \\hat{6} = 180°$ — colaterais internos (suplementares)\\end{center}",
            x: 0, y: -3.0, fontSize: 0.46, color: cor_dourado, opacity: 1 - s })
    }
})

