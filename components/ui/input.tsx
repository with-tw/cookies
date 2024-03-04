'use client';
import { cn } from '@/helpers/utils';
import React, { forwardRef } from 'react';
import { MotionProps, motion } from 'framer-motion';
import {
  ComponentAnimation,
  ComponentAnimationType,
} from '@/components/configs/animation-config';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  stretch?: boolean;
  withLabel?: string;
  labelDirection?: 'h' | 'v';
  animationType?: ComponentAnimationType;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      stretch = false,
      withLabel = '',
      labelDirection = 'h',
      animationType = 'none',
      ...args
    },
    ref,
  ) => {
    const inputElement = (
      <motion.input
        ref={ref}
        initial={{
          ...ComponentAnimation[animationType].initial,
        }}
        animate={{
          ...ComponentAnimation[animationType].animate,
        }}
        className={cn(
          'px-3 py-2 rounded-xl border border-transparent bg-white/10 text-sm focus:outline-none focus:bg-white/15',
          className,
        )}
        {...(args as MotionProps)}
      />
    );
    if (withLabel.length) {
      return (
        <div
          className={cn(
            'labelled-input-wrapper flex gap-2',
            labelDirection === 'h'
              ? 'flex-row items-center'
              : 'flex-col items-start',
          )}>
          <label
            htmlFor={args.name}
            className="text-sm font-medium text-neutral-200">
            {withLabel}
          </label>
          {inputElement}
        </div>
      );
    } else {
      return inputElement;
    }
  },
);

Input.displayName = 'Input';
