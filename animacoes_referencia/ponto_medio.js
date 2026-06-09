// ANIMAÇÃO: 1.4.1 Existência do Ponto Médio
// Status: CONCLUÍDA — usar como referência de estilo
//
// Destaques desta animação:
// - Usa cores legacy (laranja, verde, roxo, azulclaro, dourado, vermlehobordo)
// - Ponto C dinâmico via param de ângulo + comprimento (coordenadas polares)
// - Ponto D calculado via rotação + translação de AC (cosR/sinR + 8*mra)
// - Variáveis globais C e D declaradas fora e atualizadas dentro da animation()
// - Lógica if/else dentro de animation(): if (da < 1) mostra estado inicial, else mostra estado animado
// - 3 congruências progressivas: LAL → LLL → ALA
// - param "limpar" com opacity: 1-l para apagar elementos intermediários
// - drawSegmentMeasureMark para marcar segmentos congruentes
// - drawSector para destacar ângulos (cores: laranja, verde, roxo)
// - Conclusão: M ponto médio de AB via 3ª congruência (ALA)

//drawGrid({xMin: -5, xMax: 5, yMin: -5, yMax: 5});
const laranja= '#f67821'
const verde = '#008000';
const roxo = "#993399"
const azulclaro = '#87cefa'
const dourado = '#FFD700'
const vermlehobordo ='#970000'

drawText({
    text: "Dado um segmento $\\overline{AB}$, constrói-se pontos $C$ e $D$ em semiplanos opostos em relação ao segmento $\\overline{AB}$, de modo que:",
    x: -0.13,
    y: 10.22
})

pause()

drawText({
    text: "$\\left\\{\\begin{array}{l} C\\hat{A}B \\equiv A\\hat{B}D \\\\ \\overline{AC} = \\overline{BD} \\end{array}\\right.$",
    x: 1,
    y: 5
})


const A = { x: -4, y: 0 }
const B = { x: 4, y: 0 }

drawPoint({ x: A.x, y: A.y, size: 0.08 })
drawText({ text: "A", x: -4.5, y: -0.29 })

drawPoint({ x: B.x, y: B.y, size: 0.08 })
drawText({ text: "B", x: 4.47, y: -0.4 })

drawSegment({ points: [A, B] })

pause()

// PARÂMETROS PARA VARIAR C
const angulo_C = param({
    value: 45, min: 10, max: 170, step: 1, label: "Ângulo de C"
})
const comprimento_AC = param({
    value: 3, min: 0.5, max: 6, step: 0.1, label: "Comprimento AC"
})

// VARIÁVEIS GLOBAIS DE C e D
let C = { x: 0, y: 0 }
let D = { x: 0, y: 0 }

// PONTO C DINÂMICO
animation(angulo_C, comprimento_AC, (ang, comp) => {
    const rad = ang * Math.PI / 180
    C = {
        x: A.x + comp * Math.cos(rad),
        y: A.y + comp * Math.sin(rad)
    }
    drawPoint({ x: C.x, y: C.y, size: 0.08 })
    drawText({ text: "C", x: C.x - 0.17, y: C.y + 0.34 })
})

// PARÂMETROS DA ANIMAÇÃO
const desenhar_angulos = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 1 }], label: "Desenhar triangulos"
})
const mover_angulo_CAB = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{ value: 1, time: 1 }], label: "mover o angulo"
})
const mover_reta_AC = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons:[{ value: 1, time: 1 }], label: "MOver reta AB"
})

const congruencia_1 = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons:[{value: 1, time: 1}], label:"congruencia 1"
})
const congruencia_2 = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons:[{value: 1, time: 1}], label:"congruencia 2"
})
const congruencia_3 = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons:[{value: 1, time: 1}], label:"congruencia 3"
})
const limpar = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons:[{value: 1, time: 1}], label:"Limpar"
})

animation(desenhar_angulos, mover_angulo_CAB, mover_reta_AC, angulo_C, comprimento_AC, congruencia_1, congruencia_2, congruencia_3, limpar, (da, mac, mra, ang, comp, congru1, congru2, congru3, l) => {
    const rad = ang * Math.PI / 180
    C = {
        x: A.x + comp * Math.cos(rad),
        y: A.y + comp * Math.sin(rad)
    }

    if (da < 1) {
        drawSegment({ points: [A, C] })
        drawSector({ points: [B, A, C], radius: 0.7, fill: true, fillColor: laranja })
        pause()
    }
    else {
        const cosR = Math.cos(Math.PI * mra)
        const sinR = Math.sin(Math.PI * mra)
        const dx = C.x - A.x
        const dy = C.y - A.y
        const dxR = dx * cosR - dy * sinR
        const dyR = dx * sinR + dy * cosR

        D = {
            x: A.x + dxR + 8 * mra,
            y: A.y + dyR
        }

        drawSegment({ points: [A, C] })
        drawSector({ points: [B, A, C], radius: 0.7, fill: true, fillColor: laranja })



        drawSegment({
            points: [A, C], rotationOrigin: { x: -4, y: 0 }, rotation: Math.PI * mra, translation: { x: 8 * mra, y: 0 }, opacity: 1-l
        })
        drawSector({
            points: [B, A, C], radius: 0.7, fill: true, fillColor: laranja,
            rotationOrigin: { x: -4, y: 0 }, rotation: Math.PI * mac, translation: { x: 8 * mac, y: 0 }, opacity: 1-l
        })

        pause()

        drawPoint({ x: D.x, y: D.y, size: 0.08, opacity: 1-l})
        drawText({ text: "D", x: D.x + 0.3, y: D.y - 0.54, opacity: 1-l})

        pause()
        drawSegment({ points: [C, D], opacity: 1-l})

        const M = {x: 0, y: 0}
        drawPoint({
            x: M.x, y: M.y, size: 0.08, color: dourado
        })

        drawText({
            text: "M", x: -0.2, y: -0.7})

        pause()

        drawPolygon({
            points:[A, B, C], fillColor: vermlehobordo, fill: true, color: "black", opacity: 0.3*(1-congru1),
        })
        drawPolygon({
            points:[A, B, D], fillColor: azulclaro, fill: true, color: "black", opacity: 0.3*(1-congru1),
        })

        pause()

        drawText({
            text: "$ \\bullet \\quad  \\Delta ABD \\equiv \\Delta ABC$ (Caso LAL)", x: -0.05, y: -5.82})

        pause()



        drawSegment({
            points:[C, B], color: dourado
        })
        drawSegmentMeasureMark({
            points: [C, B], size: 0.4, color: dourado
        })

        drawSegment({
            points:[A, D], color: dourado
        })
        drawSegmentMeasureMark({
            points: [A, D], size: 0.4, color: dourado
        })

        pause() //ANTES DE DESENHAR A SEGUNDA CONGRUENCIA

        drawPolygon({
            points:[A, D, C], color: "Black", fillColor: vermlehobordo, fill: true, opacity: 0.3*(1-congru2)
        })

        drawPolygon({
            points:[D, B, C], color: "Black", fillColor: azulclaro, fill: true, opacity: 0.3*(1-congru2)
        })

        pause()

        drawText({
            text: "$ \\bullet \\quad  \\Delta ADC \\equiv \\Delta CDB$ (Caso LLL)", x: -0.05, y: -6.83})

        pause()

        drawSector({
            points:[C,B,A], radius: 0.9, fillColor: verde, fill: true
        })
        drawSector({
            points:[D,A,B], radius: 0.9, fillColor: verde, fill: true
        })

        pause()


        drawSector({
            points:[C, D, A], radius: 0.8, fill: true, fillColor: roxo
        })
        drawSector({
            points:[D, C, B], radius: 0.8, fill: true, fillColor: roxo
        })

        //FINAL DA SEGUNDA CONGRUENCIA

        pause() //INICIO DA TERCEIRA CONGRUENCIA

        drawPolygon({
            points:[A, D, M], fill: true, fillColor: vermlehobordo, opacity: 0.3*(1-congru3)
        })
        drawPolygon({
            points:[B, M, C], fill: true, fillColor: azulclaro, opacity: 0.3*(1-congru3)
        })

        pause()

        drawText({
            text: "$ \\bullet \\quad  \\Delta ADC \\equiv \\Delta CDB$ (Caso ALA)", x: -0.05, y: -7.77})
        drawSegmentMeasureMark({
            points: [A, M], size: 0.4, color: roxo, quantity: 3, space: 0.15
        })
        drawSegmentMeasureMark({
            points: [B, M], size: 0.4, color: roxo, quantity: 3, space: 0.15
        })
    }
})

pause()

drawText({
    text: "Da última congruência obtemos que $AM=MB$, ou seja, M é ponto médio de AB.", x:0.05, y: -9.88})
