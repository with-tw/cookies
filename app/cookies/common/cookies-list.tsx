import { ReactNode } from 'react';
import { AuthenticationFormExample } from './examples/authentication-form-examples';
import { HeroSectionExample } from './examples/hero-section-examples';

export type CookiesListItemType = {
  name: string;
  description: string;
  path: string;
  render: ReactNode;
};

export const CookiesList: CookiesListItemType[] = [
  {
    name: 'Authentication Form',
    description:
      'A simple and clean authentication form example using local components',
    path: '/cookies/authentication-form',
    render: (
      <div className="scale-[40%]">
        <AuthenticationFormExample />
      </div>
    ),
  },
  {
    name: 'Hero Section',
    description: 'A hero section component with consistent styling.',
    path: '/cookies/hero-section',
    render: (
      <div className="scale-[60%]">
        <HeroSectionExample />
      </div>
    ),
  },
];
