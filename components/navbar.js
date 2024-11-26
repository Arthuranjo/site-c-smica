export default function navbar() {
    const navbar = document.createElement('nav')
    navbar.classList.add('mini-borda-1')
    navbar.innerHTML = ` 
        <ul class="inicio">
            <li><img src="imagens/LOGO-BRANCO.png"> </li>
            <li><a class="n" href="#home">HOME</a></li>
            <li><a class="n" href="#afeto">AFETO</a></li>
            <li><a class="n" href="#impacto">IMPACTO</a></li>
            <li><a class="n" href="#produtos">PRODUTOS</a></li>
            <li><a class="n" href="#contato">CONTATOS</a></li>
        </ul>
    `
    return navbar
}