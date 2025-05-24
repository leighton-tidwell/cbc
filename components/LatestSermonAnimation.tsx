'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LatestSermonAnimationProps {
  children: React.ReactNode;
}

export default function LatestSermonAnimation({ children }: LatestSermonAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate decorative line
      gsap.from('.sermon-decoration > div', {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.sermon-decoration',
          start: 'top 85%',
          once: true,
        },
      });

      // Animate title
      gsap.from('.sermon-title', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.sermon-title',
          start: 'top 80%',
          once: true,
        },
      });

      // Animate subtitle
      gsap.from('.sermon-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.sermon-subtitle',
          start: 'top 85%',
          once: true,
        },
      });

      // Animate video container
      gsap.from('.sermon-video', {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.sermon-video',
          start: 'top 70%',
          once: true,
        },
      });

      // Animate info section
      gsap.from('.sermon-info > *', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.sermon-info',
          start: 'top 80%',
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}