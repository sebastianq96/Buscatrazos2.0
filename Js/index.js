const nav = document.getElementById('nav');
const logoHeader = document.getElementById('logo-header');

window.addEventListener('scroll', () => {

    if (window.scrollY >= 60) {
        nav.classList.add("navbar-color");
        logoHeader.style.opacity = '1';
    } else {
        nav.classList.remove('navbar-color');
        logoHeader.style.opacity = '0';
    }
})



//----------------------------------------Slide--------------------------------------------------------------------------------------
let dots = 4;
var interval;
var time_val = 8000;
let data = 0;

let sliderElem = document.querySelector('.slider')
let dotElems = sliderElem.querySelectorAll('.slider__dot')
let indicatorElem = sliderElem.querySelector('.slider__indicator')

Array.prototype.forEach.call(dotElems, (dotElem) => {
    console.log("entreNormi");
    interval = setInterval(function () {
        let currentPos = data
        let newPos = data

        let newDirection = (newPos > currentPos ? 'right' : 'left')
        let currentDirection = (newPos < currentPos ? 'right' : 'left')

        indicatorElem.classList.remove(`slider__indicator--${currentDirection}`)
        indicatorElem.classList.add(`slider__indicator--${newDirection}`)
        sliderElem.setAttribute('data-pos', newPos)
        if (++data === dots - 1) {
            data = 0
        }

    }, time_val);
})


//----------------------------------------Slide-servicios-----------------------------------------------------------------------------

let dotsServices = 3;
var intervalServices;
var time_valServices = 8000;
let dataServices = 0;


let sliderElemServices = document.querySelector('.sliderServices')
let dotElemsServices = sliderElemServices.querySelectorAll('.slider__dotServices')
let indicatorElemServices = sliderElemServices.querySelector('.slider__indicatorServices')

Array.prototype.forEach.call(dotElemsServices, (dotElem) => {


    intervalServices = setInterval(function () {
        let currentPos = dataServices
        let newPos = dataServices

        let newDirection = (newPos > currentPos ? 'right' : 'left')
        let currentDirection = (newPos < currentPos ? 'right' : 'left')

        indicatorElemServices.classList.remove(`.slider__indicatorServices--${currentDirection}`)
        indicatorElemServices.classList.add(`.slider__indicatorServices--${newDirection}`)
        sliderElemServices.setAttribute('data-pos', newPos)
        if (++dataServices === dotsServices - 1) {
            dataServices = 0

        }

    }, time_valServices);
})