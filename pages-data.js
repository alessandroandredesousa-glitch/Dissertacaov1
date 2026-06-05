// DADOS DAS PÁGINAS
const PAGES_DATA = {

    // ========== Triângulos ==========
    'definicaotriangulos': {
        title: '1.1 Definição de triângulos',
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
                <img src="./imagem/img_definicaodetriangulos.PNG" alt="Pontos A, B e C" style="max-width: 70%;">
            </div>
            <ul>
                <li>Os pontos \\(A\\), \\(B\\) e \\(C\\) são chamados de <strong>vértices</strong>.
                <li>Os segmentos \\(\\overline{AB}\\) (de medida \\(c\\)), \\(\\overline{AC}\\) (de medida \\(b\\)) e \\(\\overline{BC}\\) (de medida \\(a\\)) são chamados de <strong>lados</strong> do \\(\\triangle ABC\\).
            </ul>

            

            <div style="text-align: center; margin: 20px 0;">
                <img src="./imagem/img_definicaodetriangulos_1.PNG" alt="Lados do triângulo" style="max-width: 70%;">
                <p><strong>Imagem: Lados do triângulo</strong></p>
            </div>

            <ul>
            <li>Os ângulos \\(B\\widehat{A}C\\) (ou \\(\\widehat{A}\\)), \\(A\\widehat{B}C\\) (ou \\(\\widehat{B}\\)) e \\(B\\widehat{C}A\\) (ou \\(\\widehat{C}\\)) são chamados de <strong>ângulos internos</strong> do \\(\\triangle ABC\\).
            Estes ângulos são opostos aos lados \\(a\\), \\(b\\) e \\(c\\), respectivamente.
            <ul>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_definicaodetriangulos_2.PNG" alt="Ângulos e lados opostos" style="max-width: 70%;">
                <p><strong>Imagem: Ângulos e lados opostos</strong></p>
            </div>
        </div>
        `
    },

    'classificacaotriangulos': {
        title: '1.2 Classificação dos Triângulos',
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
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_classsificacao_tri_3.PNG" alt="Classificação quanto aos lados e ângulos" style="max-width: 70%;">
                <p><strong>Imagem: Classificação quanto aos lados e ângulos</strong></p>
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
                <img src="imagem/img_congruenciadetriangulo_1.PNG" alt="Triângulos Congruentes" style="max-width: 70%;">
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
        title: '1.3.2 Congruência Lado-Ângulo-Lado (LAL)',
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

        <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_casaLAL_1.png" alt="Caso LAL" style="max-width: 70%;">
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
        title: '1.3.2 Congruência Ângulo-Lado-Ângulo (ALA)',
        description: '',
        videoId: 'SEU_VIDEO_ID',
        videoDuration: '',
        videoDate: '',
        videoDescription: 'Postulado ALA',
        sectionTitle: '',
        content: `
        <div class="theorem">
            <h3>Teorema de Congruência Ângulo-Lado-Ângulo (ALA)</h3>
            <p>Se dois triângulos possuem dois ângulos congruentes e o lado compreendido entre esses ângulos também é congruente, então os triângulos são congruentes.</p>
        </div>

        <div class="math-display">

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_casa_ALA_1.png" alt="Triângulos ABC e A'B'C' — Caso ALA" style="max-width: 70%;">
            </div>

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
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_casa_ALA_2.png" alt="Triângulos ABC e A'B'C' — Caso ALA" style="max-width: 70%;">
            </div>
            <p>
                Com isso, \\(\\triangle ABC \\equiv \\triangle A'B'X\\) pelo caso LAL. Como, por hipótese, 
                o ângulo \\(\\widehat{C} \\equiv \\widehat{C'}\\), logo o ponto \\(X = C'\\), 
                portanto \\(\\Rightarrow \\overline{AC} = \\overline{A'C'}\\).
            </p>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_casa_ALA_3.png" alt="Demonstração — ponto X sobre A'C'" style="max-width: 70%;">
            </div>

            <p>Temos:</p>
            \\[
                \\left\\{\\begin{array}{l}
                    \\overline{AC} = \\overline{A'C} \\\\
                    \\widehat{A} \\equiv \\widehat{A'} \\\\
                    \\overline{AB} = \\overline{A'B'}
                \\end{array}\\right.
                \\Rightarrow \\triangle ABC \\equiv \\triangle A'B'C' \\quad \\text{(pelo caso LAL)}
            \\]
        </div>
    `
    },

    'congruenciasdetriangulos-LLL': {
        title: '1.3.3 Congruência Lado-Lado-Lado (LLL)',
        description: '',
        videoId: 'SEU_VIDEO_ID',
        videoDuration: '',
        videoDate: '',
        videoDescription: 'Postulado LLL',
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

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_caso_LLL_1.png" alt="Construção do ponto X" style="max-width: 70%;">
            </div>

            <p>
                Tomamos um ponto \\(H\\) sobre a reta \\(\\overleftrightarrow{DX}\\), tal que
                \\(\\overline{DH} = \\overline{AC}\\).
            </p>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_caso_LLL_2.png" alt="Ponto H sobre DX" style="max-width: 70%;">
            </div>

            <p>Note que:</p>
            \\[
                \\left\\{\\begin{array}{l}
                    E\\widehat{D}H \\equiv C\\widehat{A}B \\\\
                    \\overline{DH} = \\overline{AC} \\\\
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

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_caso_LLL_3.png" alt="Triângulo DFH isósceles" style="max-width: 70%;">
            </div>

            <p>
                Com o mesmo raciocínio, podemos concluir que o \\(\\triangle FEH\\) é isósceles
                e \\(E\\widehat{F}H \\equiv F\\widehat{H}E\\).
            </p>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_caso_LLL_4.png" alt="Triângulo FEH isósceles" style="max-width: 70%;">
            </div>

            <p>Portanto:</p>
            \\[
                \\left\\{\\begin{array}{l}
                    D\\widehat{F}E = D\\widehat{F}H + H\\widehat{F}E \\\\
                    D\\widehat{H}E = D\\widehat{H}F + E\\widehat{H}F
                \\end{array}\\right.
            \\]

            <p>
                Como \\(D\\widehat{F}H \\equiv D\\widehat{H}F\\) e \\(H\\widehat{F}E \\equiv E\\widehat{H}F\\), logo:
            </p>
            \\[
                D\\widehat{F}E \\equiv D\\widehat{H}E
            \\]

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_caso_LLL_5.png" alt="Conclusão LAL" style="max-width: 70%;">
            </div>

            <p>Temos:</p>
            \\[
                \\left\\{\\begin{array}{l}
                    \\overline{DF} = \\overline{DH} \\\\
                    D\\widehat{H}E \\equiv D\\widehat{F}E \\\\
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
        title: '1.4.1 Ponto Médio',
        description: 'Cálculo do ponto médio',
        videoId: 'dQw4w9WgXcQ',
        videoDuration: '2:30 minutos',
        videoDate: 'Agosto 2023',
        videoDescription: 'Perímetro do quadrado.',
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
                    C\\widehat{A}B \\equiv A\\widehat{B}D \\\\
                    \\overline{AC} = \\overline{BD}
                \\end{array}\\right.
            \\]

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_pontomedio_1.PNG" alt="Pontos C e D em semiplanos opostos" style="max-width: 70%;">
            </div>

            <p>
                O segmento \\(\\overline{CD}\\) intercepta o segmento \\(\\overline{AB}\\) em um ponto \\(M\\).
            </p>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_pontomedio_2.PNG" alt="Segmento CD interceptando AB no ponto M" style="max-width: 70%;">
            </div>

            <h4>Note que:</h4>
            <ul>
                <li>
                    \\(\\triangle CAB \\equiv \\triangle ABD\\) &nbsp; (caso LAL)
                </li>
                <li>
                    \\(\\triangle ACD \\equiv \\triangle CDB\\) &nbsp; (caso LLL), pois \\(\\overline{AD} = \\overline{CB}\\) 
                    pela congruência anterior
                </li>
                <li>
                    \\(\\triangle AMD \\equiv \\triangle BMC\\) &nbsp; (caso ALA: \\(B\\widehat{A}D \\equiv A\\widehat{B}C\\), 
                    \\(\\overline{AD} = \\overline{BC}\\), \\(A\\widehat{D}C \\equiv D\\widehat{C}B\\))
                </li>
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
        title: '1.4.2 Mediana de um Triângulo',
        description: '',
        videoId: 'SEU_VIDEO_ID',
        videoDuration: '',
        videoDate: '',
        videoDescription: 'Mediana de um Triângulo',
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

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_mediana_1.png" alt="Mediana do triângulo ABC" style="max-width: 70%;">
            </div>

            <p>
                Todo triângulo possui três medianas, cada uma relativa a um de seus lados:
            </p>

            <ul>
                <li>Mediana relativa ao lado \\(\\overline{AB}\\): segmento \\(\\overline{CM_c}\\), onde \\(M_c\\) é o ponto médio de \\(\\overline{AB}\\).</li>
                <li>Mediana relativa ao lado \\(\\overline{AC}\\): segmento \\(\\overline{BM_b}\\), onde \\(M_b\\) é o ponto médio de \\(\\overline{AC}\\).</li>
                <li>Mediana relativa ao lado \\(\\overline{BC}\\): segmento \\(\\overline{AM_a}\\), onde \\(M_a\\) é o ponto médio de \\(\\overline{BC}\\).</li>
            </ul>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_mediana_2.png" alt="As três medianas do triângulo" style="max-width: 70%;">
            </div>

        </div>
    `
    },

   'existencia-bissetriz': {
    title: '1.4.3 Existência da Bissetriz',
    description: '',
    videoId: 'SEU_VIDEO_ID',
    videoDuration: '',
    videoDate: '',
    videoDescription: 'Existência da Bissetriz',
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
                    \\overline{OA} = \\overline{OB} \\\\
                    \\overline{OB'} \\equiv \\overline{OB'}
                \\end{array}\\right.
            \\]
            <p>
                com \\(\\overline{OA'} > \\overline{OA}\\) e \\(\\overline{OB'} > \\overline{OB}\\).
            </p>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_bissetriz_1.png" alt="Ângulo aOb com pontos A, A', B, B'" style="max-width: 70%;">
            </div>

            <p>
                Façamos \\(\\overline{AB'}\\) e \\(\\overline{BA'}\\). Seja \\(C\\) o ponto de interseção de 
                \\(\\overline{AB'}\\) e \\(\\overline{BA'}\\). Consideremos a semirreta \\(\\overrightarrow{OC}\\). Temos:
            </p>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_bissetriz_2.png" alt="Ponto C interseção de AB' e BA'" style="max-width: 70%;">
            </div>

            <ul>
                <li>
                    O triângulo \\(\\triangle OBA' \\equiv \\triangle OAB'\\) &nbsp; (caso LAL)
                </li>
            </ul>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_bissetriz_3.png" alt="Congruência LAL" style="max-width: 70%;">
            </div>

            <ul>
                <li>
                    O triângulo \\(\\triangle ACA' \\equiv \\triangle BCB'\\) &nbsp; (caso ALA)
                </li>
            </ul>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_bissetriz_4.png" alt="Congruência ALA" style="max-width: 70%;">
            </div>

            <ul>
                <li>
                    O triângulo \\(\\triangle OAC \\equiv \\triangle OBC\\) &nbsp; (caso LAL)
                </li>
            </ul>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_bissetriz_5.png" alt="Congruência LAL final" style="max-width: 70%;">
            </div>

            <p>
                Desta última congruência, \\(A\\widehat{O}C \\equiv C\\widehat{O}B\\), ou seja, 
                \\(\\overrightarrow{OC}\\) é bissetriz de \\(a\\widehat{O}b\\).
            </p>
            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

        </div>
    `
},

'teorema-angulo-externo': {
    title: '1.5 Teorema do Ângulo Externo',
    description: '',
    videoId: 'SEU_VIDEO_ID',
    videoDuration: '',
    videoDate: '',
    videoDescription: 'Teorema do Ângulo Externo',
    sectionTitle: '',
    content: `
        <div class="math-display">

            <h3>1.5 Teorema do Ângulo Externo</h3>

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

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_angulo_externo_1.png" alt="Triângulo ABC com ângulo externo ε" style="max-width: 70%;">
            </div>

            <h4>Demonstração:</h4>

            <p>
                Seja \\(M\\) o ponto médio de \\(\\overline{AC}\\), e tomemos um ponto \\(P\\) sobre a 
                semirreta \\(\\overrightarrow{BM}\\) de modo que \\(\\overline{BM} = \\overline{MP}\\).
            </p>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_angulo_externo_2.png" alt="Ponto M médio de AC e ponto P sobre BM" style="max-width: 70%;">
            </div>

            <p>
                Note que \\(\\triangle BMA \\equiv \\triangle CMP\\) (caso LAL), então 
                \\(B\\widehat{A}C \\equiv M\\widehat{C}P\\). Como \\(M\\widehat{C}P\\) é interno a 
                \\(\\varepsilon\\), logo \\(\\varepsilon > M\\widehat{C}P \\Rightarrow \\varepsilon > B\\widehat{A}C\\).
            </p>

            <p>
                De maneira análoga, seja \\(M\\) o ponto médio do segmento \\(\\overline{BC}\\) e \\(P\\) 
                um ponto pertencente à semirreta \\(\\overrightarrow{AM}\\), tal que 
                \\(\\overline{AM} = \\overline{MP}\\).
            </p>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_angulo_externo_3.png" alt="Ponto M médio de BC e ponto P sobre AM" style="max-width: 70%;">
            </div>

            <p>
                Note que \\(\\triangle BMA \\equiv \\triangle PMC\\) (pelo caso LAL), então 
                \\(A\\widehat{B}C \\equiv M\\widehat{C}P\\).
            </p>

            <p>
                Tomemos um ponto \\(K\\) pertencente à semirreta \\(\\overrightarrow{PC}\\), tal que 
                \\(K\\) está fora do segmento \\(\\overline{PC}\\).
            </p>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_angulo_externo_4.png" alt="Ponto K sobre semirreta PC" style="max-width: 70%;">
            </div>

            <p>
                Perceba que \\(K\\widehat{C}X \\equiv M\\widehat{C}P\\) (opostos pelo vértice).
            </p>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_angulo_externo_5.png" alt="Ângulos opostos pelo vértice" style="max-width: 70%;">
            </div>

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
