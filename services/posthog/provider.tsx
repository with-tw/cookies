'use client';
import { CURRENT_ENVIRONMENT, POSTHOG_HOST, POSTHOG_KEY } from '@/common/env';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { ReactNode } from 'react';

if (typeof window !== 'undefined' && CURRENT_ENVIRONMENT === 'production') {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
  });
}

export function CSPostHogProvider({ children }: { children: ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
