'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ServicesAnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial state
    gsap.set('.service-card', {
      opacity: 0,
      y: 60,
      scale: 0.9,
    });

    // Animate cards on scroll
    gsap.to('.service-card', {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.service-times',
        start: 'top 80%',
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
