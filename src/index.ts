import './index.css';

import {
  animateAbout,
  animateCTA,
  animateFeatures,
  animateHeroGrid,
  animateHeroIntro,
  animateNavbar,
  initFadeInOnScroll,
} from './animation';

window.onload = () => {
  animateHeroGrid();
  animateNavbar();
  animateFeatures();
  animateAbout();
  animateCTA();
  initFadeInOnScroll();
  animateHeroIntro();
};
