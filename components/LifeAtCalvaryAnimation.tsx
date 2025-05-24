'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LifeAtCalvaryAnimationProps {
  children: React.ReactNode;
}

export default function LifeAtCalvaryAnimation({ children }: LifeAtCalvaryAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate decorative line
      gsap.from('.life-decoration > div', {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.life-decoration',
          start: 'top 85%',
          once: true,
        },
      });

      // Animate title with subtle effect
      gsap.from('.life-title', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.life-title',
          start: 'top 80%',
          once: true,
        },
      });

      // Animate subtitle
      gsap.from('.life-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.life-subtitle',
          start: 'top 85%',
          once: true,
        },
      });

      // Animate cards with refined stagger
      const cards = gsap.utils.toArray('.life-card');
      
      cards.forEach((card, index) => {
        gsap.from(card as Element, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card as Element,
            start: 'top 75%',
            once: true,
          },
        });
      });

      // Subtle pulse animation for first Wednesday badge
      gsap.to('.pulse-badge', {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      // CTA button entrance
      gsap.from('.life-cta', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.life-cta',
          start: 'top 85%',
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}