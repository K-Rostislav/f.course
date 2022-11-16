function testWebP(callback){
    let webP = new Image();
    webP.onload = webP.onerror = function (){
        callback(webP.height == 2)
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function(support){
    if(support == true){
        document.querySelector('html').classList.add('webp');
    } else {
        document.querySelector('html').classList.add('no-webp');
    }
});
//=============================================================================================================================================
const btnBurger = document.querySelector('.header__burger-btn');
const burger = document.querySelector('.burger');
const main = document.querySelector('.main');
const logo = document.querySelector('.logo');

btnBurger.addEventListener('click', () => {
    btnBurger.classList.toggle('header__burger-btn_active');
    burger.classList.toggle('burger_active');
    main.classList.toggle('main_blur');
    logo.classList.toggle('logo_blur');
    
    if (btnBurger.classList.contains('header__burger-btn_active')) {
        document.body.classList.add('no-scroll')
        return
    }
        
    document.body.classList.remove('no-scroll')
})

const header = document.querySelector('.header');
const start = document.querySelector('.start');
const program = document.querySelector('.program');

const startDecor = document.querySelectorAll('.start__col-decor');
const programLine = document.querySelector('.program__inner-line');
const programItems = document.querySelectorAll('.program__inner-item');
const programItemsDecor = document.querySelectorAll('.program__inner-item-decor');

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(1, 1)
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 20) {
            header.classList.add('header_active')
        } else {
            header.classList.remove('header_active')
        }

        if (scrollY > start.getBoundingClientRect().top + 500) {
            for (let item of startDecor) {
                item.classList.add('start__col-decor_animate')
            }
        }

        if (scrollY > program.getBoundingClientRect().top * 500) {
            programLine.classList.add('program__inner-line_animate')
            for (let item of programItems) {
                item.classList.add('program__inner-item_animate')
            }
            for (let item of programItemsDecor) {
                item.classList.add('program__inner-item-decor_animate')
            }
        }
    });
});

AOS.init({
    // Global settings:
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 150, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});