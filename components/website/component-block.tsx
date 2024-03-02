'use client';
import { cn } from '@/helpers/utils';
import { ReactNode, forwardRef } from 'react';
import { MotionProps, motion } from 'framer-motion';
import Link from 'next/link';

export interface ComponentBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  componentData: {
    name: string;
    description: string;
    path: string;
    render: ReactNode;
  };
  animationThreshold?: number;
}

export const ComponentBlock = forwardRef<HTMLDivElement, ComponentBlockProps>(
  ({ className, componentData, animationThreshold = 1, ...args }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn('component-block w-[340px]', className)}
        {...(args as MotionProps)}
        initial={{
          opacity: 0,
          y: 12 * (animationThreshold + 1),
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}>
        <Link href={componentData.path}>
          <div className="h-[180px] w-full rounded-xl flex flex-row items-center justify-center bg-white/10">
            {componentData.render}
          </div>
          <div className="component-details-wrapper mt-4">
            <p className="font-medium text-lg">{componentData.name}</p>
            <p className="text-white/40">{componentData.description}</p>
          </div>
        </Link>
      </motion.div>
    );
  },
);

ComponentBlock.displayName = 'ComponentBlock';
