// drawGrid({xMin: -5, xMax: 5, yMin: -5, yMax: 5})

// === CORES ===
const cor_azul_eletrico = '#00B0FF'
const cor_rosa_choque   = '#FF1493'
const cor_dourado       = '#FFD700'
const cor_verde_neon    = '#39FF14'

// === PONTOS ===
const A = {x: -2, y: -2}
const P = {x:  0, y:  2}

// === FASE INICIAL: reta r e ponto P ===
drawArrow({ points: [{x:-3.5, y:-2}, {x:-4.5, y:-2}], color: cor_azul_eletrico, size: 0.2 })
drawSegment({ points: [{x:-4, y:-2}, {x:4, y:-2}], color: cor_azul_eletrico, width: 0.06 })
drawArrow({ points: [{x:3.5, y:-2}, {x:4.5, y:-2}], color: cor_azul_eletrico, size: 0.2 })
drawText({ text: "$r$", x: -4.3, y: -1.6, fontSize: 0.55, color: cor_azul_eletrico })

drawPoint({ x: P.x, y: P.y, size: 0.07 })
drawText({ text: "$P$", x: P.x - 0.15, y: P.y + 0.22, fontSize: 0.52 })

pause()

// === FASE 1: ponto A e transversal t ===
drawPoint({ x: A.x, y: A.y, size: 0.06 })
drawText({ text: "$A$", x: A.x - 0.18, y: A.y + 0.22, fontSize: 0.48 })

drawArrow({ points: [{x:-2.6, y:-3.2}, {x:-3, y:-4}], size: 0.2 })
drawSegment({ points: [{x:-3, y:-4}, {x:1, y:4}], width: 0.05 })
drawArrow({ points: [{x:0.6, y:3.2}, {x:1, y:4}], size: 0.2 })
drawText({ text: "$t$", x: 0.69, y: 3.92, fontSize: 0.55 })

pause()

// === FASE 2: α em A — estático, dourado ===
drawSector({ points: [{x:0, y:-2}, A, P], radius: 0.55,
    fill: true, fillColor: cor_dourado, opacity: 0.75 })
drawText({ text: "$\\alpha$", x: -1.32, y: -1.59, fontSize: 0.5, color: cor_dourado })

pause()

// === FASE 3: transportar cópia de α de A até P ===
const p_mover = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Transportar α → β',
    buttons: [{ value: 1, time: 2.5 }]
})

animation(p_mover, (s) => {
    if (s < 0.99) {
        drawSector({
            points: [{x:0, y:-2}, A, P],
            radius: 0.55,
            fill: true,
            fillColor: cor_dourado,
            opacity: 0.85,
            rotation: s * Math.PI,
            rotationOrigin: A,
            translation: { x: s * (P.x - A.x), y: s * (P.y - A.y) }
        })
    } else {
        // β aparece instantaneamente ao pousar — sem fantasma de lápis
        drawSector({ points: [{x:-2, y:2}, P, A], radius: 0.55,
            fill: true, fillColor: cor_dourado, opacity: 0.75 })
    }
})

pause()

// === rótulos de β escritos com lápis enquanto você narra ===
drawText({ text: "$\\beta$", x: -0.75, y: 1.32, fontSize: 0.5, color: cor_dourado })
drawText({ text: "$\\beta \\equiv \\alpha$", x: -2.11, y: 0.08, fontSize: 0.5, color: cor_verde_neon })

pause()

// === FASE 4: reta m paralela a r ===
drawArrow({ points: [{x:-3.5, y:2}, {x:-4.5, y:2}], color: cor_rosa_choque, size: 0.2 })
drawSegment({ points: [{x:-4, y:2}, {x:4, y:2}], color: cor_rosa_choque, width: 0.06 })
drawArrow({ points: [{x:3.5, y:2}, {x:4.5, y:2}], color: cor_rosa_choque, size: 0.2 })
drawText({ text: "$m$", x: 4.3, y: 2.38, fontSize: 0.55, color: cor_rosa_choque })
drawText({ text: "$m \\parallel r$", x: 2.31, y: 0.19, fontSize: 0.55, color: cor_rosa_choque })
