import { ResponsiveControl } from '@/components/layouts/responsive-control';
import { ReactNode } from 'react';

export default function ComponentDocsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="component-docs-layout markdown-content">
      <ResponsiveControl className="relative">
        <div className='w-[800px]'>
          {children}
        </div>
      </ResponsiveControl>
    </div>
  );
}
