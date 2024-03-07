import { PageHeader } from '@/components/layouts/page-header';
import { ResponsiveControl } from '@/components/layouts/responsive-control';
import { ComponentBlock } from '@/components/website/component-block';
import { CookiesList, CookiesListItemType } from './common/cookies-list';

export default function CookiesPage() {
  return (
    <div className="cookies-page relative z-50">
      <PageHeader>
        <ResponsiveControl>
          <h2 className="font-semibold text-6xl">{'Cookies'}</h2>
        </ResponsiveControl>
      </PageHeader>
      <div className="cookies-list-container mt-12">
        <ResponsiveControl className="grid grid-cols-3 gap-6 gap-y-16 max-xl:grid-cols-2 max-md:grid-cols-1">
          {CookiesList.map((component: CookiesListItemType, index: number) => {
            return (
              <ComponentBlock
                key={index}
                componentData={component}
                animationThreshold={index}
              />
            );
          })}
        </ResponsiveControl>
      </div>
    </div>
  );
}
