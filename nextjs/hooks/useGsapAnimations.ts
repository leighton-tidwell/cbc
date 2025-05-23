import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useHeaderAnimation() {
  useEffect(() => {
    // Header animations are handled with CSS classes in the Header component
    // This hook can be extended for more complex GSAP animations if needed
  }, []);
}

export function useHeroAnimation() {
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from('.hero-content', {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power3.out'
    })
    .from('.hero-logo-mobile', {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.8')
    .from('.hero-title', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-subtitle', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-buttons > *', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=0.4');
  }, []);
}

export function useSectionAnimation(sectionClass: string) {
  useEffect(() => {
    const elements = gsap.utils.toArray(`.${sectionClass}`);
    
    elements.forEach((element) => {
      gsap.from(element as HTMLElement, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: element as HTMLElement,
          start: 'top 80%',
          once: true
        }
      });
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [sectionClass]);
}

export function useCardAnimation(cardClass: string) {
  useEffect(() => {
    const cards = gsap.utils.toArray(`.${cardClass}`);
    
    cards.forEach((card, index) => {
      gsap.from(card as HTMLElement, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: 'top 85%',
          once: true
        }
      });
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [cardClass]);
}