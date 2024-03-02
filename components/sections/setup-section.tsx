import { SetupSectionContent } from '@/common/content';
import { ResponsiveControl } from '../layouts/responsive-control';
import { forwardRef } from 'react';
import { cn } from '@/helpers/utils';
import { PageHeader } from '../layouts/page-header';
import { Button } from '../ui/button';
import { CodeBlock } from '../ui/code-block';
import { SETUP_CODE } from '@/package/registry/setup-code';

type SetupStepType = {
  title: string;
  description: string;
  action?: {
    name: string;
    path: string;
  };
  code?:
    | string
    | {
        content: string;
        fileName: string;
      };
};

export interface SetupSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export interface SetupStepContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  stepContent: SetupStepType;
  stepIndex: number;
}

const SetupData: SetupStepType[] = [
  {
    title: 'Have a basic NextJS + Typescript + Tailwind project setup',
    description:
      'The setup is going to require a NextJS app with Typescript & Tailwind. Make sure you have a simple project setup, If you have it already, you can go to the next app.',
    code: `# using npm \nnpx create-next-app app-name \n\n# using yarn \nyarn create next-app app-name`,
  },
  {
    title: 'Installing dependencies',
    description:
      'All the cookies, components and required utilities are using various npm dependencies. Install them as your first step to get started.',
    code: 'yarn add lucide-react framer-motion clsx tailwind-merge',
  },
  {
    title: 'Add configuration for animations',
    description:
      'The configurations are going to provide basic animations to your components. You can customize and add custom animations in this code.',
    code: {
      content: SETUP_CODE['animation-config'].code,
      fileName: SETUP_CODE['animation-config'].registerAt,
    },
  },
  {
    title: 'Add cn() as to helpers',
    description:
      'Components are using cn() to combine the classNames, supporting tailwind-merge. All thanks to shadcn for writing this.',
    code: {
      content: SETUP_CODE.utils.code,
      fileName: SETUP_CODE.utils.registerAt,
    },
  },
];

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
          <ResponsiveControl className="grid grid-cols-1 items-start gap-36">
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
      <div className="setup-step-body flex flex-row items-start gap-6">
        <div className="setup-step-body-content-wrapper flex flex-col items-start gap-2 w-[600px] sticky top-12">
          <h3 className="text-xl font-medium">{stepContent.title}</h3>
          <p className="text-white/50 mt-2">{stepContent.description}</p>
        </div>
        {typeof stepContent.code === 'string' ? (
          <CodeBlock>{stepContent.code}</CodeBlock>
        ) : (
          <CodeBlock fileName={stepContent.code?.fileName} hasViewMore>
            {stepContent.code?.content}
          </CodeBlock>
        )}
      </div>
    </div>
  );
});

SetupStepContainer.displayName = 'SetupStepContainer';
