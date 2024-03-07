import { ReactNode } from 'react';
import { AuthenticationFormExample } from './examples/authentication-form-example';

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
];
