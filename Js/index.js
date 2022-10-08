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
});




//-------------------------------------------Carousel portafolio-------------------------------------------------------------------------------------
$('#myCarousel').carousel({
    interval: 4000
  });
  $('#carousel-thumbs').carousel({
    interval: false
  });
  
  $('[id^=carousel-selector-]').click(function() {
    var id_selector = $(this).attr('id');
    var id = parseInt( id_selector.substr(id_selector.lastIndexOf('-') + 1) );
    $('#myCarousel').carousel(id);
  });
  // Only display 3 items in nav on mobile.
  if ($(window).width() < 575) {
    $('#carousel-thumbs .row div:nth-child(4)').each(function() {
      var rowBoundary = $(this);
      $('<div class="row mx-0">').insertAfter(rowBoundary.parent()).append(rowBoundary.nextAll().addBack());
    });
    $('#carousel-thumbs .carousel-item .row:nth-child(even)').each(function() {
      var boundary = $(this);
      $('<div class="carousel-item">').insertAfter(boundary.parent()).append(boundary.nextAll().addBack());
    });
  }
  // Hide slide arrows if too few items.
  if ($('#carousel-thumbs .carousel-item').length < 2) {
    $('#carousel-thumbs [class^=carousel-control-]').remove();
    $('.machine-carousel-container #carousel-thumbs').css('padding','0 5px');
  }
  // when the carousel slides, auto update
  $('#myCarousel').on('slide.bs.carousel', function(e) {
    var id = parseInt( $(e.relatedTarget).attr('data-slide-number') );
    $('[id^=carousel-selector-]').removeClass('selected');
    $('[id=carousel-selector-'+id+']').addClass('selected');
  });
  // when user swipes, go next or previous
  $('#myCarousel').swipe({
    fallbackToMouseEvents: true,
    swipeLeft: function(e) {
      $('#myCarousel').carousel('next');
    },
    swipeRight: function(e) {
      $('#myCarousel').carousel('prev');
    },
    allowPageScroll: 'vertical',
    preventDefaultEvents: false,
    threshold: 75
  });
  
  $('#myCarousel .carousel-item img').on('click', function(e) {
    var src = $(e.target).attr('data-remote');
    if (src) $(this).ekkoLightbox();
  });


