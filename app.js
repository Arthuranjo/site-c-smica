import navbar from "./components/navbar.js"
import home from "./components/home.js"
import footer from "./components/footer.js"
import afeto from "./components/afeto.js"
import impacto from "./components/impacto.js"
import produtos from "./components/produtos.js"
import contato from "./components/contato.js"

const app = document.getElementById("app")

function alterarCSS(novoCSS) {
    const linkAtual = document.querySelector('link[rel="stylesheet"]')
        if (linkAtual) {
        linkAtual.href = novoCSS
    } else {
        const novoLink = document.createElement('link')
        novoLink.rel = 'stylesheet'
        novoLink.href = novoCSS
        document.head.appendChild(novoLink)
    }
}

function atualizarConteudo() {
    limparcorpo()

    if (location.hash === "#home") {
        app.appendChild(home())
        alterarCSS('paginaprincipal.css') 
    } else if (location.hash === "#afeto") {
        app.appendChild(afeto())
        alterarCSS('style.css') 
    } else if (location.hash === "#impacto") {
        app.appendChild(impacto())
        alterarCSS('pagina3.css') 
    } else if (location.hash === "#produtos") {
        app.appendChild(produtos())
        alterarCSS('produtos.css') 
    } else if (location.hash === "#contato") {
        app.appendChild(contato())
        alterarCSS('pgcontato.css') 
    } else {
        app.appendChild(home())
        alterarCSS('paginaprincipal.css')
    }
}

function limparcorpo() {
    const elemento = document.getElementById("app")
    if (elemento) {
        elemento.innerHTML = ""
    } else {
        console.error("Elemento #app não encontrado!")
    }
}

window.addEventListener("hashchange", atualizarConteudo)

document.body.appendChild(navbar())
atualizarConteudo()
document.body.appendChild(footer())

const navs = document.querySelector('.mini-borda-1')
window.addEventListener('scroll', () => {
    if (window.scrollY > 190) {
    navs.style.display = 'block'
    } else {
    navs.style.display = 'none'
}
})

const form = document.getElementById('formulario')
const successMessage = document.getElementById('successMessage')

form.addEventListener('submit', (event) => {
event.preventDefault() 

successMessage.style.display = 'block'

setTimeout(() => {
    successMessage.style.display = 'none'
}, 4000)

form.reset()
})