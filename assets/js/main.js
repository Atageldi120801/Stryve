const svg = document.querySelector(".drawsvg-initialized2")
const path = svg.querySelector('path')

const scroll = () => {
    const distance = window.scrollY
    const totalDistance = 4500 - svg.clientHeight - window.innerHeight
    const precentage =  totalDistance / distance 
    const pathLength = path.getTotalLength()
    path.style.strokeDasharray = `${pathLength}`
    path.style.strokeDashoffset = `${pathLength * (1-precentage)}`
}
scroll()
window.addEventListener('scroll',scroll);

const svg2 = document.querySelector(".drawsvg-initialized3")
const path2 = svg2.querySelector('path')
const scroll2 = () => {
    const distance2 = window.scrollY
    const totalDistance2 = 3850 - svg2.clientHeight - window.innerHeight
    const precentage2 =  totalDistance2 / distance2 
    const pathLength2 = path.getTotalLength()
    path2.style.strokeDasharray = `${pathLength2}`
    path2.style.strokeDashoffset = `${pathLength2 * (1-precentage2)}`
}
scroll2()
window.addEventListener('scroll',scroll2);

const svg3 = document.querySelector(".drawsvg-initialized4")
const path3 = svg3.querySelector('path')
const scroll3 = () => {
    const distance3= window.scrollY
    const totalDistance3 = 5200 - svg3.clientHeight - window.innerHeight
    const precentage3 =  totalDistance3 / distance3 
    const pathLength3 = path.getTotalLength()
    path3.style.strokeDasharray = `${pathLength3}`
    path3.style.strokeDashoffset = `${pathLength3 * (1-precentage3)}`
}
scroll3()
window.addEventListener('scroll',scroll3);

$(document).ready(function(){
    var w_width = $(window).width();
    if(w_width < 992){
        $(".swiper-l").click(function(){
            $(".swiper-wrapper").css({
                transform: "translate3d(0px, 0px, 0px)"
            })
        })
        $(".swiper-right").click(function(){
            $(".swiper-wrapper").css({
                transform: "translate3d(-517.333px, 0px, 0px)"
            })
        })
    } 
    if(w_width < 767){
        $(".swiper-l").click(function(){
            $(".swiper-wrapper").css({
                transform: "translate3d(0px, 0px, 0px)"
            })
        })
        $(".swiper-right").click(function(){
            $(".swiper-wrapper").css({
                transform: "translate3d(-627px, 0px, 0px)"
            })
        })
    } 
    if(w_width < 479){
        $(".swiper-l").click(function(){
            $(".swiper-wrapper").css({
                transform: "translate3d(0px, 0px, 0px)"
            })
        })
        $(".swiper-right").click(function(){
            $(".swiper-wrapper").css({
                transform: "translate3d(-410px, 0px, 0px)"
            })
        })
    } 

    $(".toglle1").click(function(){
        $(this).toggleClass("active");
        $(".flex-menu1").toggleClass("active");
        if($(".flex-menu2").hasClass("active")){
            $(".flex-menu2").removeClass("active");
            $(".toglle2").removeClass("active");
        }
        if($(".flex-menu3").hasClass("active")){
            $(".flex-menu3").removeClass("active");
            $(".toglle3").removeClass("active");
        }
    })
    $(".toglle2").click(function(){
        $(this).toggleClass("active");
        $(".flex-menu2").toggleClass("active");
        if($(".flex-menu1").hasClass("active")){
            $(".flex-menu1").removeClass("active");
            $(".toglle1").removeClass("active");
        }
        if($(".flex-menu3").hasClass("active")){
            $(".flex-menu3").removeClass("active");
            $(".toglle3").removeClass("active");
        }
    })
    $(".toglle3").click(function(){
        $(this).toggleClass("active");
        $(".flex-menu3").toggleClass("active");
        if($(".flex-menu1").hasClass("active")){
            $(".flex-menu1").removeClass("active");
            $(".toglle1").removeClass("active");
        }
        if($(".flex-menu2").hasClass("active")){
            $(".flex-menu2").removeClass("active");
            $(".toglle2").removeClass("active");
        }
    })
    $(".c-menu-buttonn").click(function(){
        $(this).addClass("activity");
    })
    $(".c-nav-menu__close").click(function(){
        $(".c-menu-buttonn").removeClass("activity");
    })
    $(window).scroll(function(){
        $(".c-footer-lottie").each(function(){
            var x = $(this).offset().top;
            var y = $(window).scrollTop();
            if (x < y + 600){
                $(this).addClass("c-footer-lottie-scroll");
            }
        })
        $(".price-svg-path").each(function(){
            var x = $(this).offset().top;
            var y = $(window).scrollTop();
            if (x < y + 550){
                $(this).addClass("price-svg-path1");
            }
        })
        $("h2").each(function(){
            var x = $(this).offset().top;
            var y = $(window).scrollTop();
            if (x < y + 550){
                $(this).addClass("h2-anime");
            }
        })
        $(".h11").each(function(){
            var x = $(this).offset().top;
            var y = $(window).scrollTop();
            if (x < y + 550){
                $(this).addClass("h2-anime");
            }
        })
        $(".lineswrap").each(function(){
            var x = $(this).offset().top;
            var y = $(window).scrollTop();
            if (x < y + 550){
                $(this).addClass("h2-anime");
            }
        })
        $("h3").each(function(){
            var x = $(this).offset().top;
            var y = $(window).scrollTop();
            if (x < y + 550){
                $(this).addClass("h2-anime");
            }
        })
        $(".swiper-slide").each(function(){
            var x = $(this).offset().top;
            var y = $(window).scrollTop();
            if (x < y + 550){
                $(this).addClass("anime");
            }
        })
        $(".swiper-slidee").each(function(){
            var x = $(this).offset().top;
            var y = $(window).scrollTop();
            if (x < y + 550){
                $(this).addClass("up-slide");
            }
        })
    })
})
