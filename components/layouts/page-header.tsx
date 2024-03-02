import { cn } from '@/helpers/utils';
import { forwardRef } from 'react';

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ className, ...args }, ref) => {
    return (
      <header
        ref={ref}
        className={cn('my-24 relative border-y border-white/10', className)}
        {...args}
      />
    );
  },
);

PageHeader.displayName = 'PageHeader';
