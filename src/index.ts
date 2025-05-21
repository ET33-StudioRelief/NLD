import './index.css';

import {
  animateAbout,
  animateCTA,
  animateFeatures,
  animateHeroGrid,
  animateNavbar,
} from './animation';

window.onload = () => {
  animateHeroGrid();
  animateNavbar();
  animateFeatures();
  animateAbout();
  animateCTA();
};
