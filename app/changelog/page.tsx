import { PageHeader } from "@/components/layouts/page-header"
import { ChangelogContent, ChangelogContentType } from "./logs"
import { ResponsiveControl } from "@/components/layouts/responsive-control"
import Image from "next/image"

export default function Changelog() {
  return <div className="changelog-page">
    <PageHeader>
      <ResponsiveControl>
        <h2 className="font-semibold text-6xl">{'Changelog'}</h2>
      </ResponsiveControl>
    </PageHeader>
    <div className="changelog-updates-container mt-12 relative z-30">
      <ResponsiveControl className="grid grid-cols-1 gap-12">
        {ChangelogContent.reverse().map((changelog: ChangelogContentType, index: number) => {
          return <ChangelogUpdate key={index} {...changelog} />
        })}
      </ResponsiveControl>
    </div>
  </div>
}

function ChangelogUpdate(changelog: ChangelogContentType) {
  return <div className="changelog-update flex flex-row items-start justify-start w-full gap-12 relative">
    <ChangelogBannerTemplate version={changelog.version} />
    <div className="w-auto py-6">
      <h3 className="leading-snug tracking-tighter font-semibold text-2xl">{`Relase v${changelog.version}`}</h3>
      <div className="changelog-features-wrapper mt-6">
        <ul className="changelog-features-list space-y-2">
          {changelog.features.map((feature: string, index: number) => {
            return <li className="list-item list-disc list-inside" key={index}>{feature}</li>
          })}
        </ul>
      </div>
    </div>
  </div>
}

function ChangelogBannerTemplate({ version }: { version: string }) {
  return <div className="changelog-banner flex flex-col items-center justify-center gap-2 select-none cursor-default w-[500px] h-[300px] bg-black/50 rounded-2xl sticky top-12">
    <span className="leading-snug tracking-tight font-semibold text-3xl flex flex-row items-center gap-2">
      <Image
        src="/logos/cookies-logo.png"
        alt="cookies-logo"
        width={42}
        height={42}
        className=""
      />{" "}
      Cookies
    </span>
    <span className="text-white/30">
      {`Release v${version}`}
    </span>
  </div>
}