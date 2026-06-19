// drawGrid({ xMin: -5, xMax: 5, yMin: -6, yMax: 5 })

// === CORES ===
const cor_azul_eletrico = '#00B0FF'   // alternos internos
const cor_rosa_choque   = '#FF1493'   // alternos externos
const cor_verde_neon    = '#39FF14'   // correspondentes
const cor_dourado       = '#FFD700'   // colaterais internos
const cor_ciano         = '#00FFFF'   // rótulos dos ângulos
const cor_cinza         = '#999999'   // retas
const cor_titulo        = '#FF4500'

// === TÍTULO ===
drawText({
    text: "\\begin{center}\\textbf{Transversal e Ângulos}\\end{center}",
    x: 0, y: 3.2, fontSize: 0.6, color: cor_titulo
})

// === GEOMETRIA ===
// Linhas a (y=1.5) e b (y=-1.5), transversal com direção (1, 2)

const yA =  1.5
const yB = -1.5

const d  = Math.sqrt(5)
const tx = 1 / d    // componente x da direção (normalizada)
const ty = 2 / d    // componente y da direção (normalizada)

// Intersecções: transversal passa pela origem com direção (tx, ty)
// y = ty * k = yA → k = yA/ty → x = tx * k
const P = { x: tx * (yA / ty), y: yA }   // (~0.75, 1.5)
const Q = { x: tx * (yB / ty), y: yB }   // (~-0.75, -1.5)

// Pontos de referência para os setores (raio rs ao longo de cada raio)
const rs = 1.0
const P_right = { x: P.x + rs,      y: P.y }
const P_left  = { x: P.x - rs,      y: P.y }
const P_up    = { x: P.x + rs * tx, y: P.y + rs * ty }
const P_down  = { x: P.x - rs * tx, y: P.y - rs * ty }

const Q_right = { x: Q.x + rs,      y: Q.y }
const Q_left  = { x: Q.x - rs,      y: Q.y }
const Q_up    = { x: Q.x + rs * tx, y: Q.y + rs * ty }
const Q_down  = { x: Q.x - rs * tx, y: Q.y - rs * ty }

// Ângulo da transversal com a horizontal
const ang_t = Math.atan2(ty, tx)   // ≈ 1.107 rad ≈ 63.4°

// Posições dos rótulos: ao longo do bissetor de cada setor, distância lr
const lr = 0.60

const lbl1 = { x: P.x + lr * Math.cos(ang_t / 2),                y: P.y + lr * Math.sin(ang_t / 2) }
const lbl2 = { x: P.x + lr * Math.cos((ang_t + Math.PI) / 2),    y: P.y + lr * Math.sin((ang_t + Math.PI) / 2) }
const lbl3 = { x: P.x + lr * Math.cos(Math.PI + ang_t / 2),      y: P.y + lr * Math.sin(Math.PI + ang_t / 2) }
const lbl4 = { x: P.x + lr * Math.cos((3 * Math.PI + ang_t) / 2), y: P.y + lr * Math.sin((3 * Math.PI + ang_t) / 2) }
const lbl5 = { x: Q.x + lr * Math.cos(ang_t / 2),                y: Q.y + lr * Math.sin(ang_t / 2) }
const lbl6 = { x: Q.x + lr * Math.cos((ang_t + Math.PI) / 2),    y: Q.y + lr * Math.sin((ang_t + Math.PI) / 2) }
const lbl7 = { x: Q.x + lr * Math.cos(Math.PI + ang_t / 2),      y: Q.y + lr * Math.sin(Math.PI + ang_t / 2) }
const lbl8 = { x: Q.x + lr * Math.cos((3 * Math.PI + ang_t) / 2), y: Q.y + lr * Math.sin((3 * Math.PI + ang_t) / 2) }

// === PARAMS ===
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

const p_corresp = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Correspondentes',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})

const p_colaterais = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Colaterais internos',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})

// Raio visual dos setores
const sr = 0.45

// === ANIMAÇÕES (declaradas antes das retas — ficam atrás) ===

// -- Alternos internos: ângulos 3 e 5 (azul elétrico) --
// ângulo 3: P, entre P_left e P_down (inferior-esquerdo, interno)
// ângulo 5: Q, entre Q_right e Q_up (superior-direito, interno)
animation(p_internos, (s) => {
    drawSector({ points: [P_left, P, P_down], radius: sr,        fill: true, fillColor: cor_azul_eletrico, opacity: 0.75 * s })
    drawSector({ points: [Q_right, Q, Q_up],  radius: sr,        fill: true, fillColor: cor_azul_eletrico, opacity: 0.75 * s })
    if (s > 0.02) {
        drawText({
            text: "\\begin{center}\\textcolor{#00B0FF}{\\textbf{Alternos internos:} $\\hat{3} \\equiv \\hat{5}$}\\end{center}",
            x: 0, y: -2.8, fontSize: 0.48, opacity: s
        })
    }
})

// -- Alternos externos: ângulos 1 e 7 (rosa choque) --
// ângulo 1: P, entre P_right e P_up (superior-direito, externo)
// ângulo 7: Q, entre Q_left e Q_down (inferior-esquerdo, externo)
animation(p_externos, (s) => {
    drawSector({ points: [P_right, P, P_up],  radius: sr,        fill: true, fillColor: cor_rosa_choque, opacity: 0.75 * s })
    drawSector({ points: [Q_left, Q, Q_down], radius: sr,        fill: true, fillColor: cor_rosa_choque, opacity: 0.75 * s })
    if (s > 0.02) {
        drawText({
            text: "\\begin{center}\\textcolor{#FF1493}{\\textbf{Alternos externos:} $\\hat{1} \\equiv \\hat{7}$}\\end{center}",
            x: 0, y: -3.5, fontSize: 0.48, opacity: s
        })
    }
})

// -- Correspondentes: ângulos 1 e 5 (verde neon) --
// mesma posição relativa em cada intersecção (superior-direito)
// raio menor para ficar na frente dos alternos externos (z-order)
animation(p_corresp, (s) => {
    drawSector({ points: [P_right, P, P_up], radius: sr * 0.62, fill: true, fillColor: cor_verde_neon, opacity: 0.80 * s })
    drawSector({ points: [Q_right, Q, Q_up], radius: sr * 0.62, fill: true, fillColor: cor_verde_neon, opacity: 0.80 * s })
    if (s > 0.02) {
        drawText({
            text: "\\begin{center}\\textcolor{#39FF14}{\\textbf{Correspondentes:} $\\hat{1} \\equiv \\hat{5}$}\\end{center}",
            x: 0, y: -4.2, fontSize: 0.48, opacity: s
        })
    }
})

// -- Colaterais internos: ângulos 3 e 6 (dourado) --
// mesmo lado da transversal (esquerdo), entre as retas
// ângulo 3: P, inferior-esquerdo | ângulo 6: Q, superior-esquerdo
animation(p_colaterais, (s) => {
    drawSector({ points: [P_left, P, P_down], radius: sr * 0.62, fill: true, fillColor: cor_dourado, opacity: 0.80 * s })
    drawSector({ points: [Q_up, Q, Q_left],   radius: sr * 0.62, fill: true, fillColor: cor_dourado, opacity: 0.80 * s })
    if (s > 0.02) {
        drawText({
            text: "\\begin{center}\\textcolor{#FFD700}{\\textbf{Colaterais internos:} $\\hat{3} + \\hat{6} = 180°$}\\end{center}",
            x: 0, y: -4.9, fontSize: 0.48, opacity: s
        })
    }
})

// === RETAS ESTÁTICAS (na frente dos setores) ===

// Extensão da transversal além das intersecções
const ext = 1.4
const t_top = { x: P.x + ext * tx, y: P.y + ext * ty }
const t_bot = { x: Q.x - ext * tx, y: Q.y - ext * ty }

// Linha a
drawArrow({ points: [{ x: -3.0, y: yA }, { x: -4.0, y: yA }], color: cor_cinza, size: 0.18 })
drawSegment({ points: [{ x: -4.0, y: yA }, { x: 4.0, y: yA }], color: cor_cinza, width: 0.05 })
drawArrow({ points: [{ x:  3.0, y: yA }, { x:  4.0, y: yA }], color: cor_cinza, size: 0.18 })
drawText({ text: "$a$", x: -4.0, y: yA + 0.38, fontSize: 0.52, color: cor_azul_eletrico })

// Linha b
drawArrow({ points: [{ x: -3.0, y: yB }, { x: -4.0, y: yB }], color: cor_cinza, size: 0.18 })
drawSegment({ points: [{ x: -4.0, y: yB }, { x: 4.0, y: yB }], color: cor_cinza, width: 0.05 })
drawArrow({ points: [{ x:  3.0, y: yB }, { x:  4.0, y: yB }], color: cor_cinza, size: 0.18 })
drawText({ text: "$b$", x: 4.0, y: yB + 0.38, fontSize: 0.52, color: cor_rosa_choque })

// Transversal t
drawArrow({ points: [{ x: P.x + ext*tx*0.55, y: P.y + ext*ty*0.55 }, t_top], color: cor_cinza, size: 0.18 })
drawSegment({ points: [t_bot, t_top], color: cor_cinza, width: 0.05 })
drawArrow({ points: [{ x: Q.x - ext*tx*0.55, y: Q.y - ext*ty*0.55 }, t_bot], color: cor_cinza, size: 0.18 })
drawText({ text: "$t$", x: t_top.x + 0.32, y: t_top.y - 0.1, fontSize: 0.52, color: cor_cinza })

// Pontos de intersecção
drawPoint({ x: P.x, y: P.y, size: 0.07 })
drawPoint({ x: Q.x, y: Q.y, size: 0.07 })

// === RÓTULOS DOS ÂNGULOS 1-8 (no topo — na frente de tudo) ===
const fl = 0.36

drawText({ text: "$\\hat{1}$", x: lbl1.x, y: lbl1.y, fontSize: fl, color: cor_ciano })
drawText({ text: "$\\hat{2}$", x: lbl2.x, y: lbl2.y, fontSize: fl, color: cor_ciano })
drawText({ text: "$\\hat{3}$", x: lbl3.x, y: lbl3.y, fontSize: fl, color: cor_ciano })
drawText({ text: "$\\hat{4}$", x: lbl4.x, y: lbl4.y, fontSize: fl, color: cor_ciano })
drawText({ text: "$\\hat{5}$", x: lbl5.x, y: lbl5.y, fontSize: fl, color: cor_ciano })
drawText({ text: "$\\hat{6}$", x: lbl6.x, y: lbl6.y, fontSize: fl, color: cor_ciano })
drawText({ text: "$\\hat{7}$", x: lbl7.x, y: lbl7.y, fontSize: fl, color: cor_ciano })
drawText({ text: "$\\hat{8}$", x: lbl8.x, y: lbl8.y, fontSize: fl, color: cor_ciano })
