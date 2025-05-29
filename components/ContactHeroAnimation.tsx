'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface ContactHeroAnimationProps {
  children: React.ReactNode;
}

export default function ContactHeroAnimation({
  children,
}: ContactHeroAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Hero content animation
      tl.from('.hero-badge', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
        .from(
          '.hero-title span',
          {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
          },
          '-=0.3'
        )
        .from(
          '.hero-subtitle',
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
          },
          '-=0.4'
        );

      // Animate background orbs
      gsap.to('.animate-pulse', {
        scale: 1.1,
        opacity: 0.8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: {
          each: 0.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
