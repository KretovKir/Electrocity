// const scrollBtn = document.querySelector('.scroller');
// const row = document.querySelector('.header-nav')
// scrollBtn.addEventListener('click', function(e){
//     row.style.left = "-100px"
// })


const burger = document.querySelector('.burger');
const menu = document.querySelector('.mobile-menu');
const cross = document.querySelector('.close');

burger.addEventListener('click', ()=>{
    menu.classList.toggle('mobile-menu__active')
    body.classList.add('no-scroll')
})

cross.addEventListener('click', ()=>{
    menu.classList.remove('mobile-menu__active')
})