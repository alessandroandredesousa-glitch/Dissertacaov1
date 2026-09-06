// IMAGEM ESTÁTICA — img_trapezio_tipos.png (Figura 3.4)
// Os três tipos: escaleno, isósceles (laterais congruentes) e retângulo
// (uma lateral vertical -> dois ângulos retos). Fundo BRANCO.
// Destino: imagem/3.2/img_trapezio_tipos.png
// drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

const cor_coral = '#FF6B6B'

const bw = 1.1, tw = 0.6, hh = 1.9, y0 = -0.5
function trap(xc, shift) {
    return {
        AA: { x: xc - bw, y: y0 }, BB: { x: xc + bw, y: y0 },
        DD: { x: xc + shift - tw, y: y0 + hh }, CC: { x: xc + shift + tw, y: y0 + hh }
    }
}
function desenhaTrap(T) {
    drawSegment({ points: [T.AA, T.BB], width: 0.03 })
    drawSegment({ points: [T.DD, T.CC], width: 0.03 })
    drawSegment({ points: [T.BB, T.CC], width: 0.03 })
    drawSegment({ points: [T.DD, T.AA], width: 0.03 })
}

// ESCALENO (esquerda)
const E = trap(-3.3, 0.35); desenhaTrap(E)
drawText({ text: "escaleno", x: -4.1, y: y0 - 0.55, fontSize: 0.4 })

// ISÓSCELES (centro) — laterais congruentes
const I = trap(0, 0); desenhaTrap(I)
drawSegmentMeasureMark({ points: [I.AA, I.DD], size: 0.22, quantity: 1, color: cor_coral })
drawSegmentMeasureMark({ points: [I.BB, I.CC], size: 0.22, quantity: 1, color: cor_coral })
drawText({ text: "isósceles", x: -0.75, y: y0 - 0.55, fontSize: 0.4 })

// RETÂNGULO (direita) — lateral esquerda vertical -> ângulos retos
const R = trap(3.3, -(bw - tw)); desenhaTrap(R)
drawSector({ points: [R.BB, R.AA, R.DD], radius: 0.3 })
drawSector({ points: [R.CC, R.DD, R.AA], radius: 0.3 })
drawText({ text: "retângulo", x: 2.55, y: y0 - 0.55, fontSize: 0.4 })
