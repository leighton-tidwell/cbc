import Image from 'next/image';

interface ServiceCardProps {
  day: string;
  time: string;
  info: string;
  additional: string;
  image: string;
  alt: string;
  index: number;
}

export default function ServiceCard({
  day,
  time,
  info,
  additional,
  image,
  alt,
  index,
}: ServiceCardProps) {
  const rotation = index % 2 === 0 ? '-rotate-1' : 'rotate-1';

  return (
    <div
      className={`service-card group relative h-[450px] max-[768px]:h-[380px] rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.12)] cursor-pointer bg-white flex flex-col
        transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]
        hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] hover:rotate-0
        ${rotation} max-[768px]:rotate-0 max-[768px]:mt-0
        ${index === 1 ? 'md:mt-12' : ''}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Image Section - Absolutely positioned to cover top 60% */}
      <Image
        src={image}
        alt={alt}
        width={400}
        height={300}
        className="service-card-image absolute top-0 left-0 w-full h-[60%] object-cover brightness-[0.8] saturate-[0.9] transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]
          group-hover:scale-110 group-hover:brightness-[0.9] group-hover:saturate-[1.1]"
      />

      {/* Gradient overlay - matches card::before */}
      <div
        className="absolute top-0 left-0 right-0 h-[60%] z-[1] transition-opacity duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          background:
            index === 0
              ? 'linear-gradient(to bottom, transparent 0%, rgba(115, 115, 115, 0.8) 100%)'
              : 'linear-gradient(to bottom, transparent 0%, rgba(138, 138, 138, 0.8) 100%)',
        }}
      />

      {/* Content Section - Uses margin-top: auto to push to bottom */}
      <div className="service-card-content relative z-[2] mt-auto bg-white p-12 text-center">
        {/* Decorative Bar */}
        <div
          className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-[60px] h-1 rounded-sm"
          style={{
            background:
              index === 0
                ? 'linear-gradient(90deg, #737373 0%, #8a8a8a 100%)'
                : 'linear-gradient(90deg, #8a8a8a 0%, #737373 100%)',
          }}
        />

        <h3 className="service-day text-sm font-semibold uppercase tracking-[0.1em] text-primary mb-1 font-primary">
          {day}
        </h3>
        <p className="service-time text-[3rem] font-black text-text-color mb-2 font-heading leading-none tracking-[-0.03em]">
          {time}
        </p>
        <p className="service-info text-lg text-text-color font-medium leading-[1.5] font-primary">
          {info}
          <small className="block mt-1 text-sm text-text-light font-normal">
            {additional}
          </small>
        </p>
      </div>
    </div>
  );
}
