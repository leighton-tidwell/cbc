import { createHeader, updateActiveNavLink } from '../components/header.js';
import { createFooter } from '../components/footer.js';
import { createStaffSection } from '../components/staff-section.js';
import { initHeaderScroll, animateAboutSection, animateStaffCards } from '../utils/animations.js';

export const renderAboutPage = () => {
  const aboutContent = `
    ${createHeader()}
    
    <!-- About Hero Section -->
    <section class="section about-page">
      <div class="container">
        <h1 class="section-title">Our Story</h1>
        <div class="about-preview">
          <div>
            <img src="/src/assets/images/stock/nathan-mullet-S2N8hpN_vc0-unsplash.jpg" alt="Church Family" class="about-image">
          </div>
          <div class="about-content">
            <h2 class="about-title">Our Mission</h2>
            <p class="about-text">At Calvary Baptist Church, our mission is to spread the good news of Jesus Christ to our community and to help people take the next steps in growing their personal relationships with Him.</p>
            <p class="about-text">We want to be a church that contributes. We want to be a community that serves. We believe in welcoming everyone just as they are and journeying together in faith.</p>
          </div>
        </div>
      </div>
    </section>
    
    ${createStaffSection()}
    ${createFooter()}
  `;

  // Update document content
  document.querySelector('#app').innerHTML = aboutContent;
  
  // Update active nav link
  updateActiveNavLink('about');
  
  // Initialize animations
  initHeaderScroll();
  animateAboutSection();
  animateStaffCards();
};