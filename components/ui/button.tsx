'use client';
import { cn } from '@/helpers/utils';
import { ArrowRight, ChevronRight, Loader2 } from 'lucide-react';
import { ReactNode, forwardRef, useState } from 'react';

import { motion } from 'framer-motion';
import { ComponentAnimationType } from '../configs/animation-config';
import { ComponentAnimation } from '../configs/animation-config';

export type ButtonVariantType = 'primary' | 'secondary' | 'ghost';
export type ButtonSizeType = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  withArrow?: boolean;
  icon?: ReactNode;
  iconDirection?: 'left' | 'right';
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  stretch?: boolean;
  isLoading?: boolean;
  animationType?: ComponentAnimationType;
}

const ButtonVariantStyles: Record<ButtonVariantType, string> = {
  primary:
    'bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-md active:shadow',
  secondary: 'bg-neutral-800 focus:ring-neutral-700',
  ghost: 'bg-transparent hover:bg-white/10',
};

const ButtonSizeStyles: Record<ButtonSizeType, string> = {
  sm: 'text-xs px-4 py-2 rounded-lg',
  md: 'text-sm px-4 py-2 rounded-lg',
  lg: 'text-base px-6 py-3 rounded-xl',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = 'primary',
      size = 'md',
      icon = null,
      iconDirection = 'left',
      withArrow = false,
      stretch = false,
      disabled = false,
      isLoading = false,
      animationType = 'none',
      ...args
    },
    ref,
  ) => {
    const [hovering, setHovering] = useState<boolean>(false);
    return (
      <motion.button
        initial={{
          ...ComponentAnimation[animationType].initial,
        }}
        animate={{
          ...ComponentAnimation[animationType].animate,
        }}
        whileTap={{
          scale: 0.9,
        }}
        ref={ref}
        className={cn(
          'tracking-tight font-medium flex flex-row items-center justify-center gap-1 hover:gap-1.5 outline-none',
          !disabled && 'hover:brightness-110 active:brightness-90',
          animationType === 'none' && 'transition-all',
          ButtonVariantStyles[variant],
          ButtonSizeStyles[size],
          className,
          stretch && 'w-full',
          isLoading && 'cursor-default opacity-60',
          disabled && 'cursor-not-allowed opacity-40',
        )}
        onMouseEnter={(event) => {
          // toggling from chevron to arrow
          if (withArrow) setHovering(true);
          // Run the function passed in args (if it exists)
          if (args && args.onMouseEnter) {
            args.onMouseEnter(event);
          }
        }}
        onMouseLeave={(event) => {
          // toggling back from arrow to chevron
          setHovering(false);
          // Run the function passed in args (if it exists)
          if (args && args.onMouseLeave) {
            args.onMouseLeave(event);
          }
        }}
        {...(args as unknown as any)}>
        {isLoading ? (
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
        ) : (
          <>
            <span className="button-content-wrapper">
              {iconDirection === 'left' && icon}
              {children}
              {iconDirection === 'right' && icon}
            </span>
            {withArrow &&
              (!hovering ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ArrowRight className="h-4 w-4 animate-pulse" />
              ))}
          </>
        )}
      </motion.button>
    );
  },
);

Button.displayName = 'Button';
