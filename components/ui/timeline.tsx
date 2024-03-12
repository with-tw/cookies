'use client';
import { ClassValue } from 'clsx';
import { ReactNode, forwardRef } from 'react';
import { Button, ButtonProps } from './button';
import { cn } from '@/helpers/utils';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface TimelineItemProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export type TimelineItemIconVariants =
  | 'none'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';
export interface TimelineItemIconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: TimelineItemIconVariants;
  iconBG?: ClassValue;
}
export interface TimelineItemHeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}
export interface TimelineItemDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}
export interface TimelineItemActionContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export interface TimelineItemPrimaryActionProps extends ButtonProps {}
export interface TimelineItemSecondaryActionProps extends ButtonProps {}

export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'timeline border-l-2 border-neutral-700 relative grid grid-cols-1 gap-8 py-2',
          className,
        )}
        {...args}
      />
    );
  },
);

Timeline.displayName = 'Timeline';

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'timeline-item relative flex flex-col items-start gap-4 pl-6 min-w-[420px] w-fit max-w-[480px]',
          className,
        )}
        {...args}
      />
    );
  },
);

TimelineItem.displayName = 'TimelineItem';

export const TimelineItemIconStyles: Record<
  TimelineItemIconVariants,
  { style: string; render: ReactNode }
> = {
  none: {
    style: 'bg-neutral-700',
    render: <Info />,
  },
  info: {
    style: 'bg-blue-500 text-white',
    render: <Info />,
  },
  error: {
    style: 'bg-red-500 text-white',
    render: <AlertTriangle />,
  },
  success: {
    style: 'bg-green-600 text-white',
    render: <CheckCircle />,
  },
  warning: {
    style: 'bg-yellow-500 text-white',
    render: <Info />,
  },
};

export const TimelineItemIcon = forwardRef<
  HTMLDivElement,
  TimelineItemIconProps
>(({ className, children = null, variant = 'none', ...args }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'timeline-item-icon-wrapper absolute top-1 left-[-13px]  p-1.5 w-6 h-6 bg-neutral-700 rounded-full flex flex-row items-center justify-center',
        TimelineItemIconStyles[variant].style,
        className,
      )}
      {...args}>
      <div className="timeline-item-icon *:w-full *:h-full p-0 m-0">
        {children || TimelineItemIconStyles[variant].render}
      </div>
    </div>
  );
});

TimelineItemIcon.displayName = 'TimelineItemIcon';

export const TimelineItemHeadline = forwardRef<
  HTMLHeadingElement,
  TimelineItemHeadlineProps
>(({ className, ...args }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn(
        'timeline-item-headline text-3xl font-semibold text-white',
        className,
      )}
      {...args}
    />
  );
});

TimelineItemHeadline.displayName = 'TimelineItemHeadline';

export const TimelineItemDescription = forwardRef<
  HTMLParagraphElement,
  TimelineItemDescriptionProps
>(({ className, ...args }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        'timeline-item-description text-sm font-normal text-neutral-500',
        className,
      )}
      {...args}
    />
  );
});

TimelineItemDescription.displayName = 'TimelineItemDescription';

export const TimelineItemActionContainer = forwardRef<
  HTMLDivElement,
  TimelineItemActionContainerProps
>(({ className, ...args }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'timeline-item-action-container flex flex-row items-center justify-start gap-4',
        className,
      )}
      {...args}
    />
  );
});

TimelineItemActionContainer.displayName = 'TimelineItemActionContainer';

export const TimelineItemPrimaryAction = forwardRef<
  HTMLButtonElement,
  TimelineItemPrimaryActionProps
>(({ className, ...args }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn('timeline-item-primary-action', className)}
      {...args}
    />
  );
});

TimelineItemPrimaryAction.displayName = 'TimelineItemPrimaryAction';

export const TimelineItemSecondaryAction = forwardRef<
  HTMLButtonElement,
  TimelineItemSecondaryActionProps
>(({ className, ...args }, ref) => {
  return (
    <Button
      ref={ref}
      variant="secondary"
      className={cn('timeline-item-secondary-props', className)}
      {...args}
    />
  );
});

TimelineItemSecondaryAction.displayName = 'TimelineItemSecondaryAction';
