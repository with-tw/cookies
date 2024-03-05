'use client';
import { cn } from '@/helpers/utils';
import { forwardRef, useState } from 'react';
import { MotionProps, motion } from 'framer-motion';
import {
  ComponentAnimation,
  ComponentAnimationType,
} from '../configs/animation-config';
import { Loader2 } from 'lucide-react';

export interface SwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isChecked?: boolean;
  withLabel?: string;
  hasLoading?: boolean;
  labelDirection?: 'hl' | 'hr' | 'v';
  animationType?: ComponentAnimationType;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className,
      children: _,
      isChecked = false,
      withLabel = '',
      hasLoading = false,
      labelDirection = 'hl',
      animationType = 'none',
      ...args
    },
    ref,
  ) => {
    const [checked, setChecked] = useState<boolean>(isChecked);
    const loader = (
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
        <Loader2 className="h-3 w-3 animate-spin" />
      </motion.span>
    );
    const switchElement = (
      <motion.button
        ref={ref}
        initial={{
          ...ComponentAnimation[animationType].initial,
        }}
        animate={{
          ...ComponentAnimation[animationType].animate,
        }}
        className={cn(
          'switch w-12 p-1.5 h-fit rounded-full bg-white/20 flex flex-row items-center disabled:brightness-50 disabled:cursor-not-allowed',
          checked && 'bg-blue-500',
          hasLoading && 'cursor-default brightness-50',
          className,
        )}
        onClick={(event) => {
          if (hasLoading) return;
          setChecked(!checked);
          // appending the args.onClick if present
          args && args.onClick && args.onClick(event);
        }}
        {...(args as MotionProps)}>
        <motion.span
          initial={{
            x: checked ? 19 : 0,
          }}
          animate={{
            x: checked ? 19 : 0,
          }}
          className={cn(
            'switch-thumb inline-block rounded-full w-4 h-4 bg-white shadow-sm',
          )}
        />
      </motion.button>
    );
    if (withLabel.length) {
      return (
        <div
          className={cn(
            'switch-with-label flex gap-2',
            labelDirection === 'hl' && 'flex-row items-center',
            labelDirection === 'hr' && 'flex-row-reverse items-center',
            labelDirection === 'v' && 'flex-col items-start',
          )}>
          <label
            htmlFor={args.id}
            className="text-sm font-medium text-neutral-200">
            {withLabel}
          </label>
          {switchElement} {hasLoading && loader}
        </div>
      );
    } else {
      return (
        <div className="switch-wrapper h-fit w-fit flex flex-row items-center gap-2">
          {switchElement} {hasLoading ? loader : <></>}
        </div>
      );
    }
  },
);

Switch.displayName = 'Switch';
