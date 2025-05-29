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
    // Set initial states for all elements
    gsap.set('.hero-content', { opacity: 0, y: 50 });
    gsap.set('.hero-logo-mobile', { opacity: 0, scale: 0.8 });
    gsap.set('.hero-title', { opacity: 0, y: 30 });
    gsap.set('.hero-subtitle', { opacity: 0, y: 20 });
    gsap.set('.hero-buttons > *', { opacity: 0, y: 20 });

    const tl = gsap.timeline();

    tl.to('.hero-content', {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
    })
      .to(
        '.hero-logo-mobile',
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
        },
        '-=0.8'
      )
      .to(
        '.hero-title',
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .to(
        '.hero-subtitle',
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .to(
        '.hero-buttons > *',
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.out',
        },
        '-=0.4'
      );
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
          once: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
          once: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [cardClass]);
}

export const useWelcomeHomeAnimation = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Existing welcome home animations
    });

    return () => ctx.revert();
  }, []);
};

export const useServicesAnimation = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Existing services animations
    });

    return () => ctx.revert();
  }, []);
};

export const useLatestSermonAnimation = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Existing sermon animations
    });

    return () => ctx.revert();
  }, []);
};

export const useEventsAnimation = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Existing events animations
    });

    return () => ctx.revert();
  }, []);
};

export const useLifeAtCalvaryAnimation = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Existing life at calvary animations
    });

    return () => ctx.revert();
  }, []);
};

export const useAboutHeroAnimation = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Hero background parallax
      gsap.to('.about-hero-bg', {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Hero content animation
      tl.from('.about-hero-badge', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
        .from(
          '.about-hero-title span',
          {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
          },
          '-=0.3'
        )
        .from(
          '.about-hero-subtitle',
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.about-hero-cta',
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
          },
          '-=0.3'
        );
    });

    return () => ctx.revert();
  }, []);
};

export const useAboutContentAnimation = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Timeline items animation
      gsap.utils.toArray('.timeline-item').forEach((item) => {
        const element = item as HTMLElement;
        gsap.from(element, {
          opacity: 0,
          x: element.classList.contains('timeline-right') ? 50 : -50,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Mission cards animation
      gsap.from('.mission-card', {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.mission-grid',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      // Belief cards animation
      gsap.from('.belief-card', {
        opacity: 0,
        scale: 0.95,
        stagger: {
          from: 'random',
          amount: 0.5,
        },
        duration: 0.6,
        scrollTrigger: {
          trigger: '.beliefs-grid',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      // Team members animation
      gsap.from('.team-member', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.team-grid',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      // CTA section animation
      gsap.from('.about-cta-content > *', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.about-cta',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);
};
