import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Header scroll animation
export const initHeaderScroll = () => {
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
};

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
