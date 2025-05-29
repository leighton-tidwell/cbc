'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AboutHeroAnimationProps {
  children: React.ReactNode;
}

export default function AboutHeroAnimation({
  children,
}: AboutHeroAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Set initial states for stats
      gsap.set('.about-hero-stats .stat-item', { opacity: 0, scale: 0.8 });

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
        .to(
          '.about-hero-stats .stat-item',
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
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

      // Parallax effect for background orbs
      gsap.to('.absolute .animate-pulse', {
        y: -50,
        scrollTrigger: {
          trigger: '.about-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
