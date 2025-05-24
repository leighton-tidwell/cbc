export default function FooterWatermark() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Layer 1: Large text watermark with gradient opacity */}
      <div className="absolute inset-0 opacity-[0.03]">
        {/* Mobile: Multiple smaller CBCs */}
        <div className="md:hidden">
          <div className="absolute top-10 -left-10 text-[8rem] font-heading font-bold text-white/50 transform -rotate-45">
            CBC
          </div>
          <div className="absolute bottom-20 -right-10 text-[8rem] font-heading font-bold text-white/50 transform rotate-45">
            CBC
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] font-heading font-bold text-white/30 transform -rotate-12">
            CBC
          </div>
        </div>

        {/* Desktop: Single large CBC */}
        <div
          className="hidden md:block absolute -top-1/2 -left-1/4 text-[20rem] font-heading font-bold text-white/50 transform -rotate-45 whitespace-nowrap"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          }}
        >
          CBC
        </div>
      </div>

      {/* Layer 2: Flowing text pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="text-white font-medium text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] leading-relaxed md:leading-loose"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 100px,
              rgba(255, 255, 255, 0.03) 100px,
              rgba(255, 255, 255, 0.03) 200px
            )`,
          }}
        >
          {Array(25)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="whitespace-nowrap overflow-hidden py-1 md:py-2"
                style={{
                  animation: `flow-${i % 3} ${30 + i * 2}s linear infinite`,
                  animationDelay: `${i * 0.5}s`,
                  transform: `translateX(${i % 2 === 0 ? '-100%' : '0'})`,
                }}
              >
                ORDINARY PEOPLE • EXTRAORDINARY GOD • CALVARY BAPTIST CHURCH •
                MERKEL TX • FAITH • HOPE • LOVE • COMMUNITY •
              </div>
            ))}
        </div>
      </div>

      {/* Layer 3: Geometric pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.015]"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="footer-grid"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="30" cy="30" r="1.5" fill="white" />
            <path
              d="M 0 30 L 60 30 M 30 0 L 30 60"
              stroke="white"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-grid)" />
      </svg>

      {/* Layer 4: Radial fade for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse at center,
            transparent 0%,
            transparent 40%,
            rgba(0, 0, 0, 0.1) 100%
          )`,
        }}
      />
    </div>
  );
}
