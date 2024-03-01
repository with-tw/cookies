import { ResponsiveControl } from './responsive-control';

export default function FullPageGridDesign() {
  return (
    <ResponsiveControl>
      <div className="grid-lines-container fixed top-0 w-full flex flex-row justify-between">
        <div className="h-screen w-[1px] bg-neutral-800/80" />
        <div className="h-screen w-[1px] bg-neutral-800/80" />
        <div className="h-screen w-[1px] bg-neutral-800/80" />
        <div className="h-screen w-[1px] bg-neutral-800/80 max-lg:hidden" />
        <div className="h-screen w-[1px] bg-neutral-800/80 max-xl:hidden" />
        <div className="h-screen w-[1px] bg-neutral-800/80 max-xl:hidden" />
      </div>
    </ResponsiveControl>
  );
}
