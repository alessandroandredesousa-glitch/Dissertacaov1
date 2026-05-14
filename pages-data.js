// DADOS DAS PÁGINAS
const PAGES_DATA = {

// ========== Triângulos ==========
'definicaotriangulos': {
title: 'Definição de triângulos',
description: '',
sectionTitle: '',
videoId: 'Xyblz3iS57Y',
videoDuration: '1:00 minutos',
videoDate: '28 de abril de 2026',
videoDescription: 'Definição de triângulos',
content: `
           <div class="theorem">
            <h3>1.1 Definição de Triângulo</h3>
            <p>Dados três pontos \\(A\\), \\(B\\) e \\(C\\) não colineares, dizemos que o triângulo \\(ABC\\) (denotado por \\(\\triangle ABC\\)) é a reunião dos segmentos \\(\\overline{AB}\\), \\(\\overline{AC}\\) e \\(\\overline{BC}\\).</p>
        </div>

        <div class="math-display">
            <div style="text-align: center; margin: 20px 0;">
                <img src="./imagem/img_definicaodetriangulos.PNG" alt="Pontos A, B e C" style="max-width: 40%;">
            </div>
            <ul>
                <li>Os pontos \\(A\\), \\(B\\) e \\(C\\) são chamados de <strong>vértices</strong>.
                <li>Os segmentos \\(\\overline{AB}\\) (de medida \\(c\\)), \\(\\overline{AC}\\) (de medida \\(b\\)) e \\(\\overline{BC}\\) (de medida \\(a\\)) são chamados de <strong>lados</strong> do \\(\\triangle ABC\\).
            </ul>

            

            <div style="text-align: center; margin: 20px 0;">
                <img src="./imagem/img_definicaodetriangulos_1.PNG" alt="Lados do triângulo" style="max-width: 40%;">
                <p><strong></strong></p>
            </div>

            <ul>
            <li>Os ângulos \\(B\\widehat{A}C\\) (ou \\(\\widehat{A}\\)), \\(A\\widehat{B}C\\) (ou \\(\\widehat{B}\\)) e \\(B\\widehat{C}A\\) (ou \\(\\widehat{C}\\)) são chamados de <strong>ângulos internos</strong> do \\(\\triangle ABC\\).
            Estes ângulos são opostos aos lados \\(a\\), \\(b\\) e \\(c\\), respectivamente.
            <ul>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_definicaodetriangulos_2.PNG" alt="Ângulos e lados opostos" style="max-width: 40%;">
                <p><strong></strong></p>
            </div>
        </div>
        `
},

'classificacaotriangulos': {
title: 'Classificação dos Triângulos',
description: '',
videoId: '5EGzuVGgBO0',
videoDuration: '1:13 minutos',
videoDate: '04 de maio de 2026',
videoDescription: 'Classificação dos Triângulos',
sectionTitle: '',
content: `
        <div class="theorem">
            <h3>1.2 Classificação</h3>
            <p>Os triângulos podem ser classificados de duas formas: quanto aos seus lados ou quanto aos seus ângulos internos.</p>
        </div>

        <div class="math-display">
            <h4>a) Quanto aos lados:</h4>
            <ul>
                <li><strong>Equilátero:</strong> possui os três lados congruentes (com a mesma medida).
                    <p>\\(a = b = c\\)</p>
                </li>
                <li><strong>Isósceles:</strong> possui pelo menos dois lados congruentes.
                    <p>\\(a = b\\) ou \\(a = c\\) ou \\(b = c\\)</p>
                </li>
                <li><strong>Escaleno:</strong> possui os três lados com medidas diferentes entre si.
                    <p>\\(a \\neq b\\), \\(b \\neq c\\) e \\(a \\neq c\\)</p>
                </li>
            </ul>

            <div style="text-align: center; margin: 20px 0;">
                <img src="LINK_DA_IMAGEM_LADOS" alt="Classificação quanto aos lados" style="max-width: 100%;">
                <p><strong>Imagem: Classificação por Lados</strong></p>
            </div>

            <h4>b) Quanto aos ângulos:</h4>
            <ul>
                <li><strong>Acutângulo:</strong> possui os três ângulos internos agudos (menores que \\(90^\\circ\\)).
                    <p>\\(\\widehat{A}, \\widehat{B}, \\widehat{C} < 90^\\circ\\)</p>
                </li>
                <li><strong>Retângulo:</strong> possui um ângulo interno reto (igual a \\(90^\\circ\\)).
                    <p>Ex: \\(\\widehat{A} = 90^\\circ\\)</p>
                </li>
                <li><strong>Obtusângulo:</strong> possui um ângulo interno obtuso (maior que \\(90^\\circ\\)).
                    <p>Ex: \\(\\widehat{A} > 90^\\circ\\)</p>
                </li>
            </ul>

            <div style="text-align: center; margin: 20px 0;">
                <img src="LINK_DA_IMAGEM_ANGULOS" alt="Classificação quanto aos ângulos" style="max-width: 100%;">
                <p><strong>Imagem: Classificação por Ângulos</strong></p>
            </div>
        </div>
    `
},


'definicaodecongruencia': {
title: '1.3 Definição de Congruências',
description: '',
videoId: 'Xyblz3iS57Y',
videoDuration: '4:30 minutos',
videoDate: 'Outubro 2023',
videoDescription: 'Definição de Congruências',
sectionTitle: '',
content: `
        <div class="theorem">
            <h3>1.3 Definição de Congruência</h3>
            <p>Dois triângulos são ditos congruentes se, e somente se, existe uma correspondência entre seus vértices, tal que:</p>
            <ul style="list-style-type: none; padding-left: 15px;">
                <li><strong>I)</strong> Os lados correspondentes são congruentes;</li>
                <li><strong>II)</strong> Os ângulos correspondentes são congruentes.</li>
            </ul>
        </div>

        <div class="math-display">
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_congruenciadetriangulo_1.PNG" alt="Triângulos Congruentes" style="max-width: 40%;">
                <p><strong>Imagem: Correspondência entre Vértices</strong></p>
            </div>

            <p>Formalmente, a congruência entre o triângulo \\(ABC\\) e o triângulo \\(A'B'C'\\) implica nas seguintes igualdades:</p>
            
            <p>
                \\[
                \\triangle ABC \\equiv \\triangle A'B'C' \\implies 
                \\begin{cases} 
                \\overline{AB} = \\overline{A'B'} & \\quad e \\quad & \\widehat{A} = \\widehat{A'} \\\\
                \\overline{AC} = \\overline{A'C'} & \\quad e \\quad &\\widehat{B} = \\widehat{B'} \\\\
                \\overline{BC} = \\overline{B'C'} & \\quad e \\quad & \\widehat{C} = \\widehat{C'} 
                \\end{cases}
                \\]
            </p>
        </div>
    `
},

// ========== CASO DE CONGRUÊNCIAS (SUBMENU DE 2º NÍVEL) ==========
'congruenciasdetriangulos-LAL': {
    title: '1.3.2 Caso LAL',
    description: '',
    videoId: 'SEU_VIDEO_ID',
    videoDuration: '',
    videoDate: '',
    videoDescription: 'Postulado LAL',
    sectionTitle: 'Postulado',
    content: `
        <div class="theorem">
            <h3>Postulado Lado-Ângulo-Lado (LAL)</h3>
            <p>Se dois triângulos possuem dois lados congruentes e o ângulo formado por esses lados também é congruente, então os triângulos são congruentes.</p>
        </div>

        <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_casaLAL_1.png" alt="Caso LAL" style="max-width: 50%;">
                <p><strong>Imagem: Caso LAL</strong></p>
            
        </div>
        <div class="math-display">
            <p>
            \\[
                \\Delta ABC \\equiv \\Delta A'B'C' \\implies
                \\left\\{\\begin{array}{ll}
                    \\textcolor{#f67821}{\\overline{AB} = \\overline{A'B'}} & \\textcolor{#f67821}{e} \\quad \\textcolor{#f67821}{\\widehat{C} = \\widehat{C'}} \\\\
                    \\textcolor{#008000}{\\overline{AC} = \\overline{A'C'}} & \\textcolor{#008000}{e} \\quad \\textcolor{#008000}{\\widehat{B} = \\widehat{B'}} \\\\
                    \\overline{BC} = \\overline{B'C'} & e \\quad \\widehat{A} = \\widehat{A'}
                \\end{array}\\right.
            \\]
            </p>
        </div>
    `
},

'congruenciasdetriangulos-ALA': {
title: 'Área do Retângulo',
description: 'Cálculo da área do retângulo',
videoId: 'dQw4w9WgXcQ',
videoDuration: '3:15 minutos',
videoDate: 'Setembro 2023',
videoDescription: 'Área do retângulo.',
content: '<div class="theorem"><h3>Área do Retângulo</h3><p>A área de um retângulo é base vezes altura.</p></div><div class="math-display"><p>$$A = b \\times h$$</p><p>Onde:</p><ul><li><strong>b</strong> = base</li><li><strong>h</strong> = altura</li></ul></div>'
},

'congruenciasdetriangulos-LLL': {
title: 'Área do Triângulo',
description: 'Cálculo da área do triângulo',
videoId: 'dQw4w9WgXcQ',
videoDuration: '4:20 minutos',
videoDate: 'Setembro 2023',
videoDescription: 'Área do triângulo.',
content: '<div class="math-display"><h3>Fórmula Básica</h3><p>$$A = \\frac{b \\times h}{2}$$</p><h3>Fórmula de Herão</h3><p>$$A = \\sqrt{s(s-a)(s-b)(s-c)}$$</p><p>Onde s é o semiperímetro.</p></div>'
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
sectionTitle: 'Sobre',
videoId: '',
videoDuration: '',
videoDate: '',
videoDescription: '',
content: '<div class="math-display"><h3>Geometria Demonstrada</h3><p>Produto educacional para o ensino de geometria.</p></div>'
},

'contato': {
title: 'Contato',
description: 'Entre em contato',
sectionTitle: 'Contato',
videoId: '',
videoDuration: '',
videoDate: '',
videoDescription: '',
content: '<div class="math-display"><h3>Contato</h3><p>Email: contato@exemplo.com</p></div>'
}

};

console.log('✅ PAGES_DATA carregado com', Object.keys(PAGES_DATA).length, 'páginas');
