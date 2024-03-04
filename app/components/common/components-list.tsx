import { ReactNode } from 'react';
import { ButtonDefaultExample } from './examples/button-examples';
import { IconButtonDefaultExample } from './examples/icon-button-examples';

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
];
