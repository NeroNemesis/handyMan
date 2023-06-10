import Carousel from '../JS/carousel.js';

// This is the template from the HTML
const carouselControls = document.querySelector('#carousel-controls');

const carousel = new Carousel({
  root: document.querySelector('.carousel'),
  navigationControls: carouselControls.content.cloneNode(true),
});

const divWithHandIcon = document.getElementById('icon-hover-div');

const handIcon = document.getElementById('h-icon');

divWithHandIcon.addEventListener('mouseover', function handleMouseOver() {
    handIcon.style.display = 'none';
});

divWithHandIcon.addEventListener('mouseout', function handleMouseOut() {
    handIcon.style.display = 'block';
});

//Changing nav section onclick
$(document).ready(function(){
  $('.nav-link').click(function(){
      $('.nav-link').removeClass("active");
      $(this).addClass("active");
  });
});

//for some reason when i use "$" here the scroll is not smooth
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

//handling nav item color change on scroll
const sections = document.querySelectorAll(".section");
const navItems = document.querySelectorAll(".nav-item .nav-link");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.scrollHeight;
    if(section.getAttribute("id") == "styles"){
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute("id"); }
    }
    else{
      if (scrollY >= sectionTop - (sectionHeight/2)) {
        current = section.getAttribute("id"); }
    }
  });

  navItems.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
};

//changing team members text attributes on screen size change
jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 551) {
      $('.imagetxt_title').addClass('h4');
      $('.imagetxt_title').css({"font-size":"" });
      $('.imagetxt_p').addClass('h6');
      $('.imagetxt_p').css({"font-size":"" });
    } else if (ww >= 551) {
      $('.imagetxt_title').removeClass('h4');
      $('.imagetxt_title').css({"font-size":"1.7vw" });
      $('.imagetxt_p').removeClass('h6');
      $('.imagetxt_p').css({"font-size":"1.2vw" });
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});