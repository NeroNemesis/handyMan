import Carousel from '../JS/carousel.js';

// This is the template from the HTML

var carousel =  document.getElementById('carousel-controls');
if (typeof(carousel) != 'undefined' && carousel != null)
{
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
}

//Changing nav section onclick
$(document).ready(function(){
  $('.nav-link').click(function(){
      $('.nav-link').removeClass("active");
      $(this).addClass("active");
  });
});

//for some reason when i use "$" here the scroll is not smooth
document.querySelectorAll('.nav-link').forEach(anchor => {
  if(anchor.classList.contains("nav-a")){
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
    });
  }
});

//handling nav item color change on scroll
const sections = document.querySelectorAll(".section");
const navItems = document.querySelectorAll(".nav-item .nav-link");
window.onscroll = () => {
  var current = "";
  var homepage = document.getElementById("home");

  if(typeof(homepage) != undefined && homepage != null)
  {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.scrollHeight;
      const scrollTop = section.scrollTop;
      
      if (scrollY + sectionTop/7 >= sectionTop) {
        current = section.getAttribute("id"); }
    });
  }
  else
  {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.scrollHeight;
      const scrollTop = section.scrollTop;
      
      if (scrollY + sectionTop/3 >= sectionTop) {
        current = section.getAttribute("id"); }
    });
  }
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

//handling the calendar
var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var datepicker = document.getElementById('checkin-date');

if(typeof(datepicker) != undefined && datepicker != null)
{
  var dateTomorrow = year + "-" + month + "-" + date;
  var checkinElem = document.querySelector("#checkin-date");

  checkinElem.setAttribute("min", dateTomorrow);
}

//handling options

$(document).on('change','#service-selection',function(){
  var value = this.value;

  if(value == 'nettoyage' || value == 'consultation')
  {
    $('#rdvType').addClass('d-none');
    $('#rdvType-selection').prop('required', false);
  }
  else
  {
    $('#rdvType').removeClass('d-none');
    $('#rdvType-selection').prop('required', true);
  }

});

$(document).on('change','#rdvType-selection',function(){
  var value = this.value;

  if(value == 'yourplace')
  {
    $('#adress').removeClass('d-none');
    $('#adr').prop('required', true);
  }
  else
  {
    $('#adress').addClass('d-none');
    $('#adr').prop('required', false);
  }

});

//handling booking submit
var mySubmit = document.getElementById("rdvSubmit");
const form = document.querySelector('form');
if(typeof(form) != undefined && form != null)
{
  form.addEventListener('submit', function(e) {
    if (form.checkValidity()) {
        location.href = "bookingConfirmation.html";
    }
    e.preventDefault();
  })
}