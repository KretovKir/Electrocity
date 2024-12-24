const scrollerRight = document.querySelector('.scroller-right');
const scrollerLeft = document.querySelector('.scroller-left');
const row = document.querySelector('.header-nav');
var count = 0;
scrollerRight.addEventListener('click', function(e){
    count+=1
    row.scrollLeft = count * 150
    console.log(row.scrollLeft)

    if(count>0){
        scrollerLeft.classList.remove('invisible')
        console.log('visible')
    }else{
        console.log(count)
        scrollerLeft.classList.add('invisible')
    }
})



scrollerLeft.addEventListener('click', function(e){
    count-=1
    row.scrollLeft = -1 * count * 150

    if(count==0){
        scrollerLeft.classList.add('invisible')
        console.log('invisible')
    }
})


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