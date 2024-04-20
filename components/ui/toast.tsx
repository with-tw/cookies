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

export const ToastProvider = forwardRef<
  React.ElementRef<typeof RadixToast.Provider>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Provider>
>(({ children, ...args }, _) => {
  return (
    <RadixToast.Provider {...args}>
      {children}
      <ToastViewport />
    </RadixToast.Provider>
  );
});

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
            className={cn('p-4 rounded-xl shadow-lg bg-neutral-800 relative', className)}
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

export const ToastClose = forwardRef<
  React.ElementRef<typeof RadixToast.Close>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Close>
>(({ className, ...args }, ref) => {
  return <RadixToast.Close ref={ref} className={cn('', className)} {...args} />;
});

ToastClose.displayName = 'ToastClose';

export type ToastActionType = React.ComponentProps<typeof RadixToast.Action> &
  React.ComponentProps<typeof Button>;

export const ToastAction = forwardRef<
  HTMLButtonElement, ToastActionType
>(({ className, children, ...args }, ref) => {
  return (
    <RadixToast.Action ref={ref} className={cn('absolute top-4 right-4', className)} {...args} asChild>
      <Button size='sm' variant='secondary'>{children}</Button>
    </RadixToast.Action>
  );
});

ToastAction.displayName = 'ToastAction';

export const ToastViewport = forwardRef<
  React.ElementRef<typeof RadixToast.Viewport>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Viewport>
>(({ className, ...args }, ref) => {
  return (
    <RadixToast.Viewport
      ref={ref}
      className={cn(
        '[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[420px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none',
        className,
      )}
      {...args}
    />
  );
});

ToastViewport.displayName = 'ToastViewport';
