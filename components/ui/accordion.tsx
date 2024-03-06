'use client';

import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/helpers/utils';
import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import {
  ComponentAnimation,
  ComponentAnimationType,
} from '../configs/animation-config';

export const Accordion = forwardRef<
  React.ElementRef<typeof RadixAccordion.Root>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Root>
>(({ className, ...args }, ref) => {
  return (
    <RadixAccordion.Root
      ref={ref}
      className={cn(
        'rounded-xl overflow-hidden grid divide-y divide-neutral-800',
        className,
      )}
      {...args}
    />
  );
});

Accordion.displayName = 'Accordion';

export const AccordionItem = forwardRef<
  React.ElementRef<typeof RadixAccordion.Item>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Item>
>(({ className, ...args }, ref) => {
  return (
    <RadixAccordion.Item
      ref={ref}
      className={cn('accordion-item w-[340px] bg-neutral-900', className)}
      {...args}
    />
  );
});

AccordionItem.displayName = 'AccordionItem';

export const AccordionTrigger = forwardRef<
  React.ElementRef<typeof RadixAccordion.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger>
>(({ className, children, ...args }, ref) => {
  return (
    <RadixAccordion.Header className="flex">
      <RadixAccordion.Trigger
        ref={ref}
        className={cn(
          'flex flex-row items-center justify-between w-full px-4 py-3 [&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...args}>
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
});

AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = forwardRef<
  React.ElementRef<typeof RadixAccordion.Content>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Content> & {
    animationType?: ComponentAnimationType;
  }
>(({ className, children, animationType = 'none', ...args }, ref) => {
  return (
    <RadixAccordion.Content
      ref={ref}
      className={cn(
        'accordion-content px-4 py-3 bg-neutral-800 shadow-inner shadow-black/20',
      )}
      {...args}>
      <motion.div
        initial={{
          ...ComponentAnimation[animationType].initial,
        }}
        animate={{
          ...ComponentAnimation[animationType].animate,
        }}
        className={cn('accordion-content-wrapper', className)}>
        {children}
      </motion.div>
    </RadixAccordion.Content>
  );
});

AccordionContent.displayName = 'AccordionContent';
