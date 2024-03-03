import Link from 'next/link';
import { PageHeader } from '../layouts/page-header';
import { ResponsiveControl } from '../layouts/responsive-control';
import { Button } from '../ui/button';

export default function LandingHeroSection() {
  return (
    <PageHeader className="landing-hero-section">
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
          <Link href={'/getting-started'} className="max-md:hidden">
            <Button size="lg">
              Setup Project
            </Button>
          </Link>
          <Link href={'/components'} className="max-md:hidden">
            <Button
              size="lg"
              withArrow
              variant="ghost">
              Components
            </Button>
          </Link>
          <Link href={'/getting-started'} className="md:hidden">
            <Button>Setup Project</Button>
          </Link>
          <Link href={'/components'} className="md:hidden">
            <Button withArrow variant="ghost">
              Components
            </Button>
          </Link>
        </div>
      </ResponsiveControl>
    </PageHeader>
  );
}
