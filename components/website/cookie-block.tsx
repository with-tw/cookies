'use client';
import { cn } from '@/helpers/utils';
import { ReactNode, forwardRef } from 'react';
import { MotionProps, motion } from 'framer-motion';
import Link from 'next/link';
import posthog from 'posthog-js';

export interface CookieBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  cookieData: {
    name: string;
    description: string;
    path: string;
    render: ReactNode;
  };
  animationThreshold?: number;
}

export const CookieBlock = forwardRef<HTMLDivElement, CookieBlockProps>(
  (
    {
      className,
      cookieData: {
        name: cookieName,
        description: cookieDescription,
        path: cookiePath,
        render: cookieRender = null,
      },
      animationThreshold = 1,
      ...args
    },
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn('cookie-block w-[340px]', className)}
        {...(args as MotionProps)}
        initial={{
          opacity: 0,
          y: 12 * (animationThreshold + 1),
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        onClick={() => posthog.capture(cookieName)}>
        <Link href={cookiePath}>
          <div className="h-[200px] w-full rounded-xl flex flex-row items-center justify-center bg-neutral-900 shadow-inner border-neutral-800 select-none">
            {cookieRender}
          </div>
          <div className={cn('cookie-details-wrapper mt-4')}>
            <p className="font-medium text-lg">{cookieName}</p>
            <p className="text-white/40">{cookieDescription}</p>
          </div>
        </Link>
      </motion.div>
    );
  },
);

CookieBlock.displayName = 'CookieBlock';
