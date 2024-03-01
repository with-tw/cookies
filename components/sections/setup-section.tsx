import { SetupSectionContent } from '@/common/content';
import { ResponsiveControl } from '../layouts/responsive-control';
import { forwardRef } from 'react';
import { cn } from '@/helpers/utils';
import { PageHeader } from '../layouts/page-header';
import { Button } from '../ui/button';
import { CodeBlock } from '../ui/code-block';

type SetupStepType = {
  title: string;
  description: string;
  action?: {
    name: string;
    path: string;
  };
  code?: {
    syntax: string;
    content: string;
  };
};

const SetupData: SetupStepType[] = [
  {
    title: 'Installing dependencies',
    description:
      'All the cookies, components and required utilities are using various npm dependencies. Install them as your first step to get started.',
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
      <section ref={ref} className={cn('setup-section')} id="setup" {...args}>
        <PageHeader>
          <ResponsiveControl className={cn('relative', className)}>
            <h2 className="font-semibold text-4xl">
              {SetupSectionContent.headline}
            </h2>
            <div className="setup-description-wrapper mt-4">
              <p className="w-[56ch] opacity-60">
                {SetupSectionContent.description}
              </p>
            </div>
            <div className="next-step-actions-wrapper mt-6">
              <Button withArrow>Explore Components</Button>
            </div>
          </ResponsiveControl>
        </PageHeader>
        <div className="mt-12 setup-steps-container">
          <ResponsiveControl>
            {SetupData.map((setup, index) => {
              return (
                <SetupStepContainer
                  key={index}
                  stepContent={setup}
                  stepIndex={index}
                />
              );
            })}
          </ResponsiveControl>
        </div>
      </section>
    );
  },
);

SetupSection.displayName = 'SetupSection';

export const SetupStepContainer = forwardRef<
  HTMLDivElement,
  SetupStepContainerProps
>(({ className, stepContent, stepIndex, ...args }, ref) => {
  return (
    <div ref={ref} className={cn('setup-step-container relative')} {...args}>
      <div className="setup-step-body flex flex-col items-start gap-6">
        <div className="setup-step-body-content-wrapper flex flex-col items-start gap-2 w-[600px]">
          <h3 className="text-xl font-medium">{stepContent.title}</h3>
          <p className="text-white/50 mt-2">{stepContent.description}</p>
        </div>
        <CodeBlock>
          {'yarn add lucide-react framer-motion clsx tailwind-merge'}
        </CodeBlock>
      </div>
    </div>
  );
});

SetupStepContainer.displayName = 'SetupStepContainer';
