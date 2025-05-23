export default function WatermarkPattern() {
  // Generate repeated text for the watermark
  const watermarkText = Array(40).fill('CALVARY BAPTIST CHURCH').join(' • ');

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-[0.35]">
      {/* Single diagonal layer */}
      <div
        className="absolute inset-0 whitespace-nowrap text-gray-dark font-black text-4xl tracking-wider transform -rotate-12"
        style={{
          lineHeight: '40px',
          animation: 'watermark-drift-1 120s linear infinite',
        }}
      >
        {Array(30)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="mb-1">
              {watermarkText}
            </div>
          ))}
      </div>
    </div>
  );
}
