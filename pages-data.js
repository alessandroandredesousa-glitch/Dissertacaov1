// DADOS DAS PÁGINAS
const PAGES_DATA = {

// ========== GEOMETRIA EUCLIDIANA ==========
'pitagoras': {
title: 'Teorema de Pitágoras',
description: 'Uma das demonstrações clássicas da geometria euclidiana',
videoId: 'imHmMONAkWE',
videoDuration: '5:42 minutos',
videoDate: 'Novembro 2023',
videoDescription: 'Demonstração visual do Teorema de Pitágoras.',
content: `
            <div class="theorem">
                <h3>Teorema de Pitágoras</h3>
                <p>Em qualquer triângulo retângulo, o quadrado do comprimento da hipotenusa é igual à soma dos quadrados dos comprimentos dos catetos.</p>
            </div>
            
            <div class="math-display">
                <p>Seja um triângulo retângulo com catetos de comprimentos \\(a\\) e \\(b\\), e hipotenusa de comprimento \\(c\\). Então:</p>
                <p>$$a^2 + b^2 = c^2$$</p>
                
                <p><strong>Demonstração:</strong></p>
                <p>Considere quatro triângulos retângulos idênticos, cada um com lados \\(a\\), \\(b\\) e \\(c\\).</p>
                <p>Organize-os de forma a criar um quadrado maior com lado \\(a + b\\):</p>
                <p>A área do quadrado maior é \\((a + b)^2 = a^2 + 2ab + b^2\\).</p>
                <p>A área também pode ser calculada como a soma das áreas dos quatro triângulos mais a área do quadrado interno:</p>
                <p>$$4 \\times \\left(\\frac{1}{2}ab\\right) + c^2 = 2ab + c^2$$</p>
                <p>Igualando as duas expressões para a área:</p>
                <p>$$a^2 + 2ab + b^2 = 2ab + c^2$$</p>
                <p>Subtraindo \\(2ab\\) de ambos os lados:</p>
                <p>$$a^2 + b^2 = c^2$$</p>
                <p>O que prova o teorema. ∎</p>
                
                <h3>Aplicações</h3>
                <p>O Teorema de Pitágoras é fundamental para:</p>
                <ul>
                    <li>Cálculo de distâncias em geometria analítica</li>
                    <li>Base da trigonometria</li>
                    <li>Geometria espacial</li>
                    <li>Engenharia e arquitetura</li>
                    <li>Navegação</li>
                </ul>
            </div>
        `
},

'tales': {
title: 'Teorema de Tales',
description: 'Proporcionalidade em feixes de retas paralelas',
videoId: 'dQw4w9WgXcQ',
videoDuration: '4:30 minutos',
videoDate: 'Outubro 2023',
videoDescription: 'Demonstração do Teorema de Tales.',
content: '<div class="theorem"><h3>Teorema de Tales</h3><p>Se duas retas transversais cortam um feixe de retas paralelas, então as medidas dos segmentos são proporcionais.</p></div><div class="math-display"><p>$$\\frac{AB}{BC} = \\frac{DE}{EF}$$</p></div>'
},

// ========== ÁREAS (SUBMENU DE 2º NÍVEL) ==========
'area-quadrado': {
title: 'Área do Quadrado',
description: 'Cálculo da área do quadrado',
videoId: 'dQw4w9WgXcQ',
videoDuration: '3:00 minutos',
videoDate: 'Setembro 2023',
videoDescription: 'Área do quadrado.',
content: '<div class="theorem"><h3>Área do Quadrado</h3><p>A área de um quadrado é igual ao lado ao quadrado.</p></div><div class="math-display"><p>$$A = l^2$$</p><p>Onde <strong>l</strong> é o lado do quadrado.</p><h4>Exemplo:</h4><p>Se o lado = 5 cm:</p><p>$$A = 5^2 = 25 \\text{ cm}^2$$</p></div>'
},

'area-retangulo': {
title: 'Área do Retângulo',
description: 'Cálculo da área do retângulo',
videoId: 'dQw4w9WgXcQ',
videoDuration: '3:15 minutos',
videoDate: 'Setembro 2023',
videoDescription: 'Área do retângulo.',
content: '<div class="theorem"><h3>Área do Retângulo</h3><p>A área de um retângulo é base vezes altura.</p></div><div class="math-display"><p>$$A = b \\times h$$</p><p>Onde:</p><ul><li><strong>b</strong> = base</li><li><strong>h</strong> = altura</li></ul></div>'
},

'area-triangulo': {
title: 'Área do Triângulo',
description: 'Cálculo da área do triângulo',
videoId: 'dQw4w9WgXcQ',
videoDuration: '4:20 minutos',
videoDate: 'Setembro 2023',
videoDescription: 'Área do triângulo.',
content: '<div class="math-display"><h3>Fórmula Básica</h3><p>$$A = \\frac{b \\times h}{2}$$</p><h3>Fórmula de Herão</h3><p>$$A = \\sqrt{s(s-a)(s-b)(s-c)}$$</p><p>Onde s é o semiperímetro.</p></div>'
},

'area-circulo': {
title: 'Área do Círculo',
description: 'Cálculo da área do círculo',
videoId: 'dQw4w9WgXcQ',
videoDuration: '3:30 minutos',
videoDate: 'Setembro 2023',
videoDescription: 'Área do círculo.',
content: '<div class="theorem"><h3>Área do Círculo</h3><p>A área de um círculo é pi vezes o raio ao quadrado.</p></div><div class="math-display"><p>$$A = \\pi r^2$$</p><p>Onde <strong>r</strong> é o raio.</p><h4>Exemplo:</h4><p>Se r = 3 cm:</p><p>$$A = \\pi \\times 3^2 = 9\\pi \\approx 28.27 \\text{ cm}^2$$</p></div>'
},

'area-trapezio': {
title: 'Área do Trapézio',
description: 'Cálculo da área do trapézio',
videoId: 'dQw4w9WgXcQ',
videoDuration: '3:45 minutos',
videoDate: 'Setembro 2023',
videoDescription: 'Área do trapézio.',
content: '<div class="math-display"><h3>Fórmula</h3><p>$$A = \\frac{(B + b) \\times h}{2}$$</p><p>Onde:</p><ul><li><strong>B</strong> = base maior</li><li><strong>b</strong> = base menor</li><li><strong>h</strong> = altura</li></ul></div>'
},

// ========== PERÍMETROS (SUBMENU DE 2º NÍVEL) ==========
'perimetro-quadrado': {
title: 'Perímetro do Quadrado',
description: 'Cálculo do perímetro do quadrado',
videoId: 'dQw4w9WgXcQ',
videoDuration: '2:30 minutos',
videoDate: 'Agosto 2023',
videoDescription: 'Perímetro do quadrado.',
content: '<div class="math-display"><h3>Perímetro do Quadrado</h3><p>$$P = 4l$$</p><p>Onde <strong>l</strong> é o lado.</p></div>'
},

'perimetro-retangulo': {
title: 'Perímetro do Retângulo',
description: 'Cálculo do perímetro do retângulo',
videoId: 'dQw4w9WgXcQ',
videoDuration: '2:45 minutos',
videoDate: 'Agosto 2023',
videoDescription: 'Perímetro do retângulo.',
content: '<div class="math-display"><h3>Perímetro do Retângulo</h3><p>$$P = 2(b + h)$$</p></div>'
},

'perimetro-circulo': {
title: 'Perímetro do Círculo (Circunferência)',
description: 'Cálculo da circunferência',
videoId: 'dQw4w9WgXcQ',
videoDuration: '3:00 minutos',
videoDate: 'Agosto 2023',
videoDescription: 'Circunferência.',
content: '<div class="math-display"><h3>Circunferência</h3><p>$$C = 2\\pi r$$</p><p>Onde <strong>r</strong> é o raio.</p></div>'
},

// ========== OUTROS ==========
'angulos-triangulos': {
title: 'Ângulos em Triângulos',
description: 'Propriedades dos ângulos',
videoId: 'dQw4w9WgXcQ',
videoDuration: '3:45 minutos',
videoDate: 'Julho 2023',
videoDescription: 'Ângulos.',
content: '<div class="theorem"><h3>Soma dos Ângulos</h3><p>$$\\alpha + \\beta + \\gamma = 180°$$</p></div>'
},

'cossenos': {
title: 'Lei dos Cossenos',
description: 'Generalização de Pitágoras',
videoId: 'dQw4w9WgXcQ',
videoDuration: '5:15 minutos',
videoDate: 'Junho 2023',
videoDescription: 'Cossenos.',
content: '<div class="math-display"><p>$$c^2 = a^2 + b^2 - 2ab \\cos(\\gamma)$$</p></div>'
},

// ========== GEOMETRIA ANALÍTICA ==========
'distancia-pontos': {
title: 'Distância entre Pontos',
description: 'Fórmula euclidiana',
videoId: 'dQw4w9WgXcQ',
videoDuration: '3:30 minutos',
videoDate: 'Maio 2023',
videoDescription: 'Distância.',
content: '<div class="math-display"><p>$$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$$</p></div>'
},

'ponto-medio': {
title: 'Ponto Médio',
description: 'Cálculo do ponto médio',
videoId: 'dQw4w9WgXcQ',
videoDuration: '3:15 minutos',
videoDate: 'Abril 2023',
videoDescription: 'Ponto médio.',
content: '<div class="math-display"><p>$$M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$$</p></div>'
},

// ========== GEOMETRIA ESPACIAL ==========
'prismas': {
title: 'Prismas',
description: 'Volume e área',
videoId: 'dQw4w9WgXcQ',
videoDuration: '4:30 minutos',
videoDate: 'Março 2023',
videoDescription: 'Prismas.',
content: '<div class="math-display"><h3>Volume</h3><p>$$V = A_b \\times h$$</p></div>'
},

'piramides': {
title: 'Pirâmides',
description: 'Volume e área',
videoId: 'dQw4w9WgXcQ',
videoDuration: '4:45 minutos',
videoDate: 'Fevereiro 2023',
videoDescription: 'Pirâmides.',
content: '<div class="math-display"><h3>Volume</h3><p>$$V = \\frac{1}{3} A_b \\times h$$</p></div>'
},

'sobre': {
title: 'Sobre a Dissertação',
description: 'Informações sobre o projeto',
videoId: '',
videoDuration: '',
videoDate: '',
videoDescription: '',
content: '<div class="math-display"><h3>Geometria Demonstrada</h3><p>Produto educacional para o ensino de geometria.</p></div>'
},

'contato': {
title: 'Contato',
description: 'Entre em contato',
videoId: '',
videoDuration: '',
videoDate: '',
videoDescription: '',
content: '<div class="math-display"><h3>Contato</h3><p>Email: contato@exemplo.com</p></div>'
}

};

console.log('✅ PAGES_DATA carregado com', Object.keys(PAGES_DATA).length, 'páginas');