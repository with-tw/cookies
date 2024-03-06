'use client';
import { cn } from '@/helpers/utils';
import { forwardRef, useState } from 'react';
import { copyToClipboard } from '@/helpers/copy-to-clipboard';
import { Button } from '../ui/button';

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  fileName?: string;
  hasViewMore?: boolean;
}

export const CodeBlock = forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    { className, children, fileName = false, hasViewMore = false, ...args },
    ref,
  ) => {
    const [viewMore, setViewMore] = useState<boolean>(false);
    // to manage states for copy-to-clipboard
    const [ctc, setCTC] = useState<boolean>(false);
    return (
      <div
        ref={ref}
        className={cn(
          'code-block font-mono bg-black/30 rounded-xl relative min-w-[600px] w-fit border border-neutral-700 shadow-lg overflow-scroll',
          !fileName && 'p-6',
          viewMore ? 'h-fit max-h-[600px]' : 'max-h-[300px]',
          'max-md:min-w-[300px] max-md:w-full max-md:overflow-scroll',
          className,
        )}
        {...args}>
        {fileName && (
          <div className="bg-neutral-800 p-3 mb-4 text-sm flex flex-row items-center justify-between">
            {fileName}
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                copyToClipboard(children as string);
                setCTC(true);
                setTimeout(() => setCTC(false), 1500);
              }}>
              {ctc ? 'Copied' : 'Copy'}
            </Button>
          </div>
        )}
        <div
          className={cn(
            hasViewMore && 'h-[150px] overflow-hidden',
            fileName && 'px-6 py-2',
            viewMore && 'h-fit',
          )}>
          <code className={cn('whitespace-pre-wrap max-md:text-sm')}>
            {children}
          </code>
        </div>
        {hasViewMore && (
          <Button
            variant="secondary"
            size="sm"
            className="sticky bottom-2 right-2 ml-auto"
            onClick={() => setViewMore(!viewMore)}>
            {' '}
            {viewMore ? 'View less' : 'View more'}
          </Button>
        )}
      </div>
    );
  },
);

CodeBlock.displayName = 'CodeBlock';
