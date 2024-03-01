import { ResponsiveControl } from '../layouts/responsive-control';
import { Button } from '../ui/button';

export default function LandingHeroSection() {
  return (
    <main className="landing-hero-section my-24 relative border-y border-white/10">
      <ResponsiveControl className="relative z-30">
        <h1 className="landing-hero-headline font-bold text-6xl leading-snug tracking-tighter max-lg:text-5xl max-md:text-3xl">
          Build your UI fast <br className="max-sm:hidden" />
          with boilerplate cookies
        </h1>
        <div className="text-base text-white/50 mt-6">
          <p>
            Introducing a collection of boilerplate code for components and
            layouts, <br />
            along with example UI designs called cookies.
          </p>
          <p className="mt-6">
            Get started with building UI for your project with godspeed.
          </p>
        </div>
        <div className="hero-section-cta-container flex flex-row items-center justify-start gap-4 mt-12">
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
      </ResponsiveControl>
    </main>
  );
}
