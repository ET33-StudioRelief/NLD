import './index.css';

import {
  animateAbout,
  animateFeatures,
  animateHeroGrid,
  animateHeroIntro,
  animateNavbar,
  initFadeInOnScroll,
} from './animation';

window.Webflow ||= [];
window.Webflow.push(() => {
  animateHeroGrid();
  animateNavbar();
  animateFeatures();
  animateAbout();
  initFadeInOnScroll();
  animateHeroIntro();
});
