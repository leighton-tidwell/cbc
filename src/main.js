import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import page modules
import { renderAboutPage } from './pages/about.js';
import { renderEventsPage } from './pages/events.js';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Home page content
const homeContent = `
  <!-- Header -->
  <header class="header">
    <div class="container header-container">
      <a href="#" class="logo" data-page="home">
        <img src="/src/assets/images/logo.png" alt="Calvary Baptist Church Logo">
      </a>
      <nav>
        <button class="mobile-menu-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-list">
          <li><a href="#" class="nav-link active" data-page="home">Home</a></li>
          <li><a href="#" class="nav-link" data-page="about">About</a></li>
          <li><a href="#" class="nav-link" data-page="events">Events</a></li>
          <li><a href="#" class="nav-link" data-page="contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <img src="/src/assets/images/location.jpg" alt="Calvary Baptist Church Interior" class="hero-img">
    <div class="container">
      <div class="hero-content">
        <img src="/src/assets/images/logo.png" alt="Calvary Baptist Church" class="hero-logo-mobile">
        <h1 class="hero-title">Welcome to Calvary Baptist Church</h1>
        <p class="hero-subtitle">Just ordinary people serving an extraordinary God!</p>
        <div class="hero-buttons">
          <a href="#services" class="btn">Join Us This Sunday</a>
          <a href="#" class="btn btn-outline" data-page="about">Learn More</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="section" id="services">
    <div class="container">
      <h2 class="section-title">Join Us This Week</h2>
      <p style="text-align: center; font-size: 1.125rem; color: var(--text-light); margin-bottom: var(--spacing-xl); max-width: 600px; margin-left: auto; margin-right: auto;">
        Experience meaningful worship and connect with our community
      </p>
      <div class="service-times">
        <div class="service-card">
          <div class="service-icon">☀️</div>
          <h3 class="service-day">Sunday</h3>
          <p class="service-time">10:00 AM</p>
          <p class="service-info">Worship Service<br><small>Sunday School at 9:00 AM</small></p>
        </div>
        <div class="service-card">
          <div class="service-icon">🌙</div>
          <h3 class="service-day">Wednesday</h3>
          <p class="service-time">7:00 PM</p>
          <p class="service-info">Midweek Service<br><small>Classes for all ages</small></p>
        </div>
      </div>
    </div>
  </section>

  <!-- About Preview Section -->
  <section class="section">
    <div class="container">
      <div class="about-preview">
        <div>
          <img src="/src/assets/images/stock/rosie-sun-rTwhmFSoXC8-unsplash.jpg" alt="Church Family" class="about-image">
        </div>
        <div class="about-content">
          <h2 class="about-title">Welcome Home</h2>
          <p class="about-text">Located at 506 Runnels St. in Merkel, TX, Calvary Baptist Church is a welcoming community where everyone can come as they are. Our mission is to spread the good news of Jesus Christ to our community and to help people take the next steps in growing their personal relationships with Him.</p>
          <p class="about-text">We believe in being a church that makes a difference. A community that serves. A family that cares.</p>
          <a href="#" class="btn btn-outline" data-page="about">Discover Our Story</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Events Preview Section -->
  <section class="section">
    <div class="container">
      <h2 class="section-title">Upcoming Events</h2>
      <div class="events-preview">
        <div class="event-cards">
          <div class="event-card">
            <img src="/src/assets/images/stock/vince-fleming-gssVHlGhisQ-unsplash.jpg" alt="Sunday Service" class="event-image">
            <div class="event-content">
              <h3 class="event-title">Sunday Morning Service</h3>
              <p class="event-date">Sundays at 10:00 AM</p>
              <p class="event-description">Join us for worship, prayer, and a message from Pastor Colton Grisham.</p>
              <a href="#" class="btn" data-page="events">Learn More</a>
            </div>
          </div>
          <div class="event-card">
            <img src="/src/assets/images/stock/megan-allen-fx81JSLfyLU-unsplash.jpg" alt="Wednesday Service" class="event-image">
            <div class="event-content">
              <h3 class="event-title">Wednesday Night Service</h3>
              <p class="event-date">Wednesdays at 7:00 PM</p>
              <p class="event-description">Join us on Wednesday nights for that midweek refuel with classes for every age.</p>
              <a href="#" class="btn" data-page="events">Learn More</a>
            </div>
          </div>
          <div class="event-card">
            <img src="/src/assets/images/stock/nathan-mullet-pmiW630yDPE-unsplash.jpg" alt="Sunday School" class="event-image">
            <div class="event-content">
              <h3 class="event-title">Sunday School</h3>
              <p class="event-date">Sundays at 9:00 AM</p>
              <p class="event-description">Classes available for all ages including Adult, Young Adult, and Children's Church.</p>
              <a href="#" class="btn" data-page="events">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-section">
        <h3 class="footer-title">Calvary Baptist Church</h3>
        <p>Just ordinary people serving an extraordinary God!</p>
      </div>
      <div class="footer-section">
        <h3 class="footer-title">Contact Us</h3>
        <ul class="contact-list">
          <li class="contact-item">
            <span>506 Runnels St., Merkel, TX 79536</span>
          </li>
          <li class="contact-item">
            <span>325.928.5120</span>
          </li>
          <li class="contact-item">
            <span>officeadmin@cbcmerkel.org</span>
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <h3 class="footer-title">Connect With Us</h3>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Facebook">FB</a>
          <a href="#" class="social-link" aria-label="Twitter">TW</a>
          <a href="#" class="social-link" aria-label="YouTube">YT</a>
        </div>
      </div>
    </div>
    <div class="container">
      <p class="copyright">&copy; ${new Date().getFullYear()} Calvary Baptist Church, Merkel TX. All Rights Reserved.</p>
    </div>
  </footer>
`;

// Router to handle page navigation
const router = {
  currentPage: 'home',
  routes: {
    home: () => {
      document.querySelector('#app').innerHTML = homeContent;
      initHomeAnimations();
      createPlaceholders();
    },
    about: renderAboutPage,
    events: renderEventsPage
  },
  navigate(page) {
    if (this.routes[page]) {
      this.currentPage = page;
      
      // Add animation for page transition
      const appElement = document.querySelector('#app');
      gsap.to(appElement, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          // Render the new page
          this.routes[page]();
          
          // Animate page in
          gsap.to(appElement, {
            opacity: 1,
            duration: 0.3
          });
          
          // Update URL
          window.history.pushState({ page }, '', page === 'home' ? '/' : `/${page}.html`);
        }
      });
    }
  }
};

// Initialize the app
const initApp = () => {
  // Determine initial page based on URL
  const path = window.location.pathname;
  const page = path === '/' || path === '/index.html' ? 'home' : 
               path === '/about.html' ? 'about' : 
               path === '/events.html' ? 'events' : 'home';
  
  // Render the initial page
  router.navigate(page);
  
  // Set up event delegation for navigation
  document.addEventListener('click', (e) => {
    // Handle navigation links
    if ((e.target.tagName === 'A' || e.target.closest('.logo')) && (e.target.dataset.page || e.target.closest('[data-page]')?.dataset.page)) {
      const page = e.target.dataset.page || e.target.closest('[data-page]').dataset.page;
      e.preventDefault();
      router.navigate(page);
      
      // Close mobile menu if open
      const mobileMenu = document.querySelector('.nav-list');
      const menuToggle = document.querySelector('.mobile-menu-toggle');
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    }
    
    // Handle mobile menu toggle
    if (e.target.closest('.mobile-menu-toggle')) {
      const toggle = e.target.closest('.mobile-menu-toggle');
      const navList = document.querySelector('.nav-list');
      toggle.classList.toggle('active');
      navList.classList.toggle('active');
    }
  });
  
  // Handle browser back/forward navigation
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.page) {
      router.navigate(e.state.page);
    } else {
      router.navigate('home');
    }
  });
};

// Home page specific animations
const initHomeAnimations = () => {
  // Header scroll effect
  const header = document.querySelector('.header');
  let lastScrollY = 0;
  
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Hide/show header on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 300) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
  });

  // Hero section animation with stagger
  const heroTimeline = gsap.timeline();
  heroTimeline
    .to('.hero-content', {
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.hero-title', {
      y: 50,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-subtitle', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.7')
    .from('.hero-buttons .btn', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=0.5');

  // Service cards animation with stagger
  gsap.utils.toArray('.service-card').forEach((card, index) => {
    gsap.fromTo(card, 
      {
        opacity: 0,
        y: 60,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'bottom 15%'
        }
      }
    );
  });

  // About section animations
  gsap.fromTo('.about-image', 
    {
      opacity: 0,
      x: -60,
      scale: 0.9
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-image',
        start: 'top 75%'
      }
    }
  );

  gsap.fromTo('.about-content', 
    {
      opacity: 0,
      x: 60
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 75%'
      }
    }
  );

  // Event cards animation with hover effect
  gsap.utils.toArray('.event-card').forEach((card, index) => {
    gsap.fromTo(card,
      {
        opacity: 0,
        y: 60,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%'
        }
      }
    );
  });
  
  // Parallax effect for hero image
  gsap.to('.hero-img', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
};

// Placeholder function no longer needed - using real stock photos
const createPlaceholders = () => {
  // Using stock photos instead of generated placeholders
};

// Initialize the application when DOM is loaded
window.addEventListener('DOMContentLoaded', initApp);