'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AboutContentAnimationProps {
  children: React.ReactNode;
}

export default function AboutContentAnimation({
  children,
}: AboutContentAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure ScrollTrigger is refreshed on mount
    ScrollTrigger.refresh();
    
    const ctx = gsap.context(() => {
      // Timeline items animation
      gsap.utils.toArray('.timeline-content').forEach((item) => {
        const element = item as HTMLElement;
        const isRight = element.closest('.timeline-item')?.classList.contains('timeline-right');
        gsap.from(element, {
          opacity: 0,
          x: isRight ? 50 : -50,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Mission cards animation - animate each card individually for better reliability
      gsap.utils.toArray('.mission-card').forEach((card, index) => {
        gsap.fromTo(card as HTMLElement, 
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card as HTMLElement,
              start: 'top 90%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
              refreshPriority: index,
            },
          }
        );
      });

      // Belief cards animation - animate each card individually for better reliability
      gsap.utils.toArray('.belief-card').forEach((card, index) => {
        gsap.fromTo(card as HTMLElement,
          {
            opacity: 0,
            scale: 0.95,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card as HTMLElement,
              start: 'top 90%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
              refreshPriority: index + 10, // Higher priority than mission cards
            },
          }
        );
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

      // Counter animation
      const counters = gsap.utils.toArray('.counter');
      counters.forEach((counter) => {
        const element = counter as HTMLElement;
        const target = parseInt(element.getAttribute('data-target') || '0');
        const obj = { value: 0 };
        
        gsap.to(obj, {
          value: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            once: true,
          },
          onUpdate: () => {
            element.textContent = Math.round(obj.value).toString();
          },
        });
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

      // Refresh ScrollTrigger after all animations are set up
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }, containerRef);

    // Handle window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}