'use client';

export default function FindYourPlaceCTA() {
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
      className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-gray-dark transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      Find Your Place
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  );
}
