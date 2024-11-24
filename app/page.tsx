import HomeHero from '@/components/HomeHero';
import FeatureGrid from '@/components/FeatureGrid';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <HomeHero />
      <FeatureGrid />
    </div>
  );
}