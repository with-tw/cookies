'use client';
import Image from 'next/image';
import { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export interface NavbarLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  responsive?: boolean;
}

export const NavbarLogo = forwardRef<HTMLImageElement, NavbarLogoProps>(
  ({ className, responsive = false, ...args }, ref) => {
    const [hovering, setHovering] = useState<boolean>(false);
    const pathname = usePathname();
    return (
      <div
        className="w-fit h-fit flex flex-row items-center gap-2 hover:brightness-50"
        onMouseEnter={() => {
          if (pathname !== '/') {
            setHovering(true);
          }
        }}
        onMouseLeave={() => {
          if (pathname !== '/') {
            setHovering(false);
          }
        }}>
        <Image
          ref={ref}
          src="/logos/cookies-logo.png"
          alt="cookies-logo"
          width={24}
          height={24}
          {...args}
        />
        {hovering && pathname !== '/' && (
          <motion.span
            key={'go-to-home-text'}
            className="font-medium"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}>
            {'back to home'}
          </motion.span>
        )}
      </div>
    );
  },
);

NavbarLogo.displayName = 'NavbarLogo';
