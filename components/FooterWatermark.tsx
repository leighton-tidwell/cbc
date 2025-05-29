export default function FooterWatermark() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Layer 1: Large text watermark with gradient opacity */}
      <div className="absolute inset-0 opacity-[0.1]">
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

      {/* Layer 2: Static text pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="relative w-full h-full overflow-hidden">
          {Array(15)
            .fill(null)
            .map((_, i) => {
              const phrases = [
                'ORDINARY PEOPLE',
                'EXTRAORDINARY GOD',
                'CALVARY BAPTIST CHURCH',
                'MERKEL TX',
                'FAITH',
                'HOPE',
                'LOVE',
                'COMMUNITY',
                'WORSHIP',
                'PRAYER',
                'FELLOWSHIP',
                'EST. 1965',
                'SERVING CHRIST',
                'LOVING PEOPLE',
                'MAKING DISCIPLES',
              ];

              // Random positioning and rotation for each phrase
              const randomX = (i * 217) % 100; // Prime number for better distribution
              const randomY = (i * 131) % 100;
              const randomRotation = ((i * 47) % 60) - 30; // -30 to 30 degrees
              const randomSize = 0.8 + ((i * 23) % 40) / 100; // 0.8 to 1.2
              const randomOpacity = 0.3 + ((i * 31) % 40) / 100; // 0.3 to 0.7

              return (
                <div
                  key={i}
                  className="absolute text-white font-medium whitespace-nowrap"
                  style={{
                    left: `${randomX}%`,
                    top: `${randomY}%`,
                    transform: `rotate(${randomRotation}deg) scale(${randomSize})`,
                    opacity: randomOpacity,
                    fontSize: `${0.75 + randomSize * 0.25}rem`,
                  }}
                >
                  {phrases[i % phrases.length]}
                </div>
              );
            })}
        </div>
      </div>

      {/* Layer 3: Geometric pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
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
