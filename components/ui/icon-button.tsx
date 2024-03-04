"use client";
import { forwardRef } from 'react';
import {
  ComponentAnimation,
  ComponentAnimationType,
} from '@/components/configs/animation-config';
import { MotionProps, motion } from 'framer-motion';
import { cn } from '@/helpers/utils';
import { Loader2 } from 'lucide-react';

export type IconButtonVariantType = 'primary' | 'secondary' | 'ghost';
export type IconButtonSizeType = 'sm' | 'md' | 'lg';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  animationType?: ComponentAnimationType;
  stretch?: boolean;
  variant?: IconButtonVariantType;
  size?: IconButtonSizeType;
}

const IconButtonVariantStyles: Record<IconButtonVariantType, string> = {
  primary:
    'bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-md active:shadow',
  secondary: 'bg-white/10 hover:bg-white/20 focus:ring-neutral-700',
  ghost: 'bg-transparent hover:bg-white/10',
};

const IconButtonSizeStyles: Record<IconButtonSizeType, string> = {
  sm: 'text-xs p-2 rounded-lg',
  md: 'text-sm p-3 rounded-lg',
  lg: 'text-base p-4 rounded-xl',
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      children,
      isLoading = false,
      disabled = false,
      stretch = false,
      animationType = 'none',
      variant = 'primary',
      size = 'md',
      ...args
    },
    ref,
  ) => {
    return (
      <motion.button
        ref={ref}
        initial={{
          ...ComponentAnimation[animationType].initial,
        }}
        animate={{
          ...ComponentAnimation[animationType].animate,
        }}
        whileTap={{
          scale: isLoading || disabled ? 1 : 0.9,
        }}
        className={cn(
          'outline-none',
          !disabled && 'hover:brightness-110 active:brightness-90',
          animationType === 'none' && 'transition-all',
          IconButtonVariantStyles[variant],
          IconButtonSizeStyles[size],
          stretch && 'w-full',
          isLoading && 'cursor-default opacity-60 transition-all',
          disabled && 'cursor-not-allowed opacity-40',
          className,
        )}
        {...(args as MotionProps)}>
        {!isLoading && children}
        {isLoading && (
          <motion.span
            key={'loader-wrapper'}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}>
            <Loader2 className="h-4 w-4 animate-spin" />
          </motion.span>
        )}
      </motion.button>
    );
  },
);

IconButton.displayName = 'IconButton';
