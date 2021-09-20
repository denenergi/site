
const isMobile = {
    Android: function(){
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function(){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function(){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function(){
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function(){
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function(){
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
        }
    }

    if (isMobile.any()){
        document.body.classList.add('_touch')
    }else{
        document.body.classList.add('_pc')
    }

const headIcon = document.querySelector('.head__icon');
const menu = document.querySelector('.menu');
headIcon.addEventListener('click', function(e){
    document.body.classList.toggle('body--lock')
    headIcon.classList.toggle('head__icon--active')
    menu.classList.toggle('menu--active')
})

const menuLinks = document.querySelectorAll('.menu__item a[data-goto]')
if(menuLinks.length > 0){
    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener('click', onMenuLinkClick)
    });
    function onMenuLinkClick(e){
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.head').offsetHeight;

            if(headIcon.classList.contains('head__icon--active')){
                document.body.classList.remove('body--lock');
                headIcon.classList.remove('head__icon--active');
                menu.classList.remove('menu--active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault();
        }
    }
}
//слайдер
$(document).ready(function(){
    $('.slider--global').slick({
        dots:false,
        adaptiveHeight: false,
        slidesToShow: 4,
        speed: 1000,
        infinite: false,
        centerMode: false,
        responsive:[
            {
            breakpoint: 1024,
            settings:{
                slidesToShow: 3,
            }
            },
            {
            breakpoint: 768,
            settings:{
                slidesToShow: 2,
                dots:true,
                arrows: false,
            }
            },
            {
                breakpoint: 480,
                settings:{
                    slidesToShow: 1.2,
                    dots:true,
                }
            },
    ]
    });

});

$(document).ready(function(){
    $('.slider--header').slick({
        arrows: false,
        slidesToShow: 2,
        adaptiveHeight: false,
        responsive:[
            {
                breakpoint: 1440,
                settings:{
                    slidesToShow: 2,
                }
                },
                {
                    breakpoint: 1024,
                    settings:{
                        slidesToShow: 2,
                    }
                    },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 2,
                }
                },
            {
                breakpoint: 480,
                settings:{
                    slidesToShow: 1.2,
                    dots:true,
                    slidesToShow: 1.2,
                    speed: 1000,
                    infinite: false,
                    centerMode: false,
                    arrows: false,
                }
            },
    ]
    });

});

$(document).ready(function(){
    $('.slider--reviews').slick({
        arrows: false,
        slidesToShow: 2,
        adaptiveHeight: false,
        responsive:[
            {
                breakpoint: 1440,
                settings:{
                    slidesToShow: 2,
                }
                },
                {
                    breakpoint: 1024,
                    settings:{
                        slidesToShow: 2,
                    }
                    },
            {
                breakpoint: 768,
                settings:{
                    dots:true,
                    slidesToShow: 1,
                    speed: 1000,
                    infinite: false,
                    centerMode: false,
                    arrows: false,
                    centerMode: true,
                }
                },
            {
                breakpoint: 480,
                settings:{
                    slidesToShow: 1,
                    dots:true,
                    speed: 1000,
                    infinite: false,
                    centerMode: false,
                    arrows: false,
                    centerMode: true,
                }
            },
    ]
    });

});


const date = document.querySelector('.form__date');
const time = document.querySelector('.form__time');
const svg_date = document.getElementById('svg--date');
const svg_time = document.getElementById('svg--time');
const form__tel = document.querySelector('.form__tel');
date.addEventListener('click', function(){
    this.type =  'date';
    svg_date.style.display =  'none';
})
date.addEventListener('blur', function(){
    this.type =  'text';
    svg_date.style.display =  'inline';
})


time.addEventListener('click', function(){
    this.type =  'time';
    svg_time.style.display =  'none';
})
time.addEventListener('blur', function(){
    this.type =  'text';
    svg_time.style.display =  'inline';
})


form__tel.addEventListener('click', function(){
    this.value =  '+380';
})