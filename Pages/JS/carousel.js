/**
 * @typedef CarouselProps
 * @property {HTMLElement} root
 * @property {HTMLElement} [navigationControls]
 */
const isRtl = (element) => window.getComputedStyle(element).direction === 'rtl';

export default class Carousel {
    /**
     * @type {CarouselProps} props
     */ 
    constructor(props) {
      this.navigateToNextItem = this.navigateToNextItem.bind(this);
  
      // Initialize some member variables
      this.root = props.root;
      this.scrollContainer = this.root.querySelector('[role="region"][tabindex="0"]');
      this.mediaList = this.scrollContainer.querySelector('[role="list"]');
  
      // Init UI
      this._insertNavigationControls(props.navigationControls);
    }
  
    /**
     * @param {HTMLElement} controls
     */ 
    _insertNavigationControls(controls) {
      if (!controls) return;
  
      const [previous, next] = controls.querySelectorAll('button[data-direction]');
      this.navControlPrevious = previous;
      this.navControlNext = next;
  
      const handleNavigation = (e) => {
        const button = e.target;
        const direction = button.dataset.direction;
        this.navigateToNextItem(direction);
      };
  
      this.navControlPrevious.addEventListener('click', handleNavigation);
      this.navControlNext.addEventListener('click', handleNavigation);
      this.root.appendChild(controls);
    }
  
    /**
     * @param {'start'|'end'} direction
     */

    navigateToNextItem(direction) {
      let scrollAmount = this.scrollContainer.clientWidth;
      scrollAmount = isRtl(this.scrollContainer) ? -scrollAmount : scrollAmount;
      scrollAmount = direction === 'start' ? -scrollAmount : scrollAmount;
      this.scrollContainer.scrollBy({ left: scrollAmount });
    }
  }
  