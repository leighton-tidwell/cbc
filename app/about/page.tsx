import Image from 'next/image';
import Link from 'next/link';
import StaffSection from '@/components/StaffSection';
import AboutHeroAnimation from '@/components/AboutHeroAnimation';
import AboutContentAnimation from '@/components/AboutContentAnimation';
import WatermarkPattern from '@/components/WatermarkPattern';

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <AboutHeroAnimation>
        <section className="about-hero relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Parallax */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/stock/sam-balye-WNVnnHHcBeM-unsplash.jpg"
              alt="Church Community"
              fill
              priority
              className="about-hero-bg object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-[1]" />
          </div>

          {/* Hero Content */}
          <div className="relative z-[2] max-w-[1200px] mx-auto px-4 text-center">
            <div className="about-hero-badge inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-8 border border-white/10">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">EST. 1965 • SERVING FOR 58+ YEARS</span>
            </div>
            
            <h1 className="about-hero-title font-heading text-white mb-8">
              <span className="block text-[clamp(2.5rem,6vw,4rem)] font-semibold uppercase tracking-[0.2em] text-white/80 mb-2">Discover</span>
              <span className="block text-[clamp(4rem,12vw,8rem)] font-black leading-[0.9] tracking-[-0.03em]">
                <span className="text-white">Our </span>
                <span className="text-primary italic font-heading">Story</span>
              </span>
            </h1>
            
            <p className="about-hero-subtitle text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Just ordinary people serving an extraordinary God, building a legacy of faith, hope, and love in our community for over half a century.
            </p>

            <div className="about-hero-cta">
              <a
                href="#our-story"
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-lg"
              >
                Explore Our Journey
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>
      </AboutHeroAnimation>

      <AboutContentAnimation>
        {/* Our Story Timeline Section */}
        <section id="our-story" className="py-24 md:py-32 bg-white relative">
          <div className="absolute inset-0 opacity-[0.15]">
            <WatermarkPattern />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-color mb-6">
                A Legacy of Faith
              </h2>
              <p className="text-xl text-text-light max-w-3xl mx-auto">
                Our journey began over half a century ago with a simple mission: to share God&apos;s love with our community.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-12 md:space-y-24">
                {/* 1965 */}
                <div className="timeline-item timeline-left relative">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="timeline-content text-center md:text-right bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                      <div className="inline-block px-6 py-3 bg-primary text-white rounded-full font-bold mb-4 shadow-md">
                        1965
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-3 text-gray-900">The Beginning</h3>
                      <p className="text-gray-700 leading-relaxed">
                        A small group of faithful believers gathered to establish Calvary Baptist Church, driven by a vision to create a place where everyone could experience God&apos;s love.
                      </p>
                    </div>
                    <div className="hidden md:block"></div>
                  </div>
                  {/* Centered dot */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-primary rounded-full relative z-10 shadow-lg">
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>

                {/* 1980s */}
                <div className="timeline-item timeline-right relative">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="hidden md:block"></div>
                    <div className="timeline-content text-center md:text-left bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                      <div className="inline-block px-6 py-3 bg-primary text-white rounded-full font-bold mb-4 shadow-md">
                        1980s
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-3 text-gray-900">Growing Together</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our church family expanded, launching youth programs and community outreach initiatives that touched countless lives in Merkel and beyond.
                      </p>
                    </div>
                  </div>
                  {/* Centered dot */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-primary rounded-full relative z-10 shadow-lg">
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>

                {/* 2000s */}
                <div className="timeline-item timeline-left relative">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="timeline-content text-center md:text-right bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                      <div className="inline-block px-6 py-3 bg-primary text-white rounded-full font-bold mb-4 shadow-md">
                        2000s
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-3 text-gray-900">Building Our Home</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We moved into our current location at 506 Runnels St., creating a warm and welcoming space for worship, fellowship, and spiritual growth.
                      </p>
                    </div>
                    <div className="hidden md:block"></div>
                  </div>
                  {/* Centered dot */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-primary rounded-full relative z-10 shadow-lg">
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>

                {/* Today */}
                <div className="timeline-item timeline-right relative">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="hidden md:block"></div>
                    <div className="timeline-content text-center md:text-left bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                      <div className="inline-block px-6 py-3 bg-primary text-white rounded-full font-bold mb-4 shadow-md">
                        Today
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-3 text-gray-900">Continuing the Mission</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Under Pastor Colton Grisham&apos;s leadership, we continue to be a beacon of hope, offering multiple services, online streaming, and community programs for all ages.
                      </p>
                    </div>
                  </div>
                  {/* Centered dot */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-primary rounded-full relative z-10 shadow-lg">
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-24 md:py-32 bg-bg-color relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-color mb-6">
                Our Mission & Values
              </h2>
              <p className="text-xl text-text-light max-w-3xl mx-auto">
                Guided by faith, driven by purpose, united in love.
              </p>
            </div>

            <div className="mission-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Mission Card */}
              <div className="mission-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.05] rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Spread the Gospel</h3>
                  <p className="text-text-light leading-relaxed">
                    We are committed to sharing the good news of Jesus Christ with our community and the world, one heart at a time.
                  </p>
                </div>
              </div>

              {/* Values Cards */}
              <div className="mission-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-400/[0.05] rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Love & Serve</h3>
                  <p className="text-text-light leading-relaxed">
                    We believe in demonstrating God&apos;s love through practical service, caring for our neighbors and community.
                  </p>
                </div>
              </div>

              <div className="mission-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/[0.05] rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors duration-300">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Build Community</h3>
                  <p className="text-text-light leading-relaxed">
                    We foster genuine relationships where everyone belongs, creating a family atmosphere of support and encouragement.
                  </p>
                </div>
              </div>

              <div className="mission-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.05] rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Grow in Faith</h3>
                  <p className="text-text-light leading-relaxed">
                    We provide opportunities for spiritual growth through Bible study, prayer, and discipleship at every stage of life.
                  </p>
                </div>
              </div>

              <div className="mission-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/[0.05] rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors duration-300">
                    <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Make a Difference</h3>
                  <p className="text-text-light leading-relaxed">
                    We empower our members to use their gifts and talents to impact lives and transform our community for Christ.
                  </p>
                </div>
              </div>

              <div className="mission-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/[0.05] rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-100 transition-colors duration-300">
                    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Live with Purpose</h3>
                  <p className="text-text-light leading-relaxed">
                    We help people discover their God-given purpose and live out their faith authentically in everyday life.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Numbers */}
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">
                  <span className="counter" data-target="58">0</span>+
                </div>
                <p className="text-text-light">Years of Ministry</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">
                  <span className="counter" data-target="200">0</span>+
                </div>
                <p className="text-text-light">Church Family</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">
                  <span className="counter" data-target="5">0</span>
                </div>
                <p className="text-text-light">Weekly Services</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">
                  <span className="counter" data-target="1000">0</span>+
                </div>
                <p className="text-text-light">Lives Touched</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Believe Section */}
        <section className="py-24 md:py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-color mb-6">
                What We Believe
              </h2>
              <p className="text-xl text-text-light max-w-3xl mx-auto">
                Our faith is anchored in timeless biblical truths that guide everything we do.
              </p>
            </div>

            <div className="beliefs-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Belief Cards */}
              <div className="belief-card group bg-bg-color rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-3">The Bible</h3>
                    <p className="text-text-light leading-relaxed mb-3">
                      We believe the Bible is the inspired, infallible Word of God and the supreme authority for faith and practice.
                    </p>
                    <p className="text-sm text-primary font-medium">2 Timothy 3:16-17</p>
                  </div>
                </div>
              </div>

              <div className="belief-card group bg-bg-color rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-3">God</h3>
                    <p className="text-text-light leading-relaxed mb-3">
                      We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.
                    </p>
                    <p className="text-sm text-primary font-medium">Matthew 28:19</p>
                  </div>
                </div>
              </div>

              <div className="belief-card group bg-bg-color rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-3">Jesus Christ</h3>
                    <p className="text-text-light leading-relaxed mb-3">
                      We believe Jesus is the Son of God, born of a virgin, lived a sinless life, died for our sins, and rose again.
                    </p>
                    <p className="text-sm text-primary font-medium">John 3:16</p>
                  </div>
                </div>
              </div>

              <div className="belief-card group bg-bg-color rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-3">Salvation</h3>
                    <p className="text-text-light leading-relaxed mb-3">
                      We believe salvation is by grace through faith in Jesus Christ alone, not by works, available to all who believe.
                    </p>
                    <p className="text-sm text-primary font-medium">Ephesians 2:8-9</p>
                  </div>
                </div>
              </div>

              <div className="belief-card group bg-bg-color rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-3">The Church</h3>
                    <p className="text-text-light leading-relaxed mb-3">
                      We believe the church is the body of Christ, called to worship God, edify believers, and evangelize the world.
                    </p>
                    <p className="text-sm text-primary font-medium">1 Corinthians 12:27</p>
                  </div>
                </div>
              </div>

              <div className="belief-card group bg-bg-color rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-3">Eternal Life</h3>
                    <p className="text-text-light leading-relaxed mb-3">
                      We believe in the resurrection of all people, eternal life for believers, and eternal separation for unbelievers.
                    </p>
                    <p className="text-sm text-primary font-medium">John 5:28-29</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <StaffSection />

        {/* Join Our Family CTA */}
        <section className="about-cta py-24 md:py-32 bg-gradient-to-br from-primary to-gray-dark relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="about-cta-content max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Join Our Family
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Experience the warmth of our church family. Everyone is welcome, and there&apos;s a place for you here at Calvary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                View Upcoming Events
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Plan Your Visit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </AboutContentAnimation>
    </main>
  );
}