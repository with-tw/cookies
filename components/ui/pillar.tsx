'use client';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/helpers/utils';
import { forwardRef } from 'react';

export interface PillarProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface PillarIconProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface PillarHeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}
export interface PillarDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}
export interface PillarActionProps extends ButtonProps {}

export const Pillar = forwardRef<HTMLDivElement, PillarProps>(
  ({ className, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-start gap-4 w-[320px] box-border',
          className,
        )}
        {...args}
      />
    );
  },
);

Pillar.displayName = 'Pillar';

export const PillarIcon = forwardRef<HTMLDivElement, PillarIconProps>(
  ({ className, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'pillar-icon w-12 h-12 [&>*]:w-full [&>*]:h-full mb-2 text-blue-500',
          className,
        )}
        {...args}
      />
    );
  },
);

PillarIcon.displayName = 'PillarIcon';

export const PillarHeadline = forwardRef<
  HTMLHeadingElement,
  PillarHeadlineProps
>(({ className, ...args }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn(
        'pillar-headline text-xl font-semibold text-white',
        className,
      )}
      {...args}
    />
  );
});

PillarHeadline.displayName = 'PillarHeadline';

export const PillarDescription = forwardRef<
  HTMLParagraphElement,
  PillarDescriptionProps
>(({ className, ...args }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('pillar-description text-neutral-500 text-base', className)}
      {...args}
    />
  );
});

PillarDescription.displayName = 'PillarDescription';

export const PillarAction = forwardRef<HTMLButtonElement, PillarActionProps>(
  ({ className, ...args }, ref) => {
    return (
      <Button
        ref={ref}
        variant="ghost"
        className={cn('pillar-action', className)}
        withArrow
        {...args}
      />
    );
  },
);

PillarAction.displayName = 'PillarAction';
