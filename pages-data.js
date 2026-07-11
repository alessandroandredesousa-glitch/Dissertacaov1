// DADOS DAS PÁGINAS
const PAGES_DATA = {

    // ========== Triângulos ==========
    'definicaotriangulos': {
        title: '1.1 Definição de Triângulos',
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
            <p style="text-align: center; font-weight: bold;">Figura 1.1 – Triângulo ABC com vértices A, B e C</p>

            <div style="text-align: center; margin: 20px 0;">

                <img src="./imagem/1.1/img_definicaodetriangulos.png" alt="Pontos A, B e C" style="max-width: 70%;">

            </div>

            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
            <ul>
                <li>Os pontos \\(A\\), \\(B\\) e \\(C\\) são chamados de <strong>vértices</strong>.
                <li>Os segmentos \\(\\overline{AB}\\) (de medida \\(c\\)), \\(\\overline{AC}\\) (de medida \\(b\\)) e \\(\\overline{BC}\\) (de medida \\(a\\)) são chamados de <strong>lados</strong> do \\(\\triangle ABC\\).
            </ul>

            

            <p style="text-align: center; font-weight: bold;">Figura 1.2 – Lados do triângulo ABC</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="./imagem/1.1/img_definicaodetriangulos_1.png" alt="Lados do triângulo" style="max-width: 70%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <ul>
            <li>Os ângulos \\(B\\widehat{A}C\\) (ou \\(\\widehat{A}\\)), \\(A\\widehat{B}C\\) (ou \\(\\widehat{B}\\)) e \\(B\\widehat{C}A\\) (ou \\(\\widehat{C}\\)) são chamados de <strong>ângulos internos</strong> do \\(\\triangle ABC\\).
            Estes ângulos são opostos aos lados \\(a\\), \\(b\\) e \\(c\\), respectivamente.
            <ul>
            <p style="text-align: center; font-weight: bold;">Figura 1.3 – Ângulos internos e lados opostos do triângulo ABC</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/1.1/img_definicaodetriangulos_2.png" alt="Ângulos e lados opostos" style="max-width: 70%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
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
            <p style="text-align: center; font-weight: bold;">Figura 1.4 – Classificação dos triângulos quanto aos lados e ângulos internos</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/1.1/img_classsificacao_tri_3.png" alt="Classificação quanto aos lados e ângulos" style="max-width: 70%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
        </div>
    `
    },


    'definicaodecongruencia': {
        title: '1.3.1 Definição de Congruência',
        description: '',
        videoId: 'Xyblz3iS57Y',
        videoDuration: '4:30 minutos',
        videoDate: 'Outubro 2023',
        videoDescription: 'Definição de Congruência',
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
            <p style="text-align: center; font-weight: bold;">Figura 1.5 – Correspondência entre vértices de triângulos congruentes</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/1.2/img_congruenciadetriangulo_1.png" alt="Triângulos Congruentes" style="max-width: 70%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

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

        <p style="text-align: center; font-weight: bold;">Figura 1.6 – Postulado de congruência Lado-Ângulo-Lado (LAL)</p>
        <div style="text-align: center; margin: 20px 0;">
            <img src="imagem/1.3/img_casaLAL_1.png" alt="Caso LAL" style="max-width: 70%;">
        </div>
        <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
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

            <p style="text-align: center; font-weight: bold;">Figura 1.7 – Triângulos ABC e A'B'C' com hipótese ALA</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.3/img_casa_ALA_1.png" alt="Triângulos ABC e A'B'C': Caso ALA" style="max-width: 70%;">


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
            <p style="text-align: center; font-weight: bold;">Figura 1.8 – Ponto X sobre a reta A'C' com A'X = AC</p>

            <div style="text-align: center; margin: 20px 0;">

                <img src="imagem/1.3/img_casa_ALA_2.png" alt="Triângulos ABC e A'B'C': Caso ALA" style="max-width: 70%;">

            </div>

            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
            <p>
                Com isso, \\(\\triangle ABC \\equiv \\triangle A'B'X\\) pelo <a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>. Como, por hipótese, 
                o ângulo \\(\\widehat{B} \\equiv \\widehat{B'}\\), logo o ponto \\(X = C'\\), 
                portanto \\(\\Rightarrow \\overline{AC} = \\overline{A'C'}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.9 – Coincidência X = C' e conclusão pelo caso LAL</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.3/img_casa_ALA_3.png" alt="Demonstração: ponto X sobre A'C'" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>Temos:</p>
            \\[
                \\left\\{\\begin{array}{l}
                    \\overline{AC} = \\overline{A'C'} \\\\
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

            <p style="text-align: center; font-weight: bold;">Figura 1.10 – Construção do ângulo EDX ≡ CAB</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.3/img_caso_LLL_1.png" alt="Construção do ponto X" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Tomamos um ponto \\(H\\) sobre a reta \\(\\overleftrightarrow{DX}\\), tal que
                \\(\\overline{DH} = \\overline{AC}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.11 – Ponto H sobre a reta DX com DH = AC</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.3/img_caso_LLL_2.png" alt="Ponto H sobre DX" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

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

            <p style="text-align: center; font-weight: bold;">Figura 1.12 – Triângulo DFH isósceles</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.3/img_caso_LLL_3.png" alt="Triângulo DFH isósceles" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Com o mesmo raciocínio, podemos concluir que o \\(\\triangle FEH\\) é isósceles
                e \\(E\\widehat{F}H \\equiv F\\widehat{H}E\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.13 – Triângulo FEH isósceles</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.3/img_caso_LLL_4.png" alt="Triângulo FEH isósceles" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

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

            <p style="text-align: center; font-weight: bold;">Figura 1.14 – Conclusão △ABC ≡ △DEF pelo caso LAL</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.3/img_caso_LLL_5.png" alt="Conclusão LAL" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

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

            <p style="text-align: center; font-weight: bold;">Figura 1.15 – Pontos C e D em semiplanos opostos em relação a AB</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.4/img_pontomedio_1.png" alt="Pontos C e D em semiplanos opostos" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                O segmento \\(\\overline{CD}\\) intercepta o segmento \\(\\overline{AB}\\) em um ponto \\(M\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.16 – Segmento CD interceptando AB no ponto M</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.4/img_pontomedio_2.png" alt="Segmento CD interceptando AB no ponto M" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <h4>Note que:</h4>
            <ul>
                <li>
                    \\(\\triangle CAB \\equiv \\triangle ABD\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>)
                </li>
                <p style="text-align: center; font-weight: bold;">Figura 1.17 – Congruência △CAB ≡ △ABD pelo caso LAL</p>

                <div style="text-align: center; margin: 20px 0;">

                    <img src="imagem/1.4/img_pontomedio_3.png" alt="Segmento CD interceptando AB no ponto M" style="max-width: 70%;">

                </div>

                <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
                <li>
                    \\(\\triangle ACD \\equiv \\triangle CDB\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-LLL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LLL</a>), pois \\(\\overline{AD} = \\overline{CB}\\) 
                    pela congruência anterior
                </li>
                <p style="text-align: center; font-weight: bold;">Figura 1.18 – Congruência △ACD ≡ △CDB pelo caso LLL</p>

                <div style="text-align: center; margin: 20px 0;">

                    <img src="imagem/1.4/img_pontomedio_4.png" alt="Segmento CD interceptando AB no ponto M" style="max-width: 70%;">

                </div>

                <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
                <li>
                    \\(\\triangle AMD \\equiv \\triangle BMC\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-ALA')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso ALA</a>: \\(B\\widehat{A}D \\equiv A\\widehat{B}C\\), 
                    \\(\\overline{AD} = \\overline{BC}\\), \\(A\\widehat{D}C \\equiv D\\widehat{C}B\\))
                </li>
                <p style="text-align: center; font-weight: bold;">Figura 1.19 – Congruência △AMD ≡ △BMC pelo caso ALA</p>

                <div style="text-align: center; margin: 20px 0;">

                    <img src="imagem/1.4/img_pontomedio_5.png" alt="Segmento CD interceptando AB no ponto M" style="max-width: 70%;">

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

            <p style="text-align: center; font-weight: bold;">Figura 1.20 – Mediana relativa ao lado AB do triângulo ABC</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.4/img_mediana_1.png" alt="Mediana do triângulo ABC" style="max-width: 50%;">


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

            <p style="text-align: center; font-weight: bold;">Figura 1.21 – As três medianas do triângulo ABC concorrendo no baricentro G</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.4/img_mediana_2.png" alt="As três medianas do triângulo" style="max-width: 50%;">


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
    title: '1.4.3 Definição e Existência da Bissetriz',
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

            <p style="text-align: center; font-weight: bold;">Figura 1.22 – Ângulo aOb com pontos A, A', B, B' nas semirretas</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.4/img_bissetriz_1.png" alt="Ângulo aOb com pontos A, A', B, B'" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Façamos \\(\\overline{AB'}\\) e \\(\\overline{BA'}\\). Seja \\(C\\) o ponto de interseção de 
                \\(\\overline{AB'}\\) e \\(\\overline{BA'}\\). Consideremos a semirreta \\(\\overrightarrow{OC}\\). Temos:
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.23 – Ponto C interseção de AB' e BA'</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.4/img_bissetriz_2.png" alt="Ponto C interseção de AB' e BA'" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <ul>
                <li>
                    O triângulo \\(\\triangle OBA' \\equiv \\triangle OAB'\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>)
                </li>
            </ul>

            <p style="text-align: center; font-weight: bold;">Figura 1.24 – Congruência △OBA' ≡ △OAB' pelo caso LAL</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.4/img_bissetriz_3.png" alt="Congruência LAL" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <ul>
                <li>
                    O triângulo \\(\\triangle ACA' \\equiv \\triangle BCB'\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-ALA')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso ALA</a>)
                </li>
            </ul>

            <p style="text-align: center; font-weight: bold;">Figura 1.25 – Congruência △ACA' ≡ △BCB' pelo caso ALA</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.4/img_bissetriz_4.png" alt="Congruência ALA" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <ul>
                <li>
                    O triângulo \\(\\triangle OAC \\equiv \\triangle OBC\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>)
                </li>
            </ul>

            <p style="text-align: center; font-weight: bold;">Figura 1.26 – Congruência △OAC ≡ △OBC e bissetriz OC</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.4/img_bissetriz_5.png" alt="Congruência LAL final" style="max-width: 50%;">


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
    title: '1.4.4 Bissetriz de um Triângulo',
    description: '',
    videoId: 'SEU_VIDEO_ID',
    videoDuration: '',
    videoDate: '',
    videoDescription: 'Bissetriz de um Triângulo',
    sectionTitle: '',
    content: `
        <div class="math-display">

            <h3>1.4.4 Bissetriz de um Triângulo</h3>

            <div class="theorem">
                <p>
                    Dado um triângulo \\(\\triangle ABC\\), a <strong>bissetriz interna</strong> relativa
                    ao vértice \\(A\\) é o segmento que parte de \\(A\\), bissecta o ângulo interno
                    \\(\\widehat{A}\\) e tem sua outra extremidade no ponto \\(D\\) de interseção com o
                    lado oposto \\(\\overline{BC}\\).
                </p>
            </div>

            <p style="text-align: center; font-weight: bold;">Figura 1.27 – Bissetriz interna \\(\\overline{AD}\\) do triângulo \\(ABC\\) relativa ao vértice \\(A\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/1.4/img_bissetriz_triangulo_1.png" alt="Bissetriz interna AD do triângulo ABC" style="max-width: 60%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Como um triângulo possui três vértices, ele possui três bissetrizes internas,
                uma relativa a cada vértice. Um resultado notável, que será explorado futuramente,
                é que essas três bissetrizes são <strong>concorrentes</strong>: elas se encontram
                em um único ponto \\(I\\), chamado <strong>incentro</strong> do triângulo,
                que é equidistante dos três lados.
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.28 – As três bissetrizes internas do triângulo \\(ABC\\) concorrendo no incentro \\(I\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/1.4/img_bissetriz_triangulo_2.png" alt="As três bissetrizes do triângulo ABC e o incentro I" style="max-width: 60%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

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

            <p style="text-align: center; font-weight: bold;">Figura 1.29 – Triângulo ABC com ângulo externo ε</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.5/img_angulo_externo_1.png" alt="Triângulo ABC com ângulo externo ε" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <h4>Demonstração:</h4>

            <p>
                Seja \\(M\\) o ponto médio de \\(\\overline{AC}\\), e tomemos um ponto \\(P\\) sobre a 
                semirreta \\(\\overrightarrow{BM}\\) de modo que \\(\\overline{BM} = \\overline{MP}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.30 – Ponto M médio de AC e ponto P sobre a semirreta BM</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.5/img_angulo_externo_2.png" alt="Ponto M médio de AC e ponto P sobre BM" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Note que \\(\\triangle BMA \\equiv \\triangle CMP\\) (<a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>), então 
                \\(B\\widehat{A}C \\equiv M\\widehat{C}P\\). Como \\(M\\widehat{C}P\\) é interno a 
                \\(\\varepsilon\\), logo \\(\\varepsilon > M\\widehat{C}P \\Rightarrow \\varepsilon > B\\widehat{A}C\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.31 – Congruência △BMA ≡ △CMP pelo caso LAL</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.5/img_angulo_externo_3.png" alt="Congruência LAL" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>


            <p>
                De maneira análoga, seja \\(M\\) o ponto médio do segmento \\(\\overline{BC}\\) e \\(P\\) 
                um ponto pertencente à semirreta \\(\\overrightarrow{AM}\\), tal que 
                \\(\\overline{AM} = \\overline{MP}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.32 – Ponto M médio de BC e ponto P sobre a semirreta AM</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.5/img_angulo_externo_4.png" alt="Ponto M médio de BC e ponto P sobre AM" style="max-width: 50%;">


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

            <p style="text-align: center; font-weight: bold;">Figura 1.33 – Ponto K sobre a semirreta PC</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.5/img_angulo_externo_5.png" alt="Ponto K sobre semirreta PC" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Perceba que \\(K\\widehat{C}X \\equiv M\\widehat{C}P\\) (opostos pelo vértice).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.34 – Ângulos opostos pelo vértice KCX e MCP</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/1.5/img_angulo_externo_6.png" alt="Ângulos opostos pelo vértice" style="max-width: 50%;">


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
    title: '1.6 Congruência de Triângulos: Caso LAA(o)',
    description: '',
    videoId: 'SEU_VIDEO_ID',
    videoDuration: '',
    videoDate: '',
    videoDescription: 'Caso de Congruência LAA(o)',
    sectionTitle: '',
    content: `
        <div class="math-display">

            <h3>1.6 Teorema de Congruência \\(\\text{LAA}_o\\)</h3>

            <div class="theorem">
                <p>
                    Dados dois triângulos \\(\\triangle ABC\\) e \\(\\triangle DEF\\) tais que:
                </p>
                \\[
                    \\left\\{\\begin{array}{l}
                        \\overline{AB} = \\overline{DE} \\\\
                        \\widehat{B} \\equiv \\widehat{E} \\\\
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

            <p style="text-align: center; font-weight: bold;">Figura 1.35 – Triângulos \\(ABC\\) e \\(DEF\\) com hipótese do caso \\(\\text{LAA}_o\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/1.6/img_congruencia_LAA_1.png" alt="Triângulos ABC e DEF com as marcações da hipótese LAA(o)" style="max-width: 65%;">
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

            <p style="text-align: center; font-weight: bold;">Figura 1.36 – Caso \\(\\overline{EF} > \\overline{BC}\\): ponto \\(P\\) interno a \\(\\overline{EF}\\) e contradição pelo Teorema do Ângulo Externo</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/1.6/img_congruencia_LAA_2.png" alt="Ponto P interno a EF e contradição pelo ângulo externo" style="max-width: 65%;">
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
    title: '1.7.1 Relação entre Lados e Ângulos Opostos',
    description: '',
    videoId: 'SEU_VIDEO_ID',
    videoDuration: '',
    videoDate: '',
    videoDescription: 'Relação entre Lados e Ângulos Opostos em um Triângulo',
    sectionTitle: '',
    content: `
        <div class="math-display">

            <h3>1.7.1 Relação entre Lados e Ângulos Opostos</h3>

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

            <p style="text-align: center; font-weight: bold;">Figura 1.37 – Triângulo ABC com AB > AC</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/1.6/img_maior_lado_1.png" alt="Triângulo ABC com AB maior que AC" style="max-width: 60%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Seja \\(D\\) um ponto sobre \\(\\overline{AB}\\) de tal modo que
                \\(\\overline{AC} = \\overline{AD}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.38 – Ponto D sobre AB com AD = AC</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/1.6/img_maior_lado_2.png" alt="Ponto D sobre AB com AD = AC" style="max-width: 60%;">
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

            <p style="text-align: center; font-weight: bold;">Figura 1.39 – Triângulo BDC com ângulo externo \\(A\\widehat{D}C\\) em destaque</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/1.6/img_maior_lado_3.png" alt="Triângulo BDC destacado com ângulo externo ADC" style="max-width: 60%;">
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
    title: '1.7.2 A Desigualdade Triangular',
    description: '',
    videoId: 'SEU_VIDEO_ID',
    videoDuration: '',
    videoDate: '',
    videoDescription: 'A Desigualdade Triangular',
    sectionTitle: '',
    content: `
        <div class="math-display">

            <h3>1.7.2 A Desigualdade Triangular</h3>

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

            <p style="text-align: center; font-weight: bold;">Figura 1.39 – Triângulo \\(ABC\\) com lados \\(a\\), \\(b\\) e \\(c\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/1.7/img_desigualdade_triangular_1.png" alt="Triângulo ABC com lados a, b e c" style="max-width: 60%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Seja \\(D\\) um ponto na extensão de \\(\\overrightarrow{BA}\\) além de \\(A\\),
                de tal modo que \\(\\overline{AD} = \\overline{AC}\\).
                Os pontos ficam na ordem \\(B\\text{-}A\\text{-}D\\) sobre a reta.
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.40 – Ponto \\(D\\) na extensão de \\(\\overrightarrow{BA}\\) com \\(\\overline{AD} = \\overline{AC}\\) e \\(\\triangle ACD\\) isósceles</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/1.7/img_desigualdade_triangular_2.png" alt="Ponto D na extensão de BA com AD = AC, triângulo ACD isósceles" style="max-width: 60%;">
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

            <p style="text-align: center; font-weight: bold;">Figura 1.41 – No triângulo \\(BCD\\), \\(B\\widehat{C}D > B\\widehat{D}C\\), logo \\(\\overline{BD} > \\overline{BC}\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/1.7/img_desigualdade_triangular_3.png" alt="Triângulo BCD com ângulo BCD maior que BDC" style="max-width: 60%;">
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
        title: '1.8.1 Retas Paralelas e Ângulos com Transversal',
        description: '',
        videoId: 'SEU_VIDEO_ID',
        videoDuration: '',
        videoDate: '',
        videoDescription: 'Retas Paralelas e Ângulos com Transversal',
        sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>1.8.1 Retas Paralelas e Ângulos com Transversal</h3>

            <div class="theorem">
                <p>
                    Duas retas coplanares \\(a\\) e \\(b\\) são ditas <strong>paralelas</strong>
                    (notação: \\(a \\parallel b\\)) se não possuem nenhum ponto em comum.
                    Caso contrário, são chamadas <strong>concorrentes</strong>.
                </p>
            </div>

            <p style="text-align: center; font-weight: bold;">Figura 1.42 – Retas paralelas \\(a\\) e \\(b\\) e retas concorrentes</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/1.8/img_paralelas_1.png" alt="Retas paralelas e retas concorrentes" style="max-width: 65%;">
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

            <p style="text-align: center; font-weight: bold;">Figura 1.43 – Os 8 ângulos formados pela transversal \\(t\\) com as retas \\(a\\) e \\(b\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/1.8/img_paralelas_2.png" alt="Os 8 ângulos formados pela transversal" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

        </div>
    `
    },

    'existencia-paralela': {
        title: '1.8.2 Existência da Paralela',
        description: '',
        videoId: 'SEU_VIDEO_ID',
        videoDuration: '',
        videoDate: '',
        videoDescription: 'Existência da Paralela',
        sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>1.8.2 Existência da Paralela</h3>

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
                <img src="imagem/1.8/img_existencia_paralela_1.png" alt="Existência da paralela: construção e absurdo" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Figura 1.44 – Construção de \\(m\\) por \\(P\\) com ângulos alternos \\(\\alpha \\equiv \\beta\\). Fonte: Autoria própria (2026).</p>

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
        title: '1.8.3 Construção da Paralela',
        description: '',
        videoId: 'SEU_VIDEO_ID',
        videoDuration: '',
        videoDate: '',
        videoDescription: 'Construção da Paralela',
        sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>1.8.3 Construção da Paralela</h3>

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
                <img src="imagem/1.8/img_construcao_paralela_1.png" alt="Transversal t por P e A, ângulo α em A" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Figura 1.45 – Transversal \\(t\\) traçada por \\(P\\) e \\(A \\in r\\), com ângulo \\(\\alpha\\) identificado em \\(A\\). Fonte: Autoria própria (2026).</p>

            <ol start="3">
                <li>Em \\(P\\), construa um ângulo \\(\\beta \\equiv \\alpha\\) com vértice em \\(P\\) e um lado sobre \\(\\overrightarrow{PA}\\),
                    de modo que \\(\\beta\\) e \\(\\alpha\\) fiquem em lados <strong>opostos</strong> de \\(t\\), formando ângulos alternos internos.</li>
                <li>Seja \\(m\\) a reta determinada pelo outro lado do ângulo \\(\\beta\\) em \\(P\\).</li>
            </ol>

            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/1.8/img_construcao_paralela_2.png" alt="Ângulo β reproduzido em P e reta m paralela a r" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Figura 1.46 – Ângulo \\(\\beta \\equiv \\alpha\\) reproduzido em \\(P\\), determinando a reta \\(m \\parallel r\\). Fonte: Autoria própria (2026).</p>

            <p><strong>Justificativa:</strong></p>

            <p>
                Por construção, \\(\\alpha \\equiv \\beta\\) são ângulos alternos internos formados pela transversal
                \\(t\\) com as retas \\(r\\) e \\(m\\). Pela demonstração da
                <a href="#" onclick="loadPage('existencia-paralela')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 1.8.2</a>,
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
        title: '1.8.4 Postulado de Euclides',
        description: '',
        videoId: 'SEU_VIDEO_ID',
        videoDuration: '',
        videoDate: '',
        videoDescription: 'Postulado de Euclides',
        sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>1.8.4 Postulado de Euclides</h3>

            <p>
                Na <a href="#" onclick="loadPage('existencia-paralela')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 1.8.2</a>
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
                <img src="imagem/1.8/img_postulado_euclides_1.png" alt="Única paralela por P a r" style="max-width: 60%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Figura 1.47 – Por \\(P\\), existe uma única reta \\(m\\) paralela a \\(r\\). Fonte: Autoria própria (2026).</p>

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
                <a href="#" onclick="loadPage('existencia-paralela')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 1.8.2</a>)
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
                <a href="#" onclick="loadPage('existencia-paralela')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 1.8.2</a>.
                A unicidade é garantida pelo Postulado de Euclides.
            </p>

            <p style="text-align: left; margin-top: 10px; padding-left: 85%;">\\(\\blacksquare\\)</p>

        </div>
        `
    },

    'paralelas-angulos-congruentes': {
        title: '1.8.5 Paralelas e Ângulos Congruentes',
        description: '',
        videoId: 'SEU_VIDEO_ID',
        videoDuration: '',
        videoDate: '',
        videoDescription: 'Paralelas e Ângulos Congruentes',
        sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>1.8.5 Paralelas e Ângulos Congruentes</h3>

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
                <img src="imagem/1.8/img_paralelas_angulos_1.png" alt="Paralelas cortadas por transversal com ângulos alternos internos" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Figura 1.48 – Retas \\(s \\parallel m\\) cortadas pela transversal \\(t\\): ângulos alternos internos \\(\\alpha \\equiv \\beta\\). Fonte: Autoria própria (2026).</p>

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
                <a href="#" onclick="loadPage('existencia-paralela')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 1.8.2</a>,
                isso implica \\(s' \\parallel m\\).
            </p>

            <p>
                Assim, por \\(P\\) passariam duas retas distintas, \\(s\\) e \\(s'\\), ambas paralelas a \\(m\\),
                o que contradiz o
                <a href="#" onclick="loadPage('postulado-euclides')" style="color: inherit; text-decoration: underline; cursor: pointer;">Postulado de Euclides (seção 1.8.4)</a>.
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
                <img src="imagem/1.8/img_paralelas_angulos_2.png" alt="Ângulos correspondentes congruentes" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Figura 1.49 – Ângulos correspondentes \\(\\alpha \\equiv \\alpha'\\) formados por \\(s \\parallel m\\) e a transversal \\(t\\). Fonte: Autoria própria (2026).</p>

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
                <img src="imagem/1.8/img_paralelas_angulos_3.png" alt="Ângulos colaterais internos suplementares" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Figura 1.50 – Ângulos colaterais internos \\(\\alpha\\) e \\(\\gamma\\) formados por \\(s \\parallel m\\) e a transversal \\(t\\): \\(\\alpha + \\gamma = 180°\\). Fonte: Autoria própria (2026).</p>

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
                    <a href="#" onclick="loadPage('existencia-paralela')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 1.8.2</a>.
                    A implicação recíproca \\(s \\parallel m \\Rightarrow \\alpha \\equiv \\beta\\)
                    é exatamente o Teorema demonstrado nesta seção. Juntas, as duas implicações
                    estabelecem a equivalência completa.
                </p>
            </div>

        </div>
        `
    },

    'soma-angulos-triangulo': {
        title: '1.8.6 Soma dos Ângulos do Triângulo',
        description: '',
        videoId: 'SEU_VIDEO_ID',
        videoDuration: '',
        videoDate: '',
        videoDescription: 'Soma dos Ângulos do Triângulo',
        sectionTitle: '',
        content: `
        <div class="math-display">

            <h3>1.8.6 Soma dos Ângulos do Triângulo</h3>

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
                <img src="imagem/1.8/img_soma_angulos_1.png" alt="Triângulo ABC com reta paralela a AB por C mostrando o ângulo externo" style="max-width: 65%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Figura 1.51. Triângulo \\(ABC\\) com ângulo externo \\(e\\) em \\(C\\) e reta \\(r \\parallel AB\\) traçada por \\(C\\). Fonte: Autoria própria (2026).</p>

            <p>
                <strong>Demonstração:</strong>
                Seja \\(ABC\\) um triângulo com ângulos internos \\(\\alpha\\) em \\(A\\), \\(\\beta\\) em \\(B\\)
                e \\(\\gamma\\) em \\(C\\), e seja \\(e\\) o ângulo externo adjacente a \\(\\gamma\\).
                Trace por \\(C\\) uma reta \\(r\\) paralela ao lado \\(AB\\).
            </p>

            <p>
                Como \\(r \\parallel AB\\), pela
                <a href="#" onclick="loadPage('paralelas-angulos-congruentes')" style="color: inherit; text-decoration: underline; cursor: pointer;">seção 1.8.5</a>:
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
                    <a href="#" onclick="loadPage('teorema-angulo-externo')" style="color: inherit; text-decoration: underline; cursor: pointer;">Teorema do Ângulo Externo (seção 1.5)</a>,
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

    // ========== OUTROS ==========
    'angulos-triangulos': {
        title: 'Ângulos em Triângulos',
        description: 'Propriedades dos ângulos',
        videoId: 'dQw4w9WgXcQ',
        videoDuration: '3:45 minutos',
        videoDate: 'Julho 2023',
        videoDescription: 'Ângulos.',
        content: '<div class="theorem"><h3>Soma dos Ângulos</h3><p>5\alpha + \beta + \gamma = 180°5</p></div>'
    },

    'cossenos': {
        title: 'Lei dos Cossenos',
        description: 'Generalização de Pitágoras',
        videoId: 'dQw4w9WgXcQ',
        videoDuration: '5:15 minutos',
        videoDate: 'Junho 2023',
        videoDescription: 'Cossenos.',
        content: '<div class="math-display"><p>5c^2 = a^2 + b^2 - 2ab \cos(\gamma)5</p></div>'
    },

    // ========== GEOMETRIA ANALÍTICA ==========
    'distancia-pontos': {
        title: 'Distância entre Pontos',
        description: 'Fórmula euclidiana',
        videoId: 'dQw4w9WgXcQ',
        videoDuration: '3:30 minutos',
        videoDate: 'Maio 2023',
        videoDescription: 'Distância.',
        content: '<div class="math-display"><p>5d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}5</p></div>'
    },

    'ponto-medio': {
        title: 'Ponto Médio',
        description: 'Cálculo do ponto médio',
        videoId: 'dQw4w9WgXcQ',
        videoDuration: '3:15 minutos',
        videoDate: 'Abril 2023',
        videoDescription: 'Ponto médio.',
        content: '<div class="math-display"><p>5M = \left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)5</p></div>'
    },

    // ========== GEOMETRIA ESPACIAL ==========
    'prismas': {
        title: 'Prismas',
        description: 'Volume e área',
        videoId: 'dQw4w9WgXcQ',
        videoDuration: '4:30 minutos',
        videoDate: 'Março 2023',
        videoDescription: 'Prismas.',
        content: '<div class="math-display"><h3>Volume</h3><p>5V = A_b \times h5</p></div>'
    },

    'piramides': {
        title: 'Pirâmides',
        description: 'Volume e área',
        videoId: 'dQw4w9WgXcQ',
        videoDuration: '4:45 minutos',
        videoDate: 'Fevereiro 2023',
        videoDescription: 'Pirâmides.',
        content: '<div class="math-display"><h3>Volume</h3><p>5V = \frac{1}{3} A_b \times h5</p></div>'
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
