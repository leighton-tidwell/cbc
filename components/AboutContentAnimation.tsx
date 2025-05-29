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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}