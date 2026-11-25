//drawGrid({xMin: -5, xMax: 5, yMin: -5, yMax: 5})

const cor_azul_eletrico = '#00B0FF'
const cor_rosa_choque   = '#FF1493'
const cor_dourado       = '#FFD700'
const cor_verde_neon    = '#39FF14'
const cor_amarelo_neon  = '#FFFF00'
const cor_ciano         = '#00FFFF'
const cor_laranja       = '#FF6600'
const cor_roxo_neon     = '#BF00FF'
const cor_coral         = '#FF6B6B'
const cor_verde_menta   = '#00FA9A'
const cor_titulo        = '#FF4500'
const cor_vermelho_bordo= '#970000'
const cor_cinza         = '#999999'
const cor_branco        = '#FFFFFF'

drawText({
    text: "\\begin{center}\\textbf{Paralelas e Ângulos Alternos Internos}\\end{center}",
    x: 0.15, y: 6.15, color: cor_titulo
})

const A = {x: -1, y: -1}
const P = {x:  1, y:  2}

function saida(ox, oy, dx, dy) {
    const lim = 4.4
    let tMin = 1e9
    if (Math.abs(dx) > 1e-9) tMin = Math.min(tMin, ((dx > 0 ? lim : -lim) - ox) / dx)
    if (Math.abs(dy) > 1e-9) tMin = Math.min(tMin, ((dy > 0 ? lim : -lim) - oy) / dy)
    return { x: ox + tMin * dx, y: oy + tMin * dy }
}

// reta m (azul, baixo)
drawArrow({ points: [{x:-3.5,y:-1},{x:-4.5,y:-1}], color: cor_azul_eletrico, size: 0.2 })
drawSegment({ points: [{x:-4,y:-1},{x:4,y:-1}], color: cor_azul_eletrico, width: 0.06 })
drawArrow({ points: [{x:3.5,y:-1},{x:4.5,y:-1}], color: cor_azul_eletrico, size: 0.2 })
drawText({ text: "$m$", x: -4.3, y: -0.6, fontSize: 0.55, color: cor_azul_eletrico })

// reta s (rosa, cima)
drawArrow({ points: [{x:-3.5,y:2},{x:-4.5,y:2}], color: cor_rosa_choque, size: 0.2 })
drawSegment({ points: [{x:-4,y:2},{x:4,y:2}], color: cor_rosa_choque, width: 0.06 })
drawArrow({ points: [{x:3.5,y:2},{x:4.5,y:2}], color: cor_rosa_choque, size: 0.2 })
drawText({ text: "$s$", x: 4.3, y: 1.38, fontSize: 0.55, color: cor_rosa_choque })

pause()

// pontos A e P
drawPoint({ x: A.x, y: A.y, size: 0.07 })
drawText({ text: "$A$", x: A.x+0.2, y: A.y-0.52, fontSize: 0.52 })
drawPoint({ x: P.x, y: P.y, size: 0.07 })
drawText({ text: "$P$", x: P.x+0.2, y: P.y-0.62, fontSize: 0.52 })

pause()

// transversal AP
const dx = P.x - A.x
const dy = P.y - A.y
const norm = Math.sqrt(dx*dx + dy*dy)
const ux = dx/norm
const uy = dy/norm

const ep1 = saida(A.x, A.y, -ux, -uy)
const ep2 = saida(A.x, A.y,  ux,  uy)

drawArrow({ points: [{x:ep1.x+0.8*ux, y:ep1.y+0.8*uy}, ep1], size: 0.2 })
drawSegment({ points: [ep1, ep2], width: 0.05 })
drawArrow({ points: [{x:ep2.x-0.8*ux, y:ep2.y-0.8*uy}, ep2], size: 0.2 })

pause()

// α em A
drawSector({ points: [{x: A.x+1, y: A.y}, A, P], radius: 0.5,
    fill: true, fillColor: cor_dourado, opacity: 0.75 })
drawText({ text: "$\\alpha$", x: -0.27, y: -0.68, fontSize: 0.5, color: cor_dourado })

pause()

// β em P — com fade
const p_beta = param({
    value: 1, min: 0, max: 1, step: 0.01,
    label: "β",
    buttons: [{ value: 0, time: 1 }, { value: 1, time: 1 }]
})

animation(p_beta, (b) => {
    drawSector({ points: [A, P, {x: P.x-1, y: P.y}], radius: 0.5,
        fill: true, fillColor: cor_dourado, opacity: 0.75 * (1-b) })
    drawText({ text: "$\\beta$", x: 0.29, y: 1.45, fontSize: 0.5, color: cor_dourado, opacity: 1-b })
})

pause()

drawText({ text: "$\\alpha \\not\\equiv \\beta$", x: 2.07, y: 0.34, fontSize: 0.55, color: cor_coral })

pause()

// reta verde s' por P — inclinação controlada por param
const p_inclinacao = param({
    value: 0.5, min: 0, max: 1, step: 0.001,
    label: "Inclinação s'",
    buttons: [{ value: 0, time: 1 }, { value: 0.5, time: 1 }, { value: 1, time: 1 }]
})

const p_paralela = param({
    value: 0, min: 0, max: 1, step: 1,
    label: "Sobre s",
    buttons: [{ value: 1, time: 1 }, { value: 0, time: 1 }]
})

animation(p_inclinacao, p_paralela, (s, p) => {
    const theta_base = -Math.PI / 24 + (s - 0.5) * Math.PI / 4
    const theta = theta_base * (1 - p)

    const ep3 = saida(P.x, P.y, -Math.cos(theta), -Math.sin(theta))
    const ep4 = saida(P.x, P.y,  Math.cos(theta),  Math.sin(theta))
    const d = 0.8

    drawArrow({ points: [{x:ep3.x+d*Math.cos(theta), y:ep3.y+d*Math.sin(theta)}, ep3], color: cor_verde_neon, size: 0.2 })
    drawSegment({ points: [ep3, ep4], color: cor_verde_neon, width: 0.05 })
    drawArrow({ points: [{x:ep4.x-d*Math.cos(theta), y:ep4.y-d*Math.sin(theta)}, ep4], color: cor_verde_neon, size: 0.2 })

    drawSector({ points: [ep3, P, A], radius: 0.5,
        fill: true, fillColor: cor_verde_neon, opacity: 0.6 })
    drawText({ text: "$\\beta'$", x: 0.31, y: 1.43, fontSize: 0.5, color: cor_verde_neon })
})

pause()

drawText({
    text: "$\\alpha \\equiv \\beta' \\Rightarrow m \\parallel s'$. \\pause Temos duas paralelas reta $m$ passando por $P$. \\pause \\textcolor{#FF4500}{Absurdo! (Postulado de Euclides)}",
    x: -0.03, y: -5.8, color: 'white'
})

pause()

drawText({
    text: "Portanto, $\\alpha \\equiv \\beta$",
    x: 0.08, y: -9.74, color: cor_dourado
})

pause()

// =========================================================
//  COROLÁRIOS — acrescentados abaixo da Parte 1 (sem sobrepor)
//  desenhaConfig(yc): monta m, s, transversal t, A e P na
//  altura yc e devolve A, P e a direção (ux,uy) da transversal.
// =========================================================
function desenhaConfig(yc) {
    // reta m (azul)
    drawArrow({ points: [{x:-3.5,y:-1+yc},{x:-4.5,y:-1+yc}], color: cor_azul_eletrico, size: 0.2 })
    drawSegment({ points: [{x:-4,y:-1+yc},{x:4,y:-1+yc}], color: cor_azul_eletrico, width: 0.06 })
    drawArrow({ points: [{x:3.5,y:-1+yc},{x:4.5,y:-1+yc}], color: cor_azul_eletrico, size: 0.2 })
    drawText({ text: "$m$", x:-4.3, y:-0.6+yc, fontSize:0.55, color: cor_azul_eletrico })

    // reta s (rosa)
    drawArrow({ points: [{x:-3.5,y:2+yc},{x:-4.5,y:2+yc}], color: cor_rosa_choque, size: 0.2 })
    drawSegment({ points: [{x:-4,y:2+yc},{x:4,y:2+yc}], color: cor_rosa_choque, width: 0.06 })
    drawArrow({ points: [{x:3.5,y:2+yc},{x:4.5,y:2+yc}], color: cor_rosa_choque, size: 0.2 })
    drawText({ text: "$s$", x:4.3, y:1.38+yc, fontSize:0.55, color: cor_rosa_choque })

    // transversal t por A(-1,-1) e P(1,2) — pontas fixas (não usa saida)
    const A = {x:-1, y:-1+yc}, P = {x:1, y:2+yc}
    const ux = 2/Math.sqrt(13), uy = 3/Math.sqrt(13)   // direção A→P
    const topo = {x: 2.6,  y: 4.4+yc}
    const base = {x:-3.27, y:-4.4+yc}
    drawArrow({ points: [{x:base.x+0.8*ux, y:base.y+0.8*uy}, base], size: 0.2 })
    drawSegment({ points: [base, topo], width: 0.05 })
    drawArrow({ points: [{x:topo.x-0.8*ux, y:topo.y-0.8*uy}, topo], size: 0.2 })
    drawText({ text: "$t$", x: topo.x+0.2, y: topo.y+0.1, fontSize: 0.55 })

    // pontos A e P
    drawPoint({ x:A.x, y:A.y, size:0.07 })
    drawText({ text: "$A$", x:A.x+0.2, y:A.y-0.52, fontSize:0.52 })
    drawPoint({ x:P.x, y:P.y, size:0.07 })
    drawText({ text: "$P$", x:P.x+0.2, y:P.y-0.62, fontSize:0.52 })

    return { A, P, ux, uy }
}

// ===================== COROLÁRIO 1: correspondentes (α ≡ α') =====================
const yc1 = -18
drawText({ text: "\\begin{center}\\textbf{Corolário 1: Ângulos Correspondentes}\\end{center}",
    x: 0.15, y: 6.15+yc1, color: cor_titulo })

const c1 = desenhaConfig(yc1)
pause()

// α em A (superior direito)
drawSector({ points: [{x:c1.A.x+1, y:c1.A.y}, c1.A, c1.P], radius:0.5, fill:true, fillColor:cor_dourado, opacity:0.75 })
drawText({ text:"$\\alpha$", x:-0.27, y:-0.68+yc1, fontSize:0.5, color:cor_dourado })
pause()

// α' em P (correspondente — mesma posição, superior direito)
drawSector({ points: [{x:c1.P.x+1, y:c1.P.y}, c1.P, {x:c1.P.x+c1.ux, y:c1.P.y+c1.uy}], radius:0.5, fill:true, fillColor:cor_dourado, opacity:0.75 })
drawText({ text:"$\\alpha'$", x:1.5, y:2.55+yc1, fontSize:0.5, color:cor_dourado })
pause()

drawText({ text:"$\\alpha \\equiv \\alpha'$", x:2.2, y:0.4+yc1, fontSize:0.6, color:cor_verde_neon })
pause()

// ===================== COROLÁRIO 2: colaterais internos (α + γ = 180°) =====================
const yc2 = -36
drawText({ text: "\\begin{center}\\textbf{Corolário 2: Colaterais Internos}\\end{center}",
    x: 0.15, y: 6.15+yc2, color: cor_titulo })

const c2 = desenhaConfig(yc2)
pause()

// α em A (superior direito)
drawSector({ points: [{x:c2.A.x+1, y:c2.A.y}, c2.A, c2.P], radius:0.5, fill:true, fillColor:cor_dourado, opacity:0.75 })
drawText({ text:"$\\alpha$", x:-0.27, y:-0.68+yc2, fontSize:0.5, color:cor_dourado })
pause()

// γ em P (colateral interno — inferior direito, do mesmo lado de α)
drawSector({ points: [{x:c2.P.x+1, y:c2.P.y}, c2.P, c2.A], radius:0.5, fill:true, fillColor:cor_ciano, opacity:0.75 })
drawText({ text:"$\\gamma$", x:1.55, y:1.5+yc2, fontSize:0.5, color:cor_ciano })
pause()

drawText({ text:"$\\alpha + \\gamma = 180^\\circ$", x:2.0, y:0.4+yc2, fontSize:0.6, color:cor_verde_neon })
