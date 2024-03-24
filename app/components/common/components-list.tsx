import { ReactNode } from 'react';
import { ButtonDefaultExample } from './examples/button-examples';
import { IconButtonDefaultExample } from './examples/icon-button-examples';
import { InputDefaultExample } from './examples/input-examples';
import { CardExample } from './examples/card-examples';
import { SwitchDefaultExample } from './examples/switch-examples';
import { AccordionDefaultExample } from './examples/accordion-examples';
import { CalloutExample } from './examples/callout-examples';
import { TimelineExample } from './examples/timeline-examples';
import { TabMenuExample } from './examples/tab-menu-examples';
import { SidebarMenuExample } from './examples/sidebar-menu-examples';
import { PillarExample } from './examples/pillar-examples';
import Image from 'next/image';
import { StepperExample } from './examples/stepper-examples';

export type ComponentListItemType = {
  name: string;
  description: string;
  path: string;
  render: ReactNode;
};

export const ComponentsList: ComponentListItemType[] = [
  {
    name: 'Responsive Control',
    description:
      'A layout component to centre screen content for multiple devices, based on tailwind classes.',
    path: '/components/responsive-control',
    render: (
      <div className="responsive-control-banner-wrapper">
        <Image
          src="/media/images/responsive-control-banner.png"
          alt="responsive-control-banner"
          width={560}
          height={300}
          className="rounded-xl"
        />
      </div>
    ),
  },
  {
    name: 'Button',
    description:
      'A framer-motion supported button with size and design variants.',
    path: '/components/button',
    render: <ButtonDefaultExample />,
  },
  {
    name: 'Icon Button',
    description:
      "Similar to button component and it's properties, but for icon-based actions.",
    path: '/components/icon-button',
    render: <IconButtonDefaultExample />,
  },
  {
    name: 'Input',
    description:
      'A subtle and clean input component, with all the native properties.',
    path: '/components/input',
    render: <InputDefaultExample />,
  },
  {
    name: 'Card',
    description:
      'A sleek looking card container with added header and footer layout',
    path: '/components/card',
    render: <CardExample />,
  },
  {
    name: 'Switch',
    description: 'A native working switch component',
    path: '/components/switch',
    render: <SwitchDefaultExample />,
  },
  {
    name: 'Accordion',
    description:
      'Fully functional, accessible and responsive accordion component.',
    path: '/components/accordion',
    render: <AccordionDefaultExample />,
  },
  {
    name: 'Callout',
    description:
      'Callout component with multiple variants covering various use cases.',
    path: '/components/callout',
    render: <CalloutExample />,
  },
  {
    name: 'Tab Menu',
    description: 'A auto-adjustable tab menu component',
    path: '/components/tab-menu',
    render: (
      <div className="scale-[40%]">
        <TabMenuExample />
      </div>
    ),
  },
  {
    name: 'Timeline',
    description:
      'A thoughtful timeline component for your web-apps & landing pages',
    path: '/components/timeline',
    render: (
      <div className="scale-[30%]">
        <TimelineExample />
      </div>
    ),
  },
  {
    name: 'Sidebar Menu',
    description:
      'An auto-adjustable sidebar menu component for side navigations.',
    path: '/components/sidebar-menu',
    render: (
      <div className="scale-[40%]">
        <SidebarMenuExample />
      </div>
    ),
  },
  {
    name: 'Pillar',
    description:
      'Pillar component can be used for listing features, options for landing pages/websites.',
    path: '/components/pillar',
    render: (
      <div className="scale-[50%]">
        <PillarExample />
      </div>
    ),
  },
  {
    name: 'Stepper',
    description:
      'A stepper component with features to show status and active tab',
    path: '/components/stepper',
    render: (
      <div className="scale-[60%]">
        <StepperExample />
      </div>
    ),
  },
];
