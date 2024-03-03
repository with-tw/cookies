export type ChangelogContentType = {
  version: string;
  features: string[];
};

export const ChangelogContent: ChangelogContentType[] = [
  {
    version: '1.0',
    features: [
      'Added initial website design',
      'Added docs and MDX support',
      'Added button components',
      'Has generators in-place to update setup-code to package/registry',
      'Add support for project setup and required dependencies',
      'Configured Posthog for user analysis',
    ],
  },
];
