import { cn } from '@/helpers/utils';
import { forwardRef } from 'react';

export interface ResponsiveGridControlProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const ResponsiveGridControl = forwardRef<
  HTMLDivElement,
  ResponsiveGridControlProps
>(({ className, ...args }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'responsive-grid-control',
        'box-border mx-auto',
        'w-[1100px] max-2xl:w-[1200px] max-xl:w-[920px] max-lg:w-[680px] max-md:w-[440px] max-sm:w-[340px]',
        className,
      )}
      {...args}
    />
  );
});

ResponsiveGridControl.displayName = 'ResponsiveGridControl';
