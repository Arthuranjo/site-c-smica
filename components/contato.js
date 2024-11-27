export default function contato(){
    const contato = document.createElement('main')
    contato.innerHTML = `
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
    <div class="conteiner">
            <section class="texto">
                <div class="t1">
                    <h1>FAÇA PARTE<br> DA<br> MUDANÇA!</h1><br>
                </div>
                <div class="t2">
                    <p>Quer solicitar um<br> orçamento e saber<br> mais do nosso<br> trabalho?</p><br>
                </div>
                <div class="t3">
                    <p>Preencha o<br> formulário!</p>
                </div>
            </section>

            <section id="formu">

                <form id="formulario" class="formulario">
                    <label for="nome">Nome</label>
                    <input type="text" id="nome" name="nome" required>
                    <label for="email">E-mail</label>
                    <input type="text" id="email" name="email" required>
                    <label for="whatsapp">WhatsApp</label>
                    <input type="tel" id="whatsapp" name="whatsapp" pattern="\+?[0-9\s\-\(\)]{8,15}"
                        placeholder="(XX) XXXXX-XXXX" required>
                    <label for="mensagem">Mensagem</label>
                    <textarea id="mensagem" name="mensagem" rows="4" required></textarea>
                    <div class="botao">
                        <button class="enviar" type="submit">Enviar</button>
                    </div>
                </form>
                <div id="successMessage" class="success-message">
                    Sua mensagem  foi enviada com sucesso! Origado pelo contato.
                </div>
            </section>
        </div>
    `
    return contato
}