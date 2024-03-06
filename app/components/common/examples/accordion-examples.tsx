'use client';
import { ComponentAnimationType } from '@/components/configs/animation-config';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/helpers/utils';
import { useState } from 'react';

export const AccordionDefaultExample = () => (
  <div className="scale-50">
    <Accordion type="single">
      <AccordionItem value="feature-1">
        <AccordionTrigger>Accessible</AccordionTrigger>
        <AccordionContent>Fully accessible using keyboard</AccordionContent>
      </AccordionItem>
      <AccordionItem value="feature-2">
        <AccordionTrigger>Clean Design</AccordionTrigger>
        <AccordionContent>
          Has a clean design with option to open single/multiple content at a
          time.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

export const AccordionWithAnimationInContent = () => {
  const [animation, setAnimation] =
    useState<ComponentAnimationType>('from-bottom');
  return (
    <div className="accordion-animation-demo-wrapper space-y-6">
      <div className="flex flex-row items-center justify-center gap-4">
        {['from-bottom', 'from-top', 'from-right', 'from-left'].map(
          (anim, index) => (
            <button
              key={index}
              className={cn(
                'text-sm text-white/20',
                anim === animation && 'text-white',
              )}
              onClick={() => setAnimation(anim as ComponentAnimationType)}>
              {anim}
            </button>
          ),
        )}
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="feature-1">
          <AccordionTrigger>Accessible</AccordionTrigger>
          <AccordionContent animationType={animation}>
            Fully accessible using keyboard
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="feature-2">
          <AccordionTrigger>Clean Design</AccordionTrigger>
          <AccordionContent animationType={animation}>
            Has a clean design with option to open single/multiple content at a
            time.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
