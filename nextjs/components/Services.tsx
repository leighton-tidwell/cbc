import Image from 'next/image';

export default function Services() {
  const services = [
    {
      day: 'Sunday',
      time: '10:00 AM',
      info: 'Worship Service',
      additional: 'Sunday School at 9:00 AM',
      image: '/images/stock/edwin-andrade-6liebVeAfrY-unsplash.jpg',
      alt: 'Sunday Service'
    },
    {
      day: 'Wednesday',
      time: '7:00 PM',
      info: 'Midweek Service',
      additional: 'Classes for all ages',
      image: '/images/stock/sam-balye-WNVnnHHcBeM-unsplash.jpg',
      alt: 'Wednesday Service'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bg-color" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
          Join Us This Week
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.day} 
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-default"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="relative -mt-8 mx-6 mb-6 bg-white rounded-lg p-6 text-center shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-2">{service.day}</h3>
                <p className="text-3xl font-light text-gray-dark mb-3">{service.time}</p>
                <p className="text-lg text-text-color">
                  {service.info}
                  <br />
                  <small className="text-sm text-text-light">{service.additional}</small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}