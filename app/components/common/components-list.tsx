import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

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
    render: <Button>Button</Button>,
  },
];
