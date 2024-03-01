import LandingHeroSection from '@/components/sections/landing-hero-section';
import { SetupSection } from '@/components/sections/setup-section';

export default function Home(): JSX.Element {
  return (
    <div className="landing-page grid grid-cols-1 gap-12">
      <LandingHeroSection />
    </div>
  );
}
