import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WelcomeHome from '@/components/WelcomeHome';
import EventsPreview from '@/components/EventsPreview';
import LifeAtCalvary from '@/components/LifeAtCalvary';
import LatestSermon from '@/components/LatestSermon';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WelcomeHome />
      <EventsPreview />
      <LifeAtCalvary />
      <LatestSermon />
    </main>
  );
}
