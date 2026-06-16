// ============================================================
// ANIMAÇÃO: 1.6.2 Desigualdade Triangular
// ============================================================
//
// TÉCNICAS USADAS NESTA ANIMAÇÃO:
//
// 1. TRANSPORTE DE SETOR COM ROTAÇÃO (método bissetor)
//    ACD transportado de C para D — mesmo método do 1.6.1
//
// 2. MESMO PARAM PARA DOIS EFEITOS OPOSTOS
//    destacar_BCD: ao mesmo tempo some com triângulo verde (opacity: 1-s)
//    e aparece triângulo azul (opacity: s) → troca visual limpa
//
// 3. TRIÂNGULO AUXILIAR COM VÉRTICES ANIMADOS (senoides)
//    Cada vértice oscila com frequência e fase diferente → movimento
//    orgânico que muda forma do triângulo. Amplitude ≥ 1 para mudança visível.
//    T1a = { x: T1.x + A*sin(t*f + φ), y: T1.y + B*cos(t*g + ψ) }
//
// 4. CÓPIAS DE SEGMENTOS QUE "VOAM" PARA LINHA DE COMPARAÇÃO
//    Interpolação de endpoints: p = origem + s*(destino - origem)
//    Cópia parte da posição animada atual e chega na linha horizontal.
//    Comprimento da cópia = comprimento atual do lado animado (dinâmico).
//
// 5. animation(param1, param2, (a, b) => {...})
//    Usado nas cópias: param1 = animar (fornece posição atual dos vértices),
//    param2 = deitar_x (controla o transporte). Permite que a cópia conheça
//    a posição E o tamanho do lado em tempo real.
//
// 6. if(s > 0) DENTRO DE animation
//    Evita desenhar a cópia na posição de origem quando deitar=0.
//    Sem o if, a cópia ficaria sobreposta ao triângulo original.
//
// 7. opacity: s EM drawText (fade-in de rótulo)
//    Rótulo invisível no início (s=0), aparece gradualmente conforme
//    o segmento chega na linha. Evita rótulo duplicado na origem.
//
// 8. MÚLTIPLOS BOTÕES EM UM PARAM (paradas em formas específicas)
//    buttons com 4 entradas: pausa em t=8, depois t=17, depois t=40, reset.
//    Para encontrar valores bons: mover slider manualmente e anotar t.
//
// 9. \left\{\begin{array}{l} ... \end{array}\right. (sistema com chave)
//    Para enunciar sistema de inequações matemáticas com chave lateral.
//
// ============================================================

//drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })

// ── CORES ──────────────────────────────────────────────────────
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

// ── PARAMS (todos juntos no topo — ordem = ordem na interface) ──
const levar_angulo = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 2 }, { value: 0, time: 2 }],
    label: "ACD → ADC"
})
const mostrar_BCD = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 1.5 }, { value: 0, time: 1.5 }],
    label: "Mostrar BCD"
})
const destacar_BCD = param({
    value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 1 }, { value: 0, time: 1 }],
    label: "Destacar △BCD"
})

// ── TÍTULO E ENUNCIADO ────────────────────────────────────────
drawText({
    text: " 1.6.2 Desigualdade Traingulo", x: -0.1, y: 6.13, color: cor_titulo
})
drawText({
    text: "$\\left\\{\\begin{array}{l} c + b > a \\\\ c + a > b \\\\ b + a > c \\end{array}\\right.$",
    x: -2.5, y: 3.5
})

// ── PONTOS BASE ────────────────────────────────────────────────
const A = {x: 0.83, y: 2.32}
const B = {x: -3.55, y: -0.7}
const C = {x: 3.18, y: -0.34}

drawPoint({ x: A.x, y: A.y, size: 0.07 })
drawText({ text: "A", x: 0.87, y: 2.62 })
drawPoint({ x: B.x, y: B.y, size: 0.07 })
drawText({ text: "B", x: -3.89, y: -1.34 })
drawPoint({ x: C.x, y: C.y, size: 0.07 })
drawText({ text: "C", x: 3.4, y: -1.07 })

drawPolygon({ points: [A, B, C] })

pause()

// ── PONTO D (sobre prolongamento de BA além de A, com AD = AC) ──
const AC_len = Math.sqrt((C.x-A.x)**2 + (C.y-A.y)**2)
const AB_len = Math.sqrt((B.x-A.x)**2 + (B.y-A.y)**2)
const BA_unit = { x: (A.x-B.x)/AB_len, y: (A.y-B.y)/AB_len }
const D = { x: A.x + AC_len * BA_unit.x, y: A.y + AC_len * BA_unit.y }

const fator = 1.4   // ajustar para comprimento da seta além de D
const seta_fim = {
    x: A.x + AC_len * fator * BA_unit.x,
    y: A.y + AC_len * fator * BA_unit.y
}

drawArrow({ points: [B, seta_fim] })
drawPoint({ x: D.x, y: D.y, size: 0.07 })
drawText({ text: "D", x: D.x - 0.1, y: D.y + 0.3 })
drawSegmentMeasureMark({ points: [A, D], size: 0.3 })
drawSegmentMeasureMark({ points: [A, C], size: 0.3 })

pause()

// ── TRIÂNGULO ACD — em animation para sumir com destacar_BCD ──
// Declarado antes dos setores → fica atrás (z-order)
animation(destacar_BCD, (s) => {
    drawPolygon({ points: [A, C, D], fill: true, fillColor: cor_verde_neon,
        opacity: 0.15 * (1 - s), color: cor_verde_neon })
})

pause()

// ── SETORES (z-order: azul BCD atrás, rosa ACD na frente) ─────

// Azul BCD — declarado primeiro = fica atrás do rosa
animation(mostrar_BCD, (s) => {
    drawSector({ points: [D, C, B], radius: 0.9, fill: true, fillColor: cor_azul_eletrico,
        opacity: s })
})

// ── CÁLCULOS PARA TRANSPORTE ACD → ADC ────────────────────────
const CD_len = Math.sqrt((D.x-C.x)**2 + (D.y-C.y)**2)
const uCA = { x: (A.x-C.x)/AC_len, y: (A.y-C.y)/AC_len }
const uCD = { x: (D.x-C.x)/CD_len, y: (D.y-C.y)/CD_len }
const bis_C = Math.atan2(uCA.y + uCD.y, uCA.x + uCD.x)
const uDA = { x: (A.x-D.x)/AC_len, y: (A.y-D.y)/AC_len }
const uDC = { x: (C.x-D.x)/CD_len, y: (C.y-D.y)/CD_len }
const bis_D = Math.atan2(uDA.y + uDC.y, uDA.x + uDC.x)
const R_CD = bis_D - bis_C

// Rosa ACD — único setor, parte de C e vai até D (estático removido)
animation(levar_angulo, (s) => {
    drawSector({ points: [D, C, A], radius: 0.6, fill: true, fillColor: cor_rosa_choque,
        rotationOrigin: { x: C.x * s, y: C.y * s },
        rotation: R_CD * s,
        translation: { x: (D.x - C.x) * s, y: (D.y - C.y) * s }
    })
})

pause()

// ── POLÍGONO BCD AZUL — mesmo param que some o verde (troca visual) ──
animation(destacar_BCD, (s) => {
    drawPolygon({ points: [B, C, D], fill: true, fillColor: cor_azul_eletrico,
        opacity: 0.12 * s, color: cor_azul_eletrico })
})

// ── APLICAR PROPRIEDADE ───────────────────────────────────────
drawText({
    text: "No $\\triangle BCD$: $\\angle BCD > \\angle BDC$ \\\\ ao maior ângulo opõe-se o maior lado, logo $\\overline{BD} > \\overline{BC}$",
    x: -0.27, y: -2.84})

pause()

drawText({
    text: "$\\overline{BD} = \\overline{BA} + \\overline{AD} = \\overline{AB} + \\overline{AC}$, pois $\\overline{AD} = \\overline{AC}$",
    x: 0.01, y: -6.74})

// ── CONCLUSÃO ─────────────────────────────────────────────────
drawText({
    text: "\\begin{center}\\textcolor{#39FF14}{$\\therefore \\ \\overline{AB} + \\overline{AC} > \\overline{BC} \\ \\ \\blacksquare$}, ou seja,\\textcolor{#39FF14}{$c + b > a$} \\end{center}",
    x: -0.07, y: -8.84})

pause()

// ── TRIÂNGULO AUXILIAR (demonstração visual da desigualdade) ──
// Triângulo com vértices animados — forma muda continuamente
const T1 = {x:  1.19, y: -10.93}
const T2 = {x: -1.5,  y: -13.0}
const T3 = {x:  1.8,  y: -13.0}

const y_sup = -15.8   // linha superior: c e b lado a lado
const y_inf = -16.8   // linha inferior: a sozinho (comparação)
const x_ini = -3.5    // ponto de partida das linhas

// Params para este bloco — na ordem de uso no vídeo
const deitar_c = param({ value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 1.5 }, { value: 0, time: 1.5 }], label: "Deitar c" })
const deitar_b = param({ value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 1.5 }, { value: 0, time: 1.5 }], label: "Deitar b" })
const deitar_a = param({ value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 1.5 }, { value: 0, time: 1.5 }], label: "Deitar a" })
const animar = param({ value: 0, min: 0, max: 50, step: 0.01,
    buttons: [
        { value: 8,  time: 3  },  // parada 1 — triângulo quase equilátero (ajustar)
        { value: 17, time: 5  },  // parada 2 — triângulo muito escaleno (ajustar)
        { value: 40, time: 10 },  // animação livre
        { value: 0,  time: 1  }   // reset
    ], label: "Animar triângulo" })

// Fórmula dos vértices animados (repetida em cada bloco — variáveis são locais):
// T1a = { x: T1.x + 1.5*sin(t*0.50) - 1,  y: T1.y + 1.2*cos(t*0.40) - 1 }
// T2a = { x: T2.x + 1.3*sin(t*0.70+1) - 1, y: T2.y + 1.0*cos(t*0.60+2) - 1 }
// T3a = { x: T3.x + 1.2*cos(t*0.45+.5) - 1, y: T3.y + 0.9*sin(t*0.55+1.5) - 1 }

// ── TRIÂNGULO ANIMADO ─────────────────────────────────────────
animation(animar, (t) => {
    const T1a = { x: T1.x + 1.5*Math.sin(t*0.50) - 1,        y: T1.y + 1.2*Math.cos(t*0.40) - 1 }
    const T2a = { x: T2.x + 1.3*Math.sin(t*0.70 + 1.0) - 1,  y: T2.y + 1.0*Math.cos(t*0.60 + 2.0) - 1 }
    const T3a = { x: T3.x + 1.2*Math.cos(t*0.45 + 0.5) - 1,  y: T3.y + 0.9*Math.sin(t*0.55 + 1.5) - 1 }

    drawSegment({ points: [T1a, T2a], color: cor_azul_eletrico, width: 0.07 })
    drawSegment({ points: [T1a, T3a], color: cor_rosa_choque,   width: 0.07 })
    drawSegment({ points: [T2a, T3a], color: cor_verde_neon,    width: 0.07 })

    drawText({ text: "$c$", x: (T1a.x+T2a.x)/2 - 0.35, y: (T1a.y+T2a.y)/2,
        color: cor_azul_eletrico, fontSize: 0.4 })
    drawText({ text: "$b$", x: (T1a.x+T3a.x)/2 + 0.2,  y: (T1a.y+T3a.y)/2,
        color: cor_rosa_choque,   fontSize: 0.4 })
    drawText({ text: "$a$", x: (T2a.x+T3a.x)/2,         y: (T2a.y+T3a.y)/2 - 0.35,
        color: cor_verde_neon,    fontSize: 0.4 })
})

// ── CÓPIAS DOS LADOS — voam do triângulo para as linhas de comparação ──
// Usam animation(animar, deitar_x) para acessar posição E comprimento atual

// Cópia de c (azul): T1a→T2a, vai para linha superior (esquerda)
animation(animar, deitar_c, (t, s) => {
    if (s > 0) {
        const T1a = { x: T1.x + 1.5*Math.sin(t*0.50) - 1,       y: T1.y + 1.2*Math.cos(t*0.40) - 1 }
        const T2a = { x: T2.x + 1.3*Math.sin(t*0.70 + 1.0) - 1, y: T2.y + 1.0*Math.cos(t*0.60 + 2.0) - 1 }
        const t_c_now = Math.sqrt((T2a.x-T1a.x)**2 + (T2a.y-T1a.y)**2)

        const p1 = { x: T1a.x + s*(x_ini - T1a.x),             y: T1a.y + s*(y_sup - T1a.y) }
        const p2 = { x: T2a.x + s*(x_ini + t_c_now - T2a.x),   y: T2a.y + s*(y_sup - T2a.y) }
        drawSegment({ points: [p1, p2], color: cor_azul_eletrico, width: 0.07 })
        drawText({ text: "$c$", x: (p1.x+p2.x)/2 - 0.15, y: (p1.y+p2.y)/2 + 0.25,
            color: cor_azul_eletrico, fontSize: 0.4, opacity: s })
    }
})

// Cópia de b (rosa): T1a→T3a, vai para linha superior (após c)
animation(animar, deitar_b, (t, s) => {
    if (s > 0) {
        const T1a = { x: T1.x + 1.5*Math.sin(t*0.50) - 1,        y: T1.y + 1.2*Math.cos(t*0.40) - 1 }
        const T2a = { x: T2.x + 1.3*Math.sin(t*0.70 + 1.0) - 1,  y: T2.y + 1.0*Math.cos(t*0.60 + 2.0) - 1 }
        const T3a = { x: T3.x + 1.2*Math.cos(t*0.45 + 0.5) - 1,  y: T3.y + 0.9*Math.sin(t*0.55 + 1.5) - 1 }
        const t_c_now = Math.sqrt((T2a.x-T1a.x)**2 + (T2a.y-T1a.y)**2)
        const t_b_now = Math.sqrt((T3a.x-T1a.x)**2 + (T3a.y-T1a.y)**2)

        const p1 = { x: T1a.x + s*(x_ini + t_c_now - T1a.x),             y: T1a.y + s*(y_sup - T1a.y) }
        const p2 = { x: T3a.x + s*(x_ini + t_c_now + t_b_now - T3a.x),   y: T3a.y + s*(y_sup - T3a.y) }
        drawSegment({ points: [p1, p2], color: cor_rosa_choque, width: 0.07 })
        drawText({ text: "$b$", x: (p1.x+p2.x)/2 - 0.15, y: (p1.y+p2.y)/2 + 0.25,
            color: cor_rosa_choque, fontSize: 0.4, opacity: s })
    }
})

// Cópia de a (verde): T2a→T3a, vai para linha inferior (comparação)
animation(animar, deitar_a, (t, s) => {
    if (s > 0) {
        const T2a = { x: T2.x + 1.3*Math.sin(t*0.70 + 1.0) - 1, y: T2.y + 1.0*Math.cos(t*0.60 + 2.0) - 1 }
        const T3a = { x: T3.x + 1.2*Math.cos(t*0.45 + 0.5) - 1, y: T3.y + 0.9*Math.sin(t*0.55 + 1.5) - 1 }
        const t_a_now = Math.sqrt((T3a.x-T2a.x)**2 + (T3a.y-T2a.y)**2)

        const p1 = { x: T2a.x + s*(x_ini - T2a.x),             y: T2a.y + s*(y_inf - T2a.y) }
        const p2 = { x: T3a.x + s*(x_ini + t_a_now - T3a.x),   y: T3a.y + s*(y_inf - T3a.y) }
        drawSegment({ points: [p1, p2], color: cor_verde_neon, width: 0.07 })
        drawText({ text: "$a$", x: (p1.x+p2.x)/2 - 0.15, y: (p1.y+p2.y)/2 - 0.3,
            color: cor_verde_neon, fontSize: 0.4, opacity: s })
    }
})
