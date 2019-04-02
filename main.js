//refresh  page to the top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

  // loading animation
  $(function(){
  setTimeout(function(){
  $('.loader-bg').fadeOut('slow', function(){
   $(this).remove();
});
    }, 1000);
  });


//Navigation Burger
const navBurger = document.getElementById('burger-container');
const mainNav = document.getElementById('main-nav');
var burgerSpan = document.querySelectorAll('.bg-span');
    navBurger.addEventListener('click', function () {
    navBurger.classList.toggle('open');
    for(var i = 0; i < burgerSpan.length; i++){
        burgerSpan[i].style.backgroundColor = "#222";
    }
    //check if navBurger contains class open
    if (navBurger.classList.contains('open')){
    mainNav.style.display = "flex";
    mainNav.animate([
        { top: '-100px' }, 
        { top: '0px' }
      ], {
        duration: 0500,
        fill: 'forwards'
      });
    }else{
        mainNav.animate([
            { top: '0px' }, 
            { top: '-100px' }
          ], {
            duration: 0500,
            fill: 'forwards'
          });
        for(var i = 0; i < burgerSpan.length; i++){
            burgerSpan[i].style.backgroundColor = "#EDF5E1";
        }
    }
});



// jQuery scroll animations 
// OPRAVI SI ANIMACIQTA WE
$('.nav-about').click(function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $('.about').offset().top
  }, 700);

        mainNav.animate([
            { top: '0px' }, 
            { top: '-100px' }
          ], {
            duration: 0500,
            fill: 'forwards'
          });
        for(var i = 0; i < burgerSpan.length; i++){
            burgerSpan[i].style.backgroundColor = "#EDF5E1";
        }
        navBurger.classList.toggle('open');
  
 
});


$('.nav-menu').click(function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $('.about-coffee').offset().top
  }, 700);

  mainNav.animate([
    { top: '0px' }, 
    { top: '-100px' }
  ], {
    duration: 0500,
    fill: 'forwards'
  });
for(var i = 0; i < burgerSpan.length; i++){
    burgerSpan[i].style.backgroundColor = "#EDF5E1";
}
navBurger.classList.toggle('open');
});

// jQuery  for arrow and buttons           

$('.arrow-landing').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.about').offset().top
    }, 700);
});

//  visit store
$('.visit-store').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.about-store').offset().top
    }, 700);
});

//visit coffee

$('.visit-coffee').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.about-coffee').offset().top
    }, 700);
});

// Reveal on Scroll
    function revealonScroll(target){
        target = document.querySelector(target);
        const windowOffSet = window.pageYOffset;
        const targetOffSet = target.offsetTop;
        const windowHeight = window.innerHeight;
        const bottom = windowOffSet + windowHeight;

        if (bottom > targetOffSet){
            target.classList.add('active');
        }else{
            target.classList.remove('active');
        }
    }

    
window.addEventListener('scroll', function(){
    revealonScroll('.active-store1');
});

window.addEventListener('scroll', function(){
    revealonScroll('.active-store2');
});

window.addEventListener('scroll', function(){
    revealonScroll('.active-store3');
});




//Slider Coffee 
var slideIndex = 1;
showSlides(slideIndex);



// current 
function currentSlide(n) {
    showSlides(slideIndex = n);
    
  }

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
   

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }

 

    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " dot-active";
    
  }


  // automatic slideshow
     

window.addEventListener('scroll', function(){

    var autoIndex = 0;
    var windowOffSet = window.pageYOffset;
    var stop;
    
    if (window.pageYOffset >=0 || window.pageYOffset < 3599){
        stop = setTimeout(function(){ autoSlides(); }, 2000);
        return;
    }
     else  if(window.pageYOffset >=3600){
    clearTimeout(stop);
    stop = 0;
    autoSlides();
   }
 
   

   function autoSlides() {
       var i;
       var slides = document.getElementsByClassName('mySlides');
       var dots = document.getElementsByClassName('dot');
 
       for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
   }
    autoIndex++;     
 
    
    
    for (i = 0; i < dots.length; i++) {
      dots[i].className.replace(" dot-active", "");
 
      if (dots[i].classList.contains('dot-active')){
         dots[i].classList.remove("dot-active");
      }
   }
 
   if (autoIndex > slides.length) {autoIndex=1} 
     
   slides[autoIndex-1].style.display = "block";  
   dots[autoIndex-1].className += " dot-active";
   setTimeout(autoSlides, 5000); 
     
  
   }
 },{once: true});


