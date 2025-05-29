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
    <section className="hero relative h-screen min-h-[600px] flex items-center justify-start overflow-hidden bg-bg-color">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/location.jpg"
          alt="Calvary Baptist Church Interior"
          fill
          priority
          className="hero-img object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 z-[1]" />
      </div>

      {/* Content Container */}
      <div
        className="container relative z-[2] w-full max-w-[1200px] mx-auto px-4 flex items-center h-full pt-[120px]
        md:px-8 lg:px-16
        max-[768px]:px-8 max-[768px]:pb-16 max-[768px]:items-center"
      >
        <div
          className="hero-content max-w-[800px] w-full ml-0 px-8
          max-[768px]:text-center"
        >
          <div className="hero-logo-mobile hidden max-[768px]:block mb-8 mx-auto w-[150px] h-[150px] relative">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-full shadow-2xl"></div>
            <Image
              src="/images/logo_4.png"
              alt="Calvary Baptist Church"
              width={150}
              height={150}
              className="relative z-10 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
              priority
            />
          </div>
          <h1
            className="hero-title font-heading font-black text-white leading-none mb-8 tracking-[-0.03em] drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)]
            text-[clamp(3rem,9vw,5.5rem)]
            max-[768px]:text-[clamp(2.25rem,10vw,3.5rem)]
            max-[480px]:text-[clamp(2rem,10vw,3rem)]"
          >
            Welcome to Calvary Baptist Church
          </h1>
          <p
            className="hero-subtitle font-light text-white mb-12 max-w-[600px] tracking-[0.01em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]
            text-[clamp(1.25rem,3vw,1.875rem)]
            max-[768px]:text-[clamp(1.125rem,4vw,1.5rem)]
            max-[768px]:mx-auto"
          >
            Just ordinary people serving an extraordinary God!
          </p>

          {/* Buttons */}
          <div
            className="hero-buttons flex gap-4 justify-start flex-wrap
            max-[768px]:flex-col max-[768px]:items-center max-[768px]:w-full max-[768px]:justify-center"
          >
            <a
              href="#services"
              onClick={scrollToServices}
              className="btn inline-block px-[72px] py-[20px] bg-primary text-white font-semibold uppercase tracking-[0.1em] text-sm rounded cursor-pointer transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden border-none font-primary
                hover:bg-gray-dark hover:-translate-y-[2px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]
                max-[768px]:w-full max-[768px]:max-w-[280px] max-[768px]:px-8 max-[768px]:py-4"
            >
              Join Us This Sunday
            </a>
            <Link
              href="/about"
              className="btn btn-outline inline-block px-[72px] py-[20px] bg-white/10 border-2 border-white text-white font-semibold uppercase tracking-[0.1em] text-sm rounded backdrop-blur-[10px] cursor-pointer transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden font-primary shadow-[0_2px_8px_rgba(0,0,0,0.2)]
                hover:bg-white hover:text-primary hover:border-white hover:-translate-y-[2px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]
                max-[768px]:w-full max-[768px]:max-w-[280px] max-[768px]:px-8 max-[768px]:py-4"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
