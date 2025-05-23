export default function ServicesWatermark() {
  const jesusText = 'JESUS '.repeat(150);

  return (
    <>
      {/* First watermark layer */}
      <div
        className="absolute top-0 left-0 w-[200%] h-[200%] font-heading text-[140px] font-black leading-[0.8] tracking-[0.1em] text-primary/[0.03] -rotate-[15deg] whitespace-pre-wrap overflow-hidden pointer-events-none z-0 animate-[subtle-shift_30s_linear_infinite]"
        style={{ wordSpacing: '2em' }}
        aria-hidden="true"
      >
        {jesusText}
      </div>

      {/* Second watermark layer */}
      <div
        className="absolute -top-[100px] -left-[100px] w-[200%] h-[200%] font-primary text-[80px] font-extrabold leading-[1.2] tracking-[0.2em] text-primary/[0.02] rotate-[25deg] whitespace-pre-wrap overflow-hidden pointer-events-none z-0 animate-[subtle-shift-reverse_25s_linear_infinite_reverse]"
        style={{ wordSpacing: '3em' }}
        aria-hidden="true"
      >
        {jesusText}
      </div>
    </>
  );
}
