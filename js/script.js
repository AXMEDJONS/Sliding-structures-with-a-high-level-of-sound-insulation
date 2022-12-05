let brg_menu = document.querySelector('.header-left-span') 
let top_line = document.querySelector('.top-line')
let center_line = document.querySelector('.center-line')
let bottom_line = document.querySelector('.bottom-line')
let block_brg = document.querySelector('.brg-menu')

brg_menu.onclick = ()=>{
    center_line.classList.toggle('not-active')
    top_line.classList.toggle('rot')
    bottom_line.classList.toggle('rot-2')
    block_brg.classList.toggle('brg-active')


}