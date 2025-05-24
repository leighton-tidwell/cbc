'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface EventsAnimationWrapperProps {
  children: React.ReactNode;
}

export default function EventsAnimationWrapper({
  children,
}: EventsAnimationWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Decorative dots animation
      gsap.from('.events-decoration > div', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.events-decoration',
          start: 'top 85%',
          once: true,
        },
      });

      // Title animation with split text effect
      const titleWords = document.querySelectorAll('.events-title');
      titleWords.forEach((title) => {
        gsap.from(title, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            once: true,
          },
        });

        // Animate the underline
        gsap.from(title.querySelector('::after'), {
          scaleX: 0,
          duration: 0.8,
          delay: 0.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            once: true,
          },
        });
      });

      // Subtitle animation
      gsap.from('.events-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.events-subtitle',
          start: 'top 85%',
          once: true,
        },
      });

      // Background pattern animation
      gsap.to('.events-bg-circle-1', {
        x: 50,
        y: -30,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'none',
      });

      gsap.to('.events-bg-circle-2', {
        x: -40,
        y: 40,
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: 'none',
      });

      // Cards entrance with more dynamic effects
      const cards = gsap.utils.toArray('.event-card');

      cards.forEach((card, index) => {
        const cardElement = card as HTMLElement;

        // Initial state
        gsap.set(cardElement, {
          y: 80,
          opacity: 0,
          rotationY: -30,
          transformPerspective: 1000,
        });

        // Animate in
        gsap.to(cardElement, {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardElement,
            start: 'top 75%',
            once: true,
          },
        });

        // Date badge animation - subtle fade and scale
        const dateBadge = cardElement.querySelector('.date-badge');
        if (dateBadge) {
          gsap.from(dateBadge, {
            scale: 0.9,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.15 + 0.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardElement,
              start: 'top 75%',
              once: true,
            },
          });
        }

        // Hover animation setup
        cardElement.addEventListener('mouseenter', () => {
          gsap.to(cardElement, {
            y: -5,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        cardElement.addEventListener('mouseleave', () => {
          gsap.to(cardElement, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });

      // Bottom accent line animation on cards
      gsap.utils.toArray('.event-card .accent-line').forEach((line, index) => {
        gsap.set(line as Element, {
          scaleX: 0,
          transformOrigin: 'left center',
        });

        ScrollTrigger.create({
          trigger: line as Element,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(line as Element, {
              scaleX: 1,
              duration: 0.6,
              delay: index * 0.1,
              ease: 'power2.out',
            });
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
