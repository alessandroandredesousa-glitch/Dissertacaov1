// ============================================================
// EXEMPLO: Retas Paralelas e Transversal (1.8.1)
// Arquivo: paralelas_exemplo.js
// Referência de: paralelas.js (versão final)
//
// TÉCNICAS DEMONSTRADAS:
//   1. Reta como seta dupla + segmento (seção 8.18 do guia)
//   2. Reta móvel animada com dois params (seção 8.19)
//   3. Prevenção de lápis fantasma com guards if (seção 8.16)
//   4. Dois params simultâneos: aparecer + sumir (seção 8.17)
//   5. Setores para destacar tipos de ângulos
//   6. Rótulos estáticos de ângulos (1–8) com coordenadas manuais
//   7. Padrão "apagar/redesenhar": setores visíveis por padrão, sumidos por param
// ============================================================

// drawGrid({ xMin: -6, xMax: 6, yMin: -5, yMax: 5 })

// === CORES ===
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

// === GEOMETRIA ===
const yA = 0.8
const yB_final = yA - 2.8   // posição de b quando separar=1

// Pontos fixos da transversal e interseções (calculados manualmente com grid)
const C = { x: -2, y: yB_final }   // reta b: extremo esquerdo quando separada
const D = { x:  2, y: yB_final }   // reta b: extremo direito quando separada
const A = { x: -4.5, y: yA }       // reta a: extremo esquerdo
const B = { x:  4.5, y: yA }       // reta a: extremo direito
const E = { x: -2,   y: 3 }        // transversal: ponta superior
const F = { x:  2,   y: -4 }       // transversal: ponta inferior
const Inter1 = { x: -0.74, y: 0.79 }   // interseção da transversal com reta a
const Inter2 = { x:  0.85, y: -2.01 }  // interseção da transversal com reta b

// === TÍTULO ===
drawText({
    text: "\\begin{center}\\textbf{Retas Paralelas e Transversal}\\end{center}",
    x: 0, y: 3.8, fontSize: 0.65, color: cor_titulo
})

// ============================================================
// TÉCNICA 1: PARAMS PARA A ANIMAÇÃO INICIAL
//   - separar: move reta b de yA (coincide com a) até yB_final
//   - sumir_paralelo: apaga o texto "a∥b" independentemente
// ============================================================
const separar = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Separar',
    buttons: [{ value: 1, time: 2.5 }, { value: 0, time: 2.5 }]
})

const sumir_paralelo = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Sumir a∥b',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})

// ============================================================
// TÉCNICA 2: RETA COMO SETA DUPLA + SEGMENTO
//   - Duas setas apontando para fora + segmento central
//   - Reta a é estática (fixa)
// ============================================================
drawArrow({ points: [{ x: -3.5, y: yA }, { x: -4.5, y: yA }], color: cor_azul_eletrico, size: 0.2 })
drawSegment({ points: [{ x: -4, y: yA }, { x: 4, y: yA }], color: cor_azul_eletrico, width: 0.06 })
drawArrow({ points: [{ x:  3.5, y: yA }, { x:  4.5, y: yA }], color: cor_azul_eletrico, size: 0.2 })
drawText({ text: "$a$", x: -4.3, y: yA + 0.38, fontSize: 0.55, color: cor_azul_eletrico })

// ============================================================
// TÉCNICA 3: RETA MÓVEL COM 2 PARAMS
//   - s (separar): desloca reta b verticalmente
//   - st (sumir_paralelo): apaga texto "a∥b"
// TÉCNICA 4: PREVENÇÃO DE LÁPIS FANTASMA
//   - if (s < 0.2): guarda fade-out do texto "coincidem"
//   - if (s > 0.15 && st < 0.98): guarda dupla para texto "a∥b"
// ============================================================
animation(separar, sumir_paralelo, (s, st) => {
    const yB = yA - 2.8 * s   // yB interpola de yA (s=0) até yB_final (s=1)

    // Reta b (mesma estrutura que a, mas dinâmica)
    drawArrow({ points: [{ x: -3.5, y: yB }, { x: -4.5, y: yB }], color: cor_rosa_choque, size: 0.2 })
    drawSegment({ points: [{ x: -4, y: yB }, { x: 4, y: yB }], color: cor_rosa_choque, width: 0.06 })
    drawArrow({ points: [{ x:  3.5, y: yB }, { x:  4.5, y: yB }], color: cor_rosa_choque, size: 0.2 })
    drawText({ text: "$b$", x: 4.3, y: yB + 0.38, fontSize: 0.55, color: cor_rosa_choque })

    // Texto "coincidem": guarda if (s < 0.2) previne lápis fantasma em s=0.2+
    if (s < 0.2) {
        drawText({
            text: "\\begin{center}$a$ e $b$ \\textbf{coincidem}\\\\(infinitos pontos em comum)\\end{center}",
            x: 0, y: -0.8, fontSize: 0.48, color: cor_amarelo_neon, opacity: 1 - s * 5
        })
    }

    // Texto "a∥b": guarda dupla (fade-in via s, fade-out via st)
    if (s > 0.15 && st < 0.98) {
        const alpha_par = Math.min(1, (s - 0.15) * 5) * (1 - st)
        drawText({ text: "\\begin{center}$a \\parallel b$\\end{center}",
            x: 0, y: -0.8, fontSize: 0.65, color: cor_verde_neon, opacity: alpha_par })
        drawText({ text: "\\begin{center}nenhum ponto em comum\\end{center}",
            x: 0, y: -1.4, fontSize: 0.46, color: cor_verde_neon, opacity: alpha_par })
    }
})

pause()

// Transversal (estática, aparece depois do pause)
drawArrow({ points: [E, F] })
drawArrow({ points: [F, E] })

// ============================================================
// TÉCNICA 5: SETORES PARA TIPOS DE ÂNGULOS
//   Numeração CCW a partir do upper-left em cada interseção:
//   Inter1: 1=[E,Inter1,A] 2=[B,Inter1,E] 3=[F,Inter1,B] 4=[A,Inter1,F]
//   Inter2: 5=[E,Inter2,C] 6=[D,Inter2,E] 7=[F,Inter2,D] 8=[C,Inter2,F]
// ============================================================
const p_corresp = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Correspondentes',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})
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
const p_colaterais = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Colaterais internos',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})

// Correspondentes: ângulos 1 e 5 (mesma posição relativa)
animation(p_corresp, (s) => {
    drawSector({ points: [E, Inter1, A], radius: 0.5, fill: true, fillColor: cor_coral, opacity: 0.8*s })
    drawSector({ points: [E, Inter2, C], radius: 0.5, fill: true, fillColor: cor_coral, opacity: 0.8*s })
    if (s > 0.02) {  // guarda: sem lápis fantasma
        drawText({
            text: "\\begin{center}\\textbf{Ângulos correspondentes:}\\\\mesma posição relativa em cada reta\\end{center}",
            x: 0, y: -3.0, fontSize: 0.44, color: cor_coral, opacity: s
        })
    }
})

// Alternos internos: ângulos 3 e 5 (entre as retas, lados opostos)
animation(p_internos, (s) => {
    drawSector({ points: [F, Inter1, B], radius: 0.5, fill: true, fillColor: cor_azul_eletrico, opacity: 0.8*s })
    drawSector({ points: [E, Inter2, C], radius: 0.5, fill: true, fillColor: cor_azul_eletrico, opacity: 0.8*s })
    if (s > 0.02) {
        drawText({
            text: "\\begin{center}\\textbf{Ângulos alternos internos:}\\\\entre as retas, lados opostos da transversal\\end{center}",
            x: 0, y: -3.0, fontSize: 0.44, color: cor_azul_eletrico, opacity: s
        })
    }
})

// Alternos externos: ângulos 1 e 7 (fora das retas, lados opostos)
animation(p_externos, (s) => {
    drawSector({ points: [E, Inter1, A], radius: 0.5, fill: true, fillColor: cor_rosa_choque, opacity: 0.8*s })
    drawSector({ points: [F, Inter2, D], radius: 0.5, fill: true, fillColor: cor_rosa_choque, opacity: 0.8*s })
    if (s > 0.02) {
        drawText({
            text: "\\begin{center}\\textbf{Ângulos alternos externos:}\\\\fora das retas, lados opostos da transversal\\end{center}",
            x: 0, y: -3.0, fontSize: 0.44, color: cor_rosa_choque, opacity: s
        })
    }
})

// Colaterais internos: ângulos 3 e 6 (entre as retas, mesmo lado)
animation(p_colaterais, (s) => {
    drawSector({ points: [F, Inter1, B], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: 0.8*s })
    drawSector({ points: [D, Inter2, E], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: 0.8*s })
    if (s > 0.02) {
        drawText({
            text: "\\begin{center}\\textbf{Ângulos colaterais internos:}\\\\entre as retas, mesmo lado da transversal\\end{center}",
            x: 0, y: -3.0, fontSize: 0.44, color: cor_dourado, opacity: s
        })
    }
})

pause()

// ============================================================
// TÉCNICA 6: RÓTULOS ESTÁTICOS 1–8 COM POSIÇÕES MANUAIS
//   Ajustados visualmente com drawGrid. Declarados APÓS o
//   pause() para aparecerem antes da seção "quais são iguais".
// ============================================================
const fl = 0.36

// Inter1 = (-0.74, 0.79)
drawText({ text: "$\\hat{1}$", x: -1.37, y: 1.09, fontSize: fl, color: cor_ciano })  // upper-left
drawText({ text: "$\\hat{2}$", x: -0.37, y: 1.24, fontSize: fl, color: cor_ciano })  // upper-right
drawText({ text: "$\\hat{3}$", x: -0.03, y: 0.24, fontSize: fl, color: cor_ciano })  // lower-right
drawText({ text: "$\\hat{4}$", x: -1.1,  y: 0.07, fontSize: fl, color: cor_ciano })  // lower-left

// Inter2 = (0.85, -2.01)
drawText({ text: "$\\hat{5}$", x:  0.29, y: -1.73, fontSize: fl, color: cor_ciano })  // upper-left
drawText({ text: "$\\hat{6}$", x:  1.26, y: -1.55, fontSize: fl, color: cor_ciano })  // upper-right
drawText({ text: "$\\hat{7}$", x:  1.49, y: -2.55, fontSize: fl, color: cor_ciano })  // lower-right
drawText({ text: "$\\hat{8}$", x:  0.46, y: -2.76, fontSize: fl, color: cor_ciano })  // lower-left

pause()

// ============================================================
// TÉCNICA 7: PADRÃO "APAGAR/REDESENHAR"
//   - Setores visíveis por padrão (lápis desenha ao entrar na cena)
//   - Param "sumir" controla o desaparecimento via opacity: 1-s
//   - Guarda if (s < 0.98) previne lápis fantasma no drawText
//   - O lápis "redesenha" quando o param volta a 0
//   Cada tipo de ângulo tem seu próprio param independente.
// ============================================================

const sumir_corresp = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Apagar / Redesenhar',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})
animation(sumir_corresp, (s) => {
    drawSector({ points: [E, Inter1, A], radius: 0.5, fill: true, fillColor: cor_coral, opacity: 1 - s })
    drawSector({ points: [E, Inter2, C], radius: 0.5, fill: true, fillColor: cor_coral, opacity: 1 - s })
    if (s < 0.98) {  // guarda: sem lápis fantasma
        drawText({ text: "\\begin{center}$\\hat{1} \\equiv \\hat{5}$ — correspondentes\\end{center}",
            x: 0, y: -3.0, fontSize: 0.46, color: cor_coral, opacity: 1 - s })
    }
})

pause()

const sumir_internos = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Apagar / Redesenhar',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})
animation(sumir_internos, (s) => {
    drawSector({ points: [F, Inter1, B], radius: 0.5, fill: true, fillColor: cor_azul_eletrico, opacity: 1 - s })
    drawSector({ points: [E, Inter2, C], radius: 0.5, fill: true, fillColor: cor_azul_eletrico, opacity: 1 - s })
    if (s < 0.98) {
        drawText({ text: "\\begin{center}$\\hat{3} \\equiv \\hat{5}$ — alternos internos\\end{center}",
            x: 0, y: -3.0, fontSize: 0.46, color: cor_azul_eletrico, opacity: 1 - s })
    }
})

pause()

const sumir_externos = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Apagar / Redesenhar',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})
animation(sumir_externos, (s) => {
    drawSector({ points: [E, Inter1, A], radius: 0.5, fill: true, fillColor: cor_rosa_choque, opacity: 1 - s })
    drawSector({ points: [F, Inter2, D], radius: 0.5, fill: true, fillColor: cor_rosa_choque, opacity: 1 - s })
    if (s < 0.98) {
        drawText({ text: "\\begin{center}$\\hat{1} \\equiv \\hat{7}$ — alternos externos\\end{center}",
            x: 0, y: -3.0, fontSize: 0.46, color: cor_rosa_choque, opacity: 1 - s })
    }
})

pause()

const sumir_colaterais = param({
    value: 0, min: 0, max: 1, step: 0.001,
    label: 'Apagar / Redesenhar',
    buttons: [{ value: 1, time: 0.8 }, { value: 0, time: 0.5 }]
})
animation(sumir_colaterais, (s) => {
    drawSector({ points: [F, Inter1, B], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: 1 - s })
    drawSector({ points: [D, Inter2, E], radius: 0.5, fill: true, fillColor: cor_dourado, opacity: 1 - s })
    if (s < 0.98) {
        drawText({ text: "\\begin{center}$\\hat{3} + \\hat{6} = 180°$ — colaterais internos (suplementares)\\end{center}",
            x: 0, y: -3.0, fontSize: 0.46, color: cor_dourado, opacity: 1 - s })
    }
})
