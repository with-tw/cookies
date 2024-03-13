'use client';
import { ChevronRight } from 'lucide-react';
import React, { ReactElement, forwardRef, useState } from 'react';
import { MotionProps, motion } from 'framer-motion';
import { cn } from '@/helpers/utils';
import {
  ComponentAnimation,
  ComponentAnimationType,
} from '@/components/configs/animation-config';

export interface SidebarMenuContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export interface MenuProps {
  trigger: string;
  icon?: ReactElement;
}
export interface SidebarMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    MenuProps {}
export interface SidebarMenuTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  animationType?: ComponentAnimationType;
}
export interface SidebarMenuContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export interface SidebarMenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  animationType?: ComponentAnimationType;
}
export interface SidebarSubMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    MenuProps {
  animationType?: ComponentAnimationType;
}
export interface SidebarSubMenuTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  animationType?: ComponentAnimationType;
}
export interface SidebarSubMenuContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export interface SidebarSubMenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  animationType?: ComponentAnimationType;
}

export const SidebarMenuContainer = forwardRef<
  HTMLDivElement,
  SidebarMenuContainerProps
>(({ className, children, ...args }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('sidebar-menu-container grid gap-1', className)}
      {...args}>
      {children}
    </div>
  );
});

SidebarMenuContainer.displayName = 'SidebarMenuContainer';

export const SidebarMenu = forwardRef<HTMLDivElement, SidebarMenuProps>(
  ({ className, children, trigger, icon = null, ...args }, ref) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
      <div ref={ref} className={cn('sidebar-menu', className)} {...args}>
        <SidebarMenuTrigger onClick={() => setOpen(!open)} isOpen={open}>
          {icon}
          {trigger}
        </SidebarMenuTrigger>
        {open && <div>{children}</div>}
      </div>
    );
  },
);

SidebarMenu.displayName = 'SidebarMenu';

const SidebarMenuTrigger = forwardRef<
  HTMLButtonElement,
  SidebarMenuTriggerProps
>(
  (
    { className, children, isOpen = false, animationType = 'none', ...args },
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
        className={cn(
          'sidebar-menu-trigger px-3 py-1.5 flex flex-row justify-between items-center hover:opacity-60 rounded-xl w-full truncate',
          className,
        )}
        {...(args as MotionProps)}>
        <div className="flex flex-row items-center justify-start gap-2">
          {children}
        </div>
        <ChevronRight className={cn('h-4 w-4', isOpen && 'rotate-90')} />
      </motion.button>
    );
  },
);

SidebarMenuTrigger.displayName = 'SidebarMenuTrigger';

export const SidebarMenuContent = forwardRef<
  HTMLDivElement,
  SidebarMenuContentProps
>(({ className, children, ...args }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'sidebar-menu-content grid grid-cols-1 pl-6 py-3 gap-3',
        className,
      )}
      {...args}>
      {children}
    </div>
  );
});

SidebarMenuContent.displayName = 'SidebarMenuContent';

export const SidebarMenuItem = forwardRef<
  HTMLButtonElement,
  SidebarMenuItemProps
>(({ className, children, animationType = 'none', ...args }, ref) => {
  return (
    <motion.button
      ref={ref}
      initial={{
        ...ComponentAnimation[animationType].initial,
      }}
      animate={{
        ...ComponentAnimation[animationType].animate,
      }}
      className={cn(
        'sidebar-menu-item text-left cursor-pointer hover:opacity-60 truncate',
        className,
      )}
      {...(args as MotionProps)}>
      {children}
    </motion.button>
  );
});

SidebarMenuItem.displayName = 'SidebarMenuItem';

export const SidebarSubMenu = forwardRef<HTMLDivElement, SidebarSubMenuProps>(
  (
    {
      className,
      children,
      trigger,
      icon = null,
      animationType = 'none',
      ...args
    },
    ref,
  ) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
      <div ref={ref} className={cn('sidebar-sub-menu', className)} {...args}>
        <SidebarSubMenuTrigger onClick={() => setOpen(!open)} isOpen={open}>
          {icon}
          {trigger}
        </SidebarSubMenuTrigger>
        {open && (
          <motion.div
            initial={{
              ...ComponentAnimation[animationType].initial,
            }}
            animate={{
              ...ComponentAnimation[animationType].animate,
            }}>
            {children}
          </motion.div>
        )}
      </div>
    );
  },
);

SidebarSubMenu.displayName = 'SidebarSubMenu';

const SidebarSubMenuTrigger = forwardRef<
  HTMLButtonElement,
  SidebarSubMenuTriggerProps
>(
  (
    { className, children, isOpen = false, animationType = 'none', ...args },
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
        className={cn(
          'sidebar-sub-menu-trigger px-4 py-1.5 flex flex-row justify-between items-center hover:opacity-60 rounded-xl w-full truncate',
          className,
        )}
        {...(args as MotionProps)}>
        <div className="flex flex-row items-center justify-start gap-2">
          {children}
        </div>
        <ChevronRight className={cn('h-4 w-4', isOpen && 'rotate-90')} />
      </motion.button>
    );
  },
);

SidebarSubMenuTrigger.displayName = 'SidebarSubMenuTrigger';

export const SidebarSubMenuContent = forwardRef<
  HTMLDivElement,
  SidebarSubMenuContentProps
>(({ className, children, ...args }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'sidebar-sub-menu-content grid grid-cols-1 pl-6 py-3 gap-3',
        className,
      )}
      {...args}>
      {children}
    </div>
  );
});

SidebarSubMenuContent.displayName = 'SidebarSubMenuContent';

export const SidebarSubMenuItem = forwardRef<
  HTMLButtonElement,
  SidebarSubMenuItemProps
>(({ className, children, animationType = 'none', ...args }, ref) => {
  return (
    <motion.button
      ref={ref}
      initial={{
        ...ComponentAnimation[animationType].initial,
      }}
      animate={{
        ...ComponentAnimation[animationType].animate,
      }}
      className={cn(
        'sidebar-sub-menu-item text-left cursor-pointer hover:opacity-60 truncate',
        className,
      )}
      {...(args as MotionProps)}>
      {children}
    </motion.button>
  );
});

SidebarSubMenuItem.displayName = 'SidebarSubMenuItem';
