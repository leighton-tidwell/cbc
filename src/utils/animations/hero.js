import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Hero animations
export const animateHero = () => {
  const heroTimeline = gsap.timeline();
  heroTimeline
    .to('.hero-content', {
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    })
    .from(
      '.hero-title',
      {
        y: 50,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.5'
    )
    .from(
      '.hero-subtitle',
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.7'
    )
    .from(
      '.hero-buttons .btn',
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
      },
      '-=0.5'
    );

  // Parallax effect for hero image
  gsap.to('.hero-img', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
};
