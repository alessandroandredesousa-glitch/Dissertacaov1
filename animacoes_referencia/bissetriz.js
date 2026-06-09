// ANIMAÇÃO: 1.4.3 Existência da Bissetriz de um Ângulo
// Status: CONCLUÍDA — usar como referência de estilo
//
// DESTAQUE PRINCIPAL: encolher triângulo via interpolação por centroide
// Padrão:
//   const centro = { x: (P1.x + P2.x + P3.x) / 3, y: (P1.y + P2.y + P3.y) / 3 }
//   const fator = 1 - 0.2 * m   // 0.2 = quanto encolhe (20%)
//   const P1s = { x: centro.x + (P1.x - centro.x) * fator, ... }
// Quanto menor o fator, mais o triângulo encolhe em direção ao centroide.
// Quando fator = 1.0 (m=0): triângulo original. fator = 0.8 (m=1): 80% do tamanho.
//
// Estrutura geral: 3 congruências progressivas (LAL → ALA → LAL)
//   1ª congruência: △OBA' ≡ △OAB' (LAL)
//      params: mover_OBAl, mover_OABl, sumir_sombra
//   2ª congruência: △ACA' ≡ △BCB' (ALA)
//      params: mover_ACAl, mover_BCBl, sumir_sombra_2
//      usa ângulos dourado (A'/B') e roxo (A/B) herdados da 1ª
//   3ª congruência: △OAC ≡ △OBC (LAL)
//      params: mover_OAC, mover_OBC, sumir_sombra_3
//      usa marcações das duas anteriores (1 traço branco OA/OB, 1 traço ciano AC/BC)
//
// Outros padrões notáveis:
// - Pontos A, B, A', B' definidos via escala a partir de O (não hardcoded)
// - C calculado algebricamente como interseção de AB' e A'B (parametrização t)
// - Semirreta OC como direção normalizada de O→C, escalada por 2
// - Cores novas para a 2ª animação: coral, ciano, laranja_escuro, verde_limao
// - Cores novas para a 3ª animação: roxo_neon, laranja_averm, rosa_choque
// - Cada animação acumula as marcações das anteriores (herança visual de congruências)
// - sumir_sombra por animação: param separado para limpar cada bloco

//drawGrid({xMin: -5, xMax: 5, yMin: -5, yMax: 5});
param
pause()
const laranja= '#f67821'
const verde = '#008000';
const roxo = "#993399"
const azulclaro = '#87cefa'
const dourado = '#FFD700'
const vermlehobordo ='#970000'

drawText({
    text: "\\textbf{1.4.3 Existência da Bissetriz}",
    x: -0.05,
    y: 6.2, verticalCenter: true})

// DEFINIÇÃO DOS PONTOS O, A, B
const O = {x: -4, y: -1}
const escala_AB = 0.5

const A = {
    x: O.x + (2.14 - O.x) * escala_AB,
    y: O.y + (2.71 - O.y) * escala_AB
}
const B = {
    x: O.x + (2.31 - O.x) * escala_AB,
    y: O.y + (-2.84 - O.y) * escala_AB
}

// DIREÇÃO DAS SEMIRRETAS
const dirA = { x: A.x - O.x, y: A.y - O.y }
const dirB = { x: B.x - O.x, y: B.y - O.y }

// PONTO EXTREMO DAS SEMIRRETAS
const escala = 2.8
const A_ext = {
    x: O.x + dirA.x * escala,
    y: O.y + dirA.y * escala
}
const B_ext = {
    x: O.x + dirB.x * escala,
    y: O.y + dirB.y * escala
}

// A' E B'
const escala_linha = 2.3
const Al = {
    x: O.x + (A.x - O.x) * escala_linha,
    y: O.y + (A.y - O.y) * escala_linha
}
const Bl = {
    x: O.x + (B.x - O.x) * escala_linha,
    y: O.y + (B.y - O.y) * escala_linha
}

// 1) PONTO O, RETAS a E b
drawPoint({x: O.x, y: O.y, size: 0.08})
drawText({text: "O", x: O.x - 0.4, y: O.y - 0.3})
drawArrow({points: [O, A_ext]})
drawText({text: "$a$", x: A_ext.x - 0.3, y: A_ext.y + 0.2})
drawArrow({points: [O, B_ext]})
drawText({text: "$b$", x: B_ext.x - 0.4, y: B_ext.y - 0.5})

pause()

// 2) PONTOS A, B, A', B' E SEUS RÓTULOS
drawPoint({x: A.x, y: A.y, size: 0.08})
drawText({text: "A", x: -1.09, y: 1.28})

drawPoint({x: B.x, y: B.y, size: 0.08})
drawText({text: "B", x: -0.98, y: -2.56})

drawPoint({x: Al.x, y: Al.y, size: 0.08})
drawText({text: "$A'$", x: Al.x + 0.2, y: Al.y + 0.4})

drawPoint({x: Bl.x, y: Bl.y, size: 0.08})
drawText({text: "$B'$", x: Bl.x + 0.2, y: Bl.y - 0.8})

pause()

drawSegment({points: [A, Bl]})
drawSegment({points: [Al, B]})

pause()


// PONTO C — INTERSEÇÃO DE AB' E A'B
// Parametrização: A + t*(Bl-A) = Al + s*(B-Al)
const dx1 = Bl.x - A.x
const dy1 = Bl.y - A.y
const dx2 = B.x - Al.x
const dy2 = B.y - Al.y

const t = ((Al.x - A.x) * dy2 - (Al.y - A.y) * dx2) / (dx1 * dy2 - dy1 * dx2)

const C = {
    x: A.x + t * dx1,
    y: A.y + t * dy1
}

drawPoint({x: C.x, y: C.y, size: 0.08,})
drawText({text: "C", x: 0.71, y: -0.61})

// SEMIRRETA OC
const dirOC = {
    x: C.x - O.x,
    y: C.y - O.y
}
const OC_ext = {
    x: O.x + dirOC.x * 2,
    y: O.y + dirOC.y * 2
}

drawArrow({points: [O, OC_ext]})
drawText({text: "$c$", x: OC_ext.x + 0.2, y: OC_ext.y + 0.2})

pause()

// ============================================================
// 1ª CONGRUÊNCIA: △OBA' ≡ △OAB' (LAL)
// ============================================================
const mover_OBAl = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 1.5}], label: "Mover triângulo OBA'",
})
const mover_OABl = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 1.5}], label: "Mover triângulo OAB'",
})
const sumir_sombra = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 1}], label: "Sumir sombra",
})

animation(mover_OBAl, mover_OABl, sumir_sombra, (m1, m2, s) => {
    const centro1 = {
        x: (O.x + B.x + Al.x) / 3,
        y: (O.y + B.y + Al.y) / 3
    }
    const fator1 = 1 - 0.2*m1   // encolhe 20% em direção ao centroide
    const O1  = { x: centro1.x + (O.x  - centro1.x) * fator1, y: centro1.y + (O.y  - centro1.y) * fator1 }
    const B1  = { x: centro1.x + (B.x  - centro1.x) * fator1, y: centro1.y + (B.y  - centro1.y) * fator1 }
    const Al1 = { x: centro1.x + (Al.x - centro1.x) * fator1, y: centro1.y + (Al.y - centro1.y) * fator1 }

    const centro2 = {
        x: (O.x + A.x + Bl.x) / 3,
        y: (O.y + A.y + Bl.y) / 3
    }
    const fator2 = 1 - 0.2*m2
    const O2  = { x: centro2.x + (O.x  - centro2.x) * fator2, y: centro2.y + (O.y  - centro2.y) * fator2 }
    const A2  = { x: centro2.x + (A.x  - centro2.x) * fator2, y: centro2.y + (A.y  - centro2.y) * fator2 }
    const Bl2 = { x: centro2.x + (Bl.x - centro2.x) * fator2, y: centro2.y + (Bl.y - centro2.y) * fator2 }

    // 1) TRIÂNGULOS DESCEM
    drawPolygon({
        points: [O1, B1, Al1], fill: true, fillColor: vermlehobordo,
        opacity: (0.3 + 0.4*m1) * (1-s),
        translation: {x: -1.7*m1, y: -6*m1}
    })
    drawPolygon({
        points: [O2, A2, Bl2], fill: true, fillColor: azulclaro,
        opacity: (0.3 + 0.4*m2) * (1-s),
        translation: {x: 3*m2, y: -6*m2}
    })

    pause()

    // 2) RÓTULOS TRIÂNGULO VERMELHO
    drawText({text: "O",  x: -5.25, y: -7.4,  opacity: m1})
    drawText({text: "A'", x:  0.92, y: -3.75, opacity: m1})
    drawText({text: "B",  x: -2.5,  y: -8.14, opacity: m1})

    pause()

    // RÓTULOS TRIÂNGULO AZUL
    drawText({text: "O",  x: -0.73, y: -7.34, opacity: m2})
    drawText({text: "A",  x:  2.22, y: -5.35, opacity: m2})
    drawText({text: "B'", x:  5.44,  y: -9.36, opacity: m2})

    pause()

    // 3a) OB e OA — 1 traço (hipótese: OA = OB)
    drawSegmentMeasureMark({points: [O1, B1], quantity: 1, size: 0.3, translation: {x: -1.7*m1, y: -6*m1}})
    drawSegmentMeasureMark({points: [O2, A2], quantity: 1, size: 0.3, translation: {x: 3*m2, y: -6*m2}})

    pause()

    // 3b) ÂNGULO EM O — verde (hipótese: ângulos iguais)
    drawSector({points: [B1,  O1, Al1], radius: 0.5, fill: true, fillColor: verde, translation: {x: -1.7*m1, y: -6*m1}})
    drawSector({points: [Bl2, O2, A2],  radius: 0.5, fill: true, fillColor: verde, translation: {x: 3*m2, y: -6*m2}})

    pause()

    // 3c) OA' e OB' — 2 traços (hipótese: OA' = OB')
    drawSegmentMeasureMark({points: [O1, Al1], quantity: 2, size: 0.3, translation: {x: -1.7*m1, y: -6*m1}})
    drawSegmentMeasureMark({points: [O2, Bl2], quantity: 2, size: 0.3, translation: {x: 3*m2, y: -6*m2}})

    pause()

    // 3d) CONCLUSÃO LAL — lado restante BA' e AB' — 3 traços
    drawSegmentMeasureMark({points: [B1, Al1], quantity: 3, size: 0.3, translation: {x: -1.7*m1, y: -6*m1}})
    drawSegmentMeasureMark({points: [A2, Bl2], quantity: 3, size: 0.3, translation: {x: 3*m2, y: -6*m2}})

    pause()

    // 3e) ÂNGULO EM B e A — roxo
    drawSector({points: [Al1, B1,  O1],  radius: 0.5, fill: true, fillColor: roxo, translation: {x: -1.7*m1, y: -6*m1}})
    drawSector({points: [O2,  A2,  Bl2], radius: 0.5, fill: true, fillColor: roxo, translation: {x: 3*m2, y: -6*m2}})

    pause()

    // 3f) ÂNGULO EM A' e B' — dourado
    drawSector({points: [O1,  Al1, B1],  radius: 0.5, fill: true, fillColor: dourado, translation: {x: -1.7*m1, y: -6*m1}})
    drawSector({points: [A2,  Bl2, O2],  radius: 0.5, fill: true, fillColor: dourado, translation: {x: 3*m2, y: -6*m2}})
})

pause()

// ============================================================
// 2ª CONGRUÊNCIA: △ACA' ≡ △BCB' (ALA)
// ============================================================
const coral = '#FF6B6B'
const ciano = '#00FFFF'
const rosa = '#FF69B4'
const laranja_escuro = '#FF8C00'
const verde_limao = '#7CFC00'

const mover_ACAl = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 1.5}], label: "Mover triângulo ACA'"
})
const mover_BCBl = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 1.5}], label: "Mover triângulo BCB'"
})
const sumir_sombra_2 = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 1}], label: "Sumir sombra 2"
})

animation(mover_ACAl, mover_BCBl, sumir_sombra_2, (m1, m2, s) => {
    const centro1 = {
        x: (A.x + C.x + Al.x) / 3,
        y: (A.y + C.y + Al.y) / 3
    }
    const fator1 = 1 - 0.0*m1
    const A1  = { x: centro1.x + (A.x  - centro1.x) * fator1, y: centro1.y + (A.y  - centro1.y) * fator1 }
    const C1  = { x: centro1.x + (C.x  - centro1.x) * fator1, y: centro1.y + (C.y  - centro1.y) * fator1 }
    const Al1 = { x: centro1.x + (Al.x - centro1.x) * fator1, y: centro1.y + (Al.y - centro1.y) * fator1 }

    const centro2 = {
        x: (B.x + C.x + Bl.x) / 3,
        y: (B.y + C.y + Bl.y) / 3
    }
    const fator2 = 1 - 0.0*m2
    const B2  = { x: centro2.x + (B.x  - centro2.x) * fator2, y: centro2.y + (B.y  - centro2.y) * fator2 }
    const C2  = { x: centro2.x + (C.x  - centro2.x) * fator2, y: centro2.y + (C.y  - centro2.y) * fator2 }
    const Bl2 = { x: centro2.x + (Bl.x - centro2.x) * fator2, y: centro2.y + (Bl.y - centro2.y) * fator2 }

    // 1) TRIÂNGULOS DESCEM — com ângulos A' e B' em dourado da animação 1
    drawPolygon({
        points: [A1, C1, Al1], fill: true, fillColor: vermlehobordo,
        opacity: (0.3 + 0.4*m1) * (1-s),
        translation: {x: -3.5*m1, y: -8*m1}
    })
    drawSector({
        points: [A1, Al1, C1], radius: 0.5, fill: true, fillColor: dourado,
        translation: {x: -3.5*m1, y: -8*m1}
    })

    drawPolygon({
        points: [B2, C2, Bl2], fill: true, fillColor: azulclaro,
        opacity: (0.3 + 0.4*m2) * (1-s),
        translation: {x: 1.5*m2, y: -5*m2}
    })
    drawSector({
        points: [C2, Bl2, B2], radius: 0.5, fill: true, fillColor: dourado,
        translation: {x: 1.5*m2, y: -5*m2}
    })

    pause()

    // 2) RÓTULOS TRIÂNGULO VERMELHO
    drawText({text: "A",    x: A1.x  - 0.3, y: A1.y  - 0.3, opacity: m1, translation: {x: -3.5*m1, y: -8*m1}})
    drawText({text: "C",    x: C1.x  + 0.0, y: C1.y  - 0.6, opacity: m1, translation: {x: -3.5*m1, y: -8*m1}})
    drawText({text: "$A'$", x: Al1.x + 0.2, y: Al1.y + 0.2, opacity: m1, translation: {x: -3.5*m1, y: -8*m1}})

    pause()

    // RÓTULOS TRIÂNGULO AZUL
    drawText({text: "B",    x: B2.x  - 0.3, y: B2.y  - 0.3, opacity: m2, translation: {x: 1.5*m2, y: -5*m2}})
    drawText({text: "C",    x: C2.x  + 0.2, y: C2.y  + 0.1, opacity: m2, translation: {x: 1.5*m2, y: -5*m2}})
    drawText({text: "$B'$", x: Bl2.x + 0.4, y: Bl2.y - 0.3, opacity: m2, translation: {x: 1.5*m2, y: -5*m2}})

    pause()

    // 3a) AA' e BB' — 3 traços (iguais pela animação 1)
    drawSegmentMeasureMark({points: [A1, Al1], quantity: 3, size: 0.3, color: ciano, translation: {x: -3.5*m1, y: -8*m1}})
    drawSegmentMeasureMark({points: [B2, Bl2], quantity: 3, size: 0.3, color: ciano, translation: {x: 1.5*m2,  y: -5*m2}})

    pause()

    // 3b) ÂNGULO EM A e B — laranja escuro (iguais pela animação 1)
    drawSector({points: [C1, A1,  Al1], radius: 0.5, fill: true, fillColor: laranja_escuro, translation: {x: -3.5*m1, y: -8*m1}})
    drawSector({points: [Bl2, B2, C2],  radius: 0.5, fill: true, fillColor: laranja_escuro, translation: {x: 1.5*m2,  y: -5*m2}})

    pause()

    // 3c) AC e BC — 1 traço
    drawSegmentMeasureMark({points: [A1, C1], quantity: 1, size: 0.3, color: ciano, translation: {x: -3.5*m1, y: -8*m1}})
    drawSegmentMeasureMark({points: [B2, C2], quantity: 1, size: 0.3, color: ciano, translation: {x: 1.5*m2,  y: -5*m2}})

    pause()

    // 3d) ÂNGULO EM C — coral
    drawSector({points: [Al1, C1, A1], radius: 0.5, fill: true, fillColor: coral, translation: {x: -3.5*m1, y: -8*m1}})
    drawSector({points: [B2, C2, Bl2], radius: 0.5, fill: true, fillColor: coral, translation: {x: 1.5*m2,  y: -5*m2}})

    pause()

    // 3e) CA' e CB' — 2 traços (conclusão ALA)
    drawSegmentMeasureMark({points: [C1, Al1], quantity: 2, size: 0.3, color: ciano, translation: {x: -3.5*m1, y: -8*m1}})
    drawSegmentMeasureMark({points: [C2, Bl2], quantity: 2, size: 0.3, color: ciano, translation: {x: 1.5*m2,  y: -5*m2}})

})

pause()

// ============================================================
// 3ª CONGRUÊNCIA: △OAC ≡ △OBC (LAL)
// ============================================================
const roxo_neon = '#E040FB'
const laranja_averm = '#FF4500'
const verde_menta = '#00FA9A'
const rosa_choque = '#FF1493'

const mover_OAC = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 1.5}], label: "Mover triângulo OAC"
})
const mover_OBC = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 1.5}], label: "Mover triângulo OBC"
})
const sumir_sombra_3 = param({
    value: 0, min: 0, max: 1, step: 0.001, buttons: [{value: 1, time: 1}], label: "Sumir sombra 3"
})

animation(mover_OAC, mover_OBC, sumir_sombra_3, (m1, m2, s) => {
    const centro1 = {
        x: (O.x + A.x + C.x) / 3,
        y: (O.y + A.y + C.y) / 3
    }
    const fator1 = 1 - 0.0*m1
    const O1 = { x: centro1.x + (O.x - centro1.x) * fator1, y: centro1.y + (O.y - centro1.y) * fator1 }
    const A1 = { x: centro1.x + (A.x - centro1.x) * fator1, y: centro1.y + (A.y - centro1.y) * fator1 }
    const C1 = { x: centro1.x + (C.x - centro1.x) * fator1, y: centro1.y + (C.y - centro1.y) * fator1 }

    const centro2 = {
        x: (O.x + B.x + C.x) / 3,
        y: (O.y + B.y + C.y) / 3
    }
    const fator2 = 1 - 0.0*m2
    const O2 = { x: centro2.x + (O.x - centro2.x) * fator2, y: centro2.y + (O.y - centro2.y) * fator2 }
    const B2 = { x: centro2.x + (B.x - centro2.x) * fator2, y: centro2.y + (B.y - centro2.y) * fator2 }
    const C2 = { x: centro2.x + (C.x - centro2.x) * fator2, y: centro2.y + (C.y - centro2.y) * fator2 }

    // 1) TRIÂNGULOS DESCEM
    drawPolygon({
        points: [O1, A1, C1], fill: true, fillColor: vermlehobordo,
        opacity: (0.3 + 0.4*m1) * (1-s),
        translation: {x: -0.9*m1, y: -6*m1}
    })
    drawPolygon({
        points: [O2, B2, C2], fill: true, fillColor: azulclaro,
        opacity: (0.3 + 0.4*m2) * (1-s),
        translation: {x: 4.7*m2, y: -4.7*m2}
    })

    // MARCAÇÕES JÁ CONHECIDAS — acompanham desde o início

    // ângulo roxo em A (da animação 1)
    drawSector({points: [O1, A1, C1], radius: 0.5, fill: true, fillColor: roxo,
        translation: {x: -0.9*m1, y: -6*m1}})
    // ângulo roxo em B (da animação 1)
    drawSector({points: [C2, B2, O2], radius: 0.5, fill: true, fillColor: roxo,
        translation: {x: 4.7*m2, y: -4.7*m2}})

    // 1 traço branco em OA e OB (da animação 1)
    drawSegmentMeasureMark({points: [O1, A1], quantity: 1, size: 0.3,
        translation: {x: -0.9*m1, y: -6*m1}})
    drawSegmentMeasureMark({points: [O2, B2], quantity: 1, size: 0.3,
        translation: {x: 4.7*m2, y: -4.7*m2}})

    // 1 traço ciano em AC e BC (da animação 2)
    drawSegmentMeasureMark({points: [A1, C1], quantity: 1, size: 0.3, color: ciano,
        translation: {x: -0.9*m1, y: -6*m1}})
    drawSegmentMeasureMark({points: [B2, C2], quantity: 1, size: 0.3, color: ciano,
        translation: {x: 4.7*m2, y: -4.7*m2}})

    pause()

    // 2) RÓTULOS TRIÂNGULO VERMELHO
    drawText({text: "O", x: O1.x - 0.4, y: O1.y - 0.3, opacity: m1, translation: {x: -0.9*m1, y: -6*m1}})
    drawText({text: "A", x: A1.x + 0.2, y: A1.y + 0.2, opacity: m1, translation: {x: -0.9*m1, y: -6*m1}})
    drawText({text: "C", x: C1.x + 0.2, y: C1.y - 0.4, opacity: m1, translation: {x: -0.9*m1, y: -6*m1}})

    pause()

    // RÓTULOS TRIÂNGULO AZUL
    drawText({text: "O", x: O2.x - 0.4, y: O2.y - 0.3, opacity: m2, translation: {x: 4.7*m2, y: -4.7*m2}})
    drawText({text: "B", x: B2.x + 0.2, y: B2.y - 0.6, opacity: m2, translation: {x: 4.7*m2, y: -4.7*m2}})
    drawText({text: "C", x: C2.x + 0.2, y: C2.y - 0.4, opacity: m2, translation: {x: 4.7*m2, y: -4.7*m2}})

    pause()

    // 3a) ÂNGULO EM O — laranja avermelhado
    drawSector({points: [C1, O1, A1], radius: 0.5, fill: true, fillColor: laranja_averm, translation: {x: -0.9*m1, y: -6*m1}})
    drawSector({points: [B2, O2, C2], radius: 0.5, fill: true, fillColor: laranja_averm, translation: {x: 4.7*m2,  y: -4.7*m2}})

    pause()

    // 3b) OC — 3 traços (conclusão LAL)
    drawSegmentMeasureMark({points: [O1, C1], quantity: 3, size: 0.3, color: roxo_neon, translation: {x: -0.9*m1, y: -6*m1}})
    drawSegmentMeasureMark({points: [O2, C2], quantity: 3, size: 0.3, color: roxo_neon, translation: {x: 4.7*m2,  y: -4.7*m2}})

    pause()

    // 3d) ÂNGULO EM C — rosa choque
    drawSector({points: [A1, C1, O1], radius: 0.5, fill: true, fillColor: rosa_choque, translation: {x: -0.9*m1, y: -6*m1}})
    drawSector({points: [O2, C2, B2], radius: 0.5, fill: true, fillColor: rosa_choque, translation: {x: 4.7*m2,  y: -4.7*m2}})
})

pause()

drawText({
    text: "Desta última congruência, $A\\hat{O}C \\equiv C\\hat{O}B$, ou seja, $\\overrightarrow{OC}$ é bissetriz de $a\\hat{O}b$.",
    x: 0.14,
    y: -5.85, verticalCenter: true})
