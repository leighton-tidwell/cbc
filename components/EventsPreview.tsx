import Image from 'next/image';
import Link from 'next/link';
import EventsAnimationWrapper from './EventsAnimationWrapper';

export default function EventsPreview() {
  const events = [
    {
      id: 1,
      title: 'Sunday Morning Service',
      date: 'Sundays at 10:00 AM',
      description:
        'Join us for worship, prayer, and a message from Pastor Colton Grisham.',
      image: '/images/stock/vince-fleming-gssVHlGhisQ-unsplash.jpg',
      alt: 'Sunday Service',
    },
    {
      id: 2,
      title: 'Wednesday Night Service',
      date: 'Wednesdays at 7:00 PM',
      description:
        'Join us on Wednesday nights for that midweek refuel with classes for every age.',
      image: '/images/stock/megan-allen-fx81JSLfyLU-unsplash.jpg',
      alt: 'Wednesday Service',
    },
    {
      id: 3,
      title: 'Sunday School',
      date: 'Sundays at 9:00 AM',
      description:
        "Classes available for all ages including Adult, Young Adult, and Children's Church.",
      image: '/images/stock/nathan-mullet-pmiW630yDPE-unsplash.jpg',
      alt: 'Sunday School',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, #737373 1px, transparent 1px),
            linear-gradient(to bottom, #737373 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <EventsAnimationWrapper>
          {/* Decorative element */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary"></div>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </div>
          
          <h2 className="events-title relative text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-center mb-16 pb-8 tracking-[-0.02em] text-text-color
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-primary after:rounded-sm">
            Upcoming Events
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {events.map((event) => (
              <div
                key={event.id}
                className="event-card group relative"
              >
                {/* Card container with border */}
                <div className="relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-primary/20 transition-all duration-500 hover:shadow-xl">
                  {/* Image container with aspect ratio */}
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <Image
                      src={event.image}
                      alt={event.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Subtle gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Date/Time Badge - Always visible */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.date}
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold mb-3 text-text-color line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-text-light text-sm leading-relaxed mb-5 line-clamp-2">
                      {event.description}
                    </p>
                    
                    {/* CTA with icon */}
                    <Link
                      href="/events"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link"
                    >
                      <span className="relative">
                        View Details
                      </span>
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover/link:bg-primary/20 transition-colors duration-300">
                        <svg 
                          className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-0.5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                  
                  {/* Accent line at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            ))}
        </div>
        </EventsAnimationWrapper>
      </div>
    </section>
  );
}
