import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const renderEventsPage = () => {
  const eventsContent = `
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
            <li><a href="#" class="nav-link" data-page="about">About</a></li>
            <li><a href="#" class="nav-link active" data-page="events">Events</a></li>
            <li><a href="#" class="nav-link" data-page="contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Events Hero Section -->
    <section class="section events-page">
      <div class="container">
        <h1 class="section-title">Join Us</h1>
        <p class="text-center" style="font-size: 1.125rem; opacity: 0.8; margin-bottom: var(--spacing-xl);">Experience community and grow in faith through our weekly gatherings and special events.</p>
        
        <!-- Featured Event -->
        <div class="event-details">
          <div>
            <img src="/src/assets/images/stock/sam-balye-WNVnnHHcBeM-unsplash.jpg" alt="Sunday Service" class="event-details-image">
          </div>
          <div class="event-details-content">
            <h2 class="event-details-title">Sunday Morning Service</h2>
            <p class="event-details-date">Every Sunday at 10:00 AM</p>
            <p class="event-details-description">
              Join us each Sunday morning for worship, prayer, and a message from Pastor Colton Grisham. 
              Our Sunday service is a time to come together as a community to worship God and grow in our faith.
            </p>
            <p class="event-details-description">
              Whether you're a long-time member or visiting for the first time, you'll find a warm welcome at our Sunday service.
              Come as you are!
            </p>
          </div>
        </div>
        
        <!-- Regular Events Section -->
        <h2 class="section-title">Weekly Schedule</h2>
        
        <div class="event-cards">
          <div class="event-card">
            <img src="/src/assets/images/stock/rod-long-DRgrzQQsJDA-unsplash.jpg" alt="Adult Sunday School" class="event-image">
            <div class="event-content">
              <h3 class="event-title">Adult Sunday School</h3>
              <p class="event-date">Sundays at 9:00 AM</p>
              <p class="event-description">Adult Sunday School classes for all stages of life and faith.</p>
            </div>
          </div>
          
          <div class="event-card">
            <img src="/src/assets/images/stock/dnk-photo-PdXqqLO6jtw-unsplash.jpg" alt="Young Adult Sunday School" class="event-image">
            <div class="event-content">
              <h3 class="event-title">Young Adult Sunday School</h3>
              <p class="event-date">Sundays at 9:00 AM</p>
              <p class="event-description">Sunday School specifically designed for young adults.</p>
            </div>
          </div>
          
          <div class="event-card">
            <img src="/src/assets/images/stock/johannes-krupinski-wNjYsXOILEI-unsplash.jpg" alt="Emerging Adulthood Class" class="event-image">
            <div class="event-content">
              <h3 class="event-title">Emerging Adulthood Class</h3>
              <p class="event-date">Sundays at 9:00 AM</p>
              <p class="event-description">Class focused on those transitioning to adulthood.</p>
            </div>
          </div>
          
          <div class="event-card">
            <img src="/src/assets/images/stock/megan-allen-fx81JSLfyLU-unsplash.jpg" alt="Children's Church" class="event-image">
            <div class="event-content">
              <h3 class="event-title">Children's Church</h3>
              <p class="event-date">Sundays at 9:00 AM - 11:00 AM</p>
              <p class="event-description">Fun and engaging Bible teachings for children.</p>
            </div>
          </div>
          
          <div class="event-card">
            <img src="/src/assets/images/stock/vince-fleming-gssVHlGhisQ-unsplash.jpg" alt="Wednesday Night Service" class="event-image">
            <div class="event-content">
              <h3 class="event-title">Wednesday Night Service</h3>
              <p class="event-date">Wednesdays at 7:00 PM</p>
              <p class="event-description">Join us for that midweek refuel with classes for every age!</p>
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

  // Update document content
  document.querySelector('#app').innerHTML = eventsContent;
  
  // Initialize animations
  initEventsAnimations();
  
  // Create placeholder images
  createEventPlaceholders();
};

const initEventsAnimations = () => {
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

  // Event details animation
  gsap.utils.toArray('.event-details').forEach(detail => {
    gsap.fromTo(detail,
      {
        opacity: 0,
        y: 60
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: detail,
          start: 'top 80%'
        }
      }
    );
  });

  // Event cards animation with stagger
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

const createEventPlaceholders = () => {
  // Function to create canvas-based placeholder images for events
  const createEventPlaceholder = (filename, title) => {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');
    
    // Light background
    ctx.fillStyle = '#f8f8f8';
    ctx.fillRect(0, 0, 600, 400);
    
    // Add gradient overlay
    const gradient = ctx.createLinearGradient(0, 0, 600, 400);
    gradient.addColorStop(0, 'rgba(115, 115, 115, 0.1)');
    gradient.addColorStop(1, 'rgba(115, 115, 115, 0.2)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 400);
    
    // Add geometric shapes for visual interest
    ctx.fillStyle = 'rgba(115, 115, 115, 0.1)';
    ctx.beginPath();
    ctx.arc(450, 300, 150, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(115, 115, 115, 0.05)';
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, 2 * Math.PI);
    ctx.fill();
    
    // Add text
    ctx.fillStyle = '#737373';
    ctx.font = 'bold 36px Montserrat, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Add event title, breaking into multiple lines if needed
    const words = title.split(' ');
    let line = '';
    let y = 200;
    const lineHeight = 40;
    
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      if (n === words.length - 1 || testLine.length > 20) {
        ctx.fillText(line, 300, y);
        line = words[n] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    if (line) {
      ctx.fillText(line, 300, y);
    }
    
    // Convert to data URL
    const dataUrl = canvas.toDataURL('image/jpeg');
    
    // Update image elements
    const imgElements = document.querySelectorAll(`img[src="images/${filename}"]`);
    imgElements.forEach(img => {
      img.src = dataUrl;
    });
  };
  
  // Create event placeholders
  createEventPlaceholder('young-adult-placeholder.jpg', 'Young Adult Sunday School');
  createEventPlaceholder('emerging-adult-placeholder.jpg', 'Emerging Adulthood Class');
  createEventPlaceholder('childrens-church-placeholder.jpg', 'Children\'s Church');
};