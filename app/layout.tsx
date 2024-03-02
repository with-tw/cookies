import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CSPostHogProvider } from '@/services/posthog/provider';
import WebsiteNavigation from '@/components/sections/website-navigation';
import FullPageGridDesign from '@/components/layouts/full-page-grid-design';
import { TailwindIndicator } from '@/components/dev/tailwind-breakpoint-indicator';
import { ResponsiveControl } from '@/components/layouts/responsive-control';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cookies | With Tailwind',
  description:
    'Easy-to-setup Boilerplate UI Components & Layouts. Built with Radix, Styled with Tailwind',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body className={inter.className}>
          <div className="grid-design-container relative z-10">
            <FullPageGridDesign />
          </div>
          <div className="content-on-top-grid relative z-20 pb-24">
            <ResponsiveControl className="relative">
              {/* <div className="gradient-effects-container"> */}
              <div className="bg-violet-600 bg-opacity-60 blur-[200px] w-[400px] h-[400px] rounded-full absolute top-[100px]" />
              <div className="bg-blue-500 bg-opacity-60 blur-[200px] w-[400px] h-[400px] rounded-full absolute top-[200px] left-[400px]" />
              <div className="bg-rose-600 bg-opacity-40 blur-[160px] w-[300px] h-[300px] rounded-full absolute top-[300px] left-[600px]" />
              <div className="bg-pink-600 bg-opacity-60 blur-[140px] w-[140px] h-[400px] rounded-full absolute top-[200px] right-0" />
              <div className="bg-violet-600 bg-opacity-60 blur-[200px] w-[400px] h-[400px] rounded-full absolute top-12 right-0" />
              <div className="bg-blue-800 bg-opacity-60 blur-[140px] w-[140px] h-[400px] rounded-full absolute top-0 left-0" />
              <div className="bg-pink-500 bg-opacity-60 blur-[140px] w-[140px] h-[400px] rounded-full absolute top-[300px] left-0" />
              {/* </div> */}
            </ResponsiveControl>
            <WebsiteNavigation />
            {children}
          </div>
          <TailwindIndicator />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
