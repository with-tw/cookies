'use client';
import { cn } from '@/helpers/utils';
import { forwardRef } from 'react';

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  fileName?: string;
}

export const CodeBlock = forwardRef<HTMLDivElement, CodeBlockProps>(
  ({ className, children, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'code-block font-mono bg-black/30 p-6 rounded-xl',
          className,
        )}
        {...args}>
        <div
          className={cn(
            '[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px]',
          )}>
          {children}
        </div>
      </div>
    );
  },
);

CodeBlock.displayName = 'CodeBlock';
