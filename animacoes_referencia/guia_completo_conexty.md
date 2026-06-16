# Guia Completo Conexty — Geometria Demonstrada
> Referência acumulada de todas as animações produzidas até 2026.
> Consultar este arquivo no início de cada sessão de trabalho.

---

## 1. SISTEMA DE COORDENADAS

- Centro da tela: `(0, 0)`
- Eixo X: esquerda (negativo) → direita (positivo)
- Eixo Y: baixo (negativo) → cima (positivo)
- Limite visual aproximado: x ∈ [-5, 5], y ∈ [-5, 8]
- Textos e elementos podem ultrapassar esses limites (ex: título em y=9.5, conclusão em y=-8)
- Para descobrir coordenadas: ativar `drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })` durante desenvolvimento, comentar no final

---

## 2. FUNÇÕES DE DESENHO

### drawPoint
```javascript
drawPoint({ x: 1, y: 1, size: 0.06, color: 'white', opacity: 1 })
```
- `size`: raio do ponto (padrão ~0.05–0.08)

---

### drawSegment
```javascript
drawSegment({ points: [A, B], color: cor_rosa_choque, width: 0.05, lineDash: [0.1, 0.05] })
// múltiplos pontos = polilinha conectada
drawSegment({ points: [A, B, C, D] })
```

---

### drawPolygon
```javascript
drawPolygon({ points: [A, B, C] })                                        // contorno
drawPolygon({ points: [A, B, C], fill: true, fillColor: '#39FF14', opacity: 0.15 })  // preenchido
// drawLast: false → não fecha o último lado
```

---

### drawSector
```javascript
// points: [P1, CENTRO, P3] — o CENTRO é sempre o segundo ponto
drawSector({ points: [B, A, C], radius: 0.7, fill: true, fillColor: '#FF6600' })
// measureMarks: número de marcas no arco (para indicar ângulos iguais)
drawSector({ points: [B, A, C], radius: 0.5, measureMarks: 2 })
```
**Atenção:** a `rotation` é em **radianos**; `rotationOrigin` é o ponto de pivô.

---

### drawArrow
```javascript
drawArrow({ points: [A, B] })                      // seta reta
drawArrow({ points: [A, {x:0,y:-3}, B] })          // seta curva (3 pontos)
drawArrow({ points: [A, P1, P2, B] })              // curva com 4 pontos (L, cotovelo)
// a ponta da seta fica sempre no ÚLTIMO ponto
```

---

### drawCircle
```javascript
drawCircle({ center: {x:0, y:0}, radius: 2, fill: true, fillColor: 'yellow', opacity: 0.5 })
```

---

### drawArc
```javascript
drawArc({ center: {x:0,y:0}, radius: 2, startAngle: 0, endAngle: Math.PI, steps: 50 })
// ângulos em radianos: 0=direita, PI/2=cima, PI=esquerda, 3*PI/2=baixo
```

---

### drawCurve
```javascript
drawCurve({ x: t => 2*Math.cos(t), y: t => 2*Math.sin(t), tStart: 0, tEnd: 2*Math.PI, steps: 100 })
// tStart/tEnd/steps:1 → extensão pontilhada de um único ponto (para prolongar segmentos)
drawCurve({ x: t => A.x + t*(B.x-A.x), y: t => A.y + t*(B.y-A.y), tStart: 1, tEnd: 1.4, steps: 1, lineDash: [0.1] })
```

---

### drawText
```javascript
drawText({ text: "texto ou $LaTeX$", x: 0, y: 0, fontSize: 0.5, color: 'white', opacity: 1 })
// ⚠️ rotation em GRAUS (diferente de todas as outras funções que usam radianos)
// ⚠️ o atributo é fontSize (NÃO é 'size')
// verticalCenter: true — centraliza verticalmente no ponto y
// maxWidth: largura máxima antes de quebrar linha
// lineHeight: altura de linha (padrão: 120)
```
**Atenção:** `drawText` NÃO suporta `align`. Para centralizar, usar `\begin{center}` no texto LaTeX.

---

### drawSegmentMeasureMark
```javascript
// Marcas de congruência em segmentos
drawSegmentMeasureMark({ points: [A, B], size: 0.3, quantity: 2, space: 0.15, color: '#00FFFF' })
// quantity: número de traços (1=simples, 2=duplo, 3=triplo)
// space: espaço entre traços quando quantity > 1
// Espera EXATAMENTE 2 pontos
```

---

### drawSegmentLength
```javascript
// Como drawSegment, mas com marcas visuais de comprimento
drawSegmentLength({ points: [A, B], size: 0.3 })
// Espera EXATAMENTE 2 pontos
```

---

### drawGrid
```javascript
// Apenas para desenvolvimento — comentar no código final
drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 })
```

---

## 3. PARÂMETROS E ANIMAÇÃO

### param
```javascript
const meuParam = param({
    value: 0,        // valor inicial
    min: 0,          // mínimo
    max: 1,          // máximo
    step: 0.001,     // incremento
    label: 'Nome',   // rótulo exibido na interface
    buttons: [
        { value: 1, time: 2 },   // anima até 1 em 2 segundos
        { value: 0, time: 2 }    // volta a 0 em 2 segundos
    ]
})
```
**Padrão mais usado:** `min:0, max:1, step:0.001` com dois botões (vai e volta).
**Dois botões de ida:** `[{value:0.5,time:1},{value:1,time:1},{value:0,time:2}]`

> ⚠️ **Ordem dos params na interface:** Os controles deslizantes aparecem **na ordem em que são declarados no código**. Para facilitar a gravação de vídeo, declare os params na mesma sequência em que serão usados durante a apresentação. Se precisar reordenar sem alterar a lógica, basta mover o bloco `const meuParam = param({...})` para a posição correta no código.

---

### animation — 1 param
```javascript
animation(meuParam, (v) => {
    drawCircle({ center: {x:0,y:0}, radius: v * 2 })
})
```

### animation — 2 params
```javascript
animation(param1, param2, (v1, v2) => {
    drawPolygon({ points: [...], opacity: v1, translation: {x: v2, y:0} })
})
```

### animation — 3 params
```javascript
animation(p1, p2, p3, (a, b, c) => {
    // usa a, b, c simultaneamente
})
```

**Limitações importantes:**
- Variáveis declaradas dentro de `animation()` são locais — não saem para o escopo externo
- `animation()` não suporta `return` de valores
- O que está no `else` aparece instantaneamente, sem transição progressiva
- `animation` aninhada dentro de `animation` é possível mas requer cuidado

---

### pause
```javascript
pause()  // sem parâmetros — congela a cena até o usuário avançar
```
Dentro de um `animation()`, o `pause()` separa etapas da animação.

### \\pause dentro de drawText
```javascript
drawText({ text: "Primeiro texto \\pause segundo texto \\pause terceiro" })
// Revela partes do texto progressivamente, sem precisar de múltiplos drawText
// Útil para demonstrações por casos dentro de um único bloco de texto
```

---

## 4. TRANSFORMAÇÕES (rotation, translation, rotationOrigin)

**Ordem obrigatória: rotação ANTES de translação, sempre.**

```javascript
drawSector({
    points: [A, B, C],
    rotation: Math.PI / 4,                    // em radianos
    rotationOrigin: { x: B.x, y: B.y },       // ponto de pivô
    translation: { x: 2, y: -1 }              // mover após rotacionar
})
```

- `rotation`: ângulo em radianos (exceto `drawText`, que usa graus)
- `rotationOrigin`: se omitido, o pivô é a origem `(0,0)`
- `translation`: deslocamento final após a rotação

**Atenção:** calcular ângulos em relação à posição ANTES da translação, nunca depois.

---

## 5. PARÂMETROS COMUNS (disponíveis em quase todas as funções)

| Parâmetro | Descrição |
|---|---|
| `color` | Cor do contorno (hex ou nome) |
| `opacity` | 0 = invisível, 1 = opaco |
| `width` | Espessura da linha (padrão: 0.05) |
| `lineDash` | Tracejado. Ex: `[0.1, 0.05]` |
| `fill` | `true` para preencher |
| `fillColor` | Cor de preenchimento |
| `rotation` | Rotação em radianos (graus no drawText) |
| `rotationOrigin` | Ponto `{x, y}` de pivô |
| `translation` | Deslocamento `{x, y}` |
| `colorOnDark` / `colorOnLight` | Cor alternativa por fundo |

---

## 6. CORES PADRÃO DO PROJETO

```javascript
// Paleta neon (animações novas — padrão atual)
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
const cor_titulo        = '#FF4500'   // laranja-vermelho para títulos

// Paleta legacy (animações antigas — ponto_medio, ex2, ex3)
const laranja       = '#f67821'
const verde         = '#008000'
const roxo          = '#993399'
const azulclaro     = '#87cefa'
const dourado       = '#FFD700'
const vermlehobordo = '#970000'
```

**Convenção de cores por papel:**
- Título da seção → `cor_titulo` (#FF4500)
- Ângulo principal (maior) → `cor_azul_eletrico`
- Ângulo secundário → `cor_rosa_choque`
- Ângulo terciário / auxiliar → `cor_dourado`
- Preenchimento de polígono auxiliar → `cor_verde_neon` com `opacity: 0.15`
- Conclusão/resultado → `cor_verde_neon`
- Contradição/absurdo → `cor_rosa_choque`
- Rótulos de congruência → `cor_ciano`

---

## 7. LATEX NO CONEXTY

### Comandos que funcionam

```latex
% Centralizar (fora de ambiente matemático)
\begin{center}texto ou $math$\end{center}

% Alinhar à direita
\begin{flushright}texto\end{flushright}

% Lista com marcadores
\begin{itemize}
  \item primeiro
  \item segundo
\end{itemize}

% Negrito
\textbf{texto em negrito}

% Itálico
\textit{texto em itálico}

% Cor
\textcolor{#FF1493}{texto colorido}
\textcolor{red}{texto vermelho}

% Matemática inline
$\overline{AB}$    % segmento
$\hat{C}$          % ângulo (usar \hat, NÃO \widehat)
$\triangle ABC$    % triângulo
$\Rightarrow$      % seta ida (=>)
$\Leftrightarrow$  % bicondicional (<=>)
$\equiv$           % congruência
$\checkmark$       % visto
$\blacksquare$     % fim de prova (QED)
$\bullet$          % marcador
$\overrightarrow{AB}$  % semirreta

% Quebra de linha dentro de drawText
\\\\  (dois backslashes)

% Pausa dentro de drawText (revela progressivamente)
\pause
```

### Comandos que NÃO funcionam no Conexty
- `\widehat{}` — usar `\hat{}` no lugar
- `\align`, `align:"center"` no drawText — usar `\begin{center}`
- `\Leftarrow` — usar texto "Recíproca:" ou símbolo Unicode `←`
- Símbolos Unicode em geral: testar caso a caso (às vezes funcionam)

### LaTeX no site (MathJax) — diferente do Conexty
```latex
\(\widehat{C}\)    % ângulo no site usa \widehat (não \hat)
\(\overline{AB}\)  % segmento
\[ ... \]          % display math
\( ... \)          % inline math
```

---

## 8. TÉCNICAS AVANÇADAS

### 8.1 Transporte de Setor com Rotação (método bissetor)

Para mover um setor do vértice V1 para o vértice V2, mantendo o ângulo correto:

```javascript
// Calcular bissetor de origem (em V1)
const u1A = { x: (A.x - V1.x) / len1A, y: (A.y - V1.y) / len1A }  // raio 1 normalizado
const u1B = { x: (B.x - V1.x) / len1B, y: (B.y - V1.y) / len1B }  // raio 2 normalizado
const bis1 = Math.atan2(u1A.y + u1B.y, u1A.x + u1B.x)

// Calcular bissetor de destino (em V2)
const u2A = { x: (A.x - V2.x) / len2A, y: (A.y - V2.y) / len2A }
const u2B = { x: (B.x - V2.x) / len2B, y: (B.y - V2.y) / len2B }
const bis2 = Math.atan2(u2A.y + u2B.y, u2A.x + u2B.x)

// Rotação necessária
const R = bis2 - bis1

// Usar no animation com param s (0→1):
animation(param, (s) => {
    drawSector({ points: [A, V1, B], radius: 0.6,
        rotationOrigin: { x: V1.x * s, y: V1.y * s },
        rotation: R * s,
        translation: { x: (V2.x - V1.x) * s, y: (V2.y - V1.y) * s }
    })
})
```

**Como funciona:**
- `rotationOrigin: V1 * s` — à medida que s vai de 0→1, o pivô se desloca de origem→V1
- `rotation: R * s` — aplica a rotação gradualmente
- `translation: (V2-V1) * s` — desloca o setor de V1 para V2

---

### 8.2 Transporte em Duas Fases (param 0→2)

Para mover um setor em duas etapas sequenciais (A→B→C):

```javascript
const param = param({ value: 0, min: 0, max: 2, step: 0.001,
    buttons: [{ value: 1, time: 2 }, { value: 2, time: 2 }, { value: 0, time: 2 }]
})

animation(param, (v) => {
    const la = Math.min(v, 1)      // fase 1: 0→1 quando v: 0→1
    const tp = Math.max(v - 1, 0)  // fase 2: 0→1 quando v: 1→2

    drawSector({ points: [...],
        // rotationOrigin: vale V1*la na fase 1; vale V1 (fixo) na fase 2
        rotationOrigin: {
            x: V1.x * (la + (1 - la) * tp),
            y: V1.y * (la + (1 - la) * tp)
        },
        // rotation: vai de 0→R na fase 1; vai de R→R_final na fase 2
        rotation: R * la + (R_final - R) * tp,
        // translation: vai de 0→(B-V1) na fase 1; vai de 0→(C-B) na fase 2
        translation: {
            x: (B.x - V1.x) * la + (C.x - B.x) * tp,
            y: (B.y - V1.y) * la + (C.y - B.y) * tp
        }
    })
})
```

**Verificação de continuidade em v=1:**
- la=1, tp=0: rotationOrigin = V1*1, rotation = R, translation = B-V1 ✓
- As duas fases têm resultado idêntico em v=1 → transição suave garantida

---

### 8.3 Comparação de Ângulos em Ponto P

Para transportar um ângulo do vértice V para um ponto P de comparação, alinhando o raio base horizontalmente:

```javascript
// Rotação que alinha o raio base para 0 rad (horizontal direita)
// raio_base = vetor do segundo raio (a direção de "onde o ângulo começa")
const R_para_P = -Math.atan2(raio_base.y, raio_base.x)

animation(param, (s) => {
    drawSector({ points: [A, V, B], radius: 0.6, fill: true, fillColor: cor,
        rotationOrigin: { x: V.x * s, y: V.y * s },
        rotation: R_para_P * s,
        translation: { x: (P.x - V.x) * s, y: (P.y - V.y) * s }
    })
})
```

**Convenção de layering para comparação:**
- Maior ângulo = radius maior, declarado PRIMEIRO (fica atrás)
- Menor ângulo = radius menor, declarado DEPOIS (fica na frente)
- Exemplo: azul(0.8) → rosa(0.6) → dourado(0.4)

---

### 8.4 Dois Params para Um Setor (sem duplicar o desenho)

Quando um mesmo setor precisa ser controlado por dois params diferentes (ex: B→D e B→P):

```javascript
// param1: B → D (prova)
animation(levar, (ld) => {
    if (ld > 0) {   // if(ld>0) impede de desenhar em B quando ld=0
        drawSector({ points: [...], ... })
    }
})

// param2: B → P (comparação) — este é o "keeper": mantém o setor visível em B quando ld=0
animation(cmp, (s) => {
    drawSector({ points: [...], ... })  // sem if, sempre desenha
})
```

**Regra:** o "keeper" (sem `if`) garante visibilidade no estado de repouso. O outro (com `if`) é o que faz a animação de prova.

---

### 8.5 Encolher Triângulo via Centroide

Para criar efeito visual de "separar" um triângulo da figura principal:

```javascript
const centro = {
    x: (P1.x + P2.x + P3.x) / 3,
    y: (P1.y + P2.y + P3.y) / 3
}
const fator = 1 - 0.2 * m   // fator=1 → tamanho original; fator=0.8 → 80% do tamanho

const P1s = { x: centro.x + (P1.x - centro.x) * fator, y: centro.y + (P1.y - centro.y) * fator }
const P2s = { x: centro.x + (P2.x - centro.x) * fator, y: centro.y + (P2.y - centro.y) * fator }
const P3s = { x: centro.x + (P3.x - centro.x) * fator, y: centro.y + (P3.y - centro.y) * fator }

// Usar P1s, P2s, P3s como vértices do triângulo "encolhido"
drawPolygon({ points: [P1s, P2s, P3s], fill: true, opacity: 0.3 * m,
    translation: { x: deslocX * m, y: deslocY * m }
})
```

Usado na bissetriz para separar triângulos congruentes para baixo da tela.

---

### 8.6 Ponto sobre um Segmento via Param

Para criar um ponto P que desliza sobre EF com EP = BC:

```javascript
const BC_len = Math.sqrt((C.x-B.x)**2 + (C.y-B.y)**2)
const EF_len = Math.sqrt((F.x-E.x)**2 + (F.y-E.y)**2)
const tP_inicial = BC_len / EF_len   // posição inicial: EP = BC

const pos_P = param({ value: tP_inicial, min: 0, max: 1, step: 0.001, label: "Posição de P" })

animation(pos_P, (tP) => {
    const P = { x: E.x + tP * (F.x - E.x), y: E.y + tP * (F.y - E.y) }
    drawPoint({ x: P.x, y: P.y, size: 0.05 })
    // sumir rótulo quando P coincide com F:
    drawText({ text: "P", opacity: tP > 0.97 ? 0 : 1 })
})
```

---

### 8.7 Sumir Elementos via Param

Para apagar elementos intermediários sem pause():

```javascript
const sumir = param({ value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 1 }], label: "Limpar" })

animation(sumir, (s) => {
    drawPolygon({ points: [...], opacity: 1 - s })  // some progressivamente
})

// Para herdar marcações e somí-las junto:
animation(mover, sumir, (m, s) => {
    drawSegmentMeasureMark({ points: [A, B], opacity: (1 - s) * m })
})
```

---

### 8.8 Função Reutilizável de Texto

Para blocos de texto que se repetem com posições diferentes:

```javascript
function hipotese(x, y) {
    drawText({ text: "Hipótese:", x: x, y: y, fontSize: 0.45 })
    drawText({ text: "$\\overline{AB} = \\overline{DE}$", x: x, y: y - 0.55, fontSize: 0.45 })
    drawText({ text: "$\\hat{B} \\equiv \\hat{E}$", x: x, y: y - 1.05, fontSize: 0.45 })
}
hipotese(-3, -0.6)   // chama com offset
```

---

### 8.9 Cálculo de Interseção de Dois Segmentos

Para encontrar o ponto C = interseção de AB' e A'B:

```javascript
const dx1 = Bl.x - A.x,  dy1 = Bl.y - A.y   // direção do segmento 1
const dx2 = B.x - Al.x,  dy2 = B.y - Al.y   // direção do segmento 2

const t = ((Al.x - A.x) * dy2 - (Al.y - A.y) * dx2) / (dx1 * dy2 - dy1 * dx2)

const C = { x: A.x + t * dx1, y: A.y + t * dy1 }
```

---

### 8.10 Ponto D sobre AB com AD = AC

Para construir ponto D sobre AB tal que AD = AC:

```javascript
const AC_len = Math.sqrt((C.x-A.x)**2 + (C.y-A.y)**2)
const AB_len = Math.sqrt((B.x-A.x)**2 + (B.y-A.y)**2)
const t = AC_len / AB_len
const D = { x: A.x + t*(B.x-A.x), y: A.y + t*(B.y-A.y) }
```

---

### 8.11 Estrutura Bicondicional (se e somente se)

Padrão para demonstrar P ⟺ Q:

```javascript
// Antes do triângulo: enunciado
drawText({ text: "\\begin{center}\\textbf{Teorema:} $P \\Leftrightarrow Q$\\end{center}", x: ..., y: ... })

// Antes da demonstração da ida:
drawText({ text: "\\begin{center} ($\\Rightarrow$) Hipótese:\\\\ ...", x: ..., y: ... })

// Após a conclusão da ida:
drawText({ text: "\\begin{center}Conclusão \\\\ ...", x: ..., y: ... })

// Recíproca com casos e \\pause interno:
pause()
drawText({
    text: "\\textcolor{#00B0FF}{Recíproca:} enunciado da volta. \\\\ Suponha por contradição que ... Há dois casos: \\pause \\begin{itemize} \\item \\textbf{Caso 1:} ... \\textcolor{#FF1493}{Contradição.} \\pause \\item \\textbf{Caso 2:} ... pela ida já demonstrada, ... \\textcolor{#FF1493}{Contradição.} \\end{itemize} \\pause \\textcolor{#39FF14}{Logo, ...  $\\blacksquare$}",
    x: ..., y: ... })
```

---

### 8.12 Triângulo com Vértices Animados (senoides)

Para criar um triângulo que muda de forma continuamente, com movimento orgânico:

```javascript
const animar = param({ value: 0, min: 0, max: 50, step: 0.01,
    buttons: [
        { value: 8,  time: 3  },  // parada 1 — forma interessante A
        { value: 17, time: 5  },  // parada 2 — forma interessante B
        { value: 40, time: 10 },  // animação livre
        { value: 0,  time: 1  }   // reset
    ], label: "Animar triângulo" })

animation(animar, (t) => {
    // Cada vértice oscila com frequência e fase diferente → aparência "aleatória"
    // Amplitude ≥ 1 para mudança de forma bem visível
    const T1a = { x: T1.x + 1.5*Math.sin(t*0.50), y: T1.y + 1.2*Math.cos(t*0.40) }
    const T2a = { x: T2.x + 1.3*Math.sin(t*0.70 + 1.0), y: T2.y + 1.0*Math.cos(t*0.60 + 2.0) }
    const T3a = { x: T3.x + 1.2*Math.cos(t*0.45 + 0.5), y: T3.y + 0.9*Math.sin(t*0.55 + 1.5) }

    drawSegment({ points: [T1a, T2a], color: cor_azul_eletrico, width: 0.07 })
    drawSegment({ points: [T1a, T3a], color: cor_rosa_choque,   width: 0.07 })
    drawSegment({ points: [T2a, T3a], color: cor_verde_neon,    width: 0.07 })
    // rótulos viajam com os vértices:
    drawText({ text: "$c$", x: (T1a.x+T2a.x)/2 - 0.35, y: (T1a.y+T2a.y)/2, ... })
})
```

**Para encontrar formas interessantes:** mover o slider manualmente, anotar o valor de `t` quando o triângulo está na forma desejada, colocar esse valor num botão com `time` curto.

**Nota:** as variáveis `T1a`, `T2a`, `T3a` são locais ao bloco `animation`. Para usá-las em outros blocos (cópias dos lados), a fórmula precisa ser repetida — veja técnica 8.13.

---

### 8.13 Cópias de Segmentos que "Voam" para Linha de Comparação

Para transportar uma cópia de um lado do triângulo animado para uma linha horizontal, mantendo o comprimento atual:

```javascript
// Usa animation(animar, deitar_x) para acessar posição E comprimento atual
animation(animar, deitar_c, (t, s) => {
    if (s > 0) {  // if(s>0) evita cópia sobreposta na origem quando s=0
        // Recalcula vértices animados (mesma fórmula do bloco do triângulo)
        const T1a = { x: T1.x + 1.5*Math.sin(t*0.50) - 1, y: T1.y + 1.2*Math.cos(t*0.40) - 1 }
        const T2a = { x: T2.x + 1.3*Math.sin(t*0.70+1) - 1, y: T2.y + 1.0*Math.cos(t*0.60+2) - 1 }
        const t_c_now = Math.sqrt((T2a.x-T1a.x)**2 + (T2a.y-T1a.y)**2)  // comprimento atual

        // Interpolação de endpoints: s=0 → triângulo, s=1 → linha
        const p1 = { x: T1a.x + s*(x_ini - T1a.x),           y: T1a.y + s*(y_sup - T1a.y) }
        const p2 = { x: T2a.x + s*(x_ini + t_c_now - T2a.x), y: T2a.y + s*(y_sup - T2a.y) }
        drawSegment({ points: [p1, p2], color: cor_azul_eletrico, width: 0.07 })
        // opacity: s → rótulo aparece só quando segmento está chegando no destino
        drawText({ text: "$c$", x: (p1.x+p2.x)/2, y: (p1.y+p2.y)/2 + 0.25,
            color: cor_azul_eletrico, fontSize: 0.4, opacity: s })
    }
})

// Lado b: posicionado após c na linha (precisa de t_c_now também)
animation(animar, deitar_b, (t, s) => {
    if (s > 0) {
        // ... recalcula T1a, T2a, T3a ...
        const t_c_now = Math.sqrt(...)
        const t_b_now = Math.sqrt(...)
        const p1 = { x: T1a.x + s*(x_ini + t_c_now - T1a.x), ... }
        const p2 = { x: T3a.x + s*(x_ini + t_c_now + t_b_now - T3a.x), ... }
        // ...
    }
})
```

**Efeito visual:** triângulo permanece intacto; cópia de cada lado "voa" da posição atual até a linha. Como comprimento é calculado em tempo real, a relação c+b > a se mantém mesmo com o triângulo animando.

---

### 8.14 Mesmo Param para Dois Efeitos Opostos (troca visual)

Para fazer um elemento sumir enquanto outro aparece, usando um único param:

```javascript
// Um param, dois animation blocks — efeitos opostos
animation(destacar_BCD, (s) => {
    drawPolygon({ ..., opacity: 0.15 * (1 - s) })  // some quando s aumenta
})

animation(destacar_BCD, (s) => {
    drawPolygon({ ..., opacity: 0.12 * s })          // aparece quando s aumenta
})
```

O segundo bloco declarado fica na frente (z-order). O resultado é uma troca visual suave entre dois elementos com um único botão.

---

### 8.15 Sistema de Inequações com Chave (LaTeX)

```javascript
drawText({
    text: "$\\left\\{\\begin{array}{l} c + b > a \\\\ c + a > b \\\\ b + a > c \\end{array}\\right.$",
    x: ..., y: ...
})
```

`\left\{` abre a chave, `\begin{array}{l}` alinha à esquerda, `\\` quebra linha, `\right.` fecha sem símbolo. Testado e funciona no Conexty.

---

## 9. ORDEM DE PROFUNDIDADE (Z-INDEX)

**O que é declarado PRIMEIRO fica ATRÁS.**

Essa regra vale para **tudo**: `drawPolygon`, `drawSegment`, `drawSector`, `drawText`, blocos `animation()`, etc. Um `animation()` declarado antes de um `drawSector` estático vai aparecer atrás dele.

```javascript
// Correto: maior setor atrás, menor na frente
animation(cmp_ACB, (s) => { drawSector({ radius: 0.8, ... }) })  // atrás
animation(cmp_ACD, (s) => { drawSector({ radius: 0.6, ... }) })  // meio
animation(cmp_dourado, (s) => { drawSector({ radius: 0.4, ... }) })  // frente
```

**Truque para revelar um elemento por trás de outro:** declare-o cedo no código (z-order correto) com `opacity: 0`, e aumente a opacidade via param quando quiser mostrá-lo:

```javascript
// BCD deve aparecer ATRÁS do rosa ACD — então é declarado ANTES
const mostrar_BCD = param({ value: 0, min: 0, max: 1, step: 0.001,
    buttons: [{ value: 1, time: 1.5 }, { value: 0, time: 1.5 }], label: "Mostrar BCD" })

animation(mostrar_BCD, (s) => {
    drawSector({ points: [B, C, D], radius: 0.9, fill: true, fillColor: cor_azul_eletrico, opacity: s })
})

// ACD rosa — declarado DEPOIS, fica na frente do BCD
drawSector({ points: [D, C, A], radius: 0.6, fill: true, fillColor: cor_rosa_choque })
```

---

## 10. ESTRUTURA PADRÃO DE UMA ANIMAÇÃO

```javascript
//drawGrid({ xMin: -5, xMax: 5, yMin: -5, yMax: 5 });  // desenvolvimento

// ── CORES ──────────────────────────────────────────────────────
const cor_ciano = '#00FFFF'
// ... (paleta completa)

// ── TÍTULO E ENUNCIADO ────────────────────────────────────────
drawText({ text: "\\begin{center} X.Y.Z Título \\end{center}", x: ..., y: ..., color: cor_titulo })
drawText({ text: "\\begin{center}\\textbf{Teorema:} ...", x: ..., y: ... })

// ── CÁLCULOS GEOMÉTRICOS ──────────────────────────────────────
const A = { x: ..., y: ... }
// ... pontos, comprimentos, ângulos

// ── PARAMS ────────────────────────────────────────────────────
const meuParam = param({ ... })

// ── DESENHOS ESTÁTICOS ────────────────────────────────────────
drawPoint(...)
drawPolygon(...)
pause()

// ── ANIMAÇÕES ────────────────────────────────────────────────
animation(meuParam, (v) => { ... })
pause()

// ── CONCLUSÃO ────────────────────────────────────────────────
drawText({ text: "\\begin{center}Conclusão \\\\ ...", x: ..., y: ... })
```

---

## 11. ERROS COMUNS E CORREÇÕES

| Erro | Correção |
|---|---|
| `size` no drawText | Usar `fontSize` |
| `align: "center"` no drawText | Usar `\\begin{center}` no texto |
| `\\widehat{}` no Conexty | Usar `\\hat{}` |
| `─` nos comentários | Usar `-` ou `=` (Unicode não digitável) |
| `\\Leftarrow` não renderiza | Usar texto "Recíproca:" ou `←` Unicode |
| Dois setores desenhados no mesmo lugar | Usar `if(ld > 0)` no param secundário |
| `rotation` em drawText | É em graus (não radianos) |
| Calcular ângulo após translação | Sempre calcular ANTES (rotação ocorre antes da translação) |

---

## 12. REFERÊNCIA DAS ANIMAÇÕES CONCLUÍDAS

| Arquivo | Seção | Técnicas principais |
|---|---|---|
| `ponto_medio.js` | 1.4.1 | Cores legacy, if/else em animation, 3 congruências |
| `medianas.js` | 1.4.2 | Múltiplos params, vértices móveis senoidais, Math.max para opacity |
| `bissetriz.js` | 1.4.3 | Encolher por centroide, interseção de segmentos, 3 params em animation, sumir_sombra |
| `angulo_externo.js` | 1.5 | Estrutura limpa, setores de ângulo externo |
| `congruencia_laa_o.js` | 1.6 LAA | Ponto P dinâmico em segmento, função hipotese(), flushright, ABSURDO em vermelho |
| `maior_lado_maior_angulo.js` | 1.6.1 | Transporte bissetor, duas fases 0→2, comparação em P, bicondicional, \\pause em drawText |
| `desigualdade_triangular.js` | 1.6.2 | Transporte bissetor, mesmo param dois efeitos opostos, vértices animados via senoides, cópias que voam com comprimento dinâmico, animation(p1, p2), sistema com chave LaTeX |
| `ex2_semelhanca_triangulos.js` | Exercício | drawCurve pontilhada, drawArrow em L, função congruencia() |
| `ex3_circulos_inscritos.js` | Exercício | Geometria analítica explícita, 3 níveis de círculos, animation condicional aninhada |
