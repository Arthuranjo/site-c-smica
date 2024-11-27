export default function afeto(){
    const afeto = document.createElement('main')
    afeto.innerHTML = `
    <nav class="cabeçalho">
        <img id="logocosmica" src="imagens/LOGO-BRANCO.png">
    </nav>
    <header class="mini-borda-1">
        <ul class="inicio">
            <li><img src="imagens/LOGO-BRANCO.png"> </li>
            <li><a class="n" href="#home">HOME</a></li>
            <li><a class="n" href="#afeto">AFETO</a></li>
            <li><a class="n" href="#impacto">IMPACTO</a></li>
            <li><a class="n" href="#produtos">PRODUTOS</a></li>
            <li><a class="n" href="#contato">CONTATOS</a></li>
        </ul>
    </header>
    <section>
            <h1>A MUDANÇA EM NÓS</h1>

            <p class="paragrafo1">
                A Cósmica Upcycle nasceu com o propósito de transformar não apenas resíduos, mas também perspectivas. Somos uma marca afetiva que acredita no poder do upcycle para gerar mudanças reais no mundo. A cada bolsa que criamos, resgatamos tecidos que antes seriam descartados, dando a eles uma nova vida e um novo significado. Esse processo não é apenas sustentável, mas também carregado de afeto e propósito, valorizando o trabalho manual e a conexão entre quem cria e quem consome.
            </p>

        </section>

        <section class="secao1">
            <h1 class="titulo1">POR QUE UPCYCLING?</h1>

            <p class="texto">
                A indústria têxtil é uma das maiores poluidoras do planeta, desperdiçando toneladas de materiais e recursos preciosos a cada ano. Na Cosmica Cria, vemos o potencial escondido em cada pedaço de tecido, cada material descartado. O upcycling é a mudança em nós: transformar o que seria lixo em algo novo e especial, sem comprometer a qualidade ou o meio ambiente. Assim, criamos moda com alma e responsabilidade.
            </p>

        </section>

        <section>
            <h1>MODA CONSCIENTE, SUSTENTÁVEL E GENEROSA</h1>

            <p class="paragrafo2">
                Nosso compromisso vai além do produto: queremos inspirar um consumo mais consciente, generoso e abundante. Cada peça da Cósmica Upcycle é única, assim como as histórias que ela carrega. Ao transformar resíduos em beleza funcional, mostramos que pequenas escolhas podem ter grandes impactos, contribuindo para um futuro mais sustentável e humano. Consumir da Cósmica é abraçar uma nova forma de viver, onde afeto e sustentabilidade andam lado a lado.
            </p>

        </section>

        <section class="imagens">

            <div class="item">

                <div class="imagem1">
                    <img class="img" src="imagens/calça.png">
                </div>

                <div class="sinais">
                    <p>+</p>
                </div>

                <div class="imagem2">
                    <img class="img" src="imagens/tesoura.png">
                </div>

                <div class="sinais">
                    <p>=</p>
                </div>

                <div class="imagem3">
                    <img class="img" src="imagens/mochila.png">
                </div>

            </div>

        </section>`
        return afeto
}