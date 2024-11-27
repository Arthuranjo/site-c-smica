export default function produtos(){
    const produtos = document.createElement('main')
    produtos.innerHTML = `
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
    
            <section class="mochila-produto">
            <article class="texto-produto">

                <h1>UPCYCLE COM CONSCIÊNCIA E AFETO</h1>
                <p>Na Cósmica Cria, cada bolsa, pochete e mochila é muito mais do que um simples acessório – é uma história que se renova. Transformamos resíduos têxteis em peças únicas, feitas à mão com todo o carinho e cuidado. O que torna nossos produtos ainda mais especiais é o seu toque afetivo: você pode trazer uma memória para a sua peça, como a blusa de alguém querido, e nós transformamos esse tecido em algo novo, cheio de significado e propósito.
                </p>
            

            
                <h1>TRANSFORMAMOS RETALHOS E MUDANÇAS</h1>
                <p>Se preferir, podemos criar sua peça a partir dos resíduos que coletamos, sempre com materiais de qualidade e consciência ambiental. Cada escolha sua ajuda a construir um mundo mais sustentável, enquanto você leva para casa um produto cheio de afeto e responsabilidade. Na Cósmica Cria, acreditamos que a verdadeira beleza vem da transformação e que, juntos, podemos criar algo novo e cheio de amor.</p>
            
            </article>

            
            <article class="produto-mochila">
                <img src="./fotos-cosmica/7.png" alt="mochila">
            </article>
        </section>

        <section>
            <article class="descri-prod">
                <h1 class="titulo-produto">PREÇO DOS NOSSOS PRODUTOS</h1>
                <p class="texto-titulo-produto">Ao comprar uma peça da Cósmica Upcycle você está incentivando uma economia mais justa e sustentável para o planeta. Elaboramos três faixas de precificação para tornar nossos produtos acessíveis e dar a você a oportunidade de contribuir ainda mais com a nossa causa.</p>
            </article>
        </section>

        <section class="blocos-produtos">
        
            <article class="carrossel">
                <article class="tabela-produtos">
                    <img src="./imagens/ICON-1.png" alt="modelo1">
                    <article class="preco-descricao">
                        <h1 class="preco">Valor Sustentável</h1>
                        <p>Este valor cobre apenas o custo da peça e da mão de obra, tornando possível que mais pessoas se conectem com a proposta da marca, sem abrir mão da qualidade e do cuidado com o meio ambiente.</p>
                    </article>
                </article>
        
                <article class="tabela-produtos">
                    <img src="./imagens/ICON-2.png" alt="modelo3">
                    <article class="preco-descricao">
                        <h1 class="preco">Valor Generoso</h1>
                        <p>Ao escolher esse valor, você contribui diretamente para o fortalecimento da Cósmica Cria, ajudando a marca a continuar transformando resíduos e a impactar positivamente o meio ambiente.</p>
                    </article>
                </article>
        
                <article class="tabela-produtos">
                    <img src="./imagens/ICON-3.png" alt="modelo3">
                    <article class="preco-descricao">
                        <h1 class="preco">Valor Abundante</h1>
                        <p>Ao optar por esse valor, você não está apenas adquirindo uma peça única, mas também fazendo parte de um movimento transformador. Sua escolha gera um impacto profundo, criando um mundo mais sustentável e repleto de carinho.</p>
                    </article>
                </article>
            </article>
        
            
        </section>

        <section>
            <div>
                <h1 class="titulo-sessao">DESCUBRA NOSSOS PRODUTOS</h1>
            </div>
        </section>

        <section class="produtos">
            <article class="todos-produtos">
                <article class="nossos-produtos" onclick="mostrarDetalhes(1)">
                    <div class="produto-conteudo">
                        <img src="./fotos-cosmica/mochilamudita.jpeg" alt="Mochila Afeto" id="produto1-img">
                        <div class="texto-produto">
                            <h1>MOCHILA MUDITA</h1>
                            
                        </div>
                    </div>
                </article>

                <article class="nossos-produtos" onclick="mostrarDetalhes(2)">
                    <div class="produto-conteudo">
                        <img src="./fotos-cosmica/mochilaupeksha.jpeg" alt="Mochila Afeto" id="produto2-img">
                        <div class="texto-produto">
                            <h1>MOCHILA UPEKSHA</h1>
                        </div>
                    </div>
                </article>

                <article class="nossos-produtos" onclick="mostrarDetalhes(3)">
                    <div class="produto-conteudo">
                        <img src="./fotos-cosmica/basicbag.jpeg" alt="Mochila Afeto" id="produto3-img">
                        <div class="texto-produto">
                            <h1>BASIC BAG</h1>
                            
                        </div>
                    </div>
                </article>

                <article class="nossos-produtos" onclick="mostrarDetalhes(4)">
                    <div class="produto-conteudo">
                        <img src="./fotos-cosmica/18.png" alt="Mochila Afeto" id="produto4-img">
                        <div class="texto-produto">
                            <h1>BOLSA<br>TRANSVERSAL</h1>
                        </div>
                    </div>
                </article>

                <article class="nossos-produtos" onclick="mostrarDetalhes(5)">
                    <div class="produto-conteudo">
                        <img src="./fotos-cosmica/basicbagpreta.jpeg" alt="Mochila Afeto" id="produto5-img">
                        <div class="texto-produto">
                            <h1>BASIC BAG PRETA</h1>
                        </div>
                    </div>
                </article>
            </article>

            <article class="produto-principal">
                <article class="informacao-produto">
                    <h1>INFORMAÇÕES DETALHADAS</h1>

                    <h2 id="produto-principal-titulo">Escolha um produto</h2>
                    <p id="produto-principal-descricao">Selecione um dos produtos acima para ver os detalhes completos.</p>

                    <img id="produto-principal-img" src="" alt="Selecione o Produto">

                    <div class="miniaturas">
                        <img class="miniatura" src="./fotos-cosmica/mochilamudita.jpeg" alt="Miniatura 1"
                            onclick="mudarImagem('./fotos-cosmica/mochilamudita.jpeg')">
                        <img class="miniatura" src="./fotos-cosmica/mochilaupeksha.jpeg" alt="Miniatura 2"
                            onclick="mudarImagem('./fotos-cosmica/mochilaupeksha.jpeg')">
                        <img class="miniatura" src="./fotos-cosmica/basicbag.jpeg" alt="Miniatura 3"
                            onclick="mudarImagem('./fotos-cosmica/basicbag.jpeg')">
                        <img class="miniatura" src="./fotos-cosmica/18.png" alt="Miniatura 4"
                            onclick="mudarImagem('./fotos-cosmica/18.png')">
                        <img class="miniatura" src="./fotos-cosmica/basicbagpreta.jpeg" alt="Miniatura 4"
                            onclick="mudarImagem('./fotos-cosmica/basicbagpreta.jpeg')">
                    </div>

                    
                    <h2 id="produto-principal-subtitulo"></h2>

                    <ul id="lista-descricao"></ul>

                    <button id="botao-detalhes" onclick="alternarDetalhes()">Mostrar Detalhes</button>

                    
                </article>
            </article>

            </article>
        </section>`

        return produtos
}