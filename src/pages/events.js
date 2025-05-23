import { createHeader, updateActiveNavLink } from '../components/header.js';
import { createFooter } from '../components/footer.js';
import { createEventDetails } from '../components/event-details.js';
import { createWeeklyEvents } from '../components/weekly-events.js';
import { initHeaderScroll, animateEventCards } from '../utils/animations.js';
import { gsap } from 'gsap';

export const renderEventsPage = () => {
  const eventsContent = `
    ${createHeader()}
    
    <!-- Events Hero Section -->
    <section class="section events-page">
      <div class="container">
        <h1 class="section-title">Join Us</h1>
        <p class="text-center" style="font-size: 1.125rem; opacity: 0.8; margin-bottom: var(--spacing-xl);">
          Experience community and grow in faith through our weekly gatherings and special events.
        </p>
        
        <!-- Featured Event -->
        ${createEventDetails(
          'Sunday Morning Service',
          'Every Sunday at 10:00 AM',
          'Join us each Sunday morning for worship, prayer, and a message from Pastor Colton Grisham. Our Sunday service is a time to come together as a community to worship God and grow in our faith.',
          '/src/assets/images/stock/sam-balye-WNVnnHHcBeM-unsplash.jpg',
          "Whether you're a long-time member or visiting for the first time, you'll find a warm welcome at our Sunday service. Come as you are!"
        )}
        
        <!-- Regular Events Section -->
        ${createWeeklyEvents()}
      </div>
    </section>
    
    ${createFooter()}
  `;

  // Update document content
  document.querySelector('#app').innerHTML = eventsContent;

  // Update active nav link
  updateActiveNavLink('events');

  // Initialize animations
  initHeaderScroll();

  // Event details animation
  gsap.utils.toArray('.event-details').forEach((detail) => {
    gsap.fromTo(
      detail,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: detail,
          start: 'top 80%',
        },
      }
    );
  });

  animateEventCards();
};
