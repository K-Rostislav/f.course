function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2)
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('html').classList.add('webp')
    } else {
        document.querySelector('html').classList.add('no-webp')
    }
});
//=============================================================================================================================================
// burger =========================================================================
const burgerBtn = document.querySelector('.burger-btn'),
      burgerBg = document.querySelector('.burger-background'),
      burger = document.querySelector('.burger')
      close = document.querySelector('.close')
      body = document.body

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.add('burger-btn_active')
    burger.classList.add('burger_active')
    burgerBg.classList.add('burger-background_active')
    body.classList.add('body_no-scroll')
})
burgerBg.addEventListener('click', () => {
    burgerBtn.classList.remove('burger-btn_active')
    burger.classList.remove('burger_active')
    burgerBg.classList.remove('burger-background_active')
    body.classList.remove('body_no-scroll')
})
close.addEventListener('click', () => {
    burgerBtn.classList.remove('burger-btn_active')
    burger.classList.remove('burger_active')
    burgerBg.classList.remove('burger-background_active')
    body.classList.remove('body_no-scroll')
})
// header =========================================================================
const header = document.querySelector('.header'),
      start = document.querySelector('.start'),
      program = document.querySelector('.program')

const startDecor = document.querySelectorAll('.start__col-decor'),
      programLine = document.querySelector('.program__inner-line'),
      programItems = document.querySelectorAll('.program__inner-item'),
      programItemsDecor = document.querySelectorAll('.program__inner-item-decor')
      decor = document.querySelectorAll('.decor')

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(1, 1)

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY

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
// AOS =========================================================================
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
})
// date =========================================================================
const days = document.getElementById('days'),
      hours = document.getElementById('hours'),
      minuts = document.getElementById('minuts'),
      seconds = document.getElementById('seconds')

let second = Number(seconds.innerHTML),
    minut = Number(minuts.innerHTML),
    hour = Number(hours.innerHTML),
    day = Number(days.innerHTML)
setInterval(() => {
    second++
    seconds.innerHTML = `${second < 10 ? '0' + second : second}`
    minuts.innerHTML = `${minut < 10 ? '0' + minut : minut}`
    hours.innerHTML = `${hour < 10 ? '0' + hour : hour}`
    days.innerHTML = `${day < 10 ? '0' + day : day}`
    if (seconds.innerHTML > 59) {
        second = 0
        seconds.innerHTML = '0' + second
        minut++
        minuts.innerHTML ++
    }
    if (minuts.innerHTML > 59) {
        minut = 0
        minuts.innerHTML = '0' + minut
        hour ++
        hours.innerHTML ++
    }
    if (hours.innerHTML > 59) {
        hour = 0
        hours.innerHTML = '0' + hour
        day ++
        days.innerHTML ++
    }
    if (days.innerHTML > 100) {
        day = 0
        days.innerHTML = '0' + day
    }
}, 1000);
// validation =========================================================================
const form = document.getElementById('form'),
      inputBlock = document.querySelector('.input-block'),
      input = document.querySelector('.input-block__input'),
      btnSubmit = document.querySelector('.footer__submit')

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    const regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/

    if (regex.test(input.value)) {
        inputBlock.classList.remove('input-block_error')
        form.submit()
    } else {
        inputBlock.classList.add('input-block_error')
    }
})
