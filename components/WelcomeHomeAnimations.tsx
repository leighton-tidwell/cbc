'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface WelcomeHomeAnimationsProps {
  children: ReactNode;
}

export default function WelcomeHomeAnimations({
  children,
}: WelcomeHomeAnimationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Slide 1 animations - matching original welcome-home.js
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.welcome-slide[data-slide="1"]',
          start: 'top 80%',
          end: 'center center',
          toggleActions: 'play none none reverse',
        },
      });

      tl1
        .to('.welcome-img-main', {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
        })
        .to(
          '.welcome-img-accent',
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=0.8'
        )
        .to(
          '.welcome-img-mobile-1',
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=1'
        )
        .to(
          '.welcome-img-mobile-2',
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=0.8'
        )
        .to(
          '.welcome-badge',
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power3.out',
          },
          '-=1.2'
        )
        .to(
          '.title-line-1',
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=1.1'
        )
        .to(
          '.title-line-2',
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=1.0'
        )
        .to(
          '.welcome-subtitle',
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power3.out',
          },
          '-=0.9'
        )
        .to(
          '.scroll-indicator',
          {
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.4'
        );

      // Parallax effect for images
      gsap.to('.welcome-img-main', {
        y: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: '.welcome-slide[data-slide="1"]',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.welcome-img-accent', {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.welcome-slide[data-slide="1"]',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Slide 2 animations
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.welcome-slide[data-slide="2"]',
          start: 'top 80%',
          end: 'center center',
          toggleActions: 'play none none reverse',
        },
      });

      tl2
        .to('.title-accent', {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
        .to(
          '.title-main',
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .to(
          '.info-block',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .to(
          '.location-card',
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.8'
        );

      // Scroll-triggered fade for scroll indicator
      gsap.to('.scroll-indicator', {
        opacity: 0,
        scrollTrigger: {
          trigger: '.welcome-slide[data-slide="1"]',
          start: 'bottom 80%',
          end: 'bottom 50%',
          scrub: true,
        },
      });

      // Icon hover animations
      const infoBlocks = gsap.utils.toArray('.info-block');
      (infoBlocks as HTMLElement[]).forEach((block) => {
        const icon = block.querySelector('.block-icon');

        block.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        block.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
