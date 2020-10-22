
let menu = $(".full-mobile-menu")[0]
console.log(menu)
$(".full-mobile-menu__close")[0].onclick = (e)=>{
    console.log(e)
    $(menu).toggleClass('mobile-hidden')
}
$(".header__mobile-burger")[0].onclick = (e)=>{
    console.log(e)
    $(menu).toggleClass('mobile-hidden')
}