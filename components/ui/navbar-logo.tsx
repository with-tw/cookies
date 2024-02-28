'use client';
import Image from 'next/image';
import { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';

export interface NavbarLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  responsive?: boolean;
}

export const NavbarLogo = forwardRef<HTMLImageElement, NavbarLogoProps>(
  ({ className, responsive = false, ...args }, ref) => {
    const [hovering, setHovering] = useState<boolean>(false);
    return (
      <div
        className="w-fit h-fit flex flex-row items-center gap-2 hover:brightness-50"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}>
        <Image
          ref={ref}
          src="/logos/cookies-logo.png"
          alt="cookies-logo"
          width={24}
          height={24}
          {...args}
        />
        {!hovering && (
          <motion.span
            key={'logo-text'}
            className="font-medium"
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}>
            {'cookies'}
          </motion.span>
        )}
        {hovering && (
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
