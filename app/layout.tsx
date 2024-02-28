import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CSPostHogProvider } from '@/services/posthog/provider';
import WebsiteNavigation from '@/components/sections/website-navigation';

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
          <WebsiteNavigation />
          {children}
        </body>
      </CSPostHogProvider>
    </html>
  );
}
