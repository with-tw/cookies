'use client';
import { cn } from '@/helpers/utils';
import { X, Check, AlertTriangle, Loader2 } from 'lucide-react';
import { Children, ReactNode, forwardRef } from 'react';

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  activeStep: number;
}
export interface StepperItemProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export interface StepperStatusIconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  status: 'inactive' | 'failed' | 'success' | 'warning' | 'loading';
}
export interface StepperTitleProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  ({ className, children, activeStep = 0, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'stepper flex flex-row items-center justify-start gap-2',
          className,
        )}
        {...args}>
        {Children.map(children, (child, index) => {
          if (index === 0) {
            return child;
          }

          return (
            <>
              <div className="flex items-center">
                <div
                  className={cn(
                    'stepper-divider h-px w-12 flex-grow',
                    activeStep >= index ? 'bg-white' : 'bg-neutral-600',
                  )}
                />
              </div>
              <div
                className={cn(
                  activeStep >= index ? 'text-white' : 'text-neutral-600',
                )}>
                {child}
              </div>
            </>
          );
        })}
      </div>
    );
  },
);

Stepper.displayName = 'Stepper';

export const StepperItem = forwardRef<HTMLDivElement, StepperItemProps>(
  ({ className, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'stepper-item flex flex-row items-center justify-start gap-2',
          className,
        )}
        {...args}
      />
    );
  },
);

StepperItem.displayName = 'StepperItem';

const StepperStatusIconStyle: Record<
  StepperStatusIconProps['status'],
  {
    className: string;
    render: React.ReactNode;
  }
> = {
  inactive: {
    className: 'bg-neutral-700',
    render: <div />,
  },
  failed: {
    className: 'bg-red-500',
    render: <X />,
  },
  success: {
    className: 'bg-green-500',
    render: <Check />,
  },
  warning: {
    className: 'bg-yellow-600',
    render: <AlertTriangle />,
  },
  loading: {
    className: 'bg-neutral-800',
    render: <Loader2 className="opacity-60 animate-spin" />,
  },
};

export const StepperStatusIcon = forwardRef<
  HTMLDivElement,
  StepperStatusIconProps
>(({ className, status = 'inactive', ...args }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'stepper-status-icon-wrapper [&>*]:w-3 [&>*]:h-3 text-white p-1 rounded-full',
        StepperStatusIconStyle[status].className,
        className,
      )}
      {...args}>
      {StepperStatusIconStyle[status].render}
    </div>
  );
});

StepperStatusIcon.displayName = 'StepperStatusIcon';

export const StepperTitle = forwardRef<HTMLParagraphElement, StepperTitleProps>(
  ({ className, ...args }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('stepper-title text-sm', className)}
        {...args}
      />
    );
  },
);

StepperTitle.displayName = 'StepperTitle';
