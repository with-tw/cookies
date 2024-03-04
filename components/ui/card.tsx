'use client';
import { cn } from '@/helpers/utils';
import { forwardRef } from 'react';
import { MotionProps, motion } from 'framer-motion';
import {
  ComponentAnimation,
  ComponentAnimationType,
} from '@/components/configs/animation-config';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  animationType?: ComponentAnimationType;
}
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface CardHeaderTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}
export interface CardHeaderDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}
export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, animationType = 'none', ...args }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{
          ...ComponentAnimation[animationType].initial,
        }}
        animate={{
          ...ComponentAnimation[animationType].animate,
        }}
        className={cn('card bg-neutral-900 rounded-xl', className)}
        {...(args as MotionProps)}
      />
    );
  },
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'card-header p-4 border-b border-b-neutral-800',
          className,
        )}
        {...args}
      />
    );
  },
);

CardHeader.displayName = 'CardHeader';

export const CardHeaderTitle = forwardRef<
  HTMLHeadingElement,
  CardHeaderTitleProps
>(({ className, ...args }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn(
        'card-header-title text-xl font-medium leading-snug',
        className,
      )}
      {...args}
    />
  );
});

CardHeaderTitle.displayName = 'CardHeaderTitle';

export const CardHeaderDescription = forwardRef<
  HTMLParagraphElement,
  CardHeaderDescriptionProps
>(({ className, ...args }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        'card-header-paragraph text-sm text-neutral-600',
        className,
      )}
      {...args}
    />
  );
});

CardHeaderDescription.displayName = 'CardHeaderDescription';

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...args }, ref) => {
    return (
      <div ref={ref} className={cn('card-content p-4', className)} {...args} />
    );
  },
);

CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'card-footer p-4 border-t border-t-neutral-800',
          className,
        )}
        {...args}
      />
    );
  },
);

CardFooter.displayName = 'CardFooter';
