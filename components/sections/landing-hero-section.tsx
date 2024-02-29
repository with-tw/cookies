import { ResponsiveGridControl } from '../layouts/responsive-grid-control';
import { Button } from '../ui/button';

export default function LandingHeroSection() {
  return (
    <main className="landing-hero-section py-24 relative">
      <ResponsiveGridControl className="relative z-30">
        <h1 className="landing-hero-headline font-bold text-6xl leading-snug tracking-tighter max-lg:text-5xl max-md:text-3xl">
          Build your UI fast <br className="max-sm:hidden" />
          with boilerplate cookies
        </h1>
        <div className="hero-section-cta-container flex flex-row items-center justify-start gap-4 mt-6">
          <Button size="lg" className="max-md:hidden">
            Explore Cookies
          </Button>
          <Button size="lg" withArrow variant="ghost" className="max-md:hidden">
            Components
          </Button>
          <Button className="md:hidden">Explore Cookies</Button>
          <Button withArrow variant="ghost" className="md:hidden">
            Components
          </Button>
        </div>
      </ResponsiveGridControl>
      <div className="gradient-effects-container">
        <div className="bg-violet-600 bg-opacity-60 blur-[200px] w-[400px] h-[400px] rounded-full absolute -bottom-[200px]" />
        <div className="bg-blue-500 bg-opacity-60 blur-[200px] w-[400px] h-[400px] rounded-full absolute -bottom-[200px] left-[400px]" />
        <div className="bg-rose-600 bg-opacity-40 blur-[160px] w-[300px] h-[300px] rounded-full absolute -bottom-[300px] left-[600px]" />
        <div className="bg-pink-600 bg-opacity-60 blur-[140px] w-[140px] h-[400px] rounded-full absolute top-0 left-0" />
        <div className="bg-violet-600 bg-opacity-60 blur-[200px] w-[400px] h-[400px] rounded-full absolute -bottom-[200px] right-0" />
        <div className="bg-blue-800 bg-opacity-60 blur-[140px] w-[140px] h-[400px] rounded-full absolute top-0 right-0" />
      </div>
    </main>
  );
}
