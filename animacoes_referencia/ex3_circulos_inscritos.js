// ANIMAÇÃO: ex3 — Círculos Inscritos em Triângulo Equilátero
// Status: CONCLUÍDA — usar como referência de estilo
//
// Destaques desta animação:
// - Geometria analítica explícita: todos os centros e raios calculados algebricamente
//   (não aproximados) com frações de √3
// - 3 níveis de círculos: vermelho (inscrito principal, r = 7√3/6),
//   laranja (3 círculos médios, r = 7√3/18), verde (3 círculos menores, r = 7√3/54)
// - animation(circ_red, (cd) => { ... }) com translation dinâmica para "voar" os
//   círculos para fora do triângulo (efeito de separação)
// - animation aninhada: animation(raiover) faz guard (if rv<=0 return), depois
//   animation(triangulo, limpar2) dentro — padrão para condicionar exibição
// - limpar2 / limpar3: param para apagar elementos intermediários (opacity: 1-l)
// - drawSegmentMeasureMark com quantity e space para dividir altura em partes iguais
// - drawArrow com 3 pontos (curva) para apontar para elementos fora da tela
// - Triângulo auxiliar (A1, B1, C1) desenhado fora do principal para demonstrar
//   raio do círculo menor via semelhança
// - Conclusão: razão Área_círculos / Área_triângulo = 37√3π/243

//drawGrid({xMin: -5, xMax: 5, yMin: -5, yMax: 5});
const laranja= '#f67821'
const verde = '#008000';
const roxo = "#993399"
const azulclaro = '#87cefa'
const dourado = '#FFD700'
const vermlehobordo ='#970000'
// Definindo os pontos do triângulo equilátero
const A = { x: -7/2, y: 0 };   // Ponto A(-3.5, 0)
const B = { x: 7/2, y: 0 };    // Ponto B(3.5, 0)
const C = { x: 0, y: (7 * Math.sqrt(3)) / 2 };  // Ponto C(0, ~6.062)
const I = { x: 0, y: (7 * Math.sqrt(3)) / 6 }; // centro maior
const r = (7 * Math.sqrt(3)/6); // raio maior
const C_medioA = {// centro medio
  x: -7/3,
  y: (7 * Math.sqrt(3))/18
};
const r_medioA = (7 * Math.sqrt(3))/18; // raio medio
// Circunferência 2 (tangente a CA e CB)
const C_medioB = { x: 7/3, y: (7 * Math.sqrt(3))/18 };
const r_medioB = (7 * Math.sqrt(3))/18;
const C_medioC = { x: 0, y: 49*Math.sqrt(3)/18 };
const r_medioC = (7 * Math.sqrt(3))/18;
const r_menor = (7 * Math.sqrt(3))/54;
const C_menorA = {
    x: -28/9,  // Esquerda (AB, AC, C1)
    y: r_menor,
  }
const C_menorB = {
    x: 28/9,  // Esquerda (AB, AC, C1)
    y: r_menor,
  }
const M_CB = {x:(C.x+B.x)/2, y:(C.y+B.y)/2}
  const altura = param({
    value: 0, min: 0, max:1, step: 0.001, label: 'altura'
})
const P1 = { x: -7/6, y: 0 };
const P2 = { x: -7/3, y: (7 * Math.sqrt(3)) / 6 };
const inter_vl ={x: -35/12, y: 7*Math.sqrt(3)/36}
const raiover = param ({
    value: 0, min: 0, max: 1, step: 0.001, label: 'raio vermelhor'
})
const inter_red_orange = {x: -7/4, y: 7*Math.sqrt(3)/12,}
const larannja_BC = {x: 35/12, y: 7*Math.sqrt(3)/12};
const triangulo = param({
    value: 0, min: 0, max: 1, step: 0.001, label: 'triangulo'
})
const text_raiomenor = param({
    value: 0, min: 0, max: 1, step: 0.001, label:'text raio menor', x: -6
})
const limpar2 = param({
    value: 0, min: 0, max: 1, step: 0.001, label: 'limpar2a'
});
const P3 = {x: -49/18, y: 0};
const P4 = {x: -28/9, y: 7*Math.sqrt(3)/18};
const A1 = { x: -2.5+1.5, y: -6 };
const B1 = { x: 2.5+1.5, y: -6 };  // 5 unidades à direita de A1 (mesmo y)
const C1 = {
  x: 0+1.5,  // Ponto médio entre A1 e B1
  y: -6 + (5 * Math.sqrt(3)) / 2  // Altura do triângulo equilátero
};
const R1 = (5 * Math.sqrt(3)) / 6;  // Raio do círculo inscrito
const C1_verde = { x: +1.5, y: -6 + (5 * Math.sqrt(3)) / 6 };  // Centro do círculoinscrito
const M1 = {
  x: (B1.x + C1.x) / 2,  // (4.0 + 1.5)/2 = 2.75 (exato)
  y: (B1.y + C1.y) / 2   // (-6 + (-6 + (5√3)/2))/2 = -6 + (5√3)/4 (exato)
};
const text_r_menor= param ({
    value: 0, min: 0, max: 1, step: 0.001, label: 'texto raio mewnor'
})
const limpar3= param ({
    value: 0, min: 0, max: 1, step: 0.001, label: 'limpar 3'
})
const circ_red= param ({
    value: 0, min: 0, max: 1, step: 0.001, label: 'circ vermelho'
})

//// -------

drawPolygon({
    points: [A, B, C]
});
animation(circ_red, (cd) => {
drawCircle({ //circunferencia maior
    center: {x: I.x, y: I.y },
    radius: r,
    color: vermlehobordo,
    opacity: 0.7,
    fill: true,
    fillColor: vermlehobordo, width:0.02,
    translation: {x: -2*cd, y: -5*cd}
    });

drawCircle({ //circunferencia media esquerda
    center: {x: C_medioA.x, y: C_medioA.y },
    radius: r_medioA,
    color: laranja,
    opacity: 0.7,
    fill: true,
    fillColor: laranja, width: 0.02,
    translation: {x: -0.5*cd, y: -7*cd}
    });
drawCircle({ //circunferencia media diretra
    center: {x: C_medioB.x, y: C_medioB.y },
    radius: r_medioB,
    color: laranja,
    opacity: 0.7,
    fill: true,
    fillColor: laranja, width:0.02,
    translation: {x: -3.7*cd, y: -7*cd}
    });
drawCircle({ //circunferencia media top
    center: {x: C_medioC.x, y: C_medioC.y },
    radius: r_medioC,
    color: laranja,
    opacity: 0.7,
    fill: true,
    fillColor: laranja, width:0.02,
    translation: {x: -2.1*cd, y: -12.3*cd}
    });
drawCircle({ //circunferencia esquerda pequena
    center: {x: C_menorA.x, y: C_menorA.y },
    radius: r_menor,
    color: verde,
    opacity: 0.7,
    fill: true,
    fillColor: verde, width: 0.02,
    translation: {x: 0.7*cd, y: -9.2*cd}
    });
drawCircle({ //circunferencia pequena diretia
    center: {x: C_menorB.x, y: C_menorB.y },
    radius: r_menor,
    color: verde,
    opacity: 0.7,
    fill: true,
    fillColor: verde, width: 0.02, translation: {x: -5*cd, y: -9.2*cd}
    });
drawCircle({ //circunferencia peqiena top
    center: {x: 0, y: 2*r+2*r_medioA+r_menor},
    radius: r_menor,
    color: verde,
    opacity: 0.7,
    fill: true,
    fillColor: verde, width: 0.02, translation: {x: -2.15*cd, y: -15.1*cd}
    });
})

drawSegmentLength({
    points:[A, B],
    translation: {x: 0, y: -0.3}
})
drawText({
    text: '7 cm', x: 0, y: -0.8, fontSize: 0.5
})
//------ fianl enunciado

pause()// pause ennunciado

// --- fazer a altura do traingulo
drawSegment({
    points: [C, {x: 4, y: C.y}], lineDash:[0.1]
})
drawSegment({
    points: [B, {x: 4, y: 0}], lineDash:[0.1]
})
drawArrow({
    points:[{x: 4, y: 0}, {x: 4, y: C.y}],
})
drawArrow({
    points:[{x: 4, y: C.y}, {x: 4, y: 0}],
})
pause()

animation(altura, a => {
    drawText({
        text:'$$h^2=7^2-(\\frac{7}{2})^2 \\Rightarrow h= \\frac{7\\sqrt{3}}{2}$$',
        x:0, y: -4, opacity: 1-a
    })
})

drawText({
    text: '$\\frac{7\\sqrt{3}}{2}$', x:4.5, y:2.5
})

pause()
// ----- final da alltura

// desenha segmentos de alturas
drawPoint({// ponto medio de BC
    x: M_CB.x, y: M_CB.y, width: 0.06
})
drawSegment({
    points:[A, M_CB]
});
drawSector({
    points:[A, M_CB, B]
})

drawSegment({
    points:[C, {x:0, y:0}]
})
drawSector({
    points:[B, {x:0, y:0}, C]
}),
drawPoint({
    x: I.x, y: I.y, width: 0.07
})
pause()

animation(raiover, (rv) =>{
    drawText({
        text: '$R_{V}=\\frac{1}{3}\\cdot h=\\frac{1}{3} \\cdot \\frac{7\\sqrt{3}}{2}= \\frac{7\\sqrt{3}}{6}$', x:0, y:-4, opacity: 1-rv
    })
})

drawText({
    text:'$\\frac{7\\sqrt{3}}{6}$', fontSize: 0.4, x: 0.8, y: 2.7, rotation: Math.PI/6
})
pause()
drawText({
    text:'$\\frac{7\\sqrt{3}}{6}$', fontSize: 0.4, x: -1, y: 1.7, rotation: Math.PI/6
})
pause()
drawSegmentLength({
    points: [A, {x: -1.8, y: 1}], translation: {x: -0.1, y: 0.25}
})
drawText({ //tamanho do ultimo 1/3
    text:'$\\frac{7\\sqrt{3}}{6}$', fontSize: 0.4, x: A.x+0.8, y: 1, rotation: Math.PI/6
})
pause()
//---- final segmento dfe altuiras

drawSegment({ // faz o segmebnto que forma o triangulo
    points: [P1, P2]
})

drawPoint({ // faz o ponto de tangencia
    x: -7/4, y: 7*Math.sqrt(3)/12,
})

animation (raiover, (rv) =>{
    if (rv<=0) {
        return
    } else {
        animation(triangulo, limpar2, (t,l) => {
        drawPolygon({
            points:[A, P1, P2], translation:{x:0*t, y: -5*t}, opacity: 1-l
        })
        drawCircle({ //circunferencia PEQUENA ESQUERDA
            center: {x: C_menorA.x, y: C_menorA.y },
            radius: r_menor,
            color: verde,
            opacity: 0.7-l*0.7,
            fill: true,
            fillColor: verde, width: 0.02,
            translation:{x:0*t, y: -5*t}
        });
        drawCircle({ //circunferencia media esquerda
            center: {x: C_medioA.x, y: C_medioA.y },
            radius: r_medioA,
            color: laranja,
            opacity: 0.7-l*0.7,
            fill: true,
            fillColor: laranja, width: 0.02,
            translation:{x:0*t, y: -5*t}
        });
        drawSegment({
            points:[A, {x: -7/4, y: 7*Math.sqrt(3)/12,}],
            translation:{x:0*t, y: -5*t}, opacity: 1-l
        })
        })
    }
})
pause()

animation(text_raiomenor, (tr) => { //some raio 1/3
    drawText({ //tamanho do ultimo 1/3
    text:'$\\frac{7\\sqrt{3}}{6}$', fontSize: 0.3, x: A.x+0.8, y: 1, rotation: Math.PI/6,
    translation: {x:0, y: -5.3}, opacity:1 -tr,
})
})

pause()
// ------ animar desnaparecer
animation(limpar2, (l) => {
    drawSector({ //desenha angulo de 90
        points:[A, inter_red_orange, P1], translation: {x: 0, y: -5}, opacity: 1-l
    })
    pause()
    drawSector({ //desenha angulo de 60
        points:[inter_red_orange, P1, A], translation: {x: 0, y: -5}, opacity: 1-l
    })
    drawText({ //escreve 60
        text:'$60^\\circ$', x: -1.6, y: 0.1, fontSize: 0.25, translation: {x: 0, y: -5}, opacity: 1-l
    })
    pause()

    drawSegmentMeasureMark({// divide em tres a altura
        quantity: 2,
        space: r_medioA,
        points: [A, {x: -1.8, y: 1}], translation: {x: 0, y: -5}, size:0.1, opacity: 1-l
    })
    drawText({ //escreve a altura dividida
        text: '$\\frac{7\\sqrt{3}}{18}$', x: -2.15, y: -4.05, rotation: Math.PI/6, fontSize: 0.3, opacity: 1-l
    })
    drawText({  //escreve a altura dividida
        text: '$\\frac{7\\sqrt{3}}{18}$', x: -2.75, y: -4.4, rotation: Math.PI/6, fontSize: 0.3, opacity: 1-l
    })
    drawText({ //escreve a altura dividida
        text: '$\\frac{7\\sqrt{3}}{18}$', x: -3.25, y: -4.7, rotation: Math.PI/6, fontSize: 0.3, opacity: 1-l
    })

// finbal do sumir
}) // final animacao

pause()

// faz o raio no desenho original
drawPoint({
    x: larannja_BC.x,
    y: larannja_BC.y
})

drawSegment({
    points: [C_medioB, larannja_BC]
})
drawText({
    text: '$\\frac{7\\sqrt{3}}{18}$', x: 2.5, y:0.95, rotation: Math.PI/6, fontSize: 0.3
})
pause()
// ------ fianl raio laranja

drawPoint({
    x: inter_vl.x, y: inter_vl.y, size: 0.04,
})
drawSegment({
    points:[P3, P4]
})
pause()
animation(limpar3, l => {
        // ultimo raio verde ----  animar
    drawPolygon({
        points: [A1, B1, C1], opacity: 1-l
    })
    drawCircle({
        center:{x: C1_verde.x, y: C1_verde.y }, radius: R1, color: verde, opacity: 0.7-l*0.7,
        fill: true,
    })
    drawSegment({
        points:[A1, M1], opacity: 1-l
    })
    // ---------- final animar
})


animation(text_r_menor, (r) => { // INIOC ANIMACAO
    drawText({
        text: '$\\frac{7\\sqrt{3}}{18}$', x: 1, y: -4.5, opacity: 1-r
    })
}) // FINAL ANIMAÇÃO

animation(limpar3, (l) => {
        // -----SUMIR----
    drawSector({
        points:[A1, M1, B1], opacity: 1-l
    })
    pause()
    drawSegmentMeasureMark({
        size:0.3, quantity: 2, space: R1, points:[A1, M1], opacity: 1-l
    })

    drawText({
        text: '$\\frac{7\\sqrt{3}}{54}$', x: 1.9, y: -4, rotation: Math.PI/6, opacity: 1-l
    })
    drawText({
        text: '$\\frac{7\\sqrt{3}}{54}$', x: 0.7, y: -4.7, rotation: Math.PI/6, opacity: 1-l
    })
    drawText({
        text: '$\\frac{7\\sqrt{3}}{54}$', x: -0.5, y: -5.4, rotation: Math.PI/6, opacity: 1-l
    })
    // final raio verde
    // FINAL SUMIR
})


// escrever raio verde
pause()
drawArrow({
    points:[C_menorB,{x: 3, y: -1} ,{x: 4, y: -1}],
})
drawText({
    text: '$R_v=\\frac{7\\sqrt{3}}{54}$', x: 5, y: -1.2, fontSize: 0.5
})
pause()

//- vermelhor
drawPoint({
    x: I.x,
    y: I.y,
    translation: {x: -2, y: -5}
})
drawSegment({
    points:[I, M_CB],
    translation: {x: -2, y: -5}
})
drawText({
    text:'$\\frac{7\\sqrt{3}}{6}$', fontSize: 0.5, x: 0.8, y: 2.8, rotation: Math.PI/6, translation: {x: -2, y: -5}
})
// - laranja
// faz o raio no desenho original
drawPoint({
    x: C_medioB.x, y: C_medioB.y, translation: {x: -3.7, y: -7}
})
drawSegment({
    points: [C_medioB, larannja_BC], translation: {x: -3.7, y: -7}
})
drawText({
    text: '$\\frac{7\\sqrt{3}}{18}$', x: 2.5, y:0.95, rotation: Math.PI/6, fontSize: 0.4, translation: {x: -3.7, y: -7}
})
// ------ fianl raio laranja
drawArrow({
    points:[C_menorB,{x: 3, y: -1} ,{x: 4, y: -1}], translation: {x: -5, y: -9.2}
})
drawText({
    text: '$R_v=\\frac{7\\sqrt{3}}{54}$', x: 5, y: -1.2, fontSize: 0.5, translation: {x: -5, y: -9.2}
})
pause()

drawText({ // --- area vermelhra
    text: '$A_v=\\pi \\cdot r^2= \\pi \\cdot (\\frac{7\\sqrt{3}}{6})^2 =$', x: 3, y: -3, fontSize: 0.6
})

drawText({
    text: '$\\frac{49 \\pi}{12}$', x: 3, y: -4, fontSize: 0.6
})
pause()
drawText({// area laranja
    text: '$A_l=3\\pi \\cdot (\\frac{7\\sqrt{3}}{18})^2=\\frac{49 \\pi}{36}$', x: 3, y: -7
})

drawText({
    text: '$A_v=3\\pi \\cdot (\\frac{7\\sqrt{3}}{18})^2=\\frac{49 \\pi}{324}$', x: 3.5, y: -9
})
pause()
drawText({
    text: 'Área dos círculos: \\\\ $A_\\circ=\\frac{49 \\pi}{12}+\\frac{49 \\pi}{36}+\\frac{49 \\pi}{324}= \\frac{37\\cdot 49\\pi}{324}$', x: 0, y: -12,
})
pause()
drawText({
    text: 'Área do triângulo: \\\\ $A_\\Delta= \\frac{l^2\\cdot \\sqrt{3}}{4}= \\frac{7^2\\sqrt{3}}{4}=\\frac{49\\sqrt{3}}{4}$', x: -0.6, y: -14,
})
pause()
drawText({
    text: 'Razão entre as Áreas: \\\\$R_{\\circ\\Delta}=\\frac{A_\\circ}{A_\\Delta}= \\frac{ \\frac{37\\cdot 49\\pi}{324}}{\\frac{49\\sqrt{3}}{4}}=\\frac{37\\sqrt{3}\\pi}{243}$', x: -0.6, y: -17,
})
