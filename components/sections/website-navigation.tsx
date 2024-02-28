import Link from 'next/link';
import { ResponsiveGridControl } from '../layouts/responsive-grid-control';
import { NavbarLogo } from '../ui/navbar-logo';
import { Button } from '../ui/button';
import { useState } from 'react';

export default function WebsiteNavigation() {
  return (
    <ResponsiveGridControl>
      <nav className="website-navigation p-4 flex flex-row items-center justify-between">
        <div className="logo-wrapper">
          <Link href={'/'}>
            <NavbarLogo responsive />
          </Link>
        </div>
        <div className="navbar-options flex flex-row items-center justify-end gap-4">
          <Button variant="secondary">See Examples</Button>
          <Button>Start Building</Button>
        </div>
      </nav>
    </ResponsiveGridControl>
  );
}
