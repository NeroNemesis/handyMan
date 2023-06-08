import Carousel from '../JS/carousel.js';

// This is the template from the HTML
const carouselControls = document.querySelector('#carousel-controls');

const carousel = new Carousel({
  root: document.querySelector('.carousel'),
  navigationControls: carouselControls.content.cloneNode(true),
});
