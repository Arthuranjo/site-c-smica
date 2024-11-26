export default function footer() {
    const footer = document.createElement('footer')
    footer.innerHTML = `
        <section>
        <div class="footer-content">

            <div class="redes-sociais">
                <ul>
                    <li>
                        <p>Nav</p>
                        <a href="index.html">Home</a>
                    </li>

                    <li>
                        <a href="pgafeto.html">Afeto</a>
                    </li>

                    <li>
                        <a href="pgimpacto.html">Impacto</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <p>Sobre nós</p>
                        <a href="index.html">Home</a>
                    </li>

                    <li>
                        <a href="produtos.html">Produtos</a>
                    </li>

                    <li>
                        <a href="pgcontato.html">Contato</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <p>Suporte</p>
                        <a href="index.html">Home</a>
                    </li>

                    <li>
                        <a href="produtos.html">Produtos</a>
                    </li>

                    <li>
                        <a href="index.html">Sobre nós</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="borda-final">
        <div class="itens-final">
            <ul>
                <li><img class="logo-final" src="imagens/LOGO-BRANCO.png"></li>
            </ul>

            <ul>
                <li class="insta"><a href="https://www.instagram.com/cosmicacria/" target="_blank"><img src="imagens/instagram.png"></a></li>
                <li class="whats"><a href="https://api.whatsapp.com/send/?phone=5547997873644&text&type=phone_number&app_absent=0" target="_blank"><img src="imagens/whatsapp.png"></a></li>
                <li class="tiktok"><a href="https://www.tiktok.com/@cosmicacria" target="_blank"><img src="imagens/tiktok.png"></a></li>
            </ul>
        </div>
    </section>
    `
    return footer
}