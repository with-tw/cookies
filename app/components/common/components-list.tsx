import { ReactNode } from 'react';
import { ButtonDefaultExample } from './examples/button-examples';
import { IconButtonDefaultExample } from './examples/icon-button-examples';
import { InputDefaultExample } from './examples/input-examples';

export type ComponentListItemType = {
  name: string;
  description: string;
  path: string;
  render: ReactNode;
};

export const ComponentsList: ComponentListItemType[] = [
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
];
