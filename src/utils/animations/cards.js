import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Service cards animation
export const animateServiceCards = () => {
  gsap.utils.toArray('.service-card').forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 60,
        scale: 0.9,
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
          end: 'bottom 15%',
        },
      }
    );
  });
};

// Event cards animation
export const animateEventCards = () => {
  gsap.utils.toArray('.event-card').forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
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
          start: 'top 85%',
        },
      }
    );
  });
};

// Staff cards animation
export const animateStaffCards = () => {
  gsap.utils.toArray('.staff-card').forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
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
          start: 'top 85%',
        },
      }
    );
  });
};
