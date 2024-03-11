'use client';
import { forwardRef } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/helpers/utils';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface EmptyStateIconProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export interface EmptyStateHeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}
export interface EmptyStateDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}
export interface EmptyStatePrimaryActionProps extends ButtonProps {}
export interface EmptyStateSecondaryActionProps extends ButtonProps {}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, children, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'empty-state border-2 border-dashed border-neutral-800 p-6 rounded-xl',
        )}
        {...args}>
        <div className="empty-state-content flex flex-col items-center gap-2 min-w-[460px]">
          {children}
        </div>
      </div>
    );
  },
);

EmptyState.displayName = 'EmptyState';

export const EmptyStateIcon = forwardRef<HTMLDivElement, EmptyStateIconProps>(
  ({ className, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'empty-state-icon w-[60px] h-[60px] [&>*]:w-full [&>*]:h-full text-neutral-600 mb-2',
          className,
        )}
        {...args}
      />
    );
  },
);

EmptyStateIcon.displayName = 'EmptyStateIcon';

export const EmptyStateHeadline = forwardRef<
  HTMLHeadingElement,
  EmptyStateHeadlineProps
>(({ className, ...args }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn(
        'empty-state-headline font-semibold text-2xl text-neutral-300 leading-snug tracking-tight',
        className,
      )}
      {...args}
    />
  );
});

EmptyStateHeadline.displayName = 'EmptyStateHeadline';

export const EmptyStateDescription = forwardRef<
  HTMLParagraphElement,
  EmptyStateDescriptionProps
>(({ className, ...args }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('empty-state-description text-neutral-500', className)}
      {...args}
    />
  );
});

EmptyStateDescription.displayName = 'EmptyStateDescription';

export const EmptyStatePrimaryAction = forwardRef<
  HTMLButtonElement,
  EmptyStatePrimaryActionProps
>(({ className, ...args }, ref) => {
  return (
    <Button
      ref={ref}
      variant="primary"
      className={cn('empty-state-primary-action mt-4', className)}
      {...args}
    />
  );
});

EmptyStatePrimaryAction.displayName = 'EmptyStatePrimaryAction';

export const EmptyStateSecondaryAction = forwardRef<
  HTMLButtonElement,
  EmptyStateSecondaryActionProps
>(({ className, ...args }, ref) => {
  return (
    <Button
      ref={ref}
      variant="ghost"
      size="sm"
      className={cn('empty-state-secondary-action mt-2', className)}
      {...args}
    />
  );
});

EmptyStateSecondaryAction.displayName = 'EmptyStateSecondaryAction';
