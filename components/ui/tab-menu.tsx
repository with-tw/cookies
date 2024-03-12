'use client';
import { cn } from '@/helpers/utils';
import { Lock } from 'lucide-react';
import { Children, cloneElement, forwardRef, useEffect, useState } from 'react';

export interface TabMenuProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface TabMenuOptionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
  isLocked?: boolean;
}

export const TabMenu = forwardRef<HTMLDivElement, TabMenuProps>(
  ({ className, children, ...args }, ref) => {
    // state for the selected tab index
    const [selectedTab, setSelectedTab] = useState<number>(0);

    // to change the tab index on every click
    const handleTabClick = (tabIndex: number) => {
      setSelectedTab(tabIndex);
    };

    return (
      <div
        ref={ref}
        className={cn(
          'tab-menu flex items-center justify-center gap-1 bg-white/10 p-2 rounded-xl',
          className,
        )}
        {...args}>
        {Children.map(children, (child, index) =>
          cloneElement(child as React.ReactElement, {
            onClick: () => handleTabClick(index),
            isSelected: index === selectedTab,
          }),
        )}
      </div>
    );
  },
);

TabMenu.displayName = 'TabMenu';

export const TabMenuOption = forwardRef<HTMLButtonElement, TabMenuOptionProps>(
  (
    { className, isSelected = false, isLocked = false, children, ...args },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          'tab-menu-option text-sm px-4 py-2 rounded-lg focus-visible:ring focus:outline-none focus:ring-neutral-400 transition flex items-center justify-center gap-2',
          isSelected
            ? 'text-neutral-800 bg-neutral-200 shadow-md'
            : 'text-white hover:text-neutral-400',
          isLocked &&
            'cursor-not-allowed brightness-50 transition-none hover:text-white',
          className,
        )}
        disabled={isLocked || args.disabled}
        {...args}>
        {isLocked && <Lock className="w-3 h-3" />}
        {children}
      </button>
    );
  },
);

TabMenuOption.displayName = 'TabMenuOption';
