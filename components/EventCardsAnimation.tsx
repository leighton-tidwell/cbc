'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function EventCardsAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Featured event card animation
    gsap.fromTo(
      '.featured-event-card',
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.featured-event-card',
          start: 'top 85%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Event grid cards animation
    gsap.utils.toArray('.event-card').forEach((card, index) => {
      gsap.fromTo(
        card as HTMLElement,
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card as HTMLElement,
            start: 'top 90%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
