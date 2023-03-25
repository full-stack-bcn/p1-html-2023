
const scrollfunction= ()=>{
    const header= document.querySelector('#header')
    const NavMenu=document.querySelector('#nav-menu')
    let previous_pos=window.scrollY

    window.addEventListener('scroll', function() {
        const current_pos=window.scrollY;
    if (current_pos>previous_pos) {

        // Cuando damos scroll hacia abajo ocultamos header y mostramos menu derecho
        header.classList.add('hidden')
        header.classList.remove('visible')

        NavMenu.classList.add('visile')
        NavMenu.classList.remove('hidden')
       

    } else {

        // cuando damos scroll hacia arriba mostramos header y ocultamos menu
        header.classList.add('visible')
        header.classList.remove('hidden')

        NavMenu.classList.add('hidden')
        NavMenu.classList.remove('visible')
    }

    previous_pos=current_pos

    });
}
document.addEventListener('DOMContentLoaded',scrollfunction)


