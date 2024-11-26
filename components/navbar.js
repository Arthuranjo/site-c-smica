export default function navbar() {
    const navbar = document.createElement('nav')
    navbar.classList.add('mini-borda-1')
    navbar.innerHTML = ` 
        <ul class="inicio">
            <li><img src="imagens/LOGO-BRANCO.png"> </li>
            <li><a class="n" href="index.html">HOME</a></li>
            <li><a class="n" href="pgafeto.html">AFETO</a></li>
            <li><a class="n" href="pgimpacto.html">IMPACTO</a></li>
            <li><a class="n" href="produtos.html">PRODUTOS</a></li>
            <li><a class="n" href="pgcontato.html">CONTATOS</a></li>
        </ul>
    `
    return navbar
}