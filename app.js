import navbar from "./components/navbar.js"
import home from "./components/home.js"
import footer from "./components/footer.js"

const app = document.createElement('div')
app.id = "app"
window.addEventListener('hashchange', ()=>{
    limparcorpo()
    if(location.hash === "#home"){
        app.appendChild(home())
    } else if (location.hash === "#afeto"){
        app.appendChild(afeto())
    } else if (location.hash === "#impacto"){
        app.appendChild(impacto())
    } else if (location.hash === "#produtos"){
        app.appendChild(produtos())
    } else if (location.hash === "#contato"){
        app.appendChild(contato())
    }
})

function limparcorpo(){
    const elemento = document.getElementById("app")
    if (elemento){
        elemento.remove()
    }
}

document.body.appendChild(navbar())
document.body.appendChild(home())
document.body.appendChild(app)
document.body.appendChild(footer())