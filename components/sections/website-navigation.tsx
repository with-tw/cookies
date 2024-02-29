import Link from 'next/link';
import { ResponsiveGridControl } from '../layouts/responsive-grid-control';
import { NavbarLogo } from '../ui/navbar-logo';
import { Button } from '../ui/button';

type NavbarOptionType = { path: string; name: string };
const NavbarOptions: NavbarOptionType[] = [
  { path: '/github', name: 'GitHub' },
  { path: '/changelog', name: 'Changelog' },
  { path: '/components', name: 'Components' },
];

export default function WebsiteNavigation() {
  return (
    <nav className="website-navigation py-4">
      <ResponsiveGridControl className="flex flex-row items-center justify-between">
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
          <Button>Explore Cookies</Button>
        </div>
      </ResponsiveGridControl>
    </nav>
  );
}
