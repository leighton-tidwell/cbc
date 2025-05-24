'use client';

export default function FooterJoinUsLink() {
  const scrollToFindUs = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const findUsSection = document.getElementById('find-us');
    if (findUsSection) {
      findUsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <a
      href="#find-us"
      onClick={scrollToFindUs}
      className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
    >
      Join Us
    </a>
  );
}
