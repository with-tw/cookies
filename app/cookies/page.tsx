'use client';
import { PageHeader } from '@/components/layouts/page-header';
import { ResponsiveControl } from '@/components/layouts/responsive-control';
import { CookiesList, CookiesListItemType } from './common/cookies-list';
import { useEffect } from 'react';
import posthog from 'posthog-js';
import { CookieBlock } from '@/components/website/cookie-block';

export default function CookiesPage() {
  useEffect(() => {
    posthog.capture('cookies');
  }, []);
  return (
    <div className="cookies-page relative z-50">
      <PageHeader>
        <ResponsiveControl>
          <h2 className="font-semibold text-6xl">{'Cookies'}</h2>
        </ResponsiveControl>
      </PageHeader>
      <div className="cookies-list-container mt-12">
        <ResponsiveControl className="grid grid-cols-3 gap-6 gap-y-16 max-xl:grid-cols-2 max-md:grid-cols-1">
          {CookiesList.map((cookie: CookiesListItemType, index: number) => {
            return (
              <CookieBlock
                key={index}
                cookieData={cookie}
                animationThreshold={index}
              />
            );
          })}
        </ResponsiveControl>
      </div>
    </div>
  );
}
