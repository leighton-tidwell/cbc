import ServiceCard from './ServiceCard';
import ServicesAnimationWrapper from './ServicesAnimationWrapper';
import ServicesWatermark from './ServicesWatermark';

export default function Services() {
  const services = [
    {
      day: 'Sunday',
      time: '10:00 AM',
      info: 'Worship Service',
      additional: 'Sunday School at 9:00 AM',
      image: '/images/stock/edwin-andrade-6liebVeAfrY-unsplash.jpg',
      alt: 'Sunday Service',
    },
    {
      day: 'Wednesday',
      time: '7:00 PM',
      info: 'Midweek Service',
      additional: 'Classes for all ages',
      image: '/images/stock/sam-balye-WNVnnHHcBeM-unsplash.jpg',
      alt: 'Wednesday Service',
    },
  ];

  return (
    <section className="section relative py-24 md:py-32 bg-white overflow-hidden" id="services">
      {/* JESUS Watermark Background */}
      <ServicesWatermark />
      
      <div className="container relative z-10 max-w-[1200px] mx-auto px-4">
        <h2 className="section-title relative text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-center mb-16 pb-8 tracking-[-0.02em] text-text-color
          after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-primary after:rounded-sm">
          Join Us This Week
        </h2>

        <ServicesAnimationWrapper>
          <div className="service-times grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-12 max-w-[900px] mx-auto mt-12">
            {services.map((service, index) => (
              <ServiceCard key={service.day} {...service} index={index} />
            ))}
          </div>
        </ServicesAnimationWrapper>
      </div>
    </section>
  );
}
