import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Import all animation modules
export { initHeaderScroll } from './animations/header.js';
export { animateHero } from './animations/hero.js';
export {
  animateServiceCards,
  animateEventCards,
  animateStaffCards,
} from './animations/cards.js';
export { animateAboutSection } from './animations/sections.js';
export { animateWelcomeHome } from './animations/welcome-home.js';
