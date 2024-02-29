import { ResponsiveGridControl } from '../layouts/responsive-grid-control';
import { Button } from '../ui/button';

export default function LandingHeroSection() {
  return (
    <main className="landing-hero-section py-24">
      <ResponsiveGridControl>
        <h1 className="landing-hero-headline font-bold text-6xl leading-snug tracking-tighter max-lg:text-5xl max-md:text-3xl">
          Build your UI fast <br className="max-sm:hidden" />
          with boilerplate cookies
        </h1>
        <div className='hero-section-cta-container flex flex-row items-center justify-start gap-4 mt-6'>
          <Button size='lg'>
            Explore Cookies
          </Button>
          <Button size='lg' withArrow variant='secondary'>
            Components
          </Button>
        </div>
      </ResponsiveGridControl>
    </main>
  );
}
