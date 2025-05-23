import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// About section animations
export const animateAboutSection = () => {
  gsap.fromTo(
    '.about-image',
    {
      opacity: 0,
      x: -60,
      scale: 0.9,
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-image',
        start: 'top 75%',
      },
    }
  );

  gsap.fromTo(
    '.about-content',
    {
      opacity: 0,
      x: 60,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 75%',
      },
    }
  );
};
