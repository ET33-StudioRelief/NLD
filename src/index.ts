import './index.css';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  animateAbout,
  animateFeatures,
  animateHeroGrid,
  animateHeroIntro,
  animateNavbar,
  initFadeInOnScroll,
  initFeaturesCards,
} from './animation';

window.Webflow ||= [];
window.Webflow.push(() => {
  animateHeroGrid();
  animateNavbar();
  animateFeatures();
  animateAbout();
  initFeaturesCards();
  initFadeInOnScroll();
  animateHeroIntro();
  requestAnimationFrame(() => ScrollTrigger.refresh());
});
