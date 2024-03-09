import { cn } from "@/helpers/utils";
import { forwardRef } from "react";

export interface CookiePreviewProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const CookiePreview = forwardRef<HTMLDivElement, CookiePreviewProps>(
  ({ className, ...args }, ref) => {
    return <div ref={ref} className={cn("flex flex-row items-center justify-center p-12 rounded-2xl bg-white/10 border border-neutral-100/10 shadow-lg", className)} {...args} />
  }
)

CookiePreview.displayName = "CookiePreview";