// Main application file
import router from './utils/router.js';
import { renderHomePage } from './pages/home.js';
import { renderAboutPage } from './pages/about.js';
import { renderEventsPage } from './pages/events.js';

// Initialize the application
const initApp = () => {
  // Register routes
  router.register('home', renderHomePage);
  router.register('about', renderAboutPage);
  router.register('events', renderEventsPage);

  // Initialize router and get initial page
  const initialPage = router.init();

  // Navigate to initial page
  router.navigate(initialPage);
};

// Initialize when DOM is loaded
window.addEventListener('DOMContentLoaded', initApp);

export default initApp;
