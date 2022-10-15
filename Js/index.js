

//-------------------------------Active navbar-----------------------------------------------------------------------------------------
let pantalla =0;
$(document).ready(function(){
  activeLinkControl();
});

function activeLinkControl(){
  $('.menu a').click(function(){
    $(this).closest('li').siblings().removeClass('selected')
    $(this).closest('li').addClass('selected');
  })
};









//-----------------------------------------------------------header--------------------------------------------------------------------



const nav = document.getElementById('nav');
const logoHeader = document.getElementById('logo-header');
const btnAboutUs= document.getElementById('btn-quienes');
const btnServices= document.getElementById('btn-services');
const btnPorfolio= document.getElementById('btn-porfolio');
const btnContact= document.getElementById('btn-contact');

window.addEventListener('scroll', () => {

  if (window.scrollY >= 60) {
    nav.classList.add("navbar-color");
    logoHeader.style.opacity = '1';
  } else {
    nav.classList.remove('navbar-color');
    logoHeader.style.opacity = '0';
  }



  var b= document.getElementById('banner-servicios');
  var a= document.getElementById('quienes-somos');
  var c= document.getElementById('portafolio');
  var d= document.getElementById('contacto');

  let apos= a.offsetTop;  
  let bpos= b.offsetTop; 
  let cpos= c.offsetTop; 
  let dpos= d.offsetTop; 


  if(window.scrollY < apos){
    btnAboutUs.classList.remove('selected');
  }

  if (window.scrollY > apos && window.scrollY < bpos){
    btnAboutUs.classList.add('selected');
    btnServices.classList.remove('selected');
  }

  
  if (window.scrollY > bpos && window.scrollY < cpos){
    btnAboutUs.classList.remove('selected');
    btnPorfolio.classList.remove('selected');
    btnServices.classList.add('selected');
    console.log("entre a servicios")
  }

  if (window.scrollY > cpos && window.scrollY < dpos){
    btnServices.classList.remove('selected');
    btnPorfolio.classList.add('selected');
  }

  if (window.scrollY > dpos){
    btnPorfolio.classList.remove('selected');
    btnContact.classList.add('selected');

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
//------------------------------------



//----------------------------------------------Cargando imagenes corousel----------------------------------------------------------------------------
var app = {};
var imagenescarousel = document.getElementById('carousel-inner');
var imagenescarousel2 = document.getElementById('carousel-item2');
var active = document.getElementById('item-active');
var divCarousel = document.getElementById('elim');
var carouselthumbs = document.getElementById("carousel-thumbs");
var imagenesArr = [];
var imagenesArr2 = [];
var l = 0;
var p = 0;
let resultado;
var thumb = "";


//carouselthumbs.innerHTML+="<a class='carousel-control-prev' href='#carousel-thumbs' role='button' data-slide='prev'><span class='carousel-control-prev-icon' aria-hidden='true'></span><span class='sr-only'>Previous</span></a><a class='carousel-control-next' href='#carousel-thumbs' role='button' data-slide='next'><span class='carousel-control-next-icon' aria-hidden='true'></span><span class='sr-only'>Next</span></a>";

var miCallback = function (datos) {
  app.imagenes = datos;
  var html = "";
  var i = 0;


  app.imagenes.map(imagenes => {
    imagenesArr.push(imagenes.img);
    html += "<div id='carousel-item' class= 'carousel-item " + imagenes.class + " data-slide-number='" + i + "> <img class='d-block w-100' alt='...' data-type='image' data-toggle='lightbox' data-gallery='example-gallery' src=" + imagenes.img + "></div>";
    i++;
  });

  imagenesArr.forEach((value, index) => {

    resultado = imagenesArr.slice(index + l, index + l + 5);
    l = l + 4;

    if (resultado.length != 0) {
      imagenesArr2.push(resultado);
    }
  });



  for (let index = 0; index < imagenesArr2.length; index++) {
    var contenedorhtml = "";
    var contenedorhtml2 = "";
    for (let index2 = 0; index2 < imagenesArr2[index].length; index2++) {


      thumb += "<div id='carousel-selector-" + p + "' class='thumb col-4 col-sm-2 px-1 py-2' data-target='#myCarousel' data-slide-to='" + p + "'>  <img class='img-fluid' alt='...' src='"
        + imagenesArr2[index][index2] + "'></div>";
      p++;
    }

    if (index == 0) {
      contenedorhtml2 += "<div class='row mx-0'>" + thumb + "</div></div>";
    }

    contenedorhtml += "<div class='carousel-item'><div class='row mx-0'>" + thumb + "</div></div>";

    active.innerHTML += contenedorhtml2;
    imagenescarousel2.innerHTML += contenedorhtml;
    thumb = "";
    contenedorhtml = "";

  }

  imagenescarousel.innerHTML += html;
  divCarousel.remove()
};


$(document).ready(function () {
  setTimeout(function () {
    document.getElementById('elim').remove();
  }, 1);
});

//-------------------------------------------Carousel portafolio-------------------------------------------------------------------------------------
$('#myCarousel').carousel({
  interval: 4000
});
$('#carousel-thumbs').carousel({
  interval: false
});

$('[id^=carousel-selector-]').click(function () {
  var id_selector = $(this).attr('id');
  var id = parseInt(id_selector.substr(id_selector.lastIndexOf('-') + 1));
  $('#myCarousel').carousel(id);
});
// Only display 3 items in nav on mobile.
if ($(window).width() < 575) {
  $('#carousel-thumbs .row div:nth-child(4)').each(function () {
    var rowBoundary = $(this);
    $('<div class="row mx-0">').insertAfter(rowBoundary.parent()).append(rowBoundary.nextAll().addBack());
  });
  $('#carousel-thumbs .carousel-item .row:nth-child(even)').each(function () {
    var boundary = $(this);
    $('<div class="carousel-item">').insertAfter(boundary.parent()).append(boundary.nextAll().addBack());
  });
}
// Hide slide arrows if too few items.
if ($('#carousel-thumbs .carousel-item').length < 2) {
  $('#carousel-thumbs [class^=carousel-control-]').remove();
  $('.machine-carousel-container #carousel-thumbs').css('padding', '0 5px');
}
// when the carousel slides, auto update
$('#myCarousel').on('slide.bs.carousel', function (e) {
  var id = parseInt($(e.relatedTarget).attr('data-slide-number'));
  $('[id^=carousel-selector-]').removeClass('selected');
  $('[id=carousel-selector-' + id + ']').addClass('selected');
});
// when user swipes, go next or previous
$('#myCarousel').swipe({
  fallbackToMouseEvents: true,
  swipeLeft: function (e) {
    $('#myCarousel').carousel('next');
  },
  swipeRight: function (e) {
    $('#myCarousel').carousel('prev');
  },
  allowPageScroll: 'vertical',
  preventDefaultEvents: false,
  threshold: 75
});

$('#myCarousel .carousel-item img').on('click', function (e) {
  var src = $(e.target).attr('data-remote');
  if (src) $(this).ekkoLightbox();
});


