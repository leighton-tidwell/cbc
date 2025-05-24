'use client';

export default function JoinUsSundayCTA() {
  const scrollToFindUs = () => {
    const findUsSection = document.getElementById('find-us');
    if (findUsSection) {
      findUsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <button
      onClick={scrollToFindUs}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
    >
      Join Us This Sunday
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}