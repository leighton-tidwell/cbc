import Image from 'next/image';

const weeklyEvents = [
  {
    title: 'Adult Sunday School',
    date: 'Sundays at 9:00 AM',
    description: 'Adult Sunday School classes for all stages of life and faith.',
    image: '/images/stock/rod-long-DRgrzQQsJDA-unsplash.jpg',
  },
  {
    title: 'Young Adult Sunday School',
    date: 'Sundays at 9:00 AM',
    description: 'Sunday School specifically designed for young adults.',
    image: '/images/stock/dnk-photo-PdXqqLO6jtw-unsplash.jpg',
  },
  {
    title: 'Emerging Adulthood Class',
    date: 'Sundays at 9:00 AM',
    description: 'Class focused on those transitioning to adulthood.',
    image: '/images/stock/johannes-krupinski-wNjYsXOILEI-unsplash.jpg',
  },
  {
    title: "Children's Church",
    date: 'Sundays at 9:00 AM - 11:00 AM',
    description: 'Fun and engaging Bible teachings for children.',
    image: '/images/stock/megan-allen-fx81JSLfyLU-unsplash.jpg',
  },
  {
    title: 'Wednesday Night Service',
    date: 'Wednesdays at 7:00 PM',
    description: 'Join us for that midweek refuel with classes for every age!',
    image: '/images/stock/vince-fleming-gssVHlGhisQ-unsplash.jpg',
  },
];

export default function EventsPage() {
  return (
    <main>
      {/* Events Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Events
          </h1>
          <p className="text-xl md:text-2xl text-text-light">
            Join us for worship, fellowship, and spiritual growth
          </p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/stock/vince-fleming-gssVHlGhisQ-unsplash.jpg"
                alt="Sunday Morning Service"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Sunday Morning Service
              </h2>
              <p className="text-2xl text-primary font-medium mb-6">
                Sundays at 10:00 AM
              </p>
              <p className="text-lg text-text-light mb-6 leading-relaxed">
                Join us for contemporary worship and a practical message from Pastor Colton Grisham. 
                Our Sunday morning service is designed to help you grow in your faith and connect 
                with our church family.
              </p>
              <p className="text-lg text-text-light leading-relaxed">
                We offer nursery care for infants and toddlers, and Children&apos;s Church for ages 3-12. 
                Come as you are and experience the warmth of our church family!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-16 md:py-24 bg-bg-color">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
            Weekly Schedule
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weeklyEvents.map((event, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-default"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-primary font-medium mb-3">{event.date}</p>
                  <p className="text-text-light leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            Special Events
          </h2>
          <p className="text-lg text-text-light mb-8 leading-relaxed">
            Throughout the year, we host special events including revivals, holiday celebrations, 
            community outreach programs, and youth activities. Follow us on social media or 
            contact our office to stay updated on upcoming special events.
          </p>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-text-light mb-4">
              Don&apos;t miss out on any of our events! Contact us for more information:
            </p>
            <p className="text-lg">
              <strong>Phone:</strong> 325.928.5120<br />
              <strong>Email:</strong> officeadmin@cbcmerkel.org
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}