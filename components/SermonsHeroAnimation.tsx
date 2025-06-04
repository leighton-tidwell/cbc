'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

interface SermonsHeroAnimationProps {
  children: React.ReactNode;
}

export default function SermonsHeroAnimation({
  children,
}: SermonsHeroAnimationProps) {
  useEffect(() => {
    // Set initial states
    gsap.set('.hero-title', { opacity: 0, y: 30 });
    gsap.set('.hero-subtitle', { opacity: 0, y: 20 });

    const tl = gsap.timeline();

    tl.to('.hero-title', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    }).to(
      '.hero-subtitle',
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.6'
    );
  }, []);

  return <>{children}</>;
}
