'use client';
import { cn } from '@/helpers/utils';
import { forwardRef, useState } from 'react';
import { CodeBlock } from './code-block';
import { Button } from '../ui/button';

export interface ComponentPreviewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  headline: string;
  description?: string;
  code: string;
}

export const ComponentPreview = forwardRef<
  HTMLDivElement,
  ComponentPreviewProps
>(({ className, children, headline, description = '', code, ...args }, ref) => {
  const [codeView, setCodeView] = useState<boolean>(false);
  return (
    <section className="component-preview-container">
      <div className="component-details-wrapper">
        <h2
          className="component-preview-headline docs-page-headline leading-snug tracking-tighter font-semibold text-2xl"
          id={headline.toLowerCase().replace(/\s+/g, '-')}>
          {headline}
        </h2>
        {description && <p className="text-white/40 text-sm">{description}</p>}
      </div>
      <div
        ref={ref}
        className={cn(
          'component-preview mt-6 py-4 min-h-[400px] justify-center border border-neutral-700 bg-neutral-900 rounded-2xl flex flex-row items-center relative w-full backdrop-blur-sm',
          className,
        )}
        {...args}>
        <Button
          size="sm"
          variant="secondary"
          className="absolute top-2 right-2"
          onClick={() => setCodeView(!codeView)}>
          {!codeView ? 'View Code' : 'See Preview'}
        </Button>
        {!codeView && children}
        {codeView && <CodeBlock>{code}</CodeBlock>}
      </div>
    </section>
  );
});

ComponentPreview.displayName = 'ComponentPreview';
