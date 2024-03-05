import { PageHeader } from '@/components/layouts/page-header';
import { ResponsiveControl } from '@/components/layouts/responsive-control';
import { ComponentBlock } from '@/components/website/component-block';
import {
  ComponentListItemType,
  ComponentsList,
} from './common/components-list';

export default function ComponentsPage() {
  return (
    <div className="components-page relative z-50">
      <PageHeader>
        <ResponsiveControl>
          <h2 className="font-semibold text-6xl">{'Components'}</h2>
        </ResponsiveControl>
      </PageHeader>
      <div className="components-list-container mt-12">
        <ResponsiveControl className="grid grid-cols-3 gap-6 gap-y-16 max-xl:grid-cols-2 max-md:grid-cols-1">
          {ComponentsList.map(
            (component: ComponentListItemType, index: number) => {
              return (
                <ComponentBlock
                  key={index}
                  componentData={component}
                  animationThreshold={index}
                />
              );
            },
          )}
        </ResponsiveControl>
      </div>
    </div>
  );
}
