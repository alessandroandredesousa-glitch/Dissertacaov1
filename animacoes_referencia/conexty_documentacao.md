# Documentação Conexty — Referência Rápida

## Sistema de Coordenadas
- Centro da tela: `(0, 0)`
- Eixo X: -5 (esquerda) a +5 (direita)
- Eixo Y: valores negativos = baixo, positivos = cima

---

## Parâmetros Comuns (BasePlotParams)
Disponíveis em quase todas as funções de desenho:

| Parâmetro | Descrição |
|---|---|
| `color` | Cor do contorno (nome ou código hex) |
| `opacity` | Transparência: 0 = invisível, 1 = opaco |
| `width` | Espessura da linha (padrão: 0.05) |
| `lineDash` | Linha tracejada. Ex: `[0.1, 0.05]` |
| `fill` | `true` para preencher a forma |
| `fillColor` | Cor de preenchimento (quando `fill: true`) |
| `rotation` | Rotação em **radianos** (exceto `drawText`, que usa **graus**) |
| `rotationOrigin` | Ponto `{x, y}` de pivô da rotação (padrão: origem) |
| `translation` | Move o elemento: `{x, y}` |

> ⚠️ **Ordem de transformações:** rotação acontece **antes** da translação, sempre. A rotação ocorre no sistema de coordenadas original do elemento. Só depois o elemento é transportado pela translação. Calcular ângulos em relação à posição final (após translação) dá resultado errado.|
| `colorOnDark` / `colorOnLight` | Cores alternativas por fundo |

---

## Funções de Desenho

### `drawPoint`
```javascript
drawPoint({ x: 1, y: 1, size: 0.08, color: 'red', opacity: 0.8 })
```

### `drawSegment`
```javascript
drawSegment({ points: [{x:-2,y:0},{x:2,y:0}], color: 'green' })
// múltiplos pontos formam polilinha (segmentos conectados)
```

### `drawPolygon`
```javascript
drawPolygon({ points: [A, B, C], fill: true, fillColor: '#87cefa' })
// drawLast: false → não fecha o polígono
```

### `drawArrow`
```javascript
drawArrow({ points: [A, B] })                          // seta reta
drawArrow({ points: [A, {x:0,y:-3}, B] })              // seta curva (3 ou 4 pontos)
// ponta sempre no último ponto
```

### `drawCircle`
```javascript
drawCircle({ center: {x:0, y:0}, radius: 2, fill: true, fillColor: 'yellow' })
```

### `drawEllipse`
```javascript
drawEllipse({ center: {x:0,y:0}, radiusX: 3, radiusY: 1.5 })
```

### `drawSector`
```javascript
// points: [P1, CENTRO, P3] — centro é o segundo ponto
drawSector({ points: [B, A, C], radius: 0.7, fill: true, fillColor: '#FF6600' })
// measureMarks: número de marcas no arco
```

### `drawArc`
```javascript
drawArc({ center: {x:0,y:0}, radius: 2, startAngle: 0, endAngle: Math.PI, steps: 50 })
// ângulos em radianos: 0=direita, PI/2=cima, PI=esquerda, 3*PI/2=baixo
```

### `drawCurve`
```javascript
drawCurve({ x: t => 2*Math.cos(t), y: t => 2*Math.sin(t), tStart: 0, tEnd: 2*Math.PI, steps: 100 })
```

### `drawMultiCurve`
```javascript
drawMultiCurve({
    parametrizations: [
        { x: t => 4*Math.cos(t), y: t => 4*Math.sin(t), tStart: 0, tEnd: 2*Math.PI, steps: 100 },
        { x: t => 2*Math.cos(t), y: t => 2*Math.sin(t), tStart: 0, tEnd: 2*Math.PI, steps: 100 },
    ],
    color: 'green'
})
```

### `drawText`
```javascript
drawText({ text: 'Olá', x: 0, y: 0, fontSize: 0.5, color: 'green', verticalCenter: true })
// ⚠️ rotation em GRAUS (diferente das outras funções que usam radianos)
// maxWidth: largura máxima antes de quebrar linha
// lineHeight: altura de linha (padrão: 120)
```

### `drawSegmentLength`
```javascript
// Como drawSegment, mas adiciona marcas visuais de comprimento
drawSegmentLength({ points: [{x:-4,y:0},{x:4,y:0}], size: 0.3 })
// Espera exatamente 2 pontos
```

### `drawSegmentMeasureMark`
```javascript
// Adiciona marcas de congruência em segmentos
drawSegmentMeasureMark({ points: [A, B], size: 0.3, quantity: 2, space: 0.15, color: '#00FFFF' })
// Espera exatamente 2 pontos
// quantity: número de marcas (1, 2, 3... para indicar lados iguais)
// space: espaço entre marcas quando quantity > 1
```

### `drawGrid`
```javascript
// Útil para desenvolvimento — comentar no código final
drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })
```

---

## Controles Interativos

### `param`
```javascript
const meuParam = param({
    value: 0,       // valor inicial
    min: 0,         // mínimo
    max: 1,         // máximo
    step: 0.001,    // incremento
    label: 'Nome',  // rótulo exibido
    buttons: [      // botões de animação automática
        { value: 1, time: 2 },   // anima até 1 em 2 segundos
        { value: 0, time: 2 }    // volta a 0 em 2 segundos
    ]
})
```

### `animation`
```javascript
// Executada toda vez que os params mudam
animation(param1, param2, (v1, v2) => {
    // v1 e v2 são os valores atuais dos params
    drawCircle({ center: {x:0,y:0}, radius: v1 })
})
```

**Limitações importantes:**
- Variáveis declaradas dentro de `animation()` são locais — usar `let` global e atualizar dentro
- `animation()` não suporta `return` de valores para escopo externo
- O que está no `else` aparece instantaneamente, sem animação progressiva
- `animation` aninhada: declarar `animation` dentro de `animation` é possível mas requer cuidado

### `pause`
```javascript
pause()  // sem parâmetros — congela a cena até interação do usuário
// dentro de animation(): separa etapas da animação
```

---

## Convenções do Projeto (Geometria Demonstrada)

### LaTeX no site (MathJax)
- Ângulos: `\\(C\\widehat{A}B\\)` — `\\widehat{}` na letra do meio
- Segmentos: `\\(\\overline{AB}\\)`
- Semirretas: `\\(\\overrightarrow{AB}\\)`
- Display: `\\[ ... \\]` / Inline: `\\( ... \\)`
- Fim de prova: `<p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>`

### LaTeX no Conexty
- Ângulos: `$C\\hat{A}B$` — usar `\\hat` (não `\\widehat`)
- `\\hat{}` não funciona bem em minúsculas (ex: `e`) — usar letra grega
- `\\begin{center}...\\end{center}` funciona **fora** do ambiente matemático (ex: títulos com `drawText`)
- Cores: `\\textcolor{#codigo}{texto}`
- Negrito: `\\textbf{texto}`
- Listas: `\\begin{itemize}\\item ...\\end{itemize}` funciona **fora** de `$$`

### Cores padrão do projeto
```javascript
const cor_amarelo_neon  = '#FFFF00'
const cor_ciano         = '#00FFFF'
const cor_verde_neon    = '#39FF14'
const cor_laranja       = '#FF6600'
const cor_rosa_choque   = '#FF1493'
const cor_roxo_neon     = '#BF00FF'
const cor_azul_eletrico = '#00B0FF'
const cor_coral         = '#FF6B6B'
const cor_verde_menta   = '#00FA9A'
const cor_vermelho_bordo= '#970000'
// legacy (animações antigas)
const laranja      = '#f67821'
const verde        = '#008000'
const roxo         = "#993399"
const azulclaro    = '#87cefa'
const dourado      = '#FFD700'
```
