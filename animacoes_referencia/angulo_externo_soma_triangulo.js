// drawGrid({xMin: -5, xMax: 5, yMin: -5, yMax: 5})

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
const cor_cinza         = '#999999'
const cor_branco        = '#FFFFFF'

// título intocado
drawText({
    text: "\\begin{center}\\textbf{Ângulo Externo e Soma dos Ângulos do Triângulo}\\end{center}",
    x: 0.15, y: 7.15, color: cor_titulo
})

const s = 0.9  // fator de escala global (exceto título)

const A = {x: -5*s, y:  0   }
const B = {x:  3*s, y:  0   }
const C = {x:  0,   y:  4*s }
const centroide = {x: (A.x+B.x+C.x)/3, y: (A.y+B.y+C.y)/3}

function rotPt(pt, ctr, theta) {
    const dx = pt.x - ctr.x
    const dy = pt.y - ctr.y
    return {
        x: ctr.x + dx*Math.cos(theta) - dy*Math.sin(theta),
        y: ctr.y + dx*Math.sin(theta) + dy*Math.cos(theta)
    }
}

function rotVec(dx, dy, theta) {
    return {
        x: dx*Math.cos(theta) - dy*Math.sin(theta),
        y: dx*Math.sin(theta) + dy*Math.cos(theta)
    }
}

pause()

const p_rotacao = param({
    value: 0, min: -0.4, max: 0.4, step: 0.001,
    label: 'rotação',
    buttons: [{ value: 0, time: 2 }, { value: 0.25, time: 2 }, { value: -0.25, time: 2 }]
})

const p_paralela = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'paralela',
    buttons: [{ value: 1, time: 2 }, { value: 0, time: 2 }]
})

const p_alfa = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'α → B',
    buttons: [{ value: 1, time: 2 }, { value: 0, time: 2 }]
})

const p_gama = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'γ → B',
    buttons: [{ value: 1, time: 2 }, { value: 0, time: 2 }]
})

animation(p_rotacao, p_paralela, p_alfa, p_gama, (rot, r, a, g) => {

    const theta = rot * Math.PI

    const Ar = rotPt(A, centroide, theta)
    const Br = rotPt(B, centroide, theta)
    const Cr = rotPt(C, centroide, theta)

    // Triângulo
    drawPolygon({ points: [Ar, Br, Cr] })

    // Pontos dos vértices
    drawPoint({ x: Ar.x, y: Ar.y, size: 0.07*s })
    drawPoint({ x: Br.x, y: Br.y, size: 0.07*s })
    drawPoint({ x: Cr.x, y: Cr.y, size: 0.07*s })

    // Rótulos dos vértices (offsets rotacionados com o triângulo)
    const offA = rotVec(-0.55*s, -0.5*s, theta)
    const offB = rotVec( 0.25*s, -0.5*s, theta)
    const offC = rotVec(-0.1*s,   0.3*s, theta)
    drawText({ text: '$A$', x: Ar.x+offA.x, y: Ar.y+offA.y, fontSize: 0.5*s })
    drawText({ text: '$B$', x: Br.x+offB.x, y: Br.y+offB.y, fontSize: 0.5*s })
    drawText({ text: '$C$', x: Cr.x+offC.x, y: Cr.y+offC.y, fontSize: 0.5*s })

    // Extensão de AB além de B
    const normAB = Math.sqrt((Br.x-Ar.x)**2 + (Br.y-Ar.y)**2)
    const uxAB = (Br.x-Ar.x)/normAB
    const uyAB = (Br.y-Ar.y)/normAB
    const extEnd = {x: Br.x+2.5*s*uxAB, y: Br.y+2.5*s*uyAB}
    drawArrow({ points: [{x: Br.x+0.5*s*uxAB, y: Br.y+0.5*s*uyAB}, extEnd], size: 0.2*s })
    drawSegment({ points: [Br, extEnd], width: 0.04*s })

    // Ângulo externo e em B
    const startA = Math.atan2(uyAB, uxAB)
    let endA = Math.atan2(Cr.y-Br.y, Cr.x-Br.x)
    if (endA < startA) endA += 2*Math.PI
    drawArc({ center: Br, radius: 0.74*s, startAngle: startA, endAngle: endA, color: cor_verde_neon })
    const arcMid = (startA + endA) / 2
    drawText({ text: '$e$', x: Br.x+1.1*s*Math.cos(arcMid), y: Br.y+1.1*s*Math.sin(arcMid)-0.1*s, fontSize: 0.5*s, color: cor_verde_neon, opacity: 1 - g })

    // α estático em Ar
    drawSector({ points: [Br, Ar, Cr], radius: 0.7*s, fill: true, fillColor: cor_azul_eletrico, opacity: 0.6 })
    const alphaOff = rotVec(0.9*s, 0.2*s, theta)
    drawText({ text: '$\\alpha$', x: Ar.x+alphaOff.x, y: Ar.y+alphaOff.y, fontSize: 0.5*s, color: cor_azul_eletrico })

    // cópia de α vai para Br quando a > 0
    if (a > 0) {
        drawSector({
            points: [Br, Ar, Cr], radius: 0.7*s, fill: true, fillColor: cor_azul_eletrico, opacity: 0.6,
            translation: {x: (Br.x-Ar.x)*a, y: (Br.y-Ar.y)*a}
        })
        drawText({
            text: '$\\alpha$',
            x: Ar.x+alphaOff.x+(Br.x-Ar.x)*a,
            y: Ar.y+alphaOff.y+(Br.y-Ar.y)*a,
            fontSize: 0.5*s, color: cor_azul_eletrico
        })
    }

    // γ estático em Cr
    drawSector({ points: [Ar, Cr, Br], radius: 0.7*s, fill: true, fillColor: cor_coral, opacity: 0.6 })
    const gammaOff = rotVec(-0.2*s, -1.2*s, theta)
    drawText({ text: '$\\gamma$', x: Cr.x+gammaOff.x, y: Cr.y+gammaOff.y, fontSize: 0.5*s, color: cor_coral })

    // cópia de γ vai para Br quando g > 0
    if (g > 0) {
        drawSector({
            points: [Ar, Cr, Br], radius: 0.7*s, fill: true, fillColor: cor_coral, opacity: 0.6,
            rotationOrigin: {x: Cr.x, y: Cr.y},
            rotation: Math.PI * g,
            translation: {x: (Br.x-Cr.x)*g, y: (Br.y-Cr.y)*g}
        })
        const thetaG = Math.PI * g
        const dx = gammaOff.x
        const dy = gammaOff.y
        const labelX = Cr.x + dx*Math.cos(thetaG) - dy*Math.sin(thetaG) + (Br.x-Cr.x)*g
        const labelY = Cr.y + dx*Math.sin(thetaG) + dy*Math.cos(thetaG) + (Br.y-Cr.y)*g
        drawText({ text: '$\\gamma$', x: labelX, y: labelY, fontSize: 0.5*s, color: cor_coral })
    }

    // Reta dourada: paralela a CA, começa em Cr e vai até Br
    const dxCA = Ar.x-Cr.x
    const dyCA = Ar.y-Cr.y
    const normCA = Math.sqrt(dxCA*dxCA + dyCA*dyCA)
    const ucax = dxCA/normCA
    const ucay = dyCA/normCA

    const extA = 7*s   // lado que ultrapassa A
    const extC = 2*s   // lado além de C (curto)

    if (r === 0) {
        drawSegment({
            points: [
                {x: Cr.x - extC*ucax, y: Cr.y - extC*ucay},
                {x: Cr.x + extA*ucax, y: Cr.y + extA*ucay}
            ],
            color: cor_dourado, width: 0.05*s
        })
    } else {
        drawSegment({
            points: [
                {x: Cr.x - extC*ucax, y: Cr.y - extC*ucay},
                {x: Cr.x + extA*ucax, y: Cr.y + extA*ucay}
            ],
            color: cor_dourado, width: 0.04*s, lineDash: [0.3*s, 0.2*s], opacity: r
        })
        const goldX = Cr.x + (Br.x-Cr.x)*r
        const goldY = Cr.y + (Br.y-Cr.y)*r
        drawSegment({
            points: [
                {x: goldX - extC*ucax, y: goldY - extC*ucay},
                {x: goldX + extA*ucax, y: goldY + extA*ucay}
            ],
            color: cor_dourado, width: 0.05*s
        })
    }

    pause()

    drawText({
        text: '$e = \\alpha + \\gamma$',
        x: -0.5*s, y: -3.5*s,
        fontSize: 0.55*s, color: cor_verde_neon,
        opacity: g
    })

})
