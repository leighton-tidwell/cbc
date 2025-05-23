import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const renderAboutPage = () => {
  const aboutContent = `
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
            <li><a href="#" class="nav-link" data-page="home">Home</a></li>
            <li><a href="#" class="nav-link active" data-page="about">About</a></li>
            <li><a href="#" class="nav-link" data-page="events">Events</a></li>
            <li><a href="#" class="nav-link" data-page="contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

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

    <!-- Leadership Section -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Our Leadership</h2>
        <p class="text-center" style="font-size: 1.125rem; opacity: 0.8; margin-bottom: var(--spacing-xl);">We are all just ordinary people serving an extraordinary God.</p>
        
        <div class="staff-grid">
          <div class="staff-card">
            <img src="images/staff-placeholder-1.jpg" alt="Colton Grisham" class="staff-image">
            <h3 class="staff-name">Colton Grisham</h3>
            <p class="staff-position">Lead Pastor</p>
          </div>
          
          <div class="staff-card">
            <img src="images/staff-placeholder-2.jpg" alt="Dusty Grun" class="staff-image">
            <h3 class="staff-name">Dusty Grun</h3>
            <p class="staff-position">Associate Pastor</p>
          </div>
          
          <div class="staff-card">
            <img src="images/staff-placeholder-3.jpg" alt="Bo Martin" class="staff-image">
            <h3 class="staff-name">Bo Martin</h3>
            <p class="staff-position">Youth Leader</p>
          </div>
          
          <div class="staff-card">
            <img src="images/staff-placeholder-4.jpg" alt="Cutter Grisham" class="staff-image">
            <h3 class="staff-name">Cutter Grisham</h3>
            <p class="staff-position">Youth Leader</p>
          </div>
          
          <div class="staff-card">
            <img src="images/staff-placeholder-5.jpg" alt="Jovonna Duncan" class="staff-image">
            <h3 class="staff-name">Jovonna Duncan</h3>
            <p class="staff-position">Children's Church Director</p>
          </div>
          
          <div class="staff-card">
            <img src="images/staff-placeholder-6.jpg" alt="Tara Martin" class="staff-image">
            <h3 class="staff-name">Tara Martin</h3>
            <p class="staff-position">Administrative Assistant</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Elders Section -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Our Elders</h2>
        
        <div class="staff-grid">
          <div class="staff-card">
            <img src="images/elder-placeholder-1.jpg" alt="Robert Walker" class="staff-image">
            <h3 class="staff-name">Robert Walker</h3>
            <p class="staff-position">Elder</p>
          </div>
          
          <div class="staff-card">
            <img src="images/elder-placeholder-2.jpg" alt="Dwayne Freeman" class="staff-image">
            <h3 class="staff-name">Dwayne Freeman</h3>
            <p class="staff-position">Elder</p>
          </div>
          
          <div class="staff-card">
            <img src="images/elder-placeholder-3.jpg" alt="Larry Hewitt" class="staff-image">
            <h3 class="staff-name">Larry Hewitt</h3>
            <p class="staff-position">Elder</p>
          </div>
          
          <div class="staff-card">
            <img src="images/elder-placeholder-4.jpg" alt="Clinton McKeehan" class="staff-image">
            <h3 class="staff-name">Clinton McKeehan</h3>
            <p class="staff-position">Elder</p>
          </div>
          
          <div class="staff-card">
            <img src="images/elder-placeholder-5.jpg" alt="Jimmy Don Rogers" class="staff-image">
            <h3 class="staff-name">Jimmy Don Rogers</h3>
            <p class="staff-position">Elder</p>
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

  // Update document content
  document.querySelector('#app').innerHTML = aboutContent;
  
  // Initialize animations
  initAboutAnimations();
  
  // Create placeholder images
  createStaffPlaceholders();
};

const initAboutAnimations = () => {
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

  // Staff card animations with stagger
  gsap.utils.toArray('.staff-card').forEach((card, index) => {
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

  // Mobile menu handling
  document.addEventListener('click', (e) => {
    if (e.target.closest('.mobile-menu-toggle')) {
      const toggle = e.target.closest('.mobile-menu-toggle');
      const navList = document.querySelector('.nav-list');
      toggle.classList.toggle('active');
      navList.classList.toggle('active');
    }
  });
};

const createStaffPlaceholders = () => {
  // Function to create canvas-based placeholder images for staff
  const createStaffPlaceholder = (filename, name) => {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    const ctx = canvas.getContext('2d');
    
    // Light background
    ctx.fillStyle = '#f8f8f8';
    ctx.fillRect(0, 0, 300, 300);
    
    // Add subtle gradient overlay
    const gradient = ctx.createRadialGradient(150, 150, 0, 150, 150, 150);
    gradient.addColorStop(0, 'rgba(115, 115, 115, 0.1)');
    gradient.addColorStop(1, 'rgba(115, 115, 115, 0.2)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 300, 300);
    
    // Add circular background for initials
    ctx.fillStyle = '#737373';
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, 2 * Math.PI);
    ctx.fill();
    
    // Add text (initials)
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 56px Montserrat, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Get initials from name
    const initials = name.split(' ').map(word => word[0]).join('');
    ctx.fillText(initials, 150, 150);
    
    // Convert to data URL
    const dataUrl = canvas.toDataURL('image/jpeg');
    
    // Update image elements
    const imgElements = document.querySelectorAll(`img[src="images/${filename}"]`);
    imgElements.forEach(img => {
      img.src = dataUrl;
    });
  };
  
  // Create staff placeholders
  createStaffPlaceholder('staff-placeholder-1.jpg', 'Colton Grisham');
  createStaffPlaceholder('staff-placeholder-2.jpg', 'Dusty Grun');
  createStaffPlaceholder('staff-placeholder-3.jpg', 'Bo Martin');
  createStaffPlaceholder('staff-placeholder-4.jpg', 'Cutter Grisham');
  createStaffPlaceholder('staff-placeholder-5.jpg', 'Jovonna Duncan');
  createStaffPlaceholder('staff-placeholder-6.jpg', 'Tara Martin');
  
  // Create elder placeholders
  createStaffPlaceholder('elder-placeholder-1.jpg', 'Robert Walker');
  createStaffPlaceholder('elder-placeholder-2.jpg', 'Dwayne Freeman');
  createStaffPlaceholder('elder-placeholder-3.jpg', 'Larry Hewitt');
  createStaffPlaceholder('elder-placeholder-4.jpg', 'Clinton McKeehan');
  createStaffPlaceholder('elder-placeholder-5.jpg', 'Jimmy Don Rogers');
};