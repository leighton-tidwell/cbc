import { gsap } from 'gsap';

// Router to handle page navigation
class Router {
  constructor() {
    this.currentPage = 'home';
    this.routes = {};
  }

  register(routeName, handler) {
    this.routes[routeName] = handler;
  }

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

  init() {
    // Determine initial page based on URL
    const path = window.location.pathname;
    const page = path === '/' || path === '/index.html' ? 'home' : 
                 path === '/about.html' ? 'about' : 
                 path === '/events.html' ? 'events' : 'home';
    
    // Set up event delegation for navigation
    document.addEventListener('click', (e) => {
      // Handle navigation links
      if ((e.target.tagName === 'A' || e.target.closest('.logo')) && 
          (e.target.dataset.page || e.target.closest('[data-page]')?.dataset.page)) {
        const page = e.target.dataset.page || e.target.closest('[data-page]').dataset.page;
        e.preventDefault();
        this.navigate(page);
        
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
        this.navigate(e.state.page);
      } else {
        this.navigate('home');
      }
    });

    return page;
  }
}

export default new Router();