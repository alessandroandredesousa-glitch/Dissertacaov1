// ANIMAÇÃO: ex2 — Semelhança de Triângulos (problema com AM e CB)
// Status: CONCLUÍDA — usar como referência de estilo
//
// DESTAQUE PRINCIPAL: função congruencia(x, y) encapsulando o bloco de semelhança
// Escreve "△FCB ∼ △AMB" + "(AA)" logo abaixo, com offset (x,y) para reposicionamento.
// Diferente da função congruencia() da bissetriz (que usava translation),
// aqui o offset é somado diretamente às coordenadas — mais simples para uso pontual.
//
// Outros padrões notáveis:
// - Triângulo isósceles retângulo (45°-45°-90°): ângulos deduzidos via setor + texto
// - drawCurve com tStart/tEnd/steps:1 para extensão pontilhada da base
// - drawArrow com 4 pontos para seta em L (curva passando por waypoints)
// - Proporção de semelhança resolvida inline no canvas com drawText sequencial
// - M calculado algebricamente (175/169, 420/169) — ponto de interseção exato
// - Ângulo de 135° marcado com drawSector + drawText posicionado manualmente

//drawGrid({xMin: -5, xMax: 7, yMin: -10, yMax: 5,});
const laranja= '#f67821';
const verde = '#008000';
const roxo = "#993399";
const azulclaro = '#87cefa';
const dourado = '#FFD700';
const vermlehobordo ='#970000';
const A = {x:0, y: 0};
const B = {x: 7, y: 0};
const C = {x: -5, y: 5};
const D = {x: (A.x+C.x)/2,y: (A.y+C.y)/2};
const E = {x: (A.x+B.x)/2,y: (A.y+B.y)/2};
const M = {x: 175/169, y: 420/169};
const F = {x: -5, y: 0};
drawPolygon({ // desenhan o triangulo
    points:[A, B, C]
});

//------------ coloca aos pontos A, B, C
drawText({
    text: '$A$', x: A.x, y: A.y-0.5
});
drawText({
    text: '$B$', x: B.x, y: B.y-0.5
});
drawText({
    text: '$C$', x: C.x-0.2, y: C.y
});
//--------- final dos potnos A, B, C

drawSegment({ // desenha o segmento DE
    points: [D, E]
});
drawPoint({x: D.x, y: D.y, color: laranja, size: 0.05 // daz o ponto medio D
});
drawPoint({x: E.x, y: E.y, color: laranja, size: 0.05 //  faz ponto E
});

drawSector({ // desenha o angulo em A
    points: [B, A, C],
})
drawText({ // tamno do segmento CA
    text: '$5\\sqrt{2}$', x: D.x-0.3, y: D.y-0.5, rotation: 3*Math.PI/4+Math.PI
})
drawText({ // tamno do segmento AB
    text: '$7$', x: E.x, y: E.y-0.6,
})
drawPoint({
    x: M.x, y: M.y, color: vermlehobordo, size: 0.05,
})
drawText({
    text: '$M$', x: M.x+0.1, y: M.y+0.1,
})
drawPoint({
    x: A.x, y: B.y, color: vermlehobordo, size: 0.05,
});
drawSegment({
    points:[A, M], color: vermlehobordo
})
drawSector({
    points:[A, M, B],
})
drawText({
    text: '$135^\\circ$', x: 0.4, y: 0.4, fontSize: 0.4
})

pause()
 //------------ FIm ddos dados do enucniado


drawCurve({ // desenha a base AB
    x: t => t,
    y: t => 0,
    tStart: -6,
    tEnd: 0,
    steps: 1,
    lineDash: [0.2],
    color: dourado,
});
drawSegment({ // desenha reta CF
    points:[C, F], color: dourado, lineDash:[0.2]
})
drawText({
    text: '$F$', x: F.x, y: F.y-0.5,
})
drawPoint({ // faz o ponto F
    x: F.x, y: F.y, size: 0.05, color: dourado,
})

drawSector({ //desenha o angulode 90
    points: [A, F, C], color: dourado
})
pause() // antes de mostrar o angulos de 45 no triangulo FAC
drawSector({
    points: [C, A, F], radius: 0.4, color: dourado, fill: true
})
drawText({
    text: '$45^\\circ$', x: -0.7, y: 0.1, fontSize: 0.4
})
drawSector({
    points: [F, C, A], radius: 0.4, color: dourado, fill: true
})
drawText({
    text: '$45^\\circ$', x: C.x+0.2, y: C.y-0.8, fontSize: 0.4
})
pause()
// ---- calcula o lado FA

drawText({
    text: '$\\bar{FA}^2+\\bar{FC}^2=(5\\sqrt{2})^2 \\Rightarrow$', x: 0, y: -2
})
drawText({
    text: '$2\\cdot \\bar{FA}^2= 25\\cdot 2 \\Rightarrow \\bar{FA}=5$', x: 0, y: -3
})
drawText({
    text: '$5$', x: -2.5, y: -0.5
})
drawText({
    text: '$5$', x: -5.3, y: 2.5
})
pause()

// ----- PADRÃO REUTILIZÁVEL: bloco de semelhança encapsulado em função
// Uso: congruencia(offsetX, offsetY)
// Escreve o nome dos triângulos + tipo (AA) logo abaixo
// Offset somado diretamente às coordenadas (diferente do padrão translation da bissetriz)
function congruencia(x,y){
drawText({
    text: '$\\Delta FCB \\sim \\Delta AMB$', x: 0+x, y: -7+(y),
})
drawText({
    text: '$(AA)$', x: 0+x, y: -6.7+(y), fontSize: 0.3
})
drawText({
    text:'$\\Rightarrow $', x: 2.5+(x), y: -7+(y)
})
}
congruencia(-2.8, 2)

drawText({
    text: '$\\frac{\\bar{AB}}{\\bar{CB}}= \\frac{\\bar{MA}}{\\bar{CF}}\\Rightarrow $', fontSize: 0.7,
    x: 2.3,
    y: -5
})
pause()
drawArrow({
    points:[{x: 1, y: -5.5},{x: 1, y: -8}, {x: -2, y: -6},{x: -2, y: -8} ]
})

drawText({
    text: '$$\\bar{CB}^2=\\bar{CF}^2+\\bar{FB}^2 \\Rightarrow \\\\ \\bar{CB}^2=5^2+12^2 \\Rightarrow \\\\ \\bar{CB}=\\sqrt{169}=13$$', x: -2, y: -9, fontSize: 0.5
})

pause()
drawText({
    text: '$ \\frac{5}{13}=\\frac{\\bar{MA}}{5}$', fontSize: 0.7,
    x: 5.5,
    y: -5
})

drawText({
    text: '$\\bar{MA}=\\frac{25}{13}$', x: 4, y: -7
})
