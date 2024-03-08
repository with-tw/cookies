'use client';
import { SetupSection } from '@/components/sections/setup-section';
import posthog from 'posthog-js';
import { useEffect } from 'react';

export default function GettingStarted() {
  useEffect(() => {
    posthog.capture('project-setup');
  }, []);
  return (
    <div className="getting-started-page">
      <SetupSection />
    </div>
  );
}
