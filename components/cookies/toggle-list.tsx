'use client';
import { forwardRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/helpers/utils';
import { Switch } from '@/components/ui/switch';

export const ToggleListContainer = Accordion;
ToggleListContainer.displayName = 'ToggleListContainer';

export const ToggleList = AccordionItem;
ToggleList.displayName = 'ToggleList';

export const ToggleListTrigger = AccordionTrigger;
ToggleListTrigger.displayName = 'ToggleListTrigger';

export const ToggleListContent = forwardRef<
  React.ElementRef<typeof AccordionContent>,
  React.ComponentPropsWithoutRef<typeof AccordionContent>
>(({ className, ...args }, ref) => {
  return (
    <AccordionContent
      ref={ref}
      className={cn('toggle-list-content grid grid-cols-1 gap-4', className)}
      {...args}
    />
  );
});
ToggleListContent.displayName = 'ToggleListContent';

export interface ToggleListItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isChecked?: boolean;
}

export const ToggleListItem = forwardRef<HTMLDivElement, ToggleListItemProps>(
  ({ className, children, isChecked = false, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'toggle-list-item flex flex-row items-center justify-between gap-6',
          className,
        )}
        {...args}>
        <p className="toggle-list-item-value text-sm text-white truncate">
          {children}
        </p>
        <Switch isChecked={isChecked} />
      </div>
    );
  },
);

ToggleListItem.displayName = 'ToggleListItem';
