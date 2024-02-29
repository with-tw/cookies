import Link from 'next/link';
import { ResponsiveGridControl } from '../layouts/responsive-grid-control';
import { NavbarLogo } from '../ui/navbar-logo';
import { Button } from '../ui/button';

type NavbarOptionType = { path: string; name: string };
const NavbarOptions: NavbarOptionType[] = [
  { path: '/github', name: 'GitHub' },
  { path: '/cookies', name: 'Explore Cookies' },
  { path: '/components', name: 'Components' },
];

export default function WebsiteNavigation() {
  return (
    <ResponsiveGridControl>
      <nav className="website-navigation p-4 flex flex-row items-center justify-between">
        <div className="logo-wrapper">
          <Link href={'/'}>
            <NavbarLogo responsive />
          </Link>
        </div>
        <div className="navbar-options-wrapper flex flex-row items-center justify-center">
          {/* {NavbarOptions.map((option: NavbarOptionType, index: number) => {
            return <Link key={index} href={option.path}>
              <Button variant="ghost">{option.name}</Button>
            </Link>
          })} */}
        </div>
        <div className="navbar-actions-wrapper flex flex-row items-center justify-end gap-4">
          {NavbarOptions.map((option: NavbarOptionType, index: number) => {
            return (
              <Link key={index} href={option.path}>
                <Button variant="ghost">{option.name}</Button>
              </Link>
            );
          })}
          <Button variant="secondary">See Examples</Button>
          <Button>Start Building</Button>
        </div>
      </nav>
    </ResponsiveGridControl>
  );
}
