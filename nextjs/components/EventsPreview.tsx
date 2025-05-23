import Image from 'next/image';
import Link from 'next/link';

export default function EventsPreview() {
  const events = [
    {
      id: 1,
      title: 'Sunday Morning Service',
      date: 'Sundays at 10:00 AM',
      description: 'Join us for worship, prayer, and a message from Pastor Colton Grisham.',
      image: '/images/stock/vince-fleming-gssVHlGhisQ-unsplash.jpg',
      alt: 'Sunday Service'
    },
    {
      id: 2,
      title: 'Wednesday Night Service',
      date: 'Wednesdays at 7:00 PM',
      description: 'Join us on Wednesday nights for that midweek refuel with classes for every age.',
      image: '/images/stock/megan-allen-fx81JSLfyLU-unsplash.jpg',
      alt: 'Wednesday Service'
    },
    {
      id: 3,
      title: 'Sunday School',
      date: 'Sundays at 9:00 AM',
      description: "Classes available for all ages including Adult, Young Adult, and Children's Church.",
      image: '/images/stock/nathan-mullet-pmiW630yDPE-unsplash.jpg',
      alt: 'Sunday School'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
          Upcoming Events
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-default">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-primary font-medium mb-3">{event.date}</p>
                <p className="text-text-light mb-6 leading-relaxed">{event.description}</p>
                <Link 
                  href="/events" 
                  className="inline-block px-8 py-3 bg-primary text-white font-semibold uppercase tracking-wider text-sm rounded transition-all duration-default hover:bg-gray-dark hover:-translate-y-0.5 hover:shadow-md"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}