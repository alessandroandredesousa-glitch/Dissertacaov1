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
            <p style="text-align: center; font-weight: bold;">Figura 1.1 – Triângulo ABC com vértices A, B e C</p>

            <div style="text-align: center; margin: 20px 0;">

                <img src="./imagem/img_definicaodetriangulos.png" alt="Pontos A, B e C" style="max-width: 70%;">

            </div>

            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
            <ul>
                <li>Os pontos \\(A\\), \\(B\\) e \\(C\\) são chamados de <strong>vértices</strong>.
                <li>Os segmentos \\(\\overline{AB}\\) (de medida \\(c\\)), \\(\\overline{AC}\\) (de medida \\(b\\)) e \\(\\overline{BC}\\) (de medida \\(a\\)) são chamados de <strong>lados</strong> do \\(\\triangle ABC\\).
            </ul>

            

            <p style="text-align: center; font-weight: bold;">Figura 1.2 – Lados do triângulo ABC</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="./imagem/img_definicaodetriangulos_1.png" alt="Lados do triângulo" style="max-width: 70%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <ul>
            <li>Os ângulos \\(B\\widehat{A}C\\) (ou \\(\\widehat{A}\\)), \\(A\\widehat{B}C\\) (ou \\(\\widehat{B}\\)) e \\(B\\widehat{C}A\\) (ou \\(\\widehat{C}\\)) são chamados de <strong>ângulos internos</strong> do \\(\\triangle ABC\\).
            Estes ângulos são opostos aos lados \\(a\\), \\(b\\) e \\(c\\), respectivamente.
            <ul>
            <p style="text-align: center; font-weight: bold;">Figura 1.3 – Ângulos internos e lados opostos do triângulo ABC</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_definicaodetriangulos_2.png" alt="Ângulos e lados opostos" style="max-width: 70%;">
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
                <img src="imagem/img_classsificacao_tri_3.png" alt="Classificação quanto aos lados e ângulos" style="max-width: 70%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
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
            <p style="text-align: center; font-weight: bold;">Figura 1.5 – Correspondência entre vértices de triângulos congruentes</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_congruenciadetriangulo_1.png" alt="Triângulos Congruentes" style="max-width: 70%;">
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
            <img src="imagem/img_casaLAL_1.png" alt="Caso LAL" style="max-width: 70%;">
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


                <img src="imagem/img_casa_ALA_1.png" alt="Triângulos ABC e A'B'C' — Caso ALA" style="max-width: 70%;">


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

                <img src="imagem/img_casa_ALA_2.png" alt="Triângulos ABC e A'B'C' — Caso ALA" style="max-width: 70%;">

            </div>

            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
            <p>
                Com isso, \\(\\triangle ABC \\equiv \\triangle A'B'X\\) pelo <a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>. Como, por hipótese, 
                o ângulo \\(\\widehat{B} \\equiv \\widehat{B'}\\), logo o ponto \\(X = C'\\), 
                portanto \\(\\Rightarrow \\overline{AC} = \\overline{A'C'}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.9 – Coincidência X = C' e conclusão pelo caso LAL</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/img_casa_ALA_3.png" alt="Demonstração — ponto X sobre A'C'" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

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
        videoId: 'TQV90EEjjt8',
        videoDuration: '3:20 Minutos',
        videoDate: '07 de junho de 2026',
        videoDescription: 'Congruência  LLL',
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


                <img src="imagem/img_caso_LLL_1.png" alt="Construção do ponto X" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Tomamos um ponto \\(H\\) sobre a reta \\(\\overleftrightarrow{DX}\\), tal que
                \\(\\overline{DH} = \\overline{AC}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.11 – Ponto H sobre a reta DX com DH = AC</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/img_caso_LLL_2.png" alt="Ponto H sobre DX" style="max-width: 70%;">


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


                <img src="imagem/img_caso_LLL_3.png" alt="Triângulo DFH isósceles" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Com o mesmo raciocínio, podemos concluir que o \\(\\triangle FEH\\) é isósceles
                e \\(E\\widehat{F}H \\equiv F\\widehat{H}E\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.13 – Triângulo FEH isósceles</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/img_caso_LLL_4.png" alt="Triângulo FEH isósceles" style="max-width: 70%;">


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


                <img src="imagem/img_caso_LLL_5.png" alt="Conclusão LAL" style="max-width: 70%;">


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


                <img src="imagem/img_pontomedio_1.png" alt="Pontos C e D em semiplanos opostos" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                O segmento \\(\\overline{CD}\\) intercepta o segmento \\(\\overline{AB}\\) em um ponto \\(M\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.16 – Segmento CD interceptando AB no ponto M</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/img_pontomedio_2.png" alt="Segmento CD interceptando AB no ponto M" style="max-width: 70%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <h4>Note que:</h4>
            <ul>
                <li>
                    \\(\\triangle CAB \\equiv \\triangle ABD\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>)
                </li>
                <p style="text-align: center; font-weight: bold;">Figura 1.17 – Congruência △CAB ≡ △ABD pelo caso LAL</p>

                <div style="text-align: center; margin: 20px 0;">

                    <img src="imagem/img_pontomedio_3.png" alt="Segmento CD interceptando AB no ponto M" style="max-width: 70%;">

                </div>

                <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
                <li>
                    \\(\\triangle ACD \\equiv \\triangle CDB\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-LLL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LLL</a>), pois \\(\\overline{AD} = \\overline{CB}\\) 
                    pela congruência anterior
                </li>
                <p style="text-align: center; font-weight: bold;">Figura 1.18 – Congruência △ACD ≡ △CDB pelo caso LLL</p>

                <div style="text-align: center; margin: 20px 0;">

                    <img src="imagem/img_pontomedio_4.png" alt="Segmento CD interceptando AB no ponto M" style="max-width: 70%;">

                </div>

                <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>
                <li>
                    \\(\\triangle AMD \\equiv \\triangle BMC\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-ALA')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso ALA</a>: \\(B\\widehat{A}D \\equiv A\\widehat{B}C\\), 
                    \\(\\overline{AD} = \\overline{BC}\\), \\(A\\widehat{D}C \\equiv D\\widehat{C}B\\))
                </li>
                <p style="text-align: center; font-weight: bold;">Figura 1.19 – Congruência △AMD ≡ △BMC pelo caso ALA</p>

                <div style="text-align: center; margin: 20px 0;">

                    <img src="imagem/img_pontomedio_5.png" alt="Segmento CD interceptando AB no ponto M" style="max-width: 70%;">

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


                <img src="imagem/img_mediana_1.png" alt="Mediana do triângulo ABC" style="max-width: 50%;">


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

            <p style="text-align: center; font-weight: bold;">Figura 1.21 – As três medianas do triângulo ABC</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/img_mediana_2.png" alt="As três medianas do triângulo" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

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

            <p style="text-align: center; font-weight: bold;">Figura 1.22 – Ângulo aOb com pontos A, A', B, B' nas semirretas</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/img_bissetriz_1.png" alt="Ângulo aOb com pontos A, A', B, B'" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Façamos \\(\\overline{AB'}\\) e \\(\\overline{BA'}\\). Seja \\(C\\) o ponto de interseção de 
                \\(\\overline{AB'}\\) e \\(\\overline{BA'}\\). Consideremos a semirreta \\(\\overrightarrow{OC}\\). Temos:
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.23 – Ponto C interseção de AB' e BA'</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/img_bissetriz_2.png" alt="Ponto C interseção de AB' e BA'" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <ul>
                <li>
                    O triângulo \\(\\triangle OBA' \\equiv \\triangle OAB'\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>)
                </li>
            </ul>

            <p style="text-align: center; font-weight: bold;">Figura 1.24 – Congruência △OBA' ≡ △OAB' pelo caso LAL</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/img_bissetriz_3.png" alt="Congruência LAL" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <ul>
                <li>
                    O triângulo \\(\\triangle ACA' \\equiv \\triangle BCB'\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-ALA')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso ALA</a>)
                </li>
            </ul>

            <p style="text-align: center; font-weight: bold;">Figura 1.25 – Congruência △ACA' ≡ △BCB' pelo caso ALA</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/img_bissetriz_4.png" alt="Congruência ALA" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <ul>
                <li>
                    O triângulo \\(\\triangle OAC \\equiv \\triangle OBC\\) &nbsp; (<a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>)
                </li>
            </ul>

            <p style="text-align: center; font-weight: bold;">Figura 1.26 – Congruência △OAC ≡ △OBC e bissetriz OC</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/img_bissetriz_5.png" alt="Congruência LAL final" style="max-width: 50%;">


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

            <p style="text-align: center; font-weight: bold;">Figura 1.27 – Triângulo ABC com ângulo externo ε</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/img_angulo_externo_1.png" alt="Triângulo ABC com ângulo externo ε" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <h4>Demonstração:</h4>

            <p>
                Seja \\(M\\) o ponto médio de \\(\\overline{AC}\\), e tomemos um ponto \\(P\\) sobre a 
                semirreta \\(\\overrightarrow{BM}\\) de modo que \\(\\overline{BM} = \\overline{MP}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.28 – Ponto M médio de AC e ponto P sobre a semirreta BM</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/img_angulo_externo_2.png" alt="Ponto M médio de AC e ponto P sobre BM" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Note que \\(\\triangle BMA \\equiv \\triangle CMP\\) (<a href="#" onclick="loadPage('congruenciasdetriangulos-LAL')" style="color: inherit; text-decoration: underline; cursor: pointer;">caso LAL</a>), então 
                \\(B\\widehat{A}C \\equiv M\\widehat{C}P\\). Como \\(M\\widehat{C}P\\) é interno a 
                \\(\\varepsilon\\), logo \\(\\varepsilon > M\\widehat{C}P \\Rightarrow \\varepsilon > B\\widehat{A}C\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.29 – Congruência △BMA ≡ △CMP pelo caso LAL</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/img_angulo_externo_3.png" alt="Congruência LAL" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>


            <p>
                De maneira análoga, seja \\(M\\) o ponto médio do segmento \\(\\overline{BC}\\) e \\(P\\) 
                um ponto pertencente à semirreta \\(\\overrightarrow{AM}\\), tal que 
                \\(\\overline{AM} = \\overline{MP}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.30 – Ponto M médio de BC e ponto P sobre a semirreta AM</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/img_angulo_externo_4.png" alt="Ponto M médio de BC e ponto P sobre AM" style="max-width: 50%;">


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

            <p style="text-align: center; font-weight: bold;">Figura 1.31 – Ponto K sobre a semirreta PC</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/img_angulo_externo_5.png" alt="Ponto K sobre semirreta PC" style="max-width: 50%;">


            </div>


            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Perceba que \\(K\\widehat{C}X \\equiv M\\widehat{C}P\\) (opostos pelo vértice).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.32 – Ângulos opostos pelo vértice KCX e MCP</p>


            <div style="text-align: center; margin: 20px 0;">


                <img src="imagem/img_angulo_externo_6.png" alt="Ângulos opostos pelo vértice" style="max-width: 50%;">


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

    'maior-lado-maior-angulo': {
    title: '1.6.1 Relação entre Lados e Ângulos Opostos',
    description: '',
    videoId: 'SEU_VIDEO_ID',
    videoDuration: '',
    videoDate: '',
    videoDescription: 'Relação entre Lados e Ângulos Opostos em um Triângulo',
    sectionTitle: '',
    content: `
        <div class="math-display">

            <h3>1.6.1 Relação entre Lados e Ângulos Opostos</h3>

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

            <p style="text-align: center; font-weight: bold;">Figura 1.33 – Triângulo ABC com AB > AC</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_maior_lado_1.png" alt="Triângulo ABC com AB maior que AC" style="max-width: 60%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Seja \\(D\\) um ponto sobre \\(\\overline{AB}\\) de tal modo que
                \\(\\overline{AC} = \\overline{AD}\\).
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.34 – Ponto D sobre AB com AD = AC</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_maior_lado_2.png" alt="Ponto D sobre AB com AD = AC" style="max-width: 60%;">
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
    title: '1.6.2 A Desigualdade Triangular',
    description: '',
    videoId: 'SEU_VIDEO_ID',
    videoDuration: '',
    videoDate: '',
    videoDescription: 'A Desigualdade Triangular',
    sectionTitle: '',
    content: `
        <div class="math-display">

            <h3>1.6.2 A Desigualdade Triangular</h3>

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

            <p style="text-align: center; font-weight: bold;">Figura 1.35 – Triângulo \\(ABC\\) com lados \\(a\\), \\(b\\) e \\(c\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_desigualdade_triangular_1.png" alt="Triângulo ABC com lados a, b e c" style="max-width: 60%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Seja \\(D\\) um ponto na extensão de \\(\\overrightarrow{BA}\\) além de \\(A\\),
                de tal modo que \\(\\overline{AD} = \\overline{AC}\\).
                Os pontos ficam na ordem \\(B\\text{-}A\\text{-}D\\) sobre a reta.
            </p>

            <p style="text-align: center; font-weight: bold;">Figura 1.36 – Ponto \\(D\\) na extensão de \\(\\overrightarrow{BA}\\) com \\(\\overline{AD} = \\overline{AC}\\) e \\(\\triangle ACD\\) isósceles</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_desigualdade_triangular_2.png" alt="Ponto D na extensão de BA com AD = AC, triângulo ACD isósceles" style="max-width: 60%;">
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

            <p style="text-align: center; font-weight: bold;">Figura 1.37 – No triângulo \\(BCD\\), \\(B\\widehat{C}D > B\\widehat{D}C\\), logo \\(\\overline{BD} > \\overline{BC}\\)</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="imagem/img_desigualdade_triangular_3.png" alt="Triângulo BCD com ângulo BCD maior que BDC" style="max-width: 60%;">
            </div>
            <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">Fonte: Autoria própria (2026).</p>

            <p>
                Assim, no triângulo \\(\\triangle BCD\\), temos \\(B\\widehat{C}D > B\\widehat{D}C\\).
                Pelo <a href="#" onclick="loadPage('maior-lado-maior-angulo')" style="color: inherit; text-decoration: underline; cursor: pointer;">Teorema 1.6.1</a>, o maior ângulo se opõe ao maior lado:
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
