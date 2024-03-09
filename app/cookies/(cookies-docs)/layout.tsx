import { ResponsiveControl } from '@/components/layouts/responsive-control';
import { ReactNode } from 'react';

export default function CookiesDocsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="cookies-docs-layout markdown-content">
      <ResponsiveControl className="relative">
        <div className="max-xl:w-full">{children}</div>
      </ResponsiveControl>
    </div>
  );
}
