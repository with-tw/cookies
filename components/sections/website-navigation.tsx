import Link from 'next/link';
import { ResponsiveControl } from '../layouts/responsive-control';
import { NavbarLogo } from '../website/navbar-logo';
import { Button } from '../ui/button';

type NavbarOptionType = { path: string; name: string };
const NavbarOptions: NavbarOptionType[] = [
  { path: '/github', name: 'GitHub' },
  { path: '/changelog', name: 'Changelog' },
  { path: '/components', name: 'Components' },
];

export default function WebsiteNavigation() {
  return (
    <nav className="website-navigation py-4 relative z-50">
      <ResponsiveControl className="flex flex-row items-center justify-between">
        <div className="logo-wrapper">
          <Link href={'/'}>
            <NavbarLogo responsive />
          </Link>
        </div>
        <div className="navbar-actions-wrapper flex flex-row items-center justify-end gap-4 max-lg:hidden">
          {NavbarOptions.map((option: NavbarOptionType, index: number) => {
            return (
              <Link key={index} href={option.path}>
                <Button variant="ghost">{option.name}</Button>
              </Link>
            );
          })}
          <Button variant="secondary">Explore Cookies</Button>
          <Link href={'/getting-started'}>
            <Button withArrow>Start Building</Button>
          </Link>
        </div>
      </ResponsiveControl>
    </nav>
  );
}
