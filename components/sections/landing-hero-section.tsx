import { ResponsiveGridControl } from '../layouts/responsive-grid-control';

export default function LandingHeroSection() {
  return (
    <main className="landing-hero-section py-24">
      <ResponsiveGridControl>
        <h1 className="landing-hero-headline font-bold text-6xl leading-snug tracking-tighter max-lg:text-5xl max-md:text-3xl">
          Build your UI fast <br className="max-sm:hidden" />
          with boilerplate cookies
        </h1>
      </ResponsiveGridControl>
    </main>
  );
}
