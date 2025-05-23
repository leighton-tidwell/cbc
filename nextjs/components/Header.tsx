'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [isInitialized, setIsInitialized] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const getScreenSize = () => {
      const width = window.innerWidth;
      if (width < 480) return 'mobile';
      if (width < 768) return 'tablet';
      return 'desktop';
    };

    const getScrolled = () => window.scrollY > 50;

    // Initialize with correct values
    setScrolled(getScrolled());
    setScreenSize(getScreenSize());
    setIsInitialized(true);

    const handleScroll = () => {
      setScrolled(getScrolled());
    };

    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { href: '/', label: 'Home', page: 'home' },
    { href: '/about', label: 'About', page: 'about' },
    { href: '/events', label: 'Events', page: 'events' },
    { href: '/contact', label: 'Contact', page: 'contact' },
  ];

  // Determine logo size
  const getLogoSize = () => {
    if (screenSize === 'mobile') return 40;
    if (screenSize === 'tablet') return scrolled ? 48 : 80;
    return scrolled ? 56 : 180;
  };

  // Don't render until we know the correct initial state
  if (!isInitialized) {
    return null;
  }

  return (
    <header
      className={`fixed w-full top-0 z-[100] transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled && screenSize !== 'mobile'
          ? 'bg-white/[0.98] backdrop-blur-[20px] py-3 shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
          : screenSize === 'mobile'
            ? 'bg-transparent py-2'
            : screenSize === 'tablet'
              ? 'bg-transparent py-4'
              : 'bg-transparent py-8'
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/logo_2.png"
            alt="Calvary Baptist Church Logo"
            width={getLogoSize()}
            height={getLogoSize()}
            className={`transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 ${
              !scrolled && screenSize === 'desktop'
                ? 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] group-hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]'
                : 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] group-hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]'
            }`}
            priority
          />
        </Link>
        <nav>
          <button
            className={`md:hidden flex flex-col gap-1 p-2 z-[101] ${
              mobileMenuOpen ? 'fixed right-4' : ''
            }`}
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                scrolled && !mobileMenuOpen && screenSize !== 'mobile'
                  ? 'bg-primary'
                  : 'bg-white'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                scrolled && !mobileMenuOpen && screenSize !== 'mobile'
                  ? 'bg-primary'
                  : 'bg-white'
              } ${mobileMenuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                scrolled && !mobileMenuOpen && screenSize !== 'mobile'
                  ? 'bg-primary'
                  : 'bg-white'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
            ></span>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.page}>
                <Link
                  href={item.href}
                  className={`font-medium px-4 py-2 relative uppercase text-sm tracking-[0.05em] transition-colors duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${!scrolled ? 'text-white hover:text-white hover:opacity-90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]' : 'text-text-color hover:text-primary'}
                    ${pathname === item.href ? (!scrolled ? 'text-white' : 'text-primary') : ''}
                    before:content-[""] before:absolute before:bottom-[-4px] before:left-1/2 before:-translate-x-1/2 before:w-4/5 before:h-0.5
                    ${!scrolled ? 'before:bg-white' : 'before:bg-primary'}
                    before:scale-x-0 before:transition-transform before:duration-[300ms] before:ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${pathname === item.href ? 'before:scale-x-100' : 'hover:before:scale-x-100'}
                  `}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden fixed top-0 w-full h-screen bg-white z-40 transition-[right] duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[-4px_0_20px_rgba(0,0,0,0.1)] ${
              mobileMenuOpen ? 'right-0' : 'right-[-100%]'
            }`}
          >
            <ul className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item) => (
                <li key={item.page}>
                  <Link
                    href={item.href}
                    className={`text-2xl font-medium p-8 transition-colors duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] text-text-color hover:text-primary drop-shadow-none
                      ${pathname === item.href ? 'text-primary' : ''}
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
