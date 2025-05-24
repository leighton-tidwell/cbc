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
      // Animate title
      gsap.from('.life-title', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.life-title',
          start: 'top 80%',
          once: true,
        },
      });

      // Animate cards with stagger
      gsap.from('.life-card', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          once: true,
        },
      });

      // Special animation for the fellowship meal card
      gsap.from('.life-card:first-child .group', {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.life-card:first-child',
          start: 'top 75%',
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}