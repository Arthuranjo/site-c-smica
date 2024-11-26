export default function header(){
    const header = document.createElement('header')
    header.classList.add('cabeçalho')
    header.innerHTML = `
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
        </div>`
        return header
}