export type ChangelogContentType = {
  version: string;
  features: string[];
};

export const ChangelogContent: ChangelogContentType[] = [
  {
    version: '0.1',
    features: [
      'Adding design and setup for the landing page',
      'Generator code for updating package/registry',
      'Adding docs for getting started and all components',
    ],
  },
  {
    version: '0.2',
    features: [
      'Added docs and MDX support',
      'Added button components',
      'Has generators in-place to update setup-code to package/registry',
      'Add support for project setup and required dependencies',
      'Configured Posthog for user analysis',
    ],
  },
  {
    version: '0.3',
    features: [
      'Fixing styles and changes in button and docs',
      'Adding IconButton to components',
      'Fix button example with icon in docs',
      '🍪 Adding Input component to package/registry',
      '💄 Add card component to collection <> Docs update',
      '💄 Create switch components for collection',
    ],
  },
];
