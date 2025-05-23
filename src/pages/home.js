import { createHeader, updateActiveNavLink } from '../components/header.js';
import { createFooter } from '../components/footer.js';
import { createHeroSection } from '../components/hero.js';
import { createServicesSection } from '../components/services.js';
import { createAboutPreview } from '../components/about-preview.js';
import { createEventsPreview } from '../components/events-preview.js';
import {
  initHeaderScroll,
  animateHero,
  animateServiceCards,
  animateAboutSection,
  animateEventCards,
} from '../utils/animations.js';

export const renderHomePage = () => {
  const homeContent = `
    ${createHeader()}
    ${createHeroSection()}
    ${createServicesSection()}
    ${createAboutPreview()}
    ${createEventsPreview()}
    ${createFooter()}
  `;

  // Update document content
  document.querySelector('#app').innerHTML = homeContent;

  // Update active nav link
  updateActiveNavLink('home');

  // Initialize animations
  initHeaderScroll();
  animateHero();
  animateServiceCards();
  animateAboutSection();
  animateEventCards();
};
