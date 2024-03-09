'use client';
import { usePathname } from 'next/navigation';
import { CookiesList } from '@/app/cookies/common/cookies-list';

export default function CookiesDocsHeader() {
  const pathname = usePathname();
  const thisComponent = CookiesList.find(
    (component) => component.path === pathname,
  );
  return (
    <header className="py-12 z-30 relative">
      <h1 className="leading-snug tracking-tighter font-semibold text-6xl">
        {thisComponent?.name}
      </h1>
      <p className="text-white/40 text-lg">{thisComponent?.description}</p>
    </header>
  );
}
