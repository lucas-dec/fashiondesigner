const buttonMenu = document.querySelector('button.btn-menu');
const buttonMenuClose = document.querySelector('button.btn-close-menu');
const menu = document.querySelector('.left-menu');

const openMenu = () => {
    if (!menu.classList.contains("open-menu")) {
        menu.classList.add("open-menu");

        buttonMenuClose.addEventListener('click', closeMenu = () => {
            menu.classList.remove("open-menu");
        });
    } else {
        menu.classList.remove("open-menu");
    }
}
buttonMenu.addEventListener('click', openMenu);


const buttonBasket = document.querySelector('button.open-basket');
const shopBasket = document.querySelector('.shop-basket');
const buttonBasketClose = document.querySelector('button.btn-close-basket');

const openBasket = () => {
    if (!shopBasket.classList.contains("opened")) {

        if (menu.classList.contains("open-menu")) {
            menu.classList.remove("open-menu");
        }

        shopBasket.classList.add("opened");

        buttonBasketClose.addEventListener('click', closeBasket = () => {
            shopBasket.classList.remove("opened");
        });

    } else {
        shopBasket.classList.remove("opened");
    }
}
buttonBasket.addEventListener('click', openBasket);


// OPEN SHOP-BASKET FROM LEFT MENU
const buttonBasketLeftMenu = document.querySelector('button.open-basket-left-menu');
const openBasketLeftMenu = () => {
    menu.classList.remove("open-menu");
    openBasket();
}
buttonBasketLeftMenu.addEventListener('click', openBasketLeftMenu);


// HEADER SLIDER

const slideList = [...document.querySelectorAll('.slide')];
const dots = [...document.querySelectorAll('.slide-dots span')];
let indexSlide = 0;
let indexSetInterval = 0;

const changeDots = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active-dots'));
    dots[activeDot].classList.remove('active-dots');
    dots[indexSlide].classList.add('active-dots');
}

const changeSlide = () => {
    indexSlide++
    if (indexSlide == slideList.length) indexSlide = 0;
    const activeSlide = slideList.findIndex(slide => slide.classList.contains('active-slide'));
    slideList[activeSlide].classList.remove('active-slide');
    slideList[indexSlide].classList.add('active-slide');

    changeDots();
}
indexSetInterval = setInterval(changeSlide, 4000);

const dotsManual = [...document.querySelectorAll('.slide-dots span')];

function changeManual() {
    let activeDot = dots.findIndex(dot => dot.classList.contains('active-dots'));
    dots[activeDot].classList.remove('active-dots');
    this.classList.add('active-dots');
    activeDot = dots.findIndex(dot => dot.classList.contains('active-dots'));

    const activeSlide = slideList.findIndex(slide => slide.classList.contains('active-slide'));
    slideList[activeSlide].classList.remove('active-slide');
    slideList[activeDot].classList.add('active-slide');
    clearInterval(indexSetInterval);
    indexSetInterval = setInterval(changeSlide, 4000);
}
dotsManual.forEach(item => item.addEventListener('click', changeManual));

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

const left = () => {
    const activeSlide = slideList.findIndex(slide => slide.classList.contains('active-slide'));
    indexSlide--
    if (indexSlide < 0) indexSlide = 3;
    slideList[activeSlide].classList.remove('active-slide');
    slideList[indexSlide].classList.add('active-slide');

    changeDots();
    clearInterval(indexSetInterval);

}
arrowLeft.addEventListener("click", left)

const right = () => {
    const activeSlide = slideList.findIndex(slide => slide.classList.contains('active-slide'));
    indexSlide++
    if (indexSlide == slideList.length) indexSlide = 0;
    slideList[activeSlide].classList.remove('active-slide');
    slideList[indexSlide].classList.add('active-slide');

    changeDots();
    clearInterval(indexSetInterval);
}
arrowRight.addEventListener("click", right)


// SECOND SLIDER

const secondSlideList = [...document.querySelectorAll('.second-slider')];
const secondDots = [...document.querySelectorAll('.second-slide-dots span')];
let secondIndexSlide = 0;
let secondIndexSetInterval = 0;

const secondChangeDots = () => {
    const activeDot = secondDots.findIndex(dot => dot.classList.contains('second-active-dots'));
    secondDots[activeDot].classList.remove('second-active-dots');
    secondDots[secondIndexSlide].classList.add('second-active-dots');
}

const secondChangeSlide = () => {
    secondIndexSlide++
    if (secondIndexSlide == secondSlideList.length) secondIndexSlide = 0;
    const activeSlide = secondSlideList.findIndex(slide => slide.classList.contains('second-active-slide'));
    secondSlideList[activeSlide].classList.remove('second-active-slide');
    secondSlideList[secondIndexSlide].classList.add('second-active-slide');

    secondChangeDots();
}
secondIndexSetInterval = setInterval(secondChangeSlide, 3000);

const secondDotsManual = [...document.querySelectorAll('.second-slide-dots span')];

function secondChangeManual(){
    let secondActiveDot = secondDots.findIndex(dot => dot.classList.contains('second-active-dots'));
    secondDots[secondActiveDot].classList.remove('second-active-dots');
    this.classList.add('second-active-dots');
    secondActiveDot = secondDots.findIndex(dot => dot.classList.contains('second-active-dots'));

    const activeSlide = secondSlideList.findIndex(slide => slide.classList.contains('second-active-slide'));
    secondSlideList[activeSlide].classList.remove('second-active-slide');
    secondSlideList[secondActiveDot].classList.add('second-active-slide');
    clearInterval(secondIndexSetInterval);
    secondIndexSetInterval = setInterval(secondChangeSlide, 3000);
}
secondDotsManual.forEach(item => item.addEventListener('click', secondChangeManual));

// SMOOTH SCROLLING

$('a[href^="#"]').on('click', function (event) {
  
    var target = $($(this).attr('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });