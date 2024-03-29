'use client';
import { cn } from '@/helpers/utils';
import { Loader2 } from 'lucide-react';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

export interface ContactInputProps
  extends React.HTMLAttributes<HTMLDivElement> {
  showCountryCodeOptions?: boolean;
  defaultCountryCode?: string;
  withLabel?: string;
  stretch?: boolean;
  isLoading?: boolean;
}

export interface ContactInputTypeareaProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

export const ContactInput = forwardRef<HTMLDivElement, ContactInputProps>(
  (
    {
      className,
      showCountryCodeOptions = false,
      defaultCountryCode = null,
      stretch = false,
      children,
      isLoading = false,
      ...args
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'contact-input w-[360px] bg-neutral-800 pl-2 pr-3 py-3 rounded-lg flex flex-row items-center gap-3',
          stretch && 'w-full',
          isLoading && 'pr-5',
          className,
        )}
        {...args}>
        {defaultCountryCode ? (
          <span className="contact-input-country-code-wrapper text-sm pl-2 pr-4 border-r border-r-neutral-600">
            {showCountryCodeOptions ? <></> : defaultCountryCode}
          </span>
        ) : (
          <></>
        )}
        <div className="contact-input-typearea-wrapper w-full">{children}</div>
        {isLoading ? (
          <motion.span
            className="text-neutral-600"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{ opacity: 1, y: 0 }}>
            <Loader2 className="animate-spin w-4 h-4" />
          </motion.span>
        ) : (
          <></>
        )}
      </div>
    );
  },
);

ContactInput.displayName = 'ContactInput';

export const ContactInputTypearea = forwardRef<
  HTMLInputElement,
  ContactInputTypeareaProps
>(({ className, ...args }, ref) => {
  return (
    <input
      ref={ref}
      type="tel"
      className={cn(
        'contact-input-typearea focus:outline-none w-full bg-transparent placeholder:text-neutral-600 text-neutral-500',
        className,
      )}
      {...args}
    />
  );
});

ContactInputTypearea.displayName = 'ContactInputTypearea';
