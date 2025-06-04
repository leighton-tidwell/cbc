import { Metadata } from 'next';
import { getFacebookVideos } from '@/utils/facebook';
import SermonsHeroAnimation from '@/components/SermonsHeroAnimation';
import SermonCardsAnimation from '@/components/SermonCardsAnimation';
import SermonCard from '@/components/SermonCard';

export const metadata: Metadata = {
  title: 'Sermons | Calvary Baptist Church',
  description:
    'Watch our latest sermons and messages from Calvary Baptist Church in Merkel, Texas.',
};

export default async function SermonsPage() {
  const videos = await getFacebookVideos(12);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/stock/edwin-andrade-6liebVeAfrY-unsplash.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <SermonsHeroAnimation>
            <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white mb-6 tracking-tight">
              Sermons
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Experience God&apos;s Word through our weekly messages
            </p>
          </SermonsHeroAnimation>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="py-24 md:py-32 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <SermonCardsAnimation>
            {videos.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-text-light">
                  No sermons available at this time.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video) => (
                  <SermonCard key={video.id} video={video} />
                ))}
              </div>
            )}
          </SermonCardsAnimation>
        </div>
      </section>
    </main>
  );
}
