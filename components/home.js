export default function home() {
    const home = document.createElement('main')
    home.innerHTML = `
        <main>
        <header class="cabeçalho">
        <div class="topo">
            <video autoplay muted loop class="background-video">
                <source src="imagens/video-principal.mp4" type="video/mp4">
                Seu navegador não suporta o vídeo.
            </video>
        </div>

        <img id="logocosmica" src="imagens/LOGO-VERDE.png">

        <h1 id="digitacao">Quando você muda, o mundo muda</h1>

        <div class="mini-borda-2">
            <ul>
                <li> MODA REGENERATIVA | BOLSAS CRIADAS COM RESÍDUOS TÊXTIL </li>
            </ul>
        </div>
        </header>
        <section class="mochila-texto">
            <div class="mochila">
                <img src="imagens/mochila-principal.png">
            </div>

            <div class="texto-mochila">

                <h1>A MUDANÇA EM NÓS</h1>

                <p>A Cósmica Upcycle acredita que consumir de forma consciente transforma não apenas o mundo, mas também a nós mesmos. Cada peça que criamos carrega afeto, história e um compromisso com a sustentabilidade. Transformamos resíduos têxteis em bolsas únicas, provando que é possível unir beleza, funcionalidade e impacto positivo. Escolher a Cósmica é abraçar uma nova forma de enxergar o consumo: mais humana, generosa e abundante.
                </p>
                <a href="index.html" class="botao">SAIBA MAIS</a>

            </div>
        </section>


        <section class="secao1">

            <img id="icon" src="imagens/LOGO-icone-BRANCO.png">
            <h1 class="titulo1">A CÓSMICA UPCYCLE É TRANSFORMAÇÃO</h1>

            <p class="texto">
                Olhamos para o que parecia não ter mais valor e enxergamos potencial, criando novas histórias e significados.
                Transformamos resíduos têxteis em bolsas.
            </p>

        </section>

        <section class="calca-texto">
            <div class="texto-calca">
                <h1>A MUDANÇA NO MUNDO</h1>
                <p>Na Cósmica Cria, transformamos resíduos têxteis em bolsas que contam histórias e reduzem o desperdício. Nosso trabalho reflete um compromisso com o planeta, mostrando que escolhas conscientes podem gerar mudanças reais. Cada peça é uma ação contra a poluição da indústria têxtil, promovendo um ciclo mais sustentável. Ao consumir com propósito, ajudamos a construir um mundo mais generoso com as pessoas e com o meio ambiente..
                </p>
                <a href="pgimpacto.html" class="botao">SAIBA MAIS</a>
            </div>

            <div class="calca">
                <img src="imagens/calcaprincipal.png" alt="calca">
            </div>
        </section>

        <section class="produtos">
            <h1>DESCUBRA MAIS SOBRE OS NOSSOS PRODUTOS</h1>
        
            <article class="carrossel-container">
                <button class="antes" onclick="navegarCarrossel(-1)">❮</button>
        
                <article class="carrossel">
                    <article class="item">
                        <img src="./fotos-cosmica/mochilamudita.png" alt="Mochila Mudita">
                        <div class="descricao">Mochila Mudita - Feita com materiais sustentáveis.</div>
                    </article>
        
                    <article class="item">
                        <img src="./fotos-cosmica/mochilaupeksha.png" alt="Mochila Upeksha">
                        <div class="descricao">Mochila Upeksha - Ideal para aventuras ecológicas.</div>
                    </article>
        
                    <article class="item">
                        <img src="./fotos-cosmica/17.png" alt="Produto 17">
                        <div class="descricao">Produto 17 - Design inovador e sustentável.</div>
                    </article>
        
                    <article class="item">
                        <img src="./fotos-cosmica/18.png" alt="Produto 18">
                        <div class="descricao">Produto 18 - Perfeito para o seu estilo de vida.</div>
                    </article>
        
                    <article class="item">
                        <img src="./fotos-cosmica/16.png" alt="Produto 16">
                        <div class="descricao">Produto 16 - Resistente e ecológico.</div>
                    </article>
                </article>
        
                <button class="proximo" onclick="navegarCarrossel(1)">❯</button>
            </article>
        
            <article class="botao-container">
                <a href="produtos.html" class="botao-produtos">SAIBA MAIS</a>
            </article>
        </section>

        <section class="formulario-principal">

            <h1 class="titulo-formulario">
                FAÇA PARTE DA TRANSFORMAÇÃO
            </h1>

            <h2 class="subtitulo-formulario">
                Receba nossa newsletter com novidades
            </h2>

            <form class="formulario">
                <div class="input-form">
                    <input class="envio-informacao" type="text" placeholder="Preencha seu nome" required>
                    <input class="envio-informacao" type="text" placeholder="Preencha seu email" required>
                </div>
                <button class="botao-envio" type="submit">Enviar</button>
            </form>

        </section>

        <section class="parte-final">

            <div class="nosso-trabalho">
                <h1 class="ultimo-titulo"> CONHEÇA<br>NOSSO TRABALHO</h1>
                <h3 class="ultimo-subtitulo">@COSMICACRIA</h3>
            </div>

            <div class="imagens-nosso-trabalho">

                <article class="imagem-trabalho1">
                    <a href="https://www.instagram.com/cosmicacria/" target="_blank"><img src="imagens/bolsa-preto-branco.JPEG"></a>
                </article>

                <article class="imagem-trabalho2">
                    <a href="https://www.instagram.com/cosmicacria/" target="_blank"><img src="imagens/bolsa-azul.JPEG"></a>
                </article>

                <article class="imagem-trabalho3">
                    <a href="https://www.instagram.com/cosmicacria/" target="_blank"><img src="imagens/bolsa_florida.JPEG"></a>
                </article>

            </div>

        </section>

    </main>`
    return home
}