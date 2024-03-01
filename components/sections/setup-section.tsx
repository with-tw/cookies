import { SetupSectionContent } from '@/common/content';
import { ResponsiveControl } from '../layouts/responsive-control';
import { forwardRef } from 'react';
import { cn } from '@/helpers/utils';

type SetupStepType = {
  title: string;
  description: string;
  action?: {
    name: string;
    path: string;
  };
  code?: string;
};

const SetupData: SetupStepType[] = [
  {
    title: 'Installing dependencies',
    description: '',
  },
];

export interface SetupSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export interface SetupStepContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  stepContent: SetupStepType;
  stepIndex: number;
}

export const SetupSection = forwardRef<HTMLDivElement, SetupSectionProps>(
  ({ className, ...args }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('setup-section border-y border-white/20')}
        id="setup"
        {...args}>
        <ResponsiveControl className={cn('relative', className)}>
          <h2 className="font-semibold text-3xl">
            {SetupSectionContent.headline}
          </h2>
          <div className="setup-description-wrapper mt-4">
            <p className="w-[40ch] opacity-60">
              {SetupSectionContent.description}
            </p>
          </div>
          <div className="mt-12 setup-steps-container"></div>
        </ResponsiveControl>
      </section>
    );
  },
);

SetupSection.displayName = 'SetupSection';

export const SetupStepContainer = forwardRef<
  HTMLDivElement,
  SetupStepContainerProps
>(({ className, ...args }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('setup-step-container relative')}
      {...args}></div>
  );
});

SetupStepContainer.displayName = 'SetupStepContainer';
