// ============================================================
// ANIMAÇÃO: 1.6 Ao Maior Lado opõe-se o Maior Ângulo
// ============================================================
//
// TÉCNICAS USADAS NESTA ANIMAÇÃO:
//
// 1. PONTO D CALCULADO ANALITICAMENTE
//    D fica sobre AB com AD = AC:
//    t = AC_len / AB_len
//    D = A + t * (B - A)
//
// 2. TRANSPORTE DE SETOR COM ROTAÇÃO (método bissetor)
//    Para mover setor de vértice V1 para V2:
//    - Normaliza os dois raios em V1 → bissetor_origem
//    - Normaliza os dois raios em V2 → bissetor_destino
//    - R = bissetor_destino - bissetor_origem
//    - rotationOrigin: { x: V1.x * param, y: V1.y * param }
//    - rotation: R * param
//    - translation: { x: (V2.x - V1.x) * param, y: (V2.y - V1.y) * param }
//
// 3. TRANSPORTE EM DUAS FASES (param 0→2)
//    Fase 1 (v: 0→1): setor vai de C → D
//    Fase 2 (v: 1→2): setor vai de D → P
//    la = Math.min(v, 1)   // controla fase 1
//    tp = Math.max(v-1, 0) // controla fase 2
//    rotationOrigin: C * (la + (1-la)*tp)  → vale C*la na fase 1, C fixo na fase 2
//    rotation: R*la + (R_dest - R)*tp
//    translation: (D-C)*la + (P-D)*tp
//
// 4. COMPARAÇÃO DE ÂNGULOS EM PONTO P
//    Alinhar o raio base de cada ângulo para 0 rad (direita), abrindo anti-horário:
//    R_X_P = -Math.atan2(raio_base.y, raio_base.x)
//    Ordem de desenho: maior (atrás) → menor (frente), para layering correto
//    Raios usados:   azul=0.8  rosa=0.6  dourado=0.4
//
// 5. DOIS PARAMS PARA UM SETOR (sem duplicar o desenho)
//    levar_dourado: usa if(ld > 0) para NÃO desenhar em B quando inativo
//    cmp_dourado:   sempre ativo — é quem mantém o setor visível em B no estado inicial
//
// 6. ORDEM DOS animation() = ordem de profundidade (z-index)
//    O que é declarado primeiro fica atrás.
//
// ============================================================

//drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 });

// -- CORES ----------------------------------------------------
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

// -- TÍTULO ---------------------------------------------------

drawText({
    text: "\\begin{center} 1.6.1 Relação entre Lados e Ângulos Opostos \\end{center}",
    x: 0.44,
    y: 7.48,
    color: cor_titulo,
})

// -- PONTOS BASE ----------------------------------------------
const A = { x: 3.4,   y: 4.54  }
const B = { x: -3.97, y: -1.01 }
const C = { x: 4.39,  y: 0.37  }

// -- PONTO D sobre AB com AD = AC -----------------------------
const AC_len = Math.sqrt((C.x - A.x) ** 2 + (C.y - A.y) ** 2)
const AB_len = Math.sqrt((B.x - A.x) ** 2 + (B.y - A.y) ** 2)
const t = AC_len / AB_len
const D = {
    x: A.x + t * (B.x - A.x),
    y: A.y + t * (B.y - A.y)
}

// -- COMPRIMENTOS ---------------------------------------------
const CD_len = Math.sqrt((D.x - C.x) ** 2 + (D.y - C.y) ** 2)
const BC_len = Math.sqrt((C.x - B.x) ** 2 + (C.y - B.y) ** 2)
const BD_len = Math.sqrt((D.x - B.x) ** 2 + (D.y - B.y) ** 2)

// -- ROTAÇÃO ACD → ADC (método bissetor) ----------------------
const uCA = { x: (A.x - C.x) / AC_len, y: (A.y - C.y) / AC_len }
const uCD = { x: (D.x - C.x) / CD_len, y: (D.y - C.y) / CD_len }
const bis_C = Math.atan2(uCA.y + uCD.y, uCA.x + uCD.x)

const uDA = { x: (A.x - D.x) / AC_len, y: (A.y - D.y) / AC_len }
const uDC = { x: (C.x - D.x) / CD_len, y: (C.y - D.y) / CD_len }
const bis_D = Math.atan2(uDA.y + uDC.y, uDA.x + uDC.x)

const R = bis_D - bis_C

// -- ROTAÇÕES PARA PONTO DE COMPARAÇÃO P ----------------------
const P = { x: 0, y: -3.5 }

const R_ABC_P = -Math.atan2(C.y - B.y, C.x - B.x)
const R_ACD_P = -Math.atan2(A.y - C.y, A.x - C.x)
const R_ACB_P = -Math.atan2(A.y - C.y, A.x - C.x)

// -- PARAMS ---------------------------------------------------

// Rosa 1 (móvel): C → D (v: 0→1) depois D → P (v: 1→2)
const levar_angulo = param({
    value: 0, min: 0, max: 2, step: 0.001,
    buttons: [
        { value: 1, time: 2 },
        { value: 2, time: 2 },
        { value: 0, time: 2 }
    ],
    label: "ACD → ADC → P"
})

// Dourado: B → D (prova — if(ld>0) evita duplicar com cmp_dourado)
const levar_dourado = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 2 }, { value: 0, time: 2 }],
    label: "ABC → D"
})

// Dourado: B → P (comparação — mantém dourado visível em B quando ld=0)
const cmp_dourado = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 2 }, { value: 0, time: 2 }],
    label: "Comparação 1 - ABC → P"
})

// Rosa 2 (fixo): fica em C, depois vai para P
const cmp_ACD = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 2 }, { value: 0, time: 2 }],
    label: "ACD → P"
})

// Azul: C → P (comparação)
const cmp_ACB = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 2 }, { value: 0, time: 2 }],
    label: "Comparação 4 - ACB → P"
})

// ============================================================
// DESENHOS ESTÁTICOS
// ============================================================

drawPoint({ x: A.x, y: A.y, size: 0.06 })
drawText({ text: "A", x: 3.01, y: 4.65 })

drawPoint({ x: B.x, y: B.y, size: 0.06 })
drawText({ text: "B", x: -4.39, y: -1.38 })

drawPoint({ x: C.x, y: C.y, size: 0.06 })
drawText({ text: "C", x: 4.58, y: -0.37 })

drawPolygon({ points: [A, B, C] })

pause()

drawPoint({ x: D.x, y: D.y, size: 0.06 })
drawText({ text: "D", x: D.x - 0.4, y: D.y + 0.25 })
drawSegment({ points: [C, D], color: cor_rosa_choque })
drawSegmentMeasureMark({ points: [A, D], quantity: 2, size: 0.3 })
drawSegmentMeasureMark({ points: [A, C], quantity: 2, size: 0.3 })

pause()

// ============================================================
// ÂNGULOS — ordem de desenho: maior (atrás) → menor (frente)
// ============================================================

// Azul ACB — radius 0.8 — sempre atrás de tudo
animation(cmp_ACB, (s) => {
    drawSector({ points: [A, C, B], radius: 0.8, fill: true, fillColor: cor_azul_eletrico,
        rotationOrigin: { x: C.x * s, y: C.y * s },
        rotation: R_ACB_P * s,
        translation: { x: (P.x - C.x) * s, y: (P.y - C.y) * s } })
})

pause()

// Rosa ACD fixo — nasce em C, vai para P quando cmp_ACD = 1
animation(cmp_ACD, (s) => {
    drawSector({ points: [A, C, D], radius: 0.6, fill: true, fillColor: cor_rosa_choque,
        rotationOrigin: { x: C.x * s, y: C.y * s },
        rotation: R_ACD_P * s,
        translation: { x: (P.x - C.x) * s, y: (P.y - C.y) * s } })
})

// Rosa ACD móvel — v: 0→1 vai C→D (prova); v: 1→2 vai D→P (comparação)
animation(levar_angulo, (v) => {
    const la = Math.min(v, 1)
    const tp = Math.max(v - 1, 0)

    drawSector({ points: [A, C, D], radius: 0.6, fill: true, fillColor: cor_rosa_choque,
        rotationOrigin: {
            x: C.x * (la + (1 - la) * tp),
            y: C.y * (la + (1 - la) * tp)
        },
        rotation: R * la + (R_ACD_P - R) * tp,
        translation: {
            x: (D.x - C.x) * la + (P.x - D.x) * tp,
            y: (D.y - C.y) * la + (P.y - D.y) * tp
        }
    })
})

pause()

drawPolygon({ points: [D, B, C], fill: true, color: cor_verde_neon, opacity: 0.15 })

pause()

// Dourado: B → D (prova) — if(ld>0) evita desenhar em B quando inativo
animation(levar_dourado, (ld) => {
    if (ld > 0) {
        drawSector({ points: [C, B, A], radius: 0.4, fill: true, fillColor: cor_dourado,
            rotationOrigin: { x: B.x * ld, y: B.y * ld },
            rotation: 0,
            translation: { x: (D.x - B.x) * ld, y: (D.y - B.y) * ld } })
    }
})

// Dourado: B → P (comparação) — mantém dourado visível em B quando ld=0
animation(cmp_dourado, (s) => {
    drawSector({ points: [C, B, A], radius: 0.4, fill: true, fillColor: cor_dourado,
        rotationOrigin: { x: B.x * s, y: B.y * s },
        rotation: R_ABC_P * s,
        translation: { x: (P.x - B.x) * s, y: (P.y - B.y) * s } })
})

// -- CONCLUSÃO BICONDICIONAL ----------------------------------
pause()

drawText({ text: "$\\Rightarrow$ Se $\\overline{AB} > \\overline{AC}$, então $\\widehat{C} > \\widehat{B}.$ \\checkmark",
    x: -4.5, y: -5.2, color: cor_verde_neon })

pause()

drawText({ text: "$\\Leftarrow$ Se $\\widehat{C} > \\widehat{B}$, então $\\overline{AB} > \\overline{AC}.$",
    x: -4.5, y: -5.9, color: cor_azul_eletrico })
drawText({ text: "\\textit{(Por contradição: $\\overline{AB} \\leq \\overline{AC}$ implicaria $\\widehat{C} \\leq \\widehat{B}$, absurdo.)}",
    x: -4.5, y: -6.55, color: cor_azul_eletrico, fontSize: 0.38 })
