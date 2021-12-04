//Abertura do Menu Mobile

let menuMobile = document.querySelector('.menu_mobile')

let open = false//flag estado inicial de fechado

function abrirMobile(){

    if (open === true) {
        open = false
        menuMobile.classList.remove('open')
    } else if (open === false) {
        open = true
    menuMobile.classList.add('open')    
    } 
}

