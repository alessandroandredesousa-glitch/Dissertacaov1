// DADOS DAS PÁGINAS
const PAGES_DATA = {

    // ========== Capítulo 1 — Elementos Fundamentais ==========
    'reta-semirreta-segmento': {
        title: '1.1 Reta, Semirreta e Segmento',
        description: '',
        videoId: '9WkcbcVO9Gg',
        videoDuration: '0:57 minutos',
        videoDate: '26 de julho de 2026',
        videoDescription: 'Reta, semirreta e segmento de reta.',
        sectionTitle: '',
        content: `
        <div class="theorem">
            <h3>1.1 Reta, Semirreta e Segmento</h3>
            <p><strong>Ponto</strong>, <strong>reta</strong> e <strong>plano</strong> são <strong>noções primitivas</strong> da Geometria: conceitos aceitos sem definição, a partir dos quais todos os demais são construídos. Representamos pontos por letras maiúsculas (\\(A\\), \\(B\\)), retas por letras minúsculas (\\(r\\), \\(s\\)) e planos por letras gregas (\\(\\alpha\\), \\(\\beta\\)).</p>
        </div>

        <div class="math-display">
            <p>Adota-se o postulado fundamental: <strong>por dois pontos distintos passa uma, e somente uma, reta</strong>.</p>

            <p>Um ponto \\(O\\) de uma reta a divide em duas <strong>semirretas</strong> de origem \\(O\\). A semirreta de origem \\(O\\) que contém o ponto \\(A\\) é indicada por \\(\\overrightarrow{OA}\\). Duas semirretas de mesma origem, contidas numa mesma reta e de sentidos contrários, são chamadas <strong>semirretas opostas</strong>.</p>

            <p>Dados dois pontos distintos \\(A\\) e \\(B\\), o <strong>segmento de reta</strong> \\(\\overline{AB}\\) é a reunião de \\(A\\), \\(B\\) e de todos os pontos entre eles; \\(A\\) e \\(B\\) são suas <strong>extremidades</strong>. O comprimento (medida) de \\(\\overline{AB}\\) é indicado por \\(AB\\).</p>

            <p style="text-align: center; font-weight: bold;">Figura 1.1 – Reta \\(r\\), semirreta \\(\\overrightarrow{OA}\\) e segmento \\(\\overline{AB}\\)</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/1.1/img_reta_semirreta_segmento.png" alt="Reta r, semirretas opostas OA e OB, e segmento AB" style="max-width: 70%;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>O ponto \\(M\\) que divide \\(\\overline{AB}\\) em dois segmentos congruentes (\\(\\overline{AM} = \\overline{MB}\\)) é o seu <strong>ponto médio</strong>, estudado em detalhe na <a href="#" onclick="loadPage('ponto_medio')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 2.4.1</a>.</p>
        </div>
        `
    },

    'angulo-elementos': {
        title: '1.2 Ângulo: Definição e Elementos',
        description: '',
        videoId: 'p_jAhinA3OU',
        videoDuration: '1:08 minutos',
        videoDate: '26 de julho de 2026',
        videoDescription: 'Definição de ângulo, elementos e classificação inicial.',
        sectionTitle: '',
        content: `
        <div class="theorem">
            <h3>1.2 Ângulo: Definição e Elementos</h3>
            <p>Chama-se <strong>ângulo</strong> à reunião de duas semirretas de mesma origem e não contidas numa mesma reta (não colineares). Sendo \\(\\overrightarrow{OA}\\) e \\(\\overrightarrow{OB}\\) essas semirretas, o ângulo é indicado por \\(A\\widehat{O}B\\) (ou apenas \\(\\widehat{O}\\), quando não há ambiguidade).</p>
        </div>

        <div class="math-display">
            <ul>
                <li>O ponto \\(O\\) é o <strong>vértice</strong> do ângulo.</li>
                <li>As semirretas \\(\\overrightarrow{OA}\\) e \\(\\overrightarrow{OB}\\) são os <strong>lados</strong> do ângulo.</li>
            </ul>

            <p style="text-align: center; font-weight: bold;">Figura 1.2 – Ângulo \\(A\\widehat{O}B\\), com vértice \\(O\\) e lados \\(\\overrightarrow{OA}\\) e \\(\\overrightarrow{OB}\\)</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/1.2/img_angulo_elementos.png" alt="Ângulo AÔB com vértice O e lados OA e OB" style="max-width: 60%;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>A cada ângulo associa-se uma <strong>medida</strong> (ou amplitude) \\(m(A\\widehat{O}B)\\), um número real. A unidade usual é o <strong>grau</strong> (\\(^\\circ\\)): o ângulo reto mede \\(90^\\circ\\), e a medida \\(\\alpha\\) de um ângulo qualquer satisfaz \\(0^\\circ \\le \\alpha \\le 180^\\circ\\).</p>

            <p>Dois casos-limite completam a definição: o <strong>ângulo nulo</strong>, cujos lados coincidem (\\(0^\\circ\\)), e o <strong>ângulo raso</strong>, cujos lados são semirretas opostas (\\(180^\\circ\\)).</p>

            <h4>Ângulos consecutivos e adjacentes</h4>
            <p>Dois ângulos são <strong>consecutivos</strong> quando um lado de um coincide com um lado do outro (têm um lado comum). Dois ângulos consecutivos são <strong>adjacentes</strong> quando, além disso, não têm pontos internos comuns.</p>

            <p style="text-align: center; font-weight: bold;">Figura 1.3 – Ângulos adjacentes \\(A\\widehat{O}B\\) e \\(B\\widehat{O}C\\) (lado comum \\(\\overrightarrow{OB}\\))</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/1.2/img_angulos_consecutivos.png" alt="Ângulos adjacentes AÔB e BÔC com lado comum OB" style="max-width: 60%;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>A semirreta interna que divide um ângulo em dois ângulos congruentes é a sua <strong>bissetriz</strong> (ver <a href="#" onclick="loadPage('existencia-bissetriz')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 2.4.3</a>).</p>
        </div>
        `
    },

    'opostos-vertice': {
        title: '1.3 Ângulos Opostos pelo Vértice',
        description: '',
        videoId: 'M4OhnL0tNXk',
        videoDuration: '1:12 minutos',
        videoDate: '24 de julho de 2026',
        videoDescription: 'Ângulos opostos pelo vértice e sua congruência.',
        sectionTitle: '',
        content: `
        <div class="theorem">
            <h3>1.3 Ângulos Opostos pelo Vértice</h3>
            <p>Dois ângulos são <strong>opostos pelo vértice</strong> (o.p.v.) quando os lados de um são as semirretas opostas aos lados do outro. Duas retas concorrentes determinam <strong>dois pares</strong> de ângulos opostos pelo vértice.</p>
        </div>

        <div class="math-display">
            <p style="text-align: center; font-weight: bold;">Figura 1.4 – Ângulos opostos pelo vértice \\(A\\widehat{O}B\\) e \\(C\\widehat{O}D\\)</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/1.3/img_opostos_vertice.png" alt="Ângulos opostos pelo vértice AÔB e CÔD" style="max-width: 60%;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <div class="theorem">
                <h3>Teorema</h3>
                <p>Se dois ângulos são opostos pelo vértice, então eles são congruentes.</p>
            </div>

            <p><strong>Demonstração.</strong> Sejam \\(A\\widehat{O}B\\) e \\(C\\widehat{O}D\\) opostos pelo vértice, com \\(\\overrightarrow{OA}\\) oposta a \\(\\overrightarrow{OC}\\) e \\(\\overrightarrow{OB}\\) oposta a \\(\\overrightarrow{OD}\\). Considere o ângulo \\(B\\widehat{O}C\\), adjacente a ambos.</p>

            <p>Como \\(\\overrightarrow{OA}\\) e \\(\\overrightarrow{OC}\\) são opostas, \\(A\\widehat{O}C\\) é um ângulo raso, dividido pela semirreta \\(\\overrightarrow{OB}\\). Logo:</p>
            \\[ m(A\\widehat{O}B) + m(B\\widehat{O}C) = 180^\\circ. \\]

            <p>Como \\(\\overrightarrow{OB}\\) e \\(\\overrightarrow{OD}\\) são opostas, \\(B\\widehat{O}D\\) é um ângulo raso, dividido pela semirreta \\(\\overrightarrow{OC}\\). Logo:</p>
            \\[ m(B\\widehat{O}C) + m(C\\widehat{O}D) = 180^\\circ. \\]

            <p>Comparando as duas igualdades, \\(m(A\\widehat{O}B) = m(C\\widehat{O}D)\\), ou seja, \\(A\\widehat{O}B \\equiv C\\widehat{O}D\\).</p>
            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>
        </div>
        `
    },

    'complementares-suplementares': {
        title: '1.4 Ângulos Complementares, Suplementares e Ângulo Reto',
        description: '',
        videoId: 'PLACEHOLDER',
        videoDuration: 'a definir',
        videoDate: 'a gravar',
        videoDescription: 'Ângulos complementares, suplementares e ângulo reto.',
        sectionTitle: '',
        content: `
        <div class="theorem">
            <h3>1.4 Ângulos Complementares, Suplementares e Ângulo Reto</h3>
            <p>Conforme a sua medida, um ângulo é <strong>reto</strong> quando mede \\(90^\\circ\\), <strong>agudo</strong> quando mede menos de \\(90^\\circ\\) e <strong>obtuso</strong> quando mede mais de \\(90^\\circ\\).</p>
        </div>

        <div class="math-display">
            <div class="theorem">
                <p>Dois ângulos são <strong>complementares</strong> quando a soma de suas medidas é \\(90^\\circ\\); cada um é o <strong>complemento</strong> do outro.</p>
                <p>Dois ângulos são <strong>suplementares</strong> quando a soma de suas medidas é \\(180^\\circ\\); cada um é o <strong>suplemento</strong> do outro.</p>
            </div>

            <p style="text-align: center; font-weight: bold;">Figura 1.5 – Ângulos complementares (soma \\(90^\\circ\\)) e suplementares (soma \\(180^\\circ\\))</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/1.4/img_complementares_suplementares.png" alt="Ângulos complementares (soma 90°) e suplementares (soma 180°)" style="max-width: 100%; height: auto;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>Por exemplo, o complemento de \\(25^\\circ\\) é \\(65^\\circ\\) (pois \\(25^\\circ + 65^\\circ = 90^\\circ\\)) e o suplemento de \\(72^\\circ\\) é \\(108^\\circ\\) (pois \\(72^\\circ + 108^\\circ = 180^\\circ\\)).</p>

            <p>Um caso importante ocorre quando um lado de um ângulo é prolongado além do vértice: o ângulo \\(A\\widehat{O}B\\) e o ângulo \\(B\\widehat{O}C\\) formado pela semirreta oposta são <strong>suplementares adjacentes</strong>, e sua soma é o ângulo raso, \\(180^\\circ\\). Essa relação é a base da demonstração de que ângulos opostos pelo vértice são congruentes (<a href="#" onclick="loadPage('opostos-vertice')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 1.3</a>) e reaparece no <a href="#" onclick="loadPage('teorema-angulo-externo')" style="color: inherit; text-decoration: underline; cursor: pointer;">Teorema do Ângulo Externo (seção 2.5)</a>.</p>
        </div>
        `
    },

    // ========== Triângulos ==========
    'definicaotriangulos': {
        title: '2.1 Definição de Triângulos',
        description: '',
        sectionTitle: '',
        videoId: 'Xyblz3iS57Y',
        videoDuration: '1:00 minutos',
        videoDate: '28 de abril de 2026',
        videoDescription: 'Definição de triângulos',
        content: `
           <div class="theorem">
            <h3>2.1 Definição de Triângulo</h3>
            <p>Dados três pontos \\(A\\), \\(B\\) e \\(C\\) não colineares, dizemos que o triângulo \\(ABC\\) (denotado por \\(\\triangle ABC\\)) é a reunião dos segmentos \\(\\overline{AB}\\), \\(\\overline{AC}\\) e \\(\\overline{BC}\\).</p>
        </div>

        <div class="math-display">
            <p style="text-align: center; font-weight: bold;">Figura 2.1 – Triângulo ABC com vértices A, B e C</p>

            <div style="text-align: center; margin: 20px 0;">

                <img src="./imagem/2.1/img_definicaodetriangulos.png" alt="Pontos A, B e C" style="max-width: 70%;">

            </div>

            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
            <ul>
                <li>Os pontos \\(A\\), \\(B\\) e \\(C\\) são chamados de <strong>vértices</strong>.
                <li>Os segmentos \\(\\overline{AB}\\) (de medida \\(c\\)), \\(\\overline{AC}\\) (de medida \\(b\\)) e \\(\\overline{BC}\\) (de medida \\(a\\)) são chamados de <strong>lados</strong> do \\(\\triangle ABC\\).
            </ul>

            

            <p style="text-align: center; font-weight: bold;">Figura 2.2 – Lados do triângulo ABC</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="./imagem/2.1/img_definicaodetriangulos_1.png" alt="Lados do triângulo" style="max-width: 70%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <ul>
            <li>Os ângulos \\(B\\widehat{A}C\\) (ou \\(\\widehat{A}\\)), \\(A\\widehat{B}C\\) (ou \\(\\widehat{B}\\)) e \\(B\\widehat{C}A\\) (ou \\(\\widehat{C}\\)) são chamados de <strong>ângulos internos</strong> do \\(\\triangle ABC\\).
            Estes ângulos são opostos aos lados \\(a\\), \\(b\\) e \\(c\\), respectivamente.
            <ul>
            <p style="text-align: center; font-weight: bold;">Figura 2.3 – Ângulos internos e lados opostos do triângulo ABC</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.1/img_definicaodetriangulos_2.png" alt="Ângulos e lados opostos" style="max-width: 70%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
        </div>
        `
    },

    'classificacaotriangulos': {
        title: '2.2 Classificação dos Triângulos',
        description: '',
        videoId: '5EGzuVGgBO0',
        videoDuration: '1:13 minutos',
        videoDate: '04 de maio de 2026',
        videoDescription: 'Classificação dos Triângulos',
        sectionTitle: '',
        content: `
        <div class="theorem">
            <h3>2.2 Classificação</h3>
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

            <h3 style="text-align: center;">Resumindo .... </h3>
            <p style="text-align: center; font-weight: bold;">Figura 2.4 – Classificação dos triângulos quanto aos lados e ângulos internos</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.1/img_classsificacao_tri_3.png" alt="Classificação quanto aos lados e ângulos" style="max-width: 70%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
        </div>
    `
    },


    'definicaodecongruencia': {
        title: '2.3.1 Definição de Congruência',
        description: '',
        videoId: 'c75NEECgB4s',
        videoDuration: '1:17 minutos',
        videoDate: '10 de julho de 2026',
        videoDescription: 'Definição de congruência de triângulos.',
        sectionTitle: '',
        content: `
        <div class="theorem">
            <h3>2.3 Definição de Congruência</h3>
            <p>Dois triângulos são ditos congruentes se, e somente se, existe uma correspondência entre seus vértices, tal que:</p>
            <ul style="list-style-type: none; padding-left: 15px;">
                <li><strong>I)</strong> Os lados correspondentes são congruentes;</li>
                <li><strong>II)</strong> Os ângulos correspondentes são congruentes.</li>
            </ul>
        </div>

        <div class="math-display">
            <p style="text-align: center; font-weight: bold;">Figura 2.5 – Correspondência entre vértices de triângulos congruentes</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.2/img_congruenciadetriangulo_1.png" alt="Triângulos Congruentes" style="max-width: 70%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>Formalmente, a congruência entre o triângulo \\(ABC\\) e o triângulo \\(A'B'C'\\) implica nas seguintes igualdades:</p>
            
            <p>
                \\[
                \\triangle ABC \\equiv \\triangle A'B'C' \\implies 
                \\begin{cases} 
                \\overline{AB} = \\overline{A'B'} & \\quad e \\quad & \\widehat{A} = \\widehat{A'} \\
                \\overline{AC} = \\overline{A'C'} & \\quad e \\quad &\\widehat{B} = \\widehat{B'} \\
                \\overline{BC} = \\overline{B'C'} & \\quad e \\quad & \\widehat{C} = \\widehat{C'} 
                \\end{cases}
                \\]
            </p>
        </div>
    `
    },

    // ========== CASO DE CONGRUÊNCIAS (SUBMENU DE 2º NÍVEL) ==========
    'congruenciasdetriangulos-LAL': {
        title: '2.3.2 Congruência Lado-Ângulo-Lado (LAL)',
        description: '',
        videoId: 'glSWv63mKMM',
        videoDuration: '1:04',
        videoDate: '22/05/2026',
        videoDescription: 'Postulado LAL',
        sectionTitle: '',
        content: `
        <div class="theorem">
            <h3>Postulado de Congruência Lado-Ângulo-Lado (LAL)</h3>
            <p>Se dois triângulos possuem dois lados congruentes e o ângulo formado por esses lados também é congruente, então os triângulos são congruentes.</p>
        </div>

        <p style="text-align: center; font-weight: bold;">Figura 2.6 – Postulado de congruência Lado-Ângulo-Lado (LAL)</p>
        <div style="text-align: center; margin: 20px 0;">
            <img src="imagem/2.3/img_casaLAL_1.png" alt="Caso LAL" style="max-width: 70%;">
        </div>
        <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
        <div class="math-display">
            <p>
            \\[
                \\Delta ABC \\equiv \\Delta A'B'C' \\implies
                \\left\\{\\begin{array}{ll}
                    \\textcolor{#f67821}{\\overline{AB} = \\overline{A'B'}} & \\textcolor{#f67821}{e} \\quad \\textcolor{#f67821}{\\widehat{C} = \\widehat{C'}} \\
                    \\textcolor{#008000}{\\overline{AC} = \\overline{A'C'}} & \\textcolor{#008000}{e} \\quad \\textcolor{#008000}{\\widehat{B} = \\widehat{B'}} \\
                    \\overline{BC} = \\overline{B'C'} & e \\quad \\widehat{A} = \\widehat{A'}
                \\end{array}\\right.
            \\]
            </p>
        </div>
    `
    },

    'congruenciasdetriangulos-ALA': {
        title: '2.3.2 Congruência Ângulo-Lado-Ângulo (ALA)',
        description: '',
        videoId: 'NZ4-fDWQwKw',
        videoDuration: '2:56 Minutos',
        videoDate: '07 de junho de 2026',
        videoDescription: 'Caso ALA',
        sectionTitle: '',
        content: `
        <div class="theorem">
            <h3>Teorema de Congruência Ângulo-Lado-Ângulo (ALA)</h3>
            <p>Se dois triângulos possuem dois ângulos congruentes e o lado compreendido entre esses ângulos também é congruente, então os triângulos são congruentes.</p>
        </div>

        <div class="math-display">

            <p style="text-align: center; font-weight: bold;">Figura 2.7 – Triângulos ABC e A'B'C' com hipótese ALA</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.3/img_casa_ALA_1.png" alt="Triângulos ABC e A'B'C': Caso ALA" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Por hipótese, \\(\\widehat{A} \\equiv \\widehat{A'}\\), \\(\\widehat{B} \\equiv \\widehat{B'}\\) e 
                \\(\\overline{AB} = \\overline{A'B'}\\). Vamos mostrar que \\(\\overline{AC} = \\overline{A'C'}\\) 
                \\(\\Rightarrow \\triangle ABC \\equiv \\triangle A'B'C'\\).
            </p>

            <h4>Demonstração:</h4>
            <p>
                Tracemos uma reta \\(r\\) sobre o segmento \\(\\overline{A'C'}\\) e marquemos um ponto \\(X\\) sobre 
                \\(r\\) de tal modo que \\(\\overline{AC} = \\overline{A'X}\\).
            </p>
            <p style="text-align: center; font-weight: bold;">Figura 2.8 – Ponto X sobre a reta A'C' com A'X = AC</p>

            <div style="text-align: center; margin: 20px 0;">

                <img src="imagem/2.3/img_casa_ALA_2.png" alt="Triângulos ABC e A'B'C': Caso ALA" style="max-width: 70%;">

            </div>

            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
            <p>
                Com isso, \\(\\triangle ABC \\equiv \\triangle A'B'X\\) pelo <a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>. Como, por hipótese, 
                o ângulo \\(\\widehat{B} \\equiv \\widehat{B'}\\), logo o ponto \\(X = C'\\), 
                portanto \\(\\Rightarrow \\overline{AC} = \\overline{A'C'}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.9 – Coincidência X = C' e conclusão pelo caso LAL</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.3/img_casa_ALA_3.png" alt="Demonstração: ponto X sobre A'C'" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>Temos:</p>
            \\[
                \\left\\{\\begin{array}{l}
                    \\overline{AC} = \\overline{A'C'} \\
                    \\widehat{A} \\equiv \\widehat{A'} \\
                    \\overline{AB} = \\overline{A'B'}
                \\end{array}\\right.
                \\Rightarrow \\triangle ABC \\equiv \\triangle A'B'C' \\quad \\text{(pelo caso LAL)}
            \\]
        </div>
    `
    },

    'congruenciasdetriangulos-LLL': {
        title: '2.3.3 Congruência Lado-Lado-Lado (LLL)',
        description: '',
        videoId: 'TQV90EEjjt8',
        videoDuration: '3:20 Minutos',
        videoDate: '07 de junho de 2026',
        videoDescription: 'Congruência LLL',
        sectionTitle: '',
        content: `
        <div class="theorem">
            <h3>Teorema de Congruência Lado-Lado-Lado (LLL)</h3>
            <p>Se dois triângulos possuem os três lados congruentes, então os triângulos são congruentes.</p>
        </div>

        <div class="math-display">

            <h4>Demonstração:</h4>

            <p>
                Vamos construir o ângulo \\(C\\widehat{A}B\\) no semiplano oposto ao ponto \\(F\\),
                tomando um ponto \\(X\\) tal que \\(E\\widehat{D}X \\equiv C\\widehat{A}B\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.10 – Construção do ângulo EDX ≡ CAB</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.3/img_caso_LLL_1.png" alt="Construção do ponto X" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Tomamos um ponto \\(H\\) sobre a reta \\(\\overleftrightarrow{DX}\\), tal que
                \\(\\overline{DH} = \\overline{AC}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.11 – Ponto H sobre a reta DX com DH = AC</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.3/img_caso_LLL_2.png" alt="Ponto H sobre DX" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>Note que:</p>
            \\[
                \\left\\{\\begin{array}{l}
                    E\\widehat{D}H \\equiv C\\widehat{A}B \\
                    \\overline{DH} = \\overline{AC} \\
                    \\overline{DE} = \\overline{AB}
                \\end{array}\\right.
                \\quad \\quad \\Rightarrow \\quad \\quad \\triangle DHE \\equiv \\triangle ABC \\quad \\text{(Caso LAL)}
            \\]
            <p>onde \\(\\overline{DH} = \\overline{AC}\\) por construção e \\(\\overline{DE} = \\overline{AB}\\) pela hipótese.</p>

            <p>
                Traçando \\(FH\\), obtemos o \\(\\triangle DFH\\) que é isósceles, pois
                \\(\\overline{DH} = \\overline{AC}\\) e \\(\\overline{DF} = \\overline{AC}\\),
                portanto \\(D\\widehat{H}F \\equiv D\\widehat{F}H\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.12 – Triângulo DFH isósceles</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.3/img_caso_LLL_3.png" alt="Triângulo DFH isósceles" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Com o mesmo raciocínio, podemos concluir que o \\(\\triangle FEH\\) é isósceles
                e \\(E\\widehat{F}H \\equiv F\\widehat{H}E\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.13 – Triângulo FEH isósceles</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.3/img_caso_LLL_4.png" alt="Triângulo FEH isósceles" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>Portanto:</p>
            \\[
                \\left\\{\\begin{array}{l}
                    D\\widehat{F}E = D\\widehat{F}H + H\\widehat{F}E \\
                    D\\widehat{H}E = D\\widehat{H}F + E\\widehat{H}F
                \\end{array}\\right.
            \\]

            <p>
                Como \\(D\\widehat{F}H \\equiv D\\widehat{H}F\\) e \\(H\\widehat{F}E \\equiv E\\widehat{H}F\\), logo:
            </p>
            \\[
                D\\widehat{F}E \\equiv D\\widehat{H}E
            \\]

            <p style="text-align: center; font-weight: bold;">Figura 2.14 – Conclusão △ABC ≡ △DEF pelo caso LAL</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.3/img_caso_LLL_5.png" alt="Conclusão LAL" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>Temos:</p>
            \\[
                \\left\\{\\begin{array}{l}
                    \\overline{DF} = \\overline{DH} \\
                    D\\widehat{H}E \\equiv D\\widehat{F}E \\
                    \\overline{HE} = \\overline{FE}
                \\end{array}\\right.
                \\quad \\quad \\Rightarrow \\quad \\quad \\triangle DHE \\equiv \\triangle DEF \\quad \\text{(LAL)}
            \\]

            <p>
                Como \\(\\triangle ABC \\equiv \\triangle DHE\\) e \\(\\triangle DHE \\equiv \\triangle DEF\\),
                então:
            </p>
            \\[
                \\triangle ABC \\equiv \\triangle DEF
            \\]

        </div>
    `
    },

    // ========== CONSTRUÇÕES GEOMÉTRICAS (SUBMENU DE 2º NÍVEL) ==========
    'ponto_medio': {
        title: '2.4.1 Ponto Médio',
        description: 'Cálculo do ponto médio',
        videoId: 'Og-MoQOlV2Y',
        videoDuration: '3:09 minutos',
        videoDate: '10 de julho de 2026',
        videoDescription: 'Definição do ponto médio e demonstração de sua existência.',
        content: `
        <div class="theorem">
            <h3>Definição de Ponto Médio</h3>
            <p>
                Dado um segmento \\(\\overline{AB}\\), dizemos que um ponto \\(M\\) é o <strong>ponto médio</strong> 
                de \\(\\overline{AB}\\) se \\(M\\) está entre \\(A\\) e \\(B\\) e 
                \\(\\overline{AM} = \\overline{MB}\\).
            </p>
        </div>

        <div class="math-display">

            <h4>Demonstração da Existência:</h4>

            <p>
                Dado um segmento \\(\\overline{AB}\\), constrói-se pontos \\(C\\) e \\(D\\) em semiplanos 
                opostos em relação ao segmento \\(\\overline{AB}\\), de modo que:
            </p>
            \\[
                \\left\\{\\begin{array}{l}
                    C\\widehat{A}B \\equiv A\\widehat{B}D \\
                    \\overline{AC} = \\overline{BD}
                \\end{array}\\right.
            \\]

            <p style="text-align: center; font-weight: bold;">Figura 2.15 – Pontos C e D em semiplanos opostos em relação a AB</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.4/img_pontomedio_1.png" alt="Pontos C e D em semiplanos opostos" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                O segmento \\(\\overline{CD}\\) intercepta o segmento \\(\\overline{AB}\\) em um ponto \\(M\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.16 – Segmento CD interceptando AB no ponto M</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.4/img_pontomedio_2.png" alt="Segmento CD interceptando AB no ponto M" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <h4>Note que:</h4>
            <ul>
                <li>
                    \\(\\triangle CAB \\equiv \\triangle ABD\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>)
                </li>
                <p style="text-align: center; font-weight: bold;">Figura 2.17 – Congruência △CAB ≡ △ABD pelo caso LAL</p>

                <div style="text-align: center; margin: 20px 0;">

                    <img src="imagem/2.4/img_pontomedio_3.png" alt="Segmento CD interceptando AB no ponto M" style="max-width: 70%;">

                </div>

                <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
                <li>
                    \\(\\triangle ACD \\equiv \\triangle CDB\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-LLL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LLL</a>), pois \\(\\overline{AD} = \\overline{CB}\\) 
                    pela congruência anterior
                </li>
                <p style="text-align: center; font-weight: bold;">Figura 2.18 – Congruência △ACD ≡ △CDB pelo caso LLL</p>

                <div style="text-align: center; margin: 20px 0;">

                    <img src="imagem/2.4/img_pontomedio_4.png" alt="Segmento CD interceptando AB no ponto M" style="max-width: 70%;">

                </div>

                <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
                <li>
                    \\(\\triangle AMD \\equiv \\triangle BMC\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-ALA')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso ALA</a>: \\(B\\widehat{A}D \\equiv A\\widehat{B}C\\), 
                    \\(\\overline{AD} = \\overline{BC}\\), \\(A\\widehat{D}C \\equiv D\\widehat{C}B\\))
                </li>
                <p style="text-align: center; font-weight: bold;">Figura 2.19 – Congruência △AMD ≡ △BMC pelo caso ALA</p>

                <div style="text-align: center; margin: 20px 0;">

                    <img src="imagem/2.4/img_pontomedio_5.png" alt="Segmento CD interceptando AB no ponto M" style="max-width: 70%;">

                </div>

                <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            </ul>

            <p>
                Como \\(\\triangle AMD \\equiv \\triangle BMC\\), então \\(\\overline{AM} = \\overline{MB}\\), 
                ou seja, \\(M\\) é ponto médio de \\(\\overline{AB}\\).
            </p>
            <p style="text-align: left; margin-top: 10px; padding-left: 95%;">\\(\\blacksquare\\)</p>

            </div>
    `
    },

    'mediana-triangulo': {
        title: '2.4.2 Mediana de um Triângulo',
        description: '',
        videoId: 'uyL567-x_VI',
        videoDuration: '0:50 minutos',
        videoDate: '10 de julho de 2026',
        videoDescription: 'Definição de mediana e do baricentro do triângulo.',
        sectionTitle: '',
        content: `
        <div class="theorem">
            <h3>Definição de Mediana</h3>
            <p>
                Dado um triângulo \\(\\triangle ABC\\), a <strong>mediana</strong> relativa ao lado 
                \\(\\overline{AB}\\) é o segmento que une o vértice \\(C\\) ao ponto médio \\(M\\) 
                do lado \\(\\overline{AB}\\).
            </p>
        </div>

        <div class="math-display">

            <p style="text-align: center; font-weight: bold;">Figura 2.20 – Mediana relativa ao lado AB do triângulo ABC</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.4/img_mediana_1.png" alt="Mediana do triângulo ABC" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Todo triângulo possui três medianas, cada uma relativa a um de seus lados:
            </p>

            <ul>
                <li>Mediana relativa ao lado \\(\\overline{AB}\\): segmento \\(\\overline{CM_c}\\), onde \\(M_c\\) é o ponto médio de \\(\\overline{AB}\\).</li>
                <li>Mediana relativa ao lado \\(\\overline{AC}\\): segmento \\(\\overline{BM_b}\\), onde \\(M_b\\) é o ponto médio de \\(\\overline{AC}\\).</li>
                <li>Mediana relativa ao lado \\(\\overline{BC}\\): segmento \\(\\overline{AM_a}\\), onde \\(M_a\\) é o ponto médio de \\(\\overline{BC}\\).</li>
            </ul>

            <p style="text-align: center; font-weight: bold;">Figura 2.21 – As três medianas do triângulo ABC concorrendo no baricentro G</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.4/img_mediana_2.png" alt="As três medianas do triângulo" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Um resultado notável, que será explorado futuramente, é que as três medianas são
                <strong>concorrentes</strong>: elas se encontram em um único ponto \\(G\\),
                chamado <strong>baricentro</strong> (ou centróide) do triângulo, que divide
                cada mediana na razão \\(2:1\\) a partir do vértice.
            </p>

        </div>
    `
    },

   'existencia-bissetriz': {
    title: '2.4.3 Definição e Existência da Bissetriz',
    description: '',
    videoId: 'LfA7spPwVis',
    videoDuration: '2:31 minutos',
    videoDate: '10 de julho de 2026',
    videoDescription: 'Definição e demonstração da existência da bissetriz.',
    sectionTitle: '',
    content: `
        <div class="theorem">
            <h3>Definição de Bissetriz de um Ângulo</h3>
            <p>
                Dado um ângulo \\(A\\widehat{O}B\\), a <strong>bissetriz</strong> desse ângulo é a semirreta 
                \\(\\overrightarrow{OC}\\) que parte do vértice \\(O\\), está contida no interior do ângulo 
                \\(A\\widehat{O}B\\) e o divide em dois ângulos congruentes, isto é:
            </p>
            \\[
                A\\widehat{O}C \\equiv C\\widehat{O}B
            \\]
        </div>

        <div class="math-display">

            <h4>Demonstração da Existência:</h4>

            <p>
                Dado um ângulo \\(a\\widehat{O}b\\), escolhemos pontos \\(A\\) e \\(A'\\) pertencentes 
                à semirreta \\(\\overrightarrow{Oa}\\) e pontos \\(B\\) e \\(B'\\) pertencentes à 
                semirreta \\(\\overrightarrow{Ob}\\), de tal modo que:
            </p>
            \\[
                \\left\\{\\begin{array}{l}
                    \\overline{OA} = \\overline{OB} \\
                    \\overline{OB'} \\equiv \\overline{OB'}
                \\end{array}\\right.
            \\]
            <p>
                com \\(\\overline{OA'} > \\overline{OA}\\) e \\(\\overline{OB'} > \\overline{OB}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.22 – Ângulo aOb com pontos A, A', B, B' nas semirretas</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.4/img_bissetriz_1.png" alt="Ângulo aOb com pontos A, A', B, B'" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Façamos \\(\\overline{AB'}\\) e \\(\\overline{BA'}\\). Seja \\(C\\) o ponto de interseção de 
                \\(\\overline{AB'}\\) e \\(\\overline{BA'}\\). Consideremos a semirreta \\(\\overrightarrow{OC}\\). Temos:
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.23 – Ponto C interseção de AB' e BA'</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.4/img_bissetriz_2.png" alt="Ponto C interseção de AB' e BA'" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <ul>
                <li>
                    O triângulo \\(\\triangle OBA' \\equiv \\triangle OAB'\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>)
                </li>
            </ul>

            <p style="text-align: center; font-weight: bold;">Figura 2.24 – Congruência △OBA' ≡ △OAB' pelo caso LAL</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.4/img_bissetriz_3.png" alt="Congruência LAL" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <ul>
                <li>
                    O triângulo \\(\\triangle ACA' \\equiv \\triangle BCB'\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-ALA')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso ALA</a>)
                </li>
            </ul>

            <p style="text-align: center; font-weight: bold;">Figura 2.25 – Congruência △ACA' ≡ △BCB' pelo caso ALA</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.4/img_bissetriz_4.png" alt="Congruência ALA" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <ul>
                <li>
                    O triângulo \\(\\triangle OAC \\equiv \\triangle OBC\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>)
                </li>
            </ul>

            <p style="text-align: center; font-weight: bold;">Figura 2.26 – Congruência △OAC ≡ △OBC e bissetriz OC</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.4/img_bissetriz_5.png" alt="Congruência LAL final" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Desta última congruência, \\(A\\widehat{O}C \\equiv C\\widehat{O}B\\), ou seja, 
                \\(\\overrightarrow{OC}\\) é bissetriz de \\(a\\widehat{O}b\\).
            </p>
            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

        </div>
    `
},

'bissetriz-triangulo': {
    title: '2.4.4 Bissetriz de um Triângulo',
    description: '',
    videoId: 'dNrLqm0FWRQ',
    videoDuration: '0:56 minutos',
    videoDate: '24 de julho de 2026',
    videoDescription: 'Bissetriz de um triângulo e o incentro.',
    sectionTitle: '',
    content: `
        <div class="math-display">

            <h3>2.4.4 Bissetriz de um Triângulo</h3>

            <div class="theorem">
                <p>
                    Dado um triângulo \\(\\triangle ABC\\), a <strong>bissetriz interna</strong> relativa
                    ao vértice \\(A\\) é o segmento que parte de \\(A\\), bissecta o ângulo interno
                    \\(\\widehat{A}\\) e tem sua outra extremidade no ponto \\(D\\) de interseção com o
                    lado oposto \\(\\overline{BC}\\).
                </p>
            </div>

            <p style="text-align: center; font-weight: bold;">Figura 2.27 – Bissetriz interna \\(\\overline{AD}\\) do triângulo \\(ABC\\) relativa ao vértice \\(A\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.4/img_bissetriz_triangulo_1.png" alt="Bissetriz interna AD do triângulo ABC" style="max-width: 60%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Como um triângulo possui três vértices, ele possui três bissetrizes internas,
                uma relativa a cada vértice. Um resultado notável, que será explorado futuramente,
                é que essas três bissetrizes são <strong>concorrentes</strong>: elas se encontram
                em um único ponto \\(I\\), chamado <strong>incentro</strong> do triângulo,
                que é equidistante dos três lados.
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.28 – As três bissetrizes internas do triângulo \\(ABC\\) concorrendo no incentro \\(I\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.4/img_bissetriz_triangulo_2.png" alt="As três bissetrizes do triângulo ABC e o incentro I" style="max-width: 60%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

        </div>
    `
},

'teorema-angulo-externo': {
    title: '2.5 Teorema do Ângulo Externo',
    description: '',
    videoId: 'Ypl2sZm-8do',
    videoDuration: '2:36 minutos',
    videoDate: '24 de julho de 2026',
    videoDescription: 'Teorema do ângulo externo e sua demonstração.',
    sectionTitle: '',
    content: `
        <div class="math-display">

            <h3>2.5 Teorema do Ângulo Externo</h3>

            <div class="theorem">
                <p>
                    Um ângulo externo de um triângulo é maior que qualquer um dos ângulos internos não adjacentes.
                </p>
            </div>

            <p>
                Dado um \\(\\triangle ABC\\) e sendo \\(\\overrightarrow{CX}\\) a semirreta oposta à semirreta 
                \\(\\overrightarrow{CB}\\), o ângulo \\(\\varepsilon = A\\widehat{C}X\\) é o ângulo externo do 
                triângulo \\(ABC\\), adjacente a \\(\\widehat{C}\\) e não adjacente a \\(\\widehat{A}\\) e \\(\\widehat{B}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.29 – Triângulo ABC com ângulo externo ε</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.5/img_angulo_externo_1.png" alt="Triângulo ABC com ângulo externo ε" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <h4>Demonstração:</h4>

            <p>
                Seja \\(M\\) o ponto médio de \\(\\overline{AC}\\), e tomemos um ponto \\(P\\) sobre a 
                semirreta \\(\\overrightarrow{BM}\\) de modo que \\(\\overline{BM} = \\overline{MP}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.30 – Ponto M médio de AC e ponto P sobre a semirreta BM</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.5/img_angulo_externo_2.png" alt="Ponto M médio de AC e ponto P sobre BM" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Note que \\(\\triangle BMA \\equiv \\triangle CMP\\) (<a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>), então 
                \\(B\\widehat{A}C \\equiv M\\widehat{C}P\\). Como \\(M\\widehat{C}P\\) é interno a 
                \\(\\varepsilon\\), logo \\(\\varepsilon > M\\widehat{C}P \\Rightarrow \\varepsilon > B\\widehat{A}C\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.31 – Congruência △BMA ≡ △CMP pelo caso LAL</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.5/img_angulo_externo_3.png" alt="Congruência LAL" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>


            <p>
                De maneira análoga, seja \\(M\\) o ponto médio do segmento \\(\\overline{BC}\\) e \\(P\\) 
                um ponto pertencente à semirreta \\(\\overrightarrow{AM}\\), tal que 
                \\(\\overline{AM} = \\overline{MP}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.32 – Ponto M médio de BC e ponto P sobre a semirreta AM</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.5/img_angulo_externo_4.png" alt="Ponto M médio de BC e ponto P sobre AM" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Note que \\(\\triangle BMA \\equiv \\triangle PMC\\) (pelo <a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>), então 
                \\(A\\widehat{B}C \\equiv M\\widehat{C}P\\).
            </p>

            <p>
                Tomemos um ponto \\(K\\) pertencente à semirreta \\(\\overrightarrow{PC}\\), tal que 
                \\(K\\) está fora do segmento \\(\\overline{PC}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.33 – Ponto K sobre a semirreta PC</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.5/img_angulo_externo_5.png" alt="Ponto K sobre semirreta PC" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Perceba que \\(K\\widehat{C}X \\equiv M\\widehat{C}P\\) (opostos pelo vértice).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.34 – Ângulos opostos pelo vértice KCX e MCP</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/2.5/img_angulo_externo_6.png" alt="Ângulos opostos pelo vértice" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                O ângulo \\(K\\widehat{C}X\\) é interno ao ângulo \\(\\varepsilon\\), então 
                \\(\\varepsilon > K\\widehat{C}X\\). Como \\(K\\widehat{C}X \\equiv M\\widehat{C}P \\equiv A\\widehat{B}C\\), 
                temos que \\(\\varepsilon > A\\widehat{B}C\\).
            </p>

            <p>
                Com isso \\(\\varepsilon > B\\widehat{A}C\\) e \\(\\varepsilon > A\\widehat{B}C\\), ou seja, 
                \\(\\varepsilon\\) é maior que os dois ângulos internos do \\(\\triangle ABC\\) não adjacentes a ele.
            </p>
            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

        </div>
    `
},

    'congruencia-LAA': {
    title: '2.6 Congruência de Triângulos: Caso LAA(o)',
    description: '',
    videoId: 'SEU_VIDEO_ID',
    videoDuration: '',
    videoDate: '',
    videoDescription: 'Caso de Congruência LAA(o)',
    sectionTitle: '',
    content: `
        <div class="math-display">

            <h3>2.6 Teorema de Congruência \\(\\text{LAA}_o\\)</h3>

            <div class="theorem">
                <p>
                    Dados dois triângulos \\(\\triangle ABC\\) e \\(\\triangle DEF\\) tais que:
                </p>
                \\[
                    \\left\\{\\begin{array}{l}
                        \\overline{AB} = \\overline{DE} \\
                        \\widehat{B} \\equiv \\widehat{E} \\
                        \\widehat{C} \\equiv \\widehat{F}
                    \\end{array}\\right.
                \\]
                <p>
                    Então \\(\\triangle ABC \\equiv \\triangle DEF\\).
                </p>
            </div>

            <p>
                A hipótese estabelece a igualdade de um lado (\\(\\overline{AB} = \\overline{DE}\\)),
                do ângulo adjacente a esse lado em cada triângulo (\\(\\widehat{B} \\equiv \\widehat{E}\\))
                e do ângulo oposto a esse lado (\\(\\widehat{C} \\equiv \\widehat{F}\\)).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.35 – Triângulos \\(ABC\\) e \\(DEF\\) com hipótese do caso \\(\\text{LAA}_o\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.6/img_congruencia_LAA_1.png" alt="Triângulos ABC e DEF com as marcações da hipótese LAA(o)" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <h4>Demonstração:</h4>

            <p>
                Consideremos as três possibilidades para \\(\\overline{BC}\\) em relação a \\(\\overline{EF}\\):
            </p>

            <p>
                <strong>(1) \\(\\overline{BC} = \\overline{EF}\\):</strong>
                Temos \\(\\overline{AB} = \\overline{DE}\\), \\(\\widehat{B} \\equiv \\widehat{E}\\) e
                \\(\\overline{BC} = \\overline{EF}\\). Pelo
                <a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>,
                \\(\\triangle ABC \\equiv \\triangle DEF\\). \\(\\checkmark\\)
            </p>

            <p>
                <strong>(2) \\(\\overline{EF} > \\overline{BC}\\):</strong>
                Tomamos um ponto \\(P\\) interno a \\(\\overline{EF}\\) tal que \\(\\overline{EP} = \\overline{BC}\\).
                Pelo caso LAL (\\(\\overline{AB} = \\overline{DE}\\), \\(\\widehat{E} \\equiv \\widehat{B}\\),
                \\(\\overline{EP} = \\overline{BC}\\)), temos \\(\\triangle ABC \\equiv \\triangle DEP\\),
                e portanto \\(D\\widehat{P}E \\equiv \\widehat{C} \\equiv \\widehat{F}\\).
                Mas \\(D\\widehat{P}E\\) é ângulo externo de \\(\\triangle DPF\\), logo pelo
                <a href="#" onclick="loadPage('teorema-angulo-externo')" style="color: inherit; text-decoration: underline; cursor: pointer;">Teorema do Ângulo Externo</a>,
                \\(D\\widehat{P}E > \\widehat{F}\\). Contradição.
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.36 – Caso \\(\\overline{EF} > \\overline{BC}\\): ponto \\(P\\) interno a \\(\\overline{EF}\\) e contradição pelo Teorema do Ângulo Externo</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.6/img_congruencia_LAA_2.png" alt="Ponto P interno a EF e contradição pelo ângulo externo" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                <strong>(3) \\(\\overline{BC} > \\overline{EF}\\):</strong>
                Análogo ao caso (2), com ponto \\(P\\) interno a \\(\\overline{BC}\\), chegando à mesma contradição.
            </p>

            <p>
                Portanto, necessariamente \\(\\overline{BC} = \\overline{EF}\\), e pelo caso (1),
                \\(\\triangle ABC \\equiv \\triangle DEF\\).
            </p>
            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

        </div>
    `
},

    'maior-lado-maior-angulo': {
    title: '2.7.1 Relação entre Lados e Ângulos Opostos',
    description: '',
    videoId: 'SEU_VIDEO_ID',
    videoDuration: '',
    videoDate: '',
    videoDescription: 'Relação entre Lados e Ângulos Opostos em um Triângulo',
    sectionTitle: '',
    content: `
        <div class="math-display">

            <h3>2.7.1 Relação entre Lados e Ângulos Opostos</h3>

            <div class="theorem">
                <p><strong>Teorema.</strong>
                    Em um triângulo \\(ABC\\), \\(\\overline{AB} > \\overline{AC}\\) se, e somente se,
                    \\(\\widehat{C} > \\widehat{B}\\).
                </p>
            </div>

            <p>
                Demonstraremos as duas implicações separadamente.
            </p>

            <h4>Demonstração (\\(\\Rightarrow\\)): Se \\(\\overline{AB} > \\overline{AC}\\), então \\(\\widehat{C} > \\widehat{B}\\).</h4>

            <p style="text-align: center; font-weight: bold;">Figura 2.37 – Triângulo ABC com AB > AC</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.6/img_maior_lado_1.png" alt="Triângulo ABC com AB maior que AC" style="max-width: 60%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Seja \\(D\\) um ponto sobre \\(\\overline{AB}\\) de tal modo que
                \\(\\overline{AC} = \\overline{AD}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.38 – Ponto D sobre AB com AD = AC</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.6/img_maior_lado_2.png" alt="Ponto D sobre AB com AD = AC" style="max-width: 60%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Como \\(\\overline{AB} > \\overline{AC}\\), o ponto \\(D\\) é interno ao segmento \\(\\overline{AB}\\),
                portanto \\(A\\widehat{C}B > A\\widehat{C}D\\).
            </p>

            <p>
                Observe que o \\(\\triangle ACD\\) é isósceles de base \\(\\overline{CD}\\), pois
                \\(\\overline{AC} = \\overline{AD}\\). Logo:
            </p>
            \\[
                A\\widehat{C}D = A\\widehat{D}C
            \\]

            <p>
                Mas \\(A\\widehat{D}C\\) é ângulo externo ao triângulo \\(\\triangle BDC\\), portanto,
                pelo <a href="#" onclick="loadPage('teorema-angulo-externo')" style="color: inherit; text-decoration: underline; cursor: pointer;">Teorema do Ângulo Externo</a>:
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.39 – Triângulo BDC com ângulo externo \\(A\\widehat{D}C\\) em destaque</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.6/img_maior_lado_3.png" alt="Triângulo BDC destacado com ângulo externo ADC" style="max-width: 60%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            \\[
                A\\widehat{D}C > D\\widehat{B}C = \\widehat{B}
            \\]

            <p>De sorte que:</p>
            \\[
                \\widehat{B} < A\\widehat{D}C = A\\widehat{C}D < A\\widehat{C}B = \\widehat{C}
            \\]

            <p>Portanto \\(\\widehat{C} > \\widehat{B}\\).</p>
            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <h4>Demonstração (\\(\\Leftarrow\\)): Se \\(\\widehat{C} > \\widehat{B}\\), então \\(\\overline{AB} > \\overline{AC}\\).</h4>

            <p>
                Suponha, por contradição, que \\(\\overline{AB} \\leq \\overline{AC}\\). Há dois casos:
            </p>

            <p>
                <strong>Caso 1:</strong> Se \\(\\overline{AB} = \\overline{AC}\\), o triângulo é isósceles e
                \\(\\widehat{B} = \\widehat{C}\\), contrariando \\(\\widehat{C} > \\widehat{B}\\).
            </p>

            <p>
                <strong>Caso 2:</strong> Se \\(\\overline{AB} < \\overline{AC}\\), então pela direção
                \\(\\Rightarrow\\) já demonstrada (com os papéis de \\(AB\\) e \\(AC\\) trocados),
                teríamos \\(\\widehat{B} > \\widehat{C}\\), também uma contradição.
            </p>

            <p>
                Portanto a hipótese \\(\\overline{AB} \\leq \\overline{AC}\\) é falsa, e conclui-se que
                \\(\\overline{AB} > \\overline{AC}\\).
            </p>
            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

        </div>
    `
},

    'desigualdade-triangular': {
    title: '2.7.2 A Desigualdade Triangular',
    description: '',
    videoId: 'SEU_VIDEO_ID',
    videoDuration: '',
    videoDate: '',
    videoDescription: 'A Desigualdade Triangular',
    sectionTitle: '',
    content: `
        <div class="math-display">

            <h3>2.7.2 A Desigualdade Triangular</h3>

            <div class="theorem">
                <p>
                    Em todo triângulo, cada lado é menor que a soma dos outros dois.
                </p>
            </div>

            <p>
                Seja \\(\\triangle ABC\\) com \\(\\overline{AB} = c\\), \\(\\overline{AC} = b\\) e \\(\\overline{BC} = a\\).
                Vamos mostrar que \\(c + b > a\\), isto é, \\(\\overline{AB} + \\overline{AC} > \\overline{BC}\\).
                As demais desigualdades seguem por argumento análogo com os papéis dos lados permutados.
            </p>

            <h4>Demonstração:</h4>

            <p style="text-align: center; font-weight: bold;">Figura 2.39 – Triângulo \\(ABC\\) com lados \\(a\\), \\(b\\) e \\(c\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.7/img_desigualdade_triangular_1.png" alt="Triângulo ABC com lados a, b e c" style="max-width: 60%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Seja \\(D\\) um ponto na extensão de \\(\\overrightarrow{BA}\\) além de \\(A\\),
                de tal modo que \\(\\overline{AD} = \\overline{AC}\\).
                Os pontos ficam na ordem \\(B\\text{-}A\\text{-}D\\) sobre a reta.
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 2.40 – Ponto \\(D\\) na extensão de \\(\\overrightarrow{BA}\\) com \\(\\overline{AD} = \\overline{AC}\\) e \\(\\triangle ACD\\) isósceles</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.7/img_desigualdade_triangular_2.png" alt="Ponto D na extensão de BA com AD = AC, triângulo ACD isósceles" style="max-width: 60%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Como \\(\\overline{AC} = \\overline{AD}\\), o triângulo \\(\\triangle ACD\\) é isósceles
                de base \\(\\overline{CD}\\). Portanto:
            </p>
            \\[
                A\\widehat{C}D = A\\widehat{D}C
            \\]

            <p>
                Como \\(A\\) é interno ao segmento \\(\\overline{BD}\\), o ângulo \\(B\\widehat{C}D\\) contém
                \\(A\\widehat{C}D\\) como parte, portanto:
            </p>
            \\[
                B\\widehat{C}D > A\\widehat{C}D = A\\widehat{D}C = B\\widehat{D}C
            \\]

            <p style="text-align: center; font-weight: bold;">Figura 2.41 – No triângulo \\(BCD\\), \\(B\\widehat{C}D > B\\widehat{D}C\\), logo \\(\\overline{BD} > \\overline{BC}\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.7/img_desigualdade_triangular_3.png" alt="Triângulo BCD com ângulo BCD maior que BDC" style="max-width: 60%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Assim, no triângulo \\(\\triangle BCD\\), temos \\(B\\widehat{C}D > B\\widehat{D}C\\).
                Pelo <a href="#" onclick="loadPage('maior-lado-maior-angulo')" style="color: inherit; text-decoration: underline; cursor: pointer;">Teorema 1.7.1</a>, o maior ângulo se opõe ao maior lado:
            </p>
            \\[
                \\overline{BD} > \\overline{BC}
            \\]

            <p>
                Como a ordem é \\(B\\text{-}A\\text{-}D\\):
            </p>
            \\[
                \\overline{BD} = \\overline{BA} + \\overline{AD}
            \\]

            <p>
                Logo \\(\\overline{BA} + \\overline{AD} > \\overline{BC}\\).
                Como \\(\\overline{AD} = \\overline{AC}\\), conclui-se:
            </p>
            \\[
                \\overline{BA} + \\overline{AC} > \\overline{BC} \\quad \\text{ou seja,} \\quad c + b > a
            \\]
            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

        </div>
    `
},

    // ========== PARALELISMO ==========
    'paralelas-transversal': {
        title: '2.8.1 Retas Paralelas e Ângulos com Transversal',
        description: '',
        videoId: 'SEU_VIDEO_ID',
        videoDuration: '',
        videoDate: '',
        videoDescription: 'Retas Paralelas e Ângulos com Transversal',
        sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>2.8.1 Retas Paralelas e Ângulos com Transversal</h3>

            <div class="theorem">
                <p>
                    Duas retas coplanares \\(a\\) e \\(b\\) são ditas <strong>paralelas</strong>
                    (notação: \\(a \\parallel b\\)) se não possuem nenhum ponto em comum.
                    Caso contrário, são chamadas <strong>concorrentes</strong>.
                </p>
            </div>

            <p style="text-align: center; font-weight: bold;">Figura 2.42 – Retas paralelas \\(a\\) e \\(b\\) e retas concorrentes</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.8/img_paralelas_1.png" alt="Retas paralelas e retas concorrentes" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Quando uma reta \\(t\\) corta duas retas \\(a\\) e \\(b\\) em pontos distintos,
                dizemos que \\(t\\) é uma <strong>transversal</strong> de \\(a\\) e \\(b\\).
                São formados 8 ângulos, que recebem nomes conforme sua posição:
            </p>

            <div class="theorem">
                <p>Sendo \\(t\\) uma transversal às retas \\(a\\) e \\(b\\), os 8 ângulos formados classificam-se em:</p>
                <ul style="margin-top: 10px;">
                    <li>
                        <strong>Ângulos alternos internos:</strong> como \\(\\widehat{\\mathit{3}}\\) e \\(\\widehat{\\mathit{5}}\\), estão entre as retas \\(a\\) e \\(b\\) em lados opostos da transversal.
                    </li>
                    <li>
                        <strong>Ângulos alternos externos:</strong> como \\(\\widehat{\\mathit{1}}\\) e \\(\\widehat{\\mathit{7}}\\), estão fora das retas \\(a\\) e \\(b\\) em lados opostos da transversal.
                    </li>
                    <li>
                        <strong>Ângulos correspondentes:</strong> como \\(\\widehat{\\mathit{1}}\\) e \\(\\widehat{\\mathit{5}}\\), ocupam a mesma posição relativa em cada reta.
                    </li>
                    <li>
                        <strong>Ângulos colaterais internos:</strong> como \\(\\widehat{\\mathit{3}}\\) e \\(\\widehat{\\mathit{6}}\\), estão entre as retas \\(a\\) e \\(b\\) no mesmo lado da transversal.
                    </li>
                </ul>
            </div>

            <p style="text-align: center; font-weight: bold;">Figura 2.43 – Os 8 ângulos formados pela transversal \\(t\\) com as retas \\(a\\) e \\(b\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.8/img_paralelas_2.png" alt="Os 8 ângulos formados pela transversal" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

        </div>
    `
    },

    'existencia-paralela': {
        title: '2.8.2 Existência da Paralela',
        description: '',
        videoId: 'SEU_VIDEO_ID',
        videoDuration: '',
        videoDate: '',
        videoDescription: 'Existência da Paralela',
        sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>2.8.2 Existência da Paralela</h3>

            <div class="theorem">
                <p>
                    Por um ponto \\(P\\) não pertencente a uma reta \\(r\\),
                    passa pelo menos uma reta paralela a \\(r\\).
                </p>
            </div>

            <table style="margin: 18px 0 18px 0; border-spacing: 0 4px;">
                <tr>
                    <td style="padding-right: 60px; vertical-align: top;"><strong>Hipótese</strong></td>
                    <td><strong>Tese</strong></td>
                </tr>
                <tr>
                    <td style="padding-right: 60px; vertical-align: top;">\\(P \\notin r\\)</td>
                    <td>existe \\(m \\ni P\\) tal que \\(m \\parallel r\\)</td>
                </tr>
            </table>

            <p><strong>Demonstração:</strong></p>

            <p>
                Tome um ponto \\(A \\in r\\) e trace a reta \\(t = PA\\), transversal a \\(r\\).
                Seja \\(\\alpha\\) o ângulo formado por \\(t\\) com \\(r\\) no vértice \\(A\\).
                Construímos, com vértice em \\(P\\) e um lado sobre \\(\\overrightarrow{PA}\\),
                um ângulo \\(\\beta\\) congruente a \\(\\alpha\\),
                com \\(\\beta\\) e \\(\\alpha\\) em lados opostos de \\(t\\), formando ângulos alternos internos.
                Seja \\(m\\) a reta que contém esse ângulo.
            </p>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.8/img_existencia_paralela_1.png" alt="Existência da paralela: construção e absurdo" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Figura 2.44 – Construção de \\(m\\) por \\(P\\) com ângulos alternos \\(\\alpha \\equiv \\beta\\). Fonte: Autoria própria (2026).</p>

            <p>
                Se \\(m\\) e \\(r\\) não fossem paralelas, teriam um ponto \\(B\\) em comum e
                \\(m \\cap r = \\{B\\}\\).
                Sendo \\(t \\cap r = \\{A\\}\\) e \\(t \\cap m = \\{P\\}\\), teríamos o triângulo \\(ABP\\).
            </p>

            <p>
                Pelo <a href="#" onclick="loadPage('teorema-angulo-externo')" style="color: inherit; text-decoration: underline; cursor: pointer;">Teorema do Ângulo Externo</a>
                aplicado ao \\(\\triangle ABP\\), teríamos:
            </p>

            <p style="text-align: center;">
                \\(\\alpha > \\beta \\quad \\text{ou} \\quad \\beta > \\alpha\\)
            </p>

            <p>
                o que é absurdo, de acordo com a hipótese, pois \\(\\alpha \\equiv \\beta\\) por construção.
                Logo, \\(m \\parallel r\\).
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

        </div>
    `
    },

    'construcao-paralela': {
        title: '2.8.3 Construção da Paralela',
        description: '',
        videoId: 'SEU_VIDEO_ID',
        videoDuration: '',
        videoDate: '',
        videoDescription: 'Construção da Paralela',
        sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>2.8.3 Construção da Paralela</h3>

            <p>
                A existência da paralela, demonstrada na seção anterior, foi obtida por meio de uma
                <strong>construção geométrica</strong> explícita. Apresentamos agora esse procedimento
                de forma sistematizada.
            </p>

            <div class="theorem">
                <p>
                    <strong>Problema de Construção:</strong> Dados uma reta \\(r\\) e um ponto \\(P \\notin r\\),
                    construir uma reta \\(m\\) passando por \\(P\\) tal que \\(m \\parallel r\\).
                </p>
            </div>

            <p><strong>Construção:</strong></p>

            <ol>
                <li>Escolha um ponto qualquer \\(A \\in r\\) e trace a transversal \\(t = \\overleftrightarrow{PA}\\) (a reta que passa por \\(P\\) e \\(A\\)).</li>
                <li>Seja \\(\\alpha\\) o ângulo formado por \\(t\\) e \\(r\\) no vértice \\(A\\), do lado interior entre as retas.</li>
            </ol>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.8/img_construcao_paralela_1.png" alt="Transversal t por P e A, ângulo α em A" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Figura 2.45 – Transversal \\(t\\) traçada por \\(P\\) e \\(A \\in r\\), com ângulo \\(\\alpha\\) identificado em \\(A\\). Fonte: Autoria própria (2026).</p>

            <ol start="3">
                <li>Em \\(P\\), construa um ângulo \\(\\beta \\equiv \\alpha\\) com vértice em \\(P\\) e um lado sobre \\(\\overrightarrow{PA}\\),
                    de modo que \\(\\beta\\) e \\(\\alpha\\) fiquem em lados <strong>opostos</strong> de \\(t\\), formando ângulos alternos internos.</li>
                <li>Seja \\(m\\) a reta determinada pelo outro lado do ângulo \\(\\beta\\) em \\(P\\).</li>
            </ol>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.8/img_construcao_paralela_2.png" alt="Ângulo β reproduzido em P e reta m paralela a r" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Figura 2.46 – Ângulo \\(\\beta \\equiv \\alpha\\) reproduzido em \\(P\\), determinando a reta \\(m \\parallel r\\). Fonte: Autoria própria (2026).</p>

            <p><strong>Justificativa:</strong></p>

            <p>
                Por construção, \\(\\alpha \\equiv \\beta\\) são ângulos alternos internos formados pela transversal
                \\(t\\) com as retas \\(r\\) e \\(m\\). Pela demonstração da
                <a href="#" onclick="loadPage('existencia-paralela')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 2.8.2</a>,
                isso implica \\(m \\parallel r\\).
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Observação:</strong> A construção é válida qualquer que seja o ponto \\(A \\in r\\) escolhido,
                    pois o resultado não depende dessa escolha. Em particular, o procedimento acima é exatamente
                    o que foi utilizado implicitamente na demonstração de existência da seção anterior.
                </p>
            </div>

        </div>
        `
    },

    'postulado-euclides': {
        title: '2.8.4 Postulado de Euclides',
        description: '',
        videoId: 'SEU_VIDEO_ID',
        videoDuration: '',
        videoDate: '',
        videoDescription: 'Postulado de Euclides',
        sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>2.8.4 Postulado de Euclides</h3>

            <p>
                Na <a href="#" onclick="loadPage('existencia-paralela')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 2.8.2</a>
                demonstramos a <strong>existência</strong> de uma paralela a uma reta \\(r\\)
                passando por um ponto \\(P \\notin r\\). Resta saber se essa paralela é <strong>única</strong>.
                Essa unicidade não é demonstrável a partir dos demais postulados da geometria euclidiana;
                ela precisa ser aceita como um novo postulado.
            </p>

            <div class="theorem">
                <p>
                    <strong>Postulado de Euclides:</strong> Por um ponto \\(P\\) fora de uma reta \\(r\\),
                    passa <em>uma única</em> reta paralela a \\(r\\).
                </p>
            </div>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.8/img_postulado_euclides_1.png" alt="Única paralela por P a r" style="max-width: 60%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Figura 2.47 – Por \\(P\\), existe uma única reta \\(m\\) paralela a \\(r\\). Fonte: Autoria própria (2026).</p>

            <div class="theorem">
                <p>
                    <strong>Observação histórica:</strong> Este postulado é conhecido como o
                    <strong>5º Postulado de Euclides</strong>. Por séculos, matemáticos tentaram
                    deduzi-lo dos outros quatro postulados de Euclides, sem sucesso. No século XIX,
                    Gauss, Bolyai e Lobachevski mostraram que, ao substituí-lo por sua negação,
                    obtêm-se geometrias igualmente consistentes, denominadas
                    <strong>geometrias não euclidianas</strong>. Na geometria que estudamos
                    (geometria euclidiana plana), ele é aceito como axioma.
                </p>
            </div>

            <p>
                Combinando o resultado de existência (
                <a href="#" onclick="loadPage('existencia-paralela')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 2.8.2</a>)
                com o Postulado de Euclides, obtemos o seguinte teorema:
            </p>

            <div class="theorem">
                <p>
                    <strong>Teorema:</strong> Por um ponto \\(P\\) fora de uma reta \\(r\\),
                    existe uma e somente uma reta paralela a \\(r\\).
                </p>
            </div>

            <p>
                <strong>Demonstração:</strong>
                A existência foi demonstrada na
                <a href="#" onclick="loadPage('existencia-paralela')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 2.8.2</a>.
                A unicidade é garantida pelo Postulado de Euclides.
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

        </div>
        `
    },

    'paralelas-angulos-congruentes': {
        title: '2.8.5 Paralelas e Ângulos Congruentes',
        description: '',
        videoId: 'SEU_VIDEO_ID',
        videoDuration: '',
        videoDate: '',
        videoDescription: 'Paralelas e Ângulos Congruentes',
        sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>2.8.5 Paralelas e Ângulos Congruentes</h3>

            <p>
                Nas seções anteriores estabelecemos a
                <a href="#" onclick="loadPage('existencia-paralela')" style="color: inherit; text-decoration: underline; cursor: pointer;">existência</a>
                e a
                <a href="#" onclick="loadPage('postulado-euclides')" style="color: inherit; text-decoration: underline; cursor: pointer;">unicidade</a>
                da paralela. Demonstramos agora uma propriedade fundamental sobre os ângulos formados
                quando duas retas paralelas são cortadas por uma transversal.
            </p>

            <div class="theorem">
                <p>
                    <strong>Teorema:</strong> Se duas retas paralelas são cortadas por uma transversal,
                    os ângulos alternos internos são congruentes.
                </p>
            </div>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.8/img_paralelas_angulos_1.png" alt="Paralelas cortadas por transversal com ângulos alternos internos" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Figura 2.48 – Retas \\(s \\parallel m\\) cortadas pela transversal \\(t\\): ângulos alternos internos \\(\\alpha \\equiv \\beta\\). Fonte: Autoria própria (2026).</p>

            <p>
                <strong>Demonstração:</strong>
                Sejam \\(m\\) e \\(s\\) retas com \\(s \\parallel m\\), cortadas pela transversal \\(t\\)
                nos pontos \\(A \\in m\\) e \\(P \\in s\\). Sejam \\(\\alpha\\) e \\(\\beta\\) os ângulos
                alternos internos formados em \\(A\\) e em \\(P\\), respectivamente.
            </p>

            <p>
                Suponha, por absurdo, que \\(\\beta \\not\\equiv \\alpha\\). Então existe uma reta \\(s'\\),
                distinta de \\(s\\), passando por \\(P\\), tal que o ângulo alterno interno \\(\\beta'\\)
                formado por \\(s'\\) e \\(t\\) satisfaz \\(\\beta' \\equiv \\alpha\\). Pela
                <a href="#" onclick="loadPage('existencia-paralela')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 2.8.2</a>,
                isso implica \\(s' \\parallel m\\).
            </p>

            <p>
                Assim, por \\(P\\) passariam duas retas distintas, \\(s\\) e \\(s'\\), ambas paralelas a \\(m\\),
                o que contradiz o
                <a href="#" onclick="loadPage('postulado-euclides')" style="color: inherit; text-decoration: underline; cursor: pointer;">Postulado de Euclides (seção 2.8.4)</a>.
                Portanto, \\(\\beta \\equiv \\alpha\\).
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Corolário 1:</strong> Se duas retas paralelas são cortadas por uma transversal,
                    os ângulos correspondentes são congruentes.
                </p>
            </div>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.8/img_paralelas_angulos_2.png" alt="Ângulos correspondentes congruentes" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Figura 2.49 – Ângulos correspondentes \\(\\alpha \\equiv \\alpha'\\) formados por \\(s \\parallel m\\) e a transversal \\(t\\). Fonte: Autoria própria (2026).</p>

            <p>
                <strong>Demonstração:</strong>
                Pelo Teorema acima, os ângulos alternos internos em \\(A\\) e \\(P\\) são congruentes:
                \\(\\beta \\equiv \\alpha\\). O ângulo correspondente a \\(\\alpha\\) em \\(P\\) é o oposto
                pelo vértice de \\(\\beta\\); como ângulos opostos pelo vértice são congruentes,
                segue que o ângulo correspondente é congruente a \\(\\alpha\\).
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Corolário 2:</strong> Se duas retas paralelas são cortadas por uma transversal,
                    os ângulos colaterais internos são suplementares.
                </p>
            </div>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.8/img_paralelas_angulos_3.png" alt="Ângulos colaterais internos suplementares" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Figura 2.50 – Ângulos colaterais internos \\(\\alpha\\) e \\(\\gamma\\) formados por \\(s \\parallel m\\) e a transversal \\(t\\): \\(\\alpha + \\gamma = 180°\\). Fonte: Autoria própria (2026).</p>

            <p>
                <strong>Demonstração:</strong>
                Pelo Teorema acima, \\(\\beta \\equiv \\alpha\\). O ângulo colateral interno a \\(\\alpha\\)
                em \\(P\\), que chamamos \\(\\gamma\\), é suplementar de \\(\\beta\\), pois ambos formam
                um ângulo raso sobre a reta \\(s\\). Logo \\(\\alpha + \\gamma = \\beta + \\gamma = 180°\\).
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Condição Necessária e Suficiente:</strong>
                    Uma condição necessária e suficiente para que duas retas distintas sejam paralelas
                    é formarem com uma transversal ângulos alternos internos congruentes (ou,
                    equivalentemente, ângulos correspondentes congruentes, ou ângulos colaterais
                    internos suplementares). Em símbolos:
                    \\[\\alpha \\equiv \\beta \\iff s \\parallel m\\]
                </p>
            </div>

            <div class="theorem">
                <p>
                    <strong>Observação:</strong> A implicação \\(\\alpha \\equiv \\beta \\Rightarrow s \\parallel m\\)
                    foi demonstrada na
                    <a href="#" onclick="loadPage('existencia-paralela')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 2.8.2</a>.
                    A implicação recíproca \\(s \\parallel m \\Rightarrow \\alpha \\equiv \\beta\\)
                    é exatamente o Teorema demonstrado nesta seção. Juntas, as duas implicações
                    estabelecem a equivalência completa.
                </p>
            </div>

        </div>
        `
    },

    'soma-angulos-triangulo': {
        title: '2.8.6 Soma dos Ângulos do Triângulo',
        description: '',
        videoId: 'SEU_VIDEO_ID',
        videoDuration: '',
        videoDate: '',
        videoDescription: 'Soma dos Ângulos do Triângulo',
        sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>2.8.6 Soma dos Ângulos do Triângulo</h3>

            <p>
                Com o resultado da
                <a href="#" onclick="loadPage('paralelas-angulos-congruentes')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção anterior</a>
                em mãos, demonstramos primeiro uma propriedade do ângulo externo e dela deduzimos
                a soma dos ângulos internos.
            </p>

            <div class="theorem">
                <p>
                    <strong>Teorema (Ângulo Externo):</strong> Em todo triângulo, qualquer ângulo externo
                    é igual à soma dos dois ângulos internos não adjacentes a ele.
                </p>
            </div>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/2.8/img_soma_angulos_1.png" alt="Triângulo ABC com reta paralela a AB por C mostrando o ângulo externo" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Figura 2.51. Triângulo \\(ABC\\) com ângulo externo \\(e\\) em \\(C\\) e reta \\(r \\parallel AB\\) traçada por \\(C\\). Fonte: Autoria própria (2026).</p>

            <p>
                <strong>Demonstração:</strong>
                Seja \\(ABC\\) um triângulo com ângulos internos \\(\\alpha\\) em \\(A\\), \\(\\beta\\) em \\(B\\)
                e \\(\\gamma\\) em \\(C\\), e seja \\(e\\) o ângulo externo adjacente a \\(\\gamma\\).
                Trace por \\(C\\) uma reta \\(r\\) paralela ao lado \\(AB\\).
            </p>

            <p>
                Como \\(r \\parallel AB\\), pela
                <a href="#" onclick="loadPage('paralelas-angulos-congruentes')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 2.8.5</a>:
            </p>

            <ul style="margin: 8px 0 8px 24px;">
                <li>\\(CA\\) é transversal: o ângulo alterno interno em \\(C\\) é congruente a \\(\\alpha\\).</li>
                <li>\\(CB\\) é transversal: o ângulo correspondente em \\(C\\) é congruente a \\(\\beta\\).</li>
            </ul>

            <p>
                Esses dois ângulos formam juntos o ângulo externo \\(e\\). Portanto:
                \\[e = \\alpha + \\beta\\]
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Observação:</strong> Este resultado coincide com o
                    <a href="#" onclick="loadPage('teorema-angulo-externo')" style="color: inherit; text-decoration: underline; cursor: pointer;">Teorema do Ângulo Externo (seção 2.5)</a>,
                    demonstrado anteriormente sem uso de paralelismo. Aqui o obtemos por um caminho diferente.
                </p>
            </div>

            <div class="theorem">
                <p>
                    <strong>Corolário (Soma dos Ângulos Internos):</strong> A soma dos ângulos internos
                    de qualquer triângulo é igual a \\(180°\\).
                </p>
            </div>

            <p>
                <strong>Demonstração:</strong>
                Sendo \\(e\\) e \\(\\gamma\\) suplementares, \\(e + \\gamma = 180°\\).
                Pelo Teorema acima, \\(e = \\alpha + \\beta\\). Substituindo:
                \\[\\alpha + \\beta + \\gamma = 180°\\]
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Corolário 2:</strong> Um triângulo pode ter no máximo um ângulo reto e no máximo
                    um ângulo obtuso. Em particular, em todo triângulo retângulo os dois ângulos agudos
                    são complementares.
                </p>
            </div>

        </div>
        `
    },

    // ========== Capítulo 2 — 2.9 Perpendicularidade ==========
    'retas-perpendiculares': {
        title: '2.9.1 Retas Perpendiculares',
        description: '',
        videoId: 'PLACEHOLDER',
        videoDuration: 'a definir',
        videoDate: 'a gravar',
        videoDescription: 'Retas perpendiculares: definição, existência e unicidade.',
        sectionTitle: '',
        content: `
        <div class="theorem">
            <h3>2.9.1 Retas Perpendiculares</h3>
            <p>Duas retas concorrentes \\(r\\) e \\(s\\) são <strong>perpendiculares</strong> quando formam ângulos retos. Indica-se \\(r \\perp s\\).</p>
        </div>

        <div class="math-display">
            <p>Ao se cruzarem, duas retas determinam quatro ângulos. Como ângulos <a href="#" onclick="loadPage('opostos-vertice')" style="color: inherit; text-decoration: underline; cursor: pointer;">opostos pelo vértice</a> são congruentes e ângulos adjacentes são <a href="#" onclick="loadPage('complementares-suplementares')" style="color: inherit; text-decoration: underline; cursor: pointer;">suplementares</a>, basta que <strong>um</strong> desses quatro ângulos seja reto para que os quatro sejam retos. Por isso, uma única condição, um ângulo de \\(90^\\circ\\), já caracteriza a perpendicularidade.</p>

            <p style="text-align: center; font-weight: bold;">Figura 2.52 – Retas perpendiculares \\(r \\perp s\\): os quatro ângulos são retos</p>
            <div style="text-align: center; margin: 20px 0; padding: 40px 20px; border: 2px dashed #c0392b; color: #c0392b; font-weight: bold;">⚠ Figura a inserir: imagem/2.9/img_retas_perpendiculares.png</div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <div class="theorem">
                <h3>Existência e Unicidade da Perpendicular</h3>
                <p>Por um ponto \\(P\\) do plano passa uma, e somente uma, reta perpendicular a uma reta dada \\(r\\), tanto no caso \\(P \\in r\\) quanto no caso \\(P \\notin r\\).</p>
            </div>

            <p>A <strong>existência</strong> decorre do transporte de ângulo: a partir de um ponto de \\(r\\) pode-se construir uma semirreta que forma \\(90^\\circ\\) com \\(r\\). A <strong>unicidade</strong> segue do fato de que duas perpendiculares distintas a \\(r\\) passando por \\(P\\) formariam, do mesmo lado, dois ângulos retos com um lado comum, o que obriga as semirretas a coincidir.</p>

            <p>Num triângulo, o segmento perpendicular que vai de um vértice à reta suporte do lado oposto é a <strong>altura</strong> relativa a esse lado, e o ponto em que ela encontra essa reta é o <strong>pé da altura</strong>. As três alturas de um triângulo serão retomadas no estudo do ortocentro.</p>
        </div>
        `
    },

    'construcao-perpendicular': {
        title: '2.9.2 Construção da Perpendicular',
        description: '',
        videoId: 'PLACEHOLDER',
        videoDuration: 'a definir',
        videoDate: 'a gravar',
        videoDescription: 'Construção da perpendicular por um ponto, com régua e compasso.',
        sectionTitle: '',
        content: `
        <div class="theorem">
            <h3>2.9.2 Construção da Perpendicular por um Ponto</h3>
            <p>Com régua e compasso, constrói-se a perpendicular a uma reta \\(r\\) que passa por um ponto \\(P\\). Há dois casos, que se reduzem à mesma ideia.</p>
        </div>

        <div class="math-display">
            <h4>Caso 1: \\(P\\) pertence à reta \\(r\\)</h4>
            <p>Com centro em \\(P\\), traça-se um arco que corta \\(r\\) em dois pontos \\(A\\) e \\(B\\), de modo que \\(PA = PB\\). Em seguida, com centros em \\(A\\) e \\(B\\) e um mesmo raio (maior que \\(PA\\)), traçam-se dois arcos que se cruzam num ponto \\(Q\\). A reta \\(PQ\\) é perpendicular a \\(r\\).</p>

            <p style="text-align: center; font-weight: bold;">Figura 2.53 – Perpendicular por um ponto \\(P \\in r\\)</p>
            <div style="text-align: center; margin: 20px 0; padding: 40px 20px; border: 2px dashed #c0392b; color: #c0392b; font-weight: bold;">⚠ Figura a inserir: imagem/2.9/img_construcao_perpendicular_1.png</div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <h4>Caso 2: \\(P\\) não pertence à reta \\(r\\)</h4>
            <p>Com centro em \\(P\\) e raio suficiente, traça-se um arco que corta \\(r\\) em dois pontos \\(A\\) e \\(B\\). Como \\(PA = PB\\), o ponto \\(P\\) é equidistante de \\(A\\) e \\(B\\), ou seja, pertence à <a href="#" onclick="loadPage('mediatriz')" style="color: inherit; text-decoration: underline; cursor: pointer;">mediatriz</a> de \\(\\overline{AB}\\); construída essa mediatriz, ela passa por \\(P\\) e é perpendicular a \\(r\\).</p>

            <p style="text-align: center; font-weight: bold;">Figura 2.54 – Perpendicular por um ponto \\(P \\notin r\\)</p>
            <div style="text-align: center; margin: 20px 0; padding: 40px 20px; border: 2px dashed #c0392b; color: #c0392b; font-weight: bold;">⚠ Figura a inserir: imagem/2.9/img_construcao_perpendicular_2.png</div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>Em ambos os casos, a construção se apoia na mediatriz de um segmento, o lugar dos pontos equidistantes de \\(A\\) e \\(B\\), estudada na seção seguinte.</p>
        </div>
        `
    },

    'mediatriz': {
        title: '2.9.3 Mediatriz de um Segmento',
        description: '',
        videoId: 'PLACEHOLDER',
        videoDuration: 'a definir',
        videoDate: 'a gravar',
        videoDescription: 'Mediatriz: definição e caracterização por equidistância.',
        sectionTitle: '',
        content: `
        <div class="theorem">
            <h3>2.9.3 Mediatriz de um Segmento</h3>
            <p>A <strong>mediatriz</strong> de um segmento \\(\\overline{AB}\\) é a reta perpendicular a \\(\\overline{AB}\\) que passa pelo seu <a href="#" onclick="loadPage('ponto_medio')" style="color: inherit; text-decoration: underline; cursor: pointer;">ponto médio</a> \\(M\\).</p>
        </div>

        <div class="math-display">
            <p style="text-align: center; font-weight: bold;">Figura 2.55 – Mediatriz \\(m\\) do segmento \\(\\overline{AB}\\) e um ponto \\(P\\) equidistante</p>
            <div style="text-align: center; margin: 20px 0; padding: 40px 20px; border: 2px dashed #c0392b; color: #c0392b; font-weight: bold;">⚠ Figura a inserir: imagem/2.9/img_mediatriz.png</div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <div class="theorem">
                <h3>Teorema (Caracterização da Mediatriz)</h3>
                <p>Um ponto \\(P\\) pertence à mediatriz de \\(\\overline{AB}\\) se, e somente se, é equidistante de \\(A\\) e \\(B\\), isto é, \\(PA = PB\\).</p>
            </div>

            <p><strong>Demonstração.</strong> (\\(\\Rightarrow\\)) Seja \\(P\\) na mediatriz \\(m\\), com pé \\(M\\). Nos triângulos \\(PMA\\) e \\(PMB\\): \\(\\overline{PM}\\) é lado comum, \\(\\overline{MA} = \\overline{MB}\\) (pois \\(M\\) é ponto médio) e \\(P\\widehat{M}A = P\\widehat{M}B = 90^\\circ\\). Pelo <a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>, \\(\\triangle PMA \\equiv \\triangle PMB\\); logo \\(PA = PB\\).</p>

            <p>(\\(\\Leftarrow\\)) Suponha \\(PA = PB\\) e seja \\(M\\) o ponto médio de \\(\\overline{AB}\\). Nos triângulos \\(PMA\\) e \\(PMB\\): \\(PA = PB\\), \\(\\overline{MA} = \\overline{MB}\\) e \\(\\overline{PM}\\) comum. Pelo <a href="#" onclick="loadPage('congruenciasdetriangulos-LLL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LLL</a>, \\(\\triangle PMA \\equiv \\triangle PMB\\), donde \\(P\\widehat{M}A = P\\widehat{M}B\\). Como esses ângulos são adjacentes e suplementares, cada um mede \\(90^\\circ\\); então \\(\\overline{PM} \\perp \\overline{AB}\\), e \\(P\\) está na mediatriz.</p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <p>Assim, a mediatriz é o <strong>lugar geométrico</strong> dos pontos do plano equidistantes de \\(A\\) e \\(B\\). Essa propriedade será a chave para localizar o <strong>circuncentro</strong> de um triângulo, no capítulo de Pontos Notáveis.</p>
        </div>
        `
    },

    'distancia-ponto-reta': {
        title: '2.9.4 Distância de Ponto a Reta',
        description: '',
        videoId: 'PLACEHOLDER',
        videoDuration: 'a definir',
        videoDate: 'a gravar',
        videoDescription: 'Distância de ponto a reta e a perpendicular como menor caminho.',
        sectionTitle: '',
        content: `
        <div class="theorem">
            <h3>2.9.4 Distância de Ponto a Reta</h3>
            <p>A <strong>distância</strong> de um ponto \\(P\\) a uma reta \\(r\\) é o comprimento do segmento perpendicular \\(\\overline{PP'}\\), em que \\(P'\\) é a <strong>projeção ortogonal</strong> de \\(P\\) sobre \\(r\\) (o pé da perpendicular). Se \\(P \\in r\\), a distância é nula.</p>
        </div>

        <div class="math-display">
            <p style="text-align: center; font-weight: bold;">Figura 2.56 – Distância de \\(P\\) a \\(r\\): a perpendicular \\(\\overline{PP'}\\) e um oblíquo \\(\\overline{PQ}\\)</p>
            <div style="text-align: center; margin: 20px 0; padding: 40px 20px; border: 2px dashed #c0392b; color: #c0392b; font-weight: bold;">⚠ Figura a inserir: imagem/2.9/img_distancia_ponto_reta.png</div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <div class="theorem">
                <h3>Teorema (A Perpendicular é o Menor Caminho)</h3>
                <p>O segmento perpendicular é o menor entre \\(P\\) e os pontos de \\(r\\): para todo \\(Q \\in r\\) com \\(Q \\neq P'\\), tem-se \\(PP' < PQ\\).</p>
            </div>

            <p><strong>Demonstração.</strong> Considere o triângulo \\(PP'Q\\), retângulo em \\(P'\\). Como a soma dos ângulos internos vale \\(180^\\circ\\) e o ângulo em \\(P'\\) mede \\(90^\\circ\\), os ângulos em \\(P\\) e \\(Q\\) são agudos; logo o ângulo reto em \\(P'\\) é o maior do triângulo. Pelo teorema de que <a href="#" onclick="loadPage('maior-lado-maior-angulo')" style="color: inherit; text-decoration: underline; cursor: pointer;">ao maior ângulo opõe-se o maior lado</a>, o lado oposto ao ângulo reto, a hipotenusa \\(\\overline{PQ}\\), é o maior lado. Portanto \\(PP' < PQ\\).</p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <p>É por isso que a distância de um ponto a uma reta é sempre medida pela perpendicular: qualquer outro segmento até a reta é mais longo.</p>
        </div>
        `
    },

    // ========== Capítulo 3 — Quadriláteros Notáveis (em construção) ==========
    'quad-definicoes': {
        title: '3.1 Definições e Propriedades Gerais',
        description: '',
        videoId: 'PLACEHOLDER',
        videoDuration: 'a definir',
        videoDate: 'a gravar',
        videoDescription: 'Definições e propriedades gerais dos quadriláteros.',
        sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>3.1 Definições e Propriedades Gerais</h3>

            <p>
                Estudado o triângulo, o polígono de menor número de lados, passamos aos
                <strong>quadriláteros</strong>, figuras de quatro lados. Nesta seção fixamos a
                linguagem (vértices, lados, diagonais e ângulos) e demonstramos a propriedade
                central da qual as demais decorrem: a soma dos ângulos internos vale \\(360°\\).
            </p>

            <div class="theorem">
                <p>
                    <strong>Definição:</strong> Dados quatro pontos \\(A\\), \\(B\\), \\(C\\) e \\(D\\),
                    três a três não colineares, o <strong>quadrilátero</strong> \\(ABCD\\) é a reunião
                    dos segmentos \\(\\overline{AB}\\), \\(\\overline{BC}\\), \\(\\overline{CD}\\) e
                    \\(\\overline{DA}\\), com a condição de que dois lados não consecutivos não tenham
                    ponto em comum.
                </p>
            </div>

            <p>Os elementos do quadrilátero \\(ABCD\\) são:</p>

            <ul style="margin: 8px 0 8px 24px;">
                <li><strong>vértices:</strong> os pontos \\(A\\), \\(B\\), \\(C\\) e \\(D\\);</li>
                <li><strong>lados:</strong> os segmentos \\(\\overline{AB}\\), \\(\\overline{BC}\\), \\(\\overline{CD}\\) e \\(\\overline{DA}\\). Dois lados com um vértice comum são <strong>consecutivos</strong>; sem vértice comum, <strong>opostos</strong>;</li>
                <li><strong>diagonais:</strong> os segmentos que ligam vértices não consecutivos, \\(\\overline{AC}\\) e \\(\\overline{BD}\\);</li>
                <li><strong>ângulos internos:</strong> \\(\\widehat{A}\\), \\(\\widehat{B}\\), \\(\\widehat{C}\\) e \\(\\widehat{D}\\).</li>
            </ul>

            <p>
                Um quadrilátero é <strong>convexo</strong> quando cada uma de suas diagonais está
                inteiramente contida em seu interior ou, de modo equivalente, quando todos os seus
                ângulos internos medem menos de \\(180°\\). Salvo menção em contrário, trabalharemos
                sempre com quadriláteros convexos.
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 3.1 – Quadrilátero convexo \\(ABCD\\), com lados, ângulos internos e as diagonais \\(\\overline{AC}\\) e \\(\\overline{BD}\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/3.1/img_quadrilatero_convexo.png" alt="Quadrilátero convexo ABCD com lados, ângulos internos e as diagonais AC e BD" style="max-width: 55%; height: auto;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Enquanto o triângulo não possui diagonais, o quadrilátero possui exatamente duas:
                de cada vértice parte uma única diagonal, ligando-o ao vértice oposto. Esse é o caso
                \\(n = 4\\) da fórmula geral \\(\\dfrac{n(n-3)}{2}\\) para o número de diagonais de um
                polígono convexo de \\(n\\) lados.
            </p>

            <div class="theorem">
                <p>
                    <strong>Teorema (Soma dos Ângulos Internos):</strong> A soma dos ângulos internos
                    de todo quadrilátero convexo é igual a \\(360°\\).
                </p>
            </div>

            <p style="text-align: center; font-weight: bold;">Figura 3.2 – A diagonal \\(\\overline{AC}\\) decompõe o quadrilátero \\(ABCD\\) nos triângulos \\(ABC\\) e \\(ACD\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/3.1/img_diagonal_dois_triangulos.png" alt="A diagonal AC decompõe o quadrilátero ABCD nos triângulos ABC e ACD" style="max-width: 55%; height: auto;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                <strong>Demonstração:</strong>
                Seja \\(ABCD\\) um quadrilátero convexo. Tracemos a diagonal \\(\\overline{AC}\\).
                Como o quadrilátero é convexo, essa diagonal está contida em seu interior e o separa
                em dois triângulos: \\(ABC\\) e \\(ACD\\).
            </p>

            <p>
                A diagonal decompõe o ângulo \\(\\widehat{A}\\) em duas partes,
                \\(\\widehat{A}_1\\) (no triângulo \\(ABC\\)) e \\(\\widehat{A}_2\\) (no triângulo \\(ACD\\)),
                de modo que \\(\\widehat{A}_1 + \\widehat{A}_2 = \\widehat{A}\\); do mesmo modo, decompõe
                \\(\\widehat{C}\\) em \\(\\widehat{C}_1 + \\widehat{C}_2 = \\widehat{C}\\). Já os ângulos
                \\(\\widehat{B}\\) e \\(\\widehat{D}\\) pertencem por inteiro a um único triângulo.
            </p>

            <p>
                Pela
                <a href="#" onclick="loadPage('soma-angulos-triangulo')" style="color: inherit; text-decoration: underline; cursor: pointer;">soma dos ângulos internos de um triângulo (seção 2.8.6)</a>,
                cada um dos dois triângulos contribui com \\(180°\\):
                \\[ \\left(\\widehat{A}_1 + \\widehat{B} + \\widehat{C}_1\\right) + \\left(\\widehat{A}_2 + \\widehat{C}_2 + \\widehat{D}\\right) = 180° + 180° = 360°. \\]
                Reagrupando os termos e usando \\(\\widehat{A}_1 + \\widehat{A}_2 = \\widehat{A}\\) e
                \\(\\widehat{C}_1 + \\widehat{C}_2 = \\widehat{C}\\), obtemos
                \\[ \\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360°. \\]
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Corolário (Soma dos Ângulos Externos):</strong> Considerando um ângulo
                    externo em cada vértice, a soma dos quatro ângulos externos de um quadrilátero
                    convexo é igual a \\(360°\\).
                </p>
            </div>

            <p>
                <strong>Demonstração:</strong>
                Em cada vértice, o ângulo interno e o ângulo externo são
                <a href="#" onclick="loadPage('complementares-suplementares')" style="color: inherit; text-decoration: underline; cursor: pointer;">suplementares (seção 1.4)</a>,
                somando \\(180°\\). Nos quatro vértices, internos e externos somam, ao todo,
                \\(4 \\times 180° = 720°\\). Subtraindo a soma dos ângulos internos, que acabamos de
                mostrar valer \\(360°\\), resta para os externos:
                \\[ 720° - 360° = 360°. \\]
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Generalização:</strong> O mesmo argumento da diagonal, feito a partir de
                    um único vértice de um polígono convexo de \\(n\\) lados, o decompõe em
                    \\(n - 2\\) triângulos. Logo, a soma de seus ângulos internos é
                    \\((n - 2)\\cdot 180°\\), enquanto a soma de seus ângulos externos permanece igual
                    a \\(360°\\), qualquer que seja \\(n\\). O quadrilátero é o caso \\(n = 4\\).
                </p>
            </div>

        </div>
        `
    },

    'base-media': {
        title: '3.4 Base Média do Triângulo e do Trapézio',
        description: '',
        videoId: 'PLACEHOLDER',
        videoDuration: 'a definir',
        videoDate: 'a gravar',
        videoDescription: 'Base média do triângulo e do trapézio.',
        sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>3.4 Base Média do Triângulo e do Trapézio</h3>

            <p>
                Chamamos de <strong>base média</strong> o segmento que une os pontos médios de dois
                lados de uma figura. No triângulo, ela liga os pontos médios de dois lados; no
                trapézio, os pontos médios das duas laterais. Em ambos os casos ela é paralela a
                uma base e tem comprimento determinado por ela, como veremos.
            </p>

            <div class="theorem">
                <p>
                    <strong>Teorema (Base Média do Triângulo):</strong> O segmento que une os pontos
                    médios de dois lados de um triângulo é paralelo ao terceiro lado e mede a metade dele.
                </p>
            </div>

            <p>
                <strong>Demonstração:</strong>
                Seja \\(ABC\\) um triângulo, \\(M\\) o ponto médio de \\(\\overline{AB}\\) e \\(N\\) o ponto
                médio de \\(\\overline{AC}\\). O segmento \\(\\overline{MN}\\) que os une é a base média
                relativa ao lado \\(\\overline{BC}\\) (Figura 3.9).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 3.9 – Triângulo \\(ABC\\) com os pontos médios \\(M\\) e \\(N\\) e a base média \\(\\overline{MN}\\)</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/3.4/img_base_media_tri_1.png" alt="Triângulo ABC com médios M, N e base média MN" style="max-width: 55%; height: auto;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Prolonguemos \\(\\overline{MN}\\) até um ponto \\(P\\) tal que \\(N\\) seja o ponto médio de
                \\(\\overline{MP}\\), isto é, \\(\\overline{MN} \\cong \\overline{NP}\\) (Figura 3.10).
                Comparando então os triângulos \\(AMN\\) e \\(CPN\\):
            </p>
            <ul style="margin: 8px 0 8px 24px;">
                <li>\\(\\overline{AN} \\cong \\overline{CN}\\) (\\(N\\) é ponto médio de \\(\\overline{AC}\\));</li>
                <li>\\(A\\widehat{N}M \\cong C\\widehat{N}P\\) (opostos pelo vértice);</li>
                <li>\\(\\overline{MN} \\cong \\overline{NP}\\) (construção).</li>
            </ul>

            <p style="text-align: center; font-weight: bold;">Figura 3.10 – Prolongamento de \\(\\overline{MN}\\) até \\(P\\): \\(\\triangle AMN \\cong \\triangle CPN\\) (caso LAL)</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/3.4/img_base_media_tri_2.png" alt="Prolongamento até P; triângulos AMN e CPN congruentes (LAL)" style="max-width: 55%; height: auto;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Logo, pelo
                <a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL (seção 2.3)</a>,
                \\(\\triangle AMN \\cong \\triangle CPN\\). Daí \\(\\overline{CP} \\cong \\overline{AM}\\) e
                \\(M\\widehat{A}N \\cong P\\widehat{C}N\\). Como esses dois ângulos são alternos internos em
                relação à transversal \\(\\overline{AC}\\), segue \\(\\overline{CP} \\parallel \\overline{AB}\\).
            </p>

            <p>
                Como \\(\\overline{AM} \\cong \\overline{MB}\\), obtemos \\(\\overline{CP} \\cong \\overline{MB}\\)
                e \\(\\overline{CP} \\parallel \\overline{MB}\\). Assim, no quadrilátero \\(MBCP\\) os lados
                opostos \\(\\overline{MB}\\) e \\(\\overline{CP}\\) são paralelos e congruentes (Figura 3.11); pelo
                <a href="#" onclick="loadPage('paralelogramos')" style="color: inherit; text-decoration: underline; cursor: pointer;">Critério do paralelogramo (seção 3.3)</a>,
                \\(MBCP\\) é um paralelogramo.
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 3.11 – O quadrilátero \\(MBCP\\) é um paralelogramo, pois \\(\\overline{MB} \\parallel \\overline{CP}\\) e \\(\\overline{MB} \\cong \\overline{CP}\\)</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/3.4/img_base_media_tri_3.png" alt="Quadrilátero MBCP é paralelogramo: MB paralelo e congruente a CP" style="max-width: 55%; height: auto;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Logo, como os lados opostos de um paralelogramo são
                paralelos e congruentes (Propriedade 1, <a href="#" onclick="loadPage('paralelogramos')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 3.3</a>), \\(\\overline{MP} \\parallel \\overline{BC}\\)
                e \\(\\overline{MP} \\cong \\overline{BC}\\). Como \\(N\\) é o ponto médio de \\(\\overline{MP}\\),
                o segmento \\(\\overline{MN}\\) é paralelo a \\(\\overline{BC}\\) e
                \\[ MN = \\frac{MP}{2} = \\frac{BC}{2}. \\]
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Teorema (Base Média do Trapézio):</strong> Em um trapézio, o segmento que
                    une os pontos médios das laterais é paralelo às bases e igual à sua semissoma:
                    \\(\\displaystyle MN = \\frac{AB + CD}{2}\\).
                </p>
            </div>

            <p>
                <strong>Demonstração:</strong>
                Seja \\(ABCD\\) um trapézio de bases \\(\\overline{AB}\\) e \\(\\overline{CD}\\)
                (\\(\\overline{AB} \\parallel \\overline{CD}\\)), com \\(M\\) o ponto médio da lateral
                \\(\\overline{AD}\\) e \\(N\\) o ponto médio da lateral \\(\\overline{BC}\\). Tracemos a diagonal
                \\(\\overline{AC}\\) e seja \\(E\\) o seu ponto médio.
            </p>

            <p>
                No triângulo \\(ACD\\), \\(M\\) e \\(E\\) são pontos médios de \\(\\overline{AD}\\) e
                \\(\\overline{AC}\\); pela base média do triângulo (demonstrada acima),
                \\[ \\overline{ME} \\parallel \\overline{CD} \\quad\\text{e}\\quad ME = \\frac{CD}{2}. \\]
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 3.12 – A diagonal \\(\\overline{AC}\\) e seu ponto médio \\(E\\); no triângulo \\(ACD\\), \\(\\overline{ME}\\) é base média</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/3.4/img_base_media_trap_1.png" alt="Diagonal AC e médio E; ME base média do triângulo ACD" style="max-width: 55%; height: auto;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                No triângulo \\(ABC\\), \\(E\\) e \\(N\\) são pontos médios de \\(\\overline{AC}\\) e
                \\(\\overline{BC}\\); do mesmo modo,
                \\[ \\overline{EN} \\parallel \\overline{AB} \\quad\\text{e}\\quad EN = \\frac{AB}{2}. \\]
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 3.13 – No triângulo \\(ABC\\), \\(\\overline{EN}\\) é base média; com \\(\\overline{ME}\\), completa-se \\(\\overline{MN}\\)</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/3.4/img_base_media_trap_2.png" alt="EN base média do triângulo ABC; com ME completa-se MN" style="max-width: 55%; height: auto;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Como \\(\\overline{AB} \\parallel \\overline{CD}\\), os segmentos \\(\\overline{ME}\\) e
                \\(\\overline{EN}\\) têm a mesma direção e partilham o ponto \\(E\\); logo \\(M\\), \\(E\\) e
                \\(N\\) são colineares, e \\(\\overline{MN}\\) é paralelo às bases. Somando,
                \\[ MN = ME + EN = \\frac{CD}{2} + \\frac{AB}{2} = \\frac{AB + CD}{2}. \\]
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Observação:</strong> A base média do triângulo é o caso particular da base
                    média do trapézio quando a base menor degenera em um ponto (\\(CD = 0\\)): a fórmula
                    \\(\\frac{AB + CD}{2}\\) reduz-se a \\(\\frac{AB}{2}\\). Essas relações são ferramentas
                    frequentes em problemas de olimpíada, por permitirem trocar pontos médios por
                    paralelismos e razões conhecidas.
                </p>
            </div>

        </div>
        `
    },

    'trapezios': {
        title: '3.2 Trapézios',
        description: '',
        videoId: 'PLACEHOLDER',
        videoDuration: 'a definir',
        videoDate: 'a gravar',
        videoDescription: 'Trapézios: classificação e propriedades.',
        sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>3.2 Trapézios</h3>

            <p>
                Entre os quadriláteros, o <strong>trapézio</strong> é aquele caracterizado por um
                par de lados paralelos. Vamos defini-lo, classificá-lo e demonstrar suas propriedades
                fundamentais, com destaque para o trapézio isósceles.
            </p>

            <div class="theorem">
                <p>
                    <strong>Definição:</strong> Um <strong>trapézio</strong> é um quadrilátero convexo
                    que possui um único par de lados paralelos. Os lados paralelos são as
                    <strong>bases</strong> (uma maior e uma menor); os outros dois são os
                    <strong>lados laterais</strong>. A distância entre as bases é a <strong>altura</strong>
                    do trapézio.
                </p>
            </div>

            <p>
                Ao longo desta seção, adotamos o trapézio \\(ABCD\\) com bases \\(\\overline{AB}\\) e
                \\(\\overline{CD}\\), sendo \\(\\overline{AB} \\parallel \\overline{CD}\\) e \\(\\overline{AB}\\)
                a base maior; os lados laterais são \\(\\overline{AD}\\) e \\(\\overline{BC}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 3.3 – Elementos do trapézio: bases \\(\\overline{AB}\\) e \\(\\overline{CD}\\), laterais \\(\\overline{AD}\\) e \\(\\overline{BC}\\), e a altura \\(h\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/3.2/img_trapezio_elementos.png" alt="Elementos do trapézio: bases, laterais e altura" style="max-width: 55%; height: auto;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <div class="theorem">
                <p>
                    <strong>Classificação.</strong> Quanto aos lados laterais, o trapézio é:
                </p>
                <ul style="margin: 8px 0 8px 24px;">
                    <li><strong>escaleno:</strong> laterais de medidas diferentes;</li>
                    <li><strong>isósceles:</strong> laterais congruentes (\\(\\overline{AD} \\cong \\overline{BC}\\));</li>
                    <li><strong>retângulo:</strong> uma lateral perpendicular às bases, o que lhe dá dois ângulos retos.</li>
                </ul>
            </div>

            <p style="text-align: center; font-weight: bold;">Figura 3.4 – Os três tipos de trapézio: escaleno, isósceles e retângulo</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/3.2/img_trapezio_tipos.png" alt="Os três tipos de trapézio: escaleno, isósceles e retângulo" style="max-width: 55%; height: auto;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <div class="theorem">
                <p>
                    <strong>Observação:</strong> Adotamos aqui a definição em que o trapézio tem
                    <em>exatamente</em> um par de lados paralelos. Assim, o paralelogramo, que possui
                    dois pares de lados paralelos, não é considerado um trapézio e será tratado à parte
                    na <a href="#" onclick="loadPage('paralelogramos')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 3.3</a>.
                </p>
            </div>

            <div class="theorem">
                <p>
                    <strong>Propriedade 1 (ângulos junto a uma lateral):</strong> Em todo trapézio,
                    os dois ângulos adjacentes a um mesmo lado lateral são suplementares.
                </p>
            </div>

            <p>
                <strong>Demonstração:</strong>
                O lado lateral \\(\\overline{AD}\\) é uma transversal às retas paralelas \\(\\overline{AB}\\)
                e \\(\\overline{CD}\\). Os ângulos \\(\\widehat{A}\\) e \\(\\widehat{D}\\) são, então,
                colaterais internos e, pela
                <a href="#" onclick="loadPage('paralelas-angulos-congruentes')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 2.8.5</a>,
                suplementares:
                \\[ \\widehat{A} + \\widehat{D} = 180°. \\]
                O mesmo argumento, aplicado à lateral \\(\\overline{BC}\\), dá \\(\\widehat{B} + \\widehat{C} = 180°\\).
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Propriedade 2 (trapézio isósceles):</strong> Em um trapézio isósceles,
                    os ângulos adjacentes a uma mesma base são congruentes.
                </p>
            </div>

            <p style="text-align: center; font-weight: bold;">Figura 3.5 – Transporte da lateral \\(\\overline{AD}\\): a paralela por \\(C\\) encontra \\(\\overline{AB}\\) em \\(P\\), formando o triângulo isósceles \\(BPC\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/3.2/img_trapezio_isosceles_angulos.png" alt="Transporte da lateral AD formando o triângulo isósceles BPC" style="max-width: 55%; height: auto;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                <strong>Demonstração:</strong>
                Seja \\(ABCD\\) isósceles, com \\(\\overline{AD} \\cong \\overline{BC}\\). Por \\(C\\),
                trace a paralela ao lado \\(\\overline{AD}\\), que encontra a base \\(\\overline{AB}\\)
                em um ponto \\(P\\). Comparemos os triângulos \\(ACD\\) e \\(CAP\\):
            </p>

            <ul style="margin: 8px 0 8px 24px;">
                <li>\\(\\overline{AC}\\) é lado comum;</li>
                <li>\\(D\\widehat{C}A = P\\widehat{A}C\\) (alternos internos, pois \\(\\overline{CD} \\parallel \\overline{AP}\\), transversal \\(\\overline{AC}\\));</li>
                <li>\\(D\\widehat{A}C = P\\widehat{C}A\\) (alternos internos, pois \\(\\overline{AD} \\parallel \\overline{PC}\\), transversal \\(\\overline{AC}\\)).</li>
            </ul>

            <p>
                Logo, pelo
                <a href="#" onclick="loadPage('congruenciasdetriangulos-ALA')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso ALA (seção 2.3)</a>,
                \\(\\triangle ACD \\cong \\triangle CAP\\), e portanto \\(\\overline{CP} \\cong \\overline{AD}\\).
                Como \\(\\overline{AD} \\cong \\overline{BC}\\), resulta \\(\\overline{CP} \\cong \\overline{BC}\\):
                o triângulo \\(BPC\\) é isósceles, e seus ângulos da base são congruentes,
                \\(B\\widehat{P}C = P\\widehat{B}C\\).
            </p>

            <p>
                Ora, \\(B\\widehat{P}C = \\widehat{A}\\) (correspondentes, pois \\(\\overline{CP} \\parallel \\overline{AD}\\))
                e \\(P\\widehat{B}C = \\widehat{B}\\). Portanto \\(\\widehat{A} = \\widehat{B}\\). Finalmente,
                pela Propriedade 1, \\(\\widehat{A} + \\widehat{D} = \\widehat{B} + \\widehat{C} = 180°\\); com
                \\(\\widehat{A} = \\widehat{B}\\), segue \\(\\widehat{D} = \\widehat{C}\\).
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Propriedade 3 (diagonais do trapézio isósceles):</strong> Em um trapézio
                    isósceles, as diagonais são congruentes.
                </p>
            </div>

            <p style="text-align: center; font-weight: bold;">Figura 3.6 – As diagonais \\(\\overline{AC}\\) e \\(\\overline{BD}\\) do trapézio isósceles</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/3.2/img_trapezio_diagonais.png" alt="As diagonais AC e BD do trapézio isósceles" style="max-width: 55%; height: auto;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                <strong>Demonstração:</strong>
                Consideremos os triângulos \\(DAB\\) e \\(CBA\\), formados por cada diagonal com a base
                maior \\(\\overline{AB}\\):
            </p>

            <ul style="margin: 8px 0 8px 24px;">
                <li>\\(\\overline{AD} \\cong \\overline{BC}\\) (lados laterais, por hipótese);</li>
                <li>\\(D\\widehat{A}B = C\\widehat{B}A\\) (ângulos da base maior, pela Propriedade 2);</li>
                <li>\\(\\overline{AB}\\) é lado comum.</li>
            </ul>

            <p>
                Pelo
                <a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL (seção 2.3)</a>,
                \\(\\triangle DAB \\cong \\triangle CBA\\). Em particular, os lados correspondentes
                \\(\\overline{DB}\\) e \\(\\overline{CA}\\) são congruentes, isto é, as diagonais são iguais:
                \\[ \\overline{AC} \\cong \\overline{BD}. \\]
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Observação (recíproca):</strong> Vale também a volta: se um trapézio tem os
                    ângulos de uma base congruentes, então ele é isósceles. Assim, ângulos da base
                    congruentes caracterizam o trapézio isósceles, que é o único a possuir eixo de
                    simetria (a reta perpendicular às bases pelos seus pontos médios).
                </p>
            </div>

        </div>
        `
    },

    'paralelogramos': {
        title: '3.3 Paralelogramos',
        description: '',
        videoId: 'PLACEHOLDER',
        videoDuration: 'a definir',
        videoDate: 'a gravar',
        videoDescription: 'Paralelogramos: propriedades e diagonais.',
        sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>3.3 Paralelogramos</h3>

            <p>
                O <strong>paralelogramo</strong> é o quadrilátero de dois pares de lados paralelos.
                Dessa única condição decorrem várias propriedades, que reunimos aqui e usaremos
                adiante (por exemplo, na base média, na <a href="#" onclick="loadPage('base-media')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 3.4</a>).
            </p>

            <div class="theorem">
                <p>
                    <strong>Definição:</strong> Um <strong>paralelogramo</strong> é um quadrilátero
                    convexo cujos lados opostos são paralelos: \\(\\overline{AB} \\parallel \\overline{CD}\\)
                    e \\(\\overline{AD} \\parallel \\overline{BC}\\).
                </p>
            </div>

            <p style="text-align: center; font-weight: bold;">Figura 3.7 – Paralelogramo \\(ABCD\\) e a diagonal \\(\\overline{AC}\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/3.3/img_paralelogramo_lados.png" alt="Paralelogramo ABCD e a diagonal AC: lados e ângulos opostos congruentes" style="max-width: 55%; height: auto;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <div class="theorem">
                <p>
                    <strong>Propriedade 1 (lados e ângulos opostos):</strong> Em um paralelogramo, os
                    lados opostos são congruentes e os ângulos opostos são congruentes.
                </p>
            </div>

            <p>
                <strong>Demonstração:</strong>
                Tracemos a diagonal \\(\\overline{AC}\\). Como \\(\\overline{AB} \\parallel \\overline{CD}\\),
                temos \\(B\\widehat{A}C \\cong D\\widehat{C}A\\) (alternos internos); como
                \\(\\overline{AD} \\parallel \\overline{BC}\\), temos \\(D\\widehat{A}C \\cong B\\widehat{C}A\\).
                Com \\(\\overline{AC}\\) comum, pelo
                <a href="#" onclick="loadPage('congruenciasdetriangulos-ALA')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso ALA (seção 2.3)</a>,
                \\(\\triangle ABC \\cong \\triangle CDA\\).
            </p>

            <p>
                Daí \\(\\overline{AB} \\cong \\overline{CD}\\) e \\(\\overline{BC} \\cong \\overline{DA}\\)
                (lados opostos), e \\(\\widehat{B} \\cong \\widehat{D}\\) (ângulos opostos). Para os outros
                dois, \\(\\widehat{A} = B\\widehat{A}C + D\\widehat{A}C = D\\widehat{C}A + B\\widehat{C}A = \\widehat{C}\\).
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Propriedade 2 (ângulos consecutivos):</strong> Em um paralelogramo, dois
                    ângulos consecutivos são suplementares.
                </p>
            </div>

            <p>
                <strong>Demonstração:</strong>
                O lado \\(\\overline{AD}\\) é transversal às paralelas \\(\\overline{AB}\\) e
                \\(\\overline{CD}\\); assim \\(\\widehat{A}\\) e \\(\\widehat{D}\\) são colaterais internos e,
                pela <a href="#" onclick="loadPage('paralelas-angulos-congruentes')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 2.8.5</a>,
                \\(\\widehat{A} + \\widehat{D} = 180^\\circ\\). O mesmo vale para os demais pares consecutivos.
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Propriedade 3 (diagonais):</strong> As diagonais de um paralelogramo
                    cortam-se ao meio.
                </p>
            </div>

            <p style="text-align: center; font-weight: bold;">Figura 3.8 – As diagonais \\(\\overline{AC}\\) e \\(\\overline{BD}\\) cortam-se no ponto médio \\(M\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/3.3/img_paralelogramo_diagonais.png" alt="As diagonais AC e BD cortam-se no ponto médio M" style="max-width: 55%; height: auto;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                <strong>Demonstração:</strong>
                Sejam \\(\\overline{AC}\\) e \\(\\overline{BD}\\) as diagonais, que se encontram em \\(M\\).
                Nos triângulos \\(ABM\\) e \\(CDM\\): \\(\\overline{AB} \\cong \\overline{CD}\\) (Propriedade 1),
                \\(B\\widehat{A}M \\cong D\\widehat{C}M\\) e \\(A\\widehat{B}M \\cong C\\widehat{D}M\\)
                (alternos internos, \\(\\overline{AB} \\parallel \\overline{CD}\\)). Pelo caso ALA,
                \\(\\triangle ABM \\cong \\triangle CDM\\); logo \\(\\overline{AM} \\cong \\overline{CM}\\) e
                \\(\\overline{BM} \\cong \\overline{DM}\\), ou seja, \\(M\\) é ponto médio de ambas.
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Critério (recíproco):</strong> Se um quadrilátero tem um par de lados
                    opostos <em>paralelos e congruentes</em>, então ele é um paralelogramo.
                </p>
            </div>

            <p>
                <strong>Demonstração:</strong>
                Seja \\(ABCD\\) com \\(\\overline{AB} \\parallel \\overline{CD}\\) e
                \\(\\overline{AB} \\cong \\overline{CD}\\). Tracemos \\(\\overline{AC}\\). Por serem
                \\(\\overline{AB} \\parallel \\overline{CD}\\), \\(B\\widehat{A}C \\cong D\\widehat{C}A\\)
                (alternos internos). Com \\(\\overline{AB} \\cong \\overline{CD}\\) e \\(\\overline{AC}\\)
                comum, pelo
                <a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL (seção 2.3)</a>,
                \\(\\triangle ABC \\cong \\triangle CDA\\). Então \\(B\\widehat{C}A \\cong D\\widehat{A}C\\), o
                que dá \\(\\overline{BC} \\parallel \\overline{AD}\\). Com os dois pares de lados paralelos,
                \\(ABCD\\) é paralelogramo.
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

        </div>
        `
    },

    'quadrilateros-especiais': {
        title: '3.5 Quadriláteros Especiais',
        description: '',
        videoId: 'PLACEHOLDER',
        videoDuration: 'a definir',
        videoDate: 'a gravar',
        videoDescription: 'Quadriláteros especiais: retângulo, losango e quadrado.',
        sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>3.5 Quadriláteros Especiais (retângulo, losango, quadrado)</h3>

            <p>
                O retângulo, o losango e o quadrado são <strong>paralelogramos</strong> que satisfazem
                uma condição extra. Por isso, cada um deles herda automaticamente todas as propriedades
                demonstradas na <a href="#" onclick="loadPage('paralelogramos')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 3.3</a>
                (lados e ângulos opostos congruentes, ângulos consecutivos suplementares e diagonais que
                se cortam ao meio) e ganha propriedades próprias das suas diagonais, que demonstramos a seguir.
            </p>

            <h4 style="margin-top: 28px;">Retângulo</h4>

            <div class="theorem">
                <p>
                    <strong>Definição:</strong> Um <strong>retângulo</strong> é um paralelogramo que
                    possui um ângulo reto.
                </p>
            </div>

            <p>
                A condição de um único ângulo reto já obriga os quatro a serem retos: se \\(\\widehat{A} = 90°\\),
                então, como os ângulos consecutivos de um paralelogramo são suplementares
                (Propriedade 2, <a href="#" onclick="loadPage('paralelogramos')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 3.3</a>), \\(\\widehat{B} = 180° - \\widehat{A} = 90°\\); e como os
                ângulos opostos são congruentes (Propriedade 1), \\(\\widehat{C} = \\widehat{A} = 90°\\) e
                \\(\\widehat{D} = \\widehat{B} = 90°\\). Logo, <strong>todo retângulo tem os quatro ângulos retos</strong>.
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 3.14 – Retângulo \\(ABCD\\) com os quatro ângulos retos e as diagonais \\(\\overline{AC}\\) e \\(\\overline{BD}\\)</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/3.5/img_retangulo_diagonais.png" alt="Retângulo ABCD com os quatro ângulos retos e as diagonais AC e BD" style="max-width: 45%; height: auto;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <div class="theorem">
                <p>
                    <strong>Propriedade (diagonais do retângulo):</strong> As diagonais de um retângulo
                    são congruentes.
                </p>
            </div>

            <p>
                <strong>Demonstração:</strong>
                Seja \\(ABCD\\) um retângulo. Comparemos os triângulos \\(ABC\\) e \\(BAD\\), cada um
                formado por uma diagonal e a base \\(\\overline{AB}\\) (Figura 3.15):
            </p>
            <ul style="margin: 8px 0 8px 24px;">
                <li>\\(\\overline{AB}\\) é lado comum;</li>
                <li>\\(A\\widehat{B}C = B\\widehat{A}D = 90°\\) (ângulos retos do retângulo);</li>
                <li>\\(\\overline{BC} \\cong \\overline{AD}\\) (lados opostos do paralelogramo, <a href="#" onclick="loadPage('paralelogramos')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 3.3</a>).</li>
            </ul>

            <p style="text-align: center; font-weight: bold;">Figura 3.15 – Os triângulos \\(ABC\\) e \\(BAD\\): lado comum \\(\\overline{AB}\\), ângulos retos em \\(A\\) e \\(B\\), e \\(\\overline{BC} \\cong \\overline{AD}\\)</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/3.5/img_retangulo_triangulos.png" alt="Triângulos ABC e BAD: AB comum, ângulos retos em A e B, BC congruente a AD" style="max-width: 45%; height: auto;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Logo, pelo
                <a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL (seção 2.3)</a>,
                \\(\\triangle ABC \\cong \\triangle BAD\\), e portanto as diagonais correspondentes são
                congruentes: \\(\\overline{AC} \\cong \\overline{BD}\\).
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <h4 style="margin-top: 28px;">Losango</h4>

            <div class="theorem">
                <p>
                    <strong>Definição:</strong> Um <strong>losango</strong> é um paralelogramo que possui
                    dois lados consecutivos congruentes.
                </p>
            </div>

            <p>
                Novamente a condição se propaga: se \\(\\overline{AB} \\cong \\overline{BC}\\), como os
                lados opostos do paralelogramo são congruentes (<a href="#" onclick="loadPage('paralelogramos')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 3.3</a>), temos
                \\(\\overline{CD} \\cong \\overline{AB}\\) e \\(\\overline{AD} \\cong \\overline{BC}\\), de modo que
                <strong>todos os quatro lados são congruentes</strong>.
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 3.16 – Losango \\(ABCD\\) com os quatro lados congruentes; as diagonais \\(\\overline{AC}\\) e \\(\\overline{BD}\\) cortam-se em \\(M\\), perpendicularmente</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/3.5/img_losango_diagonais.png" alt="Losango ABCD com quatro lados congruentes; diagonais perpendiculares em M" style="max-width: 45%; height: auto;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <div class="theorem">
                <p>
                    <strong>Propriedade (diagonais do losango):</strong> As diagonais de um losango são
                    perpendiculares entre si e bissetam os ângulos internos do losango.
                </p>
            </div>

            <p>
                <strong>Demonstração:</strong>
                Seja \\(ABCD\\) um losango e \\(M\\) o ponto de encontro das diagonais. Pelas propriedades
                do paralelogramo (<a href="#" onclick="loadPage('paralelogramos')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 3.3</a>), \\(M\\) é o ponto médio de ambas; em particular
                \\(\\overline{AM} \\cong \\overline{CM}\\). Comparemos os triângulos \\(ABM\\) e \\(CBM\\)
                (Figura 3.17):
            </p>
            <ul style="margin: 8px 0 8px 24px;">
                <li>\\(\\overline{AB} \\cong \\overline{CB}\\) (lados do losango);</li>
                <li>\\(\\overline{BM}\\) é lado comum;</li>
                <li>\\(\\overline{AM} \\cong \\overline{CM}\\) (\\(M\\) é ponto médio de \\(\\overline{AC}\\)).</li>
            </ul>

            <p style="text-align: center; font-weight: bold;">Figura 3.17 – Os triângulos \\(ABM\\) e \\(CBM\\): \\(\\overline{AB} \\cong \\overline{CB}\\), \\(\\overline{BM}\\) comum e \\(\\overline{AM} \\cong \\overline{CM}\\); daí \\(A\\widehat{M}B = C\\widehat{M}B = 90°\\)</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/3.5/img_losango_triangulos.png" alt="Triângulos ABM e CBM congruentes (LLL); ângulo reto em M" style="max-width: 45%; height: auto;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Logo, pelo
                <a href="#" onclick="loadPage('congruenciasdetriangulos-LLL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LLL (seção 2.3)</a>,
                \\(\\triangle ABM \\cong \\triangle CBM\\). Daí \\(A\\widehat{M}B = C\\widehat{M}B\\); mas esses
                dois ângulos são adjacentes suplementares (formam o ângulo raso \\(A\\widehat{M}C\\)), então
                cada um vale \\(90°\\): as diagonais são <strong>perpendiculares</strong>. Além disso,
                \\(A\\widehat{B}M = C\\widehat{B}M\\), isto é, a diagonal \\(\\overline{BD}\\)
                <strong>bissecta</strong> o ângulo \\(\\widehat{B}\\). O mesmo argumento, aplicado aos demais
                vértices, mostra que cada diagonal bissecta os dois ângulos que atravessa.
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <h4 style="margin-top: 28px;">Quadrado</h4>

            <div class="theorem">
                <p>
                    <strong>Definição:</strong> Um <strong>quadrado</strong> é um paralelogramo que é, ao
                    mesmo tempo, retângulo e losango; ou seja, tem os quatro ângulos retos e os quatro
                    lados congruentes.
                </p>
            </div>

            <p style="text-align: center; font-weight: bold;">Figura 3.18 – Quadrado \\(ABCD\\): diagonais congruentes e perpendiculares, ângulos de \\(45°\\) e os quatro triângulos retângulos isósceles</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/3.5/img_quadrado_diagonais.png" alt="Quadrado ABCD: diagonais congruentes e perpendiculares, ângulos de 45 graus, quatro triângulos" style="max-width: 38%; height: auto;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Como o quadrado é retângulo <em>e</em> losango, ele reúne as propriedades das diagonais
                de ambos: <strong>as diagonais de um quadrado são congruentes</strong> (por ser retângulo)
                <strong>e perpendiculares</strong>, além de <strong>bissetarem os ângulos internos</strong>
                (por ser losango). Cada diagonal divide os ângulos retos dos vértices em dois ângulos de
                \\(45°\\), e as duas diagonais, cortando-se ao meio, determinam quatro triângulos
                retângulos isósceles congruentes.
            </p>

            <div class="theorem">
                <p>
                    <strong>Observação (hierarquia):</strong> Todo quadrado é retângulo e é losango; todo
                    retângulo e todo losango são paralelogramos; e todo paralelogramo é um quadrilátero.
                    O quadrado é, portanto, o caso mais particular, ocupando a interseção entre os
                    retângulos e os losangos.
                </p>
            </div>

        </div>
        `
    },

    // ========== Capítulo 4 — Circunferência e Círculo (em construção) ==========
    'circ-definicoes': {
        title: '4.1 Definições Iniciais',
        description: '', videoId: 'PLACEHOLDER', videoDuration: 'a definir', videoDate: 'a gravar',
        videoDescription: 'Circunferência, círculo, corda, arco, raio, diâmetro.', sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>4.1 Definições Iniciais</h3>

            <p>
                Iniciamos o estudo da circunferência, a curva que reúne todos os pontos que estão a
                uma mesma distância de um ponto fixo. A partir dela definimos os elementos que
                usaremos ao longo do capítulo: raio, corda, diâmetro e arco.
            </p>

            <div class="theorem">
                <p>
                    <strong>Definição (circunferência):</strong> Dados um ponto \\(O\\) e um número real
                    \\(r > 0\\), a <strong>circunferência</strong> de centro \\(O\\) e raio \\(r\\) é o
                    conjunto de todos os pontos \\(P\\) do plano cuja distância a \\(O\\) é igual a \\(r\\):
                    \\[ OP = r. \\]
                    Cada segmento \\(\\overline{OP}\\) com \\(P\\) na circunferência chama-se <strong>raio</strong>
                    (e o próprio número \\(r\\) é a medida do raio).
                </p>
            </div>

            <p>
                Um ponto \\(P\\) do plano fica em uma de três posições em relação à circunferência:
                é <strong>interior</strong> se \\(OP < r\\), está <strong>sobre</strong> a circunferência
                se \\(OP = r\\), e é <strong>exterior</strong> se \\(OP > r\\).
            </p>

            <div class="theorem">
                <p>
                    <strong>Definição (círculo):</strong> O <strong>círculo</strong> (ou disco) de centro
                    \\(O\\) e raio \\(r\\) é a reunião da circunferência com a sua região interior, isto é,
                    o conjunto dos pontos \\(P\\) com \\(OP \\le r\\). A circunferência é apenas a
                    <em>borda</em>; o círculo é a <em>região</em> por ela delimitada.
                </p>
            </div>

            <p style="text-align: center; font-weight: bold;">Figura 4.1 – Circunferência de centro \\(O\\) e raio \\(r\\), com pontos interior, sobre e exterior</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/4.1/img_circunferencia_elementos.png" alt="Circunferência de centro O e raio r; pontos interior, sobre e exterior" style="max-width: 45%; height: auto;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <div class="theorem">
                <p>
                    <strong>Definição (corda e diâmetro):</strong> Uma <strong>corda</strong> é um segmento
                    cujos dois extremos pertencem à circunferência. Uma corda que <strong>passa pelo
                    centro</strong> chama-se <strong>diâmetro</strong>. Todo diâmetro mede \\(2r\\), pois é
                    formado por dois raios opostos.
                </p>
            </div>

            <p>
                Duas circunferências são <strong>congruentes</strong> quando têm o mesmo raio, e
                <strong>concêntricas</strong> quando têm o mesmo centro (e raios diferentes).
            </p>

            <div class="theorem">
                <p>
                    <strong>Propriedade:</strong> O diâmetro é a <strong>maior</strong> das cordas de uma
                    circunferência.
                </p>
            </div>

            <p>
                <strong>Demonstração:</strong>
                Seja \\(\\overline{AB}\\) uma corda qualquer que não passa pelo centro. Então \\(A\\),
                \\(B\\) e \\(O\\) formam um triângulo, e pela
                <a href="#" onclick="loadPage('desigualdade-triangular')" style="color: inherit; text-decoration: underline; cursor: pointer;">desigualdade triangular (seção 2.7)</a>,
                \\[ AB < AO + OB = r + r = 2r. \\]
                Se, por outro lado, \\(\\overline{AB}\\) passa pelo centro, então \\(A\\), \\(O\\) e \\(B\\)
                são colineares e \\(AB = AO + OB = 2r\\). Logo, toda corda mede no máximo \\(2r\\), e esse
                máximo é atingido exatamente pelos diâmetros.
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Definição (arco):</strong> Dois pontos \\(A\\) e \\(B\\) de uma circunferência
                    a dividem em duas partes, chamadas <strong>arcos</strong> de extremos \\(A\\) e \\(B\\).
                    Quando \\(\\overline{AB}\\) é um diâmetro, os dois arcos são iguais e cada um é uma
                    <strong>semicircunferência</strong>.
                </p>
            </div>

            <p style="text-align: center; font-weight: bold;">Figura 4.2 – Corda \\(\\overline{AB}\\), diâmetro \\(\\overline{CD}\\) e um arco de extremos \\(A\\) e \\(B\\)</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/4.1/img_corda_diametro_arco.png" alt="Corda AB, diâmetro CD e o arco de extremos A e B" style="max-width: 45%; height: auto;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

        </div>
        `
    },

    'determinacao-circunferencia': {
        title: '4.2 Determinação de uma Circunferência',
        description: '', videoId: 'PLACEHOLDER', videoDuration: 'a definir', videoDate: 'a gravar',
        videoDescription: 'Determinação de uma circunferência por três pontos.', sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>4.2 Determinação de uma Circunferência (por três pontos)</h3>

            <p>
                Quantos pontos são necessários para fixar uma circunferência? Por <strong>um</strong> ponto
                passam infinitas. Por <strong>dois</strong> pontos \\(A\\) e \\(B\\) também passam infinitas:
                o centro precisa estar à mesma distância de \\(A\\) e de \\(B\\), ou seja, sobre a
                <a href="#" onclick="loadPage('mediatriz')" style="color: inherit; text-decoration: underline; cursor: pointer;">mediatriz (seção 2.9)</a>
                de \\(\\overline{AB}\\), com um centro para cada ponto dessa reta.
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 4.3 – Por dois pontos \\(A\\) e \\(B\\) passam infinitas circunferências; os centros ficam na mediatriz de \\(\\overline{AB}\\)</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/4.2/img_dois_pontos_infinitas.png" alt="Dois pontos A e B: infinitas circunferências com centros na mediatriz de AB" style="max-width: 45%; height: auto;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Com <strong>três</strong> pontos a situação muda: se eles não estiverem alinhados, existe
                exatamente uma circunferência que passa pelos três.
            </p>

            <div class="theorem">
                <p>
                    <strong>Teorema:</strong> Por três pontos <strong>não colineares</strong> passa uma, e
                    uma só, circunferência.
                </p>
            </div>

            <p>
                <strong>Demonstração:</strong>
                Sejam \\(A\\), \\(B\\) e \\(C\\) três pontos não colineares. Um ponto \\(O\\) é centro de uma
                circunferência que passa pelos três exatamente quando \\(OA = OB = OC\\). Analisemos essa
                condição por partes:
            </p>
            <ul style="margin: 8px 0 8px 24px;">
                <li>\\(OA = OB\\) significa que \\(O\\) está na mediatriz de \\(\\overline{AB}\\);</li>
                <li>\\(OB = OC\\) significa que \\(O\\) está na mediatriz de \\(\\overline{BC}\\).</li>
            </ul>

            <p style="text-align: center; font-weight: bold;">Figura 4.4 – Construímos as mediatrizes de \\(\\overline{AB}\\) e de \\(\\overline{BC}\\) no triângulo \\(ABC\\)</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/4.2/img_mediatrizes_construcao.png" alt="Triângulo ABC com as mediatrizes de AB e de BC" style="max-width: 45%; height: auto;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Como \\(A\\), \\(B\\) e \\(C\\) não são colineares, \\(\\overline{AB}\\) e \\(\\overline{BC}\\)
                têm direções diferentes; logo suas mediatrizes não são paralelas e se cruzam em um
                <strong>único</strong> ponto \\(O\\). Esse \\(O\\) satisfaz \\(OA = OB\\) e \\(OB = OC\\),
                portanto \\(OA = OB = OC\\): tomando \\(r = OA\\), a circunferência de centro \\(O\\) e raio
                \\(r\\) passa por \\(A\\), \\(B\\) e \\(C\\), o que prova a <strong>existência</strong>.
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 4.5 – As mediatrizes concorrem em \\(O\\); a circunferência de centro \\(O\\) e raio \\(r = OA\\) passa por \\(A\\), \\(B\\) e \\(C\\)</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/4.2/img_circuncentro_circunscrita.png" alt="Mediatrizes concorrem em O; circunferência circunscrita a ABC com OA=OB=OC" style="max-width: 45%; height: auto;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Para a <strong>unicidade</strong>, qualquer centro de uma circunferência pelos três pontos
                teria de estar, ao mesmo tempo, nas mediatrizes de \\(\\overline{AB}\\) e de \\(\\overline{BC}\\);
                mas essas retas se cruzam em um só ponto. Logo o centro é obrigatoriamente \\(O\\), e a
                circunferência é única.
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Observação:</strong> Se \\(A\\), \\(B\\) e \\(C\\) forem colineares, as mediatrizes
                    de \\(\\overline{AB}\\) e \\(\\overline{BC}\\) ficam paralelas e não se encontram: não há
                    circunferência passando pelos três. Quando não são colineares, o ponto \\(O\\) obtido é o
                    <strong>circuncentro</strong> do triângulo \\(ABC\\), e a circunferência é a sua
                    circunferência <strong>circunscrita</strong>.
                </p>
            </div>

        </div>
        `
    },

    'reta-circunferencia': {
        title: '4.3 Reta e Circunferência; Reta Tangente',
        description: '', videoId: 'PLACEHOLDER', videoDuration: 'a definir', videoDate: 'a gravar',
        videoDescription: 'Posições relativas entre reta e circunferência; Teorema da Reta Tangente.', sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>4.3 Posições Relativas entre Reta e Circunferência; Teorema da Reta Tangente</h3>

            <p>
                Dada uma circunferência de centro \\(O\\) e raio \\(r\\) e uma reta \\(s\\), o número de pontos
                que elas têm em comum depende de uma única grandeza: a distância \\(d\\) do centro \\(O\\) à
                reta \\(s\\). Essa distância é medida pelo segmento perpendicular de \\(O\\) a \\(s\\), que é o
                <a href="#" onclick="loadPage('distancia-ponto-reta')" style="color: inherit; text-decoration: underline; cursor: pointer;">menor caminho de um ponto a uma reta (seção 2.9)</a>.
            </p>

            <div class="theorem">
                <p>
                    <strong>Posições relativas:</strong> Comparando \\(d\\) com \\(r\\):
                </p>
                <ul style="margin: 8px 0 8px 24px;">
                    <li>se \\(d > r\\), a reta é <strong>exterior</strong> (nenhum ponto em comum);</li>
                    <li>se \\(d = r\\), a reta é <strong>tangente</strong> (exatamente um ponto em comum);</li>
                    <li>se \\(d < r\\), a reta é <strong>secante</strong> (dois pontos em comum).</li>
                </ul>
            </div>

            <p style="text-align: center; font-weight: bold;">Figura 4.6 – As três posições de uma reta em relação à circunferência, conforme \\(d\\) e \\(r\\)</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/4.3/img_posicoes_reta_circ.png" alt="Três posições de uma reta: exterior (d>r), tangente (d=r) e secante (d<r)" style="max-width: 45%; height: auto;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                O caso \\(d = r\\) é o mais importante: a reta toca a circunferência em um único ponto \\(T\\),
                chamado <strong>ponto de tangência</strong>. Esse ponto tem uma propriedade marcante,
                que caracteriza as tangentes.
            </p>

            <div class="theorem">
                <p>
                    <strong>Teorema (da reta tangente):</strong> Uma reta \\(t\\) é tangente a uma
                    circunferência no ponto \\(T\\) se, e somente se, \\(t\\) é <strong>perpendicular</strong>
                    ao raio \\(\\overline{OT}\\) nesse ponto.
                </p>
            </div>

            <p style="text-align: center; font-weight: bold;">Figura 4.7 – A tangente \\(t\\) em \\(T\\) é perpendicular ao raio \\(\\overline{OT}\\); qualquer outro ponto \\(X\\) de \\(t\\) satisfaz \\(OX > r\\)</p>
            <div style="text-align: center; margin: 20px 0;"><img src="imagem/4.3/img_tangente_perpendicular.png" alt="Tangente t perpendicular ao raio OT em T; ponto X com OX maior que r" style="max-width: 45%; height: auto;"></div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                <strong>Demonstração:</strong>
                Lembremos que a distância de \\(O\\) à reta é atingida pelo pé da perpendicular baixada de
                \\(O\\), e que esse é o ponto da reta mais próximo de \\(O\\) (seção 2.9).
            </p>

            <p>
                <strong>(Se é tangente, então é perpendicular ao raio.)</strong>
                Suponha \\(t\\) tangente em \\(T\\). Como só há um ponto em comum, a distância de \\(O\\) a
                \\(t\\) vale exatamente \\(r\\); logo o pé da perpendicular baixada de \\(O\\) sobre \\(t\\)
                está a distância \\(r\\) de \\(O\\), ou seja, é um ponto da circunferência sobre \\(t\\). Mas o
                único ponto de \\(t\\) na circunferência é \\(T\\); portanto o pé da perpendicular é o próprio
                \\(T\\), e \\(\\overline{OT} \\perp t\\).
            </p>

            <p>
                <strong>(Se é perpendicular ao raio, então é tangente.)</strong>
                Reciprocamente, suponha que \\(t\\) passe por \\(T\\) (com \\(OT = r\\)) e seja perpendicular a
                \\(\\overline{OT}\\). Para qualquer outro ponto \\(X\\) de \\(t\\), o segmento \\(\\overline{OT}\\)
                é a perpendicular e \\(\\overline{OX}\\) é uma oblíqua; como a perpendicular é o menor caminho,
                \\[ OX > OT = r. \\]
                Assim, todo ponto de \\(t\\) diferente de \\(T\\) é exterior à circunferência, de modo que \\(t\\)
                a encontra somente em \\(T\\): a reta é tangente.
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

            <div class="theorem">
                <p>
                    <strong>Consequência:</strong> Por um ponto \\(T\\) de uma circunferência passa uma
                    <strong>única</strong> tangente, a saber, a perpendicular ao raio \\(\\overline{OT}\\) em
                    \\(T\\).
                </p>
            </div>

        </div>
        `
    },

    'segmentos-tangentes': {
        title: '4.4 Segmentos Tangentes',
        description: '', videoId: 'PLACEHOLDER', videoDuration: 'a definir', videoDate: 'a gravar',
        videoDescription: 'Segmentos tangentes; posições relativas de duas circunferências.', sectionTitle: '',
        content: `
        <div class="theorem" style="text-align: center;">
            <h3>4.4 Segmentos Tangentes; Posições Relativas de Duas Circunferências</h3>
            <p style="font-size: 1.3rem; margin: 30px 0;">🚧 Seção em construção</p>
            <p>Conteúdo e demonstrações a serem desenvolvidos.</p>
        </div>
        `
    },

    'teorema-pitot': {
        title: '4.4.1 Teorema de Pitot',
        description: '', videoId: 'PLACEHOLDER', videoDuration: 'a definir', videoDate: 'a gravar',
        videoDescription: 'Teorema de Pitot (quadrilátero circunscritível).', sectionTitle: '',
        content: `
        <div class="theorem" style="text-align: center;">
            <h3>4.4.1 Teorema de Pitot (quadrilátero circunscritível)</h3>
            <p style="font-size: 1.3rem; margin: 30px 0;">🚧 Seção em construção</p>
            <p>Usa o lema dos segmentos tangentes (4.4). Conteúdo a ser desenvolvido.</p>
        </div>
        `
    },

    'angulos-circunferencia': {
        title: '4.5 Ângulos na Circunferência',
        description: '', videoId: 'PLACEHOLDER', videoDuration: 'a definir', videoDate: 'a gravar',
        videoDescription: 'Ângulo central e inscrito; Teorema do Ângulo Inscrito.', sectionTitle: '',
        content: `
        <div class="theorem" style="text-align: center;">
            <h3>4.5 Ângulos na Circunferência (central e inscrito); Teorema do Ângulo Inscrito</h3>
            <p style="font-size: 1.3rem; margin: 30px 0;">🚧 Seção em construção</p>
            <p>Conteúdo e demonstrações a serem desenvolvidos.</p>
        </div>
        `
    },

    'arco-capaz': {
        title: '4.6 Arco Capaz',
        description: '', videoId: 'PLACEHOLDER', videoDuration: 'a definir', videoDate: 'a gravar',
        videoDescription: 'Arco capaz.', sectionTitle: '',
        content: `
        <div class="theorem" style="text-align: center;">
            <h3>4.6 Arco Capaz</h3>
            <p style="font-size: 1.3rem; margin: 30px 0;">🚧 Seção em construção</p>
            <p>Conteúdo e demonstrações a serem desenvolvidos.</p>
        </div>
        `
    },

    'quadrilatero-inscritivel': {
        title: '4.7 Quadrilátero Inscritível',
        description: '', videoId: 'PLACEHOLDER', videoDuration: 'a definir', videoDate: 'a gravar',
        videoDescription: 'Quadrilátero inscritível (ângulos opostos suplementares).', sectionTitle: '',
        content: `
        <div class="theorem" style="text-align: center;">
            <h3>4.7 Quadrilátero Inscritível (ângulos opostos suplementares)</h3>
            <p style="font-size: 1.3rem; margin: 30px 0;">🚧 Seção em construção</p>
            <p>Conteúdo e demonstrações a serem desenvolvidos.</p>
        </div>
        `
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

console.log('✅ PAGES_DATA carregado com', Object.keys(PAGES_DATA).length, ' páginas');
