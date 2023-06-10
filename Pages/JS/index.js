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