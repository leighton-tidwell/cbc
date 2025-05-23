'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useHeroAnimation } from '@/hooks/useGsapAnimations';

export default function Hero() {
  useHeroAnimation();

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-bg-color">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/location.jpg" 
          alt="Calvary Baptist Church Interior" 
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 z-10" />
      </div>
      
      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-16 pt-[120px]">
        <div className="hero-content max-w-4xl opacity-0">
          <Image 
            src="/images/logo.png" 
            alt="Calvary Baptist Church" 
            width={150}
            height={150}
            className="md:hidden mb-8 mx-auto drop-shadow-2xl"
            priority
          />
          <h1 className="hero-title font-heading font-black text-white text-5xl md:text-7xl lg:text-8xl leading-none mb-8 tracking-tight drop-shadow-lg">
            Welcome to Calvary Baptist Church
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl font-light text-white mb-12 max-w-2xl drop-shadow-md">
            Just ordinary people serving an extraordinary God!
          </p>
          
          {/* Buttons */}
          <div className="hero-buttons flex flex-wrap gap-4">
            <a 
              href="#services" 
              onClick={scrollToServices} 
              className="inline-block px-12 py-4 bg-primary text-white font-semibold uppercase tracking-widest text-sm rounded transition-all duration-default hover:bg-gray-dark hover:-translate-y-0.5 hover:shadow-lg"
            >
              Join Us This Sunday
            </a>
            <Link 
              href="/about" 
              className="inline-block px-12 py-4 bg-white/10 border-2 border-white text-white font-semibold uppercase tracking-widest text-sm rounded backdrop-blur-sm transition-all duration-default hover:bg-white hover:text-primary hover:-translate-y-0.5 hover:shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}