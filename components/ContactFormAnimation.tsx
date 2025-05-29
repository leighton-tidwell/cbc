'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContactFormAnimationProps {
  children: React.ReactNode;
}

export default function ContactFormAnimation({
  children,
}: ContactFormAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set('.contact-card', { opacity: 0, y: 50 });
      gsap.set('.contact-form', { opacity: 0, x: -50 });
      gsap.set('.map-section', { opacity: 0, x: 50 });
      gsap.set('.faq-item', { opacity: 0, y: 30 });

      // Contact cards animation
      ScrollTrigger.create({
        trigger: '.contact-cards',
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.contact-card', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
          });
        },
        once: true,
      });

      // Form section animation
      ScrollTrigger.create({
        trigger: '.form-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.contact-form', {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.out',
          });
          gsap.to('.map-section', {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.out',
            delay: 0.2,
          });
        },
        once: true,
      });

      // FAQ items animation
      ScrollTrigger.create({
        trigger: '.faq-grid',
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.faq-item', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
          });
        },
        once: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
