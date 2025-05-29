'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function EventsHeroAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set('.hero-badge', { opacity: 0, y: 20 });
    gsap.set('.hero-title span', { opacity: 0, y: 50 });
    gsap.set('.hero-subtitle', { opacity: 0, y: 30 });
    gsap.set('.hero-stats .stat-item', { opacity: 0, scale: 0.8 });

    // Create timeline
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
    });

    // Animate elements in sequence
    tl.to('.hero-badge', {
      opacity: 1,
      y: 0,
      duration: 0.8,
    })
      .to(
        '.hero-title span',
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
        },
        '-=0.4'
      )
      .to(
        '.hero-subtitle',
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        '-=0.4'
      )
      .to(
        '.hero-stats .stat-item',
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
        },
        '-=0.4'
      );

    // Parallax effect for background orbs
    gsap.to('.absolute .animate-pulse', {
      y: -50,
      scrollTrigger: {
        trigger: 'section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
