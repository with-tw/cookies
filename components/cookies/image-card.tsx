'use client';
import { cn } from '@/helpers/utils';
import React, { forwardRef } from 'react';

const DEFAULT_HEIGHT = '200px';
const DEFAULT_WIDTH = '300px';

export interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
}
export interface ImageCardCoverProps
  extends React.HTMLAttributes<HTMLDivElement> {
  height?: string;
}
export interface ImageCardHeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}
export interface ImageCardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const ImageCard = forwardRef<HTMLDivElement, ImageCardProps>(
  ({ className, style, width = DEFAULT_WIDTH, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('image-card grid gap-2', className)}
        style={{
          ...style,
          width,
        }}
        {...args}
      />
    );
  },
);

ImageCard.displayName = 'ImageCard';

export const ImageCardCover = forwardRef<HTMLDivElement, ImageCardCoverProps>(
  ({ className, style, height = DEFAULT_HEIGHT, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'image-card-cover overflow-hidden flex flex-row items-center justify-center rounded-xl shadow-lg',
          className,
        )}
        id="image-card-cover"
        style={{
          ...style,
          height,
        }}
        {...args}
      />
    );
  },
);

ImageCardCover.displayName = 'ImageCardCover';

export const ImageCardHeadline = forwardRef<
  HTMLHeadingElement,
  ImageCardHeadlineProps
>(({ className, ...args }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'image-card-headline mt-2 leading-snug tracking-tighter font-medium text-xl',
        className,
      )}
      {...args}
    />
  );
});

ImageCardHeadline.displayName = 'ImageCardHeadline';

export const ImageCardDescription = forwardRef<
  HTMLParagraphElement,
  ImageCardDescriptionProps
>(({ className, ...args }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        'image-card-description text-sm text-neutral-500',
        className,
      )}
      {...args}
    />
  );
});

ImageCardDescription.displayName = 'ImageCardDescription';
