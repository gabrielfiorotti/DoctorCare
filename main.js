
/* running the onScroll() function in the intire page with JS in substitution to
<body onscroll="onScroll()"> on HTML. 

Both ways works, but this way resolve a little console error:
*/
window.addEventListener('scroll', onScroll)
// primeiro passa o evento, dps a função que quer que executa
// rodando direto no window = página inteira


// this funtion will manage all the functions related to scrolls on the page:
function onScroll() {
    showNavOnScroll()

    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}



/* A função abaixo serve para deixar aceso a seção na barra de navegação quando
estivermos na seção.
*/

function activateMenuAtCurrentSection(section) {

// criando a linha imaginária 
const targetLine = scrollY + innerHeight / 2
// innerHeight = o valor da viewport height atual
// divide por 2 pra divir a tela no meio e criar uma linha imaginária no meio da tela


// verificar se a seção passou da linha (direção: para cima)
// quais dados vou precisar?

// 1 - qual é o topo de cada seção

const sectionTop = section.offsetTop
// obs: se o id for só letra o JS reconhece e puxa do HTML, entao pode colocar direto

// offsetTop vai dizer em ScrollY qual é o topo da coisa



// 2 - pegando a altura da section:

const sectionHeight = section.offsetHeight



const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

// verificar se a base está abaixo da linha alvo

const sectionEndsAt = sectionTop + sectionHeight
const sectionEndPassedTargetline = sectionEndsAt <= targetLine

// limites da seção
const sectionBoundaries =
  sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

const sectionId = section.getAttribute('id')
const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

menuElement.classList.remove('active-section')
if (sectionBoundaries) {
  menuElement.classList.add('active-section')
}

}




function showNavOnScroll() {
    const navigation = window.document.getElementById('navigation')

    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}



function showBackToTopButtonOnScroll() {
    const backToTopButton = window.document.getElementById('backToTopButton')

    if (scrollY > 400) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}



function openMenu() {
    document.body.classList.add('menu-expanded')
}



function closeMenu() {
    document.body.classList.remove('menu-expanded')
}







// ScrollReveal Library:

/*
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 800,
}).reveal(`
#home, 
#home img, 
#home .stats-container, 
#services, 
#services header, 
#services .card,
#about,
#about header,
#about content`)

*/



