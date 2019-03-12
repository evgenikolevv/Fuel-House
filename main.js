
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






//smooth scroll NAV BAR

function smoothScroll(target, duration){

    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

   
    function animation(currentTime){

    if (startTime === null) 
       startTime = currentTime;   
      
     var timeElapsed = currentTime - startTime; 
     var run = ease(timeElapsed, startPosition, distance, duration);
     window.scrollTo(0,run);
     if (timeElapsed < duration) 
        requestAnimationFrame(animation);
    }


    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }

     
   requestAnimationFrame(animation); 

}
//attaching scroll animations 

const navAbout = document.querySelector('.nav-about');
const navMenu = document.querySelector('.nav-menu');
const navContact = document.querySelector('.nav-contact');



navAbout.addEventListener('click',function(){
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
      navBurger.classList.remove("open");
    smoothScroll('.about',1000);
});

navMenu.addEventListener('click',function(){
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

      navBurger.classList.remove("open");
    smoothScroll('.about-coffee',1000);
});

navContact.addEventListener('click', function(){
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

      navBurger.classList.remove("open");
});


// JQUERY  for arrow and buttons           

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



