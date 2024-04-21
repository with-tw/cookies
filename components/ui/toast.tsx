'use client';
import { cn } from '@/helpers/utils';
import * as RadixToast from '@radix-ui/react-toast';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import {
  ComponentAnimation,
  ComponentAnimationType,
} from '../configs/animation-config';
import { Button } from './button';

export type ToastPositionType =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left';

export type ToastProviderType = React.ComponentProps<
  typeof RadixToast.Provider
> & {
  position?: ToastPositionType;
};

export const ToastProvider = forwardRef<HTMLElement, ToastProviderType>(
  ({ children, position = 'bottom-right', ...args }, _) => {
    return (
      <RadixToast.Provider {...args}>
        {children}
        <ToastViewport position={position} />
      </RadixToast.Provider>
    );
  },
);

ToastProvider.displayName = 'ToastProvider';

export type ToastType = React.ComponentProps<typeof RadixToast.Root> & {
  animationType?: ComponentAnimationType;
};

export const Toast = forwardRef<HTMLDivElement, ToastType>(
  ({ className, animationType = 'from-right', ...args }, ref) => {
    if (args.open) {
      return (
        <motion.span
          initial={ComponentAnimation[animationType].initial}
          animate={ComponentAnimation[animationType].animate}>
          <RadixToast.Root
            ref={ref as any}
            className={cn(
              'p-4 rounded-xl shadow-lg bg-neutral-800 relative',
              className,
            )}
            {...args}
          />
        </motion.span>
      );
    } else {
      return <></>;
    }
  },
);

Toast.displayName = 'Toast';

export const ToastTitle = forwardRef<
  React.ElementRef<typeof RadixToast.Title>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Title>
>(({ className, ...args }, ref) => {
  return (
    <RadixToast.Title
      ref={ref}
      className={cn('font-medium text-white text-base', className)}
      {...args}
    />
  );
});

ToastTitle.displayName = 'ToastTitle';

export const ToastDescription = forwardRef<
  React.ElementRef<typeof RadixToast.Description>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Description>
>(({ className, ...args }, ref) => {
  return (
    <RadixToast.Description
      ref={ref}
      className={cn('text-sm text-neutral-500 mt-1', className)}
      {...args}
    />
  );
});

ToastDescription.displayName = 'ToastDescription';

export type ToastActionType = React.ComponentProps<typeof RadixToast.Action> &
  React.ComponentProps<typeof Button>;

export const ToastAction = forwardRef<HTMLButtonElement, ToastActionType>(
  ({ className, children, ...args }, ref) => {
    return (
      <RadixToast.Action
        ref={ref}
        className={cn('absolute top-4 right-4', className)}
        asChild
        {...args}>
        <Button size="sm" variant="secondary">
          {children}
        </Button>
      </RadixToast.Action>
    );
  },
);

ToastAction.displayName = 'ToastAction';

export const ToastViewportPositionStyle: Record<ToastPositionType, string> = {
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0',
  'top-left': 'top-0 left-0',
  'top-right': 'top-0 right-0',
} satisfies Record<ToastPositionType, string>;

export type ToastViewportType = React.ComponentProps<
  typeof RadixToast.Viewport
> & {
  position: ToastPositionType;
};

export const ToastViewport = forwardRef<HTMLOListElement, ToastViewportType>(
  ({ className, position = 'bottom-right', ...args }, ref) => {
    return (
      <RadixToast.Viewport
        ref={ref}
        className={cn(
          '[--viewport-padding:_25px] fixed flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[420px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none',
          ToastViewportPositionStyle[position],
          className,
        )}
        {...args}
      />
    );
  },
);

ToastViewport.displayName = 'ToastViewport';
