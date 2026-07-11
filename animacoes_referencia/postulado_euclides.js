// drawGrid({xMin: -5, xMax: 5, yMin: -5, yMax: 5})

const cor_azul_eletrico = '#00B0FF'
const cor_rosa_choque   = '#FF1493'

const P = {x: 0, y: 1.5}

// === FASE INICIAL: reta r e ponto P ===
drawArrow({ points: [{x:-3.5, y:-1.5}, {x:-4.5, y:-1.5}], color: cor_azul_eletrico, size: 0.2 })
drawSegment({ points: [{x:-4, y:-1.5}, {x:4, y:-1.5}], color: cor_azul_eletrico, width: 0.06 })
drawArrow({ points: [{x:3.5, y:-1.5}, {x:4.5, y:-1.5}], color: cor_azul_eletrico, size: 0.2 })
drawText({ text: "$r$", x: -4.3, y: -1.1, fontSize: 0.55, color: cor_azul_eletrico })

drawPoint({ x: P.x, y: P.y, size: 0.07 })
drawText({ text: "$P$", x: P.x + 0.1, y: P.y + 0.25, fontSize: 0.52 })

pause()

// === FASE 1: reta girando 360° em torno de P ===
// s=0 e s=1 → horizontal (rosa, paralela a r)
// s=0.25 e s=0.75 → vertical (cinza, intersecta r)
const p_angulo = param({
    value: 0,
    min: 0, max: 1, step: 0.001,
    label: 'Girar 360°',
    buttons: [{ value: 1, time: 6 }]
})

animation(p_angulo, (s) => {
    const angle = s * 2 * Math.PI
    const cx = Math.cos(angle)
    const cy = Math.sin(angle)

    // cor: rosa quando horizontal (paralela), cinza quando inclinada
    const t = cx * cx   // cos²(angle): 1 → horizontal, 0 → vertical
    function h(n) { return Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0') }
    const cor = '#' + h(0x88 + (0xFF - 0x88) * t)
                    + h(0x88 + (0x14 - 0x88) * t)
                    + h(0x88 + (0x93 - 0x88) * t)

    // pontos onde a reta sai do viewport [-4.4, 4.4]
    // Nota: usar 1e9 em vez de Infinity (Conexty não suporta Infinity)
    function saida(dx, dy) {
        const lim = 4.4
        let tMin = 1e9
        if (Math.abs(dx) > 1e-9) tMin = Math.min(tMin, ((dx > 0 ? lim : -lim) - P.x) / dx)
        if (Math.abs(dy) > 1e-9) tMin = Math.min(tMin, ((dy > 0 ? lim : -lim) - P.y) / dy)
        return { x: P.x + tMin * dx, y: P.y + tMin * dy }
    }

    const ep1 = saida( cx,  cy)
    const ep2 = saida(-cx, -cy)
    const d = 0.8

    drawSegment({ points: [ep2, ep1], color: cor, width: 0.055 })
    drawArrow({ points: [{ x: ep1.x - d*cx, y: ep1.y - d*cy }, ep1], color: cor, size: 0.2 })
    drawArrow({ points: [{ x: ep2.x + d*cx, y: ep2.y + d*cy }, ep2], color: cor, size: 0.2 })

    // rótulo $m$ acompanha a reta: deslocado perpendicularmente ao lado de ep1
    drawText({
        text: "$m$",
        x: ep1.x - 0.5*cx + (-cy * 0.4),
        y: ep1.y - 0.5*cy + ( cx * 0.4),
        fontSize: 0.5,
        color: cor
    })

    // ponto de interseção com r (y = -1.5) — some naturalmente quando vai ao infinito
    if (Math.abs(cy) > 0.08) {
        const xInt = P.x - 3 * cx / cy
        if (Math.abs(xInt) <= 4.4) {
            drawPoint({ x: xInt, y: -1.5, size: 0.07, color: cor })
        }
    }
})

pause()   // reta pousou na posição paralela — narrar sobre unicidade

pause()   // pausa antes de escrever a conclusão

drawText({ text: "$m \\parallel r$", x: 1.5, y: 0.0, fontSize: 0.55, color: cor_rosa_choque })
