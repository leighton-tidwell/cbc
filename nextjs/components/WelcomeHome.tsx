'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function WelcomeHome() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll animation logic will be added with GSAP later
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      {/* Slide 1: Visual Welcome */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="relative">
            {/* Image Grid */}
            <div className="hidden md:block absolute inset-0">
              <Image
                src="/images/stock/sam-balye-WNVnnHHcBeM-unsplash.jpg"
                alt="Church community"
                width={500}
                height={600}
                className="absolute top-0 left-0 rounded-lg shadow-2xl"
              />
              <Image
                src="/images/stock/megan-allen-fx81JSLfyLU-unsplash.jpg"
                alt="Worship"
                width={300}
                height={400}
                className="absolute bottom-0 right-0 rounded-lg shadow-xl"
              />
            </div>
            
            {/* Mobile Images */}
            <div className="md:hidden grid grid-cols-2 gap-4 mb-8">
              <Image
                src="/images/stock/rosie-sun-rTwhmFSoXC8-unsplash.jpg"
                alt="Community"
                width={200}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
              <Image
                src="/images/stock/edwin-andrade-6liebVeAfrY-unsplash.jpg"
                alt="Fellowship"
                width={200}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center py-20 md:py-32">
              <div className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-medium mb-8">
                Est. 1965
              </div>
              <h1 className="font-heading font-black">
                <span className="block text-6xl md:text-8xl lg:text-9xl text-gray-800">Welcome</span>
                <span className="block text-6xl md:text-8xl lg:text-9xl text-primary -mt-4">Home</span>
              </h1>
              <p className="text-xl md:text-2xl text-text-light mt-6">Where faith meets family</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <span className="text-sm text-text-light">Scroll to explore</span>
            <div className="mt-2 w-6 h-10 border-2 border-gray-400 rounded-full mx-auto relative">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gray-400 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2: Church Information */}
      <div className="min-h-screen py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="mb-12">
                <span className="block text-2xl text-primary mb-2">A Place</span>
                <span className="block text-5xl md:text-6xl font-heading font-bold">To Belong</span>
              </h2>

              <div className="space-y-8">
                {/* Mission Block */}
                <div className="relative p-8 bg-gray-50 rounded-lg group hover:shadow-lg transition-shadow duration-default">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-text-light">
                    Spreading the good news of Jesus Christ to our community and helping people grow in their personal relationships with Him.
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-default origin-left" />
                </div>

                {/* Values Block */}
                <div className="relative p-8 bg-gray-50 rounded-lg group hover:shadow-lg transition-shadow duration-default">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-red-500">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Our Values</h3>
                  <p className="text-text-light">
                    We believe in being a church that makes a difference. A community that serves. A family that cares.
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-default origin-left" />
                </div>

                {/* Join Block */}
                <div className="relative p-8 bg-gray-50 rounded-lg group hover:shadow-lg transition-shadow duration-default">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-500">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Join Us</h3>
                  <p className="text-text-light">
                    Everyone is welcome at Calvary Baptist Church. Come as you are and experience the warmth of our church family.
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-default origin-left" />
                </div>
              </div>
            </div>

            {/* Right Content - Location Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-8 text-center border-b">
                <p className="text-sm text-text-light mb-2">Come as you are</p>
                <h3 className="text-3xl font-heading font-bold">Find Us</h3>
                <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
              </div>

              <div className="relative">
                <Image
                  src="/images/location.jpg"
                  alt="Church interior"
                  width={600}
                  height={400}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-8 text-white text-center w-full">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                    </svg>
                    <h4 className="text-2xl font-bold mb-1">506 Runnels St.</h4>
                    <p className="text-lg">Merkel, TX 79536</p>
                  </div>
                </div>
              </div>

              <div className="relative h-64">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.8977359749!2d-100.00806068481721!3d32.55584578103562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f9f5a0c5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2s506%20Runnels%20St%2C%20Merkel%2C%20TX%2079536!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus"
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <a 
                    href="https://goo.gl/maps/YourLocationHere" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-white text-primary py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-default"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M9 11H7a5 5 0 1 1 0-10h2m6 0h2a5 5 0 1 1 0 10h-2m-8-5h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}