import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CSPostHogProvider } from '@/services/posthog/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cookies | With Tailwind',
  description: 'Easy-to-setup Boilerplate UI Components & Layouts. Built with Radix, Styled with Tailwind',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body className={inter.className}>{children}</body>
      </CSPostHogProvider>
    </html>
  );
}
