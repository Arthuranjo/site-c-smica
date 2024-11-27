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