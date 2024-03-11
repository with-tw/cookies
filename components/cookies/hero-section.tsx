'use client';
import { forwardRef } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/helpers/utils';

export interface HeroSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export interface HeroSectionHeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}
export interface HeroSectionDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}
export interface HeroSectionCTAContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export interface HeroSectionCTAPrimaryActionProps extends ButtonProps {}
export interface HeroSectionCTASecondaryActionProps extends ButtonProps {}

export const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, ...args }, ref) => {
    return (
      <div ref={ref} className={cn('hero-section', className)} {...args} />
    );
  },
);

HeroSection.displayName = 'HeroSection';

export const HeroSectionHeadline = forwardRef<
  HTMLHeadingElement,
  HeroSectionHeadlineProps
>(({ className, ...args }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn(
        'hero-section-headline text-4xl font-semibold tracking-tighter',
        className,
      )}
      {...args}
    />
  );
});

HeroSectionHeadline.displayName = 'HeroSectionHeadline';

export const HeroSectionDescription = forwardRef<
  HTMLParagraphElement,
  HeroSectionDescriptionProps
>(({ className, ...args }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        'hero-section-description text-neutral-500 leading-snug my-4',
        className,
      )}
      {...args}
    />
  );
});

HeroSectionDescription.displayName = 'HeroSectionDescription';

export const HeroSectionCTAContainer = forwardRef<
  HTMLDivElement,
  HeroSectionCTAContainerProps
>(({ className, ...args }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'hero-section-cta-container flex flex-row items-center justify-start gap-4 mt-4',
      )}
      {...args}
    />
  );
});

HeroSectionCTAContainer.displayName = 'HeroSectionCTAContainer';

export const HeroSectionCTAPrimaryAction = forwardRef<
  HTMLButtonElement,
  HeroSectionCTAPrimaryActionProps
>(({ className, ...args }, ref) => {
  return (
    <Button
      ref={ref}
      variant="primary"
      className={cn('hero-section-cta-primary-action', className)}
      {...args}
    />
  );
});

HeroSectionCTAPrimaryAction.displayName = 'HeroSectionCTAPrimaryAction';

export const HeroSectionCTASecondaryAction = forwardRef<
  HTMLButtonElement,
  HeroSectionCTASecondaryActionProps
>(({ className, ...args }, ref) => {
  return (
    <Button
      ref={ref}
      variant="ghost"
      className={cn('hero-section-cta-secondary-action')}
      {...args}
    />
  );
});

HeroSectionCTASecondaryAction.displayName = 'HeroSectionCTASecondaryAction';
