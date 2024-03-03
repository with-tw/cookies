import { cn } from "@/helpers/utils";
import { forwardRef } from "react";

export interface ComponentManualSetupProps extends React.HTMLAttributes<HTMLDivElement> { }

export const ComponentManualSetup = forwardRef<HTMLDivElement, ComponentManualSetupProps>(
  ({ className, children, ...args }, ref) => {
    return <section ref={ref} className={cn("component-manul-setup", className)} {...args}>
      <h2 className="leading-snug tracking-tighter font-semibold text-2xl">{"Manual Installation"}</h2>
      <div className="mt-6">
        {children}
      </div>
    </section>
  }
)

ComponentManualSetup.displayName = "ComponentManualSetup";