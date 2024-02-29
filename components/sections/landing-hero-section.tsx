import { ResponsiveGridControl } from '../layouts/responsive-grid-control';

export default function LandingHeroSection() {
  return (
    <main className="landing-hero-section py-24">
      <ResponsiveGridControl>
        <h1 className="landing-hero-headline font-medium text-6xl leading-snug tracking-tighter text-center max-lg:text-5xl max-md:text-3xl">
          Easy-to-setup Boilerplate <br className="max-sm:hidden" />
          UI Components & Layouts.
        </h1>
      </ResponsiveGridControl>
    </main>
  );
}
