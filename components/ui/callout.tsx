'use client';
import { ReactNode, forwardRef } from 'react';
import {
  ComponentAnimation,
  ComponentAnimationType,
} from '@/components/configs/animation-config';
import { cn } from '@/helpers/utils';
import { MotionProps, motion } from 'framer-motion';
import { AlertCircle, AlertTriangle, CheckCircle, Info } from 'lucide-react';

export type CalloutVariantType =
  | 'info'
  | 'error'
  | 'warning'
  | 'success'
  | 'subtle';
export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CalloutVariantType;
  animationType?: ComponentAnimationType;
  stretch?: boolean;
}

const CalloutVariantStyle: Record<CalloutVariantType, string> = {
  info: '[&>.callout-icon]:text-blue-500',
  error: '[&>.callout-icon]:text-red-500',
  warning: '[&>.callout-icon]:text-yellow-500',
  success: '[&>.callout-icon]:text-green-500',
  subtle: '[&>.callout-icon]:text-neutral-600',
};

const CalloutVariantIcon: Record<CalloutVariantType, ReactNode> = {
  info: <Info />,
  error: <AlertTriangle />,
  warning: <AlertCircle />,
  success: <CheckCircle />,
  subtle: <Info />,
};

export const Callout = forwardRef<HTMLDivElement, CalloutProps>(
  (
    {
      className,
      children,
      variant = 'info',
      animationType = 'none',
      stretch = false,
      ...args
    },
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        initial={{
          ...ComponentAnimation[animationType].initial,
        }}
        animate={{
          ...ComponentAnimation[animationType].animate,
        }}
        className={cn(
          'flex flex-row gap-2 pl-3 pr-4 py-2 items-center justify-start rounded-lg bg-neutral-900 shadow-lg',
          CalloutVariantStyle[variant],
          stretch && 'w-full',
          className,
        )}
        {...(args as MotionProps)}>
        <span className="callout-icon w-4 h-4 *:w-full *:h-full">
          {CalloutVariantIcon[variant]}
        </span>
        <div className="callout-content font-medium text-sm text-neutral-400">
          {children}
        </div>
      </motion.div>
    );
  },
);

Callout.displayName = 'Callout';
