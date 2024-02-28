import Link from 'next/link';
import { ResponsiveGridControl } from '../layouts/responsive-grid-control';
import { NavbarLogo } from '../ui/navbar-logo';

export default function WebsiteNavigation() {
  return (
    <ResponsiveGridControl>
      <nav className="website-navigation p-4">
        <div className="logo-wrapper">
          <Link href={'/'}>
            <NavbarLogo responsive />
          </Link>
        </div>
      </nav>
    </ResponsiveGridControl>
  );
}
